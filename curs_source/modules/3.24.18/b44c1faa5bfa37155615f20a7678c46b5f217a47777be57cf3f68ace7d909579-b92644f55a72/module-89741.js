"use strict";
var n = require("./module-30129.js").Buffer;
function s() {}
function o() {}
function i() {
    this.overflowByte = -1;
}
function a(e, t) {
    this.iconv = t;
}
function c(e, t) {
    void 0 === (e = e || {}).addBOM && (e.addBOM = !0), this.encoder = t.iconv.getEncoder("utf-16le", e);
}
function l(e, t) {
    this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = e || {}, this.iconv = t.iconv;
}
function u(e, t) {
    var r = [], n = 0, s = 0, o = 0;
    e: for(var i = 0; i < e.length; i++)for(var a = e[i], c = 0; c < a.length; c++)if (r.push(a[c]), 2 === r.length) {
        if (0 === n) {
            if (255 === r[0] && 254 === r[1]) return "utf-16le";
            if (254 === r[0] && 255 === r[1]) return "utf-16be";
        }
        if (0 === r[0] && 0 !== r[1] && o++, 0 !== r[0] && 0 === r[1] && s++, r.length = 0, ++n >= 100) break e;
    }
    return o > s ? "utf-16be" : o < s ? "utf-16le" : t || "utf-16le";
}
exports.utf16be = s, s.prototype.encoder = o, s.prototype.decoder = i, s.prototype.bomAware = !0, o.prototype.write = function(e) {
    for(var t = n.from(e, "ucs2"), r = 0; r < t.length; r += 2){
        var s = t[r];
        t[r] = t[r + 1], t[r + 1] = s;
    }
    return t;
}, o.prototype.end = function() {}, i.prototype.write = function(e) {
    if (0 == e.length) return "";
    var t = n.alloc(e.length + 1), r = 0, s = 0;
    for(-1 !== this.overflowByte && (t[0] = e[0], t[1] = this.overflowByte, r = 1, s = 2); r < e.length - 1; r += 2, s += 2)t[s] = e[r + 1], t[s + 1] = e[r];
    return this.overflowByte = r == e.length - 1 ? e[e.length - 1] : -1, t.slice(0, s).toString("ucs2");
}, i.prototype.end = function() {
    this.overflowByte = -1;
}, exports.utf16 = a, a.prototype.encoder = c, a.prototype.decoder = l, c.prototype.write = function(e) {
    return this.encoder.write(e);
}, c.prototype.end = function() {
    return this.encoder.end();
}, l.prototype.write = function(e) {
    if (!this.decoder) {
        if (this.initialBufs.push(e), this.initialBufsLen += e.length, this.initialBufsLen < 16) return "";
        var t = u(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(t, this.options);
        for(var r = "", n = 0; n < this.initialBufs.length; n++)r += this.decoder.write(this.initialBufs[n]);
        return this.initialBufs.length = this.initialBufsLen = 0, r;
    }
    return this.decoder.write(e);
}, l.prototype.end = function() {
    if (!this.decoder) {
        var e = u(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(e, this.options);
        for(var t = "", r = 0; r < this.initialBufs.length; r++)t += this.decoder.write(this.initialBufs[r]);
        var n = this.decoder.end();
        return n && (t += n), this.initialBufs.length = this.initialBufsLen = 0, t;
    }
    return this.decoder.end();
};
