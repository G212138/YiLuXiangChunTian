import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Game_3 extends cc.Component {

    public initGame() {
        UIHelp.closeMask();
    }

    public reconnect() {

    }
}
