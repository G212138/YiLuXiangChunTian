
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Role.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXFJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTREO0FBQzVELHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQStGQztRQTVGVyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFxQixFQUFFLENBQUM7UUFFakMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixnQkFBVSxHQUFZLElBQUksQ0FBQzs7SUE2RXZDLENBQUM7SUEzRVUsbUJBQUksR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7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Q0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZILE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25GO0lBQ0wsQ0FBQztJQUVNLHVCQUFRLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELHlDQUF5QztJQUN6QyxnQ0FBZ0M7SUFDaEMsSUFBSTtJQUVHLDhCQUFlLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFTSwyQkFBWSxHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBM0ZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ3VCO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ3NCO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ2dCO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7dUNBQ0s7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDbUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDa0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDbUI7SUFmcEIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQStGeEI7SUFBRCxXQUFDO0NBL0ZELEFBK0ZDLENBL0ZpQyxFQUFFLENBQUMsU0FBUyxHQStGN0M7a0JBL0ZvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVNYW96aSBmcm9tIFwiLi9HYW1lTWFvemlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbWFvemlfbm9kZV9mcm9udDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbWFvemlfbm9kZV9zaWRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgbWFvemlfaW1nOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHByaXZhdGUgaW5kZXg6IE51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgeHV4aWFuX21hb3ppOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBkaWFsb2dfbGVmdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZGlhbG9nX3JpZ2h0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGR1aWxpZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBtYW96aV9ub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaW5pdChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kdWlsaWVJbmRleCA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleChkYXRhKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1hb3ppX25vZGVfZnJvbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYW96aV9ub2RlX3NpZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYW96aV9ub2RlX2Zyb250LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5tYW96aV9ub2RlX3NpZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLnh1eGlhbl9tYW96aS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd01hb3ppKCkge1xyXG4gICAgICAgIGxldCBwaXBpRHVpbGllSW5kZXggPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VBcnIuaW5kZXhPZigyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuearuearuWcqOesrFwiLCBwaXBpRHVpbGllSW5kZXgpXHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BhaWR1aSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGVfZnJvbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubWFvemlfbm9kZV9zaWRlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGUgPSB0aGlzLm1hb3ppX25vZGVfc2lkZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGUgPSB0aGlzLm1hb3ppX25vZGVfZnJvbnQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGVfZnJvbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYW96aV9ub2RlX3NpZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5tYW96aV9ub2RlX2Zyb250LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGVfc2lkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy54dXhpYW5fbWFvemkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZHVpbGllSW5kZXggPiBwaXBpRHVpbGllSW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYW96aV9ub2RlX2Zyb250LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGVfc2lkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy54dXhpYW5fbWFvemkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZXggIT0gMikge1xyXG4gICAgICAgICAgICAvL+WIm+W7uuS4gOS4quaWsOeahOWbvueJh1xyXG4gICAgICAgICAgICBsZXQgbWFvemkgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICBsZXQgbWFvemlfc3ByaXRlID0gbWFvemkuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIG1hb3ppX3Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMubWFvemlfaW1nW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFyclt0aGlzLmR1aWxpZUluZGV4XV07XHJcbiAgICAgICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEubWFvemlBcnJbdGhpcy5kdWlsaWVJbmRleF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbWFvemkucGFyZW50ID0gdGhpcy5tYW96aV9ub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1hb3ppXCIpLmdldENvbXBvbmVudChHYW1lTWFvemkpLnNldEVuYWJsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0RpYWxvZyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMuZGlhbG9nX2xlZnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZHVpbGllSW5kZXggPj0gMikge1xyXG4gICAgICAgICAgICBkaWFsb2cgPSB0aGlzLmRpYWxvZ19yaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUZheWFuQXJyW3RoaXMuZHVpbGllSW5kZXhdICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgZGlhbG9nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRpYWxvZy5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VGYXlhbkFyclt0aGlzLmR1aWxpZUluZGV4XTtcclxuICAgICAgICAgICAgZGlhbG9nLmdldENoaWxkQnlOYW1lKFwiaW5kZXhcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpbmRleC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5kZXgoKTogTnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgc2V0RHVpbGllSW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgLy8gICAgIHRoaXMuZHVpbGllSW5kZXggPSBpbmRleDtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RHVpbGlleEluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVpbGllSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1hb3ppTm9kZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYW96aV9ub2RlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==