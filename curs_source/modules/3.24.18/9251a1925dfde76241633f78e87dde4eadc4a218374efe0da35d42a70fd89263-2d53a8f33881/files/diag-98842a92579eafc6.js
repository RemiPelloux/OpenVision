import { DiagComponentLogger, init_ComponentLogger } from "../diag/ComponentLogger.js";
import { init_logLevelLogger } from "../diag/internal/logLevelLogger.js";
import { DiagLogLevel, init_types } from "../diag/types.js";
import { GLOBAL_OPENTELEMETRY_API_KEY, _global, init_global_utils } from "../internal/global-utils.js";
import { isCompatible } from "../internal/semver.js";
import { VERSION } from "../version.js";
function registerGlobal(type2, instance, diag, allowOverride) {
    var _a18;
    if (allowOverride === void 0) {
        allowOverride = false;
    }
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a18 = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a18 !== void 0 ? _a18 : {
        version: VERSION
    };
    if (!allowOverride && api[type2]) {
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type2);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== VERSION) {
        var err = new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type2 + " does not match previously registered API v" + VERSION);
        diag.error(err.stack || err.message);
        return false;
    }
    api[type2] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type2 + " v" + VERSION + ".");
    return true;
}
function getGlobal(type2) {
    var _a18, _b2;
    var globalVersion = (_a18 = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a18 === void 0 ? void 0 : _a18.version;
    if (!globalVersion || !isCompatible(globalVersion)) {
        return;
    }
    return (_b2 = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b2 === void 0 ? void 0 : _b2[type2];
}
function unregisterGlobal(type2, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type2 + " v" + VERSION + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type2];
    }
}
function createLogLevelDiagLogger(maxLevel, logger146) {
    if (maxLevel < DiagLogLevel.NONE) {
        maxLevel = DiagLogLevel.NONE;
    } else if (maxLevel > DiagLogLevel.ALL) {
        maxLevel = DiagLogLevel.ALL;
    }
    logger146 = logger146 || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger146[funcName];
        if (typeof theFunc === "function" && maxLevel >= theLevel) {
            return theFunc.bind(logger146);
        }
        return function() {};
    }
    return {
        error: _filterFunc("error", DiagLogLevel.ERROR),
        warn: _filterFunc("warn", DiagLogLevel.WARN),
        info: _filterFunc("info", DiagLogLevel.INFO),
        debug: _filterFunc("debug", DiagLogLevel.DEBUG),
        verbose: _filterFunc("verbose", DiagLogLevel.VERBOSE)
    };
}
var __read2, __spreadArray2, API_NAME, DiagAPI;
export { API_NAME, DiagAPI, __read2, __spreadArray2, createLogLevelDiagLogger, getGlobal, registerGlobal, unregisterGlobal };
var __wakaru_init_diag_initialized = false;
export function init_diag() {
if (__wakaru_init_diag_initialized) return;
__wakaru_init_diag_initialized = true;
init_ComponentLogger();
init_logLevelLogger();
init_types();
init_global_utils();
__read2 = function(o, n) {
    var m2 = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m2) return o;
    var i = m2.call(o), r, ar2 = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar2.push(r.value);
    } catch (error3) {
        e = {
            error: error3
        };
    } finally{
        try {
            if (r && !r.done && (m2 = i["return"])) m2.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar2;
};
__spreadArray2 = function(to3, from2, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from2.length, ar2; i < l; i++){
        if (ar2 || !(i in from2)) {
            if (!ar2) ar2 = Array.prototype.slice.call(from2, 0, i);
            ar2[i] = from2[i];
        }
    }
    return to3.concat(ar2 || Array.prototype.slice.call(from2));
};
API_NAME = "diag";
DiagAPI = (function() {
    function DiagAPI2() {
        function _logProxy(funcName) {
            return function() {
                var args = [];
                for(var _i2 = 0; _i2 < arguments.length; _i2++){
                    args[_i2] = arguments[_i2];
                }
                var logger146 = getGlobal("diag");
                if (!logger146) return;
                return logger146[funcName].apply(logger146, __spreadArray2([], __read2(args), false));
            };
        }
        var self2 = this;
        var setLogger = function(logger146, optionsOrLogLevel) {
            var _a18, _b2, _c;
            if (optionsOrLogLevel === void 0) {
                optionsOrLogLevel = {
                    logLevel: DiagLogLevel.INFO
                };
            }
            if (logger146 === self2) {
                var err = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                self2.error((_a18 = err.stack) !== null && _a18 !== void 0 ? _a18 : err.message);
                return false;
            }
            if (typeof optionsOrLogLevel === "number") {
                optionsOrLogLevel = {
                    logLevel: optionsOrLogLevel
                };
            }
            var oldLogger = getGlobal("diag");
            var newLogger = createLogLevelDiagLogger((_b2 = optionsOrLogLevel.logLevel) !== null && _b2 !== void 0 ? _b2 : DiagLogLevel.INFO, logger146);
            if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
                var stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return registerGlobal("diag", newLogger, self2, true);
        };
        self2.setLogger = setLogger;
        self2.disable = function() {
            unregisterGlobal(API_NAME, self2);
        };
        self2.createComponentLogger = function(options2) {
            return new DiagComponentLogger(options2);
        };
        self2.verbose = _logProxy("verbose");
        self2.debug = _logProxy("debug");
        self2.info = _logProxy("info");
        self2.warn = _logProxy("warn");
        self2.error = _logProxy("error");
    }
    DiagAPI2.instance = function() {
        if (!this._instance) {
            this._instance = new DiagAPI2();
        }
        return this._instance;
    };
    return DiagAPI2;
})();

}
