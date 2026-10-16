var n = require("./module-5613.js"), o = require("./module-8873.js"), i = require("./module-4977.js"), a = require("./module-3770.js"), u = require("./module-6002.js"), s = require("./module-8500.js"), c = require("./module-850.js"), f = require("./module-646.js"), h = require("./module-5234.js"), l = TypeError, p = h(function() {
    [].keys().reduce(function() {}, void 0);
}), v = !p && c("reduce", l);
n({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: p || v
}, {
    reduce: function(t) {
        a(this);
        try {
            i(t);
        } catch (t) {
            s(this, "throw", t);
        }
        var r = arguments.length < 2, e = r ? void 0 : arguments[1];
        if (v) return f(v, this, r ? [
            t
        ] : [
            t,
            e
        ]);
        var n = u(this), c = 0;
        if (o(n, function(n) {
            r ? (r = !1, e = n) : e = t(e, n, c), c++;
        }, {
            IS_RECORD: !0
        }), r) throw new l("Reduce of empty iterator with no initial value");
        return e;
    }
});
