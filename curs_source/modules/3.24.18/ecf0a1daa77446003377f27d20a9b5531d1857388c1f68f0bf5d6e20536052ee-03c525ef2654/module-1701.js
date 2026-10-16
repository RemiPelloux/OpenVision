var s = require("./module-6518.js"), n = require("./module-9565.js"), r = require("./module-9306.js"), a = require("./module-8551.js"), o = require("./module-1767.js"), l = require("./module-9462.js"), h = require("./module-6319.js"), c = require("./module-9539.js"), d = require("./module-684.js"), u = require("./module-4549.js"), p = require("./module-6395.js"), g = !p && !d("map", function() {}), m = !p && !g && u("map", TypeError), f = p || g || m, b = l(function() {
    var t = this.iterator, e = a(n(this.next, t));
    if (!(this.done = !!e.done)) return h(t, this.mapper, [
        e.value,
        this.counter++
    ], !0);
});
s({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: f
}, {
    map: function(t) {
        a(this);
        try {
            r(t);
        } catch (t) {
            c(this, "throw", t);
        }
        return m ? n(m, this, t) : new b(o(this), {
            mapper: t
        });
    }
});
