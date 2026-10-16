var n = require("./module-5613.js"), o = require("./module-9944.js"), i = require("./module-4977.js"), a = require("./module-3770.js"), u = require("./module-6002.js"), s = require("./module-2331.js"), c = require("./module-4412.js"), f = require("./module-1942.js"), h = require("./module-8500.js"), l = require("./module-9475.js"), p = require("./module-850.js"), v = !f && !l("filter", function() {}), d = !f && !v && p("filter", TypeError), g = f || v || d, y = s(function() {
    for(var t, r, e = this.iterator, n = this.predicate, i = this.next;;){
        if (t = a(o(i, e)), this.done = !!t.done) return;
        if (r = t.value, c(e, n, [
            r,
            this.counter++
        ], !0)) return r;
    }
});
n({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: g
}, {
    filter: function(t) {
        a(this);
        try {
            i(t);
        } catch (t) {
            h(this, "throw", t);
        }
        return d ? o(d, this, t) : new y(u(this), {
            predicate: t
        });
    }
});
