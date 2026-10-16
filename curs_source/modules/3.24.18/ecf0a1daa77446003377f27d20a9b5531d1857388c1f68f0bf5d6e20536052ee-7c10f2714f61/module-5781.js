var s = require("./module-6518.js"), n = require("./module-7751.js"), r = require("./module-2812.js"), a = require("./module-655.js"), o = require("./module-7416.js"), l = n("URL");
s({
    target: "URL",
    stat: !0,
    forced: !o
}, {
    parse: function(t) {
        var e = r(arguments.length, 1), i = a(t), s = e < 2 || void 0 === arguments[1] ? void 0 : a(arguments[1]);
        try {
            return new l(i, s);
        } catch (t) {
            return null;
        }
    }
});
