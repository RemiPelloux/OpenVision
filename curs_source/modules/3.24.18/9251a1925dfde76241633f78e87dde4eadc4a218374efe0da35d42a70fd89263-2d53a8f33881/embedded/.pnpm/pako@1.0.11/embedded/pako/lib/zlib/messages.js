var __wakaru_require_messages_cache;
export function require_messages() {
if (__wakaru_require_messages_cache) return __wakaru_require_messages_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_messages_cache = module2;
"use strict";
module2.exports = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
};

return module2.exports;
}
