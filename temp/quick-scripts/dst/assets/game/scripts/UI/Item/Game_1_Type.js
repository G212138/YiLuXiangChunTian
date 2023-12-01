
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
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var EventType_1 = require("../../Data/EventType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game_1_Type = /** @class */ (function (_super) {
    __extends(Game_1_Type, _super);
    function Game_1_Type() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.icon = [];
        _this.pipi = null;
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
            [[1, 2], [2, 3], [3, 4], [4, 1], [3, 5], [5, 6], [6, 3], [1, 7], [7, 8], [8, 1]]
        ];
        _this.selfLineArr = [];
        return _this;
    }
    Game_1_Type.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_RECONNECT, this.handleReConnect, this);
    };
    Game_1_Type.prototype.onLoad = function () {
        this._initPos = this.node.position;
        this.graphics = this.node.getChildByName("dragLine_node").getComponent(cc.Graphics);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_RECONNECT, this.handleReConnect, this);
    };
    Game_1_Type.prototype.handleReConnect = function () {
        this._curPointIndex = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_curPointIndex[this.index];
        this.selfLineArr = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_selfData[this.index];
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_finish[this.index]) {
            for (var i = 0; i < this.selfLineArr.length; i++) {
                this.createGreenLine(this.icon[this.selfLineArr[i][0] - 1].position, this.icon[this.selfLineArr[i][1] - 1].position);
            }
        }
        else {
            for (var i = 0; i < this.selfLineArr.length; i++) {
                this.createLine(this.icon[this.selfLineArr[i][0] - 1].position, this.icon[this.selfLineArr[i][1] - 1].position);
            }
        }
        this.node.getChildByName("btn_return").active = this.selfLineArr.length > 0;
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
    Game_1_Type.prototype.onClickReset = function () {
        SoundManager_1.SoundManager.playEffect("点击音效", false);
        this.node.getChildByName("line_node").removeAllChildren();
        this._curPointIndex = null;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_curPointIndex[this.index] = this._curPointIndex;
        this.graphics.clear();
        this.selfLineArr = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_selfData[this.index] = [];
        this.node.getChildByName("btn_return").active = false;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_finish[this.index] = false;
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
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_curPointIndex[_this.index] = _this._curPointIndex;
                _this._isDrawing = true;
                var linePos = _this.node.getChildByName("dragLine_node").convertToNodeSpaceAR(pos);
                _this.graphics.moveTo(linePos.x, linePos.y);
                _this.graphics.strokeColor = cc.Color.RED;
                _this.graphics.fillColor = cc.Color.RED;
                _this.graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
                _this.graphics.lineCap = cc.Graphics.LineCap.ROUND;
                _this.graphics.lineWidth = 20;
            }
        });
    };
    Game_1_Type.prototype.onDragMove = function (data) {
        var _this = this;
        var pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        var linePos = this.node.getChildByName("dragLine_node").convertToNodeSpaceAR(pos);
        if (this._isDrawing) {
            this.graphics.clear();
            this.graphics.moveTo(this.icon[this._curPointIndex - 1].position.x, this.icon[this._curPointIndex - 1].position.y);
            this.graphics.lineTo(linePos.x, linePos.y);
            this.graphics.stroke();
        }
        this.icon.forEach(function (item) {
            if (_this.isPosInRect(pos, item) && (_this._curPointIndex != Number(item.name))) {
                if (_this.isPointInLine([_this._curPointIndex, Number(item.name)], _this.lineArr[_this.index])) {
                    SoundManager_1.SoundManager.playEffect("正确音效", false);
                    _this.selfLineArr.push([_this._curPointIndex, Number(item.name)]);
                    SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_selfData[_this.index] = _this.selfLineArr;
                    if (_this.index == 5 && _this._curPointIndex == 3 && Number(item.name) == 5) {
                        _this.drawArcLine1(0.75 * Math.PI, 0);
                    }
                    else if (_this.index == 5 && _this._curPointIndex == 5 && Number(item.name) == 6) {
                        _this.drawArcLine1(0, 1.5 * Math.PI);
                    }
                    else if (_this.index == 5 && _this._curPointIndex == 6 && Number(item.name) == 3) {
                        _this.drawArcLine1(1.5 * Math.PI, 0.75 * Math.PI);
                    }
                    else if (_this.index == 5 && _this._curPointIndex == 3 && Number(item.name) == 6) {
                        _this.drawArcLine1(1.5 * Math.PI, 0.75 * Math.PI);
                    }
                    else if (_this.index == 5 && _this._curPointIndex == 6 && Number(item.name) == 5) {
                        _this.drawArcLine1(0, 1.5 * Math.PI);
                    }
                    else if (_this.index == 5 && _this._curPointIndex == 5 && Number(item.name) == 3) {
                        _this.drawArcLine1(0.75 * Math.PI, 0);
                    }
                    else if (_this.index == 5 && _this._curPointIndex == 1 && Number(item.name) == 7) {
                        _this.drawArcLine2(1.75 * Math.PI, Math.PI);
                    }
                    else if (_this.index == 5 && _this._curPointIndex == 7 && Number(item.name) == 1) {
                        _this.drawArcLine2(1.75 * Math.PI, Math.PI);
                    }
                    else if (_this.index == 5 && _this._curPointIndex == 7 && Number(item.name) == 8) {
                        _this.drawArcLine2(1 * Math.PI, 0.5 * Math.PI);
                    }
                    else if (_this.index == 5 && _this._curPointIndex == 8 && Number(item.name) == 7) {
                        _this.drawArcLine2(1 * Math.PI, 0.5 * Math.PI);
                    }
                    else if (_this.index == 5 && _this._curPointIndex == 1 && Number(item.name) == 8) {
                        _this.drawArcLine2(0.5 * Math.PI, 1.75 * Math.PI);
                    }
                    else if (_this.index == 5 && _this._curPointIndex == 8 && Number(item.name) == 1) {
                        _this.drawArcLine2(0.5 * Math.PI, 1.75 * Math.PI);
                    }
                    else {
                        _this.createLine(_this.icon[_this._curPointIndex - 1].position, _this.icon[Number(item.name) - 1].position);
                    }
                    _this._curPointIndex = Number(item.name);
                    SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_curPointIndex[_this.index] = _this._curPointIndex;
                    if (item.getChildByName("icon_check").active == false) {
                        item.getChildByName("icon_check").active = true;
                        item.getChildByName("icon_check").scale = 0;
                        cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                        _this._curPointIndex = Number(item.name);
                        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_curPointIndex[_this.index] = _this._curPointIndex;
                    }
                }
            }
            else {
                item.getChildByName("icon_check").active = _this._curPointIndex == Number(item.name);
            }
        });
    };
    Game_1_Type.prototype.onDragEnd = function (data) {
        this._isDrawing = false;
        this.graphics.clear();
        this.icon.forEach(function (item) {
            item.getChildByName("icon_check").active = false;
        });
        var pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        data.target.position = cc.Vec3.ZERO;
        data.target.parent = this.node;
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
            // this.handleWrong();
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_selfData[this.index] = this.selfLineArr;
        this.node.getChildByName("btn_return").active = this.selfLineArr.length > 0;
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
        graphics.arc(200, -160, 58, sAngle, eAngle);
        graphics.stroke();
    };
    Game_1_Type.prototype.drawArcLine2 = function (sAngle, eAngle) {
        var lineNode = new cc.Node();
        lineNode.addComponent(cc.Graphics);
        lineNode.parent = this.node.getChildByName("line_node");
        var graphics = lineNode.getComponent(cc.Graphics);
        graphics.strokeColor = cc.Color.RED;
        graphics.fillColor = cc.Color.RED;
        graphics.lineWidth = 20;
        graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        graphics.lineCap = cc.Graphics.LineCap.ROUND;
        graphics.arc(-248, 183, 58, sAngle, eAngle);
        graphics.stroke();
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
        SoundManager_1.SoundManager.playEffect("正确反馈01", false);
        this.node.getChildByName("line_node").removeAllChildren();
        for (var i = 0; i < this.selfLineArr.length; i++) {
            this.createGreenLine(this.icon[this.selfLineArr[i][0] - 1].position, this.icon[this.selfLineArr[i][1] - 1].position);
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_finish[this.index] = true;
        // UIHelp.showMask();
        // this.trueEffect();
    };
    Game_1_Type.prototype.createGreenLine = function (startPos, endPos) {
        var lineNode = new cc.Node();
        lineNode.addComponent(cc.Graphics);
        lineNode.parent = this.node.getChildByName("line_node");
        var graphics = lineNode.getComponent(cc.Graphics);
        graphics.strokeColor = cc.Color.GREEN;
        graphics.fillColor = cc.Color.GREEN;
        graphics.lineWidth = 20;
        graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        graphics.lineCap = cc.Graphics.LineCap.ROUND;
        graphics.moveTo(startPos.x, startPos.y);
        graphics.lineTo(endPos.x, endPos.y);
        graphics.stroke();
    };
    Game_1_Type.prototype.trueEffect = function () {
        var _this = this;
        // this.pipi["dir"] = cc.v2(-1, 0);
        var pos1 = this.pipi.parent.convertToNodeSpaceAR(this.getPosintionByIndex(this.selfLineArr[0][0]));
        var pos2 = this.pipi.parent.convertToNodeSpaceAR(this.getPosintionByIndex(this.selfLineArr[0][1]));
        this.pipi.setPosition(pos1);
        this.pipi.angle = -this.getAngleByPos(pos1, pos2);
        // this.pipiAngel(pos1);
        var tween = cc.tween(this.pipi).call(function () { _this.pipi.angle = -_this.getAngleByPos(pos1, pos2); });
        var _loop_1 = function (index) {
            var _pos1 = this_1.pipi.parent.convertToNodeSpaceAR(this_1.getPosintionByIndex(this_1.selfLineArr[index][0]));
            var _pos2 = this_1.pipi.parent.convertToNodeSpaceAR(this_1.getPosintionByIndex(this_1.selfLineArr[index][1]));
            tween.to(1, { x: _pos2.x, y: _pos2.y });
            if (index + 1 < this_1.selfLineArr.length) {
                tween.call(function () {
                    _this.pipi.angle = -_this.getAngleByPos(_pos1, _pos2);
                });
            }
        };
        var this_1 = this;
        for (var index = 0; index < this.selfLineArr.length; index++) {
            _loop_1(index);
        }
        tween.start();
    };
    //根据两点坐标计算角度
    Game_1_Type.prototype.getAngleByPos = function (pos1, pos2) {
        var dir = pos1.sub(pos2);
        var angle = Math.atan2(dir.y, dir.x) * 360 / Math.PI;
        return angle;
    };
    Game_1_Type.prototype.getPosintionByIndex = function (index) {
        return this.icon[index - 1].convertToWorldSpaceAR(cc.v2(0, 0));
    };
    Game_1_Type.prototype.handleWrong = function () {
        SoundManager_1.SoundManager.playEffect("错误音效", false);
        this.node.getChildByName("line_node").removeAllChildren();
        this._curPointIndex = null;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_1_curPointIndex[this.index] = this._curPointIndex;
        this.graphics.clear();
        this.selfLineArr = [];
    };
    /**
     *
     * @param DirA 向量A
     * @param DirB 向量B
     * @returns
     */
    Game_1_Type.prototype.getAngle = function (DirA, DirB) {
        var dot = DirA.x * DirB.x + DirA.y * DirB.y;
        var det = DirA.x * DirB.y - DirA.y * DirB.x;
        var angle = Math.atan2(det, dot) / Math.PI * 180;
        return (angle + 360) % 360;
    };
    /**
     * @abstract x,y
     * @param pointA 点A
     * @param pointB 点B
     * @param angle 角度
     * @returns C点
     */
    Game_1_Type.prototype.getPointByLockLineAngle = function (pointA, pointB, angle) {
        var A = cc.v2(pointA.x, pointA.y);
        var B = cc.v2(pointB.x, pointB.y);
        var radian = angle * Math.PI / 180;
        var bevel = (A.sub(B).len());
        var xMargin = Math.cos(radian) * bevel;
        var yMargin = Math.sin(radian) * bevel;
        return cc.v2(pointA.x + xMargin, pointA.y + yMargin);
    };
    __decorate([
        property(cc.Integer)
    ], Game_1_Type.prototype, "index", void 0);
    __decorate([
        property(cc.Node)
    ], Game_1_Type.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], Game_1_Type.prototype, "pipi", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVfMV9UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUFvRjtBQUNwRiwrRUFBOEU7QUFDOUUscUZBQW9GO0FBR3BGLGtEQUFpRDtBQUUzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlZQztRQTlYVyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFVBQUksR0FBYyxFQUFFLENBQUM7UUFHckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG9CQUFjLEdBQVcsSUFBSSxDQUFDO1FBQzlCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBQzdCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLGFBQU8sR0FBaUI7WUFDNUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUs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QUksS0FBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQzdFLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUM5Qzt5QkFBTSxJQUFJLEtBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUM5RSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDOUM7eUJBQU0sSUFBSSxLQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDOUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUMvQzt5QkFBTSxJQUFJLEtBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUM5RSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQy9DO3lCQUFNLElBQUksS0FBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElB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TUFBTSxFQUFFLE1BQU0sRUFBQyxLQUFZO1FBQ3RELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLE1BQU0sR0FBVSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDbkMsSUFBSSxPQUFPLEdBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDOUMsSUFBSSxPQUFPLEdBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFOUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUE7SUFDdkQsQ0FBQztJQTVYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzhDQUNLO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDVztJQVJaLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FpWS9CO0lBQUQsa0JBQUM7Q0FqWUQsQUFpWUMsQ0FqWXdDLEVBQUUsQ0FBQyxTQUFTLEdBaVlwRDtrQkFqWW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBIaXRUZXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvSGl0VGVzdFwiO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9VSUhlbHBcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZV8xX1R5cGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBpY29uOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcGlwaTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdFBvczogY2MuVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9pc0N1cnJlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2N1clBvaW50SW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9pc0RyYXdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGxpbmVBcnI6IG51bWJlcltdW11bXSA9IFtcclxuICAgICAgICBbWzEsIDJdLCBbMiwgM10sIFszLCA0XSwgWzQsIDFdXSxcclxuICAgICAgICBbWzEsIDJdLCBbMiwgM10sIFszLCA0XSwgWzMsIDVdLCBbNSwgNl0sIFs2LCA3XSwgWzcsIDhdLCBbNywgM10sIFs3LCAxXV0sXHJcbiAgICAgICAgW1sxLCAyXSwgWzIsIDNdLCBbMywgNF0sIFs0LCA1XSwgWzUsIDNdLCBbMywgMV1dLFxyXG4gICAgICAgIFtbMSwgMl0sIFsyLCAzXSwgWzMsIDRdLCBbNCwgNV0sIFs1LCA2XSwgWzYsIDFdLCBbNiwgM11dLFxyXG4gICAgICAgIFtbMSwgMl0sIFsyLCAzXSwgWzMsIDRdLCBbNCwgNV0sIFs1LCAyXSwgWzIsIDRdXSxcclxuICAgICAgICBbWzEsIDJdLCBbMiwgM10sIFszLCA0XSwgWzQsIDFdLCBbMywgNV0sIFs1LCA2XSwgWzYsIDNdLCBbMSwgN10sIFs3LCA4XSwgWzgsIDFdXVxyXG4gICAgXTtcclxuXHJcbiAgICBwcml2YXRlIHNlbGZMaW5lQXJyOiBudW1iZXJbXVtdID0gW107XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNULCB0aGlzLmhhbmRsZVJlQ29ubmVjdCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2luaXRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImRyYWdMaW5lX25vZGVcIikuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNULCB0aGlzLmhhbmRsZVJlQ29ubmVjdCwgdGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSZUNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5fY3VyUG9pbnRJbmRleCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzFfY3VyUG9pbnRJbmRleFt0aGlzLmluZGV4XTtcclxuICAgICAgICB0aGlzLnNlbGZMaW5lQXJyID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEubGV2ZWxfMV9zZWxmRGF0YVt0aGlzLmluZGV4XTtcclxuXHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzFfZmluaXNoW3RoaXMuaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxmTGluZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVHcmVlbkxpbmUodGhpcy5pY29uW3RoaXMuc2VsZkxpbmVBcnJbaV1bMF0gLSAxXS5wb3NpdGlvbiwgdGhpcy5pY29uW3RoaXMuc2VsZkxpbmVBcnJbaV1bMV0gLSAxXS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZkxpbmVBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTGluZSh0aGlzLmljb25bdGhpcy5zZWxmTGluZUFycltpXVswXSAtIDFdLnBvc2l0aW9uLCB0aGlzLmljb25bdGhpcy5zZWxmTGluZUFycltpXVsxXSAtIDFdLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fcmV0dXJuXCIpLmFjdGl2ZSA9IHRoaXMuc2VsZkxpbmVBcnIubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXNDdXJyZW50KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNDdXJyZW50ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGlnaExpZ2h0XCIpLmFjdGl2ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJc0N1cnJlbnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ3VycmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrUmVzZXQoKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLngrnlh7vpn7PmlYhcIiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxpbmVfbm9kZVwiKS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuX2N1clBvaW50SW5kZXggPSBudWxsO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzFfY3VyUG9pbnRJbmRleFt0aGlzLmluZGV4XSA9IHRoaXMuX2N1clBvaW50SW5kZXg7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZkxpbmVBcnIgPSBbXTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbF8xX3NlbGZEYXRhW3RoaXMuaW5kZXhdID0gW107XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuX3JldHVyblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbF8xX2ZpbmlzaFt0aGlzLmluZGV4XSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EcmFnU3RhcnQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGRhdGEudGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoZGF0YS5wb3MueCwgZGF0YS5wb3MueSkpO1xyXG4gICAgICAgIHRoaXMuaWNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUG9zSW5SZWN0KHBvcywgaXRlbSkgJiYgKHRoaXMuX2N1clBvaW50SW5kZXggPT0gbnVsbCB8fCB0aGlzLl9jdXJQb2ludEluZGV4ID09IE51bWJlcihpdGVtLm5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25fY2hlY2tcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2NoZWNrXCIpLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2NoZWNrXCIpKS50bygwLjIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyUG9pbnRJbmRleCA9IE51bWJlcihpdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEubGV2ZWxfMV9jdXJQb2ludEluZGV4W3RoaXMuaW5kZXhdID0gdGhpcy5fY3VyUG9pbnRJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzRHJhd2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZVBvcyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImRyYWdMaW5lX25vZGVcIikuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKGxpbmVQb3MueCwgbGluZVBvcy55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmZpbGxDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVXaWR0aCA9IDIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRyYWdNb3ZlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBwb3MgPSBkYXRhLnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpKTtcclxuICAgICAgICBsZXQgbGluZVBvcyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImRyYWdMaW5lX25vZGVcIikuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICBpZiAodGhpcy5faXNEcmF3aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8odGhpcy5pY29uW3RoaXMuX2N1clBvaW50SW5kZXggLSAxXS5wb3NpdGlvbi54LCB0aGlzLmljb25bdGhpcy5fY3VyUG9pbnRJbmRleCAtIDFdLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhsaW5lUG9zLngsIGxpbmVQb3MueSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUG9zSW5SZWN0KHBvcywgaXRlbSkgJiYgKHRoaXMuX2N1clBvaW50SW5kZXggIT0gTnVtYmVyKGl0ZW0ubmFtZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BvaW50SW5MaW5lKFt0aGlzLl9jdXJQb2ludEluZGV4LCBOdW1iZXIoaXRlbS5uYW1lKV0sIHRoaXMubGluZUFyclt0aGlzLmluZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuato+ehrumfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxmTGluZUFyci5wdXNoKFt0aGlzLl9jdXJQb2ludEluZGV4LCBOdW1iZXIoaXRlbS5uYW1lKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzFfc2VsZkRhdGFbdGhpcy5pbmRleF0gPSB0aGlzLnNlbGZMaW5lQXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID09IDUgJiYgdGhpcy5fY3VyUG9pbnRJbmRleCA9PSAzICYmIE51bWJlcihpdGVtLm5hbWUpID09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3QXJjTGluZTEoMC43NSAqIE1hdGguUEksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA9PSA1ICYmIHRoaXMuX2N1clBvaW50SW5kZXggPT0gNSAmJiBOdW1iZXIoaXRlbS5uYW1lKSA9PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0FyY0xpbmUxKDAsIDEuNSAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA9PSA1ICYmIHRoaXMuX2N1clBvaW50SW5kZXggPT0gNiAmJiBOdW1iZXIoaXRlbS5uYW1lKSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0FyY0xpbmUxKDEuNSAqIE1hdGguUEksMC43NSAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA9PSA1ICYmIHRoaXMuX2N1clBvaW50SW5kZXggPT0gMyAmJiBOdW1iZXIoaXRlbS5uYW1lKSA9PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0FyY0xpbmUxKDEuNSAqIE1hdGguUEksMC43NSAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA9PSA1ICYmIHRoaXMuX2N1clBvaW50SW5kZXggPT0gNiAmJiBOdW1iZXIoaXRlbS5uYW1lKSA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0FyY0xpbmUxKDAsIDEuNSAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA9PSA1ICYmIHRoaXMuX2N1clBvaW50SW5kZXggPT0gNSAmJiBOdW1iZXIoaXRlbS5uYW1lKSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0FyY0xpbmUxKDAuNzUgKiBNYXRoLlBJLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaW5kZXggPT0gNSAmJiB0aGlzLl9jdXJQb2ludEluZGV4ID09IDEgJiYgTnVtYmVyKGl0ZW0ubmFtZSkgPT0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdBcmNMaW5lMigxLjc1ICogTWF0aC5QSSwgTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluZGV4ID09IDUgJiYgdGhpcy5fY3VyUG9pbnRJbmRleCA9PSA3ICYmIE51bWJlcihpdGVtLm5hbWUpID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3QXJjTGluZTIoMS43NSAqIE1hdGguUEksIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA9PSA1ICYmIHRoaXMuX2N1clBvaW50SW5kZXggPT0gNyAmJiBOdW1iZXIoaXRlbS5uYW1lKSA9PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0FyY0xpbmUyKDEgKk1hdGguUEksIDAuNSAqTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluZGV4ID09IDUgJiYgdGhpcy5fY3VyUG9pbnRJbmRleCA9PSA4ICYmIE51bWJlcihpdGVtLm5hbWUpID09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3QXJjTGluZTIoMSAqTWF0aC5QSSwgMC41ICpNYXRoLlBJKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZXggPT0gNSAmJiB0aGlzLl9jdXJQb2ludEluZGV4ID09IDEgJiYgTnVtYmVyKGl0ZW0ubmFtZSkgPT0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdBcmNMaW5lMigwLjUgKiBNYXRoLlBJLCAxLjc1ICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluZGV4ID09IDUgJiYgdGhpcy5fY3VyUG9pbnRJbmRleCA9PSA4ICYmIE51bWJlcihpdGVtLm5hbWUpID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3QXJjTGluZTIoMC41ICogTWF0aC5QSSwgMS43NSAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVMaW5lKHRoaXMuaWNvblt0aGlzLl9jdXJQb2ludEluZGV4IC0gMV0ucG9zaXRpb24sIHRoaXMuaWNvbltOdW1iZXIoaXRlbS5uYW1lKSAtIDFdLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VyUG9pbnRJbmRleCA9IE51bWJlcihpdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzFfY3VyUG9pbnRJbmRleFt0aGlzLmluZGV4XSA9IHRoaXMuX2N1clBvaW50SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2NoZWNrXCIpLmFjdGl2ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvbl9jaGVja1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvbl9jaGVja1wiKS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2NoZWNrXCIpKS50bygwLjIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJQb2ludEluZGV4ID0gTnVtYmVyKGl0ZW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzFfY3VyUG9pbnRJbmRleFt0aGlzLmluZGV4XSA9IHRoaXMuX2N1clBvaW50SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25fY2hlY2tcIikuYWN0aXZlID0gdGhpcy5fY3VyUG9pbnRJbmRleCA9PSBOdW1iZXIoaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EcmFnRW5kKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2lzRHJhd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmljb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvbl9jaGVja1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgcG9zID0gZGF0YS50YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihkYXRhLnBvcy54LCBkYXRhLnBvcy55KSk7XHJcbiAgICAgICAgZGF0YS50YXJnZXQucG9zaXRpb24gPSBjYy5WZWMzLlpFUk87XHJcbiAgICAgICAgZGF0YS50YXJnZXQucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGxldCBjdWVMZXZlbExpbmVBcnIgPSB0aGlzLmxpbmVBcnJbdGhpcy5pbmRleF07XHJcbiAgICAgICAgLy/liKTmlq1zZWxmTGluZUFycuaYr+WQpui3n2N1ZUxldmVsTGluZUFycuebuOetie+8jOS4jeiAg+iZkeaVsOe7hOeahOmhuuW6j+WPiuWtkOaVsOe7hOeahOmhuuW6j1xyXG4gICAgICAgIGxldCBpc1NhbWUgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGZMaW5lQXJyLmxlbmd0aCA9PSBjdWVMZXZlbExpbmVBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxmTGluZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzQWxsSW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zZWxmTGluZUFycltpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUG9pbnRJbkxpbmUodGhpcy5zZWxmTGluZUFycltpXSwgY3VlTGV2ZWxMaW5lQXJyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FsbEluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gdGhpcy5zZWxmTGluZUFycltpXVswXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGZMaW5lQXJyW2ldWzBdID0gdGhpcy5zZWxmTGluZUFycltpXVsxXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGZMaW5lQXJyW2ldWzFdID0gdGVtcDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BvaW50SW5MaW5lKHRoaXMuc2VsZkxpbmVBcnJbaV0sIGN1ZUxldmVsTGluZUFycikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBbGxJbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghaXNBbGxJbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2FtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXNTYW1lID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1NhbWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLnrZTmoYjmraPnoa5cIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJ1ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi562U5qGI6ZSZ6K+vXCIpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmhhbmRsZVdyb25nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzFfc2VsZkRhdGFbdGhpcy5pbmRleF0gPSB0aGlzLnNlbGZMaW5lQXJyO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9yZXR1cm5cIikuYWN0aXZlID0gdGhpcy5zZWxmTGluZUFyci5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yik5pat54K557uE5Zyo5LiN5Zyo57q/57uE6YeM77yM5LiN6ICD6JmR6aG65bqPXHJcbiAgICBwcml2YXRlIGlzUG9pbnRJbkxpbmUocG9pbnRBcnI6IG51bWJlcltdLCBsaW5lQXJyOiBudW1iZXJbXVtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGlzUG9pbnRJbkxpbmUgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGxpbmVBcnJbaV0ubGVuZ3RoID09IHBvaW50QXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzQWxsSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwb2ludEFyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5lQXJyW2ldLmluZGV4T2YocG9pbnRBcnJbal0pID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWxsSW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzQWxsSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1BvaW50SW5MaW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNQb2ludEluTGluZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUxpbmUoc3RhcnRQb3M6IGNjLlZlYzMsIGVuZFBvczogY2MuVmVjMykge1xyXG4gICAgICAgIGxldCBsaW5lTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbGluZU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBsaW5lTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lX25vZGVcIik7XHJcbiAgICAgICAgbGV0IGdyYXBoaWNzID0gbGluZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMjA7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcclxuICAgICAgICBncmFwaGljcy5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcclxuICAgICAgICBncmFwaGljcy5tb3ZlVG8oc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKGVuZFBvcy54LCBlbmRQb3MueSk7XHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/nlLvlvKfnur9cclxuICAgIHByaXZhdGUgZHJhd0FyY0xpbmUxKHNBbmdsZTogbnVtYmVyLCBlQW5nbGU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBsaW5lTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbGluZU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBsaW5lTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lX25vZGVcIik7XHJcbiAgICAgICAgbGV0IGdyYXBoaWNzID0gbGluZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMjA7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcclxuICAgICAgICBncmFwaGljcy5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcclxuICAgICAgICBncmFwaGljcy5hcmMoMjAwLCAtMTYwLCA1OCwgc0FuZ2xlLCBlQW5nbGUpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd0FyY0xpbmUyKHNBbmdsZTogbnVtYmVyLCBlQW5nbGU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBsaW5lTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbGluZU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBsaW5lTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lX25vZGVcIik7XHJcbiAgICAgICAgbGV0IGdyYXBoaWNzID0gbGluZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMjA7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcclxuICAgICAgICBncmFwaGljcy5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcclxuICAgICAgICBncmFwaGljcy5hcmMoLTI0OCwgMTgzLCA1OCwgc0FuZ2xlLCBlQW5nbGUpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNQb3NJblJlY3QocG9zOiBjYy5WZWMyLCBwb2ludDogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc0luUmVjdChuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCBwb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwb3NJblJlY3QocG9zOiBjYy5WZWMyLCByZWN0OiBjYy5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHAgPSByZWN0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocmVjdC5wb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IGxiID0gY2MudjIocC54IC0gcmVjdC53aWR0aCAqIHJlY3Quc2NhbGUgLyAyLCBwLnkgLSByZWN0LmhlaWdodCAqIHJlY3Quc2NhbGUgLyAyKTtcclxuICAgICAgICBsZXQgcnQgPSBjYy52MihwLnggKyByZWN0LndpZHRoICogcmVjdC5zY2FsZSAvIDIsIHAueSArIHJlY3QuaGVpZ2h0ICogcmVjdC5zY2FsZSAvIDIpO1xyXG4gICAgICAgIGxldCBiID0gcG9zLnggPj0gbGIueCAmJiBwb3MueSA+PSBsYi55ICYmIHBvcy54IDw9IHJ0LnggJiYgcG9zLnkgPD0gcnQueTtcclxuICAgICAgICByZXR1cm4gYjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVRydWUoKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLmraPnoa7lj43ppogwMVwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibGluZV9ub2RlXCIpLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGZMaW5lQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR3JlZW5MaW5lKHRoaXMuaWNvblt0aGlzLnNlbGZMaW5lQXJyW2ldWzBdIC0gMV0ucG9zaXRpb24sIHRoaXMuaWNvblt0aGlzLnNlbGZMaW5lQXJyW2ldWzFdIC0gMV0ucG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbF8xX2ZpbmlzaFt0aGlzLmluZGV4XSA9IHRydWU7XHJcbiAgICAgICAgLy8gVUlIZWxwLnNob3dNYXNrKCk7XHJcbiAgICAgICAgLy8gdGhpcy50cnVlRWZmZWN0KCk7XHJcbiAgICB9ICAgIFxyXG4gICAgcHJpdmF0ZSBjcmVhdGVHcmVlbkxpbmUoc3RhcnRQb3M6IGNjLlZlYzMsIGVuZFBvczogY2MuVmVjMykge1xyXG4gICAgICAgIGxldCBsaW5lTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbGluZU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBsaW5lTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lX25vZGVcIik7XHJcbiAgICAgICAgbGV0IGdyYXBoaWNzID0gbGluZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG4gICAgICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDIwO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhlbmRQb3MueCwgZW5kUG9zLnkpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJ1ZUVmZmVjdCgpIHtcclxuICAgICAgICAvLyB0aGlzLnBpcGlbXCJkaXJcIl0gPSBjYy52MigtMSwgMCk7XHJcbiAgICAgICAgbGV0IHBvczEgPSB0aGlzLnBpcGkucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMuZ2V0UG9zaW50aW9uQnlJbmRleCh0aGlzLnNlbGZMaW5lQXJyWzBdWzBdKSlcclxuICAgICAgICBsZXQgcG9zMiA9IHRoaXMucGlwaS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5nZXRQb3NpbnRpb25CeUluZGV4KHRoaXMuc2VsZkxpbmVBcnJbMF1bMV0pKSAgICAgICAgXHJcbiAgICAgICAgdGhpcy5waXBpLnNldFBvc2l0aW9uKHBvczEpO1xyXG4gICAgICAgIHRoaXMucGlwaS5hbmdsZSA9IC10aGlzLmdldEFuZ2xlQnlQb3MocG9zMSwgcG9zMik7XHJcbiAgICAgICAgLy8gdGhpcy5waXBpQW5nZWwocG9zMSk7XHJcbiAgICAgICAgbGV0ICB0d2VlbiA9IGNjLnR3ZWVuKHRoaXMucGlwaSkuY2FsbCgoKT0+e3RoaXMucGlwaS5hbmdsZSA9IC10aGlzLmdldEFuZ2xlQnlQb3MocG9zMSwgcG9zMil9KVxyXG4gICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuc2VsZkxpbmVBcnIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBfcG9zMSA9IHRoaXMucGlwaS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5nZXRQb3NpbnRpb25CeUluZGV4KHRoaXMuc2VsZkxpbmVBcnJbaW5kZXhdWzBdKSlcclxuICAgICAgICAgICAgbGV0IF9wb3MyID0gdGhpcy5waXBpLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0aGlzLmdldFBvc2ludGlvbkJ5SW5kZXgodGhpcy5zZWxmTGluZUFycltpbmRleF1bMV0pKVxyXG4gICAgICAgICAgICB0d2Vlbi50bygxLCB7eDogX3BvczIueCwgeTogX3BvczIueX0pXHJcbiAgICAgICAgICAgIGlmKGluZGV4KzEgPCB0aGlzLnNlbGZMaW5lQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0d2Vlbi5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waXBpLmFuZ2xlID0gLXRoaXMuZ2V0QW5nbGVCeVBvcyhfcG9zMSwgX3BvczIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0d2Vlbi5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5qC55o2u5Lik54K55Z2Q5qCH6K6h566X6KeS5bqmXHJcbiAgICBwcml2YXRlIGdldEFuZ2xlQnlQb3MocG9zMTogY2MuVmVjMiwgcG9zMjogY2MuVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGRpciA9IHBvczEuc3ViKHBvczIpO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZGlyLnksIGRpci54KSAqIDM2MCAvIE1hdGguUEk7XHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UG9zaW50aW9uQnlJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvbltpbmRleC0xXS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlV3JvbmcoKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLplJnor6/pn7PmlYhcIiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxpbmVfbm9kZVwiKS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuX2N1clBvaW50SW5kZXggPSBudWxsO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzFfY3VyUG9pbnRJbmRleFt0aGlzLmluZGV4XSA9IHRoaXMuX2N1clBvaW50SW5kZXg7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZkxpbmVBcnIgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIERpckEg5ZCR6YePQVxyXG4gICAgICogQHBhcmFtIERpckIg5ZCR6YePQlxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgIGdldEFuZ2xlIChEaXJBLCBEaXJCKXtcclxuICAgICAgICBjb25zdCBkb3QgPSBEaXJBLnggICogRGlyQi54ICArIERpckEueSAqIERpckIueVxyXG4gICAgICAgIGNvbnN0IGRldCA9IERpckEueCAgKiBEaXJCLnkgLSBEaXJBLnkgKiBEaXJCLnggXHJcbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGRldCwgZG90KSAvIE1hdGguUEkgKiAxODBcclxuICAgICAgICByZXR1cm4gKGFuZ2xlICsgMzYwKSAlIDM2MFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGFic3RyYWN0IHgseVxyXG4gICAgICogQHBhcmFtIHBvaW50QSDngrlBXHJcbiAgICAgKiBAcGFyYW0gcG9pbnRCIOeCuUJcclxuICAgICAqIEBwYXJhbSBhbmdsZSDop5LluqZcclxuICAgICAqIEByZXR1cm5zIEPngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFBvaW50QnlMb2NrTGluZUFuZ2xlKHBvaW50QSwgcG9pbnRCLGFuZ2xlOm51bWJlcikge1xyXG4gICAgICAgIGxldCBBID0gY2MudjIocG9pbnRBLngscG9pbnRBLnkpO1xyXG4gICAgICAgIGxldCBCID0gY2MudjIocG9pbnRCLngscG9pbnRCLnkpO1xyXG4gICAgICAgIGxldCByYWRpYW46bnVtYmVyID0gYW5nbGUgKiBNYXRoLlBJIC8gMTgwOyBcclxuICAgICAgICBsZXQgYmV2ZWw6bnVtYmVyID0gKEEuc3ViKEIpLmxlbigpKVxyXG4gICAgICAgIGxldCB4TWFyZ2luOm51bWJlciA9IE1hdGguY29zKHJhZGlhbikgKiBiZXZlbDtcclxuICAgICAgICBsZXQgeU1hcmdpbjpudW1iZXIgPSBNYXRoLnNpbihyYWRpYW4pICogYmV2ZWw7XHJcblxyXG4gICAgICAgIHJldHVybiBjYy52Mihwb2ludEEueCArIHhNYXJnaW4scG9pbnRBLnkgKyB5TWFyZ2luKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=