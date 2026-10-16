var s = require("./module-6518.js"), n = require("./module-2652.js"), r = require("./module-9306.js"), a = require("./module-8551.js"), o = require("./module-1767.js"), l = require("./module-9539.js"), h = require("./module-4549.js"), c = require("./module-8745.js"), d = require("./module-9039.js"), u = TypeError, p = d(function() {
    [].keys().reduce(function() {}, void 0);
}), g = !p && h("reduce", u);
s({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: p || g
}, {
    reduce: function(t) {
        a(this);
        try {
            r(t);
        } catch (t) {
            l(this, "throw", t);
        }
        var e = arguments.length < 2, i = e ? void 0 : arguments[1];
        if (g) return c(g, this, e ? [
            t
        ] : [
            t,
            i
        ]);
        var s = o(this), h = 0;
        if (n(s, function(s) {
            e ? (e = !1, i = s) : i = t(i, s, h), h++;
        }, {
            IS_RECORD: !0
        }), e) throw new u("Reduce of empty iterator with no initial value");
        return i;
    }
});
