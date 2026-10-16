var __wakaru_require_crc_cache;
export function require_crc() {
if (__wakaru_require_crc_cache) return __wakaru_require_crc_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_crc_cache = module2;
"use strict";
var crcTable = [];
(function() {
    for(let i = 0; i < 256; i++){
        let currentCrc = i;
        for(let j2 = 0; j2 < 8; j2++){
            if (currentCrc & 1) {
                currentCrc = 3988292384 ^ currentCrc >>> 1;
            } else {
                currentCrc = currentCrc >>> 1;
            }
        }
        crcTable[i] = currentCrc;
    }
})();
var CrcCalculator = module2.exports = function() {
    this._crc = -1;
};
CrcCalculator.prototype.write = function(data) {
    for(let i = 0; i < data.length; i++){
        this._crc = crcTable[(this._crc ^ data[i]) & 255] ^ this._crc >>> 8;
    }
    return true;
};
CrcCalculator.prototype.crc32 = function() {
    return this._crc ^ -1;
};
CrcCalculator.crc32 = function(buf) {
    let crc = -1;
    for(let i = 0; i < buf.length; i++){
        crc = crcTable[(crc ^ buf[i]) & 255] ^ crc >>> 8;
    }
    return crc ^ -1;
};

return module2.exports;
}
