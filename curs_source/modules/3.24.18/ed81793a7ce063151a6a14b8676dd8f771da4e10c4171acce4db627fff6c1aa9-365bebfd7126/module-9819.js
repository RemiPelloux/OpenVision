var n = require("./module-5613.js"), o = require("./module-9944.js"), i = require("./module-8873.js"), a = require("./module-4977.js"), u = require("./module-3770.js"), s = require("./module-6002.js"), c = require("./module-8500.js"), f = require("./module-850.js")("find", TypeError);
n({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: f
}, {
    find: function(t) {
        u(this);
        try {
            a(t);
        } catch (t) {
            c(this, "throw", t);
        }
        if (f) return o(f, this, t);
        var r = s(this), e = 0;
        return i(r, function(r, n) {
            if (t(r, e++)) return n(r);
        }, {
            IS_RECORD: !0,
            INTERRUPTED: !0
        }).result;
    }
});
