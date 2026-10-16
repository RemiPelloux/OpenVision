var a = require("./module-9896.js"), s = require("./module-9023.js"), o = require("./module-2203.js"), r = o.Readable, i = o.PassThrough, A = require("./module-363.js"), c = require("./module-4434.js").EventEmitter;
function l(e) {
    c.call(this), this.fd = e, this.pend = new A, this.pend.max = 1, this.refCount = 0;
}
function d(e, n) {
    n = n || {}, r.call(this, n), this.context = e, this.context.ref(), this.start = n.start || 0, this.endOffset = n.end, this.pos = this.start;
}
function m(e) {
    c.call(this), this.refCount = 0, this.buffer = e;
}
exports.BufferSlicer = m, exports.FdSlicer = l, s.inherits(l, c), l.prototype.read = function(e, n, t, s, o) {
    var r = this;
    r.pend.go(function(i) {
        a.read(r.fd, e, n, t, s, function(e, n, t) {
            i(), o(e, n, t);
        });
    });
}, l.prototype.createReadStream = function(e) {
    return new d(this, e);
}, l.prototype.ref = function() {
    this.refCount += 1;
}, l.prototype.unref = function() {
    var e = this;
    if (e.refCount -= 1, e.refCount < 0) throw new Error("invalid unref");
    e.refCount > 0 || a.close(e.fd, function(n) {
        n ? e.emit("error", n) : e.emit("close");
    });
}, s.inherits(d, r), d.prototype._read = function(e) {
    var n = this, t = Math.min(n._readableState.highWaterMark, e);
    if (null != n.endOffset && (t = Math.min(t, n.endOffset - n.pos)), t <= 0) return n.push(null), void this._cleanup();
    n.context.pend.go(function(e) {
        var s = Buffer.allocUnsafe(t);
        a.read(n.context.fd, s, 0, t, n.pos, function(t, a) {
            t ? n.destroy(t) : 0 === a ? (n.push(null), n._cleanup()) : (n.pos += a, n.push(s.slice(0, a))), e();
        });
    });
}, d.prototype._destroy = function(e, n) {
    this._cleanup(), n(e);
}, d.prototype._cleanup = function() {
    null != this.context && (this.context.unref(), this.context = null);
}, s.inherits(m, c), m.prototype.read = function(e, n, t, a, s) {
    if (!(0 <= n && n <= e.length)) throw new RangeError("offset outside buffer: 0 <= " + n + " <= " + e.length);
    if (a < 0) throw new RangeError("position is negative: " + a);
    n + t > e.length && (t = e.length - n), a + t > this.buffer.length && (t = this.buffer.length - a), t <= 0 ? setImmediate(function() {
        s(null, 0);
    }) : (this.buffer.copy(e, n, a, a + t), setImmediate(function() {
        s(null, t);
    }));
}, m.prototype.createReadStream = function(e) {
    var n = new i(e = e || {});
    n.start = e.start || 0, n.endOffset = e.end, n.pos = n.endOffset || this.buffer.length;
    for(var t = this.buffer.slice(n.start, n.pos), a = 0;;){
        var s = a + 65536;
        if (s >= t.length) {
            a < t.length && n.write(t.slice(a, t.length));
            break;
        }
        n.write(t.slice(a, s)), a = s;
    }
    return n.end(), n;
}, m.prototype.ref = function() {
    this.refCount += 1;
}, m.prototype.unref = function() {
    if (this.refCount -= 1, this.refCount < 0) throw new Error("invalid unref");
};
