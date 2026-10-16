"use strict";
require.r(exports), require.d(exports, {
    Code: ()=>s.C,
    ConnectError: ()=>n.T,
    appendHeaders: ()=>o.Pb,
    cors: ()=>w,
    createCallbackClient: ()=>u,
    createClient: ()=>p.UU,
    createConnectRouter: ()=>m.k,
    createContextKey: ()=>v.n,
    createContextValues: ()=>v.k,
    createHandlerContext: ()=>h.OD,
    createMethodImplSpec: ()=>h.B8,
    createPromiseClient: ()=>p.t0,
    createRouterTransport: ()=>S,
    createServiceImplSpec: ()=>h.bz,
    decodeBinaryHeader: ()=>o.by,
    encodeBinaryHeader: ()=>o.Zj,
    makeAnyClient: ()=>a.w
});
var n = require("./module-92801.js"), s = require("./module-84959.js"), o = require("./module-42481.js"), i = require("./module-36038.js"), a = require("./module-45760.js"), c = require("./module-2788.js"), l = function(e) {
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
};
function u(e, t) {
    return (0, a.w)(e, (r)=>{
        switch(r.kind){
            case i.MethodKind.Unary:
                return function(e, t, r) {
                    return function(o, i, a) {
                        const c = new AbortController;
                        return a = d(c, a), e.unary(t, r, c.signal, a.timeoutMs, a.headers, o, a.contextValues).then((e)=>{
                            var t, r;
                            null === (t = a.onHeader) || void 0 === t || t.call(a, e.header), null === (r = a.onTrailer) || void 0 === r || r.call(a, e.trailer), i(void 0, e.message);
                        }, (e)=>{
                            const t = n.T.from(e, s.C.Internal);
                            t.code === s.C.Canceled && c.signal.aborted || i(t, new r.O);
                        }), ()=>c.abort();
                    };
                }(t, e, r);
            case i.MethodKind.ServerStreaming:
                return function(e, t, r) {
                    return function(o, i, a, u) {
                        const p = new AbortController;
                        async function m() {
                            var n, s, m, h, f, g;
                            u = d(p, u);
                            const y = await e.stream(t, r, u.signal, u.timeoutMs, u.headers, (0, c.T$)([
                                o
                            ]), u.contextValues);
                            null === (f = u.onHeader) || void 0 === f || f.call(u, y.header);
                            try {
                                for(var w, v = !0, _ = l(y.message); !(n = (w = await _.next()).done); v = !0){
                                    h = w.value, v = !1;
                                    i(h);
                                }
                            } catch (e) {
                                s = {
                                    error: e
                                };
                            } finally{
                                try {
                                    v || n || !(m = _.return) || await m.call(_);
                                } finally{
                                    if (s) throw s.error;
                                }
                            }
                            null === (g = u.onTrailer) || void 0 === g || g.call(u, y.trailer), a(void 0);
                        }
                        return m().catch((e)=>{
                            const t = n.T.from(e, s.C.Internal);
                            t.code === s.C.Canceled && p.signal.aborted ? a(void 0) : a(t);
                        }), ()=>p.abort();
                    };
                }(t, e, r);
            default:
                return null;
        }
    });
}
function d(e, t) {
    return (null == t ? void 0 : t.signal) && (t.signal.addEventListener("abort", ()=>e.abort()), t.signal.aborted && e.abort()), Object.assign(Object.assign({}, t), {
        signal: e.signal
    });
}
var p = require("./module-46421.js"), m = require("./module-46705.js"), h = require("./module-79064.js"), f = require("./module-60284.js"), g = require("./module-46930.js"), y = require("./module-77853.js");
const w = {
    allowedMethods: [
        "POST",
        "GET"
    ],
    allowedHeaders: [
        f.Z_,
        f._U,
        f.hR,
        f.jL,
        f.dk,
        f.kq,
        f.Eu,
        g.TW,
        y.E,
        y.SY,
        g.hR
    ],
    exposedHeaders: [
        g.OJ,
        g.vw,
        g.P7,
        f.kq,
        f.jL
    ]
};
var v = require("./module-84934.js"), _ = require("./module-33574.js"), A = require("./module-12869.js");
function S(e, t) {
    var r, n;
    const s = (0, m.k)(Object.assign(Object.assign({}, null !== (r = null == t ? void 0 : t.router) && void 0 !== r ? r : {}), {
        connect: !0
    }));
    return e(s), (0, _.o)(Object.assign({
        httpClient: (0, A.N)(s.handlers),
        baseUrl: "https://in-memory",
        useBinaryFormat: !0,
        interceptors: [],
        acceptCompression: [],
        sendCompression: null,
        compressMinBytes: Number.MAX_SAFE_INTEGER,
        readMaxBytes: Number.MAX_SAFE_INTEGER,
        writeMaxBytes: Number.MAX_SAFE_INTEGER
    }, null !== (n = null == t ? void 0 : t.transport) && void 0 !== n ? n : {}));
}
