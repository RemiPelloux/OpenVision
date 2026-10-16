var n = require("./module-5613.js"), o = require("./module-9944.js"), i = require("./module-1942.js"), a = require("./module-2735.js"), u = require("./module-4188.js"), s = require("./module-9383.js"), c = require("./module-1786.js"), f = require("./module-5054.js"), h = require("./module-3754.js"), l = require("./module-8088.js"), p = require("./module-7509.js"), v = require("./module-4282.js"), d = require("./module-9164.js"), g = require("./module-2037.js"), y = a.PROPER, w = a.CONFIGURABLE, x = g.IteratorPrototype, m = g.BUGGY_SAFARI_ITERATORS, b = v("iterator"), S = "keys", O = "values", E = "entries", R = function() {
    return this;
};
module.exports = function(t, r, e, a, v, g, P) {
    s(e, r, a);
    var j, k, I, T = function(t) {
        if (t === v && C) return C;
        if (!m && t && t in N) return N[t];
        switch(t){
            case S:
            case O:
            case E:
                return function() {
                    return new e(this, t);
                };
        }
        return function() {
            return new e(this);
        };
    }, A = r + " Iterator", L = !1, N = t.prototype, U = N[b] || N["@@iterator"] || v && N[v], C = !m && U || T(v), F = "Array" === r && N.entries || U;
    if (F && (j = c(F.call(new t))) !== Object.prototype && j.next && (i || c(j) === x || (f ? f(j, x) : u(j[b]) || p(j, b, R)), h(j, A, !0, !0), i && (d[A] = R)), y && v === O && U && U.name !== O && (!i && w ? l(N, "name", O) : (L = !0, C = function() {
        return o(U, this);
    })), v) if (k = {
        values: T(O),
        keys: g ? C : T(S),
        entries: T(E)
    }, P) for(I in k)(m || L || !(I in N)) && p(N, I, k[I]);
    else n({
        target: r,
        proto: !0,
        forced: m || L
    }, k);
    return i && !P || N[b] === C || p(N, b, C, {
        name: v
    }), d[r] = C, k;
};
