var __wakaru_require_constants8_cache;
export function require_constants8() {
if (__wakaru_require_constants8_cache) return __wakaru_require_constants8_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_constants8_cache = module2;
"use strict";
var BINARY_TYPES = [
    "nodebuffer",
    "arraybuffer",
    "fragments"
];
var hasBlob = typeof Blob !== "undefined";
if (hasBlob) BINARY_TYPES.push("blob");
module2.exports = {
    BINARY_TYPES,
    CLOSE_TIMEOUT: 3e4,
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    hasBlob,
    kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
    kListener: Symbol("kListener"),
    kStatusCode: Symbol("status-code"),
    kWebSocket: Symbol("websocket"),
    NOOP: ()=>{}
};

return module2.exports;
}
