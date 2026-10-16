var n = require("./module-5613.js"), o = require("./module-2618.js"), i = require("./module-3770.js"), a = require("./module-4318.js"), u = require("./module-8873.js"), s = require("./module-8500.js"), c = require("./module-6881.js"), f = require("./module-1942.js"), h = c([].join), l = c([].push);
n({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: f
}, {
    join: function(t) {
        var r;
        i(this);
        try {
            r = void 0 === t ? "," : o(t);
        } catch (t) {
            s(this, "throw", t);
        }
        var e = [];
        return u(this, function(t) {
            l(e, a(t) ? "" : o(t));
        }, {
            IS_ITERATOR: !0
        }), h(e, r);
    }
});
