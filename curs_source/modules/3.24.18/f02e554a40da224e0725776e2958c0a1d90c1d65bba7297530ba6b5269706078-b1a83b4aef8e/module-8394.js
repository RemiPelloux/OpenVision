"use strict";
require.r(exports), require.d(exports, {
    Code: ()=>s.C,
    ConnectError: ()=>n.T,
    appendHeaders: ()=>i.Pb,
    cors: ()=>E,
    createCallbackClient: ()=>l,
    createClient: ()=>g,
    createConnectRouter: ()=>y.k,
    createContextKey: ()=>I.n,
    createContextValues: ()=>I.k,
    createHandlerContext: ()=>w.OD,
    createMethodImplSpec: ()=>w.B8,
    createPromiseClient: ()=>A,
    createRouterTransport: ()=>k,
    createServiceImplSpec: ()=>w.bz,
    decodeBinaryHeader: ()=>i.by,
    encodeBinaryHeader: ()=>i.Zj,
    makeAnyClient: ()=>a
});
var n = require("./module-328.js"), s = require("./module-8032.js"), i = require("./module-6422.js"), o = require("./module-6038.js");
function a(t, e) {
    const r = {};
    for (const [n, s] of Object.entries(t.methods)){
        const i = e(Object.assign(Object.assign({}, s), {
            localName: n,
            service: t
        }));
        null != i && (r[n] = i);
    }
    return r;
}
var u = require("./module-8205.js"), c = function(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e, r = t[Symbol.asyncIterator];
    return r ? r.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
        return this;
    }, e);
    function n(r) {
        e[r] = t[r] && function(e) {
            return new Promise(function(n, s) {
                (function(t, e, r, n) {
                    Promise.resolve(n).then(function(e) {
                        t({
                            value: e,
                            done: r
                        });
                    }, e);
                })(n, s, (e = t[r](e)).done, e.value);
            });
        };
    }
};
function l(t, e) {
    return a(t, (r)=>{
        switch(r.kind){
            case o.MethodKind.Unary:
                return function(t, e, r) {
                    return function(i, o, a) {
                        const u = new AbortController;
                        return a = m(u, a), t.unary(e, r, u.signal, a.timeoutMs, a.headers, i, a.contextValues).then((t)=>{
                            var e, r;
                            null === (e = a.onHeader) || void 0 === e || e.call(a, t.header), null === (r = a.onTrailer) || void 0 === r || r.call(a, t.trailer), o(void 0, t.message);
                        }, (t)=>{
                            const e = n.T.from(t, s.C.Internal);
                            e.code === s.C.Canceled && u.signal.aborted || o(e, new r.O);
                        }), ()=>u.abort();
                    };
                }(e, t, r);
            case o.MethodKind.ServerStreaming:
                return function(t, e, r) {
                    return function(i, o, a, l) {
                        const d = new AbortController;
                        async function f() {
                            var n, s, f, p, h, g;
                            l = m(d, l);
                            const A = await t.stream(e, r, l.signal, l.timeoutMs, l.headers, (0, u.T$)([
                                i
                            ]), l.contextValues);
                            null === (h = l.onHeader) || void 0 === h || h.call(l, A.header);
                            try {
                                for(var _, y = !0, w = c(A.message); !(n = (_ = await w.next()).done); y = !0){
                                    p = _.value, y = !1;
                                    o(p);
                                }
                            } catch (t) {
                                s = {
                                    error: t
                                };
                            } finally{
                                try {
                                    y || n || !(f = w.return) || await f.call(w);
                                } finally{
                                    if (s) throw s.error;
                                }
                            }
                            null === (g = l.onTrailer) || void 0 === g || g.call(l, A.trailer), a(void 0);
                        }
                        return f().catch((t)=>{
                            const e = n.T.from(t, s.C.Internal);
                            e.code === s.C.Canceled && d.signal.aborted ? a(void 0) : a(e);
                        }), ()=>d.abort();
                    };
                }(e, t, r);
            default:
                return null;
        }
    });
}
function m(t, e) {
    return (null == e ? void 0 : e.signal) && (e.signal.addEventListener("abort", ()=>t.abort()), e.signal.aborted && t.abort()), Object.assign(Object.assign({}, e), {
        signal: t.signal
    });
}
var d = function(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e, r = t[Symbol.asyncIterator];
    return r ? r.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
        return this;
    }, e);
    function n(r) {
        e[r] = t[r] && function(e) {
            return new Promise(function(n, s) {
                (function(t, e, r, n) {
                    Promise.resolve(n).then(function(e) {
                        t({
                            value: e,
                            done: r
                        });
                    }, e);
                })(n, s, (e = t[r](e)).done, e.value);
            });
        };
    }
}, f = function(t) {
    return this instanceof f ? (this.v = t, this) : new f(t);
}, p = function(t) {
    var e, r;
    return e = {}, n("next"), n("throw", function(t) {
        throw t;
    }), n("return"), e[Symbol.iterator] = function() {
        return this;
    }, e;
    function n(n, s) {
        e[n] = t[n] ? function(e) {
            return (r = !r) ? {
                value: f(t[n](e)),
                done: !1
            } : s ? s(e) : e;
        } : s;
    }
}, h = function(t, e, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(t, e || []), i = [];
    return n = {}, o("next"), o("throw"), o("return", function(t) {
        return function(e) {
            return Promise.resolve(e).then(t, c);
        };
    }), n[Symbol.asyncIterator] = function() {
        return this;
    }, n;
    function o(t, e) {
        s[t] && (n[t] = function(e) {
            return new Promise(function(r, n) {
                i.push([
                    t,
                    e,
                    r,
                    n
                ]) > 1 || a(t, e);
            });
        }, e && (n[t] = e(n[t])));
    }
    function a(t, e) {
        try {
            (r = s[t](e)).value instanceof f ? Promise.resolve(r.value.v).then(u, c) : l(i[0][2], r);
        } catch (t) {
            l(i[0][3], t);
        }
        var r;
    }
    function u(t) {
        a("next", t);
    }
    function c(t) {
        a("throw", t);
    }
    function l(t, e) {
        t(e), i.shift(), i.length && a(i[0][0], i[0][1]);
    }
};
function g(t, e) {
    return a(t, (r)=>{
        switch(r.kind){
            case o.MethodKind.Unary:
                return function(t, e, r) {
                    return async function(n, s) {
                        var i, o;
                        const a = await t.unary(e, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues);
                        return null === (i = null == s ? void 0 : s.onHeader) || void 0 === i || i.call(s, a.header), null === (o = null == s ? void 0 : s.onTrailer) || void 0 === o || o.call(s, a.trailer), a.message;
                    };
                }(e, t, r);
            case o.MethodKind.ServerStreaming:
                return function(t, e, r) {
                    return function(n, s) {
                        return _(t.stream(e, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, (0, u.T$)([
                            n
                        ]), null == s ? void 0 : s.contextValues), s);
                    };
                }(e, t, r);
            case o.MethodKind.ClientStreaming:
                return function(t, e, r) {
                    return async function(i, o) {
                        var a, u, c, l, m, f;
                        const p = await t.stream(e, r, null == o ? void 0 : o.signal, null == o ? void 0 : o.timeoutMs, null == o ? void 0 : o.headers, i, null == o ? void 0 : o.contextValues);
                        let h;
                        null === (m = null == o ? void 0 : o.onHeader) || void 0 === m || m.call(o, p.header);
                        let g = 0;
                        try {
                            for(var A, _ = !0, y = d(p.message); !(a = (A = await y.next()).done); _ = !0){
                                l = A.value, _ = !1;
                                h = l, g++;
                            }
                        } catch (t) {
                            u = {
                                error: t
                            };
                        } finally{
                            try {
                                _ || a || !(c = y.return) || await c.call(y);
                            } finally{
                                if (u) throw u.error;
                            }
                        }
                        if (!h) throw new n.T("protocol error: missing response message", s.C.Unimplemented);
                        if (g > 1) throw new n.T("protocol error: received extra messages for client streaming method", s.C.Unimplemented);
                        return null === (f = null == o ? void 0 : o.onTrailer) || void 0 === f || f.call(o, p.trailer), h;
                    };
                }(e, t, r);
            case o.MethodKind.BiDiStreaming:
                return function(t, e, r) {
                    return function(n, s) {
                        return _(t.stream(e, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues), s);
                    };
                }(e, t, r);
            default:
                return null;
        }
    });
}
function A(t, e) {
    return g(t, e);
}
function _(t, e) {
    const r = (function() {
        return h(this, arguments, function*() {
            var r, n;
            const s = yield f(t);
            null === (r = null == e ? void 0 : e.onHeader) || void 0 === r || r.call(e, s.header), yield f((yield* p(d(s.message)))), null === (n = null == e ? void 0 : e.onTrailer) || void 0 === n || n.call(e, s.trailer);
        });
    })()[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                next: ()=>r.next()
            })
    };
}
var y = require("./module-1992.js"), w = require("./module-971.js"), S = require("./module-1187.js"), J = require("./module-6551.js"), B = require("./module-1428.js");
const E = {
    allowedMethods: [
        "POST",
        "GET"
    ],
    allowedHeaders: [
        S.Z_,
        S._U,
        S.hR,
        S.jL,
        S.dk,
        S.kq,
        S.Eu,
        J.TW,
        B.E,
        B.SY,
        J.hR
    ],
    exposedHeaders: [
        J.OJ,
        J.vw,
        J.P7,
        S.kq,
        S.jL
    ]
};
var I = require("./module-3621.js"), C = require("./module-1303.js"), b = require("./module-2172.js");
function k(t, e) {
    var r, n;
    const s = (0, y.k)(Object.assign(Object.assign({}, null !== (r = null == e ? void 0 : e.router) && void 0 !== r ? r : {}), {
        connect: !0
    }));
    return t(s), (0, C.o)(Object.assign({
        httpClient: (0, b.N)(s.handlers),
        baseUrl: "https://in-memory",
        useBinaryFormat: !0,
        interceptors: [],
        acceptCompression: [],
        sendCompression: null,
        compressMinBytes: Number.MAX_SAFE_INTEGER,
        readMaxBytes: Number.MAX_SAFE_INTEGER,
        writeMaxBytes: Number.MAX_SAFE_INTEGER
    }, null !== (n = null == e ? void 0 : e.transport) && void 0 !== n ? n : {}));
}
