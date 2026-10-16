var __wakaru_require_symbols2_cache;
export function require_symbols2() {
if (__wakaru_require_symbols2_cache) return __wakaru_require_symbols2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_symbols2_cache = module2;
"use strict";
module2.exports = {
    kUrl: Symbol("url"),
    kHeaders: Symbol("headers"),
    kSignal: Symbol("signal"),
    kState: Symbol("state"),
    kGuard: Symbol("guard"),
    kRealm: Symbol("realm")
};

return module2.exports;
}
