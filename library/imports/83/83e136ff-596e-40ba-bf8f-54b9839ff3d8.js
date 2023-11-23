"use strict";
cc._RF.push(module, '83e13b/WW5Aur+PVLmDn/PY', 'GameUI');
// game/scripts/UI/Item/GameUI.ts

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
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var GameMaoziDrag_1 = require("./GameMaoziDrag");
var Role_1 = require("./Role");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rolePanel = null;
        _this.optionPanel = null;
        _this.btn_check = null;
        _this.options = [];
        _this.tigan = null;
        _this.roleStartX = 1900;
        _this.optionPanelStartY = -735;
        _this.optionPanelEndY = -420;
        _this.enableCheck = false;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_MAOZI_DRAG_END, this.handleDragEnd, this);
    };
    GameUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_MAOZI_DRAG_END, this.handleDragEnd, this);
    };
    GameUI.prototype.handleEnterGame = function () {
        UIHelp_1.UIHelp.showMask();
        this.initUI();
        this.initAni();
    };
    GameUI.prototype.resetUI = function () {
        this.initUI();
        this.unscheduleAllCallbacks();
        cc.Tween.stopAllByTarget(this.rolePanel);
        cc.Tween.stopAllByTarget(this.optionPanel);
        this.rolePanel.x = 0;
        if (EditorManager_1.EditorManager.editorData.isPaidui) {
            this.setSideIdle();
        }
        else {
            this.setTurn();
        }
        this.showMaozi();
        this.showDialog();
        this.optionPanel.y = this.optionPanelEndY;
        UIHelp_1.UIHelp.closeMask();
        for (var i = 0; i < this.options.length; i++) {
            this.options[i].getComponent(GameMaoziDrag_1.default).reset();
        }
        var answer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answer;
        for (var i = 0; i < answer.length; i++) {
            if (answer[i] != null) {
                var maoziNode = this.rolePanel.children[i].getComponent(Role_1.default).getMaoziNode();
                var option = null;
                for (var j = 0; j < this.options.length; j++) {
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
    };
    GameUI.prototype.initUI = function () {
        this.tigan.string = EditorManager_1.EditorManager.editorData.tigan;
        this.tigan.node.parent.active = EditorManager_1.EditorManager.editorData.tigan.length > 0;
        this.rolePanel.x = this.roleStartX;
        this.optionPanel.y = this.optionPanelStartY;
        this.btn_check.opacity = 0;
        this.setRolePos();
    };
    GameUI.prototype.setRolePos = function () {
        for (var j = 0; j < this.rolePanel.childrenCount; j++) {
            this.rolePanel.children[j].active = false;
        }
        for (var i = 0; i < EditorManager_1.EditorManager.editorData.jueseArr.length; i++) {
            var roleIndex = EditorManager_1.EditorManager.editorData.jueseArr[i];
            for (var j = 0; j < this.rolePanel.childrenCount; j++) {
                if (this.rolePanel.children[j].getComponent(Role_1.default).getIndex() == roleIndex) {
                    this.rolePanel.children[j].getComponent(Role_1.default).init(i);
                }
            }
        }
    };
    GameUI.prototype.initAni = function () {
        var _this = this;
        this.setWalk();
        cc.tween(this.rolePanel).to(5.5, { x: 0 }).call(function () {
            if (EditorManager_1.EditorManager.editorData.isPaidui) {
                _this.setSideIdle();
            }
            else {
                _this.setTurn();
            }
            _this.scheduleOnce(function () {
                _this.showMaozi();
                _this.showDialog();
            }, 1);
            cc.tween(_this.optionPanel).to(1, { y: _this.optionPanelEndY }).call(function () {
                UIHelp_1.UIHelp.closeMask();
            }).start();
        }).start();
    };
    GameUI.prototype.setWalk = function () {
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            var role = this.rolePanel.children[i].getChildByName("role");
            if (this.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "walk", true);
            }
            else {
                Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "walk_side", true);
            }
        }
    };
    GameUI.prototype.setTurn = function () {
        var _loop_1 = function (i) {
            var role = this_1.rolePanel.children[i].getChildByName("role");
            Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "turn", false, function () {
                Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "idle_front", true);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            _loop_1(i);
        }
    };
    GameUI.prototype.setSideIdle = function () {
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            var role = this.rolePanel.children[i].getChildByName("role");
            Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "idle_side", true);
        }
    };
    GameUI.prototype.showMaozi = function () {
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            this.rolePanel.children[i].getComponent(Role_1.default).showMaozi();
        }
    };
    GameUI.prototype.showDialog = function () {
        var _this = this;
        var index = 0;
        var delay = 0;
        var _loop_2 = function (i) {
            if (EditorManager_1.EditorManager.editorData.jueseFayanArr[i] != "") {
                delay++;
                this_2.scheduleOnce(function () {
                    index++;
                    _this.rolePanel.children[i].getComponent(Role_1.default).showDialog(index);
                }, 4 - delay);
            }
        };
        var this_2 = this;
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            _loop_2(i);
        }
    };
    GameUI.prototype.handleDragEnd = function () {
        var answer = [null, null, null, null];
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            var roleMaozi = this.rolePanel.children[i].getComponent(Role_1.default).getMaoziNode();
            if (roleMaozi.childrenCount > 0 && roleMaozi.children[0].getComponent(GameMaoziDrag_1.default) && this.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                this.enableCheck = true;
                this.btn_check.opacity = 255;
            }
            if (roleMaozi.childrenCount > 0 && roleMaozi.children[0].getComponent(GameMaoziDrag_1.default)) {
                answer[i] = roleMaozi.children[0].name;
            }
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answer = answer;
    };
    GameUI.prototype.onClickCheck = function () {
        if (!this.enableCheck) {
            return;
        }
        UIHelp_1.UIHelp.showMask();
        var isRight = false;
        console.log("EditorManager.editorData.maoziArr", EditorManager_1.EditorManager.editorData.maoziArr);
        var _loop_3 = function (i) {
            var roleMaozi = this_3.rolePanel.children[i].getComponent(Role_1.default).getMaoziNode();
            if (roleMaozi.childrenCount > 0 && roleMaozi.children[0].getComponent(GameMaoziDrag_1.default)) {
                if (this_3.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                    if (roleMaozi.children[0].getComponent(GameMaoziDrag_1.default).getIndex() == EditorManager_1.EditorManager.editorData.maoziArr[this_3.rolePanel.children[i].getComponent(Role_1.default).getDuiliexIndex()]) {
                        isRight = true;
                    }
                }
                if (isRight) {
                    if (roleMaozi.children[0].getComponent(GameMaoziDrag_1.default).getIndex() != EditorManager_1.EditorManager.editorData.maoziArr[this_3.rolePanel.children[i].getComponent(Role_1.default).getDuiliexIndex()]) {
                        cc.tween(roleMaozi.children[0])
                            .then(cc.bezierTo(0.3, [cc.v2(0, 0), cc.v2(100, 100), cc.v2(100, -600)]).easing(cc.easeSineOut())).call(function () {
                            roleMaozi.children[0].getComponent(GameMaoziDrag_1.default).reset();
                        }).start();
                    }
                }
                else {
                    if (this_3.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                        cc.tween(roleMaozi.children[0])
                            .then(cc.bezierTo(0.3, [cc.v2(0, 0), cc.v2(100, 100), cc.v2(100, -600)]).easing(cc.easeSineOut())).call(function () {
                            roleMaozi.children[0].getComponent(GameMaoziDrag_1.default).reset();
                        }).start();
                    }
                }
            }
        };
        var this_3 = this;
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            _loop_3(i);
        }
        if (isRight) {
            this.handleRight();
        }
        else {
            this.handleWrong();
        }
    };
    GameUI.prototype.handleRight = function () {
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["正确反馈01"], false, false, false);
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            if (this.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                var role = this.rolePanel.children[i].getChildByName("role");
                Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "huanhu", true);
            }
        }
        this.scheduleOnce(function () {
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
        }, 2);
    };
    GameUI.prototype.handleWrong = function () {
        var _this = this;
        this.enableCheck = false;
        this.btn_check.opacity = 0;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, false);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误反馈01"], false, false, false, (function () {
            for (var i = 0; i < _this.rolePanel.childrenCount; i++) {
                if (_this.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                    var role = _this.rolePanel.children[i].getChildByName("role");
                    var aniName = EditorManager_1.EditorManager.editorData.isPaidui ? "idle_side" : "idle_front";
                    Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), aniName, true);
                }
            }
            UIHelp_1.UIHelp.closeMask();
        }));
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            if (this.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                var role = this.rolePanel.children[i].getChildByName("role");
                Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "cuowu", true);
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "rolePanel", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "optionPanel", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "btn_check", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "options", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "tigan", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

cc._RF.pop();