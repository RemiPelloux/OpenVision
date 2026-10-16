import { require_constants8 } from "./constants.js";
var __wakaru_require_buffer_util_cache;
export function require_buffer_util() {
if (__wakaru_require_buffer_util_cache) return __wakaru_require_buffer_util_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_buffer_util_cache = module2;
"use strict";
var { EMPTY_BUFFER } = require_constants8();
var FastBuffer = Buffer[Symbol.species];
function concat(list2, totalLength) {
    if (list2.length === 0) return EMPTY_BUFFER;
    if (list2.length === 1) return list2[0];
    const target = Buffer.allocUnsafe(totalLength);
    let offset = 0;
    for(let i = 0; i < list2.length; i++){
        const buf = list2[i];
        target.set(buf, offset);
        offset += buf.length;
    }
    if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
    }
    return target;
}
function _mask(source, mask, output, offset, length) {
    for(let i = 0; i < length; i++){
        output[offset + i] = source[i] ^ mask[i & 3];
    }
}
function _unmask(buffer, mask) {
    for(let i = 0; i < buffer.length; i++){
        buffer[i] ^= mask[i & 3];
    }
}
function toArrayBuffer(buf) {
    if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
    }
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
}
function toBuffer2(data) {
    toBuffer2.readOnly = true;
    if (Buffer.isBuffer(data)) return data;
    let buf;
    if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
    } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
    } else {
        buf = Buffer.from(data);
        toBuffer2.readOnly = false;
    }
    return buf;
}
module2.exports = {
    concat,
    mask: _mask,
    toArrayBuffer,
    toBuffer: toBuffer2,
    unmask: _unmask
};
if (!process.env.WS_NO_BUFFER_UTIL) {
    try {
        const bufferUtil = require("bufferutil");
        module2.exports.mask = function(source, mask, output, offset, length) {
            if (length < 48) _mask(source, mask, output, offset, length);
            else bufferUtil.mask(source, mask, output, offset, length);
        };
        module2.exports.unmask = function(buffer, mask) {
            if (buffer.length < 32) _unmask(buffer, mask);
            else bufferUtil.unmask(buffer, mask);
        };
    } catch (e) {}
}

return module2.exports;
}
