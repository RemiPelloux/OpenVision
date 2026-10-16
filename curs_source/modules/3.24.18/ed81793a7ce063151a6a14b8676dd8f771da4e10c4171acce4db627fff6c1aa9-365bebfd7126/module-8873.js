var n = require("./module-5821.js"), o = require("./module-9944.js"), i = require("./module-3770.js"), a = require("./module-3174.js"), u = require("./module-8146.js"), s = require("./module-9389.js"), c = require("./module-4578.js"), f = require("./module-9042.js"), h = require("./module-4366.js"), l = require("./module-8500.js"), p = TypeError, v = function(t, r) {
    this.stopped = t, this.result = r;
}, d = v.prototype;
module.exports = function(t, r, e) {
    var g, y, w, x, m, b, S, O = e && e.that, E = !(!e || !e.AS_ENTRIES), R = !(!e || !e.IS_RECORD), P = !(!e || !e.IS_ITERATOR), j = !(!e || !e.INTERRUPTED), k = n(r, O), I = function(t) {
        var r = g;
        return g = void 0, r && l(r, "normal"), new v(!0, t);
    }, T = function(t) {
        return E ? (i(t), j ? k(t[0], t[1], I) : k(t[0], t[1])) : j ? k(t, I) : k(t);
    };
    if (R) g = t.iterator;
    else if (P) g = t;
    else {
        if (!(y = h(t))) throw new p(a(t) + " is not iterable");
        if (u(y)) {
            for(w = 0, x = s(t); x > w; w++)if ((m = T(t[w])) && c(d, m)) return m;
            return new v(!1);
        }
        g = f(t, y);
    }
    for(b = R ? t.next : g.next; !(S = o(b, g)).done;){
        var A = S.value;
        try {
            m = T(A);
        } catch (t) {
            if (!g) throw t;
            l(g, "throw", t);
        }
        if ("object" == typeof m && m && c(d, m)) return m;
    }
    return new v(!1);
};
