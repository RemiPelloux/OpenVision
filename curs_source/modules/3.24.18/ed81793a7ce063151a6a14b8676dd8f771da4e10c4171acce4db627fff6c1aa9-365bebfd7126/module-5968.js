var n = require("./module-5613.js"), o = require("./module-9391.js"), i = require("./module-5234.js"), a = require("./module-831.js"), u = require("./module-8118.js").onFreeze, s = Object.freeze;
n({
    target: "Object",
    stat: !0,
    forced: i(function() {
        s(1);
    }),
    sham: !o
}, {
    freeze: function(t) {
        return s && a(t) ? s(u(t)) : t;
    }
});
