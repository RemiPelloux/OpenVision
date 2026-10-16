import { require_constants15 } from "./constants.js";
import { require_packer } from "./packer.js";
var __wakaru_require_packer_sync_cache;
export function require_packer_sync() {
if (__wakaru_require_packer_sync_cache) return __wakaru_require_packer_sync_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_packer_sync_cache = module2;
"use strict";
var hasSyncZlib = true;
var zlib2 = require("zlib");
if (!zlib2.deflateSync) {
    hasSyncZlib = false;
}
var constants14 = require_constants15();
var Packer = require_packer();
module2.exports = function(metaData, opt) {
    if (!hasSyncZlib) {
        throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    }
    let options2 = opt || {};
    let packer = new Packer(options2);
    let chunks = [];
    chunks.push(Buffer.from(constants14.PNG_SIGNATURE));
    chunks.push(packer.packIHDR(metaData.width, metaData.height));
    if (metaData.gamma) {
        chunks.push(packer.packGAMA(metaData.gamma));
    }
    let filteredData = packer.filterData(metaData.data, metaData.width, metaData.height);
    let compressedData = zlib2.deflateSync(filteredData, packer.getDeflateOptions());
    filteredData = null;
    if (!compressedData || !compressedData.length) {
        throw new Error("bad png - invalid compressed data response");
    }
    chunks.push(packer.packIDAT(compressedData));
    chunks.push(packer.packIEND());
    return Buffer.concat(chunks);
};

return module2.exports;
}
