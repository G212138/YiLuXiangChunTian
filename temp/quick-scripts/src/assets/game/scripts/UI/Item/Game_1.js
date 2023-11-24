"use strict";
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