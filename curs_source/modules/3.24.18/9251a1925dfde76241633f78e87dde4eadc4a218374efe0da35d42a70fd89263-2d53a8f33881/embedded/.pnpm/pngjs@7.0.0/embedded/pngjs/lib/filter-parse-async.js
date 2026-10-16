import { require_chunkstream } from "./chunkstream.js";
import { require_filter_parse } from "./filter-parse.js";
var __wakaru_require_filter_parse_async_cache;
export function require_filter_parse_async() {
if (__wakaru_require_filter_parse_async_cache) return __wakaru_require_filter_parse_async_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_filter_parse_async_cache = module2;
"use strict";
var util2 = require("util");
var ChunkStream = require_chunkstream();
var Filter = require_filter_parse();
var FilterAsync = module2.exports = function(bitmapInfo) {
    ChunkStream.call(this);
    let buffers = [];
    let that = this;
    this._filter = new Filter(bitmapInfo, {
        read: this.read.bind(this),
        write: function(buffer) {
            buffers.push(buffer);
        },
        complete: function() {
            that.emit("complete", Buffer.concat(buffers));
        }
    });
    this._filter.start();
};
util2.inherits(FilterAsync, ChunkStream);

return module2.exports;
}
