var s = require("./module-6518.js"), n = require("./module-9565.js"), r = require("./module-8551.js"), a = require("./module-1767.js"), o = require("./module-4149.js"), l = require("./module-9590.js"), h = require("./module-9539.js"), c = require("./module-9462.js"), d = require("./module-684.js"), u = require("./module-4549.js"), p = require("./module-6395.js"), g = !p && !d("drop", 0), m = !p && !g && u("drop", RangeError), f = p || g || m, b = c(function() {
    for(var t, e = this.iterator, i = this.next; this.remaining;)if (this.remaining--, t = r(n(i, e)), this.done = !!t.done) return;
    if (t = r(n(i, e)), !(this.done = !!t.done)) return t.value;
});
s({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: f
}, {
    drop: function(t) {
        var e;
        r(this);
        try {
            e = l(o(+t));
        } catch (t) {
            h(this, "throw", t);
        }
        return m ? n(m, this, e) : new b(a(this), {
            remaining: e
        });
    }
});
