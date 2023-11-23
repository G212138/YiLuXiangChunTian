"use strict";
cc._RF.push(module, '70c27EBmWdPJYtgMQ9dyPZS', 'TeacherPanel');
// game/scripts/UI/panel/TeacherPanel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FrameMsgType_1 = require("../../../../frame/scripts/Data/FrameMsgType");
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var ReportManager_1 = require("../../../../frame/scripts/Manager/ReportManager");
var UIManager_1 = require("../../../../frame/scripts/Manager/UIManager");
var BaseTeacherPanel_1 = require("../../../../frame/scripts/UI/Panel/BaseTeacherPanel");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var DragHead_1 = require("../Item/DragHead");
var DragMaozi_1 = require("../Item/DragMaozi");
var GamePanel_1 = require("./GamePanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TeacherPanel = /** @class */ (function (_super) {
    __extends(TeacherPanel, _super);
    function TeacherPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle_stars = null;
        _this.toggle_replay = null;
        _this.toggle_titleAudio = null;
        _this.tigan_edit = null;
        _this.maozi_area = null;
        _this.head_area = null;
        _this.fayan_edit_1 = null;
        _this.fayan_edit_2 = null;
        _this.fayan_edit_3 = null;
        _this.fayan_edit_4 = null;
        _this.toggle_paidui = null;
        _this._btn_save = null;
        _this._btn_view = null;
        return _this;
    }
    TeacherPanel.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_HEAD_END, this.onChangeHead, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_MAOZI_END, this.onChnageMaozi, this);
    };
    TeacherPanel.prototype.start = function () {
        _super.prototype.start.call(this);
        // 可编辑的游戏，不展示保存按钮
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (this._btn_save) {
            this._btn_save.active = !isEdit;
        }
        // this._btn_save.active = true;
    };
    /**
     * 设置界面（这里已经拿到了网络请求数据）
     */
    TeacherPanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        this.toggle_stars.toggleItems[EditorManager_1.EditorManager.editorData.isStarCount ? 0 : 1].isChecked = true;
        this.toggle_replay.toggleItems[EditorManager_1.EditorManager.editorData.isReplay ? 0 : 1].isChecked = true;
        this.toggle_titleAudio.toggleItems[EditorManager_1.EditorManager.editorData.isPlayTitle ? 0 : 1].isChecked = true;
        this.tigan_edit.string = EditorManager_1.EditorManager.editorData.tigan ? EditorManager_1.EditorManager.editorData.tigan.toString() : '';
    };
    // 星级评判开关
    TeacherPanel.prototype.onToggleStar = function (toggle) {
        var index = this.toggle_stars.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isStarCount = 0 === index;
    };
    // 重玩开关
    TeacherPanel.prototype.onToggleReplay = function (toggle) {
        var index = this.toggle_replay.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isReplay = 0 === index;
    };
    // 自动播放题干语音开关
    TeacherPanel.prototype.onToggleTitleAudio = function (toggle) {
        var index = this.toggle_titleAudio.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isPlayTitle = 0 === index;
    };
    // 保存课件按钮
    TeacherPanel.prototype.onBtnSaveClicked = function () {
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (!isEdit || ReportManager_1.ReportManager.isAllOver) {
            UIHelp_1.UIHelp.showSubmissionPanel();
        }
        else {
            UIHelp_1.UIHelp.showTip('请先完成一遍题目');
        }
    };
    // 预览课件按钮
    TeacherPanel.prototype.onBtnViewClicked = function () {
        var roleCount = 0;
        for (var i = 0; i < EditorManager_1.EditorManager.editorData.jueseArr.length; i++) {
            // if (EditorManager.editorData.maoziArr[i] == null) {
            //     UIHelp.showTip("还有帽子没有设置哦！");
            //     return;
            // }
            if (EditorManager_1.EditorManager.editorData.jueseArr[i] != null) {
                if (EditorManager_1.EditorManager.editorData.maoziArr[i] != null) {
                    roleCount++;
                }
                else {
                    UIHelp_1.UIHelp.showTip("还有角色没有设置帽子哦！");
                    return;
                }
            }
        }
        if (roleCount < 2) {
            UIHelp_1.UIHelp.showTip("至少要有两个角色哦！");
            return;
        }
        if (EditorManager_1.EditorManager.editorData.jueseArr.indexOf(2) == -1) {
            UIHelp_1.UIHelp.showTip("必须要选择皮皮哦！");
            return;
        }
        // for (let i = 0; i < EditorManager.editorData.jueseArr.length; i++) {
        //     if (EditorManager.editorData.jueseArr[i] == null) {
        //         UIHelp.showTip("还有角色没有设置哦！");
        //         return;
        //     }
        // }
        if (-1 === EditorManager_1.EditorManager.getCoursewareLevel() ||
            null === EditorManager_1.EditorManager.getCoursewareLevel() ||
            void 0 === EditorManager_1.EditorManager.getCoursewareLevel()) {
            UIHelp_1.UIHelp.showTip('请先设置coursewareLevel');
        }
        else {
            ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, true);
            UIManager_1.UIManager.showUI(GamePanel_1.default);
        }
    };
    TeacherPanel.prototype.onHandleTiganChanged = function () {
        if (this.tigan_edit.string.length >= 30) {
            UIHelp_1.UIHelp.showTip("最多输入30个字哦！");
        }
        EditorManager_1.EditorManager.editorData.tigan = this.tigan_edit.string;
    };
    TeacherPanel.prototype.onHanleTiganEnd = function () {
        EditorManager_1.EditorManager.editorData.tigan = this.tigan_edit.string;
    };
    TeacherPanel.prototype.onHandleFayan1Changed = function () {
        if (this.fayan_edit_1.string.length >= 20) {
            UIHelp_1.UIHelp.showTip("最多输入20个字哦！");
        }
        EditorManager_1.EditorManager.editorData.jueseFayanArr[0] = this.fayan_edit_1.string;
    };
    TeacherPanel.prototype.onHanleFayan1End = function () {
        EditorManager_1.EditorManager.editorData.jueseFayanArr[0] = this.fayan_edit_1.string;
    };
    TeacherPanel.prototype.onHandleFayan2Changed = function () {
        if (this.fayan_edit_2.string.length >= 20) {
            UIHelp_1.UIHelp.showTip("最多输入20个字哦！");
        }
        EditorManager_1.EditorManager.editorData.jueseFayanArr[1] = this.fayan_edit_2.string;
    };
    TeacherPanel.prototype.onHanleFayan2End = function () {
        EditorManager_1.EditorManager.editorData.jueseFayanArr[1] = this.fayan_edit_2.string;
    };
    TeacherPanel.prototype.onHandleFayan3Changed = function () {
        if (this.fayan_edit_3.string.length >= 20) {
            UIHelp_1.UIHelp.showTip("最多输入20个字哦！");
        }
        EditorManager_1.EditorManager.editorData.jueseFayanArr[2] = this.fayan_edit_3.string;
    };
    TeacherPanel.prototype.onHanleFayan3End = function () {
        EditorManager_1.EditorManager.editorData.jueseFayanArr[2] = this.fayan_edit_3.string;
    };
    TeacherPanel.prototype.onHandleFayan4Changed = function () {
        if (this.fayan_edit_4.string.length >= 20) {
            UIHelp_1.UIHelp.showTip("最多输入20个字哦！");
        }
        EditorManager_1.EditorManager.editorData.jueseFayanArr[3] = this.fayan_edit_4.string;
    };
    TeacherPanel.prototype.onHanleFayan4End = function () {
        EditorManager_1.EditorManager.editorData.jueseFayanArr[3] = this.fayan_edit_4.string;
    };
    TeacherPanel.prototype.onChnageMaozi = function () {
        for (var i = 0; i < this.maozi_area.childrenCount; i++) {
            var maozi = this.maozi_area.children[i];
            if (maozi.childrenCount > 0) {
                var index = maozi.children[0].getComponent(DragMaozi_1.default).getIndex();
                EditorManager_1.EditorManager.editorData.maoziArr[i] = index;
            }
            else {
                EditorManager_1.EditorManager.editorData.maoziArr[i] = null;
            }
        }
        // console.log("EditorManager.editorData.maoziArr", EditorManager.editorData.maoziArr);
    };
    TeacherPanel.prototype.onChangeHead = function () {
        for (var i = 0; i < this.head_area.childrenCount; i++) {
            var head = this.head_area.children[i];
            if (head.childrenCount > 0) {
                var index = head.children[0].getComponent(DragHead_1.default).getIndex();
                EditorManager_1.EditorManager.editorData.jueseArr[i] = index;
            }
            else {
                EditorManager_1.EditorManager.editorData.jueseArr[i] = null;
            }
        }
        // console.log("EditorManager.editorData.jueseArr", EditorManager.editorData.jueseArr);
    };
    TeacherPanel.prototype.onTogglePaidui = function (toggle) {
        var index = this.toggle_paidui.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isPaidui = index == 0;
    };
    TeacherPanel.className = 'TeacherPanel';
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_stars", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_replay", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_titleAudio", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "tigan_edit", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "maozi_area", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "head_area", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "fayan_edit_1", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "fayan_edit_2", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "fayan_edit_3", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "fayan_edit_4", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_paidui", void 0);
    TeacherPanel = __decorate([
        ccclass
    ], TeacherPanel);
    return TeacherPanel;
}(BaseTeacherPanel_1.default));
exports.default = TeacherPanel;

cc._RF.pop();