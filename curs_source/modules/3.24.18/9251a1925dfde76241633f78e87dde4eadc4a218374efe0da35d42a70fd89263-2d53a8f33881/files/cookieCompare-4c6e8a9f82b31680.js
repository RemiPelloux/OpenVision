var __wakaru_require_cookieCompare_cache;
export function require_cookieCompare() {
if (__wakaru_require_cookieCompare_cache) return __wakaru_require_cookieCompare_cache;
var exports2 = {};
__wakaru_require_cookieCompare_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.cookieCompare = cookieCompare;
var MAX_TIME = 2147483647e3;
function cookieCompare(a, b2) {
    let cmp;
    const aPathLen = a.path ? a.path.length : 0;
    const bPathLen = b2.path ? b2.path.length : 0;
    cmp = bPathLen - aPathLen;
    if (cmp !== 0) {
        return cmp;
    }
    const aTime = a.creation && a.creation instanceof Date ? a.creation.getTime() : MAX_TIME;
    const bTime = b2.creation && b2.creation instanceof Date ? b2.creation.getTime() : MAX_TIME;
    cmp = aTime - bTime;
    if (cmp !== 0) {
        return cmp;
    }
    cmp = (a.creationIndex || 0) - (b2.creationIndex || 0);
    return cmp;
}

return exports2;
}
