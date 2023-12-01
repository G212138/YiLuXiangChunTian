
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Game_2_type.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVfMl90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUFvRjtBQUNwRiwrRUFBOEU7QUFDOUUscUZBQW9GO0FBQ3BGLGtEQUFpRDtBQUczQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTRTQztRQXpTVyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFVBQUksR0FBYyxFQUFFLENBQUM7UUFFckIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBcUIsRUFBRSxDQUFDO1FBRW5DLGdCQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUVsQyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixvQkFBYyxHQUFXLElBQUksQ0FBQztRQUM5QixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUM3QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixhQUFPLEdBQWlCO1lBQzVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEYsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25GLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNKLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFD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QyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ2E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvREFDa0I7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDaUI7SUFmekIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTRTL0I7SUFBRCxrQkFBQztDQTVTRCxBQTRTQyxDQTVTd0MsRUFBRSxDQUFDLFNBQVMsR0E0U3BEO2tCQTVTb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lXzJfdHlwZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGljb246IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBwcml2YXRlIGlzQ2FuTGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHByaXZhdGUgYnRuX3llczogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwcml2YXRlIGJ0bl9ubzogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgYnRuX3llc19pbWc6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgYnRuX25vX2ltZzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2lzQ3VycmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfY3VyUG9pbnRJbmRleDogbnVtYmVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2lzRHJhd2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgbGluZUFycjogbnVtYmVyW11bXVtdID0gW1xyXG4gICAgICAgIFtbMSwgMl0sIFsyLCAzXSwgWzMsIDRdLCBbNCwgNV0sIFs1LCA2XSwgWzYsIDddLCBbNywgOF0sIFs4LCAxXSwgWzIsIDhdLCBbMiwgNl0sIFs0LCA2XV0sXHJcbiAgICAgICAgW1sxLCAyXSwgWzIsIDNdLCBbMywgNF0sIFs0LCA1XSwgWzUsIDZdLCBbNiwgN10sIFs3LCA4XSwgWzgsIDldLCBbOSwgMV0sIFsxLCAxMF0sIFsxLCAxNV1cclxuICAgICAgICAgICAgLCBbMiwgMTBdLCBbMiwgMTFdLCBbNCwgMTFdLCBbNCwgMTJdLCBbNiwgMTJdLCBbNiwgMTNdLCBbNywgMTNdLCBbNywgMTRdLCBbOSwgMTRdLCBbOSwgMTVdLCBbMTAsIDE1XSwgWzEwLCAxMV0sIFsxMSwgMTJdLCBbMTIsIDEzXSwgWzEzLCAxNF0sIFsxNCwgMTVdXSxcclxuICAgICAgICBbWzEsIDJdLCBbMiwgM10sIFszLCA0XSwgWzQsIDVdLCBbNSwgMV0sIFsxLCA0XSwgWzIsIDRdXSxcclxuICAgICAgICBbWzEsIDJdLCBbMiwgM10sIFszLCA0XSwgWzQsIDVdLCBbNSwgNl0sIFs2LCA3XSwgWzcsIDhdLCBbOCwgMV0sIFsyLCA0XSwgWzQsIDZdLCBbNiwgOF0sIFs4LCAyXV0sXHJcbiAgICAgICAgW10sXHJcbiAgICBdO1xyXG4gICAgcHJpdmF0ZSBzZWxmTGluZUFycjogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBoYXNDaG9vc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImRyYWdMaW5lX25vZGVcIikuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNULCB0aGlzLmhhbmRsZVJlQ29ubmVjdCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNULCB0aGlzLmhhbmRsZVJlQ29ubmVjdCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSZUNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5fY3VyUG9pbnRJbmRleCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzJfY3VyUG9pbnRJbmRleFt0aGlzLmluZGV4XTtcclxuICAgICAgICB0aGlzLnNlbGZMaW5lQXJyID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEubGV2ZWxfMl9zZWxmRGF0YVt0aGlzLmluZGV4XTtcclxuICAgICAgICB0aGlzLmhhc0Nob29zZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzJfaGFzQ2hvb3NlW3RoaXMuaW5kZXhdO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0Nob29zZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3VjaF9tYXNrXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lX25vZGVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbF8xX2ZpbmlzaFt0aGlzLmluZGV4XSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZkxpbmVBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlR3JlZW5MaW5lKHRoaXMuaWNvblt0aGlzLnNlbGZMaW5lQXJyW2ldWzBdIC0gMV0ucG9zaXRpb24sIHRoaXMuaWNvblt0aGlzLnNlbGZMaW5lQXJyW2ldWzFdIC0gMV0ucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGZMaW5lQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUxpbmUodGhpcy5pY29uW3RoaXMuc2VsZkxpbmVBcnJbaV1bMF0gLSAxXS5wb3NpdGlvbiwgdGhpcy5pY29uW3RoaXMuc2VsZkxpbmVBcnJbaV1bMV0gLSAxXS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuX3JldHVyblwiKS5hY3RpdmUgPSB0aGlzLnNlbGZMaW5lQXJyLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgbGV0IGJ0bl95ZXNfc3RhdGUgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbF8yX3llc19idG5bdGhpcy5pbmRleF07XHJcbiAgICAgICAgbGV0IGJ0bl9ub19zdGF0ZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzJfbm9fYnRuW3RoaXMuaW5kZXhdO1xyXG4gICAgICAgIHRoaXMuYnRuX3llcy5zcHJpdGVGcmFtZSA9IHRoaXMuYnRuX3llc19pbWdbYnRuX3llc19zdGF0ZV07XHJcbiAgICAgICAgdGhpcy5idG5fbm8uc3ByaXRlRnJhbWUgPSB0aGlzLmJ0bl9ub19pbWdbYnRuX25vX3N0YXRlXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrWWVzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0Nob29zZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2FuTGluZSkge1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuato+ehrumfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hvb3NlID0gdHJ1ZTtcclxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEubGV2ZWxfMl9oYXNDaG9vc2VbdGhpcy5pbmRleF0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNob3coKTtcclxuICAgICAgICAgICAgdGhpcy5idG5feWVzLnNwcml0ZUZyYW1lID0gdGhpcy5idG5feWVzX2ltZ1sxXTtcclxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEubGV2ZWxfMl95ZXNfYnRuW3RoaXMuaW5kZXhdID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIumUmeivr+mfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX3llcy5zcHJpdGVGcmFtZSA9IHRoaXMuYnRuX3llc19pbWdbMl07XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzJfeWVzX2J0blt0aGlzLmluZGV4XSA9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja05vKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0Nob29zZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2FuTGluZSkge1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIumUmeivr+mfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX25vLnNwcml0ZUZyYW1lID0gdGhpcy5idG5fbm9faW1nWzJdO1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbF8yX25vX2J0blt0aGlzLmluZGV4XSA9IDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLmraPnoa7pn7PmlYhcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0Nob29zZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzJfaGFzQ2hvb3NlW3RoaXMuaW5kZXhdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTaG93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX25vLnNwcml0ZUZyYW1lID0gdGhpcy5idG5fbm9faW1nWzFdO1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbF8yX25vX2J0blt0aGlzLmluZGV4XSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja1Jlc2V0KCkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi54K55Ye76Z+z5pWIXCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lX25vZGVcIikucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLl9jdXJQb2ludEluZGV4ID0gbnVsbDtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbF8yX2N1clBvaW50SW5kZXhbdGhpcy5pbmRleF0gPSB0aGlzLl9jdXJQb2ludEluZGV4O1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnNlbGZMaW5lQXJyID0gW107XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEubGV2ZWxfMl9zZWxmRGF0YVt0aGlzLmluZGV4XSA9IHRoaXMuc2VsZkxpbmVBcnI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuX3JldHVyblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVNob3coKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDYW5MaW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRvdWNoX21hc2tcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZ2FtZV9ub2RlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EcmFnU3RhcnQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGRhdGEudGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoZGF0YS5wb3MueCwgZGF0YS5wb3MueSkpO1xyXG4gICAgICAgIHRoaXMuaWNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUG9zSW5SZWN0KHBvcywgaXRlbSkgJiYgKHRoaXMuX2N1clBvaW50SW5kZXggPT0gbnVsbCB8fCB0aGlzLl9jdXJQb2ludEluZGV4ID09IE51bWJlcihpdGVtLm5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25fY2hlY2tcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2NoZWNrXCIpLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2NoZWNrXCIpKS50bygwLjIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyUG9pbnRJbmRleCA9IE51bWJlcihpdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEubGV2ZWxfMl9jdXJQb2ludEluZGV4W3RoaXMuaW5kZXhdID0gdGhpcy5fY3VyUG9pbnRJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzRHJhd2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZVBvcyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImRyYWdMaW5lX25vZGVcIikuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKGxpbmVQb3MueCwgbGluZVBvcy55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmZpbGxDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVXaWR0aCA9IDIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRyYWdNb3ZlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBwb3MgPSBkYXRhLnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpKTtcclxuICAgICAgICBsZXQgbGluZVBvcyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImRyYWdMaW5lX25vZGVcIikuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICBpZiAodGhpcy5faXNEcmF3aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8odGhpcy5pY29uW3RoaXMuX2N1clBvaW50SW5kZXggLSAxXS5wb3NpdGlvbi54LCB0aGlzLmljb25bdGhpcy5fY3VyUG9pbnRJbmRleCAtIDFdLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhsaW5lUG9zLngsIGxpbmVQb3MueSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUG9zSW5SZWN0KHBvcywgaXRlbSkgJiYgKHRoaXMuX2N1clBvaW50SW5kZXggIT0gTnVtYmVyKGl0ZW0ubmFtZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BvaW50SW5MaW5lKFt0aGlzLl9jdXJQb2ludEluZGV4LCBOdW1iZXIoaXRlbS5uYW1lKV0sIHRoaXMubGluZUFyclt0aGlzLmluZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuato+ehrumfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxmTGluZUFyci5wdXNoKFt0aGlzLl9jdXJQb2ludEluZGV4LCBOdW1iZXIoaXRlbS5uYW1lKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzJfc2VsZkRhdGFbdGhpcy5pbmRleF0gPSB0aGlzLnNlbGZMaW5lQXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTGluZSh0aGlzLmljb25bdGhpcy5fY3VyUG9pbnRJbmRleCAtIDFdLnBvc2l0aW9uLCB0aGlzLmljb25bTnVtYmVyKGl0ZW0ubmFtZSkgLSAxXS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1clBvaW50SW5kZXggPSBOdW1iZXIoaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbF8yX2N1clBvaW50SW5kZXhbdGhpcy5pbmRleF0gPSB0aGlzLl9jdXJQb2ludEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvbl9jaGVja1wiKS5hY3RpdmUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25fY2hlY2tcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25fY2hlY2tcIikuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvbl9jaGVja1wiKSkudG8oMC4yLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VyUG9pbnRJbmRleCA9IE51bWJlcihpdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbF8yX2N1clBvaW50SW5kZXhbdGhpcy5pbmRleF0gPSB0aGlzLl9jdXJQb2ludEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2NoZWNrXCIpLmFjdGl2ZSA9IHRoaXMuX2N1clBvaW50SW5kZXggPT0gTnVtYmVyKGl0ZW0ubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRHJhZ0VuZChkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9pc0RyYXdpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5pY29uLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25fY2hlY2tcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHBvcyA9IGRhdGEudGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoZGF0YS5wb3MueCwgZGF0YS5wb3MueSkpO1xyXG4gICAgICAgIGRhdGEudGFyZ2V0LnBvc2l0aW9uID0gY2MuVmVjMy5aRVJPO1xyXG4gICAgICAgIGRhdGEudGFyZ2V0LnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBsZXQgY3VlTGV2ZWxMaW5lQXJyID0gdGhpcy5saW5lQXJyW3RoaXMuaW5kZXhdO1xyXG4gICAgICAgIC8v5Yik5patc2VsZkxpbmVBcnLmmK/lkKbot59jdWVMZXZlbExpbmVBcnLnm7jnrYnvvIzkuI3ogIPomZHmlbDnu4TnmoTpobrluo/lj4rlrZDmlbDnu4TnmoTpobrluo9cclxuICAgICAgICBsZXQgaXNTYW1lID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5zZWxmTGluZUFyci5sZW5ndGggPT0gY3VlTGV2ZWxMaW5lQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZkxpbmVBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpc0FsbEluID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2VsZkxpbmVBcnJbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BvaW50SW5MaW5lKHRoaXMuc2VsZkxpbmVBcnJbaV0sIGN1ZUxldmVsTGluZUFycikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBbGxJbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHRoaXMuc2VsZkxpbmVBcnJbaV1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxmTGluZUFycltpXVswXSA9IHRoaXMuc2VsZkxpbmVBcnJbaV1bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxmTGluZUFycltpXVsxXSA9IHRlbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQb2ludEluTGluZSh0aGlzLnNlbGZMaW5lQXJyW2ldLCBjdWVMZXZlbExpbmVBcnIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWxsSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQWxsSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1NhbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlzU2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNTYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi562U5qGI5q2j56GuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRydWUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuetlOahiOmUmeivr1wiKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5oYW5kbGVXcm9uZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fcmV0dXJuXCIpLmFjdGl2ZSA9IHRoaXMuc2VsZkxpbmVBcnIubGVuZ3RoID4gMDtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5sZXZlbF8yX3NlbGZEYXRhW3RoaXMuaW5kZXhdID0gdGhpcy5zZWxmTGluZUFycjtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIpOaWreeCuee7hOWcqOS4jeWcqOe6v+e7hOmHjO+8jOS4jeiAg+iZkemhuuW6j1xyXG4gICAgcHJpdmF0ZSBpc1BvaW50SW5MaW5lKHBvaW50QXJyOiBudW1iZXJbXSwgbGluZUFycjogbnVtYmVyW11bXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpc1BvaW50SW5MaW5lID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChsaW5lQXJyW2ldLmxlbmd0aCA9PSBwb2ludEFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpc0FsbEluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9pbnRBcnIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGluZUFycltpXS5pbmRleE9mKHBvaW50QXJyW2pdKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FsbEluID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0FsbEluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQb2ludEluTGluZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzUG9pbnRJbkxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVMaW5lKHN0YXJ0UG9zOiBjYy5WZWMzLCBlbmRQb3M6IGNjLlZlYzMpIHtcclxuICAgICAgICBsZXQgbGluZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIGxpbmVOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgbGluZU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibGluZV9ub2RlXCIpO1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IGxpbmVOb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDIwO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhlbmRQb3MueCwgZW5kUG9zLnkpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNQb3NJblJlY3QocG9zOiBjYy5WZWMyLCBwb2ludDogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc0luUmVjdChuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCBwb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwb3NJblJlY3QocG9zOiBjYy5WZWMyLCByZWN0OiBjYy5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHAgPSByZWN0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocmVjdC5wb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IGxiID0gY2MudjIocC54IC0gcmVjdC53aWR0aCAqIHJlY3Quc2NhbGUgLyAyLCBwLnkgLSByZWN0LmhlaWdodCAqIHJlY3Quc2NhbGUgLyAyKTtcclxuICAgICAgICBsZXQgcnQgPSBjYy52MihwLnggKyByZWN0LndpZHRoICogcmVjdC5zY2FsZSAvIDIsIHAueSArIHJlY3QuaGVpZ2h0ICogcmVjdC5zY2FsZSAvIDIpO1xyXG4gICAgICAgIGxldCBiID0gcG9zLnggPj0gbGIueCAmJiBwb3MueSA+PSBsYi55ICYmIHBvcy54IDw9IHJ0LnggJiYgcG9zLnkgPD0gcnQueTtcclxuICAgICAgICByZXR1cm4gYjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVRydWUoKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLmraPnoa7lj43ppogwMVwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibGluZV9ub2RlXCIpLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGZMaW5lQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR3JlZW5MaW5lKHRoaXMuaWNvblt0aGlzLnNlbGZMaW5lQXJyW2ldWzBdIC0gMV0ucG9zaXRpb24sIHRoaXMuaWNvblt0aGlzLnNlbGZMaW5lQXJyW2ldWzFdIC0gMV0ucG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUdyZWVuTGluZShzdGFydFBvczogY2MuVmVjMywgZW5kUG9zOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgbGV0IGxpbmVOb2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBsaW5lTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGxpbmVOb2RlLnBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxpbmVfbm9kZVwiKTtcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBsaW5lTm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMjA7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcclxuICAgICAgICBncmFwaGljcy5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcclxuICAgICAgICBncmFwaGljcy5tb3ZlVG8oc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKGVuZFBvcy54LCBlbmRQb3MueSk7XHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVXcm9uZygpIHtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIumUmeivr+mfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibGluZV9ub2RlXCIpLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5fY3VyUG9pbnRJbmRleCA9IG51bGw7XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEubGV2ZWxfMl9jdXJQb2ludEluZGV4W3RoaXMuaW5kZXhdID0gdGhpcy5fY3VyUG9pbnRJbmRleDtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5zZWxmTGluZUFyciA9IFtdO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmxldmVsXzJfc2VsZkRhdGFbdGhpcy5pbmRleF0gPSB0aGlzLnNlbGZMaW5lQXJyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==