
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
        // this.touchStartPos = cc.v2(data.pos.x, data.pos.y);
        // this.isClickEvent = true;
        // this.touchStartData = data;
        this.handleTouchStart(data);
    };
    DragSync.prototype.handleTouchStart = function (data) {
        this.node.parent = this.rootNode;
        this.node.position = cc.v3(data.pos.x, data.pos.y);
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, target: this.node }]);
        }
    };
    DragSync.prototype.touchMoveHandler = function (data) {
        //判断当前位置与触摸开始位置的距离，如果超过一定距离，则不再判断为点击事件
        // if (this.isClickEvent && this.touchStartPos) {
        //     let distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
        //     if (distance > 10) {
        //         this.isClickEvent = false;
        //         this.handleTouchStart(this.touchStartData);
        //         this.touchStartData = null;
        //     }
        // } else {
        this.node.position = cc.v3(data.pos.x, data.pos.y);
        for (var _i = 0, _a = this.touchMovingEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, target: this.node }]);
        }
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXENvbXBvbmVudHNcXERyYWdTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUdsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZJQztRQTNJVyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLHNCQUFnQixHQUFnQyxFQUFFLENBQUM7UUFFbkQsdUJBQWlCLEdBQWdDLEVBQUUsQ0FBQztRQUVwRCxvQkFBYyxHQUFnQyxFQUFFLENBQUM7UUFHakQsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBMEVqQyxpQkFBaUI7UUFDVCxrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixvQkFBYyxHQUFRLElBQUksQ0FBQztRQUVuQyxRQUFRO1FBQ0EsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBaUQxQyxDQUFDO2lCQTdJb0IsUUFBUTtJQWV6Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNYLEVBQUUsRUFBRSxLQUFLO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUM1QixPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FB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UztJQVJ4QyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkk1QjtJQUFELGVBQUM7Q0E3SUQsQUE2SUMsQ0E3SXFDLEVBQUUsQ0FBQyxTQUFTLEdBNklqRDtrQkE3SW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUMk0gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9TREsvVDJNXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdTeW5jIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSByb290Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0gfSlcclxuICAgIHByaXZhdGUgdG91Y2hTdGFydEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0gfSlcclxuICAgIHByaXZhdGUgdG91Y2hNb3ZpbmdFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdIH0pXHJcbiAgICBwcml2YXRlIHRvdWNoRW5kRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHRhZ0lkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGlzRW5hYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgaXNUb3VjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucm9vdE5vZGUgPSBjYy5maW5kKCdDYW52YXMvR2FtZVBhbmVsJyk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hdHRyKHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LFxyXG4gICAgICAgICAgICBpbml0UGFyZW50OiB0aGlzLm5vZGUucGFyZW50LFxyXG4gICAgICAgICAgICBpbml0UG9zOiB7IHg6IHRoaXMubm9kZS54LCB5OiB0aGlzLm5vZGUueSB9LFxyXG4gICAgICAgICAgICBpbml0U2libGluZ0luZGV4OiBpbmRleCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRhZ0lkID0gdGhpcy5ub2RlLm5hbWUgKyB0aGlzLm5vZGUucGFyZW50Lm5hbWUgKyB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudEJ5VDJNKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEVuYWJsZShpc0VuYWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNFbmFibGUgPSBpc0VuYWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVG91Y2hFdmVudCh0YXJnZXQ6IGNjLk5vZGUsIGNvbXBvbmVudDogc3RyaW5nLCBoYW5kbGVyczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHMucHVzaChuZXcgRHJhZ1N5bmMuRXZlbnRIYW5kbGVyKCkpO1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50c1swXS50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0RXZlbnRzWzBdLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHNbMF0uaGFuZGxlciA9IGhhbmRsZXJzWzBdO1xyXG5cclxuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzLnB1c2gobmV3IERyYWdTeW5jLkV2ZW50SGFuZGxlcigpKTtcclxuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzWzBdLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzWzBdLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzWzBdLmhhbmRsZXIgPSBoYW5kbGVyc1sxXTtcclxuXHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50cy5wdXNoKG5ldyBEcmFnU3luYy5FdmVudEhhbmRsZXIoKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS5oYW5kbGVyID0gaGFuZGxlcnNbMl07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnJvb3ROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGxldCB0eXBlID0gJ3RvdWNoU3RhcnQnICsgdGhpcy50YWdJZDtcclxuICAgICAgICBsZXQgZGF0YSA9IHsgcG9zOiB7IHg6IHBvcy54LCB5OiBwb3MueSB9IH07XHJcbiAgICAgICAgVDJNLmRpc3BhdGNoKHR5cGUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlIHx8ICF0aGlzLmlzVG91Y2hpbmcpIHJldHVybjtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5yb290Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBsZXQgdHlwZSA9ICd0b3VjaE1vdmUnICsgdGhpcy50YWdJZDtcclxuICAgICAgICBsZXQgZGF0YSA9IHsgcG9zOiB7IHg6IHBvcy54LCB5OiBwb3MueSB9IH07XHJcbiAgICAgICAgVDJNLmRpc3BhdGNoKHR5cGUsIGRhdGEsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0aGlzLmlzVG91Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGUgfHwgIXRoaXMuaXNUb3VjaCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnJvb3ROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGxldCB0eXBlID0gJ3RvdWNoRW5kJyArIHRoaXMudGFnSWQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7IHBvczogeyB4OiBwb3MueCwgeTogcG9zLnkgfSB9O1xyXG4gICAgICAgIFQyTS5kaXNwYXRjaCh0eXBlLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50QnlUMk0oKSB7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKCd0b3VjaFN0YXJ0JyArIHRoaXMudGFnSWQsIHRoaXMudG91Y2hTdGFydEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKCd0b3VjaE1vdmUnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaE1vdmVIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcigndG91Y2hFbmQnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaEVuZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/moLnmja7op6bmkbjml7bpl7TliKTmlq3mmK/lkKbkuLrngrnlh7vkuovku7ZcclxuICAgIHByaXZhdGUgaXNDbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnREYXRhOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8v6Kem5pG45byA5aeL5L2N572uXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdG91Y2hTdGFydEhhbmRsZXIoZGF0YSkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIC8vIHRoaXMudG91Y2hTdGFydFBvcyA9IGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpO1xyXG4gICAgICAgIC8vIHRoaXMuaXNDbGlja0V2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLnRvdWNoU3RhcnREYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLmhhbmRsZVRvdWNoU3RhcnQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVUb3VjaFN0YXJ0KGRhdGEpIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGhpcy5yb290Tm9kZTtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MyhkYXRhLnBvcy54LCBkYXRhLnBvcy55KTtcclxuICAgICAgICBmb3IgKGxldCBldmVudEhhbmRsZXIgb2YgdGhpcy50b3VjaFN0YXJ0RXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlci5lbWl0KFt7IHBvczogZGF0YS5wb3MsIHRhcmdldDogdGhpcy5ub2RlIH1dKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaE1vdmVIYW5kbGVyKGRhdGEpIHtcclxuICAgICAgICAvL+WIpOaWreW9k+WJjeS9jee9ruS4juinpuaRuOW8gOWni+S9jee9rueahOi3neemu++8jOWmguaenOi2hei/h+S4gOWumui3neemu++8jOWImeS4jeWGjeWIpOaWreS4uueCueWHu+S6i+S7tlxyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzQ2xpY2tFdmVudCAmJiB0aGlzLnRvdWNoU3RhcnRQb3MpIHtcclxuICAgICAgICAvLyAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy50b3VjaFN0YXJ0UG9zLnN1YihjYy52MihkYXRhLnBvcy54LCBkYXRhLnBvcy55KSkubWFnKCk7XHJcbiAgICAgICAgLy8gICAgIGlmIChkaXN0YW5jZSA+IDEwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzQ2xpY2tFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5oYW5kbGVUb3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydERhdGEpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy50b3VjaFN0YXJ0RGF0YSA9IG51bGw7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MyhkYXRhLnBvcy54LCBkYXRhLnBvcy55KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hNb3ZpbmdFdmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlci5lbWl0KFt7IHBvczogZGF0YS5wb3MsIHRhcmdldDogdGhpcy5ub2RlIH1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoRW5kSGFuZGxlcihkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja0V2ZW50ICYmIHRoaXMudG91Y2hTdGFydFBvcykge1xyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLnRvdWNoU3RhcnRQb3Muc3ViKGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpKS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDw9IDEwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2xpY2tFdmVudCA9IHRydWU7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MyhkYXRhLnBvcy54LCBkYXRhLnBvcy55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hFbmRFdmVudHMpIHtcclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3sgcG9zOiBkYXRhLnBvcywgdGFyZ2V0OiB0aGlzLm5vZGUsIGlzQ2xpY2s6IHRoaXMuaXNDbGlja0V2ZW50IH1dKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19