"use strict";
var n = require("./module-30129.js").Buffer;
function s(e, t) {
    this.iconv = t;
}
exports.utf7 = s, exports.unicode11utf7 = "utf7", s.prototype.encoder = i, s.prototype.decoder = a, s.prototype.bomAware = !0;
var o = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
function i(e, t) {
    this.iconv = t.iconv;
}
function a(e, t) {
    this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = "";
}
i.prototype.write = function(e) {
    return n.from(e.replace(o, (function(e) {
        return "+" + ("+" === e ? "" : this.iconv.encode(e, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
    }).bind(this)));
}, i.prototype.end = function() {};
for(var c = /[A-Za-z0-9\/+]/, l = [], u = 0; u < 256; u++)l[u] = c.test(String.fromCharCode(u));
var d = "+".charCodeAt(0), p = "-".charCodeAt(0), m = "&".charCodeAt(0);
function h(e, t) {
    this.iconv = t;
}
function f(e, t) {
    this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = n.alloc(6), this.base64AccumIdx = 0;
}
function g(e, t) {
    this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = "";
}
a.prototype.write = function(e) {
    for(var t = "", r = 0, s = this.inBase64, o = this.base64Accum, i = 0; i < e.length; i++)if (s) {
        if (!l[e[i]]) {
            if (i == r && e[i] == p) t += "+";
            else {
                var a = o + this.iconv.decode(e.slice(r, i), "ascii");
                t += this.iconv.decode(n.from(a, "base64"), "utf16-be");
            }
            e[i] != p && i--, r = i + 1, s = !1, o = "";
        }
    } else e[i] == d && (t += this.iconv.decode(e.slice(r, i), "ascii"), r = i + 1, s = !0);
    if (s) {
        var c = (a = o + this.iconv.decode(e.slice(r), "ascii")).length - a.length % 8;
        o = a.slice(c), a = a.slice(0, c), t += this.iconv.decode(n.from(a, "base64"), "utf16-be");
    } else t += this.iconv.decode(e.slice(r), "ascii");
    return this.inBase64 = s, this.base64Accum = o, t;
}, a.prototype.end = function() {
    var e = "";
    return this.inBase64 && this.base64Accum.length > 0 && (e = this.iconv.decode(n.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", e;
}, exports.utf7imap = h, h.prototype.encoder = f, h.prototype.decoder = g, h.prototype.bomAware = !0, f.prototype.write = function(e) {
    for(var t = this.inBase64, r = this.base64Accum, s = this.base64AccumIdx, o = n.alloc(5 * e.length + 10), i = 0, a = 0; a < e.length; a++){
        var c = e.charCodeAt(a);
        c >= 32 && c <= 126 ? (t && (s > 0 && (i += o.write(r.slice(0, s).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), i), s = 0), o[i++] = p, t = !1), t || (o[i++] = c, c === m && (o[i++] = p))) : (t || (o[i++] = m, t = !0), t && (r[s++] = c >> 8, r[s++] = 255 & c, s == r.length && (i += o.write(r.toString("base64").replace(/\//g, ","), i), s = 0)));
    }
    return this.inBase64 = t, this.base64AccumIdx = s, o.slice(0, i);
}, f.prototype.end = function() {
    var e = n.alloc(10), t = 0;
    return this.inBase64 && (this.base64AccumIdx > 0 && (t += e.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), t), this.base64AccumIdx = 0), e[t++] = p, this.inBase64 = !1), e.slice(0, t);
};
var y = l.slice();
y[",".charCodeAt(0)] = !0, g.prototype.write = function(e) {
    for(var t = "", r = 0, s = this.inBase64, o = this.base64Accum, i = 0; i < e.length; i++)if (s) {
        if (!y[e[i]]) {
            if (i == r && e[i] == p) t += "&";
            else {
                var a = o + this.iconv.decode(e.slice(r, i), "ascii").replace(/,/g, "/");
                t += this.iconv.decode(n.from(a, "base64"), "utf16-be");
            }
            e[i] != p && i--, r = i + 1, s = !1, o = "";
        }
    } else e[i] == m && (t += this.iconv.decode(e.slice(r, i), "ascii"), r = i + 1, s = !0);
    if (s) {
        var c = (a = o + this.iconv.decode(e.slice(r), "ascii").replace(/,/g, "/")).length - a.length % 8;
        o = a.slice(c), a = a.slice(0, c), t += this.iconv.decode(n.from(a, "base64"), "utf16-be");
    } else t += this.iconv.decode(e.slice(r), "ascii");
    return this.inBase64 = s, this.base64Accum = o, t;
}, g.prototype.end = function() {
    var e = "";
    return this.inBase64 && this.base64Accum.length > 0 && (e = this.iconv.decode(n.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", e;
};
