var __wakaru_require_sbmh_cache;
export function require_sbmh() {
if (__wakaru_require_sbmh_cache) return __wakaru_require_sbmh_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_sbmh_cache = module2;
"use strict";
var EventEmitter = require("node:events").EventEmitter;
var inherits = require("node:util").inherits;
function SBMH(needle) {
    if (typeof needle === "string") {
        needle = Buffer.from(needle);
    }
    if (!Buffer.isBuffer(needle)) {
        throw new TypeError("The needle has to be a String or a Buffer.");
    }
    const needleLength = needle.length;
    if (needleLength === 0) {
        throw new Error("The needle cannot be an empty String/Buffer.");
    }
    if (needleLength > 256) {
        throw new Error("The needle cannot have a length bigger than 256.");
    }
    this.maxMatches = Infinity;
    this.matches = 0;
    this._occ = new Array(256).fill(needleLength);
    this._lookbehind_size = 0;
    this._needle = needle;
    this._bufpos = 0;
    this._lookbehind = Buffer.alloc(needleLength);
    for(var i = 0; i < needleLength - 1; ++i){
        this._occ[needle[i]] = needleLength - 1 - i;
    }
}
inherits(SBMH, EventEmitter);
SBMH.prototype.reset = function() {
    this._lookbehind_size = 0;
    this.matches = 0;
    this._bufpos = 0;
};
SBMH.prototype.push = function(chunk, pos) {
    if (!Buffer.isBuffer(chunk)) {
        chunk = Buffer.from(chunk, "binary");
    }
    const chlen = chunk.length;
    this._bufpos = pos || 0;
    let r;
    while(r !== chlen && this.matches < this.maxMatches){
        r = this._sbmh_feed(chunk);
    }
    return r;
};
SBMH.prototype._sbmh_feed = function(data) {
    const len = data.length;
    const needle = this._needle;
    const needleLength = needle.length;
    const lastNeedleChar = needle[needleLength - 1];
    let pos = -this._lookbehind_size;
    let ch;
    if (pos < 0) {
        while(pos < 0 && pos <= len - needleLength){
            ch = this._sbmh_lookup_char(data, pos + needleLength - 1);
            if (ch === lastNeedleChar && this._sbmh_memcmp(data, pos, needleLength - 1)) {
                this._lookbehind_size = 0;
                ++this.matches;
                this.emit("info", true);
                return this._bufpos = pos + needleLength;
            }
            pos += this._occ[ch];
        }
        if (pos < 0) {
            while(pos < 0 && !this._sbmh_memcmp(data, pos, len - pos)){
                ++pos;
            }
        }
        if (pos >= 0) {
            this.emit("info", false, this._lookbehind, 0, this._lookbehind_size);
            this._lookbehind_size = 0;
        } else {
            const bytesToCutOff = this._lookbehind_size + pos;
            if (bytesToCutOff > 0) {
                this.emit("info", false, this._lookbehind, 0, bytesToCutOff);
            }
            this._lookbehind.copy(this._lookbehind, 0, bytesToCutOff, this._lookbehind_size - bytesToCutOff);
            this._lookbehind_size -= bytesToCutOff;
            data.copy(this._lookbehind, this._lookbehind_size);
            this._lookbehind_size += len;
            this._bufpos = len;
            return len;
        }
    }
    pos += (pos >= 0) * this._bufpos;
    if (data.indexOf(needle, pos) !== -1) {
        pos = data.indexOf(needle, pos);
        ++this.matches;
        if (pos > 0) {
            this.emit("info", true, data, this._bufpos, pos);
        } else {
            this.emit("info", true);
        }
        return this._bufpos = pos + needleLength;
    } else {
        pos = len - needleLength;
    }
    while(pos < len && (data[pos] !== needle[0] || Buffer.compare(data.subarray(pos, pos + len - pos), needle.subarray(0, len - pos)) !== 0)){
        ++pos;
    }
    if (pos < len) {
        data.copy(this._lookbehind, 0, pos, pos + (len - pos));
        this._lookbehind_size = len - pos;
    }
    if (pos > 0) {
        this.emit("info", false, data, this._bufpos, pos < len ? pos : len);
    }
    this._bufpos = len;
    return len;
};
SBMH.prototype._sbmh_lookup_char = function(data, pos) {
    return pos < 0 ? this._lookbehind[this._lookbehind_size + pos] : data[pos];
};
SBMH.prototype._sbmh_memcmp = function(data, pos, len) {
    for(var i = 0; i < len; ++i){
        if (this._sbmh_lookup_char(data, pos + i) !== this._needle[i]) {
            return false;
        }
    }
    return true;
};
module2.exports = SBMH;

return module2.exports;
}
