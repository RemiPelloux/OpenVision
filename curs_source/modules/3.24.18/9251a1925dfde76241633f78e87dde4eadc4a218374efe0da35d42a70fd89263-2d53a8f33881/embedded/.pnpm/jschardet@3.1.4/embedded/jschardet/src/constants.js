var __wakaru_require_constants_cache;
export function require_constants() {
if (__wakaru_require_constants_cache) return __wakaru_require_constants_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_constants_cache = module2;
module2.exports = {
    detecting: 0,
    foundIt: 1,
    notMe: 2,
    start: 0,
    error: 1,
    itsMe: 2,
    SHORTCUT_THRESHOLD: 0.95
};

return module2.exports;
}
