var __wakaru_require_crc32_cache;
export function require_crc32() {
if (__wakaru_require_crc32_cache) return __wakaru_require_crc32_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_crc32_cache = module2;
"use strict";
function makeTable() {
    var c, table = [];
    for(var n = 0; n < 256; n++){
        c = n;
        for(var k2 = 0; k2 < 8; k2++){
            c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
        }
        table[n] = c;
    }
    return table;
}
var crcTable = makeTable();
function crc32(crc, buf, len, pos) {
    var t = crcTable, end = pos + len;
    crc ^= -1;
    for(var i = pos; i < end; i++){
        crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
    }
    return crc ^ -1;
}
module2.exports = crc32;

return module2.exports;
}
