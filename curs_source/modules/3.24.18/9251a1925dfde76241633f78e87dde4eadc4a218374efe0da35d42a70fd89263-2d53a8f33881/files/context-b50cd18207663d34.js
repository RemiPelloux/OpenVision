import { DiagAPI, getGlobal, init_diag, registerGlobal, unregisterGlobal } from "./diag.js";
import { NoopContextManager, init_NoopContextManager } from "../context/NoopContextManager.js";
import { init_global_utils } from "../internal/global-utils.js";
var __read4, __spreadArray4, API_NAME2, NOOP_CONTEXT_MANAGER, ContextAPI;
export { API_NAME2, ContextAPI, NOOP_CONTEXT_MANAGER, __read4, __spreadArray4 };
var __wakaru_init_context2_initialized = false;
export function init_context2() {
if (__wakaru_init_context2_initialized) return;
__wakaru_init_context2_initialized = true;
init_NoopContextManager();
init_global_utils();
init_diag();
__read4 = function(o, n) {
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
__spreadArray4 = function(to3, from2, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from2.length, ar2; i < l; i++){
        if (ar2 || !(i in from2)) {
            if (!ar2) ar2 = Array.prototype.slice.call(from2, 0, i);
            ar2[i] = from2[i];
        }
    }
    return to3.concat(ar2 || Array.prototype.slice.call(from2));
};
API_NAME2 = "context";
NOOP_CONTEXT_MANAGER = new NoopContextManager();
ContextAPI = (function() {
    function ContextAPI2() {}
    ContextAPI2.getInstance = function() {
        if (!this._instance) {
            this._instance = new ContextAPI2();
        }
        return this._instance;
    };
    ContextAPI2.prototype.setGlobalContextManager = function(contextManager) {
        return registerGlobal(API_NAME2, contextManager, DiagAPI.instance());
    };
    ContextAPI2.prototype.active = function() {
        return this._getContextManager().active();
    };
    ContextAPI2.prototype.with = function(context2, fn, thisArg) {
        var _a18;
        var args = [];
        for(var _i2 = 3; _i2 < arguments.length; _i2++){
            args[_i2 - 3] = arguments[_i2];
        }
        return (_a18 = this._getContextManager()).with.apply(_a18, __spreadArray4([
            context2,
            fn,
            thisArg
        ], __read4(args), false));
    };
    ContextAPI2.prototype.bind = function(context2, target) {
        return this._getContextManager().bind(context2, target);
    };
    ContextAPI2.prototype._getContextManager = function() {
        return getGlobal(API_NAME2) || NOOP_CONTEXT_MANAGER;
    };
    ContextAPI2.prototype.disable = function() {
        this._getContextManager().disable();
        unregisterGlobal(API_NAME2, DiagAPI.instance());
    };
    return ContextAPI2;
})();

}
