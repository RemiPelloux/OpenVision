import { require_picomatch } from "./lib/picomatch.js";
import { require_utils4 } from "./lib/utils.js";
var __wakaru_require_picomatch2_cache;
export function require_picomatch2() {
if (__wakaru_require_picomatch2_cache) return __wakaru_require_picomatch2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_picomatch2_cache = module2;
"use strict";
var pico = require_picomatch();
var utils2 = require_utils4();
function picomatch2(glob, options2, returnState = false) {
    if (options2 && (options2.windows === null || options2.windows === void 0)) {
        options2 = {
            ...options2,
            windows: utils2.isWindows()
        };
    }
    return pico(glob, options2, returnState);
}
Object.assign(picomatch2, pico);
module2.exports = picomatch2;

return module2.exports;
}
