var n = require("./module-5613.js"), o = require("./module-9944.js"), i = require("./module-4977.js"), a = require("./module-3770.js"), u = require("./module-6002.js"), s = require("./module-1829.js"), c = require("./module-2331.js"), f = require("./module-8500.js"), h = require("./module-5234.js"), l = require("./module-1942.js"), p = require("./module-9475.js"), v = require("./module-850.js"), d = !l && h(function() {
    return 1 !== [
        1
    ].values().flatMap(function() {
        return [
            1
        ];
    }).find(function() {
        return !0;
    });
}), g = !l && !d && !p("flatMap", function() {}), y = !l && !d && !g && v("flatMap", TypeError), w = l || d || g || y, x = c(function() {
    for(var t, r, e = this.iterator, n = this.mapper;;){
        if (r = this.inner) try {
            if (!(t = a(o(r.next, r.iterator))).done) return t.value;
            this.inner = null;
        } catch (t) {
            f(e, "throw", t);
        }
        if (t = a(o(this.next, e)), this.done = !!t.done) return;
        try {
            this.inner = s(n(t.value, this.counter++), !1);
        } catch (t) {
            f(e, "throw", t);
        }
    }
});
n({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: w
}, {
    flatMap: function(t) {
        a(this);
        try {
            i(t);
        } catch (t) {
            f(this, "throw", t);
        }
        return y ? o(y, this, t) : new x(u(this), {
            mapper: t,
            inner: null
        });
    }
});
