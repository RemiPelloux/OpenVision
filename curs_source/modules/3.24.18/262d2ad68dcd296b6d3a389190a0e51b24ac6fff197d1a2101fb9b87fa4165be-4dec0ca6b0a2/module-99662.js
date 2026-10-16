"use strict";
var n = require("./module-30129.js").Buffer;
function o(e, t) {
    this.enc = e.encodingName, this.bomAware = e.bomAware, "base64" === this.enc ? this.encoder = l : "utf8" === this.enc ? this.encoder = d : "cesu8" === this.enc && (this.enc = "utf8", this.encoder = c, "💩" !== n.from("eda0bdedb2a9", "hex").toString() && (this.decoder = u, this.defaultCharUnicode = t.defaultCharUnicode));
}
module.exports = {
    utf8: {
        type: "_internal",
        bomAware: !0
    },
    cesu8: {
        type: "_internal",
        bomAware: !0
    },
    unicode11utf8: "utf8",
    ucs2: {
        type: "_internal",
        bomAware: !0
    },
    utf16le: "ucs2",
    binary: {
        type: "_internal"
    },
    base64: {
        type: "_internal"
    },
    hex: {
        type: "_internal"
    },
    _internal: o
}, o.prototype.encoder = a, o.prototype.decoder = i;
var s = require("./module-13193.js").StringDecoder;
function i(e, t) {
    this.decoder = new s(t.enc);
}
function a(e, t) {
    this.enc = t.enc;
}
function l(e, t) {
    this.prevStr = "";
}
function c(e, t) {}
function u(e, t) {
    this.acc = 0, this.contBytes = 0, this.accBytes = 0, this.defaultCharUnicode = t.defaultCharUnicode;
}
function d(e, t) {
    this.highSurrogate = "";
}
i.prototype.write = function(e) {
    return n.isBuffer(e) || (e = n.from(e)), this.decoder.write(e);
}, i.prototype.end = function() {
    return this.decoder.end();
}, a.prototype.write = function(e) {
    return n.from(e, this.enc);
}, a.prototype.end = function() {}, l.prototype.write = function(e) {
    var t = (e = this.prevStr + e).length - e.length % 4;
    return this.prevStr = e.slice(t), e = e.slice(0, t), n.from(e, "base64");
}, l.prototype.end = function() {
    return n.from(this.prevStr, "base64");
}, c.prototype.write = function(e) {
    for(var t = n.alloc(3 * e.length), r = 0, o = 0; o < e.length; o++){
        var s = e.charCodeAt(o);
        s < 128 ? t[r++] = s : s < 2048 ? (t[r++] = 192 + (s >>> 6), t[r++] = 128 + (63 & s)) : (t[r++] = 224 + (s >>> 12), t[r++] = 128 + (s >>> 6 & 63), t[r++] = 128 + (63 & s));
    }
    return t.slice(0, r);
}, c.prototype.end = function() {}, u.prototype.write = function(e) {
    for(var t = this.acc, r = this.contBytes, n = this.accBytes, o = "", s = 0; s < e.length; s++){
        var i = e[s];
        128 != (192 & i) ? (r > 0 && (o += this.defaultCharUnicode, r = 0), i < 128 ? o += String.fromCharCode(i) : i < 224 ? (t = 31 & i, r = 1, n = 1) : i < 240 ? (t = 15 & i, r = 2, n = 1) : o += this.defaultCharUnicode) : r > 0 ? (t = t << 6 | 63 & i, n++, 0 === --r && (o += 2 === n && t < 128 && t > 0 || 3 === n && t < 2048 ? this.defaultCharUnicode : String.fromCharCode(t))) : o += this.defaultCharUnicode;
    }
    return this.acc = t, this.contBytes = r, this.accBytes = n, o;
}, u.prototype.end = function() {
    var e = 0;
    return this.contBytes > 0 && (e += this.defaultCharUnicode), e;
}, d.prototype.write = function(e) {
    if (this.highSurrogate && (e = this.highSurrogate + e, this.highSurrogate = ""), e.length > 0) {
        var t = e.charCodeAt(e.length - 1);
        t >= 55296 && t < 56320 && (this.highSurrogate = e[e.length - 1], e = e.slice(0, e.length - 1));
    }
    return n.from(e, this.enc);
}, d.prototype.end = function() {
    if (this.highSurrogate) {
        var e = this.highSurrogate;
        return this.highSurrogate = "", n.from(e, this.enc);
    }
};
