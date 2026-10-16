"use strict";
const t = require("./module-8474.js").EventEmitter;
function s(e) {
    if ("string" == typeof e && (e = Buffer.from(e)), !Buffer.isBuffer(e)) throw new TypeError("The needle has to be a String or a Buffer.");
    const n = e.length;
    if (0 === n) throw new Error("The needle cannot be an empty String/Buffer.");
    if (n > 256) throw new Error("The needle cannot have a length bigger than 256.");
    this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(n), this._lookbehind_size = 0, this._needle = e, this._bufpos = 0, this._lookbehind = Buffer.alloc(n);
    for(var a = 0; a < n - 1; ++a)this._occ[e[a]] = n - 1 - a;
}
(0, require("./module-7975.js").inherits)(s, t), s.prototype.reset = function() {
    this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
}, s.prototype.push = function(e, n) {
    Buffer.isBuffer(e) || (e = Buffer.from(e, "binary"));
    const a = e.length;
    let t;
    for(this._bufpos = n || 0; t !== a && this.matches < this.maxMatches;)t = this._sbmh_feed(e);
    return t;
}, s.prototype._sbmh_feed = function(e) {
    const n = e.length, a = this._needle, t = a.length, s = a[t - 1];
    let o, r = -this._lookbehind_size;
    if (r < 0) {
        for(; r < 0 && r <= n - t;){
            if (o = this._sbmh_lookup_char(e, r + t - 1), o === s && this._sbmh_memcmp(e, r, t - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", !0), this._bufpos = r + t;
            r += this._occ[o];
        }
        if (r < 0) for(; r < 0 && !this._sbmh_memcmp(e, r, n - r);)++r;
        if (!(r >= 0)) {
            const a = this._lookbehind_size + r;
            return a > 0 && this.emit("info", !1, this._lookbehind, 0, a), this._lookbehind.copy(this._lookbehind, 0, a, this._lookbehind_size - a), this._lookbehind_size -= a, e.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += n, this._bufpos = n, n;
        }
        this.emit("info", !1, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
    }
    if (r += (r >= 0) * this._bufpos, -1 !== e.indexOf(a, r)) return r = e.indexOf(a, r), ++this.matches, r > 0 ? this.emit("info", !0, e, this._bufpos, r) : this.emit("info", !0), this._bufpos = r + t;
    for(r = n - t; r < n && (e[r] !== a[0] || 0 !== Buffer.compare(e.subarray(r, r + n - r), a.subarray(0, n - r)));)++r;
    return r < n && (e.copy(this._lookbehind, 0, r, r + (n - r)), this._lookbehind_size = n - r), r > 0 && this.emit("info", !1, e, this._bufpos, r < n ? r : n), this._bufpos = n, n;
}, s.prototype._sbmh_lookup_char = function(e, n) {
    return n < 0 ? this._lookbehind[this._lookbehind_size + n] : e[n];
}, s.prototype._sbmh_memcmp = function(e, n, a) {
    for(var t = 0; t < a; ++t)if (this._sbmh_lookup_char(e, n + t) !== this._needle[t]) return !1;
    return !0;
}, module.exports = s;
