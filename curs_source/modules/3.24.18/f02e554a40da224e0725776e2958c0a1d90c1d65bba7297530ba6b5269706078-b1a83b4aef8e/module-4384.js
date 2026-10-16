"use strict";
require.r(exports), require.d(exports, {
    Http2SessionManager: ()=>K,
    compressionBrotli: ()=>U,
    compressionGzip: ()=>D,
    connectNodeAdapter: ()=>Jt,
    createConnectTransport: ()=>ft,
    createGrpcTransport: ()=>mt,
    createGrpcWebTransport: ()=>nt,
    createNodeHttpClient: ()=>Y,
    universalRequestFromNodeRequest: ()=>yt,
    universalResponseToNodeResponse: ()=>wt
});
var n = require("./module-3881.js");
const [s] = process.versions.node.split(".").map((t)=>parseInt(t, 10));
s < 18 && void 0 === globalThis.Headers && (globalThis.Headers = n.Headers);
var i = require("./module-8032.js"), o = require("./module-328.js"), a = require("./module-6551.js"), u = require("./module-1190.js");
function c(t, e) {
    const r = (0, u.N)(t);
    if (r) throw e.forEach((t, e)=>{
        r.metadata.append(e, t);
    }), r;
    if (!e.has(a.OJ) && !t.has(a.OJ)) throw new o.T("protocol error: missing status", i.C.Internal);
}
var l = require("./module-1428.js"), m = require("./module-3524.js");
function d(t, e, r, n, s, i) {
    const o = function(t, e, r, n) {
        const s = new Headers(null != r ? r : {});
        return s.set(a.Z_, t ? m.y : m.q2), s.set(l.E, "1"), s.set(l.SY, "connect-es/1.6.1"), n && s.set(a.qy, "connect-es/1.6.1"), void 0 !== e && s.set(a.hR, `${e}m`), s;
    }(t, e, r, i);
    return null != s && o.set(a.LB, s.name), n.length > 0 && o.set(a.JA, n.map((t)=>t.name).join(",")), o;
}
function f(t) {
    switch(t){
        case 400:
            return i.C.Internal;
        case 401:
            return i.C.Unauthenticated;
        case 403:
            return i.C.PermissionDenied;
        case 404:
            return i.C.Unimplemented;
        case 429:
        case 502:
        case 503:
        case 504:
            return i.C.Unavailable;
        default:
            return i.C.Unknown;
    }
}
function p(t, e, r) {
    const { foundStatus: n, headerError: s } = function(t, e) {
        var r;
        if (t >= 200 && t < 300) return {
            foundStatus: e.has(a.OJ),
            headerError: (0, u.N)(e)
        };
        throw new o.T(decodeURIComponent(null !== (r = e.get(a.vw)) && void 0 !== r ? r : `HTTP ${t}`), f(t), e);
    }(e, r);
    let c;
    const l = r.get(a.LB);
    if (null !== l && "identity" !== l.toLowerCase() && (c = t.find((t)=>t.name === l), !c)) throw new o.T(`unsupported response encoding "${l}"`, i.C.Internal, r);
    return {
        foundStatus: n,
        compression: c,
        headerError: s
    };
}
var h = require("./module-6657.js"), g = require("./module-8205.js"), A = require("./module-7572.js"), _ = require("./module-1304.js"), y = require("./module-878.js"), w = require("./module-3621.js"), S = function(t) {
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
}, J = function(t) {
    return this instanceof J ? (this.v = t, this) : new J(t);
}, B = function(t, e, r) {
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
            (r = s[t](e)).value instanceof J ? Promise.resolve(r.value.v).then(u, c) : l(i[0][2], r);
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
var E, I = require("./module-278.js"), C = require("./module-3106.js"), b = require("./module-9023.js");
function k(t) {
    let e = i.C.Internal;
    const r = v(t).map(q);
    r.some((t)=>"ERR_STREAM_WRITE_AFTER_END" == t.code) || r.some((t)=>"ERR_STREAM_DESTROYED" == t.code || "ERR_HTTP2_INVALID_STREAM" == t.code || "ECONNRESET" == t.code) ? e = i.C.Aborted : r.some((t)=>"ETIMEDOUT" == t.code || "ENOTFOUND" == t.code || "EAI_AGAIN" == t.code || "ECONNREFUSED" == t.code) && (e = i.C.Unavailable);
    const n = o.T.from(t, e);
    return n !== t && (n.cause = t), n;
}
function v(t) {
    const e = [];
    for(; t instanceof Error && !e.includes(t) && (e.push(t), "cause" in t);)t = t.cause;
    return e;
}
function q(t) {
    const e = {};
    return t instanceof Error && ("code" in t && "string" == typeof t.code && (e.code = t.code), "syscall" in t && "string" == typeof t.syscall && (e.syscall = t.syscall)), e;
}
function R(t) {
    switch(t){
        case E.PROTOCOL_ERROR:
        case E.INTERNAL_ERROR:
        case E.FLOW_CONTROL_ERROR:
        case E.SETTINGS_TIMEOUT:
        case E.FRAME_SIZE_ERROR:
        case E.COMPRESSION_ERROR:
        case E.CONNECT_ERROR:
            return new o.T(`http/2 stream closed with error code ${E[t]} (0x${t.toString(16)})`, i.C.Internal);
        case E.REFUSED_STREAM:
            return new o.T(`http/2 stream closed with error code ${E[t]} (0x${t.toString(16)})`, i.C.Unavailable);
        case E.CANCEL:
            return new o.T(`http/2 stream closed with error code ${E[t]} (0x${t.toString(16)})`, i.C.Canceled);
        case E.ENHANCE_YOUR_CALM:
            return new o.T(`http/2 stream closed with error code ${E[t]} (0x${t.toString(16)})`, i.C.ResourceExhausted);
        case E.INADEQUATE_SECURITY:
        case E.HTTP_1_1_REQUIRED:
            return new o.T(`http/2 stream closed with error code ${E[t]} (0x${t.toString(16)})`, i.C.PermissionDenied);
        case E.STREAM_CLOSED:
    }
}
!function(t) {
    t[t.PROTOCOL_ERROR = 1] = "PROTOCOL_ERROR", t[t.INTERNAL_ERROR = 2] = "INTERNAL_ERROR", t[t.FLOW_CONTROL_ERROR = 3] = "FLOW_CONTROL_ERROR", t[t.SETTINGS_TIMEOUT = 4] = "SETTINGS_TIMEOUT", t[t.STREAM_CLOSED = 5] = "STREAM_CLOSED", t[t.FRAME_SIZE_ERROR = 6] = "FRAME_SIZE_ERROR", t[t.REFUSED_STREAM = 7] = "REFUSED_STREAM", t[t.CANCEL = 8] = "CANCEL", t[t.COMPRESSION_ERROR = 9] = "COMPRESSION_ERROR", t[t.CONNECT_ERROR = 10] = "CONNECT_ERROR", t[t.ENHANCE_YOUR_CALM = 11] = "ENHANCE_YOUR_CALM", t[t.INADEQUATE_SECURITY = 12] = "INADEQUATE_SECURITY", t[t.HTTP_1_1_REQUIRED = 13] = "HTTP_1_1_REQUIRED";
}(E || (E = {}));
const P = (0, b.promisify)(C.gzip), T = (0, b.promisify)(C.gunzip), x = (0, b.promisify)(C.brotliCompress), N = (0, b.promisify)(C.brotliDecompress), D = {
    name: "gzip",
    compress: (t)=>P(t, {}),
    decompress: (t, e)=>0 == t.length ? Promise.resolve(new Uint8Array(0)) : Q(T(t, {
            maxOutputLength: e
        }), e)
}, U = {
    name: "br",
    compress: (t)=>x(t, {}),
    decompress: (t, e)=>0 == t.length ? Promise.resolve(new Uint8Array(0)) : Q(N(t, {
            maxOutputLength: e
        }), e)
};
function Q(t, e) {
    return t.catch((t)=>{
        const r = q(t);
        let n = i.C.Internal, s = "decompression failed";
        switch(r.code){
            case "ERR_BUFFER_TOO_LARGE":
                n = i.C.ResourceExhausted, s = `message is larger than configured readMaxBytes ${e} after decompression`;
                break;
            case "Z_DATA_ERROR":
            case "ERR_PADDING_2":
                n = i.C.InvalidArgument;
                break;
            default:
                void 0 !== r.code && r.code.startsWith("ERR__ERROR_FORMAT_") && (n = i.C.InvalidArgument);
        }
        return Promise.reject(new o.T(s, n, void 0, void 0, t));
    });
}
var M = require("./module-5675.js"), O = require("./module-8611.js"), F = require("./module-5692.js");
function L(t) {
    const e = new Headers;
    for (const [r, n] of Object.entries(t))if (!r.startsWith(":") && void 0 !== n) if ("string" == typeof n) e.append(r, n);
    else if ("number" == typeof n) e.append(r, String(n));
    else for (const t of n)e.append(r, t);
    return e;
}
function $(t, e) {
    if (void 0 === t && void 0 === e) return;
    const r = Object.create(null);
    if (void 0 !== e) for (const [t, n] of Object.entries(e))Array.isArray(n) ? r[t] = n.concat() : void 0 !== n && (r[t] = n);
    if (void 0 !== t) if (Array.isArray(t)) for (const [e, n] of t)G(r, e, n);
    else if ("forEach" in t) "function" == typeof t.forEach && t.forEach((t, e)=>{
        G(r, e, t);
    });
    else for (const [e, n] of Object.entries(t))G(r, e, n);
    return r;
}
function G(t, e, r) {
    const n = t[e = e.toLowerCase()];
    Array.isArray(n) ? n.push(r) : t[e] = void 0 === n ? r : [
        n.toString(),
        r
    ];
}
var H = require("./module-9983.js");
class K {
    state() {
        return "ready" == this.s.t ? void 0 !== this.verifying ? "verifying" : this.s.streamCount() > 0 ? "open" : "idle" : this.s.t;
    }
    error() {
        if ("error" == this.s.t) return this.s.reason;
    }
    constructor(t, e, r){
        var n, s, i, o;
        this.s = {
            t: "closed"
        }, this.shuttingDown = [], this.authority = new URL(t).origin, this.http2SessionOptions = r, this.options = {
            pingIntervalMs: null !== (n = null == e ? void 0 : e.pingIntervalMs) && void 0 !== n ? n : Number.POSITIVE_INFINITY,
            pingTimeoutMs: null !== (s = null == e ? void 0 : e.pingTimeoutMs) && void 0 !== s ? s : 15e3,
            pingIdleConnection: null !== (i = null == e ? void 0 : e.pingIdleConnection) && void 0 !== i && i,
            idleConnectionTimeoutMs: null !== (o = null == e ? void 0 : e.idleConnectionTimeoutMs) && void 0 !== o ? o : 9e5
        };
    }
    async connect() {
        try {
            return (await this.gotoReady()).streamCount() > 0 ? "open" : "idle";
        } catch (t) {
            return "error";
        }
    }
    async request(t, e, r, n) {
        for(;;){
            const s = await this.gotoReady();
            try {
                const i = s.conn.request(Object.assign(Object.assign({}, r), {
                    ":method": t,
                    ":path": e
                }), n);
                return s.registerRequest(i), i;
            } catch (t) {
                if (s.conn.closed || s.conn.destroyed) continue;
                throw t;
            }
        }
    }
    notifyResponseByteRead(t) {
        "ready" == this.s.t && this.s.responseByteRead(t);
        for (const e of this.shuttingDown)e.responseByteRead(t);
    }
    abort(t) {
        var e, r, n;
        const s = null != t ? t : new o.T("connection aborted", i.C.Canceled);
        null === (r = (e = this.s).abort) || void 0 === r || r.call(e, s);
        for (const t of this.shuttingDown)null === (n = t.abort) || void 0 === n || n.call(t, s);
        this.setState(V(s));
    }
    abortCurrent(t) {
        var e, r;
        const n = this.s;
        if ("ready" === n.t && n.isShuttingDown()) return;
        const s = null != t ? t : new o.T("connection aborted", i.C.Canceled);
        null === (r = (e = n).abort) || void 0 === r || r.call(e, s);
    }
    captureSessions() {
        const t = [];
        "function" == typeof this.s.abort && t.push(this.s);
        for (const e of this.shuttingDown)-1 === t.indexOf(e) && t.push(e);
        return t;
    }
    async gotoReady() {
        var t;
        for("ready" == this.s.t ? this.s.isShuttingDown() || this.s.conn.closed || this.s.conn.destroyed ? this.setState(z(this.authority, this.http2SessionOptions)) : this.s.requiresVerify() && await this.verify(this.s) : "closed" != this.s.t && "error" != this.s.t || this.setState(z(this.authority, this.http2SessionOptions)); "ready" !== this.s.t;){
            if ("error" === this.s.t) throw this.s.reason;
            if ("unavailable" === this.s.t) throw new o.T("expected h2 session, but ALPN protocol failed to negotiate", i.C.Unavailable, {
                authority: this.authority,
                issuer: null !== (t = this.s.issuer) && void 0 !== t ? t : "unknown"
            });
            "connecting" === this.s.t && await this.s.conn;
        }
        return this.s;
    }
    setState(t) {
        var e, r;
        if (null === (r = (e = this.s).onExitState) || void 0 === r || r.call(e), "ready" == this.s.t && this.s.isShuttingDown()) {
            const t = this.s;
            this.shuttingDown.push(t), t.onClose = t.onError = ()=>{
                const e = this.shuttingDown.indexOf(t);
                -1 !== e && this.shuttingDown.splice(e, 1);
            };
        }
        switch(t.t){
            case "connecting":
                t.conn.then((t)=>{
                    this.setState(function(t, e) {
                        var r, n;
                        if (function(t) {
                            if (t.connecting) throw new o.T("expected open session, but it is connecting", i.C.Internal);
                            if (t.destroyed) throw new o.T("expected open session, but it is destroyed", i.C.Internal);
                            if (t.closed) throw new o.T("expected open session, but it is closed", i.C.Internal);
                        }(t), !0 === t.encrypted && "h2" !== t.alpnProtocol) {
                            var s = t.socket, a = null == s ? void 0 : s.getPeerCertificate, u = "function" == typeof a ? null === (n = null === (r = a.call(s)) || void 0 === r ? void 0 : r.issuer) || void 0 === n ? void 0 : n.CN : void 0;
                            return t.destroyed || t.destroy(), {
                                t: "unavailable",
                                issuer: u
                            };
                        }
                        t.unref();
                        let c, l, m, d = Date.now(), f = 0, p = !1, h = !1;
                        J();
                        const g = {
                            t: "ready",
                            conn: t,
                            streamCount: ()=>f,
                            requiresVerify: ()=>Date.now() - d > e.pingIntervalMs,
                            isShuttingDown: ()=>p,
                            onClose: void 0,
                            onError: void 0,
                            registerRequest (e) {
                                f++, 1 == f && (t.ref(), A(), S()), e.once("response", ()=>{
                                    d = Date.now(), A();
                                }), e.once("close", ()=>{
                                    f--, 0 == f && (t.unref(), A(), J());
                                });
                            },
                            responseByteRead (e) {
                                e.session === t && (t.closed || t.destroyed || f <= 0 || (d = Date.now(), A()));
                            },
                            verify: ()=>(t.ref(), new Promise((r)=>{
                                    let n = !1;
                                    const s = (e)=>{
                                        n || (n = !0, clearTimeout(u), t.off("error", a), t.off("close", a), e && 0 == f && t.unref(), r(e));
                                    }, a = ()=>s(!1);
                                    t.on("error", a), t.on("close", a);
                                    const u = W(()=>{
                                        g.abort(new o.T("PING timed out", i.C.Unavailable)), s(!1);
                                    }, e.pingTimeoutMs);
                                    w(()=>s(!0));
                                })),
                            abort (e) {
                                t.destroyed || (t.once("error", ()=>{}), t.destroy(e, M.constants.NGHTTP2_CANCEL));
                            },
                            onExitState () {
                                g.isShuttingDown() || (b(), this.onError = void 0, this.onClose = void 0);
                            }
                        };
                        function A() {
                            _(), (f > 0 || e.pingIdleConnection) && (c = W(y, e.pingIntervalMs));
                        }
                        function _() {
                            clearTimeout(c), clearTimeout(l);
                        }
                        function y() {
                            w(A);
                        }
                        function w(r) {
                            clearTimeout(l), l = W(()=>{
                                t.destroy(new o.T("PING timed out", i.C.Unavailable), M.constants.NGHTTP2_CANCEL);
                            }, e.pingTimeoutMs), t.ping((n, s)=>{
                                clearTimeout(l), null === n && (s > e.pingTimeoutMs ? t.destroy(new o.T("PING timed out", i.C.Unavailable), M.constants.NGHTTP2_CANCEL) : (d = Date.now(), r()));
                            });
                        }
                        function S() {
                            clearTimeout(m);
                        }
                        function J() {
                            m = W(B, e.idleConnectionTimeoutMs);
                        }
                        function B() {
                            t.close(), I();
                        }
                        function E(r, n, s) {
                            p = !0;
                            const a = Buffer.from("too_many_pings", "ascii");
                            if (r === M.constants.NGHTTP2_ENHANCE_YOUR_CALM && null != s && s.equals(a) && (e.pingIntervalMs = 2 * e.pingIntervalMs, h = !0), r === M.constants.NGHTTP2_NO_ERROR) {
                                const e = parseInt(process.versions.node.split(".")[0], 10);
                                0 == f && e >= 18 && t.destroy(new o.T("received GOAWAY without any open streams", i.C.Canceled), M.constants.NGHTTP2_NO_ERROR);
                            }
                        }
                        function I() {
                            var t;
                            b(), null === (t = g.onClose) || void 0 === t || t.call(g);
                        }
                        function C(t) {
                            var e, r;
                            if (b(), h) {
                                const t = new o.T(`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${M.constants.NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, i.C.ResourceExhausted);
                                null === (e = g.onError) || void 0 === e || e.call(g, t);
                            } else null === (r = g.onError) || void 0 === r || r.call(g, k(t));
                        }
                        function b() {
                            _(), S(), t.off("error", C), t.off("close", I), t.off("goaway", E);
                        }
                        return t.on("error", C), t.on("close", I), t.on("goaway", E), g;
                    }(t, this.options));
                }, (t)=>{
                    this.setState(V(t));
                });
                break;
            case "ready":
                t.onClose = ()=>this.setState({
                        t: "closed"
                    }), t.onError = (t)=>this.setState(V(t));
        }
        this.s = t;
    }
    verify(t) {
        return void 0 !== this.verifying || (this.verifying = t.verify().then((t)=>{
            t || this.setState(z(this.authority, this.http2SessionOptions));
        }, (t)=>{
            this.setState(V(t));
        }).finally(()=>{
            this.verifying = void 0;
        })), this.verifying;
    }
}
function V(t) {
    return t instanceof o.T && o.T.from(t).code == i.C.Canceled ? {
        t: "closed"
    } : function(t) {
        return {
            t: "error",
            reason: t
        };
    }(t);
}
function z(t, e) {
    let r, n;
    const s = new Promise((t, e)=>{
        r = t, n = e;
    }), i = M.connect(t, e);
    function o() {
        null == r || r(i), u();
    }
    function a(t) {
        null == n || n(k(t)), u();
    }
    function u() {
        i.off("connect", o), i.off("error", a);
    }
    return i.on("connect", o), i.on("error", a), {
        t: "connecting",
        conn: s,
        abort (t) {
            i.destroyed || i.destroy(void 0, M.constants.NGHTTP2_CANCEL), null == n || n(t);
        },
        onExitState () {
            u();
        }
    };
}
function W(t, e) {
    if (!(e > 2147483647)) return setTimeout(t, e).unref();
}
function Y(t) {
    var e, r;
    if ("1.1" == t.httpVersion) return r = t.nodeOptions, async function(t) {
        const e = et(t.signal);
        return new Promise((n, s)=>{
            e.catch((t)=>{
                s(t);
            }), function(t, e, r, n) {
                let s;
                s = new URL(e).protocol.startsWith("https") ? F.request(e, r) : O.request(e, r), t.catch((t)=>s.destroy(k(t))), s.flushHeaders(), s.on("error", t.reject), s.on("socket", function(t) {
                    function e() {
                        t.off("connect", e), n(s);
                    }
                    "open" === t.readyState ? n(s) : t.on("connect", e);
                });
            }(e, t.url, Object.assign(Object.assign({}, r), {
                headers: $(t.header, null == r ? void 0 : r.headers),
                method: t.method
            }), (r)=>{
                tt(t, r, e), r.on("response", (t)=>{
                    var r;
                    t.on("error", e.reject), e.catch((e)=>t.destroy(k(e)));
                    const s = new Headers;
                    n({
                        status: null !== (r = t.statusCode) && void 0 !== r ? r : 0,
                        header: L(t.headers),
                        body: j(e, t, s),
                        trailer: s
                    });
                });
            });
        });
    };
    return function(t) {
        return function(e) {
            const r = et(e.signal), n = t(e.url);
            return new Promise((t, s)=>{
                r.catch((t)=>{
                    s(t);
                }), function(t, e, r, n, s, a, u) {
                    const c = new URL(r);
                    if (c.origin !== e.authority) {
                        const r = `cannot make a request to ${c.origin}: the http2 session is connected to ${e.authority}`;
                        return void t.reject(new o.T(r, i.C.Internal));
                    }
                    e.request(n, c.pathname + c.search, s, {}).then((e)=>{
                        t.catch((t)=>{
                            if (e.closed) return;
                            const r = t instanceof o.T && t.code == i.C.Canceled ? E.CANCEL : E.INTERNAL_ERROR;
                            return new Promise((t)=>e.close(r, t));
                        }), e.on("error", function(r) {
                            e.writableEnded && v(r).map(q).some((t)=>"ERR_STREAM_WRITE_AFTER_END" == t.code) || t.reject(r);
                        }), e.on("close", function() {
                            const r = R(e.rstCode);
                            r && t.reject(r);
                        }), u(e);
                    }, (e)=>{
                        t.reject(e);
                    });
                }(r, n, e.url, e.method, $(e.header), 0, (s)=>{
                    tt(e, s, r), s.on("response", (e)=>{
                        var i;
                        const o = {
                            status: null !== (i = e[":status"]) && void 0 !== i ? i : 0,
                            header: L(e),
                            body: Z(r, s, n),
                            trailer: X(s)
                        };
                        t(o);
                    });
                });
            });
        };
    }(null !== (e = t.sessionProvider) && void 0 !== e ? e : (t)=>new K(t));
}
function j(t, e, r) {
    const n = e[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                async next () {
                    const s = await t.race(n.next());
                    return !0 === s.done && (L(e.trailers).forEach((t, e)=>{
                        r.set(e, t);
                    }), t.resolve(), await t), s;
                },
                throw (e) {
                    throw t.reject(e), e;
                }
            })
    };
}
function X(t) {
    const e = new Headers;
    return t.on("trailers", (t)=>{
        L(t).forEach((t, r)=>{
            e.set(r, t);
        });
    }), e;
}
function Z(t, e, r) {
    const n = e[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                async next () {
                    const s = await t.race(n.next());
                    return !0 === s.done && (t.resolve(), await t), null == r || r.notifyResponseByteRead(e), s;
                },
                throw (e) {
                    throw t.reject(e), e;
                }
            })
    };
}
async function tt(t, e, r) {
    if (void 0 === t.body) return void await new Promise((t)=>e.end(t));
    const n = t.body[Symbol.asyncIterator]();
    return new Promise((t)=>{
        !function s() {
            if (r.isRejected()) return;
            n.next().then((i)=>{
                !0 !== i.done ? e.write(i.value, "binary", function(t) {
                    null != t ? (void 0 !== n.throw && n.throw(k(t)).catch(()=>{}), e.writableEnded && v(t).map(q).some((t)=>"ERR_STREAM_WRITE_AFTER_END" == t.code) || r.reject(t)) : s();
                }) : e.end(t);
            }, (t)=>{
                r.reject(t);
            });
        }();
    });
}
function et(t) {
    let e, r, n = !1, s = !1;
    const a = new Promise((t, n)=>{
        e = t, r = n;
    }), u = {
        resolve () {
            n || s || (n = !0, null == e || e());
        },
        isResolved: ()=>n,
        reject (t) {
            n || s || (s = !0, null == r || r(k(t)));
        },
        isRejected: ()=>s,
        async race (t) {
            const e = await Promise.race([
                t,
                a
            ]);
            if (void 0 === e && n) throw new o.T("sentinel completed early", i.C.Internal);
            return e;
        }
    }, c = Object.assign(a, u);
    function l() {
        u.reject((0, H.xz)(this));
    }
    return t && (t.aborted ? u.reject((0, H.xz)(t)) : t.addEventListener("abort", l), a.finally(()=>t.removeEventListener("abort", l)).catch(()=>{})), c;
}
function rt(t) {
    var e, r, n, s;
    let i;
    if ("2" == t.httpVersion) {
        let e;
        e = t.sessionManager ? t.sessionManager : new K(t.baseUrl, {
            pingIntervalMs: t.pingIntervalMs,
            pingIdleConnection: t.pingIdleConnection,
            pingTimeoutMs: t.pingTimeoutMs,
            idleConnectionTimeoutMs: t.idleConnectionTimeoutMs
        }, t.nodeOptions), i = Y({
            httpVersion: "2",
            sessionProvider: ()=>e
        });
    } else i = Y({
        httpVersion: "1.1",
        nodeOptions: t.nodeOptions
    });
    return Object.assign(Object.assign(Object.assign({}, t), {
        httpClient: i,
        useBinaryFormat: null === (e = t.useBinaryFormat) || void 0 === e || e,
        interceptors: null !== (r = t.interceptors) && void 0 !== r ? r : [],
        sendCompression: null !== (n = t.sendCompression) && void 0 !== n ? n : null,
        acceptCompression: null !== (s = t.acceptCompression) && void 0 !== s ? s : [
            D,
            U
        ]
    }), (0, I.NL)(t.readMaxBytes, t.writeMaxBytes, t.compressMinBytes));
}
function nt(t) {
    return e = rt(t), {
        async unary (t, r, n, s, u, l, m) {
            const f = (0, y.Qg)(r, e.binaryOptions, e.jsonOptions, e);
            return s = void 0 === s ? e.defaultTimeoutMs : s <= 0 ? void 0 : s, await (0, _.L)({
                interceptors: e.interceptors,
                signal: n,
                timeoutMs: s,
                req: {
                    stream: !1,
                    service: t,
                    method: r,
                    url: (0, A.j)(e.baseUrl, t, r),
                    init: {},
                    header: d(e.useBinaryFormat, s, u, e.acceptCompression, e.sendCompression, !0),
                    contextValues: null != m ? m : (0, w.k)(),
                    message: l
                },
                next: async (n)=>{
                    const s = await e.httpClient({
                        url: n.url,
                        method: "POST",
                        header: n.header,
                        signal: n.signal,
                        body: (0, g.Fs)((0, g.T$)([
                            n.message
                        ]), (0, g.XO)(f.getI(e.useBinaryFormat)), (0, g.fM)(e.sendCompression, e.compressMinBytes), (0, g.yQ)(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: u, headerError: l } = p(e.acceptCompression, s.status, s.header), { trailer: m, message: d } = await (0, g.WK)(s.body, (0, g.pY)(e.readMaxBytes), (0, g.ew)(null != u ? u : null, e.readMaxBytes), (0, g.uv)(f.getO(e.useBinaryFormat), h.oK, (0, h.A7)()), async (t)=>{
                        var e, r, n, s;
                        let a, u;
                        try {
                            for(var c, l = !0, m = S(t); !(e = (c = await m.next()).done); l = !0){
                                s = c.value, l = !1;
                                const t = s;
                                if (t.end) {
                                    if (void 0 !== u) throw new o.T("protocol error: received extra trailer", i.C.Unimplemented);
                                    u = t.value;
                                } else {
                                    if (void 0 !== a) throw new o.T("protocol error: received extra output message for unary method", i.C.Unimplemented);
                                    a = t.value;
                                }
                            }
                        } catch (t) {
                            r = {
                                error: t
                            };
                        } finally{
                            try {
                                l || e || !(n = m.return) || await n.call(m);
                            } finally{
                                if (r) throw r.error;
                            }
                        }
                        return {
                            trailer: u,
                            message: a
                        };
                    }, {
                        propagateDownStreamError: !1
                    });
                    if (void 0 === m) {
                        if (null != l) throw l;
                        throw new o.T("protocol error: missing trailer", s.header.has(a.OJ) ? i.C.Unimplemented : i.C.Unknown);
                    }
                    if (c(m, s.header), void 0 === d) throw new o.T("protocol error: missing output message for unary method", m.has(a.OJ) ? i.C.Unimplemented : i.C.Unknown);
                    return {
                        stream: !1,
                        service: t,
                        method: r,
                        header: s.header,
                        message: d,
                        trailer: m
                    };
                }
            });
        },
        async stream (t, r, n, s, a, u, l) {
            const m = (0, y.Qg)(r, e.binaryOptions, e.jsonOptions, e);
            return s = void 0 === s ? e.defaultTimeoutMs : s <= 0 ? void 0 : s, (0, _.u)({
                interceptors: e.interceptors,
                signal: n,
                timeoutMs: s,
                req: {
                    stream: !0,
                    service: t,
                    method: r,
                    url: (0, A.j)(e.baseUrl, t, r),
                    init: {
                        method: "POST",
                        redirect: "error",
                        mode: "cors"
                    },
                    header: d(e.useBinaryFormat, s, a, e.acceptCompression, e.sendCompression, !0),
                    contextValues: null != l ? l : (0, w.k)(),
                    message: u
                },
                next: async (t)=>{
                    const r = await e.httpClient({
                        url: t.url,
                        method: "POST",
                        header: t.header,
                        signal: t.signal,
                        body: (0, g.Fs)(t.message, (0, g.XO)(m.getI(e.useBinaryFormat)), (0, g.fM)(e.sendCompression, e.compressMinBytes), (0, g.yQ)(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: n, foundStatus: s, headerError: a } = p(e.acceptCompression, r.status, r.header);
                    if (a) throw a;
                    const u = Object.assign(Object.assign({}, t), {
                        header: r.header,
                        trailer: new Headers,
                        message: (0, g.Fs)(r.body, (0, g.pY)(e.readMaxBytes), (0, g.ew)(null != n ? n : null, e.readMaxBytes), (0, g.uv)(m.getO(e.useBinaryFormat), h.oK, (0, h.A7)()), function(t) {
                            return B(this, arguments, function*() {
                                var e, n, a, l;
                                if (s) {
                                    if (!0 !== (yield J(t[Symbol.asyncIterator]().next())).done) throw new o.T("protocol error: extra data for trailers-only", i.C.InvalidArgument);
                                    return yield J(void 0);
                                }
                                let m = !1;
                                try {
                                    for(var d, f = !0, p = S(t); !(e = (d = yield J(p.next())).done); f = !0){
                                        l = d.value, f = !1;
                                        const t = l;
                                        if (t.end) {
                                            if (m) throw new o.T("protocol error: received extra trailer", i.C.InvalidArgument);
                                            m = !0, c(t.value, r.header), t.value.forEach((t, e)=>u.trailer.set(e, t));
                                        } else {
                                            if (m) throw new o.T("protocol error: received extra message after trailer", i.C.InvalidArgument);
                                            yield yield J(t.value);
                                        }
                                    }
                                } catch (t) {
                                    n = {
                                        error: t
                                    };
                                } finally{
                                    try {
                                        f || e || !(a = p.return) || (yield J(a.call(p)));
                                    } finally{
                                        if (n) throw n.error;
                                    }
                                }
                                if (!m) throw new o.T("protocol error: missing trailer", i.C.Internal);
                            });
                        }, {
                            propagateDownStreamError: !0
                        })
                    });
                    return u;
                }
            });
        }
    };
    var e;
}
var st = require("./module-6125.js");
function it(t, e, r, n, s) {
    const i = function(t, e, r) {
        const n = new Headers(null != r ? r : {});
        return n.set(a.Z_, t ? st.y : st.q2), n.set(a.qy, "connect-es/1.6.1"), void 0 !== e && n.set(a.hR, `${e}m`), n.set("Te", "trailers"), n;
    }(t, e, r);
    return null != s && i.set(a.LB, s.name), n.length > 0 && i.set(a.JA, n.map((t)=>t.name).join(",")), i;
}
function ot(t, e, r) {
    const { foundStatus: n, headerError: s } = function(t, e) {
        if (200 != t) throw new o.T(`HTTP ${t}`, f(t), e);
        const r = e.get(a.Z_);
        if (null == (0, st.xk)(r)) throw new o.T(`unsupported content type ${r}`, i.C.Unknown);
        return {
            foundStatus: e.has(a.OJ),
            headerError: (0, u.N)(e)
        };
    }(e, r);
    let c;
    const l = r.get(a.LB);
    if (null !== l && "identity" !== l.toLowerCase() && (c = t.find((t)=>t.name === l), !c)) throw new o.T(`unsupported response encoding "${l}"`, i.C.Internal, r);
    return {
        foundStatus: n,
        compression: c,
        headerError: s
    };
}
var at = function(t) {
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
}, ut = function(t) {
    return this instanceof ut ? (this.v = t, this) : new ut(t);
}, ct = function(t) {
    var e, r;
    return e = {}, n("next"), n("throw", function(t) {
        throw t;
    }), n("return"), e[Symbol.iterator] = function() {
        return this;
    }, e;
    function n(n, s) {
        e[n] = t[n] ? function(e) {
            return (r = !r) ? {
                value: ut(t[n](e)),
                done: !1
            } : s ? s(e) : e;
        } : s;
    }
}, lt = function(t, e, r) {
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
            (r = s[t](e)).value instanceof ut ? Promise.resolve(r.value.v).then(u, c) : l(i[0][2], r);
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
function mt(t) {
    return e = rt(t), {
        async unary (t, r, n, s, u, l, m) {
            const d = (0, y.Qg)(r, e.binaryOptions, e.jsonOptions, e);
            return s = void 0 === s ? e.defaultTimeoutMs : s <= 0 ? void 0 : s, await (0, _.L)({
                interceptors: e.interceptors,
                signal: n,
                timeoutMs: s,
                req: {
                    stream: !1,
                    service: t,
                    method: r,
                    url: (0, A.j)(e.baseUrl, t, r),
                    init: {},
                    header: it(e.useBinaryFormat, s, u, e.acceptCompression, e.sendCompression),
                    contextValues: null != m ? m : (0, w.k)(),
                    message: l
                },
                next: async (n)=>{
                    const s = await e.httpClient({
                        url: n.url,
                        method: "POST",
                        header: n.header,
                        signal: n.signal,
                        body: (0, g.Fs)((0, g.T$)([
                            n.message
                        ]), (0, g.XO)(d.getI(e.useBinaryFormat)), (0, g.fM)(e.sendCompression, e.compressMinBytes), (0, g.yQ)(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: u, headerError: l } = ot(e.acceptCompression, s.status, s.header), m = await (0, g.WK)(s.body, (0, g.pY)(e.readMaxBytes), (0, g.ew)(null != u ? u : null, e.readMaxBytes), (0, g.uv)(d.getO(e.useBinaryFormat)), async (t)=>{
                        var e, r, n, s;
                        let a;
                        try {
                            for(var u, c = !0, l = at(t); !(e = (u = await l.next()).done); c = !0){
                                s = u.value, c = !1;
                                const t = s;
                                if (void 0 !== a) throw new o.T("protocol error: received extra output message for unary method", i.C.Unimplemented);
                                a = t;
                            }
                        } catch (t) {
                            r = {
                                error: t
                            };
                        } finally{
                            try {
                                c || e || !(n = l.return) || await n.call(l);
                            } finally{
                                if (r) throw r.error;
                            }
                        }
                        return a;
                    }, {
                        propagateDownStreamError: !1
                    });
                    if (c(s.trailer, s.header), void 0 === m) {
                        if (l) throw l;
                        throw new o.T("protocol error: missing output message for unary method", s.trailer.has(a.OJ) ? i.C.Unimplemented : i.C.Unknown);
                    }
                    if (l) throw new o.T("protocol error: received output message for unary method with error status", i.C.Unknown);
                    return {
                        stream: !1,
                        service: t,
                        method: r,
                        header: s.header,
                        message: m,
                        trailer: s.trailer
                    };
                }
            });
        },
        async stream (t, r, n, s, i, o, a) {
            const u = (0, y.Qg)(r, e.binaryOptions, e.jsonOptions, e);
            return s = void 0 === s ? e.defaultTimeoutMs : s <= 0 ? void 0 : s, (0, _.u)({
                interceptors: e.interceptors,
                signal: n,
                timeoutMs: s,
                req: {
                    stream: !0,
                    service: t,
                    method: r,
                    url: (0, A.j)(e.baseUrl, t, r),
                    init: {},
                    header: it(e.useBinaryFormat, s, i, e.acceptCompression, e.sendCompression),
                    contextValues: null != a ? a : (0, w.k)(),
                    message: o
                },
                next: async (t)=>{
                    const r = await e.httpClient({
                        url: t.url,
                        method: "POST",
                        header: t.header,
                        signal: t.signal,
                        body: (0, g.Fs)(t.message, (0, g.XO)(u.getI(e.useBinaryFormat)), (0, g.fM)(e.sendCompression, e.compressMinBytes), (0, g.yQ)(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: n, foundStatus: s, headerError: i } = ot(e.acceptCompression, r.status, r.header);
                    if (i) throw i;
                    const o = Object.assign(Object.assign({}, t), {
                        header: r.header,
                        trailer: r.trailer,
                        message: (0, g.Fs)(r.body, (0, g.pY)(e.readMaxBytes), (0, g.ew)(null != n ? n : null, e.readMaxBytes), (0, g.uv)(u.getO(e.useBinaryFormat)), function(t) {
                            return lt(this, arguments, function*() {
                                yield ut((yield* ct(at(t)))), s || c(r.trailer, r.header);
                            });
                        }, {
                            propagateDownStreamError: !0
                        })
                    });
                    return o;
                }
            });
        }
    };
    var e;
}
var dt = require("./module-1303.js");
function ft(t) {
    return (0, dt.o)(rt(t));
}
var pt = require("./module-1992.js"), ht = require("./module-2083.js"), gt = function(t) {
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
}, At = function(t) {
    return this instanceof At ? (this.v = t, this) : new At(t);
}, _t = function(t, e, r) {
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
            (r = s[t](e)).value instanceof At ? Promise.resolve(r.value.v).then(u, c) : l(i[0][2], r);
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
function yt(t, ...e) {
    var r, n;
    const s = 3 === e.length ? e[0] : void 0, a = 3 === e.length ? e[1] : e[0], u = 3 === e.length ? e[2] : e[1], c = "encrypted" in t.socket && t.socket.encrypted ? "https" : "http", l = "authority" in t ? t.authority : t.headers.host, m = null !== (r = t.url) && void 0 !== r ? r : "";
    if (void 0 === l) throw new o.T("unable to determine request authority from Node.js server request", i.C.Internal);
    const d = void 0 !== a ? a : function(t) {
        return _t(this, arguments, function*() {
            var e, r, n, s;
            const i = t.iterator({
                destroyOnReturn: !1
            });
            try {
                for(var o, a = !0, u = gt(i); !(e = (o = yield At(u.next())).done); a = !0){
                    s = o.value, a = !1;
                    const t = s;
                    yield yield At(t);
                }
            } catch (t) {
                r = {
                    error: t
                };
            } finally{
                try {
                    a || e || !(n = u.return) || (yield At(n.call(u)));
                } finally{
                    if (r) throw r.error;
                }
            }
        });
    }(t), f = new AbortController;
    if ("stream" in t) t.once("close", ()=>{
        const e = R(t.stream.rstCode);
        void 0 !== e ? f.abort(e) : f.abort();
    });
    else {
        const e = null != s ? s : t, r = (s)=>{
            t.off("error", r), e.off("close", n), f.abort(k(s));
        }, n = ()=>{
            t.off("error", r), e.off("close", n), f.abort(t.errored ? k(t.errored) : void 0);
        };
        t.once("error", r), e.once("close", n);
    }
    return {
        httpVersion: t.httpVersion,
        method: null !== (n = t.method) && void 0 !== n ? n : "",
        url: new URL(m, `${c}://${l}`).toString(),
        header: L(t.headers),
        body: d,
        signal: f.signal,
        contextValues: u
    };
}
async function wt(t, e) {
    var r, n, s;
    const i = null === (r = t.body) || void 0 === r ? void 0 : r[Symbol.asyncIterator]();
    let o = !1;
    try {
        if (void 0 !== i) {
            let r = await i.next();
            for(o = !0, e.writeHead(t.status, $(t.header)), o = !1; !0 !== r.done; r = await i.next())o = !0, await St(e, r.value), "flush" in e && "function" == typeof e.flush && e.flush(), o = !1;
        }
        e.headersSent || e.writeHead(t.status, $(t.header)), t.trailer && e.addTrailers($(t.trailer)), await new Promise((t)=>{
            e.once("end", t), e.end();
        });
    } catch (t) {
        throw o && (null === (n = null == i ? void 0 : i.throw) || void 0 === n || n.call(i, t).catch(()=>{})), k(t);
    } finally{
        null === (s = null == i ? void 0 : i.return) || void 0 === s || s.call(i).catch(()=>{});
    }
}
function St(t, e) {
    return new Promise((r, n)=>{
        if (t.errored) return i(t.errored);
        t.once("error", i), t.once("drain", o);
        const s = t.write(e, "binary", function(e) {
            e && !s && (i(e), t.once("error", ()=>{}));
        });
        function i(e) {
            t.off("error", i), t.off("drain", o), n(e);
        }
        function o() {
            t.off("error", i), t.off("drain", o), r();
        }
        s && o();
    });
}
function Jt(t) {
    var e;
    void 0 === t.acceptCompression && (t.acceptCompression = [
        D,
        U
    ]);
    const r = (0, pt.k)(t);
    t.routes(r);
    const n = null !== (e = t.requestPathPrefix) && void 0 !== e ? e : "", s = new Map;
    for (const t of r.handlers)s.set(n + t.requestPath, t);
    return function(e, r) {
        var n, a, u, c;
        const l = s.get(null !== (a = null === (n = e.url) || void 0 === n ? void 0 : n.split("?", 2)[0]) && void 0 !== a ? a : "");
        if (!l) return void (null !== (u = t.fallback) && void 0 !== u ? u : Bt)(e, r);
        const m = yt(e, r, void 0, null === (c = t.contextValues) || void 0 === c ? void 0 : c.call(t, e));
        l(m).then((t)=>wt(t, r)).catch((t)=>{
            o.T.from(t).code != i.C.Aborted && console.error(`handler for rpc ${l.method.name} of ${l.service.typeName} failed`, t);
        });
    };
}
const Bt = (t, e)=>{
    e.writeHead(ht.of.status), e.end();
};
