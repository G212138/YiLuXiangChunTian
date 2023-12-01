import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { EventType } from "../../Data/EventType";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Game_2_type extends cc.Component {

    @property(cc.Integer)
    private index: number = 0;
    @property(cc.Node)
    private icon: cc.Node[] = [];
    @property(cc.Boolean)
    private isCanLine: boolean = false;
    @property(cc.Sprite)
    private btn_yes: cc.Sprite = null;
    @property(cc.Sprite)
    private btn_no: cc.Sprite = null;
    @property(cc.SpriteFrame)
    private btn_yes_img: cc.SpriteFrame[] = [];
    @property(cc.SpriteFrame)
    private btn_no_img: cc.SpriteFrame[] = [];

    private _isCurrent: boolean = false;
    private _curPointIndex: number = null;
    private graphics: cc.Graphics = null;
    private _isDrawing: boolean = false;

    private lineArr: number[][][] = [
        [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 1], [2, 8], [2, 6], [4, 6]],
        [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 1], [1, 10], [1, 15]
            , [2, 10], [2, 11], [4, 11], [4, 12], [6, 12], [6, 13], [7, 13], [7, 14], [9, 14], [9, 15], [10, 15], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15]],
        [[1, 2], [2, 3], [3, 4], [4, 5], [5, 1], [1, 4], [2, 4]],
        [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 1], [2, 4], [4, 6], [6, 8], [8, 2]],
        [],
    ];
    private selfLineArr: number[][] = [];
    private hasChoose: boolean = false;

    onLoad() {
        this.graphics = this.node.getChildByName("dragLine_node").getComponent(cc.Graphics);
        ListenerManager.on(EventType.GAME_RECONNECT, this.handleReConnect, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.GAME_RECONNECT, this.handleReConnect, this);
    }

    private handleReConnect() {
        this._curPointIndex = SyncDataManager.getSyncData().customSyncData.level_2_curPointIndex[this.index];
        this.selfLineArr = SyncDataManager.getSyncData().customSyncData.level_2_selfData[this.index];
        this.hasChoose = SyncDataManager.getSyncData().customSyncData.level_2_hasChoose[this.index];
        if (this.hasChoose) {
            this.handleShow();
        } else {
            this.node.getChildByName("touch_mask").active = false;
            this.node.getChildByName("game_node").active = false;
        }
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
        let btn_yes_state = SyncDataManager.getSyncData().customSyncData.level_2_yes_btn[this.index];
        let btn_no_state = SyncDataManager.getSyncData().customSyncData.level_2_no_btn[this.index];
        this.btn_yes.spriteFrame = this.btn_yes_img[btn_yes_state];
        this.btn_no.spriteFrame = this.btn_no_img[btn_no_state];
    }


    private onClickYes() {
        if (this.hasChoose) return;
        if (this.isCanLine) {
            SoundManager.playEffect("正确音效", false);
            this.hasChoose = true;
            SyncDataManager.getSyncData().customSyncData.level_2_hasChoose[this.index] = true;
            this.handleShow();
            this.btn_yes.spriteFrame = this.btn_yes_img[1];
            SyncDataManager.getSyncData().customSyncData.level_2_yes_btn[this.index] = 1;
        } else {
            SoundManager.playEffect("错误音效", false);
            this.btn_yes.spriteFrame = this.btn_yes_img[2];
            SyncDataManager.getSyncData().customSyncData.level_2_yes_btn[this.index] = 2;
        }
    }

    private onClickNo() {
        if (this.hasChoose) return;
        if (this.isCanLine) {
            SoundManager.playEffect("错误音效", false);
            this.btn_no.spriteFrame = this.btn_no_img[2];
            SyncDataManager.getSyncData().customSyncData.level_2_no_btn[this.index] = 2;
        } else {
            SoundManager.playEffect("正确音效", false);
            this.hasChoose = true;
            SyncDataManager.getSyncData().customSyncData.level_2_hasChoose[this.index] = true;
            this.handleShow();
            this.btn_no.spriteFrame = this.btn_no_img[1];
            SyncDataManager.getSyncData().customSyncData.level_2_no_btn[this.index] = 1;
        }
    }

    private onClickReset() {
        SoundManager.playEffect("点击音效", false);
        this.node.getChildByName("line_node").removeAllChildren();
        this._curPointIndex = null;
        SyncDataManager.getSyncData().customSyncData.level_2_curPointIndex[this.index] = this._curPointIndex;
        this.graphics.clear();
        this.selfLineArr = [];
        SyncDataManager.getSyncData().customSyncData.level_2_selfData[this.index] = this.selfLineArr;
        this.node.getChildByName("btn_return").active = false;
    }

    private handleShow() {
        if (this.isCanLine) {
            this.node.getChildByName("touch_mask").active = true;
            this.node.getChildByName("game_node").active = true;
        }
    }

    private onDragStart(data: any) {
        let pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        this.icon.forEach((item) => {
            if (this.isPosInRect(pos, item) && (this._curPointIndex == null || this._curPointIndex == Number(item.name))) {
                item.getChildByName("icon_check").active = true;
                item.getChildByName("icon_check").scale = 0;
                cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                this._curPointIndex = Number(item.name);
                SyncDataManager.getSyncData().customSyncData.level_2_curPointIndex[this.index] = this._curPointIndex;
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
                    SyncDataManager.getSyncData().customSyncData.level_2_selfData[this.index] = this.selfLineArr;
                    this.createLine(this.icon[this._curPointIndex - 1].position, this.icon[Number(item.name) - 1].position);

                    this._curPointIndex = Number(item.name);
                    SyncDataManager.getSyncData().customSyncData.level_2_curPointIndex[this.index] = this._curPointIndex;
                    if (item.getChildByName("icon_check").active == false) {
                        item.getChildByName("icon_check").active = true;
                        item.getChildByName("icon_check").scale = 0;
                        cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                        this._curPointIndex = Number(item.name);
                        SyncDataManager.getSyncData().customSyncData.level_2_curPointIndex[this.index] = this._curPointIndex;
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
        this.node.getChildByName("btn_return").active = this.selfLineArr.length > 0;
        SyncDataManager.getSyncData().customSyncData.level_2_selfData[this.index] = this.selfLineArr;
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

    private handleWrong() {
        SoundManager.playEffect("错误音效", false);
        this.node.getChildByName("line_node").removeAllChildren();
        this._curPointIndex = null;
        SyncDataManager.getSyncData().customSyncData.level_2_curPointIndex[this.index] = this._curPointIndex;
        this.graphics.clear();
        this.selfLineArr = [];
        SyncDataManager.getSyncData().customSyncData.level_2_selfData[this.index] = this.selfLineArr;
    }
}
