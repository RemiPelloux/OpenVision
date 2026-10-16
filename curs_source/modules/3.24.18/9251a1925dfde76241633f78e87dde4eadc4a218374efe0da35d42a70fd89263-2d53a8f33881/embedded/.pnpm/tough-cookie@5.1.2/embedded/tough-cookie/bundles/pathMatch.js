var __wakaru_require_pathMatch_cache;
export function require_pathMatch() {
if (__wakaru_require_pathMatch_cache) return __wakaru_require_pathMatch_cache;
var exports2 = {};
__wakaru_require_pathMatch_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.pathMatch = pathMatch;
function pathMatch(reqPath, cookiePath) {
    if (cookiePath === reqPath) {
        return true;
    }
    const idx = reqPath.indexOf(cookiePath);
    if (idx === 0) {
        if (cookiePath[cookiePath.length - 1] === "/") {
            return true;
        }
        if (reqPath.startsWith(cookiePath) && reqPath[cookiePath.length] === "/") {
            return true;
        }
    }
    return false;
}

return exports2;
}
