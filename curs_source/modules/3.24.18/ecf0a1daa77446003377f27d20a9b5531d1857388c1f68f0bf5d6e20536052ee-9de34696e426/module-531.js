var s = require("./module-6518.js"), n = require("./module-9565.js"), r = require("./module-9306.js"), a = require("./module-8551.js"), o = require("./module-1767.js"), l = require("./module-8646.js"), h = require("./module-9462.js"), c = require("./module-9539.js"), d = require("./module-6395.js"), u = require("./module-684.js"), p = require("./module-4549.js"), g = !d && !u("flatMap", function() {}), m = !d && !g && p("flatMap", TypeError), f = d || g || m, b = h(function() {
    for(var t, e, i = this.iterator, s = this.mapper;;){
        if (e = this.inner) try {
            if (!(t = a(n(e.next, e.iterator))).done) return t.value;
            this.inner = null;
        } catch (t) {
            c(i, "throw", t);
        }
        if (t = a(n(this.next, i)), this.done = !!t.done) return;
        try {
            this.inner = l(s(t.value, this.counter++), !1);
        } catch (t) {
            c(i, "throw", t);
        }
    }
});
s({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: f
}, {
    flatMap: function(t) {
        a(this);
        try {
            r(t);
        } catch (t) {
            c(this, "throw", t);
        }
        return m ? n(m, this, t) : new b(o(this), {
            mapper: t,
            inner: null
        });
    }
});
