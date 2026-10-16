var n = require("./module-6893.js"), o = require("./module-6881.js"), i = require("./module-9944.js"), a = require("./module-5234.js"), u = require("./module-7137.js"), s = require("./module-156.js"), c = require("./module-4416.js"), f = require("./module-3628.js"), h = require("./module-7568.js"), l = Object.assign, p = Object.defineProperty, v = o([].concat);
module.exports = !l || a(function() {
    if (n && 1 !== l({
        b: 1
    }, l(p({}, "a", {
        enumerable: !0,
        get: function() {
            p(this, "b", {
                value: 3,
                enumerable: !1
            });
        }
    }), {
        b: 2
    })).b) return !0;
    var t = {}, r = {}, e = Symbol("assign detection"), o = "abcdefghijklmnopqrst";
    return t[e] = 7, o.split("").forEach(function(t) {
        r[t] = t;
    }), 7 !== l({}, t)[e] || u(l({}, r)).join("") !== o;
}) ? function(t, r) {
    for(var e = f(t), o = arguments.length, a = 1, l = s.f, p = c.f; o > a;)for(var d, g = h(arguments[a++]), y = l ? v(u(g), l(g)) : u(g), w = y.length, x = 0; w > x;)d = y[x++], n && !i(p, g, d) || (e[d] = g[d]);
    return e;
} : l;
