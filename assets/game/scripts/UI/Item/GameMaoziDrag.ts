import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { EventType } from "../../Data/EventType";
import GameMaozi from "./GameMaozi";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameMaoziDrag extends cc.Component {

    @property(cc.Node)
    private fillArea: cc.Node[] = [];
    @property(cc.Integer)
    private index: number = 0;

    private initPos: cc.Vec3 = null;
    private initParent: cc.Node = null;

    onLoad() {
        this.initPos = this.node.position;
        this.initParent = this.node.parent;
    }

    private onDragStart(event) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
    }

    private onDragMove(event) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        ListenerManager.dispatch(EventType.GAME_MAOZI_DRAG, pos);
    }

    private onDragEnd(event) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        let isInRect: boolean = false;
        this.fillArea.forEach(gezi => {
            if (gezi.getComponent(GameMaozi).isPosInRect(cc.v2(pos.x, pos.y))) {
                isInRect = true;
                gezi.getComponent(GameMaozi).fill(this.node);
            }
        });
        if (!isInRect) {
            this.node.parent = this.initParent;
            this.node.position = this.initPos;
        }
        ListenerManager.dispatch(EventType.GAME_MAOZI_DRAG_END);
    }

    public reset() {
        this.node.parent = this.initParent;
        this.node.position = this.initPos;
    }

    public getIndex(): number {
        return this.index;
    }
}
