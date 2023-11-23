import { HitTest } from "../../../../frame/scripts/Utils/HitTest";

const {ccclass, property} = cc._decorator;

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
    private lineArr: number[][] = [];

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
                this.graphics.lineWidth = 10;

            }
        });
    }

    private onDragMove(data: any) {        
        let pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        if (this._isDrawing) {
            let linePos = this.node.getChildByName("dragLine_node").convertToNodeSpaceAR(pos);
            this.graphics.lineTo(linePos.x, linePos.y);
            this.graphics.stroke();
        }
        this.icon.forEach((item) => {
            if (this.isPosInRect(pos, item) && (this._curPointIndex != Number(item.name))) {
                console.log("画线成功");
                let lineArr = [this._curPointIndex, Number(item.name)];
                if (this.lineArr.length > 0) {
                    let isExist = false;
                    this.lineArr.forEach((item) => {
                        if (item[0] == lineArr[0] && item[1] == lineArr[1]) {
                            isExist = true;
                        }
                    });
                    if (!isExist) {
                        this.lineArr.push(lineArr);
                    }
                } else {
                    this.lineArr.push(lineArr);
                }
                this._curPointIndex = Number(item.name);    
                if (item.getChildByName("icon_check").active == false) {
                    item.getChildByName("icon_check").active = true;
                    item.getChildByName("icon_check").scale = 0;
                    cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                    this._curPointIndex = Number(item.name);
                }                
            } else {
                item.getChildByName("icon_check").active = false;
            }
        });
    }

    private onDragEnd(data: any) {
        this._isDrawing = false;
        this.icon.forEach((item) => {
            item.getChildByName("icon_check").active = false;
        });
        let pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        data.target.position = cc.Vec3.ZERO;
        data.target.parent = this.node;
        console.log("onDragEnd", this.lineArr);
    }

    private isPosInRect(pos: cc.Vec2, point: cc.Node): boolean {
        return HitTest.posInRect(new cc.Vec2(pos.x, pos.y), point);
    }


}
