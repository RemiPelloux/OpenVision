"use strict";
const t = require("./module-2613.js"), s = require("./module-9278.js"), o = require("./module-8611.js"), { pipeline: r } = require("./module-2203.js"), i = require("./module-9361.js"), l = require("./module-3891.js"), d = require("./module-3308.js"), m = require("./module-9792.js"), { RequestContentLengthMismatchError: c, ResponseContentLengthMismatchError: p, InvalidArgumentError: A, RequestAbortedError: u, HeadersTimeoutError: g, HeadersOverflowError: T, SocketError: h, InformationalError: k, BodyTimeoutError: _, HTTPParserError: E, ResponseExceededMaxSizeError: f, ClientDestroyedError: C } = require("./module-7902.js"), I = require("./module-3991.js"), { kUrl: v, kReset: y, kServerName: S, kClient: R, kBusy: N, kParser: B, kConnect: w, kBlocking: b, kResuming: Q, kRunning: D, kPending: M, kSize: O, kWriting: U, kQueue: F, kConnected: P, kConnecting: L, kNeedDrain: G, kNoRef: x, kKeepAliveDefaultTimeout: V, kHostHeader: Y, kPendingIdx: q, kRunningIdx: H, kError: J, kPipelining: W, kSocket: K, kKeepAliveTimeoutValue: j, kMaxHeadersSize: $, kKeepAliveMaxTimeout: X, kKeepAliveTimeoutThreshold: z, kHeadersTimeout: Z, kBodyTimeout: ee, kStrictContentLength: ae, kConnector: ne, kMaxRedirections: te, kMaxRequests: se, kCounter: oe, kClose: re, kDestroy: ie, kDispatch: le, kInterceptors: de, kLocalAddress: me, kMaxResponseSize: ce, kHTTPConnVersion: pe, kHost: Ae, kHTTP2Session: ue, kHTTP2SessionState: ge, kHTTP2BuildRequest: Te, kHTTP2CopyHeaders: he, kHTTP1BuildRequest: ke } = require("./module-8832.js");
let _e;
try {
    _e = require("./module-5675.js");
} catch  {
    _e = {
        constants: {}
    };
}
const { constants: { HTTP2_HEADER_AUTHORITY: Ee, HTTP2_HEADER_METHOD: fe, HTTP2_HEADER_PATH: Ce, HTTP2_HEADER_SCHEME: Ie, HTTP2_HEADER_CONTENT_LENGTH: ve, HTTP2_HEADER_EXPECT: ye, HTTP2_HEADER_STATUS: Se } } = _e;
let Re = !1;
const Ne = Buffer[Symbol.species], Be = Symbol("kClosedResolve"), we = {};
try {
    const e = require("./module-1637.js");
    we.sendHeaders = e.channel("undici:client:sendHeaders"), we.beforeConnect = e.channel("undici:client:beforeConnect"), we.connectError = e.channel("undici:client:connectError"), we.connected = e.channel("undici:client:connected");
} catch  {
    we.sendHeaders = {
        hasSubscribers: !1
    }, we.beforeConnect = {
        hasSubscribers: !1
    }, we.connectError = {
        hasSubscribers: !1
    }, we.connected = {
        hasSubscribers: !1
    };
}
function be(e) {
    t("ERR_TLS_CERT_ALTNAME_INVALID" !== e.code), this[K][J] = e, $e(this[R], e);
}
function Qe(e, a, n) {
    const t = new k(`HTTP/2: "frameError" received - type ${e}, code ${a}`);
    0 === n && (this[K][J] = t, $e(this[R], t));
}
function De() {
    i.destroy(this, new h("other side closed")), i.destroy(this[K], new h("other side closed"));
}
function Me(e) {
    const a = this[R], n = new k(`HTTP/2: "GOAWAY" frame received with code ${e}`);
    if (a[K] = null, a[ue] = null, a.destroyed) {
        t(0 === this[M]);
        const e = a[F].splice(a[H]);
        for(let a = 0; a < e.length; a++){
            la(this, e[a], n);
        }
    } else if (a[D] > 0) {
        const e = a[F][a[H]];
        a[F][a[H]++] = null, la(a, e, n);
    }
    a[q] = a[H], t(0 === a[D]), a.emit("disconnect", a[v], [
        a
    ], n), aa(a);
}
const Oe = require("./module-6747.js"), Ue = require("./module-858.js"), Fe = Buffer.alloc(0);
let Pe = null, Le = async function() {
    const e = process.env.JEST_WORKER_ID ? require("./module-2789.js") : void 0;
    let a;
    try {
        a = await WebAssembly.compile(Buffer.from(require("./module-871.js"), "base64"));
    } catch (t) {
        a = await WebAssembly.compile(Buffer.from(e || require("./module-2789.js"), "base64"));
    }
    return await WebAssembly.instantiate(a, {
        env: {
            wasm_on_url: (e, a, n)=>0,
            wasm_on_status: (e, a, n)=>{
                t.strictEqual(Ge.ptr, e);
                const s = a - Ye + xe.byteOffset;
                return Ge.onStatus(new Ne(xe.buffer, s, n)) || 0;
            },
            wasm_on_message_begin: (e)=>(t.strictEqual(Ge.ptr, e), Ge.onMessageBegin() || 0),
            wasm_on_header_field: (e, a, n)=>{
                t.strictEqual(Ge.ptr, e);
                const s = a - Ye + xe.byteOffset;
                return Ge.onHeaderField(new Ne(xe.buffer, s, n)) || 0;
            },
            wasm_on_header_value: (e, a, n)=>{
                t.strictEqual(Ge.ptr, e);
                const s = a - Ye + xe.byteOffset;
                return Ge.onHeaderValue(new Ne(xe.buffer, s, n)) || 0;
            },
            wasm_on_headers_complete: (e, a, n, s)=>(t.strictEqual(Ge.ptr, e), Ge.onHeadersComplete(a, Boolean(n), Boolean(s)) || 0),
            wasm_on_body: (e, a, n)=>{
                t.strictEqual(Ge.ptr, e);
                const s = a - Ye + xe.byteOffset;
                return Ge.onBody(new Ne(xe.buffer, s, n)) || 0;
            },
            wasm_on_message_complete: (e)=>(t.strictEqual(Ge.ptr, e), Ge.onMessageComplete() || 0)
        }
    });
}();
Le.catch();
let Ge = null, xe = null, Ve = 0, Ye = null;
const qe = 1, He = 3;
class Je {
    constructor(e, a, { exports: n }){
        t(Number.isFinite(e[$]) && e[$] > 0), this.llhttp = n, this.ptr = this.llhttp.llhttp_alloc(Oe.TYPE.RESPONSE), this.client = e, this.socket = a, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = e[$], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e[ce];
    }
    setTimeout(e, a) {
        this.timeoutType = a, e !== this.timeoutValue ? (l.clearTimeout(this.timeout), e ? (this.timeout = l.setTimeout(We, e, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e) : this.timeout && this.timeout.refresh && this.timeout.refresh();
    }
    resume() {
        !this.socket.destroyed && this.paused && (t(null != this.ptr), t(null == Ge), this.llhttp.llhttp_resume(this.ptr), t(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || Fe), this.readMore());
    }
    readMore() {
        for(; !this.paused && this.ptr;){
            const e = this.socket.read();
            if (null === e) break;
            this.execute(e);
        }
    }
    execute(e) {
        t(null != this.ptr), t(null == Ge), t(!this.paused);
        const { socket: a, llhttp: n } = this;
        e.length > Ve && (Ye && n.free(Ye), Ve = 4096 * Math.ceil(e.length / 4096), Ye = n.malloc(Ve)), new Uint8Array(n.memory.buffer, Ye, Ve).set(e);
        try {
            let t;
            try {
                xe = e, Ge = this, t = n.llhttp_execute(this.ptr, Ye, e.length);
            } catch (e) {
                throw e;
            } finally{
                Ge = null, xe = null;
            }
            const s = n.llhttp_get_error_pos(this.ptr) - Ye;
            if (t === Oe.ERROR.PAUSED_UPGRADE) this.onUpgrade(e.slice(s));
            else if (t === Oe.ERROR.PAUSED) this.paused = !0, a.unshift(e.slice(s));
            else if (t !== Oe.ERROR.OK) {
                const a = n.llhttp_get_error_reason(this.ptr);
                let o = "";
                if (a) {
                    const e = new Uint8Array(n.memory.buffer, a).indexOf(0);
                    o = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(n.memory.buffer, a, e).toString() + ")";
                }
                throw new E(o, Oe.ERROR[t], e.slice(s));
            }
        } catch (e) {
            i.destroy(a, e);
        }
    }
    destroy() {
        t(null != this.ptr), t(null == Ge), this.llhttp.llhttp_free(this.ptr), this.ptr = null, l.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
    }
    onStatus(e) {
        this.statusText = e.toString();
    }
    onMessageBegin() {
        const { socket: e, client: a } = this;
        if (e.destroyed) return -1;
        return a[F][a[H]] ? void 0 : -1;
    }
    onHeaderField(e) {
        const a = this.headers.length;
        1 & a ? this.headers[a - 1] = Buffer.concat([
            this.headers[a - 1],
            e
        ]) : this.headers.push(e), this.trackHeader(e.length);
    }
    onHeaderValue(e) {
        let a = this.headers.length;
        1 & ~a ? this.headers[a - 1] = Buffer.concat([
            this.headers[a - 1],
            e
        ]) : (this.headers.push(e), a += 1);
        const n = this.headers[a - 2];
        10 === n.length && "keep-alive" === n.toString().toLowerCase() ? this.keepAlive += e.toString() : 10 === n.length && "connection" === n.toString().toLowerCase() ? this.connection += e.toString() : 14 === n.length && "content-length" === n.toString().toLowerCase() && (this.contentLength += e.toString()), this.trackHeader(e.length);
    }
    trackHeader(e) {
        this.headersSize += e, this.headersSize >= this.headersMaxSize && i.destroy(this.socket, new T);
    }
    onUpgrade(e) {
        const { upgrade: a, client: n, socket: s, headers: o, statusCode: r } = this;
        t(a);
        const l = n[F][n[H]];
        t(l), t(!s.destroyed), t(s === n[K]), t(!this.paused), t(l.upgrade || "CONNECT" === l.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, t(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, s.unshift(e), s[B].destroy(), s[B] = null, s[R] = null, s[J] = null, s.removeListener("error", je).removeListener("readable", Ke).removeListener("end", Xe).removeListener("close", ze), n[K] = null, n[F][n[H]++] = null, n.emit("disconnect", n[v], [
            n
        ], new k("upgrade"));
        try {
            l.onUpgrade(r, o, s);
        } catch (e) {
            i.destroy(s, e);
        }
        aa(n);
    }
    onHeadersComplete(e, a, n) {
        const { client: s, socket: o, headers: r, statusText: l } = this;
        if (o.destroyed) return -1;
        const d = s[F][s[H]];
        if (!d) return -1;
        if (t(!this.upgrade), t(this.statusCode < 200), 100 === e) return i.destroy(o, new h("bad response", i.getSocketInfo(o))), -1;
        if (a && !d.upgrade) return i.destroy(o, new h("bad upgrade", i.getSocketInfo(o))), -1;
        if (t.strictEqual(this.timeoutType, qe), this.statusCode = e, this.shouldKeepAlive = n || "HEAD" === d.method && !o[y] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
            const e = null != d.bodyTimeout ? d.bodyTimeout : s[ee];
            this.setTimeout(e, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === d.method) return t(1 === s[D]), this.upgrade = !0, 2;
        if (a) return t(1 === s[D]), this.upgrade = !0, 2;
        if (t(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s[W]) {
            const e = this.keepAlive ? i.parseKeepAliveTimeout(this.keepAlive) : null;
            if (null != e) {
                const a = Math.min(e - s[z], s[X]);
                a <= 0 ? o[y] = !0 : s[j] = a;
            } else s[j] = s[V];
        } else o[y] = !0;
        const m = !1 === d.onHeaders(e, r, this.resume, l);
        return d.aborted ? -1 : "HEAD" === d.method || e < 200 ? 1 : (o[b] && (o[b] = !1, aa(s)), m ? Oe.ERROR.PAUSED : 0);
    }
    onBody(e) {
        const { client: a, socket: n, statusCode: s, maxResponseSize: o } = this;
        if (n.destroyed) return -1;
        const r = a[F][a[H]];
        return t(r), t.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), t(s >= 200), o > -1 && this.bytesRead + e.length > o ? (i.destroy(n, new f), -1) : (this.bytesRead += e.length, !1 === r.onData(e) ? Oe.ERROR.PAUSED : void 0);
    }
    onMessageComplete() {
        const { client: e, socket: a, statusCode: n, upgrade: s, headers: o, contentLength: r, bytesRead: l, shouldKeepAlive: d } = this;
        if (a.destroyed && (!n || d)) return -1;
        if (s) return;
        const m = e[F][e[H]];
        return t(m), t(n >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", t(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, n < 200 ? void 0 : "HEAD" !== m.method && r && l !== parseInt(r, 10) ? (i.destroy(a, new p), -1) : (m.onComplete(o), e[F][e[H]++] = null, a[U] ? (t.strictEqual(e[D], 0), i.destroy(a, new k("reset")), Oe.ERROR.PAUSED) : d ? a[y] && 0 === e[D] ? (i.destroy(a, new k("reset")), Oe.ERROR.PAUSED) : void (1 === e[W] ? setImmediate(aa, e) : aa(e)) : (i.destroy(a, new k("reset")), Oe.ERROR.PAUSED));
    }
}
function We(e) {
    const { socket: a, timeoutType: n, client: s } = e;
    n === qe ? (!a[U] || a.writableNeedDrain || s[D] > 1) && (t(!e.paused, "cannot be paused while waiting for headers"), i.destroy(a, new g)) : 2 === n ? e.paused || i.destroy(a, new _) : n === He && (t(0 === s[D] && s[j]), i.destroy(a, new k("socket idle timeout")));
}
function Ke() {
    const { [B]: e } = this;
    e && e.readMore();
}
function je(e) {
    const { [R]: a, [B]: n } = this;
    t("ERR_TLS_CERT_ALTNAME_INVALID" !== e.code), "h2" === a[pe] || "ECONNRESET" !== e.code || !n.statusCode || n.shouldKeepAlive ? (this[J] = e, $e(this[R], e)) : n.onMessageComplete();
}
function $e(e, a) {
    if (0 === e[D] && "UND_ERR_INFO" !== a.code && "UND_ERR_SOCKET" !== a.code) {
        t(e[q] === e[H]);
        const n = e[F].splice(e[H]);
        for(let t = 0; t < n.length; t++){
            la(e, n[t], a);
        }
        t(0 === e[O]);
    }
}
function Xe() {
    const { [B]: e, [R]: a } = this;
    "h2" === a[pe] || !e.statusCode || e.shouldKeepAlive ? i.destroy(this, new h("other side closed", i.getSocketInfo(this))) : e.onMessageComplete();
}
function ze() {
    const { [R]: e, [B]: a } = this;
    "h1" === e[pe] && a && (this[J] || !a.statusCode || a.shouldKeepAlive || a.onMessageComplete(), this[B].destroy(), this[B] = null);
    const n = this[J] || new h("closed", i.getSocketInfo(this));
    if (e[K] = null, e.destroyed) {
        t(0 === e[M]);
        const a = e[F].splice(e[H]);
        for(let t = 0; t < a.length; t++){
            la(e, a[t], n);
        }
    } else if (e[D] > 0 && "UND_ERR_INFO" !== n.code) {
        const a = e[F][e[H]];
        e[F][e[H]++] = null, la(e, a, n);
    }
    e[q] = e[H], t(0 === e[D]), e.emit("disconnect", e[v], [
        e
    ], n), aa(e);
}
async function Ze(e) {
    t(!e[L]), t(!e[K]);
    let { host: a, hostname: n, protocol: o, port: r } = e[v];
    if ("[" === n[0]) {
        const e = n.indexOf("]");
        t(-1 !== e);
        const a = n.substring(1, e);
        t(s.isIP(a)), n = a;
    }
    e[L] = !0, we.beforeConnect.hasSubscribers && we.beforeConnect.publish({
        connectParams: {
            host: a,
            hostname: n,
            protocol: o,
            port: r,
            servername: e[S],
            localAddress: e[me]
        },
        connector: e[ne]
    });
    try {
        const s = await new Promise((t, s)=>{
            e[ne]({
                host: a,
                hostname: n,
                protocol: o,
                port: r,
                servername: e[S],
                localAddress: e[me]
            }, (e, a)=>{
                e ? s(e) : t(a);
            });
        });
        if (e.destroyed) return void i.destroy(s.on("error", ()=>{}), new C);
        e[L] = !1, t(s);
        if ("h2" === s.alpnProtocol) {
            Re || (Re = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
                code: "UNDICI-H2"
            }));
            const a = _e.connect(e[v], {
                createConnection: ()=>s,
                peerMaxConcurrentStreams: e[ge].maxConcurrentStreams
            });
            e[pe] = "h2", a[R] = e, a[K] = s, a.on("error", be), a.on("frameError", Qe), a.on("end", De), a.on("goaway", Me), a.on("close", ze), a.unref(), e[ue] = a, s[ue] = a;
        } else Pe || (Pe = await Le, Le = null), s[x] = !1, s[U] = !1, s[y] = !1, s[b] = !1, s[B] = new Je(e, s, Pe);
        s[oe] = 0, s[se] = e[se], s[R] = e, s[J] = null, s.on("error", je).on("readable", Ke).on("end", Xe).on("close", ze), e[K] = s, we.connected.hasSubscribers && we.connected.publish({
            connectParams: {
                host: a,
                hostname: n,
                protocol: o,
                port: r,
                servername: e[S],
                localAddress: e[me]
            },
            connector: e[ne],
            socket: s
        }), e.emit("connect", e[v], [
            e
        ]);
    } catch (s) {
        if (e.destroyed) return;
        if (e[L] = !1, we.connectError.hasSubscribers && we.connectError.publish({
            connectParams: {
                host: a,
                hostname: n,
                protocol: o,
                port: r,
                servername: e[S],
                localAddress: e[me]
            },
            connector: e[ne],
            error: s
        }), "ERR_TLS_CERT_ALTNAME_INVALID" === s.code) for(t(0 === e[D]); e[M] > 0 && e[F][e[q]].servername === e[S];){
            const a = e[F][e[q]++];
            la(e, a, s);
        }
        else $e(e, s);
        e.emit("connectionError", e[v], [
            e
        ], s);
    }
    aa(e);
}
function ea(e) {
    e[G] = 0, e.emit("drain", e[v], [
        e
    ]);
}
function aa(e, a) {
    2 !== e[Q] && (e[Q] = 2, function(e, a) {
        for(;;){
            if (e.destroyed) return void t(0 === e[M]);
            if (e[Be] && !e[O]) return e[Be](), void (e[Be] = null);
            const n = e[K];
            if (n && !n.destroyed && "h2" !== n.alpnProtocol) {
                if (0 === e[O] ? !n[x] && n.unref && (n.unref(), n[x] = !0) : n[x] && n.ref && (n.ref(), n[x] = !1), 0 === e[O]) n[B].timeoutType !== He && n[B].setTimeout(e[j], He);
                else if (e[D] > 0 && n[B].statusCode < 200 && n[B].timeoutType !== qe) {
                    const a = e[F][e[H]], t = null != a.headersTimeout ? a.headersTimeout : e[Z];
                    n[B].setTimeout(t, qe);
                }
            }
            if (e[N]) e[G] = 2;
            else if (2 === e[G]) {
                a ? (e[G] = 1, process.nextTick(ea, e)) : ea(e);
                continue;
            }
            if (0 === e[M]) return;
            if (e[D] >= (e[W] || 1)) return;
            const s = e[F][e[q]];
            if ("https:" === e[v].protocol && e[S] !== s.servername) {
                if (e[D] > 0) return;
                if (e[S] = s.servername, n && n.servername !== s.servername) return void i.destroy(n, new k("servername changed"));
            }
            if (e[L]) return;
            if (!n && !e[ue]) return void Ze(e);
            if (n.destroyed || n[U] || n[y] || n[b]) return;
            if (e[D] > 0 && !s.idempotent) return;
            if (e[D] > 0 && (s.upgrade || "CONNECT" === s.method)) return;
            if (e[D] > 0 && 0 !== i.bodyLength(s.body) && (i.isStream(s.body) || i.isAsyncIterable(s.body))) return;
            !s.aborted && ta(e, s) ? e[q]++ : e[F].splice(e[q], 1);
        }
    }(e, a), e[Q] = 0, e[H] > 256 && (e[F].splice(0, e[H]), e[q] -= e[H], e[H] = 0));
}
function na(e) {
    return "GET" !== e && "HEAD" !== e && "OPTIONS" !== e && "TRACE" !== e && "CONNECT" !== e;
}
function ta(e, a) {
    if ("h2" === e[pe]) return void function(e, a, n) {
        const { body: s, method: o, path: r, host: l, upgrade: m, expectContinue: p, signal: A, headers: g } = n;
        let T, h;
        T = "string" == typeof g ? d[he](g.trim()) : g;
        if (m) return la(e, n, new Error("Upgrade not supported for H2")), !1;
        try {
            n.onConnect((a)=>{
                n.aborted || n.completed || la(e, n, a || new u);
            });
        } catch (a) {
            la(e, n, a);
        }
        if (n.aborted) return !1;
        const _ = e[ge];
        if (T[Ee] = l || e[Ae], T[fe] = o, "CONNECT" === o) return a.ref(), h = a.request(T, {
            endStream: !1,
            signal: A
        }), h.id && !h.pending ? (n.onUpgrade(null, null, h), ++_.openStreams) : h.once("ready", ()=>{
            n.onUpgrade(null, null, h), ++_.openStreams;
        }), h.once("close", ()=>{
            _.openStreams -= 1, 0 === _.openStreams && a.unref();
        }), !0;
        T[Ce] = r, T[Ie] = "https";
        const E = "PUT" === o || "POST" === o || "PATCH" === o;
        s && "function" == typeof s.read && s.read(0);
        let f = i.bodyLength(s);
        null == f && (f = n.contentLength);
        0 !== f && E || (f = null);
        if (na(o) && f > 0 && null != n.contentLength && n.contentLength !== f) {
            if (e[ae]) return la(e, n, new c), !1;
            process.emitWarning(new c);
        }
        null != f && (t(s, "no body must not have content length"), T[ve] = `${f}`);
        a.ref();
        const C = "GET" === o || "HEAD" === o;
        p ? (T[ye] = "100-continue", h = a.request(T, {
            endStream: C,
            signal: A
        }), h.once("continue", I)) : (h = a.request(T, {
            endStream: C,
            signal: A
        }), I());
        return ++_.openStreams, h.once("response", (e)=>{
            const { [Se]: a, ...t } = e;
            !1 === n.onHeaders(Number(a), t, h.resume.bind(h), "") && h.pause();
        }), h.once("end", ()=>{
            n.onComplete([]);
        }), h.on("data", (e)=>{
            !1 === n.onData(e) && h.pause();
        }), h.once("close", ()=>{
            _.openStreams -= 1, 0 === _.openStreams && a.unref();
        }), h.once("error", function(a) {
            !e[ue] || e[ue].destroyed || this.closed || this.destroyed || (_.streams -= 1, i.destroy(h, a));
        }), h.once("frameError", (a, t)=>{
            const s = new k(`HTTP/2: "frameError" received - type ${a}, code ${t}`);
            la(e, n, s), !e[ue] || e[ue].destroyed || this.closed || this.destroyed || (_.streams -= 1, i.destroy(h, s));
        }), !0;
        function I() {
            s ? i.isBuffer(s) ? (t(f === s.byteLength, "buffer body must have content length"), h.cork(), h.write(s), h.uncork(), h.end(), n.onBodySent(s), n.onRequestSent()) : i.isBlobLike(s) ? "function" == typeof s.stream ? ra({
                client: e,
                request: n,
                contentLength: f,
                h2stream: h,
                expectsPayload: E,
                body: s.stream(),
                socket: e[K],
                header: ""
            }) : oa({
                body: s,
                client: e,
                request: n,
                contentLength: f,
                expectsPayload: E,
                h2stream: h,
                header: "",
                socket: e[K]
            }) : i.isStream(s) ? sa({
                body: s,
                client: e,
                request: n,
                contentLength: f,
                expectsPayload: E,
                socket: e[K],
                h2stream: h,
                header: ""
            }) : i.isIterable(s) ? ra({
                body: s,
                client: e,
                request: n,
                contentLength: f,
                expectsPayload: E,
                header: "",
                h2stream: h,
                socket: e[K]
            }) : t(!1) : n.onRequestSent();
        }
    }(e, e[ue], a);
    const { body: n, method: s, path: o, host: r, upgrade: l, headers: m, blocking: p, reset: A } = a, g = "PUT" === s || "POST" === s || "PATCH" === s;
    n && "function" == typeof n.read && n.read(0);
    const T = i.bodyLength(n);
    let h = T;
    if (null === h && (h = a.contentLength), 0 !== h || g || (h = null), na(s) && h > 0 && null !== a.contentLength && a.contentLength !== h) {
        if (e[ae]) return la(e, a, new c), !1;
        process.emitWarning(new c);
    }
    const _ = e[K];
    try {
        a.onConnect((n)=>{
            a.aborted || a.completed || (la(e, a, n || new u), i.destroy(_, new k("aborted")));
        });
    } catch (n) {
        la(e, a, n);
    }
    if (a.aborted) return !1;
    "HEAD" === s && (_[y] = !0), (l || "CONNECT" === s) && (_[y] = !0), null != A && (_[y] = A), e[se] && _[oe]++ >= e[se] && (_[y] = !0), p && (_[b] = !0);
    let E = `${s} ${o} HTTP/1.1\r\n`;
    return E += "string" == typeof r ? `host: ${r}\r\n` : e[Y], l ? E += `connection: upgrade\r\nupgrade: ${l}\r\n` : e[W] && !_[y] ? E += "connection: keep-alive\r\n" : E += "connection: close\r\n", m && (E += m), we.sendHeaders.hasSubscribers && we.sendHeaders.publish({
        request: a,
        headers: E,
        socket: _
    }), n && 0 !== T ? i.isBuffer(n) ? (t(h === n.byteLength, "buffer body must have content length"), _.cork(), _.write(`${E}content-length: ${h}\r\n\r\n`, "latin1"), _.write(n), _.uncork(), a.onBodySent(n), a.onRequestSent(), g || (_[y] = !0)) : i.isBlobLike(n) ? "function" == typeof n.stream ? ra({
        body: n.stream(),
        client: e,
        request: a,
        socket: _,
        contentLength: h,
        header: E,
        expectsPayload: g
    }) : oa({
        body: n,
        client: e,
        request: a,
        socket: _,
        contentLength: h,
        header: E,
        expectsPayload: g
    }) : i.isStream(n) ? sa({
        body: n,
        client: e,
        request: a,
        socket: _,
        contentLength: h,
        header: E,
        expectsPayload: g
    }) : i.isIterable(n) ? ra({
        body: n,
        client: e,
        request: a,
        socket: _,
        contentLength: h,
        header: E,
        expectsPayload: g
    }) : t(!1) : (0 === h ? _.write(`${E}content-length: 0\r\n\r\n`, "latin1") : (t(null === h, "no body must not have content length"), _.write(`${E}\r\n`, "latin1")), a.onRequestSent()), !0;
}
function sa({ h2stream: e, body: a, client: n, request: s, socket: o, contentLength: l, header: d, expectsPayload: m }) {
    if (t(0 !== l || 0 === n[D], "stream body cannot be pipelined"), "h2" === n[pe]) {
        const k = r(a, e, (n)=>{
            n ? (i.destroy(a, n), i.destroy(e, n)) : s.onRequestSent();
        });
        function _(e) {
            s.onBodySent(e);
        }
        return k.on("data", _), void k.once("end", ()=>{
            k.removeListener("data", _), i.destroy(k);
        });
    }
    let c = !1;
    const p = new ia({
        socket: o,
        request: s,
        contentLength: l,
        client: n,
        expectsPayload: m,
        header: d
    }), A = function(e) {
        if (!c) try {
            !p.write(e) && this.pause && this.pause();
        } catch (e) {
            i.destroy(this, e);
        }
    }, g = function() {
        c || a.resume && a.resume();
    }, T = function() {
        if (c) return;
        const e = new u;
        queueMicrotask(()=>h(e));
    }, h = function(e) {
        if (!c) {
            if (c = !0, t(o.destroyed || o[U] && n[D] <= 1), o.off("drain", g).off("error", h), a.removeListener("data", A).removeListener("end", h).removeListener("error", h).removeListener("close", T), !e) try {
                p.end();
            } catch (a) {
                e = a;
            }
            p.destroy(e), !e || "UND_ERR_INFO" === e.code && "reset" === e.message ? i.destroy(a) : i.destroy(a, e);
        }
    };
    a.on("data", A).on("end", h).on("error", h).on("close", T), a.resume && a.resume(), o.on("drain", g).on("error", h);
}
async function oa({ h2stream: e, body: a, client: n, request: s, socket: o, contentLength: r, header: l, expectsPayload: d }) {
    t(r === a.size, "blob body must have content length");
    const m = "h2" === n[pe];
    try {
        if (null != r && r !== a.size) throw new c;
        const t = Buffer.from(await a.arrayBuffer());
        m ? (e.cork(), e.write(t), e.uncork()) : (o.cork(), o.write(`${l}content-length: ${r}\r\n\r\n`, "latin1"), o.write(t), o.uncork()), s.onBodySent(t), s.onRequestSent(), d || (o[y] = !0), aa(n);
    } catch (a) {
        i.destroy(m ? e : o, a);
    }
}
async function ra({ h2stream: e, body: a, client: n, request: s, socket: o, contentLength: r, header: i, expectsPayload: l }) {
    t(0 !== r || 0 === n[D], "iterator body cannot be pipelined");
    let d = null;
    function m() {
        if (d) {
            const e = d;
            d = null, e();
        }
    }
    const c = ()=>new Promise((e, a)=>{
            t(null === d), o[J] ? a(o[J]) : d = e;
        });
    if ("h2" === n[pe]) {
        e.on("close", m).on("drain", m);
        try {
            for await (const n of a){
                if (o[J]) throw o[J];
                const a = e.write(n);
                s.onBodySent(n), a || await c();
            }
        } catch (a) {
            e.destroy(a);
        } finally{
            s.onRequestSent(), e.end(), e.off("close", m).off("drain", m);
        }
        return;
    }
    o.on("close", m).on("drain", m);
    const p = new ia({
        socket: o,
        request: s,
        contentLength: r,
        client: n,
        expectsPayload: l,
        header: i
    });
    try {
        for await (const e of a){
            if (o[J]) throw o[J];
            p.write(e) || await c();
        }
        p.end();
    } catch (e) {
        p.destroy(e);
    } finally{
        o.off("close", m).off("drain", m);
    }
}
class ia {
    constructor({ socket: e, request: a, contentLength: n, client: t, expectsPayload: s, header: o }){
        this.socket = e, this.request = a, this.contentLength = n, this.client = t, this.bytesWritten = 0, this.expectsPayload = s, this.header = o, e[U] = !0;
    }
    write(e) {
        const { socket: a, request: n, contentLength: t, client: s, bytesWritten: o, expectsPayload: r, header: i } = this;
        if (a[J]) throw a[J];
        if (a.destroyed) return !1;
        const l = Buffer.byteLength(e);
        if (!l) return !0;
        if (null !== t && o + l > t) {
            if (s[ae]) throw new c;
            process.emitWarning(new c);
        }
        a.cork(), 0 === o && (r || (a[y] = !0), null === t ? a.write(`${i}transfer-encoding: chunked\r\n`, "latin1") : a.write(`${i}content-length: ${t}\r\n\r\n`, "latin1")), null === t && a.write(`\r\n${l.toString(16)}\r\n`, "latin1"), this.bytesWritten += l;
        const d = a.write(e);
        return a.uncork(), n.onBodySent(e), d || a[B].timeout && a[B].timeoutType === qe && a[B].timeout.refresh && a[B].timeout.refresh(), d;
    }
    end() {
        const { socket: e, contentLength: a, client: n, bytesWritten: t, expectsPayload: s, header: o, request: r } = this;
        if (r.onRequestSent(), e[U] = !1, e[J]) throw e[J];
        if (!e.destroyed) {
            if (0 === t ? s ? e.write(`${o}content-length: 0\r\n\r\n`, "latin1") : e.write(`${o}\r\n`, "latin1") : null === a && e.write("\r\n0\r\n\r\n", "latin1"), null !== a && t !== a) {
                if (n[ae]) throw new c;
                process.emitWarning(new c);
            }
            e[B].timeout && e[B].timeoutType === qe && e[B].timeout.refresh && e[B].timeout.refresh(), aa(n);
        }
    }
    destroy(e) {
        const { socket: a, client: n } = this;
        a[U] = !1, e && (t(n[D] <= 1, "pipeline should only contain this request"), i.destroy(a, e));
    }
}
function la(e, a, n) {
    try {
        a.onError(n), t(a.aborted);
    } catch (n) {
        e.emit("error", n);
    }
}
module.exports = class extends m {
    constructor(e, { interceptors: a, maxHeaderSize: n, headersTimeout: t, socketTimeout: r, requestTimeout: l, connectTimeout: d, bodyTimeout: m, idleTimeout: c, keepAlive: p, keepAliveTimeout: u, maxKeepAliveTimeout: g, keepAliveMaxTimeout: T, keepAliveTimeoutThreshold: h, socketPath: k, pipelining: _, tls: E, strictContentLength: f, maxCachedSessions: C, maxRedirections: y, connect: R, maxRequestsPerClient: N, localAddress: B, maxResponseSize: w, autoSelectFamily: b, autoSelectFamilyAttemptTimeout: D, allowH2: M, maxConcurrentStreams: O } = {}){
        if (super(), void 0 !== p) throw new A("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== r) throw new A("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== l) throw new A("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== c) throw new A("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== g) throw new A("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != n && !Number.isFinite(n)) throw new A("invalid maxHeaderSize");
        if (null != k && "string" != typeof k) throw new A("invalid socketPath");
        if (null != d && (!Number.isFinite(d) || d < 0)) throw new A("invalid connectTimeout");
        if (null != u && (!Number.isFinite(u) || u <= 0)) throw new A("invalid keepAliveTimeout");
        if (null != T && (!Number.isFinite(T) || T <= 0)) throw new A("invalid keepAliveMaxTimeout");
        if (null != h && !Number.isFinite(h)) throw new A("invalid keepAliveTimeoutThreshold");
        if (null != t && (!Number.isInteger(t) || t < 0)) throw new A("headersTimeout must be a positive integer or zero");
        if (null != m && (!Number.isInteger(m) || m < 0)) throw new A("bodyTimeout must be a positive integer or zero");
        if (null != R && "function" != typeof R && "object" != typeof R) throw new A("connect must be a function or an object");
        if (null != y && (!Number.isInteger(y) || y < 0)) throw new A("maxRedirections must be a positive number");
        if (null != N && (!Number.isInteger(N) || N < 0)) throw new A("maxRequestsPerClient must be a positive number");
        if (null != B && ("string" != typeof B || 0 === s.isIP(B))) throw new A("localAddress must be valid string IP address");
        if (null != w && (!Number.isInteger(w) || w < -1)) throw new A("maxResponseSize must be a positive number");
        if (null != D && (!Number.isInteger(D) || D < -1)) throw new A("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != M && "boolean" != typeof M) throw new A("allowH2 must be a valid boolean value");
        if (null != O && ("number" != typeof O || O < 1)) throw new A("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof R && (R = I({
            ...E,
            maxCachedSessions: C,
            allowH2: M,
            socketPath: k,
            timeout: d,
            ...i.nodeHasAutoSelectFamily && b ? {
                autoSelectFamily: b,
                autoSelectFamilyAttemptTimeout: D
            } : void 0,
            ...R
        })), this[de] = a && a.Client && Array.isArray(a.Client) ? a.Client : [
            Ue({
                maxRedirections: y
            })
        ], this[v] = i.parseOrigin(e), this[ne] = R, this[K] = null, this[W] = null != _ ? _ : 1, this[$] = n || o.maxHeaderSize, this[V] = u ?? 4e3, this[X] = T ?? 6e5, this[z] = h ?? 1e3, this[j] = this[V], this[S] = null, this[me] = null != B ? B : null, this[Q] = 0, this[G] = 0, this[Y] = `host: ${this[v].hostname}${this[v].port ? `:${this[v].port}` : ""}\r\n`, this[ee] = null != m ? m : 3e5, this[Z] = null != t ? t : 3e5, this[ae] = f ?? !0, this[te] = y, this[se] = N, this[Be] = null, this[ce] = w > -1 ? w : -1, this[pe] = "h1", this[ue] = null, this[ge] = M ? {
            openStreams: 0,
            maxConcurrentStreams: null != O ? O : 100
        } : null, this[Ae] = `${this[v].hostname}${this[v].port ? `:${this[v].port}` : ""}`, this[F] = [], this[H] = 0, this[q] = 0;
    }
    get pipelining() {
        return this[W];
    }
    set pipelining(e) {
        this[W] = e, aa(this, !0);
    }
    get [M]() {
        return this[F].length - this[q];
    }
    get [D]() {
        return this[q] - this[H];
    }
    get [O]() {
        return this[F].length - this[H];
    }
    get [P]() {
        return !!this[K] && !this[L] && !this[K].destroyed;
    }
    get [N]() {
        const e = this[K];
        return e && (e[y] || e[U] || e[b]) || this[O] >= (this[W] || 1) || this[M] > 0;
    }
    [w](e) {
        Ze(this), this.once("connect", e);
    }
    [le](e, a) {
        const n = e.origin || this[v].origin, t = "h2" === this[pe] ? d[Te](n, e, a) : d[ke](n, e, a);
        return this[F].push(t), this[Q] || (null == i.bodyLength(t.body) && i.isIterable(t.body) ? (this[Q] = 1, process.nextTick(aa, this)) : aa(this, !0)), this[Q] && 2 !== this[G] && this[N] && (this[G] = 2), this[G] < 2;
    }
    async [re]() {
        return new Promise((e)=>{
            this[O] ? this[Be] = e : e(null);
        });
    }
    async [ie](e) {
        return new Promise((a)=>{
            const n = this[F].splice(this[q]);
            for(let a = 0; a < n.length; a++){
                la(this, n[a], e);
            }
            const t = ()=>{
                this[Be] && (this[Be](), this[Be] = null), a();
            };
            null != this[ue] && (i.destroy(this[ue], e), this[ue] = null, this[ge] = null), this[K] ? i.destroy(this[K].on("close", t), e) : queueMicrotask(t), aa(this);
        });
    }
};
