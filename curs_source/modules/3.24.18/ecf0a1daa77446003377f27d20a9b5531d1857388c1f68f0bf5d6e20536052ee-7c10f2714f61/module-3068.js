var s = require("./module-6518.js"), n = require("./module-9504.js"), r = require("./module-2652.js"), a = RangeError, o = TypeError, l = 1 / 0, h = Math.abs, c = Math.pow, d = n([].push), u = c(2, 1023), p = c(2, 53) - 1, g = Number.MAX_VALUE, m = c(2, 971), f = {}, b = {}, v = {}, y = {}, w = {}, x = function(t, e) {
    var i = t + e;
    return {
        hi: i,
        lo: e - (i - t)
    };
};
s({
    target: "Math",
    stat: !0
}, {
    sumPrecise: function(t) {
        var e = [], i = 0, s = y;
        switch(r(t, function(t) {
            if (++i >= p) throw new a("Maximum allowed index exceeded");
            if ("number" != typeof t) throw new o("Value is not a number");
            s !== f && (t != t ? s = f : t === l ? s = s === b ? f : v : t === -1 / 0 ? s = s === v ? f : b : 0 === t && 1 / t !== l || s !== y && s !== w || (s = w, d(e, t)));
        }), s){
            case f:
                return NaN;
            case b:
                return -1 / 0;
            case v:
                return l;
            case y:
                return -0;
        }
        for(var n, c, A, _, S, E, C = [], T = 0, M = 0; M < e.length; M++){
            n = e[M];
            for(var k = 0, D = 0; D < C.length; D++){
                if (c = C[D], h(n) < h(c) && (E = n, n = c, c = E), _ = (A = x(n, c)).hi, S = A.lo, h(_) === l) {
                    var P = _ === l ? 1 : -1;
                    T += P, h(n = n - P * u - P * u) < h(c) && (E = n, n = c, c = E), _ = (A = x(n, c)).hi, S = A.lo;
                }
                0 !== S && (C[k++] = S), n = _;
            }
            C.length = k, 0 !== n && d(C, n);
        }
        var I = C.length - 1;
        if (_ = 0, S = 0, 0 !== T) {
            var R = I >= 0 ? C[I] : 0;
            if (I--, h(T) > 1 || T > 0 && R > 0 || T < 0 && R < 0) return T > 0 ? l : -1 / 0;
            if (_ = (A = x(T * u, R / 2)).hi, S = A.lo, S *= 2, h(2 * _) === l) return _ > 0 ? _ === u && S === -m / 2 && I >= 0 && C[I] < 0 ? g : l : _ === -u && S === m / 2 && I >= 0 && C[I] > 0 ? -g : -1 / 0;
            0 !== S && (C[++I] = S, S = 0), _ *= 2;
        }
        for(; I >= 0 && (_ = (A = x(_, C[I--])).hi, 0 === (S = A.lo)););
        return I >= 0 && (S < 0 && C[I] < 0 || S > 0 && C[I] > 0) && (c = 2 * S) === (n = _ + c) - _ && (_ = n), _;
    }
});
