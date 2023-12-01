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