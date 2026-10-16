var __wakaru_require_adler32_cache;
export function require_adler32() {
if (__wakaru_require_adler32_cache) return __wakaru_require_adler32_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_adler32_cache = module2;
"use strict";
function adler32(adler, buf, len, pos) {
    var s1 = adler & 65535 | 0, s22 = adler >>> 16 & 65535 | 0, n = 0;
    while(len !== 0){
        n = len > 2e3 ? 2e3 : len;
        len -= n;
        do {
            s1 = s1 + buf[pos++] | 0;
            s22 = s22 + s1 | 0;
        }while (--n)
        s1 %= 65521;
        s22 %= 65521;
    }
    return s1 | s22 << 16 | 0;
}
module2.exports = adler32;

return module2.exports;
}
