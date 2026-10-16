var s = require("./module-6518.js"), n = require("./module-9565.js"), r = require("./module-2652.js"), a = require("./module-9306.js"), o = require("./module-8551.js"), l = require("./module-1767.js"), h = require("./module-9539.js"), c = require("./module-4549.js")("forEach", TypeError);
s({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: c
}, {
    forEach: function(t) {
        o(this);
        try {
            a(t);
        } catch (t) {
            h(this, "throw", t);
        }
        if (c) return n(c, this, t);
        var e = l(this), i = 0;
        r(e, function(e) {
            t(e, i++);
        }, {
            IS_RECORD: !0
        });
    }
});
