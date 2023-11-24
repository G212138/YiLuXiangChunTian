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
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
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
        _this.lineArr = [
            [[1, 2], [2, 3], [3, 4], [4, 1]],
            [[1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [6, 7], [7, 8], [7, 3], [7, 1]],
            [[1, 2], [2, 3], [3, 4], [4, 5], [5, 3], [3, 1]],
            [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1], [6, 3]],
            [[1, 2], [2, 3], [3, 4], [4, 5], [5, 2], [2, 4]],
            [[1, 2], [2, 3], [3, 4], [4, 1], [1, 6], [6, 1], [3, 5], [5, 3]]
        ];
        _this.selfLineArr = [];
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
                _this.graphics.lineWidth = 20;
            }
        });
    };
    Game_1_Type.prototype.onDragMove = function (data) {
        var _this = this;
        var pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        var linePos = this.node.getChildByName("dragLine_node").convertToNodeSpaceAR(pos);
        if (this._isDrawing) {
            var startPos = this.icon[3 - 1].position;
            //startPos转为世界坐标
            startPos = this.node.convertToWorldSpaceAR(startPos);
            var startPos2 = this.icon[5 - 1].position;
            startPos2 = this.node.convertToWorldSpaceAR(startPos2);
            if (this.index == 5) {
                this.graphics.lineTo(linePos.x, linePos.y);
                this.graphics.stroke();
            }
            else {
                this.graphics.clear();
                this.graphics.moveTo(this.icon[this._curPointIndex - 1].position.x, this.icon[this._curPointIndex - 1].position.y);
                this.graphics.lineTo(linePos.x, linePos.y);
                this.graphics.stroke();
            }
        }
        this.icon.forEach(function (item) {
            if (_this.isPosInRect(pos, item) && (_this._curPointIndex != Number(item.name))) {
                if (_this.isPointInLine([_this._curPointIndex, Number(item.name)], _this.lineArr[_this.index])) {
                    SoundManager_1.SoundManager.playEffect("正确音效", false);
                    _this.selfLineArr.push([_this._curPointIndex, Number(item.name)]);
                    if (_this.index != 5) {
                        _this.createLine(_this.icon[_this._curPointIndex - 1].position, _this.icon[Number(item.name) - 1].position);
                    }
                    _this._curPointIndex = Number(item.name);
                    if (item.getChildByName("icon_check").active == false) {
                        item.getChildByName("icon_check").active = true;
                        item.getChildByName("icon_check").scale = 0;
                        cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                        _this._curPointIndex = Number(item.name);
                    }
                }
            }
            else {
                item.getChildByName("icon_check").active = _this._curPointIndex == Number(item.name);
            }
        });
    };
    //判断点组在不在线组里，不考虑顺序
    Game_1_Type.prototype.isPointInLine = function (pointArr, lineArr) {
        var isPointInLine = false;
        for (var i = 0; i < lineArr.length; i++) {
            if (lineArr[i].length == pointArr.length) {
                var isAllIn = true;
                for (var j = 0; j < pointArr.length; j++) {
                    if (lineArr[i].indexOf(pointArr[j]) == -1) {
                        isAllIn = false;
                        break;
                    }
                }
                if (isAllIn) {
                    isPointInLine = true;
                    break;
                }
            }
        }
        return isPointInLine;
    };
    Game_1_Type.prototype.createLine = function (startPos, endPos) {
        var lineNode = new cc.Node();
        lineNode.addComponent(cc.Graphics);
        lineNode.parent = this.node.getChildByName("line_node");
        var graphics = lineNode.getComponent(cc.Graphics);
        graphics.strokeColor = cc.Color.RED;
        graphics.fillColor = cc.Color.RED;
        graphics.lineWidth = 20;
        graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        graphics.lineCap = cc.Graphics.LineCap.ROUND;
        graphics.moveTo(startPos.x, startPos.y);
        graphics.lineTo(endPos.x, endPos.y);
        graphics.stroke();
    };
    //画弧线
    Game_1_Type.prototype.drawArcLine1 = function (sAngle, eAngle) {
        var lineNode = new cc.Node();
        lineNode.addComponent(cc.Graphics);
        lineNode.parent = this.node.getChildByName("line_node");
        var graphics = lineNode.getComponent(cc.Graphics);
        graphics.strokeColor = cc.Color.RED;
        graphics.fillColor = cc.Color.RED;
        graphics.lineWidth = 20;
        graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        graphics.lineCap = cc.Graphics.LineCap.ROUND;
        graphics.arc(200, -160, 60, sAngle, eAngle);
        graphics.stroke();
    };
    Game_1_Type.prototype.onDragEnd = function (data) {
        this._isDrawing = false;
        this.icon.forEach(function (item) {
            item.getChildByName("icon_check").active = false;
        });
        var pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        data.target.position = cc.Vec3.ZERO;
        data.target.parent = this.node;
        console.log("onDragEnd", this.selfLineArr);
        var cueLevelLineArr = this.lineArr[this.index];
        //判断selfLineArr是否跟cueLevelLineArr相等，不考虑数组的顺序及子数组的顺序
        var isSame = true;
        if (this.selfLineArr.length == cueLevelLineArr.length) {
            for (var i = 0; i < this.selfLineArr.length; i++) {
                var isAllIn = false;
                for (var j = 0; j < this.selfLineArr[i].length; j++) {
                    if (this.isPointInLine(this.selfLineArr[i], cueLevelLineArr)) {
                        isAllIn = true;
                        break;
                    }
                    var temp = this.selfLineArr[i][0];
                    this.selfLineArr[i][0] = this.selfLineArr[i][1];
                    this.selfLineArr[i][1] = temp;
                    if (this.isPointInLine(this.selfLineArr[i], cueLevelLineArr)) {
                        isAllIn = true;
                        break;
                    }
                }
                if (!isAllIn) {
                    isSame = false;
                    break;
                }
            }
        }
        else {
            isSame = false;
        }
        if (isSame) {
            console.log("答案正确");
            this.handleTrue();
        }
        else {
            console.log("答案错误");
            this.handleWrong();
        }
    };
    Game_1_Type.prototype.isPosInRect = function (pos, point) {
        return this.posInRect(new cc.Vec2(pos.x, pos.y), point);
    };
    Game_1_Type.prototype.posInRect = function (pos, rect) {
        var p = rect.parent.convertToWorldSpaceAR(rect.position);
        var lb = cc.v2(p.x - rect.width * rect.scale / 2, p.y - rect.height * rect.scale / 2);
        var rt = cc.v2(p.x + rect.width * rect.scale / 2, p.y + rect.height * rect.scale / 2);
        var b = pos.x >= lb.x && pos.y >= lb.y && pos.x <= rt.x && pos.y <= rt.y;
        return b;
    };
    Game_1_Type.prototype.handleTrue = function () {
        if (this.index != 5) {
            this.graphics.clear();
        }
    };
    Game_1_Type.prototype.handleWrong = function () {
        SoundManager_1.SoundManager.playEffect("错误音效", false);
        this.node.getChildByName("line_node").removeAllChildren();
        this._curPointIndex = null;
        this.graphics.clear();
        this.selfLineArr = [];
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