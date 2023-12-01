"use strict";
cc._RF.push(module, 'a7aacNsItRGY7p31M5ihNRH', 'Game_2_type');
// game/scripts/UI/Item/Game_2_type.ts

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
var Game_2_type = /** @class */ (function (_super) {
    __extends(Game_2_type, _super);
    function Game_2_type() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.icon = [];
        _this.isCanLine = false;
        _this.btn_yes = null;
        _this.btn_no = null;
        _this.btn_yes_img = [];
        _this.btn_no_img = [];
        _this._isCurrent = false;
        _this._curPointIndex = null;
        _this.graphics = null;
        _this._isDrawing = false;
        _this.lineArr = [
            [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 1], [2, 8], [2, 6], [4, 6]],
            [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 1], [1, 10], [1, 15],
                [2, 10], [2, 11], [4, 11], [4, 12], [6, 12], [6, 13], [7, 13], [7, 14], [9, 14], [9, 15], [10, 15], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15]],
            [[1, 2], [2, 3], [3, 4], [4, 5], [5, 1], [1, 4], [2, 4]],
            [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 1], [2, 4], [4, 6], [6, 8], [8, 2]],
            [],
        ];
        _this.selfLineArr = [];
        _this.hasChoose = false;
        return _this;
    }
    Game_2_type.prototype.onLoad = function () {
        this.graphics = this.node.getChildByName("dragLine_node").getComponent(cc.Graphics);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_RECONNECT, this.handleReConnect, this);
    };
    Game_2_type.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_RECONNECT, this.handleReConnect, this);
    };
    Game_2_type.prototype.handleReConnect = function () {
        this._curPointIndex = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_curPointIndex[this.index];
        this.selfLineArr = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_selfData[this.index];
        this.hasChoose = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_hasChoose[this.index];
        if (this.hasChoose) {
            this.handleShow();
        }
        else {
            this.node.getChildByName("touch_mask").active = false;
            this.node.getChildByName("game_node").active = false;
        }
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
        var btn_yes_state = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_yes_btn[this.index];
        var btn_no_state = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_no_btn[this.index];
        this.btn_yes.spriteFrame = this.btn_yes_img[btn_yes_state];
        this.btn_no.spriteFrame = this.btn_no_img[btn_no_state];
    };
    Game_2_type.prototype.onClickYes = function () {
        if (this.hasChoose)
            return;
        if (this.isCanLine) {
            SoundManager_1.SoundManager.playEffect("正确音效", false);
            this.hasChoose = true;
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_hasChoose[this.index] = true;
            this.handleShow();
            this.btn_yes.spriteFrame = this.btn_yes_img[1];
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_yes_btn[this.index] = 1;
        }
        else {
            SoundManager_1.SoundManager.playEffect("错误音效", false);
            this.btn_yes.spriteFrame = this.btn_yes_img[2];
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_yes_btn[this.index] = 2;
        }
    };
    Game_2_type.prototype.onClickNo = function () {
        if (this.hasChoose)
            return;
        if (this.isCanLine) {
            SoundManager_1.SoundManager.playEffect("错误音效", false);
            this.btn_no.spriteFrame = this.btn_no_img[2];
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_no_btn[this.index] = 2;
        }
        else {
            SoundManager_1.SoundManager.playEffect("正确音效", false);
            this.hasChoose = true;
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_hasChoose[this.index] = true;
            this.handleShow();
            this.btn_no.spriteFrame = this.btn_no_img[1];
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_no_btn[this.index] = 1;
        }
    };
    Game_2_type.prototype.onClickReset = function () {
        SoundManager_1.SoundManager.playEffect("点击音效", false);
        this.node.getChildByName("line_node").removeAllChildren();
        this._curPointIndex = null;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_curPointIndex[this.index] = this._curPointIndex;
        this.graphics.clear();
        this.selfLineArr = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_selfData[this.index] = this.selfLineArr;
        this.node.getChildByName("btn_return").active = false;
    };
    Game_2_type.prototype.handleShow = function () {
        if (this.isCanLine) {
            this.node.getChildByName("touch_mask").active = true;
            this.node.getChildByName("game_node").active = true;
        }
    };
    Game_2_type.prototype.onDragStart = function (data) {
        var _this = this;
        var pos = data.target.parent.convertToWorldSpaceAR(cc.v2(data.pos.x, data.pos.y));
        this.icon.forEach(function (item) {
            if (_this.isPosInRect(pos, item) && (_this._curPointIndex == null || _this._curPointIndex == Number(item.name))) {
                item.getChildByName("icon_check").active = true;
                item.getChildByName("icon_check").scale = 0;
                cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                _this._curPointIndex = Number(item.name);
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_curPointIndex[_this.index] = _this._curPointIndex;
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
    Game_2_type.prototype.onDragMove = function (data) {
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
                    SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_selfData[_this.index] = _this.selfLineArr;
                    _this.createLine(_this.icon[_this._curPointIndex - 1].position, _this.icon[Number(item.name) - 1].position);
                    _this._curPointIndex = Number(item.name);
                    SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_curPointIndex[_this.index] = _this._curPointIndex;
                    if (item.getChildByName("icon_check").active == false) {
                        item.getChildByName("icon_check").active = true;
                        item.getChildByName("icon_check").scale = 0;
                        cc.tween(item.getChildByName("icon_check")).to(0.2, { scale: 1 }, { easing: 'backOut' }).start();
                        _this._curPointIndex = Number(item.name);
                        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_curPointIndex[_this.index] = _this._curPointIndex;
                    }
                }
            }
            else {
                item.getChildByName("icon_check").active = _this._curPointIndex == Number(item.name);
            }
        });
    };
    Game_2_type.prototype.onDragEnd = function (data) {
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
        this.node.getChildByName("btn_return").active = this.selfLineArr.length > 0;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_selfData[this.index] = this.selfLineArr;
    };
    //判断点组在不在线组里，不考虑顺序
    Game_2_type.prototype.isPointInLine = function (pointArr, lineArr) {
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
    Game_2_type.prototype.createLine = function (startPos, endPos) {
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
    Game_2_type.prototype.isPosInRect = function (pos, point) {
        return this.posInRect(new cc.Vec2(pos.x, pos.y), point);
    };
    Game_2_type.prototype.posInRect = function (pos, rect) {
        var p = rect.parent.convertToWorldSpaceAR(rect.position);
        var lb = cc.v2(p.x - rect.width * rect.scale / 2, p.y - rect.height * rect.scale / 2);
        var rt = cc.v2(p.x + rect.width * rect.scale / 2, p.y + rect.height * rect.scale / 2);
        var b = pos.x >= lb.x && pos.y >= lb.y && pos.x <= rt.x && pos.y <= rt.y;
        return b;
    };
    Game_2_type.prototype.handleTrue = function () {
        SoundManager_1.SoundManager.playEffect("正确反馈01", false);
        this.node.getChildByName("line_node").removeAllChildren();
        for (var i = 0; i < this.selfLineArr.length; i++) {
            this.createGreenLine(this.icon[this.selfLineArr[i][0] - 1].position, this.icon[this.selfLineArr[i][1] - 1].position);
        }
    };
    Game_2_type.prototype.createGreenLine = function (startPos, endPos) {
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
    Game_2_type.prototype.handleWrong = function () {
        SoundManager_1.SoundManager.playEffect("错误音效", false);
        this.node.getChildByName("line_node").removeAllChildren();
        this._curPointIndex = null;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_curPointIndex[this.index] = this._curPointIndex;
        this.graphics.clear();
        this.selfLineArr = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.level_2_selfData[this.index] = this.selfLineArr;
    };
    __decorate([
        property(cc.Integer)
    ], Game_2_type.prototype, "index", void 0);
    __decorate([
        property(cc.Node)
    ], Game_2_type.prototype, "icon", void 0);
    __decorate([
        property(cc.Boolean)
    ], Game_2_type.prototype, "isCanLine", void 0);
    __decorate([
        property(cc.Sprite)
    ], Game_2_type.prototype, "btn_yes", void 0);
    __decorate([
        property(cc.Sprite)
    ], Game_2_type.prototype, "btn_no", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Game_2_type.prototype, "btn_yes_img", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Game_2_type.prototype, "btn_no_img", void 0);
    Game_2_type = __decorate([
        ccclass
    ], Game_2_type);
    return Game_2_type;
}(cc.Component));
exports.default = Game_2_type;

cc._RF.pop();