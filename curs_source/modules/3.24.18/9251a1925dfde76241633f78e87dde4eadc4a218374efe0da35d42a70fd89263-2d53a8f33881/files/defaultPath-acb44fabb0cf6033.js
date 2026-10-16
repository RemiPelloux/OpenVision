var __wakaru_require_defaultPath_cache;
export function require_defaultPath() {
if (__wakaru_require_defaultPath_cache) return __wakaru_require_defaultPath_cache;
var exports2 = {};
__wakaru_require_defaultPath_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.defaultPath = defaultPath;
function defaultPath(path64) {
    if (!path64 || path64.slice(0, 1) !== "/") {
        return "/";
    }
    if (path64 === "/") {
        return path64;
    }
    const rightSlash = path64.lastIndexOf("/");
    if (rightSlash === 0) {
        return "/";
    }
    return path64.slice(0, rightSlash);
}

return exports2;
}
