import { getGlobal } from "../api/diag.js";
import { init_global_utils } from "../internal/global-utils.js";
function logProxy(funcName, namespace, args) {
    var logger146 = getGlobal("diag");
    if (!logger146) {
        return;
    }
    args.unshift(namespace);
    return logger146[funcName].apply(logger146, __spreadArray([], __read(args), false));
}
var __read, __spreadArray, DiagComponentLogger;
export { DiagComponentLogger, __read, __spreadArray, logProxy };
var __wakaru_init_ComponentLogger_initialized = false;
export function init_ComponentLogger() {
if (__wakaru_init_ComponentLogger_initialized) return;
__wakaru_init_ComponentLogger_initialized = true;
init_global_utils();
__read = function(o, n) {
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
__spreadArray = function(to3, from2, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from2.length, ar2; i < l; i++){
        if (ar2 || !(i in from2)) {
            if (!ar2) ar2 = Array.prototype.slice.call(from2, 0, i);
            ar2[i] = from2[i];
        }
    }
    return to3.concat(ar2 || Array.prototype.slice.call(from2));
};
DiagComponentLogger = (function() {
    function DiagComponentLogger2(props) {
        this._namespace = props.namespace || "DiagComponentLogger";
    }
    DiagComponentLogger2.prototype.debug = function() {
        var args = [];
        for(var _i2 = 0; _i2 < arguments.length; _i2++){
            args[_i2] = arguments[_i2];
        }
        return logProxy("debug", this._namespace, args);
    };
    DiagComponentLogger2.prototype.error = function() {
        var args = [];
        for(var _i2 = 0; _i2 < arguments.length; _i2++){
            args[_i2] = arguments[_i2];
        }
        return logProxy("error", this._namespace, args);
    };
    DiagComponentLogger2.prototype.info = function() {
        var args = [];
        for(var _i2 = 0; _i2 < arguments.length; _i2++){
            args[_i2] = arguments[_i2];
        }
        return logProxy("info", this._namespace, args);
    };
    DiagComponentLogger2.prototype.warn = function() {
        var args = [];
        for(var _i2 = 0; _i2 < arguments.length; _i2++){
            args[_i2] = arguments[_i2];
        }
        return logProxy("warn", this._namespace, args);
    };
    DiagComponentLogger2.prototype.verbose = function() {
        var args = [];
        for(var _i2 = 0; _i2 < arguments.length; _i2++){
            args[_i2] = arguments[_i2];
        }
        return logProxy("verbose", this._namespace, args);
    };
    return DiagComponentLogger2;
})();

}
