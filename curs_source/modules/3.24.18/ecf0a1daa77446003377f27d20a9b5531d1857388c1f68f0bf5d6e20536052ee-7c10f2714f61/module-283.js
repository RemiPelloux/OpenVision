var s = require("./module-9504.js"), n = require("./module-9039.js"), r = require("./module-4901.js"), a = require("./module-9297.js"), o = require("./module-3724.js"), l = require("./module-350.js").CONFIGURABLE, h = require("./module-3706.js"), c = require("./module-1181.js"), d = c.enforce, u = c.get, p = String, g = Object.defineProperty, m = s("".slice), f = s("".replace), b = s([].join), v = o && !n(function() {
    return 8 !== g(function() {}, "length", {
        value: 8
    }).length;
}), y = String(String).split("String"), w = module.exports = function(t, e, i) {
    "Symbol(" === m(p(e), 0, 7) && (e = "[" + f(p(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), i && i.getter && (e = "get " + e), i && i.setter && (e = "set " + e), (!a(t, "name") || l && t.name !== e) && (o ? g(t, "name", {
        value: e,
        configurable: !0
    }) : t.name = e), v && i && a(i, "arity") && t.length !== i.arity && g(t, "length", {
        value: i.arity
    });
    try {
        i && a(i, "constructor") && i.constructor ? o && g(t, "prototype", {
            writable: !1
        }) : t.prototype && (t.prototype = void 0);
    } catch (t) {}
    var s = d(t);
    return a(s, "source") || (s.source = b(y, "string" == typeof e ? e : "")), t;
};
Function.prototype.toString = w(function() {
    return r(this) && u(this).source || h(this);
}, "toString");
