"use strict";
const n = require("./module-2613.js"), s = require("./module-9278.js"), i = require("./module-8611.js"), { pipeline: o } = require("./module-2203.js"), a = require("./module-3589.js"), u = require("./module-1335.js"), c = require("./module-4576.js"), l = require("./module-4220.js"), { RequestContentLengthMismatchError: m, ResponseContentLengthMismatchError: d, InvalidArgumentError: f, RequestAbortedError: p, HeadersTimeoutError: h, HeadersOverflowError: g, SocketError: A, InformationalError: _, BodyTimeoutError: y, HTTPParserError: w, ResponseExceededMaxSizeError: S, ClientDestroyedError: J } = require("./module-8762.js"), B = require("./module-4003.js"), { kUrl: E, kReset: I, kServerName: C, kClient: b, kBusy: k, kParser: v, kConnect: q, kBlocking: R, kResuming: P, kRunning: T, kPending: x, kSize: N, kWriting: D, kQueue: U, kConnected: Q, kConnecting: M, kNeedDrain: O, kNoRef: F, kKeepAliveDefaultTimeout: L, kHostHeader: $, kPendingIdx: G, kRunningIdx: H, kError: K, kPipelining: V, kSocket: z, kKeepAliveTimeoutValue: W, kMaxHeadersSize: Y, kKeepAliveMaxTimeout: j, kKeepAliveTimeoutThreshold: X, kHeadersTimeout: Z, kBodyTimeout: tt, kStrictContentLength: et, kConnector: rt, kMaxRedirections: nt, kMaxRequests: st, kCounter: it, kClose: ot, kDestroy: at, kDispatch: ut, kInterceptors: ct, kLocalAddress: lt, kMaxResponseSize: mt, kHTTPConnVersion: dt, kHost: ft, kHTTP2Session: pt, kHTTP2SessionState: ht, kHTTP2BuildRequest: gt, kHTTP2CopyHeaders: At, kHTTP1BuildRequest: _t } = require("./module-5532.js");
let yt;
try {
    yt = require("./module-5675.js");
} catch  {
    yt = {
        constants: {}
    };
}
const { constants: { HTTP2_HEADER_AUTHORITY: wt, HTTP2_HEADER_METHOD: St, HTTP2_HEADER_PATH: Jt, HTTP2_HEADER_SCHEME: Bt, HTTP2_HEADER_CONTENT_LENGTH: Et, HTTP2_HEADER_EXPECT: It, HTTP2_HEADER_STATUS: Ct } } = yt;
let bt = !1;
const kt = Buffer[Symbol.species], vt = Symbol("kClosedResolve"), qt = {};
try {
    const t = require("./module-1637.js");
    qt.sendHeaders = t.channel("undici:client:sendHeaders"), qt.beforeConnect = t.channel("undici:client:beforeConnect"), qt.connectError = t.channel("undici:client:connectError"), qt.connected = t.channel("undici:client:connected");
} catch  {
    qt.sendHeaders = {
        hasSubscribers: !1
    }, qt.beforeConnect = {
        hasSubscribers: !1
    }, qt.connectError = {
        hasSubscribers: !1
    }, qt.connected = {
        hasSubscribers: !1
    };
}
function Rt(t) {
    n("ERR_TLS_CERT_ALTNAME_INVALID" !== t.code), this[z][K] = t, Yt(this[b], t);
}
function Pt(t, e, r) {
    const n = new _(`HTTP/2: "frameError" received - type ${t}, code ${e}`);
    0 === r && (this[z][K] = n, Yt(this[b], n));
}
function Tt() {
    a.destroy(this, new A("other side closed")), a.destroy(this[z], new A("other side closed"));
}
function xt(t) {
    const e = this[b], r = new _(`HTTP/2: "GOAWAY" frame received with code ${t}`);
    if (e[z] = null, e[pt] = null, e.destroyed) {
        n(0 === this[x]);
        const t = e[U].splice(e[H]);
        for(let e = 0; e < t.length; e++){
            ue(this, t[e], r);
        }
    } else if (e[T] > 0) {
        const t = e[U][e[H]];
        e[U][e[H]++] = null, ue(e, t, r);
    }
    e[G] = e[H], n(0 === e[T]), e.emit("disconnect", e[E], [
        e
    ], r), ee(e);
}
const Nt = require("./module-8311.js"), Dt = require("./module-1878.js"), Ut = Buffer.alloc(0);
let Qt = null, Mt = async function() {
    const t = process.env.JEST_WORKER_ID ? require("./module-417.js") : void 0;
    let e;
    try {
        e = await WebAssembly.compile(Buffer.from(require("./module-8435.js"), "base64"));
    } catch (n) {
        e = await WebAssembly.compile(Buffer.from(t || require("./module-417.js"), "base64"));
    }
    return await WebAssembly.instantiate(e, {
        env: {
            wasm_on_url: (t, e, r)=>0,
            wasm_on_status: (t, e, r)=>{
                n.strictEqual(Ot.ptr, t);
                const s = e - $t + Ft.byteOffset;
                return Ot.onStatus(new kt(Ft.buffer, s, r)) || 0;
            },
            wasm_on_message_begin: (t)=>(n.strictEqual(Ot.ptr, t), Ot.onMessageBegin() || 0),
            wasm_on_header_field: (t, e, r)=>{
                n.strictEqual(Ot.ptr, t);
                const s = e - $t + Ft.byteOffset;
                return Ot.onHeaderField(new kt(Ft.buffer, s, r)) || 0;
            },
            wasm_on_header_value: (t, e, r)=>{
                n.strictEqual(Ot.ptr, t);
                const s = e - $t + Ft.byteOffset;
                return Ot.onHeaderValue(new kt(Ft.buffer, s, r)) || 0;
            },
            wasm_on_headers_complete: (t, e, r, s)=>(n.strictEqual(Ot.ptr, t), Ot.onHeadersComplete(e, Boolean(r), Boolean(s)) || 0),
            wasm_on_body: (t, e, r)=>{
                n.strictEqual(Ot.ptr, t);
                const s = e - $t + Ft.byteOffset;
                return Ot.onBody(new kt(Ft.buffer, s, r)) || 0;
            },
            wasm_on_message_complete: (t)=>(n.strictEqual(Ot.ptr, t), Ot.onMessageComplete() || 0)
        }
    });
}();
Mt.catch();
let Ot = null, Ft = null, Lt = 0, $t = null;
const Gt = 1, Ht = 3;
class Kt {
    constructor(t, e, { exports: r }){
        n(Number.isFinite(t[Y]) && t[Y] > 0), this.llhttp = r, this.ptr = this.llhttp.llhttp_alloc(Nt.TYPE.RESPONSE), this.client = t, this.socket = e, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = t[Y], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = t[mt];
    }
    setTimeout(t, e) {
        this.timeoutType = e, t !== this.timeoutValue ? (u.clearTimeout(this.timeout), t ? (this.timeout = u.setTimeout(Vt, t, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = t) : this.timeout && this.timeout.refresh && this.timeout.refresh();
    }
    resume() {
        !this.socket.destroyed && this.paused && (n(null != this.ptr), n(null == Ot), this.llhttp.llhttp_resume(this.ptr), n(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || Ut), this.readMore());
    }
    readMore() {
        for(; !this.paused && this.ptr;){
            const t = this.socket.read();
            if (null === t) break;
            this.execute(t);
        }
    }
    execute(t) {
        n(null != this.ptr), n(null == Ot), n(!this.paused);
        const { socket: e, llhttp: r } = this;
        t.length > Lt && ($t && r.free($t), Lt = 4096 * Math.ceil(t.length / 4096), $t = r.malloc(Lt)), new Uint8Array(r.memory.buffer, $t, Lt).set(t);
        try {
            let n;
            try {
                Ft = t, Ot = this, n = r.llhttp_execute(this.ptr, $t, t.length);
            } catch (t) {
                throw t;
            } finally{
                Ot = null, Ft = null;
            }
            const s = r.llhttp_get_error_pos(this.ptr) - $t;
            if (n === Nt.ERROR.PAUSED_UPGRADE) this.onUpgrade(t.slice(s));
            else if (n === Nt.ERROR.PAUSED) this.paused = !0, e.unshift(t.slice(s));
            else if (n !== Nt.ERROR.OK) {
                const e = r.llhttp_get_error_reason(this.ptr);
                let i = "";
                if (e) {
                    const t = new Uint8Array(r.memory.buffer, e).indexOf(0);
                    i = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(r.memory.buffer, e, t).toString() + ")";
                }
                throw new w(i, Nt.ERROR[n], t.slice(s));
            }
        } catch (t) {
            a.destroy(e, t);
        }
    }
    destroy() {
        n(null != this.ptr), n(null == Ot), this.llhttp.llhttp_free(this.ptr), this.ptr = null, u.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
    }
    onStatus(t) {
        this.statusText = t.toString();
    }
    onMessageBegin() {
        const { socket: t, client: e } = this;
        if (t.destroyed) return -1;
        return e[U][e[H]] ? void 0 : -1;
    }
    onHeaderField(t) {
        const e = this.headers.length;
        1 & e ? this.headers[e - 1] = Buffer.concat([
            this.headers[e - 1],
            t
        ]) : this.headers.push(t), this.trackHeader(t.length);
    }
    onHeaderValue(t) {
        let e = this.headers.length;
        1 & ~e ? this.headers[e - 1] = Buffer.concat([
            this.headers[e - 1],
            t
        ]) : (this.headers.push(t), e += 1);
        const r = this.headers[e - 2];
        10 === r.length && "keep-alive" === r.toString().toLowerCase() ? this.keepAlive += t.toString() : 10 === r.length && "connection" === r.toString().toLowerCase() ? this.connection += t.toString() : 14 === r.length && "content-length" === r.toString().toLowerCase() && (this.contentLength += t.toString()), this.trackHeader(t.length);
    }
    trackHeader(t) {
        this.headersSize += t, this.headersSize >= this.headersMaxSize && a.destroy(this.socket, new g);
    }
    onUpgrade(t) {
        const { upgrade: e, client: r, socket: s, headers: i, statusCode: o } = this;
        n(e);
        const u = r[U][r[H]];
        n(u), n(!s.destroyed), n(s === r[z]), n(!this.paused), n(u.upgrade || "CONNECT" === u.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, s.unshift(t), s[v].destroy(), s[v] = null, s[b] = null, s[K] = null, s.removeListener("error", Wt).removeListener("readable", zt).removeListener("end", jt).removeListener("close", Xt), r[z] = null, r[U][r[H]++] = null, r.emit("disconnect", r[E], [
            r
        ], new _("upgrade"));
        try {
            u.onUpgrade(o, i, s);
        } catch (t) {
            a.destroy(s, t);
        }
        ee(r);
    }
    onHeadersComplete(t, e, r) {
        const { client: s, socket: i, headers: o, statusText: u } = this;
        if (i.destroyed) return -1;
        const c = s[U][s[H]];
        if (!c) return -1;
        if (n(!this.upgrade), n(this.statusCode < 200), 100 === t) return a.destroy(i, new A("bad response", a.getSocketInfo(i))), -1;
        if (e && !c.upgrade) return a.destroy(i, new A("bad upgrade", a.getSocketInfo(i))), -1;
        if (n.strictEqual(this.timeoutType, Gt), this.statusCode = t, this.shouldKeepAlive = r || "HEAD" === c.method && !i[I] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
            const t = null != c.bodyTimeout ? c.bodyTimeout : s[tt];
            this.setTimeout(t, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === c.method) return n(1 === s[T]), this.upgrade = !0, 2;
        if (e) return n(1 === s[T]), this.upgrade = !0, 2;
        if (n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s[V]) {
            const t = this.keepAlive ? a.parseKeepAliveTimeout(this.keepAlive) : null;
            if (null != t) {
                const e = Math.min(t - s[X], s[j]);
                e <= 0 ? i[I] = !0 : s[W] = e;
            } else s[W] = s[L];
        } else i[I] = !0;
        const l = !1 === c.onHeaders(t, o, this.resume, u);
        return c.aborted ? -1 : "HEAD" === c.method || t < 200 ? 1 : (i[R] && (i[R] = !1, ee(s)), l ? Nt.ERROR.PAUSED : 0);
    }
    onBody(t) {
        const { client: e, socket: r, statusCode: s, maxResponseSize: i } = this;
        if (r.destroyed) return -1;
        const o = e[U][e[H]];
        return n(o), n.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), n(s >= 200), i > -1 && this.bytesRead + t.length > i ? (a.destroy(r, new S), -1) : (this.bytesRead += t.length, !1 === o.onData(t) ? Nt.ERROR.PAUSED : void 0);
    }
    onMessageComplete() {
        const { client: t, socket: e, statusCode: r, upgrade: s, headers: i, contentLength: o, bytesRead: u, shouldKeepAlive: c } = this;
        if (e.destroyed && (!r || c)) return -1;
        if (s) return;
        const l = t[U][t[H]];
        return n(l), n(r >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, r < 200 ? void 0 : "HEAD" !== l.method && o && u !== parseInt(o, 10) ? (a.destroy(e, new d), -1) : (l.onComplete(i), t[U][t[H]++] = null, e[D] ? (n.strictEqual(t[T], 0), a.destroy(e, new _("reset")), Nt.ERROR.PAUSED) : c ? e[I] && 0 === t[T] ? (a.destroy(e, new _("reset")), Nt.ERROR.PAUSED) : void (1 === t[V] ? setImmediate(ee, t) : ee(t)) : (a.destroy(e, new _("reset")), Nt.ERROR.PAUSED));
    }
}
function Vt(t) {
    const { socket: e, timeoutType: r, client: s } = t;
    r === Gt ? (!e[D] || e.writableNeedDrain || s[T] > 1) && (n(!t.paused, "cannot be paused while waiting for headers"), a.destroy(e, new h)) : 2 === r ? t.paused || a.destroy(e, new y) : r === Ht && (n(0 === s[T] && s[W]), a.destroy(e, new _("socket idle timeout")));
}
function zt() {
    const { [v]: t } = this;
    t && t.readMore();
}
function Wt(t) {
    const { [b]: e, [v]: r } = this;
    n("ERR_TLS_CERT_ALTNAME_INVALID" !== t.code), "h2" === e[dt] || "ECONNRESET" !== t.code || !r.statusCode || r.shouldKeepAlive ? (this[K] = t, Yt(this[b], t)) : r.onMessageComplete();
}
function Yt(t, e) {
    if (0 === t[T] && "UND_ERR_INFO" !== e.code && "UND_ERR_SOCKET" !== e.code) {
        n(t[G] === t[H]);
        const r = t[U].splice(t[H]);
        for(let n = 0; n < r.length; n++){
            ue(t, r[n], e);
        }
        n(0 === t[N]);
    }
}
function jt() {
    const { [v]: t, [b]: e } = this;
    "h2" === e[dt] || !t.statusCode || t.shouldKeepAlive ? a.destroy(this, new A("other side closed", a.getSocketInfo(this))) : t.onMessageComplete();
}
function Xt() {
    const { [b]: t, [v]: e } = this;
    "h1" === t[dt] && e && (this[K] || !e.statusCode || e.shouldKeepAlive || e.onMessageComplete(), this[v].destroy(), this[v] = null);
    const r = this[K] || new A("closed", a.getSocketInfo(this));
    if (t[z] = null, t.destroyed) {
        n(0 === t[x]);
        const e = t[U].splice(t[H]);
        for(let n = 0; n < e.length; n++){
            ue(t, e[n], r);
        }
    } else if (t[T] > 0 && "UND_ERR_INFO" !== r.code) {
        const e = t[U][t[H]];
        t[U][t[H]++] = null, ue(t, e, r);
    }
    t[G] = t[H], n(0 === t[T]), t.emit("disconnect", t[E], [
        t
    ], r), ee(t);
}
async function Zt(t) {
    n(!t[M]), n(!t[z]);
    let { host: e, hostname: r, protocol: i, port: o } = t[E];
    if ("[" === r[0]) {
        const t = r.indexOf("]");
        n(-1 !== t);
        const e = r.substring(1, t);
        n(s.isIP(e)), r = e;
    }
    t[M] = !0, qt.beforeConnect.hasSubscribers && qt.beforeConnect.publish({
        connectParams: {
            host: e,
            hostname: r,
            protocol: i,
            port: o,
            servername: t[C],
            localAddress: t[lt]
        },
        connector: t[rt]
    });
    try {
        const s = await new Promise((n, s)=>{
            t[rt]({
                host: e,
                hostname: r,
                protocol: i,
                port: o,
                servername: t[C],
                localAddress: t[lt]
            }, (t, e)=>{
                t ? s(t) : n(e);
            });
        });
        if (t.destroyed) return void a.destroy(s.on("error", ()=>{}), new J);
        t[M] = !1, n(s);
        if ("h2" === s.alpnProtocol) {
            bt || (bt = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
                code: "UNDICI-H2"
            }));
            const e = yt.connect(t[E], {
                createConnection: ()=>s,
                peerMaxConcurrentStreams: t[ht].maxConcurrentStreams
            });
            t[dt] = "h2", e[b] = t, e[z] = s, e.on("error", Rt), e.on("frameError", Pt), e.on("end", Tt), e.on("goaway", xt), e.on("close", Xt), e.unref(), t[pt] = e, s[pt] = e;
        } else Qt || (Qt = await Mt, Mt = null), s[F] = !1, s[D] = !1, s[I] = !1, s[R] = !1, s[v] = new Kt(t, s, Qt);
        s[it] = 0, s[st] = t[st], s[b] = t, s[K] = null, s.on("error", Wt).on("readable", zt).on("end", jt).on("close", Xt), t[z] = s, qt.connected.hasSubscribers && qt.connected.publish({
            connectParams: {
                host: e,
                hostname: r,
                protocol: i,
                port: o,
                servername: t[C],
                localAddress: t[lt]
            },
            connector: t[rt],
            socket: s
        }), t.emit("connect", t[E], [
            t
        ]);
    } catch (s) {
        if (t.destroyed) return;
        if (t[M] = !1, qt.connectError.hasSubscribers && qt.connectError.publish({
            connectParams: {
                host: e,
                hostname: r,
                protocol: i,
                port: o,
                servername: t[C],
                localAddress: t[lt]
            },
            connector: t[rt],
            error: s
        }), "ERR_TLS_CERT_ALTNAME_INVALID" === s.code) for(n(0 === t[T]); t[x] > 0 && t[U][t[G]].servername === t[C];){
            const e = t[U][t[G]++];
            ue(t, e, s);
        }
        else Yt(t, s);
        t.emit("connectionError", t[E], [
            t
        ], s);
    }
    ee(t);
}
function te(t) {
    t[O] = 0, t.emit("drain", t[E], [
        t
    ]);
}
function ee(t, e) {
    2 !== t[P] && (t[P] = 2, function(t, e) {
        for(;;){
            if (t.destroyed) return void n(0 === t[x]);
            if (t[vt] && !t[N]) return t[vt](), void (t[vt] = null);
            const r = t[z];
            if (r && !r.destroyed && "h2" !== r.alpnProtocol) {
                if (0 === t[N] ? !r[F] && r.unref && (r.unref(), r[F] = !0) : r[F] && r.ref && (r.ref(), r[F] = !1), 0 === t[N]) r[v].timeoutType !== Ht && r[v].setTimeout(t[W], Ht);
                else if (t[T] > 0 && r[v].statusCode < 200 && r[v].timeoutType !== Gt) {
                    const e = t[U][t[H]], n = null != e.headersTimeout ? e.headersTimeout : t[Z];
                    r[v].setTimeout(n, Gt);
                }
            }
            if (t[k]) t[O] = 2;
            else if (2 === t[O]) {
                e ? (t[O] = 1, process.nextTick(te, t)) : te(t);
                continue;
            }
            if (0 === t[x]) return;
            if (t[T] >= (t[V] || 1)) return;
            const s = t[U][t[G]];
            if ("https:" === t[E].protocol && t[C] !== s.servername) {
                if (t[T] > 0) return;
                if (t[C] = s.servername, r && r.servername !== s.servername) return void a.destroy(r, new _("servername changed"));
            }
            if (t[M]) return;
            if (!r && !t[pt]) return void Zt(t);
            if (r.destroyed || r[D] || r[I] || r[R]) return;
            if (t[T] > 0 && !s.idempotent) return;
            if (t[T] > 0 && (s.upgrade || "CONNECT" === s.method)) return;
            if (t[T] > 0 && 0 !== a.bodyLength(s.body) && (a.isStream(s.body) || a.isAsyncIterable(s.body))) return;
            !s.aborted && ne(t, s) ? t[G]++ : t[U].splice(t[G], 1);
        }
    }(t, e), t[P] = 0, t[H] > 256 && (t[U].splice(0, t[H]), t[G] -= t[H], t[H] = 0));
}
function re(t) {
    return "GET" !== t && "HEAD" !== t && "OPTIONS" !== t && "TRACE" !== t && "CONNECT" !== t;
}
function ne(t, e) {
    if ("h2" === t[dt]) return void function(t, e, r) {
        const { body: s, method: i, path: o, host: u, upgrade: l, expectContinue: d, signal: f, headers: h } = r;
        let g, A;
        g = "string" == typeof h ? c[At](h.trim()) : h;
        if (l) return ue(t, r, new Error("Upgrade not supported for H2")), !1;
        try {
            r.onConnect((e)=>{
                r.aborted || r.completed || ue(t, r, e || new p);
            });
        } catch (e) {
            ue(t, r, e);
        }
        if (r.aborted) return !1;
        const y = t[ht];
        if (g[wt] = u || t[ft], g[St] = i, "CONNECT" === i) return e.ref(), A = e.request(g, {
            endStream: !1,
            signal: f
        }), A.id && !A.pending ? (r.onUpgrade(null, null, A), ++y.openStreams) : A.once("ready", ()=>{
            r.onUpgrade(null, null, A), ++y.openStreams;
        }), A.once("close", ()=>{
            y.openStreams -= 1, 0 === y.openStreams && e.unref();
        }), !0;
        g[Jt] = o, g[Bt] = "https";
        const w = "PUT" === i || "POST" === i || "PATCH" === i;
        s && "function" == typeof s.read && s.read(0);
        let S = a.bodyLength(s);
        null == S && (S = r.contentLength);
        0 !== S && w || (S = null);
        if (re(i) && S > 0 && null != r.contentLength && r.contentLength !== S) {
            if (t[et]) return ue(t, r, new m), !1;
            process.emitWarning(new m);
        }
        null != S && (n(s, "no body must not have content length"), g[Et] = `${S}`);
        e.ref();
        const J = "GET" === i || "HEAD" === i;
        d ? (g[It] = "100-continue", A = e.request(g, {
            endStream: J,
            signal: f
        }), A.once("continue", B)) : (A = e.request(g, {
            endStream: J,
            signal: f
        }), B());
        return ++y.openStreams, A.once("response", (t)=>{
            const { [Ct]: e, ...n } = t;
            !1 === r.onHeaders(Number(e), n, A.resume.bind(A), "") && A.pause();
        }), A.once("end", ()=>{
            r.onComplete([]);
        }), A.on("data", (t)=>{
            !1 === r.onData(t) && A.pause();
        }), A.once("close", ()=>{
            y.openStreams -= 1, 0 === y.openStreams && e.unref();
        }), A.once("error", function(e) {
            !t[pt] || t[pt].destroyed || this.closed || this.destroyed || (y.streams -= 1, a.destroy(A, e));
        }), A.once("frameError", (e, n)=>{
            const s = new _(`HTTP/2: "frameError" received - type ${e}, code ${n}`);
            ue(t, r, s), !t[pt] || t[pt].destroyed || this.closed || this.destroyed || (y.streams -= 1, a.destroy(A, s));
        }), !0;
        function B() {
            s ? a.isBuffer(s) ? (n(S === s.byteLength, "buffer body must have content length"), A.cork(), A.write(s), A.uncork(), A.end(), r.onBodySent(s), r.onRequestSent()) : a.isBlobLike(s) ? "function" == typeof s.stream ? oe({
                client: t,
                request: r,
                contentLength: S,
                h2stream: A,
                expectsPayload: w,
                body: s.stream(),
                socket: t[z],
                header: ""
            }) : ie({
                body: s,
                client: t,
                request: r,
                contentLength: S,
                expectsPayload: w,
                h2stream: A,
                header: "",
                socket: t[z]
            }) : a.isStream(s) ? se({
                body: s,
                client: t,
                request: r,
                contentLength: S,
                expectsPayload: w,
                socket: t[z],
                h2stream: A,
                header: ""
            }) : a.isIterable(s) ? oe({
                body: s,
                client: t,
                request: r,
                contentLength: S,
                expectsPayload: w,
                header: "",
                h2stream: A,
                socket: t[z]
            }) : n(!1) : r.onRequestSent();
        }
    }(t, t[pt], e);
    const { body: r, method: s, path: i, host: o, upgrade: u, headers: l, blocking: d, reset: f } = e, h = "PUT" === s || "POST" === s || "PATCH" === s;
    r && "function" == typeof r.read && r.read(0);
    const g = a.bodyLength(r);
    let A = g;
    if (null === A && (A = e.contentLength), 0 !== A || h || (A = null), re(s) && A > 0 && null !== e.contentLength && e.contentLength !== A) {
        if (t[et]) return ue(t, e, new m), !1;
        process.emitWarning(new m);
    }
    const y = t[z];
    try {
        e.onConnect((r)=>{
            e.aborted || e.completed || (ue(t, e, r || new p), a.destroy(y, new _("aborted")));
        });
    } catch (r) {
        ue(t, e, r);
    }
    if (e.aborted) return !1;
    "HEAD" === s && (y[I] = !0), (u || "CONNECT" === s) && (y[I] = !0), null != f && (y[I] = f), t[st] && y[it]++ >= t[st] && (y[I] = !0), d && (y[R] = !0);
    let w = `${s} ${i} HTTP/1.1\r\n`;
    return w += "string" == typeof o ? `host: ${o}\r\n` : t[$], u ? w += `connection: upgrade\r\nupgrade: ${u}\r\n` : t[V] && !y[I] ? w += "connection: keep-alive\r\n" : w += "connection: close\r\n", l && (w += l), qt.sendHeaders.hasSubscribers && qt.sendHeaders.publish({
        request: e,
        headers: w,
        socket: y
    }), r && 0 !== g ? a.isBuffer(r) ? (n(A === r.byteLength, "buffer body must have content length"), y.cork(), y.write(`${w}content-length: ${A}\r\n\r\n`, "latin1"), y.write(r), y.uncork(), e.onBodySent(r), e.onRequestSent(), h || (y[I] = !0)) : a.isBlobLike(r) ? "function" == typeof r.stream ? oe({
        body: r.stream(),
        client: t,
        request: e,
        socket: y,
        contentLength: A,
        header: w,
        expectsPayload: h
    }) : ie({
        body: r,
        client: t,
        request: e,
        socket: y,
        contentLength: A,
        header: w,
        expectsPayload: h
    }) : a.isStream(r) ? se({
        body: r,
        client: t,
        request: e,
        socket: y,
        contentLength: A,
        header: w,
        expectsPayload: h
    }) : a.isIterable(r) ? oe({
        body: r,
        client: t,
        request: e,
        socket: y,
        contentLength: A,
        header: w,
        expectsPayload: h
    }) : n(!1) : (0 === A ? y.write(`${w}content-length: 0\r\n\r\n`, "latin1") : (n(null === A, "no body must not have content length"), y.write(`${w}\r\n`, "latin1")), e.onRequestSent()), !0;
}
function se({ h2stream: t, body: e, client: r, request: s, socket: i, contentLength: u, header: c, expectsPayload: l }) {
    if (n(0 !== u || 0 === r[T], "stream body cannot be pipelined"), "h2" === r[dt]) {
        const _ = o(e, t, (r)=>{
            r ? (a.destroy(e, r), a.destroy(t, r)) : s.onRequestSent();
        });
        function y(t) {
            s.onBodySent(t);
        }
        return _.on("data", y), void _.once("end", ()=>{
            _.removeListener("data", y), a.destroy(_);
        });
    }
    let m = !1;
    const d = new ae({
        socket: i,
        request: s,
        contentLength: u,
        client: r,
        expectsPayload: l,
        header: c
    }), f = function(t) {
        if (!m) try {
            !d.write(t) && this.pause && this.pause();
        } catch (t) {
            a.destroy(this, t);
        }
    }, h = function() {
        m || e.resume && e.resume();
    }, g = function() {
        if (m) return;
        const t = new p;
        queueMicrotask(()=>A(t));
    }, A = function(t) {
        if (!m) {
            if (m = !0, n(i.destroyed || i[D] && r[T] <= 1), i.off("drain", h).off("error", A), e.removeListener("data", f).removeListener("end", A).removeListener("error", A).removeListener("close", g), !t) try {
                d.end();
            } catch (e) {
                t = e;
            }
            d.destroy(t), !t || "UND_ERR_INFO" === t.code && "reset" === t.message ? a.destroy(e) : a.destroy(e, t);
        }
    };
    e.on("data", f).on("end", A).on("error", A).on("close", g), e.resume && e.resume(), i.on("drain", h).on("error", A);
}
async function ie({ h2stream: t, body: e, client: r, request: s, socket: i, contentLength: o, header: u, expectsPayload: c }) {
    n(o === e.size, "blob body must have content length");
    const l = "h2" === r[dt];
    try {
        if (null != o && o !== e.size) throw new m;
        const n = Buffer.from(await e.arrayBuffer());
        l ? (t.cork(), t.write(n), t.uncork()) : (i.cork(), i.write(`${u}content-length: ${o}\r\n\r\n`, "latin1"), i.write(n), i.uncork()), s.onBodySent(n), s.onRequestSent(), c || (i[I] = !0), ee(r);
    } catch (e) {
        a.destroy(l ? t : i, e);
    }
}
async function oe({ h2stream: t, body: e, client: r, request: s, socket: i, contentLength: o, header: a, expectsPayload: u }) {
    n(0 !== o || 0 === r[T], "iterator body cannot be pipelined");
    let c = null;
    function l() {
        if (c) {
            const t = c;
            c = null, t();
        }
    }
    const m = ()=>new Promise((t, e)=>{
            n(null === c), i[K] ? e(i[K]) : c = t;
        });
    if ("h2" === r[dt]) {
        t.on("close", l).on("drain", l);
        try {
            for await (const r of e){
                if (i[K]) throw i[K];
                const e = t.write(r);
                s.onBodySent(r), e || await m();
            }
        } catch (e) {
            t.destroy(e);
        } finally{
            s.onRequestSent(), t.end(), t.off("close", l).off("drain", l);
        }
        return;
    }
    i.on("close", l).on("drain", l);
    const d = new ae({
        socket: i,
        request: s,
        contentLength: o,
        client: r,
        expectsPayload: u,
        header: a
    });
    try {
        for await (const t of e){
            if (i[K]) throw i[K];
            d.write(t) || await m();
        }
        d.end();
    } catch (t) {
        d.destroy(t);
    } finally{
        i.off("close", l).off("drain", l);
    }
}
class ae {
    constructor({ socket: t, request: e, contentLength: r, client: n, expectsPayload: s, header: i }){
        this.socket = t, this.request = e, this.contentLength = r, this.client = n, this.bytesWritten = 0, this.expectsPayload = s, this.header = i, t[D] = !0;
    }
    write(t) {
        const { socket: e, request: r, contentLength: n, client: s, bytesWritten: i, expectsPayload: o, header: a } = this;
        if (e[K]) throw e[K];
        if (e.destroyed) return !1;
        const u = Buffer.byteLength(t);
        if (!u) return !0;
        if (null !== n && i + u > n) {
            if (s[et]) throw new m;
            process.emitWarning(new m);
        }
        e.cork(), 0 === i && (o || (e[I] = !0), null === n ? e.write(`${a}transfer-encoding: chunked\r\n`, "latin1") : e.write(`${a}content-length: ${n}\r\n\r\n`, "latin1")), null === n && e.write(`\r\n${u.toString(16)}\r\n`, "latin1"), this.bytesWritten += u;
        const c = e.write(t);
        return e.uncork(), r.onBodySent(t), c || e[v].timeout && e[v].timeoutType === Gt && e[v].timeout.refresh && e[v].timeout.refresh(), c;
    }
    end() {
        const { socket: t, contentLength: e, client: r, bytesWritten: n, expectsPayload: s, header: i, request: o } = this;
        if (o.onRequestSent(), t[D] = !1, t[K]) throw t[K];
        if (!t.destroyed) {
            if (0 === n ? s ? t.write(`${i}content-length: 0\r\n\r\n`, "latin1") : t.write(`${i}\r\n`, "latin1") : null === e && t.write("\r\n0\r\n\r\n", "latin1"), null !== e && n !== e) {
                if (r[et]) throw new m;
                process.emitWarning(new m);
            }
            t[v].timeout && t[v].timeoutType === Gt && t[v].timeout.refresh && t[v].timeout.refresh(), ee(r);
        }
    }
    destroy(t) {
        const { socket: e, client: r } = this;
        e[D] = !1, t && (n(r[T] <= 1, "pipeline should only contain this request"), a.destroy(e, t));
    }
}
function ue(t, e, r) {
    try {
        e.onError(r), n(e.aborted);
    } catch (r) {
        t.emit("error", r);
    }
}
module.exports = class extends l {
    constructor(t, { interceptors: e, maxHeaderSize: r, headersTimeout: n, socketTimeout: o, requestTimeout: u, connectTimeout: c, bodyTimeout: l, idleTimeout: m, keepAlive: d, keepAliveTimeout: p, maxKeepAliveTimeout: h, keepAliveMaxTimeout: g, keepAliveTimeoutThreshold: A, socketPath: _, pipelining: y, tls: w, strictContentLength: S, maxCachedSessions: J, maxRedirections: I, connect: b, maxRequestsPerClient: k, localAddress: v, maxResponseSize: q, autoSelectFamily: R, autoSelectFamilyAttemptTimeout: T, allowH2: x, maxConcurrentStreams: N } = {}){
        if (super(), void 0 !== d) throw new f("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== o) throw new f("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== u) throw new f("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== m) throw new f("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== h) throw new f("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != r && !Number.isFinite(r)) throw new f("invalid maxHeaderSize");
        if (null != _ && "string" != typeof _) throw new f("invalid socketPath");
        if (null != c && (!Number.isFinite(c) || c < 0)) throw new f("invalid connectTimeout");
        if (null != p && (!Number.isFinite(p) || p <= 0)) throw new f("invalid keepAliveTimeout");
        if (null != g && (!Number.isFinite(g) || g <= 0)) throw new f("invalid keepAliveMaxTimeout");
        if (null != A && !Number.isFinite(A)) throw new f("invalid keepAliveTimeoutThreshold");
        if (null != n && (!Number.isInteger(n) || n < 0)) throw new f("headersTimeout must be a positive integer or zero");
        if (null != l && (!Number.isInteger(l) || l < 0)) throw new f("bodyTimeout must be a positive integer or zero");
        if (null != b && "function" != typeof b && "object" != typeof b) throw new f("connect must be a function or an object");
        if (null != I && (!Number.isInteger(I) || I < 0)) throw new f("maxRedirections must be a positive number");
        if (null != k && (!Number.isInteger(k) || k < 0)) throw new f("maxRequestsPerClient must be a positive number");
        if (null != v && ("string" != typeof v || 0 === s.isIP(v))) throw new f("localAddress must be valid string IP address");
        if (null != q && (!Number.isInteger(q) || q < -1)) throw new f("maxResponseSize must be a positive number");
        if (null != T && (!Number.isInteger(T) || T < -1)) throw new f("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != x && "boolean" != typeof x) throw new f("allowH2 must be a valid boolean value");
        if (null != N && ("number" != typeof N || N < 1)) throw new f("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof b && (b = B({
            ...w,
            maxCachedSessions: J,
            allowH2: x,
            socketPath: _,
            timeout: c,
            ...a.nodeHasAutoSelectFamily && R ? {
                autoSelectFamily: R,
                autoSelectFamilyAttemptTimeout: T
            } : void 0,
            ...b
        })), this[ct] = e && e.Client && Array.isArray(e.Client) ? e.Client : [
            Dt({
                maxRedirections: I
            })
        ], this[E] = a.parseOrigin(t), this[rt] = b, this[z] = null, this[V] = null != y ? y : 1, this[Y] = r || i.maxHeaderSize, this[L] = p ?? 4e3, this[j] = g ?? 6e5, this[X] = A ?? 1e3, this[W] = this[L], this[C] = null, this[lt] = null != v ? v : null, this[P] = 0, this[O] = 0, this[$] = `host: ${this[E].hostname}${this[E].port ? `:${this[E].port}` : ""}\r\n`, this[tt] = null != l ? l : 3e5, this[Z] = null != n ? n : 3e5, this[et] = S ?? !0, this[nt] = I, this[st] = k, this[vt] = null, this[mt] = q > -1 ? q : -1, this[dt] = "h1", this[pt] = null, this[ht] = x ? {
            openStreams: 0,
            maxConcurrentStreams: null != N ? N : 100
        } : null, this[ft] = `${this[E].hostname}${this[E].port ? `:${this[E].port}` : ""}`, this[U] = [], this[H] = 0, this[G] = 0;
    }
    get pipelining() {
        return this[V];
    }
    set pipelining(t) {
        this[V] = t, ee(this, !0);
    }
    get [x]() {
        return this[U].length - this[G];
    }
    get [T]() {
        return this[G] - this[H];
    }
    get [N]() {
        return this[U].length - this[H];
    }
    get [Q]() {
        return !!this[z] && !this[M] && !this[z].destroyed;
    }
    get [k]() {
        const t = this[z];
        return t && (t[I] || t[D] || t[R]) || this[N] >= (this[V] || 1) || this[x] > 0;
    }
    [q](t) {
        Zt(this), this.once("connect", t);
    }
    [ut](t, e) {
        const r = t.origin || this[E].origin, n = "h2" === this[dt] ? c[gt](r, t, e) : c[_t](r, t, e);
        return this[U].push(n), this[P] || (null == a.bodyLength(n.body) && a.isIterable(n.body) ? (this[P] = 1, process.nextTick(ee, this)) : ee(this, !0)), this[P] && 2 !== this[O] && this[k] && (this[O] = 2), this[O] < 2;
    }
    async [ot]() {
        return new Promise((t)=>{
            this[N] ? this[vt] = t : t(null);
        });
    }
    async [at](t) {
        return new Promise((e)=>{
            const r = this[U].splice(this[G]);
            for(let e = 0; e < r.length; e++){
                ue(this, r[e], t);
            }
            const n = ()=>{
                this[vt] && (this[vt](), this[vt] = null), e();
            };
            null != this[pt] && (a.destroy(this[pt], t), this[pt] = null, this[ht] = null), this[z] ? a.destroy(this[z].on("close", n), t) : queueMicrotask(n), ee(this);
        });
    }
};
