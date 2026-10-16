import { require_defaults } from "./defaults.js";
import { require_engine } from "./engine.js";
var __wakaru_require_parse4_cache;
export function require_parse4() {
if (__wakaru_require_parse4_cache) return __wakaru_require_parse4_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_parse4_cache = module2;
"use strict";
var getEngine = require_engine();
var defaults2 = require_defaults();
module2.exports = function(language, str3, options2) {
    const opts = defaults2(options2);
    const engine = getEngine(language, opts);
    if (typeof engine.parse !== "function") {
        throw new TypeError('expected "' + language + '.parse" to be a function');
    }
    return engine.parse(str3, opts);
};

return module2.exports;
}
