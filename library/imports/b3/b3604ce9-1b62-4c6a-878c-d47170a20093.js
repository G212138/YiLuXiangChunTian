"use strict";
cc._RF.push(module, 'b3604zpG2JMaoeM1HFwogCT', 'DragHead');
// game/scripts/UI/Item/DragHead.ts

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
var EditHeadArea_1 = require("./EditHeadArea");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DragHead = /** @class */ (function (_super) {
    __extends(DragHead, _super);
    function DragHead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.gezi = null;
        _this.index = 0;
        _this.initPos = null;
        return _this;
    }
    DragHead.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.initPos = this.node.position;
    };
    DragHead.prototype.touchStart = function (event) {
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        this.node.parent = this.rootNode;
        this.node.position = cc.v3(pos.x, pos.y);
        var pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_HEAD, pos2);
    };
    DragHead.prototype.touchMove = function (event) {
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        this.node.position = cc.v3(pos.x, pos.y);
        var pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_HEAD, pos2);
    };
    DragHead.prototype.touchEnd = function (event) {
        var _this = this;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        this.node.position = cc.v3(pos.x, pos.y);
        var isInRect = false;
        this.gezi.children.forEach(function (gezi) {
            if (gezi.getComponent(EditHeadArea_1.default).isPosInRect(cc.v2(pos2.x, pos2.y))) {
                isInRect = true;
                gezi.getComponent(EditHeadArea_1.default).fill(_this.node);
            }
        });
        if (!isInRect) {
            this.node.parent = this.rootNode;
            this.node.position = this.initPos;
        }
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_HEAD_END);
    };
    DragHead.prototype.reset = function () {
        this.node.parent = this.rootNode;
        this.node.position = this.initPos;
    };
    DragHead.prototype.getIndex = function () {
        return this.index;
    };
    __decorate([
        property(cc.Node)
    ], DragHead.prototype, "rootNode", void 0);
    __decorate([
        property(cc.Node)
    ], DragHead.prototype, "gezi", void 0);
    __decorate([
        property(cc.Integer)
    ], DragHead.prototype, "index", void 0);
    DragHead = __decorate([
        ccclass
    ], DragHead);
    return DragHead;
}(cc.Component));
exports.default = DragHead;

cc._RF.pop();