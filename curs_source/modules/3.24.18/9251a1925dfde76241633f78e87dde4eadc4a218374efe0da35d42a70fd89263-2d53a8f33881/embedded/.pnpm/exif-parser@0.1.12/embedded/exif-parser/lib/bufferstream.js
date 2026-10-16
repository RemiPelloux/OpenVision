var __wakaru_require_bufferstream_cache;
export function require_bufferstream() {
if (__wakaru_require_bufferstream_cache) return __wakaru_require_bufferstream_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_bufferstream_cache = module2;
function BufferStream(buffer, offset, length, bigEndian) {
    this.buffer = buffer;
    this.offset = offset || 0;
    length = typeof length === "number" ? length : buffer.length;
    this.endPosition = this.offset + length;
    this.setBigEndian(bigEndian);
}
BufferStream.prototype = {
    setBigEndian: function(bigEndian) {
        this.bigEndian = !!bigEndian;
    },
    nextUInt8: function() {
        var value = this.buffer.readUInt8(this.offset);
        this.offset += 1;
        return value;
    },
    nextInt8: function() {
        var value = this.buffer.readInt8(this.offset);
        this.offset += 1;
        return value;
    },
    nextUInt16: function() {
        var value = this.bigEndian ? this.buffer.readUInt16BE(this.offset) : this.buffer.readUInt16LE(this.offset);
        this.offset += 2;
        return value;
    },
    nextUInt32: function() {
        var value = this.bigEndian ? this.buffer.readUInt32BE(this.offset) : this.buffer.readUInt32LE(this.offset);
        this.offset += 4;
        return value;
    },
    nextInt16: function() {
        var value = this.bigEndian ? this.buffer.readInt16BE(this.offset) : this.buffer.readInt16LE(this.offset);
        this.offset += 2;
        return value;
    },
    nextInt32: function() {
        var value = this.bigEndian ? this.buffer.readInt32BE(this.offset) : this.buffer.readInt32LE(this.offset);
        this.offset += 4;
        return value;
    },
    nextFloat: function() {
        var value = this.bigEndian ? this.buffer.readFloatBE(this.offset) : this.buffer.readFloatLE(this.offset);
        this.offset += 4;
        return value;
    },
    nextDouble: function() {
        var value = this.bigEndian ? this.buffer.readDoubleBE(this.offset) : this.buffer.readDoubleLE(this.offset);
        this.offset += 8;
        return value;
    },
    nextBuffer: function(length) {
        var value = this.buffer.slice(this.offset, this.offset + length);
        this.offset += length;
        return value;
    },
    remainingLength: function() {
        return this.endPosition - this.offset;
    },
    nextString: function(length) {
        var value = this.buffer.toString("utf8", this.offset, this.offset + length);
        this.offset += length;
        return value;
    },
    mark: function() {
        var self2 = this;
        return {
            openWithOffset: function(offset) {
                offset = (offset || 0) + this.offset;
                return new BufferStream(self2.buffer, offset, self2.endPosition - offset, self2.bigEndian);
            },
            offset: this.offset
        };
    },
    offsetFrom: function(marker17) {
        return this.offset - marker17.offset;
    },
    skip: function(amount) {
        this.offset += amount;
    },
    branch: function(offset, length) {
        length = typeof length === "number" ? length : this.endPosition - (this.offset + offset);
        return new BufferStream(this.buffer, this.offset + offset, length, this.bigEndian);
    }
};
module2.exports = BufferStream;

return module2.exports;
}
