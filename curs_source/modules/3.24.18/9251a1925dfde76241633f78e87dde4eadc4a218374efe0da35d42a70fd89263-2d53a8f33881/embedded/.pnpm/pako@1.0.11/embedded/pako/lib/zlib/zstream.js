var __wakaru_require_zstream_cache;
export function require_zstream() {
if (__wakaru_require_zstream_cache) return __wakaru_require_zstream_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_zstream_cache = module2;
"use strict";
function ZStream() {
    this.input = null;
    this.next_in = 0;
    this.avail_in = 0;
    this.total_in = 0;
    this.output = null;
    this.next_out = 0;
    this.avail_out = 0;
    this.total_out = 0;
    this.msg = "";
    this.state = null;
    this.data_type = 2;
    this.adler = 0;
}
module2.exports = ZStream;

return module2.exports;
}
