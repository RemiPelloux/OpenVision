"use strict";
const n = require("./module-8474.js").EventEmitter;
function s(t) {
    if ("string" == typeof t && (t = Buffer.from(t)), !Buffer.isBuffer(t)) throw new TypeError("The needle has to be a String or a Buffer.");
    const e = t.length;
    if (0 === e) throw new Error("The needle cannot be an empty String/Buffer.");
    if (e > 256) throw new Error("The needle cannot have a length bigger than 256.");
    this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(e), this._lookbehind_size = 0, this._needle = t, this._bufpos = 0, this._lookbehind = Buffer.alloc(e);
    for(var r = 0; r < e - 1; ++r)this._occ[t[r]] = e - 1 - r;
}
(0, require("./module-7975.js").inherits)(s, n), s.prototype.reset = function() {
    this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
}, s.prototype.push = function(t, e) {
    Buffer.isBuffer(t) || (t = Buffer.from(t, "binary"));
    const r = t.length;
    let n;
    for(this._bufpos = e || 0; n !== r && this.matches < this.maxMatches;)n = this._sbmh_feed(t);
    return n;
}, s.prototype._sbmh_feed = function(t) {
    const e = t.length, r = this._needle, n = r.length, s = r[n - 1];
    let i, o = -this._lookbehind_size;
    if (o < 0) {
        for(; o < 0 && o <= e - n;){
            if (i = this._sbmh_lookup_char(t, o + n - 1), i === s && this._sbmh_memcmp(t, o, n - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", !0), this._bufpos = o + n;
            o += this._occ[i];
        }
        if (o < 0) for(; o < 0 && !this._sbmh_memcmp(t, o, e - o);)++o;
        if (!(o >= 0)) {
            const r = this._lookbehind_size + o;
            return r > 0 && this.emit("info", !1, this._lookbehind, 0, r), this._lookbehind.copy(this._lookbehind, 0, r, this._lookbehind_size - r), this._lookbehind_size -= r, t.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += e, this._bufpos = e, e;
        }
        this.emit("info", !1, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
    }
    if (o += (o >= 0) * this._bufpos, -1 !== t.indexOf(r, o)) return o = t.indexOf(r, o), ++this.matches, o > 0 ? this.emit("info", !0, t, this._bufpos, o) : this.emit("info", !0), this._bufpos = o + n;
    for(o = e - n; o < e && (t[o] !== r[0] || 0 !== Buffer.compare(t.subarray(o, o + e - o), r.subarray(0, e - o)));)++o;
    return o < e && (t.copy(this._lookbehind, 0, o, o + (e - o)), this._lookbehind_size = e - o), o > 0 && this.emit("info", !1, t, this._bufpos, o < e ? o : e), this._bufpos = e, e;
}, s.prototype._sbmh_lookup_char = function(t, e) {
    return e < 0 ? this._lookbehind[this._lookbehind_size + e] : t[e];
}, s.prototype._sbmh_memcmp = function(t, e, r) {
    for(var n = 0; n < r; ++n)if (this._sbmh_lookup_char(t, e + n) !== this._needle[n]) return !1;
    return !0;
}, module.exports = s;
