import { require_engines } from "./engines.js";
import { require_utils5 } from "./utils.js";
var __wakaru_require_defaults_cache;
export function require_defaults() {
if (__wakaru_require_defaults_cache) return __wakaru_require_defaults_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_defaults_cache = module2;
"use strict";
var engines2 = require_engines();
var utils2 = require_utils5();
module2.exports = function(options2) {
    const opts = Object.assign({}, options2);
    opts.delimiters = utils2.arrayify(opts.delims || opts.delimiters || "---");
    if (opts.delimiters.length === 1) {
        opts.delimiters.push(opts.delimiters[0]);
    }
    opts.language = (opts.language || opts.lang || "yaml").toLowerCase();
    opts.engines = Object.assign({}, engines2, opts.parsers, opts.engines);
    return opts;
};

return module2.exports;
}
