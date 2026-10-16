var __wakaru_require_utils_cache;
export function require_utils() {
if (__wakaru_require_utils_cache) return __wakaru_require_utils_cache;
var exports2 = {};
__wakaru_require_utils_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.enumToMap = void 0;
function enumToMap(obj) {
    const res = {};
    Object.keys(obj).forEach((key)=>{
        const value = obj[key];
        if (typeof value === "number") {
            res[key] = value;
        }
    });
    return res;
}
exports2.enumToMap = enumToMap;

return exports2;
}
