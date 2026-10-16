let r = require(42613).ok, n = require(43106), s = require(39023), h = require(20181).kMaxLength;
function o(t) {
    if (!(this instanceof o)) return new o(t);
    t && t.chunkSize < n.Z_MIN_CHUNK && (t.chunkSize = n.Z_MIN_CHUNK), n.Inflate.call(this, t), this._offset = void 0 === this._offset ? this._outOffset : this._offset, this._buffer = this._buffer || this._outBuffer, t && null != t.maxLength && (this._maxLength = t.maxLength);
}
function a(t, e) {
    e && process.nextTick(e), t._handle && (t._handle.close(), t._handle = null);
}
function l(t, e) {
    return function(t, e) {
        if ("string" == typeof e && (e = Buffer.from(e)), !(e instanceof Buffer)) throw new TypeError("Not a string or buffer");
        let i = t._finishFlushFlag;
        return null == i && (i = n.Z_FINISH), t._processChunk(e, i);
    }(new o(e), t);
}
o.prototype._processChunk = function(t, e, i) {
    if ("function" == typeof i) return n.Inflate._processChunk.call(this, t, e, i);
    let s, o, l = this, f = t && t.length, p = this._chunkSize - this._offset, d = this._maxLength, u = 0, c = [], _ = 0;
    function g(t, e) {
        if (l._hadError) return;
        let i = p - e;
        if (r(i >= 0, "have should not go down"), i > 0) {
            let t = l._buffer.slice(l._offset, l._offset + i);
            if (l._offset += i, t.length > d && (t = t.slice(0, d)), c.push(t), _ += t.length, d -= t.length, 0 === d) return !1;
        }
        return (0 === e || l._offset >= l._chunkSize) && (p = l._chunkSize, l._offset = 0, l._buffer = Buffer.allocUnsafe(l._chunkSize)), 0 === e && (u += f - t, f = t, !0);
    }
    this.on("error", function(t) {
        s = t;
    }), r(this._handle, "zlib binding closed");
    do {
        o = this._handle.writeSync(e, t, u, f, this._buffer, this._offset, p), o = o || this._writeState;
    }while (!this._hadError && g(o[0], o[1]))
    if (this._hadError) throw s;
    if (_ >= h) throw a(this), new RangeError("Cannot create final Buffer. It would be larger than 0x" + h.toString(16) + " bytes");
    let b = Buffer.concat(c, _);
    return a(this), b;
};
s.inherits(o, n.Inflate);
var _e;
module.exports = _e = l;
_e.Inflate = o, _e.createInflate = function(t) {
    return new o(t);
}, _e.inflateSync = l;
