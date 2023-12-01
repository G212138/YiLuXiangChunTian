import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { HitTest } from "../../../../frame/scripts/Utils/HitTest";
import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
import { EventType } from "../../Data/EventType";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game_1_Type extends cc.Component {

    @property(cc.Integer)
    private index: number = 0;
    @property(cc.Node)
    private icon: cc.Node[] = [];

    @property(cc.Node)
    private pipi: cc.Node = null;

    private _initPos: cc.Vec3 = null;
    private _isCurrent: boolean = false;
    private _curPointIndex: number = null;
    private graphics: cc.Graphics = null;
    private _isDrawing: boolean = false;

    private lineArr: number[][][] = [
        [[1, 2], [2, 3], [3, 4], [4, 1]],
        [[1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [6, 7], [7, 8], [7, 3], [7, 1]],
        [[1, 2], [2, 3], [3, 4], [4, 5], [5, 3], [3, 1]],
        [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1], [6, 3]],
        [[1, 2], [2, 3], [3, 4], [4, 5], [5, 2], [2, 4]],
        [[1, 2], [2, 3], [3, 4], [4, 1], [3, 5], [5, 6], [6, 3], [1, 7], [7, 8], [8, 1]]
    ];

    private selfLineArr: number[][] = [];

    onDestroy() {
        ListenerManager.off(EventType.GAME_RECONNECT, this.handleReConnect, this);
    }

    onLoad() {
        this._initPos = this.node.position;
        this.graphics = this.node.getChildByName("dragLine_node").getComponent(cc.Graphics);
        ListenerManager.on(EventType.GAME_RECONNECT, this.handleReConnect, this);
        
    }

    private handleReConnect() {
        this._curPointIndex = SyncDataManager.getSyncData().customSyncData.level_1_curPointIndex[this.index];
        this.selfLineArr = SyncDataManager.getSyncData().customSyncData.level_1_selfData[this.index];

        if (SyncDataManager.getSyncData().customSyncData.level_1_finish[this.index]) {
            for (let i = 0; i < this.selfLineArr.length; i++) {
                this.createGreenLine(this.icon[this.selfLineArr[i][0] - 1].position, this.icon[this.selfLineArr[i][1] - 1].position);
            }
        } else {
            for (let i = 0; i < this.selfLineArr.length; i++) {
                this.createLine(this.icon[this.selfLineArr[i][0] - 1].position, this.icon[this.selfLineArr[i][1] - 1].position);
            }
        }
        this.node.getChildByName("btn_return").active = this.selfLineArr.length > 0;
    }

    public setIsCurrent(value: boolean) {
        this._isCurrent = value;
        this.node.getChildByName("highLight").active = value;
    }

    public getIsCurrent(): boolean {
        return this._isCurrent;
    }

    public getIndex(): number {
        return this.index;
    }
    
    private onClickReset() {
        SoundManager.playEffect("点击音效", false);
        this.node.getChildByName("line_node").removeAllChildren();
        this._curPointIndex = null;
        SyncDataManager.getSyncData().customSyncData.level_1_curPointIndex[this.index] = this._curPointIndex;
        this.graphics.clear();
        this.selfLineArr = [];
        SyncDataManager.getSyncData().customSyncData.level_1_selfData[this.index] = [];
        this.node.getChildByName("btn_return").active = false;
        SyncDataManager.getSyncData().customSyncData.level_1_finish[this.index] = false;
    }

    private onDragStart(data: any) {
        let pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        this.icon.forEach((item) => {
            if (this.isPosInRect(pos, item) && (this._curPointIndex == null || this._curPointIndex == Number(item.name))) {
                item.getChildByName("icon_check").active = true;
                item.getChildByName("icon_check").scale = 0;
                cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                this._curPointIndex = Number(item.name);
                SyncDataManager.getSyncData().customSyncData.level_1_curPointIndex[this.index] = this._curPointIndex;
                this._isDrawing = true;
                let linePos = this.node.getChildByName("dragLine_node").convertToNodeSpaceAR(pos);
                this.graphics.moveTo(linePos.x, linePos.y);
                this.graphics.strokeColor = cc.Color.RED;
                this.graphics.fillColor = cc.Color.RED;
                this.graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
                this.graphics.lineCap = cc.Graphics.LineCap.ROUND;
                this.graphics.lineWidth = 20;
            }
        });
    }

    private onDragMove(data: any) {
        let pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        let linePos = this.node.getChildByName("dragLine_node").convertToNodeSpaceAR(pos);
        if (this._isDrawing) {
            this.graphics.clear();
            this.graphics.moveTo(this.icon[this._curPointIndex - 1].position.x, this.icon[this._curPointIndex - 1].position.y);
            this.graphics.lineTo(linePos.x, linePos.y);
            this.graphics.stroke();
        }
        this.icon.forEach((item) => {
            if (this.isPosInRect(pos, item) && (this._curPointIndex != Number(item.name))) {
                if (this.isPointInLine([this._curPointIndex, Number(item.name)], this.lineArr[this.index])) {
                    SoundManager.playEffect("正确音效", false);
                    this.selfLineArr.push([this._curPointIndex, Number(item.name)]);
                    SyncDataManager.getSyncData().customSyncData.level_1_selfData[this.index] = this.selfLineArr;
                    if (this.index == 5 && this._curPointIndex == 3 && Number(item.name) == 5) {
                        this.drawArcLine1(0.75 * Math.PI, 0);
                    } else if (this.index == 5 && this._curPointIndex == 5 && Number(item.name) == 6) {
                        this.drawArcLine1(0, 1.5 * Math.PI);
                    } else if (this.index == 5 && this._curPointIndex == 6 && Number(item.name) == 3) {
                        this.drawArcLine1(1.5 * Math.PI,0.75 * Math.PI);
                    } else if (this.index == 5 && this._curPointIndex == 3 && Number(item.name) == 6) {
                        this.drawArcLine1(1.5 * Math.PI,0.75 * Math.PI);
                    } else if (this.index == 5 && this._curPointIndex == 6 && Number(item.name) == 5) {
                        this.drawArcLine1(0, 1.5 * Math.PI);
                    } else if (this.index == 5 && this._curPointIndex == 5 && Number(item.name) == 3) {
                        this.drawArcLine1(0.75 * Math.PI, 0);
                    }
                     else if (this.index == 5 && this._curPointIndex == 1 && Number(item.name) == 7) {
                        this.drawArcLine2(1.75 * Math.PI, Math.PI);
                    } else if (this.index == 5 && this._curPointIndex == 7 && Number(item.name) == 1) {
                        this.drawArcLine2(1.75 * Math.PI, Math.PI);
                    } else if (this.index == 5 && this._curPointIndex == 7 && Number(item.name) == 8) {
                        this.drawArcLine2(1 *Math.PI, 0.5 *Math.PI);
                    } else if (this.index == 5 && this._curPointIndex == 8 && Number(item.name) == 7) {
                        this.drawArcLine2(1 *Math.PI, 0.5 *Math.PI);
                    } else if (this.index == 5 && this._curPointIndex == 1 && Number(item.name) == 8) {
                        this.drawArcLine2(0.5 * Math.PI, 1.75 * Math.PI);
                    } else if (this.index == 5 && this._curPointIndex == 8 && Number(item.name) == 1) {
                        this.drawArcLine2(0.5 * Math.PI, 1.75 * Math.PI);
                    }
                    else {
                        this.createLine(this.icon[this._curPointIndex - 1].position, this.icon[Number(item.name) - 1].position);
                    }                    

                    this._curPointIndex = Number(item.name);
                    SyncDataManager.getSyncData().customSyncData.level_1_curPointIndex[this.index] = this._curPointIndex;
                    if (item.getChildByName("icon_check").active == false) {
                        item.getChildByName("icon_check").active = true;
                        item.getChildByName("icon_check").scale = 0;
                        cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                        this._curPointIndex = Number(item.name);
                        SyncDataManager.getSyncData().customSyncData.level_1_curPointIndex[this.index] = this._curPointIndex;
                    }
                }
            } else {
                item.getChildByName("icon_check").active = this._curPointIndex == Number(item.name);
            }
        });
    }

    private onDragEnd(data: any) {
        this._isDrawing = false;
        this.graphics.clear();
        this.icon.forEach((item) => {
            item.getChildByName("icon_check").active = false;
        });
        let pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        data.target.position = cc.Vec3.ZERO;
        data.target.parent = this.node;
        let cueLevelLineArr = this.lineArr[this.index];
        //判断selfLineArr是否跟cueLevelLineArr相等，不考虑数组的顺序及子数组的顺序
        let isSame = true;
        if (this.selfLineArr.length == cueLevelLineArr.length) {
            for (let i = 0; i < this.selfLineArr.length; i++) {
                let isAllIn = false;
                for (let j = 0; j < this.selfLineArr[i].length; j++) {
                    if (this.isPointInLine(this.selfLineArr[i], cueLevelLineArr)) {
                        isAllIn = true;
                        break;
                    }
                    let temp = this.selfLineArr[i][0];
                    this.selfLineArr[i][0] = this.selfLineArr[i][1];
                    this.selfLineArr[i][1] = temp;
                    if (this.isPointInLine(this.selfLineArr[i], cueLevelLineArr)) {
                        isAllIn = true;
                        break;
                    }
                }
                if (!isAllIn) {
                    isSame = false;
                    break;
                }
            }
        } else {
            isSame = false;
        }
        if (isSame) {
            console.log("答案正确");
            this.handleTrue();
        } else {
            console.log("答案错误");
            // this.handleWrong();
        }
        SyncDataManager.getSyncData().customSyncData.level_1_selfData[this.index] = this.selfLineArr;
        this.node.getChildByName("btn_return").active = this.selfLineArr.length > 0;
    }

    //判断点组在不在线组里，不考虑顺序
    private isPointInLine(pointArr: number[], lineArr: number[][]): boolean {
        let isPointInLine = false;
        for (let i = 0; i < lineArr.length; i++) {
            if (lineArr[i].length == pointArr.length) {
                let isAllIn = true;
                for (let j = 0; j < pointArr.length; j++) {
                    if (lineArr[i].indexOf(pointArr[j]) == -1) {
                        isAllIn = false;
                        break;
                    }
                }
                if (isAllIn) {
                    isPointInLine = true;
                    break;
                }
            }
        }
        return isPointInLine;
    }

    private createLine(startPos: cc.Vec3, endPos: cc.Vec3) {
        let lineNode = new cc.Node();
        lineNode.addComponent(cc.Graphics);
        lineNode.parent = this.node.getChildByName("line_node");
        let graphics = lineNode.getComponent(cc.Graphics);
        graphics.strokeColor = cc.Color.RED;
        graphics.fillColor = cc.Color.RED;
        graphics.lineWidth = 20;
        graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        graphics.lineCap = cc.Graphics.LineCap.ROUND;
        graphics.moveTo(startPos.x, startPos.y);
        graphics.lineTo(endPos.x, endPos.y);
        graphics.stroke();
    }

    //画弧线
    private drawArcLine1(sAngle: number, eAngle: number) {
        let lineNode = new cc.Node();
        lineNode.addComponent(cc.Graphics);
        lineNode.parent = this.node.getChildByName("line_node");
        let graphics = lineNode.getComponent(cc.Graphics);
        graphics.strokeColor = cc.Color.RED;
        graphics.fillColor = cc.Color.RED;
        graphics.lineWidth = 20;
        graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        graphics.lineCap = cc.Graphics.LineCap.ROUND;
        graphics.arc(200, -160, 58, sAngle, eAngle);
        graphics.stroke();
    }

    private drawArcLine2(sAngle: number, eAngle: number) {
        let lineNode = new cc.Node();
        lineNode.addComponent(cc.Graphics);
        lineNode.parent = this.node.getChildByName("line_node");
        let graphics = lineNode.getComponent(cc.Graphics);
        graphics.strokeColor = cc.Color.RED;
        graphics.fillColor = cc.Color.RED;
        graphics.lineWidth = 20;
        graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        graphics.lineCap = cc.Graphics.LineCap.ROUND;
        graphics.arc(-248, 183, 58, sAngle, eAngle);
        graphics.stroke();
    }

    private isPosInRect(pos: cc.Vec2, point: cc.Node): boolean {
        return this.posInRect(new cc.Vec2(pos.x, pos.y), point);
    }

    private posInRect(pos: cc.Vec2, rect: cc.Node): boolean {
        let p = rect.parent.convertToWorldSpaceAR(rect.position);
        let lb = cc.v2(p.x - rect.width * rect.scale / 2, p.y - rect.height * rect.scale / 2);
        let rt = cc.v2(p.x + rect.width * rect.scale / 2, p.y + rect.height * rect.scale / 2);
        let b = pos.x >= lb.x && pos.y >= lb.y && pos.x <= rt.x && pos.y <= rt.y;
        return b;
    }

    private handleTrue() {
        SoundManager.playEffect("正确反馈01", false);
        this.node.getChildByName("line_node").removeAllChildren();
        for (let i = 0; i < this.selfLineArr.length; i++) {
            this.createGreenLine(this.icon[this.selfLineArr[i][0] - 1].position, this.icon[this.selfLineArr[i][1] - 1].position);
        }
        SyncDataManager.getSyncData().customSyncData.level_1_finish[this.index] = true;
        // UIHelp.showMask();
        // this.trueEffect();
    }    
    private createGreenLine(startPos: cc.Vec3, endPos: cc.Vec3) {
        let lineNode = new cc.Node();
        lineNode.addComponent(cc.Graphics);
        lineNode.parent = this.node.getChildByName("line_node");
        let graphics = lineNode.getComponent(cc.Graphics);
        graphics.strokeColor = cc.Color.GREEN;
        graphics.fillColor = cc.Color.GREEN;
        graphics.lineWidth = 20;
        graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        graphics.lineCap = cc.Graphics.LineCap.ROUND;
        graphics.moveTo(startPos.x, startPos.y);
        graphics.lineTo(endPos.x, endPos.y);
        graphics.stroke();
    }

    private trueEffect() {
        // this.pipi["dir"] = cc.v2(-1, 0);
        let pos1 = this.pipi.parent.convertToNodeSpaceAR(this.getPosintionByIndex(this.selfLineArr[0][0]))
        let pos2 = this.pipi.parent.convertToNodeSpaceAR(this.getPosintionByIndex(this.selfLineArr[0][1]))        
        this.pipi.setPosition(pos1);
        this.pipi.angle = -this.getAngleByPos(pos1, pos2);
        // this.pipiAngel(pos1);
        let  tween = cc.tween(this.pipi).call(()=>{this.pipi.angle = -this.getAngleByPos(pos1, pos2)})
       
        for (let index = 0; index < this.selfLineArr.length; index++) {
            let _pos1 = this.pipi.parent.convertToNodeSpaceAR(this.getPosintionByIndex(this.selfLineArr[index][0]))
            let _pos2 = this.pipi.parent.convertToNodeSpaceAR(this.getPosintionByIndex(this.selfLineArr[index][1]))
            tween.to(1, {x: _pos2.x, y: _pos2.y})
            if(index+1 < this.selfLineArr.length){
                tween.call(()=>{
                    this.pipi.angle = -this.getAngleByPos(_pos1, _pos2);
                })
            }           
        }

        tween.start();
    }

    //根据两点坐标计算角度
    private getAngleByPos(pos1: cc.Vec2, pos2: cc.Vec2): number {
        let dir = pos1.sub(pos2);
        let angle = Math.atan2(dir.y, dir.x) * 360 / Math.PI;
        return angle;
    }

    private getPosintionByIndex(index: number) {
        return this.icon[index-1].convertToWorldSpaceAR(cc.v2(0, 0));
    }

    private handleWrong() {
        SoundManager.playEffect("错误音效", false);
        this.node.getChildByName("line_node").removeAllChildren();
        this._curPointIndex = null;
        SyncDataManager.getSyncData().customSyncData.level_1_curPointIndex[this.index] = this._curPointIndex;
        this.graphics.clear();
        this.selfLineArr = [];
    }

    /**
     * 
     * @param DirA 向量A
     * @param DirB 向量B
     * @returns 
     */

    public  getAngle (DirA, DirB){
        const dot = DirA.x  * DirB.x  + DirA.y * DirB.y
        const det = DirA.x  * DirB.y - DirA.y * DirB.x 
        const angle = Math.atan2(det, dot) / Math.PI * 180
        return (angle + 360) % 360
    }

    /**
     * @abstract x,y
     * @param pointA 点A
     * @param pointB 点B
     * @param angle 角度
     * @returns C点
     */
    public getPointByLockLineAngle(pointA, pointB,angle:number) {
        let A = cc.v2(pointA.x,pointA.y);
        let B = cc.v2(pointB.x,pointB.y);
        let radian:number = angle * Math.PI / 180; 
        let bevel:number = (A.sub(B).len())
        let xMargin:number = Math.cos(radian) * bevel;
        let yMargin:number = Math.sin(radian) * bevel;

        return cc.v2(pointA.x + xMargin,pointA.y + yMargin)
    }

}
