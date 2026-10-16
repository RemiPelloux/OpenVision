"use strict";
var n = require("./module-30129.js").Buffer;
function o(e, t) {
    this.iconv = t;
}
exports.utf7 = o, exports.unicode11utf7 = "utf7", o.prototype.encoder = i, o.prototype.decoder = a, o.prototype.bomAware = !0;
var s = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
function i(e, t) {
    this.iconv = t.iconv;
}
function a(e, t) {
    this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = "";
}
i.prototype.write = function(e) {
    return n.from(e.replace(s, (function(e) {
        return "+" + ("+" === e ? "" : this.iconv.encode(e, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
    }).bind(this)));
}, i.prototype.end = function() {};
for(var l = /[A-Za-z0-9\/+]/, c = [], u = 0; u < 256; u++)c[u] = l.test(String.fromCharCode(u));
var d = "+".charCodeAt(0), p = "-".charCodeAt(0), h = "&".charCodeAt(0);
function m(e, t) {
    this.iconv = t;
}
function f(e, t) {
    this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = n.alloc(6), this.base64AccumIdx = 0;
}
function g(e, t) {
    this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = "";
}
a.prototype.write = function(e) {
    for(var t = "", r = 0, o = this.inBase64, s = this.base64Accum, i = 0; i < e.length; i++)if (o) {
        if (!c[e[i]]) {
            if (i == r && e[i] == p) t += "+";
            else {
                var a = s + this.iconv.decode(e.slice(r, i), "ascii");
                t += this.iconv.decode(n.from(a, "base64"), "utf16-be");
            }
            e[i] != p && i--, r = i + 1, o = !1, s = "";
        }
    } else e[i] == d && (t += this.iconv.decode(e.slice(r, i), "ascii"), r = i + 1, o = !0);
    if (o) {
        var l = (a = s + this.iconv.decode(e.slice(r), "ascii")).length - a.length % 8;
        s = a.slice(l), a = a.slice(0, l), t += this.iconv.decode(n.from(a, "base64"), "utf16-be");
    } else t += this.iconv.decode(e.slice(r), "ascii");
    return this.inBase64 = o, this.base64Accum = s, t;
}, a.prototype.end = function() {
    var e = "";
    return this.inBase64 && this.base64Accum.length > 0 && (e = this.iconv.decode(n.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", e;
}, exports.utf7imap = m, m.prototype.encoder = f, m.prototype.decoder = g, m.prototype.bomAware = !0, f.prototype.write = function(e) {
    for(var t = this.inBase64, r = this.base64Accum, o = this.base64AccumIdx, s = n.alloc(5 * e.length + 10), i = 0, a = 0; a < e.length; a++){
        var l = e.charCodeAt(a);
        l >= 32 && l <= 126 ? (t && (o > 0 && (i += s.write(r.slice(0, o).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), i), o = 0), s[i++] = p, t = !1), t || (s[i++] = l, l === h && (s[i++] = p))) : (t || (s[i++] = h, t = !0), t && (r[o++] = l >> 8, r[o++] = 255 & l, o == r.length && (i += s.write(r.toString("base64").replace(/\//g, ","), i), o = 0)));
    }
    return this.inBase64 = t, this.base64AccumIdx = o, s.slice(0, i);
}, f.prototype.end = function() {
    var e = n.alloc(10), t = 0;
    return this.inBase64 && (this.base64AccumIdx > 0 && (t += e.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), t), this.base64AccumIdx = 0), e[t++] = p, this.inBase64 = !1), e.slice(0, t);
};
var y = c.slice();
y[",".charCodeAt(0)] = !0, g.prototype.write = function(e) {
    for(var t = "", r = 0, o = this.inBase64, s = this.base64Accum, i = 0; i < e.length; i++)if (o) {
        if (!y[e[i]]) {
            if (i == r && e[i] == p) t += "&";
            else {
                var a = s + this.iconv.decode(e.slice(r, i), "ascii").replace(/,/g, "/");
                t += this.iconv.decode(n.from(a, "base64"), "utf16-be");
            }
            e[i] != p && i--, r = i + 1, o = !1, s = "";
        }
    } else e[i] == h && (t += this.iconv.decode(e.slice(r, i), "ascii"), r = i + 1, o = !0);
    if (o) {
        var l = (a = s + this.iconv.decode(e.slice(r), "ascii").replace(/,/g, "/")).length - a.length % 8;
        s = a.slice(l), a = a.slice(0, l), t += this.iconv.decode(n.from(a, "base64"), "utf16-be");
    } else t += this.iconv.decode(e.slice(r), "ascii");
    return this.inBase64 = o, this.base64Accum = s, t;
}, g.prototype.end = function() {
    var e = "";
    return this.inBase64 && this.base64Accum.length > 0 && (e = this.iconv.decode(n.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", e;
};
