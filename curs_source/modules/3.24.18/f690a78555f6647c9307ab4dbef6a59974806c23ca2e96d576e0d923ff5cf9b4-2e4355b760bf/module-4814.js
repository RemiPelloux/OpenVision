"use strict";
const n = require("./module-2613.js"), r = require("./module-9278.js"), o = require("./module-8611.js"), { pipeline: s } = require("./module-2203.js"), a = require("./module-9361.js"), i = require("./module-3891.js"), c = require("./module-3308.js"), l = require("./module-9792.js"), { RequestContentLengthMismatchError: g, ResponseContentLengthMismatchError: E, InvalidArgumentError: u, RequestAbortedError: d, HeadersTimeoutError: I, HeadersOverflowError: h, SocketError: Q, InformationalError: m, BodyTimeoutError: C, HTTPParserError: B, ResponseExceededMaxSizeError: p, ClientDestroyedError: f } = require("./module-7902.js"), y = require("./module-3991.js"), { kUrl: T, kReset: k, kServerName: w, kClient: N, kBusy: D, kParser: R, kConnect: S, kBlocking: b, kResuming: F, kRunning: _, kPending: v, kSize: L, kWriting: U, kQueue: M, kConnected: O, kConnecting: J, kNeedDrain: Y, kNoRef: P, kKeepAliveDefaultTimeout: G, kHostHeader: V, kPendingIdx: x, kRunningIdx: H, kError: q, kPipelining: W, kSocket: j, kKeepAliveTimeoutValue: X, kMaxHeadersSize: K, kKeepAliveMaxTimeout: Z, kKeepAliveTimeoutThreshold: z, kHeadersTimeout: $, kBodyTimeout: ee, kStrictContentLength: Ae, kConnector: te, kMaxRedirections: ne, kMaxRequests: re, kCounter: oe, kClose: se, kDestroy: ae, kDispatch: ie, kInterceptors: ce, kLocalAddress: le, kMaxResponseSize: ge, kHTTPConnVersion: Ee, kHost: ue, kHTTP2Session: de, kHTTP2SessionState: Ie, kHTTP2BuildRequest: he, kHTTP2CopyHeaders: Qe, kHTTP1BuildRequest: me } = require("./module-8832.js");
let Ce;
try {
    Ce = require("./module-5675.js");
} catch  {
    Ce = {
        constants: {}
    };
}
const { constants: { HTTP2_HEADER_AUTHORITY: Be, HTTP2_HEADER_METHOD: pe, HTTP2_HEADER_PATH: fe, HTTP2_HEADER_SCHEME: ye, HTTP2_HEADER_CONTENT_LENGTH: Te, HTTP2_HEADER_EXPECT: ke, HTTP2_HEADER_STATUS: we } } = Ce;
let Ne = !1;
const De = Buffer[Symbol.species], Re = Symbol("kClosedResolve"), Se = {};
try {
    const e = require("./module-1637.js");
    Se.sendHeaders = e.channel("undici:client:sendHeaders"), Se.beforeConnect = e.channel("undici:client:beforeConnect"), Se.connectError = e.channel("undici:client:connectError"), Se.connected = e.channel("undici:client:connected");
} catch  {
    Se.sendHeaders = {
        hasSubscribers: !1
    }, Se.beforeConnect = {
        hasSubscribers: !1
    }, Se.connectError = {
        hasSubscribers: !1
    }, Se.connected = {
        hasSubscribers: !1
    };
}
function be(e) {
    n("ERR_TLS_CERT_ALTNAME_INVALID" !== e.code), this[j][q] = e, Ke(this[N], e);
}
function Fe(e, A, t) {
    const n = new m(`HTTP/2: "frameError" received - type ${e}, code ${A}`);
    0 === t && (this[j][q] = n, Ke(this[N], n));
}
function _e() {
    a.destroy(this, new Q("other side closed")), a.destroy(this[j], new Q("other side closed"));
}
function ve(e) {
    const A = this[N], t = new m(`HTTP/2: "GOAWAY" frame received with code ${e}`);
    if (A[j] = null, A[de] = null, A.destroyed) {
        n(0 === this[v]);
        const e = A[M].splice(A[H]);
        for(let A = 0; A < e.length; A++){
            iA(this, e[A], t);
        }
    } else if (A[_] > 0) {
        const e = A[M][A[H]];
        A[M][A[H]++] = null, iA(A, e, t);
    }
    A[x] = A[H], n(0 === A[_]), A.emit("disconnect", A[T], [
        A
    ], t), AA(A);
}
const Le = require("./module-6747.js"), Ue = require("./module-858.js"), Me = Buffer.alloc(0);
let Oe = null, Je = async function() {
    const e = process.env.JEST_WORKER_ID ? require("./module-2789.js") : void 0;
    let A;
    try {
        A = await WebAssembly.compile(Buffer.from(require("./module-871.js"), "base64"));
    } catch (n) {
        A = await WebAssembly.compile(Buffer.from(e || require("./module-2789.js"), "base64"));
    }
    return await WebAssembly.instantiate(A, {
        env: {
            wasm_on_url: (e, A, t)=>0,
            wasm_on_status: (e, A, t)=>{
                n.strictEqual(Ye.ptr, e);
                const r = A - Ve + Pe.byteOffset;
                return Ye.onStatus(new De(Pe.buffer, r, t)) || 0;
            },
            wasm_on_message_begin: (e)=>(n.strictEqual(Ye.ptr, e), Ye.onMessageBegin() || 0),
            wasm_on_header_field: (e, A, t)=>{
                n.strictEqual(Ye.ptr, e);
                const r = A - Ve + Pe.byteOffset;
                return Ye.onHeaderField(new De(Pe.buffer, r, t)) || 0;
            },
            wasm_on_header_value: (e, A, t)=>{
                n.strictEqual(Ye.ptr, e);
                const r = A - Ve + Pe.byteOffset;
                return Ye.onHeaderValue(new De(Pe.buffer, r, t)) || 0;
            },
            wasm_on_headers_complete: (e, A, t, r)=>(n.strictEqual(Ye.ptr, e), Ye.onHeadersComplete(A, Boolean(t), Boolean(r)) || 0),
            wasm_on_body: (e, A, t)=>{
                n.strictEqual(Ye.ptr, e);
                const r = A - Ve + Pe.byteOffset;
                return Ye.onBody(new De(Pe.buffer, r, t)) || 0;
            },
            wasm_on_message_complete: (e)=>(n.strictEqual(Ye.ptr, e), Ye.onMessageComplete() || 0)
        }
    });
}();
Je.catch();
let Ye = null, Pe = null, Ge = 0, Ve = null;
const xe = 1, He = 3;
class qe {
    constructor(e, A, { exports: t }){
        n(Number.isFinite(e[K]) && e[K] > 0), this.llhttp = t, this.ptr = this.llhttp.llhttp_alloc(Le.TYPE.RESPONSE), this.client = e, this.socket = A, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = e[K], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e[ge];
    }
    setTimeout(e, A) {
        this.timeoutType = A, e !== this.timeoutValue ? (i.clearTimeout(this.timeout), e ? (this.timeout = i.setTimeout(We, e, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e) : this.timeout && this.timeout.refresh && this.timeout.refresh();
    }
    resume() {
        !this.socket.destroyed && this.paused && (n(null != this.ptr), n(null == Ye), this.llhttp.llhttp_resume(this.ptr), n(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || Me), this.readMore());
    }
    readMore() {
        for(; !this.paused && this.ptr;){
            const e = this.socket.read();
            if (null === e) break;
            this.execute(e);
        }
    }
    execute(e) {
        n(null != this.ptr), n(null == Ye), n(!this.paused);
        const { socket: A, llhttp: t } = this;
        e.length > Ge && (Ve && t.free(Ve), Ge = 4096 * Math.ceil(e.length / 4096), Ve = t.malloc(Ge)), new Uint8Array(t.memory.buffer, Ve, Ge).set(e);
        try {
            let n;
            try {
                Pe = e, Ye = this, n = t.llhttp_execute(this.ptr, Ve, e.length);
            } catch (e) {
                throw e;
            } finally{
                Ye = null, Pe = null;
            }
            const r = t.llhttp_get_error_pos(this.ptr) - Ve;
            if (n === Le.ERROR.PAUSED_UPGRADE) this.onUpgrade(e.slice(r));
            else if (n === Le.ERROR.PAUSED) this.paused = !0, A.unshift(e.slice(r));
            else if (n !== Le.ERROR.OK) {
                const A = t.llhttp_get_error_reason(this.ptr);
                let o = "";
                if (A) {
                    const e = new Uint8Array(t.memory.buffer, A).indexOf(0);
                    o = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(t.memory.buffer, A, e).toString() + ")";
                }
                throw new B(o, Le.ERROR[n], e.slice(r));
            }
        } catch (e) {
            a.destroy(A, e);
        }
    }
    destroy() {
        n(null != this.ptr), n(null == Ye), this.llhttp.llhttp_free(this.ptr), this.ptr = null, i.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
    }
    onStatus(e) {
        this.statusText = e.toString();
    }
    onMessageBegin() {
        const { socket: e, client: A } = this;
        if (e.destroyed) return -1;
        return A[M][A[H]] ? void 0 : -1;
    }
    onHeaderField(e) {
        const A = this.headers.length;
        1 & A ? this.headers[A - 1] = Buffer.concat([
            this.headers[A - 1],
            e
        ]) : this.headers.push(e), this.trackHeader(e.length);
    }
    onHeaderValue(e) {
        let A = this.headers.length;
        1 & ~A ? this.headers[A - 1] = Buffer.concat([
            this.headers[A - 1],
            e
        ]) : (this.headers.push(e), A += 1);
        const t = this.headers[A - 2];
        10 === t.length && "keep-alive" === t.toString().toLowerCase() ? this.keepAlive += e.toString() : 10 === t.length && "connection" === t.toString().toLowerCase() ? this.connection += e.toString() : 14 === t.length && "content-length" === t.toString().toLowerCase() && (this.contentLength += e.toString()), this.trackHeader(e.length);
    }
    trackHeader(e) {
        this.headersSize += e, this.headersSize >= this.headersMaxSize && a.destroy(this.socket, new h);
    }
    onUpgrade(e) {
        const { upgrade: A, client: t, socket: r, headers: o, statusCode: s } = this;
        n(A);
        const i = t[M][t[H]];
        n(i), n(!r.destroyed), n(r === t[j]), n(!this.paused), n(i.upgrade || "CONNECT" === i.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, r.unshift(e), r[R].destroy(), r[R] = null, r[N] = null, r[q] = null, r.removeListener("error", Xe).removeListener("readable", je).removeListener("end", Ze).removeListener("close", ze), t[j] = null, t[M][t[H]++] = null, t.emit("disconnect", t[T], [
            t
        ], new m("upgrade"));
        try {
            i.onUpgrade(s, o, r);
        } catch (e) {
            a.destroy(r, e);
        }
        AA(t);
    }
    onHeadersComplete(e, A, t) {
        const { client: r, socket: o, headers: s, statusText: i } = this;
        if (o.destroyed) return -1;
        const c = r[M][r[H]];
        if (!c) return -1;
        if (n(!this.upgrade), n(this.statusCode < 200), 100 === e) return a.destroy(o, new Q("bad response", a.getSocketInfo(o))), -1;
        if (A && !c.upgrade) return a.destroy(o, new Q("bad upgrade", a.getSocketInfo(o))), -1;
        if (n.strictEqual(this.timeoutType, xe), this.statusCode = e, this.shouldKeepAlive = t || "HEAD" === c.method && !o[k] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
            const e = null != c.bodyTimeout ? c.bodyTimeout : r[ee];
            this.setTimeout(e, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === c.method) return n(1 === r[_]), this.upgrade = !0, 2;
        if (A) return n(1 === r[_]), this.upgrade = !0, 2;
        if (n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && r[W]) {
            const e = this.keepAlive ? a.parseKeepAliveTimeout(this.keepAlive) : null;
            if (null != e) {
                const A = Math.min(e - r[z], r[Z]);
                A <= 0 ? o[k] = !0 : r[X] = A;
            } else r[X] = r[G];
        } else o[k] = !0;
        const l = !1 === c.onHeaders(e, s, this.resume, i);
        return c.aborted ? -1 : "HEAD" === c.method || e < 200 ? 1 : (o[b] && (o[b] = !1, AA(r)), l ? Le.ERROR.PAUSED : 0);
    }
    onBody(e) {
        const { client: A, socket: t, statusCode: r, maxResponseSize: o } = this;
        if (t.destroyed) return -1;
        const s = A[M][A[H]];
        return n(s), n.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), n(r >= 200), o > -1 && this.bytesRead + e.length > o ? (a.destroy(t, new p), -1) : (this.bytesRead += e.length, !1 === s.onData(e) ? Le.ERROR.PAUSED : void 0);
    }
    onMessageComplete() {
        const { client: e, socket: A, statusCode: t, upgrade: r, headers: o, contentLength: s, bytesRead: i, shouldKeepAlive: c } = this;
        if (A.destroyed && (!t || c)) return -1;
        if (r) return;
        const l = e[M][e[H]];
        return n(l), n(t >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, t < 200 ? void 0 : "HEAD" !== l.method && s && i !== parseInt(s, 10) ? (a.destroy(A, new E), -1) : (l.onComplete(o), e[M][e[H]++] = null, A[U] ? (n.strictEqual(e[_], 0), a.destroy(A, new m("reset")), Le.ERROR.PAUSED) : c ? A[k] && 0 === e[_] ? (a.destroy(A, new m("reset")), Le.ERROR.PAUSED) : void (1 === e[W] ? setImmediate(AA, e) : AA(e)) : (a.destroy(A, new m("reset")), Le.ERROR.PAUSED));
    }
}
function We(e) {
    const { socket: A, timeoutType: t, client: r } = e;
    t === xe ? (!A[U] || A.writableNeedDrain || r[_] > 1) && (n(!e.paused, "cannot be paused while waiting for headers"), a.destroy(A, new I)) : 2 === t ? e.paused || a.destroy(A, new C) : t === He && (n(0 === r[_] && r[X]), a.destroy(A, new m("socket idle timeout")));
}
function je() {
    const { [R]: e } = this;
    e && e.readMore();
}
function Xe(e) {
    const { [N]: A, [R]: t } = this;
    n("ERR_TLS_CERT_ALTNAME_INVALID" !== e.code), "h2" === A[Ee] || "ECONNRESET" !== e.code || !t.statusCode || t.shouldKeepAlive ? (this[q] = e, Ke(this[N], e)) : t.onMessageComplete();
}
function Ke(e, A) {
    if (0 === e[_] && "UND_ERR_INFO" !== A.code && "UND_ERR_SOCKET" !== A.code) {
        n(e[x] === e[H]);
        const t = e[M].splice(e[H]);
        for(let n = 0; n < t.length; n++){
            iA(e, t[n], A);
        }
        n(0 === e[L]);
    }
}
function Ze() {
    const { [R]: e, [N]: A } = this;
    "h2" === A[Ee] || !e.statusCode || e.shouldKeepAlive ? a.destroy(this, new Q("other side closed", a.getSocketInfo(this))) : e.onMessageComplete();
}
function ze() {
    const { [N]: e, [R]: A } = this;
    "h1" === e[Ee] && A && (this[q] || !A.statusCode || A.shouldKeepAlive || A.onMessageComplete(), this[R].destroy(), this[R] = null);
    const t = this[q] || new Q("closed", a.getSocketInfo(this));
    if (e[j] = null, e.destroyed) {
        n(0 === e[v]);
        const A = e[M].splice(e[H]);
        for(let n = 0; n < A.length; n++){
            iA(e, A[n], t);
        }
    } else if (e[_] > 0 && "UND_ERR_INFO" !== t.code) {
        const A = e[M][e[H]];
        e[M][e[H]++] = null, iA(e, A, t);
    }
    e[x] = e[H], n(0 === e[_]), e.emit("disconnect", e[T], [
        e
    ], t), AA(e);
}
async function $e(e) {
    n(!e[J]), n(!e[j]);
    let { host: A, hostname: t, protocol: o, port: s } = e[T];
    if ("[" === t[0]) {
        const e = t.indexOf("]");
        n(-1 !== e);
        const A = t.substring(1, e);
        n(r.isIP(A)), t = A;
    }
    e[J] = !0, Se.beforeConnect.hasSubscribers && Se.beforeConnect.publish({
        connectParams: {
            host: A,
            hostname: t,
            protocol: o,
            port: s,
            servername: e[w],
            localAddress: e[le]
        },
        connector: e[te]
    });
    try {
        const r = await new Promise((n, r)=>{
            e[te]({
                host: A,
                hostname: t,
                protocol: o,
                port: s,
                servername: e[w],
                localAddress: e[le]
            }, (e, A)=>{
                e ? r(e) : n(A);
            });
        });
        if (e.destroyed) return void a.destroy(r.on("error", ()=>{}), new f);
        e[J] = !1, n(r);
        if ("h2" === r.alpnProtocol) {
            Ne || (Ne = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
                code: "UNDICI-H2"
            }));
            const A = Ce.connect(e[T], {
                createConnection: ()=>r,
                peerMaxConcurrentStreams: e[Ie].maxConcurrentStreams
            });
            e[Ee] = "h2", A[N] = e, A[j] = r, A.on("error", be), A.on("frameError", Fe), A.on("end", _e), A.on("goaway", ve), A.on("close", ze), A.unref(), e[de] = A, r[de] = A;
        } else Oe || (Oe = await Je, Je = null), r[P] = !1, r[U] = !1, r[k] = !1, r[b] = !1, r[R] = new qe(e, r, Oe);
        r[oe] = 0, r[re] = e[re], r[N] = e, r[q] = null, r.on("error", Xe).on("readable", je).on("end", Ze).on("close", ze), e[j] = r, Se.connected.hasSubscribers && Se.connected.publish({
            connectParams: {
                host: A,
                hostname: t,
                protocol: o,
                port: s,
                servername: e[w],
                localAddress: e[le]
            },
            connector: e[te],
            socket: r
        }), e.emit("connect", e[T], [
            e
        ]);
    } catch (r) {
        if (e.destroyed) return;
        if (e[J] = !1, Se.connectError.hasSubscribers && Se.connectError.publish({
            connectParams: {
                host: A,
                hostname: t,
                protocol: o,
                port: s,
                servername: e[w],
                localAddress: e[le]
            },
            connector: e[te],
            error: r
        }), "ERR_TLS_CERT_ALTNAME_INVALID" === r.code) for(n(0 === e[_]); e[v] > 0 && e[M][e[x]].servername === e[w];){
            const A = e[M][e[x]++];
            iA(e, A, r);
        }
        else Ke(e, r);
        e.emit("connectionError", e[T], [
            e
        ], r);
    }
    AA(e);
}
function eA(e) {
    e[Y] = 0, e.emit("drain", e[T], [
        e
    ]);
}
function AA(e, A) {
    2 !== e[F] && (e[F] = 2, function(e, A) {
        for(;;){
            if (e.destroyed) return void n(0 === e[v]);
            if (e[Re] && !e[L]) return e[Re](), void (e[Re] = null);
            const t = e[j];
            if (t && !t.destroyed && "h2" !== t.alpnProtocol) {
                if (0 === e[L] ? !t[P] && t.unref && (t.unref(), t[P] = !0) : t[P] && t.ref && (t.ref(), t[P] = !1), 0 === e[L]) t[R].timeoutType !== He && t[R].setTimeout(e[X], He);
                else if (e[_] > 0 && t[R].statusCode < 200 && t[R].timeoutType !== xe) {
                    const A = e[M][e[H]], n = null != A.headersTimeout ? A.headersTimeout : e[$];
                    t[R].setTimeout(n, xe);
                }
            }
            if (e[D]) e[Y] = 2;
            else if (2 === e[Y]) {
                A ? (e[Y] = 1, process.nextTick(eA, e)) : eA(e);
                continue;
            }
            if (0 === e[v]) return;
            if (e[_] >= (e[W] || 1)) return;
            const r = e[M][e[x]];
            if ("https:" === e[T].protocol && e[w] !== r.servername) {
                if (e[_] > 0) return;
                if (e[w] = r.servername, t && t.servername !== r.servername) return void a.destroy(t, new m("servername changed"));
            }
            if (e[J]) return;
            if (!t && !e[de]) return void $e(e);
            if (t.destroyed || t[U] || t[k] || t[b]) return;
            if (e[_] > 0 && !r.idempotent) return;
            if (e[_] > 0 && (r.upgrade || "CONNECT" === r.method)) return;
            if (e[_] > 0 && 0 !== a.bodyLength(r.body) && (a.isStream(r.body) || a.isAsyncIterable(r.body))) return;
            !r.aborted && nA(e, r) ? e[x]++ : e[M].splice(e[x], 1);
        }
    }(e, A), e[F] = 0, e[H] > 256 && (e[M].splice(0, e[H]), e[x] -= e[H], e[H] = 0));
}
function tA(e) {
    return "GET" !== e && "HEAD" !== e && "OPTIONS" !== e && "TRACE" !== e && "CONNECT" !== e;
}
function nA(e, A) {
    if ("h2" === e[Ee]) return void function(e, A, t) {
        const { body: r, method: o, path: s, host: i, upgrade: l, expectContinue: E, signal: u, headers: I } = t;
        let h, Q;
        h = "string" == typeof I ? c[Qe](I.trim()) : I;
        if (l) return iA(e, t, new Error("Upgrade not supported for H2")), !1;
        try {
            t.onConnect((A)=>{
                t.aborted || t.completed || iA(e, t, A || new d);
            });
        } catch (A) {
            iA(e, t, A);
        }
        if (t.aborted) return !1;
        const C = e[Ie];
        if (h[Be] = i || e[ue], h[pe] = o, "CONNECT" === o) return A.ref(), Q = A.request(h, {
            endStream: !1,
            signal: u
        }), Q.id && !Q.pending ? (t.onUpgrade(null, null, Q), ++C.openStreams) : Q.once("ready", ()=>{
            t.onUpgrade(null, null, Q), ++C.openStreams;
        }), Q.once("close", ()=>{
            C.openStreams -= 1, 0 === C.openStreams && A.unref();
        }), !0;
        h[fe] = s, h[ye] = "https";
        const B = "PUT" === o || "POST" === o || "PATCH" === o;
        r && "function" == typeof r.read && r.read(0);
        let p = a.bodyLength(r);
        null == p && (p = t.contentLength);
        0 !== p && B || (p = null);
        if (tA(o) && p > 0 && null != t.contentLength && t.contentLength !== p) {
            if (e[Ae]) return iA(e, t, new g), !1;
            process.emitWarning(new g);
        }
        null != p && (n(r, "no body must not have content length"), h[Te] = `${p}`);
        A.ref();
        const f = "GET" === o || "HEAD" === o;
        E ? (h[ke] = "100-continue", Q = A.request(h, {
            endStream: f,
            signal: u
        }), Q.once("continue", y)) : (Q = A.request(h, {
            endStream: f,
            signal: u
        }), y());
        return ++C.openStreams, Q.once("response", (e)=>{
            const { [we]: A, ...n } = e;
            !1 === t.onHeaders(Number(A), n, Q.resume.bind(Q), "") && Q.pause();
        }), Q.once("end", ()=>{
            t.onComplete([]);
        }), Q.on("data", (e)=>{
            !1 === t.onData(e) && Q.pause();
        }), Q.once("close", ()=>{
            C.openStreams -= 1, 0 === C.openStreams && A.unref();
        }), Q.once("error", function(A) {
            !e[de] || e[de].destroyed || this.closed || this.destroyed || (C.streams -= 1, a.destroy(Q, A));
        }), Q.once("frameError", (A, n)=>{
            const r = new m(`HTTP/2: "frameError" received - type ${A}, code ${n}`);
            iA(e, t, r), !e[de] || e[de].destroyed || this.closed || this.destroyed || (C.streams -= 1, a.destroy(Q, r));
        }), !0;
        function y() {
            r ? a.isBuffer(r) ? (n(p === r.byteLength, "buffer body must have content length"), Q.cork(), Q.write(r), Q.uncork(), Q.end(), t.onBodySent(r), t.onRequestSent()) : a.isBlobLike(r) ? "function" == typeof r.stream ? sA({
                client: e,
                request: t,
                contentLength: p,
                h2stream: Q,
                expectsPayload: B,
                body: r.stream(),
                socket: e[j],
                header: ""
            }) : oA({
                body: r,
                client: e,
                request: t,
                contentLength: p,
                expectsPayload: B,
                h2stream: Q,
                header: "",
                socket: e[j]
            }) : a.isStream(r) ? rA({
                body: r,
                client: e,
                request: t,
                contentLength: p,
                expectsPayload: B,
                socket: e[j],
                h2stream: Q,
                header: ""
            }) : a.isIterable(r) ? sA({
                body: r,
                client: e,
                request: t,
                contentLength: p,
                expectsPayload: B,
                header: "",
                h2stream: Q,
                socket: e[j]
            }) : n(!1) : t.onRequestSent();
        }
    }(e, e[de], A);
    const { body: t, method: r, path: o, host: s, upgrade: i, headers: l, blocking: E, reset: u } = A, I = "PUT" === r || "POST" === r || "PATCH" === r;
    t && "function" == typeof t.read && t.read(0);
    const h = a.bodyLength(t);
    let Q = h;
    if (null === Q && (Q = A.contentLength), 0 !== Q || I || (Q = null), tA(r) && Q > 0 && null !== A.contentLength && A.contentLength !== Q) {
        if (e[Ae]) return iA(e, A, new g), !1;
        process.emitWarning(new g);
    }
    const C = e[j];
    try {
        A.onConnect((t)=>{
            A.aborted || A.completed || (iA(e, A, t || new d), a.destroy(C, new m("aborted")));
        });
    } catch (t) {
        iA(e, A, t);
    }
    if (A.aborted) return !1;
    "HEAD" === r && (C[k] = !0), (i || "CONNECT" === r) && (C[k] = !0), null != u && (C[k] = u), e[re] && C[oe]++ >= e[re] && (C[k] = !0), E && (C[b] = !0);
    let B = `${r} ${o} HTTP/1.1\r\n`;
    return B += "string" == typeof s ? `host: ${s}\r\n` : e[V], i ? B += `connection: upgrade\r\nupgrade: ${i}\r\n` : e[W] && !C[k] ? B += "connection: keep-alive\r\n" : B += "connection: close\r\n", l && (B += l), Se.sendHeaders.hasSubscribers && Se.sendHeaders.publish({
        request: A,
        headers: B,
        socket: C
    }), t && 0 !== h ? a.isBuffer(t) ? (n(Q === t.byteLength, "buffer body must have content length"), C.cork(), C.write(`${B}content-length: ${Q}\r\n\r\n`, "latin1"), C.write(t), C.uncork(), A.onBodySent(t), A.onRequestSent(), I || (C[k] = !0)) : a.isBlobLike(t) ? "function" == typeof t.stream ? sA({
        body: t.stream(),
        client: e,
        request: A,
        socket: C,
        contentLength: Q,
        header: B,
        expectsPayload: I
    }) : oA({
        body: t,
        client: e,
        request: A,
        socket: C,
        contentLength: Q,
        header: B,
        expectsPayload: I
    }) : a.isStream(t) ? rA({
        body: t,
        client: e,
        request: A,
        socket: C,
        contentLength: Q,
        header: B,
        expectsPayload: I
    }) : a.isIterable(t) ? sA({
        body: t,
        client: e,
        request: A,
        socket: C,
        contentLength: Q,
        header: B,
        expectsPayload: I
    }) : n(!1) : (0 === Q ? C.write(`${B}content-length: 0\r\n\r\n`, "latin1") : (n(null === Q, "no body must not have content length"), C.write(`${B}\r\n`, "latin1")), A.onRequestSent()), !0;
}
function rA({ h2stream: e, body: A, client: t, request: r, socket: o, contentLength: i, header: c, expectsPayload: l }) {
    if (n(0 !== i || 0 === t[_], "stream body cannot be pipelined"), "h2" === t[Ee]) {
        const m = s(A, e, (t)=>{
            t ? (a.destroy(A, t), a.destroy(e, t)) : r.onRequestSent();
        });
        function C(e) {
            r.onBodySent(e);
        }
        return m.on("data", C), void m.once("end", ()=>{
            m.removeListener("data", C), a.destroy(m);
        });
    }
    let g = !1;
    const E = new aA({
        socket: o,
        request: r,
        contentLength: i,
        client: t,
        expectsPayload: l,
        header: c
    }), u = function(e) {
        if (!g) try {
            !E.write(e) && this.pause && this.pause();
        } catch (e) {
            a.destroy(this, e);
        }
    }, I = function() {
        g || A.resume && A.resume();
    }, h = function() {
        if (g) return;
        const e = new d;
        queueMicrotask(()=>Q(e));
    }, Q = function(e) {
        if (!g) {
            if (g = !0, n(o.destroyed || o[U] && t[_] <= 1), o.off("drain", I).off("error", Q), A.removeListener("data", u).removeListener("end", Q).removeListener("error", Q).removeListener("close", h), !e) try {
                E.end();
            } catch (A) {
                e = A;
            }
            E.destroy(e), !e || "UND_ERR_INFO" === e.code && "reset" === e.message ? a.destroy(A) : a.destroy(A, e);
        }
    };
    A.on("data", u).on("end", Q).on("error", Q).on("close", h), A.resume && A.resume(), o.on("drain", I).on("error", Q);
}
async function oA({ h2stream: e, body: A, client: t, request: r, socket: o, contentLength: s, header: i, expectsPayload: c }) {
    n(s === A.size, "blob body must have content length");
    const l = "h2" === t[Ee];
    try {
        if (null != s && s !== A.size) throw new g;
        const n = Buffer.from(await A.arrayBuffer());
        l ? (e.cork(), e.write(n), e.uncork()) : (o.cork(), o.write(`${i}content-length: ${s}\r\n\r\n`, "latin1"), o.write(n), o.uncork()), r.onBodySent(n), r.onRequestSent(), c || (o[k] = !0), AA(t);
    } catch (A) {
        a.destroy(l ? e : o, A);
    }
}
async function sA({ h2stream: e, body: A, client: t, request: r, socket: o, contentLength: s, header: a, expectsPayload: i }) {
    n(0 !== s || 0 === t[_], "iterator body cannot be pipelined");
    let c = null;
    function l() {
        if (c) {
            const e = c;
            c = null, e();
        }
    }
    const g = ()=>new Promise((e, A)=>{
            n(null === c), o[q] ? A(o[q]) : c = e;
        });
    if ("h2" === t[Ee]) {
        e.on("close", l).on("drain", l);
        try {
            for await (const t of A){
                if (o[q]) throw o[q];
                const A = e.write(t);
                r.onBodySent(t), A || await g();
            }
        } catch (A) {
            e.destroy(A);
        } finally{
            r.onRequestSent(), e.end(), e.off("close", l).off("drain", l);
        }
        return;
    }
    o.on("close", l).on("drain", l);
    const E = new aA({
        socket: o,
        request: r,
        contentLength: s,
        client: t,
        expectsPayload: i,
        header: a
    });
    try {
        for await (const e of A){
            if (o[q]) throw o[q];
            E.write(e) || await g();
        }
        E.end();
    } catch (e) {
        E.destroy(e);
    } finally{
        o.off("close", l).off("drain", l);
    }
}
class aA {
    constructor({ socket: e, request: A, contentLength: t, client: n, expectsPayload: r, header: o }){
        this.socket = e, this.request = A, this.contentLength = t, this.client = n, this.bytesWritten = 0, this.expectsPayload = r, this.header = o, e[U] = !0;
    }
    write(e) {
        const { socket: A, request: t, contentLength: n, client: r, bytesWritten: o, expectsPayload: s, header: a } = this;
        if (A[q]) throw A[q];
        if (A.destroyed) return !1;
        const i = Buffer.byteLength(e);
        if (!i) return !0;
        if (null !== n && o + i > n) {
            if (r[Ae]) throw new g;
            process.emitWarning(new g);
        }
        A.cork(), 0 === o && (s || (A[k] = !0), null === n ? A.write(`${a}transfer-encoding: chunked\r\n`, "latin1") : A.write(`${a}content-length: ${n}\r\n\r\n`, "latin1")), null === n && A.write(`\r\n${i.toString(16)}\r\n`, "latin1"), this.bytesWritten += i;
        const c = A.write(e);
        return A.uncork(), t.onBodySent(e), c || A[R].timeout && A[R].timeoutType === xe && A[R].timeout.refresh && A[R].timeout.refresh(), c;
    }
    end() {
        const { socket: e, contentLength: A, client: t, bytesWritten: n, expectsPayload: r, header: o, request: s } = this;
        if (s.onRequestSent(), e[U] = !1, e[q]) throw e[q];
        if (!e.destroyed) {
            if (0 === n ? r ? e.write(`${o}content-length: 0\r\n\r\n`, "latin1") : e.write(`${o}\r\n`, "latin1") : null === A && e.write("\r\n0\r\n\r\n", "latin1"), null !== A && n !== A) {
                if (t[Ae]) throw new g;
                process.emitWarning(new g);
            }
            e[R].timeout && e[R].timeoutType === xe && e[R].timeout.refresh && e[R].timeout.refresh(), AA(t);
        }
    }
    destroy(e) {
        const { socket: A, client: t } = this;
        A[U] = !1, e && (n(t[_] <= 1, "pipeline should only contain this request"), a.destroy(A, e));
    }
}
function iA(e, A, t) {
    try {
        A.onError(t), n(A.aborted);
    } catch (t) {
        e.emit("error", t);
    }
}
module.exports = class extends l {
    constructor(e, { interceptors: A, maxHeaderSize: t, headersTimeout: n, socketTimeout: s, requestTimeout: i, connectTimeout: c, bodyTimeout: l, idleTimeout: g, keepAlive: E, keepAliveTimeout: d, maxKeepAliveTimeout: I, keepAliveMaxTimeout: h, keepAliveTimeoutThreshold: Q, socketPath: m, pipelining: C, tls: B, strictContentLength: p, maxCachedSessions: f, maxRedirections: k, connect: N, maxRequestsPerClient: D, localAddress: R, maxResponseSize: S, autoSelectFamily: b, autoSelectFamilyAttemptTimeout: _, allowH2: v, maxConcurrentStreams: L } = {}){
        if (super(), void 0 !== E) throw new u("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== s) throw new u("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== i) throw new u("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== g) throw new u("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== I) throw new u("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != t && !Number.isFinite(t)) throw new u("invalid maxHeaderSize");
        if (null != m && "string" != typeof m) throw new u("invalid socketPath");
        if (null != c && (!Number.isFinite(c) || c < 0)) throw new u("invalid connectTimeout");
        if (null != d && (!Number.isFinite(d) || d <= 0)) throw new u("invalid keepAliveTimeout");
        if (null != h && (!Number.isFinite(h) || h <= 0)) throw new u("invalid keepAliveMaxTimeout");
        if (null != Q && !Number.isFinite(Q)) throw new u("invalid keepAliveTimeoutThreshold");
        if (null != n && (!Number.isInteger(n) || n < 0)) throw new u("headersTimeout must be a positive integer or zero");
        if (null != l && (!Number.isInteger(l) || l < 0)) throw new u("bodyTimeout must be a positive integer or zero");
        if (null != N && "function" != typeof N && "object" != typeof N) throw new u("connect must be a function or an object");
        if (null != k && (!Number.isInteger(k) || k < 0)) throw new u("maxRedirections must be a positive number");
        if (null != D && (!Number.isInteger(D) || D < 0)) throw new u("maxRequestsPerClient must be a positive number");
        if (null != R && ("string" != typeof R || 0 === r.isIP(R))) throw new u("localAddress must be valid string IP address");
        if (null != S && (!Number.isInteger(S) || S < -1)) throw new u("maxResponseSize must be a positive number");
        if (null != _ && (!Number.isInteger(_) || _ < -1)) throw new u("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != v && "boolean" != typeof v) throw new u("allowH2 must be a valid boolean value");
        if (null != L && ("number" != typeof L || L < 1)) throw new u("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof N && (N = y({
            ...B,
            maxCachedSessions: f,
            allowH2: v,
            socketPath: m,
            timeout: c,
            ...a.nodeHasAutoSelectFamily && b ? {
                autoSelectFamily: b,
                autoSelectFamilyAttemptTimeout: _
            } : void 0,
            ...N
        })), this[ce] = A && A.Client && Array.isArray(A.Client) ? A.Client : [
            Ue({
                maxRedirections: k
            })
        ], this[T] = a.parseOrigin(e), this[te] = N, this[j] = null, this[W] = null != C ? C : 1, this[K] = t || o.maxHeaderSize, this[G] = d ?? 4e3, this[Z] = h ?? 6e5, this[z] = Q ?? 1e3, this[X] = this[G], this[w] = null, this[le] = null != R ? R : null, this[F] = 0, this[Y] = 0, this[V] = `host: ${this[T].hostname}${this[T].port ? `:${this[T].port}` : ""}\r\n`, this[ee] = null != l ? l : 3e5, this[$] = null != n ? n : 3e5, this[Ae] = p ?? !0, this[ne] = k, this[re] = D, this[Re] = null, this[ge] = S > -1 ? S : -1, this[Ee] = "h1", this[de] = null, this[Ie] = v ? {
            openStreams: 0,
            maxConcurrentStreams: null != L ? L : 100
        } : null, this[ue] = `${this[T].hostname}${this[T].port ? `:${this[T].port}` : ""}`, this[M] = [], this[H] = 0, this[x] = 0;
    }
    get pipelining() {
        return this[W];
    }
    set pipelining(e) {
        this[W] = e, AA(this, !0);
    }
    get [v]() {
        return this[M].length - this[x];
    }
    get [_]() {
        return this[x] - this[H];
    }
    get [L]() {
        return this[M].length - this[H];
    }
    get [O]() {
        return !!this[j] && !this[J] && !this[j].destroyed;
    }
    get [D]() {
        const e = this[j];
        return e && (e[k] || e[U] || e[b]) || this[L] >= (this[W] || 1) || this[v] > 0;
    }
    [S](e) {
        $e(this), this.once("connect", e);
    }
    [ie](e, A) {
        const t = e.origin || this[T].origin, n = "h2" === this[Ee] ? c[he](t, e, A) : c[me](t, e, A);
        return this[M].push(n), this[F] || (null == a.bodyLength(n.body) && a.isIterable(n.body) ? (this[F] = 1, process.nextTick(AA, this)) : AA(this, !0)), this[F] && 2 !== this[Y] && this[D] && (this[Y] = 2), this[Y] < 2;
    }
    async [se]() {
        return new Promise((e)=>{
            this[L] ? this[Re] = e : e(null);
        });
    }
    async [ae](e) {
        return new Promise((A)=>{
            const t = this[M].splice(this[x]);
            for(let A = 0; A < t.length; A++){
                iA(this, t[A], e);
            }
            const n = ()=>{
                this[Re] && (this[Re](), this[Re] = null), A();
            };
            null != this[de] && (a.destroy(this[de], e), this[de] = null, this[Ie] = null), this[j] ? a.destroy(this[j].on("close", n), e) : queueMicrotask(n), AA(this);
        });
    }
};
