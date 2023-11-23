import { FrameMsgType } from '../../../../frame/scripts/Data/FrameMsgType';
import { ListenerManager } from '../../../../frame/scripts/Manager/ListenerManager';
import { ReportManager } from '../../../../frame/scripts/Manager/ReportManager';
import { UIManager } from '../../../../frame/scripts/Manager/UIManager';
import BaseTeacherPanel from '../../../../frame/scripts/UI/Panel/BaseTeacherPanel';
import SubmissionPanel from '../../../../frame/scripts/UI/Panel/SubmissionPanel';
import { UIHelp } from '../../../../frame/scripts/Utils/UIHelp';
import { ConstValue } from '../../Data/ConstValue';
import { EventType } from '../../Data/EventType';
import { EditorManager } from '../../Manager/EditorManager';
import DragHead from '../Item/DragHead';
import DragMaozi from '../Item/DragMaozi';
import GamePanel from './GamePanel';

const { ccclass, property } = cc._decorator;

@ccclass
export default class TeacherPanel extends BaseTeacherPanel {
    public static className = 'TeacherPanel';

    @property(cc.ToggleContainer)
    private toggle_stars: cc.ToggleContainer = null;
    @property(cc.ToggleContainer)
    private toggle_replay: cc.ToggleContainer = null;
    @property(cc.ToggleContainer)
    private toggle_titleAudio: cc.ToggleContainer = null;
    @property(cc.EditBox)
    private tigan_edit: cc.EditBox = null;
    @property(cc.Node)
    private maozi_area: cc.Node = null;
    @property(cc.Node)
    private head_area: cc.Node = null;
    @property(cc.EditBox)
    private fayan_edit_1: cc.EditBox = null;
    @property(cc.EditBox)
    private fayan_edit_2: cc.EditBox = null;
    @property(cc.EditBox)
    private fayan_edit_3: cc.EditBox = null;
    @property(cc.EditBox)
    private fayan_edit_4: cc.EditBox = null;
    @property(cc.ToggleContainer)
    private toggle_paidui: cc.ToggleContainer = null;

    private _btn_save: cc.Node = null;
    private _btn_view: cc.Node = null;

    onLoad() {
        super.onLoad();
        ListenerManager.on(EventType.DRAG_HEAD_END, this.onChangeHead, this);
        ListenerManager.on(EventType.DRAG_MAOZI_END, this.onChnageMaozi, this);
    }

    start() {
        super.start();

        // 可编辑的游戏，不展示保存按钮
        const isEdit = EditorManager.isSupportEdit();
        if (this._btn_save) {
            this._btn_save.active = !isEdit;
        }
        // this._btn_save.active = true;
    }

    /**
     * 设置界面（这里已经拿到了网络请求数据）
     */
    setPanel() {
        super.setPanel();
        this.toggle_stars.toggleItems[EditorManager.editorData.isStarCount ? 0 : 1].isChecked = true;
        this.toggle_replay.toggleItems[EditorManager.editorData.isReplay ? 0 : 1].isChecked = true;
        this.toggle_titleAudio.toggleItems[EditorManager.editorData.isPlayTitle ? 0 : 1].isChecked = true;

        this.tigan_edit.string = EditorManager.editorData.tigan ? EditorManager.editorData.tigan.toString() : '';
    }

    // 星级评判开关
    public onToggleStar(toggle: cc.Toggle): void {
        let index = this.toggle_stars.toggleItems.indexOf(toggle);
        EditorManager.editorData.isStarCount = 0 === index;
    }

    // 重玩开关
    public onToggleReplay(toggle: cc.Toggle): void {
        let index = this.toggle_replay.toggleItems.indexOf(toggle);
        EditorManager.editorData.isReplay = 0 === index;
    }

    // 自动播放题干语音开关
    public onToggleTitleAudio(toggle: cc.Toggle): void {
        let index = this.toggle_titleAudio.toggleItems.indexOf(toggle);
        EditorManager.editorData.isPlayTitle = 0 === index;
    }

    // 保存课件按钮
    public onBtnSaveClicked() {
        const isEdit = EditorManager.isSupportEdit();
        if (!isEdit || ReportManager.isAllOver) {
            UIHelp.showSubmissionPanel();
        } else {
            UIHelp.showTip('请先完成一遍题目');
        }
    }
    // 预览课件按钮
    public onBtnViewClicked() {
        let roleCount = 0;
        for (let i = 0; i < EditorManager.editorData.jueseArr.length; i++) {
            // if (EditorManager.editorData.maoziArr[i] == null) {
            //     UIHelp.showTip("还有帽子没有设置哦！");
            //     return;
            // }
            if (EditorManager.editorData.jueseArr[i] != null) {
                if (EditorManager.editorData.maoziArr[i] !=null) {
                    roleCount++;
                } else {
                    UIHelp.showTip("还有角色没有设置帽子哦！");
                    return;
                }
            }
        }
        if(roleCount < 2){
            UIHelp.showTip("至少要有两个角色哦！");
            return;
        }
        if (EditorManager.editorData.jueseArr.indexOf(2) == -1) {
            UIHelp.showTip("必须要选择皮皮哦！");
            return;
        }
        // for (let i = 0; i < EditorManager.editorData.jueseArr.length; i++) {
        //     if (EditorManager.editorData.jueseArr[i] == null) {
        //         UIHelp.showTip("还有角色没有设置哦！");
        //         return;
        //     }
        // }
        if (
            -1 === EditorManager.getCoursewareLevel() ||
            null === EditorManager.getCoursewareLevel() ||
            void 0 === EditorManager.getCoursewareLevel()
        ) {
            UIHelp.showTip('请先设置coursewareLevel');
        } else {
            ListenerManager.dispatch(FrameMsgType.TEACHER_PANEL_LOADING, true);
            UIManager.showUI(GamePanel);
        }
    }

    onHandleTiganChanged() {
        if (this.tigan_edit.string.length >= 30) {
            UIHelp.showTip("最多输入30个字哦！");
        }
        EditorManager.editorData.tigan = this.tigan_edit.string;
    }

    onHanleTiganEnd() {
        EditorManager.editorData.tigan = this.tigan_edit.string;
    }

    onHandleFayan1Changed() {
        if (this.fayan_edit_1.string.length >= 20) {
            UIHelp.showTip("最多输入20个字哦！");
        }
        EditorManager.editorData.jueseFayanArr[0] = this.fayan_edit_1.string;
    }

    onHanleFayan1End() {
        EditorManager.editorData.jueseFayanArr[0] = this.fayan_edit_1.string;
    }

    onHandleFayan2Changed() {
        if (this.fayan_edit_2.string.length >= 20) {
            UIHelp.showTip("最多输入20个字哦！");
        }
        EditorManager.editorData.jueseFayanArr[1] = this.fayan_edit_2.string;
    }

    onHanleFayan2End() {
        EditorManager.editorData.jueseFayanArr[1] = this.fayan_edit_2.string;
    }

    onHandleFayan3Changed() {
        if (this.fayan_edit_3.string.length >= 20) {
            UIHelp.showTip("最多输入20个字哦！");
        }
        EditorManager.editorData.jueseFayanArr[2] = this.fayan_edit_3.string;
    }

    onHanleFayan3End() {
        EditorManager.editorData.jueseFayanArr[2] = this.fayan_edit_3.string;
    }

    onHandleFayan4Changed() {
        if (this.fayan_edit_4.string.length >= 20) {
            UIHelp.showTip("最多输入20个字哦！");
        }
        EditorManager.editorData.jueseFayanArr[3] = this.fayan_edit_4.string;
    }

    onHanleFayan4End() {
        EditorManager.editorData.jueseFayanArr[3] = this.fayan_edit_4.string;
    }

    onChnageMaozi() {
        for (let i = 0; i < this.maozi_area.childrenCount; i++) {
            let maozi = this.maozi_area.children[i];
            if (maozi.childrenCount > 0) {
                let index = maozi.children[0].getComponent(DragMaozi).getIndex();
                EditorManager.editorData.maoziArr[i] = index;
            } else {
                EditorManager.editorData.maoziArr[i] = null;
            }
        }
        // console.log("EditorManager.editorData.maoziArr", EditorManager.editorData.maoziArr);
    }

    onChangeHead() {
        for (let i = 0; i < this.head_area.childrenCount; i++) {
            let head = this.head_area.children[i];
            if (head.childrenCount > 0) {
                let index = head.children[0].getComponent(DragHead).getIndex();
                EditorManager.editorData.jueseArr[i] = index;
            } else {
                EditorManager.editorData.jueseArr[i] = null;
            }            
        }
        // console.log("EditorManager.editorData.jueseArr", EditorManager.editorData.jueseArr);
    }

    onTogglePaidui(toggle: cc.Toggle) {
        let index = this.toggle_paidui.toggleItems.indexOf(toggle);
        EditorManager.editorData.isPaidui = index == 0;
    }

}
