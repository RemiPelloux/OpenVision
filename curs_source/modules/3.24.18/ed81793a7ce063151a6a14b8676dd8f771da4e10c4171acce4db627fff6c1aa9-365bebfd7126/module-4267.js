var n, o, i, a, u = require("./module-5613.js"), s = require("./module-1942.js"), c = require("./module-3940.js"), f = require("./module-9117.js"), h = require("./module-9120.js"), l = require("./module-9944.js"), p = require("./module-7509.js"), v = require("./module-5054.js"), d = require("./module-3754.js"), g = require("./module-3900.js"), y = require("./module-4977.js"), w = require("./module-4188.js"), x = require("./module-831.js"), m = require("./module-286.js"), b = require("./module-7964.js"), S = require("./module-3474.js").set, O = require("./module-1982.js"), E = require("./module-3306.js"), R = require("./module-6042.js"), P = require("./module-8648.js"), j = require("./module-3086.js"), k = require("./module-6453.js"), I = require("./module-7301.js"), T = require("./module-9444.js"), A = "Promise", L = I.CONSTRUCTOR, N = I.REJECTION_EVENT, U = I.SUBCLASSING, C = j.getterFor(A), F = j.set, B = k && k.prototype, D = k, M = B, z = f.TypeError, _ = f.document, H = f.process, J = T.f, q = J, G = !!(_ && _.createEvent && f.dispatchEvent), V = "unhandledrejection", W = function(t) {
    var r;
    return !(!x(t) || !w(r = t.then)) && r;
}, $ = function(t, r) {
    var e, n, o, i = r.value, a = 1 === r.state, u = a ? t.ok : t.fail, s = t.resolve, c = t.reject, f = t.domain;
    try {
        u ? (a || (2 === r.rejection && Z(r), r.rejection = 1), !0 === u ? e = i : (f && f.enter(), e = u(i), f && (f.exit(), o = !0)), e === t.promise ? c(new z("Promise-chain cycle")) : (n = W(e)) ? l(n, e, s, c) : s(e)) : c(i);
    } catch (t) {
        f && !o && f.exit(), c(t);
    }
}, K = function(t, r) {
    t.notified || (t.notified = !0, O(function() {
        for(var e, n = t.reactions; e = n.get();)$(e, t);
        t.notified = !1, r && !t.rejection && Q(t);
    }));
}, Y = function(t, r, e) {
    var n, o;
    G ? ((n = _.createEvent("Event")).promise = r, n.reason = e, n.initEvent(t, !1, !0), f.dispatchEvent(n)) : n = {
        promise: r,
        reason: e
    }, !N && (o = f["on" + t]) ? o(n) : t === V && E("Unhandled promise rejection", e);
}, Q = function(t) {
    l(S, f, function() {
        var r, e = t.facade, n = t.value;
        if (X(t) && (r = R(function() {
            c ? H.emit("unhandledRejection", n, e) : Y(V, e, n);
        }), t.rejection = c || X(t) ? 2 : 1, r.error)) throw r.value;
    });
}, X = function(t) {
    return 1 !== t.rejection && !t.parent;
}, Z = function(t) {
    l(S, f, function() {
        var r = t.facade;
        c ? H.emit("rejectionHandled", r) : Y("rejectionhandled", r, t.value);
    });
}, tt = function(t, r, e) {
    return function(n) {
        t(r, n, e);
    };
}, rt = function(t, r, e) {
    t.done || (t.done = !0, e && (t = e), t.value = r, t.state = 2, K(t, !0));
}, et = function(t, r, e) {
    if (!t.done) {
        t.done = !0, e && (t = e);
        try {
            if (t.facade === r) throw new z("Promise can't be resolved itself");
            var n = W(r);
            n ? O(function() {
                var e = {
                    done: !1
                };
                try {
                    l(n, r, tt(et, e, t), tt(rt, e, t));
                } catch (r) {
                    rt(e, r, t);
                }
            }) : (t.value = r, t.state = 1, K(t, !1));
        } catch (r) {
            rt({
                done: !1
            }, r, t);
        }
    }
};
if (L && (M = (D = function(t) {
    m(this, M), y(t), l(n, this);
    var r = C(this);
    try {
        t(tt(et, r), tt(rt, r));
    } catch (t) {
        rt(r, t);
    }
}).prototype, (n = function(t) {
    F(this, {
        type: A,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: new P,
        rejection: !1,
        state: 0,
        value: null
    });
}).prototype = p(M, "then", function(t, r) {
    var e = C(this), n = J(b(this, D));
    return e.parent = !0, n.ok = !w(t) || t, n.fail = w(r) && r, n.domain = c ? H.domain : void 0, 0 === e.state ? e.reactions.add(n) : O(function() {
        $(n, e);
    }), n.promise;
}), o = function() {
    var t = new n, r = C(t);
    this.promise = t, this.resolve = tt(et, r), this.reject = tt(rt, r);
}, T.f = J = function(t) {
    return t === D || t === i ? new o(t) : q(t);
}, !s && w(k) && B !== Object.prototype)) {
    a = B.then, U || p(B, "then", function(t, r) {
        var e = this;
        return new D(function(t, r) {
            l(a, e, t, r);
        }).then(t, r);
    }, {
        unsafe: !0
    });
    try {
        delete B.constructor;
    } catch (t) {}
    v && v(B, M);
}
u({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: L
}, {
    Promise: D
}), i = h.Promise, d(D, A, !1, !0), g(A);
