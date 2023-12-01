
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/frame/scripts/Data/FrameConstValue');
require('./assets/frame/scripts/Data/FrameMsgType');
require('./assets/frame/scripts/Data/FrameSyncData');
require('./assets/frame/scripts/Http/NetWork');
require('./assets/frame/scripts/Manager/ListenerManager');
require('./assets/frame/scripts/Manager/ReportManager');
require('./assets/frame/scripts/Manager/SoundManager');
require('./assets/frame/scripts/Manager/SyncDataManager');
require('./assets/frame/scripts/Manager/UIManager');
require('./assets/frame/scripts/SDK/GameMsg');
require('./assets/frame/scripts/SDK/T2M');
require('./assets/frame/scripts/UI/AdaptiveScreen');
require('./assets/frame/scripts/UI/BaseFrameUI');
require('./assets/frame/scripts/UI/BaseUI');
require('./assets/frame/scripts/UI/BindNode');
require('./assets/frame/scripts/UI/GameMain');
require('./assets/frame/scripts/UI/Item/MaskGlobal');
require('./assets/frame/scripts/UI/Item/MaskRecover');
require('./assets/frame/scripts/UI/Item/TeacherPanelLoading');
require('./assets/frame/scripts/UI/Item/Tip');
require('./assets/frame/scripts/UI/Item/TitleNode');
require('./assets/frame/scripts/UI/Item/replayBtn');
require('./assets/frame/scripts/UI/Panel/AffirmTips');
require('./assets/frame/scripts/UI/Panel/BaseGamePanel');
require('./assets/frame/scripts/UI/Panel/BaseTeacherPanel');
require('./assets/frame/scripts/UI/Panel/ErrorPanel');
require('./assets/frame/scripts/UI/Panel/LoadingUI');
require('./assets/frame/scripts/UI/Panel/OverTips');
require('./assets/frame/scripts/UI/Panel/StarCount');
require('./assets/frame/scripts/UI/Panel/SubmissionPanel');
require('./assets/frame/scripts/UI/Panel/TipUI');
require('./assets/frame/scripts/UI/Panel/UploadAndReturnPanel');
require('./assets/frame/scripts/Utils/AudioPlayExtension');
require('./assets/frame/scripts/Utils/BoundingBoxDemo');
require('./assets/frame/scripts/Utils/BoundingBoxHelp');
require('./assets/frame/scripts/Utils/HitTest');
require('./assets/frame/scripts/Utils/MathUtils');
require('./assets/frame/scripts/Utils/Tools');
require('./assets/frame/scripts/Utils/UIHelp');
require('./assets/game/scripts/Data/ConstValue');
require('./assets/game/scripts/Data/CustomSyncData');
require('./assets/game/scripts/Data/EventType');
require('./assets/game/scripts/Manager/EditorManager');
require('./assets/game/scripts/Manager/GameManager');
require('./assets/game/scripts/SkeletonExt');
require('./assets/game/scripts/UI/Components/ButtonSync');
require('./assets/game/scripts/UI/Components/DragSync');
require('./assets/game/scripts/UI/Item/Gaem_3');
require('./assets/game/scripts/UI/Item/GameUI');
require('./assets/game/scripts/UI/Item/Game_1');
require('./assets/game/scripts/UI/Item/Game_1_Type');
require('./assets/game/scripts/UI/Item/Game_2');
require('./assets/game/scripts/UI/Item/Game_2_type');
require('./assets/game/scripts/UI/Item/SoundConfig');
require('./assets/game/scripts/UI/panel/GamePanel');
require('./assets/game/scripts/UI/panel/TeacherPanel');

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