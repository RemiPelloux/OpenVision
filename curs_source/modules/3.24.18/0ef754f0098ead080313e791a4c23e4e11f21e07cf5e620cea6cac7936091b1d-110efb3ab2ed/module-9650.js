var t = require("./module-9522.js"), s = require("./module-245.js"), o = require("./module-6048.js"), r = Function.bind, i = r.bind(r);
function l(e, a, n) {
    var t = i(o, null).apply(null, n ? [
        a,
        n
    ] : [
        a
    ]);
    e.api = {
        remove: t
    }, e.remove = t, [
        "before",
        "error",
        "after",
        "wrap"
    ].forEach(function(t) {
        var o = n ? [
            a,
            t,
            n
        ] : [
            a,
            t
        ];
        e[t] = e.api[t] = i(s, null).apply(null, o);
    });
}
function d() {
    var e = {
        registry: {}
    }, a = t.bind(null, e);
    return l(a, e), a;
}
var m = !1;
function c() {
    return m || (console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'), m = !0), d();
}
c.Singular = (function() {
    var e = {
        registry: {}
    }, a = t.bind(null, e, "h");
    return l(a, e, "h"), a;
}).bind(), c.Collection = d.bind(), module.exports = c, module.exports.Hook = c, module.exports.Singular = c.Singular, module.exports.Collection = c.Collection;
