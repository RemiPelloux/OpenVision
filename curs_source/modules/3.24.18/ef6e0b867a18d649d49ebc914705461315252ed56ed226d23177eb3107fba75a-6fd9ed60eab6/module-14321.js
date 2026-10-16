function t(e, t, i, a) {
    this.buffer = e, this.offset = t || 0, i = "number" == typeof i ? i : e.length, this.endPosition = this.offset + i, this.setBigEndian(a);
}
t.prototype = {
    setBigEndian: function(e) {
        this.bigEndian = !!e;
    },
    nextUInt8: function() {
        var e = this.buffer.readUInt8(this.offset);
        return this.offset += 1, e;
    },
    nextInt8: function() {
        var e = this.buffer.readInt8(this.offset);
        return this.offset += 1, e;
    },
    nextUInt16: function() {
        var e = this.bigEndian ? this.buffer.readUInt16BE(this.offset) : this.buffer.readUInt16LE(this.offset);
        return this.offset += 2, e;
    },
    nextUInt32: function() {
        var e = this.bigEndian ? this.buffer.readUInt32BE(this.offset) : this.buffer.readUInt32LE(this.offset);
        return this.offset += 4, e;
    },
    nextInt16: function() {
        var e = this.bigEndian ? this.buffer.readInt16BE(this.offset) : this.buffer.readInt16LE(this.offset);
        return this.offset += 2, e;
    },
    nextInt32: function() {
        var e = this.bigEndian ? this.buffer.readInt32BE(this.offset) : this.buffer.readInt32LE(this.offset);
        return this.offset += 4, e;
    },
    nextFloat: function() {
        var e = this.bigEndian ? this.buffer.readFloatBE(this.offset) : this.buffer.readFloatLE(this.offset);
        return this.offset += 4, e;
    },
    nextDouble: function() {
        var e = this.bigEndian ? this.buffer.readDoubleBE(this.offset) : this.buffer.readDoubleLE(this.offset);
        return this.offset += 8, e;
    },
    nextBuffer: function(e) {
        var t = this.buffer.slice(this.offset, this.offset + e);
        return this.offset += e, t;
    },
    remainingLength: function() {
        return this.endPosition - this.offset;
    },
    nextString: function(e) {
        var t = this.buffer.toString("utf8", this.offset, this.offset + e);
        return this.offset += e, t;
    },
    mark: function() {
        var e = this;
        return {
            openWithOffset: function(i) {
                return i = (i || 0) + this.offset, new t(e.buffer, i, e.endPosition - i, e.bigEndian);
            },
            offset: this.offset
        };
    },
    offsetFrom: function(e) {
        return this.offset - e.offset;
    },
    skip: function(e) {
        this.offset += e;
    },
    branch: function(e, i) {
        return i = "number" == typeof i ? i : this.endPosition - (this.offset + e), new t(this.buffer, this.offset + e, i, this.bigEndian);
    }
}, module.exports = t;
