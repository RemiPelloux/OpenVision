var __wakaru_require_strip_bom_string_cache;
export function require_strip_bom_string() {
if (__wakaru_require_strip_bom_string_cache) return __wakaru_require_strip_bom_string_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_strip_bom_string_cache = module2;
"use strict";
module2.exports = function(str3) {
    if (typeof str3 === "string" && str3.charAt(0) === "\uFEFF") {
        return str3.slice(1);
    }
    return str3;
};

return module2.exports;
}
