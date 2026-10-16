var n, o, i, a = require("./module-5945.js"), u = require("./module-9117.js"), s = require("./module-831.js"), c = require("./module-8088.js"), f = require("./module-4418.js"), h = require("./module-2694.js"), l = require("./module-168.js"), p = require("./module-7588.js"), v = "Object already initialized", d = u.TypeError, g = u.WeakMap;
if (a || h.state) {
    var y = h.state || (h.state = new g);
    y.get = y.get, y.has = y.has, y.set = y.set, n = function(t, r) {
        if (y.has(t)) throw new d(v);
        return r.facade = t, y.set(t, r), r;
    }, o = function(t) {
        return y.get(t) || {};
    }, i = function(t) {
        return y.has(t);
    };
} else {
    var w = l("state");
    p[w] = !0, n = function(t, r) {
        if (f(t, w)) throw new d(v);
        return r.facade = t, c(t, w, r), r;
    }, o = function(t) {
        return f(t, w) ? t[w] : {};
    }, i = function(t) {
        return f(t, w);
    };
}
module.exports = {
    set: n,
    get: o,
    has: i,
    enforce: function(t) {
        return i(t) ? o(t) : n(t, {});
    },
    getterFor: function(t) {
        return function(r) {
            var e;
            if (!s(r) || (e = o(r)).type !== t) throw new d("Incompatible receiver, " + t + " required");
            return e;
        };
    }
};
