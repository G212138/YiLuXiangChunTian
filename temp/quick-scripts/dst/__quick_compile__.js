
(function () {
var scripts = [{"deps":{"./assets/frame/scripts/Data/FrameSyncData":2,"./assets/game/scripts/Data/ConstValue":3,"./assets/game/scripts/SkeletonExt":5,"./assets/frame/scripts/SDK/GameMsg":7,"./assets/frame/scripts/UI/AdaptiveScreen":10,"./assets/frame/scripts/UI/Item/Tip":16,"./assets/frame/scripts/UI/BindNode":20,"./assets/frame/scripts/Utils/BoundingBoxHelp":24,"./assets/frame/scripts/Utils/HitTest":27,"./assets/frame/scripts/Data/FrameConstValue":28,"./assets/frame/scripts/Utils/MathUtils":31,"./assets/frame/scripts/Utils/Tools":34,"./assets/game/scripts/Manager/EditorManager":35,"./assets/game/scripts/Data/CustomSyncData":39,"./assets/game/scripts/Data/EventType":40,"./assets/game/scripts/UI/Item/SoundConfig":44,"./assets/frame/scripts/Data/FrameMsgType":45,"./assets/frame/scripts/Manager/ListenerManager":50,"./assets/game/scripts/Manager/GameManager":51,"./assets/frame/scripts/UI/Item/MaskGlobal":1,"./assets/frame/scripts/UI/BaseUI":4,"./assets/frame/scripts/Utils/AudioPlayExtension":8,"./assets/frame/scripts/Manager/SoundManager":9,"./assets/frame/scripts/UI/Panel/LoadingUI":6,"./assets/frame/scripts/UI/BaseFrameUI":13,"./assets/frame/scripts/Utils/BoundingBoxDemo":33,"./assets/frame/scripts/Utils/UIHelp":29,"./assets/frame/scripts/UI/Item/replayBtn":11,"./assets/frame/scripts/UI/Item/TitleNode":12,"./assets/frame/scripts/UI/Item/MaskRecover":14,"./assets/frame/scripts/UI/Panel/BaseGamePanel":15,"./assets/frame/scripts/UI/Panel/SubmissionPanel":17,"./assets/frame/scripts/UI/Panel/ErrorPanel":19,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":18,"./assets/frame/scripts/UI/Panel/AffirmTips":21,"./assets/frame/scripts/UI/Panel/TipUI":23,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":22,"./assets/frame/scripts/UI/Panel/StarCount":25,"./assets/frame/scripts/UI/Panel/OverTips":26,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":30,"./assets/game/scripts/UI/Components/ButtonSync":32,"./assets/frame/scripts/Http/NetWork":38,"./assets/game/scripts/UI/Item/EditHeadArea":36,"./assets/frame/scripts/Manager/SyncDataManager":46,"./assets/frame/scripts/SDK/T2M":52,"./assets/game/scripts/UI/panel/GamePanel":37,"./assets/frame/scripts/Manager/ReportManager":55,"./assets/frame/scripts/Manager/UIManager":56,"./assets/frame/scripts/UI/GameMain":57,"./assets/game/scripts/UI/Item/EditMaoZiArea":41,"./assets/game/scripts/UI/Item/GameMaoziDrag":43,"./assets/game/scripts/UI/Item/GameUI":42,"./assets/game/scripts/UI/Item/GameMaozi":47,"./assets/game/scripts/UI/Item/DragMaozi":48,"./assets/game/scripts/UI/Components/DragSync":53,"./assets/game/scripts/UI/Item/Role":54,"./assets/game/scripts/UI/Item/DragHead":49,"./assets/game/scripts/UI/panel/TeacherPanel":58},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Data/FrameMsgType":45,"../../Manager/ListenerManager":50,"../../Manager/UIManager":56,"../BindNode":20,"../../Utils/UIHelp":29},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"../Manager/ListenerManager":50,"../Data/FrameConstValue":28,"./BindNode":20},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"../../Http/NetWork":38,"../../../../game/scripts/Data/ConstValue":3,"../../../../game/scripts/UI/panel/GamePanel":37,"../../Manager/SoundManager":9,"../../../../game/scripts/UI/panel/TeacherPanel":58,"../BaseFrameUI":13,"../../Manager/UIManager":56,"../../SDK/GameMsg":7},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"./../Manager/SoundManager":9},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"../Data/FrameMsgType":45,"../SDK/GameMsg":7,"../Data/FrameConstValue":28,"../Http/NetWork":38,"./UIManager":56,"./ListenerManager":50},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{"../../Data/FrameMsgType":45,"../../SDK/T2M":52},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../Manager/ListenerManager":50,"../../Data/FrameMsgType":45},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{"./BaseUI":4,"../Data/FrameConstValue":28},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{"../../Data/FrameMsgType":45,"../../Manager/ListenerManager":50,"../../Manager/UIManager":56,"../BindNode":20},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"../../Data/FrameMsgType":45,"../../Manager/ReportManager":55,"../../Http/NetWork":38,"../../../../game/scripts/Data/ConstValue":3,"../../../../game/scripts/Manager/EditorManager":35,"../../Manager/SoundManager":9,"../../Manager/UIManager":56,"../../Manager/SyncDataManager":46,"../../Manager/ListenerManager":50,"../../SDK/GameMsg":7,"../../Utils/UIHelp":29,"../BaseUI":4,"../../SDK/T2M":52},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":3,"../../../../game/scripts/Manager/EditorManager":35,"../BaseFrameUI":13,"../../Http/NetWork":38,"../../Utils/UIHelp":29},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"../../Data/FrameMsgType":45,"../../Manager/ListenerManager":50,"../BindNode":20},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"./../../Manager/SoundManager":9,"../../Utils/UIHelp":29,"./../BaseFrameUI":13,"./../../SDK/GameMsg":7},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../../SDK/T2M":52,"../../Data/FrameMsgType":45,"../BaseFrameUI":13,"../../Utils/UIHelp":29},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":3,"../../../../game/scripts/Manager/EditorManager":35,"../../Http/NetWork":38,"../BaseUI":4,"../../Utils/UIHelp":29},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"../BaseFrameUI":13,"../Item/Tip":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"./../../Manager/SoundManager":9,"../BaseFrameUI":13,"../../../../game/scripts/Data/ConstValue":3,"../../Utils/Tools":34,"../../Manager/ReportManager":55,"../../../../game/scripts/Manager/EditorManager":35,"../../Utils/UIHelp":29},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../BaseFrameUI":13,"../../Utils/UIHelp":29,"../../Manager/UIManager":56,"../../SDK/T2M":52,"./../../Manager/SoundManager":9,"../../Utils/Tools":34,"../../../../game/scripts/Data/ConstValue":3,"../../Data/FrameMsgType":45},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{"../../../game/scripts/UI/panel/GamePanel":37,"../Data/FrameMsgType":45,"../../../game/scripts/UI/panel/TeacherPanel":58,"../Manager/UIManager":56,"../UI/Panel/AffirmTips":21,"../UI/Panel/ErrorPanel":19,"../Manager/ListenerManager":50,"../UI/Panel/TipUI":23,"../UI/Panel/OverTips":26,"../UI/Panel/UploadAndReturnPanel":30,"../UI/Panel/StarCount":25,"../UI/Panel/SubmissionPanel":17},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{"./../../Manager/ListenerManager":50,"../BaseFrameUI":13,"../../SDK/T2M":52,"../../../../game/scripts/Manager/EditorManager":35,"../../Data/FrameMsgType":45,"../../Manager/ReportManager":55,"../../Manager/SoundManager":9,"../../Utils/UIHelp":29},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":52},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{"./BoundingBoxHelp":24},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"../../../../frame/scripts/Utils/HitTest":27,"../../Data/EventType":40,"./DragHead":49,"../../../../frame/scripts/Manager/ListenerManager":50},"path":"preview-scripts/assets/game/scripts/UI/Item/EditHeadArea.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":50,"../../../../frame/scripts/UI/Panel/BaseGamePanel":15,"../../Data/EventType":40,"../../../../frame/scripts/Manager/SyncDataManager":46},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{"../Manager/UIManager":56,"../Utils/UIHelp":29,"../../../game/scripts/Data/ConstValue":3,"../SDK/GameMsg":7},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":50,"../../Data/EventType":40,"./DragMaozi":48,"../../../../frame/scripts/Utils/HitTest":27},"path":"preview-scripts/assets/game/scripts/UI/Item/EditMaoZiArea.js"},{"deps":{"../../../../frame/scripts/Utils/UIHelp":29,"../../../../frame/scripts/Manager/SoundManager":9,"../../../../frame/scripts/Manager/ListenerManager":50,"../../../../frame/scripts/Manager/SyncDataManager":46,"../../Manager/EditorManager":35,"../../../../frame/scripts/Utils/Tools":34,"./GameMaoziDrag":43,"../../Data/EventType":40,"./Role":54,"./SoundConfig":44},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":50,"../../Data/EventType":40,"./GameMaozi":47},"path":"preview-scripts/assets/game/scripts/UI/Item/GameMaoziDrag.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{"../../../frame/scripts/Data/FrameSyncData":2,"../../../frame/scripts/Manager/ReportManager":55,"../../../game/scripts/Data/CustomSyncData":39},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../../../../frame/scripts/Manager/SoundManager":9,"../../../../frame/scripts/Utils/HitTest":27,"../../../../frame/scripts/Manager/ListenerManager":50,"../../Data/EventType":40,"./SoundConfig":44,"./GameMaoziDrag":43,"./Role":54},"path":"preview-scripts/assets/game/scripts/UI/Item/GameMaozi.js"},{"deps":{"../../Data/EventType":40,"../../../../frame/scripts/Manager/ListenerManager":50,"./EditMaoZiArea":41},"path":"preview-scripts/assets/game/scripts/UI/Item/DragMaozi.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":50,"./EditHeadArea":36,"../../Data/EventType":40},"path":"preview-scripts/assets/game/scripts/UI/Item/DragHead.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{"../Utils/UIHelp":29,"../Manager/SyncDataManager":46,"./GameMsg":7,"../Http/NetWork":38,"../Data/FrameMsgType":45,"../Manager/ListenerManager":50},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":52},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"},{"deps":{"./GameMaozi":47,"../../Manager/EditorManager":35},"path":"preview-scripts/assets/game/scripts/UI/Item/Role.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":35,"../SDK/GameMsg":7,"../../../game/scripts/Data/ConstValue":3},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{"../UI/BaseUI":4},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{"../Manager/ReportManager":55,"../Manager/ListenerManager":50,"../Data/FrameMsgType":45,"../../../game/scripts/Manager/EditorManager":35,"../Http/NetWork":38,"../Manager/SyncDataManager":46,"../Manager/SoundManager":9,"../SDK/T2M":52,"../Utils/UIHelp":29,"../SDK/GameMsg":7,"../Manager/UIManager":56},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../../../../frame/scripts/Data/FrameMsgType":45,"../../../../frame/scripts/Manager/ReportManager":55,"../../Data/EventType":40,"../../../../frame/scripts/Manager/UIManager":56,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":22,"../../../../frame/scripts/Manager/ListenerManager":50,"../Item/DragHead":49,"../../Manager/EditorManager":35,"../../../../frame/scripts/Utils/UIHelp":29,"../Item/DragMaozi":48,"./GamePanel":37},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"}];
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
    