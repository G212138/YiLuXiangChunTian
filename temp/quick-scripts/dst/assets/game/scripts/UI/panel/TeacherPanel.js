
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxUZWFjaGVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTJFO0FBQzNFLHFGQUFvRjtBQUNwRixpRkFBZ0Y7QUFDaEYseUVBQXdFO0FBQ3hFLHdGQUFtRjtBQUVuRixpRUFBZ0U7QUFFaEUsa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUM1RCw2Q0FBd0M7QUFDeEMsK0NBQTBDO0FBQzFDLHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBZ0I7SUFBMUQ7UUFBQSxxRUFzTkM7UUFsTlcsa0JBQVksR0FBdUIsSUFBSSxDQUFDO1FBRXhDLG1CQUFhLEdBQXVCLElBQUksQ0FBQztRQUV6Qyx1QkFBaUIsR0FBdUIsSUFBSSxDQUFDO1FBRTdDLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBZSxJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBZSxJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBZSxJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBZSxJQUFJLENBQUM7UUFFaEMsbUJBQWEsR0FBdUIsSUFBSSxDQUFDO1FBRXpDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUEyTHRDLENBQUM7SUF6TEcsNkJBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksaUJBQU0sS0FBSyxXQUFFLENBQUM7UUFFZCxpQkFBaUI7UUFDakIsSUFBTSxNQUFNLEdBQUcsNkJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDbkM7UUFDRCxnQ0FBZ0M7SUFDcEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQVEsR0FBUjtRQUNJLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLDZCQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzdGLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLDZCQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsNkJBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFbEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsNkJBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3RyxDQUFDO0lBRUQsU0FBUztJQUNGLG1DQUFZLEdBQW5CLFVBQW9CLE1BQWlCO1FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQztJQUN2RCxDQUFDO0lBRUQsT0FBTztJQUNBLHFDQUFjLEdBQXJCLFVBQXNCLE1BQWlCO1FBQ25DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQztJQUNwRCxDQUFDO0lBRUQsYUFBYTtJQUNOLHlDQUFrQixHQUF6QixVQUEwQixNQUFpQjtRQUN2QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQztJQUN2RCxDQUFDO0lBRUQsU0FBUztJQUNGLHVDQUFnQixHQUF2QjtRQUNJLElBQU0sTUFBTSxHQUFHLDZCQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sSUFBSSw2QkFBYSxDQUFDLFNBQVMsRUFBRTtZQUNwQyxlQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUNoQzthQUFNO1lBQ0gsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFDRCxTQUFTO0lBQ0YsdUNBQWdCLEdBQXZCO1FBQ0ksSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9ELHNEQUFzRDtZQUN0RCxvQ0FBb0M7WUFDcEMsY0FBYztZQUNkLElBQUk7WUFDSixJQUFJLDZCQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQzlDLElBQUksNkJBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFHLElBQUksRUFBRTtvQkFDN0MsU0FBUyxFQUFFLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0gsZUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDL0IsT0FBTztpQkFDVjthQUNKO1NBQ0o7UUFDRCxJQUFHLFNBQVMsR0FBRyxDQUFDLEVBQUM7WUFDYixlQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzdCLE9BQU87U0FDVjtRQUNELElBQUksNkJBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNwRCxlQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVCLE9BQU87U0FDVjtRQUNELHVFQUF1RTtRQUN2RSwwREFBMEQ7UUFDMUQsd0NBQXdDO1FBQ3hDLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsSUFBSTtRQUNKLElBQ0ksQ0FBQyxDQUFDLEtBQUssNkJBQWEsQ0FBQyxrQkFBa0IsRUFBRTtZQUN6QyxJQUFJLEtBQUssNkJBQWEsQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQyxLQUFLLENBQUMsS0FBSyw2QkFBYSxDQUFDLGtCQUFrQixFQUFFLEVBQy9DO1lBQ0UsZUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDSCxpQ0FBZSxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25FLHFCQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFTLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCwyQ0FBb0IsR0FBcEI7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDckMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoQztRQUNELDZCQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUM1RCxDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNJLDZCQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUM1RCxDQUFDO0lBRUQsNENBQXFCLEdBQXJCO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ3ZDLGVBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEM7UUFDRCw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDekUsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLDZCQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUN6RSxDQUFDO0lBRUQsNENBQXFCLEdBQXJCO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ3ZDLGVBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEM7UUFDRCw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDekUsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLDZCQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUN6RSxDQUFDO0lBRUQsNENBQXFCLEdBQXJCO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ3ZDLGVBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEM7UUFDRCw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDekUsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLDZCQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUN6RSxDQUFDO0lBRUQsNENBQXFCLEdBQXJCO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ3ZDLGVBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEM7UUFDRCw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDekUsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLDZCQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUN6RSxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLEtBQUssQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pFLDZCQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0gsNkJBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUMvQztTQUNKO1FBQ0QsdUZBQXVGO0lBQzNGLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDL0QsNkJBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUNoRDtpQkFBTTtnQkFDSCw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQy9DO1NBQ0o7UUFDRCx1RkFBdUY7SUFDM0YsQ0FBQztJQUVELHFDQUFjLEdBQWQsVUFBZSxNQUFpQjtRQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0QsNkJBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQW5OYSxzQkFBUyxHQUFHLGNBQWMsQ0FBQztJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO3NEQUNtQjtJQUVoRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO3VEQUNvQjtJQUVqRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDOzJEQUN3QjtJQUVyRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO29EQUNpQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3NEQUNtQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3NEQUNtQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3NEQUNtQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3NEQUNtQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO3VEQUNvQjtJQXhCaEMsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXNOaEM7SUFBRCxtQkFBQztDQXRORCxBQXNOQyxDQXROeUMsMEJBQWdCLEdBc056RDtrQkF0Tm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IHsgUmVwb3J0TWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9VSU1hbmFnZXInO1xuaW1wb3J0IEJhc2VUZWFjaGVyUGFuZWwgZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VSS9QYW5lbC9CYXNlVGVhY2hlclBhbmVsJztcbmltcG9ydCBTdWJtaXNzaW9uUGFuZWwgZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VSS9QYW5lbC9TdWJtaXNzaW9uUGFuZWwnO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IHsgQ29uc3RWYWx1ZSB9IGZyb20gJy4uLy4uL0RhdGEvQ29uc3RWYWx1ZSc7XG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0V2ZW50VHlwZSc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9FZGl0b3JNYW5hZ2VyJztcbmltcG9ydCBEcmFnSGVhZCBmcm9tICcuLi9JdGVtL0RyYWdIZWFkJztcbmltcG9ydCBEcmFnTWFvemkgZnJvbSAnLi4vSXRlbS9EcmFnTWFvemknO1xuaW1wb3J0IEdhbWVQYW5lbCBmcm9tICcuL0dhbWVQYW5lbCc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFjaGVyUGFuZWwgZXh0ZW5kcyBCYXNlVGVhY2hlclBhbmVsIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdUZWFjaGVyUGFuZWwnO1xuXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9zdGFyczogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHByaXZhdGUgdG9nZ2xlX3JlcGxheTogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHByaXZhdGUgdG9nZ2xlX3RpdGxlQXVkaW86IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSB0aWdhbl9lZGl0OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIG1hb3ppX2FyZWE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgaGVhZF9hcmVhOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIGZheWFuX2VkaXRfMTogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSBmYXlhbl9lZGl0XzI6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIHByaXZhdGUgZmF5YW5fZWRpdF8zOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIGZheWFuX2VkaXRfNDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9wYWlkdWk6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9idG5fc2F2ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYnRuX3ZpZXc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5EUkFHX0hFQURfRU5ELCB0aGlzLm9uQ2hhbmdlSGVhZCwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuRFJBR19NQU9aSV9FTkQsIHRoaXMub25DaG5hZ2VNYW96aSwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgLy8g5Y+v57yW6L6R55qE5ri45oiP77yM5LiN5bGV56S65L+d5a2Y5oyJ6ZKuXG4gICAgICAgIGNvbnN0IGlzRWRpdCA9IEVkaXRvck1hbmFnZXIuaXNTdXBwb3J0RWRpdCgpO1xuICAgICAgICBpZiAodGhpcy5fYnRuX3NhdmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2J0bl9zYXZlLmFjdGl2ZSA9ICFpc0VkaXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5fYnRuX3NhdmUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7nlYzpnaLvvIjov5nph4zlt7Lnu4/mi7/liLDkuobnvZHnu5zor7fmsYLmlbDmja7vvIlcbiAgICAgKi9cbiAgICBzZXRQYW5lbCgpIHtcbiAgICAgICAgc3VwZXIuc2V0UGFuZWwoKTtcbiAgICAgICAgdGhpcy50b2dnbGVfc3RhcnMudG9nZ2xlSXRlbXNbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzU3RhckNvdW50ID8gMCA6IDFdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudG9nZ2xlX3JlcGxheS50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNSZXBsYXkgPyAwIDogMV0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b2dnbGVfdGl0bGVBdWRpby50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNQbGF5VGl0bGUgPyAwIDogMV0uaXNDaGVja2VkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRpZ2FuX2VkaXQuc3RyaW5nID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLnRpZ2FuID8gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLnRpZ2FuLnRvU3RyaW5nKCkgOiAnJztcbiAgICB9XG5cbiAgICAvLyDmmJ/nuqfor4TliKTlvIDlhbNcbiAgICBwdWJsaWMgb25Ub2dnbGVTdGFyKHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3N0YXJzLnRvZ2dsZUl0ZW1zLmluZGV4T2YodG9nZ2xlKTtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzU3RhckNvdW50ID0gMCA9PT0gaW5kZXg7XG4gICAgfVxuXG4gICAgLy8g6YeN546p5byA5YWzXG4gICAgcHVibGljIG9uVG9nZ2xlUmVwbGF5KHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3JlcGxheS50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1JlcGxheSA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIC8vIOiHquWKqOaSreaUvumimOW5suivremfs+W8gOWFs1xuICAgIHB1YmxpYyBvblRvZ2dsZVRpdGxlQXVkaW8odG9nZ2xlOiBjYy5Ub2dnbGUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50b2dnbGVfdGl0bGVBdWRpby50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BsYXlUaXRsZSA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIC8vIOS/neWtmOivvuS7tuaMiemSrlxuICAgIHB1YmxpYyBvbkJ0blNhdmVDbGlja2VkKCkge1xuICAgICAgICBjb25zdCBpc0VkaXQgPSBFZGl0b3JNYW5hZ2VyLmlzU3VwcG9ydEVkaXQoKTtcbiAgICAgICAgaWYgKCFpc0VkaXQgfHwgUmVwb3J0TWFuYWdlci5pc0FsbE92ZXIpIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93U3VibWlzc2lvblBhbmVsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1RpcCgn6K+35YWI5a6M5oiQ5LiA6YGN6aKY55uuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g6aKE6KeI6K++5Lu25oyJ6ZKuXG4gICAgcHVibGljIG9uQnRuVmlld0NsaWNrZWQoKSB7XG4gICAgICAgIGxldCByb2xlQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFycltpXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyAgICAgVUlIZWxwLnNob3dUaXAoXCLov5jmnInluL3lrZDmsqHmnInorr7nva7lk6bvvIFcIik7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUFycltpXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFycltpXSAhPW51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoXCLov5jmnInop5LoibLmsqHmnInorr7nva7luL3lrZDlk6bvvIFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYocm9sZUNvdW50IDwgMil7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1RpcChcIuiHs+WwkeimgeacieS4pOS4quinkuiJsuWTpu+8gVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlQXJyLmluZGV4T2YoMikgPT0gLTEpIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93VGlwKFwi5b+F6aG76KaB6YCJ5oup55qu55qu5ZOm77yBXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlQXJyW2ldID09IG51bGwpIHtcbiAgICAgICAgLy8gICAgICAgICBVSUhlbHAuc2hvd1RpcChcIui/mOacieinkuiJsuayoeacieiuvue9ruWTpu+8gVwiKTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgLTEgPT09IEVkaXRvck1hbmFnZXIuZ2V0Q291cnNld2FyZUxldmVsKCkgfHxcbiAgICAgICAgICAgIG51bGwgPT09IEVkaXRvck1hbmFnZXIuZ2V0Q291cnNld2FyZUxldmVsKCkgfHxcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gRWRpdG9yTWFuYWdlci5nZXRDb3Vyc2V3YXJlTGV2ZWwoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93VGlwKCfor7flhYjorr7nva5jb3Vyc2V3YXJlTGV2ZWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuVEVBQ0hFUl9QQU5FTF9MT0FESU5HLCB0cnVlKTtcbiAgICAgICAgICAgIFVJTWFuYWdlci5zaG93VUkoR2FtZVBhbmVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGFuZGxlVGlnYW5DaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy50aWdhbl9lZGl0LnN0cmluZy5sZW5ndGggPj0gMzApIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93VGlwKFwi5pyA5aSa6L6T5YWlMzDkuKrlrZflk6bvvIFcIik7XG4gICAgICAgIH1cbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLnRpZ2FuID0gdGhpcy50aWdhbl9lZGl0LnN0cmluZztcbiAgICB9XG5cbiAgICBvbkhhbmxlVGlnYW5FbmQoKSB7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbiA9IHRoaXMudGlnYW5fZWRpdC5zdHJpbmc7XG4gICAgfVxuXG4gICAgb25IYW5kbGVGYXlhbjFDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5mYXlhbl9lZGl0XzEuc3RyaW5nLmxlbmd0aCA+PSAyMCkge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoXCLmnIDlpJrovpPlhaUyMOS4quWtl+WTpu+8gVwiKTtcbiAgICAgICAgfVxuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VGYXlhbkFyclswXSA9IHRoaXMuZmF5YW5fZWRpdF8xLnN0cmluZztcbiAgICB9XG5cbiAgICBvbkhhbmxlRmF5YW4xRW5kKCkge1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VGYXlhbkFyclswXSA9IHRoaXMuZmF5YW5fZWRpdF8xLnN0cmluZztcbiAgICB9XG5cbiAgICBvbkhhbmRsZUZheWFuMkNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmZheWFuX2VkaXRfMi5zdHJpbmcubGVuZ3RoID49IDIwKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1RpcChcIuacgOWkmui+k+WFpTIw5Liq5a2X5ZOm77yBXCIpO1xuICAgICAgICB9XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUZheWFuQXJyWzFdID0gdGhpcy5mYXlhbl9lZGl0XzIuc3RyaW5nO1xuICAgIH1cblxuICAgIG9uSGFubGVGYXlhbjJFbmQoKSB7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUZheWFuQXJyWzFdID0gdGhpcy5mYXlhbl9lZGl0XzIuc3RyaW5nO1xuICAgIH1cblxuICAgIG9uSGFuZGxlRmF5YW4zQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmF5YW5fZWRpdF8zLnN0cmluZy5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93VGlwKFwi5pyA5aSa6L6T5YWlMjDkuKrlrZflk6bvvIFcIik7XG4gICAgICAgIH1cbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlRmF5YW5BcnJbMl0gPSB0aGlzLmZheWFuX2VkaXRfMy5zdHJpbmc7XG4gICAgfVxuXG4gICAgb25IYW5sZUZheWFuM0VuZCgpIHtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlRmF5YW5BcnJbMl0gPSB0aGlzLmZheWFuX2VkaXRfMy5zdHJpbmc7XG4gICAgfVxuXG4gICAgb25IYW5kbGVGYXlhbjRDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5mYXlhbl9lZGl0XzQuc3RyaW5nLmxlbmd0aCA+PSAyMCkge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoXCLmnIDlpJrovpPlhaUyMOS4quWtl+WTpu+8gVwiKTtcbiAgICAgICAgfVxuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VGYXlhbkFyclszXSA9IHRoaXMuZmF5YW5fZWRpdF80LnN0cmluZztcbiAgICB9XG5cbiAgICBvbkhhbmxlRmF5YW40RW5kKCkge1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VGYXlhbkFyclszXSA9IHRoaXMuZmF5YW5fZWRpdF80LnN0cmluZztcbiAgICB9XG5cbiAgICBvbkNobmFnZU1hb3ppKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFvemlfYXJlYS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBtYW96aSA9IHRoaXMubWFvemlfYXJlYS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChtYW96aS5jaGlsZHJlbkNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IG1hb3ppLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChEcmFnTWFvemkpLmdldEluZGV4KCk7XG4gICAgICAgICAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLm1hb3ppQXJyW2ldID0gaW5kZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFycltpXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEubWFvemlBcnJcIiwgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLm1hb3ppQXJyKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUhlYWQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWFkX2FyZWEuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaGVhZCA9IHRoaXMuaGVhZF9hcmVhLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGhlYWQuY2hpbGRyZW5Db3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBoZWFkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChEcmFnSGVhZCkuZ2V0SW5kZXgoKTtcbiAgICAgICAgICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VBcnJbaV0gPSBpbmRleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlQXJyW2ldID0gbnVsbDtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUFyclwiLCBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VBcnIpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlUGFpZHVpKHRvZ2dsZTogY2MuVG9nZ2xlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3BhaWR1aS50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BhaWR1aSA9IGluZGV4ID09IDA7XG4gICAgfVxuXG59XG4iXX0=