"use strict";
var n = require("./module-5636.js").Buffer, r = require("./module-8366.js"), o = 128;
function s(e) {
    if (n.isBuffer(e)) return e;
    if ("string" == typeof e) return n.from(e, "base64");
    throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
}
function i(e, t, A) {
    for(var n = 0; t + n < A && 0 === e[t + n];)++n;
    return e[t + n] >= o && --n, n;
}
module.exports = {
    derToJose: function(e, t) {
        e = s(e);
        var A = r(t), o = A + 1, i = e.length, a = 0;
        if (48 !== e[a++]) throw new Error('Could not find expected "seq"');
        var c = e[a++];
        if (129 === c && (c = e[a++]), i - a < c) throw new Error('"seq" specified length of "' + c + '", only "' + (i - a) + '" remaining');
        if (2 !== e[a++]) throw new Error('Could not find expected "int" for "r"');
        var l = e[a++];
        if (i - a - 2 < l) throw new Error('"r" specified length of "' + l + '", only "' + (i - a - 2) + '" available');
        if (o < l) throw new Error('"r" specified length of "' + l + '", max of "' + o + '" is acceptable');
        var u = a;
        if (a += l, 2 !== e[a++]) throw new Error('Could not find expected "int" for "s"');
        var g = e[a++];
        if (i - a !== g) throw new Error('"s" specified length of "' + g + '", expected "' + (i - a) + '"');
        if (o < g) throw new Error('"s" specified length of "' + g + '", max of "' + o + '" is acceptable');
        var E = a;
        if ((a += g) !== i) throw new Error('Expected to consume entire buffer, but "' + (i - a) + '" bytes remain');
        var h = A - l, d = A - g, I = n.allocUnsafe(h + l + d + g);
        for(a = 0; a < h; ++a)I[a] = 0;
        e.copy(I, a, u + Math.max(-h, 0), u + l);
        for(var B = a = A; a < B + d; ++a)I[a] = 0;
        return e.copy(I, a, E + Math.max(-d, 0), E + g), I = (I = I.toString("base64")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    },
    joseToDer: function(e, t) {
        e = s(e);
        var A = r(t), a = e.length;
        if (a !== 2 * A) throw new TypeError('"' + t + '" signatures must be "' + 2 * A + '" bytes, saw "' + a + '"');
        var c = i(e, 0, A), l = i(e, A, e.length), u = A - c, g = A - l, E = 2 + u + 1 + 1 + g, h = E < o, d = n.allocUnsafe((h ? 2 : 3) + E), I = 0;
        return d[I++] = 48, h ? d[I++] = E : (d[I++] = 129, d[I++] = 255 & E), d[I++] = 2, d[I++] = u, c < 0 ? (d[I++] = 0, I += e.copy(d, I, 0, A)) : I += e.copy(d, I, c, A), d[I++] = 2, d[I++] = g, l < 0 ? (d[I++] = 0, e.copy(d, I, A)) : e.copy(d, I, A + l), d;
    }
};
