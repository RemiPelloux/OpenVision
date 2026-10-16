import { require_decoder } from "./lib/decoder.js";
import { require_encoder } from "./lib/encoder.js";
var __wakaru_require_jpeg_js_cache;
export function require_jpeg_js() {
if (__wakaru_require_jpeg_js_cache) return __wakaru_require_jpeg_js_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_jpeg_js_cache = module2;
var encode3 = require_encoder();
var decode4 = require_decoder();
module2.exports = {
    encode: encode3,
    decode: decode4
};

return module2.exports;
}
