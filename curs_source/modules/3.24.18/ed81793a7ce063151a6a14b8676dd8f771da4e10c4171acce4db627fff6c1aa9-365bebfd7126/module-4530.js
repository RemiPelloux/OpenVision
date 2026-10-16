var n = require("./module-6881.js"), o = require("./module-5234.js"), i = require("./module-4188.js"), a = require("./module-4418.js"), u = require("./module-6893.js"), s = require("./module-2735.js").CONFIGURABLE, c = require("./module-3029.js"), f = require("./module-3086.js"), h = f.enforce, l = f.get, p = String, v = Object.defineProperty, d = n("".slice), g = n("".replace), y = n([].join), w = u && !o(function() {
    return 8 !== v(function() {}, "length", {
        value: 8
    }).length;
}), x = String(String).split("String"), m = module.exports = function(t, r, e) {
    "Symbol(" === d(p(r), 0, 7) && (r = "[" + g(p(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e && e.getter && (r = "get " + r), e && e.setter && (r = "set " + r), (!a(t, "name") || s && t.name !== r) && (u ? v(t, "name", {
        value: r,
        configurable: !0
    }) : t.name = r), w && e && a(e, "arity") && t.length !== e.arity && v(t, "length", {
        value: e.arity
    });
    try {
        e && a(e, "constructor") && e.constructor ? u && v(t, "prototype", {
            writable: !1
        }) : t.prototype && (t.prototype = void 0);
    } catch (t) {}
    var n = h(t);
    return a(n, "source") || (n.source = y(x, "string" == typeof r ? r : "")), t;
};
Function.prototype.toString = m(function() {
    return i(this) && l(this).source || c(this);
}, "toString");
