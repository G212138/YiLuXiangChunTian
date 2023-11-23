import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
import { EventType } from "../../Data/EventType";
import { EditorManager } from "../../Manager/EditorManager";
import EditMaoZiArea from "./EditMaoZiArea";
import GameMaozi from "./GameMaozi";
import GameMaoziDrag from "./GameMaoziDrag";
import Role from "./Role";
import { SoundConfig } from "./SoundConfig";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {

    @property(cc.Node)
    private rolePanel: cc.Node = null;
    @property(cc.Node)
    private optionPanel: cc.Node = null;
    @property(cc.Node)
    private btn_check: cc.Node = null;
    @property(cc.Node)
    private options: cc.Node[] = [];
    @property(cc.Label)
    private tigan: cc.Label = null;

    private roleStartX: number = 1900;
    private optionPanelStartY: number = -735;
    private optionPanelEndY: number = -420;

    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.on(EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager.on(EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager.on(EventType.GAME_MAOZI_DRAG_END, this.handleDragEnd, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.off(EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager.off(EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager.off(EventType.GAME_MAOZI_DRAG_END, this.handleDragEnd, this);
    }

    private handleEnterGame() {
        UIHelp.showMask();
        this.initUI();
        this.initAni();
    }

    private resetUI() {
        this.initUI();
        this.unscheduleAllCallbacks();
        cc.Tween.stopAllByTarget(this.rolePanel);
        cc.Tween.stopAllByTarget(this.optionPanel);
        this.rolePanel.x = 0;
        if (EditorManager.editorData.isPaidui) {
            this.setSideIdle();
        } else {
            this.setTurn();
        }
        this.showMaozi();
        this.showDialog();
        this.optionPanel.y = this.optionPanelEndY;
        UIHelp.closeMask();

        for (let i = 0; i < this.options.length; i++) {
            this.options[i].getComponent(GameMaoziDrag).reset();
        }
        let answer = SyncDataManager.getSyncData().customSyncData.answer;
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] != null) {
                let maoziNode = this.rolePanel.children[i].getComponent(Role).getMaoziNode();
                let option = null;
                for (let j = 0; j < this.options.length; j++) {
                    if (this.options[j].name == answer[i]) {
                        option = this.options[j];
                    }
                }
                if (option != null) {

                    maoziNode.active = true;
                    option.parent = maoziNode;
                    option.position = cc.v3(0, 0);
                }
            }
        }
        this.handleDragEnd();
    }

    private initUI() {
        this.tigan.string = EditorManager.editorData.tigan;
        this.tigan.node.parent.active = EditorManager.editorData.tigan.length > 0;
        this.rolePanel.x = this.roleStartX;
        this.optionPanel.y = this.optionPanelStartY;
        this.btn_check.opacity = 0;
        this.setRolePos();
    }

    private setRolePos() {
        for (let j = 0; j < this.rolePanel.childrenCount; j++) {
            this.rolePanel.children[j].active = false;
        }
        for (let i = 0; i < EditorManager.editorData.jueseArr.length; i++) {
            let roleIndex = EditorManager.editorData.jueseArr[i];
            for (let j = 0; j < this.rolePanel.childrenCount; j++) {
                if (this.rolePanel.children[j].getComponent(Role).getIndex() == roleIndex) {
                    this.rolePanel.children[j].getComponent(Role).init(i);
                }
            }
        }
    }

    private initAni() {
        this.setWalk();
        cc.tween(this.rolePanel).to(5.5, { x: 0 }).call(() => {
            if (EditorManager.editorData.isPaidui) {
                this.setSideIdle();
            } else {
                this.setTurn();
            }
            this.scheduleOnce(() => {
                this.showMaozi();
                this.showDialog();
            }, 1)
            cc.tween(this.optionPanel).to(1, { y: this.optionPanelEndY }).call(() => {
                UIHelp.closeMask();
            }).start();
        }).start();

    }

    private setWalk() {
        for (let i = 0; i < this.rolePanel.childrenCount; i++) {
            let role = this.rolePanel.children[i].getChildByName("role");
            if (this.rolePanel.children[i].getComponent(Role).getIndex() == 2) {
                Tools.playSpine(role.getComponent(sp.Skeleton), "walk", true);
            } else {
                Tools.playSpine(role.getComponent(sp.Skeleton), "walk_side", true);
            }
        }
    }

    private setTurn() {
        for (let i = 0; i < this.rolePanel.childrenCount; i++) {
            let role = this.rolePanel.children[i].getChildByName("role");
            Tools.playSpine(role.getComponent(sp.Skeleton), "turn", false, () => {
                Tools.playSpine(role.getComponent(sp.Skeleton), "idle_front", true);
            });
        }
    }

    private setSideIdle() {
        for (let i = 0; i < this.rolePanel.childrenCount; i++) {
            let role = this.rolePanel.children[i].getChildByName("role");
            Tools.playSpine(role.getComponent(sp.Skeleton), "idle_side", true);
        }
    }

    private showMaozi() {
        for (let i = 0; i < this.rolePanel.childrenCount; i++) {
            this.rolePanel.children[i].getComponent(Role).showMaozi();
        }
    }

    private showDialog() {
        let index = 0;
        let delay = 0;
        for (let i = 0; i < this.rolePanel.childrenCount; i++) {
            if (EditorManager.editorData.jueseFayanArr[i] != "") {
                delay++;
                this.scheduleOnce(() => {
                    index++;
                    this.rolePanel.children[i].getComponent(Role).showDialog(index);
                }, 4 - delay);
            }
        }
    }

    private enableCheck = false
    private handleDragEnd() {
        let answer = [null, null, null, null];
        for (let i = 0; i < this.rolePanel.childrenCount; i++) {
            let roleMaozi = this.rolePanel.children[i].getComponent(Role).getMaoziNode();
            if (roleMaozi.childrenCount > 0 && roleMaozi.children[0].getComponent(GameMaoziDrag) && this.rolePanel.children[i].getComponent(Role).getIndex() == 2) {
                this.enableCheck = true;
                this.btn_check.opacity = 255;
            }
            if (roleMaozi.childrenCount > 0 && roleMaozi.children[0].getComponent(GameMaoziDrag)) {
                answer[i] = roleMaozi.children[0].name;
            }
        }
        SyncDataManager.getSyncData().customSyncData.answer = answer;
    }

    private onClickCheck() {
        if (!this.enableCheck) {
            return;
        }
        UIHelp.showMask();
        let isRight = false;
        console.log("EditorManager.editorData.maoziArr", EditorManager.editorData.maoziArr);
        for (let i = 0; i < this.rolePanel.childrenCount; i++) {
            let roleMaozi = this.rolePanel.children[i].getComponent(Role).getMaoziNode();
            if (roleMaozi.childrenCount > 0 && roleMaozi.children[0].getComponent(GameMaoziDrag)) {
                if (this.rolePanel.children[i].getComponent(Role).getIndex() == 2) {
                    if (roleMaozi.children[0].getComponent(GameMaoziDrag).getIndex() == EditorManager.editorData.maoziArr[this.rolePanel.children[i].getComponent(Role).getDuiliexIndex()]) {
                        isRight = true;
                    }
                }
                if (isRight) {
                    if (roleMaozi.children[0].getComponent(GameMaoziDrag).getIndex() != EditorManager.editorData.maoziArr[this.rolePanel.children[i].getComponent(Role).getDuiliexIndex()]) {
                        cc.tween(roleMaozi.children[0])
                            .then(cc.bezierTo(0.3, [cc.v2(0, 0), cc.v2(100, 100), cc.v2(100, -600)]).easing(cc.easeSineOut())).call(() => {
                                roleMaozi.children[0].getComponent(GameMaoziDrag).reset();
                            }).start();
                    }
                } else {
                    if (this.rolePanel.children[i].getComponent(Role).getIndex() == 2) {
                        cc.tween(roleMaozi.children[0])
                            .then(cc.bezierTo(0.3, [cc.v2(0, 0), cc.v2(100, 100), cc.v2(100, -600)]).easing(cc.easeSineOut())).call(() => {
                                roleMaozi.children[0].getComponent(GameMaoziDrag).reset();
                            }).start();
                    }
                }
            }
        }

        if (isRight) {
            this.handleRight();
        } else {
            this.handleWrong();
        }
    }

    private handleRight() {
        ListenerManager.dispatch(EventType.SUBMIT, true);
        SoundManager.playEffect(SoundConfig.soudlist["正确反馈01"], false, false, false);
        for (let i = 0; i < this.rolePanel.childrenCount; i++) {
            if (this.rolePanel.children[i].getComponent(Role).getIndex() == 2) {
                let role = this.rolePanel.children[i].getChildByName("role");
                Tools.playSpine(role.getComponent(sp.Skeleton), "huanhu", true);
            }
        }
        this.scheduleOnce(() => {
            ListenerManager.dispatch(EventType.GAME_OVER);
        }, 2);
    }

    private handleWrong() {
        this.enableCheck = false;
        this.btn_check.opacity = 0;
        ListenerManager.dispatch(EventType.SUBMIT, false);
        SoundManager.playEffect(SoundConfig.soudlist["错误反馈01"], false, false, false, (() => {
            for (let i = 0; i < this.rolePanel.childrenCount; i++) {
                if (this.rolePanel.children[i].getComponent(Role).getIndex() == 2) {
                    let role = this.rolePanel.children[i].getChildByName("role");
                    let aniName = EditorManager.editorData.isPaidui ? "idle_side" : "idle_front";
                    Tools.playSpine(role.getComponent(sp.Skeleton), aniName, true);
                }
            }
            UIHelp.closeMask();
        }));
        for (let i = 0; i < this.rolePanel.childrenCount; i++) {
            if (this.rolePanel.children[i].getComponent(Role).getIndex() == 2) {
                let role = this.rolePanel.children[i].getChildByName("role");
                Tools.playSpine(role.getComponent(sp.Skeleton), "cuowu", true);
            }
        }
    }

}
