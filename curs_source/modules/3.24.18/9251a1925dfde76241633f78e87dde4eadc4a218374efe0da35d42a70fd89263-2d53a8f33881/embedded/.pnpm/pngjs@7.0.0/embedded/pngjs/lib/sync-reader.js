var __wakaru_require_sync_reader_cache;
export function require_sync_reader() {
if (__wakaru_require_sync_reader_cache) return __wakaru_require_sync_reader_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_sync_reader_cache = module2;
"use strict";
var SyncReader = module2.exports = function(buffer) {
    this._buffer = buffer;
    this._reads = [];
};
SyncReader.prototype.read = function(length, callback) {
    this._reads.push({
        length: Math.abs(length),
        allowLess: length < 0,
        func: callback
    });
};
SyncReader.prototype.process = function() {
    while(this._reads.length > 0 && this._buffer.length){
        let read = this._reads[0];
        if (this._buffer.length && (this._buffer.length >= read.length || read.allowLess)) {
            this._reads.shift();
            let buf = this._buffer;
            this._buffer = buf.slice(read.length);
            read.func.call(this, buf.slice(0, read.length));
        } else {
            break;
        }
    }
    if (this._reads.length > 0) {
        throw new Error("There are some read requests waitng on finished stream");
    }
    if (this._buffer.length > 0) {
        throw new Error("unrecognised content at end of stream");
    }
};

return module2.exports;
}
