var __wakaru_require_basename_cache;
export function require_basename() {
if (__wakaru_require_basename_cache) return __wakaru_require_basename_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_basename_cache = module2;
"use strict";
module2.exports = function basename18(path64) {
    if (typeof path64 !== "string") {
        return "";
    }
    for(var i = path64.length - 1; i >= 0; --i){
        switch(path64.charCodeAt(i)){
            case 47:
            case 92:
                path64 = path64.slice(i + 1);
                return path64 === ".." || path64 === "." ? "" : path64;
        }
    }
    return path64 === ".." || path64 === "." ? "" : path64;
};

return module2.exports;
}
