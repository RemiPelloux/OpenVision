var __wakaru_require_merge_exports_cache;
export function require_merge_exports() {
if (__wakaru_require_merge_exports_cache) return __wakaru_require_merge_exports_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_merge_exports_cache = module2;
"use strict";
var hasOwn = typeof Object.hasOwn === "undefined" ? Function.call.bind(Object.prototype.hasOwnProperty) : Object.hasOwn;
function mergeModules(target, module3) {
    for(var key in module3){
        if (hasOwn(module3, key)) {
            target[key] = module3[key];
        }
    }
}
module2.exports = mergeModules;

return module2.exports;
}
