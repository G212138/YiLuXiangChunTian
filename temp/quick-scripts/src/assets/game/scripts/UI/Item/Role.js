"use strict";
cc._RF.push(module, '2a8f9MTdQhOnIwIo/VSXIl3', 'Role');
// game/scripts/UI/Item/Role.ts

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
var EditorManager_1 = require("../../Manager/EditorManager");
var GameMaozi_1 = require("./GameMaozi");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maozi_node_front = null;
        _this.maozi_node_side = null;
        _this.maozi_img = [];
        _this.index = 0;
        _this.xuxian_maozi = null;
        _this.dialog_left = null;
        _this.dialog_right = null;
        _this.duilieIndex = 0;
        _this.maozi_node = null;
        return _this;
    }
    Role.prototype.init = function (data) {
        this.duilieIndex = data;
        this.node.zIndex = data;
        this.node.setSiblingIndex(data);
        this.node.active = true;
        this.maozi_node_front.active = false;
        this.maozi_node_side.active = false;
        this.maozi_node_front.removeAllChildren();
        this.maozi_node_side.removeAllChildren();
        this.xuxian_maozi.active = false;
    };
    Role.prototype.showMaozi = function () {
        var pipiDuilieIndex = EditorManager_1.EditorManager.editorData.jueseArr.indexOf(2);
        console.log("皮皮在第", pipiDuilieIndex);
        if (EditorManager_1.EditorManager.editorData.isPaidui) {
            this.maozi_node_front.active = false;
            this.maozi_node_side.active = true;
            this.maozi_node = this.maozi_node_side;
        }
        else {
            this.maozi_node = this.maozi_node_front;
            this.maozi_node_front.active = true;
            this.maozi_node_side.active = false;
        }
        if (this.index == 2) {
            this.maozi_node_front.active = false;
            this.maozi_node_side.active = false;
            this.xuxian_maozi.active = true;
        }
        if (this.duilieIndex > pipiDuilieIndex) {
            this.maozi_node_front.active = false;
            this.maozi_node_side.active = false;
            this.xuxian_maozi.active = true;
        }
        else if (this.index != 2) {
            //创建一个新的图片
            var maozi = new cc.Node();
            var maozi_sprite = maozi.addComponent(cc.Sprite);
            maozi_sprite.spriteFrame = this.maozi_img[EditorManager_1.EditorManager.editorData.maoziArr[this.duilieIndex]];
            if (EditorManager_1.EditorManager.editorData.maoziArr[this.duilieIndex] != null) {
                maozi.parent = this.maozi_node;
            }
            this.node.getChildByName("maozi").getComponent(GameMaozi_1.default).setEnable(false);
        }
    };
    Role.prototype.showDialog = function (index) {
        var dialog = this.dialog_left;
        if (this.duilieIndex >= 2) {
            dialog = this.dialog_right;
        }
        if (EditorManager_1.EditorManager.editorData.jueseFayanArr[this.duilieIndex] != "") {
            dialog.active = true;
            dialog.getChildByName("text").getComponent(cc.Label).string = EditorManager_1.EditorManager.editorData.jueseFayanArr[this.duilieIndex];
            dialog.getChildByName("index").getComponent(cc.Label).string = index.toString();
        }
    };
    Role.prototype.getIndex = function () {
        return this.index;
    };
    // public setDuilieIndex(index: number) {
    //     this.duilieIndex = index;
    // }
    Role.prototype.getDuiliexIndex = function () {
        return this.duilieIndex;
    };
    Role.prototype.getMaoziNode = function () {
        return this.maozi_node;
    };
    __decorate([
        property(cc.Node)
    ], Role.prototype, "maozi_node_front", void 0);
    __decorate([
        property(cc.Node)
    ], Role.prototype, "maozi_node_side", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Role.prototype, "maozi_img", void 0);
    __decorate([
        property(cc.Integer)
    ], Role.prototype, "index", void 0);
    __decorate([
        property(cc.Node)
    ], Role.prototype, "xuxian_maozi", void 0);
    __decorate([
        property(cc.Node)
    ], Role.prototype, "dialog_left", void 0);
    __decorate([
        property(cc.Node)
    ], Role.prototype, "dialog_right", void 0);
    Role = __decorate([
        ccclass
    ], Role);
    return Role;
}(cc.Component));
exports.default = Role;

cc._RF.pop();