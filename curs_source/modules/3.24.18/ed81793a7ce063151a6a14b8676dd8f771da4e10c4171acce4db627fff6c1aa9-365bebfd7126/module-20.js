var n = require("./module-5613.js"), o = require("./module-9944.js"), i = require("./module-4977.js"), a = require("./module-3770.js"), u = require("./module-6002.js"), s = require("./module-2331.js"), c = require("./module-4412.js"), f = require("./module-8500.js"), h = require("./module-9475.js"), l = require("./module-850.js"), p = require("./module-1942.js"), v = !p && !h("map", function() {}), d = !p && !v && l("map", TypeError), g = p || v || d, y = s(function() {
    var t = this.iterator, r = a(o(this.next, t));
    if (!(this.done = !!r.done)) return c(t, this.mapper, [
        r.value,
        this.counter++
    ], !0);
});
n({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: g
}, {
    map: function(t) {
        a(this);
        try {
            i(t);
        } catch (t) {
            f(this, "throw", t);
        }
        return d ? o(d, this, t) : new y(u(this), {
            mapper: t
        });
    }
});
