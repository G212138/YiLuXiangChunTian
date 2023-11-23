
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/GameMaozi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVNYW96aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLG1FQUFrRTtBQUNsRSxrREFBaUQ7QUFDakQsaURBQTRDO0FBQzVDLCtCQUEwQjtBQUMxQiw2Q0FBNEM7QUFFdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUErQ0M7UUE3Q1csWUFBTSxHQUFZLElBQUksQ0FBQzs7SUE2Q25DLENBQUM7SUEzQ0csMEJBQU0sR0FBTjtRQUNJLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELDZCQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTywrQkFBVyxHQUFuQixVQUFvQixHQUFZO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTztTQUNWO1FBQ0QsK0VBQStFO1FBQy9FLCtCQUErQjtRQUMvQixJQUFJO1FBQ0osSUFBSSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUN6QjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLEdBQVk7UUFDM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUU7WUFDM0IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxPQUFPLGlCQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLHdCQUFJLEdBQVgsVUFBWSxJQUFhO1FBQ3JCLDJCQUFZLENBQUMsVUFBVSxDQUFDLHlCQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtZQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEc7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN0Qiw0QkFBNEI7SUFDaEMsQ0FBQztJQUVNLDZCQUFTLEdBQWhCLFVBQWlCLE1BQWU7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDeEIsQ0FBQztJQTlDZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQStDN0I7SUFBRCxnQkFBQztDQS9DRCxBQStDQyxDQS9Dc0MsRUFBRSxDQUFDLFNBQVMsR0ErQ2xEO2tCQS9Db0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEhpdFRlc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9IaXRUZXN0XCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgR2FtZU1hb3ppRHJhZyBmcm9tIFwiLi9HYW1lTWFvemlEcmFnXCI7XHJcbmltcG9ydCBSb2xlIGZyb20gXCIuL1JvbGVcIjtcclxuaW1wb3J0IHsgU291bmRDb25maWcgfSBmcm9tIFwiLi9Tb3VuZENvbmZpZ1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFvemkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgZW5hYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX01BT1pJX0RSQUcsIHRoaXMub25EcmFnTWFvemksIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkdBTUVfTUFPWklfRFJBRywgdGhpcy5vbkRyYWdNYW96aSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRyYWdNYW96aShwb3M6IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFJvbGUpLmdldE1hb3ppTm9kZSgpLmNoaWxkcmVuQ291bnQgPT0gMCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKEhpdFRlc3QucG9zSW5SZWN0KG5ldyBjYy5WZWMyKHBvcy54LCBwb3MueSksIHRoaXMubm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMS43O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDEuNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzUG9zSW5SZWN0KHBvczogY2MuVmVjMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlID09IGZhbHNlKSB7IFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBIaXRUZXN0LnBvc0luUmVjdChuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCB0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaWxsKGl0ZW06IGNjLk5vZGUpIHtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuaUvue9rumfs+aViFwiXSwgZmFsc2UsIGZhbHNlLGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoUm9sZSkuZ2V0TWFvemlOb2RlKCkuY2hpbGRyZW5Db3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoUm9sZSkuZ2V0TWFvemlOb2RlKCkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoUm9sZSkuZ2V0TWFvemlOb2RlKCk7XHJcbiAgICAgICAgaXRlbS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApOyAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChSb2xlKS5nZXRNYW96aU5vZGUoKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDEuNTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEVuYWJsZShlbmFibGU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmVuYWJsZSA9IGVuYWJsZVxyXG4gICAgfVxyXG59XHJcbiJdfQ==