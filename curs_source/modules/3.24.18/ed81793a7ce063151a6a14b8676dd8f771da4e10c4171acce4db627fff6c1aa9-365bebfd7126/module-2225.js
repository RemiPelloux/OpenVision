var n = require("./module-5613.js"), o = require("./module-3770.js"), i = require("./module-4417.js"), a = require("./module-8873.js"), u = require("./module-6002.js");
n({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    toArray: function() {
        var t = [], r = 0;
        return a(u(o(this)), function(e) {
            i(t, r++, e);
        }, {
            IS_RECORD: !0
        }), t;
    }
});
