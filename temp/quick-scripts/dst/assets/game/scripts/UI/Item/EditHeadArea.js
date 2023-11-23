
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/EditHeadArea.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEVkaXRIZWFkQXJlYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsbUVBQWtFO0FBQ2xFLGtEQUFpRDtBQUNqRCx1Q0FBa0M7QUFHNUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFnQ0M7UUE5QlcsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUE4QjlCLENBQUM7SUE1QkcsNkJBQU0sR0FBTjtRQUNJLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyxpQ0FBVSxHQUFsQixVQUFtQixHQUFZO1FBQzNCLElBQUksaUJBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRU0sa0NBQVcsR0FBbEIsVUFBbUIsR0FBWTtRQUMzQixPQUFPLGlCQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLDJCQUFJLEdBQVgsVUFBWSxJQUFhO1FBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7K0NBQ0s7SUFGVCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBZ0NoQztJQUFELG1CQUFDO0NBaENELEFBZ0NDLENBaEN5QyxFQUFFLENBQUMsU0FBUyxHQWdDckQ7a0JBaENvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSGl0VGVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL0hpdFRlc3RcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBEcmFnSGVhZCBmcm9tIFwiLi9EcmFnSGVhZFwiO1xyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdEhlYWRBcmVhIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5EUkFHX0hFQUQsIHRoaXMub25EcmFnSGVhZCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5EUkFHX0hFQUQsIHRoaXMub25EcmFnSGVhZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRyYWdIZWFkKHBvczogY2MuVmVjMikge1xyXG4gICAgICAgIGlmIChIaXRUZXN0LnBvc0luUmVjdChuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCB0aGlzLm5vZGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDIxNSwgMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1Bvc0luUmVjdChwb3M6IGNjLlZlYzIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gSGl0VGVzdC5wb3NJblJlY3QobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgdGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlsbChpdGVtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbkNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KERyYWdIZWFkKS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMoMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuIl19