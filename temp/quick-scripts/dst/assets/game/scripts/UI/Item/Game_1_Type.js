
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Game_1_Type.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f460ckgnNhMvry+EBvCBGUL', 'Game_1_Type');
// game/scripts/UI/Item/Game_1_Type.ts

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
var HitTest_1 = require("../../../../frame/scripts/Utils/HitTest");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game_1_Type = /** @class */ (function (_super) {
    __extends(Game_1_Type, _super);
    function Game_1_Type() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.icon = [];
        _this._initPos = null;
        _this._isCurrent = false;
        _this._curPointIndex = null;
        _this.graphics = null;
        _this._isDrawing = false;
        _this.lineArr = [];
        return _this;
    }
    Game_1_Type.prototype.onLoad = function () {
        this._initPos = this.node.position;
        this.graphics = this.node.getChildByName("dragLine_node").getComponent(cc.Graphics);
    };
    Game_1_Type.prototype.setIsCurrent = function (value) {
        this._isCurrent = value;
        this.node.getChildByName("highLight").active = value;
    };
    Game_1_Type.prototype.getIsCurrent = function () {
        return this._isCurrent;
    };
    Game_1_Type.prototype.getIndex = function () {
        return this.index;
    };
    Game_1_Type.prototype.onDragStart = function (data) {
        var _this = this;
        var pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        this.icon.forEach(function (item) {
            if (_this.isPosInRect(pos, item) && (_this._curPointIndex == null || _this._curPointIndex == Number(item.name))) {
                item.getChildByName("icon_check").active = true;
                item.getChildByName("icon_check").scale = 0;
                cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                _this._curPointIndex = Number(item.name);
                _this._isDrawing = true;
                var linePos = _this.node.getChildByName("dragLine_node").convertToNodeSpaceAR(pos);
                _this.graphics.moveTo(linePos.x, linePos.y);
                _this.graphics.strokeColor = cc.Color.RED;
                _this.graphics.fillColor = cc.Color.RED;
                _this.graphics.lineWidth = 10;
            }
        });
    };
    Game_1_Type.prototype.onDragMove = function (data) {
        var _this = this;
        var pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        if (this._isDrawing) {
            var linePos = this.node.getChildByName("dragLine_node").convertToNodeSpaceAR(pos);
            this.graphics.lineTo(linePos.x, linePos.y);
            this.graphics.stroke();
        }
        this.icon.forEach(function (item) {
            if (_this.isPosInRect(pos, item) && (_this._curPointIndex != Number(item.name))) {
                console.log("画线成功");
                var lineArr_1 = [_this._curPointIndex, Number(item.name)];
                if (_this.lineArr.length > 0) {
                    var isExist_1 = false;
                    _this.lineArr.forEach(function (item) {
                        if (item[0] == lineArr_1[0] && item[1] == lineArr_1[1]) {
                            isExist_1 = true;
                        }
                    });
                    if (!isExist_1) {
                        _this.lineArr.push(lineArr_1);
                    }
                }
                else {
                    _this.lineArr.push(lineArr_1);
                }
                _this._curPointIndex = Number(item.name);
                if (item.getChildByName("icon_check").active == false) {
                    item.getChildByName("icon_check").active = true;
                    item.getChildByName("icon_check").scale = 0;
                    cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                    _this._curPointIndex = Number(item.name);
                }
            }
            else {
                item.getChildByName("icon_check").active = false;
            }
        });
    };
    Game_1_Type.prototype.onDragEnd = function (data) {
        this._isDrawing = false;
        this.icon.forEach(function (item) {
            item.getChildByName("icon_check").active = false;
        });
        var pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        data.target.position = cc.Vec3.ZERO;
        data.target.parent = this.node;
        console.log("onDragEnd", this.lineArr);
    };
    Game_1_Type.prototype.isPosInRect = function (pos, point) {
        return HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), point);
    };
    __decorate([
        property(cc.Integer)
    ], Game_1_Type.prototype, "index", void 0);
    __decorate([
        property(cc.Node)
    ], Game_1_Type.prototype, "icon", void 0);
    Game_1_Type = __decorate([
        ccclass
    ], Game_1_Type);
    return Game_1_Type;
}(cc.Component));
exports.default = Game_1_Type;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVfMV9UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUFrRTtBQUU1RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXdHQztRQXJHVyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFVBQUksR0FBYyxFQUFFLENBQUM7UUFFckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixvQkFBYyxHQUFXLElBQUksQ0FBQztRQUM5QixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUM3QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixhQUFPLEdBQWUsRUFBRSxDQUFDOztJQTRGckMsQ0FBQztJQTFGRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLEtBQWM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN6RCxDQUFDO0lBRU0sa0NBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVNLDhCQUFRLEdBQWY7UUFDSSxPQUFPLElBQUks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SSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFsR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDSztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNXO0lBTFosV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXdHL0I7SUFBRCxrQkFBQztDQXhHRCxBQXdHQyxDQXhHd0MsRUFBRSxDQUFDLFNBQVMsR0F3R3BEO2tCQXhHb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhpdFRlc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9IaXRUZXN0XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVfMV9UeXBlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgaWNvbjogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdFBvczogY2MuVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9pc0N1cnJlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2N1clBvaW50SW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9pc0RyYXdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbGluZUFycjogbnVtYmVyW11bXSA9IFtdO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl9pbml0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkcmFnTGluZV9ub2RlXCIpLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldElzQ3VycmVudCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2lzQ3VycmVudCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpZ2hMaWdodFwiKS5hY3RpdmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXNDdXJyZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0N1cnJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRyYWdTdGFydChkYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgcG9zID0gZGF0YS50YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihkYXRhLnBvcy54LCBkYXRhLnBvcy55KSk7XHJcbiAgICAgICAgdGhpcy5pY29uLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNQb3NJblJlY3QocG9zLCBpdGVtKSAmJiAodGhpcy5fY3VyUG9pbnRJbmRleCA9PSBudWxsIHx8IHRoaXMuX2N1clBvaW50SW5kZXggPT0gTnVtYmVyKGl0ZW0ubmFtZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvbl9jaGVja1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25fY2hlY2tcIikuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25fY2hlY2tcIikpLnRvKDAuMiwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJQb2ludEluZGV4ID0gTnVtYmVyKGl0ZW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0RyYXdpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmVQb3MgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkcmFnTGluZV9ub2RlXCIpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyhsaW5lUG9zLngsIGxpbmVQb3MueSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVXaWR0aCA9IDEwO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EcmFnTW92ZShkYXRhOiBhbnkpIHsgICAgICAgIFxyXG4gICAgICAgIGxldCBwb3MgPSBkYXRhLnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpKTtcclxuICAgICAgICBpZiAodGhpcy5faXNEcmF3aW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBsaW5lUG9zID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZHJhZ0xpbmVfbm9kZVwiKS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhsaW5lUG9zLngsIGxpbmVQb3MueSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUG9zSW5SZWN0KHBvcywgaXRlbSkgJiYgKHRoaXMuX2N1clBvaW50SW5kZXggIT0gTnVtYmVyKGl0ZW0ubmFtZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueUu+e6v+aIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5lQXJyID0gW3RoaXMuX2N1clBvaW50SW5kZXgsIE51bWJlcihpdGVtLm5hbWUpXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpbmVBcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0V4aXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lQXJyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bMF0gPT0gbGluZUFyclswXSAmJiBpdGVtWzFdID09IGxpbmVBcnJbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0V4aXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGluZUFyci5wdXNoKGxpbmVBcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lQXJyLnB1c2gobGluZUFycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJQb2ludEluZGV4ID0gTnVtYmVyKGl0ZW0ubmFtZSk7ICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2NoZWNrXCIpLmFjdGl2ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2NoZWNrXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25fY2hlY2tcIikuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2NoZWNrXCIpKS50bygwLjIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1clBvaW50SW5kZXggPSBOdW1iZXIoaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvbl9jaGVja1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EcmFnRW5kKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2lzRHJhd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaWNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2NoZWNrXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBwb3MgPSBkYXRhLnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpKTtcclxuICAgICAgICBkYXRhLnRhcmdldC5wb3NpdGlvbiA9IGNjLlZlYzMuWkVSTztcclxuICAgICAgICBkYXRhLnRhcmdldC5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkRyYWdFbmRcIiwgdGhpcy5saW5lQXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzUG9zSW5SZWN0KHBvczogY2MuVmVjMiwgcG9pbnQ6IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gSGl0VGVzdC5wb3NJblJlY3QobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgcG9pbnQpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19