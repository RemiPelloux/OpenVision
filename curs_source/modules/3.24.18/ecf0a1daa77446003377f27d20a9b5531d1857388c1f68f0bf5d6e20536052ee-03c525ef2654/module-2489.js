var s = require("./module-6518.js"), n = require("./module-9565.js"), r = require("./module-9306.js"), a = require("./module-8551.js"), o = require("./module-1767.js"), l = require("./module-9462.js"), h = require("./module-6319.js"), c = require("./module-6395.js"), d = require("./module-9539.js"), u = require("./module-684.js"), p = require("./module-4549.js"), g = !c && !u("filter", function() {}), m = !c && !g && p("filter", TypeError), f = c || g || m, b = l(function() {
    for(var t, e, i = this.iterator, s = this.predicate, r = this.next;;){
        if (t = a(n(r, i)), this.done = !!t.done) return;
        if (e = t.value, h(i, s, [
            e,
            this.counter++
        ], !0)) return e;
    }
});
s({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: f
}, {
    filter: function(t) {
        a(this);
        try {
            r(t);
        } catch (t) {
            d(this, "throw", t);
        }
        return m ? n(m, this, t) : new b(o(this), {
            predicate: t
        });
    }
});
