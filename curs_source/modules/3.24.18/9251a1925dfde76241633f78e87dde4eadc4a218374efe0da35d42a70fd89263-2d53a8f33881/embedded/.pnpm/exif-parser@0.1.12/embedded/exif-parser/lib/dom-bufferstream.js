var __wakaru_require_dom_bufferstream_cache;
export function require_dom_bufferstream() {
if (__wakaru_require_dom_bufferstream_cache) return __wakaru_require_dom_bufferstream_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_dom_bufferstream_cache = module2;
function DOMBufferStream(arrayBuffer, offset, length, bigEndian, global2, parentOffset) {
    this.global = global2;
    offset = offset || 0;
    length = length || arrayBuffer.byteLength - offset;
    this.arrayBuffer = arrayBuffer.slice(offset, offset + length);
    this.view = new global2.DataView(this.arrayBuffer, 0, this.arrayBuffer.byteLength);
    this.setBigEndian(bigEndian);
    this.offset = 0;
    this.parentOffset = (parentOffset || 0) + offset;
}
DOMBufferStream.prototype = {
    setBigEndian: function(bigEndian) {
        this.littleEndian = !bigEndian;
    },
    nextUInt8: function() {
        var value = this.view.getUint8(this.offset);
        this.offset += 1;
        return value;
    },
    nextInt8: function() {
        var value = this.view.getInt8(this.offset);
        this.offset += 1;
        return value;
    },
    nextUInt16: function() {
        var value = this.view.getUint16(this.offset, this.littleEndian);
        this.offset += 2;
        return value;
    },
    nextUInt32: function() {
        var value = this.view.getUint32(this.offset, this.littleEndian);
        this.offset += 4;
        return value;
    },
    nextInt16: function() {
        var value = this.view.getInt16(this.offset, this.littleEndian);
        this.offset += 2;
        return value;
    },
    nextInt32: function() {
        var value = this.view.getInt32(this.offset, this.littleEndian);
        this.offset += 4;
        return value;
    },
    nextFloat: function() {
        var value = this.view.getFloat32(this.offset, this.littleEndian);
        this.offset += 4;
        return value;
    },
    nextDouble: function() {
        var value = this.view.getFloat64(this.offset, this.littleEndian);
        this.offset += 8;
        return value;
    },
    nextBuffer: function(length) {
        var value = this.arrayBuffer.slice(this.offset, this.offset + length);
        this.offset += length;
        return value;
    },
    remainingLength: function() {
        return this.arrayBuffer.byteLength - this.offset;
    },
    nextString: function(length) {
        var value = this.arrayBuffer.slice(this.offset, this.offset + length);
        value = String.fromCharCode.apply(null, new this.global.Uint8Array(value));
        this.offset += length;
        return value;
    },
    mark: function() {
        var self2 = this;
        return {
            openWithOffset: function(offset) {
                offset = (offset || 0) + this.offset;
                return new DOMBufferStream(self2.arrayBuffer, offset, self2.arrayBuffer.byteLength - offset, !self2.littleEndian, self2.global, self2.parentOffset);
            },
            offset: this.offset,
            getParentOffset: function() {
                return self2.parentOffset;
            }
        };
    },
    offsetFrom: function(marker17) {
        return this.parentOffset + this.offset - (marker17.offset + marker17.getParentOffset());
    },
    skip: function(amount) {
        this.offset += amount;
    },
    branch: function(offset, length) {
        length = typeof length === "number" ? length : this.arrayBuffer.byteLength - (this.offset + offset);
        return new DOMBufferStream(this.arrayBuffer, this.offset + offset, length, !this.littleEndian, this.global, this.parentOffset);
    }
};
module2.exports = DOMBufferStream;

return module2.exports;
}
