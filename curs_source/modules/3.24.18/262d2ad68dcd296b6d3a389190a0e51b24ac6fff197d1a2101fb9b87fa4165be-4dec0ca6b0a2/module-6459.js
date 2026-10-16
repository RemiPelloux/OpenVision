"use strict";
var n = require("./module-30129.js").Buffer;
function o(e, t) {
    if (!e) throw new Error("SBCS codec is called without the data.");
    if (!e.chars || 128 !== e.chars.length && 256 !== e.chars.length) throw new Error("Encoding '" + e.type + "' has incorrect 'chars' (must be of len 128 or 256)");
    if (128 === e.chars.length) {
        for(var r = "", o = 0; o < 128; o++)r += String.fromCharCode(o);
        e.chars = r + e.chars;
    }
    this.decodeBuf = n.from(e.chars, "ucs2");
    var s = n.alloc(65536, t.defaultCharSingleByte.charCodeAt(0));
    for(o = 0; o < e.chars.length; o++)s[e.chars.charCodeAt(o)] = o;
    this.encodeBuf = s;
}
function s(e, t) {
    this.encodeBuf = t.encodeBuf;
}
function i(e, t) {
    this.decodeBuf = t.decodeBuf;
}
exports._sbcs = o, o.prototype.encoder = s, o.prototype.decoder = i, s.prototype.write = function(e) {
    for(var t = n.alloc(e.length), r = 0; r < e.length; r++)t[r] = this.encodeBuf[e.charCodeAt(r)];
    return t;
}, s.prototype.end = function() {}, i.prototype.write = function(e) {
    for(var t = this.decodeBuf, r = n.alloc(2 * e.length), o = 0, s = 0, i = 0; i < e.length; i++)o = 2 * e[i], r[s = 2 * i] = t[o], r[s + 1] = t[o + 1];
    return r.toString("ucs2");
}, i.prototype.end = function() {};
