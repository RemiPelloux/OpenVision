var s = require("./module-6080.js"), n = require("./module-9565.js"), r = require("./module-8551.js"), a = require("./module-6823.js"), o = require("./module-4209.js"), l = require("./module-6198.js"), h = require("./module-1625.js"), c = require("./module-81.js"), d = require("./module-851.js"), u = require("./module-9539.js"), p = TypeError, g = function(t, e) {
    this.stopped = t, this.result = e;
}, m = g.prototype;
module.exports = function(t, e, i) {
    var f, b, v, y, w, x, A, _ = i && i.that, S = !(!i || !i.AS_ENTRIES), E = !(!i || !i.IS_RECORD), C = !(!i || !i.IS_ITERATOR), T = !(!i || !i.INTERRUPTED), M = s(e, _), k = function(t) {
        return f && u(f, "normal"), new g(!0, t);
    }, D = function(t) {
        return S ? (r(t), T ? M(t[0], t[1], k) : M(t[0], t[1])) : T ? M(t, k) : M(t);
    };
    if (E) f = t.iterator;
    else if (C) f = t;
    else {
        if (!(b = d(t))) throw new p(a(t) + " is not iterable");
        if (o(b)) {
            for(v = 0, y = l(t); y > v; v++)if ((w = D(t[v])) && h(m, w)) return w;
            return new g(!1);
        }
        f = c(t, b);
    }
    for(x = E ? t.next : f.next; !(A = n(x, f)).done;){
        try {
            w = D(A.value);
        } catch (t) {
            u(f, "throw", t);
        }
        if ("object" == typeof w && w && h(m, w)) return w;
    }
    return new g(!1);
};
