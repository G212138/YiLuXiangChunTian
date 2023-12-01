
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Game_1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2cb0dgiygBFCZgJvqDitRR6', 'Game_1');
// game/scripts/UI/Item/Game_1.ts

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
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var Game_1_Type_1 = require("./Game_1_Type");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game_1 = /** @class */ (function (_super) {
    __extends(Game_1, _super);
    function Game_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Game_1.prototype.initGame = function () {
        this.node.getChildByName('paizi_1').opacity = 255;
        this.node.getChildByName('paizi_2').opacity = 0;
        this.node.getChildByName('right_panel').active = false;
        this.initEffect();
    };
    Game_1.prototype.reconnect = function () {
        var _this = this;
        var curIndex = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.levelTypeIndex;
        var ditu_panel = this.node.getChildByName('ditu_panel');
        var right_panel = this.node.getChildByName('right_panel');
        var target = ditu_panel.children[curIndex];
        var paizi_1 = this.node.getChildByName('paizi_1');
        var paizi_2 = this.node.getChildByName('paizi_2');
        target.getChildByName("highLight").active = true;
        for (var i = 0; i < ditu_panel.childrenCount; i++) {
            ditu_panel.children[i].getComponent(Game_1_Type_1.default).setIsCurrent(false);
            ditu_panel.children[i].getChildByName("touch_mask").active = false;
            ditu_panel.children[i].getChildByName("game_node").active = false;
        }
        target.getComponent(Game_1_Type_1.default).setIsCurrent(true);
        if (paizi_2.opacity == 0) {
            this.scheduleOnce(function () {
                paizi_1.opacity = 0;
                paizi_2.opacity = 255;
                cc.tween(target).to(0.5, { position: cc.v3(0, 0) }).to(0.5, { scale: 1 }).call(function () {
                    target.getChildByName("touch_mask").active = true;
                    target.getChildByName("game_node").active = true;
                    UIHelp_1.UIHelp.closeMask();
                }).start();
                right_panel.active = true;
                for (var i = 0; i < right_panel.childrenCount; i++) {
                    right_panel.children[i].active = false;
                }
                for (var i = 0; i < right_panel.childrenCount; i++) {
                    if (i != curIndex) {
                        right_panel.children[i].active = true;
                    }
                }
                _this.scheduleOnce(function () {
                    for (var i = 0; i < ditu_panel.childrenCount; i++) {
                        var isCurrent = ditu_panel.children[i].getComponent(Game_1_Type_1.default).getIsCurrent();
                        if (!isCurrent) {
                            var index = ditu_panel.children[i].getComponent(Game_1_Type_1.default).getIndex();
                            var pos = right_panel.children[index].position;
                            cc.tween(ditu_panel.children[i]).to(0.5, { scale: 0.25, position: pos }).start();
                        }
                    }
                }, 0);
            }, 1);
        }
        else {
            cc.tween(target).to(0.5, { position: cc.v3(0, 0) }).to(0.5, { scale: 1 }).call(function () {
                target.getChildByName("touch_mask").active = true;
                target.getChildByName("game_node").active = true;
                UIHelp_1.UIHelp.closeMask();
            }).start();
            right_panel.active = true;
            for (var i = 0; i < right_panel.childrenCount; i++) {
                right_panel.children[i].active = false;
            }
            for (var i = 0; i < right_panel.childrenCount; i++) {
                if (i != curIndex) {
                    right_panel.children[i].active = true;
                }
            }
            this.scheduleOnce(function () {
                for (var i = 0; i < ditu_panel.childrenCount; i++) {
                    var isCurrent = ditu_panel.children[i].getComponent(Game_1_Type_1.default).getIsCurrent();
                    if (!isCurrent) {
                        var index = ditu_panel.children[i].getComponent(Game_1_Type_1.default).getIndex();
                        var pos = right_panel.children[index].position;
                        cc.tween(ditu_panel.children[i]).to(0.5, { scale: 0.25, position: pos }).start();
                    }
                }
            }, 0);
        }
    };
    Game_1.prototype.initEffect = function () {
        var ditu_panel = this.node.getChildByName('ditu_panel');
        ditu_panel.active = true;
        for (var i = 0; i < ditu_panel.childrenCount; i++) {
            ditu_panel.children[i].scale = 0;
            ditu_panel.children[i].getChildByName("highLight").active = false;
            ditu_panel.children[i].getChildByName("game_node").active = false;
            ditu_panel.children[i].getChildByName("touch_mask").active = false;
            ditu_panel.children[i].getChildByName("luxian").active = false;
        }
        //所有子节点逐个出现
        for (var i = 0; i < ditu_panel.childrenCount; i++) {
            var node = ditu_panel.children[i];
            cc.tween(node).delay(i * 0.2).to(0.3, { scale: 0.45 }, { easing: 'backOut' }).start();
        }
        this.scheduleOnce(function () {
            for (var i = 0; i < ditu_panel.childrenCount; i++) {
                var node = ditu_panel.children[i];
                ditu_panel.children[i].getChildByName("luxian").active = true;
                ditu_panel.children[i].getChildByName("luxian").opacity = 0;
                cc.tween(node.getChildByName("luxian")).delay(i * 0.2).to(0.3, { opacity: 255 }).call(function () {
                    UIHelp_1.UIHelp.closeMask();
                }).start();
            }
        }, 0.2 * ditu_panel.childrenCount);
    };
    Game_1.prototype.onClickMap = function (data) {
        var _this = this;
        if (data.target.getComponent(Game_1_Type_1.default).getIsCurrent()) {
            return;
        }
        UIHelp_1.UIHelp.showMask();
        var paizi_1 = this.node.getChildByName('paizi_1');
        var paizi_2 = this.node.getChildByName('paizi_2');
        data.target.getChildByName("highLight").active = true;
        var ditu_panel = this.node.getChildByName('ditu_panel');
        var right_panel = this.node.getChildByName('right_panel');
        for (var i = 0; i < ditu_panel.childrenCount; i++) {
            ditu_panel.children[i].getComponent(Game_1_Type_1.default).setIsCurrent(false);
            ditu_panel.children[i].getChildByName("touch_mask").active = false;
            ditu_panel.children[i].getChildByName("game_node").active = false;
        }
        data.target.getComponent(Game_1_Type_1.default).setIsCurrent(true);
        var curIndex = data.target.getComponent(Game_1_Type_1.default).getIndex();
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.levelTypeIndex = curIndex;
        if (paizi_2.opacity == 0) {
            this.scheduleOnce(function () {
                paizi_1.opacity = 0;
                paizi_2.opacity = 255;
                cc.tween(data.target).to(0.5, { position: cc.v3(0, 0) }).to(0.5, { scale: 1 }).call(function () {
                    data.target.getChildByName("touch_mask").active = true;
                    data.target.getChildByName("game_node").active = true;
                    UIHelp_1.UIHelp.closeMask();
                }).start();
                right_panel.active = true;
                for (var i = 0; i < right_panel.childrenCount; i++) {
                    right_panel.children[i].active = false;
                }
                for (var i = 0; i < right_panel.childrenCount; i++) {
                    if (i != curIndex) {
                        right_panel.children[i].active = true;
                    }
                }
                _this.scheduleOnce(function () {
                    for (var i = 0; i < ditu_panel.childrenCount; i++) {
                        var isCurrent = ditu_panel.children[i].getComponent(Game_1_Type_1.default).getIsCurrent();
                        if (!isCurrent) {
                            var index = ditu_panel.children[i].getComponent(Game_1_Type_1.default).getIndex();
                            var pos = right_panel.children[index].position;
                            cc.tween(ditu_panel.children[i]).to(0.5, { scale: 0.25, position: pos }).start();
                        }
                    }
                }, 0);
            }, 1);
        }
        else {
            cc.tween(data.target).to(0.5, { position: cc.v3(0, 0) }).to(0.5, { scale: 1 }).call(function () {
                data.target.getChildByName("touch_mask").active = true;
                data.target.getChildByName("game_node").active = true;
                UIHelp_1.UIHelp.closeMask();
            }).start();
            right_panel.active = true;
            for (var i = 0; i < right_panel.childrenCount; i++) {
                right_panel.children[i].active = false;
            }
            for (var i = 0; i < right_panel.childrenCount; i++) {
                if (i != curIndex) {
                    right_panel.children[i].active = true;
                }
            }
            this.scheduleOnce(function () {
                for (var i = 0; i < ditu_panel.childrenCount; i++) {
                    var isCurrent = ditu_panel.children[i].getComponent(Game_1_Type_1.default).getIsCurrent();
                    if (!isCurrent) {
                        var index = ditu_panel.children[i].getComponent(Game_1_Type_1.default).getIndex();
                        var pos = right_panel.children[index].position;
                        cc.tween(ditu_panel.children[i]).to(0.5, { scale: 0.25, position: pos }).start();
                    }
                }
            }, 0);
        }
    };
    Game_1 = __decorate([
        ccclass
    ], Game_1);
    return Game_1;
}(cc.Component));
exports.default = Game_1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVfMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsaUVBQWdFO0FBRWhFLDZDQUF3QztBQUdsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDs7SUFnTUEsQ0FBQztJQTlMVSx5QkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSwwQkFBUyxHQUFoQjtRQUFBLGlCQTJFQztRQTFFRyxJQUFJLFFBQVEsR0FBRyxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7UUFDM0UsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUQsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxJ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O2lCQUNKO1lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7SUFFTCxDQUFDO0lBL0xnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBZ00xQjtJQUFELGFBQUM7Q0FoTUQsQUFnTUMsQ0FoTW1DLEVBQUUsQ0FBQyxTQUFTLEdBZ00vQztrQkFoTW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9VSUhlbHBcIjtcclxuaW1wb3J0IHsgQ3VzdG9tU3luY0RhdGEgfSBmcm9tIFwiLi4vLi4vRGF0YS9DdXN0b21TeW5jRGF0YVwiO1xyXG5pbXBvcnQgR2FtZV8xX1R5cGUgZnJvbSBcIi4vR2FtZV8xX1R5cGVcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZV8xIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgaW5pdEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdwYWl6aV8xJykub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3BhaXppXzInKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3JpZ2h0X3BhbmVsJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0RWZmZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlY29ubmVjdCgpIHtcclxuICAgICAgICBsZXQgY3VySW5kZXggPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbFR5cGVJbmRleDtcclxuICAgICAgICBsZXQgZGl0dV9wYW5lbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZGl0dV9wYW5lbCcpO1xyXG4gICAgICAgIGxldCByaWdodF9wYW5lbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncmlnaHRfcGFuZWwnKTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZGl0dV9wYW5lbC5jaGlsZHJlbltjdXJJbmRleF07XHJcblxyXG4gICAgICAgIGxldCBwYWl6aV8xID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdwYWl6aV8xJyk7XHJcbiAgICAgICAgbGV0IHBhaXppXzIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3BhaXppXzInKTtcclxuICAgICAgICB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoTGlnaHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdHVfcGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVfMV9UeXBlKS5zZXRJc0N1cnJlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidG91Y2hfbWFza1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImdhbWVfbm9kZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0LmdldENvbXBvbmVudChHYW1lXzFfVHlwZSkuc2V0SXNDdXJyZW50KHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwYWl6aV8yLm9wYWNpdHkgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYWl6aV8xLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgcGFpemlfMi5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRhcmdldCkudG8oMC41LCB7cG9zaXRpb246IGNjLnYzKDAsIDApIH0pLnRvKDAuNSwge3NjYWxlOiAxfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmdldENoaWxkQnlOYW1lKFwidG91Y2hfbWFza1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5nZXRDaGlsZEJ5TmFtZShcImdhbWVfbm9kZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmlnaHRfcGFuZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRfcGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfcGFuZWwuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9IGN1ckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0X3BhbmVsLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl0dV9wYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzQ3VycmVudCA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVfMV9UeXBlKS5nZXRJc0N1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0N1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVfMV9UeXBlKS5nZXRJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHJpZ2h0X3BhbmVsLmNoaWxkcmVuW2luZGV4XS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGRpdHVfcGFuZWwuY2hpbGRyZW5baV0pLnRvKDAuNSwgeyBzY2FsZTogMC4yNSAsIHBvc2l0aW9uOiBwb3N9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRhcmdldCkudG8oMC41LCB7cG9zaXRpb246IGNjLnYzKDAsIDApIH0pLnRvKDAuNSwge3NjYWxlOiAxfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3VjaF9tYXNrXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lX25vZGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0X3BhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRfcGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByaWdodF9wYW5lbC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gY3VySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodF9wYW5lbC5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl0dV9wYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNDdXJyZW50ID0gZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoR2FtZV8xX1R5cGUpLmdldElzQ3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNDdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVfMV9UeXBlKS5nZXRJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gcmlnaHRfcGFuZWwuY2hpbGRyZW5baW5kZXhdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihkaXR1X3BhbmVsLmNoaWxkcmVuW2ldKS50bygwLjUsIHsgc2NhbGU6IDAuMjUgLCBwb3NpdGlvbjogcG9zfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRFZmZlY3QoKSB7XHJcbiAgICAgICAgbGV0IGRpdHVfcGFuZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2RpdHVfcGFuZWwnKTtcclxuICAgICAgICBkaXR1X3BhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXR1X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImhpZ2hMaWdodFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImdhbWVfbm9kZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInRvdWNoX21hc2tcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJsdXhpYW5cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5omA5pyJ5a2Q6IqC54K56YCQ5Liq5Ye6546wXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXR1X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpLmRlbGF5KGkgKiAwLjIpLnRvKDAuMywgeyBzY2FsZTogMC40NSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXR1X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImx1eGlhblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImx1eGlhblwiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsdXhpYW5cIikpLmRlbGF5KGkgKiAwLjIpLnRvKDAuMywgeyBvcGFjaXR5OiAyNTUgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0sIDAuMiAqIGRpdHVfcGFuZWwuY2hpbGRyZW5Db3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrTWFwKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmIChkYXRhLnRhcmdldC5nZXRDb21wb25lbnQoR2FtZV8xX1R5cGUpLmdldElzQ3VycmVudCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgVUlIZWxwLnNob3dNYXNrKCk7XHJcbiAgICAgICAgbGV0IHBhaXppXzEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3BhaXppXzEnKTtcclxuICAgICAgICBsZXQgcGFpemlfMiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncGFpemlfMicpO1xyXG4gICAgICAgIGRhdGEudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiaGlnaExpZ2h0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGRpdHVfcGFuZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2RpdHVfcGFuZWwnKTtcclxuICAgICAgICBsZXQgcmlnaHRfcGFuZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3JpZ2h0X3BhbmVsJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXR1X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChHYW1lXzFfVHlwZSkuc2V0SXNDdXJyZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInRvdWNoX21hc2tcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lX25vZGVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEudGFyZ2V0LmdldENvbXBvbmVudChHYW1lXzFfVHlwZSkuc2V0SXNDdXJyZW50KHRydWUpO1xyXG4gICAgICAgIGxldCBjdXJJbmRleCA9IGRhdGEudGFyZ2V0LmdldENvbXBvbmVudChHYW1lXzFfVHlwZSkuZ2V0SW5kZXgoKTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbFR5cGVJbmRleCA9IGN1ckluZGV4O1xyXG5cclxuICAgICAgICBpZiAocGFpemlfMi5vcGFjaXR5ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFpemlfMS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIHBhaXppXzIub3BhY2l0eSA9IDI1NTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihkYXRhLnRhcmdldCkudG8oMC41LCB7cG9zaXRpb246IGNjLnYzKDAsIDApIH0pLnRvKDAuNSwge3NjYWxlOiAxfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3VjaF9tYXNrXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lX25vZGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJpZ2h0X3BhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0X3BhbmVsLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByaWdodF9wYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPSBjdXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodF9wYW5lbC5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdHVfcGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0N1cnJlbnQgPSBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChHYW1lXzFfVHlwZSkuZ2V0SXNDdXJyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNDdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChHYW1lXzFfVHlwZSkuZ2V0SW5kZXgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSByaWdodF9wYW5lbC5jaGlsZHJlbltpbmRleF0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihkaXR1X3BhbmVsLmNoaWxkcmVuW2ldKS50bygwLjUsIHsgc2NhbGU6IDAuMjUgLCBwb3NpdGlvbjogcG9zfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy50d2VlbihkYXRhLnRhcmdldCkudG8oMC41LCB7cG9zaXRpb246IGNjLnYzKDAsIDApIH0pLnRvKDAuNSwge3NjYWxlOiAxfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcInRvdWNoX21hc2tcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRhdGEudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiZ2FtZV9ub2RlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICByaWdodF9wYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcmlnaHRfcGFuZWwuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByaWdodF9wYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpICE9IGN1ckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfcGFuZWwuY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdHVfcGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzQ3VycmVudCA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVfMV9UeXBlKS5nZXRJc0N1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQ3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChHYW1lXzFfVHlwZSkuZ2V0SW5kZXgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHJpZ2h0X3BhbmVsLmNoaWxkcmVuW2luZGV4XS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oZGl0dV9wYW5lbC5jaGlsZHJlbltpXSkudG8oMC41LCB7IHNjYWxlOiAwLjI1ICwgcG9zaXRpb246IHBvc30pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==