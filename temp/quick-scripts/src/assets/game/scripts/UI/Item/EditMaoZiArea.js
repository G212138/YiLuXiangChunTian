"use strict";
cc._RF.push(module, '51fc4DR6xRCuK1/zEPPWLKZ', 'EditMaoZiArea');
// game/scripts/UI/Item/EditMaoZiArea.ts

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
var HitTest_1 = require("../../../../frame/scripts/Utils/HitTest");
var EventType_1 = require("../../Data/EventType");
var DragMaozi_1 = require("./DragMaozi");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EditMaoZiArea = /** @class */ (function (_super) {
    __extends(EditMaoZiArea, _super);
    function EditMaoZiArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        return _this;
    }
    EditMaoZiArea.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_MAOZI, this.onDragMaozi, this);
    };
    EditMaoZiArea.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_MAOZI, this.onDragMaozi, this);
    };
    EditMaoZiArea.prototype.onDragMaozi = function (pos) {
        if (HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
            this.node.color = new cc.Color(255, 215, 0);
        }
        else {
            this.node.color = cc.Color.WHITE;
        }
    };
    EditMaoZiArea.prototype.isPosInRect = function (pos) {
        return HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node);
    };
    EditMaoZiArea.prototype.fill = function (item) {
        if (this.node.childrenCount > 0) {
            this.node.children[0].getComponent(DragMaozi_1.default).reset();
        }
        this.node.color = cc.Color.WHITE;
        item.parent = this.node;
        item.position = cc.v3(0, 0);
    };
    __decorate([
        property(cc.Integer)
    ], EditMaoZiArea.prototype, "index", void 0);
    EditMaoZiArea = __decorate([
        ccclass
    ], EditMaoZiArea);
    return EditMaoZiArea;
}(cc.Component));
exports.default = EditMaoZiArea;

cc._RF.pop();