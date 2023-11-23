"use strict";
cc._RF.push(module, '931e33nXUFM9rBzu6GvnpXb', 'GameMaozi');
// game/scripts/UI/Item/GameMaozi.ts

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
var HitTest_1 = require("../../../../frame/scripts/Utils/HitTest");
var EventType_1 = require("../../Data/EventType");
var GameMaoziDrag_1 = require("./GameMaoziDrag");
var Role_1 = require("./Role");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameMaozi = /** @class */ (function (_super) {
    __extends(GameMaozi, _super);
    function GameMaozi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enable = true;
        return _this;
    }
    GameMaozi.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_MAOZI_DRAG, this.onDragMaozi, this);
    };
    GameMaozi.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_MAOZI_DRAG, this.onDragMaozi, this);
    };
    GameMaozi.prototype.onDragMaozi = function (pos) {
        if (!this.enable) {
            return;
        }
        // if (this.node.parent.getComponent(Role).getMaoziNode().childrenCount == 0) {
        //     this.node.active = true;
        // }
        if (HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
            this.node.scale = 1.7;
        }
        else {
            this.node.scale = 1.5;
        }
    };
    GameMaozi.prototype.isPosInRect = function (pos) {
        if (this.node.active == false) {
            return false;
        }
        return HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node);
    };
    GameMaozi.prototype.fill = function (item) {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["放置音效"], false, false, false);
        if (this.node.parent.getComponent(Role_1.default).getMaoziNode().childrenCount > 0) {
            this.node.parent.getComponent(Role_1.default).getMaoziNode().children[0].getComponent(GameMaoziDrag_1.default).reset();
        }
        item.parent = this.node.parent.getComponent(Role_1.default).getMaoziNode();
        item.position = cc.v3(0, 0);
        this.node.parent.getComponent(Role_1.default).getMaoziNode().active = true;
        this.node.scale = 1.5;
        // this.node.active = false;
    };
    GameMaozi.prototype.setEnable = function (enable) {
        this.enable = enable;
    };
    GameMaozi = __decorate([
        ccclass
    ], GameMaozi);
    return GameMaozi;
}(cc.Component));
exports.default = GameMaozi;

cc._RF.pop();