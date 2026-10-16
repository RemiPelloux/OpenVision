"use strict";
require.d(exports, {
    UU: ()=>p,
    t0: ()=>m
});
var n = require("./module-36038.js"), s = require("./module-45760.js"), o = require("./module-92801.js"), i = require("./module-84959.js"), a = require("./module-2788.js"), c = function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, r = e[Symbol.asyncIterator];
    return r ? r.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
        return this;
    }, t);
    function n(r) {
        t[r] = e[r] && function(t) {
            return new Promise(function(n, s) {
                (function(e, t, r, n) {
                    Promise.resolve(n).then(function(t) {
                        e({
                            value: t,
                            done: r
                        });
                    }, t);
                })(n, s, (t = e[r](t)).done, t.value);
            });
        };
    }
}, l = function(e) {
    return this instanceof l ? (this.v = e, this) : new l(e);
}, u = function(e) {
    var t, r;
    return t = {}, n("next"), n("throw", function(e) {
        throw e;
    }), n("return"), t[Symbol.iterator] = function() {
        return this;
    }, t;
    function n(n, s) {
        t[n] = e[n] ? function(t) {
            return (r = !r) ? {
                value: l(e[n](t)),
                done: !1
            } : s ? s(t) : t;
        } : s;
    }
}, d = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(e, t || []), o = [];
    return n = {}, i("next"), i("throw"), i("return", function(e) {
        return function(t) {
            return Promise.resolve(t).then(e, u);
        };
    }), n[Symbol.asyncIterator] = function() {
        return this;
    }, n;
    function i(e, t) {
        s[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
                o.push([
                    e,
                    t,
                    r,
                    n
                ]) > 1 || a(e, t);
            });
        }, t && (n[e] = t(n[e])));
    }
    function a(e, t) {
        try {
            (r = s[e](t)).value instanceof l ? Promise.resolve(r.value.v).then(c, u) : d(o[0][2], r);
        } catch (e) {
            d(o[0][3], e);
        }
        var r;
    }
    function c(e) {
        a("next", e);
    }
    function u(e) {
        a("throw", e);
    }
    function d(e, t) {
        e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
    }
};
function p(e, t) {
    return (0, s.w)(e, (r)=>{
        switch(r.kind){
            case n.MethodKind.Unary:
                return function(e, t, r) {
                    return async function(n, s) {
                        var o, i;
                        const a = await e.unary(t, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues);
                        return null === (o = null == s ? void 0 : s.onHeader) || void 0 === o || o.call(s, a.header), null === (i = null == s ? void 0 : s.onTrailer) || void 0 === i || i.call(s, a.trailer), a.message;
                    };
                }(t, e, r);
            case n.MethodKind.ServerStreaming:
                return function(e, t, r) {
                    return function(n, s) {
                        return h(e.stream(t, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, (0, a.T$)([
                            n
                        ]), null == s ? void 0 : s.contextValues), s);
                    };
                }(t, e, r);
            case n.MethodKind.ClientStreaming:
                return function(e, t, r) {
                    return async function(n, s) {
                        var a, l, u, d, p, m;
                        const h = await e.stream(t, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues);
                        let f;
                        null === (p = null == s ? void 0 : s.onHeader) || void 0 === p || p.call(s, h.header);
                        let g = 0;
                        try {
                            for(var y, w = !0, v = c(h.message); !(a = (y = await v.next()).done); w = !0){
                                d = y.value, w = !1;
                                f = d, g++;
                            }
                        } catch (e) {
                            l = {
                                error: e
                            };
                        } finally{
                            try {
                                w || a || !(u = v.return) || await u.call(v);
                            } finally{
                                if (l) throw l.error;
                            }
                        }
                        if (!f) throw new o.T("protocol error: missing response message", i.C.Unimplemented);
                        if (g > 1) throw new o.T("protocol error: received extra messages for client streaming method", i.C.Unimplemented);
                        return null === (m = null == s ? void 0 : s.onTrailer) || void 0 === m || m.call(s, h.trailer), f;
                    };
                }(t, e, r);
            case n.MethodKind.BiDiStreaming:
                return function(e, t, r) {
                    return function(n, s) {
                        return h(e.stream(t, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues), s);
                    };
                }(t, e, r);
            default:
                return null;
        }
    });
}
function m(e, t) {
    return p(e, t);
}
function h(e, t) {
    const r = (function() {
        return d(this, arguments, function*() {
            var r, n;
            const s = yield l(e);
            null === (r = null == t ? void 0 : t.onHeader) || void 0 === r || r.call(t, s.header), yield l((yield* u(c(s.message)))), null === (n = null == t ? void 0 : t.onTrailer) || void 0 === n || n.call(t, s.trailer);
        });
    })()[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                next: ()=>r.next()
            })
    };
}
