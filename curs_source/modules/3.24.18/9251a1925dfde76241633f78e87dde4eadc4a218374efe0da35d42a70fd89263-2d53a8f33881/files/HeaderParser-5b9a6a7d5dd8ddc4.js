import { require_sbmh } from "../../streamsearch/sbmh.js";
import { require_getLimit } from "../../../lib/utils/getLimit.js";
var __wakaru_require_HeaderParser_cache;
export function require_HeaderParser() {
if (__wakaru_require_HeaderParser_cache) return __wakaru_require_HeaderParser_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_HeaderParser_cache = module2;
"use strict";
var EventEmitter = require("node:events").EventEmitter;
var inherits = require("node:util").inherits;
var getLimit = require_getLimit();
var StreamSearch = require_sbmh();
var B_DCRLF = Buffer.from("\r\n\r\n");
var RE_CRLF = /\r\n/g;
var RE_HDR = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
function HeaderParser(cfg) {
    EventEmitter.call(this);
    cfg = cfg || {};
    const self2 = this;
    this.nread = 0;
    this.maxed = false;
    this.npairs = 0;
    this.maxHeaderPairs = getLimit(cfg, "maxHeaderPairs", 2e3);
    this.maxHeaderSize = getLimit(cfg, "maxHeaderSize", 80 * 1024);
    this.buffer = "";
    this.header = {};
    this.finished = false;
    this.ss = new StreamSearch(B_DCRLF);
    this.ss.on("info", function(isMatch, data, start, end) {
        if (data && !self2.maxed) {
            if (self2.nread + end - start >= self2.maxHeaderSize) {
                end = self2.maxHeaderSize - self2.nread + start;
                self2.nread = self2.maxHeaderSize;
                self2.maxed = true;
            } else {
                self2.nread += end - start;
            }
            self2.buffer += data.toString("binary", start, end);
        }
        if (isMatch) {
            self2._finish();
        }
    });
}
inherits(HeaderParser, EventEmitter);
HeaderParser.prototype.push = function(data) {
    const r = this.ss.push(data);
    if (this.finished) {
        return r;
    }
};
HeaderParser.prototype.reset = function() {
    this.finished = false;
    this.buffer = "";
    this.header = {};
    this.ss.reset();
};
HeaderParser.prototype._finish = function() {
    if (this.buffer) {
        this._parseHeader();
    }
    this.ss.matches = this.ss.maxMatches;
    const header = this.header;
    this.header = {};
    this.buffer = "";
    this.finished = true;
    this.nread = this.npairs = 0;
    this.maxed = false;
    this.emit("header", header);
};
HeaderParser.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) {
        return;
    }
    const lines2 = this.buffer.split(RE_CRLF);
    const len = lines2.length;
    let m2, h;
    for(var i = 0; i < len; ++i){
        if (lines2[i].length === 0) {
            continue;
        }
        if (lines2[i][0] === "	" || lines2[i][0] === " ") {
            if (h) {
                this.header[h][this.header[h].length - 1] += lines2[i];
                continue;
            }
        }
        const posColon = lines2[i].indexOf(":");
        if (posColon === -1 || posColon === 0) {
            return;
        }
        m2 = RE_HDR.exec(lines2[i]);
        h = m2[1].toLowerCase();
        this.header[h] = this.header[h] || [];
        this.header[h].push(m2[2] || "");
        if (++this.npairs === this.maxHeaderPairs) {
            break;
        }
    }
};
module2.exports = HeaderParser;

return module2.exports;
}
