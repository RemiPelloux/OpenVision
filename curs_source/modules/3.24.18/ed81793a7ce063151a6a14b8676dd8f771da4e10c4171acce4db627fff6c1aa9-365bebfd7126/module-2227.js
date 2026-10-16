var n = require("./module-5613.js"), o = require("./module-9391.js"), i = require("./module-5062.js"), a = require("./module-5604.js"), u = require("./module-6881.js"), s = require("./module-2618.js"), c = require("./module-4417.js"), f = require("./module-3086.js").set, h = SyntaxError, l = a("JSON", "parse"), p = a("Object", "create"), v = a("Object", "freeze"), d = u("".charAt), g = "Unacceptable as raw JSON", y = function(t) {
    return " " === t || "\t" === t || "\n" === t || "\r" === t;
};
n({
    target: "JSON",
    stat: !0,
    forced: !i
}, {
    rawJSON: function(t) {
        var r = s(t);
        if ("" === r || y(d(r, 0)) || y(d(r, r.length - 1))) throw new h(g);
        var e = l(r);
        if ("object" == typeof e && null !== e) throw new h(g);
        var n = p(null);
        return f(n, {
            type: "RawJSON"
        }), c(n, "rawJSON", r), o ? v(n) : n;
    }
});
