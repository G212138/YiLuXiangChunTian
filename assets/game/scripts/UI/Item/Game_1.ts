import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
import Game_1_Type from "./Game_1_Type";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Game_1 extends cc.Component {

    public initGame() {
        this.node.getChildByName('paizi_1').opacity = 255;
        this.node.getChildByName('paizi_2').opacity = 0;
        this.node.getChildByName('right_panel').active = false;
        this.initEffect();
    }

    private initEffect() {
        let ditu_panel = this.node.getChildByName('ditu_panel');
        ditu_panel.active = true;
        for (let i = 0; i < ditu_panel.childrenCount; i++) {
            ditu_panel.children[i].scale = 0;
            ditu_panel.children[i].getChildByName("highLight").active = false;
            ditu_panel.children[i].getChildByName("game_node").active = false;
            ditu_panel.children[i].getChildByName("touch_mask").active = false;
        }
        //所有子节点逐个出现
        for (let i = 0; i < ditu_panel.childrenCount; i++) {
            let node = ditu_panel.children[i];
            cc.tween(node).delay(i * 0.2).to(0.3, { scale: 1 }, { easing: 'backOut' }).start();
        }
        this.scheduleOnce(() => {
            for (let i = 0; i < ditu_panel.childrenCount; i++) {
                let node = ditu_panel.children[i];
                node.getChildByName("highLight").color = cc.Color.WHITE;
                node.getChildByName("highLight").active = true;
            }
            UIHelp.closeMask();
        }, 0.2 * ditu_panel.childrenCount);
    }

    private onClickMap(data: any) {
        UIHelp.showMask();
        let paizi_1 = this.node.getChildByName('paizi_1');
        let paizi_2 = this.node.getChildByName('paizi_2');
        data.target.getChildByName("highLight").active = true;
        data.target.getChildByName("highLight").color = cc.Color.RED;
        let ditu_panel = this.node.getChildByName('ditu_panel');
        let right_panel = this.node.getChildByName('right_panel');
        for (let i = 0; i < ditu_panel.childrenCount; i++) {
            ditu_panel.children[i].getComponent(Game_1_Type).setIsCurrent(false);
        }
        data.target.getComponent(Game_1_Type).setIsCurrent(true);
        let curIndex = data.target.getComponent(Game_1_Type).getIndex();

        if (paizi_2.opacity == 0) {
            this.scheduleOnce(() => {
                cc.tween(paizi_1).to(0.25, { opacity: 0 }).call(() => {
                    cc.tween(paizi_2).to(0.25, { opacity: 255 }).start();
                }).start();

                cc.tween(data.target).to(0.5, {position: cc.v3(0, 35) }).to(0.5, {scale: 2.6}).call(() => {
                    // data.target.getChildByName("highLight").color = cc.Color.WHITE;
                    data.target.getChildByName("touch_mask").active = true;
                    data.target.getChildByName("game_node").active = true;
                    UIHelp.closeMask();
                }).start();

                right_panel.active = true;
                for (let i = 0; i < right_panel.childrenCount; i++) {
                    right_panel.children[i].active = false;
                }
                for (let i = 0; i < right_panel.childrenCount; i++) {
                    if (i != curIndex) {
                        right_panel.children[i].active = true;
                    }
                }
                this.scheduleOnce(() => {
                    for (let i = 0; i < ditu_panel.childrenCount; i++) {
                        let isCurrent = ditu_panel.children[i].getComponent(Game_1_Type).getIsCurrent();
                        if (!isCurrent) {
                            let index = ditu_panel.children[i].getComponent(Game_1_Type).getIndex();
                            let pos = right_panel.children[index].position;
                            cc.tween(ditu_panel.children[i]).to(0.5, { scale: 0.5 , position: pos}).start();
                        }
                    }
                }, 0);
            }, 1);
        } else {
            cc.tween(data.target).to(0.5, {position: cc.v3(0, 35) }).to(0.5, {scale: 2.6}).call(() => {
                // data.target.getChildByName("highLight").color = cc.Color.WHITE;
                data.target.getChildByName("touch_mask").active = true;
                data.target.getChildByName("game_node").active = true;
                UIHelp.closeMask();
            }).start();

            right_panel.active = true;
            for (let i = 0; i < right_panel.childrenCount; i++) {
                right_panel.children[i].active = false;
            }
            for (let i = 0; i < right_panel.childrenCount; i++) {
                if (i != curIndex) {
                    right_panel.children[i].active = true;
                }
            }
            this.scheduleOnce(() => {
                for (let i = 0; i < ditu_panel.childrenCount; i++) {
                    let isCurrent = ditu_panel.children[i].getComponent(Game_1_Type).getIsCurrent();
                    if (!isCurrent) {
                        let index = ditu_panel.children[i].getComponent(Game_1_Type).getIndex();
                        let pos = right_panel.children[index].position;
                        cc.tween(ditu_panel.children[i]).to(0.5, { scale: 0.5 , position: pos}).start();
                    }
                }
            }, 0);
        }

    }
}
