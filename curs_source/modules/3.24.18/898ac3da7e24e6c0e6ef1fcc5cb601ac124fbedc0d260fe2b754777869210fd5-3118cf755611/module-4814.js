"use strict";
const t = require("./module-2613.js"), s = require("./module-9278.js"), o = require("./module-8611.js"), { pipeline: r } = require("./module-2203.js"), i = require("./module-9361.js"), A = require("./module-3891.js"), l = require("./module-3308.js"), c = require("./module-9792.js"), { RequestContentLengthMismatchError: m, ResponseContentLengthMismatchError: d, InvalidArgumentError: g, RequestAbortedError: u, HeadersTimeoutError: E, HeadersOverflowError: p, SocketError: T, InformationalError: k, BodyTimeoutError: I, HTTPParserError: h, ResponseExceededMaxSizeError: _, ClientDestroyedError: C } = require("./module-7902.js"), f = require("./module-3991.js"), { kUrl: B, kReset: Q, kServerName: y, kClient: R, kBusy: N, kParser: v, kConnect: S, kBlocking: D, kResuming: w, kRunning: b, kPending: M, kSize: F, kWriting: O, kQueue: U, kConnected: L, kConnecting: P, kNeedDrain: x, kNoRef: G, kKeepAliveDefaultTimeout: Y, kHostHeader: J, kPendingIdx: V, kRunningIdx: q, kError: H, kPipelining: W, kSocket: K, kKeepAliveTimeoutValue: j, kMaxHeadersSize: X, kKeepAliveMaxTimeout: Z, kKeepAliveTimeoutThreshold: z, kHeadersTimeout: $, kBodyTimeout: ee, kStrictContentLength: ne, kConnector: ae, kMaxRedirections: te, kMaxRequests: se, kCounter: oe, kClose: re, kDestroy: ie, kDispatch: Ae, kInterceptors: le, kLocalAddress: ce, kMaxResponseSize: me, kHTTPConnVersion: de, kHost: ge, kHTTP2Session: ue, kHTTP2SessionState: Ee, kHTTP2BuildRequest: pe, kHTTP2CopyHeaders: Te, kHTTP1BuildRequest: ke } = require("./module-8832.js");
let Ie;
try {
    Ie = require("./module-5675.js");
} catch  {
    Ie = {
        constants: {}
    };
}
const { constants: { HTTP2_HEADER_AUTHORITY: he, HTTP2_HEADER_METHOD: _e, HTTP2_HEADER_PATH: Ce, HTTP2_HEADER_SCHEME: fe, HTTP2_HEADER_CONTENT_LENGTH: Be, HTTP2_HEADER_EXPECT: Qe, HTTP2_HEADER_STATUS: ye } } = Ie;
let Re = !1;
const Ne = Buffer[Symbol.species], ve = Symbol("kClosedResolve"), Se = {};
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
function De(e) {
    t("ERR_TLS_CERT_ALTNAME_INVALID" !== e.code), this[K][H] = e, Xe(this[R], e);
}
function we(e, n, a) {
    const t = new k(`HTTP/2: "frameError" received - type ${e}, code ${n}`);
    0 === a && (this[K][H] = t, Xe(this[R], t));
}
function be() {
    i.destroy(this, new T("other side closed")), i.destroy(this[K], new T("other side closed"));
}
function Me(e) {
    const n = this[R], a = new k(`HTTP/2: "GOAWAY" frame received with code ${e}`);
    if (n[K] = null, n[ue] = null, n.destroyed) {
        t(0 === this[M]);
        const e = n[U].splice(n[q]);
        for(let n = 0; n < e.length; n++){
            ln(this, e[n], a);
        }
    } else if (n[b] > 0) {
        const e = n[U][n[q]];
        n[U][n[q]++] = null, ln(n, e, a);
    }
    n[V] = n[q], t(0 === n[b]), n.emit("disconnect", n[B], [
        n
    ], a), nn(n);
}
const Fe = require("./module-6747.js"), Oe = require("./module-858.js"), Ue = Buffer.alloc(0);
let Le = null, Pe = async function() {
    const e = process.env.JEST_WORKER_ID ? require("./module-2789.js") : void 0;
    let n;
    try {
        n = await WebAssembly.compile(Buffer.from(require("./module-871.js"), "base64"));
    } catch (t) {
        n = await WebAssembly.compile(Buffer.from(e || require("./module-2789.js"), "base64"));
    }
    return await WebAssembly.instantiate(n, {
        env: {
            wasm_on_url: (e, n, a)=>0,
            wasm_on_status: (e, n, a)=>{
                t.strictEqual(xe.ptr, e);
                const s = n - Je + Ge.byteOffset;
                return xe.onStatus(new Ne(Ge.buffer, s, a)) || 0;
            },
            wasm_on_message_begin: (e)=>(t.strictEqual(xe.ptr, e), xe.onMessageBegin() || 0),
            wasm_on_header_field: (e, n, a)=>{
                t.strictEqual(xe.ptr, e);
                const s = n - Je + Ge.byteOffset;
                return xe.onHeaderField(new Ne(Ge.buffer, s, a)) || 0;
            },
            wasm_on_header_value: (e, n, a)=>{
                t.strictEqual(xe.ptr, e);
                const s = n - Je + Ge.byteOffset;
                return xe.onHeaderValue(new Ne(Ge.buffer, s, a)) || 0;
            },
            wasm_on_headers_complete: (e, n, a, s)=>(t.strictEqual(xe.ptr, e), xe.onHeadersComplete(n, Boolean(a), Boolean(s)) || 0),
            wasm_on_body: (e, n, a)=>{
                t.strictEqual(xe.ptr, e);
                const s = n - Je + Ge.byteOffset;
                return xe.onBody(new Ne(Ge.buffer, s, a)) || 0;
            },
            wasm_on_message_complete: (e)=>(t.strictEqual(xe.ptr, e), xe.onMessageComplete() || 0)
        }
    });
}();
Pe.catch();
let xe = null, Ge = null, Ye = 0, Je = null;
const Ve = 1, qe = 3;
class He {
    constructor(e, n, { exports: a }){
        t(Number.isFinite(e[X]) && e[X] > 0), this.llhttp = a, this.ptr = this.llhttp.llhttp_alloc(Fe.TYPE.RESPONSE), this.client = e, this.socket = n, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = e[X], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e[me];
    }
    setTimeout(e, n) {
        this.timeoutType = n, e !== this.timeoutValue ? (A.clearTimeout(this.timeout), e ? (this.timeout = A.setTimeout(We, e, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e) : this.timeout && this.timeout.refresh && this.timeout.refresh();
    }
    resume() {
        !this.socket.destroyed && this.paused && (t(null != this.ptr), t(null == xe), this.llhttp.llhttp_resume(this.ptr), t(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || Ue), this.readMore());
    }
    readMore() {
        for(; !this.paused && this.ptr;){
            const e = this.socket.read();
            if (null === e) break;
            this.execute(e);
        }
    }
    execute(e) {
        t(null != this.ptr), t(null == xe), t(!this.paused);
        const { socket: n, llhttp: a } = this;
        e.length > Ye && (Je && a.free(Je), Ye = 4096 * Math.ceil(e.length / 4096), Je = a.malloc(Ye)), new Uint8Array(a.memory.buffer, Je, Ye).set(e);
        try {
            let t;
            try {
                Ge = e, xe = this, t = a.llhttp_execute(this.ptr, Je, e.length);
            } catch (e) {
                throw e;
            } finally{
                xe = null, Ge = null;
            }
            const s = a.llhttp_get_error_pos(this.ptr) - Je;
            if (t === Fe.ERROR.PAUSED_UPGRADE) this.onUpgrade(e.slice(s));
            else if (t === Fe.ERROR.PAUSED) this.paused = !0, n.unshift(e.slice(s));
            else if (t !== Fe.ERROR.OK) {
                const n = a.llhttp_get_error_reason(this.ptr);
                let o = "";
                if (n) {
                    const e = new Uint8Array(a.memory.buffer, n).indexOf(0);
                    o = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(a.memory.buffer, n, e).toString() + ")";
                }
                throw new h(o, Fe.ERROR[t], e.slice(s));
            }
        } catch (e) {
            i.destroy(n, e);
        }
    }
    destroy() {
        t(null != this.ptr), t(null == xe), this.llhttp.llhttp_free(this.ptr), this.ptr = null, A.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
    }
    onStatus(e) {
        this.statusText = e.toString();
    }
    onMessageBegin() {
        const { socket: e, client: n } = this;
        if (e.destroyed) return -1;
        return n[U][n[q]] ? void 0 : -1;
    }
    onHeaderField(e) {
        const n = this.headers.length;
        1 & n ? this.headers[n - 1] = Buffer.concat([
            this.headers[n - 1],
            e
        ]) : this.headers.push(e), this.trackHeader(e.length);
    }
    onHeaderValue(e) {
        let n = this.headers.length;
        1 & ~n ? this.headers[n - 1] = Buffer.concat([
            this.headers[n - 1],
            e
        ]) : (this.headers.push(e), n += 1);
        const a = this.headers[n - 2];
        10 === a.length && "keep-alive" === a.toString().toLowerCase() ? this.keepAlive += e.toString() : 10 === a.length && "connection" === a.toString().toLowerCase() ? this.connection += e.toString() : 14 === a.length && "content-length" === a.toString().toLowerCase() && (this.contentLength += e.toString()), this.trackHeader(e.length);
    }
    trackHeader(e) {
        this.headersSize += e, this.headersSize >= this.headersMaxSize && i.destroy(this.socket, new p);
    }
    onUpgrade(e) {
        const { upgrade: n, client: a, socket: s, headers: o, statusCode: r } = this;
        t(n);
        const A = a[U][a[q]];
        t(A), t(!s.destroyed), t(s === a[K]), t(!this.paused), t(A.upgrade || "CONNECT" === A.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, t(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, s.unshift(e), s[v].destroy(), s[v] = null, s[R] = null, s[H] = null, s.removeListener("error", je).removeListener("readable", Ke).removeListener("end", Ze).removeListener("close", ze), a[K] = null, a[U][a[q]++] = null, a.emit("disconnect", a[B], [
            a
        ], new k("upgrade"));
        try {
            A.onUpgrade(r, o, s);
        } catch (e) {
            i.destroy(s, e);
        }
        nn(a);
    }
    onHeadersComplete(e, n, a) {
        const { client: s, socket: o, headers: r, statusText: A } = this;
        if (o.destroyed) return -1;
        const l = s[U][s[q]];
        if (!l) return -1;
        if (t(!this.upgrade), t(this.statusCode < 200), 100 === e) return i.destroy(o, new T("bad response", i.getSocketInfo(o))), -1;
        if (n && !l.upgrade) return i.destroy(o, new T("bad upgrade", i.getSocketInfo(o))), -1;
        if (t.strictEqual(this.timeoutType, Ve), this.statusCode = e, this.shouldKeepAlive = a || "HEAD" === l.method && !o[Q] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
            const e = null != l.bodyTimeout ? l.bodyTimeout : s[ee];
            this.setTimeout(e, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === l.method) return t(1 === s[b]), this.upgrade = !0, 2;
        if (n) return t(1 === s[b]), this.upgrade = !0, 2;
        if (t(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s[W]) {
            const e = this.keepAlive ? i.parseKeepAliveTimeout(this.keepAlive) : null;
            if (null != e) {
                const n = Math.min(e - s[z], s[Z]);
                n <= 0 ? o[Q] = !0 : s[j] = n;
            } else s[j] = s[Y];
        } else o[Q] = !0;
        const c = !1 === l.onHeaders(e, r, this.resume, A);
        return l.aborted ? -1 : "HEAD" === l.method || e < 200 ? 1 : (o[D] && (o[D] = !1, nn(s)), c ? Fe.ERROR.PAUSED : 0);
    }
    onBody(e) {
        const { client: n, socket: a, statusCode: s, maxResponseSize: o } = this;
        if (a.destroyed) return -1;
        const r = n[U][n[q]];
        return t(r), t.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), t(s >= 200), o > -1 && this.bytesRead + e.length > o ? (i.destroy(a, new _), -1) : (this.bytesRead += e.length, !1 === r.onData(e) ? Fe.ERROR.PAUSED : void 0);
    }
    onMessageComplete() {
        const { client: e, socket: n, statusCode: a, upgrade: s, headers: o, contentLength: r, bytesRead: A, shouldKeepAlive: l } = this;
        if (n.destroyed && (!a || l)) return -1;
        if (s) return;
        const c = e[U][e[q]];
        return t(c), t(a >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", t(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, a < 200 ? void 0 : "HEAD" !== c.method && r && A !== parseInt(r, 10) ? (i.destroy(n, new d), -1) : (c.onComplete(o), e[U][e[q]++] = null, n[O] ? (t.strictEqual(e[b], 0), i.destroy(n, new k("reset")), Fe.ERROR.PAUSED) : l ? n[Q] && 0 === e[b] ? (i.destroy(n, new k("reset")), Fe.ERROR.PAUSED) : void (1 === e[W] ? setImmediate(nn, e) : nn(e)) : (i.destroy(n, new k("reset")), Fe.ERROR.PAUSED));
    }
}
function We(e) {
    const { socket: n, timeoutType: a, client: s } = e;
    a === Ve ? (!n[O] || n.writableNeedDrain || s[b] > 1) && (t(!e.paused, "cannot be paused while waiting for headers"), i.destroy(n, new E)) : 2 === a ? e.paused || i.destroy(n, new I) : a === qe && (t(0 === s[b] && s[j]), i.destroy(n, new k("socket idle timeout")));
}
function Ke() {
    const { [v]: e } = this;
    e && e.readMore();
}
function je(e) {
    const { [R]: n, [v]: a } = this;
    t("ERR_TLS_CERT_ALTNAME_INVALID" !== e.code), "h2" === n[de] || "ECONNRESET" !== e.code || !a.statusCode || a.shouldKeepAlive ? (this[H] = e, Xe(this[R], e)) : a.onMessageComplete();
}
function Xe(e, n) {
    if (0 === e[b] && "UND_ERR_INFO" !== n.code && "UND_ERR_SOCKET" !== n.code) {
        t(e[V] === e[q]);
        const a = e[U].splice(e[q]);
        for(let t = 0; t < a.length; t++){
            ln(e, a[t], n);
        }
        t(0 === e[F]);
    }
}
function Ze() {
    const { [v]: e, [R]: n } = this;
    "h2" === n[de] || !e.statusCode || e.shouldKeepAlive ? i.destroy(this, new T("other side closed", i.getSocketInfo(this))) : e.onMessageComplete();
}
function ze() {
    const { [R]: e, [v]: n } = this;
    "h1" === e[de] && n && (this[H] || !n.statusCode || n.shouldKeepAlive || n.onMessageComplete(), this[v].destroy(), this[v] = null);
    const a = this[H] || new T("closed", i.getSocketInfo(this));
    if (e[K] = null, e.destroyed) {
        t(0 === e[M]);
        const n = e[U].splice(e[q]);
        for(let t = 0; t < n.length; t++){
            ln(e, n[t], a);
        }
    } else if (e[b] > 0 && "UND_ERR_INFO" !== a.code) {
        const n = e[U][e[q]];
        e[U][e[q]++] = null, ln(e, n, a);
    }
    e[V] = e[q], t(0 === e[b]), e.emit("disconnect", e[B], [
        e
    ], a), nn(e);
}
async function $e(e) {
    t(!e[P]), t(!e[K]);
    let { host: n, hostname: a, protocol: o, port: r } = e[B];
    if ("[" === a[0]) {
        const e = a.indexOf("]");
        t(-1 !== e);
        const n = a.substring(1, e);
        t(s.isIP(n)), a = n;
    }
    e[P] = !0, Se.beforeConnect.hasSubscribers && Se.beforeConnect.publish({
        connectParams: {
            host: n,
            hostname: a,
            protocol: o,
            port: r,
            servername: e[y],
            localAddress: e[ce]
        },
        connector: e[ae]
    });
    try {
        const s = await new Promise((t, s)=>{
            e[ae]({
                host: n,
                hostname: a,
                protocol: o,
                port: r,
                servername: e[y],
                localAddress: e[ce]
            }, (e, n)=>{
                e ? s(e) : t(n);
            });
        });
        if (e.destroyed) return void i.destroy(s.on("error", ()=>{}), new C);
        e[P] = !1, t(s);
        if ("h2" === s.alpnProtocol) {
            Re || (Re = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
                code: "UNDICI-H2"
            }));
            const n = Ie.connect(e[B], {
                createConnection: ()=>s,
                peerMaxConcurrentStreams: e[Ee].maxConcurrentStreams
            });
            e[de] = "h2", n[R] = e, n[K] = s, n.on("error", De), n.on("frameError", we), n.on("end", be), n.on("goaway", Me), n.on("close", ze), n.unref(), e[ue] = n, s[ue] = n;
        } else Le || (Le = await Pe, Pe = null), s[G] = !1, s[O] = !1, s[Q] = !1, s[D] = !1, s[v] = new He(e, s, Le);
        s[oe] = 0, s[se] = e[se], s[R] = e, s[H] = null, s.on("error", je).on("readable", Ke).on("end", Ze).on("close", ze), e[K] = s, Se.connected.hasSubscribers && Se.connected.publish({
            connectParams: {
                host: n,
                hostname: a,
                protocol: o,
                port: r,
                servername: e[y],
                localAddress: e[ce]
            },
            connector: e[ae],
            socket: s
        }), e.emit("connect", e[B], [
            e
        ]);
    } catch (s) {
        if (e.destroyed) return;
        if (e[P] = !1, Se.connectError.hasSubscribers && Se.connectError.publish({
            connectParams: {
                host: n,
                hostname: a,
                protocol: o,
                port: r,
                servername: e[y],
                localAddress: e[ce]
            },
            connector: e[ae],
            error: s
        }), "ERR_TLS_CERT_ALTNAME_INVALID" === s.code) for(t(0 === e[b]); e[M] > 0 && e[U][e[V]].servername === e[y];){
            const n = e[U][e[V]++];
            ln(e, n, s);
        }
        else Xe(e, s);
        e.emit("connectionError", e[B], [
            e
        ], s);
    }
    nn(e);
}
function en(e) {
    e[x] = 0, e.emit("drain", e[B], [
        e
    ]);
}
function nn(e, n) {
    2 !== e[w] && (e[w] = 2, function(e, n) {
        for(;;){
            if (e.destroyed) return void t(0 === e[M]);
            if (e[ve] && !e[F]) return e[ve](), void (e[ve] = null);
            const a = e[K];
            if (a && !a.destroyed && "h2" !== a.alpnProtocol) {
                if (0 === e[F] ? !a[G] && a.unref && (a.unref(), a[G] = !0) : a[G] && a.ref && (a.ref(), a[G] = !1), 0 === e[F]) a[v].timeoutType !== qe && a[v].setTimeout(e[j], qe);
                else if (e[b] > 0 && a[v].statusCode < 200 && a[v].timeoutType !== Ve) {
                    const n = e[U][e[q]], t = null != n.headersTimeout ? n.headersTimeout : e[$];
                    a[v].setTimeout(t, Ve);
                }
            }
            if (e[N]) e[x] = 2;
            else if (2 === e[x]) {
                n ? (e[x] = 1, process.nextTick(en, e)) : en(e);
                continue;
            }
            if (0 === e[M]) return;
            if (e[b] >= (e[W] || 1)) return;
            const s = e[U][e[V]];
            if ("https:" === e[B].protocol && e[y] !== s.servername) {
                if (e[b] > 0) return;
                if (e[y] = s.servername, a && a.servername !== s.servername) return void i.destroy(a, new k("servername changed"));
            }
            if (e[P]) return;
            if (!a && !e[ue]) return void $e(e);
            if (a.destroyed || a[O] || a[Q] || a[D]) return;
            if (e[b] > 0 && !s.idempotent) return;
            if (e[b] > 0 && (s.upgrade || "CONNECT" === s.method)) return;
            if (e[b] > 0 && 0 !== i.bodyLength(s.body) && (i.isStream(s.body) || i.isAsyncIterable(s.body))) return;
            !s.aborted && tn(e, s) ? e[V]++ : e[U].splice(e[V], 1);
        }
    }(e, n), e[w] = 0, e[q] > 256 && (e[U].splice(0, e[q]), e[V] -= e[q], e[q] = 0));
}
function an(e) {
    return "GET" !== e && "HEAD" !== e && "OPTIONS" !== e && "TRACE" !== e && "CONNECT" !== e;
}
function tn(e, n) {
    if ("h2" === e[de]) return void function(e, n, a) {
        const { body: s, method: o, path: r, host: A, upgrade: c, expectContinue: d, signal: g, headers: E } = a;
        let p, T;
        p = "string" == typeof E ? l[Te](E.trim()) : E;
        if (c) return ln(e, a, new Error("Upgrade not supported for H2")), !1;
        try {
            a.onConnect((n)=>{
                a.aborted || a.completed || ln(e, a, n || new u);
            });
        } catch (n) {
            ln(e, a, n);
        }
        if (a.aborted) return !1;
        const I = e[Ee];
        if (p[he] = A || e[ge], p[_e] = o, "CONNECT" === o) return n.ref(), T = n.request(p, {
            endStream: !1,
            signal: g
        }), T.id && !T.pending ? (a.onUpgrade(null, null, T), ++I.openStreams) : T.once("ready", ()=>{
            a.onUpgrade(null, null, T), ++I.openStreams;
        }), T.once("close", ()=>{
            I.openStreams -= 1, 0 === I.openStreams && n.unref();
        }), !0;
        p[Ce] = r, p[fe] = "https";
        const h = "PUT" === o || "POST" === o || "PATCH" === o;
        s && "function" == typeof s.read && s.read(0);
        let _ = i.bodyLength(s);
        null == _ && (_ = a.contentLength);
        0 !== _ && h || (_ = null);
        if (an(o) && _ > 0 && null != a.contentLength && a.contentLength !== _) {
            if (e[ne]) return ln(e, a, new m), !1;
            process.emitWarning(new m);
        }
        null != _ && (t(s, "no body must not have content length"), p[Be] = `${_}`);
        n.ref();
        const C = "GET" === o || "HEAD" === o;
        d ? (p[Qe] = "100-continue", T = n.request(p, {
            endStream: C,
            signal: g
        }), T.once("continue", f)) : (T = n.request(p, {
            endStream: C,
            signal: g
        }), f());
        return ++I.openStreams, T.once("response", (e)=>{
            const { [ye]: n, ...t } = e;
            !1 === a.onHeaders(Number(n), t, T.resume.bind(T), "") && T.pause();
        }), T.once("end", ()=>{
            a.onComplete([]);
        }), T.on("data", (e)=>{
            !1 === a.onData(e) && T.pause();
        }), T.once("close", ()=>{
            I.openStreams -= 1, 0 === I.openStreams && n.unref();
        }), T.once("error", function(n) {
            !e[ue] || e[ue].destroyed || this.closed || this.destroyed || (I.streams -= 1, i.destroy(T, n));
        }), T.once("frameError", (n, t)=>{
            const s = new k(`HTTP/2: "frameError" received - type ${n}, code ${t}`);
            ln(e, a, s), !e[ue] || e[ue].destroyed || this.closed || this.destroyed || (I.streams -= 1, i.destroy(T, s));
        }), !0;
        function f() {
            s ? i.isBuffer(s) ? (t(_ === s.byteLength, "buffer body must have content length"), T.cork(), T.write(s), T.uncork(), T.end(), a.onBodySent(s), a.onRequestSent()) : i.isBlobLike(s) ? "function" == typeof s.stream ? rn({
                client: e,
                request: a,
                contentLength: _,
                h2stream: T,
                expectsPayload: h,
                body: s.stream(),
                socket: e[K],
                header: ""
            }) : on({
                body: s,
                client: e,
                request: a,
                contentLength: _,
                expectsPayload: h,
                h2stream: T,
                header: "",
                socket: e[K]
            }) : i.isStream(s) ? sn({
                body: s,
                client: e,
                request: a,
                contentLength: _,
                expectsPayload: h,
                socket: e[K],
                h2stream: T,
                header: ""
            }) : i.isIterable(s) ? rn({
                body: s,
                client: e,
                request: a,
                contentLength: _,
                expectsPayload: h,
                header: "",
                h2stream: T,
                socket: e[K]
            }) : t(!1) : a.onRequestSent();
        }
    }(e, e[ue], n);
    const { body: a, method: s, path: o, host: r, upgrade: A, headers: c, blocking: d, reset: g } = n, E = "PUT" === s || "POST" === s || "PATCH" === s;
    a && "function" == typeof a.read && a.read(0);
    const p = i.bodyLength(a);
    let T = p;
    if (null === T && (T = n.contentLength), 0 !== T || E || (T = null), an(s) && T > 0 && null !== n.contentLength && n.contentLength !== T) {
        if (e[ne]) return ln(e, n, new m), !1;
        process.emitWarning(new m);
    }
    const I = e[K];
    try {
        n.onConnect((a)=>{
            n.aborted || n.completed || (ln(e, n, a || new u), i.destroy(I, new k("aborted")));
        });
    } catch (a) {
        ln(e, n, a);
    }
    if (n.aborted) return !1;
    "HEAD" === s && (I[Q] = !0), (A || "CONNECT" === s) && (I[Q] = !0), null != g && (I[Q] = g), e[se] && I[oe]++ >= e[se] && (I[Q] = !0), d && (I[D] = !0);
    let h = `${s} ${o} HTTP/1.1\r\n`;
    return h += "string" == typeof r ? `host: ${r}\r\n` : e[J], A ? h += `connection: upgrade\r\nupgrade: ${A}\r\n` : e[W] && !I[Q] ? h += "connection: keep-alive\r\n" : h += "connection: close\r\n", c && (h += c), Se.sendHeaders.hasSubscribers && Se.sendHeaders.publish({
        request: n,
        headers: h,
        socket: I
    }), a && 0 !== p ? i.isBuffer(a) ? (t(T === a.byteLength, "buffer body must have content length"), I.cork(), I.write(`${h}content-length: ${T}\r\n\r\n`, "latin1"), I.write(a), I.uncork(), n.onBodySent(a), n.onRequestSent(), E || (I[Q] = !0)) : i.isBlobLike(a) ? "function" == typeof a.stream ? rn({
        body: a.stream(),
        client: e,
        request: n,
        socket: I,
        contentLength: T,
        header: h,
        expectsPayload: E
    }) : on({
        body: a,
        client: e,
        request: n,
        socket: I,
        contentLength: T,
        header: h,
        expectsPayload: E
    }) : i.isStream(a) ? sn({
        body: a,
        client: e,
        request: n,
        socket: I,
        contentLength: T,
        header: h,
        expectsPayload: E
    }) : i.isIterable(a) ? rn({
        body: a,
        client: e,
        request: n,
        socket: I,
        contentLength: T,
        header: h,
        expectsPayload: E
    }) : t(!1) : (0 === T ? I.write(`${h}content-length: 0\r\n\r\n`, "latin1") : (t(null === T, "no body must not have content length"), I.write(`${h}\r\n`, "latin1")), n.onRequestSent()), !0;
}
function sn({ h2stream: e, body: n, client: a, request: s, socket: o, contentLength: A, header: l, expectsPayload: c }) {
    if (t(0 !== A || 0 === a[b], "stream body cannot be pipelined"), "h2" === a[de]) {
        const k = r(n, e, (a)=>{
            a ? (i.destroy(n, a), i.destroy(e, a)) : s.onRequestSent();
        });
        function I(e) {
            s.onBodySent(e);
        }
        return k.on("data", I), void k.once("end", ()=>{
            k.removeListener("data", I), i.destroy(k);
        });
    }
    let m = !1;
    const d = new An({
        socket: o,
        request: s,
        contentLength: A,
        client: a,
        expectsPayload: c,
        header: l
    }), g = function(e) {
        if (!m) try {
            !d.write(e) && this.pause && this.pause();
        } catch (e) {
            i.destroy(this, e);
        }
    }, E = function() {
        m || n.resume && n.resume();
    }, p = function() {
        if (m) return;
        const e = new u;
        queueMicrotask(()=>T(e));
    }, T = function(e) {
        if (!m) {
            if (m = !0, t(o.destroyed || o[O] && a[b] <= 1), o.off("drain", E).off("error", T), n.removeListener("data", g).removeListener("end", T).removeListener("error", T).removeListener("close", p), !e) try {
                d.end();
            } catch (n) {
                e = n;
            }
            d.destroy(e), !e || "UND_ERR_INFO" === e.code && "reset" === e.message ? i.destroy(n) : i.destroy(n, e);
        }
    };
    n.on("data", g).on("end", T).on("error", T).on("close", p), n.resume && n.resume(), o.on("drain", E).on("error", T);
}
async function on({ h2stream: e, body: n, client: a, request: s, socket: o, contentLength: r, header: A, expectsPayload: l }) {
    t(r === n.size, "blob body must have content length");
    const c = "h2" === a[de];
    try {
        if (null != r && r !== n.size) throw new m;
        const t = Buffer.from(await n.arrayBuffer());
        c ? (e.cork(), e.write(t), e.uncork()) : (o.cork(), o.write(`${A}content-length: ${r}\r\n\r\n`, "latin1"), o.write(t), o.uncork()), s.onBodySent(t), s.onRequestSent(), l || (o[Q] = !0), nn(a);
    } catch (n) {
        i.destroy(c ? e : o, n);
    }
}
async function rn({ h2stream: e, body: n, client: a, request: s, socket: o, contentLength: r, header: i, expectsPayload: A }) {
    t(0 !== r || 0 === a[b], "iterator body cannot be pipelined");
    let l = null;
    function c() {
        if (l) {
            const e = l;
            l = null, e();
        }
    }
    const m = ()=>new Promise((e, n)=>{
            t(null === l), o[H] ? n(o[H]) : l = e;
        });
    if ("h2" === a[de]) {
        e.on("close", c).on("drain", c);
        try {
            for await (const a of n){
                if (o[H]) throw o[H];
                const n = e.write(a);
                s.onBodySent(a), n || await m();
            }
        } catch (n) {
            e.destroy(n);
        } finally{
            s.onRequestSent(), e.end(), e.off("close", c).off("drain", c);
        }
        return;
    }
    o.on("close", c).on("drain", c);
    const d = new An({
        socket: o,
        request: s,
        contentLength: r,
        client: a,
        expectsPayload: A,
        header: i
    });
    try {
        for await (const e of n){
            if (o[H]) throw o[H];
            d.write(e) || await m();
        }
        d.end();
    } catch (e) {
        d.destroy(e);
    } finally{
        o.off("close", c).off("drain", c);
    }
}
class An {
    constructor({ socket: e, request: n, contentLength: a, client: t, expectsPayload: s, header: o }){
        this.socket = e, this.request = n, this.contentLength = a, this.client = t, this.bytesWritten = 0, this.expectsPayload = s, this.header = o, e[O] = !0;
    }
    write(e) {
        const { socket: n, request: a, contentLength: t, client: s, bytesWritten: o, expectsPayload: r, header: i } = this;
        if (n[H]) throw n[H];
        if (n.destroyed) return !1;
        const A = Buffer.byteLength(e);
        if (!A) return !0;
        if (null !== t && o + A > t) {
            if (s[ne]) throw new m;
            process.emitWarning(new m);
        }
        n.cork(), 0 === o && (r || (n[Q] = !0), null === t ? n.write(`${i}transfer-encoding: chunked\r\n`, "latin1") : n.write(`${i}content-length: ${t}\r\n\r\n`, "latin1")), null === t && n.write(`\r\n${A.toString(16)}\r\n`, "latin1"), this.bytesWritten += A;
        const l = n.write(e);
        return n.uncork(), a.onBodySent(e), l || n[v].timeout && n[v].timeoutType === Ve && n[v].timeout.refresh && n[v].timeout.refresh(), l;
    }
    end() {
        const { socket: e, contentLength: n, client: a, bytesWritten: t, expectsPayload: s, header: o, request: r } = this;
        if (r.onRequestSent(), e[O] = !1, e[H]) throw e[H];
        if (!e.destroyed) {
            if (0 === t ? s ? e.write(`${o}content-length: 0\r\n\r\n`, "latin1") : e.write(`${o}\r\n`, "latin1") : null === n && e.write("\r\n0\r\n\r\n", "latin1"), null !== n && t !== n) {
                if (a[ne]) throw new m;
                process.emitWarning(new m);
            }
            e[v].timeout && e[v].timeoutType === Ve && e[v].timeout.refresh && e[v].timeout.refresh(), nn(a);
        }
    }
    destroy(e) {
        const { socket: n, client: a } = this;
        n[O] = !1, e && (t(a[b] <= 1, "pipeline should only contain this request"), i.destroy(n, e));
    }
}
function ln(e, n, a) {
    try {
        n.onError(a), t(n.aborted);
    } catch (a) {
        e.emit("error", a);
    }
}
module.exports = class extends c {
    constructor(e, { interceptors: n, maxHeaderSize: a, headersTimeout: t, socketTimeout: r, requestTimeout: A, connectTimeout: l, bodyTimeout: c, idleTimeout: m, keepAlive: d, keepAliveTimeout: u, maxKeepAliveTimeout: E, keepAliveMaxTimeout: p, keepAliveTimeoutThreshold: T, socketPath: k, pipelining: I, tls: h, strictContentLength: _, maxCachedSessions: C, maxRedirections: Q, connect: R, maxRequestsPerClient: N, localAddress: v, maxResponseSize: S, autoSelectFamily: D, autoSelectFamilyAttemptTimeout: b, allowH2: M, maxConcurrentStreams: F } = {}){
        if (super(), void 0 !== d) throw new g("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== r) throw new g("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== A) throw new g("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== m) throw new g("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== E) throw new g("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != a && !Number.isFinite(a)) throw new g("invalid maxHeaderSize");
        if (null != k && "string" != typeof k) throw new g("invalid socketPath");
        if (null != l && (!Number.isFinite(l) || l < 0)) throw new g("invalid connectTimeout");
        if (null != u && (!Number.isFinite(u) || u <= 0)) throw new g("invalid keepAliveTimeout");
        if (null != p && (!Number.isFinite(p) || p <= 0)) throw new g("invalid keepAliveMaxTimeout");
        if (null != T && !Number.isFinite(T)) throw new g("invalid keepAliveTimeoutThreshold");
        if (null != t && (!Number.isInteger(t) || t < 0)) throw new g("headersTimeout must be a positive integer or zero");
        if (null != c && (!Number.isInteger(c) || c < 0)) throw new g("bodyTimeout must be a positive integer or zero");
        if (null != R && "function" != typeof R && "object" != typeof R) throw new g("connect must be a function or an object");
        if (null != Q && (!Number.isInteger(Q) || Q < 0)) throw new g("maxRedirections must be a positive number");
        if (null != N && (!Number.isInteger(N) || N < 0)) throw new g("maxRequestsPerClient must be a positive number");
        if (null != v && ("string" != typeof v || 0 === s.isIP(v))) throw new g("localAddress must be valid string IP address");
        if (null != S && (!Number.isInteger(S) || S < -1)) throw new g("maxResponseSize must be a positive number");
        if (null != b && (!Number.isInteger(b) || b < -1)) throw new g("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != M && "boolean" != typeof M) throw new g("allowH2 must be a valid boolean value");
        if (null != F && ("number" != typeof F || F < 1)) throw new g("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof R && (R = f({
            ...h,
            maxCachedSessions: C,
            allowH2: M,
            socketPath: k,
            timeout: l,
            ...i.nodeHasAutoSelectFamily && D ? {
                autoSelectFamily: D,
                autoSelectFamilyAttemptTimeout: b
            } : void 0,
            ...R
        })), this[le] = n && n.Client && Array.isArray(n.Client) ? n.Client : [
            Oe({
                maxRedirections: Q
            })
        ], this[B] = i.parseOrigin(e), this[ae] = R, this[K] = null, this[W] = null != I ? I : 1, this[X] = a || o.maxHeaderSize, this[Y] = u ?? 4e3, this[Z] = p ?? 6e5, this[z] = T ?? 1e3, this[j] = this[Y], this[y] = null, this[ce] = null != v ? v : null, this[w] = 0, this[x] = 0, this[J] = `host: ${this[B].hostname}${this[B].port ? `:${this[B].port}` : ""}\r\n`, this[ee] = null != c ? c : 3e5, this[$] = null != t ? t : 3e5, this[ne] = _ ?? !0, this[te] = Q, this[se] = N, this[ve] = null, this[me] = S > -1 ? S : -1, this[de] = "h1", this[ue] = null, this[Ee] = M ? {
            openStreams: 0,
            maxConcurrentStreams: null != F ? F : 100
        } : null, this[ge] = `${this[B].hostname}${this[B].port ? `:${this[B].port}` : ""}`, this[U] = [], this[q] = 0, this[V] = 0;
    }
    get pipelining() {
        return this[W];
    }
    set pipelining(e) {
        this[W] = e, nn(this, !0);
    }
    get [M]() {
        return this[U].length - this[V];
    }
    get [b]() {
        return this[V] - this[q];
    }
    get [F]() {
        return this[U].length - this[q];
    }
    get [L]() {
        return !!this[K] && !this[P] && !this[K].destroyed;
    }
    get [N]() {
        const e = this[K];
        return e && (e[Q] || e[O] || e[D]) || this[F] >= (this[W] || 1) || this[M] > 0;
    }
    [S](e) {
        $e(this), this.once("connect", e);
    }
    [Ae](e, n) {
        const a = e.origin || this[B].origin, t = "h2" === this[de] ? l[pe](a, e, n) : l[ke](a, e, n);
        return this[U].push(t), this[w] || (null == i.bodyLength(t.body) && i.isIterable(t.body) ? (this[w] = 1, process.nextTick(nn, this)) : nn(this, !0)), this[w] && 2 !== this[x] && this[N] && (this[x] = 2), this[x] < 2;
    }
    async [re]() {
        return new Promise((e)=>{
            this[F] ? this[ve] = e : e(null);
        });
    }
    async [ie](e) {
        return new Promise((n)=>{
            const a = this[U].splice(this[V]);
            for(let n = 0; n < a.length; n++){
                ln(this, a[n], e);
            }
            const t = ()=>{
                this[ve] && (this[ve](), this[ve] = null), n();
            };
            null != this[ue] && (i.destroy(this[ue], e), this[ue] = null, this[Ee] = null), this[K] ? i.destroy(this[K].on("close", t), e) : queueMicrotask(t), nn(this);
        });
    }
};
