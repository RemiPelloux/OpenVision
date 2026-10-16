var __wakaru_require_engine_cache;
export function require_engine() {
if (__wakaru_require_engine_cache) return __wakaru_require_engine_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_engine_cache = module2;
"use strict";
module2.exports = function(name17, options2) {
    let engine = options2.engines[name17] || options2.engines[aliase(name17)];
    if (typeof engine === "undefined") {
        throw new Error('gray-matter engine "' + name17 + '" is not registered');
    }
    if (typeof engine === "function") {
        engine = {
            parse: engine
        };
    }
    return engine;
};
function aliase(name17) {
    switch(name17.toLowerCase()){
        case "js":
        case "javascript":
            return "javascript";
        case "coffee":
        case "coffeescript":
        case "cson":
            return "coffee";
        case "yaml":
        case "yml":
            return "yaml";
        default:
            {
                return name17;
            }
    }
}

return module2.exports;
}
