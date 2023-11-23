import { EditorManager } from "../../Manager/EditorManager";
import GameMaozi from "./GameMaozi";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Role extends cc.Component {

    @property(cc.Node)
    private maozi_node_front: cc.Node = null;
    @property(cc.Node)
    private maozi_node_side: cc.Node = null;
    @property(cc.SpriteFrame)
    private maozi_img: cc.SpriteFrame[] = [];
    @property(cc.Integer)
    private index: Number = 0;
    @property(cc.Node)
    private xuxian_maozi: cc.Node = null;
    @property(cc.Node)
    private dialog_left: cc.Node = null;
    @property(cc.Node)
    private dialog_right: cc.Node = null;

    private duilieIndex: number = 0;
    private maozi_node: cc.Node = null;

    public init(data) {
        this.duilieIndex = data;
        this.node.zIndex = data;
        this.node.setSiblingIndex(data);
        this.node.active = true;
        this.maozi_node_front.active = false;
        this.maozi_node_side.active = false;
        this.maozi_node_front.removeAllChildren();
        this.maozi_node_side.removeAllChildren();
        this.xuxian_maozi.active = false;
    }

    public showMaozi() {
        let pipiDuilieIndex = EditorManager.editorData.jueseArr.indexOf(2);
        console.log("皮皮在第", pipiDuilieIndex)
        if (EditorManager.editorData.isPaidui) {
            this.maozi_node_front.active = false;
            this.maozi_node_side.active = true;

            this.maozi_node = this.maozi_node_side;
        } else {
            this.maozi_node = this.maozi_node_front;

            this.maozi_node_front.active = true;
            this.maozi_node_side.active = false;
        }
        if (this.index == 2) {
            this.maozi_node_front.active = false;
            this.maozi_node_side.active = false;
            this.xuxian_maozi.active = true;
        }
        if (this.duilieIndex > pipiDuilieIndex) {
            this.maozi_node_front.active = false;
            this.maozi_node_side.active = false;
            this.xuxian_maozi.active = true;
        } else if (this.index != 2) {
            //创建一个新的图片
            let maozi = new cc.Node();
            let maozi_sprite = maozi.addComponent(cc.Sprite);
            maozi_sprite.spriteFrame = this.maozi_img[EditorManager.editorData.maoziArr[this.duilieIndex]];
            if (EditorManager.editorData.maoziArr[this.duilieIndex] != null) {
                maozi.parent = this.maozi_node;
            }
            this.node.getChildByName("maozi").getComponent(GameMaozi).setEnable(false);
        }

    }

    public showDialog(index: number) {
        let dialog = this.dialog_left;
        if (this.duilieIndex >= 2) {
            dialog = this.dialog_right;
        }
        if (EditorManager.editorData.jueseFayanArr[this.duilieIndex] != "") {
            dialog.active = true;
            dialog.getChildByName("text").getComponent(cc.Label).string = EditorManager.editorData.jueseFayanArr[this.duilieIndex];
            dialog.getChildByName("index").getComponent(cc.Label).string = index.toString();
        }
    }

    public getIndex(): Number {
        return this.index;
    }

    // public setDuilieIndex(index: number) {
    //     this.duilieIndex = index;
    // }

    public getDuiliexIndex(): number {
        return this.duilieIndex;
    }

    public getMaoziNode(): cc.Node {
        return this.maozi_node;
    }
}
