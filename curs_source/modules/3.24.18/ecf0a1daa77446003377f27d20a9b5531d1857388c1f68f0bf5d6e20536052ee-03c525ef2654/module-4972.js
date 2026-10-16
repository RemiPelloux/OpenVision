var s = require("./module-6518.js"), n = require("./module-9565.js"), r = require("./module-8551.js"), a = require("./module-1767.js"), o = require("./module-4149.js"), l = require("./module-9590.js"), h = require("./module-9462.js"), c = require("./module-9539.js"), d = require("./module-4549.js"), u = require("./module-6395.js"), p = !u && d("take", RangeError), g = h(function() {
    var t = this.iterator;
    if (!this.remaining--) return this.done = !0, c(t, "normal", void 0);
    var e = r(n(this.next, t));
    return (this.done = !!e.done) ? void 0 : e.value;
});
s({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: u || p
}, {
    take: function(t) {
        var e;
        r(this);
        try {
            e = l(o(+t));
        } catch (t) {
            c(this, "throw", t);
        }
        return p ? n(p, this, e) : new g(a(this), {
            remaining: e
        });
    }
});
