var __wakaru_require_permutePath_cache;
export function require_permutePath() {
if (__wakaru_require_permutePath_cache) return __wakaru_require_permutePath_cache;
var exports2 = {};
__wakaru_require_permutePath_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.permutePath = permutePath;
function permutePath(path64) {
    if (path64 === "/") {
        return [
            "/"
        ];
    }
    const permutations = [
        path64
    ];
    while(path64.length > 1){
        const lindex = path64.lastIndexOf("/");
        if (lindex === 0) {
            break;
        }
        path64 = path64.slice(0, lindex);
        permutations.push(path64);
    }
    permutations.push("/");
    return permutations;
}

return exports2;
}
