var s = require("./module-9565.js"), n = require("./module-2360.js"), r = require("./module-6699.js"), a = require("./module-6279.js"), o = require("./module-8227.js"), l = require("./module-1181.js"), h = require("./module-5966.js"), c = require("./module-7657.js").IteratorPrototype, d = require("./module-2529.js"), u = require("./module-9539.js"), p = require("./module-1385.js"), g = o("toStringTag"), m = "IteratorHelper", f = "WrapForValidIterator", b = "normal", v = "throw", y = l.set, w = function(t) {
    var e = l.getterFor(t ? f : m);
    return a(n(c), {
        next: function() {
            var i = e(this);
            if (t) return i.nextHandler();
            if (i.done) return d(void 0, !0);
            try {
                var s = i.nextHandler();
                return i.returnHandlerResult ? s : d(s, i.done);
            } catch (t) {
                throw i.done = !0, t;
            }
        },
        return: function() {
            var i = e(this), n = i.iterator;
            if (i.done = !0, t) {
                var r = h(n, "return");
                return r ? s(r, n) : d(void 0, !0);
            }
            if (i.inner) try {
                u(i.inner.iterator, b);
            } catch (t) {
                return u(n, v, t);
            }
            if (i.openIters) try {
                p(i.openIters, b);
            } catch (t) {
                return u(n, v, t);
            }
            return n && u(n, b), d(void 0, !0);
        }
    });
}, x = w(!0), A = w(!1);
r(A, g, "Iterator Helper"), module.exports = function(t, e, i) {
    var s = function(s, n) {
        n ? (n.iterator = s.iterator, n.next = s.next) : n = s, n.type = e ? f : m, n.returnHandlerResult = !!i, n.nextHandler = t, n.counter = 0, n.done = !1, y(this, n);
    };
    return s.prototype = e ? x : A, s;
};
