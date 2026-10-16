"use strict";
const t = require("./module-8474.js").EventEmitter;
function s(e) {
    if ("string" == typeof e && (e = Buffer.from(e)), !Buffer.isBuffer(e)) throw new TypeError("The needle has to be a String or a Buffer.");
    const a = e.length;
    if (0 === a) throw new Error("The needle cannot be an empty String/Buffer.");
    if (a > 256) throw new Error("The needle cannot have a length bigger than 256.");
    this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(a), this._lookbehind_size = 0, this._needle = e, this._bufpos = 0, this._lookbehind = Buffer.alloc(a);
    for(var n = 0; n < a - 1; ++n)this._occ[e[n]] = a - 1 - n;
}
(0, require("./module-7975.js").inherits)(s, t), s.prototype.reset = function() {
    this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
}, s.prototype.push = function(e, a) {
    Buffer.isBuffer(e) || (e = Buffer.from(e, "binary"));
    const n = e.length;
    let t;
    for(this._bufpos = a || 0; t !== n && this.matches < this.maxMatches;)t = this._sbmh_feed(e);
    return t;
}, s.prototype._sbmh_feed = function(e) {
    const a = e.length, n = this._needle, t = n.length, s = n[t - 1];
    let o, r = -this._lookbehind_size;
    if (r < 0) {
        for(; r < 0 && r <= a - t;){
            if (o = this._sbmh_lookup_char(e, r + t - 1), o === s && this._sbmh_memcmp(e, r, t - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", !0), this._bufpos = r + t;
            r += this._occ[o];
        }
        if (r < 0) for(; r < 0 && !this._sbmh_memcmp(e, r, a - r);)++r;
        if (!(r >= 0)) {
            const n = this._lookbehind_size + r;
            return n > 0 && this.emit("info", !1, this._lookbehind, 0, n), this._lookbehind.copy(this._lookbehind, 0, n, this._lookbehind_size - n), this._lookbehind_size -= n, e.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += a, this._bufpos = a, a;
        }
        this.emit("info", !1, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
    }
    if (r += (r >= 0) * this._bufpos, -1 !== e.indexOf(n, r)) return r = e.indexOf(n, r), ++this.matches, r > 0 ? this.emit("info", !0, e, this._bufpos, r) : this.emit("info", !0), this._bufpos = r + t;
    for(r = a - t; r < a && (e[r] !== n[0] || 0 !== Buffer.compare(e.subarray(r, r + a - r), n.subarray(0, a - r)));)++r;
    return r < a && (e.copy(this._lookbehind, 0, r, r + (a - r)), this._lookbehind_size = a - r), r > 0 && this.emit("info", !1, e, this._bufpos, r < a ? r : a), this._bufpos = a, a;
}, s.prototype._sbmh_lookup_char = function(e, a) {
    return a < 0 ? this._lookbehind[this._lookbehind_size + a] : e[a];
}, s.prototype._sbmh_memcmp = function(e, a, n) {
    for(var t = 0; t < n; ++t)if (this._sbmh_lookup_char(e, a + t) !== this._needle[t]) return !1;
    return !0;
}, module.exports = s;
