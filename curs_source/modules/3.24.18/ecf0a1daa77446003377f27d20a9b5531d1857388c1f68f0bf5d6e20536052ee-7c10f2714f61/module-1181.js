var s, n, r, a = require("./module-8622.js"), o = require("./module-4576.js"), l = require("./module-34.js"), h = require("./module-6699.js"), c = require("./module-9297.js"), d = require("./module-7629.js"), u = require("./module-6119.js"), p = require("./module-421.js"), g = "Object already initialized", m = o.TypeError, f = o.WeakMap;
if (a || d.state) {
    var b = d.state || (d.state = new f);
    b.get = b.get, b.has = b.has, b.set = b.set, s = function(t, e) {
        if (b.has(t)) throw new m(g);
        return e.facade = t, b.set(t, e), e;
    }, n = function(t) {
        return b.get(t) || {};
    }, r = function(t) {
        return b.has(t);
    };
} else {
    var v = u("state");
    p[v] = !0, s = function(t, e) {
        if (c(t, v)) throw new m(g);
        return e.facade = t, h(t, v, e), e;
    }, n = function(t) {
        return c(t, v) ? t[v] : {};
    }, r = function(t) {
        return c(t, v);
    };
}
module.exports = {
    set: s,
    get: n,
    has: r,
    enforce: function(t) {
        return r(t) ? n(t) : s(t, {});
    },
    getterFor: function(t) {
        return function(e) {
            var i;
            if (!l(e) || (i = n(e)).type !== t) throw new m("Incompatible receiver, " + t + " required");
            return i;
        };
    }
};
