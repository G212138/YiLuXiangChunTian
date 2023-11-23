
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Manager/EditorManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64363RgvXdCJJdpexRQv89P', 'EditorManager');
// game/scripts/Manager/EditorManager.ts

"use strict";
/**编辑器数据类 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorManager = void 0;
/**
 * 编辑器数据，根据游戏自定义内部数据
 */
var EditorData = /** @class */ (function () {
    function EditorData() {
        // 是否开启星级评
        this.isStarCount = true;
        // 是否开启再玩一次
        this.isReplay = true;
        // 是否自动播放题干语音
        this.isPlayTitle = true;
        // 可重玩次数
        this.replayCount = 1;
        // 关卡总数
        this.levelCount = 1;
        // 总步数
        this.stepCount = 0;
        // 课件等级 0：幼小  1：小低  2：小高
        this.coursewareLevel = 2;
        // TODO 自定义数据
        this.gameIndex = 0;
    }
    return EditorData;
}());
var EditorManagerClass = /** @class */ (function () {
    function EditorManagerClass() {
        /** 编辑器数据 */
        this.editorData = new EditorData();
    }
    EditorManagerClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new EditorManagerClass();
        }
        return this._instance;
    };
    /**
     * 是否支持题目编辑
     */
    EditorManagerClass.prototype.isSupportEdit = function () {
        var keys = Object.getOwnPropertyNames(this.editorData);
        return keys.length > 7;
    };
    /**
     * 获取关卡总数
     */
    EditorManagerClass.prototype.getLevelCount = function () {
        return this.editorData.levelCount;
    };
    /**
     * 设置关卡总数
     */
    EditorManagerClass.prototype.setLevelCount = function (num) {
        this.editorData.levelCount = num;
    };
    /**
     * 获取总步数
     */
    EditorManagerClass.prototype.getStepCount = function () {
        return this.editorData.stepCount || this.getLevelCount();
    };
    /**
     * 设置总步数
     */
    EditorManagerClass.prototype.setStepCount = function (num) {
        this.editorData.stepCount = num;
    };
    /**
     * 获取课件等级
     * 需要各个游戏根据实际情况设置正确的数值
     * 课件等级 0：幼小  1：小低  2：小高
     */
    EditorManagerClass.prototype.getCoursewareLevel = function () {
        return this.editorData.coursewareLevel;
    };
    /**
     * 获取编辑器数据
     */
    EditorManagerClass.prototype.getData = function () {
        return this.editorData;
    };
    /**
     * 根据网络请求结果设置编辑器数据
     * @param {EditorData} data
     */
    EditorManagerClass.prototype.setData = function (data) {
        this.editorData = data;
    };
    return EditorManagerClass;
}());
exports.EditorManager = EditorManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcTWFuYWdlclxcRWRpdG9yTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWTs7O0FBRVo7O0dBRUc7QUFDSDtJQUFBO1FBQ0ksVUFBVTtRQUNILGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ25DLFdBQVc7UUFDSixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGFBQWE7UUFDTixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQyxRQUFRO1FBQ0QsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDL0IsT0FBTztRQUNBLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDOUIsTUFBTTtRQUNDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDN0Isd0JBQXdCO1FBQ2pCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRW5DLGFBQWE7UUFDTixjQUFTLEdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFBRCxpQkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFFRDtJQWFJO1FBSEEsWUFBWTtRQUNMLGVBQVUsR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBRWxDLENBQUM7SUFWVCw4QkFBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQU9EOztPQUVHO0lBQ0ksMENBQWEsR0FBcEI7UUFDSSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXZELE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksMENBQWEsR0FBcEI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNJLDBDQUFhLEdBQXBCLFVBQXFCLEdBQVc7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNJLHlDQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUVEOztPQUVHO0lBQ0kseUNBQVksR0FBbkIsVUFBb0IsR0FBVztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwrQ0FBa0IsR0FBekI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNJLG9DQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9DQUFPLEdBQWQsVUFBZSxJQUFnQjtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQTNFQSxBQTJFQyxJQUFBO0FBRVksUUFBQSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKirnvJbovpHlmajmlbDmja7nsbsgKi9cblxuLyoqXG4gKiDnvJbovpHlmajmlbDmja7vvIzmoLnmja7muLjmiI/oh6rlrprkuYnlhoXpg6jmlbDmja5cbiAqL1xuY2xhc3MgRWRpdG9yRGF0YSB7XG4gICAgLy8g5piv5ZCm5byA5ZCv5pif57qn6K+EXG4gICAgcHVibGljIGlzU3RhckNvdW50OiBib29sZWFuID0gdHJ1ZTtcbiAgICAvLyDmmK/lkKblvIDlkK/lho3njqnkuIDmrKFcbiAgICBwdWJsaWMgaXNSZXBsYXk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8vIOaYr+WQpuiHquWKqOaSreaUvumimOW5suivremfs1xuICAgIHB1YmxpYyBpc1BsYXlUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgLy8g5Y+v6YeN546p5qyh5pWwXG4gICAgcHVibGljIHJlcGxheUNvdW50OiBudW1iZXIgPSAxO1xuICAgIC8vIOWFs+WNoeaAu+aVsFxuICAgIHB1YmxpYyBsZXZlbENvdW50OiBudW1iZXIgPSAxO1xuICAgIC8vIOaAu+atpeaVsFxuICAgIHB1YmxpYyBzdGVwQ291bnQ6IG51bWJlciA9IDA7XG4gICAgLy8g6K++5Lu2562J57qnIDDvvJrlubzlsI8gIDHvvJrlsI/kvY4gIDLvvJrlsI/pq5hcbiAgICBwdWJsaWMgY291cnNld2FyZUxldmVsOiBudW1iZXIgPSAyO1xuXG4gICAgLy8gVE9ETyDoh6rlrprkuYnmlbDmja5cbiAgICBwdWJsaWMgZ2FtZUluZGV4OiBudW1iZXIgPSAwO1xufVxuXG5jbGFzcyBFZGl0b3JNYW5hZ2VyQ2xhc3Mge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogRWRpdG9yTWFuYWdlckNsYXNzO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRWRpdG9yTWFuYWdlckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKiDnvJbovpHlmajmlbDmja4gKi9cbiAgICBwdWJsaWMgZWRpdG9yRGF0YTogRWRpdG9yRGF0YSA9IG5ldyBFZGl0b3JEYXRhKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKbmlK/mjIHpopjnm67nvJbovpFcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNTdXBwb3J0RWRpdCgpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmVkaXRvckRhdGEpO1xuXG4gICAgICAgIHJldHVybiBrZXlzLmxlbmd0aCA+IDc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5YWz5Y2h5oC75pWwXG4gICAgICovXG4gICAgcHVibGljIGdldExldmVsQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRvckRhdGEubGV2ZWxDb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7lhbPljaHmgLvmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TGV2ZWxDb3VudChudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLmVkaXRvckRhdGEubGV2ZWxDb3VudCA9IG51bTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmgLvmraXmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U3RlcENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0b3JEYXRhLnN0ZXBDb3VudCB8fCB0aGlzLmdldExldmVsQ291bnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7mgLvmraXmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3RlcENvdW50KG51bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yRGF0YS5zdGVwQ291bnQgPSBudW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6K++5Lu2562J57qnXG4gICAgICog6ZyA6KaB5ZCE5Liq5ri45oiP5qC55o2u5a6e6ZmF5oOF5Ya16K6+572u5q2j56Gu55qE5pWw5YC8XG4gICAgICog6K++5Lu2562J57qnIDDvvJrlubzlsI8gIDHvvJrlsI/kvY4gIDLvvJrlsI/pq5hcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q291cnNld2FyZUxldmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0b3JEYXRhLmNvdXJzZXdhcmVMZXZlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bnvJbovpHlmajmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RGF0YSgpOiBFZGl0b3JEYXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7nvZHnu5zor7fmsYLnu5Pmnpzorr7nva7nvJbovpHlmajmlbDmja5cbiAgICAgKiBAcGFyYW0ge0VkaXRvckRhdGF9IGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBFZGl0b3JEYXRhKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yRGF0YSA9IGRhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRWRpdG9yTWFuYWdlciA9IEVkaXRvck1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xuIl19