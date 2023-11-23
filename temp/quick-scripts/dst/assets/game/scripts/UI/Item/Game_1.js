
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
        }
        //所有子节点逐个出现
        for (var i = 0; i < ditu_panel.childrenCount; i++) {
            var node = ditu_panel.children[i];
            cc.tween(node).delay(i * 0.2).to(0.3, { scale: 1 }, { easing: 'backOut' }).start();
        }
        this.scheduleOnce(function () {
            for (var i = 0; i < ditu_panel.childrenCount; i++) {
                var node = ditu_panel.children[i];
                node.getChildByName("highLight").color = cc.Color.WHITE;
                node.getChildByName("highLight").active = true;
            }
            UIHelp_1.UIHelp.closeMask();
        }, 0.2 * ditu_panel.childrenCount);
    };
    Game_1.prototype.onClickMap = function (data) {
        var _this = this;
        UIHelp_1.UIHelp.showMask();
        var paizi_1 = this.node.getChildByName('paizi_1');
        var paizi_2 = this.node.getChildByName('paizi_2');
        data.target.getChildByName("highLight").active = true;
        data.target.getChildByName("highLight").color = cc.Color.RED;
        var ditu_panel = this.node.getChildByName('ditu_panel');
        var right_panel = this.node.getChildByName('right_panel');
        for (var i = 0; i < ditu_panel.childrenCount; i++) {
            ditu_panel.children[i].getComponent(Game_1_Type_1.default).setIsCurrent(false);
        }
        data.target.getComponent(Game_1_Type_1.default).setIsCurrent(true);
        var curIndex = data.target.getComponent(Game_1_Type_1.default).getIndex();
        if (paizi_2.opacity == 0) {
            this.scheduleOnce(function () {
                cc.tween(paizi_1).to(0.25, { opacity: 0 }).call(function () {
                    cc.tween(paizi_2).to(0.25, { opacity: 255 }).start();
                }).start();
                cc.tween(data.target).to(0.5, { position: cc.v3(0, 35) }).to(0.5, { scale: 2.6 }).call(function () {
                    // data.target.getChildByName("highLight").color = cc.Color.WHITE;
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
                            cc.tween(ditu_panel.children[i]).to(0.5, { scale: 0.5, position: pos }).start();
                        }
                    }
                }, 0);
            }, 1);
        }
        else {
            cc.tween(data.target).to(0.5, { position: cc.v3(0, 35) }).to(0.5, { scale: 2.6 }).call(function () {
                // data.target.getChildByName("highLight").color = cc.Color.WHITE;
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
                        cc.tween(ditu_panel.children[i]).to(0.5, { scale: 0.5, position: pos }).start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVfMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZ0U7QUFDaEUsNkNBQXdDO0FBR2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEOztJQThHQSxDQUFDO0lBNUdVLHlCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLDJCQUFVLEdBQWxCO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbEUsVUFBVSxDQUFDLFFBQVEsQ0FB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QUksQ0FBQyxTQUFTLEVBQUU7d0JBQ1osSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUN4RSxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUcsUUFBUSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ25GO2lCQUNKO1lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7SUFFTCxDQUFDO0lBN0dnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBOEcxQjtJQUFELGFBQUM7Q0E5R0QsQUE4R0MsQ0E5R21DLEVBQUUsQ0FBQyxTQUFTLEdBOEcvQztrQkE5R29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSUhlbHAgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9VSUhlbHBcIjtcclxuaW1wb3J0IEdhbWVfMV9UeXBlIGZyb20gXCIuL0dhbWVfMV9UeXBlXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVfMSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGluaXRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncGFpemlfMScpLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdwYWl6aV8yJykub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdyaWdodF9wYW5lbCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdEVmZmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEVmZmVjdCgpIHtcclxuICAgICAgICBsZXQgZGl0dV9wYW5lbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZGl0dV9wYW5lbCcpO1xyXG4gICAgICAgIGRpdHVfcGFuZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdHVfcGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiaGlnaExpZ2h0XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiZ2FtZV9ub2RlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkaXR1X3BhbmVsLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwidG91Y2hfbWFza1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/miYDmnInlrZDoioLngrnpgJDkuKrlh7rnjrBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdHVfcGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gZGl0dV9wYW5lbC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgY2MudHdlZW4obm9kZSkuZGVsYXkoaSAqIDAuMikudG8oMC4zLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdHVfcGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiaGlnaExpZ2h0XCIpLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiaGlnaExpZ2h0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xyXG4gICAgICAgIH0sIDAuMiAqIGRpdHVfcGFuZWwuY2hpbGRyZW5Db3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrTWFwKGRhdGE6IGFueSkge1xyXG4gICAgICAgIFVJSGVscC5zaG93TWFzaygpO1xyXG4gICAgICAgIGxldCBwYWl6aV8xID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdwYWl6aV8xJyk7XHJcbiAgICAgICAgbGV0IHBhaXppXzIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3BhaXppXzInKTtcclxuICAgICAgICBkYXRhLnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcImhpZ2hMaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGRhdGEudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiaGlnaExpZ2h0XCIpLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIGxldCBkaXR1X3BhbmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdkaXR1X3BhbmVsJyk7XHJcbiAgICAgICAgbGV0IHJpZ2h0X3BhbmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdyaWdodF9wYW5lbCcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl0dV9wYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoR2FtZV8xX1R5cGUpLnNldElzQ3VycmVudChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEudGFyZ2V0LmdldENvbXBvbmVudChHYW1lXzFfVHlwZSkuc2V0SXNDdXJyZW50KHRydWUpO1xyXG4gICAgICAgIGxldCBjdXJJbmRleCA9IGRhdGEudGFyZ2V0LmdldENvbXBvbmVudChHYW1lXzFfVHlwZSkuZ2V0SW5kZXgoKTtcclxuXHJcbiAgICAgICAgaWYgKHBhaXppXzIub3BhY2l0eSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhaXppXzEpLnRvKDAuMjUsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYWl6aV8yKS50bygwLjI1LCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihkYXRhLnRhcmdldCkudG8oMC41LCB7cG9zaXRpb246IGNjLnYzKDAsIDM1KSB9KS50bygwLjUsIHtzY2FsZTogMi42fSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGF0YS50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoTGlnaHRcIikuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcInRvdWNoX21hc2tcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcImdhbWVfbm9kZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmlnaHRfcGFuZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRfcGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfcGFuZWwuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9IGN1ckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0X3BhbmVsLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl0dV9wYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzQ3VycmVudCA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVfMV9UeXBlKS5nZXRJc0N1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0N1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVfMV9UeXBlKS5nZXRJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHJpZ2h0X3BhbmVsLmNoaWxkcmVuW2luZGV4XS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGRpdHVfcGFuZWwuY2hpbGRyZW5baV0pLnRvKDAuNSwgeyBzY2FsZTogMC41ICwgcG9zaXRpb246IHBvc30pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MudHdlZW4oZGF0YS50YXJnZXQpLnRvKDAuNSwge3Bvc2l0aW9uOiBjYy52MygwLCAzNSkgfSkudG8oMC41LCB7c2NhbGU6IDIuNn0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZGF0YS50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoTGlnaHRcIikuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgIGRhdGEudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwidG91Y2hfbWFza1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGF0YS50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lX25vZGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0X3BhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRfcGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByaWdodF9wYW5lbC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gY3VySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodF9wYW5lbC5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl0dV9wYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNDdXJyZW50ID0gZGl0dV9wYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoR2FtZV8xX1R5cGUpLmdldElzQ3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNDdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGRpdHVfcGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVfMV9UeXBlKS5nZXRJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gcmlnaHRfcGFuZWwuY2hpbGRyZW5baW5kZXhdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihkaXR1X3BhbmVsLmNoaWxkcmVuW2ldKS50bygwLjUsIHsgc2NhbGU6IDAuNSAsIHBvc2l0aW9uOiBwb3N9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=