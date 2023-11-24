
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
        if (paizi_2.opacity == 0) {
            this.scheduleOnce(function () {
                paizi_1.opacity = 0;
                paizi_2.opacity = 255;
                cc.tween(data.target).to(0.5, { position: cc.v3(0, -145) }).to(0.5, { scale: 1 }).call(function () {
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
            cc.tween(data.target).to(0.5, { position: cc.v3(0, -145) }).to(0.5, { scale: 1 }).call(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVfMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZ0U7QUFDaEUsNkNBQXdDO0FBR2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEOztJQStHQSxDQUFDO0lBN0dVLHlCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLDJCQUFVLEdBQWxCO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbEUsVUFBVSxDQUFDLFFBQVEsQ0FB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QUFDLFlBQVksQ0FBQztnQkFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDL0MsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUNoRixJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNaLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDeEUsSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQy9DLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUNwRjtpQkFDSjtZQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNUO0lBRUwsQ0FBQztJQTlHZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQStHMUI7SUFBRCxhQUFDO0NBL0dELEFBK0dDLENBL0dtQyxFQUFFLENBQUMsU0FBUyxHQStHL0M7a0JBL0dvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVUlIZWxwXCI7XHJcbmltcG9ydCBHYW1lXzFfVHlwZSBmcm9tIFwiLi9HYW1lXzFfVHlwZVwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lXzEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBpbml0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3BhaXppXzEnKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncGFpemlfMicpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncmlnaHRfcGFuZWwnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRFZmZlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRFZmZlY3QoKSB7XHJcbiAgICAgICAgbGV0IGRpdHVfcGFuZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2RpdHVfcGFuZWwnKTtcclxuICAgICAgICBkaXR1X3BhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXR1X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImhpZ2hMaWdodFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImdhbWVfbm9kZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInRvdWNoX21hc2tcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJsdXhpYW5cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5omA5pyJ5a2Q6IqC54K56YCQ5Liq5Ye6546wXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXR1X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpLmRlbGF5KGkgKiAwLjIpLnRvKDAuMywgeyBzY2FsZTogMC40NSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXR1X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImx1eGlhblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImx1eGlhblwiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsdXhpYW5cIikpLmRlbGF5KGkgKiAwLjIpLnRvKDAuMywgeyBvcGFjaXR5OiAyNTUgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0sIDAuMiAqIGRpdHVfcGFuZWwuY2hpbGRyZW5Db3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrTWFwKGRhdGE6IGFueSkge1xyXG4gICAgICAgIFVJSGVscC5zaG93TWFzaygpO1xyXG4gICAgICAgIGxldCBwYWl6aV8xID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdwYWl6aV8xJyk7XHJcbiAgICAgICAgbGV0IHBhaXppXzIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3BhaXppXzInKTtcclxuICAgICAgICBkYXRhLnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcImhpZ2hMaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBkaXR1X3BhbmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdkaXR1X3BhbmVsJyk7XHJcbiAgICAgICAgbGV0IHJpZ2h0X3BhbmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdyaWdodF9wYW5lbCcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl0dV9wYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoR2FtZV8xX1R5cGUpLnNldElzQ3VycmVudChmYWxzZSk7XHJcbiAgICAgICAgICAgIGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0b3VjaF9tYXNrXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiZ2FtZV9ub2RlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLnRhcmdldC5nZXRDb21wb25lbnQoR2FtZV8xX1R5cGUpLnNldElzQ3VycmVudCh0cnVlKTtcclxuICAgICAgICBsZXQgY3VySW5kZXggPSBkYXRhLnRhcmdldC5nZXRDb21wb25lbnQoR2FtZV8xX1R5cGUpLmdldEluZGV4KCk7XHJcblxyXG4gICAgICAgIGlmIChwYWl6aV8yLm9wYWNpdHkgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYWl6aV8xLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgcGFpemlfMi5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGRhdGEudGFyZ2V0KS50bygwLjUsIHtwb3NpdGlvbjogY2MudjMoMCwgLTE0NSkgfSkudG8oMC41LCB7c2NhbGU6IDF9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcInRvdWNoX21hc2tcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcImdhbWVfbm9kZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmlnaHRfcGFuZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRfcGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfcGFuZWwuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9IGN1ckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0X3BhbmVsLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl0dV9wYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzQ3VycmVudCA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVfMV9UeXBlKS5nZXRJc0N1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0N1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVfMV9UeXBlKS5nZXRJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHJpZ2h0X3BhbmVsLmNoaWxkcmVuW2luZGV4XS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGRpdHVfcGFuZWwuY2hpbGRyZW5baV0pLnRvKDAuNSwgeyBzY2FsZTogMC4yNSAsIHBvc2l0aW9uOiBwb3N9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGRhdGEudGFyZ2V0KS50bygwLjUsIHtwb3NpdGlvbjogY2MudjMoMCwgLTE0NSkgfSkudG8oMC41LCB7c2NhbGU6IDF9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwidG91Y2hfbWFza1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGF0YS50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lX25vZGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0X3BhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRfcGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByaWdodF9wYW5lbC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gY3VySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodF9wYW5lbC5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl0dV9wYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNDdXJyZW50ID0gZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoR2FtZV8xX1R5cGUpLmdldElzQ3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNDdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVfMV9UeXBlKS5nZXRJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gcmlnaHRfcGFuZWwuY2hpbGRyZW5baW5kZXhdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihkaXR1X3BhbmVsLmNoaWxkcmVuW2ldKS50bygwLjUsIHsgc2NhbGU6IDAuMjUgLCBwb3NpdGlvbjogcG9zfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19