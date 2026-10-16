var s, n, r, a = require("./module-7811.js"), o = require("./module-3724.js"), l = require("./module-4576.js"), h = require("./module-4901.js"), c = require("./module-34.js"), d = require("./module-9297.js"), u = require("./module-6955.js"), p = require("./module-6823.js"), g = require("./module-6699.js"), m = require("./module-6840.js"), f = require("./module-2106.js"), b = require("./module-1625.js"), v = require("./module-2787.js"), y = require("./module-2967.js"), w = require("./module-8227.js"), x = require("./module-3392.js"), A = require("./module-1181.js"), _ = A.enforce, S = A.get, E = l.Int8Array, C = E && E.prototype, T = l.Uint8ClampedArray, M = T && T.prototype, k = E && v(E), D = C && v(C), P = Object.prototype, I = l.TypeError, R = w("toStringTag"), L = x("TYPED_ARRAY_TAG"), B = "TypedArrayConstructor", F = a && !!y && "Opera" !== u(l.opera), O = !1, N = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
}, U = {
    BigInt64Array: 8,
    BigUint64Array: 8
}, z = function(t) {
    var e = v(t);
    if (c(e)) {
        var i = S(e);
        return i && d(i, B) ? i[B] : z(e);
    }
}, H = function(t) {
    if (!c(t)) return !1;
    var e = u(t);
    return d(N, e) || d(U, e);
};
for(s in N)(r = (n = l[s]) && n.prototype) ? _(r)[B] = n : F = !1;
for(s in U)(r = (n = l[s]) && n.prototype) && (_(r)[B] = n);
if ((!F || !h(k) || k === Function.prototype) && (k = function() {
    throw new I("Incorrect invocation");
}, F)) for(s in N)l[s] && y(l[s], k);
if ((!F || !D || D === P) && (D = k.prototype, F)) for(s in N)l[s] && y(l[s].prototype, D);
if (F && v(M) !== D && y(M, D), o && !d(D, R)) for(s in O = !0, f(D, R, {
    configurable: !0,
    get: function() {
        return c(this) ? this[L] : void 0;
    }
}), N)l[s] && g(l[s], L, s);
module.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: F,
    TYPED_ARRAY_TAG: O && L,
    aTypedArray: function(t) {
        if (H(t)) return t;
        throw new I("Target is not a typed array");
    },
    aTypedArrayConstructor: function(t) {
        if (h(t) && (!y || b(k, t))) return t;
        throw new I(p(t) + " is not a typed array constructor");
    },
    exportTypedArrayMethod: function(t, e, i, s) {
        if (o) {
            if (i) for(var n in N){
                var r = l[n];
                if (r && d(r.prototype, t)) try {
                    delete r.prototype[t];
                } catch (i) {
                    try {
                        r.prototype[t] = e;
                    } catch (t) {}
                }
            }
            D[t] && !i || m(D, t, i ? e : F && C[t] || e, s);
        }
    },
    exportTypedArrayStaticMethod: function(t, e, i) {
        var s, n;
        if (o) {
            if (y) {
                if (i) {
                    for(s in N)if ((n = l[s]) && d(n, t)) try {
                        delete n[t];
                    } catch (t) {}
                }
                if (k[t] && !i) return;
                try {
                    return m(k, t, i ? e : F && k[t] || e);
                } catch (t) {}
            }
            for(s in N)!(n = l[s]) || n[t] && !i || m(n, t, e);
        }
    },
    getTypedArrayConstructor: z,
    isView: function(t) {
        if (!c(t)) return !1;
        var e = u(t);
        return "DataView" === e || d(N, e) || d(U, e);
    },
    isTypedArray: H,
    TypedArray: k,
    TypedArrayPrototype: D
};
