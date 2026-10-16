"use strict";
const r = require(42613), s = require(69278), o = require(58611), { pipeline: n } = require(2203), i = require("./module-9361.js"), E = require("./module-93891.js"), Q = require("./module-13308.js"), g = require("./module-9792.js"), { RequestContentLengthMismatchError: C, ResponseContentLengthMismatchError: B, InvalidArgumentError: a, RequestAbortedError: I, HeadersTimeoutError: c, HeadersOverflowError: h, SocketError: l, InformationalError: u, BodyTimeoutError: d, HTTPParserError: f, ResponseExceededMaxSizeError: y, ClientDestroyedError: D } = require("./module-95521.js"), R = require("./module-3991.js"), { kUrl: w, kReset: p, kServerName: k, kClient: F, kBusy: N, kParser: b, kConnect: S, kBlocking: m, kResuming: U, kRunning: L, kPending: M, kSize: Y, kWriting: T, kQueue: J, kConnected: G, kConnecting: H, kNeedDrain: v, kNoRef: V, kKeepAliveDefaultTimeout: x, kHostHeader: O, kPendingIdx: W, kRunningIdx: q, kError: P, kPipelining: _, kSocket: Z, kKeepAliveTimeoutValue: X, kMaxHeadersSize: K, kKeepAliveMaxTimeout: j, kKeepAliveTimeoutThreshold: z, kHeadersTimeout: $, kBodyTimeout: AA, kStrictContentLength: eA, kConnector: tA, kMaxRedirections: rA, kMaxRequests: sA, kCounter: oA, kClose: nA, kDestroy: iA, kDispatch: EA, kInterceptors: QA, kLocalAddress: gA, kMaxResponseSize: CA, kHTTPConnVersion: BA, kHost: aA, kHTTP2Session: IA, kHTTP2SessionState: cA, kHTTP2BuildRequest: hA, kHTTP2CopyHeaders: lA, kHTTP1BuildRequest: uA } = require("./module-58832.js");
let dA;
try {
    dA = require(85675);
} catch  {
    dA = {
        constants: {}
    };
}
const { constants: { HTTP2_HEADER_AUTHORITY: fA, HTTP2_HEADER_METHOD: yA, HTTP2_HEADER_PATH: DA, HTTP2_HEADER_SCHEME: RA, HTTP2_HEADER_CONTENT_LENGTH: wA, HTTP2_HEADER_EXPECT: pA, HTTP2_HEADER_STATUS: kA } } = dA;
let FA = !1;
const NA = Buffer[Symbol.species], bA = Symbol("kClosedResolve"), SA = {};
try {
    const A = require(31637);
    SA.sendHeaders = A.channel("undici:client:sendHeaders"), SA.beforeConnect = A.channel("undici:client:beforeConnect"), SA.connectError = A.channel("undici:client:connectError"), SA.connected = A.channel("undici:client:connected");
} catch  {
    SA.sendHeaders = {
        hasSubscribers: !1
    }, SA.beforeConnect = {
        hasSubscribers: !1
    }, SA.connectError = {
        hasSubscribers: !1
    }, SA.connected = {
        hasSubscribers: !1
    };
}
function mA(A) {
    r("ERR_TLS_CERT_ALTNAME_INVALID" !== A.code), this[Z][P] = A, KA(this[F], A);
}
function UA(A, e, t) {
    const r = new u(`HTTP/2: "frameError" received - type ${A}, code ${e}`);
    0 === t && (this[Z][P] = r, KA(this[F], r));
}
function LA() {
    i.destroy(this, new l("other side closed")), i.destroy(this[Z], new l("other side closed"));
}
function MA(A) {
    const e = this[F], t = new u(`HTTP/2: "GOAWAY" frame received with code ${A}`);
    if (e[Z] = null, e[IA] = null, e.destroyed) {
        r(0 === this[M]);
        const A = e[J].splice(e[q]);
        for(let e = 0; e < A.length; e++){
            Ee(this, A[e], t);
        }
    } else if (e[L] > 0) {
        const A = e[J][e[q]];
        e[J][e[q]++] = null, Ee(e, A, t);
    }
    e[W] = e[q], r(0 === e[L]), e.emit("disconnect", e[w], [
        e
    ], t), ee(e);
}
const YA = require("./module-66747.js"), TA = require("./module-80858.js"), JA = Buffer.alloc(0);
let GA = null, HA = async function() {
    const A = process.env.JEST_WORKER_ID ? require("./module-32789.js") : void 0;
    let e;
    try {
        e = await WebAssembly.compile(Buffer.from(require("./module-80871.js"), "base64"));
    } catch (r) {
        e = await WebAssembly.compile(Buffer.from(A || require("./module-32789.js"), "base64"));
    }
    return await WebAssembly.instantiate(e, {
        env: {
            wasm_on_url: (A, e, t)=>0,
            wasm_on_status: (A, e, t)=>{
                r.strictEqual(vA.ptr, A);
                const s = e - OA + VA.byteOffset;
                return vA.onStatus(new NA(VA.buffer, s, t)) || 0;
            },
            wasm_on_message_begin: (A)=>(r.strictEqual(vA.ptr, A), vA.onMessageBegin() || 0),
            wasm_on_header_field: (A, e, t)=>{
                r.strictEqual(vA.ptr, A);
                const s = e - OA + VA.byteOffset;
                return vA.onHeaderField(new NA(VA.buffer, s, t)) || 0;
            },
            wasm_on_header_value: (A, e, t)=>{
                r.strictEqual(vA.ptr, A);
                const s = e - OA + VA.byteOffset;
                return vA.onHeaderValue(new NA(VA.buffer, s, t)) || 0;
            },
            wasm_on_headers_complete: (A, e, t, s)=>(r.strictEqual(vA.ptr, A), vA.onHeadersComplete(e, Boolean(t), Boolean(s)) || 0),
            wasm_on_body: (A, e, t)=>{
                r.strictEqual(vA.ptr, A);
                const s = e - OA + VA.byteOffset;
                return vA.onBody(new NA(VA.buffer, s, t)) || 0;
            },
            wasm_on_message_complete: (A)=>(r.strictEqual(vA.ptr, A), vA.onMessageComplete() || 0)
        }
    });
}();
HA.catch();
let vA = null, VA = null, xA = 0, OA = null;
const WA = 1, qA = 3;
class PA {
    constructor(A, e, { exports: t }){
        r(Number.isFinite(A[K]) && A[K] > 0), this.llhttp = t, this.ptr = this.llhttp.llhttp_alloc(YA.TYPE.RESPONSE), this.client = A, this.socket = e, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = A[K], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = A[CA];
    }
    setTimeout(A, e) {
        this.timeoutType = e, A !== this.timeoutValue ? (E.clearTimeout(this.timeout), A ? (this.timeout = E.setTimeout(_A, A, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = A) : this.timeout && this.timeout.refresh && this.timeout.refresh();
    }
    resume() {
        !this.socket.destroyed && this.paused && (r(null != this.ptr), r(null == vA), this.llhttp.llhttp_resume(this.ptr), r(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || JA), this.readMore());
    }
    readMore() {
        for(; !this.paused && this.ptr;){
            const A = this.socket.read();
            if (null === A) break;
            this.execute(A);
        }
    }
    execute(A) {
        r(null != this.ptr), r(null == vA), r(!this.paused);
        const { socket: e, llhttp: t } = this;
        A.length > xA && (OA && t.free(OA), xA = 4096 * Math.ceil(A.length / 4096), OA = t.malloc(xA)), new Uint8Array(t.memory.buffer, OA, xA).set(A);
        try {
            let r;
            try {
                VA = A, vA = this, r = t.llhttp_execute(this.ptr, OA, A.length);
            } catch (A) {
                throw A;
            } finally{
                vA = null, VA = null;
            }
            const s = t.llhttp_get_error_pos(this.ptr) - OA;
            if (r === YA.ERROR.PAUSED_UPGRADE) this.onUpgrade(A.slice(s));
            else if (r === YA.ERROR.PAUSED) this.paused = !0, e.unshift(A.slice(s));
            else if (r !== YA.ERROR.OK) {
                const e = t.llhttp_get_error_reason(this.ptr);
                let o = "";
                if (e) {
                    const A = new Uint8Array(t.memory.buffer, e).indexOf(0);
                    o = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(t.memory.buffer, e, A).toString() + ")";
                }
                throw new f(o, YA.ERROR[r], A.slice(s));
            }
        } catch (A) {
            i.destroy(e, A);
        }
    }
    destroy() {
        r(null != this.ptr), r(null == vA), this.llhttp.llhttp_free(this.ptr), this.ptr = null, E.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
    }
    onStatus(A) {
        this.statusText = A.toString();
    }
    onMessageBegin() {
        const { socket: A, client: e } = this;
        if (A.destroyed) return -1;
        return e[J][e[q]] ? void 0 : -1;
    }
    onHeaderField(A) {
        const e = this.headers.length;
        1 & e ? this.headers[e - 1] = Buffer.concat([
            this.headers[e - 1],
            A
        ]) : this.headers.push(A), this.trackHeader(A.length);
    }
    onHeaderValue(A) {
        let e = this.headers.length;
        1 & ~e ? this.headers[e - 1] = Buffer.concat([
            this.headers[e - 1],
            A
        ]) : (this.headers.push(A), e += 1);
        const t = this.headers[e - 2];
        10 === t.length && "keep-alive" === t.toString().toLowerCase() ? this.keepAlive += A.toString() : 10 === t.length && "connection" === t.toString().toLowerCase() ? this.connection += A.toString() : 14 === t.length && "content-length" === t.toString().toLowerCase() && (this.contentLength += A.toString()), this.trackHeader(A.length);
    }
    trackHeader(A) {
        this.headersSize += A, this.headersSize >= this.headersMaxSize && i.destroy(this.socket, new h);
    }
    onUpgrade(A) {
        const { upgrade: e, client: t, socket: s, headers: o, statusCode: n } = this;
        r(e);
        const E = t[J][t[q]];
        r(E), r(!s.destroyed), r(s === t[Z]), r(!this.paused), r(E.upgrade || "CONNECT" === E.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, r(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, s.unshift(A), s[b].destroy(), s[b] = null, s[F] = null, s[P] = null, s.removeListener("error", XA).removeListener("readable", ZA).removeListener("end", jA).removeListener("close", zA), t[Z] = null, t[J][t[q]++] = null, t.emit("disconnect", t[w], [
            t
        ], new u("upgrade"));
        try {
            E.onUpgrade(n, o, s);
        } catch (A) {
            i.destroy(s, A);
        }
        ee(t);
    }
    onHeadersComplete(A, e, t) {
        const { client: s, socket: o, headers: n, statusText: E } = this;
        if (o.destroyed) return -1;
        const Q = s[J][s[q]];
        if (!Q) return -1;
        if (r(!this.upgrade), r(this.statusCode < 200), 100 === A) return i.destroy(o, new l("bad response", i.getSocketInfo(o))), -1;
        if (e && !Q.upgrade) return i.destroy(o, new l("bad upgrade", i.getSocketInfo(o))), -1;
        if (r.strictEqual(this.timeoutType, WA), this.statusCode = A, this.shouldKeepAlive = t || "HEAD" === Q.method && !o[p] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
            const A = null != Q.bodyTimeout ? Q.bodyTimeout : s[AA];
            this.setTimeout(A, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === Q.method) return r(1 === s[L]), this.upgrade = !0, 2;
        if (e) return r(1 === s[L]), this.upgrade = !0, 2;
        if (r(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s[_]) {
            const A = this.keepAlive ? i.parseKeepAliveTimeout(this.keepAlive) : null;
            if (null != A) {
                const e = Math.min(A - s[z], s[j]);
                e <= 0 ? o[p] = !0 : s[X] = e;
            } else s[X] = s[x];
        } else o[p] = !0;
        const g = !1 === Q.onHeaders(A, n, this.resume, E);
        return Q.aborted ? -1 : "HEAD" === Q.method || A < 200 ? 1 : (o[m] && (o[m] = !1, ee(s)), g ? YA.ERROR.PAUSED : 0);
    }
    onBody(A) {
        const { client: e, socket: t, statusCode: s, maxResponseSize: o } = this;
        if (t.destroyed) return -1;
        const n = e[J][e[q]];
        return r(n), r.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), r(s >= 200), o > -1 && this.bytesRead + A.length > o ? (i.destroy(t, new y), -1) : (this.bytesRead += A.length, !1 === n.onData(A) ? YA.ERROR.PAUSED : void 0);
    }
    onMessageComplete() {
        const { client: A, socket: e, statusCode: t, upgrade: s, headers: o, contentLength: n, bytesRead: E, shouldKeepAlive: Q } = this;
        if (e.destroyed && (!t || Q)) return -1;
        if (s) return;
        const g = A[J][A[q]];
        return r(g), r(t >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", r(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, t < 200 ? void 0 : "HEAD" !== g.method && n && E !== parseInt(n, 10) ? (i.destroy(e, new B), -1) : (g.onComplete(o), A[J][A[q]++] = null, e[T] ? (r.strictEqual(A[L], 0), i.destroy(e, new u("reset")), YA.ERROR.PAUSED) : Q ? e[p] && 0 === A[L] ? (i.destroy(e, new u("reset")), YA.ERROR.PAUSED) : void (1 === A[_] ? setImmediate(ee, A) : ee(A)) : (i.destroy(e, new u("reset")), YA.ERROR.PAUSED));
    }
}
function _A(A) {
    const { socket: e, timeoutType: t, client: s } = A;
    t === WA ? (!e[T] || e.writableNeedDrain || s[L] > 1) && (r(!A.paused, "cannot be paused while waiting for headers"), i.destroy(e, new c)) : 2 === t ? A.paused || i.destroy(e, new d) : t === qA && (r(0 === s[L] && s[X]), i.destroy(e, new u("socket idle timeout")));
}
function ZA() {
    const { [b]: A } = this;
    A && A.readMore();
}
function XA(A) {
    const { [F]: e, [b]: t } = this;
    r("ERR_TLS_CERT_ALTNAME_INVALID" !== A.code), "h2" === e[BA] || "ECONNRESET" !== A.code || !t.statusCode || t.shouldKeepAlive ? (this[P] = A, KA(this[F], A)) : t.onMessageComplete();
}
function KA(A, e) {
    if (0 === A[L] && "UND_ERR_INFO" !== e.code && "UND_ERR_SOCKET" !== e.code) {
        r(A[W] === A[q]);
        const t = A[J].splice(A[q]);
        for(let r = 0; r < t.length; r++){
            Ee(A, t[r], e);
        }
        r(0 === A[Y]);
    }
}
function jA() {
    const { [b]: A, [F]: e } = this;
    "h2" === e[BA] || !A.statusCode || A.shouldKeepAlive ? i.destroy(this, new l("other side closed", i.getSocketInfo(this))) : A.onMessageComplete();
}
function zA() {
    const { [F]: A, [b]: e } = this;
    "h1" === A[BA] && e && (this[P] || !e.statusCode || e.shouldKeepAlive || e.onMessageComplete(), this[b].destroy(), this[b] = null);
    const t = this[P] || new l("closed", i.getSocketInfo(this));
    if (A[Z] = null, A.destroyed) {
        r(0 === A[M]);
        const e = A[J].splice(A[q]);
        for(let r = 0; r < e.length; r++){
            Ee(A, e[r], t);
        }
    } else if (A[L] > 0 && "UND_ERR_INFO" !== t.code) {
        const e = A[J][A[q]];
        A[J][A[q]++] = null, Ee(A, e, t);
    }
    A[W] = A[q], r(0 === A[L]), A.emit("disconnect", A[w], [
        A
    ], t), ee(A);
}
async function $A(A) {
    r(!A[H]), r(!A[Z]);
    let { host: e, hostname: t, protocol: o, port: n } = A[w];
    if ("[" === t[0]) {
        const A = t.indexOf("]");
        r(-1 !== A);
        const e = t.substring(1, A);
        r(s.isIP(e)), t = e;
    }
    A[H] = !0, SA.beforeConnect.hasSubscribers && SA.beforeConnect.publish({
        connectParams: {
            host: e,
            hostname: t,
            protocol: o,
            port: n,
            servername: A[k],
            localAddress: A[gA]
        },
        connector: A[tA]
    });
    try {
        const s = await new Promise((r, s)=>{
            A[tA]({
                host: e,
                hostname: t,
                protocol: o,
                port: n,
                servername: A[k],
                localAddress: A[gA]
            }, (A, e)=>{
                A ? s(A) : r(e);
            });
        });
        if (A.destroyed) return void i.destroy(s.on("error", ()=>{}), new D);
        A[H] = !1, r(s);
        if ("h2" === s.alpnProtocol) {
            FA || (FA = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
                code: "UNDICI-H2"
            }));
            const e = dA.connect(A[w], {
                createConnection: ()=>s,
                peerMaxConcurrentStreams: A[cA].maxConcurrentStreams
            });
            A[BA] = "h2", e[F] = A, e[Z] = s, e.on("error", mA), e.on("frameError", UA), e.on("end", LA), e.on("goaway", MA), e.on("close", zA), e.unref(), A[IA] = e, s[IA] = e;
        } else GA || (GA = await HA, HA = null), s[V] = !1, s[T] = !1, s[p] = !1, s[m] = !1, s[b] = new PA(A, s, GA);
        s[oA] = 0, s[sA] = A[sA], s[F] = A, s[P] = null, s.on("error", XA).on("readable", ZA).on("end", jA).on("close", zA), A[Z] = s, SA.connected.hasSubscribers && SA.connected.publish({
            connectParams: {
                host: e,
                hostname: t,
                protocol: o,
                port: n,
                servername: A[k],
                localAddress: A[gA]
            },
            connector: A[tA],
            socket: s
        }), A.emit("connect", A[w], [
            A
        ]);
    } catch (s) {
        if (A.destroyed) return;
        if (A[H] = !1, SA.connectError.hasSubscribers && SA.connectError.publish({
            connectParams: {
                host: e,
                hostname: t,
                protocol: o,
                port: n,
                servername: A[k],
                localAddress: A[gA]
            },
            connector: A[tA],
            error: s
        }), "ERR_TLS_CERT_ALTNAME_INVALID" === s.code) for(r(0 === A[L]); A[M] > 0 && A[J][A[W]].servername === A[k];){
            const e = A[J][A[W]++];
            Ee(A, e, s);
        }
        else KA(A, s);
        A.emit("connectionError", A[w], [
            A
        ], s);
    }
    ee(A);
}
function Ae(A) {
    A[v] = 0, A.emit("drain", A[w], [
        A
    ]);
}
function ee(A, e) {
    2 !== A[U] && (A[U] = 2, function(A, e) {
        for(;;){
            if (A.destroyed) return void r(0 === A[M]);
            if (A[bA] && !A[Y]) return A[bA](), void (A[bA] = null);
            const t = A[Z];
            if (t && !t.destroyed && "h2" !== t.alpnProtocol) {
                if (0 === A[Y] ? !t[V] && t.unref && (t.unref(), t[V] = !0) : t[V] && t.ref && (t.ref(), t[V] = !1), 0 === A[Y]) t[b].timeoutType !== qA && t[b].setTimeout(A[X], qA);
                else if (A[L] > 0 && t[b].statusCode < 200 && t[b].timeoutType !== WA) {
                    const e = A[J][A[q]], r = null != e.headersTimeout ? e.headersTimeout : A[$];
                    t[b].setTimeout(r, WA);
                }
            }
            if (A[N]) A[v] = 2;
            else if (2 === A[v]) {
                e ? (A[v] = 1, process.nextTick(Ae, A)) : Ae(A);
                continue;
            }
            if (0 === A[M]) return;
            if (A[L] >= (A[_] || 1)) return;
            const s = A[J][A[W]];
            if ("https:" === A[w].protocol && A[k] !== s.servername) {
                if (A[L] > 0) return;
                if (A[k] = s.servername, t && t.servername !== s.servername) return void i.destroy(t, new u("servername changed"));
            }
            if (A[H]) return;
            if (!t && !A[IA]) return void $A(A);
            if (t.destroyed || t[T] || t[p] || t[m]) return;
            if (A[L] > 0 && !s.idempotent) return;
            if (A[L] > 0 && (s.upgrade || "CONNECT" === s.method)) return;
            if (A[L] > 0 && 0 !== i.bodyLength(s.body) && (i.isStream(s.body) || i.isAsyncIterable(s.body))) return;
            !s.aborted && re(A, s) ? A[W]++ : A[J].splice(A[W], 1);
        }
    }(A, e), A[U] = 0, A[q] > 256 && (A[J].splice(0, A[q]), A[W] -= A[q], A[q] = 0));
}
function te(A) {
    return "GET" !== A && "HEAD" !== A && "OPTIONS" !== A && "TRACE" !== A && "CONNECT" !== A;
}
function re(A, e) {
    if ("h2" === A[BA]) return void function(A, e, t) {
        const { body: s, method: o, path: n, host: E, upgrade: g, expectContinue: B, signal: a, headers: c } = t;
        let h, l;
        h = "string" == typeof c ? Q[lA](c.trim()) : c;
        if (g) return Ee(A, t, new Error("Upgrade not supported for H2")), !1;
        try {
            t.onConnect((e)=>{
                t.aborted || t.completed || Ee(A, t, e || new I);
            });
        } catch (e) {
            Ee(A, t, e);
        }
        if (t.aborted) return !1;
        const d = A[cA];
        if (h[fA] = E || A[aA], h[yA] = o, "CONNECT" === o) return e.ref(), l = e.request(h, {
            endStream: !1,
            signal: a
        }), l.id && !l.pending ? (t.onUpgrade(null, null, l), ++d.openStreams) : l.once("ready", ()=>{
            t.onUpgrade(null, null, l), ++d.openStreams;
        }), l.once("close", ()=>{
            d.openStreams -= 1, 0 === d.openStreams && e.unref();
        }), !0;
        h[DA] = n, h[RA] = "https";
        const f = "PUT" === o || "POST" === o || "PATCH" === o;
        s && "function" == typeof s.read && s.read(0);
        let y = i.bodyLength(s);
        null == y && (y = t.contentLength);
        0 !== y && f || (y = null);
        if (te(o) && y > 0 && null != t.contentLength && t.contentLength !== y) {
            if (A[eA]) return Ee(A, t, new C), !1;
            process.emitWarning(new C);
        }
        null != y && (r(s, "no body must not have content length"), h[wA] = `${y}`);
        e.ref();
        const D = "GET" === o || "HEAD" === o;
        B ? (h[pA] = "100-continue", l = e.request(h, {
            endStream: D,
            signal: a
        }), l.once("continue", R)) : (l = e.request(h, {
            endStream: D,
            signal: a
        }), R());
        return ++d.openStreams, l.once("response", (A)=>{
            const { [kA]: e, ...r } = A;
            !1 === t.onHeaders(Number(e), r, l.resume.bind(l), "") && l.pause();
        }), l.once("end", ()=>{
            t.onComplete([]);
        }), l.on("data", (A)=>{
            !1 === t.onData(A) && l.pause();
        }), l.once("close", ()=>{
            d.openStreams -= 1, 0 === d.openStreams && e.unref();
        }), l.once("error", function(e) {
            !A[IA] || A[IA].destroyed || this.closed || this.destroyed || (d.streams -= 1, i.destroy(l, e));
        }), l.once("frameError", (e, r)=>{
            const s = new u(`HTTP/2: "frameError" received - type ${e}, code ${r}`);
            Ee(A, t, s), !A[IA] || A[IA].destroyed || this.closed || this.destroyed || (d.streams -= 1, i.destroy(l, s));
        }), !0;
        function R() {
            s ? i.isBuffer(s) ? (r(y === s.byteLength, "buffer body must have content length"), l.cork(), l.write(s), l.uncork(), l.end(), t.onBodySent(s), t.onRequestSent()) : i.isBlobLike(s) ? "function" == typeof s.stream ? ne({
                client: A,
                request: t,
                contentLength: y,
                h2stream: l,
                expectsPayload: f,
                body: s.stream(),
                socket: A[Z],
                header: ""
            }) : oe({
                body: s,
                client: A,
                request: t,
                contentLength: y,
                expectsPayload: f,
                h2stream: l,
                header: "",
                socket: A[Z]
            }) : i.isStream(s) ? se({
                body: s,
                client: A,
                request: t,
                contentLength: y,
                expectsPayload: f,
                socket: A[Z],
                h2stream: l,
                header: ""
            }) : i.isIterable(s) ? ne({
                body: s,
                client: A,
                request: t,
                contentLength: y,
                expectsPayload: f,
                header: "",
                h2stream: l,
                socket: A[Z]
            }) : r(!1) : t.onRequestSent();
        }
    }(A, A[IA], e);
    const { body: t, method: s, path: o, host: n, upgrade: E, headers: g, blocking: B, reset: a } = e, c = "PUT" === s || "POST" === s || "PATCH" === s;
    t && "function" == typeof t.read && t.read(0);
    const h = i.bodyLength(t);
    let l = h;
    if (null === l && (l = e.contentLength), 0 !== l || c || (l = null), te(s) && l > 0 && null !== e.contentLength && e.contentLength !== l) {
        if (A[eA]) return Ee(A, e, new C), !1;
        process.emitWarning(new C);
    }
    const d = A[Z];
    try {
        e.onConnect((t)=>{
            e.aborted || e.completed || (Ee(A, e, t || new I), i.destroy(d, new u("aborted")));
        });
    } catch (t) {
        Ee(A, e, t);
    }
    if (e.aborted) return !1;
    "HEAD" === s && (d[p] = !0), (E || "CONNECT" === s) && (d[p] = !0), null != a && (d[p] = a), A[sA] && d[oA]++ >= A[sA] && (d[p] = !0), B && (d[m] = !0);
    let f = `${s} ${o} HTTP/1.1\r\n`;
    return f += "string" == typeof n ? `host: ${n}\r\n` : A[O], E ? f += `connection: upgrade\r\nupgrade: ${E}\r\n` : A[_] && !d[p] ? f += "connection: keep-alive\r\n" : f += "connection: close\r\n", g && (f += g), SA.sendHeaders.hasSubscribers && SA.sendHeaders.publish({
        request: e,
        headers: f,
        socket: d
    }), t && 0 !== h ? i.isBuffer(t) ? (r(l === t.byteLength, "buffer body must have content length"), d.cork(), d.write(`${f}content-length: ${l}\r\n\r\n`, "latin1"), d.write(t), d.uncork(), e.onBodySent(t), e.onRequestSent(), c || (d[p] = !0)) : i.isBlobLike(t) ? "function" == typeof t.stream ? ne({
        body: t.stream(),
        client: A,
        request: e,
        socket: d,
        contentLength: l,
        header: f,
        expectsPayload: c
    }) : oe({
        body: t,
        client: A,
        request: e,
        socket: d,
        contentLength: l,
        header: f,
        expectsPayload: c
    }) : i.isStream(t) ? se({
        body: t,
        client: A,
        request: e,
        socket: d,
        contentLength: l,
        header: f,
        expectsPayload: c
    }) : i.isIterable(t) ? ne({
        body: t,
        client: A,
        request: e,
        socket: d,
        contentLength: l,
        header: f,
        expectsPayload: c
    }) : r(!1) : (0 === l ? d.write(`${f}content-length: 0\r\n\r\n`, "latin1") : (r(null === l, "no body must not have content length"), d.write(`${f}\r\n`, "latin1")), e.onRequestSent()), !0;
}
function se({ h2stream: A, body: e, client: t, request: s, socket: o, contentLength: E, header: Q, expectsPayload: g }) {
    if (r(0 !== E || 0 === t[L], "stream body cannot be pipelined"), "h2" === t[BA]) {
        const u = n(e, A, (t)=>{
            t ? (i.destroy(e, t), i.destroy(A, t)) : s.onRequestSent();
        });
        function d(A) {
            s.onBodySent(A);
        }
        return u.on("data", d), void u.once("end", ()=>{
            u.removeListener("data", d), i.destroy(u);
        });
    }
    let C = !1;
    const B = new ie({
        socket: o,
        request: s,
        contentLength: E,
        client: t,
        expectsPayload: g,
        header: Q
    }), a = function(A) {
        if (!C) try {
            !B.write(A) && this.pause && this.pause();
        } catch (A) {
            i.destroy(this, A);
        }
    }, c = function() {
        C || e.resume && e.resume();
    }, h = function() {
        if (C) return;
        const A = new I;
        queueMicrotask(()=>l(A));
    }, l = function(A) {
        if (!C) {
            if (C = !0, r(o.destroyed || o[T] && t[L] <= 1), o.off("drain", c).off("error", l), e.removeListener("data", a).removeListener("end", l).removeListener("error", l).removeListener("close", h), !A) try {
                B.end();
            } catch (e) {
                A = e;
            }
            B.destroy(A), !A || "UND_ERR_INFO" === A.code && "reset" === A.message ? i.destroy(e) : i.destroy(e, A);
        }
    };
    e.on("data", a).on("end", l).on("error", l).on("close", h), e.resume && e.resume(), o.on("drain", c).on("error", l);
}
async function oe({ h2stream: A, body: e, client: t, request: s, socket: o, contentLength: n, header: E, expectsPayload: Q }) {
    r(n === e.size, "blob body must have content length");
    const g = "h2" === t[BA];
    try {
        if (null != n && n !== e.size) throw new C;
        const r = Buffer.from(await e.arrayBuffer());
        g ? (A.cork(), A.write(r), A.uncork()) : (o.cork(), o.write(`${E}content-length: ${n}\r\n\r\n`, "latin1"), o.write(r), o.uncork()), s.onBodySent(r), s.onRequestSent(), Q || (o[p] = !0), ee(t);
    } catch (e) {
        i.destroy(g ? A : o, e);
    }
}
async function ne({ h2stream: A, body: e, client: t, request: s, socket: o, contentLength: n, header: i, expectsPayload: E }) {
    r(0 !== n || 0 === t[L], "iterator body cannot be pipelined");
    let Q = null;
    function g() {
        if (Q) {
            const A = Q;
            Q = null, A();
        }
    }
    const C = ()=>new Promise((A, e)=>{
            r(null === Q), o[P] ? e(o[P]) : Q = A;
        });
    if ("h2" === t[BA]) {
        A.on("close", g).on("drain", g);
        try {
            for await (const t of e){
                if (o[P]) throw o[P];
                const e = A.write(t);
                s.onBodySent(t), e || await C();
            }
        } catch (e) {
            A.destroy(e);
        } finally{
            s.onRequestSent(), A.end(), A.off("close", g).off("drain", g);
        }
        return;
    }
    o.on("close", g).on("drain", g);
    const B = new ie({
        socket: o,
        request: s,
        contentLength: n,
        client: t,
        expectsPayload: E,
        header: i
    });
    try {
        for await (const A of e){
            if (o[P]) throw o[P];
            B.write(A) || await C();
        }
        B.end();
    } catch (A) {
        B.destroy(A);
    } finally{
        o.off("close", g).off("drain", g);
    }
}
class ie {
    constructor({ socket: A, request: e, contentLength: t, client: r, expectsPayload: s, header: o }){
        this.socket = A, this.request = e, this.contentLength = t, this.client = r, this.bytesWritten = 0, this.expectsPayload = s, this.header = o, A[T] = !0;
    }
    write(A) {
        const { socket: e, request: t, contentLength: r, client: s, bytesWritten: o, expectsPayload: n, header: i } = this;
        if (e[P]) throw e[P];
        if (e.destroyed) return !1;
        const E = Buffer.byteLength(A);
        if (!E) return !0;
        if (null !== r && o + E > r) {
            if (s[eA]) throw new C;
            process.emitWarning(new C);
        }
        e.cork(), 0 === o && (n || (e[p] = !0), null === r ? e.write(`${i}transfer-encoding: chunked\r\n`, "latin1") : e.write(`${i}content-length: ${r}\r\n\r\n`, "latin1")), null === r && e.write(`\r\n${E.toString(16)}\r\n`, "latin1"), this.bytesWritten += E;
        const Q = e.write(A);
        return e.uncork(), t.onBodySent(A), Q || e[b].timeout && e[b].timeoutType === WA && e[b].timeout.refresh && e[b].timeout.refresh(), Q;
    }
    end() {
        const { socket: A, contentLength: e, client: t, bytesWritten: r, expectsPayload: s, header: o, request: n } = this;
        if (n.onRequestSent(), A[T] = !1, A[P]) throw A[P];
        if (!A.destroyed) {
            if (0 === r ? s ? A.write(`${o}content-length: 0\r\n\r\n`, "latin1") : A.write(`${o}\r\n`, "latin1") : null === e && A.write("\r\n0\r\n\r\n", "latin1"), null !== e && r !== e) {
                if (t[eA]) throw new C;
                process.emitWarning(new C);
            }
            A[b].timeout && A[b].timeoutType === WA && A[b].timeout.refresh && A[b].timeout.refresh(), ee(t);
        }
    }
    destroy(A) {
        const { socket: e, client: t } = this;
        e[T] = !1, A && (r(t[L] <= 1, "pipeline should only contain this request"), i.destroy(e, A));
    }
}
function Ee(A, e, t) {
    try {
        e.onError(t), r(e.aborted);
    } catch (t) {
        A.emit("error", t);
    }
}
module.exports = class extends g {
    constructor(A, { interceptors: e, maxHeaderSize: t, headersTimeout: r, socketTimeout: n, requestTimeout: E, connectTimeout: Q, bodyTimeout: g, idleTimeout: C, keepAlive: B, keepAliveTimeout: I, maxKeepAliveTimeout: c, keepAliveMaxTimeout: h, keepAliveTimeoutThreshold: l, socketPath: u, pipelining: d, tls: f, strictContentLength: y, maxCachedSessions: D, maxRedirections: p, connect: F, maxRequestsPerClient: N, localAddress: b, maxResponseSize: S, autoSelectFamily: m, autoSelectFamilyAttemptTimeout: L, allowH2: M, maxConcurrentStreams: Y } = {}){
        if (super(), void 0 !== B) throw new a("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== n) throw new a("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== E) throw new a("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== C) throw new a("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== c) throw new a("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != t && !Number.isFinite(t)) throw new a("invalid maxHeaderSize");
        if (null != u && "string" != typeof u) throw new a("invalid socketPath");
        if (null != Q && (!Number.isFinite(Q) || Q < 0)) throw new a("invalid connectTimeout");
        if (null != I && (!Number.isFinite(I) || I <= 0)) throw new a("invalid keepAliveTimeout");
        if (null != h && (!Number.isFinite(h) || h <= 0)) throw new a("invalid keepAliveMaxTimeout");
        if (null != l && !Number.isFinite(l)) throw new a("invalid keepAliveTimeoutThreshold");
        if (null != r && (!Number.isInteger(r) || r < 0)) throw new a("headersTimeout must be a positive integer or zero");
        if (null != g && (!Number.isInteger(g) || g < 0)) throw new a("bodyTimeout must be a positive integer or zero");
        if (null != F && "function" != typeof F && "object" != typeof F) throw new a("connect must be a function or an object");
        if (null != p && (!Number.isInteger(p) || p < 0)) throw new a("maxRedirections must be a positive number");
        if (null != N && (!Number.isInteger(N) || N < 0)) throw new a("maxRequestsPerClient must be a positive number");
        if (null != b && ("string" != typeof b || 0 === s.isIP(b))) throw new a("localAddress must be valid string IP address");
        if (null != S && (!Number.isInteger(S) || S < -1)) throw new a("maxResponseSize must be a positive number");
        if (null != L && (!Number.isInteger(L) || L < -1)) throw new a("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != M && "boolean" != typeof M) throw new a("allowH2 must be a valid boolean value");
        if (null != Y && ("number" != typeof Y || Y < 1)) throw new a("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof F && (F = R({
            ...f,
            maxCachedSessions: D,
            allowH2: M,
            socketPath: u,
            timeout: Q,
            ...i.nodeHasAutoSelectFamily && m ? {
                autoSelectFamily: m,
                autoSelectFamilyAttemptTimeout: L
            } : void 0,
            ...F
        })), this[QA] = e && e.Client && Array.isArray(e.Client) ? e.Client : [
            TA({
                maxRedirections: p
            })
        ], this[w] = i.parseOrigin(A), this[tA] = F, this[Z] = null, this[_] = null != d ? d : 1, this[K] = t || o.maxHeaderSize, this[x] = I ?? 4e3, this[j] = h ?? 6e5, this[z] = l ?? 1e3, this[X] = this[x], this[k] = null, this[gA] = null != b ? b : null, this[U] = 0, this[v] = 0, this[O] = `host: ${this[w].hostname}${this[w].port ? `:${this[w].port}` : ""}\r\n`, this[AA] = null != g ? g : 3e5, this[$] = null != r ? r : 3e5, this[eA] = y ?? !0, this[rA] = p, this[sA] = N, this[bA] = null, this[CA] = S > -1 ? S : -1, this[BA] = "h1", this[IA] = null, this[cA] = M ? {
            openStreams: 0,
            maxConcurrentStreams: null != Y ? Y : 100
        } : null, this[aA] = `${this[w].hostname}${this[w].port ? `:${this[w].port}` : ""}`, this[J] = [], this[q] = 0, this[W] = 0;
    }
    get pipelining() {
        return this[_];
    }
    set pipelining(A) {
        this[_] = A, ee(this, !0);
    }
    get [M]() {
        return this[J].length - this[W];
    }
    get [L]() {
        return this[W] - this[q];
    }
    get [Y]() {
        return this[J].length - this[q];
    }
    get [G]() {
        return !!this[Z] && !this[H] && !this[Z].destroyed;
    }
    get [N]() {
        const A = this[Z];
        return A && (A[p] || A[T] || A[m]) || this[Y] >= (this[_] || 1) || this[M] > 0;
    }
    [S](A) {
        $A(this), this.once("connect", A);
    }
    [EA](A, e) {
        const t = A.origin || this[w].origin, r = "h2" === this[BA] ? Q[hA](t, A, e) : Q[uA](t, A, e);
        return this[J].push(r), this[U] || (null == i.bodyLength(r.body) && i.isIterable(r.body) ? (this[U] = 1, process.nextTick(ee, this)) : ee(this, !0)), this[U] && 2 !== this[v] && this[N] && (this[v] = 2), this[v] < 2;
    }
    async [nA]() {
        return new Promise((A)=>{
            this[Y] ? this[bA] = A : A(null);
        });
    }
    async [iA](A) {
        return new Promise((e)=>{
            const t = this[J].splice(this[W]);
            for(let e = 0; e < t.length; e++){
                Ee(this, t[e], A);
            }
            const r = ()=>{
                this[bA] && (this[bA](), this[bA] = null), e();
            };
            null != this[IA] && (i.destroy(this[IA], A), this[IA] = null, this[cA] = null), this[Z] ? i.destroy(this[Z].on("close", r), A) : queueMicrotask(r), ee(this);
        });
    }
};
