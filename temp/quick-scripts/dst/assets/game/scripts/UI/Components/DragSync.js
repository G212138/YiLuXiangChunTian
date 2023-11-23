
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Components/DragSync.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3dae4HV/+1GkKEajy1NuiDu', 'DragSync');
// game/scripts/UI/Components/DragSync.ts

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
var T2M_1 = require("../../../../frame/scripts/SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DragSync = /** @class */ (function (_super) {
    __extends(DragSync, _super);
    function DragSync() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.touchStartEvents = [];
        _this.touchMovingEvents = [];
        _this.touchEndEvents = [];
        _this.isEnable = true;
        _this.isTouching = false;
        _this.isTouch = false;
        //根据触摸时间判断是否为点击事件
        _this.isClickEvent = false;
        _this.touchStartData = null;
        //触摸开始位置
        _this.touchStartPos = null;
        return _this;
    }
    DragSync_1 = DragSync;
    DragSync.prototype.onLoad = function () {
        this.rootNode = cc.find('Canvas/GamePanel');
        var index = this.node.getSiblingIndex();
        this.node.attr({
            id: index,
            initParent: this.node.parent,
            initPos: { x: this.node.x, y: this.node.y },
            initSiblingIndex: index,
        });
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    DragSync.prototype.setEnable = function (isEnable) {
        this.isEnable = isEnable;
    };
    DragSync.prototype.addTouchEvent = function (target, component, handlers) {
        this.touchStartEvents.push(new DragSync_1.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];
        this.touchMovingEvents.push(new DragSync_1.EventHandler());
        this.touchMovingEvents[0].target = target;
        this.touchMovingEvents[0].component = component;
        this.touchMovingEvents[0].handler = handlers[1];
        this.touchEndEvents.push(new DragSync_1.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[2];
    };
    DragSync.prototype.touchStart = function (event) {
        if (!this.isEnable)
            return;
        this.isTouching = true;
        this.isTouch = true;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchStart' + this.tagId;
        var data = { pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    DragSync.prototype.touchMove = function (event) {
        if (!this.isEnable || !this.isTouching)
            return;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchMove' + this.tagId;
        var data = { pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data, true);
    };
    DragSync.prototype.touchEnd = function (event) {
        this.isTouching = false;
        if (!this.isEnable || !this.isTouch)
            return;
        this.isTouch = false;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchEnd' + this.tagId;
        var data = { pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    DragSync.prototype.addEventByT2M = function () {
        T2M_1.T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchMove' + this.tagId, this.touchMoveHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    };
    DragSync.prototype.touchStartHandler = function (data) {
        if (!this.isEnable)
            return;
        this.touchStartPos = cc.v2(data.pos.x, data.pos.y);
        this.isClickEvent = true;
        this.touchStartData = data;
    };
    DragSync.prototype.handleTouchStart = function (data) {
        this.node.parent = this.rootNode;
        this.node.position = cc.v3(this.touchStartData.pos.x, this.touchStartData.pos.y);
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: this.touchStartData.pos, target: this.node }]);
        }
    };
    DragSync.prototype.touchMoveHandler = function (data) {
        //判断当前位置与触摸开始位置的距离，如果超过一定距离，则不再判断为点击事件
        if (this.isClickEvent && this.touchStartPos) {
            var distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
            if (distance > 10) {
                this.isClickEvent = false;
                this.handleTouchStart(this.touchStartData);
                this.touchStartData = null;
            }
        }
        else {
            this.node.position = cc.v3(data.pos.x, data.pos.y);
            for (var _i = 0, _a = this.touchMovingEvents; _i < _a.length; _i++) {
                var eventHandler = _a[_i];
                eventHandler.emit([{ pos: data.pos, target: this.node }]);
            }
        }
    };
    DragSync.prototype.touchEndHandler = function (data) {
        if (this.isClickEvent && this.touchStartPos) {
            var distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
            if (distance <= 10) {
                this.isClickEvent = true;
            }
        }
        else {
            this.node.position = cc.v3(data.pos.x, data.pos.y);
        }
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, target: this.node, isClick: this.isClickEvent }]);
        }
    };
    var DragSync_1;
    __decorate([
        property(cc.Node)
    ], DragSync.prototype, "rootNode", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSync.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSync.prototype, "touchMovingEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSync.prototype, "touchEndEvents", void 0);
    DragSync = DragSync_1 = __decorate([
        ccclass
    ], DragSync);
    return DragSync;
}(cc.Component));
exports.default = DragSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXENvbXBvbmVudHNcXERyYWdTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUdsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTRJQztRQTFJVyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLHNCQUFnQixHQUFnQyxFQUFFLENBQUM7UUFFbkQsdUJBQWlCLEdBQWdDLEVBQUUsQ0FBQztRQUVwRCxvQkFBYyxHQUFnQyxFQUFFLENBQUM7UUFHakQsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBMEVqQyxpQkFBaUI7UUFDVCxrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixvQkFBYyxHQUFRLElBQUksQ0FBQztRQUVuQyxRQUFRO1FBQ0EsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBZ0QxQyxDQUFDO2lCQTVJb0IsUUFBUTtJQWV6Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNYLEVBQUUsRUFBRSxLQUFLO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUM1QixPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FB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QyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekY7SUFDTCxDQUFDOztJQXpJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3NEQUNXO0lBRTNEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3VEQUNZO0lBRTVEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO29EQUNTO0lBUnhDLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0STVCO0lBQUQsZUFBQztDQTVJRCxBQTRJQyxDQTVJcUMsRUFBRSxDQUFDLFNBQVMsR0E0SWpEO2tCQTVJb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFQyTSB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1NESy9UMk1cIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ1N5bmMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHJvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXSB9KVxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0RXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXSB9KVxyXG4gICAgcHJpdmF0ZSB0b3VjaE1vdmluZ0V2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0gfSlcclxuICAgIHByaXZhdGUgdG91Y2hFbmRFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgdGFnSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgaXNFbmFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBpc1RvdWNoaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yb290Tm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lUGFuZWwnKTtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmF0dHIoe1xyXG4gICAgICAgICAgICBpZDogaW5kZXgsXHJcbiAgICAgICAgICAgIGluaXRQYXJlbnQ6IHRoaXMubm9kZS5wYXJlbnQsXHJcbiAgICAgICAgICAgIGluaXRQb3M6IHsgeDogdGhpcy5ub2RlLngsIHk6IHRoaXMubm9kZS55IH0sXHJcbiAgICAgICAgICAgIGluaXRTaWJsaW5nSW5kZXg6IGluZGV4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGFnSWQgPSB0aGlzLm5vZGUubmFtZSArIHRoaXMubm9kZS5wYXJlbnQubmFtZSArIHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50QnlUMk0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RW5hYmxlKGlzRW5hYmxlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0VuYWJsZSA9IGlzRW5hYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUb3VjaEV2ZW50KHRhcmdldDogY2MuTm9kZSwgY29tcG9uZW50OiBzdHJpbmcsIGhhbmRsZXJzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50cy5wdXNoKG5ldyBEcmFnU3luYy5FdmVudEhhbmRsZXIoKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0RXZlbnRzWzBdLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHNbMF0uY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50c1swXS5oYW5kbGVyID0gaGFuZGxlcnNbMF07XHJcblxyXG4gICAgICAgIHRoaXMudG91Y2hNb3ZpbmdFdmVudHMucHVzaChuZXcgRHJhZ1N5bmMuRXZlbnRIYW5kbGVyKCkpO1xyXG4gICAgICAgIHRoaXMudG91Y2hNb3ZpbmdFdmVudHNbMF0udGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMudG91Y2hNb3ZpbmdFdmVudHNbMF0uY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMudG91Y2hNb3ZpbmdFdmVudHNbMF0uaGFuZGxlciA9IGhhbmRsZXJzWzFdO1xyXG5cclxuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzLnB1c2gobmV3IERyYWdTeW5jLkV2ZW50SGFuZGxlcigpKTtcclxuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzWzBdLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzWzBdLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzWzBdLmhhbmRsZXIgPSBoYW5kbGVyc1syXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzVG91Y2hpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucm9vdE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hTdGFydCcgKyB0aGlzLnRhZ0lkO1xyXG4gICAgICAgIGxldCBkYXRhID0geyBwb3M6IHsgeDogcG9zLngsIHk6IHBvcy55IH0gfTtcclxuICAgICAgICBUMk0uZGlzcGF0Y2godHlwZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGUgfHwgIXRoaXMuaXNUb3VjaGluZykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnJvb3ROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGxldCB0eXBlID0gJ3RvdWNoTW92ZScgKyB0aGlzLnRhZ0lkO1xyXG4gICAgICAgIGxldCBkYXRhID0geyBwb3M6IHsgeDogcG9zLngsIHk6IHBvcy55IH0gfTtcclxuICAgICAgICBUMk0uZGlzcGF0Y2godHlwZSwgZGF0YSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZSB8fCAhdGhpcy5pc1RvdWNoKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucm9vdE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hFbmQnICsgdGhpcy50YWdJZDtcclxuICAgICAgICBsZXQgZGF0YSA9IHsgcG9zOiB7IHg6IHBvcy54LCB5OiBwb3MueSB9IH07XHJcbiAgICAgICAgVDJNLmRpc3BhdGNoKHR5cGUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkRXZlbnRCeVQyTSgpIHtcclxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoJ3RvdWNoU3RhcnQnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaFN0YXJ0SGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoJ3RvdWNoTW92ZScgKyB0aGlzLnRhZ0lkLCB0aGlzLnRvdWNoTW92ZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKCd0b3VjaEVuZCcgKyB0aGlzLnRhZ0lkLCB0aGlzLnRvdWNoRW5kSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+agueaNruinpuaRuOaXtumXtOWIpOaWreaYr+WQpuS4uueCueWHu+S6i+S7tlxyXG4gICAgcHJpdmF0ZSBpc0NsaWNrRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdG91Y2hTdGFydERhdGE6IGFueSA9IG51bGw7XHJcblxyXG4gICAgLy/op6bmkbjlvIDlp4vkvY3nva5cclxuICAgIHByaXZhdGUgdG91Y2hTdGFydFBvczogY2MuVmVjMiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0SGFuZGxlcihkYXRhKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0UG9zID0gY2MudjIoZGF0YS5wb3MueCwgZGF0YS5wb3MueSk7XHJcbiAgICAgICAgdGhpcy5pc0NsaWNrRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydERhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVG91Y2hTdGFydChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHRoaXMucm9vdE5vZGU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjModGhpcy50b3VjaFN0YXJ0RGF0YS5wb3MueCwgdGhpcy50b3VjaFN0YXJ0RGF0YS5wb3MueSk7XHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hTdGFydEV2ZW50cykge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbeyBwb3M6IHRoaXMudG91Y2hTdGFydERhdGEucG9zLCB0YXJnZXQ6IHRoaXMubm9kZSB9XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hNb3ZlSGFuZGxlcihkYXRhKSB7XHJcbiAgICAgICAgLy/liKTmlq3lvZPliY3kvY3nva7kuI7op6bmkbjlvIDlp4vkvY3nva7nmoTot53nprvvvIzlpoLmnpzotoXov4fkuIDlrprot53nprvvvIzliJnkuI3lho3liKTmlq3kuLrngrnlh7vkuovku7ZcclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrRXZlbnQgJiYgdGhpcy50b3VjaFN0YXJ0UG9zKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMudG91Y2hTdGFydFBvcy5zdWIoY2MudjIoZGF0YS5wb3MueCwgZGF0YS5wb3MueSkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NsaWNrRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnREYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2hTdGFydERhdGEgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoZGF0YS5wb3MueCwgZGF0YS5wb3MueSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGV2ZW50SGFuZGxlciBvZiB0aGlzLnRvdWNoTW92aW5nRXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbeyBwb3M6IGRhdGEucG9zLCB0YXJnZXQ6IHRoaXMubm9kZSB9XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaEVuZEhhbmRsZXIoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2tFdmVudCAmJiB0aGlzLnRvdWNoU3RhcnRQb3MpIHtcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy50b3VjaFN0YXJ0UG9zLnN1YihjYy52MihkYXRhLnBvcy54LCBkYXRhLnBvcy55KSkubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NsaWNrRXZlbnQgPSB0cnVlOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoZGF0YS5wb3MueCwgZGF0YS5wb3MueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGV2ZW50SGFuZGxlciBvZiB0aGlzLnRvdWNoRW5kRXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlci5lbWl0KFt7IHBvczogZGF0YS5wb3MsIHRhcmdldDogdGhpcy5ub2RlLCBpc0NsaWNrOiB0aGlzLmlzQ2xpY2tFdmVudCB9XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==