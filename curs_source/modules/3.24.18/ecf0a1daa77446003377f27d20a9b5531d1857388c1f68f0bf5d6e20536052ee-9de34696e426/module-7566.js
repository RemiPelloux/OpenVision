var s = require("./module-6840.js"), n = require("./module-9504.js"), r = require("./module-655.js"), a = require("./module-2812.js"), o = URLSearchParams, l = o.prototype, h = n(l.getAll), c = n(l.has), d = new o("a=1");
!d.has("a", 2) && d.has("a", void 0) || s(l, "has", function(t) {
    var e = arguments.length, i = e < 2 ? void 0 : arguments[1];
    if (e && void 0 === i) return c(this, t);
    var s = h(this, t);
    a(e, 1);
    for(var n = r(i), o = 0; o < s.length;)if (s[o++] === n) return !0;
    return !1;
}, {
    enumerable: !0,
    unsafe: !0
});
