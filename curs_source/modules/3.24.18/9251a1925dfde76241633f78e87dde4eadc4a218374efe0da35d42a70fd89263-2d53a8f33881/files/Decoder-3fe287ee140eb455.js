var __wakaru_require_Decoder_cache;
export function require_Decoder() {
if (__wakaru_require_Decoder_cache) return __wakaru_require_Decoder_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_Decoder_cache = module2;
"use strict";
var RE_PLUS = /\+/g;
var HEX = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
function Decoder() {
    this.buffer = void 0;
}
Decoder.prototype.write = function(str3) {
    str3 = str3.replace(RE_PLUS, " ");
    let res = "";
    let i = 0;
    let p2 = 0;
    const len = str3.length;
    for(; i < len; ++i){
        if (this.buffer !== void 0) {
            if (!HEX[str3.charCodeAt(i)]) {
                res += "%" + this.buffer;
                this.buffer = void 0;
                --i;
            } else {
                this.buffer += str3[i];
                ++p2;
                if (this.buffer.length === 2) {
                    res += String.fromCharCode(parseInt(this.buffer, 16));
                    this.buffer = void 0;
                }
            }
        } else if (str3[i] === "%") {
            if (i > p2) {
                res += str3.substring(p2, i);
                p2 = i;
            }
            this.buffer = "";
            ++p2;
        }
    }
    if (p2 < len && this.buffer === void 0) {
        res += str3.substring(p2);
    }
    return res;
};
Decoder.prototype.reset = function() {
    this.buffer = void 0;
};
module2.exports = Decoder;

return module2.exports;
}
