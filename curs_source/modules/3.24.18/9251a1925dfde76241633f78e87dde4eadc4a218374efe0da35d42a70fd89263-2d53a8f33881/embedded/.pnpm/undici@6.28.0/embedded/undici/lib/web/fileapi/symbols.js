var __wakaru_require_symbols8_cache;
export function require_symbols8() {
if (__wakaru_require_symbols8_cache) return __wakaru_require_symbols8_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_symbols8_cache = module2;
"use strict";
module2.exports = {
    kState: Symbol("FileReader state"),
    kResult: Symbol("FileReader result"),
    kError: Symbol("FileReader error"),
    kLastProgressEventFired: Symbol("FileReader last progress event fired timestamp"),
    kEvents: Symbol("FileReader events"),
    kAborted: Symbol("FileReader aborted")
};

return module2.exports;
}
