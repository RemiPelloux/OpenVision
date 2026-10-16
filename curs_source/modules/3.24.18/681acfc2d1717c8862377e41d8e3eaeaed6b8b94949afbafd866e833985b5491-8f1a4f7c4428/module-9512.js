"use strict";
const n = require("./module-8474.js").EventEmitter;
function r(e) {
    if ("string" == typeof e && (e = Buffer.from(e)), !Buffer.isBuffer(e)) throw new TypeError("The needle has to be a String or a Buffer.");
    const t = e.length;
    if (0 === t) throw new Error("The needle cannot be an empty String/Buffer.");
    if (t > 256) throw new Error("The needle cannot have a length bigger than 256.");
    this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(t), this._lookbehind_size = 0, this._needle = e, this._bufpos = 0, this._lookbehind = Buffer.alloc(t);
    for(var A = 0; A < t - 1; ++A)this._occ[e[A]] = t - 1 - A;
}
(0, require("./module-7975.js").inherits)(r, n), r.prototype.reset = function() {
    this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
}, r.prototype.push = function(e, t) {
    Buffer.isBuffer(e) || (e = Buffer.from(e, "binary"));
    const A = e.length;
    let n;
    for(this._bufpos = t || 0; n !== A && this.matches < this.maxMatches;)n = this._sbmh_feed(e);
    return n;
}, r.prototype._sbmh_feed = function(e) {
    const t = e.length, A = this._needle, n = A.length, r = A[n - 1];
    let o, s = -this._lookbehind_size;
    if (s < 0) {
        for(; s < 0 && s <= t - n;){
            if (o = this._sbmh_lookup_char(e, s + n - 1), o === r && this._sbmh_memcmp(e, s, n - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", !0), this._bufpos = s + n;
            s += this._occ[o];
        }
        if (s < 0) for(; s < 0 && !this._sbmh_memcmp(e, s, t - s);)++s;
        if (!(s >= 0)) {
            const A = this._lookbehind_size + s;
            return A > 0 && this.emit("info", !1, this._lookbehind, 0, A), this._lookbehind.copy(this._lookbehind, 0, A, this._lookbehind_size - A), this._lookbehind_size -= A, e.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += t, this._bufpos = t, t;
        }
        this.emit("info", !1, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
    }
    if (s += (s >= 0) * this._bufpos, -1 !== e.indexOf(A, s)) return s = e.indexOf(A, s), ++this.matches, s > 0 ? this.emit("info", !0, e, this._bufpos, s) : this.emit("info", !0), this._bufpos = s + n;
    for(s = t - n; s < t && (e[s] !== A[0] || 0 !== Buffer.compare(e.subarray(s, s + t - s), A.subarray(0, t - s)));)++s;
    return s < t && (e.copy(this._lookbehind, 0, s, s + (t - s)), this._lookbehind_size = t - s), s > 0 && this.emit("info", !1, e, this._bufpos, s < t ? s : t), this._bufpos = t, t;
}, r.prototype._sbmh_lookup_char = function(e, t) {
    return t < 0 ? this._lookbehind[this._lookbehind_size + t] : e[t];
}, r.prototype._sbmh_memcmp = function(e, t, A) {
    for(var n = 0; n < A; ++n)if (this._sbmh_lookup_char(e, t + n) !== this._needle[n]) return !1;
    return !0;
}, module.exports = r;
