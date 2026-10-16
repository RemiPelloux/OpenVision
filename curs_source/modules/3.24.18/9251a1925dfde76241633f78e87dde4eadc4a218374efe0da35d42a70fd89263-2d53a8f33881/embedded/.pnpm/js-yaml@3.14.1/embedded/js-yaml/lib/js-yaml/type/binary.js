import { require_type } from "../type.js";
var __wakaru_require_binary_cache;
export function require_binary() {
if (__wakaru_require_binary_cache) return __wakaru_require_binary_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_binary_cache = module2;
"use strict";
var NodeBuffer;
try {
    _require = require;
    NodeBuffer = _require("buffer").Buffer;
} catch (__) {}
var _require;
var Type3 = require_type();
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
    if (data === null) return false;
    var code, idx, bitlen = 0, max = data.length, map4 = BASE64_MAP;
    for(idx = 0; idx < max; idx++){
        code = map4.indexOf(data.charAt(idx));
        if (code > 64) continue;
        if (code < 0) return false;
        bitlen += 6;
    }
    return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
    var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map4 = BASE64_MAP, bits = 0, result = [];
    for(idx = 0; idx < max; idx++){
        if (idx % 4 === 0 && idx) {
            result.push(bits >> 16 & 255);
            result.push(bits >> 8 & 255);
            result.push(bits & 255);
        }
        bits = bits << 6 | map4.indexOf(input.charAt(idx));
    }
    tailbits = max % 4 * 6;
    if (tailbits === 0) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
    } else if (tailbits === 18) {
        result.push(bits >> 10 & 255);
        result.push(bits >> 2 & 255);
    } else if (tailbits === 12) {
        result.push(bits >> 4 & 255);
    }
    if (NodeBuffer) {
        return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
    }
    return result;
}
function representYamlBinary(object4) {
    var result = "", bits = 0, idx, tail, max = object4.length, map4 = BASE64_MAP;
    for(idx = 0; idx < max; idx++){
        if (idx % 3 === 0 && idx) {
            result += map4[bits >> 18 & 63];
            result += map4[bits >> 12 & 63];
            result += map4[bits >> 6 & 63];
            result += map4[bits & 63];
        }
        bits = (bits << 8) + object4[idx];
    }
    tail = max % 3;
    if (tail === 0) {
        result += map4[bits >> 18 & 63];
        result += map4[bits >> 12 & 63];
        result += map4[bits >> 6 & 63];
        result += map4[bits & 63];
    } else if (tail === 2) {
        result += map4[bits >> 10 & 63];
        result += map4[bits >> 4 & 63];
        result += map4[bits << 2 & 63];
        result += map4[64];
    } else if (tail === 1) {
        result += map4[bits >> 2 & 63];
        result += map4[bits << 4 & 63];
        result += map4[64];
        result += map4[64];
    }
    return result;
}
function isBinary(object4) {
    return NodeBuffer && NodeBuffer.isBuffer(object4);
}
module2.exports = new Type3("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: resolveYamlBinary,
    construct: constructYamlBinary,
    predicate: isBinary,
    represent: representYamlBinary
});

return module2.exports;
}
