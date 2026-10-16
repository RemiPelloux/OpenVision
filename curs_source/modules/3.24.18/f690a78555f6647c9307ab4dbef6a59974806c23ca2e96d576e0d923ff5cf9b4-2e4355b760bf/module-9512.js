"use strict";
const n = require("./module-8474.js").EventEmitter;
function r(e) {
    if ("string" == typeof e && (e = Buffer.from(e)), !Buffer.isBuffer(e)) throw new TypeError("The needle has to be a String or a Buffer.");
    const A = e.length;
    if (0 === A) throw new Error("The needle cannot be an empty String/Buffer.");
    if (A > 256) throw new Error("The needle cannot have a length bigger than 256.");
    this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(A), this._lookbehind_size = 0, this._needle = e, this._bufpos = 0, this._lookbehind = Buffer.alloc(A);
    for(var t = 0; t < A - 1; ++t)this._occ[e[t]] = A - 1 - t;
}
(0, require("./module-7975.js").inherits)(r, n), r.prototype.reset = function() {
    this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
}, r.prototype.push = function(e, A) {
    Buffer.isBuffer(e) || (e = Buffer.from(e, "binary"));
    const t = e.length;
    let n;
    for(this._bufpos = A || 0; n !== t && this.matches < this.maxMatches;)n = this._sbmh_feed(e);
    return n;
}, r.prototype._sbmh_feed = function(e) {
    const A = e.length, t = this._needle, n = t.length, r = t[n - 1];
    let o, s = -this._lookbehind_size;
    if (s < 0) {
        for(; s < 0 && s <= A - n;){
            if (o = this._sbmh_lookup_char(e, s + n - 1), o === r && this._sbmh_memcmp(e, s, n - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", !0), this._bufpos = s + n;
            s += this._occ[o];
        }
        if (s < 0) for(; s < 0 && !this._sbmh_memcmp(e, s, A - s);)++s;
        if (!(s >= 0)) {
            const t = this._lookbehind_size + s;
            return t > 0 && this.emit("info", !1, this._lookbehind, 0, t), this._lookbehind.copy(this._lookbehind, 0, t, this._lookbehind_size - t), this._lookbehind_size -= t, e.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += A, this._bufpos = A, A;
        }
        this.emit("info", !1, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
    }
    if (s += (s >= 0) * this._bufpos, -1 !== e.indexOf(t, s)) return s = e.indexOf(t, s), ++this.matches, s > 0 ? this.emit("info", !0, e, this._bufpos, s) : this.emit("info", !0), this._bufpos = s + n;
    for(s = A - n; s < A && (e[s] !== t[0] || 0 !== Buffer.compare(e.subarray(s, s + A - s), t.subarray(0, A - s)));)++s;
    return s < A && (e.copy(this._lookbehind, 0, s, s + (A - s)), this._lookbehind_size = A - s), s > 0 && this.emit("info", !1, e, this._bufpos, s < A ? s : A), this._bufpos = A, A;
}, r.prototype._sbmh_lookup_char = function(e, A) {
    return A < 0 ? this._lookbehind[this._lookbehind_size + A] : e[A];
}, r.prototype._sbmh_memcmp = function(e, A, t) {
    for(var n = 0; n < t; ++n)if (this._sbmh_lookup_char(e, A + n) !== this._needle[n]) return !1;
    return !0;
}, module.exports = r;
