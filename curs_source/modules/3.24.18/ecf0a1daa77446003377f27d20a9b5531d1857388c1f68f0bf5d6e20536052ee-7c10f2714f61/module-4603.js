var s = require("./module-6840.js"), n = require("./module-9504.js"), r = require("./module-655.js"), a = require("./module-2812.js"), o = URLSearchParams, l = o.prototype, h = n(l.append), c = n(l.delete), d = n(l.forEach), u = n([].push), p = new o("a=1&a=2&b=3");
p.delete("a", 1), p.delete("b", void 0), p + "" != "a=2" && s(l, "delete", function(t) {
    var e = arguments.length, i = e < 2 ? void 0 : arguments[1];
    if (e && void 0 === i) return c(this, t);
    var s = [];
    d(this, function(t, e) {
        u(s, {
            key: e,
            value: t
        });
    }), a(e, 1);
    for(var n, o = r(t), l = r(i), p = 0, g = 0, m = !1, f = s.length; p < f;)n = s[p++], m || n.key === o ? (m = !0, c(this, n.key)) : g++;
    for(; g < f;)(n = s[g++]).key === o && n.value === l || h(this, n.key, n.value);
}, {
    enumerable: !0,
    unsafe: !0
});
