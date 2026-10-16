var __wakaru_require_sync_inflate_cache;
export function require_sync_inflate() {
if (__wakaru_require_sync_inflate_cache) return __wakaru_require_sync_inflate_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_sync_inflate_cache = module2;
"use strict";
var assert4 = require("assert").ok;
var zlib2 = require("zlib");
var util2 = require("util");
var kMaxLength = require("buffer").kMaxLength;
function Inflate(opts) {
    if (!(this instanceof Inflate)) {
        return new Inflate(opts);
    }
    if (opts && opts.chunkSize < zlib2.Z_MIN_CHUNK) {
        opts.chunkSize = zlib2.Z_MIN_CHUNK;
    }
    zlib2.Inflate.call(this, opts);
    this._offset = this._offset === void 0 ? this._outOffset : this._offset;
    this._buffer = this._buffer || this._outBuffer;
    if (opts && opts.maxLength != null) {
        this._maxLength = opts.maxLength;
    }
}
function createInflate(opts) {
    return new Inflate(opts);
}
function _close(engine, callback) {
    if (callback) {
        process.nextTick(callback);
    }
    if (!engine._handle) {
        return;
    }
    engine._handle.close();
    engine._handle = null;
}
Inflate.prototype._processChunk = function(chunk, flushFlag, asyncCb) {
    if (typeof asyncCb === "function") {
        return zlib2.Inflate._processChunk.call(this, chunk, flushFlag, asyncCb);
    }
    let self2 = this;
    let availInBefore = chunk && chunk.length;
    let availOutBefore = this._chunkSize - this._offset;
    let leftToInflate = this._maxLength;
    let inOff = 0;
    let buffers = [];
    let nread = 0;
    let error3;
    this.on("error", function(err) {
        error3 = err;
    });
    function handleChunk(availInAfter, availOutAfter) {
        if (self2._hadError) {
            return;
        }
        let have = availOutBefore - availOutAfter;
        assert4(have >= 0, "have should not go down");
        if (have > 0) {
            let out = self2._buffer.slice(self2._offset, self2._offset + have);
            self2._offset += have;
            if (out.length > leftToInflate) {
                out = out.slice(0, leftToInflate);
            }
            buffers.push(out);
            nread += out.length;
            leftToInflate -= out.length;
            if (leftToInflate === 0) {
                return false;
            }
        }
        if (availOutAfter === 0 || self2._offset >= self2._chunkSize) {
            availOutBefore = self2._chunkSize;
            self2._offset = 0;
            self2._buffer = Buffer.allocUnsafe(self2._chunkSize);
        }
        if (availOutAfter === 0) {
            inOff += availInBefore - availInAfter;
            availInBefore = availInAfter;
            return true;
        }
        return false;
    }
    assert4(this._handle, "zlib binding closed");
    let res;
    do {
        res = this._handle.writeSync(flushFlag, chunk, inOff, availInBefore, this._buffer, this._offset, availOutBefore);
        res = res || this._writeState;
    }while (!this._hadError && handleChunk(res[0], res[1]))
    if (this._hadError) {
        throw error3;
    }
    if (nread >= kMaxLength) {
        _close(this);
        throw new RangeError("Cannot create final Buffer. It would be larger than 0x" + kMaxLength.toString(16) + " bytes");
    }
    let buf = Buffer.concat(buffers, nread);
    _close(this);
    return buf;
};
util2.inherits(Inflate, zlib2.Inflate);
function zlibBufferSync(engine, buffer) {
    if (typeof buffer === "string") {
        buffer = Buffer.from(buffer);
    }
    if (!(buffer instanceof Buffer)) {
        throw new TypeError("Not a string or buffer");
    }
    let flushFlag = engine._finishFlushFlag;
    if (flushFlag == null) {
        flushFlag = zlib2.Z_FINISH;
    }
    return engine._processChunk(buffer, flushFlag);
}
function inflateSync(buffer, opts) {
    return zlibBufferSync(new Inflate(opts), buffer);
}
module2.exports = exports2 = inflateSync;
exports2.Inflate = Inflate;
exports2.createInflate = createInflate;
exports2.inflateSync = inflateSync;

return module2.exports;
}
