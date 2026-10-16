"use strict";
require.d(exports, {
    k: ()=>O
});
var n = require("./module-328.js"), s = require("./module-8032.js"), i = require("./module-971.js"), o = require("./module-6657.js"), a = require("./module-6551.js"), u = require("./module-3524.js");
function c(t, e) {
    if (null === t) return {};
    const r = /^(\d{1,8})([HMSmun])$/.exec(t);
    if (null === r) return {
        error: new n.T(`protocol error: invalid grpc timeout value: ${t}`, s.C.InvalidArgument)
    };
    const i = {
        H: 36e5,
        M: 6e4,
        S: 1e3,
        m: 1,
        u: .001,
        n: 1e-6
    }[r[2]] * parseInt(r[1]);
    return i > e ? {
        timeoutMs: i,
        error: new n.T(`timeout ${i}ms must be <= ${e}`, s.C.InvalidArgument)
    } : {
        timeoutMs: i
    };
}
var l = require("./module-1190.js"), m = require("./module-8205.js"), d = require("./module-3352.js"), f = require("./module-6367.js"), p = require("./module-7572.js"), h = require("./module-719.js"), g = require("./module-878.js"), A = require("./module-8926.js"), _ = require("./module-2083.js");
const y = "grpc-web", w = "POST";
function S(t) {
    const e = (0, A.sO)(t), r = (0, o.A7)();
    function S(t) {
        const A = function(t, e, r) {
            const f = (0, g.Qg)(r.method, t.binaryOptions, t.jsonOptions, t);
            return async function(p) {
                (0, _.s4)(p);
                const g = (0, u.xk)(p.header.get(a.Z_));
                if (null == g || g.text) return _._L;
                if (p.method !== w) return _.nZ;
                const A = c(p.header.get(a.hR), t.maxTimeoutMs), S = (0, i.OD)(Object.assign(Object.assign({}, r), {
                    requestMethod: p.method,
                    protocolName: y,
                    timeoutMs: A.timeoutMs,
                    shutdownSignal: t.shutdownSignal,
                    requestSignal: p.signal,
                    requestHeader: p.header,
                    url: p.url,
                    responseHeader: {
                        [a.Z_]: g.binary ? u.y : u.q2
                    },
                    responseTrailer: {
                        [a.OJ]: l.P$
                    },
                    contextValues: p.contextValues
                })), J = (0, d.B)(t.acceptCompression, p.header.get(a.LB), p.header.get(a.JA), a.JA);
                J.response && S.responseHeader.set(a.LB, J.response.name);
                const B = (0, m.Fs)(p.body, (0, m.p_)(()=>{
                    if (J.error) throw J.error;
                    if (A.error) throw A.error;
                }), (0, m.pY)(t.readMaxBytes), (0, m.ew)(J.request, t.readMaxBytes), (0, m.uv)(f.getI(g.binary), o.oK)), E = (0, h.H)(r, S, t.interceptors)(B)[Symbol.asyncIterator](), I = (0, m.Fs)({
                    [Symbol.asyncIterator]: ()=>({
                            next: ()=>E.next(),
                            throw: (t)=>{
                                var e, r;
                                return S.abort(t), null !== (r = null === (e = E.throw) || void 0 === e ? void 0 : e.call(E, t)) && void 0 !== r ? r : Promise.reject({
                                    done: !0
                                });
                            },
                            return: (t)=>{
                                var e, r;
                                return S.abort(), null !== (r = null === (e = E.return) || void 0 === e ? void 0 : e.call(E, t)) && void 0 !== r ? r : Promise.resolve({
                                    done: !0,
                                    value: t
                                });
                            }
                        })
                }, (0, m.XO)(f.getO(g.binary)), (0, m.du)((t)=>(S.abort(), t instanceof n.T ? (0, l.uW)(S.responseTrailer, t) : void 0 !== t && (0, l.uW)(S.responseTrailer, new n.T("internal error", s.C.Internal, void 0, void 0, t)), {
                        flags: o.oK,
                        data: e.serialize(S.responseTrailer)
                    })), (0, m.fM)(J.response, t.compressMinBytes), (0, m.yQ)(), {
                    propagateDownStreamError: !0
                });
                return Object.assign(Object.assign({}, _.rJ), {
                    body: await (0, m.zm)(I),
                    header: S.responseHeader
                });
            };
        }(e, r, t);
        return Object.assign(A, {
            protocolNames: [
                y
            ],
            allowedMethods: [
                w
            ],
            supportedContentType: (0, f.Y)(u.Bp),
            requestPath: (0, p.j)("/", t.service, t.method),
            service: t.service,
            method: t.method
        });
    }
    return S.protocolName = y, S;
}
var J = require("./module-6125.js");
const B = "grpc", E = "POST";
function I(t) {
    const e = (0, A.sO)(t);
    function r(t) {
        const r = function(t, e) {
            const r = (0, g.Qg)(e.method, t.binaryOptions, t.jsonOptions, t);
            return async function(o) {
                (0, _.s4)(o);
                const u = (0, J.xk)(o.header.get(a.Z_));
                if (null == u) return _._L;
                if (o.method !== E) return _.nZ;
                const f = c(o.header.get(a.hR), t.maxTimeoutMs), p = (0, i.OD)(Object.assign(Object.assign({}, e), {
                    requestMethod: o.method,
                    protocolName: B,
                    timeoutMs: f.timeoutMs,
                    shutdownSignal: t.shutdownSignal,
                    requestSignal: o.signal,
                    requestHeader: o.header,
                    url: o.url,
                    responseHeader: {
                        [a.Z_]: u.binary ? J.y : J.q2
                    },
                    responseTrailer: {
                        [a.OJ]: l.P$
                    },
                    contextValues: o.contextValues
                })), g = (0, d.B)(t.acceptCompression, o.header.get(a.LB), o.header.get(a.JA), a.JA);
                g.response && p.responseHeader.set(a.LB, g.response.name);
                const A = (0, m.Fs)(o.body, (0, m.p_)(()=>{
                    if (g.error) throw g.error;
                    if (f.error) throw f.error;
                }), (0, m.pY)(t.readMaxBytes), (0, m.ew)(g.request, t.readMaxBytes), (0, m.uv)(r.getI(u.binary))), y = (0, h.H)(e, p, t.interceptors)(A)[Symbol.asyncIterator](), w = (0, m.Fs)({
                    [Symbol.asyncIterator]: ()=>({
                            next: ()=>y.next(),
                            throw: (t)=>{
                                var e, r;
                                return p.abort(t), null !== (r = null === (e = y.throw) || void 0 === e ? void 0 : e.call(y, t)) && void 0 !== r ? r : Promise.reject({
                                    done: !0
                                });
                            },
                            return: (t)=>{
                                var e, r;
                                return p.abort(), null !== (r = null === (e = y.return) || void 0 === e ? void 0 : e.call(y, t)) && void 0 !== r ? r : Promise.resolve({
                                    done: !0,
                                    value: t
                                });
                            }
                        })
                }, (0, m.XO)(r.getO(u.binary)), (0, m.fM)(g.response, t.compressMinBytes), (0, m.yQ)(), (0, m.du)((t)=>{
                    p.abort(), t instanceof n.T ? (0, l.uW)(p.responseTrailer, t) : void 0 !== t && (0, l.uW)(p.responseTrailer, new n.T("internal error", s.C.Internal, void 0, void 0, t));
                }), {
                    propagateDownStreamError: !0
                });
                return Object.assign(Object.assign({}, _.rJ), {
                    body: await (0, m.zm)(w),
                    header: p.responseHeader,
                    trailer: p.responseTrailer
                });
            };
        }(e, t);
        return Object.assign(r, {
            protocolNames: [
                B
            ],
            allowedMethods: [
                E
            ],
            supportedContentType: (0, f.Y)(J.Bp),
            requestPath: (0, p.j)("/", t.service, t.method),
            service: t.service,
            method: t.method
        });
    }
    return r.protocolName = B, r;
}
var C = require("./module-6038.js"), b = require("./module-129.js"), k = require("./module-685.js"), v = require("./module-9726.js"), q = require("./module-1187.js"), R = require("./module-6536.js");
function P(t, e) {
    if (null === t) return {};
    const r = /^\d{1,10}$/.exec(t);
    if (null === r) return {
        error: new n.T(`protocol error: invalid connect timeout value: ${t}`, s.C.InvalidArgument)
    };
    const i = parseInt(r[0]);
    return i > e ? {
        timeoutMs: i,
        error: new n.T(`timeout ${i}ms must be <= ${e}`, s.C.InvalidArgument)
    } : {
        timeoutMs: parseInt(r[0])
    };
}
var T = require("./module-216.js"), x = require("./module-7645.js"), N = require("./module-6229.js");
const D = "connect", U = "POST", Q = "GET";
function M(t) {
    const e = (0, A.sO)(t), r = (0, k.Q8)(e.jsonOptions);
    function o(t) {
        let o, a;
        const u = (0, g.Qg)(t.method, e.binaryOptions, e.jsonOptions, e);
        if (t.kind === C.MethodKind.Unary) a = b.aq, o = function(t, e, r) {
            return async function(o) {
                const a = o.method == Q;
                if (a && e.method.idempotency != C.MethodIdempotency.NoSideEffects) return _.nZ;
                const u = new URL(o.url).searchParams, c = a ? u.get(T.I7) : o.header.get(q.kq), l = a ? (0, b.lZ)(u.get(T.Bv)) : (0, b.xk)(o.header.get(q.Z_));
                if (null == l || l.stream) return _._L;
                const f = P(o.header.get(q.hR), t.maxTimeoutMs), p = (0, i.OD)(Object.assign(Object.assign({}, e), {
                    requestMethod: o.method,
                    protocolName: D,
                    timeoutMs: f.timeoutMs,
                    shutdownSignal: t.shutdownSignal,
                    requestSignal: o.signal,
                    requestHeader: o.header,
                    url: o.url,
                    responseHeader: {
                        [q.Z_]: l.binary ? b.Vs : b.Br
                    },
                    contextValues: o.contextValues
                })), g = (0, d.B)(t.acceptCompression, c, o.header.get(q.Eu), q.Eu);
                let A, y = _.rJ.status;
                try {
                    if (t.requireConnectProtocolHeader && (a ? (0, N.hi)(u) : (0, N.B)(o.header)), g.error) throw g.error;
                    if (f.error) throw f.error;
                    let i;
                    i = a ? await async function(t, e, r) {
                        var n;
                        const s = r.get(T.P1), i = null !== (n = r.get(T.J8)) && void 0 !== n ? n : "";
                        let o;
                        o = "1" === s ? C.protoBase64.dec(i) : (new TextEncoder).encode(i);
                        e && (o = await e.decompress(o, t));
                        return o;
                    }(t.readMaxBytes, g.request, u) : await async function(t, e, r) {
                        if ("object" == typeof r.body && null !== r.body && Symbol.asyncIterator in r.body) {
                            let n = await (0, m.Xw)(r.body, t, r.header.get(q.qs));
                            return e && (n = await e.decompress(n, t)), n;
                        }
                        return r.body;
                    }(t.readMaxBytes, g.request, o);
                    const c = function(t, e, r, i) {
                        if (i instanceof Uint8Array) return r.getI(e).parse(i);
                        if (e) throw new n.T("received parsed JSON request body, but content-type indicates binary format", s.C.Internal);
                        try {
                            return t.I.fromJson(i);
                        } catch (t) {
                            throw n.T.from(t, s.C.InvalidArgument);
                        }
                    }(e.method, l.binary, r, i), d = await (0, h.s)(e, p, c, t.interceptors);
                    A = r.getO(l.binary).serialize(d);
                } catch (e) {
                    let r;
                    r = e instanceof n.T ? e : new n.T("internal error", s.C.Internal, void 0, void 0, e), y = (0, R.r)(r.code), p.responseHeader.set(q.Z_, b.Br), r.metadata.forEach((t, e)=>{
                        p.responseHeader.set(e, t);
                    }), A = (0, v.Bm)(r, t.jsonOptions);
                } finally{
                    p.abort();
                }
                g.response && A.byteLength >= t.compressMinBytes && (A = await g.response.compress(A), p.responseHeader.set(q.kq, g.response.name));
                const w = (0, x.E)(p.responseHeader, p.responseTrailer);
                return w.set(q.qs, A.byteLength.toString(10)), {
                    status: y,
                    body: (0, m.T$)([
                        A
                    ]),
                    header: w
                };
            };
        }(e, t, u);
        else a = b.jE, o = function(t, e, r, o) {
            return async function(a) {
                (0, _.s4)(a);
                const u = (0, b.xk)(a.header.get(q.Z_));
                if (null == u || !u.stream) return _._L;
                if (a.method !== U) return _.nZ;
                const c = P(a.header.get(q.hR), t.maxTimeoutMs), l = (0, i.OD)(Object.assign(Object.assign({}, e), {
                    requestMethod: a.method,
                    protocolName: D,
                    timeoutMs: c.timeoutMs,
                    shutdownSignal: t.shutdownSignal,
                    requestSignal: a.signal,
                    requestHeader: a.header,
                    url: a.url,
                    responseHeader: {
                        [q.Z_]: u.binary ? b.Sg : b.yU
                    },
                    contextValues: a.contextValues
                })), f = (0, d.B)(t.acceptCompression, a.header.get(q.jL), a.header.get(q.dk), q.dk);
                f.response && l.responseHeader.set(q.jL, f.response.name);
                const p = (0, m.Fs)(a.body, (0, m.p_)(()=>{
                    if (t.requireConnectProtocolHeader && (0, N.B)(a.header), f.error) throw f.error;
                    if (c.error) throw c.error;
                }), (0, m.pY)(t.readMaxBytes), (0, m.ew)(f.request, t.readMaxBytes), (0, m.uv)(r.getI(u.binary), k.Cu)), g = (0, h.H)(e, l, t.interceptors)(p)[Symbol.asyncIterator](), A = (0, m.Fs)({
                    [Symbol.asyncIterator]: ()=>({
                            next: ()=>g.next(),
                            throw: (t)=>{
                                var e, r;
                                return l.abort(t), null !== (r = null === (e = g.throw) || void 0 === e ? void 0 : e.call(g, t)) && void 0 !== r ? r : Promise.reject({
                                    done: !0
                                });
                            },
                            return: (t)=>{
                                var e, r;
                                return l.abort(), null !== (r = null === (e = g.return) || void 0 === e ? void 0 : e.call(g, t)) && void 0 !== r ? r : Promise.resolve({
                                    done: !0,
                                    value: t
                                });
                            }
                        })
                }, (0, m.XO)(r.getO(u.binary)), (0, m.du)((t)=>{
                    l.abort();
                    const e = {
                        metadata: l.responseTrailer
                    };
                    return t instanceof n.T ? e.error = t : void 0 !== t && (e.error = new n.T("internal error", s.C.Internal, void 0, void 0, t)), {
                        flags: k.Cu,
                        data: o.serialize(e)
                    };
                }), (0, m.fM)(f.response, t.compressMinBytes), (0, m.yQ)(), {
                    propagateDownStreamError: !0
                });
                return Object.assign(Object.assign({}, _.rJ), {
                    body: await (0, m.zm)(A),
                    header: l.responseHeader
                });
            };
        }(e, t, u, r);
        const c = [
            U
        ];
        return t.method.idempotency === C.MethodIdempotency.NoSideEffects && c.push(Q), Object.assign(o, {
            protocolNames: [
                D
            ],
            supportedContentType: (0, f.Y)(a),
            allowedMethods: c,
            requestPath: (0, p.j)("/", t.service, t.method),
            service: t.service,
            method: t.method
        });
    }
    return o.protocolName = D, o;
}
function O(t) {
    const e = F(t), r = [];
    return {
        handlers: r,
        service (t, n, s) {
            const { protocols: o } = F(s, e);
            return r.push(...(0, A.SW)((0, i.bz)(t, n), o)), this;
        },
        rpc (t, n, s, o) {
            let a, u, c, l;
            "typeName" in t ? (a = t, u = n, c = s, l = o) : (a = Object.assign(Object.assign({}, t.service), {
                methods: {}
            }), u = t, c = n, l = s);
            const { protocols: m } = F(l, e);
            return r.push((0, A.JC)((0, i.B8)(a, u, c), m)), this;
        }
    };
}
function F(t, e) {
    if (e && !t) return e;
    const r = e ? Object.assign(Object.assign({}, (0, A.sO)(e.options)), t) : Object.assign(Object.assign({}, t), (0, A.sO)(null != t ? t : {})), i = [];
    if (!1 !== (null == t ? void 0 : t.grpc) && i.push(I(r)), !1 !== (null == t ? void 0 : t.grpcWeb) && i.push(S(r)), !1 !== (null == t ? void 0 : t.connect) && i.push(M(r)), 0 === i.length) throw new n.T("cannot create handler, all protocols are disabled", s.C.InvalidArgument);
    return {
        options: r,
        protocols: i
    };
}
