var __wakaru_require_util15_cache;
export function require_util15() {
if (__wakaru_require_util15_cache) return __wakaru_require_util15_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util15_cache = module2;
"use strict";
function isValidLastEventId(value) {
    return value.indexOf("\0") === -1;
}
function isASCIINumber(value) {
    if (value.length === 0) return false;
    for(let i = 0; i < value.length; i++){
        if (value.charCodeAt(i) < 48 || value.charCodeAt(i) > 57) return false;
    }
    return true;
}
function delay3(ms2) {
    return new Promise((resolve36)=>{
        setTimeout(resolve36, ms2).unref();
    });
}
module2.exports = {
    isValidLastEventId,
    isASCIINumber,
    delay: delay3
};

return module2.exports;
}
