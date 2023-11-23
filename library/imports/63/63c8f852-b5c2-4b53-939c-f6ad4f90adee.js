"use strict";
cc._RF.push(module, '63c8fhStcJLU5Oc9q1PkK3u', 'GameMaoziDrag');
// game/scripts/UI/Item/GameMaoziDrag.ts

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
var EventType_1 = require("../../Data/EventType");
var GameMaozi_1 = require("./GameMaozi");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameMaoziDrag = /** @class */ (function (_super) {
    __extends(GameMaoziDrag, _super);
    function GameMaoziDrag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fillArea = [];
        _this.index = 0;
        _this.initPos = null;
        _this.initParent = null;
        return _this;
    }
    GameMaoziDrag.prototype.onLoad = function () {
        this.initPos = this.node.position;
        this.initParent = this.node.parent;
    };
    GameMaoziDrag.prototype.onDragStart = function (event) {
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
    };
    GameMaoziDrag.prototype.onDragMove = function (event) {
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_MAOZI_DRAG, pos);
    };
    GameMaoziDrag.prototype.onDragEnd = function (event) {
        var _this = this;
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        var isInRect = false;
        this.fillArea.forEach(function (gezi) {
            if (gezi.getComponent(GameMaozi_1.default).isPosInRect(cc.v2(pos.x, pos.y))) {
                isInRect = true;
                gezi.getComponent(GameMaozi_1.default).fill(_this.node);
            }
        });
        if (!isInRect) {
            this.node.parent = this.initParent;
            this.node.position = this.initPos;
        }
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_MAOZI_DRAG_END);
    };
    GameMaoziDrag.prototype.reset = function () {
        this.node.parent = this.initParent;
        this.node.position = this.initPos;
    };
    GameMaoziDrag.prototype.getIndex = function () {
        return this.index;
    };
    __decorate([
        property(cc.Node)
    ], GameMaoziDrag.prototype, "fillArea", void 0);
    __decorate([
        property(cc.Integer)
    ], GameMaoziDrag.prototype, "index", void 0);
    GameMaoziDrag = __decorate([
        ccclass
    ], GameMaoziDrag);
    return GameMaoziDrag;
}(cc.Component));
exports.default = GameMaoziDrag;

cc._RF.pop();