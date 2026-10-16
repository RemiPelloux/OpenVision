import { ROOT_CONTEXT, init_context } from "./context.js";
var __read3, __spreadArray3, NoopContextManager;
export { NoopContextManager, __read3, __spreadArray3 };
var __wakaru_init_NoopContextManager_initialized = false;
export function init_NoopContextManager() {
if (__wakaru_init_NoopContextManager_initialized) return;
__wakaru_init_NoopContextManager_initialized = true;
init_context();
__read3 = function(o, n) {
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
__spreadArray3 = function(to3, from2, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from2.length, ar2; i < l; i++){
        if (ar2 || !(i in from2)) {
            if (!ar2) ar2 = Array.prototype.slice.call(from2, 0, i);
            ar2[i] = from2[i];
        }
    }
    return to3.concat(ar2 || Array.prototype.slice.call(from2));
};
NoopContextManager = (function() {
    function NoopContextManager2() {}
    NoopContextManager2.prototype.active = function() {
        return ROOT_CONTEXT;
    };
    NoopContextManager2.prototype.with = function(_context, fn, thisArg) {
        var args = [];
        for(var _i2 = 3; _i2 < arguments.length; _i2++){
            args[_i2 - 3] = arguments[_i2];
        }
        return fn.call.apply(fn, __spreadArray3([
            thisArg
        ], __read3(args), false));
    };
    NoopContextManager2.prototype.bind = function(_context, target) {
        return target;
    };
    NoopContextManager2.prototype.enable = function() {
        return this;
    };
    NoopContextManager2.prototype.disable = function() {
        return this;
    };
    return NoopContextManager2;
})();

}
