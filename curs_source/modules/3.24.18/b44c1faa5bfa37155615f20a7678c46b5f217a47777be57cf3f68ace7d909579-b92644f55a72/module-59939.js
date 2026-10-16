"use strict";
var n = require("./module-30129.js").Buffer;
function s(e, t) {
    this.iconv = t, this.bomAware = !0, this.isLE = e.isLE;
}
function o(e, t) {
    this.isLE = t.isLE, this.highSurrogate = 0;
}
function i(e, t) {
    this.isLE = t.isLE, this.badChar = t.iconv.defaultCharUnicode.charCodeAt(0), this.overflow = [];
}
function a(e, t, r, n) {
    if ((r < 0 || r > 1114111) && (r = n), r >= 65536) {
        var s = 55296 | (r -= 65536) >> 10;
        e[t++] = 255 & s, e[t++] = s >> 8;
        r = 56320 | 1023 & r;
    }
    return e[t++] = 255 & r, e[t++] = r >> 8, t;
}
function c(e, t) {
    this.iconv = t;
}
function l(e, t) {
    void 0 === (e = e || {}).addBOM && (e.addBOM = !0), this.encoder = t.iconv.getEncoder(e.defaultEncoding || "utf-32le", e);
}
function u(e, t) {
    this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = e || {}, this.iconv = t.iconv;
}
function d(e, t) {
    var r = [], n = 0, s = 0, o = 0, i = 0, a = 0;
    e: for(var c = 0; c < e.length; c++)for(var l = e[c], u = 0; u < l.length; u++)if (r.push(l[u]), 4 === r.length) {
        if (0 === n) {
            if (255 === r[0] && 254 === r[1] && 0 === r[2] && 0 === r[3]) return "utf-32le";
            if (0 === r[0] && 0 === r[1] && 254 === r[2] && 255 === r[3]) return "utf-32be";
        }
        if ((0 !== r[0] || r[1] > 16) && o++, (0 !== r[3] || r[2] > 16) && s++, 0 !== r[0] || 0 !== r[1] || 0 === r[2] && 0 === r[3] || a++, 0 === r[0] && 0 === r[1] || 0 !== r[2] || 0 !== r[3] || i++, r.length = 0, ++n >= 100) break e;
    }
    return a - o > i - s ? "utf-32be" : a - o < i - s ? "utf-32le" : t || "utf-32le";
}
exports._utf32 = s, exports.utf32le = {
    type: "_utf32",
    isLE: !0
}, exports.utf32be = {
    type: "_utf32",
    isLE: !1
}, exports.ucs4le = "utf32le", exports.ucs4be = "utf32be", s.prototype.encoder = o, s.prototype.decoder = i, o.prototype.write = function(e) {
    for(var t = n.from(e, "ucs2"), r = n.alloc(2 * t.length), s = this.isLE ? r.writeUInt32LE : r.writeUInt32BE, o = 0, i = 0; i < t.length; i += 2){
        var a = t.readUInt16LE(i), c = a >= 55296 && a < 56320, l = a >= 56320 && a < 57344;
        if (this.highSurrogate) {
            if (!c && l) {
                var u = 65536 + (this.highSurrogate - 55296 << 10 | a - 56320);
                s.call(r, u, o), o += 4, this.highSurrogate = 0;
                continue;
            }
            s.call(r, this.highSurrogate, o), o += 4;
        }
        c ? this.highSurrogate = a : (s.call(r, a, o), o += 4, this.highSurrogate = 0);
    }
    return o < r.length && (r = r.slice(0, o)), r;
}, o.prototype.end = function() {
    if (this.highSurrogate) {
        var e = n.alloc(4);
        return this.isLE ? e.writeUInt32LE(this.highSurrogate, 0) : e.writeUInt32BE(this.highSurrogate, 0), this.highSurrogate = 0, e;
    }
}, i.prototype.write = function(e) {
    if (0 === e.length) return "";
    var t = 0, r = 0, s = n.alloc(e.length + 4), o = 0, i = this.isLE, c = this.overflow, l = this.badChar;
    if (c.length > 0) {
        for(; t < e.length && c.length < 4; t++)c.push(e[t]);
        4 === c.length && (r = i ? c[t] | c[t + 1] << 8 | c[t + 2] << 16 | c[t + 3] << 24 : c[t + 3] | c[t + 2] << 8 | c[t + 1] << 16 | c[t] << 24, c.length = 0, o = a(s, o, r, l));
    }
    for(; t < e.length - 3; t += 4)o = a(s, o, r = i ? e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24 : e[t + 3] | e[t + 2] << 8 | e[t + 1] << 16 | e[t] << 24, l);
    for(; t < e.length; t++)c.push(e[t]);
    return s.slice(0, o).toString("ucs2");
}, i.prototype.end = function() {
    this.overflow.length = 0;
}, exports.utf32 = c, exports.ucs4 = "utf32", c.prototype.encoder = l, c.prototype.decoder = u, l.prototype.write = function(e) {
    return this.encoder.write(e);
}, l.prototype.end = function() {
    return this.encoder.end();
}, u.prototype.write = function(e) {
    if (!this.decoder) {
        if (this.initialBufs.push(e), this.initialBufsLen += e.length, this.initialBufsLen < 32) return "";
        var t = d(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(t, this.options);
        for(var r = "", n = 0; n < this.initialBufs.length; n++)r += this.decoder.write(this.initialBufs[n]);
        return this.initialBufs.length = this.initialBufsLen = 0, r;
    }
    return this.decoder.write(e);
}, u.prototype.end = function() {
    if (!this.decoder) {
        var e = d(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(e, this.options);
        for(var t = "", r = 0; r < this.initialBufs.length; r++)t += this.decoder.write(this.initialBufs[r]);
        var n = this.decoder.end();
        return n && (t += n), this.initialBufs.length = this.initialBufsLen = 0, t;
    }
    return this.decoder.end();
};
