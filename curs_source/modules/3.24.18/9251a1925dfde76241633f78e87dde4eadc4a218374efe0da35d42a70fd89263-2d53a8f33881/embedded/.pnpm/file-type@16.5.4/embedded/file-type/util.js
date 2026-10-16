var __wakaru_require_util17_cache;
export function require_util17() {
if (__wakaru_require_util17_cache) return __wakaru_require_util17_cache;
var exports2 = {};
__wakaru_require_util17_cache = exports2;
"use strict";
exports2.stringToBytes = (string5)=>[
        ...string5
    ].map((character)=>character.charCodeAt(0));
exports2.tarHeaderChecksumMatches = (buffer, offset = 0)=>{
    const readSum = parseInt(buffer.toString("utf8", 148, 154).replace(/\0.*$/, "").trim(), 8);
    if (isNaN(readSum)) {
        return false;
    }
    let sum = 8 * 32;
    for(let i = offset; i < offset + 148; i++){
        sum += buffer[i];
    }
    for(let i = offset + 156; i < offset + 512; i++){
        sum += buffer[i];
    }
    return readSum === sum;
};
exports2.uint32SyncSafeToken = {
    get: (buffer, offset)=>{
        return buffer[offset + 3] & 127 | buffer[offset + 2] << 7 | buffer[offset + 1] << 14 | buffer[offset] << 21;
    },
    len: 4
};

return exports2;
}
