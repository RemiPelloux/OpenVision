"use strict";
const a = require("./module-2613.js"), s = require("./module-9278.js"), o = require("./module-8611.js"), { pipeline: r } = require("./module-2203.js"), i = require("./module-9361.js"), A = require("./module-3891.js"), c = require("./module-3308.js"), l = require("./module-9792.js"), { RequestContentLengthMismatchError: d, ResponseContentLengthMismatchError: m, InvalidArgumentError: u, RequestAbortedError: g, HeadersTimeoutError: p, HeadersOverflowError: E, SocketError: h, InformationalError: T, BodyTimeoutError: k, HTTPParserError: f, ResponseExceededMaxSizeError: _, ClientDestroyedError: I } = require("./module-7902.js"), C = require("./module-3991.js"), { kUrl: y, kReset: B, kServerName: Q, kClient: v, kBusy: R, kParser: N, kConnect: S, kBlocking: w, kResuming: b, kRunning: D, kPending: M, kSize: F, kWriting: O, kQueue: U, kConnected: L, kConnecting: P, kNeedDrain: x, kNoRef: G, kKeepAliveDefaultTimeout: Y, kHostHeader: J, kPendingIdx: V, kRunningIdx: q, kError: H, kPipelining: W, kSocket: j, kKeepAliveTimeoutValue: K, kMaxHeadersSize: $, kKeepAliveMaxTimeout: X, kKeepAliveTimeoutThreshold: Z, kHeadersTimeout: z, kBodyTimeout: ee, kStrictContentLength: ne, kConnector: te, kMaxRedirections: ae, kMaxRequests: se, kCounter: oe, kClose: re, kDestroy: ie, kDispatch: Ae, kInterceptors: ce, kLocalAddress: le, kMaxResponseSize: de, kHTTPConnVersion: me, kHost: ue, kHTTP2Session: ge, kHTTP2SessionState: pe, kHTTP2BuildRequest: Ee, kHTTP2CopyHeaders: he, kHTTP1BuildRequest: Te } = require("./module-8832.js");
let ke;
try {
    ke = require("./module-5675.js");
} catch  {
    ke = {
        constants: {}
    };
}
const { constants: { HTTP2_HEADER_AUTHORITY: fe, HTTP2_HEADER_METHOD: _e, HTTP2_HEADER_PATH: Ie, HTTP2_HEADER_SCHEME: Ce, HTTP2_HEADER_CONTENT_LENGTH: ye, HTTP2_HEADER_EXPECT: Be, HTTP2_HEADER_STATUS: Qe } } = ke;
let ve = !1;
const Re = Buffer[Symbol.species], Ne = Symbol("kClosedResolve"), Se = {};
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
function we(e) {
    a("ERR_TLS_CERT_ALTNAME_INVALID" !== e.code), this[j][H] = e, $e(this[v], e);
}
function be(e, n, t) {
    const a = new T(`HTTP/2: "frameError" received - type ${e}, code ${n}`);
    0 === t && (this[j][H] = a, $e(this[v], a));
}
function De() {
    i.destroy(this, new h("other side closed")), i.destroy(this[j], new h("other side closed"));
}
function Me(e) {
    const n = this[v], t = new T(`HTTP/2: "GOAWAY" frame received with code ${e}`);
    if (n[j] = null, n[ge] = null, n.destroyed) {
        a(0 === this[M]);
        const e = n[U].splice(n[q]);
        for(let n = 0; n < e.length; n++){
            cn(this, e[n], t);
        }
    } else if (n[D] > 0) {
        const e = n[U][n[q]];
        n[U][n[q]++] = null, cn(n, e, t);
    }
    n[V] = n[q], a(0 === n[D]), n.emit("disconnect", n[y], [
        n
    ], t), nn(n);
}
const Fe = require("./module-6747.js"), Oe = require("./module-858.js"), Ue = Buffer.alloc(0);
let Le = null, Pe = async function() {
    const e = process.env.JEST_WORKER_ID ? require("./module-2789.js") : void 0;
    let n;
    try {
        n = await WebAssembly.compile(Buffer.from(require("./module-871.js"), "base64"));
    } catch (a) {
        n = await WebAssembly.compile(Buffer.from(e || require("./module-2789.js"), "base64"));
    }
    return await WebAssembly.instantiate(n, {
        env: {
            wasm_on_url: (e, n, t)=>0,
            wasm_on_status: (e, n, t)=>{
                a.strictEqual(xe.ptr, e);
                const s = n - Je + Ge.byteOffset;
                return xe.onStatus(new Re(Ge.buffer, s, t)) || 0;
            },
            wasm_on_message_begin: (e)=>(a.strictEqual(xe.ptr, e), xe.onMessageBegin() || 0),
            wasm_on_header_field: (e, n, t)=>{
                a.strictEqual(xe.ptr, e);
                const s = n - Je + Ge.byteOffset;
                return xe.onHeaderField(new Re(Ge.buffer, s, t)) || 0;
            },
            wasm_on_header_value: (e, n, t)=>{
                a.strictEqual(xe.ptr, e);
                const s = n - Je + Ge.byteOffset;
                return xe.onHeaderValue(new Re(Ge.buffer, s, t)) || 0;
            },
            wasm_on_headers_complete: (e, n, t, s)=>(a.strictEqual(xe.ptr, e), xe.onHeadersComplete(n, Boolean(t), Boolean(s)) || 0),
            wasm_on_body: (e, n, t)=>{
                a.strictEqual(xe.ptr, e);
                const s = n - Je + Ge.byteOffset;
                return xe.onBody(new Re(Ge.buffer, s, t)) || 0;
            },
            wasm_on_message_complete: (e)=>(a.strictEqual(xe.ptr, e), xe.onMessageComplete() || 0)
        }
    });
}();
Pe.catch();
let xe = null, Ge = null, Ye = 0, Je = null;
const Ve = 1, qe = 3;
class He {
    constructor(e, n, { exports: t }){
        a(Number.isFinite(e[$]) && e[$] > 0), this.llhttp = t, this.ptr = this.llhttp.llhttp_alloc(Fe.TYPE.RESPONSE), this.client = e, this.socket = n, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = e[$], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e[de];
    }
    setTimeout(e, n) {
        this.timeoutType = n, e !== this.timeoutValue ? (A.clearTimeout(this.timeout), e ? (this.timeout = A.setTimeout(We, e, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e) : this.timeout && this.timeout.refresh && this.timeout.refresh();
    }
    resume() {
        !this.socket.destroyed && this.paused && (a(null != this.ptr), a(null == xe), this.llhttp.llhttp_resume(this.ptr), a(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || Ue), this.readMore());
    }
    readMore() {
        for(; !this.paused && this.ptr;){
            const e = this.socket.read();
            if (null === e) break;
            this.execute(e);
        }
    }
    execute(e) {
        a(null != this.ptr), a(null == xe), a(!this.paused);
        const { socket: n, llhttp: t } = this;
        e.length > Ye && (Je && t.free(Je), Ye = 4096 * Math.ceil(e.length / 4096), Je = t.malloc(Ye)), new Uint8Array(t.memory.buffer, Je, Ye).set(e);
        try {
            let a;
            try {
                Ge = e, xe = this, a = t.llhttp_execute(this.ptr, Je, e.length);
            } catch (e) {
                throw e;
            } finally{
                xe = null, Ge = null;
            }
            const s = t.llhttp_get_error_pos(this.ptr) - Je;
            if (a === Fe.ERROR.PAUSED_UPGRADE) this.onUpgrade(e.slice(s));
            else if (a === Fe.ERROR.PAUSED) this.paused = !0, n.unshift(e.slice(s));
            else if (a !== Fe.ERROR.OK) {
                const n = t.llhttp_get_error_reason(this.ptr);
                let o = "";
                if (n) {
                    const e = new Uint8Array(t.memory.buffer, n).indexOf(0);
                    o = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(t.memory.buffer, n, e).toString() + ")";
                }
                throw new f(o, Fe.ERROR[a], e.slice(s));
            }
        } catch (e) {
            i.destroy(n, e);
        }
    }
    destroy() {
        a(null != this.ptr), a(null == xe), this.llhttp.llhttp_free(this.ptr), this.ptr = null, A.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
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
        const t = this.headers[n - 2];
        10 === t.length && "keep-alive" === t.toString().toLowerCase() ? this.keepAlive += e.toString() : 10 === t.length && "connection" === t.toString().toLowerCase() ? this.connection += e.toString() : 14 === t.length && "content-length" === t.toString().toLowerCase() && (this.contentLength += e.toString()), this.trackHeader(e.length);
    }
    trackHeader(e) {
        this.headersSize += e, this.headersSize >= this.headersMaxSize && i.destroy(this.socket, new E);
    }
    onUpgrade(e) {
        const { upgrade: n, client: t, socket: s, headers: o, statusCode: r } = this;
        a(n);
        const A = t[U][t[q]];
        a(A), a(!s.destroyed), a(s === t[j]), a(!this.paused), a(A.upgrade || "CONNECT" === A.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, a(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, s.unshift(e), s[N].destroy(), s[N] = null, s[v] = null, s[H] = null, s.removeListener("error", Ke).removeListener("readable", je).removeListener("end", Xe).removeListener("close", Ze), t[j] = null, t[U][t[q]++] = null, t.emit("disconnect", t[y], [
            t
        ], new T("upgrade"));
        try {
            A.onUpgrade(r, o, s);
        } catch (e) {
            i.destroy(s, e);
        }
        nn(t);
    }
    onHeadersComplete(e, n, t) {
        const { client: s, socket: o, headers: r, statusText: A } = this;
        if (o.destroyed) return -1;
        const c = s[U][s[q]];
        if (!c) return -1;
        if (a(!this.upgrade), a(this.statusCode < 200), 100 === e) return i.destroy(o, new h("bad response", i.getSocketInfo(o))), -1;
        if (n && !c.upgrade) return i.destroy(o, new h("bad upgrade", i.getSocketInfo(o))), -1;
        if (a.strictEqual(this.timeoutType, Ve), this.statusCode = e, this.shouldKeepAlive = t || "HEAD" === c.method && !o[B] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
            const e = null != c.bodyTimeout ? c.bodyTimeout : s[ee];
            this.setTimeout(e, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === c.method) return a(1 === s[D]), this.upgrade = !0, 2;
        if (n) return a(1 === s[D]), this.upgrade = !0, 2;
        if (a(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s[W]) {
            const e = this.keepAlive ? i.parseKeepAliveTimeout(this.keepAlive) : null;
            if (null != e) {
                const n = Math.min(e - s[Z], s[X]);
                n <= 0 ? o[B] = !0 : s[K] = n;
            } else s[K] = s[Y];
        } else o[B] = !0;
        const l = !1 === c.onHeaders(e, r, this.resume, A);
        return c.aborted ? -1 : "HEAD" === c.method || e < 200 ? 1 : (o[w] && (o[w] = !1, nn(s)), l ? Fe.ERROR.PAUSED : 0);
    }
    onBody(e) {
        const { client: n, socket: t, statusCode: s, maxResponseSize: o } = this;
        if (t.destroyed) return -1;
        const r = n[U][n[q]];
        return a(r), a.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), a(s >= 200), o > -1 && this.bytesRead + e.length > o ? (i.destroy(t, new _), -1) : (this.bytesRead += e.length, !1 === r.onData(e) ? Fe.ERROR.PAUSED : void 0);
    }
    onMessageComplete() {
        const { client: e, socket: n, statusCode: t, upgrade: s, headers: o, contentLength: r, bytesRead: A, shouldKeepAlive: c } = this;
        if (n.destroyed && (!t || c)) return -1;
        if (s) return;
        const l = e[U][e[q]];
        return a(l), a(t >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", a(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, t < 200 ? void 0 : "HEAD" !== l.method && r && A !== parseInt(r, 10) ? (i.destroy(n, new m), -1) : (l.onComplete(o), e[U][e[q]++] = null, n[O] ? (a.strictEqual(e[D], 0), i.destroy(n, new T("reset")), Fe.ERROR.PAUSED) : c ? n[B] && 0 === e[D] ? (i.destroy(n, new T("reset")), Fe.ERROR.PAUSED) : void (1 === e[W] ? setImmediate(nn, e) : nn(e)) : (i.destroy(n, new T("reset")), Fe.ERROR.PAUSED));
    }
}
function We(e) {
    const { socket: n, timeoutType: t, client: s } = e;
    t === Ve ? (!n[O] || n.writableNeedDrain || s[D] > 1) && (a(!e.paused, "cannot be paused while waiting for headers"), i.destroy(n, new p)) : 2 === t ? e.paused || i.destroy(n, new k) : t === qe && (a(0 === s[D] && s[K]), i.destroy(n, new T("socket idle timeout")));
}
function je() {
    const { [N]: e } = this;
    e && e.readMore();
}
function Ke(e) {
    const { [v]: n, [N]: t } = this;
    a("ERR_TLS_CERT_ALTNAME_INVALID" !== e.code), "h2" === n[me] || "ECONNRESET" !== e.code || !t.statusCode || t.shouldKeepAlive ? (this[H] = e, $e(this[v], e)) : t.onMessageComplete();
}
function $e(e, n) {
    if (0 === e[D] && "UND_ERR_INFO" !== n.code && "UND_ERR_SOCKET" !== n.code) {
        a(e[V] === e[q]);
        const t = e[U].splice(e[q]);
        for(let a = 0; a < t.length; a++){
            cn(e, t[a], n);
        }
        a(0 === e[F]);
    }
}
function Xe() {
    const { [N]: e, [v]: n } = this;
    "h2" === n[me] || !e.statusCode || e.shouldKeepAlive ? i.destroy(this, new h("other side closed", i.getSocketInfo(this))) : e.onMessageComplete();
}
function Ze() {
    const { [v]: e, [N]: n } = this;
    "h1" === e[me] && n && (this[H] || !n.statusCode || n.shouldKeepAlive || n.onMessageComplete(), this[N].destroy(), this[N] = null);
    const t = this[H] || new h("closed", i.getSocketInfo(this));
    if (e[j] = null, e.destroyed) {
        a(0 === e[M]);
        const n = e[U].splice(e[q]);
        for(let a = 0; a < n.length; a++){
            cn(e, n[a], t);
        }
    } else if (e[D] > 0 && "UND_ERR_INFO" !== t.code) {
        const n = e[U][e[q]];
        e[U][e[q]++] = null, cn(e, n, t);
    }
    e[V] = e[q], a(0 === e[D]), e.emit("disconnect", e[y], [
        e
    ], t), nn(e);
}
async function ze(e) {
    a(!e[P]), a(!e[j]);
    let { host: n, hostname: t, protocol: o, port: r } = e[y];
    if ("[" === t[0]) {
        const e = t.indexOf("]");
        a(-1 !== e);
        const n = t.substring(1, e);
        a(s.isIP(n)), t = n;
    }
    e[P] = !0, Se.beforeConnect.hasSubscribers && Se.beforeConnect.publish({
        connectParams: {
            host: n,
            hostname: t,
            protocol: o,
            port: r,
            servername: e[Q],
            localAddress: e[le]
        },
        connector: e[te]
    });
    try {
        const s = await new Promise((a, s)=>{
            e[te]({
                host: n,
                hostname: t,
                protocol: o,
                port: r,
                servername: e[Q],
                localAddress: e[le]
            }, (e, n)=>{
                e ? s(e) : a(n);
            });
        });
        if (e.destroyed) return void i.destroy(s.on("error", ()=>{}), new I);
        e[P] = !1, a(s);
        if ("h2" === s.alpnProtocol) {
            ve || (ve = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
                code: "UNDICI-H2"
            }));
            const n = ke.connect(e[y], {
                createConnection: ()=>s,
                peerMaxConcurrentStreams: e[pe].maxConcurrentStreams
            });
            e[me] = "h2", n[v] = e, n[j] = s, n.on("error", we), n.on("frameError", be), n.on("end", De), n.on("goaway", Me), n.on("close", Ze), n.unref(), e[ge] = n, s[ge] = n;
        } else Le || (Le = await Pe, Pe = null), s[G] = !1, s[O] = !1, s[B] = !1, s[w] = !1, s[N] = new He(e, s, Le);
        s[oe] = 0, s[se] = e[se], s[v] = e, s[H] = null, s.on("error", Ke).on("readable", je).on("end", Xe).on("close", Ze), e[j] = s, Se.connected.hasSubscribers && Se.connected.publish({
            connectParams: {
                host: n,
                hostname: t,
                protocol: o,
                port: r,
                servername: e[Q],
                localAddress: e[le]
            },
            connector: e[te],
            socket: s
        }), e.emit("connect", e[y], [
            e
        ]);
    } catch (s) {
        if (e.destroyed) return;
        if (e[P] = !1, Se.connectError.hasSubscribers && Se.connectError.publish({
            connectParams: {
                host: n,
                hostname: t,
                protocol: o,
                port: r,
                servername: e[Q],
                localAddress: e[le]
            },
            connector: e[te],
            error: s
        }), "ERR_TLS_CERT_ALTNAME_INVALID" === s.code) for(a(0 === e[D]); e[M] > 0 && e[U][e[V]].servername === e[Q];){
            const n = e[U][e[V]++];
            cn(e, n, s);
        }
        else $e(e, s);
        e.emit("connectionError", e[y], [
            e
        ], s);
    }
    nn(e);
}
function en(e) {
    e[x] = 0, e.emit("drain", e[y], [
        e
    ]);
}
function nn(e, n) {
    2 !== e[b] && (e[b] = 2, function(e, n) {
        for(;;){
            if (e.destroyed) return void a(0 === e[M]);
            if (e[Ne] && !e[F]) return e[Ne](), void (e[Ne] = null);
            const t = e[j];
            if (t && !t.destroyed && "h2" !== t.alpnProtocol) {
                if (0 === e[F] ? !t[G] && t.unref && (t.unref(), t[G] = !0) : t[G] && t.ref && (t.ref(), t[G] = !1), 0 === e[F]) t[N].timeoutType !== qe && t[N].setTimeout(e[K], qe);
                else if (e[D] > 0 && t[N].statusCode < 200 && t[N].timeoutType !== Ve) {
                    const n = e[U][e[q]], a = null != n.headersTimeout ? n.headersTimeout : e[z];
                    t[N].setTimeout(a, Ve);
                }
            }
            if (e[R]) e[x] = 2;
            else if (2 === e[x]) {
                n ? (e[x] = 1, process.nextTick(en, e)) : en(e);
                continue;
            }
            if (0 === e[M]) return;
            if (e[D] >= (e[W] || 1)) return;
            const s = e[U][e[V]];
            if ("https:" === e[y].protocol && e[Q] !== s.servername) {
                if (e[D] > 0) return;
                if (e[Q] = s.servername, t && t.servername !== s.servername) return void i.destroy(t, new T("servername changed"));
            }
            if (e[P]) return;
            if (!t && !e[ge]) return void ze(e);
            if (t.destroyed || t[O] || t[B] || t[w]) return;
            if (e[D] > 0 && !s.idempotent) return;
            if (e[D] > 0 && (s.upgrade || "CONNECT" === s.method)) return;
            if (e[D] > 0 && 0 !== i.bodyLength(s.body) && (i.isStream(s.body) || i.isAsyncIterable(s.body))) return;
            !s.aborted && an(e, s) ? e[V]++ : e[U].splice(e[V], 1);
        }
    }(e, n), e[b] = 0, e[q] > 256 && (e[U].splice(0, e[q]), e[V] -= e[q], e[q] = 0));
}
function tn(e) {
    return "GET" !== e && "HEAD" !== e && "OPTIONS" !== e && "TRACE" !== e && "CONNECT" !== e;
}
function an(e, n) {
    if ("h2" === e[me]) return void function(e, n, t) {
        const { body: s, method: o, path: r, host: A, upgrade: l, expectContinue: m, signal: u, headers: p } = t;
        let E, h;
        E = "string" == typeof p ? c[he](p.trim()) : p;
        if (l) return cn(e, t, new Error("Upgrade not supported for H2")), !1;
        try {
            t.onConnect((n)=>{
                t.aborted || t.completed || cn(e, t, n || new g);
            });
        } catch (n) {
            cn(e, t, n);
        }
        if (t.aborted) return !1;
        const k = e[pe];
        if (E[fe] = A || e[ue], E[_e] = o, "CONNECT" === o) return n.ref(), h = n.request(E, {
            endStream: !1,
            signal: u
        }), h.id && !h.pending ? (t.onUpgrade(null, null, h), ++k.openStreams) : h.once("ready", ()=>{
            t.onUpgrade(null, null, h), ++k.openStreams;
        }), h.once("close", ()=>{
            k.openStreams -= 1, 0 === k.openStreams && n.unref();
        }), !0;
        E[Ie] = r, E[Ce] = "https";
        const f = "PUT" === o || "POST" === o || "PATCH" === o;
        s && "function" == typeof s.read && s.read(0);
        let _ = i.bodyLength(s);
        null == _ && (_ = t.contentLength);
        0 !== _ && f || (_ = null);
        if (tn(o) && _ > 0 && null != t.contentLength && t.contentLength !== _) {
            if (e[ne]) return cn(e, t, new d), !1;
            process.emitWarning(new d);
        }
        null != _ && (a(s, "no body must not have content length"), E[ye] = `${_}`);
        n.ref();
        const I = "GET" === o || "HEAD" === o;
        m ? (E[Be] = "100-continue", h = n.request(E, {
            endStream: I,
            signal: u
        }), h.once("continue", C)) : (h = n.request(E, {
            endStream: I,
            signal: u
        }), C());
        return ++k.openStreams, h.once("response", (e)=>{
            const { [Qe]: n, ...a } = e;
            !1 === t.onHeaders(Number(n), a, h.resume.bind(h), "") && h.pause();
        }), h.once("end", ()=>{
            t.onComplete([]);
        }), h.on("data", (e)=>{
            !1 === t.onData(e) && h.pause();
        }), h.once("close", ()=>{
            k.openStreams -= 1, 0 === k.openStreams && n.unref();
        }), h.once("error", function(n) {
            !e[ge] || e[ge].destroyed || this.closed || this.destroyed || (k.streams -= 1, i.destroy(h, n));
        }), h.once("frameError", (n, a)=>{
            const s = new T(`HTTP/2: "frameError" received - type ${n}, code ${a}`);
            cn(e, t, s), !e[ge] || e[ge].destroyed || this.closed || this.destroyed || (k.streams -= 1, i.destroy(h, s));
        }), !0;
        function C() {
            s ? i.isBuffer(s) ? (a(_ === s.byteLength, "buffer body must have content length"), h.cork(), h.write(s), h.uncork(), h.end(), t.onBodySent(s), t.onRequestSent()) : i.isBlobLike(s) ? "function" == typeof s.stream ? rn({
                client: e,
                request: t,
                contentLength: _,
                h2stream: h,
                expectsPayload: f,
                body: s.stream(),
                socket: e[j],
                header: ""
            }) : on({
                body: s,
                client: e,
                request: t,
                contentLength: _,
                expectsPayload: f,
                h2stream: h,
                header: "",
                socket: e[j]
            }) : i.isStream(s) ? sn({
                body: s,
                client: e,
                request: t,
                contentLength: _,
                expectsPayload: f,
                socket: e[j],
                h2stream: h,
                header: ""
            }) : i.isIterable(s) ? rn({
                body: s,
                client: e,
                request: t,
                contentLength: _,
                expectsPayload: f,
                header: "",
                h2stream: h,
                socket: e[j]
            }) : a(!1) : t.onRequestSent();
        }
    }(e, e[ge], n);
    const { body: t, method: s, path: o, host: r, upgrade: A, headers: l, blocking: m, reset: u } = n, p = "PUT" === s || "POST" === s || "PATCH" === s;
    t && "function" == typeof t.read && t.read(0);
    const E = i.bodyLength(t);
    let h = E;
    if (null === h && (h = n.contentLength), 0 !== h || p || (h = null), tn(s) && h > 0 && null !== n.contentLength && n.contentLength !== h) {
        if (e[ne]) return cn(e, n, new d), !1;
        process.emitWarning(new d);
    }
    const k = e[j];
    try {
        n.onConnect((t)=>{
            n.aborted || n.completed || (cn(e, n, t || new g), i.destroy(k, new T("aborted")));
        });
    } catch (t) {
        cn(e, n, t);
    }
    if (n.aborted) return !1;
    "HEAD" === s && (k[B] = !0), (A || "CONNECT" === s) && (k[B] = !0), null != u && (k[B] = u), e[se] && k[oe]++ >= e[se] && (k[B] = !0), m && (k[w] = !0);
    let f = `${s} ${o} HTTP/1.1\r\n`;
    return f += "string" == typeof r ? `host: ${r}\r\n` : e[J], A ? f += `connection: upgrade\r\nupgrade: ${A}\r\n` : e[W] && !k[B] ? f += "connection: keep-alive\r\n" : f += "connection: close\r\n", l && (f += l), Se.sendHeaders.hasSubscribers && Se.sendHeaders.publish({
        request: n,
        headers: f,
        socket: k
    }), t && 0 !== E ? i.isBuffer(t) ? (a(h === t.byteLength, "buffer body must have content length"), k.cork(), k.write(`${f}content-length: ${h}\r\n\r\n`, "latin1"), k.write(t), k.uncork(), n.onBodySent(t), n.onRequestSent(), p || (k[B] = !0)) : i.isBlobLike(t) ? "function" == typeof t.stream ? rn({
        body: t.stream(),
        client: e,
        request: n,
        socket: k,
        contentLength: h,
        header: f,
        expectsPayload: p
    }) : on({
        body: t,
        client: e,
        request: n,
        socket: k,
        contentLength: h,
        header: f,
        expectsPayload: p
    }) : i.isStream(t) ? sn({
        body: t,
        client: e,
        request: n,
        socket: k,
        contentLength: h,
        header: f,
        expectsPayload: p
    }) : i.isIterable(t) ? rn({
        body: t,
        client: e,
        request: n,
        socket: k,
        contentLength: h,
        header: f,
        expectsPayload: p
    }) : a(!1) : (0 === h ? k.write(`${f}content-length: 0\r\n\r\n`, "latin1") : (a(null === h, "no body must not have content length"), k.write(`${f}\r\n`, "latin1")), n.onRequestSent()), !0;
}
function sn({ h2stream: e, body: n, client: t, request: s, socket: o, contentLength: A, header: c, expectsPayload: l }) {
    if (a(0 !== A || 0 === t[D], "stream body cannot be pipelined"), "h2" === t[me]) {
        const T = r(n, e, (t)=>{
            t ? (i.destroy(n, t), i.destroy(e, t)) : s.onRequestSent();
        });
        function k(e) {
            s.onBodySent(e);
        }
        return T.on("data", k), void T.once("end", ()=>{
            T.removeListener("data", k), i.destroy(T);
        });
    }
    let d = !1;
    const m = new An({
        socket: o,
        request: s,
        contentLength: A,
        client: t,
        expectsPayload: l,
        header: c
    }), u = function(e) {
        if (!d) try {
            !m.write(e) && this.pause && this.pause();
        } catch (e) {
            i.destroy(this, e);
        }
    }, p = function() {
        d || n.resume && n.resume();
    }, E = function() {
        if (d) return;
        const e = new g;
        queueMicrotask(()=>h(e));
    }, h = function(e) {
        if (!d) {
            if (d = !0, a(o.destroyed || o[O] && t[D] <= 1), o.off("drain", p).off("error", h), n.removeListener("data", u).removeListener("end", h).removeListener("error", h).removeListener("close", E), !e) try {
                m.end();
            } catch (n) {
                e = n;
            }
            m.destroy(e), !e || "UND_ERR_INFO" === e.code && "reset" === e.message ? i.destroy(n) : i.destroy(n, e);
        }
    };
    n.on("data", u).on("end", h).on("error", h).on("close", E), n.resume && n.resume(), o.on("drain", p).on("error", h);
}
async function on({ h2stream: e, body: n, client: t, request: s, socket: o, contentLength: r, header: A, expectsPayload: c }) {
    a(r === n.size, "blob body must have content length");
    const l = "h2" === t[me];
    try {
        if (null != r && r !== n.size) throw new d;
        const a = Buffer.from(await n.arrayBuffer());
        l ? (e.cork(), e.write(a), e.uncork()) : (o.cork(), o.write(`${A}content-length: ${r}\r\n\r\n`, "latin1"), o.write(a), o.uncork()), s.onBodySent(a), s.onRequestSent(), c || (o[B] = !0), nn(t);
    } catch (n) {
        i.destroy(l ? e : o, n);
    }
}
async function rn({ h2stream: e, body: n, client: t, request: s, socket: o, contentLength: r, header: i, expectsPayload: A }) {
    a(0 !== r || 0 === t[D], "iterator body cannot be pipelined");
    let c = null;
    function l() {
        if (c) {
            const e = c;
            c = null, e();
        }
    }
    const d = ()=>new Promise((e, n)=>{
            a(null === c), o[H] ? n(o[H]) : c = e;
        });
    if ("h2" === t[me]) {
        e.on("close", l).on("drain", l);
        try {
            for await (const t of n){
                if (o[H]) throw o[H];
                const n = e.write(t);
                s.onBodySent(t), n || await d();
            }
        } catch (n) {
            e.destroy(n);
        } finally{
            s.onRequestSent(), e.end(), e.off("close", l).off("drain", l);
        }
        return;
    }
    o.on("close", l).on("drain", l);
    const m = new An({
        socket: o,
        request: s,
        contentLength: r,
        client: t,
        expectsPayload: A,
        header: i
    });
    try {
        for await (const e of n){
            if (o[H]) throw o[H];
            m.write(e) || await d();
        }
        m.end();
    } catch (e) {
        m.destroy(e);
    } finally{
        o.off("close", l).off("drain", l);
    }
}
class An {
    constructor({ socket: e, request: n, contentLength: t, client: a, expectsPayload: s, header: o }){
        this.socket = e, this.request = n, this.contentLength = t, this.client = a, this.bytesWritten = 0, this.expectsPayload = s, this.header = o, e[O] = !0;
    }
    write(e) {
        const { socket: n, request: t, contentLength: a, client: s, bytesWritten: o, expectsPayload: r, header: i } = this;
        if (n[H]) throw n[H];
        if (n.destroyed) return !1;
        const A = Buffer.byteLength(e);
        if (!A) return !0;
        if (null !== a && o + A > a) {
            if (s[ne]) throw new d;
            process.emitWarning(new d);
        }
        n.cork(), 0 === o && (r || (n[B] = !0), null === a ? n.write(`${i}transfer-encoding: chunked\r\n`, "latin1") : n.write(`${i}content-length: ${a}\r\n\r\n`, "latin1")), null === a && n.write(`\r\n${A.toString(16)}\r\n`, "latin1"), this.bytesWritten += A;
        const c = n.write(e);
        return n.uncork(), t.onBodySent(e), c || n[N].timeout && n[N].timeoutType === Ve && n[N].timeout.refresh && n[N].timeout.refresh(), c;
    }
    end() {
        const { socket: e, contentLength: n, client: t, bytesWritten: a, expectsPayload: s, header: o, request: r } = this;
        if (r.onRequestSent(), e[O] = !1, e[H]) throw e[H];
        if (!e.destroyed) {
            if (0 === a ? s ? e.write(`${o}content-length: 0\r\n\r\n`, "latin1") : e.write(`${o}\r\n`, "latin1") : null === n && e.write("\r\n0\r\n\r\n", "latin1"), null !== n && a !== n) {
                if (t[ne]) throw new d;
                process.emitWarning(new d);
            }
            e[N].timeout && e[N].timeoutType === Ve && e[N].timeout.refresh && e[N].timeout.refresh(), nn(t);
        }
    }
    destroy(e) {
        const { socket: n, client: t } = this;
        n[O] = !1, e && (a(t[D] <= 1, "pipeline should only contain this request"), i.destroy(n, e));
    }
}
function cn(e, n, t) {
    try {
        n.onError(t), a(n.aborted);
    } catch (t) {
        e.emit("error", t);
    }
}
module.exports = class extends l {
    constructor(e, { interceptors: n, maxHeaderSize: t, headersTimeout: a, socketTimeout: r, requestTimeout: A, connectTimeout: c, bodyTimeout: l, idleTimeout: d, keepAlive: m, keepAliveTimeout: g, maxKeepAliveTimeout: p, keepAliveMaxTimeout: E, keepAliveTimeoutThreshold: h, socketPath: T, pipelining: k, tls: f, strictContentLength: _, maxCachedSessions: I, maxRedirections: B, connect: v, maxRequestsPerClient: R, localAddress: N, maxResponseSize: S, autoSelectFamily: w, autoSelectFamilyAttemptTimeout: D, allowH2: M, maxConcurrentStreams: F } = {}){
        if (super(), void 0 !== m) throw new u("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== r) throw new u("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== A) throw new u("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== d) throw new u("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== p) throw new u("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != t && !Number.isFinite(t)) throw new u("invalid maxHeaderSize");
        if (null != T && "string" != typeof T) throw new u("invalid socketPath");
        if (null != c && (!Number.isFinite(c) || c < 0)) throw new u("invalid connectTimeout");
        if (null != g && (!Number.isFinite(g) || g <= 0)) throw new u("invalid keepAliveTimeout");
        if (null != E && (!Number.isFinite(E) || E <= 0)) throw new u("invalid keepAliveMaxTimeout");
        if (null != h && !Number.isFinite(h)) throw new u("invalid keepAliveTimeoutThreshold");
        if (null != a && (!Number.isInteger(a) || a < 0)) throw new u("headersTimeout must be a positive integer or zero");
        if (null != l && (!Number.isInteger(l) || l < 0)) throw new u("bodyTimeout must be a positive integer or zero");
        if (null != v && "function" != typeof v && "object" != typeof v) throw new u("connect must be a function or an object");
        if (null != B && (!Number.isInteger(B) || B < 0)) throw new u("maxRedirections must be a positive number");
        if (null != R && (!Number.isInteger(R) || R < 0)) throw new u("maxRequestsPerClient must be a positive number");
        if (null != N && ("string" != typeof N || 0 === s.isIP(N))) throw new u("localAddress must be valid string IP address");
        if (null != S && (!Number.isInteger(S) || S < -1)) throw new u("maxResponseSize must be a positive number");
        if (null != D && (!Number.isInteger(D) || D < -1)) throw new u("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != M && "boolean" != typeof M) throw new u("allowH2 must be a valid boolean value");
        if (null != F && ("number" != typeof F || F < 1)) throw new u("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof v && (v = C({
            ...f,
            maxCachedSessions: I,
            allowH2: M,
            socketPath: T,
            timeout: c,
            ...i.nodeHasAutoSelectFamily && w ? {
                autoSelectFamily: w,
                autoSelectFamilyAttemptTimeout: D
            } : void 0,
            ...v
        })), this[ce] = n && n.Client && Array.isArray(n.Client) ? n.Client : [
            Oe({
                maxRedirections: B
            })
        ], this[y] = i.parseOrigin(e), this[te] = v, this[j] = null, this[W] = null != k ? k : 1, this[$] = t || o.maxHeaderSize, this[Y] = g ?? 4e3, this[X] = E ?? 6e5, this[Z] = h ?? 1e3, this[K] = this[Y], this[Q] = null, this[le] = null != N ? N : null, this[b] = 0, this[x] = 0, this[J] = `host: ${this[y].hostname}${this[y].port ? `:${this[y].port}` : ""}\r\n`, this[ee] = null != l ? l : 3e5, this[z] = null != a ? a : 3e5, this[ne] = _ ?? !0, this[ae] = B, this[se] = R, this[Ne] = null, this[de] = S > -1 ? S : -1, this[me] = "h1", this[ge] = null, this[pe] = M ? {
            openStreams: 0,
            maxConcurrentStreams: null != F ? F : 100
        } : null, this[ue] = `${this[y].hostname}${this[y].port ? `:${this[y].port}` : ""}`, this[U] = [], this[q] = 0, this[V] = 0;
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
    get [D]() {
        return this[V] - this[q];
    }
    get [F]() {
        return this[U].length - this[q];
    }
    get [L]() {
        return !!this[j] && !this[P] && !this[j].destroyed;
    }
    get [R]() {
        const e = this[j];
        return e && (e[B] || e[O] || e[w]) || this[F] >= (this[W] || 1) || this[M] > 0;
    }
    [S](e) {
        ze(this), this.once("connect", e);
    }
    [Ae](e, n) {
        const t = e.origin || this[y].origin, a = "h2" === this[me] ? c[Ee](t, e, n) : c[Te](t, e, n);
        return this[U].push(a), this[b] || (null == i.bodyLength(a.body) && i.isIterable(a.body) ? (this[b] = 1, process.nextTick(nn, this)) : nn(this, !0)), this[b] && 2 !== this[x] && this[R] && (this[x] = 2), this[x] < 2;
    }
    async [re]() {
        return new Promise((e)=>{
            this[F] ? this[Ne] = e : e(null);
        });
    }
    async [ie](e) {
        return new Promise((n)=>{
            const t = this[U].splice(this[V]);
            for(let n = 0; n < t.length; n++){
                cn(this, t[n], e);
            }
            const a = ()=>{
                this[Ne] && (this[Ne](), this[Ne] = null), n();
            };
            null != this[ge] && (i.destroy(this[ge], e), this[ge] = null, this[pe] = null), this[j] ? i.destroy(this[j].on("close", a), e) : queueMicrotask(a), nn(this);
        });
    }
};
