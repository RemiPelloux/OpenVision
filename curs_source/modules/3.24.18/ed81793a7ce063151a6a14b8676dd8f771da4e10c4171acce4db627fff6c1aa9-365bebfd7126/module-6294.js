var n = require("./module-6881.js"), o = 2147483647, i = /[^\0-\u007E]/, a = /[.\u3002\uFF0E\uFF61]/g, u = "Overflow: input needs wider integers to process", s = RangeError, c = n(a.exec), f = Math.floor, h = String.fromCharCode, l = n("".charCodeAt), p = n([].join), v = n([].push), d = n("".replace), g = n("".split), y = n("".toLowerCase), w = function(t) {
    return t + 22 + 75 * (t < 26);
}, x = function(t, r, e) {
    var n = 0;
    for(t = e ? f(t / 700) : t >> 1, t += f(t / r); t > 455;)t = f(t / 35), n += 36;
    return f(n + 36 * t / (t + 38));
}, m = function(t) {
    var r = [];
    t = function(t) {
        for(var r = [], e = 0, n = t.length; e < n;){
            var o = l(t, e++);
            if (o >= 55296 && o <= 56319 && e < n) {
                var i = l(t, e++);
                56320 == (64512 & i) ? v(r, ((1023 & o) << 10) + (1023 & i) + 65536) : (v(r, o), e--);
            } else v(r, o);
        }
        return r;
    }(t);
    var e, n, i = t.length, a = 128, c = 0, d = 72;
    for(e = 0; e < t.length; e++)(n = t[e]) < 128 && v(r, h(n));
    var g = r.length, y = g;
    for(g && v(r, "-"); y < i;){
        var m = o;
        for(e = 0; e < t.length; e++)(n = t[e]) >= a && n < m && (m = n);
        var b = y + 1;
        if (m - a > f((o - c) / b)) throw new s(u);
        for(c += (m - a) * b, a = m, e = 0; e < t.length; e++){
            if ((n = t[e]) < a && ++c > o) throw new s(u);
            if (n === a) {
                for(var S = c, O = 36;;){
                    var E = O <= d ? 1 : O >= d + 26 ? 26 : O - d;
                    if (S < E) break;
                    var R = S - E, P = 36 - E;
                    v(r, h(w(E + R % P))), S = f(R / P), O += 36;
                }
                v(r, h(w(S))), d = x(c, b, y === g), c = 0, y++;
            }
        }
        c++, a++;
    }
    return p(r, "");
};
module.exports = function(t) {
    var r, e, n = [], o = g(d(y(t), a, "."), ".");
    for(r = 0; r < o.length; r++)e = o[r], v(n, c(i, e) ? "xn--" + m(e) : e);
    return p(n, ".");
};
