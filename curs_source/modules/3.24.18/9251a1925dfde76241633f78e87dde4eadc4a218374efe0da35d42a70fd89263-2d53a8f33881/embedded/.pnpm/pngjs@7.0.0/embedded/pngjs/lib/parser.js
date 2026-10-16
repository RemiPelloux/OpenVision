import { require_constants15 } from "./constants.js";
import { require_crc } from "./crc.js";
var __wakaru_require_parser2_cache;
export function require_parser2() {
if (__wakaru_require_parser2_cache) return __wakaru_require_parser2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_parser2_cache = module2;
"use strict";
var constants14 = require_constants15();
var CrcCalculator = require_crc();
var Parser5 = module2.exports = function(options2, dependencies) {
    this._options = options2;
    options2.checkCRC = options2.checkCRC !== false;
    this._hasIHDR = false;
    this._hasIEND = false;
    this._emittedHeadersFinished = false;
    this._palette = [];
    this._colorType = 0;
    this._chunks = {};
    this._chunks[constants14.TYPE_IHDR] = this._handleIHDR.bind(this);
    this._chunks[constants14.TYPE_IEND] = this._handleIEND.bind(this);
    this._chunks[constants14.TYPE_IDAT] = this._handleIDAT.bind(this);
    this._chunks[constants14.TYPE_PLTE] = this._handlePLTE.bind(this);
    this._chunks[constants14.TYPE_tRNS] = this._handleTRNS.bind(this);
    this._chunks[constants14.TYPE_gAMA] = this._handleGAMA.bind(this);
    this.read = dependencies.read;
    this.error = dependencies.error;
    this.metadata = dependencies.metadata;
    this.gamma = dependencies.gamma;
    this.transColor = dependencies.transColor;
    this.palette = dependencies.palette;
    this.parsed = dependencies.parsed;
    this.inflateData = dependencies.inflateData;
    this.finished = dependencies.finished;
    this.simpleTransparency = dependencies.simpleTransparency;
    this.headersFinished = dependencies.headersFinished || function() {};
};
Parser5.prototype.start = function() {
    this.read(constants14.PNG_SIGNATURE.length, this._parseSignature.bind(this));
};
Parser5.prototype._parseSignature = function(data) {
    let signature = constants14.PNG_SIGNATURE;
    for(let i = 0; i < signature.length; i++){
        if (data[i] !== signature[i]) {
            this.error(new Error("Invalid file signature"));
            return;
        }
    }
    this.read(8, this._parseChunkBegin.bind(this));
};
Parser5.prototype._parseChunkBegin = function(data) {
    let length = data.readUInt32BE(0);
    let type2 = data.readUInt32BE(4);
    let name17 = "";
    for(let i = 4; i < 8; i++){
        name17 += String.fromCharCode(data[i]);
    }
    let ancillary = Boolean(data[4] & 32);
    if (!this._hasIHDR && type2 !== constants14.TYPE_IHDR) {
        this.error(new Error("Expected IHDR on beggining"));
        return;
    }
    this._crc = new CrcCalculator();
    this._crc.write(Buffer.from(name17));
    if (this._chunks[type2]) {
        return this._chunks[type2](length);
    }
    if (!ancillary) {
        this.error(new Error("Unsupported critical chunk type " + name17));
        return;
    }
    this.read(length + 4, this._skipChunk.bind(this));
};
Parser5.prototype._skipChunk = function() {
    this.read(8, this._parseChunkBegin.bind(this));
};
Parser5.prototype._handleChunkEnd = function() {
    this.read(4, this._parseChunkEnd.bind(this));
};
Parser5.prototype._parseChunkEnd = function(data) {
    let fileCrc = data.readInt32BE(0);
    let calcCrc = this._crc.crc32();
    if (this._options.checkCRC && calcCrc !== fileCrc) {
        this.error(new Error("Crc error - " + fileCrc + " - " + calcCrc));
        return;
    }
    if (!this._hasIEND) {
        this.read(8, this._parseChunkBegin.bind(this));
    }
};
Parser5.prototype._handleIHDR = function(length) {
    this.read(length, this._parseIHDR.bind(this));
};
Parser5.prototype._parseIHDR = function(data) {
    this._crc.write(data);
    let width = data.readUInt32BE(0);
    let height = data.readUInt32BE(4);
    let depth = data[8];
    let colorType = data[9];
    let compr = data[10];
    let filter3 = data[11];
    let interlace = data[12];
    if (depth !== 8 && depth !== 4 && depth !== 2 && depth !== 1 && depth !== 16) {
        this.error(new Error("Unsupported bit depth " + depth));
        return;
    }
    if (!(colorType in constants14.COLORTYPE_TO_BPP_MAP)) {
        this.error(new Error("Unsupported color type"));
        return;
    }
    if (compr !== 0) {
        this.error(new Error("Unsupported compression method"));
        return;
    }
    if (filter3 !== 0) {
        this.error(new Error("Unsupported filter method"));
        return;
    }
    if (interlace !== 0 && interlace !== 1) {
        this.error(new Error("Unsupported interlace method"));
        return;
    }
    this._colorType = colorType;
    let bpp = constants14.COLORTYPE_TO_BPP_MAP[this._colorType];
    this._hasIHDR = true;
    this.metadata({
        width,
        height,
        depth,
        interlace: Boolean(interlace),
        palette: Boolean(colorType & constants14.COLORTYPE_PALETTE),
        color: Boolean(colorType & constants14.COLORTYPE_COLOR),
        alpha: Boolean(colorType & constants14.COLORTYPE_ALPHA),
        bpp,
        colorType
    });
    this._handleChunkEnd();
};
Parser5.prototype._handlePLTE = function(length) {
    this.read(length, this._parsePLTE.bind(this));
};
Parser5.prototype._parsePLTE = function(data) {
    this._crc.write(data);
    let entries = Math.floor(data.length / 3);
    for(let i = 0; i < entries; i++){
        this._palette.push([
            data[i * 3],
            data[i * 3 + 1],
            data[i * 3 + 2],
            255
        ]);
    }
    this.palette(this._palette);
    this._handleChunkEnd();
};
Parser5.prototype._handleTRNS = function(length) {
    this.simpleTransparency();
    this.read(length, this._parseTRNS.bind(this));
};
Parser5.prototype._parseTRNS = function(data) {
    this._crc.write(data);
    if (this._colorType === constants14.COLORTYPE_PALETTE_COLOR) {
        if (this._palette.length === 0) {
            this.error(new Error("Transparency chunk must be after palette"));
            return;
        }
        if (data.length > this._palette.length) {
            this.error(new Error("More transparent colors than palette size"));
            return;
        }
        for(let i = 0; i < data.length; i++){
            this._palette[i][3] = data[i];
        }
        this.palette(this._palette);
    }
    if (this._colorType === constants14.COLORTYPE_GRAYSCALE) {
        this.transColor([
            data.readUInt16BE(0)
        ]);
    }
    if (this._colorType === constants14.COLORTYPE_COLOR) {
        this.transColor([
            data.readUInt16BE(0),
            data.readUInt16BE(2),
            data.readUInt16BE(4)
        ]);
    }
    this._handleChunkEnd();
};
Parser5.prototype._handleGAMA = function(length) {
    this.read(length, this._parseGAMA.bind(this));
};
Parser5.prototype._parseGAMA = function(data) {
    this._crc.write(data);
    this.gamma(data.readUInt32BE(0) / constants14.GAMMA_DIVISION);
    this._handleChunkEnd();
};
Parser5.prototype._handleIDAT = function(length) {
    if (!this._emittedHeadersFinished) {
        this._emittedHeadersFinished = true;
        this.headersFinished();
    }
    this.read(-length, this._parseIDAT.bind(this, length));
};
Parser5.prototype._parseIDAT = function(length, data) {
    this._crc.write(data);
    if (this._colorType === constants14.COLORTYPE_PALETTE_COLOR && this._palette.length === 0) {
        throw new Error("Expected palette not found");
    }
    this.inflateData(data);
    let leftOverLength = length - data.length;
    if (leftOverLength > 0) {
        this._handleIDAT(leftOverLength);
    } else {
        this._handleChunkEnd();
    }
};
Parser5.prototype._handleIEND = function(length) {
    this.read(length, this._parseIEND.bind(this));
};
Parser5.prototype._parseIEND = function(data) {
    this._crc.write(data);
    this._hasIEND = true;
    this._handleChunkEnd();
    if (this.finished) {
        this.finished();
    }
};

return module2.exports;
}
