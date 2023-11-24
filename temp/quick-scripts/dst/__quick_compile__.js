
(function () {
var scripts = [{"deps":{"./assets/frame/scripts/UI/Item/Tip":1,"./assets/frame/scripts/Data/FrameConstValue":2,"./assets/game/scripts/SkeletonExt":3,"./assets/frame/scripts/SDK/GameMsg":7,"./assets/game/scripts/Data/EventType":10,"./assets/frame/scripts/UI/AdaptiveScreen":14,"./assets/frame/scripts/Manager/ListenerManager":15,"./assets/frame/scripts/UI/BindNode":18,"./assets/frame/scripts/Utils/Tools":30,"./assets/frame/scripts/Utils/HitTest":33,"./assets/frame/scripts/Utils/MathUtils":35,"./assets/frame/scripts/Utils/BoundingBoxHelp":38,"./assets/frame/scripts/Data/FrameMsgType":39,"./assets/frame/scripts/Data/FrameSyncData":40,"./assets/game/scripts/Manager/EditorManager":43,"./assets/game/scripts/UI/Item/SoundConfig":44,"./assets/game/scripts/Data/ConstValue":46,"./assets/game/scripts/Manager/GameManager":47,"./assets/game/scripts/Data/CustomSyncData":48,"./assets/game/scripts/UI/Item/Game_2":53,"./assets/frame/scripts/Http/NetWork":5,"./assets/frame/scripts/Manager/SyncDataManager":6,"./assets/frame/scripts/Utils/BoundingBoxDemo":9,"./assets/game/scripts/UI/Components/ButtonSync":4,"./assets/frame/scripts/Manager/SoundManager":11,"./assets/frame/scripts/Manager/ReportManager":12,"./assets/frame/scripts/SDK/T2M":13,"./assets/frame/scripts/Manager/UIManager":17,"./assets/frame/scripts/UI/BaseFrameUI":16,"./assets/frame/scripts/UI/GameMain":19,"./assets/frame/scripts/UI/BaseUI":21,"./assets/frame/scripts/UI/Panel/AffirmTips":8,"./assets/frame/scripts/Utils/AudioPlayExtension":41,"./assets/frame/scripts/Utils/UIHelp":42,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":20,"./assets/frame/scripts/UI/Item/TitleNode":22,"./assets/frame/scripts/UI/Item/replayBtn":24,"./assets/frame/scripts/UI/Item/MaskGlobal":23,"./assets/frame/scripts/UI/Item/MaskRecover":25,"./assets/frame/scripts/UI/Panel/OverTips":26,"./assets/frame/scripts/UI/Panel/BaseGamePanel":27,"./assets/frame/scripts/UI/Panel/ErrorPanel":28,"./assets/frame/scripts/UI/Panel/StarCount":29,"./assets/frame/scripts/UI/Panel/LoadingUI":31,"./assets/frame/scripts/UI/Panel/TipUI":32,"./assets/frame/scripts/UI/Panel/SubmissionPanel":34,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":36,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":37,"./assets/game/scripts/UI/panel/GamePanel":45,"./assets/game/scripts/UI/Item/Game_1":49,"./assets/game/scripts/UI/Item/Game_1_Type":51,"./assets/game/scripts/UI/Components/DragSync":50,"./assets/game/scripts/UI/Item/GameUI":52,"./assets/game/scripts/UI/panel/TeacherPanel":54},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":13},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{"../../../game/scripts/Data/ConstValue":46,"../Manager/UIManager":17,"../Utils/UIHelp":42,"../SDK/GameMsg":7},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../../../frame/scripts/Manager/ReportManager":12,"../../../frame/scripts/Data/FrameSyncData":40,"../../../game/scripts/Data/CustomSyncData":48},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../../SDK/T2M":13,"../BaseFrameUI":16,"../../Utils/UIHelp":42,"../../Data/FrameMsgType":39},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"./BoundingBoxHelp":38},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{"../Data/FrameConstValue":2,"../Data/FrameMsgType":39,"../Http/NetWork":5,"../SDK/GameMsg":7,"./UIManager":17,"./ListenerManager":15},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":43,"../SDK/GameMsg":7,"../../../game/scripts/Data/ConstValue":46},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{"../Http/NetWork":5,"../Data/FrameMsgType":39,"../Utils/UIHelp":42,"../Manager/ListenerManager":15,"./GameMsg":7,"../Manager/SyncDataManager":6},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../Data/FrameConstValue":2,"./BaseUI":21},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{"../UI/BaseUI":21},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":43,"../Data/FrameMsgType":39,"../Manager/ListenerManager":15,"../Http/NetWork":5,"../Manager/SoundManager":11,"../Manager/ReportManager":12,"../SDK/GameMsg":7,"../Manager/UIManager":17,"../Manager/SyncDataManager":6,"../Utils/UIHelp":42,"../SDK/T2M":13},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../../Manager/ListenerManager":15,"../../Data/FrameMsgType":39,"../BindNode":18},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"../Manager/ListenerManager":15,"../Data/FrameConstValue":2,"./BindNode":18},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{"../../Data/FrameMsgType":39,"../../Manager/ListenerManager":15},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{"../../Utils/UIHelp":42,"../../Data/FrameMsgType":39,"../../Manager/ListenerManager":15,"../../Manager/UIManager":17,"../BindNode":18},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../../Data/FrameMsgType":39,"../../SDK/T2M":13},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../BindNode":18,"../../Manager/UIManager":17,"../../Data/FrameMsgType":39,"../../Manager/ListenerManager":15},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"../BaseFrameUI":16,"../../Utils/Tools":30,"./../../Manager/SoundManager":11,"../../Utils/UIHelp":42,"../../Manager/UIManager":17,"../../SDK/T2M":13,"../../Data/FrameMsgType":39,"../../../../game/scripts/Data/ConstValue":46},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":43,"../../Data/FrameMsgType":39,"../../../../game/scripts/Data/ConstValue":46,"../../Http/NetWork":5,"../../SDK/T2M":13,"../../Manager/UIManager":17,"../../Manager/SoundManager":11,"../../Manager/ListenerManager":15,"../../Manager/ReportManager":12,"../../Manager/SyncDataManager":6,"../BaseUI":21,"../../SDK/GameMsg":7,"../../Utils/UIHelp":42},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"../../Utils/UIHelp":42,"./../../Manager/SoundManager":11,"./../BaseFrameUI":16,"./../../SDK/GameMsg":7},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../Utils/Tools":30,"./../../Manager/SoundManager":11,"../../Manager/ReportManager":12,"../BaseFrameUI":16,"../../../../game/scripts/Manager/EditorManager":43,"../../../../game/scripts/Data/ConstValue":46,"../../Utils/UIHelp":42},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":46,"../../../../game/scripts/UI/panel/TeacherPanel":54,"../../Manager/UIManager":17,"../../Manager/SoundManager":11,"../../../../game/scripts/UI/panel/GamePanel":45,"../../Http/NetWork":5,"../../SDK/GameMsg":7,"../BaseFrameUI":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../BaseFrameUI":16,"../Item/Tip":1},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{"../BaseFrameUI":16,"../../Http/NetWork":5,"../../Utils/UIHelp":42,"../../../../game/scripts/Data/ConstValue":46,"../../../../game/scripts/Manager/EditorManager":43},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"./../../Manager/ListenerManager":15,"../../Utils/UIHelp":42,"../../Data/FrameMsgType":39,"../BaseFrameUI":16,"../../Manager/SoundManager":11,"../../Manager/ReportManager":12,"../../SDK/T2M":13,"../../../../game/scripts/Manager/EditorManager":43},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":46,"../BaseUI":21,"../../../../game/scripts/Manager/EditorManager":43,"../../Http/NetWork":5,"../../Utils/UIHelp":42},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{"./../Manager/SoundManager":11},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"../../../game/scripts/UI/panel/GamePanel":45,"../../../game/scripts/UI/panel/TeacherPanel":54,"../Manager/UIManager":17,"../Manager/ListenerManager":15,"../Data/FrameMsgType":39,"../UI/Panel/ErrorPanel":28,"../UI/Panel/OverTips":26,"../UI/Panel/StarCount":29,"../UI/Panel/AffirmTips":8,"../UI/Panel/TipUI":32,"../UI/Panel/SubmissionPanel":34,"../UI/Panel/UploadAndReturnPanel":36},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":15,"../../Data/EventType":10,"../../../../frame/scripts/Manager/SyncDataManager":6,"../../../../frame/scripts/UI/Panel/BaseGamePanel":27},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"./Game_1_Type":51,"../../../../frame/scripts/Utils/UIHelp":42},"path":"preview-scripts/assets/game/scripts/UI/Item/Game_1.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":13},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"},{"deps":{"../../../../frame/scripts/Manager/SoundManager":11},"path":"preview-scripts/assets/game/scripts/UI/Item/Game_1_Type.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":15,"../../../../frame/scripts/Utils/UIHelp":42,"./Game_1":49,"../../Data/EventType":10},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/Game_2.js"},{"deps":{"../../../../frame/scripts/Manager/UIManager":17,"../../../../frame/scripts/Data/FrameMsgType":39,"../../../../frame/scripts/Manager/ListenerManager":15,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":37,"../../../../frame/scripts/Manager/ReportManager":12,"./GamePanel":45,"../../../../frame/scripts/Utils/UIHelp":42,"../../Manager/EditorManager":43},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"}];
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
    