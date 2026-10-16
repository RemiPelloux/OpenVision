"use strict";
require.d(exports, {
    gE: ()=>N,
    Aw: ()=>dA
});
var r = require("./module-25853.js");
const [s] = process.versions.node.split(".").map((A)=>parseInt(A, 10));
s < 18 && void 0 === globalThis.Headers && (globalThis.Headers = r.Headers);
var o, n = require(53009), i = require(43106), E = require(39023), Q = require(47777), g = require(42761);
function C(A) {
    let e = Q.C.Internal;
    const t = B(A).map(a);
    t.some((A)=>"ERR_STREAM_WRITE_AFTER_END" == A.code) || t.some((A)=>"ERR_STREAM_DESTROYED" == A.code || "ERR_HTTP2_INVALID_STREAM" == A.code || "ECONNRESET" == A.code) ? e = Q.C.Aborted : t.some((A)=>"ETIMEDOUT" == A.code || "ENOTFOUND" == A.code || "EAI_AGAIN" == A.code || "ECONNREFUSED" == A.code) && (e = Q.C.Unavailable);
    const r = g.T.from(A, e);
    return r !== A && (r.cause = A), r;
}
function B(A) {
    const e = [];
    for(; A instanceof Error && !e.includes(A) && (e.push(A), "cause" in A);)A = A.cause;
    return e;
}
function a(A) {
    const e = {};
    return A instanceof Error && ("code" in A && "string" == typeof A.code && (e.code = A.code), "syscall" in A && "string" == typeof A.syscall && (e.syscall = A.syscall)), e;
}
!function(A) {
    A[A.PROTOCOL_ERROR = 1] = "PROTOCOL_ERROR", A[A.INTERNAL_ERROR = 2] = "INTERNAL_ERROR", A[A.FLOW_CONTROL_ERROR = 3] = "FLOW_CONTROL_ERROR", A[A.SETTINGS_TIMEOUT = 4] = "SETTINGS_TIMEOUT", A[A.STREAM_CLOSED = 5] = "STREAM_CLOSED", A[A.FRAME_SIZE_ERROR = 6] = "FRAME_SIZE_ERROR", A[A.REFUSED_STREAM = 7] = "REFUSED_STREAM", A[A.CANCEL = 8] = "CANCEL", A[A.COMPRESSION_ERROR = 9] = "COMPRESSION_ERROR", A[A.CONNECT_ERROR = 10] = "CONNECT_ERROR", A[A.ENHANCE_YOUR_CALM = 11] = "ENHANCE_YOUR_CALM", A[A.INADEQUATE_SECURITY = 12] = "INADEQUATE_SECURITY", A[A.HTTP_1_1_REQUIRED = 13] = "HTTP_1_1_REQUIRED";
}(o || (o = {}));
const I = (0, E.promisify)(i.gzip), c = (0, E.promisify)(i.gunzip), h = (0, E.promisify)(i.brotliCompress), l = (0, E.promisify)(i.brotliDecompress), u = {
    name: "gzip",
    compress: (A)=>I(A, {}),
    decompress: (A, e)=>0 == A.length ? Promise.resolve(new Uint8Array(0)) : f(c(A, {
            maxOutputLength: e
        }), e)
}, d = {
    name: "br",
    compress: (A)=>h(A, {}),
    decompress: (A, e)=>0 == A.length ? Promise.resolve(new Uint8Array(0)) : f(l(A, {
            maxOutputLength: e
        }), e)
};
function f(A, e) {
    return A.catch((A)=>{
        const t = a(A);
        let r = Q.C.Internal, s = "decompression failed";
        switch(t.code){
            case "ERR_BUFFER_TOO_LARGE":
                r = Q.C.ResourceExhausted, s = `message is larger than configured readMaxBytes ${e} after decompression`;
                break;
            case "Z_DATA_ERROR":
            case "ERR_PADDING_2":
                r = Q.C.InvalidArgument;
                break;
            default:
                void 0 !== t.code && t.code.startsWith("ERR__ERROR_FORMAT_") && (r = Q.C.InvalidArgument);
        }
        return Promise.reject(new g.T(s, r, void 0, void 0, A));
    });
}
var y = require(85675), D = require(58611), R = require(65692);
function w(A) {
    const e = new Headers;
    for (const [t, r] of Object.entries(A))if (!t.startsWith(":") && void 0 !== r) if ("string" == typeof r) e.append(t, r);
    else if ("number" == typeof r) e.append(t, String(r));
    else for (const A of r)e.append(t, A);
    return e;
}
function p(A, e) {
    if (void 0 === A && void 0 === e) return;
    const t = Object.create(null);
    if (void 0 !== e) for (const [A, r] of Object.entries(e))Array.isArray(r) ? t[A] = r.concat() : void 0 !== r && (t[A] = r);
    if (void 0 !== A) if (Array.isArray(A)) for (const [e, r] of A)k(t, e, r);
    else if ("forEach" in A) "function" == typeof A.forEach && A.forEach((A, e)=>{
        k(t, e, A);
    });
    else for (const [e, r] of Object.entries(A))k(t, e, r);
    return t;
}
function k(A, e, t) {
    const r = A[e = e.toLowerCase()];
    Array.isArray(r) ? r.push(t) : A[e] = void 0 === r ? t : [
        r.toString(),
        t
    ];
}
function F(A) {
    if (!A.aborted) return;
    if (void 0 !== A.reason) return A.reason;
    const e = new Error("This operation was aborted");
    return e.name = "AbortError", e;
}
class N {
    state() {
        return "ready" == this.s.t ? void 0 !== this.verifying ? "verifying" : this.s.streamCount() > 0 ? "open" : "idle" : this.s.t;
    }
    error() {
        if ("error" == this.s.t) return this.s.reason;
    }
    constructor(A, e, t){
        var r, s, o, n;
        this.s = {
            t: "closed"
        }, this.shuttingDown = [], this.authority = new URL(A).origin, this.http2SessionOptions = t, this.options = {
            pingIntervalMs: null !== (r = null == e ? void 0 : e.pingIntervalMs) && void 0 !== r ? r : Number.POSITIVE_INFINITY,
            pingTimeoutMs: null !== (s = null == e ? void 0 : e.pingTimeoutMs) && void 0 !== s ? s : 15e3,
            pingIdleConnection: null !== (o = null == e ? void 0 : e.pingIdleConnection) && void 0 !== o && o,
            idleConnectionTimeoutMs: null !== (n = null == e ? void 0 : e.idleConnectionTimeoutMs) && void 0 !== n ? n : 9e5
        };
    }
    async connect() {
        try {
            return (await this.gotoReady()).streamCount() > 0 ? "open" : "idle";
        } catch (A) {
            return "error";
        }
    }
    async request(A, e, t, r) {
        for(;;){
            const s = await this.gotoReady();
            try {
                const o = s.conn.request(Object.assign(Object.assign({}, t), {
                    ":method": A,
                    ":path": e
                }), r);
                return s.registerRequest(o), o;
            } catch (A) {
                if (s.conn.closed || s.conn.destroyed) continue;
                throw A;
            }
        }
    }
    notifyResponseByteRead(A) {
        "ready" == this.s.t && this.s.responseByteRead(A);
        for (const e of this.shuttingDown)e.responseByteRead(A);
    }
    abort(A) {
        var e, t, r;
        const s = null != A ? A : new g.T("connection aborted", Q.C.Canceled);
        null === (t = (e = this.s).abort) || void 0 === t || t.call(e, s);
        for (const A of this.shuttingDown)null === (r = A.abort) || void 0 === r || r.call(A, s);
        this.setState(b(s));
    }
    abortCurrent(A) {
        var e, t;
        const r = this.s;
        if ("ready" === r.t && r.isShuttingDown()) return;
        const s = null != A ? A : new g.T("connection aborted", Q.C.Canceled);
        null === (t = (e = r).abort) || void 0 === t || t.call(e, s);
    }
    captureSessions() {
        const A = [];
        "function" == typeof this.s.abort && A.push(this.s);
        for (const e of this.shuttingDown)-1 === A.indexOf(e) && A.push(e);
        return A;
    }
    async gotoReady() {
        var A;
        for("ready" == this.s.t ? this.s.isShuttingDown() || this.s.conn.closed || this.s.conn.destroyed ? this.setState(S(this.authority, this.http2SessionOptions)) : this.s.requiresVerify() && await this.verify(this.s) : "closed" != this.s.t && "error" != this.s.t || this.setState(S(this.authority, this.http2SessionOptions)); "ready" !== this.s.t;){
            if ("error" === this.s.t) throw this.s.reason;
            if ("unavailable" === this.s.t) throw new g.T("expected h2 session, but ALPN protocol failed to negotiate", Q.C.Unavailable, {
                authority: this.authority,
                issuer: null !== (A = this.s.issuer) && void 0 !== A ? A : "unknown"
            });
            "connecting" === this.s.t && await this.s.conn;
        }
        return this.s;
    }
    setState(A) {
        var e, t;
        if (null === (t = (e = this.s).onExitState) || void 0 === t || t.call(e), "ready" == this.s.t && this.s.isShuttingDown()) {
            const A = this.s;
            this.shuttingDown.push(A), A.onClose = A.onError = ()=>{
                const e = this.shuttingDown.indexOf(A);
                -1 !== e && this.shuttingDown.splice(e, 1);
            };
        }
        switch(A.t){
            case "connecting":
                A.conn.then((A)=>{
                    this.setState(function(A, e) {
                        var t, r;
                        if (function(A) {
                            if (A.connecting) throw new g.T("expected open session, but it is connecting", Q.C.Internal);
                            if (A.destroyed) throw new g.T("expected open session, but it is destroyed", Q.C.Internal);
                            if (A.closed) throw new g.T("expected open session, but it is closed", Q.C.Internal);
                        }(A), !0 === A.encrypted && "h2" !== A.alpnProtocol) {
                            var s = A.socket, o = null == s ? void 0 : s.getPeerCertificate, n = "function" == typeof o ? null === (r = null === (t = o.call(s)) || void 0 === t ? void 0 : t.issuer) || void 0 === r ? void 0 : r.CN : void 0;
                            return A.destroyed || A.destroy(), {
                                t: "unavailable",
                                issuer: n
                            };
                        }
                        A.unref();
                        let i, E, B, a = Date.now(), I = 0, c = !1, h = !1;
                        w();
                        const l = {
                            t: "ready",
                            conn: A,
                            streamCount: ()=>I,
                            requiresVerify: ()=>Date.now() - a > e.pingIntervalMs,
                            isShuttingDown: ()=>c,
                            onClose: void 0,
                            onError: void 0,
                            registerRequest (e) {
                                I++, 1 == I && (A.ref(), u(), R()), e.once("response", ()=>{
                                    a = Date.now(), u();
                                }), e.once("close", ()=>{
                                    I--, 0 == I && (A.unref(), u(), w());
                                });
                            },
                            responseByteRead (e) {
                                e.session === A && (A.closed || A.destroyed || I <= 0 || (a = Date.now(), u()));
                            },
                            verify: ()=>(A.ref(), new Promise((e)=>{
                                    D(()=>{
                                        0 == I && A.unref(), e(!0);
                                    }), A.once("error", ()=>e(!1));
                                })),
                            abort (e) {
                                A.destroyed || (A.once("error", ()=>{}), A.destroy(e, y.constants.NGHTTP2_CANCEL));
                            },
                            onExitState () {
                                l.isShuttingDown() || (b(), this.onError = void 0, this.onClose = void 0);
                            }
                        };
                        function u() {
                            d(), (I > 0 || e.pingIdleConnection) && (i = m(f, e.pingIntervalMs));
                        }
                        function d() {
                            clearTimeout(i), clearTimeout(E);
                        }
                        function f() {
                            D(u);
                        }
                        function D(t) {
                            clearTimeout(E), E = m(()=>{
                                A.destroy(new g.T("PING timed out", Q.C.Unavailable), y.constants.NGHTTP2_CANCEL);
                            }, e.pingTimeoutMs), A.ping((r, s)=>{
                                clearTimeout(E), null === r && (s > e.pingTimeoutMs ? A.destroy(new g.T("PING timed out", Q.C.Unavailable), y.constants.NGHTTP2_CANCEL) : (a = Date.now(), t()));
                            });
                        }
                        function R() {
                            clearTimeout(B);
                        }
                        function w() {
                            B = m(p, e.idleConnectionTimeoutMs);
                        }
                        function p() {
                            A.close(), F();
                        }
                        function k(t, r, s) {
                            c = !0;
                            const o = Buffer.from("too_many_pings", "ascii");
                            if (t === y.constants.NGHTTP2_ENHANCE_YOUR_CALM && null != s && s.equals(o) && (e.pingIntervalMs = 2 * e.pingIntervalMs, h = !0), t === y.constants.NGHTTP2_NO_ERROR) {
                                const e = parseInt(process.versions.node.split(".")[0], 10);
                                0 == I && e >= 18 && A.destroy(new g.T("received GOAWAY without any open streams", Q.C.Canceled), y.constants.NGHTTP2_NO_ERROR);
                            }
                        }
                        function F() {
                            var A;
                            b(), null === (A = l.onClose) || void 0 === A || A.call(l);
                        }
                        function N(A) {
                            var e, t;
                            if (b(), h) {
                                const A = new g.T(`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${y.constants.NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, Q.C.ResourceExhausted);
                                null === (e = l.onError) || void 0 === e || e.call(l, A);
                            } else null === (t = l.onError) || void 0 === t || t.call(l, C(A));
                        }
                        function b() {
                            d(), R(), A.off("error", N), A.off("close", F), A.off("goaway", k);
                        }
                        return A.on("error", N), A.on("close", F), A.on("goaway", k), l;
                    }(A, this.options));
                }, (A)=>{
                    this.setState(b(A));
                });
                break;
            case "ready":
                A.onClose = ()=>this.setState({
                        t: "closed"
                    }), A.onError = (A)=>this.setState(b(A));
        }
        this.s = A;
    }
    verify(A) {
        return void 0 !== this.verifying || (this.verifying = A.verify().then((A)=>{
            A || this.setState(S(this.authority, this.http2SessionOptions));
        }, (A)=>{
            this.setState(b(A));
        }).finally(()=>{
            this.verifying = void 0;
        })), this.verifying;
    }
}
function b(A) {
    return A instanceof g.T && g.T.from(A).code == Q.C.Canceled ? {
        t: "closed"
    } : function(A) {
        return {
            t: "error",
            reason: A
        };
    }(A);
}
function S(A, e) {
    let t, r;
    const s = new Promise((A, e)=>{
        t = A, r = e;
    }), o = y.connect(A, e);
    function n() {
        null == t || t(o), E();
    }
    function i(A) {
        null == r || r(C(A)), E();
    }
    function E() {
        o.off("connect", n), o.off("error", i);
    }
    return o.on("connect", n), o.on("error", i), {
        t: "connecting",
        conn: s,
        abort (A) {
            o.destroyed || o.destroy(void 0, y.constants.NGHTTP2_CANCEL), null == r || r(A);
        },
        onExitState () {
            E();
        }
    };
}
function m(A, e) {
    if (!(e > 2147483647)) return setTimeout(A, e).unref();
}
function U(A) {
    var e, t;
    if ("1.1" == A.httpVersion) return t = A.nodeOptions, async function(A) {
        const e = J(A.signal);
        return new Promise((r, s)=>{
            e.catch((A)=>{
                s(A);
            }), function(A, e, t, r) {
                let s;
                s = new URL(e).protocol.startsWith("https") ? R.request(e, t) : D.request(e, t), A.catch((A)=>s.destroy(C(A))), s.flushHeaders(), s.on("error", A.reject), s.on("socket", function(A) {
                    function e() {
                        A.off("connect", e), r(s);
                    }
                    "open" === A.readyState ? r(s) : A.on("connect", e);
                });
            }(e, A.url, Object.assign(Object.assign({}, t), {
                headers: p(A.header, null == t ? void 0 : t.headers),
                method: A.method
            }), (t)=>{
                T(A, t, e), t.on("response", (A)=>{
                    var t;
                    A.on("error", e.reject), e.catch((e)=>A.destroy(C(e)));
                    const s = new Headers;
                    r({
                        status: null !== (t = A.statusCode) && void 0 !== t ? t : 0,
                        header: w(A.headers),
                        body: L(e, A, s),
                        trailer: s
                    });
                });
            });
        });
    };
    return function(A) {
        return function(e) {
            const t = J(e.signal), r = A(e.url);
            return new Promise((A, s)=>{
                t.catch((A)=>{
                    s(A);
                }), function(A, e, t, r, s, n, i) {
                    const E = new URL(t);
                    if (E.origin !== e.authority) {
                        const t = `cannot make a request to ${E.origin}: the http2 session is connected to ${e.authority}`;
                        return void A.reject(new g.T(t, Q.C.Internal));
                    }
                    e.request(r, E.pathname + E.search, s, {}).then((e)=>{
                        A.catch((A)=>{
                            if (e.closed) return;
                            const t = A instanceof g.T && A.code == Q.C.Canceled ? o.CANCEL : o.INTERNAL_ERROR;
                            return new Promise((A)=>e.close(t, A));
                        }), e.on("error", function(t) {
                            e.writableEnded && B(t).map(a).some((A)=>"ERR_STREAM_WRITE_AFTER_END" == A.code) || A.reject(t);
                        }), e.on("close", function() {
                            const t = function(A) {
                                switch(A){
                                    case o.PROTOCOL_ERROR:
                                    case o.INTERNAL_ERROR:
                                    case o.FLOW_CONTROL_ERROR:
                                    case o.SETTINGS_TIMEOUT:
                                    case o.FRAME_SIZE_ERROR:
                                    case o.COMPRESSION_ERROR:
                                    case o.CONNECT_ERROR:
                                        return new g.T(`http/2 stream closed with error code ${o[A]} (0x${A.toString(16)})`, Q.C.Internal);
                                    case o.REFUSED_STREAM:
                                        return new g.T(`http/2 stream closed with error code ${o[A]} (0x${A.toString(16)})`, Q.C.Unavailable);
                                    case o.CANCEL:
                                        return new g.T(`http/2 stream closed with error code ${o[A]} (0x${A.toString(16)})`, Q.C.Canceled);
                                    case o.ENHANCE_YOUR_CALM:
                                        return new g.T(`http/2 stream closed with error code ${o[A]} (0x${A.toString(16)})`, Q.C.ResourceExhausted);
                                    case o.INADEQUATE_SECURITY:
                                    case o.HTTP_1_1_REQUIRED:
                                        return new g.T(`http/2 stream closed with error code ${o[A]} (0x${A.toString(16)})`, Q.C.PermissionDenied);
                                    case o.STREAM_CLOSED:
                                }
                            }(e.rstCode);
                            t && A.reject(t);
                        }), i(e);
                    }, (e)=>{
                        A.reject(e);
                    });
                }(t, r, e.url, e.method, p(e.header), 0, (s)=>{
                    T(e, s, t), s.on("response", (e)=>{
                        var o;
                        const n = {
                            status: null !== (o = e[":status"]) && void 0 !== o ? o : 0,
                            header: w(e),
                            body: Y(t, s, r),
                            trailer: M(s)
                        };
                        A(n);
                    });
                });
            });
        };
    }(null !== (e = A.sessionProvider) && void 0 !== e ? e : (A)=>new N(A));
}
function L(A, e, t) {
    const r = e[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                async next () {
                    const s = await A.race(r.next());
                    return !0 === s.done && (w(e.trailers).forEach((A, e)=>{
                        t.set(e, A);
                    }), A.resolve(), await A), s;
                },
                throw (e) {
                    throw A.reject(e), e;
                }
            })
    };
}
function M(A) {
    const e = new Headers;
    return A.on("trailers", (A)=>{
        w(A).forEach((A, t)=>{
            e.set(t, A);
        });
    }), e;
}
function Y(A, e, t) {
    const r = e[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                async next () {
                    const s = await A.race(r.next());
                    return !0 === s.done && (A.resolve(), await A), null == t || t.notifyResponseByteRead(e), s;
                },
                throw (e) {
                    throw A.reject(e), e;
                }
            })
    };
}
async function T(A, e, t) {
    if (void 0 === A.body) return void await new Promise((A)=>e.end(A));
    const r = A.body[Symbol.asyncIterator]();
    return new Promise((A)=>{
        !function s() {
            if (t.isRejected()) return;
            r.next().then((o)=>{
                !0 !== o.done ? e.write(o.value, "binary", function(A) {
                    null != A ? (void 0 !== r.throw && r.throw(C(A)).catch(()=>{}), e.writableEnded && B(A).map(a).some((A)=>"ERR_STREAM_WRITE_AFTER_END" == A.code) || t.reject(A)) : s();
                }) : e.end(A);
            }, (A)=>{
                t.reject(A);
            });
        }();
    });
}
function J(A) {
    let e, t, r = !1, s = !1;
    const o = new Promise((A, r)=>{
        e = A, t = r;
    }), n = {
        resolve () {
            r || s || (r = !0, null == e || e());
        },
        isResolved: ()=>r,
        reject (A) {
            r || s || (s = !0, null == t || t(C(A)));
        },
        isRejected: ()=>s,
        async race (A) {
            const e = await Promise.race([
                A,
                o
            ]);
            if (void 0 === e && r) throw new g.T("sentinel completed early", Q.C.Internal);
            return e;
        }
    }, i = Object.assign(o, n);
    function E() {
        n.reject(F(this));
    }
    return A && (A.aborted ? n.reject(F(A)) : A.addEventListener("abort", E), o.finally(()=>A.removeEventListener("abort", E)).catch(()=>{})), i;
}
const G = "Content-Type", H = "Grpc-Encoding", v = "Grpc-Accept-Encoding", V = "Grpc-Timeout", x = "Grpc-Status", O = "Grpc-Message", W = "Grpc-Status-Details-Bin", q = "User-Agent", P = /^application\/grpc(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i, _ = "application/grpc+proto", Z = "application/grpc+json";
function X(A, e, t, r, s) {
    const o = function(A, e, t) {
        const r = new Headers(null != t ? t : {});
        return r.set(G, A ? _ : Z), r.set(q, "connect-es/1.6.1"), void 0 !== e && r.set(V, `${e}m`), r.set("Te", "trailers"), r;
    }(A, e, t);
    return null != s && o.set(H, s.name), r.length > 0 && o.set(v, r.map((A)=>A.name).join(",")), o;
}
var K = require(36038);
class j extends K.Message {
    constructor(A){
        super(), this.code = 0, this.message = "", this.details = [], K.proto3.util.initPartial(A, this);
    }
    static fromBinary(A, e) {
        return (new j).fromBinary(A, e);
    }
    static fromJson(A, e) {
        return (new j).fromJson(A, e);
    }
    static fromJsonString(A, e) {
        return (new j).fromJsonString(A, e);
    }
    static equals(A, e) {
        return K.proto3.util.equals(j, A, e);
    }
}
j.runtime = K.proto3, j.typeName = "google.rpc.Status", j.fields = K.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "details",
            kind: "message",
            T: K.Any,
            repeated: !0
        }
    ]);
const z = "0";
function $(A) {
    var e;
    const t = A.get(W);
    if (null != t) {
        const e = function(A, e, t) {
            try {
                const r = K.protoBase64.dec(A);
                return e ? e.fromBinary(r, t) : r;
            } catch (A) {
                throw g.T.from(A, Q.C.DataLoss);
            }
        }(t, j);
        if (0 == e.code) return;
        const r = new g.T(e.message, e.code, A);
        return r.details = e.details.map((A)=>({
                type: A.typeUrl.substring(A.typeUrl.lastIndexOf("/") + 1),
                value: A.value
            })), r;
    }
    const r = A.get(x);
    if (null != r) {
        if (r === z) return;
        const t = parseInt(r, 10);
        return t in Q.C ? new g.T(decodeURIComponent(null !== (e = A.get(O)) && void 0 !== e ? e : ""), t, A) : new g.T(`invalid grpc-status: ${r}`, Q.C.Internal, A);
    }
}
function AA(A, e) {
    if (200 != A) throw new g.T(`HTTP ${A}`, function(A) {
        switch(A){
            case 400:
                return Q.C.Internal;
            case 401:
                return Q.C.Unauthenticated;
            case 403:
                return Q.C.PermissionDenied;
            case 404:
                return Q.C.Unimplemented;
            case 429:
            case 502:
            case 503:
            case 504:
                return Q.C.Unavailable;
            default:
                return Q.C.Unknown;
        }
    }(A), e);
    const t = e.get(G);
    if (null == function(A) {
        const e = null == A ? void 0 : A.match(P);
        if (!e) return;
        return {
            binary: !e[1]
        };
    }(t)) throw new g.T(`unsupported content type ${t}`, Q.C.Unknown);
    return {
        foundStatus: e.has(x),
        headerError: $(e)
    };
}
function eA(A, e, t) {
    const { foundStatus: r, headerError: s } = AA(e, t);
    let o;
    const n = t.get(H);
    if (null !== n && "identity" !== n.toLowerCase() && (o = A.find((A)=>A.name === n), !o)) throw new g.T(`unsupported response encoding "${n}"`, Q.C.Internal, t);
    return {
        foundStatus: r,
        compression: o,
        headerError: s
    };
}
function tA(A, e) {
    const t = $(A);
    if (t) throw e.forEach((A, e)=>{
        t.metadata.append(e, A);
    }), t;
    if (!e.has(x) && !A.has(x)) throw new g.T("protocol error: missing status", Q.C.Internal);
}
var rA = require(53131);
function sA(A, e, t) {
    const r = "string" == typeof e ? e : e.typeName, s = "string" == typeof t ? t : t.name;
    return A.toString().replace(/\/?$/, `/${r}/${s}`);
}
function oA(A, e) {
    var t;
    return null !== (t = null == e ? void 0 : e.concat().reverse().reduce((A, e)=>e(A), A)) && void 0 !== t ? t : A;
}
function nA(A, e) {
    return e instanceof A ? e : new A(e);
}
function iA(A, e) {
    function t(e) {
        return !0 === e.done ? e : {
            done: e.done,
            value: nA(A, e.value)
        };
    }
    return {
        [Symbol.asyncIterator] () {
            const A = e[Symbol.asyncIterator](), r = {
                next: ()=>A.next().then(t)
            };
            return void 0 !== A.throw && (r.throw = (e)=>A.throw(e).then(t)), void 0 !== A.return && (r.return = (e)=>A.return(e).then(t)), r;
        }
    };
}
function EA(A) {
    const { signal: e, cleanup: t } = function(A) {
        const e = new AbortController, t = ()=>{
            e.abort(new g.T("the operation timed out", Q.C.DeadlineExceeded));
        };
        let r;
        return void 0 !== A && (A <= 0 ? t() : r = setTimeout(t, A)), {
            signal: e.signal,
            cleanup: ()=>clearTimeout(r)
        };
    }(A.timeoutMs), r = function(...A) {
        const e = new AbortController, t = A.filter((A)=>void 0 !== A).concat(e.signal);
        for (const A of t){
            if (A.aborted) {
                r.apply(A);
                break;
            }
            A.addEventListener("abort", r);
        }
        function r() {
            e.signal.aborted || e.abort(F(this));
            for (const A of t)A.removeEventListener("abort", r);
        }
        return e;
    }(A.signal, e);
    return [
        r.signal,
        function(A) {
            const s = g.T.from(e.aborted ? F(e) : A);
            return r.abort(s), t(), Promise.reject(s);
        },
        function() {
            t(), r.abort();
        }
    ];
}
function QA(A, e, t, r) {
    const s = gA(CA(A.I, e), r), o = gA(BA(A.I, t), r), n = gA(CA(A.O, e), r), i = gA(BA(A.O, t), r);
    return {
        getI: (A)=>A ? s : o,
        getO: (A)=>A ? n : i
    };
}
function gA(A, e) {
    return {
        serialize (t) {
            const r = A.serialize(t);
            return (0, n.Tw)(e.writeMaxBytes, r.byteLength), r;
        },
        parse: (t)=>((0, n.kk)(e.readMaxBytes, t.byteLength, !0), A.parse(t))
    };
}
function CA(A, e) {
    return {
        parse (t) {
            try {
                return A.fromBinary(t, e);
            } catch (A) {
                const e = A instanceof Error ? A.message : String(A);
                throw new g.T(`parse binary: ${e}`, Q.C.Internal);
            }
        },
        serialize (A) {
            try {
                return A.toBinary(e);
            } catch (A) {
                const e = A instanceof Error ? A.message : String(A);
                throw new g.T(`serialize binary: ${e}`, Q.C.Internal);
            }
        }
    };
}
function BA(A, e) {
    var t, r;
    const s = null !== (t = null == e ? void 0 : e.textEncoder) && void 0 !== t ? t : new TextEncoder, o = null !== (r = null == e ? void 0 : e.textDecoder) && void 0 !== r ? r : new TextDecoder, n = function(A) {
        var e;
        const t = Object.assign({}, A);
        return null !== (e = t.ignoreUnknownFields) && void 0 !== e || (t.ignoreUnknownFields = !0), t;
    }(e);
    return {
        parse (e) {
            try {
                const t = o.decode(e);
                return A.fromJsonString(t, n);
            } catch (A) {
                throw g.T.from(A, Q.C.InvalidArgument);
            }
        },
        serialize (A) {
            try {
                const e = A.toJsonString(n);
                return s.encode(e);
            } catch (A) {
                throw g.T.from(A, Q.C.Internal);
            }
        }
    };
}
function aA() {
    return {
        get (A) {
            return A.id in this ? this[A.id] : A.defaultValue;
        },
        set (A, e) {
            return this[A.id] = e, this;
        },
        delete (A) {
            return delete this[A.id], this;
        }
    };
}
var IA = function(A) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e, t = A[Symbol.asyncIterator];
    return t ? t.call(A) : (A = "function" == typeof __values ? __values(A) : A[Symbol.iterator](), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
        return this;
    }, e);
    function r(t) {
        e[t] = A[t] && function(e) {
            return new Promise(function(r, s) {
                (function(A, e, t, r) {
                    Promise.resolve(r).then(function(e) {
                        A({
                            value: e,
                            done: t
                        });
                    }, e);
                })(r, s, (e = A[t](e)).done, e.value);
            });
        };
    }
}, cA = function(A) {
    return this instanceof cA ? (this.v = A, this) : new cA(A);
}, hA = function(A) {
    var e, t;
    return e = {}, r("next"), r("throw", function(A) {
        throw A;
    }), r("return"), e[Symbol.iterator] = function() {
        return this;
    }, e;
    function r(r, s) {
        e[r] = A[r] ? function(e) {
            return (t = !t) ? {
                value: cA(A[r](e)),
                done: !1
            } : s ? s(e) : e;
        } : s;
    }
}, lA = function(A, e, t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r, s = t.apply(A, e || []), o = [];
    return r = {}, n("next"), n("throw"), n("return", function(A) {
        return function(e) {
            return Promise.resolve(e).then(A, Q);
        };
    }), r[Symbol.asyncIterator] = function() {
        return this;
    }, r;
    function n(A, e) {
        s[A] && (r[A] = function(e) {
            return new Promise(function(t, r) {
                o.push([
                    A,
                    e,
                    t,
                    r
                ]) > 1 || i(A, e);
            });
        }, e && (r[A] = e(r[A])));
    }
    function i(A, e) {
        try {
            (t = s[A](e)).value instanceof cA ? Promise.resolve(t.value.v).then(E, Q) : g(o[0][2], t);
        } catch (A) {
            g(o[0][3], A);
        }
        var t;
    }
    function E(A) {
        i("next", A);
    }
    function Q(A) {
        i("throw", A);
    }
    function g(A, e) {
        A(e), o.shift(), o.length && i(o[0][0], o[0][1]);
    }
};
function uA(A) {
    return {
        async unary (e, t, r, s, o, n, i) {
            const E = QA(t, A.binaryOptions, A.jsonOptions, A);
            return s = void 0 === s ? A.defaultTimeoutMs : s <= 0 ? void 0 : s, await function(A) {
                const e = oA(A.next, A.interceptors), [t, r, s] = EA(A);
                return e(Object.assign(Object.assign({}, A.req), {
                    message: nA(A.req.method.I, A.req.message),
                    signal: t
                })).then((A)=>(s(), A), r);
            }({
                interceptors: A.interceptors,
                signal: r,
                timeoutMs: s,
                req: {
                    stream: !1,
                    service: e,
                    method: t,
                    url: sA(A.baseUrl, e, t),
                    init: {},
                    header: X(A.useBinaryFormat, s, o, A.acceptCompression, A.sendCompression),
                    contextValues: null != i ? i : aA(),
                    message: n
                },
                next: async (r)=>{
                    const s = await A.httpClient({
                        url: r.url,
                        method: "POST",
                        header: r.header,
                        signal: r.signal,
                        body: (0, rA.Fs)((0, rA.T$)([
                            r.message
                        ]), (0, rA.XO)(E.getI(A.useBinaryFormat)), (0, rA.fM)(A.sendCompression, A.compressMinBytes), (0, rA.yQ)(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: o, headerError: n } = eA(A.acceptCompression, s.status, s.header), i = await (0, rA.WK)(s.body, (0, rA.pY)(A.readMaxBytes), (0, rA.ew)(null != o ? o : null, A.readMaxBytes), (0, rA.uv)(E.getO(A.useBinaryFormat)), async (A)=>{
                        var e, t, r, s;
                        let o;
                        try {
                            for(var n, i = !0, E = IA(A); !(e = (n = await E.next()).done); i = !0){
                                s = n.value, i = !1;
                                const A = s;
                                if (void 0 !== o) throw new g.T("protocol error: received extra output message for unary method", Q.C.Unimplemented);
                                o = A;
                            }
                        } catch (A) {
                            t = {
                                error: A
                            };
                        } finally{
                            try {
                                i || e || !(r = E.return) || await r.call(E);
                            } finally{
                                if (t) throw t.error;
                            }
                        }
                        return o;
                    }, {
                        propagateDownStreamError: !1
                    });
                    if (tA(s.trailer, s.header), void 0 === i) {
                        if (n) throw n;
                        throw new g.T("protocol error: missing output message for unary method", s.trailer.has(x) ? Q.C.Unimplemented : Q.C.Unknown);
                    }
                    if (n) throw new g.T("protocol error: received output message for unary method with error status", Q.C.Unknown);
                    return {
                        stream: !1,
                        service: e,
                        method: t,
                        header: s.header,
                        message: i,
                        trailer: s.trailer
                    };
                }
            });
        },
        async stream (e, t, r, s, o, n, i) {
            const E = QA(t, A.binaryOptions, A.jsonOptions, A);
            return s = void 0 === s ? A.defaultTimeoutMs : s <= 0 ? void 0 : s, function(A) {
                const e = oA(A.next, A.interceptors), [t, r, s] = EA(A), o = Object.assign(Object.assign({}, A.req), {
                    message: iA(A.req.method.I, A.req.message),
                    signal: t
                });
                let n = !1;
                return t.addEventListener("abort", function() {
                    var e, t;
                    const r = A.req.message[Symbol.asyncIterator]();
                    n || null === (e = r.throw) || void 0 === e || e.call(r, this.reason).catch(()=>{}), null === (t = r.return) || void 0 === t || t.call(r).catch(()=>{});
                }), e(o).then((A)=>Object.assign(Object.assign({}, A), {
                        message: {
                            [Symbol.asyncIterator] () {
                                const e = A.message[Symbol.asyncIterator]();
                                return {
                                    next: ()=>e.next().then((A)=>(1 == A.done && (n = !0, s()), A), r)
                                };
                            }
                        }
                    }), r);
            }({
                interceptors: A.interceptors,
                signal: r,
                timeoutMs: s,
                req: {
                    stream: !0,
                    service: e,
                    method: t,
                    url: sA(A.baseUrl, e, t),
                    init: {},
                    header: X(A.useBinaryFormat, s, o, A.acceptCompression, A.sendCompression),
                    contextValues: null != i ? i : aA(),
                    message: n
                },
                next: async (e)=>{
                    const t = await A.httpClient({
                        url: e.url,
                        method: "POST",
                        header: e.header,
                        signal: e.signal,
                        body: (0, rA.Fs)(e.message, (0, rA.XO)(E.getI(A.useBinaryFormat)), (0, rA.fM)(A.sendCompression, A.compressMinBytes), (0, rA.yQ)(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: r, foundStatus: s, headerError: o } = eA(A.acceptCompression, t.status, t.header);
                    if (o) throw o;
                    const n = Object.assign(Object.assign({}, e), {
                        header: t.header,
                        trailer: t.trailer,
                        message: (0, rA.Fs)(t.body, (0, rA.pY)(A.readMaxBytes), (0, rA.ew)(null != r ? r : null, A.readMaxBytes), (0, rA.uv)(E.getO(A.useBinaryFormat)), function(A) {
                            return lA(this, arguments, function*() {
                                yield cA((yield* hA(IA(A)))), s || tA(t.trailer, t.header);
                            });
                        }, {
                            propagateDownStreamError: !0
                        })
                    });
                    return n;
                }
            });
        }
    };
}
function dA(A) {
    return uA(function(A) {
        var e, t, r, s;
        let o;
        if ("2" == A.httpVersion) {
            let e;
            e = A.sessionManager ? A.sessionManager : new N(A.baseUrl, {
                pingIntervalMs: A.pingIntervalMs,
                pingIdleConnection: A.pingIdleConnection,
                pingTimeoutMs: A.pingTimeoutMs,
                idleConnectionTimeoutMs: A.idleConnectionTimeoutMs
            }, A.nodeOptions), o = U({
                httpVersion: "2",
                sessionProvider: ()=>e
            });
        } else o = U({
            httpVersion: "1.1",
            nodeOptions: A.nodeOptions
        });
        return Object.assign(Object.assign(Object.assign({}, A), {
            httpClient: o,
            useBinaryFormat: null === (e = A.useBinaryFormat) || void 0 === e || e,
            interceptors: null !== (t = A.interceptors) && void 0 !== t ? t : [],
            sendCompression: null !== (r = A.sendCompression) && void 0 !== r ? r : null,
            acceptCompression: null !== (s = A.acceptCompression) && void 0 !== s ? s : [
                u,
                d
            ]
        }), (0, n.NL)(A.readMaxBytes, A.writeMaxBytes, A.compressMinBytes));
    }(A));
}
