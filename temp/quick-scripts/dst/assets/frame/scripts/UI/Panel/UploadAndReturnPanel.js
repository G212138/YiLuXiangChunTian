
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a2a4ho4VlCloJCvzPCR9a/', 'UploadAndReturnPanel');
// frame/scripts/UI/Panel/UploadAndReturnPanel.ts

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
var ListenerManager_1 = require("./../../Manager/ListenerManager");
var BaseFrameUI_1 = require("../BaseFrameUI");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var UIHelp_1 = require("../../Utils/UIHelp");
var ReportManager_1 = require("../../Manager/ReportManager");
var SoundManager_1 = require("../../Manager/SoundManager");
var T2M_1 = require("../../SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UploadAndReturnPanel = /** @class */ (function (_super) {
    __extends(UploadAndReturnPanel, _super);
    function UploadAndReturnPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UploadAndReturnPanel.prototype.onLoad = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.POSITION_CHANGED, function () {
            _this.adjustWidget();
        });
    };
    UploadAndReturnPanel.prototype.start = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, 1);
    };
    UploadAndReturnPanel.prototype.onFanHui = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, 0);
        UIHelp_1.UIHelp.closeStarCount();
        UIHelp_1.UIHelp.closeGamePanel();
        UIHelp_1.UIHelp.closeUploadAndReturnPanel();
        UIHelp_1.UIHelp.closeSubmissionPanel();
        UIHelp_1.UIHelp.closeOverTips();
        UIHelp_1.UIHelp.closeAffirmTip();
        ReportManager_1.ReportManager.reportGameOver();
        SoundManager_1.SoundManager.stopAll();
        T2M_1.T2M.onReturnToTeacherPanel();
    };
    UploadAndReturnPanel.prototype.onTiJiao = function () {
        // const isEdit = EditorManager.isSupportEdit();
        // if (!isEdit || ReportManager.isAllOver) {
        UIHelp_1.UIHelp.showSubmissionPanel();
        // } else {
        //     UIHelp.showTip('请先完成一遍题目');
        // }
    };
    UploadAndReturnPanel.prototype.adjustWidget = function () {
        var scenceHeight = cc.winSize.height;
        var widget = this.getComponent(cc.Widget);
        if (widget) {
            if (scenceHeight > this.node.height) {
                widget.bottom = (scenceHeight - this.node.height) / 2;
            }
            else {
                widget.bottom = 0;
            }
            widget.updateAlignment();
        }
    };
    UploadAndReturnPanel.className = 'UploadAndReturnPanel';
    UploadAndReturnPanel = __decorate([
        ccclass
    ], UploadAndReturnPanel);
    return UploadAndReturnPanel;
}(BaseFrameUI_1.default));
exports.default = UploadAndReturnPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcVXBsb2FkQW5kUmV0dXJuUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQWtFO0FBQ2xFLDhDQUF5QztBQUN6Qyx3REFBdUQ7QUFDdkQsNkNBQTRDO0FBQzVDLDZEQUE0RDtBQUM1RCwyREFBMEQ7QUFDMUQscUNBQW9DO0FBRzlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtELHdDQUFXO0lBQTdEOztJQStDQSxDQUFDO0lBNUNHLHFDQUFNLEdBQU47UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFO1lBQzdDLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBSyxHQUFMO1FBQ0ksaUNBQWUsQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLGlDQUFlLENBQUMsUUFBUSxDQUFDLDJCQUFZLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEUsZUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixlQUFNLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNuQyxlQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM5QixlQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsZUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLDZCQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0IsMkJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixTQUFHLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLGdEQUFnRDtRQUNoRCw0Q0FBNEM7UUFDeEMsZUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDakMsV0FBVztRQUNYLGtDQUFrQztRQUNsQyxJQUFJO0lBQ1IsQ0FBQztJQUVELDJDQUFZLEdBQVo7UUFDSSxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ3JCO1lBQ0QsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQTdDYSw4QkFBUyxHQUFHLHNCQUFzQixDQUFDO0lBRGhDLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBK0N4QztJQUFELDJCQUFDO0NBL0NELEFBK0NDLENBL0NpRCxxQkFBVyxHQStDNUQ7a0JBL0NvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLy4uLy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCBCYXNlRnJhbWVVSSBmcm9tICcuLi9CYXNlRnJhbWVVSSc7XG5pbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IHsgUmVwb3J0TWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvUmVwb3J0TWFuYWdlcic7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgeyBUMk0gfSBmcm9tICcuLi8uLi9TREsvVDJNJztcbmltcG9ydCB7IEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3NjcmlwdHMvTWFuYWdlci9FZGl0b3JNYW5hZ2VyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZEFuZFJldHVyblBhbmVsIGV4dGVuZHMgQmFzZUZyYW1lVUkge1xuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3NOYW1lID0gJ1VwbG9hZEFuZFJldHVyblBhbmVsJztcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlBPU0lUSU9OX0NIQU5HRUQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0V2lkZ2V0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk9OX0VESVRfU1RBVEVfU1dJVENISU5HLCAxKTtcbiAgICB9XG5cbiAgICBvbkZhbkh1aSgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5PTl9FRElUX1NUQVRFX1NXSVRDSElORywgMCk7XG4gICAgICAgIFVJSGVscC5jbG9zZVN0YXJDb3VudCgpO1xuICAgICAgICBVSUhlbHAuY2xvc2VHYW1lUGFuZWwoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlVXBsb2FkQW5kUmV0dXJuUGFuZWwoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlU3VibWlzc2lvblBhbmVsKCk7XG4gICAgICAgIFVJSGVscC5jbG9zZU92ZXJUaXBzKCk7XG4gICAgICAgIFVJSGVscC5jbG9zZUFmZmlybVRpcCgpO1xuICAgICAgICBSZXBvcnRNYW5hZ2VyLnJlcG9ydEdhbWVPdmVyKCk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wQWxsKCk7XG4gICAgICAgIFQyTS5vblJldHVyblRvVGVhY2hlclBhbmVsKCk7XG4gICAgfVxuXG4gICAgb25UaUppYW8oKSB7XG4gICAgICAgIC8vIGNvbnN0IGlzRWRpdCA9IEVkaXRvck1hbmFnZXIuaXNTdXBwb3J0RWRpdCgpO1xuICAgICAgICAvLyBpZiAoIWlzRWRpdCB8fCBSZXBvcnRNYW5hZ2VyLmlzQWxsT3Zlcikge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dTdWJtaXNzaW9uUGFuZWwoKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIFVJSGVscC5zaG93VGlwKCfor7flhYjlrozmiJDkuIDpgY3popjnm64nKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGFkanVzdFdpZGdldCgpIHtcbiAgICAgICAgbGV0IHNjZW5jZUhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0O1xuICAgICAgICBsZXQgd2lkZ2V0ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgaWYgKHdpZGdldCkge1xuICAgICAgICAgICAgaWYgKHNjZW5jZUhlaWdodCA+IHRoaXMubm9kZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB3aWRnZXQuYm90dG9tID0gKHNjZW5jZUhlaWdodCAtIHRoaXMubm9kZS5oZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=