var __wakaru_require_safer_cache;
export function require_safer() {
if (__wakaru_require_safer_cache) return __wakaru_require_safer_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_safer_cache = module2;
"use strict";
var buffer = require("buffer");
var Buffer4 = buffer.Buffer;
var safer = {};
var key;
for(key in buffer){
    if (!buffer.hasOwnProperty(key)) continue;
    if (key === "SlowBuffer" || key === "Buffer") continue;
    safer[key] = buffer[key];
}
var Safer = safer.Buffer = {};
for(key in Buffer4){
    if (!Buffer4.hasOwnProperty(key)) continue;
    if (key === "allocUnsafe" || key === "allocUnsafeSlow") continue;
    Safer[key] = Buffer4[key];
}
safer.Buffer.prototype = Buffer4.prototype;
if (!Safer.from || Safer.from === Uint8Array.from) {
    Safer.from = function(value, encodingOrOffset, length) {
        if (typeof value === "number") {
            throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value);
        }
        if (value && typeof value.length === "undefined") {
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
        }
        return Buffer4(value, encodingOrOffset, length);
    };
}
if (!Safer.alloc) {
    Safer.alloc = function(size, fill, encoding) {
        if (typeof size !== "number") {
            throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size);
        }
        if (size < 0 || size >= 2 * (1 << 30)) {
            throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
        var buf = Buffer4(size);
        if (!fill || fill.length === 0) {
            buf.fill(0);
        } else if (typeof encoding === "string") {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
        return buf;
    };
}
if (!safer.kStringMaxLength) {
    try {
        safer.kStringMaxLength = process.binding("buffer").kStringMaxLength;
    } catch (e) {}
}
if (!safer.constants) {
    safer.constants = {
        MAX_LENGTH: safer.kMaxLength
    };
    if (safer.kStringMaxLength) {
        safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength;
    }
}
module2.exports = safer;

return module2.exports;
}
