
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/EventType":1,"./assets/game/scripts/Manager/GameManager":48,"./assets/game/scripts/Manager/EditorManager":51,"./assets/game/scripts/SkeletonExt":5,"./assets/game/scripts/UI/Components/ButtonSync":6,"./assets/game/scripts/UI/Item/Game_1_Type":54,"./assets/game/scripts/UI/Item/GameUI":14,"./assets/game/scripts/UI/Item/Game_2":53,"./assets/game/scripts/UI/Item/SoundConfig":13,"./assets/game/scripts/UI/Item/Game_1":52,"./assets/game/scripts/UI/panel/TeacherPanel":7,"./assets/game/scripts/UI/panel/GamePanel":15,"./assets/game/scripts/UI/Components/DragSync":50,"./assets/game/scripts/Data/ConstValue":49,"./assets/frame/scripts/Data/FrameConstValue":47,"./assets/frame/scripts/Http/NetWork":10,"./assets/frame/scripts/Manager/SoundManager":8,"./assets/frame/scripts/Manager/ReportManager":16,"./assets/frame/scripts/Manager/SyncDataManager":18,"./assets/frame/scripts/Manager/UIManager":21,"./assets/frame/scripts/Manager/ListenerManager":17,"./assets/frame/scripts/SDK/T2M":9,"./assets/frame/scripts/SDK/GameMsg":19,"./assets/frame/scripts/UI/BaseFrameUI":20,"./assets/frame/scripts/UI/BaseUI":24,"./assets/frame/scripts/UI/BindNode":27,"./assets/frame/scripts/UI/GameMain":28,"./assets/frame/scripts/UI/AdaptiveScreen":23,"./assets/frame/scripts/UI/Item/MaskRecover":29,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":22,"./assets/frame/scripts/UI/Item/Tip":30,"./assets/frame/scripts/UI/Item/replayBtn":25,"./assets/frame/scripts/UI/Item/TitleNode":26,"./assets/frame/scripts/UI/Item/MaskGlobal":2,"./assets/frame/scripts/UI/Panel/BaseGamePanel":34,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":11,"./assets/frame/scripts/UI/Panel/ErrorPanel":36,"./assets/frame/scripts/UI/Panel/LoadingUI":32,"./assets/frame/scripts/UI/Panel/OverTips":33,"./assets/frame/scripts/UI/Panel/StarCount":39,"./assets/frame/scripts/UI/Panel/SubmissionPanel":35,"./assets/frame/scripts/UI/Panel/TipUI":31,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":37,"./assets/frame/scripts/UI/Panel/AffirmTips":41,"./assets/frame/scripts/Utils/BoundingBoxDemo":43,"./assets/frame/scripts/Utils/BoundingBoxHelp":42,"./assets/frame/scripts/Utils/HitTest":12,"./assets/frame/scripts/Utils/Tools":46,"./assets/frame/scripts/Utils/MathUtils":38,"./assets/frame/scripts/Utils/UIHelp":44,"./assets/frame/scripts/Utils/AudioPlayExtension":40,"./assets/frame/scripts/Data/FrameMsgType":3,"./assets/frame/scripts/Data/FrameSyncData":45,"./assets/game/scripts/Data/CustomSyncData":4},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{"../../Data/FrameMsgType":3,"../../Manager/UIManager":21,"../../Utils/UIHelp":44,"../../Manager/ListenerManager":17,"../BindNode":27},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":9},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{"./GamePanel":15,"../../Manager/EditorManager":51,"../../../../frame/scripts/Manager/UIManager":21,"../../../../frame/scripts/Data/FrameMsgType":3,"../../../../frame/scripts/Utils/UIHelp":44,"../../../../frame/scripts/Manager/ReportManager":16,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":11,"../../../../frame/scripts/Manager/ListenerManager":17},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{"../Data/FrameConstValue":47,"../Data/FrameMsgType":3,"../Http/NetWork":10,"../SDK/GameMsg":19,"./ListenerManager":17,"./UIManager":21},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../Data/FrameMsgType":3,"../Http/NetWork":10,"../Manager/ListenerManager":17,"../Utils/UIHelp":44,"../Manager/SyncDataManager":18,"./GameMsg":19},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../Utils/UIHelp":44,"../Manager/UIManager":21,"../SDK/GameMsg":19,"../../../game/scripts/Data/ConstValue":49},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":49,"../../../../game/scripts/Manager/EditorManager":51,"../BaseUI":24,"../../Http/NetWork":10,"../../Utils/UIHelp":44},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"./Game_1":52,"./Game_2":53,"../../Data/EventType":1,"../../Manager/EditorManager":51,"../../../../frame/scripts/Manager/ListenerManager":17,"../../../../frame/scripts/Utils/UIHelp":44},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{"../../Data/EventType":1,"../../../../frame/scripts/Manager/ListenerManager":17,"../../../../frame/scripts/UI/Panel/BaseGamePanel":34,"../../../../frame/scripts/Manager/SyncDataManager":18},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{"../../../game/scripts/Data/ConstValue":49,"../SDK/GameMsg":19,"../../../game/scripts/Manager/EditorManager":51},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../../../game/scripts/Data/CustomSyncData":4,"../../../frame/scripts/Manager/ReportManager":16,"../../../frame/scripts/Data/FrameSyncData":45},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../Data/FrameConstValue":47,"./BaseUI":24},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{"../UI/BaseUI":24},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{"../../Data/FrameMsgType":3,"../../Manager/ListenerManager":17,"../BindNode":27},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{"../Manager/ListenerManager":17,"./BindNode":27,"../Data/FrameConstValue":47},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{"../../Data/FrameMsgType":3,"../../SDK/T2M":9},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../Data/FrameMsgType":3,"../../Manager/ListenerManager":17},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../Data/FrameMsgType":3,"../../../game/scripts/Manager/EditorManager":51,"../Http/NetWork":10,"../Manager/ListenerManager":17,"../Manager/SyncDataManager":18,"../Manager/ReportManager":16,"../Manager/UIManager":21,"../SDK/GameMsg":19,"../Manager/SoundManager":8,"../SDK/T2M":9,"../Utils/UIHelp":44},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../../Manager/ListenerManager":17,"../BindNode":27,"../../Data/FrameMsgType":3,"../../Manager/UIManager":21},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../BaseFrameUI":20,"../Item/Tip":30},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":49,"../../../../game/scripts/UI/panel/GamePanel":15,"../../../../game/scripts/UI/panel/TeacherPanel":7,"../../Http/NetWork":10,"../../SDK/GameMsg":19,"../../Manager/SoundManager":8,"../../Manager/UIManager":21,"../BaseFrameUI":20},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../../Utils/UIHelp":44,"./../../Manager/SoundManager":8,"../BaseFrameUI":20,"../../Utils/Tools":46,"../../SDK/T2M":9,"../../Data/FrameMsgType":3,"../../Manager/UIManager":21,"../../../../game/scripts/Data/ConstValue":49},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":49,"../../../../game/scripts/Manager/EditorManager":51,"../../Http/NetWork":10,"../../Manager/ListenerManager":17,"../../Manager/UIManager":21,"../../Manager/SoundManager":8,"../../Data/FrameMsgType":3,"../../Manager/SyncDataManager":18,"../../Manager/ReportManager":16,"../../SDK/T2M":9,"../../Utils/UIHelp":44,"../../SDK/GameMsg":19,"../BaseUI":24},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"../BaseFrameUI":20,"../../../../game/scripts/Data/ConstValue":49,"../../Http/NetWork":10,"../../Utils/UIHelp":44,"../../../../game/scripts/Manager/EditorManager":51},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"../../Utils/UIHelp":44,"./../../Manager/SoundManager":8,"./../../SDK/GameMsg":19,"./../BaseFrameUI":20},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../BaseFrameUI":20,"./../../Manager/ListenerManager":17,"../../Data/FrameMsgType":3,"../../Manager/ReportManager":16,"../../Utils/UIHelp":44,"../../SDK/T2M":9,"../../Manager/SoundManager":8,"../../../../game/scripts/Manager/EditorManager":51},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"./../../Manager/SoundManager":8,"../BaseFrameUI":20,"../../Utils/Tools":46,"../../../../game/scripts/Manager/EditorManager":51,"../../Manager/ReportManager":16,"../../../../game/scripts/Data/ConstValue":49,"../../Utils/UIHelp":44},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"./../Manager/SoundManager":8},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"../../SDK/T2M":9,"../../Data/FrameMsgType":3,"../../Utils/UIHelp":44,"../BaseFrameUI":20},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"./BoundingBoxHelp":42},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{"../Data/FrameMsgType":3,"../../../game/scripts/UI/panel/GamePanel":15,"../Manager/ListenerManager":17,"../Manager/UIManager":21,"../../../game/scripts/UI/panel/TeacherPanel":7,"../UI/Panel/AffirmTips":41,"../UI/Panel/ErrorPanel":36,"../UI/Panel/OverTips":33,"../UI/Panel/StarCount":39,"../UI/Panel/UploadAndReturnPanel":37,"../UI/Panel/TipUI":31,"../UI/Panel/SubmissionPanel":35},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":9},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"./Game_1_Type":54,"../../../../frame/scripts/Utils/UIHelp":44},"path":"preview-scripts/assets/game/scripts/UI/Item/Game_1.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/Game_2.js"},{"deps":{"../../../../frame/scripts/Utils/HitTest":12},"path":"preview-scripts/assets/game/scripts/UI/Item/Game_1_Type.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    