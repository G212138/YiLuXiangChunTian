
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/GameMaoziDrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVNYW96aURyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLGtEQUFpRDtBQUNqRCx5Q0FBb0M7QUFHOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFnREM7UUE3Q1csY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7O0lBd0N2QyxDQUFDO0lBdENHLDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkMsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLEtBQUs7UUFDckIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVPLGtDQUFVLEdBQWxCLFVBQW1CLEtBQUs7UUFDcEIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVPLGlDQUFTLEdBQWpCLFVBQWtCLEtBQUs7UUFBdkIsaUJBY0M7UUFiRyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLFFBQVEsR0FBWSxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0QsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoRDtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQztRQUNELGlDQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRU0sZ0NBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBNUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnREFDSztJQUxULGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FnRGpDO0lBQUQsb0JBQUM7Q0FoREQsQUFnREMsQ0FoRDBDLEVBQUUsQ0FBQyxTQUFTLEdBZ0R0RDtrQkFoRG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IEdhbWVNYW96aSBmcm9tIFwiLi9HYW1lTWFvemlcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW96aURyYWcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBmaWxsQXJlYTogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0UG9zOiBjYy5WZWMzID0gbnVsbDtcclxuICAgIHByaXZhdGUgaW5pdFBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmluaXRQYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EcmFnU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQudGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoZXZlbnQucG9zLngsIGV2ZW50LnBvcy55KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRyYWdNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGV2ZW50LnBvcy54LCBldmVudC5wb3MueSkpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuR0FNRV9NQU9aSV9EUkFHLCBwb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EcmFnRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGV2ZW50LnBvcy54LCBldmVudC5wb3MueSkpO1xyXG4gICAgICAgIGxldCBpc0luUmVjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmlsbEFyZWEuZm9yRWFjaChnZXppID0+IHtcclxuICAgICAgICAgICAgaWYgKGdlemkuZ2V0Q29tcG9uZW50KEdhbWVNYW96aSkuaXNQb3NJblJlY3QoY2MudjIocG9zLngsIHBvcy55KSkpIHtcclxuICAgICAgICAgICAgICAgIGlzSW5SZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGdlemkuZ2V0Q29tcG9uZW50KEdhbWVNYW96aSkuZmlsbCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFpc0luUmVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGhpcy5pbml0UGFyZW50O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLmluaXRQb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuR0FNRV9NQU9aSV9EUkFHX0VORCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLmluaXRQYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5pbml0UG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==