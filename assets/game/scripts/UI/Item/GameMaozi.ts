import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { HitTest } from "../../../../frame/scripts/Utils/HitTest";
import { EventType } from "../../Data/EventType";
import GameMaoziDrag from "./GameMaoziDrag";
import Role from "./Role";
import { SoundConfig } from "./SoundConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameMaozi extends cc.Component {

    private enable: boolean = true;

    onLoad() {
        ListenerManager.on(EventType.GAME_MAOZI_DRAG, this.onDragMaozi, this);
    }
    onDestroy() {
        ListenerManager.off(EventType.GAME_MAOZI_DRAG, this.onDragMaozi, this);
    }

    private onDragMaozi(pos: cc.Vec2) {
        if (!this.enable) {
            return;
        }
        // if (this.node.parent.getComponent(Role).getMaoziNode().childrenCount == 0) {
        //     this.node.active = true;
        // }
        if (HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
            this.node.scale = 1.7;
        } else {
            this.node.scale = 1.5;
        }
    }

    public isPosInRect(pos: cc.Vec2): boolean {
        if (this.node.active == false) { 
            return false;
        }
        return HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node);
    }

    public fill(item: cc.Node) {
        SoundManager.playEffect(SoundConfig.soudlist["放置音效"], false, false,false);
        if (this.node.parent.getComponent(Role).getMaoziNode().childrenCount > 0) {
            this.node.parent.getComponent(Role).getMaoziNode().children[0].getComponent(GameMaoziDrag).reset();
        }
        item.parent = this.node.parent.getComponent(Role).getMaoziNode();
        item.position = cc.v3(0, 0);       
        this.node.parent.getComponent(Role).getMaoziNode().active = true;
        this.node.scale = 1.5;
        // this.node.active = false;
    }

    public setEnable(enable: boolean) {
        this.enable = enable
    }
}
