"use strict";
const a = require("./module-8474.js").EventEmitter;
function s(e) {
    if ("string" == typeof e && (e = Buffer.from(e)), !Buffer.isBuffer(e)) throw new TypeError("The needle has to be a String or a Buffer.");
    const n = e.length;
    if (0 === n) throw new Error("The needle cannot be an empty String/Buffer.");
    if (n > 256) throw new Error("The needle cannot have a length bigger than 256.");
    this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(n), this._lookbehind_size = 0, this._needle = e, this._bufpos = 0, this._lookbehind = Buffer.alloc(n);
    for(var t = 0; t < n - 1; ++t)this._occ[e[t]] = n - 1 - t;
}
(0, require("./module-7975.js").inherits)(s, a), s.prototype.reset = function() {
    this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
}, s.prototype.push = function(e, n) {
    Buffer.isBuffer(e) || (e = Buffer.from(e, "binary"));
    const t = e.length;
    let a;
    for(this._bufpos = n || 0; a !== t && this.matches < this.maxMatches;)a = this._sbmh_feed(e);
    return a;
}, s.prototype._sbmh_feed = function(e) {
    const n = e.length, t = this._needle, a = t.length, s = t[a - 1];
    let o, r = -this._lookbehind_size;
    if (r < 0) {
        for(; r < 0 && r <= n - a;){
            if (o = this._sbmh_lookup_char(e, r + a - 1), o === s && this._sbmh_memcmp(e, r, a - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", !0), this._bufpos = r + a;
            r += this._occ[o];
        }
        if (r < 0) for(; r < 0 && !this._sbmh_memcmp(e, r, n - r);)++r;
        if (!(r >= 0)) {
            const t = this._lookbehind_size + r;
            return t > 0 && this.emit("info", !1, this._lookbehind, 0, t), this._lookbehind.copy(this._lookbehind, 0, t, this._lookbehind_size - t), this._lookbehind_size -= t, e.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += n, this._bufpos = n, n;
        }
        this.emit("info", !1, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
    }
    if (r += (r >= 0) * this._bufpos, -1 !== e.indexOf(t, r)) return r = e.indexOf(t, r), ++this.matches, r > 0 ? this.emit("info", !0, e, this._bufpos, r) : this.emit("info", !0), this._bufpos = r + a;
    for(r = n - a; r < n && (e[r] !== t[0] || 0 !== Buffer.compare(e.subarray(r, r + n - r), t.subarray(0, n - r)));)++r;
    return r < n && (e.copy(this._lookbehind, 0, r, r + (n - r)), this._lookbehind_size = n - r), r > 0 && this.emit("info", !1, e, this._bufpos, r < n ? r : n), this._bufpos = n, n;
}, s.prototype._sbmh_lookup_char = function(e, n) {
    return n < 0 ? this._lookbehind[this._lookbehind_size + n] : e[n];
}, s.prototype._sbmh_memcmp = function(e, n, t) {
    for(var a = 0; a < t; ++a)if (this._sbmh_lookup_char(e, n + a) !== this._needle[a]) return !1;
    return !0;
}, module.exports = s;
