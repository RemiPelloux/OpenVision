var n = require("./module-5613.js"), o = require("./module-9117.js"), i = require("./module-286.js"), a = require("./module-3770.js"), u = require("./module-4188.js"), s = require("./module-1786.js"), c = require("./module-997.js"), f = require("./module-4417.js"), h = require("./module-5234.js"), l = require("./module-4418.js"), p = require("./module-4282.js"), v = require("./module-2037.js").IteratorPrototype, d = require("./module-6893.js"), g = require("./module-1942.js"), y = "constructor", w = "Iterator", x = p("toStringTag"), m = TypeError, b = o[w], S = g || !u(b) || b.prototype !== v || !h(function() {
    b({});
}), O = function() {
    if (i(this, v), s(this) === v) throw new m("Abstract class Iterator not directly constructable");
}, E = function(t, r) {
    d ? c(v, t, {
        configurable: !0,
        get: function() {
            return r;
        },
        set: function(r) {
            if (a(this), this === v) throw new m("You can't redefine this property");
            l(this, t) ? this[t] = r : f(this, t, r);
        }
    }) : v[t] = r;
};
l(v, x) || E(x, w), !S && l(v, y) && v[y] !== Object || E(y, O), O.prototype = v, n({
    global: !0,
    constructor: !0,
    forced: S
}, {
    Iterator: O
});
