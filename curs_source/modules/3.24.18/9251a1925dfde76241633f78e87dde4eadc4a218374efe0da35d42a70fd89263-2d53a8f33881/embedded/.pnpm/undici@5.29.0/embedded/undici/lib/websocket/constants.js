var __wakaru_require_constants6_cache;
export function require_constants6() {
if (__wakaru_require_constants6_cache) return __wakaru_require_constants6_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_constants6_cache = module2;
"use strict";
var uid = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
var staticPropertyDescriptors = {
    enumerable: true,
    writable: false,
    configurable: false
};
var states = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
};
var opcodes = {
    CONTINUATION: 0,
    TEXT: 1,
    BINARY: 2,
    CLOSE: 8,
    PING: 9,
    PONG: 10
};
var maxUnsigned16Bit = 2 ** 16 - 1;
var parserStates = {
    INFO: 0,
    PAYLOADLENGTH_16: 2,
    PAYLOADLENGTH_64: 3,
    READ_DATA: 4
};
var emptyBuffer = Buffer.allocUnsafe(0);
module2.exports = {
    uid,
    staticPropertyDescriptors,
    states,
    opcodes,
    maxUnsigned16Bit,
    parserStates,
    emptyBuffer
};

return module2.exports;
}
