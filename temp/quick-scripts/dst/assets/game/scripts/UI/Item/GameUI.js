
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUNwRiwrREFBOEQ7QUFDOUQsaUVBQWdFO0FBQ2hFLGtEQUFpRDtBQUNqRCw2REFBNEQ7QUFHNUQsaURBQTRDO0FBQzVDLCtCQUEwQjtBQUMxQiw2Q0FBNEM7QUFHdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFrUUM7UUEvUFcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFFeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFXLElBQUksQ0FBQztRQUMxQix1QkFBaUIsR0FBVyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxxQkFBZSxHQUFXLENBQUMsR0FBRyxDQUFDO1FBdUovQixpQkFBVyxHQUFHLEtBQUssQ0FBQTs7SUE0Ri9CLENBQUM7SUFqUEcsdUJBQU0sR0FBTjtRQUNJLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLGlD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Q0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNrQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ1k7SUFYZCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBa1ExQjtJQUFELGFBQUM7Q0FsUUQsQUFrUUMsQ0FsUW1DLEVBQUUsQ0FBQyxTQUFTLEdBa1EvQztrQkFsUW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL1Rvb2xzXCI7XHJcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL1VJSGVscFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXJcIjtcclxuaW1wb3J0IEVkaXRNYW9aaUFyZWEgZnJvbSBcIi4vRWRpdE1hb1ppQXJlYVwiO1xyXG5pbXBvcnQgR2FtZU1hb3ppIGZyb20gXCIuL0dhbWVNYW96aVwiO1xyXG5pbXBvcnQgR2FtZU1hb3ppRHJhZyBmcm9tIFwiLi9HYW1lTWFvemlEcmFnXCI7XHJcbmltcG9ydCBSb2xlIGZyb20gXCIuL1JvbGVcIjtcclxuaW1wb3J0IHsgU291bmRDb25maWcgfSBmcm9tIFwiLi9Tb3VuZENvbmZpZ1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSByb2xlUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG9wdGlvblBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBidG5fY2hlY2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB0aWdhbjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcm9sZVN0YXJ0WDogbnVtYmVyID0gMTkwMDtcclxuICAgIHByaXZhdGUgb3B0aW9uUGFuZWxTdGFydFk6IG51bWJlciA9IC03MzU7XHJcbiAgICBwcml2YXRlIG9wdGlvblBhbmVsRW5kWTogbnVtYmVyID0gLTQyMDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLmhhbmRsZUVudGVyR2FtZSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX1JFQ09OTkVDVCwgdGhpcy5yZXNldFVJLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfUkVQTEFZLCB0aGlzLmhhbmRsZUVudGVyR2FtZSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX01BT1pJX0RSQUdfRU5ELCB0aGlzLmhhbmRsZURyYWdFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLmhhbmRsZUVudGVyR2FtZSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuR0FNRV9SRUNPTk5FQ1QsIHRoaXMucmVzZXRVSSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuR0FNRV9SRVBMQVksIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5HQU1FX01BT1pJX0RSQUdfRU5ELCB0aGlzLmhhbmRsZURyYWdFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRW50ZXJHYW1lKCkge1xyXG4gICAgICAgIFVJSGVscC5zaG93TWFzaygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QW5pKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldFVJKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMucm9sZVBhbmVsKTtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5vcHRpb25QYW5lbCk7XHJcbiAgICAgICAgdGhpcy5yb2xlUGFuZWwueCA9IDA7XHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BhaWR1aSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFNpZGVJZGxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUdXJuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd01hb3ppKCk7XHJcbiAgICAgICAgdGhpcy5zaG93RGlhbG9nKCk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25QYW5lbC55ID0gdGhpcy5vcHRpb25QYW5lbEVuZFk7XHJcbiAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhbnN3ZXIgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbnN3ZXI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFuc3dlcltpXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFvemlOb2RlID0gdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFJvbGUpLmdldE1hb3ppTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNbal0ubmFtZSA9PSBhbnN3ZXJbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gdGhpcy5vcHRpb25zW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb24gIT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYW96aU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24ucGFyZW50ID0gbWFvemlOb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5wb3NpdGlvbiA9IGNjLnYzKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ0VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFVJKCkge1xyXG4gICAgICAgIHRoaXMudGlnYW4uc3RyaW5nID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLnRpZ2FuO1xyXG4gICAgICAgIHRoaXMudGlnYW4ubm9kZS5wYXJlbnQuYWN0aXZlID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLnRpZ2FuLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgdGhpcy5yb2xlUGFuZWwueCA9IHRoaXMucm9sZVN0YXJ0WDtcclxuICAgICAgICB0aGlzLm9wdGlvblBhbmVsLnkgPSB0aGlzLm9wdGlvblBhbmVsU3RhcnRZO1xyXG4gICAgICAgIHRoaXMuYnRuX2NoZWNrLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0Um9sZVBvcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Um9sZVBvcygpIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuQ291bnQ7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltqXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvbGVJbmRleCA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUFycltpXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltqXS5nZXRDb21wb25lbnQoUm9sZSkuZ2V0SW5kZXgoKSA9PSByb2xlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltqXS5nZXRDb21wb25lbnQoUm9sZSkuaW5pdChpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRBbmkoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRXYWxrKCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5yb2xlUGFuZWwpLnRvKDUuNSwgeyB4OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUGFpZHVpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNpZGVJZGxlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFR1cm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNYW96aSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nKCk7XHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9uUGFuZWwpLnRvKDEsIHsgeTogdGhpcy5vcHRpb25QYW5lbEVuZFkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRXYWxrKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlXCIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFJvbGUpLmdldEluZGV4KCkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHJvbGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJ3YWxrXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHJvbGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJ3YWxrX3NpZGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUdXJuKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlXCIpO1xyXG4gICAgICAgICAgICBUb29scy5wbGF5U3BpbmUocm9sZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCBcInR1cm5cIiwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShyb2xlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiaWRsZV9mcm9udFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2lkZUlkbGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIik7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShyb2xlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiaWRsZV9zaWRlXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dNYW96aSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoUm9sZSkuc2hvd01hb3ppKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0RpYWxvZygpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBkZWxheSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUZheWFuQXJyW2ldICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGRlbGF5Kys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoUm9sZSkuc2hvd0RpYWxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9LCA0IC0gZGVsYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5hYmxlQ2hlY2sgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEcmFnRW5kKCkge1xyXG4gICAgICAgIGxldCBhbnN3ZXIgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvbGVNYW96aSA9IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXRNYW96aU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKHJvbGVNYW96aS5jaGlsZHJlbkNvdW50ID4gMCAmJiByb2xlTWFvemkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpICYmIHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXRJbmRleCgpID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQ2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fY2hlY2sub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocm9sZU1hb3ppLmNoaWxkcmVuQ291bnQgPiAwICYmIHJvbGVNYW96aS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoR2FtZU1hb3ppRHJhZykpIHtcclxuICAgICAgICAgICAgICAgIGFuc3dlcltpXSA9IHJvbGVNYW96aS5jaGlsZHJlblswXS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuc3dlciA9IGFuc3dlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tDaGVjaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlQ2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVSUhlbHAuc2hvd01hc2soKTtcclxuICAgICAgICBsZXQgaXNSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLm1hb3ppQXJyXCIsIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFycik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvbGVNYW96aSA9IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXRNYW96aU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKHJvbGVNYW96aS5jaGlsZHJlbkNvdW50ID4gMCAmJiByb2xlTWFvemkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFJvbGUpLmdldEluZGV4KCkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb2xlTWFvemkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpLmdldEluZGV4KCkgPT0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLm1hb3ppQXJyW3RoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXREdWlsaWV4SW5kZXgoKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZU1hb3ppLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChHYW1lTWFvemlEcmFnKS5nZXRJbmRleCgpICE9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFyclt0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoUm9sZSkuZ2V0RHVpbGlleEluZGV4KCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHJvbGVNYW96aS5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGNjLmJlemllclRvKDAuMywgW2NjLnYyKDAsIDApLCBjYy52MigxMDAsIDEwMCksIGNjLnYyKDEwMCwgLTYwMCldKS5lYXNpbmcoY2MuZWFzZVNpbmVPdXQoKSkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVNYW96aS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoR2FtZU1hb3ppRHJhZykucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFJvbGUpLmdldEluZGV4KCkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihyb2xlTWFvemkuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjYy5iZXppZXJUbygwLjMsIFtjYy52MigwLCAwKSwgY2MudjIoMTAwLCAxMDApLCBjYy52MigxMDAsIC02MDApXSkuZWFzaW5nKGNjLmVhc2VTaW5lT3V0KCkpKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlTWFvemkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzUmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVSaWdodCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlV3JvbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSaWdodCgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNVQk1JVCwgdHJ1ZSk7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLmraPnoa7lj43ppogwMVwiXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXRJbmRleCgpID09IDIpIHtcclxuICAgICAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHJvbGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJodWFuaHVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkdBTUVfT1ZFUik7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVXcm9uZygpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5fY2hlY2sub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIGZhbHNlKTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIumUmeivr+WPjemmiDAxXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXRJbmRleCgpID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicm9sZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYW5pTmFtZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BhaWR1aSA/IFwiaWRsZV9zaWRlXCIgOiBcImlkbGVfZnJvbnRcIjtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUocm9sZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCBhbmlOYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoUm9sZSkuZ2V0SW5kZXgoKSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicm9sZVwiKTtcclxuICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShyb2xlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiY3Vvd3VcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==