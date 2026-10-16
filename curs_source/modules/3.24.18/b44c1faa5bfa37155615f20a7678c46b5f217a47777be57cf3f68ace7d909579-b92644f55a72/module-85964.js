"use strict";
require.r(exports), require.d(exports, {
    Http2SessionManager: ()=>H,
    compressionBrotli: ()=>O,
    compressionGzip: ()=>D,
    connectNodeAdapter: ()=>Se,
    createConnectTransport: ()=>me,
    createGrpcTransport: ()=>de,
    createGrpcWebTransport: ()=>ne,
    createNodeHttpClient: ()=>K,
    universalRequestFromNodeRequest: ()=>ve,
    universalResponseToNodeResponse: ()=>_e
});
var n = require("./module-3881.js");
const [s] = process.versions.node.split(".").map((e)=>parseInt(e, 10));
s < 18 && void 0 === globalThis.Headers && (globalThis.Headers = n.Headers);
var o = require("./module-84959.js"), i = require("./module-92801.js"), a = require("./module-46930.js"), c = require("./module-3435.js");
function l(e, t) {
    const r = (0, c.N)(e);
    if (r) throw t.forEach((e, t)=>{
        r.metadata.append(t, e);
    }), r;
    if (!t.has(a.OJ) && !e.has(a.OJ)) throw new i.T("protocol error: missing status", o.C.Internal);
}
var u = require("./module-77853.js"), d = require("./module-3615.js");
function p(e, t, r, n, s, o) {
    const i = function(e, t, r, n) {
        const s = new Headers(null != r ? r : {});
        return s.set(a.Z_, e ? d.y : d.q2), s.set(u.E, "1"), s.set(u.SY, "connect-es/1.6.1"), n && s.set(a.qy, "connect-es/1.6.1"), void 0 !== t && s.set(a.hR, `${t}m`), s;
    }(e, t, r, o);
    return null != s && i.set(a.LB, s.name), n.length > 0 && i.set(a.JA, n.map((e)=>e.name).join(",")), i;
}
function m(e) {
    switch(e){
        case 400:
            return o.C.Internal;
        case 401:
            return o.C.Unauthenticated;
        case 403:
            return o.C.PermissionDenied;
        case 404:
            return o.C.Unimplemented;
        case 429:
        case 502:
        case 503:
        case 504:
            return o.C.Unavailable;
        default:
            return o.C.Unknown;
    }
}
function h(e, t, r) {
    const { foundStatus: n, headerError: s } = function(e, t) {
        var r;
        if (e >= 200 && e < 300) return {
            foundStatus: t.has(a.OJ),
            headerError: (0, c.N)(t)
        };
        throw new i.T(decodeURIComponent(null !== (r = t.get(a.vw)) && void 0 !== r ? r : `HTTP ${e}`), m(e), t);
    }(t, r);
    let l;
    const u = r.get(a.LB);
    if (null !== u && "identity" !== u.toLowerCase() && (l = e.find((e)=>e.name === u), !l)) throw new i.T(`unsupported response encoding "${u}"`, o.C.Internal, r);
    return {
        foundStatus: n,
        compression: l,
        headerError: s
    };
}
var f = require("./module-56776.js"), g = require("./module-2788.js"), y = require("./module-12563.js"), w = require("./module-98681.js"), v = require("./module-98433.js"), _ = require("./module-84934.js"), A = function(e) {
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
}, S = function(e) {
    return this instanceof S ? (this.v = e, this) : new S(e);
}, b = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(e, t || []), o = [];
    return n = {}, i("next"), i("throw"), i("return", function(e) {
        return function(t) {
            return Promise.resolve(t).then(e, l);
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
            (r = s[e](t)).value instanceof S ? Promise.resolve(r.value.v).then(c, l) : u(o[0][2], r);
        } catch (e) {
            u(o[0][3], e);
        }
        var r;
    }
    function c(e) {
        a("next", e);
    }
    function l(e) {
        a("throw", e);
    }
    function u(e, t) {
        e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
    }
};
var E, I = require("./module-78503.js"), C = require("./module-43106.js"), k = require("./module-39023.js");
function x(e) {
    let t = o.C.Internal;
    const r = T(e).map(R);
    r.some((e)=>"ERR_STREAM_WRITE_AFTER_END" == e.code) || r.some((e)=>"ERR_STREAM_DESTROYED" == e.code || "ERR_HTTP2_INVALID_STREAM" == e.code || "ECONNRESET" == e.code) ? t = o.C.Aborted : r.some((e)=>"ETIMEDOUT" == e.code || "ENOTFOUND" == e.code || "EAI_AGAIN" == e.code || "ECONNREFUSED" == e.code) && (t = o.C.Unavailable);
    const n = i.T.from(e, t);
    return n !== e && (n.cause = e), n;
}
function T(e) {
    const t = [];
    for(; e instanceof Error && !t.includes(e) && (t.push(e), "cause" in e);)e = e.cause;
    return t;
}
function R(e) {
    const t = {};
    return e instanceof Error && ("code" in e && "string" == typeof e.code && (t.code = e.code), "syscall" in e && "string" == typeof e.syscall && (t.syscall = e.syscall)), t;
}
function B(e) {
    switch(e){
        case E.PROTOCOL_ERROR:
        case E.INTERNAL_ERROR:
        case E.FLOW_CONTROL_ERROR:
        case E.SETTINGS_TIMEOUT:
        case E.FRAME_SIZE_ERROR:
        case E.COMPRESSION_ERROR:
        case E.CONNECT_ERROR:
            return new i.T(`http/2 stream closed with error code ${E[e]} (0x${e.toString(16)})`, o.C.Internal);
        case E.REFUSED_STREAM:
            return new i.T(`http/2 stream closed with error code ${E[e]} (0x${e.toString(16)})`, o.C.Unavailable);
        case E.CANCEL:
            return new i.T(`http/2 stream closed with error code ${E[e]} (0x${e.toString(16)})`, o.C.Canceled);
        case E.ENHANCE_YOUR_CALM:
            return new i.T(`http/2 stream closed with error code ${E[e]} (0x${e.toString(16)})`, o.C.ResourceExhausted);
        case E.INADEQUATE_SECURITY:
        case E.HTTP_1_1_REQUIRED:
            return new i.T(`http/2 stream closed with error code ${E[e]} (0x${e.toString(16)})`, o.C.PermissionDenied);
        case E.STREAM_CLOSED:
    }
}
!function(e) {
    e[e.PROTOCOL_ERROR = 1] = "PROTOCOL_ERROR", e[e.INTERNAL_ERROR = 2] = "INTERNAL_ERROR", e[e.FLOW_CONTROL_ERROR = 3] = "FLOW_CONTROL_ERROR", e[e.SETTINGS_TIMEOUT = 4] = "SETTINGS_TIMEOUT", e[e.STREAM_CLOSED = 5] = "STREAM_CLOSED", e[e.FRAME_SIZE_ERROR = 6] = "FRAME_SIZE_ERROR", e[e.REFUSED_STREAM = 7] = "REFUSED_STREAM", e[e.CANCEL = 8] = "CANCEL", e[e.COMPRESSION_ERROR = 9] = "COMPRESSION_ERROR", e[e.CONNECT_ERROR = 10] = "CONNECT_ERROR", e[e.ENHANCE_YOUR_CALM = 11] = "ENHANCE_YOUR_CALM", e[e.INADEQUATE_SECURITY = 12] = "INADEQUATE_SECURITY", e[e.HTTP_1_1_REQUIRED = 13] = "HTTP_1_1_REQUIRED";
}(E || (E = {}));
const P = (0, k.promisify)(C.gzip), J = (0, k.promisify)(C.gunzip), M = (0, k.promisify)(C.brotliCompress), q = (0, k.promisify)(C.brotliDecompress), D = {
    name: "gzip",
    compress: (e)=>P(e, {}),
    decompress: (e, t)=>0 == e.length ? Promise.resolve(new Uint8Array(0)) : N(J(e, {
            maxOutputLength: t
        }), t)
}, O = {
    name: "br",
    compress: (e)=>M(e, {}),
    decompress: (e, t)=>0 == e.length ? Promise.resolve(new Uint8Array(0)) : N(q(e, {
            maxOutputLength: t
        }), t)
};
function N(e, t) {
    return e.catch((e)=>{
        const r = R(e);
        let n = o.C.Internal, s = "decompression failed";
        switch(r.code){
            case "ERR_BUFFER_TOO_LARGE":
                n = o.C.ResourceExhausted, s = `message is larger than configured readMaxBytes ${t} after decompression`;
                break;
            case "Z_DATA_ERROR":
            case "ERR_PADDING_2":
                n = o.C.InvalidArgument;
                break;
            default:
                void 0 !== r.code && r.code.startsWith("ERR__ERROR_FORMAT_") && (n = o.C.InvalidArgument);
        }
        return Promise.reject(new i.T(s, n, void 0, void 0, e));
    });
}
var F = require("./module-85675.js"), U = require("./module-58611.js"), L = require("./module-65692.js");
function $(e) {
    const t = new Headers;
    for (const [r, n] of Object.entries(e))if (!r.startsWith(":") && void 0 !== n) if ("string" == typeof n) t.append(r, n);
    else if ("number" == typeof n) t.append(r, String(n));
    else for (const e of n)t.append(r, e);
    return t;
}
function Q(e, t) {
    if (void 0 === e && void 0 === t) return;
    const r = Object.create(null);
    if (void 0 !== t) for (const [e, n] of Object.entries(t))Array.isArray(n) ? r[e] = n.concat() : void 0 !== n && (r[e] = n);
    if (void 0 !== e) if (Array.isArray(e)) for (const [t, n] of e)j(r, t, n);
    else if ("forEach" in e) "function" == typeof e.forEach && e.forEach((e, t)=>{
        j(r, t, e);
    });
    else for (const [t, n] of Object.entries(e))j(r, t, n);
    return r;
}
function j(e, t, r) {
    const n = e[t = t.toLowerCase()];
    Array.isArray(n) ? n.push(r) : e[t] = void 0 === n ? r : [
        n.toString(),
        r
    ];
}
var G = require("./module-84672.js");
class H {
    state() {
        return "ready" == this.s.t ? void 0 !== this.verifying ? "verifying" : this.s.streamCount() > 0 ? "open" : "idle" : this.s.t;
    }
    error() {
        if ("error" == this.s.t) return this.s.reason;
    }
    constructor(e, t, r){
        var n, s, o, i;
        this.s = {
            t: "closed"
        }, this.shuttingDown = [], this.authority = new URL(e).origin, this.http2SessionOptions = r, this.options = {
            pingIntervalMs: null !== (n = null == t ? void 0 : t.pingIntervalMs) && void 0 !== n ? n : Number.POSITIVE_INFINITY,
            pingTimeoutMs: null !== (s = null == t ? void 0 : t.pingTimeoutMs) && void 0 !== s ? s : 15e3,
            pingIdleConnection: null !== (o = null == t ? void 0 : t.pingIdleConnection) && void 0 !== o && o,
            idleConnectionTimeoutMs: null !== (i = null == t ? void 0 : t.idleConnectionTimeoutMs) && void 0 !== i ? i : 9e5
        };
    }
    async connect() {
        try {
            return (await this.gotoReady()).streamCount() > 0 ? "open" : "idle";
        } catch (e) {
            return "error";
        }
    }
    async request(e, t, r, n) {
        for(;;){
            const s = await this.gotoReady();
            try {
                const o = s.conn.request(Object.assign(Object.assign({}, r), {
                    ":method": e,
                    ":path": t
                }), n);
                return s.registerRequest(o), o;
            } catch (e) {
                if (s.conn.closed || s.conn.destroyed) continue;
                throw e;
            }
        }
    }
    notifyResponseByteRead(e) {
        "ready" == this.s.t && this.s.responseByteRead(e);
        for (const t of this.shuttingDown)t.responseByteRead(e);
    }
    abort(e) {
        var t, r, n;
        const s = null != e ? e : new i.T("connection aborted", o.C.Canceled);
        null === (r = (t = this.s).abort) || void 0 === r || r.call(t, s);
        for (const e of this.shuttingDown)null === (n = e.abort) || void 0 === n || n.call(e, s);
        this.setState(z(s));
    }
    abortCurrent(e) {
        var t, r;
        const n = this.s;
        if ("ready" === n.t && n.isShuttingDown()) return;
        const s = null != e ? e : new i.T("connection aborted", o.C.Canceled);
        null === (r = (t = n).abort) || void 0 === r || r.call(t, s);
    }
    captureSessions() {
        const e = [];
        "function" == typeof this.s.abort && e.push(this.s);
        for (const t of this.shuttingDown)-1 === e.indexOf(t) && e.push(t);
        return e;
    }
    async gotoReady() {
        var e;
        for("ready" == this.s.t ? this.s.isShuttingDown() || this.s.conn.closed || this.s.conn.destroyed ? this.setState(W(this.authority, this.http2SessionOptions)) : this.s.requiresVerify() && await this.verify(this.s) : "closed" != this.s.t && "error" != this.s.t || this.setState(W(this.authority, this.http2SessionOptions)); "ready" !== this.s.t;){
            if ("error" === this.s.t) throw this.s.reason;
            if ("unavailable" === this.s.t) throw new i.T("expected h2 session, but ALPN protocol failed to negotiate", o.C.Unavailable, {
                authority: this.authority,
                issuer: null !== (e = this.s.issuer) && void 0 !== e ? e : "unknown"
            });
            "connecting" === this.s.t && await this.s.conn;
        }
        return this.s;
    }
    setState(e) {
        var t, r;
        if (null === (r = (t = this.s).onExitState) || void 0 === r || r.call(t), "ready" == this.s.t && this.s.isShuttingDown()) {
            const e = this.s;
            this.shuttingDown.push(e), e.onClose = e.onError = ()=>{
                const t = this.shuttingDown.indexOf(e);
                -1 !== t && this.shuttingDown.splice(t, 1);
            };
        }
        switch(e.t){
            case "connecting":
                e.conn.then((e)=>{
                    this.setState(function(e, t) {
                        var r, n;
                        if (function(e) {
                            if (e.connecting) throw new i.T("expected open session, but it is connecting", o.C.Internal);
                            if (e.destroyed) throw new i.T("expected open session, but it is destroyed", o.C.Internal);
                            if (e.closed) throw new i.T("expected open session, but it is closed", o.C.Internal);
                        }(e), !0 === e.encrypted && "h2" !== e.alpnProtocol) {
                            var s = e.socket, a = null == s ? void 0 : s.getPeerCertificate, c = "function" == typeof a ? null === (n = null === (r = a.call(s)) || void 0 === r ? void 0 : r.issuer) || void 0 === n ? void 0 : n.CN : void 0;
                            return e.destroyed || e.destroy(), {
                                t: "unavailable",
                                issuer: c
                            };
                        }
                        e.unref();
                        let l, u, d, p = Date.now(), m = 0, h = !1, f = !1;
                        S();
                        const g = {
                            t: "ready",
                            conn: e,
                            streamCount: ()=>m,
                            requiresVerify: ()=>Date.now() - p > t.pingIntervalMs,
                            isShuttingDown: ()=>h,
                            onClose: void 0,
                            onError: void 0,
                            registerRequest (t) {
                                m++, 1 == m && (e.ref(), y(), A()), t.once("response", ()=>{
                                    p = Date.now(), y();
                                }), t.once("close", ()=>{
                                    m--, 0 == m && (e.unref(), y(), S());
                                });
                            },
                            responseByteRead (t) {
                                t.session === e && (e.closed || e.destroyed || m <= 0 || (p = Date.now(), y()));
                            },
                            verify: ()=>(e.ref(), new Promise((r)=>{
                                    let n = !1;
                                    const s = (t)=>{
                                        n || (n = !0, clearTimeout(c), e.off("error", a), e.off("close", a), t && 0 == m && e.unref(), r(t));
                                    }, a = ()=>s(!1);
                                    e.on("error", a), e.on("close", a);
                                    const c = V(()=>{
                                        g.abort(new i.T("PING timed out", o.C.Unavailable)), s(!1);
                                    }, t.pingTimeoutMs);
                                    _(()=>s(!0));
                                })),
                            abort (t) {
                                e.destroyed || (e.once("error", ()=>{}), e.destroy(t, F.constants.NGHTTP2_CANCEL));
                            },
                            onExitState () {
                                g.isShuttingDown() || (k(), this.onError = void 0, this.onClose = void 0);
                            }
                        };
                        function y() {
                            w(), (m > 0 || t.pingIdleConnection) && (l = V(v, t.pingIntervalMs));
                        }
                        function w() {
                            clearTimeout(l), clearTimeout(u);
                        }
                        function v() {
                            _(y);
                        }
                        function _(r) {
                            clearTimeout(u), u = V(()=>{
                                e.destroy(new i.T("PING timed out", o.C.Unavailable), F.constants.NGHTTP2_CANCEL);
                            }, t.pingTimeoutMs), e.ping((n, s)=>{
                                clearTimeout(u), null === n && (s > t.pingTimeoutMs ? e.destroy(new i.T("PING timed out", o.C.Unavailable), F.constants.NGHTTP2_CANCEL) : (p = Date.now(), r()));
                            });
                        }
                        function A() {
                            clearTimeout(d);
                        }
                        function S() {
                            d = V(b, t.idleConnectionTimeoutMs);
                        }
                        function b() {
                            e.close(), I();
                        }
                        function E(r, n, s) {
                            h = !0;
                            const a = Buffer.from("too_many_pings", "ascii");
                            if (r === F.constants.NGHTTP2_ENHANCE_YOUR_CALM && null != s && s.equals(a) && (t.pingIntervalMs = 2 * t.pingIntervalMs, f = !0), r === F.constants.NGHTTP2_NO_ERROR) {
                                const t = parseInt(process.versions.node.split(".")[0], 10);
                                0 == m && t >= 18 && e.destroy(new i.T("received GOAWAY without any open streams", o.C.Canceled), F.constants.NGHTTP2_NO_ERROR);
                            }
                        }
                        function I() {
                            var e;
                            k(), null === (e = g.onClose) || void 0 === e || e.call(g);
                        }
                        function C(e) {
                            var t, r;
                            if (k(), f) {
                                const e = new i.T(`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${F.constants.NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, o.C.ResourceExhausted);
                                null === (t = g.onError) || void 0 === t || t.call(g, e);
                            } else null === (r = g.onError) || void 0 === r || r.call(g, x(e));
                        }
                        function k() {
                            w(), A(), e.off("error", C), e.off("close", I), e.off("goaway", E);
                        }
                        return e.on("error", C), e.on("close", I), e.on("goaway", E), g;
                    }(e, this.options));
                }, (e)=>{
                    this.setState(z(e));
                });
                break;
            case "ready":
                e.onClose = ()=>this.setState({
                        t: "closed"
                    }), e.onError = (e)=>this.setState(z(e));
        }
        this.s = e;
    }
    verify(e) {
        return void 0 !== this.verifying || (this.verifying = e.verify().then((e)=>{
            e || this.setState(W(this.authority, this.http2SessionOptions));
        }, (e)=>{
            this.setState(z(e));
        }).finally(()=>{
            this.verifying = void 0;
        })), this.verifying;
    }
}
function z(e) {
    return e instanceof i.T && i.T.from(e).code == o.C.Canceled ? {
        t: "closed"
    } : function(e) {
        return {
            t: "error",
            reason: e
        };
    }(e);
}
function W(e, t) {
    let r, n;
    const s = new Promise((e, t)=>{
        r = e, n = t;
    }), o = F.connect(e, t);
    function i() {
        null == r || r(o), c();
    }
    function a(e) {
        null == n || n(x(e)), c();
    }
    function c() {
        o.off("connect", i), o.off("error", a);
    }
    return o.on("connect", i), o.on("error", a), {
        t: "connecting",
        conn: s,
        abort (e) {
            o.destroyed || o.destroy(void 0, F.constants.NGHTTP2_CANCEL), null == n || n(e);
        },
        onExitState () {
            c();
        }
    };
}
function V(e, t) {
    if (!(t > 2147483647)) return setTimeout(e, t).unref();
}
function K(e) {
    var t, r;
    if ("1.1" == e.httpVersion) return r = e.nodeOptions, async function(e) {
        const t = te(e.signal);
        return new Promise((n, s)=>{
            t.catch((e)=>{
                s(e);
            }), function(e, t, r, n) {
                let s;
                s = new URL(t).protocol.startsWith("https") ? L.request(t, r) : U.request(t, r), e.catch((e)=>s.destroy(x(e))), s.flushHeaders(), s.on("error", e.reject), s.on("socket", function(e) {
                    function t() {
                        e.off("connect", t), n(s);
                    }
                    "open" === e.readyState ? n(s) : e.on("connect", t);
                });
            }(t, e.url, Object.assign(Object.assign({}, r), {
                headers: Q(e.header, null == r ? void 0 : r.headers),
                method: e.method
            }), (r)=>{
                ee(e, r, t), r.on("response", (e)=>{
                    var r;
                    e.on("error", t.reject), t.catch((t)=>e.destroy(x(t)));
                    const s = new Headers;
                    n({
                        status: null !== (r = e.statusCode) && void 0 !== r ? r : 0,
                        header: $(e.headers),
                        body: Y(t, e, s),
                        trailer: s
                    });
                });
            });
        });
    };
    return function(e) {
        return function(t) {
            const r = te(t.signal), n = e(t.url);
            return new Promise((e, s)=>{
                r.catch((e)=>{
                    s(e);
                }), function(e, t, r, n, s, a, c) {
                    const l = new URL(r);
                    if (l.origin !== t.authority) {
                        const r = `cannot make a request to ${l.origin}: the http2 session is connected to ${t.authority}`;
                        return void e.reject(new i.T(r, o.C.Internal));
                    }
                    t.request(n, l.pathname + l.search, s, {}).then((t)=>{
                        e.catch((e)=>{
                            if (t.closed) return;
                            const r = e instanceof i.T && e.code == o.C.Canceled ? E.CANCEL : E.INTERNAL_ERROR;
                            return new Promise((e)=>t.close(r, e));
                        }), t.on("error", function(r) {
                            t.writableEnded && T(r).map(R).some((e)=>"ERR_STREAM_WRITE_AFTER_END" == e.code) || e.reject(r);
                        }), t.on("close", function() {
                            const r = B(t.rstCode);
                            r && e.reject(r);
                        }), c(t);
                    }, (t)=>{
                        e.reject(t);
                    });
                }(r, n, t.url, t.method, Q(t.header), 0, (s)=>{
                    ee(t, s, r), s.on("response", (t)=>{
                        var o;
                        const i = {
                            status: null !== (o = t[":status"]) && void 0 !== o ? o : 0,
                            header: $(t),
                            body: X(r, s, n),
                            trailer: Z(s)
                        };
                        e(i);
                    });
                });
            });
        };
    }(null !== (t = e.sessionProvider) && void 0 !== t ? t : (e)=>new H(e));
}
function Y(e, t, r) {
    const n = t[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                async next () {
                    const s = await e.race(n.next());
                    return !0 === s.done && ($(t.trailers).forEach((e, t)=>{
                        r.set(t, e);
                    }), e.resolve(), await e), s;
                },
                throw (t) {
                    throw e.reject(t), t;
                }
            })
    };
}
function Z(e) {
    const t = new Headers;
    return e.on("trailers", (e)=>{
        $(e).forEach((e, r)=>{
            t.set(r, e);
        });
    }), t;
}
function X(e, t, r) {
    const n = t[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                async next () {
                    const s = await e.race(n.next());
                    return !0 === s.done && (e.resolve(), await e), null == r || r.notifyResponseByteRead(t), s;
                },
                throw (t) {
                    throw e.reject(t), t;
                }
            })
    };
}
async function ee(e, t, r) {
    if (void 0 === e.body) return void await new Promise((e)=>t.end(e));
    const n = e.body[Symbol.asyncIterator]();
    return new Promise((e)=>{
        !function s() {
            if (r.isRejected()) return;
            n.next().then((o)=>{
                !0 !== o.done ? t.write(o.value, "binary", function(e) {
                    null != e ? (void 0 !== n.throw && n.throw(x(e)).catch(()=>{}), t.writableEnded && T(e).map(R).some((e)=>"ERR_STREAM_WRITE_AFTER_END" == e.code) || r.reject(e)) : s();
                }) : t.end(e);
            }, (e)=>{
                r.reject(e);
            });
        }();
    });
}
function te(e) {
    let t, r, n = !1, s = !1;
    const a = new Promise((e, n)=>{
        t = e, r = n;
    }), c = {
        resolve () {
            n || s || (n = !0, null == t || t());
        },
        isResolved: ()=>n,
        reject (e) {
            n || s || (s = !0, null == r || r(x(e)));
        },
        isRejected: ()=>s,
        async race (e) {
            const t = await Promise.race([
                e,
                a
            ]);
            if (void 0 === t && n) throw new i.T("sentinel completed early", o.C.Internal);
            return t;
        }
    }, l = Object.assign(a, c);
    function u() {
        c.reject((0, G.xz)(this));
    }
    return e && (e.aborted ? c.reject((0, G.xz)(e)) : e.addEventListener("abort", u), a.finally(()=>e.removeEventListener("abort", u)).catch(()=>{})), l;
}
function re(e) {
    var t, r, n, s;
    let o;
    if ("2" == e.httpVersion) {
        let t;
        t = e.sessionManager ? e.sessionManager : new H(e.baseUrl, {
            pingIntervalMs: e.pingIntervalMs,
            pingIdleConnection: e.pingIdleConnection,
            pingTimeoutMs: e.pingTimeoutMs,
            idleConnectionTimeoutMs: e.idleConnectionTimeoutMs
        }, e.nodeOptions), o = K({
            httpVersion: "2",
            sessionProvider: ()=>t
        });
    } else o = K({
        httpVersion: "1.1",
        nodeOptions: e.nodeOptions
    });
    return Object.assign(Object.assign(Object.assign({}, e), {
        httpClient: o,
        useBinaryFormat: null === (t = e.useBinaryFormat) || void 0 === t || t,
        interceptors: null !== (r = e.interceptors) && void 0 !== r ? r : [],
        sendCompression: null !== (n = e.sendCompression) && void 0 !== n ? n : null,
        acceptCompression: null !== (s = e.acceptCompression) && void 0 !== s ? s : [
            D,
            O
        ]
    }), (0, I.NL)(e.readMaxBytes, e.writeMaxBytes, e.compressMinBytes));
}
function ne(e) {
    return t = re(e), {
        async unary (e, r, n, s, c, u, d) {
            const m = (0, v.Qg)(r, t.binaryOptions, t.jsonOptions, t);
            return s = void 0 === s ? t.defaultTimeoutMs : s <= 0 ? void 0 : s, await (0, w.L)({
                interceptors: t.interceptors,
                signal: n,
                timeoutMs: s,
                req: {
                    stream: !1,
                    service: e,
                    method: r,
                    url: (0, y.j)(t.baseUrl, e, r),
                    init: {},
                    header: p(t.useBinaryFormat, s, c, t.acceptCompression, t.sendCompression, !0),
                    contextValues: null != d ? d : (0, _.k)(),
                    message: u
                },
                next: async (n)=>{
                    const s = await t.httpClient({
                        url: n.url,
                        method: "POST",
                        header: n.header,
                        signal: n.signal,
                        body: (0, g.Fs)((0, g.T$)([
                            n.message
                        ]), (0, g.XO)(m.getI(t.useBinaryFormat)), (0, g.fM)(t.sendCompression, t.compressMinBytes), (0, g.yQ)(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: c, headerError: u } = h(t.acceptCompression, s.status, s.header), { trailer: d, message: p } = await (0, g.WK)(s.body, (0, g.pY)(t.readMaxBytes), (0, g.ew)(null != c ? c : null, t.readMaxBytes), (0, g.uv)(m.getO(t.useBinaryFormat), f.oK, (0, f.A7)()), async (e)=>{
                        var t, r, n, s;
                        let a, c;
                        try {
                            for(var l, u = !0, d = A(e); !(t = (l = await d.next()).done); u = !0){
                                s = l.value, u = !1;
                                const e = s;
                                if (e.end) {
                                    if (void 0 !== c) throw new i.T("protocol error: received extra trailer", o.C.Unimplemented);
                                    c = e.value;
                                } else {
                                    if (void 0 !== a) throw new i.T("protocol error: received extra output message for unary method", o.C.Unimplemented);
                                    a = e.value;
                                }
                            }
                        } catch (e) {
                            r = {
                                error: e
                            };
                        } finally{
                            try {
                                u || t || !(n = d.return) || await n.call(d);
                            } finally{
                                if (r) throw r.error;
                            }
                        }
                        return {
                            trailer: c,
                            message: a
                        };
                    }, {
                        propagateDownStreamError: !1
                    });
                    if (void 0 === d) {
                        if (null != u) throw u;
                        throw new i.T("protocol error: missing trailer", s.header.has(a.OJ) ? o.C.Unimplemented : o.C.Unknown);
                    }
                    if (l(d, s.header), void 0 === p) throw new i.T("protocol error: missing output message for unary method", d.has(a.OJ) ? o.C.Unimplemented : o.C.Unknown);
                    return {
                        stream: !1,
                        service: e,
                        method: r,
                        header: s.header,
                        message: p,
                        trailer: d
                    };
                }
            });
        },
        async stream (e, r, n, s, a, c, u) {
            const d = (0, v.Qg)(r, t.binaryOptions, t.jsonOptions, t);
            return s = void 0 === s ? t.defaultTimeoutMs : s <= 0 ? void 0 : s, (0, w.u)({
                interceptors: t.interceptors,
                signal: n,
                timeoutMs: s,
                req: {
                    stream: !0,
                    service: e,
                    method: r,
                    url: (0, y.j)(t.baseUrl, e, r),
                    init: {
                        method: "POST",
                        redirect: "error",
                        mode: "cors"
                    },
                    header: p(t.useBinaryFormat, s, a, t.acceptCompression, t.sendCompression, !0),
                    contextValues: null != u ? u : (0, _.k)(),
                    message: c
                },
                next: async (e)=>{
                    const r = await t.httpClient({
                        url: e.url,
                        method: "POST",
                        header: e.header,
                        signal: e.signal,
                        body: (0, g.Fs)(e.message, (0, g.XO)(d.getI(t.useBinaryFormat)), (0, g.fM)(t.sendCompression, t.compressMinBytes), (0, g.yQ)(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: n, foundStatus: s, headerError: a } = h(t.acceptCompression, r.status, r.header);
                    if (a) throw a;
                    const c = Object.assign(Object.assign({}, e), {
                        header: r.header,
                        trailer: new Headers,
                        message: (0, g.Fs)(r.body, (0, g.pY)(t.readMaxBytes), (0, g.ew)(null != n ? n : null, t.readMaxBytes), (0, g.uv)(d.getO(t.useBinaryFormat), f.oK, (0, f.A7)()), function(e) {
                            return b(this, arguments, function*() {
                                var t, n, a, u;
                                if (s) {
                                    if (!0 !== (yield S(e[Symbol.asyncIterator]().next())).done) throw new i.T("protocol error: extra data for trailers-only", o.C.InvalidArgument);
                                    return yield S(void 0);
                                }
                                let d = !1;
                                try {
                                    for(var p, m = !0, h = A(e); !(t = (p = yield S(h.next())).done); m = !0){
                                        u = p.value, m = !1;
                                        const e = u;
                                        if (e.end) {
                                            if (d) throw new i.T("protocol error: received extra trailer", o.C.InvalidArgument);
                                            d = !0, l(e.value, r.header), e.value.forEach((e, t)=>c.trailer.set(t, e));
                                        } else {
                                            if (d) throw new i.T("protocol error: received extra message after trailer", o.C.InvalidArgument);
                                            yield yield S(e.value);
                                        }
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    };
                                } finally{
                                    try {
                                        m || t || !(a = h.return) || (yield S(a.call(h)));
                                    } finally{
                                        if (n) throw n.error;
                                    }
                                }
                                if (!d) throw new i.T("protocol error: missing trailer", o.C.Internal);
                            });
                        }, {
                            propagateDownStreamError: !0
                        })
                    });
                    return c;
                }
            });
        }
    };
    var t;
}
var se = require("./module-48014.js");
function oe(e, t, r, n, s) {
    const o = function(e, t, r) {
        const n = new Headers(null != r ? r : {});
        return n.set(a.Z_, e ? se.y : se.q2), n.set(a.qy, "connect-es/1.6.1"), void 0 !== t && n.set(a.hR, `${t}m`), n.set("Te", "trailers"), n;
    }(e, t, r);
    return null != s && o.set(a.LB, s.name), n.length > 0 && o.set(a.JA, n.map((e)=>e.name).join(",")), o;
}
function ie(e, t, r) {
    const { foundStatus: n, headerError: s } = function(e, t) {
        if (200 != e) throw new i.T(`HTTP ${e}`, m(e), t);
        const r = t.get(a.Z_);
        if (null == (0, se.xk)(r)) throw new i.T(`unsupported content type ${r}`, o.C.Unknown);
        return {
            foundStatus: t.has(a.OJ),
            headerError: (0, c.N)(t)
        };
    }(t, r);
    let l;
    const u = r.get(a.LB);
    if (null !== u && "identity" !== u.toLowerCase() && (l = e.find((e)=>e.name === u), !l)) throw new i.T(`unsupported response encoding "${u}"`, o.C.Internal, r);
    return {
        foundStatus: n,
        compression: l,
        headerError: s
    };
}
var ae = function(e) {
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
}, ce = function(e) {
    return this instanceof ce ? (this.v = e, this) : new ce(e);
}, le = function(e) {
    var t, r;
    return t = {}, n("next"), n("throw", function(e) {
        throw e;
    }), n("return"), t[Symbol.iterator] = function() {
        return this;
    }, t;
    function n(n, s) {
        t[n] = e[n] ? function(t) {
            return (r = !r) ? {
                value: ce(e[n](t)),
                done: !1
            } : s ? s(t) : t;
        } : s;
    }
}, ue = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(e, t || []), o = [];
    return n = {}, i("next"), i("throw"), i("return", function(e) {
        return function(t) {
            return Promise.resolve(t).then(e, l);
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
            (r = s[e](t)).value instanceof ce ? Promise.resolve(r.value.v).then(c, l) : u(o[0][2], r);
        } catch (e) {
            u(o[0][3], e);
        }
        var r;
    }
    function c(e) {
        a("next", e);
    }
    function l(e) {
        a("throw", e);
    }
    function u(e, t) {
        e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
    }
};
function de(e) {
    return t = re(e), {
        async unary (e, r, n, s, c, u, d) {
            const p = (0, v.Qg)(r, t.binaryOptions, t.jsonOptions, t);
            return s = void 0 === s ? t.defaultTimeoutMs : s <= 0 ? void 0 : s, await (0, w.L)({
                interceptors: t.interceptors,
                signal: n,
                timeoutMs: s,
                req: {
                    stream: !1,
                    service: e,
                    method: r,
                    url: (0, y.j)(t.baseUrl, e, r),
                    init: {},
                    header: oe(t.useBinaryFormat, s, c, t.acceptCompression, t.sendCompression),
                    contextValues: null != d ? d : (0, _.k)(),
                    message: u
                },
                next: async (n)=>{
                    const s = await t.httpClient({
                        url: n.url,
                        method: "POST",
                        header: n.header,
                        signal: n.signal,
                        body: (0, g.Fs)((0, g.T$)([
                            n.message
                        ]), (0, g.XO)(p.getI(t.useBinaryFormat)), (0, g.fM)(t.sendCompression, t.compressMinBytes), (0, g.yQ)(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: c, headerError: u } = ie(t.acceptCompression, s.status, s.header), d = await (0, g.WK)(s.body, (0, g.pY)(t.readMaxBytes), (0, g.ew)(null != c ? c : null, t.readMaxBytes), (0, g.uv)(p.getO(t.useBinaryFormat)), async (e)=>{
                        var t, r, n, s;
                        let a;
                        try {
                            for(var c, l = !0, u = ae(e); !(t = (c = await u.next()).done); l = !0){
                                s = c.value, l = !1;
                                const e = s;
                                if (void 0 !== a) throw new i.T("protocol error: received extra output message for unary method", o.C.Unimplemented);
                                a = e;
                            }
                        } catch (e) {
                            r = {
                                error: e
                            };
                        } finally{
                            try {
                                l || t || !(n = u.return) || await n.call(u);
                            } finally{
                                if (r) throw r.error;
                            }
                        }
                        return a;
                    }, {
                        propagateDownStreamError: !1
                    });
                    if (l(s.trailer, s.header), void 0 === d) {
                        if (u) throw u;
                        throw new i.T("protocol error: missing output message for unary method", s.trailer.has(a.OJ) ? o.C.Unimplemented : o.C.Unknown);
                    }
                    if (u) throw new i.T("protocol error: received output message for unary method with error status", o.C.Unknown);
                    return {
                        stream: !1,
                        service: e,
                        method: r,
                        header: s.header,
                        message: d,
                        trailer: s.trailer
                    };
                }
            });
        },
        async stream (e, r, n, s, o, i, a) {
            const c = (0, v.Qg)(r, t.binaryOptions, t.jsonOptions, t);
            return s = void 0 === s ? t.defaultTimeoutMs : s <= 0 ? void 0 : s, (0, w.u)({
                interceptors: t.interceptors,
                signal: n,
                timeoutMs: s,
                req: {
                    stream: !0,
                    service: e,
                    method: r,
                    url: (0, y.j)(t.baseUrl, e, r),
                    init: {},
                    header: oe(t.useBinaryFormat, s, o, t.acceptCompression, t.sendCompression),
                    contextValues: null != a ? a : (0, _.k)(),
                    message: i
                },
                next: async (e)=>{
                    const r = await t.httpClient({
                        url: e.url,
                        method: "POST",
                        header: e.header,
                        signal: e.signal,
                        body: (0, g.Fs)(e.message, (0, g.XO)(c.getI(t.useBinaryFormat)), (0, g.fM)(t.sendCompression, t.compressMinBytes), (0, g.yQ)(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: n, foundStatus: s, headerError: o } = ie(t.acceptCompression, r.status, r.header);
                    if (o) throw o;
                    const i = Object.assign(Object.assign({}, e), {
                        header: r.header,
                        trailer: r.trailer,
                        message: (0, g.Fs)(r.body, (0, g.pY)(t.readMaxBytes), (0, g.ew)(null != n ? n : null, t.readMaxBytes), (0, g.uv)(c.getO(t.useBinaryFormat)), function(e) {
                            return ue(this, arguments, function*() {
                                yield ce((yield* le(ae(e)))), s || l(r.trailer, r.header);
                            });
                        }, {
                            propagateDownStreamError: !0
                        })
                    });
                    return i;
                }
            });
        }
    };
    var t;
}
var pe = require("./module-33574.js");
function me(e) {
    return (0, pe.o)(re(e));
}
var he = require("./module-46705.js"), fe = require("./module-26380.js"), ge = function(e) {
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
}, ye = function(e) {
    return this instanceof ye ? (this.v = e, this) : new ye(e);
}, we = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(e, t || []), o = [];
    return n = {}, i("next"), i("throw"), i("return", function(e) {
        return function(t) {
            return Promise.resolve(t).then(e, l);
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
            (r = s[e](t)).value instanceof ye ? Promise.resolve(r.value.v).then(c, l) : u(o[0][2], r);
        } catch (e) {
            u(o[0][3], e);
        }
        var r;
    }
    function c(e) {
        a("next", e);
    }
    function l(e) {
        a("throw", e);
    }
    function u(e, t) {
        e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
    }
};
function ve(e, ...t) {
    var r, n;
    const s = 3 === t.length ? t[0] : void 0, a = 3 === t.length ? t[1] : t[0], c = 3 === t.length ? t[2] : t[1], l = "encrypted" in e.socket && e.socket.encrypted ? "https" : "http", u = "authority" in e ? e.authority : e.headers.host, d = null !== (r = e.url) && void 0 !== r ? r : "";
    if (void 0 === u) throw new i.T("unable to determine request authority from Node.js server request", o.C.Internal);
    const p = void 0 !== a ? a : function(e) {
        return we(this, arguments, function*() {
            var t, r, n, s;
            const o = e.iterator({
                destroyOnReturn: !1
            });
            try {
                for(var i, a = !0, c = ge(o); !(t = (i = yield ye(c.next())).done); a = !0){
                    s = i.value, a = !1;
                    const e = s;
                    yield yield ye(e);
                }
            } catch (e) {
                r = {
                    error: e
                };
            } finally{
                try {
                    a || t || !(n = c.return) || (yield ye(n.call(c)));
                } finally{
                    if (r) throw r.error;
                }
            }
        });
    }(e), m = new AbortController;
    if ("stream" in e) e.once("close", ()=>{
        const t = B(e.stream.rstCode);
        void 0 !== t ? m.abort(t) : m.abort();
    });
    else {
        const t = null != s ? s : e, r = (s)=>{
            e.off("error", r), t.off("close", n), m.abort(x(s));
        }, n = ()=>{
            e.off("error", r), t.off("close", n), m.abort(e.errored ? x(e.errored) : void 0);
        };
        e.once("error", r), t.once("close", n);
    }
    return {
        httpVersion: e.httpVersion,
        method: null !== (n = e.method) && void 0 !== n ? n : "",
        url: new URL(d, `${l}://${u}`).toString(),
        header: $(e.headers),
        body: p,
        signal: m.signal,
        contextValues: c
    };
}
async function _e(e, t) {
    var r, n, s;
    const o = null === (r = e.body) || void 0 === r ? void 0 : r[Symbol.asyncIterator]();
    let i = !1;
    try {
        if (void 0 !== o) {
            let r = await o.next();
            for(i = !0, t.writeHead(e.status, Q(e.header)), i = !1; !0 !== r.done; r = await o.next())i = !0, await Ae(t, r.value), "flush" in t && "function" == typeof t.flush && t.flush(), i = !1;
        }
        t.headersSent || t.writeHead(e.status, Q(e.header)), e.trailer && t.addTrailers(Q(e.trailer)), await new Promise((e)=>{
            t.once("end", e), t.end();
        });
    } catch (e) {
        throw i && (null === (n = null == o ? void 0 : o.throw) || void 0 === n || n.call(o, e).catch(()=>{})), x(e);
    } finally{
        null === (s = null == o ? void 0 : o.return) || void 0 === s || s.call(o).catch(()=>{});
    }
}
function Ae(e, t) {
    return new Promise((r, n)=>{
        if (e.errored) return o(e.errored);
        e.once("error", o), e.once("drain", i);
        const s = e.write(t, "binary", function(t) {
            t && !s && (o(t), e.once("error", ()=>{}));
        });
        function o(t) {
            e.off("error", o), e.off("drain", i), n(t);
        }
        function i() {
            e.off("error", o), e.off("drain", i), r();
        }
        s && i();
    });
}
function Se(e) {
    var t;
    void 0 === e.acceptCompression && (e.acceptCompression = [
        D,
        O
    ]);
    const r = (0, he.k)(e);
    e.routes(r);
    const n = null !== (t = e.requestPathPrefix) && void 0 !== t ? t : "", s = new Map;
    for (const e of r.handlers)s.set(n + e.requestPath, e);
    return function(t, r) {
        var n, a, c, l;
        const u = s.get(null !== (a = null === (n = t.url) || void 0 === n ? void 0 : n.split("?", 2)[0]) && void 0 !== a ? a : "");
        if (!u) return void (null !== (c = e.fallback) && void 0 !== c ? c : be)(t, r);
        const d = ve(t, r, void 0, null === (l = e.contextValues) || void 0 === l ? void 0 : l.call(e, t));
        u(d).then((e)=>_e(e, r)).catch((e)=>{
            i.T.from(e).code != o.C.Aborted && console.error(`handler for rpc ${u.method.name} of ${u.service.typeName} failed`, e);
        });
    };
}
const be = (e, t)=>{
    t.writeHead(fe.of.status), t.end();
};
