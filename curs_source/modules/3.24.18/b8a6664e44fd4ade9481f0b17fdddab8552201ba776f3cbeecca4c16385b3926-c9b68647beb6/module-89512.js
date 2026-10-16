"use strict";
const r = require(78474).EventEmitter;
function s(A) {
    if ("string" == typeof A && (A = Buffer.from(A)), !Buffer.isBuffer(A)) throw new TypeError("The needle has to be a String or a Buffer.");
    const e = A.length;
    if (0 === e) throw new Error("The needle cannot be an empty String/Buffer.");
    if (e > 256) throw new Error("The needle cannot have a length bigger than 256.");
    this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(e), this._lookbehind_size = 0, this._needle = A, this._bufpos = 0, this._lookbehind = Buffer.alloc(e);
    for(var t = 0; t < e - 1; ++t)this._occ[A[t]] = e - 1 - t;
}
(0, require(57975).inherits)(s, r), s.prototype.reset = function() {
    this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
}, s.prototype.push = function(A, e) {
    Buffer.isBuffer(A) || (A = Buffer.from(A, "binary"));
    const t = A.length;
    let r;
    for(this._bufpos = e || 0; r !== t && this.matches < this.maxMatches;)r = this._sbmh_feed(A);
    return r;
}, s.prototype._sbmh_feed = function(A) {
    const e = A.length, t = this._needle, r = t.length, s = t[r - 1];
    let o, n = -this._lookbehind_size;
    if (n < 0) {
        for(; n < 0 && n <= e - r;){
            if (o = this._sbmh_lookup_char(A, n + r - 1), o === s && this._sbmh_memcmp(A, n, r - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", !0), this._bufpos = n + r;
            n += this._occ[o];
        }
        if (n < 0) for(; n < 0 && !this._sbmh_memcmp(A, n, e - n);)++n;
        if (!(n >= 0)) {
            const t = this._lookbehind_size + n;
            return t > 0 && this.emit("info", !1, this._lookbehind, 0, t), this._lookbehind.copy(this._lookbehind, 0, t, this._lookbehind_size - t), this._lookbehind_size -= t, A.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += e, this._bufpos = e, e;
        }
        this.emit("info", !1, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
    }
    if (n += (n >= 0) * this._bufpos, -1 !== A.indexOf(t, n)) return n = A.indexOf(t, n), ++this.matches, n > 0 ? this.emit("info", !0, A, this._bufpos, n) : this.emit("info", !0), this._bufpos = n + r;
    for(n = e - r; n < e && (A[n] !== t[0] || 0 !== Buffer.compare(A.subarray(n, n + e - n), t.subarray(0, e - n)));)++n;
    return n < e && (A.copy(this._lookbehind, 0, n, n + (e - n)), this._lookbehind_size = e - n), n > 0 && this.emit("info", !1, A, this._bufpos, n < e ? n : e), this._bufpos = e, e;
}, s.prototype._sbmh_lookup_char = function(A, e) {
    return e < 0 ? this._lookbehind[this._lookbehind_size + e] : A[e];
}, s.prototype._sbmh_memcmp = function(A, e, t) {
    for(var r = 0; r < t; ++r)if (this._sbmh_lookup_char(A, e + r) !== this._needle[r]) return !1;
    return !0;
}, module.exports = s;
