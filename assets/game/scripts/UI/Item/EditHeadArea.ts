import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { HitTest } from "../../../../frame/scripts/Utils/HitTest";
import { EventType } from "../../Data/EventType";
import DragHead from "./DragHead";


const {ccclass, property} = cc._decorator;

@ccclass
export default class EditHeadArea extends cc.Component {
    @property(cc.Integer)
    private index: number = 0;

    onLoad() {
        ListenerManager.on(EventType.DRAG_HEAD, this.onDragHead, this);
    }
    
    onDestroy() {
        ListenerManager.off(EventType.DRAG_HEAD, this.onDragHead, this);
    }

    private onDragHead(pos: cc.Vec2) {
        if (HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
            this.node.color = new cc.Color(255, 215, 0);
        } else {
            this.node.color = cc.Color.WHITE;
        }
    }

    public isPosInRect(pos: cc.Vec2): boolean {
        return HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node);
    }

    public fill(item: cc.Node) {
        if (this.node.childrenCount > 0) {
            this.node.children[0].getComponent(DragHead).reset();
        }
        this.node.color = cc.Color.WHITE;
        item.parent = this.node;
        item.position = cc.v3(0, 0);
    }
}
