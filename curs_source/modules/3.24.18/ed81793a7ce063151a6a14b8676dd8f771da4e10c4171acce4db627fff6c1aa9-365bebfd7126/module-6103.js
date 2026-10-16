var r = Array, e = Math.abs, n = Math.pow, o = Math.floor, i = Math.log, a = Math.LN2;
module.exports = {
    pack: function(t, u, s) {
        var c, f, h, l = r(s), p = 8 * s - u - 1, v = (1 << p) - 1, d = v >> 1, g = 23 === u ? n(2, -24) - n(2, -77) : 0, y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0, w = 0;
        for((t = e(t)) != t || t === 1 / 0 ? (f = t != t ? 1 : 0, c = v) : (c = o(i(t) / a), t * (h = n(2, -c)) < 1 && (c--, h *= 2), (t += c + d >= 1 ? g / h : g * n(2, 1 - d)) * h >= 2 && (c++, h /= 2), c + d >= v ? (f = 0, c = v) : c + d >= 1 ? (f = (t * h - 1) * n(2, u), c += d) : (f = t * n(2, d - 1) * n(2, u), c = 0)); u >= 8;)l[w++] = 255 & f, f /= 256, u -= 8;
        for(c = c << u | f, p += u; p > 0;)l[w++] = 255 & c, c /= 256, p -= 8;
        return l[w - 1] |= 128 * y, l;
    },
    unpack: function(t, r) {
        var e, o = t.length, i = 8 * o - r - 1, a = (1 << i) - 1, u = a >> 1, s = i - 7, c = o - 1, f = t[c--], h = 127 & f;
        for(f >>= 7; s > 0;)h = 256 * h + t[c--], s -= 8;
        for(e = h & (1 << -s) - 1, h >>= -s, s += r; s > 0;)e = 256 * e + t[c--], s -= 8;
        if (0 === h) h = 1 - u;
        else {
            if (h === a) return e ? NaN : f ? -1 / 0 : 1 / 0;
            e += n(2, r), h -= u;
        }
        return (f ? -1 : 1) * e * n(2, h - r);
    }
};
