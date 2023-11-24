import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { HitTest } from "../../../../frame/scripts/Utils/HitTest";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game_1_Type extends cc.Component {

    @property(cc.Integer)
    private index: number = 0;
    @property(cc.Node)
    private icon: cc.Node[] = [];

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
        [[1, 2], [2, 3], [3, 4], [4, 1], [1, 6], [6, 1], [3, 5], [5, 3]]
    ];

    private selfLineArr: number[][] = [];

    onLoad() {
        this._initPos = this.node.position;
        this.graphics = this.node.getChildByName("dragLine_node").getComponent(cc.Graphics);
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

    private onDragStart(data: any) {
        let pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        this.icon.forEach((item) => {
            if (this.isPosInRect(pos, item) && (this._curPointIndex == null || this._curPointIndex == Number(item.name))) {
                item.getChildByName("icon_check").active = true;
                item.getChildByName("icon_check").scale = 0;
                cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                this._curPointIndex = Number(item.name);
                this._isDrawing = true;
                let linePos = this.node.getChildByName("dragLine_node").convertToNodeSpaceAR(pos);
                this.graphics.moveTo(linePos.x, linePos.y);
                this.graphics.strokeColor = cc.Color.RED;
                this.graphics.fillColor = cc.Color.RED;
                this.graphics.lineWidth = 20;

            }
        });
    }

    private onDragMove(data: any) {
        let pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        let linePos = this.node.getChildByName("dragLine_node").convertToNodeSpaceAR(pos);
        if (this._isDrawing) {
            let startPos = this.icon[3 - 1].position;
            //startPos转为世界坐标
            startPos = this.node.convertToWorldSpaceAR(startPos);
            let startPos2 = this.icon[5 - 1].position;
            startPos2 = this.node.convertToWorldSpaceAR(startPos2);
            if (this.index == 5) {
                this.graphics.lineTo(linePos.x, linePos.y);
                this.graphics.stroke();
            } else {
                this.graphics.clear();
                this.graphics.moveTo(this.icon[this._curPointIndex - 1].position.x, this.icon[this._curPointIndex - 1].position.y);
                this.graphics.lineTo(linePos.x, linePos.y);
                this.graphics.stroke();
            }
        }
        this.icon.forEach((item) => {
            if (this.isPosInRect(pos, item) && (this._curPointIndex != Number(item.name))) {
                if (this.isPointInLine([this._curPointIndex, Number(item.name)], this.lineArr[this.index])) {
                    SoundManager.playEffect("正确音效", false);
                    this.selfLineArr.push([this._curPointIndex, Number(item.name)]);
                    if (this.index != 5) {
                        this.createLine(this.icon[this._curPointIndex - 1].position, this.icon[Number(item.name) - 1].position);
                    }

                    this._curPointIndex = Number(item.name);
                    if (item.getChildByName("icon_check").active == false) {
                        item.getChildByName("icon_check").active = true;
                        item.getChildByName("icon_check").scale = 0;
                        cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                        this._curPointIndex = Number(item.name);
                    }
                }
            } else {
                item.getChildByName("icon_check").active = this._curPointIndex == Number(item.name);
            }
        });
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
        graphics.arc(200, -160, 60, sAngle, eAngle);
        graphics.stroke();
    }

    private onDragEnd(data: any) {
        this._isDrawing = false;
        this.icon.forEach((item) => {
            item.getChildByName("icon_check").active = false;
        });
        let pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        data.target.position = cc.Vec3.ZERO;
        data.target.parent = this.node;
        console.log("onDragEnd", this.selfLineArr);
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
            this.handleWrong();
        }
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
        if (this.index != 5) {
            this.graphics.clear();
        }
    }

    private handleWrong() {
        SoundManager.playEffect("错误音效", false);
        this.node.getChildByName("line_node").removeAllChildren();
        this._curPointIndex = null;
        this.graphics.clear();
        this.selfLineArr = [];
    }

}
