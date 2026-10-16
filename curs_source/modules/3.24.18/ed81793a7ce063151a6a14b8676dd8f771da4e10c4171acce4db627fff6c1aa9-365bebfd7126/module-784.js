var n = require("./module-5613.js"), o = require("./module-5604.js"), i = require("./module-9445.js"), a = require("./module-2618.js"), u = require("./module-6301.js"), s = o("URL");
n({
    target: "URL",
    stat: !0,
    forced: !u
}, {
    parse: function(t) {
        var r = i(arguments.length, 1), e = a(t), n = r < 2 || void 0 === arguments[1] ? void 0 : a(arguments[1]);
        try {
            return new s(e, n);
        } catch (t) {
            return null;
        }
    }
});
