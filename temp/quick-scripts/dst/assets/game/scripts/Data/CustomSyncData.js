
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/CustomSyncData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6665ym0IlJNYKq4da/THmw', 'CustomSyncData');
// game/scripts/Data/CustomSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSyncData = void 0;
/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
var CustomSyncData = /** @class */ (function () {
    function CustomSyncData() {
        this.curLevel = 0; // 当前关卡(第一关为0)
        // TODO 自定义
        this.levelTypeIndex = null;
        this.level_1_selfData = [[], [], [], [], [], []];
        this.level_1_curPointIndex = [null, null, null, null, null, null];
        this.level_1_finish = [false, false, false, false, false, false];
        this.level_2_selfData = [[], [], [], [], [], []];
        this.level_2_curPointIndex = [null, null, null, null, null, null];
        this.level_2_hasChoose = [false, false, false, false, false, false];
        this.level_2_yes_btn = [0, 0, 0, 0, 0, 0];
        this.level_2_no_btn = [0, 0, 0, 0, 0, 0];
    }
    return CustomSyncData;
}());
exports.CustomSyncData = CustomSyncData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFFSixtQkFBYyxHQUFXLElBQUksQ0FBQztRQUM5QixxQkFBZ0IsR0FBaUIsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELDBCQUFxQixHQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxtQkFBYyxHQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV2RSxxQkFBZ0IsR0FBaUIsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELDBCQUFxQixHQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxzQkFBaUIsR0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUUsb0JBQWUsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsbUJBQWMsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6ZyA6KaB5ZCM5q2l55qE6Ieq5a6a5LmJ5pWw5o2uXG4gKiDmuLjmiI/kuJrliqHlsYLlkIzmraXmlbDmja7lnKjov5nph4zmt7vliqBcbiAqL1xuZXhwb3J0IGNsYXNzIEN1c3RvbVN5bmNEYXRhIHtcbiAgICBwdWJsaWMgY3VyTGV2ZWw6IG51bWJlciA9IDA7IC8vIOW9k+WJjeWFs+WNoSjnrKzkuIDlhbPkuLowKVxuICAgIC8vIFRPRE8g6Ieq5a6a5LmJXG5cbiAgICBwdWJsaWMgbGV2ZWxUeXBlSW5kZXg6IG51bWJlciA9IG51bGw7XG4gICAgcHVibGljIGxldmVsXzFfc2VsZkRhdGE6IG51bWJlcltdW11bXSA9IFtbXSxbXSxbXSxbXSxbXSxbXV07XG4gICAgcHVibGljIGxldmVsXzFfY3VyUG9pbnRJbmRleDogbnVtYmVyW10gPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgcHVibGljIGxldmVsXzFfZmluaXNoOiBib29sZWFuW10gPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07XG5cbiAgICBwdWJsaWMgbGV2ZWxfMl9zZWxmRGF0YTogbnVtYmVyW11bXVtdID0gW1tdLFtdLFtdLFtdLFtdLFtdXTtcbiAgICBwdWJsaWMgbGV2ZWxfMl9jdXJQb2ludEluZGV4OiBudW1iZXJbXSA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXTtcbiAgICBwdWJsaWMgbGV2ZWxfMl9oYXNDaG9vc2U6IGJvb2xlYW5bXSA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXTtcbiAgICBwdWJsaWMgbGV2ZWxfMl95ZXNfYnRuOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICBwdWJsaWMgbGV2ZWxfMl9ub19idG46IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xufVxuIl19