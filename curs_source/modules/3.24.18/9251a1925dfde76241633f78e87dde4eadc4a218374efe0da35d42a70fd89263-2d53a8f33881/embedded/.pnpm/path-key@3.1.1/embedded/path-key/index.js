var __wakaru_require_path_key_cache;
export function require_path_key() {
if (__wakaru_require_path_key_cache) return __wakaru_require_path_key_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_path_key_cache = module2;
"use strict";
var pathKey = (options2 = {})=>{
    const environment = options2.env || process.env;
    const platform = options2.platform || process.platform;
    if (platform !== "win32") {
        return "PATH";
    }
    return Object.keys(environment).reverse().find((key)=>key.toUpperCase() === "PATH") || "Path";
};
module2.exports = pathKey;
module2.exports.default = pathKey;

return module2.exports;
}
