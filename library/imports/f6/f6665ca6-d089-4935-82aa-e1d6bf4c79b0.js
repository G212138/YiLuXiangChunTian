"use strict";
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