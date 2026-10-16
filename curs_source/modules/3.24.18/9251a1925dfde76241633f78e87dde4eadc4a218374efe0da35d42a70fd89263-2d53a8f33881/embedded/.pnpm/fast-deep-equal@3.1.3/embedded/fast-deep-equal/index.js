var __wakaru_require_fast_deep_equal_cache;
export function require_fast_deep_equal() {
if (__wakaru_require_fast_deep_equal_cache) return __wakaru_require_fast_deep_equal_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_fast_deep_equal_cache = module2;
"use strict";
module2.exports = function equal(a, b2) {
    if (a === b2) return true;
    if (a && b2 && typeof a == "object" && typeof b2 == "object") {
        if (a.constructor !== b2.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b2.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b2[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b2.source && a.flags === b2.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b2.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b2.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b2).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b2, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b2[key])) return false;
        }
        return true;
    }
    return a !== a && b2 !== b2;
};

return module2.exports;
}
