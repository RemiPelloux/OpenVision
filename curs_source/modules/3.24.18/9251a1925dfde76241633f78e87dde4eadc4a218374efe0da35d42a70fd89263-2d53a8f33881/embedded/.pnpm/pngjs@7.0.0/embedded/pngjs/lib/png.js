import { require_packer_async } from "./packer-async.js";
import { require_parser_async } from "./parser-async.js";
import { require_png_sync } from "./png-sync.js";
var __wakaru_require_png_cache;
export function require_png() {
if (__wakaru_require_png_cache) return __wakaru_require_png_cache;
var exports2 = {};
__wakaru_require_png_cache = exports2;
"use strict";
var util2 = require("util");
var Stream2 = require("stream");
var Parser5 = require_parser_async();
var Packer = require_packer_async();
var PNGSync = require_png_sync();
var PNG2 = exports2.PNG = function(options2) {
    Stream2.call(this);
    options2 = options2 || {};
    this.width = options2.width | 0;
    this.height = options2.height | 0;
    this.data = this.width > 0 && this.height > 0 ? Buffer.alloc(4 * this.width * this.height) : null;
    if (options2.fill && this.data) {
        this.data.fill(0);
    }
    this.gamma = 0;
    this.readable = this.writable = true;
    this._parser = new Parser5(options2);
    this._parser.on("error", this.emit.bind(this, "error"));
    this._parser.on("close", this._handleClose.bind(this));
    this._parser.on("metadata", this._metadata.bind(this));
    this._parser.on("gamma", this._gamma.bind(this));
    this._parser.on("parsed", function(data) {
        this.data = data;
        this.emit("parsed", data);
    }.bind(this));
    this._packer = new Packer(options2);
    this._packer.on("data", this.emit.bind(this, "data"));
    this._packer.on("end", this.emit.bind(this, "end"));
    this._parser.on("close", this._handleClose.bind(this));
    this._packer.on("error", this.emit.bind(this, "error"));
};
util2.inherits(PNG2, Stream2);
PNG2.sync = PNGSync;
PNG2.prototype.pack = function() {
    if (!this.data || !this.data.length) {
        this.emit("error", "No data provided");
        return this;
    }
    process.nextTick(function() {
        this._packer.pack(this.data, this.width, this.height, this.gamma);
    }.bind(this));
    return this;
};
PNG2.prototype.parse = function(data, callback) {
    if (callback) {
        let onParsed, onError;
        onParsed = function(parsedData) {
            this.removeListener("error", onError);
            this.data = parsedData;
            callback(null, this);
        }.bind(this);
        onError = function(err) {
            this.removeListener("parsed", onParsed);
            callback(err, null);
        }.bind(this);
        this.once("parsed", onParsed);
        this.once("error", onError);
    }
    this.end(data);
    return this;
};
PNG2.prototype.write = function(data) {
    this._parser.write(data);
    return true;
};
PNG2.prototype.end = function(data) {
    this._parser.end(data);
};
PNG2.prototype._metadata = function(metadata) {
    this.width = metadata.width;
    this.height = metadata.height;
    this.emit("metadata", metadata);
};
PNG2.prototype._gamma = function(gamma) {
    this.gamma = gamma;
};
PNG2.prototype._handleClose = function() {
    if (!this._parser.writable && !this._packer.readable) {
        this.emit("close");
    }
};
PNG2.bitblt = function(src, dst, srcX, srcY, width, height, deltaX, deltaY) {
    srcX |= 0;
    srcY |= 0;
    width |= 0;
    height |= 0;
    deltaX |= 0;
    deltaY |= 0;
    if (srcX > src.width || srcY > src.height || srcX + width > src.width || srcY + height > src.height) {
        throw new Error("bitblt reading outside image");
    }
    if (deltaX > dst.width || deltaY > dst.height || deltaX + width > dst.width || deltaY + height > dst.height) {
        throw new Error("bitblt writing outside image");
    }
    for(let y = 0; y < height; y++){
        src.data.copy(dst.data, (deltaY + y) * dst.width + deltaX << 2, (srcY + y) * src.width + srcX << 2, (srcY + y) * src.width + srcX + width << 2);
    }
};
PNG2.prototype.bitblt = function(dst, srcX, srcY, width, height, deltaX, deltaY) {
    PNG2.bitblt(this, dst, srcX, srcY, width, height, deltaX, deltaY);
    return this;
};
PNG2.adjustGamma = function(src) {
    if (src.gamma) {
        for(let y = 0; y < src.height; y++){
            for(let x = 0; x < src.width; x++){
                let idx = src.width * y + x << 2;
                for(let i = 0; i < 3; i++){
                    let sample = src.data[idx + i] / 255;
                    sample = Math.pow(sample, 1 / 2.2 / src.gamma);
                    src.data[idx + i] = Math.round(sample * 255);
                }
            }
        }
        src.gamma = 0;
    }
};
PNG2.prototype.adjustGamma = function() {
    PNG2.adjustGamma(this);
};

return exports2;
}
