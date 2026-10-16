var __wakaru_require_gzheader_cache;
export function require_gzheader() {
if (__wakaru_require_gzheader_cache) return __wakaru_require_gzheader_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_gzheader_cache = module2;
"use strict";
function GZheader() {
    this.text = 0;
    this.time = 0;
    this.xflags = 0;
    this.os = 0;
    this.extra = null;
    this.extra_len = 0;
    this.name = "";
    this.comment = "";
    this.hcrc = 0;
    this.done = false;
}
module2.exports = GZheader;

return module2.exports;
}
