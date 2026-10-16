var __wakaru_require_is_extendable_cache;
export function require_is_extendable() {
if (__wakaru_require_is_extendable_cache) return __wakaru_require_is_extendable_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_is_extendable_cache = module2;
"use strict";
module2.exports = function isExtendable(val) {
    return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
};

return module2.exports;
}
