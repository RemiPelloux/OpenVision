require.d(exports, {
    UU: ()=>f
});
var r = require(36038);
var o = require(42761), i = require(47777), a = require("./module-53131.js"), l = function(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e, n = t[Symbol.asyncIterator];
    return n ? n.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
        return this;
    }, e);
    function r(n) {
        e[n] = t[n] && function(e) {
            return new Promise(function(r, o) {
                (function(t, e, n, r) {
                    Promise.resolve(r).then(function(e) {
                        t({
                            value: e,
                            done: n
                        });
                    }, e);
                })(r, o, (e = t[n](e)).done, e.value);
            });
        };
    }
}, u = function(t) {
    return this instanceof u ? (this.v = t, this) : new u(t);
}, s = function(t) {
    var e, n;
    return e = {}, r("next"), r("throw", function(t) {
        throw t;
    }), r("return"), e[Symbol.iterator] = function() {
        return this;
    }, e;
    function r(r, o) {
        e[r] = t[r] ? function(e) {
            return (n = !n) ? {
                value: u(t[r](e)),
                done: !1
            } : o ? o(e) : e;
        } : o;
    }
}, c = function(t, e, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r, o = n.apply(t, e || []), i = [];
    return r = {}, a("next"), a("throw"), a("return", function(t) {
        return function(e) {
            return Promise.resolve(e).then(t, c);
        };
    }), r[Symbol.asyncIterator] = function() {
        return this;
    }, r;
    function a(t, e) {
        o[t] && (r[t] = function(e) {
            return new Promise(function(n, r) {
                i.push([
                    t,
                    e,
                    n,
                    r
                ]) > 1 || l(t, e);
            });
        }, e && (r[t] = e(r[t])));
    }
    function l(t, e) {
        try {
            (n = o[t](e)).value instanceof u ? Promise.resolve(n.value.v).then(s, c) : f(i[0][2], n);
        } catch (t) {
            f(i[0][3], t);
        }
        var n;
    }
    function s(t) {
        l("next", t);
    }
    function c(t) {
        l("throw", t);
    }
    function f(t, e) {
        t(e), i.shift(), i.length && l(i[0][0], i[0][1]);
    }
};
function f(t, e) {
    return function(t, e) {
        const n = {};
        for (const [r, o] of Object.entries(t.methods)){
            const i = e(Object.assign(Object.assign({}, o), {
                localName: r,
                service: t
            }));
            null != i && (n[r] = i);
        }
        return n;
    }(t, (n)=>{
        switch(n.kind){
            case r.MethodKind.Unary:
                return function(t, e, n) {
                    return async function(r, o) {
                        var i, a;
                        const l = await t.unary(e, n, null == o ? void 0 : o.signal, null == o ? void 0 : o.timeoutMs, null == o ? void 0 : o.headers, r, null == o ? void 0 : o.contextValues);
                        return null === (i = null == o ? void 0 : o.onHeader) || void 0 === i || i.call(o, l.header), null === (a = null == o ? void 0 : o.onTrailer) || void 0 === a || a.call(o, l.trailer), l.message;
                    };
                }(e, t, n);
            case r.MethodKind.ServerStreaming:
                return function(t, e, n) {
                    return function(r, o) {
                        return d(t.stream(e, n, null == o ? void 0 : o.signal, null == o ? void 0 : o.timeoutMs, null == o ? void 0 : o.headers, (0, a.T$)([
                            r
                        ]), null == o ? void 0 : o.contextValues), o);
                    };
                }(e, t, n);
            case r.MethodKind.ClientStreaming:
                return function(t, e, n) {
                    return async function(r, a) {
                        var u, s, c, f, d, y;
                        const h = await t.stream(e, n, null == a ? void 0 : a.signal, null == a ? void 0 : a.timeoutMs, null == a ? void 0 : a.headers, r, null == a ? void 0 : a.contextValues);
                        let v;
                        null === (d = null == a ? void 0 : a.onHeader) || void 0 === d || d.call(a, h.header);
                        let w = 0;
                        try {
                            for(var m, g = !0, b = l(h.message); !(u = (m = await b.next()).done); g = !0){
                                f = m.value, g = !1;
                                v = f, w++;
                            }
                        } catch (t) {
                            s = {
                                error: t
                            };
                        } finally{
                            try {
                                g || u || !(c = b.return) || await c.call(b);
                            } finally{
                                if (s) throw s.error;
                            }
                        }
                        if (!v) throw new o.T("protocol error: missing response message", i.C.Unimplemented);
                        if (w > 1) throw new o.T("protocol error: received extra messages for client streaming method", i.C.Unimplemented);
                        return null === (y = null == a ? void 0 : a.onTrailer) || void 0 === y || y.call(a, h.trailer), v;
                    };
                }(e, t, n);
            case r.MethodKind.BiDiStreaming:
                return function(t, e, n) {
                    return function(r, o) {
                        return d(t.stream(e, n, null == o ? void 0 : o.signal, null == o ? void 0 : o.timeoutMs, null == o ? void 0 : o.headers, r, null == o ? void 0 : o.contextValues), o);
                    };
                }(e, t, n);
            default:
                return null;
        }
    });
}
function d(t, e) {
    const n = (function() {
        return c(this, arguments, function*() {
            var n, r;
            const o = yield u(t);
            null === (n = null == e ? void 0 : e.onHeader) || void 0 === n || n.call(e, o.header), yield u((yield* s(l(o.message)))), null === (r = null == e ? void 0 : e.onTrailer) || void 0 === r || r.call(e, o.trailer);
        });
    })()[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                next: ()=>n.next()
            })
    };
}
