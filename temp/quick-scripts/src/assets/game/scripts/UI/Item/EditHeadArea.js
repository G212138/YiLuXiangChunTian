"use strict";
cc._RF.push(module, 'aae115BmKxCY53F2ak7ds09', 'EditHeadArea');
// game/scripts/UI/Item/EditHeadArea.ts

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
var DragHead_1 = require("./DragHead");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EditHeadArea = /** @class */ (function (_super) {
    __extends(EditHeadArea, _super);
    function EditHeadArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        return _this;
    }
    EditHeadArea.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_HEAD, this.onDragHead, this);
    };
    EditHeadArea.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_HEAD, this.onDragHead, this);
    };
    EditHeadArea.prototype.onDragHead = function (pos) {
        if (HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
            this.node.color = new cc.Color(255, 215, 0);
        }
        else {
            this.node.color = cc.Color.WHITE;
        }
    };
    EditHeadArea.prototype.isPosInRect = function (pos) {
        return HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node);
    };
    EditHeadArea.prototype.fill = function (item) {
        if (this.node.childrenCount > 0) {
            this.node.children[0].getComponent(DragHead_1.default).reset();
        }
        this.node.color = cc.Color.WHITE;
        item.parent = this.node;
        item.position = cc.v3(0, 0);
    };
    __decorate([
        property(cc.Integer)
    ], EditHeadArea.prototype, "index", void 0);
    EditHeadArea = __decorate([
        ccclass
    ], EditHeadArea);
    return EditHeadArea;
}(cc.Component));
exports.default = EditHeadArea;

cc._RF.pop();