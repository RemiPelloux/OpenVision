var n = require("./module-9944.js"), o = require("./module-6042.js"), i = require("./module-3770.js"), a = require("./module-7065.js"), u = require("./module-8088.js"), s = require("./module-4320.js"), c = require("./module-4282.js"), f = require("./module-3086.js"), h = require("./module-5604.js"), l = require("./module-2913.js"), p = require("./module-3337.js"), v = require("./module-6224.js"), d = require("./module-808.js"), g = h("Promise"), y = c("toStringTag"), w = "AsyncIteratorHelper", x = "WrapForValidAsyncIterator", m = f.set, b = function(t) {
    var r = !t, e = f.getterFor(t ? x : w), u = function(t) {
        var n = o(function() {
            return e(t);
        }), i = n.error, a = n.value;
        return i || r && a.done ? {
            exit: !0,
            value: i ? g.reject(a) : g.resolve(v(void 0, !0))
        } : {
            exit: !1,
            value: a
        };
    };
    return s(a(p), {
        next: function() {
            var t = u(this), e = t.value;
            if (t.exit) return e;
            var n = o(function() {
                return i(e.nextHandler(g));
            }), a = n.error, s = n.value;
            return a ? (e.done = !0, r && d(e), g.reject(s)) : r ? g.resolve(s).then(function(t) {
                return e.done && d(e), t;
            }, function(t) {
                throw d(e), t;
            }) : g.resolve(s);
        },
        return: function() {
            var e = u(this), a = e.value;
            if (e.exit) return a;
            a.done = !0;
            var s, c, f = a.iterator, h = a.inner;
            r && d(a);
            var p = function() {
                var r = o(function() {
                    return l(f, "return");
                });
                return s = c = r.value, r.error ? g.reject(c) : void 0 === s ? g.resolve(v(void 0, !0)) : (r = o(function() {
                    return n(s, f);
                }), c = r.value, r.error ? g.reject(c) : t ? g.resolve(c) : g.resolve(c).then(function(t) {
                    return i(t), v(void 0, !0);
                }));
            }, y = function(t) {
                return p().then(function() {
                    throw t;
                }, function() {
                    throw t;
                });
            };
            if (h) {
                var w, x = h.iterator, m = o(function() {
                    if (w = l(x, "return")) return n(w, x);
                });
                if (m.error) return y(m.value);
                if (w) return g.resolve(m.value).then(function(t) {
                    try {
                        i(t);
                    } catch (t) {
                        return y(t);
                    }
                    return p();
                }, y);
            }
            return p();
        }
    });
}, S = b(!0), O = b(!1);
u(O, y, "Async Iterator Helper"), module.exports = function(t, r) {
    var e = function(e, n) {
        n ? (n.iterator = e.iterator, n.next = e.next) : n = e, n.type = r ? x : w, n.nextHandler = t, n.counter = 0, n.done = !1, m(this, n);
    };
    return e.prototype = r ? S : O, e;
};
