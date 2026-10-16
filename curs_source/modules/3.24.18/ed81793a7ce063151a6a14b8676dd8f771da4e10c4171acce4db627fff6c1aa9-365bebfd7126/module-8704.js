var n = require("./module-5613.js"), o = require("./module-3770.js"), i = require("./module-4752.js"), a = require("./module-8873.js"), u = require("./module-8500.js"), s = require("./module-9416.js"), c = require("./module-1942.js"), f = RangeError, h = TypeError, l = 1 / 0, p = "skippedElements should be a positive safe integer";
n({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: c
}, {
    includes: function(t) {
        o(this);
        var r, e = arguments.length > 1 ? arguments[1] : void 0, n = 0;
        try {
            if (void 0 === e) r = 0;
            else {
                if (e !== l && e !== -1 / 0 && !i(e)) throw new h(p);
                r = e;
            }
            if (r < 0 || r !== l && r > 9007199254740991) throw new f(p);
        } catch (t) {
            u(this, "throw", t);
        }
        return a(this, function(e, o) {
            if (n < r) n++;
            else if (s(e, t)) return o();
        }, {
            IS_ITERATOR: !0,
            INTERRUPTED: !0
        }).stopped;
    }
});
