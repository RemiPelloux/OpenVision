import { require_defaults } from "./defaults.js";
var __wakaru_require_excerpt_cache;
export function require_excerpt() {
if (__wakaru_require_excerpt_cache) return __wakaru_require_excerpt_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_excerpt_cache = module2;
"use strict";
var defaults2 = require_defaults();
module2.exports = function(file, options2) {
    const opts = defaults2(options2);
    if (file.data == null) {
        file.data = {};
    }
    if (typeof opts.excerpt === "function") {
        return opts.excerpt(file, opts);
    }
    const sep14 = file.data.excerpt_separator || opts.excerpt_separator;
    if (sep14 == null && (opts.excerpt === false || opts.excerpt == null)) {
        return file;
    }
    const delimiter3 = typeof opts.excerpt === "string" ? opts.excerpt : sep14 || opts.delimiters[0];
    const idx = file.content.indexOf(delimiter3);
    if (idx !== -1) {
        file.excerpt = file.content.slice(0, idx);
    }
    return file;
};

return module2.exports;
}
