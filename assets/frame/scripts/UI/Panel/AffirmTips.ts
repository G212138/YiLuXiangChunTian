import { FrameMsgType } from '../../Data/FrameMsgType';
import { T2M } from '../../SDK/T2M';
import { UIHelp } from '../../Utils/UIHelp';
import BaseFrameUI from '../BaseFrameUI';

const { ccclass, property } = cc._decorator;
@ccclass
export class AffirmTips extends BaseFrameUI {
    public static className = 'AffirmTips';

    @property(cc.Node)
    private NodeDes: cc.Node = null; //描述节点
    @property(cc.Label)
    private title: cc.Label = null;
    @property(cc.Label)
    private des: cc.Label = null;
    @property(cc.Button)
    private close: cc.Button = null;
    @property(cc.Button)
    private ok: cc.Button = null;
    @property(cc.Label)
    private btnCloseLabel: cc.Label = null;
    @property(cc.Label)
    private btnOkLabel: cc.Label = null;
    @property(cc.Node)
    private win: cc.Node = null; //描述节点
    @property(cc.Node)
    private fail: cc.Node = null; //描述节点

    private callback = null;
    private type: number;
    start() {
        T2M.addSyncEventListener(FrameMsgType.AFFIRMTIPS_SURE, this.disposeOk.bind(this));
        T2M.addSyncEventListener(FrameMsgType.AFFIRMTIPS_CANCEL, this.disposeCancel.bind(this));
    }

    //type 成功 1 失败 2
    init(type: number, des: string, callback: any, btnCloselDes?: string, btnOkDes?: string) {
        this.title.node.active = false;
        this.des.node.active = true;
        this.win.active = type == 1;
        this.fail.active = type == 2;
        this.type = type;
        this.callback = callback;
        //console.log("到了初始化");
        //Tools.playSpine(this.sp_BgAnimator, "fault", false);
        this.des.string = des;
        if (btnCloselDes) {
            btnCloselDes == '' ? '取消' : btnCloselDes;
            this.btnCloseLabel.string = btnCloselDes;
        }
        if (btnOkDes) {
            btnOkDes == '' ? '确定' : btnOkDes;
            this.btnOkLabel.string = btnOkDes;
        }
    }

    setOnlyOneBtnType(btnOkDes?: string) {
        this.close.node.active = false;
        this.ok.node.active = true;
        this.ok.node.position = cc.v3(0, this.ok.node.position.y, 0);
        if (btnOkDes) {
            btnOkDes == '' ? '确定' : btnOkDes;
            this.btnOkLabel.string = btnOkDes;
            if (btnOkDes.length > 4) this.btnOkLabel.fontSize = 40;
        }
    }

    OnClickClose() {
        //console.log("关闭");
    }

    //通用动画
    TipsAnimatorScale(nodeObj: cc.Node) {
        nodeObj.stopAllActions();
        var seq = cc.sequence(cc.delayTime(1), cc.scaleTo(0.2, 1, 1));
        nodeObj.runAction(seq);
        // nodeObj.runAction(cc.scaleTo(0.2, 1, 1));
    }

    //ok 1 确认 0 取消
    OnClickOk() {
        console.log('确认');
        T2M.dispatch(FrameMsgType.AFFIRMTIPS_SURE, null);
    }

    OnClickCancel() {
        console.log('取消');
        T2M.dispatch(FrameMsgType.AFFIRMTIPS_CANCEL, null);
    }

    disposeOk() {
        UIHelp.closeAffirmTip();
        this.callback && this.callback(1);
    }

    disposeCancel() {
        UIHelp.closeAffirmTip();
        this.callback && this.callback(0);
    }

    // update (dt) {}
}
