"use strict";
const n = require("./module-78474.js").EventEmitter;
function s(e) {
    if ("string" == typeof e && (e = Buffer.from(e)), !Buffer.isBuffer(e)) throw new TypeError("The needle has to be a String or a Buffer.");
    const t = e.length;
    if (0 === t) throw new Error("The needle cannot be an empty String/Buffer.");
    if (t > 256) throw new Error("The needle cannot have a length bigger than 256.");
    this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(t), this._lookbehind_size = 0, this._needle = e, this._bufpos = 0, this._lookbehind = Buffer.alloc(t);
    for(var r = 0; r < t - 1; ++r)this._occ[e[r]] = t - 1 - r;
}
(0, require("./module-57975.js").inherits)(s, n), s.prototype.reset = function() {
    this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
}, s.prototype.push = function(e, t) {
    Buffer.isBuffer(e) || (e = Buffer.from(e, "binary"));
    const r = e.length;
    let n;
    for(this._bufpos = t || 0; n !== r && this.matches < this.maxMatches;)n = this._sbmh_feed(e);
    return n;
}, s.prototype._sbmh_feed = function(e) {
    const t = e.length, r = this._needle, n = r.length, s = r[n - 1];
    let o, i = -this._lookbehind_size;
    if (i < 0) {
        for(; i < 0 && i <= t - n;){
            if (o = this._sbmh_lookup_char(e, i + n - 1), o === s && this._sbmh_memcmp(e, i, n - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", !0), this._bufpos = i + n;
            i += this._occ[o];
        }
        if (i < 0) for(; i < 0 && !this._sbmh_memcmp(e, i, t - i);)++i;
        if (!(i >= 0)) {
            const r = this._lookbehind_size + i;
            return r > 0 && this.emit("info", !1, this._lookbehind, 0, r), this._lookbehind.copy(this._lookbehind, 0, r, this._lookbehind_size - r), this._lookbehind_size -= r, e.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += t, this._bufpos = t, t;
        }
        this.emit("info", !1, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
    }
    if (i += (i >= 0) * this._bufpos, -1 !== e.indexOf(r, i)) return i = e.indexOf(r, i), ++this.matches, i > 0 ? this.emit("info", !0, e, this._bufpos, i) : this.emit("info", !0), this._bufpos = i + n;
    for(i = t - n; i < t && (e[i] !== r[0] || 0 !== Buffer.compare(e.subarray(i, i + t - i), r.subarray(0, t - i)));)++i;
    return i < t && (e.copy(this._lookbehind, 0, i, i + (t - i)), this._lookbehind_size = t - i), i > 0 && this.emit("info", !1, e, this._bufpos, i < t ? i : t), this._bufpos = t, t;
}, s.prototype._sbmh_lookup_char = function(e, t) {
    return t < 0 ? this._lookbehind[this._lookbehind_size + t] : e[t];
}, s.prototype._sbmh_memcmp = function(e, t, r) {
    for(var n = 0; n < r; ++n)if (this._sbmh_lookup_char(e, t + n) !== this._needle[n]) return !1;
    return !0;
}, module.exports = s;
