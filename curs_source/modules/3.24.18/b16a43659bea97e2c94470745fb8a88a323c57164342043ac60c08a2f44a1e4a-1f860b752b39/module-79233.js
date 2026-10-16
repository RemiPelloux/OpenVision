let r = require(39023), n = require(2203), s = module.exports = function() {
    n.call(this), this._buffers = [], this._buffered = 0, this._reads = [], this._paused = !1, this._encoding = "utf8", this.writable = !0;
};
r.inherits(s, n), s.prototype.read = function(t, e) {
    this._reads.push({
        length: Math.abs(t),
        allowLess: t < 0,
        func: e
    }), process.nextTick((function() {
        this._process(), this._paused && this._reads && this._reads.length > 0 && (this._paused = !1, this.emit("drain"));
    }).bind(this));
}, s.prototype.write = function(t, e) {
    if (!this.writable) return this.emit("error", new Error("Stream not writable")), !1;
    let i;
    return i = Buffer.isBuffer(t) ? t : Buffer.from(t, e || this._encoding), this._buffers.push(i), this._buffered += i.length, this._process(), this._reads && 0 === this._reads.length && (this._paused = !0), this.writable && !this._paused;
}, s.prototype.end = function(t, e) {
    t && this.write(t, e), this.writable = !1, this._buffers && (0 === this._buffers.length ? this._end() : (this._buffers.push(null), this._process()));
}, s.prototype.destroySoon = s.prototype.end, s.prototype._end = function() {
    this._reads.length > 0 && this.emit("error", new Error("Unexpected end of input")), this.destroy();
}, s.prototype.destroy = function() {
    this._buffers && (this.writable = !1, this._reads = null, this._buffers = null, this.emit("close"));
}, s.prototype._processReadAllowingLess = function(t) {
    this._reads.shift();
    let e = this._buffers[0];
    e.length > t.length ? (this._buffered -= t.length, this._buffers[0] = e.slice(t.length), t.func.call(this, e.slice(0, t.length))) : (this._buffered -= e.length, this._buffers.shift(), t.func.call(this, e));
}, s.prototype._processRead = function(t) {
    this._reads.shift();
    let e = 0, i = 0, r = Buffer.alloc(t.length);
    for(; e < t.length;){
        let n = this._buffers[i++], s = Math.min(n.length, t.length - e);
        n.copy(r, e, 0, s), e += s, s !== n.length && (this._buffers[--i] = n.slice(s));
    }
    i > 0 && this._buffers.splice(0, i), this._buffered -= t.length, t.func.call(this, r);
}, s.prototype._process = function() {
    try {
        for(; this._buffered > 0 && this._reads && this._reads.length > 0;){
            let t = this._reads[0];
            if (t.allowLess) this._processReadAllowingLess(t);
            else {
                if (!(this._buffered >= t.length)) break;
                this._processRead(t);
            }
        }
        this._buffers && !this.writable && this._end();
    } catch (t) {
        this.emit("error", t);
    }
};
