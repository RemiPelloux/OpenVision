var n = require("./module-9944.js"), o = require("./module-7065.js"), i = require("./module-8088.js"), a = require("./module-4320.js"), u = require("./module-4282.js"), s = require("./module-3086.js"), c = require("./module-2913.js"), f = require("./module-2037.js").IteratorPrototype, h = require("./module-6224.js"), l = require("./module-8500.js"), p = require("./module-5366.js"), v = require("./module-808.js"), d = u("toStringTag"), g = "IteratorHelper", y = "WrapForValidIterator", w = "normal", x = "throw", m = s.set, b = function(t) {
    var r = s.getterFor(t ? y : g);
    return a(o(f), {
        next: function() {
            var e = r(this);
            if (t) return e.nextHandler();
            if (e.done) return h(void 0, !0);
            try {
                var n = e.nextHandler();
                return e.done && v(e), e.returnHandlerResult ? n : h(n, e.done);
            } catch (t) {
                throw e.done = !0, v(e), t;
            }
        },
        return: function() {
            var e = r(this), o = e.iterator, i = e.inner, a = e.openIters, u = e.done;
            if (e.done = !0, t) {
                var s = c(o, "return");
                return s ? n(s, o) : h(void 0, !0);
            }
            if (v(e), u) return h(void 0, !0);
            if (i) try {
                l(i.iterator, w);
            } catch (t) {
                return l(o, x, t);
            }
            if (a) try {
                p(a, w);
            } catch (t) {
                if (o) return l(o, x, t);
                throw t;
            }
            return o && l(o, w), h(void 0, !0);
        }
    });
}, S = b(!0), O = b(!1);
i(O, d, "Iterator Helper"), module.exports = function(t, r, e) {
    var n = function(n, o) {
        o ? (o.iterator = n.iterator, o.next = n.next) : o = n, o.type = r ? y : g, o.returnHandlerResult = !!e, o.nextHandler = t, o.counter = 0, o.done = !1, m(this, o);
    };
    return n.prototype = r ? S : O, n;
};
