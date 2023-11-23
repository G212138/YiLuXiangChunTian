
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/EventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d48b48sqpEdozOnbOcVCAB', 'EventType');
// game/scripts/Data/EventType.ts

"use strict";
/**
 * 自定义事件类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    // examp
    EventType["ON_BUTTON_CLICKED"] = "ON_BUTTON_CLICKED";
    EventType["ENTER_GAME"] = "ENTER_GAME";
    EventType["GAME_RECONNECT"] = "GAME_RECONNECT";
    EventType["GAME_OVER"] = "GAME_OVER";
    EventType["SUBMIT"] = "SUBMIT";
    EventType["GAME_REPLAY"] = "GAME_REPLAY";
    EventType["DRAG_HEAD"] = "DRAG_HEAD";
    EventType["DRAG_MAOZI"] = "DRAG_MAOZI";
    EventType["DRAG_HEAD_END"] = "DRAG_HEAD_END";
    EventType["DRAG_MAOZI_END"] = "DRAG_MAOZI_END";
    EventType["GAME_MAOZI_DRAG"] = "GAME_MAOZI_DRAG";
    EventType["GAME_MAOZI_DRAG_END"] = "GAME_MAOZI_DRAG_END";
})(EventType = exports.EventType || (exports.EventType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcRXZlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRzs7O0FBRUgsSUFBWSxTQWtCWDtBQWxCRCxXQUFZLFNBQVM7SUFDakIsUUFBUTtJQUNSLG9EQUF1QyxDQUFBO0lBRXZDLHNDQUF5QixDQUFBO0lBQ3pCLDhDQUFpQyxDQUFBO0lBQ2pDLG9DQUF1QixDQUFBO0lBQ3ZCLDhCQUFpQixDQUFBO0lBQ2pCLHdDQUEyQixDQUFBO0lBRTNCLG9DQUF1QixDQUFBO0lBQ3ZCLHNDQUF5QixDQUFBO0lBQ3pCLDRDQUErQixDQUFBO0lBQy9CLDhDQUFpQyxDQUFBO0lBRWpDLGdEQUFtQyxDQUFBO0lBQ25DLHdEQUEyQyxDQUFBO0FBRS9DLENBQUMsRUFsQlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFrQnBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDoh6rlrprkuYnkuovku7bnsbvlnotcbiAqL1xuXG5leHBvcnQgZW51bSBFdmVudFR5cGUge1xuICAgIC8vIGV4YW1wXG4gICAgT05fQlVUVE9OX0NMSUNLRUQgPSAnT05fQlVUVE9OX0NMSUNLRUQnLFxuXG4gICAgRU5URVJfR0FNRSA9ICdFTlRFUl9HQU1FJyxcbiAgICBHQU1FX1JFQ09OTkVDVCA9IFwiR0FNRV9SRUNPTk5FQ1RcIixcbiAgICBHQU1FX09WRVIgPSBcIkdBTUVfT1ZFUlwiLFxuICAgIFNVQk1JVCA9IFwiU1VCTUlUXCIsXG4gICAgR0FNRV9SRVBMQVkgPSBcIkdBTUVfUkVQTEFZXCIsXG5cbiAgICBEUkFHX0hFQUQgPSBcIkRSQUdfSEVBRFwiLFxuICAgIERSQUdfTUFPWkkgPSBcIkRSQUdfTUFPWklcIixcbiAgICBEUkFHX0hFQURfRU5EID0gXCJEUkFHX0hFQURfRU5EXCIsXG4gICAgRFJBR19NQU9aSV9FTkQgPSBcIkRSQUdfTUFPWklfRU5EXCIsXG5cbiAgICBHQU1FX01BT1pJX0RSQUcgPSBcIkdBTUVfTUFPWklfRFJBR1wiLFxuICAgIEdBTUVfTUFPWklfRFJBR19FTkQgPSBcIkdBTUVfTUFPWklfRFJBR19FTkRcIixcblxufVxuIl19