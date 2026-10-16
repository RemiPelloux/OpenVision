var n = require("./module-5613.js"), o = require("./module-9944.js"), i = require("./module-3770.js"), a = require("./module-6002.js"), u = require("./module-8616.js"), s = require("./module-939.js"), c = require("./module-8500.js"), f = require("./module-2331.js"), h = require("./module-9475.js"), l = require("./module-850.js"), p = require("./module-1942.js"), v = RangeError, d = 1 / 0, g = !p && !h("drop", 0), y = !p && !g && l("drop", RangeError), w = p || g || y || !function() {
    try {
        Iterator.prototype.drop.call({
            next: function() {
                return {
                    done: !0
                };
            }
        }, 9007199254740992);
    } catch (t) {
        return t instanceof v;
    }
}(), x = f(function() {
    for(var t, r = this.iterator, e = this.next; this.remaining;)if (this.remaining--, t = i(o(e, r)), this.done = !!t.done) return;
    if (t = i(o(e, r)), !(this.done = !!t.done)) return t.value;
});
n({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: w
}, {
    drop: function(t) {
        var r;
        i(this);
        try {
            if ((r = s(u(+t))) > 9007199254740991 && r !== d) throw new v("The argument should be a safe integer");
        } catch (t) {
            c(this, "throw", t);
        }
        return y ? o(y, this, r) : new x(a(this), {
            remaining: r
        });
    }
});
