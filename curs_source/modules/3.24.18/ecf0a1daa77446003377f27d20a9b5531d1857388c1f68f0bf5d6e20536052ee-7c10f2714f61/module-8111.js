var s = require("./module-6518.js"), n = require("./module-4576.js"), r = require("./module-679.js"), a = require("./module-8551.js"), o = require("./module-4901.js"), l = require("./module-2787.js"), h = require("./module-2106.js"), c = require("./module-4659.js"), d = require("./module-9039.js"), u = require("./module-9297.js"), p = require("./module-8227.js"), g = require("./module-7657.js").IteratorPrototype, m = require("./module-3724.js"), f = require("./module-6395.js"), b = "constructor", v = "Iterator", y = p("toStringTag"), w = TypeError, x = n[v], A = f || !o(x) || x.prototype !== g || !d(function() {
    x({});
}), _ = function() {
    if (r(this, g), l(this) === g) throw new w("Abstract class Iterator not directly constructable");
}, S = function(t, e) {
    m ? h(g, t, {
        configurable: !0,
        get: function() {
            return e;
        },
        set: function(e) {
            if (a(this), this === g) throw new w("You can't redefine this property");
            u(this, t) ? this[t] = e : c(this, t, e);
        }
    }) : g[t] = e;
};
u(g, y) || S(y, v), !A && u(g, b) && g[b] !== Object || S(b, _), _.prototype = g, s({
    global: !0,
    constructor: !0,
    forced: A
}, {
    Iterator: _
});
