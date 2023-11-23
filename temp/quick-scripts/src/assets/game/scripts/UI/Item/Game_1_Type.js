"use strict";
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