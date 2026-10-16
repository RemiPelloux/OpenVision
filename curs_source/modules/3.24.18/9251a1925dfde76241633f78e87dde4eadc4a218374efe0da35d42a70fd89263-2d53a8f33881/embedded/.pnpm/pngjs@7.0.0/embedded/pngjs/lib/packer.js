import { require_bitpacker } from "./bitpacker.js";
import { require_constants15 } from "./constants.js";
import { require_crc } from "./crc.js";
import { require_filter_pack } from "./filter-pack.js";
var __wakaru_require_packer_cache;
export function require_packer() {
if (__wakaru_require_packer_cache) return __wakaru_require_packer_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_packer_cache = module2;
"use strict";
var constants14 = require_constants15();
var CrcStream = require_crc();
var bitPacker = require_bitpacker();
var filter3 = require_filter_pack();
var zlib2 = require("zlib");
var Packer = module2.exports = function(options2) {
    this._options = options2;
    options2.deflateChunkSize = options2.deflateChunkSize || 32 * 1024;
    options2.deflateLevel = options2.deflateLevel != null ? options2.deflateLevel : 9;
    options2.deflateStrategy = options2.deflateStrategy != null ? options2.deflateStrategy : 3;
    options2.inputHasAlpha = options2.inputHasAlpha != null ? options2.inputHasAlpha : true;
    options2.deflateFactory = options2.deflateFactory || zlib2.createDeflate;
    options2.bitDepth = options2.bitDepth || 8;
    options2.colorType = typeof options2.colorType === "number" ? options2.colorType : constants14.COLORTYPE_COLOR_ALPHA;
    options2.inputColorType = typeof options2.inputColorType === "number" ? options2.inputColorType : constants14.COLORTYPE_COLOR_ALPHA;
    if ([
        constants14.COLORTYPE_GRAYSCALE,
        constants14.COLORTYPE_COLOR,
        constants14.COLORTYPE_COLOR_ALPHA,
        constants14.COLORTYPE_ALPHA
    ].indexOf(options2.colorType) === -1) {
        throw new Error("option color type:" + options2.colorType + " is not supported at present");
    }
    if ([
        constants14.COLORTYPE_GRAYSCALE,
        constants14.COLORTYPE_COLOR,
        constants14.COLORTYPE_COLOR_ALPHA,
        constants14.COLORTYPE_ALPHA
    ].indexOf(options2.inputColorType) === -1) {
        throw new Error("option input color type:" + options2.inputColorType + " is not supported at present");
    }
    if (options2.bitDepth !== 8 && options2.bitDepth !== 16) {
        throw new Error("option bit depth:" + options2.bitDepth + " is not supported at present");
    }
};
Packer.prototype.getDeflateOptions = function() {
    return {
        chunkSize: this._options.deflateChunkSize,
        level: this._options.deflateLevel,
        strategy: this._options.deflateStrategy
    };
};
Packer.prototype.createDeflate = function() {
    return this._options.deflateFactory(this.getDeflateOptions());
};
Packer.prototype.filterData = function(data, width, height) {
    let packedData = bitPacker(data, width, height, this._options);
    let bpp = constants14.COLORTYPE_TO_BPP_MAP[this._options.colorType];
    let filteredData = filter3(packedData, width, height, this._options, bpp);
    return filteredData;
};
Packer.prototype._packChunk = function(type2, data) {
    let len = data ? data.length : 0;
    let buf = Buffer.alloc(len + 12);
    buf.writeUInt32BE(len, 0);
    buf.writeUInt32BE(type2, 4);
    if (data) {
        data.copy(buf, 8);
    }
    buf.writeInt32BE(CrcStream.crc32(buf.slice(4, buf.length - 4)), buf.length - 4);
    return buf;
};
Packer.prototype.packGAMA = function(gamma) {
    let buf = Buffer.alloc(4);
    buf.writeUInt32BE(Math.floor(gamma * constants14.GAMMA_DIVISION), 0);
    return this._packChunk(constants14.TYPE_gAMA, buf);
};
Packer.prototype.packIHDR = function(width, height) {
    let buf = Buffer.alloc(13);
    buf.writeUInt32BE(width, 0);
    buf.writeUInt32BE(height, 4);
    buf[8] = this._options.bitDepth;
    buf[9] = this._options.colorType;
    buf[10] = 0;
    buf[11] = 0;
    buf[12] = 0;
    return this._packChunk(constants14.TYPE_IHDR, buf);
};
Packer.prototype.packIDAT = function(data) {
    return this._packChunk(constants14.TYPE_IDAT, data);
};
Packer.prototype.packIEND = function() {
    return this._packChunk(constants14.TYPE_IEND, null);
};

return module2.exports;
}
