var n = require("./module-5613.js"), o = require("./module-9944.js"), i = require("./module-3770.js"), a = require("./module-6002.js"), u = require("./module-8616.js"), s = require("./module-939.js"), c = require("./module-2331.js"), f = require("./module-8500.js"), h = require("./module-9475.js"), l = require("./module-850.js"), p = require("./module-1942.js"), v = RangeError, d = 1 / 0, g = !p && !h("take", 1), y = !p && !g && l("take", RangeError), w = p || g || y || !function() {
    try {
        Iterator.prototype.take.call({
            next: function() {
                return {
                    done: !0
                };
            }
        }, 9007199254740992);
    } catch (t) {
        return t instanceof v;
    }
}(), x = c(function() {
    var t = this.iterator;
    if (!this.remaining--) return this.done = !0, f(t, "normal", void 0);
    var r = i(o(this.next, t));
    return (this.done = !!r.done) ? void 0 : r.value;
});
n({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: w
}, {
    take: function(t) {
        var r;
        i(this);
        try {
            if ((r = s(u(+t))) > 9007199254740991 && r !== d) throw new v("The argument should be a safe integer");
        } catch (t) {
            f(this, "throw", t);
        }
        return y ? o(y, this, r) : new x(a(this), {
            remaining: r
        });
    }
});
