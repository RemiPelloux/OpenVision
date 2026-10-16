"use strict";
var n = require("./module-30129.js").Buffer;
function s(e, t) {
    if (!e) throw new Error("SBCS codec is called without the data.");
    if (!e.chars || 128 !== e.chars.length && 256 !== e.chars.length) throw new Error("Encoding '" + e.type + "' has incorrect 'chars' (must be of len 128 or 256)");
    if (128 === e.chars.length) {
        for(var r = "", s = 0; s < 128; s++)r += String.fromCharCode(s);
        e.chars = r + e.chars;
    }
    this.decodeBuf = n.from(e.chars, "ucs2");
    var o = n.alloc(65536, t.defaultCharSingleByte.charCodeAt(0));
    for(s = 0; s < e.chars.length; s++)o[e.chars.charCodeAt(s)] = s;
    this.encodeBuf = o;
}
function o(e, t) {
    this.encodeBuf = t.encodeBuf;
}
function i(e, t) {
    this.decodeBuf = t.decodeBuf;
}
exports._sbcs = s, s.prototype.encoder = o, s.prototype.decoder = i, o.prototype.write = function(e) {
    for(var t = n.alloc(e.length), r = 0; r < e.length; r++)t[r] = this.encodeBuf[e.charCodeAt(r)];
    return t;
}, o.prototype.end = function() {}, i.prototype.write = function(e) {
    for(var t = this.decodeBuf, r = n.alloc(2 * e.length), s = 0, o = 0, i = 0; i < e.length; i++)s = 2 * e[i], r[o = 2 * i] = t[s], r[o + 1] = t[s + 1];
    return r.toString("ucs2");
}, i.prototype.end = function() {};
