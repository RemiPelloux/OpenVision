import { require_filter_parse } from "./filter-parse.js";
import { require_sync_reader } from "./sync-reader.js";
var __wakaru_require_filter_parse_sync_cache;
export function require_filter_parse_sync() {
if (__wakaru_require_filter_parse_sync_cache) return __wakaru_require_filter_parse_sync_cache;
var exports2 = {};
__wakaru_require_filter_parse_sync_cache = exports2;
"use strict";
var SyncReader = require_sync_reader();
var Filter = require_filter_parse();
exports2.process = function(inBuffer, bitmapInfo) {
    let outBuffers = [];
    let reader = new SyncReader(inBuffer);
    let filter3 = new Filter(bitmapInfo, {
        read: reader.read.bind(reader),
        write: function(bufferPart) {
            outBuffers.push(bufferPart);
        },
        complete: function() {}
    });
    filter3.start();
    reader.process();
    return Buffer.concat(outBuffers);
};

return exports2;
}
