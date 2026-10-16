var __wakaru_require_PartStream_cache;
export function require_PartStream() {
if (__wakaru_require_PartStream_cache) return __wakaru_require_PartStream_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_PartStream_cache = module2;
"use strict";
var inherits = require("node:util").inherits;
var ReadableStream2 = require("node:stream").Readable;
function PartStream(opts) {
    ReadableStream2.call(this, opts);
}
inherits(PartStream, ReadableStream2);
PartStream.prototype._read = function(n) {};
module2.exports = PartStream;

return module2.exports;
}
