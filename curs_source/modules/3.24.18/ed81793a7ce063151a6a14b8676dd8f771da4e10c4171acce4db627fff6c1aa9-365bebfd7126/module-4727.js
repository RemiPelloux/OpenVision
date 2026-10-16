var n = require("./module-5613.js"), o = require("./module-5604.js"), i = require("./module-9944.js"), a = require("./module-6881.js"), u = require("./module-5234.js"), s = require("./module-6719.js"), c = require("./module-4188.js"), f = require("./module-831.js"), h = require("./module-7065.js"), l = require("./module-4987.js"), p = require("./module-6032.js"), v = require("./module-8689.js"), d = require("./module-5881.js"), g = require("./module-1458.js").includes, y = require("./module-4418.js"), w = require("./module-2618.js"), x = require("./module-4561.js"), m = require("./module-6209.js"), b = require("./module-8944.js"), S = require("./module-5062.js"), O = String, E = TypeError, R = o("JSON", "stringify"), P = o("BigInt"), j = a("".valueOf), k = a((!0).valueOf), I = P && a(P.prototype.valueOf), T = a(/./.exec), A = a("".charAt), L = a("".charCodeAt), N = a("".replace), U = a("".slice), C = a([].push), F = a([].pop), B = a(1.1.toString), D = /[\uD800-\uDFFF]/g, M = /^[\uD800-\uDBFF]$/, z = /^[\uDC00-\uDFFF]$/, _ = /^\d+$/, H = m(), J = m(), q = m(), G = H.length, V = J.length, W = !b || u(function() {
    var t = o("Symbol")("stringify detection");
    return "[null]" !== R([
        t
    ]) || "{}" !== R({
        a: t
    }) || "{}" !== R(Object(t));
}), $ = u(function() {
    return '"\\udf06\\ud834"' !== R("\udf06\ud834") || '"\\udead"' !== R("\udead");
}), K = S ? o("JSON", "isRawJSON") : l, Y = W ? function(t, r, e) {
    return R(t, function(t, e) {
        var n = i(r, this, t, e);
        if (!p(n)) return n;
    }, e);
} : R, Q = function(t, r, e) {
    var n = A(e, r - 1), o = A(e, r + 1);
    return T(M, t) && !T(z, o) || T(z, t) && !T(M, n) ? "\\u" + B(L(t, 0), 16) : t;
}, X = function(t, r) {
    try {
        return t(r), !0;
    } catch (t) {
        return !1;
    }
}, Z = function(t) {
    if (!f(t) || c(t) || s(t)) return !1;
    try {
        return !function(t) {
            var r = v(t);
            return "Number" === r && X(d, t) || "String" === r && X(j, t) || "Boolean" === r && X(k, t) || !!I && "BigInt" === r && X(I, t);
        }(t);
    } catch (t) {
        return !0;
    }
}, tt = function(t, r) {
    return {
        toJSON: function() {
            var e = t[r];
            if (f(e) || "bigint" == typeof e) {
                var n = e.toJSON;
                c(n) && (e = i(n, e, r));
            }
            return e;
        }
    };
};
R && n({
    target: "JSON",
    stat: !0,
    arity: 3,
    forced: W || $ || !S
}, {
    stringify: function(t, r, e) {
        var n, o = c(r) ? r : void 0, a = o ? void 0 : function(t) {
            if (s(t)) {
                for(var r = t.length, e = [], n = h(null), o = 0; o < r; o++){
                    var i, a = t[o];
                    if ("string" == typeof a) i = a;
                    else {
                        if ("number" != typeof a && "Number" !== v(a) && "String" !== v(a)) continue;
                        i = w(a);
                    }
                    y(n, i) || (n[i] = !0, C(e, i));
                }
                return e;
            }
        }(r), u = a && function(t) {
            for(var r = 0, e = t.length; r < e; r++)if (T(_, t[r])) return J;
            return "";
        }(a), f = [], l = [], p = [], d = !1, m = !0, b = Y(t, function(t, r) {
            if (t = O(t), a) {
                if (t === q) return F(l), void (n = F(p));
                if (m) m = !1;
                else if (this !== n && !s(this) && !g(a, t)) return;
            } else o && (r = i(o, this, t, r));
            if (K(r)) return S ? r : (d = !0, H + (C(f, r.rawJSON) - 1));
            if (a && Z(r)) {
                if (g(l, r)) throw new E("Converting circular structure to JSON");
                var e = function(t, r, e) {
                    for(var n = h(null), o = 0, i = r.length; o < i; o++){
                        var a = r[o];
                        n[e + a] = tt(t, a);
                    }
                    return n[q] = null, n;
                }(r, a, u);
                return C(l, r), C(p, n), n = e, u && (d = !0), e;
            }
            return r;
        }, e);
        if ("string" != typeof b) return b;
        if ($ && (b = N(b, D, Q)), !d) return b;
        for(var R = "", P = b.length, j = 0; j < P; j++){
            var k = A(b, j);
            if ('"' === k) {
                var I = x(b, ++j).end - 1, L = U(b, j, I);
                U(L, 0, G) === H ? R += f[U(L, G)] : U(L, 0, V) === J ? R += '"' + U(L, V) + '"' : R += '"' + L + '"', j = I;
            } else R += k;
        }
        return R;
    }
});
