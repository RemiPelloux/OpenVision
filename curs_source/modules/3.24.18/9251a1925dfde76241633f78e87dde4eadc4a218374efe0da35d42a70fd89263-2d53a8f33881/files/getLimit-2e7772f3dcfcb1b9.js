var __wakaru_require_getLimit_cache;
export function require_getLimit() {
if (__wakaru_require_getLimit_cache) return __wakaru_require_getLimit_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_getLimit_cache = module2;
"use strict";
module2.exports = function getLimit(limits, name17, defaultLimit) {
    if (!limits || limits[name17] === void 0 || limits[name17] === null) {
        return defaultLimit;
    }
    if (typeof limits[name17] !== "number" || isNaN(limits[name17])) {
        throw new TypeError("Limit " + name17 + " is not a valid number");
    }
    return limits[name17];
};

return module2.exports;
}
