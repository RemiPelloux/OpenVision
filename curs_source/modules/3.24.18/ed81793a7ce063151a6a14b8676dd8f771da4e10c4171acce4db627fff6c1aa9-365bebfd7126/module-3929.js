var n = require("./module-9944.js"), o = require("./module-3770.js"), i = require("./module-7065.js"), a = require("./module-2913.js"), u = require("./module-4320.js"), s = require("./module-3086.js"), c = require("./module-8500.js"), f = require("./module-5604.js"), h = require("./module-3337.js"), l = require("./module-6224.js"), p = f("Promise"), v = "AsyncFromSyncIterator", d = s.set, g = s.getterFor(v), y = function(t, r, e, n, o) {
    var i = t.done;
    p.resolve(t.value).then(function(t) {
        r(l(t, i));
    }, function(t) {
        if (!i && o) try {
            c(n, "throw", t);
        } catch (r) {
            t = r;
        }
        e(t);
    });
}, w = function(t) {
    t.type = v, d(this, t);
};
w.prototype = u(i(h), {
    next: function() {
        var t = g(this), r = arguments.length > 0, e = r ? arguments[0] : void 0;
        return new p(function(i, a) {
            var u = o(r ? n(t.next, t.iterator, e) : n(t.next, t.iterator));
            y(u, i, a, t.iterator, !0);
        });
    },
    return: function() {
        var t = g(this).iterator, r = arguments.length > 0, e = r ? arguments[0] : void 0;
        return new p(function(i, u) {
            var s = a(t, "return");
            if (void 0 === s) return i(l(e, !0));
            var c = o(r ? n(s, t, e) : n(s, t));
            y(c, i, u, t);
        });
    },
    throw: function() {
        var t = g(this).iterator, r = arguments.length > 0, e = r ? arguments[0] : void 0;
        return new p(function(i, u) {
            var s = a(t, "throw");
            if (void 0 === s) {
                try {
                    c(t, "normal");
                } catch (t) {
                    return u(t);
                }
                return u(new TypeError("The iterator does not provide a throw method"));
            }
            var f = o(r ? n(s, t, e) : n(s, t));
            y(f, i, u, t, !0);
        });
    }
}), module.exports = w;
