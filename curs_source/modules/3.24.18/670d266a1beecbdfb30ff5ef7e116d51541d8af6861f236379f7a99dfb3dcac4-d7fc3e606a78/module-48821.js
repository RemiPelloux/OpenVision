exports.read = function(e, t, i, a, n) {
    var r, o, s = 8 * n - a - 1, f = (1 << s) - 1, p = f >> 1, m = -7, l = i ? n - 1 : 0, c = i ? -1 : 1, u = e[t + l];
    for(l += c, r = u & (1 << -m) - 1, u >>= -m, m += s; m > 0; r = 256 * r + e[t + l], l += c, m -= 8);
    for(o = r & (1 << -m) - 1, r >>= -m, m += a; m > 0; o = 256 * o + e[t + l], l += c, m -= 8);
    if (0 === r) r = 1 - p;
    else {
        if (r === f) return o ? NaN : 1 / 0 * (u ? -1 : 1);
        o += Math.pow(2, a), r -= p;
    }
    return (u ? -1 : 1) * o * Math.pow(2, r - a);
}, exports.write = function(e, t, i, a, n, r) {
    var o, s, f, p = 8 * r - n - 1, m = (1 << p) - 1, l = m >> 1, c = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, u = a ? 0 : r - 1, d = a ? 1 : -1, h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
    for(t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = m) : (o = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -o)) < 1 && (o--, f *= 2), (t += o + l >= 1 ? c / f : c * Math.pow(2, 1 - l)) * f >= 2 && (o++, f /= 2), o + l >= m ? (s = 0, o = m) : o + l >= 1 ? (s = (t * f - 1) * Math.pow(2, n), o += l) : (s = t * Math.pow(2, l - 1) * Math.pow(2, n), o = 0)); n >= 8; e[i + u] = 255 & s, u += d, s /= 256, n -= 8);
    for(o = o << n | s, p += n; p > 0; e[i + u] = 255 & o, u += d, o /= 256, p -= 8);
    e[i + u - d] |= 128 * h;
};
