import { require_constants15 } from "./constants.js";
import { require_packer } from "./packer.js";
var __wakaru_require_packer_async_cache;
export function require_packer_async() {
if (__wakaru_require_packer_async_cache) return __wakaru_require_packer_async_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_packer_async_cache = module2;
"use strict";
var util2 = require("util");
var Stream2 = require("stream");
var constants14 = require_constants15();
var Packer = require_packer();
var PackerAsync = module2.exports = function(opt) {
    Stream2.call(this);
    let options2 = opt || {};
    this._packer = new Packer(options2);
    this._deflate = this._packer.createDeflate();
    this.readable = true;
};
util2.inherits(PackerAsync, Stream2);
PackerAsync.prototype.pack = function(data, width, height, gamma) {
    this.emit("data", Buffer.from(constants14.PNG_SIGNATURE));
    this.emit("data", this._packer.packIHDR(width, height));
    if (gamma) {
        this.emit("data", this._packer.packGAMA(gamma));
    }
    let filteredData = this._packer.filterData(data, width, height);
    this._deflate.on("error", this.emit.bind(this, "error"));
    this._deflate.on("data", function(compressedData) {
        this.emit("data", this._packer.packIDAT(compressedData));
    }.bind(this));
    this._deflate.on("end", function() {
        this.emit("data", this._packer.packIEND());
        this.emit("end");
    }.bind(this));
    this._deflate.end(filteredData);
};

return module2.exports;
}
