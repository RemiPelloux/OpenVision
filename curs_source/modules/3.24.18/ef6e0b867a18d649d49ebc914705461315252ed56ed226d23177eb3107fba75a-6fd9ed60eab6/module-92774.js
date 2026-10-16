function t(e, t, i, a, n, r) {
    this.global = n, t = t || 0, i = i || e.byteLength - t, this.arrayBuffer = e.slice(t, t + i), this.view = new n.DataView(this.arrayBuffer, 0, this.arrayBuffer.byteLength), this.setBigEndian(a), this.offset = 0, this.parentOffset = (r || 0) + t;
}
t.prototype = {
    setBigEndian: function(e) {
        this.littleEndian = !e;
    },
    nextUInt8: function() {
        var e = this.view.getUint8(this.offset);
        return this.offset += 1, e;
    },
    nextInt8: function() {
        var e = this.view.getInt8(this.offset);
        return this.offset += 1, e;
    },
    nextUInt16: function() {
        var e = this.view.getUint16(this.offset, this.littleEndian);
        return this.offset += 2, e;
    },
    nextUInt32: function() {
        var e = this.view.getUint32(this.offset, this.littleEndian);
        return this.offset += 4, e;
    },
    nextInt16: function() {
        var e = this.view.getInt16(this.offset, this.littleEndian);
        return this.offset += 2, e;
    },
    nextInt32: function() {
        var e = this.view.getInt32(this.offset, this.littleEndian);
        return this.offset += 4, e;
    },
    nextFloat: function() {
        var e = this.view.getFloat32(this.offset, this.littleEndian);
        return this.offset += 4, e;
    },
    nextDouble: function() {
        var e = this.view.getFloat64(this.offset, this.littleEndian);
        return this.offset += 8, e;
    },
    nextBuffer: function(e) {
        var t = this.arrayBuffer.slice(this.offset, this.offset + e);
        return this.offset += e, t;
    },
    remainingLength: function() {
        return this.arrayBuffer.byteLength - this.offset;
    },
    nextString: function(e) {
        var t = this.arrayBuffer.slice(this.offset, this.offset + e);
        return t = String.fromCharCode.apply(null, new this.global.Uint8Array(t)), this.offset += e, t;
    },
    mark: function() {
        var e = this;
        return {
            openWithOffset: function(i) {
                return i = (i || 0) + this.offset, new t(e.arrayBuffer, i, e.arrayBuffer.byteLength - i, !e.littleEndian, e.global, e.parentOffset);
            },
            offset: this.offset,
            getParentOffset: function() {
                return e.parentOffset;
            }
        };
    },
    offsetFrom: function(e) {
        return this.parentOffset + this.offset - (e.offset + e.getParentOffset());
    },
    skip: function(e) {
        this.offset += e;
    },
    branch: function(e, i) {
        return i = "number" == typeof i ? i : this.arrayBuffer.byteLength - (this.offset + e), new t(this.arrayBuffer, this.offset + e, i, !this.littleEndian, this.global, this.parentOffset);
    }
}, module.exports = t;
