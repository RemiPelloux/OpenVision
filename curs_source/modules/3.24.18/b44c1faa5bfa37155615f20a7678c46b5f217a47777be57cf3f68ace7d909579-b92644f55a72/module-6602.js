"use strict";
const n = require("./module-42613.js"), s = require("./module-69278.js"), o = require("./module-58611.js"), { pipeline: i } = require("./module-2203.js"), a = require("./module-83589.js"), c = require("./module-1335.js"), l = require("./module-74576.js"), u = require("./module-84220.js"), { RequestContentLengthMismatchError: d, ResponseContentLengthMismatchError: p, InvalidArgumentError: m, RequestAbortedError: h, HeadersTimeoutError: f, HeadersOverflowError: g, SocketError: y, InformationalError: w, BodyTimeoutError: v, HTTPParserError: _, ResponseExceededMaxSizeError: A, ClientDestroyedError: S } = require("./module-48762.js"), b = require("./module-4003.js"), { kUrl: E, kReset: I, kServerName: C, kClient: k, kBusy: x, kParser: T, kConnect: R, kBlocking: B, kResuming: P, kRunning: J, kPending: M, kSize: q, kWriting: D, kQueue: O, kConnected: N, kConnecting: F, kNeedDrain: U, kNoRef: L, kKeepAliveDefaultTimeout: $, kHostHeader: Q, kPendingIdx: j, kRunningIdx: G, kError: H, kPipelining: z, kSocket: W, kKeepAliveTimeoutValue: V, kMaxHeadersSize: K, kKeepAliveMaxTimeout: Y, kKeepAliveTimeoutThreshold: Z, kHeadersTimeout: X, kBodyTimeout: ee, kStrictContentLength: te, kConnector: re, kMaxRedirections: ne, kMaxRequests: se, kCounter: oe, kClose: ie, kDestroy: ae, kDispatch: ce, kInterceptors: le, kLocalAddress: ue, kMaxResponseSize: de, kHTTPConnVersion: pe, kHost: me, kHTTP2Session: he, kHTTP2SessionState: fe, kHTTP2BuildRequest: ge, kHTTP2CopyHeaders: ye, kHTTP1BuildRequest: we } = require("./module-15532.js");
let ve;
try {
    ve = require("./module-85675.js");
} catch  {
    ve = {
        constants: {}
    };
}
const { constants: { HTTP2_HEADER_AUTHORITY: _e, HTTP2_HEADER_METHOD: Ae, HTTP2_HEADER_PATH: Se, HTTP2_HEADER_SCHEME: be, HTTP2_HEADER_CONTENT_LENGTH: Ee, HTTP2_HEADER_EXPECT: Ie, HTTP2_HEADER_STATUS: Ce } } = ve;
let ke = !1;
const xe = Buffer[Symbol.species], Te = Symbol("kClosedResolve"), Re = {};
try {
    const e = require("./module-31637.js");
    Re.sendHeaders = e.channel("undici:client:sendHeaders"), Re.beforeConnect = e.channel("undici:client:beforeConnect"), Re.connectError = e.channel("undici:client:connectError"), Re.connected = e.channel("undici:client:connected");
} catch  {
    Re.sendHeaders = {
        hasSubscribers: !1
    }, Re.beforeConnect = {
        hasSubscribers: !1
    }, Re.connectError = {
        hasSubscribers: !1
    }, Re.connected = {
        hasSubscribers: !1
    };
}
function Be(e) {
    n("ERR_TLS_CERT_ALTNAME_INVALID" !== e.code), this[W][H] = e, Ke(this[k], e);
}
function Pe(e, t, r) {
    const n = new w(`HTTP/2: "frameError" received - type ${e}, code ${t}`);
    0 === r && (this[W][H] = n, Ke(this[k], n));
}
function Je() {
    a.destroy(this, new y("other side closed")), a.destroy(this[W], new y("other side closed"));
}
function Me(e) {
    const t = this[k], r = new w(`HTTP/2: "GOAWAY" frame received with code ${e}`);
    if (t[W] = null, t[he] = null, t.destroyed) {
        n(0 === this[M]);
        const e = t[O].splice(t[G]);
        for(let t = 0; t < e.length; t++){
            ct(this, e[t], r);
        }
    } else if (t[J] > 0) {
        const e = t[O][t[G]];
        t[O][t[G]++] = null, ct(t, e, r);
    }
    t[j] = t[G], n(0 === t[J]), t.emit("disconnect", t[E], [
        t
    ], r), tt(t);
}
const qe = require("./module-48311.js"), De = require("./module-31878.js"), Oe = Buffer.alloc(0);
let Ne = null, Fe = async function() {
    const e = process.env.JEST_WORKER_ID ? require("./module-40417.js") : void 0;
    let t;
    try {
        t = await WebAssembly.compile(Buffer.from(require("./module-68435.js"), "base64"));
    } catch (n) {
        t = await WebAssembly.compile(Buffer.from(e || require("./module-40417.js"), "base64"));
    }
    return await WebAssembly.instantiate(t, {
        env: {
            wasm_on_url: (e, t, r)=>0,
            wasm_on_status: (e, t, r)=>{
                n.strictEqual(Ue.ptr, e);
                const s = t - Qe + Le.byteOffset;
                return Ue.onStatus(new xe(Le.buffer, s, r)) || 0;
            },
            wasm_on_message_begin: (e)=>(n.strictEqual(Ue.ptr, e), Ue.onMessageBegin() || 0),
            wasm_on_header_field: (e, t, r)=>{
                n.strictEqual(Ue.ptr, e);
                const s = t - Qe + Le.byteOffset;
                return Ue.onHeaderField(new xe(Le.buffer, s, r)) || 0;
            },
            wasm_on_header_value: (e, t, r)=>{
                n.strictEqual(Ue.ptr, e);
                const s = t - Qe + Le.byteOffset;
                return Ue.onHeaderValue(new xe(Le.buffer, s, r)) || 0;
            },
            wasm_on_headers_complete: (e, t, r, s)=>(n.strictEqual(Ue.ptr, e), Ue.onHeadersComplete(t, Boolean(r), Boolean(s)) || 0),
            wasm_on_body: (e, t, r)=>{
                n.strictEqual(Ue.ptr, e);
                const s = t - Qe + Le.byteOffset;
                return Ue.onBody(new xe(Le.buffer, s, r)) || 0;
            },
            wasm_on_message_complete: (e)=>(n.strictEqual(Ue.ptr, e), Ue.onMessageComplete() || 0)
        }
    });
}();
Fe.catch();
let Ue = null, Le = null, $e = 0, Qe = null;
const je = 1, Ge = 3;
class He {
    constructor(e, t, { exports: r }){
        n(Number.isFinite(e[K]) && e[K] > 0), this.llhttp = r, this.ptr = this.llhttp.llhttp_alloc(qe.TYPE.RESPONSE), this.client = e, this.socket = t, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = e[K], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e[de];
    }
    setTimeout(e, t) {
        this.timeoutType = t, e !== this.timeoutValue ? (c.clearTimeout(this.timeout), e ? (this.timeout = c.setTimeout(ze, e, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e) : this.timeout && this.timeout.refresh && this.timeout.refresh();
    }
    resume() {
        !this.socket.destroyed && this.paused && (n(null != this.ptr), n(null == Ue), this.llhttp.llhttp_resume(this.ptr), n(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || Oe), this.readMore());
    }
    readMore() {
        for(; !this.paused && this.ptr;){
            const e = this.socket.read();
            if (null === e) break;
            this.execute(e);
        }
    }
    execute(e) {
        n(null != this.ptr), n(null == Ue), n(!this.paused);
        const { socket: t, llhttp: r } = this;
        e.length > $e && (Qe && r.free(Qe), $e = 4096 * Math.ceil(e.length / 4096), Qe = r.malloc($e)), new Uint8Array(r.memory.buffer, Qe, $e).set(e);
        try {
            let n;
            try {
                Le = e, Ue = this, n = r.llhttp_execute(this.ptr, Qe, e.length);
            } catch (e) {
                throw e;
            } finally{
                Ue = null, Le = null;
            }
            const s = r.llhttp_get_error_pos(this.ptr) - Qe;
            if (n === qe.ERROR.PAUSED_UPGRADE) this.onUpgrade(e.slice(s));
            else if (n === qe.ERROR.PAUSED) this.paused = !0, t.unshift(e.slice(s));
            else if (n !== qe.ERROR.OK) {
                const t = r.llhttp_get_error_reason(this.ptr);
                let o = "";
                if (t) {
                    const e = new Uint8Array(r.memory.buffer, t).indexOf(0);
                    o = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(r.memory.buffer, t, e).toString() + ")";
                }
                throw new _(o, qe.ERROR[n], e.slice(s));
            }
        } catch (e) {
            a.destroy(t, e);
        }
    }
    destroy() {
        n(null != this.ptr), n(null == Ue), this.llhttp.llhttp_free(this.ptr), this.ptr = null, c.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
    }
    onStatus(e) {
        this.statusText = e.toString();
    }
    onMessageBegin() {
        const { socket: e, client: t } = this;
        if (e.destroyed) return -1;
        return t[O][t[G]] ? void 0 : -1;
    }
    onHeaderField(e) {
        const t = this.headers.length;
        1 & t ? this.headers[t - 1] = Buffer.concat([
            this.headers[t - 1],
            e
        ]) : this.headers.push(e), this.trackHeader(e.length);
    }
    onHeaderValue(e) {
        let t = this.headers.length;
        1 & ~t ? this.headers[t - 1] = Buffer.concat([
            this.headers[t - 1],
            e
        ]) : (this.headers.push(e), t += 1);
        const r = this.headers[t - 2];
        10 === r.length && "keep-alive" === r.toString().toLowerCase() ? this.keepAlive += e.toString() : 10 === r.length && "connection" === r.toString().toLowerCase() ? this.connection += e.toString() : 14 === r.length && "content-length" === r.toString().toLowerCase() && (this.contentLength += e.toString()), this.trackHeader(e.length);
    }
    trackHeader(e) {
        this.headersSize += e, this.headersSize >= this.headersMaxSize && a.destroy(this.socket, new g);
    }
    onUpgrade(e) {
        const { upgrade: t, client: r, socket: s, headers: o, statusCode: i } = this;
        n(t);
        const c = r[O][r[G]];
        n(c), n(!s.destroyed), n(s === r[W]), n(!this.paused), n(c.upgrade || "CONNECT" === c.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, s.unshift(e), s[T].destroy(), s[T] = null, s[k] = null, s[H] = null, s.removeListener("error", Ve).removeListener("readable", We).removeListener("end", Ye).removeListener("close", Ze), r[W] = null, r[O][r[G]++] = null, r.emit("disconnect", r[E], [
            r
        ], new w("upgrade"));
        try {
            c.onUpgrade(i, o, s);
        } catch (e) {
            a.destroy(s, e);
        }
        tt(r);
    }
    onHeadersComplete(e, t, r) {
        const { client: s, socket: o, headers: i, statusText: c } = this;
        if (o.destroyed) return -1;
        const l = s[O][s[G]];
        if (!l) return -1;
        if (n(!this.upgrade), n(this.statusCode < 200), 100 === e) return a.destroy(o, new y("bad response", a.getSocketInfo(o))), -1;
        if (t && !l.upgrade) return a.destroy(o, new y("bad upgrade", a.getSocketInfo(o))), -1;
        if (n.strictEqual(this.timeoutType, je), this.statusCode = e, this.shouldKeepAlive = r || "HEAD" === l.method && !o[I] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
            const e = null != l.bodyTimeout ? l.bodyTimeout : s[ee];
            this.setTimeout(e, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === l.method) return n(1 === s[J]), this.upgrade = !0, 2;
        if (t) return n(1 === s[J]), this.upgrade = !0, 2;
        if (n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s[z]) {
            const e = this.keepAlive ? a.parseKeepAliveTimeout(this.keepAlive) : null;
            if (null != e) {
                const t = Math.min(e - s[Z], s[Y]);
                t <= 0 ? o[I] = !0 : s[V] = t;
            } else s[V] = s[$];
        } else o[I] = !0;
        const u = !1 === l.onHeaders(e, i, this.resume, c);
        return l.aborted ? -1 : "HEAD" === l.method || e < 200 ? 1 : (o[B] && (o[B] = !1, tt(s)), u ? qe.ERROR.PAUSED : 0);
    }
    onBody(e) {
        const { client: t, socket: r, statusCode: s, maxResponseSize: o } = this;
        if (r.destroyed) return -1;
        const i = t[O][t[G]];
        return n(i), n.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), n(s >= 200), o > -1 && this.bytesRead + e.length > o ? (a.destroy(r, new A), -1) : (this.bytesRead += e.length, !1 === i.onData(e) ? qe.ERROR.PAUSED : void 0);
    }
    onMessageComplete() {
        const { client: e, socket: t, statusCode: r, upgrade: s, headers: o, contentLength: i, bytesRead: c, shouldKeepAlive: l } = this;
        if (t.destroyed && (!r || l)) return -1;
        if (s) return;
        const u = e[O][e[G]];
        return n(u), n(r >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, r < 200 ? void 0 : "HEAD" !== u.method && i && c !== parseInt(i, 10) ? (a.destroy(t, new p), -1) : (u.onComplete(o), e[O][e[G]++] = null, t[D] ? (n.strictEqual(e[J], 0), a.destroy(t, new w("reset")), qe.ERROR.PAUSED) : l ? t[I] && 0 === e[J] ? (a.destroy(t, new w("reset")), qe.ERROR.PAUSED) : void (1 === e[z] ? setImmediate(tt, e) : tt(e)) : (a.destroy(t, new w("reset")), qe.ERROR.PAUSED));
    }
}
function ze(e) {
    const { socket: t, timeoutType: r, client: s } = e;
    r === je ? (!t[D] || t.writableNeedDrain || s[J] > 1) && (n(!e.paused, "cannot be paused while waiting for headers"), a.destroy(t, new f)) : 2 === r ? e.paused || a.destroy(t, new v) : r === Ge && (n(0 === s[J] && s[V]), a.destroy(t, new w("socket idle timeout")));
}
function We() {
    const { [T]: e } = this;
    e && e.readMore();
}
function Ve(e) {
    const { [k]: t, [T]: r } = this;
    n("ERR_TLS_CERT_ALTNAME_INVALID" !== e.code), "h2" === t[pe] || "ECONNRESET" !== e.code || !r.statusCode || r.shouldKeepAlive ? (this[H] = e, Ke(this[k], e)) : r.onMessageComplete();
}
function Ke(e, t) {
    if (0 === e[J] && "UND_ERR_INFO" !== t.code && "UND_ERR_SOCKET" !== t.code) {
        n(e[j] === e[G]);
        const r = e[O].splice(e[G]);
        for(let n = 0; n < r.length; n++){
            ct(e, r[n], t);
        }
        n(0 === e[q]);
    }
}
function Ye() {
    const { [T]: e, [k]: t } = this;
    "h2" === t[pe] || !e.statusCode || e.shouldKeepAlive ? a.destroy(this, new y("other side closed", a.getSocketInfo(this))) : e.onMessageComplete();
}
function Ze() {
    const { [k]: e, [T]: t } = this;
    "h1" === e[pe] && t && (this[H] || !t.statusCode || t.shouldKeepAlive || t.onMessageComplete(), this[T].destroy(), this[T] = null);
    const r = this[H] || new y("closed", a.getSocketInfo(this));
    if (e[W] = null, e.destroyed) {
        n(0 === e[M]);
        const t = e[O].splice(e[G]);
        for(let n = 0; n < t.length; n++){
            ct(e, t[n], r);
        }
    } else if (e[J] > 0 && "UND_ERR_INFO" !== r.code) {
        const t = e[O][e[G]];
        e[O][e[G]++] = null, ct(e, t, r);
    }
    e[j] = e[G], n(0 === e[J]), e.emit("disconnect", e[E], [
        e
    ], r), tt(e);
}
async function Xe(e) {
    n(!e[F]), n(!e[W]);
    let { host: t, hostname: r, protocol: o, port: i } = e[E];
    if ("[" === r[0]) {
        const e = r.indexOf("]");
        n(-1 !== e);
        const t = r.substring(1, e);
        n(s.isIP(t)), r = t;
    }
    e[F] = !0, Re.beforeConnect.hasSubscribers && Re.beforeConnect.publish({
        connectParams: {
            host: t,
            hostname: r,
            protocol: o,
            port: i,
            servername: e[C],
            localAddress: e[ue]
        },
        connector: e[re]
    });
    try {
        const s = await new Promise((n, s)=>{
            e[re]({
                host: t,
                hostname: r,
                protocol: o,
                port: i,
                servername: e[C],
                localAddress: e[ue]
            }, (e, t)=>{
                e ? s(e) : n(t);
            });
        });
        if (e.destroyed) return void a.destroy(s.on("error", ()=>{}), new S);
        e[F] = !1, n(s);
        if ("h2" === s.alpnProtocol) {
            ke || (ke = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
                code: "UNDICI-H2"
            }));
            const t = ve.connect(e[E], {
                createConnection: ()=>s,
                peerMaxConcurrentStreams: e[fe].maxConcurrentStreams
            });
            e[pe] = "h2", t[k] = e, t[W] = s, t.on("error", Be), t.on("frameError", Pe), t.on("end", Je), t.on("goaway", Me), t.on("close", Ze), t.unref(), e[he] = t, s[he] = t;
        } else Ne || (Ne = await Fe, Fe = null), s[L] = !1, s[D] = !1, s[I] = !1, s[B] = !1, s[T] = new He(e, s, Ne);
        s[oe] = 0, s[se] = e[se], s[k] = e, s[H] = null, s.on("error", Ve).on("readable", We).on("end", Ye).on("close", Ze), e[W] = s, Re.connected.hasSubscribers && Re.connected.publish({
            connectParams: {
                host: t,
                hostname: r,
                protocol: o,
                port: i,
                servername: e[C],
                localAddress: e[ue]
            },
            connector: e[re],
            socket: s
        }), e.emit("connect", e[E], [
            e
        ]);
    } catch (s) {
        if (e.destroyed) return;
        if (e[F] = !1, Re.connectError.hasSubscribers && Re.connectError.publish({
            connectParams: {
                host: t,
                hostname: r,
                protocol: o,
                port: i,
                servername: e[C],
                localAddress: e[ue]
            },
            connector: e[re],
            error: s
        }), "ERR_TLS_CERT_ALTNAME_INVALID" === s.code) for(n(0 === e[J]); e[M] > 0 && e[O][e[j]].servername === e[C];){
            const t = e[O][e[j]++];
            ct(e, t, s);
        }
        else Ke(e, s);
        e.emit("connectionError", e[E], [
            e
        ], s);
    }
    tt(e);
}
function et(e) {
    e[U] = 0, e.emit("drain", e[E], [
        e
    ]);
}
function tt(e, t) {
    2 !== e[P] && (e[P] = 2, function(e, t) {
        for(;;){
            if (e.destroyed) return void n(0 === e[M]);
            if (e[Te] && !e[q]) return e[Te](), void (e[Te] = null);
            const r = e[W];
            if (r && !r.destroyed && "h2" !== r.alpnProtocol) {
                if (0 === e[q] ? !r[L] && r.unref && (r.unref(), r[L] = !0) : r[L] && r.ref && (r.ref(), r[L] = !1), 0 === e[q]) r[T].timeoutType !== Ge && r[T].setTimeout(e[V], Ge);
                else if (e[J] > 0 && r[T].statusCode < 200 && r[T].timeoutType !== je) {
                    const t = e[O][e[G]], n = null != t.headersTimeout ? t.headersTimeout : e[X];
                    r[T].setTimeout(n, je);
                }
            }
            if (e[x]) e[U] = 2;
            else if (2 === e[U]) {
                t ? (e[U] = 1, process.nextTick(et, e)) : et(e);
                continue;
            }
            if (0 === e[M]) return;
            if (e[J] >= (e[z] || 1)) return;
            const s = e[O][e[j]];
            if ("https:" === e[E].protocol && e[C] !== s.servername) {
                if (e[J] > 0) return;
                if (e[C] = s.servername, r && r.servername !== s.servername) return void a.destroy(r, new w("servername changed"));
            }
            if (e[F]) return;
            if (!r && !e[he]) return void Xe(e);
            if (r.destroyed || r[D] || r[I] || r[B]) return;
            if (e[J] > 0 && !s.idempotent) return;
            if (e[J] > 0 && (s.upgrade || "CONNECT" === s.method)) return;
            if (e[J] > 0 && 0 !== a.bodyLength(s.body) && (a.isStream(s.body) || a.isAsyncIterable(s.body))) return;
            !s.aborted && nt(e, s) ? e[j]++ : e[O].splice(e[j], 1);
        }
    }(e, t), e[P] = 0, e[G] > 256 && (e[O].splice(0, e[G]), e[j] -= e[G], e[G] = 0));
}
function rt(e) {
    return "GET" !== e && "HEAD" !== e && "OPTIONS" !== e && "TRACE" !== e && "CONNECT" !== e;
}
function nt(e, t) {
    if ("h2" === e[pe]) return void function(e, t, r) {
        const { body: s, method: o, path: i, host: c, upgrade: u, expectContinue: p, signal: m, headers: f } = r;
        let g, y;
        g = "string" == typeof f ? l[ye](f.trim()) : f;
        if (u) return ct(e, r, new Error("Upgrade not supported for H2")), !1;
        try {
            r.onConnect((t)=>{
                r.aborted || r.completed || ct(e, r, t || new h);
            });
        } catch (t) {
            ct(e, r, t);
        }
        if (r.aborted) return !1;
        const v = e[fe];
        if (g[_e] = c || e[me], g[Ae] = o, "CONNECT" === o) return t.ref(), y = t.request(g, {
            endStream: !1,
            signal: m
        }), y.id && !y.pending ? (r.onUpgrade(null, null, y), ++v.openStreams) : y.once("ready", ()=>{
            r.onUpgrade(null, null, y), ++v.openStreams;
        }), y.once("close", ()=>{
            v.openStreams -= 1, 0 === v.openStreams && t.unref();
        }), !0;
        g[Se] = i, g[be] = "https";
        const _ = "PUT" === o || "POST" === o || "PATCH" === o;
        s && "function" == typeof s.read && s.read(0);
        let A = a.bodyLength(s);
        null == A && (A = r.contentLength);
        0 !== A && _ || (A = null);
        if (rt(o) && A > 0 && null != r.contentLength && r.contentLength !== A) {
            if (e[te]) return ct(e, r, new d), !1;
            process.emitWarning(new d);
        }
        null != A && (n(s, "no body must not have content length"), g[Ee] = `${A}`);
        t.ref();
        const S = "GET" === o || "HEAD" === o;
        p ? (g[Ie] = "100-continue", y = t.request(g, {
            endStream: S,
            signal: m
        }), y.once("continue", b)) : (y = t.request(g, {
            endStream: S,
            signal: m
        }), b());
        return ++v.openStreams, y.once("response", (e)=>{
            const { [Ce]: t, ...n } = e;
            !1 === r.onHeaders(Number(t), n, y.resume.bind(y), "") && y.pause();
        }), y.once("end", ()=>{
            r.onComplete([]);
        }), y.on("data", (e)=>{
            !1 === r.onData(e) && y.pause();
        }), y.once("close", ()=>{
            v.openStreams -= 1, 0 === v.openStreams && t.unref();
        }), y.once("error", function(t) {
            !e[he] || e[he].destroyed || this.closed || this.destroyed || (v.streams -= 1, a.destroy(y, t));
        }), y.once("frameError", (t, n)=>{
            const s = new w(`HTTP/2: "frameError" received - type ${t}, code ${n}`);
            ct(e, r, s), !e[he] || e[he].destroyed || this.closed || this.destroyed || (v.streams -= 1, a.destroy(y, s));
        }), !0;
        function b() {
            s ? a.isBuffer(s) ? (n(A === s.byteLength, "buffer body must have content length"), y.cork(), y.write(s), y.uncork(), y.end(), r.onBodySent(s), r.onRequestSent()) : a.isBlobLike(s) ? "function" == typeof s.stream ? it({
                client: e,
                request: r,
                contentLength: A,
                h2stream: y,
                expectsPayload: _,
                body: s.stream(),
                socket: e[W],
                header: ""
            }) : ot({
                body: s,
                client: e,
                request: r,
                contentLength: A,
                expectsPayload: _,
                h2stream: y,
                header: "",
                socket: e[W]
            }) : a.isStream(s) ? st({
                body: s,
                client: e,
                request: r,
                contentLength: A,
                expectsPayload: _,
                socket: e[W],
                h2stream: y,
                header: ""
            }) : a.isIterable(s) ? it({
                body: s,
                client: e,
                request: r,
                contentLength: A,
                expectsPayload: _,
                header: "",
                h2stream: y,
                socket: e[W]
            }) : n(!1) : r.onRequestSent();
        }
    }(e, e[he], t);
    const { body: r, method: s, path: o, host: i, upgrade: c, headers: u, blocking: p, reset: m } = t, f = "PUT" === s || "POST" === s || "PATCH" === s;
    r && "function" == typeof r.read && r.read(0);
    const g = a.bodyLength(r);
    let y = g;
    if (null === y && (y = t.contentLength), 0 !== y || f || (y = null), rt(s) && y > 0 && null !== t.contentLength && t.contentLength !== y) {
        if (e[te]) return ct(e, t, new d), !1;
        process.emitWarning(new d);
    }
    const v = e[W];
    try {
        t.onConnect((r)=>{
            t.aborted || t.completed || (ct(e, t, r || new h), a.destroy(v, new w("aborted")));
        });
    } catch (r) {
        ct(e, t, r);
    }
    if (t.aborted) return !1;
    "HEAD" === s && (v[I] = !0), (c || "CONNECT" === s) && (v[I] = !0), null != m && (v[I] = m), e[se] && v[oe]++ >= e[se] && (v[I] = !0), p && (v[B] = !0);
    let _ = `${s} ${o} HTTP/1.1\r\n`;
    return _ += "string" == typeof i ? `host: ${i}\r\n` : e[Q], c ? _ += `connection: upgrade\r\nupgrade: ${c}\r\n` : e[z] && !v[I] ? _ += "connection: keep-alive\r\n" : _ += "connection: close\r\n", u && (_ += u), Re.sendHeaders.hasSubscribers && Re.sendHeaders.publish({
        request: t,
        headers: _,
        socket: v
    }), r && 0 !== g ? a.isBuffer(r) ? (n(y === r.byteLength, "buffer body must have content length"), v.cork(), v.write(`${_}content-length: ${y}\r\n\r\n`, "latin1"), v.write(r), v.uncork(), t.onBodySent(r), t.onRequestSent(), f || (v[I] = !0)) : a.isBlobLike(r) ? "function" == typeof r.stream ? it({
        body: r.stream(),
        client: e,
        request: t,
        socket: v,
        contentLength: y,
        header: _,
        expectsPayload: f
    }) : ot({
        body: r,
        client: e,
        request: t,
        socket: v,
        contentLength: y,
        header: _,
        expectsPayload: f
    }) : a.isStream(r) ? st({
        body: r,
        client: e,
        request: t,
        socket: v,
        contentLength: y,
        header: _,
        expectsPayload: f
    }) : a.isIterable(r) ? it({
        body: r,
        client: e,
        request: t,
        socket: v,
        contentLength: y,
        header: _,
        expectsPayload: f
    }) : n(!1) : (0 === y ? v.write(`${_}content-length: 0\r\n\r\n`, "latin1") : (n(null === y, "no body must not have content length"), v.write(`${_}\r\n`, "latin1")), t.onRequestSent()), !0;
}
function st({ h2stream: e, body: t, client: r, request: s, socket: o, contentLength: c, header: l, expectsPayload: u }) {
    if (n(0 !== c || 0 === r[J], "stream body cannot be pipelined"), "h2" === r[pe]) {
        const w = i(t, e, (r)=>{
            r ? (a.destroy(t, r), a.destroy(e, r)) : s.onRequestSent();
        });
        function v(e) {
            s.onBodySent(e);
        }
        return w.on("data", v), void w.once("end", ()=>{
            w.removeListener("data", v), a.destroy(w);
        });
    }
    let d = !1;
    const p = new at({
        socket: o,
        request: s,
        contentLength: c,
        client: r,
        expectsPayload: u,
        header: l
    }), m = function(e) {
        if (!d) try {
            !p.write(e) && this.pause && this.pause();
        } catch (e) {
            a.destroy(this, e);
        }
    }, f = function() {
        d || t.resume && t.resume();
    }, g = function() {
        if (d) return;
        const e = new h;
        queueMicrotask(()=>y(e));
    }, y = function(e) {
        if (!d) {
            if (d = !0, n(o.destroyed || o[D] && r[J] <= 1), o.off("drain", f).off("error", y), t.removeListener("data", m).removeListener("end", y).removeListener("error", y).removeListener("close", g), !e) try {
                p.end();
            } catch (t) {
                e = t;
            }
            p.destroy(e), !e || "UND_ERR_INFO" === e.code && "reset" === e.message ? a.destroy(t) : a.destroy(t, e);
        }
    };
    t.on("data", m).on("end", y).on("error", y).on("close", g), t.resume && t.resume(), o.on("drain", f).on("error", y);
}
async function ot({ h2stream: e, body: t, client: r, request: s, socket: o, contentLength: i, header: c, expectsPayload: l }) {
    n(i === t.size, "blob body must have content length");
    const u = "h2" === r[pe];
    try {
        if (null != i && i !== t.size) throw new d;
        const n = Buffer.from(await t.arrayBuffer());
        u ? (e.cork(), e.write(n), e.uncork()) : (o.cork(), o.write(`${c}content-length: ${i}\r\n\r\n`, "latin1"), o.write(n), o.uncork()), s.onBodySent(n), s.onRequestSent(), l || (o[I] = !0), tt(r);
    } catch (t) {
        a.destroy(u ? e : o, t);
    }
}
async function it({ h2stream: e, body: t, client: r, request: s, socket: o, contentLength: i, header: a, expectsPayload: c }) {
    n(0 !== i || 0 === r[J], "iterator body cannot be pipelined");
    let l = null;
    function u() {
        if (l) {
            const e = l;
            l = null, e();
        }
    }
    const d = ()=>new Promise((e, t)=>{
            n(null === l), o[H] ? t(o[H]) : l = e;
        });
    if ("h2" === r[pe]) {
        e.on("close", u).on("drain", u);
        try {
            for await (const r of t){
                if (o[H]) throw o[H];
                const t = e.write(r);
                s.onBodySent(r), t || await d();
            }
        } catch (t) {
            e.destroy(t);
        } finally{
            s.onRequestSent(), e.end(), e.off("close", u).off("drain", u);
        }
        return;
    }
    o.on("close", u).on("drain", u);
    const p = new at({
        socket: o,
        request: s,
        contentLength: i,
        client: r,
        expectsPayload: c,
        header: a
    });
    try {
        for await (const e of t){
            if (o[H]) throw o[H];
            p.write(e) || await d();
        }
        p.end();
    } catch (e) {
        p.destroy(e);
    } finally{
        o.off("close", u).off("drain", u);
    }
}
class at {
    constructor({ socket: e, request: t, contentLength: r, client: n, expectsPayload: s, header: o }){
        this.socket = e, this.request = t, this.contentLength = r, this.client = n, this.bytesWritten = 0, this.expectsPayload = s, this.header = o, e[D] = !0;
    }
    write(e) {
        const { socket: t, request: r, contentLength: n, client: s, bytesWritten: o, expectsPayload: i, header: a } = this;
        if (t[H]) throw t[H];
        if (t.destroyed) return !1;
        const c = Buffer.byteLength(e);
        if (!c) return !0;
        if (null !== n && o + c > n) {
            if (s[te]) throw new d;
            process.emitWarning(new d);
        }
        t.cork(), 0 === o && (i || (t[I] = !0), null === n ? t.write(`${a}transfer-encoding: chunked\r\n`, "latin1") : t.write(`${a}content-length: ${n}\r\n\r\n`, "latin1")), null === n && t.write(`\r\n${c.toString(16)}\r\n`, "latin1"), this.bytesWritten += c;
        const l = t.write(e);
        return t.uncork(), r.onBodySent(e), l || t[T].timeout && t[T].timeoutType === je && t[T].timeout.refresh && t[T].timeout.refresh(), l;
    }
    end() {
        const { socket: e, contentLength: t, client: r, bytesWritten: n, expectsPayload: s, header: o, request: i } = this;
        if (i.onRequestSent(), e[D] = !1, e[H]) throw e[H];
        if (!e.destroyed) {
            if (0 === n ? s ? e.write(`${o}content-length: 0\r\n\r\n`, "latin1") : e.write(`${o}\r\n`, "latin1") : null === t && e.write("\r\n0\r\n\r\n", "latin1"), null !== t && n !== t) {
                if (r[te]) throw new d;
                process.emitWarning(new d);
            }
            e[T].timeout && e[T].timeoutType === je && e[T].timeout.refresh && e[T].timeout.refresh(), tt(r);
        }
    }
    destroy(e) {
        const { socket: t, client: r } = this;
        t[D] = !1, e && (n(r[J] <= 1, "pipeline should only contain this request"), a.destroy(t, e));
    }
}
function ct(e, t, r) {
    try {
        t.onError(r), n(t.aborted);
    } catch (r) {
        e.emit("error", r);
    }
}
module.exports = class extends u {
    constructor(e, { interceptors: t, maxHeaderSize: r, headersTimeout: n, socketTimeout: i, requestTimeout: c, connectTimeout: l, bodyTimeout: u, idleTimeout: d, keepAlive: p, keepAliveTimeout: h, maxKeepAliveTimeout: f, keepAliveMaxTimeout: g, keepAliveTimeoutThreshold: y, socketPath: w, pipelining: v, tls: _, strictContentLength: A, maxCachedSessions: S, maxRedirections: I, connect: k, maxRequestsPerClient: x, localAddress: T, maxResponseSize: R, autoSelectFamily: B, autoSelectFamilyAttemptTimeout: J, allowH2: M, maxConcurrentStreams: q } = {}){
        if (super(), void 0 !== p) throw new m("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== i) throw new m("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== c) throw new m("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== d) throw new m("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== f) throw new m("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != r && !Number.isFinite(r)) throw new m("invalid maxHeaderSize");
        if (null != w && "string" != typeof w) throw new m("invalid socketPath");
        if (null != l && (!Number.isFinite(l) || l < 0)) throw new m("invalid connectTimeout");
        if (null != h && (!Number.isFinite(h) || h <= 0)) throw new m("invalid keepAliveTimeout");
        if (null != g && (!Number.isFinite(g) || g <= 0)) throw new m("invalid keepAliveMaxTimeout");
        if (null != y && !Number.isFinite(y)) throw new m("invalid keepAliveTimeoutThreshold");
        if (null != n && (!Number.isInteger(n) || n < 0)) throw new m("headersTimeout must be a positive integer or zero");
        if (null != u && (!Number.isInteger(u) || u < 0)) throw new m("bodyTimeout must be a positive integer or zero");
        if (null != k && "function" != typeof k && "object" != typeof k) throw new m("connect must be a function or an object");
        if (null != I && (!Number.isInteger(I) || I < 0)) throw new m("maxRedirections must be a positive number");
        if (null != x && (!Number.isInteger(x) || x < 0)) throw new m("maxRequestsPerClient must be a positive number");
        if (null != T && ("string" != typeof T || 0 === s.isIP(T))) throw new m("localAddress must be valid string IP address");
        if (null != R && (!Number.isInteger(R) || R < -1)) throw new m("maxResponseSize must be a positive number");
        if (null != J && (!Number.isInteger(J) || J < -1)) throw new m("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != M && "boolean" != typeof M) throw new m("allowH2 must be a valid boolean value");
        if (null != q && ("number" != typeof q || q < 1)) throw new m("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof k && (k = b({
            ..._,
            maxCachedSessions: S,
            allowH2: M,
            socketPath: w,
            timeout: l,
            ...a.nodeHasAutoSelectFamily && B ? {
                autoSelectFamily: B,
                autoSelectFamilyAttemptTimeout: J
            } : void 0,
            ...k
        })), this[le] = t && t.Client && Array.isArray(t.Client) ? t.Client : [
            De({
                maxRedirections: I
            })
        ], this[E] = a.parseOrigin(e), this[re] = k, this[W] = null, this[z] = null != v ? v : 1, this[K] = r || o.maxHeaderSize, this[$] = h ?? 4e3, this[Y] = g ?? 6e5, this[Z] = y ?? 1e3, this[V] = this[$], this[C] = null, this[ue] = null != T ? T : null, this[P] = 0, this[U] = 0, this[Q] = `host: ${this[E].hostname}${this[E].port ? `:${this[E].port}` : ""}\r\n`, this[ee] = null != u ? u : 3e5, this[X] = null != n ? n : 3e5, this[te] = A ?? !0, this[ne] = I, this[se] = x, this[Te] = null, this[de] = R > -1 ? R : -1, this[pe] = "h1", this[he] = null, this[fe] = M ? {
            openStreams: 0,
            maxConcurrentStreams: null != q ? q : 100
        } : null, this[me] = `${this[E].hostname}${this[E].port ? `:${this[E].port}` : ""}`, this[O] = [], this[G] = 0, this[j] = 0;
    }
    get pipelining() {
        return this[z];
    }
    set pipelining(e) {
        this[z] = e, tt(this, !0);
    }
    get [M]() {
        return this[O].length - this[j];
    }
    get [J]() {
        return this[j] - this[G];
    }
    get [q]() {
        return this[O].length - this[G];
    }
    get [N]() {
        return !!this[W] && !this[F] && !this[W].destroyed;
    }
    get [x]() {
        const e = this[W];
        return e && (e[I] || e[D] || e[B]) || this[q] >= (this[z] || 1) || this[M] > 0;
    }
    [R](e) {
        Xe(this), this.once("connect", e);
    }
    [ce](e, t) {
        const r = e.origin || this[E].origin, n = "h2" === this[pe] ? l[ge](r, e, t) : l[we](r, e, t);
        return this[O].push(n), this[P] || (null == a.bodyLength(n.body) && a.isIterable(n.body) ? (this[P] = 1, process.nextTick(tt, this)) : tt(this, !0)), this[P] && 2 !== this[U] && this[x] && (this[U] = 2), this[U] < 2;
    }
    async [ie]() {
        return new Promise((e)=>{
            this[q] ? this[Te] = e : e(null);
        });
    }
    async [ae](e) {
        return new Promise((t)=>{
            const r = this[O].splice(this[j]);
            for(let t = 0; t < r.length; t++){
                ct(this, r[t], e);
            }
            const n = ()=>{
                this[Te] && (this[Te](), this[Te] = null), t();
            };
            null != this[he] && (a.destroy(this[he], e), this[he] = null, this[fe] = null), this[W] ? a.destroy(this[W].on("close", n), e) : queueMicrotask(n), tt(this);
        });
    }
};
