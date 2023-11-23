import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { EventType } from "../../Data/EventType";
import EditMaoZiArea from "./EditMaoZiArea";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DragMaozi extends cc.Component {

    @property(cc.Node)
    private rootNode: cc.Node = null;
    @property(cc.Node)
    private gezi: cc.Node = null;
    @property(cc.Integer)
    private index: number = 0;

    private initPos: cc.Vec3 = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

        this.initPos = this.node.position;
    }

    private touchStart(event: cc.Event.EventTouch) {
        let pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        this.node.parent = this.rootNode;
        this.node.position = cc.v3(pos.x, pos.y);
        let pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        ListenerManager.dispatch(EventType.DRAG_MAOZI, pos2);
    }

    private touchMove(event: cc.Event.EventTouch) {
        let pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        this.node.position = cc.v3(pos.x, pos.y);
        let pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        ListenerManager.dispatch(EventType.DRAG_MAOZI, pos2);
    }

    private touchEnd(event: cc.Event.EventTouch) {
        let pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        let pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        this.node.position = cc.v3(pos.x, pos.y);
        let isInRect: boolean = false;
        this.gezi.children.forEach(gezi => {
            if (gezi.getComponent(EditMaoZiArea).isPosInRect(cc.v2(pos2.x, pos2.y))) {
                isInRect = true;
                gezi.getComponent(EditMaoZiArea).fill(this.node);
            }
        });
        if (!isInRect) {
            this.node.parent = this.rootNode;
            this.node.position = this.initPos;
        }
        ListenerManager.dispatch(EventType.DRAG_MAOZI_END);

    }

    public reset() {
        this.node.parent = this.rootNode;
        this.node.position = this.initPos;
    }

    public getIndex(): number {
        return this.index;
    }
}
