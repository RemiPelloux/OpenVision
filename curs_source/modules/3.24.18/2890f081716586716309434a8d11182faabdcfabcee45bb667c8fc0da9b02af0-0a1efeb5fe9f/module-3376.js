"use strict";
var n = require("./module-7353.js"), a = !0, i = !0;
try {
    String.fromCharCode.apply(null, [
        0
    ]);
} catch (e) {
    a = !1;
}
try {
    String.fromCharCode.apply(null, new Uint8Array(1));
} catch (e) {
    i = !1;
}
for(var o = new n.Buf8(256), s = 0; s < 256; s++)o[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
function f(e, t) {
    if (t < 65534 && (e.subarray && i || !e.subarray && a)) return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
    for(var r = "", o = 0; o < t; o++)r += String.fromCharCode(e[o]);
    return r;
}
o[254] = o[254] = 1, exports.string2buf = function(e) {
    var t, r, a, i, o, s = e.length, f = 0;
    for(i = 0; i < s; i++)55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (a = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (a - 56320), i++), f += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
    for(t = new n.Buf8(f), o = 0, i = 0; o < f; i++)55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (a = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (a - 56320), i++), r < 128 ? t[o++] = r : r < 2048 ? (t[o++] = 192 | r >>> 6, t[o++] = 128 | 63 & r) : r < 65536 ? (t[o++] = 224 | r >>> 12, t[o++] = 128 | r >>> 6 & 63, t[o++] = 128 | 63 & r) : (t[o++] = 240 | r >>> 18, t[o++] = 128 | r >>> 12 & 63, t[o++] = 128 | r >>> 6 & 63, t[o++] = 128 | 63 & r);
    return t;
}, exports.buf2binstring = function(e) {
    return f(e, e.length);
}, exports.binstring2buf = function(e) {
    for(var t = new n.Buf8(e.length), r = 0, a = t.length; r < a; r++)t[r] = e.charCodeAt(r);
    return t;
}, exports.buf2string = function(e, t) {
    var r, n, a, i, s = t || e.length, l = new Array(2 * s);
    for(n = 0, r = 0; r < s;)if ((a = e[r++]) < 128) l[n++] = a;
    else if ((i = o[a]) > 4) l[n++] = 65533, r += i - 1;
    else {
        for(a &= 2 === i ? 31 : 3 === i ? 15 : 7; i > 1 && r < s;)a = a << 6 | 63 & e[r++], i--;
        i > 1 ? l[n++] = 65533 : a < 65536 ? l[n++] = a : (a -= 65536, l[n++] = 55296 | a >> 10 & 1023, l[n++] = 56320 | 1023 & a);
    }
    return f(l, n);
}, exports.utf8border = function(e, t) {
    var r;
    for((t = t || e.length) > e.length && (t = e.length), r = t - 1; r >= 0 && 128 == (192 & e[r]);)r--;
    return r < 0 || 0 === r ? t : r + o[e[r]] > t ? r : t;
};
