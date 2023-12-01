import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
import { EventType } from "../../Data/EventType";
import { EditorManager } from "../../Manager/EditorManager";
import Game_3 from "./Gaem_3";
import Game_1 from "./Game_1";
import Game_2 from "./Game_2";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {

    @property(cc.Node)
    private game_1: cc.Node = null;
    @property(cc.Node)
    private game_2: cc.Node = null;
    @property(cc.Node)
    private game_3: cc.Node = null;

    private gameIndex = 0;
    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.on(EventType.GAME_RECONNECT, this.handleReConnect, this);
        ListenerManager.on(EventType.GAME_REPLAY, this.handleEnterGame, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.off(EventType.GAME_RECONNECT, this.handleReConnect, this);
        ListenerManager.off(EventType.GAME_REPLAY, this.handleEnterGame, this);
    }

    private handleEnterGame() {
        UIHelp.showMask();
        this.initUI();
    }

    private resetUI() {
        this.initUI();
        this.unscheduleAllCallbacks();        
    }

    private handleReConnect() {
        this.gameIndex = EditorManager.editorData.gameIndex;
        if (this.gameIndex === 0) {
            this.game_1.active = true;
            this.game_2.active = false;
            this.game_3.active = false;
            this.game_1.getComponent(Game_1).reconnect();
        } else if (this.gameIndex === 1) {
            this.game_1.active = false;
            this.game_2.active = true;
            this.game_3.active = false;
            this.game_2.getComponent(Game_2).reconnect();
        } else {
            this.game_1.active = false;
            this.game_2.active = false;
            this.game_3.active = true;
            this.game_3.getComponent(Game_3).reconnect();
        }
    }

    private initUI() {
        this.gameIndex = EditorManager.editorData.gameIndex;
        if (this.gameIndex === 0) {
            this.game_1.active = true;
            this.game_2.active = false;
            this.game_3.active = false;
            this.game_1.getComponent(Game_1).initGame();
        } else if (this.gameIndex === 1) {
            this.game_1.active = false;
            this.game_2.active = true;
            this.game_3.active = false;
            this.game_2.getComponent(Game_2).initGame();
        } else {
            this.game_1.active = false;
            this.game_2.active = false;
            this.game_3.active = true;
            this.game_3.getComponent(Game_3).initGame();
        }
    }
}
