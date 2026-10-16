"use strict";
require.d(exports, {
    k: ()=>U
});
var n = require("./module-92801.js"), s = require("./module-84959.js"), o = require("./module-79064.js"), i = require("./module-56776.js"), a = require("./module-46930.js"), c = require("./module-3615.js");
function l(e, t) {
    if (null === e) return {};
    const r = /^(\d{1,8})([HMSmun])$/.exec(e);
    if (null === r) return {
        error: new n.T(`protocol error: invalid grpc timeout value: ${e}`, s.C.InvalidArgument)
    };
    const o = {
        H: 36e5,
        M: 6e4,
        S: 1e3,
        m: 1,
        u: .001,
        n: 1e-6
    }[r[2]] * parseInt(r[1]);
    return o > t ? {
        timeoutMs: o,
        error: new n.T(`timeout ${o}ms must be <= ${t}`, s.C.InvalidArgument)
    } : {
        timeoutMs: o
    };
}
var u = require("./module-3435.js"), d = require("./module-2788.js"), p = require("./module-59675.js"), m = require("./module-26306.js"), h = require("./module-12563.js"), f = require("./module-90932.js"), g = require("./module-98433.js"), y = require("./module-36553.js"), w = require("./module-26380.js");
const v = "grpc-web", _ = "POST";
function A(e) {
    const t = (0, y.sO)(e), r = (0, i.A7)();
    function A(e) {
        const y = function(e, t, r) {
            const m = (0, g.Qg)(r.method, e.binaryOptions, e.jsonOptions, e);
            return async function(h) {
                (0, w.s4)(h);
                const g = (0, c.xk)(h.header.get(a.Z_));
                if (null == g || g.text) return w._L;
                if (h.method !== _) return w.nZ;
                const y = l(h.header.get(a.hR), e.maxTimeoutMs), A = (0, o.OD)(Object.assign(Object.assign({}, r), {
                    requestMethod: h.method,
                    protocolName: v,
                    timeoutMs: y.timeoutMs,
                    shutdownSignal: e.shutdownSignal,
                    requestSignal: h.signal,
                    requestHeader: h.header,
                    url: h.url,
                    responseHeader: {
                        [a.Z_]: g.binary ? c.y : c.q2
                    },
                    responseTrailer: {
                        [a.OJ]: u.P$
                    },
                    contextValues: h.contextValues
                })), S = (0, p.B)(e.acceptCompression, h.header.get(a.LB), h.header.get(a.JA), a.JA);
                S.response && A.responseHeader.set(a.LB, S.response.name);
                const b = (0, d.Fs)(h.body, (0, d.p_)(()=>{
                    if (S.error) throw S.error;
                    if (y.error) throw y.error;
                }), (0, d.pY)(e.readMaxBytes), (0, d.ew)(S.request, e.readMaxBytes), (0, d.uv)(m.getI(g.binary), i.oK)), E = (0, f.H)(r, A, e.interceptors)(b)[Symbol.asyncIterator](), I = (0, d.Fs)({
                    [Symbol.asyncIterator]: ()=>({
                            next: ()=>E.next(),
                            throw: (e)=>{
                                var t, r;
                                return A.abort(e), null !== (r = null === (t = E.throw) || void 0 === t ? void 0 : t.call(E, e)) && void 0 !== r ? r : Promise.reject({
                                    done: !0
                                });
                            },
                            return: (e)=>{
                                var t, r;
                                return A.abort(), null !== (r = null === (t = E.return) || void 0 === t ? void 0 : t.call(E, e)) && void 0 !== r ? r : Promise.resolve({
                                    done: !0,
                                    value: e
                                });
                            }
                        })
                }, (0, d.XO)(m.getO(g.binary)), (0, d.du)((e)=>(A.abort(), e instanceof n.T ? (0, u.uW)(A.responseTrailer, e) : void 0 !== e && (0, u.uW)(A.responseTrailer, new n.T("internal error", s.C.Internal, void 0, void 0, e)), {
                        flags: i.oK,
                        data: t.serialize(A.responseTrailer)
                    })), (0, d.fM)(S.response, e.compressMinBytes), (0, d.yQ)(), {
                    propagateDownStreamError: !0
                });
                return Object.assign(Object.assign({}, w.rJ), {
                    body: await (0, d.zm)(I),
                    header: A.responseHeader
                });
            };
        }(t, r, e);
        return Object.assign(y, {
            protocolNames: [
                v
            ],
            allowedMethods: [
                _
            ],
            supportedContentType: (0, m.Y)(c.Bp),
            requestPath: (0, h.j)("/", e.service, e.method),
            service: e.service,
            method: e.method
        });
    }
    return A.protocolName = v, A;
}
var S = require("./module-48014.js");
const b = "grpc", E = "POST";
function I(e) {
    const t = (0, y.sO)(e);
    function r(e) {
        const r = function(e, t) {
            const r = (0, g.Qg)(t.method, e.binaryOptions, e.jsonOptions, e);
            return async function(i) {
                (0, w.s4)(i);
                const c = (0, S.xk)(i.header.get(a.Z_));
                if (null == c) return w._L;
                if (i.method !== E) return w.nZ;
                const m = l(i.header.get(a.hR), e.maxTimeoutMs), h = (0, o.OD)(Object.assign(Object.assign({}, t), {
                    requestMethod: i.method,
                    protocolName: b,
                    timeoutMs: m.timeoutMs,
                    shutdownSignal: e.shutdownSignal,
                    requestSignal: i.signal,
                    requestHeader: i.header,
                    url: i.url,
                    responseHeader: {
                        [a.Z_]: c.binary ? S.y : S.q2
                    },
                    responseTrailer: {
                        [a.OJ]: u.P$
                    },
                    contextValues: i.contextValues
                })), g = (0, p.B)(e.acceptCompression, i.header.get(a.LB), i.header.get(a.JA), a.JA);
                g.response && h.responseHeader.set(a.LB, g.response.name);
                const y = (0, d.Fs)(i.body, (0, d.p_)(()=>{
                    if (g.error) throw g.error;
                    if (m.error) throw m.error;
                }), (0, d.pY)(e.readMaxBytes), (0, d.ew)(g.request, e.readMaxBytes), (0, d.uv)(r.getI(c.binary))), v = (0, f.H)(t, h, e.interceptors)(y)[Symbol.asyncIterator](), _ = (0, d.Fs)({
                    [Symbol.asyncIterator]: ()=>({
                            next: ()=>v.next(),
                            throw: (e)=>{
                                var t, r;
                                return h.abort(e), null !== (r = null === (t = v.throw) || void 0 === t ? void 0 : t.call(v, e)) && void 0 !== r ? r : Promise.reject({
                                    done: !0
                                });
                            },
                            return: (e)=>{
                                var t, r;
                                return h.abort(), null !== (r = null === (t = v.return) || void 0 === t ? void 0 : t.call(v, e)) && void 0 !== r ? r : Promise.resolve({
                                    done: !0,
                                    value: e
                                });
                            }
                        })
                }, (0, d.XO)(r.getO(c.binary)), (0, d.fM)(g.response, e.compressMinBytes), (0, d.yQ)(), (0, d.du)((e)=>{
                    h.abort(), e instanceof n.T ? (0, u.uW)(h.responseTrailer, e) : void 0 !== e && (0, u.uW)(h.responseTrailer, new n.T("internal error", s.C.Internal, void 0, void 0, e));
                }), {
                    propagateDownStreamError: !0
                });
                return Object.assign(Object.assign({}, w.rJ), {
                    body: await (0, d.zm)(_),
                    header: h.responseHeader,
                    trailer: h.responseTrailer
                });
            };
        }(t, e);
        return Object.assign(r, {
            protocolNames: [
                b
            ],
            allowedMethods: [
                E
            ],
            supportedContentType: (0, m.Y)(S.Bp),
            requestPath: (0, h.j)("/", e.service, e.method),
            service: e.service,
            method: e.method
        });
    }
    return r.protocolName = b, r;
}
var C = require("./module-36038.js"), k = require("./module-69068.js"), x = require("./module-37816.js"), T = require("./module-33751.js"), R = require("./module-60284.js"), B = require("./module-54959.js");
function P(e, t) {
    if (null === e) return {};
    const r = /^\d{1,10}$/.exec(e);
    if (null === r) return {
        error: new n.T(`protocol error: invalid connect timeout value: ${e}`, s.C.InvalidArgument)
    };
    const o = parseInt(r[0]);
    return o > t ? {
        timeoutMs: o,
        error: new n.T(`timeout ${o}ms must be <= ${t}`, s.C.InvalidArgument)
    } : {
        timeoutMs: parseInt(r[0])
    };
}
var J = require("./module-24473.js"), M = require("./module-22970.js"), q = require("./module-42514.js");
const D = "connect", O = "POST", N = "GET";
function F(e) {
    const t = (0, y.sO)(e), r = (0, x.Q8)(t.jsonOptions);
    function i(e) {
        let i, a;
        const c = (0, g.Qg)(e.method, t.binaryOptions, t.jsonOptions, t);
        if (e.kind === C.MethodKind.Unary) a = k.aq, i = function(e, t, r) {
            return async function(i) {
                const a = i.method == N;
                if (a && t.method.idempotency != C.MethodIdempotency.NoSideEffects) return w.nZ;
                const c = new URL(i.url).searchParams, l = a ? c.get(J.I7) : i.header.get(R.kq), u = a ? (0, k.lZ)(c.get(J.Bv)) : (0, k.xk)(i.header.get(R.Z_));
                if (null == u || u.stream) return w._L;
                const m = P(i.header.get(R.hR), e.maxTimeoutMs), h = (0, o.OD)(Object.assign(Object.assign({}, t), {
                    requestMethod: i.method,
                    protocolName: D,
                    timeoutMs: m.timeoutMs,
                    shutdownSignal: e.shutdownSignal,
                    requestSignal: i.signal,
                    requestHeader: i.header,
                    url: i.url,
                    responseHeader: {
                        [R.Z_]: u.binary ? k.Vs : k.Br
                    },
                    contextValues: i.contextValues
                })), g = (0, p.B)(e.acceptCompression, l, i.header.get(R.Eu), R.Eu);
                let y, v = w.rJ.status;
                try {
                    if (e.requireConnectProtocolHeader && (a ? (0, q.hi)(c) : (0, q.B)(i.header)), g.error) throw g.error;
                    if (m.error) throw m.error;
                    let o;
                    o = a ? await async function(e, t, r) {
                        var n;
                        const s = r.get(J.P1), o = null !== (n = r.get(J.J8)) && void 0 !== n ? n : "";
                        let i;
                        i = "1" === s ? C.protoBase64.dec(o) : (new TextEncoder).encode(o);
                        t && (i = await t.decompress(i, e));
                        return i;
                    }(e.readMaxBytes, g.request, c) : await async function(e, t, r) {
                        if ("object" == typeof r.body && null !== r.body && Symbol.asyncIterator in r.body) {
                            let n = await (0, d.Xw)(r.body, e, r.header.get(R.qs));
                            return t && (n = await t.decompress(n, e)), n;
                        }
                        return r.body;
                    }(e.readMaxBytes, g.request, i);
                    const l = function(e, t, r, o) {
                        if (o instanceof Uint8Array) return r.getI(t).parse(o);
                        if (t) throw new n.T("received parsed JSON request body, but content-type indicates binary format", s.C.Internal);
                        try {
                            return e.I.fromJson(o);
                        } catch (e) {
                            throw n.T.from(e, s.C.InvalidArgument);
                        }
                    }(t.method, u.binary, r, o), p = await (0, f.s)(t, h, l, e.interceptors);
                    y = r.getO(u.binary).serialize(p);
                } catch (t) {
                    let r;
                    r = t instanceof n.T ? t : new n.T("internal error", s.C.Internal, void 0, void 0, t), v = (0, B.r)(r.code), h.responseHeader.set(R.Z_, k.Br), r.metadata.forEach((e, t)=>{
                        h.responseHeader.set(t, e);
                    }), y = (0, T.Bm)(r, e.jsonOptions);
                } finally{
                    h.abort();
                }
                g.response && y.byteLength >= e.compressMinBytes && (y = await g.response.compress(y), h.responseHeader.set(R.kq, g.response.name));
                const _ = (0, M.E)(h.responseHeader, h.responseTrailer);
                return _.set(R.qs, y.byteLength.toString(10)), {
                    status: v,
                    body: (0, d.T$)([
                        y
                    ]),
                    header: _
                };
            };
        }(t, e, c);
        else a = k.jE, i = function(e, t, r, i) {
            return async function(a) {
                (0, w.s4)(a);
                const c = (0, k.xk)(a.header.get(R.Z_));
                if (null == c || !c.stream) return w._L;
                if (a.method !== O) return w.nZ;
                const l = P(a.header.get(R.hR), e.maxTimeoutMs), u = (0, o.OD)(Object.assign(Object.assign({}, t), {
                    requestMethod: a.method,
                    protocolName: D,
                    timeoutMs: l.timeoutMs,
                    shutdownSignal: e.shutdownSignal,
                    requestSignal: a.signal,
                    requestHeader: a.header,
                    url: a.url,
                    responseHeader: {
                        [R.Z_]: c.binary ? k.Sg : k.yU
                    },
                    contextValues: a.contextValues
                })), m = (0, p.B)(e.acceptCompression, a.header.get(R.jL), a.header.get(R.dk), R.dk);
                m.response && u.responseHeader.set(R.jL, m.response.name);
                const h = (0, d.Fs)(a.body, (0, d.p_)(()=>{
                    if (e.requireConnectProtocolHeader && (0, q.B)(a.header), m.error) throw m.error;
                    if (l.error) throw l.error;
                }), (0, d.pY)(e.readMaxBytes), (0, d.ew)(m.request, e.readMaxBytes), (0, d.uv)(r.getI(c.binary), x.Cu)), g = (0, f.H)(t, u, e.interceptors)(h)[Symbol.asyncIterator](), y = (0, d.Fs)({
                    [Symbol.asyncIterator]: ()=>({
                            next: ()=>g.next(),
                            throw: (e)=>{
                                var t, r;
                                return u.abort(e), null !== (r = null === (t = g.throw) || void 0 === t ? void 0 : t.call(g, e)) && void 0 !== r ? r : Promise.reject({
                                    done: !0
                                });
                            },
                            return: (e)=>{
                                var t, r;
                                return u.abort(), null !== (r = null === (t = g.return) || void 0 === t ? void 0 : t.call(g, e)) && void 0 !== r ? r : Promise.resolve({
                                    done: !0,
                                    value: e
                                });
                            }
                        })
                }, (0, d.XO)(r.getO(c.binary)), (0, d.du)((e)=>{
                    u.abort();
                    const t = {
                        metadata: u.responseTrailer
                    };
                    return e instanceof n.T ? t.error = e : void 0 !== e && (t.error = new n.T("internal error", s.C.Internal, void 0, void 0, e)), {
                        flags: x.Cu,
                        data: i.serialize(t)
                    };
                }), (0, d.fM)(m.response, e.compressMinBytes), (0, d.yQ)(), {
                    propagateDownStreamError: !0
                });
                return Object.assign(Object.assign({}, w.rJ), {
                    body: await (0, d.zm)(y),
                    header: u.responseHeader
                });
            };
        }(t, e, c, r);
        const l = [
            O
        ];
        return e.method.idempotency === C.MethodIdempotency.NoSideEffects && l.push(N), Object.assign(i, {
            protocolNames: [
                D
            ],
            supportedContentType: (0, m.Y)(a),
            allowedMethods: l,
            requestPath: (0, h.j)("/", e.service, e.method),
            service: e.service,
            method: e.method
        });
    }
    return i.protocolName = D, i;
}
function U(e) {
    const t = L(e), r = [];
    return {
        handlers: r,
        service (e, n, s) {
            const { protocols: i } = L(s, t);
            return r.push(...(0, y.SW)((0, o.bz)(e, n), i)), this;
        },
        rpc (e, n, s, i) {
            let a, c, l, u;
            "typeName" in e ? (a = e, c = n, l = s, u = i) : (a = Object.assign(Object.assign({}, e.service), {
                methods: {}
            }), c = e, l = n, u = s);
            const { protocols: d } = L(u, t);
            return r.push((0, y.JC)((0, o.B8)(a, c, l), d)), this;
        }
    };
}
function L(e, t) {
    if (t && !e) return t;
    const r = t ? Object.assign(Object.assign({}, (0, y.sO)(t.options)), e) : Object.assign(Object.assign({}, e), (0, y.sO)(null != e ? e : {})), o = [];
    if (!1 !== (null == e ? void 0 : e.grpc) && o.push(I(r)), !1 !== (null == e ? void 0 : e.grpcWeb) && o.push(A(r)), !1 !== (null == e ? void 0 : e.connect) && o.push(F(r)), 0 === o.length) throw new n.T("cannot create handler, all protocols are disabled", s.C.InvalidArgument);
    return {
        options: r,
        protocols: o
    };
}
