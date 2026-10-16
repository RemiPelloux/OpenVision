"use strict";
const n = require("./module-2613.js"), r = require("./module-9278.js"), o = require("./module-8611.js"), { pipeline: s } = require("./module-2203.js"), i = require("./module-9361.js"), a = require("./module-3891.js"), c = require("./module-3308.js"), l = require("./module-9792.js"), { RequestContentLengthMismatchError: u, ResponseContentLengthMismatchError: g, InvalidArgumentError: E, RequestAbortedError: h, HeadersTimeoutError: d, HeadersOverflowError: I, SocketError: B, InformationalError: Q, BodyTimeoutError: f, HTTPParserError: C, ResponseExceededMaxSizeError: p, ClientDestroyedError: m } = require("./module-7902.js"), y = require("./module-3991.js"), { kUrl: w, kReset: k, kServerName: b, kClient: N, kBusy: T, kParser: D, kConnect: S, kBlocking: R, kResuming: F, kRunning: v, kPending: M, kSize: U, kWriting: L, kQueue: _, kConnected: J, kConnecting: O, kNeedDrain: Y, kNoRef: G, kKeepAliveDefaultTimeout: P, kHostHeader: V, kPendingIdx: x, kRunningIdx: H, kError: q, kPipelining: W, kSocket: j, kKeepAliveTimeoutValue: K, kMaxHeadersSize: X, kKeepAliveMaxTimeout: Z, kKeepAliveTimeoutThreshold: z, kHeadersTimeout: $, kBodyTimeout: ee, kStrictContentLength: te, kConnector: Ae, kMaxRedirections: ne, kMaxRequests: re, kCounter: oe, kClose: se, kDestroy: ie, kDispatch: ae, kInterceptors: ce, kLocalAddress: le, kMaxResponseSize: ue, kHTTPConnVersion: ge, kHost: Ee, kHTTP2Session: he, kHTTP2SessionState: de, kHTTP2BuildRequest: Ie, kHTTP2CopyHeaders: Be, kHTTP1BuildRequest: Qe } = require("./module-8832.js");
let fe;
try {
    fe = require("./module-5675.js");
} catch  {
    fe = {
        constants: {}
    };
}
const { constants: { HTTP2_HEADER_AUTHORITY: Ce, HTTP2_HEADER_METHOD: pe, HTTP2_HEADER_PATH: me, HTTP2_HEADER_SCHEME: ye, HTTP2_HEADER_CONTENT_LENGTH: we, HTTP2_HEADER_EXPECT: ke, HTTP2_HEADER_STATUS: be } } = fe;
let Ne = !1;
const Te = Buffer[Symbol.species], De = Symbol("kClosedResolve"), Se = {};
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
function Re(e) {
    n("ERR_TLS_CERT_ALTNAME_INVALID" !== e.code), this[j][q] = e, Xe(this[N], e);
}
function Fe(e, t, A) {
    const n = new Q(`HTTP/2: "frameError" received - type ${e}, code ${t}`);
    0 === A && (this[j][q] = n, Xe(this[N], n));
}
function ve() {
    i.destroy(this, new B("other side closed")), i.destroy(this[j], new B("other side closed"));
}
function Me(e) {
    const t = this[N], A = new Q(`HTTP/2: "GOAWAY" frame received with code ${e}`);
    if (t[j] = null, t[he] = null, t.destroyed) {
        n(0 === this[M]);
        const e = t[_].splice(t[H]);
        for(let t = 0; t < e.length; t++){
            at(this, e[t], A);
        }
    } else if (t[v] > 0) {
        const e = t[_][t[H]];
        t[_][t[H]++] = null, at(t, e, A);
    }
    t[x] = t[H], n(0 === t[v]), t.emit("disconnect", t[w], [
        t
    ], A), tt(t);
}
const Ue = require("./module-6747.js"), Le = require("./module-858.js"), _e = Buffer.alloc(0);
let Je = null, Oe = async function() {
    const e = process.env.JEST_WORKER_ID ? require("./module-2789.js") : void 0;
    let t;
    try {
        t = await WebAssembly.compile(Buffer.from(require("./module-871.js"), "base64"));
    } catch (n) {
        t = await WebAssembly.compile(Buffer.from(e || require("./module-2789.js"), "base64"));
    }
    return await WebAssembly.instantiate(t, {
        env: {
            wasm_on_url: (e, t, A)=>0,
            wasm_on_status: (e, t, A)=>{
                n.strictEqual(Ye.ptr, e);
                const r = t - Ve + Ge.byteOffset;
                return Ye.onStatus(new Te(Ge.buffer, r, A)) || 0;
            },
            wasm_on_message_begin: (e)=>(n.strictEqual(Ye.ptr, e), Ye.onMessageBegin() || 0),
            wasm_on_header_field: (e, t, A)=>{
                n.strictEqual(Ye.ptr, e);
                const r = t - Ve + Ge.byteOffset;
                return Ye.onHeaderField(new Te(Ge.buffer, r, A)) || 0;
            },
            wasm_on_header_value: (e, t, A)=>{
                n.strictEqual(Ye.ptr, e);
                const r = t - Ve + Ge.byteOffset;
                return Ye.onHeaderValue(new Te(Ge.buffer, r, A)) || 0;
            },
            wasm_on_headers_complete: (e, t, A, r)=>(n.strictEqual(Ye.ptr, e), Ye.onHeadersComplete(t, Boolean(A), Boolean(r)) || 0),
            wasm_on_body: (e, t, A)=>{
                n.strictEqual(Ye.ptr, e);
                const r = t - Ve + Ge.byteOffset;
                return Ye.onBody(new Te(Ge.buffer, r, A)) || 0;
            },
            wasm_on_message_complete: (e)=>(n.strictEqual(Ye.ptr, e), Ye.onMessageComplete() || 0)
        }
    });
}();
Oe.catch();
let Ye = null, Ge = null, Pe = 0, Ve = null;
const xe = 1, He = 3;
class qe {
    constructor(e, t, { exports: A }){
        n(Number.isFinite(e[X]) && e[X] > 0), this.llhttp = A, this.ptr = this.llhttp.llhttp_alloc(Ue.TYPE.RESPONSE), this.client = e, this.socket = t, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = e[X], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e[ue];
    }
    setTimeout(e, t) {
        this.timeoutType = t, e !== this.timeoutValue ? (a.clearTimeout(this.timeout), e ? (this.timeout = a.setTimeout(We, e, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e) : this.timeout && this.timeout.refresh && this.timeout.refresh();
    }
    resume() {
        !this.socket.destroyed && this.paused && (n(null != this.ptr), n(null == Ye), this.llhttp.llhttp_resume(this.ptr), n(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || _e), this.readMore());
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
        const { socket: t, llhttp: A } = this;
        e.length > Pe && (Ve && A.free(Ve), Pe = 4096 * Math.ceil(e.length / 4096), Ve = A.malloc(Pe)), new Uint8Array(A.memory.buffer, Ve, Pe).set(e);
        try {
            let n;
            try {
                Ge = e, Ye = this, n = A.llhttp_execute(this.ptr, Ve, e.length);
            } catch (e) {
                throw e;
            } finally{
                Ye = null, Ge = null;
            }
            const r = A.llhttp_get_error_pos(this.ptr) - Ve;
            if (n === Ue.ERROR.PAUSED_UPGRADE) this.onUpgrade(e.slice(r));
            else if (n === Ue.ERROR.PAUSED) this.paused = !0, t.unshift(e.slice(r));
            else if (n !== Ue.ERROR.OK) {
                const t = A.llhttp_get_error_reason(this.ptr);
                let o = "";
                if (t) {
                    const e = new Uint8Array(A.memory.buffer, t).indexOf(0);
                    o = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(A.memory.buffer, t, e).toString() + ")";
                }
                throw new C(o, Ue.ERROR[n], e.slice(r));
            }
        } catch (e) {
            i.destroy(t, e);
        }
    }
    destroy() {
        n(null != this.ptr), n(null == Ye), this.llhttp.llhttp_free(this.ptr), this.ptr = null, a.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
    }
    onStatus(e) {
        this.statusText = e.toString();
    }
    onMessageBegin() {
        const { socket: e, client: t } = this;
        if (e.destroyed) return -1;
        return t[_][t[H]] ? void 0 : -1;
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
        const A = this.headers[t - 2];
        10 === A.length && "keep-alive" === A.toString().toLowerCase() ? this.keepAlive += e.toString() : 10 === A.length && "connection" === A.toString().toLowerCase() ? this.connection += e.toString() : 14 === A.length && "content-length" === A.toString().toLowerCase() && (this.contentLength += e.toString()), this.trackHeader(e.length);
    }
    trackHeader(e) {
        this.headersSize += e, this.headersSize >= this.headersMaxSize && i.destroy(this.socket, new I);
    }
    onUpgrade(e) {
        const { upgrade: t, client: A, socket: r, headers: o, statusCode: s } = this;
        n(t);
        const a = A[_][A[H]];
        n(a), n(!r.destroyed), n(r === A[j]), n(!this.paused), n(a.upgrade || "CONNECT" === a.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, r.unshift(e), r[D].destroy(), r[D] = null, r[N] = null, r[q] = null, r.removeListener("error", Ke).removeListener("readable", je).removeListener("end", Ze).removeListener("close", ze), A[j] = null, A[_][A[H]++] = null, A.emit("disconnect", A[w], [
            A
        ], new Q("upgrade"));
        try {
            a.onUpgrade(s, o, r);
        } catch (e) {
            i.destroy(r, e);
        }
        tt(A);
    }
    onHeadersComplete(e, t, A) {
        const { client: r, socket: o, headers: s, statusText: a } = this;
        if (o.destroyed) return -1;
        const c = r[_][r[H]];
        if (!c) return -1;
        if (n(!this.upgrade), n(this.statusCode < 200), 100 === e) return i.destroy(o, new B("bad response", i.getSocketInfo(o))), -1;
        if (t && !c.upgrade) return i.destroy(o, new B("bad upgrade", i.getSocketInfo(o))), -1;
        if (n.strictEqual(this.timeoutType, xe), this.statusCode = e, this.shouldKeepAlive = A || "HEAD" === c.method && !o[k] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
            const e = null != c.bodyTimeout ? c.bodyTimeout : r[ee];
            this.setTimeout(e, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === c.method) return n(1 === r[v]), this.upgrade = !0, 2;
        if (t) return n(1 === r[v]), this.upgrade = !0, 2;
        if (n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && r[W]) {
            const e = this.keepAlive ? i.parseKeepAliveTimeout(this.keepAlive) : null;
            if (null != e) {
                const t = Math.min(e - r[z], r[Z]);
                t <= 0 ? o[k] = !0 : r[K] = t;
            } else r[K] = r[P];
        } else o[k] = !0;
        const l = !1 === c.onHeaders(e, s, this.resume, a);
        return c.aborted ? -1 : "HEAD" === c.method || e < 200 ? 1 : (o[R] && (o[R] = !1, tt(r)), l ? Ue.ERROR.PAUSED : 0);
    }
    onBody(e) {
        const { client: t, socket: A, statusCode: r, maxResponseSize: o } = this;
        if (A.destroyed) return -1;
        const s = t[_][t[H]];
        return n(s), n.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), n(r >= 200), o > -1 && this.bytesRead + e.length > o ? (i.destroy(A, new p), -1) : (this.bytesRead += e.length, !1 === s.onData(e) ? Ue.ERROR.PAUSED : void 0);
    }
    onMessageComplete() {
        const { client: e, socket: t, statusCode: A, upgrade: r, headers: o, contentLength: s, bytesRead: a, shouldKeepAlive: c } = this;
        if (t.destroyed && (!A || c)) return -1;
        if (r) return;
        const l = e[_][e[H]];
        return n(l), n(A >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, A < 200 ? void 0 : "HEAD" !== l.method && s && a !== parseInt(s, 10) ? (i.destroy(t, new g), -1) : (l.onComplete(o), e[_][e[H]++] = null, t[L] ? (n.strictEqual(e[v], 0), i.destroy(t, new Q("reset")), Ue.ERROR.PAUSED) : c ? t[k] && 0 === e[v] ? (i.destroy(t, new Q("reset")), Ue.ERROR.PAUSED) : void (1 === e[W] ? setImmediate(tt, e) : tt(e)) : (i.destroy(t, new Q("reset")), Ue.ERROR.PAUSED));
    }
}
function We(e) {
    const { socket: t, timeoutType: A, client: r } = e;
    A === xe ? (!t[L] || t.writableNeedDrain || r[v] > 1) && (n(!e.paused, "cannot be paused while waiting for headers"), i.destroy(t, new d)) : 2 === A ? e.paused || i.destroy(t, new f) : A === He && (n(0 === r[v] && r[K]), i.destroy(t, new Q("socket idle timeout")));
}
function je() {
    const { [D]: e } = this;
    e && e.readMore();
}
function Ke(e) {
    const { [N]: t, [D]: A } = this;
    n("ERR_TLS_CERT_ALTNAME_INVALID" !== e.code), "h2" === t[ge] || "ECONNRESET" !== e.code || !A.statusCode || A.shouldKeepAlive ? (this[q] = e, Xe(this[N], e)) : A.onMessageComplete();
}
function Xe(e, t) {
    if (0 === e[v] && "UND_ERR_INFO" !== t.code && "UND_ERR_SOCKET" !== t.code) {
        n(e[x] === e[H]);
        const A = e[_].splice(e[H]);
        for(let n = 0; n < A.length; n++){
            at(e, A[n], t);
        }
        n(0 === e[U]);
    }
}
function Ze() {
    const { [D]: e, [N]: t } = this;
    "h2" === t[ge] || !e.statusCode || e.shouldKeepAlive ? i.destroy(this, new B("other side closed", i.getSocketInfo(this))) : e.onMessageComplete();
}
function ze() {
    const { [N]: e, [D]: t } = this;
    "h1" === e[ge] && t && (this[q] || !t.statusCode || t.shouldKeepAlive || t.onMessageComplete(), this[D].destroy(), this[D] = null);
    const A = this[q] || new B("closed", i.getSocketInfo(this));
    if (e[j] = null, e.destroyed) {
        n(0 === e[M]);
        const t = e[_].splice(e[H]);
        for(let n = 0; n < t.length; n++){
            at(e, t[n], A);
        }
    } else if (e[v] > 0 && "UND_ERR_INFO" !== A.code) {
        const t = e[_][e[H]];
        e[_][e[H]++] = null, at(e, t, A);
    }
    e[x] = e[H], n(0 === e[v]), e.emit("disconnect", e[w], [
        e
    ], A), tt(e);
}
async function $e(e) {
    n(!e[O]), n(!e[j]);
    let { host: t, hostname: A, protocol: o, port: s } = e[w];
    if ("[" === A[0]) {
        const e = A.indexOf("]");
        n(-1 !== e);
        const t = A.substring(1, e);
        n(r.isIP(t)), A = t;
    }
    e[O] = !0, Se.beforeConnect.hasSubscribers && Se.beforeConnect.publish({
        connectParams: {
            host: t,
            hostname: A,
            protocol: o,
            port: s,
            servername: e[b],
            localAddress: e[le]
        },
        connector: e[Ae]
    });
    try {
        const r = await new Promise((n, r)=>{
            e[Ae]({
                host: t,
                hostname: A,
                protocol: o,
                port: s,
                servername: e[b],
                localAddress: e[le]
            }, (e, t)=>{
                e ? r(e) : n(t);
            });
        });
        if (e.destroyed) return void i.destroy(r.on("error", ()=>{}), new m);
        e[O] = !1, n(r);
        if ("h2" === r.alpnProtocol) {
            Ne || (Ne = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
                code: "UNDICI-H2"
            }));
            const t = fe.connect(e[w], {
                createConnection: ()=>r,
                peerMaxConcurrentStreams: e[de].maxConcurrentStreams
            });
            e[ge] = "h2", t[N] = e, t[j] = r, t.on("error", Re), t.on("frameError", Fe), t.on("end", ve), t.on("goaway", Me), t.on("close", ze), t.unref(), e[he] = t, r[he] = t;
        } else Je || (Je = await Oe, Oe = null), r[G] = !1, r[L] = !1, r[k] = !1, r[R] = !1, r[D] = new qe(e, r, Je);
        r[oe] = 0, r[re] = e[re], r[N] = e, r[q] = null, r.on("error", Ke).on("readable", je).on("end", Ze).on("close", ze), e[j] = r, Se.connected.hasSubscribers && Se.connected.publish({
            connectParams: {
                host: t,
                hostname: A,
                protocol: o,
                port: s,
                servername: e[b],
                localAddress: e[le]
            },
            connector: e[Ae],
            socket: r
        }), e.emit("connect", e[w], [
            e
        ]);
    } catch (r) {
        if (e.destroyed) return;
        if (e[O] = !1, Se.connectError.hasSubscribers && Se.connectError.publish({
            connectParams: {
                host: t,
                hostname: A,
                protocol: o,
                port: s,
                servername: e[b],
                localAddress: e[le]
            },
            connector: e[Ae],
            error: r
        }), "ERR_TLS_CERT_ALTNAME_INVALID" === r.code) for(n(0 === e[v]); e[M] > 0 && e[_][e[x]].servername === e[b];){
            const t = e[_][e[x]++];
            at(e, t, r);
        }
        else Xe(e, r);
        e.emit("connectionError", e[w], [
            e
        ], r);
    }
    tt(e);
}
function et(e) {
    e[Y] = 0, e.emit("drain", e[w], [
        e
    ]);
}
function tt(e, t) {
    2 !== e[F] && (e[F] = 2, function(e, t) {
        for(;;){
            if (e.destroyed) return void n(0 === e[M]);
            if (e[De] && !e[U]) return e[De](), void (e[De] = null);
            const A = e[j];
            if (A && !A.destroyed && "h2" !== A.alpnProtocol) {
                if (0 === e[U] ? !A[G] && A.unref && (A.unref(), A[G] = !0) : A[G] && A.ref && (A.ref(), A[G] = !1), 0 === e[U]) A[D].timeoutType !== He && A[D].setTimeout(e[K], He);
                else if (e[v] > 0 && A[D].statusCode < 200 && A[D].timeoutType !== xe) {
                    const t = e[_][e[H]], n = null != t.headersTimeout ? t.headersTimeout : e[$];
                    A[D].setTimeout(n, xe);
                }
            }
            if (e[T]) e[Y] = 2;
            else if (2 === e[Y]) {
                t ? (e[Y] = 1, process.nextTick(et, e)) : et(e);
                continue;
            }
            if (0 === e[M]) return;
            if (e[v] >= (e[W] || 1)) return;
            const r = e[_][e[x]];
            if ("https:" === e[w].protocol && e[b] !== r.servername) {
                if (e[v] > 0) return;
                if (e[b] = r.servername, A && A.servername !== r.servername) return void i.destroy(A, new Q("servername changed"));
            }
            if (e[O]) return;
            if (!A && !e[he]) return void $e(e);
            if (A.destroyed || A[L] || A[k] || A[R]) return;
            if (e[v] > 0 && !r.idempotent) return;
            if (e[v] > 0 && (r.upgrade || "CONNECT" === r.method)) return;
            if (e[v] > 0 && 0 !== i.bodyLength(r.body) && (i.isStream(r.body) || i.isAsyncIterable(r.body))) return;
            !r.aborted && nt(e, r) ? e[x]++ : e[_].splice(e[x], 1);
        }
    }(e, t), e[F] = 0, e[H] > 256 && (e[_].splice(0, e[H]), e[x] -= e[H], e[H] = 0));
}
function At(e) {
    return "GET" !== e && "HEAD" !== e && "OPTIONS" !== e && "TRACE" !== e && "CONNECT" !== e;
}
function nt(e, t) {
    if ("h2" === e[ge]) return void function(e, t, A) {
        const { body: r, method: o, path: s, host: a, upgrade: l, expectContinue: g, signal: E, headers: d } = A;
        let I, B;
        I = "string" == typeof d ? c[Be](d.trim()) : d;
        if (l) return at(e, A, new Error("Upgrade not supported for H2")), !1;
        try {
            A.onConnect((t)=>{
                A.aborted || A.completed || at(e, A, t || new h);
            });
        } catch (t) {
            at(e, A, t);
        }
        if (A.aborted) return !1;
        const f = e[de];
        if (I[Ce] = a || e[Ee], I[pe] = o, "CONNECT" === o) return t.ref(), B = t.request(I, {
            endStream: !1,
            signal: E
        }), B.id && !B.pending ? (A.onUpgrade(null, null, B), ++f.openStreams) : B.once("ready", ()=>{
            A.onUpgrade(null, null, B), ++f.openStreams;
        }), B.once("close", ()=>{
            f.openStreams -= 1, 0 === f.openStreams && t.unref();
        }), !0;
        I[me] = s, I[ye] = "https";
        const C = "PUT" === o || "POST" === o || "PATCH" === o;
        r && "function" == typeof r.read && r.read(0);
        let p = i.bodyLength(r);
        null == p && (p = A.contentLength);
        0 !== p && C || (p = null);
        if (At(o) && p > 0 && null != A.contentLength && A.contentLength !== p) {
            if (e[te]) return at(e, A, new u), !1;
            process.emitWarning(new u);
        }
        null != p && (n(r, "no body must not have content length"), I[we] = `${p}`);
        t.ref();
        const m = "GET" === o || "HEAD" === o;
        g ? (I[ke] = "100-continue", B = t.request(I, {
            endStream: m,
            signal: E
        }), B.once("continue", y)) : (B = t.request(I, {
            endStream: m,
            signal: E
        }), y());
        return ++f.openStreams, B.once("response", (e)=>{
            const { [be]: t, ...n } = e;
            !1 === A.onHeaders(Number(t), n, B.resume.bind(B), "") && B.pause();
        }), B.once("end", ()=>{
            A.onComplete([]);
        }), B.on("data", (e)=>{
            !1 === A.onData(e) && B.pause();
        }), B.once("close", ()=>{
            f.openStreams -= 1, 0 === f.openStreams && t.unref();
        }), B.once("error", function(t) {
            !e[he] || e[he].destroyed || this.closed || this.destroyed || (f.streams -= 1, i.destroy(B, t));
        }), B.once("frameError", (t, n)=>{
            const r = new Q(`HTTP/2: "frameError" received - type ${t}, code ${n}`);
            at(e, A, r), !e[he] || e[he].destroyed || this.closed || this.destroyed || (f.streams -= 1, i.destroy(B, r));
        }), !0;
        function y() {
            r ? i.isBuffer(r) ? (n(p === r.byteLength, "buffer body must have content length"), B.cork(), B.write(r), B.uncork(), B.end(), A.onBodySent(r), A.onRequestSent()) : i.isBlobLike(r) ? "function" == typeof r.stream ? st({
                client: e,
                request: A,
                contentLength: p,
                h2stream: B,
                expectsPayload: C,
                body: r.stream(),
                socket: e[j],
                header: ""
            }) : ot({
                body: r,
                client: e,
                request: A,
                contentLength: p,
                expectsPayload: C,
                h2stream: B,
                header: "",
                socket: e[j]
            }) : i.isStream(r) ? rt({
                body: r,
                client: e,
                request: A,
                contentLength: p,
                expectsPayload: C,
                socket: e[j],
                h2stream: B,
                header: ""
            }) : i.isIterable(r) ? st({
                body: r,
                client: e,
                request: A,
                contentLength: p,
                expectsPayload: C,
                header: "",
                h2stream: B,
                socket: e[j]
            }) : n(!1) : A.onRequestSent();
        }
    }(e, e[he], t);
    const { body: A, method: r, path: o, host: s, upgrade: a, headers: l, blocking: g, reset: E } = t, d = "PUT" === r || "POST" === r || "PATCH" === r;
    A && "function" == typeof A.read && A.read(0);
    const I = i.bodyLength(A);
    let B = I;
    if (null === B && (B = t.contentLength), 0 !== B || d || (B = null), At(r) && B > 0 && null !== t.contentLength && t.contentLength !== B) {
        if (e[te]) return at(e, t, new u), !1;
        process.emitWarning(new u);
    }
    const f = e[j];
    try {
        t.onConnect((A)=>{
            t.aborted || t.completed || (at(e, t, A || new h), i.destroy(f, new Q("aborted")));
        });
    } catch (A) {
        at(e, t, A);
    }
    if (t.aborted) return !1;
    "HEAD" === r && (f[k] = !0), (a || "CONNECT" === r) && (f[k] = !0), null != E && (f[k] = E), e[re] && f[oe]++ >= e[re] && (f[k] = !0), g && (f[R] = !0);
    let C = `${r} ${o} HTTP/1.1\r\n`;
    return C += "string" == typeof s ? `host: ${s}\r\n` : e[V], a ? C += `connection: upgrade\r\nupgrade: ${a}\r\n` : e[W] && !f[k] ? C += "connection: keep-alive\r\n" : C += "connection: close\r\n", l && (C += l), Se.sendHeaders.hasSubscribers && Se.sendHeaders.publish({
        request: t,
        headers: C,
        socket: f
    }), A && 0 !== I ? i.isBuffer(A) ? (n(B === A.byteLength, "buffer body must have content length"), f.cork(), f.write(`${C}content-length: ${B}\r\n\r\n`, "latin1"), f.write(A), f.uncork(), t.onBodySent(A), t.onRequestSent(), d || (f[k] = !0)) : i.isBlobLike(A) ? "function" == typeof A.stream ? st({
        body: A.stream(),
        client: e,
        request: t,
        socket: f,
        contentLength: B,
        header: C,
        expectsPayload: d
    }) : ot({
        body: A,
        client: e,
        request: t,
        socket: f,
        contentLength: B,
        header: C,
        expectsPayload: d
    }) : i.isStream(A) ? rt({
        body: A,
        client: e,
        request: t,
        socket: f,
        contentLength: B,
        header: C,
        expectsPayload: d
    }) : i.isIterable(A) ? st({
        body: A,
        client: e,
        request: t,
        socket: f,
        contentLength: B,
        header: C,
        expectsPayload: d
    }) : n(!1) : (0 === B ? f.write(`${C}content-length: 0\r\n\r\n`, "latin1") : (n(null === B, "no body must not have content length"), f.write(`${C}\r\n`, "latin1")), t.onRequestSent()), !0;
}
function rt({ h2stream: e, body: t, client: A, request: r, socket: o, contentLength: a, header: c, expectsPayload: l }) {
    if (n(0 !== a || 0 === A[v], "stream body cannot be pipelined"), "h2" === A[ge]) {
        const Q = s(t, e, (A)=>{
            A ? (i.destroy(t, A), i.destroy(e, A)) : r.onRequestSent();
        });
        function f(e) {
            r.onBodySent(e);
        }
        return Q.on("data", f), void Q.once("end", ()=>{
            Q.removeListener("data", f), i.destroy(Q);
        });
    }
    let u = !1;
    const g = new it({
        socket: o,
        request: r,
        contentLength: a,
        client: A,
        expectsPayload: l,
        header: c
    }), E = function(e) {
        if (!u) try {
            !g.write(e) && this.pause && this.pause();
        } catch (e) {
            i.destroy(this, e);
        }
    }, d = function() {
        u || t.resume && t.resume();
    }, I = function() {
        if (u) return;
        const e = new h;
        queueMicrotask(()=>B(e));
    }, B = function(e) {
        if (!u) {
            if (u = !0, n(o.destroyed || o[L] && A[v] <= 1), o.off("drain", d).off("error", B), t.removeListener("data", E).removeListener("end", B).removeListener("error", B).removeListener("close", I), !e) try {
                g.end();
            } catch (t) {
                e = t;
            }
            g.destroy(e), !e || "UND_ERR_INFO" === e.code && "reset" === e.message ? i.destroy(t) : i.destroy(t, e);
        }
    };
    t.on("data", E).on("end", B).on("error", B).on("close", I), t.resume && t.resume(), o.on("drain", d).on("error", B);
}
async function ot({ h2stream: e, body: t, client: A, request: r, socket: o, contentLength: s, header: a, expectsPayload: c }) {
    n(s === t.size, "blob body must have content length");
    const l = "h2" === A[ge];
    try {
        if (null != s && s !== t.size) throw new u;
        const n = Buffer.from(await t.arrayBuffer());
        l ? (e.cork(), e.write(n), e.uncork()) : (o.cork(), o.write(`${a}content-length: ${s}\r\n\r\n`, "latin1"), o.write(n), o.uncork()), r.onBodySent(n), r.onRequestSent(), c || (o[k] = !0), tt(A);
    } catch (t) {
        i.destroy(l ? e : o, t);
    }
}
async function st({ h2stream: e, body: t, client: A, request: r, socket: o, contentLength: s, header: i, expectsPayload: a }) {
    n(0 !== s || 0 === A[v], "iterator body cannot be pipelined");
    let c = null;
    function l() {
        if (c) {
            const e = c;
            c = null, e();
        }
    }
    const u = ()=>new Promise((e, t)=>{
            n(null === c), o[q] ? t(o[q]) : c = e;
        });
    if ("h2" === A[ge]) {
        e.on("close", l).on("drain", l);
        try {
            for await (const A of t){
                if (o[q]) throw o[q];
                const t = e.write(A);
                r.onBodySent(A), t || await u();
            }
        } catch (t) {
            e.destroy(t);
        } finally{
            r.onRequestSent(), e.end(), e.off("close", l).off("drain", l);
        }
        return;
    }
    o.on("close", l).on("drain", l);
    const g = new it({
        socket: o,
        request: r,
        contentLength: s,
        client: A,
        expectsPayload: a,
        header: i
    });
    try {
        for await (const e of t){
            if (o[q]) throw o[q];
            g.write(e) || await u();
        }
        g.end();
    } catch (e) {
        g.destroy(e);
    } finally{
        o.off("close", l).off("drain", l);
    }
}
class it {
    constructor({ socket: e, request: t, contentLength: A, client: n, expectsPayload: r, header: o }){
        this.socket = e, this.request = t, this.contentLength = A, this.client = n, this.bytesWritten = 0, this.expectsPayload = r, this.header = o, e[L] = !0;
    }
    write(e) {
        const { socket: t, request: A, contentLength: n, client: r, bytesWritten: o, expectsPayload: s, header: i } = this;
        if (t[q]) throw t[q];
        if (t.destroyed) return !1;
        const a = Buffer.byteLength(e);
        if (!a) return !0;
        if (null !== n && o + a > n) {
            if (r[te]) throw new u;
            process.emitWarning(new u);
        }
        t.cork(), 0 === o && (s || (t[k] = !0), null === n ? t.write(`${i}transfer-encoding: chunked\r\n`, "latin1") : t.write(`${i}content-length: ${n}\r\n\r\n`, "latin1")), null === n && t.write(`\r\n${a.toString(16)}\r\n`, "latin1"), this.bytesWritten += a;
        const c = t.write(e);
        return t.uncork(), A.onBodySent(e), c || t[D].timeout && t[D].timeoutType === xe && t[D].timeout.refresh && t[D].timeout.refresh(), c;
    }
    end() {
        const { socket: e, contentLength: t, client: A, bytesWritten: n, expectsPayload: r, header: o, request: s } = this;
        if (s.onRequestSent(), e[L] = !1, e[q]) throw e[q];
        if (!e.destroyed) {
            if (0 === n ? r ? e.write(`${o}content-length: 0\r\n\r\n`, "latin1") : e.write(`${o}\r\n`, "latin1") : null === t && e.write("\r\n0\r\n\r\n", "latin1"), null !== t && n !== t) {
                if (A[te]) throw new u;
                process.emitWarning(new u);
            }
            e[D].timeout && e[D].timeoutType === xe && e[D].timeout.refresh && e[D].timeout.refresh(), tt(A);
        }
    }
    destroy(e) {
        const { socket: t, client: A } = this;
        t[L] = !1, e && (n(A[v] <= 1, "pipeline should only contain this request"), i.destroy(t, e));
    }
}
function at(e, t, A) {
    try {
        t.onError(A), n(t.aborted);
    } catch (A) {
        e.emit("error", A);
    }
}
module.exports = class extends l {
    constructor(e, { interceptors: t, maxHeaderSize: A, headersTimeout: n, socketTimeout: s, requestTimeout: a, connectTimeout: c, bodyTimeout: l, idleTimeout: u, keepAlive: g, keepAliveTimeout: h, maxKeepAliveTimeout: d, keepAliveMaxTimeout: I, keepAliveTimeoutThreshold: B, socketPath: Q, pipelining: f, tls: C, strictContentLength: p, maxCachedSessions: m, maxRedirections: k, connect: N, maxRequestsPerClient: T, localAddress: D, maxResponseSize: S, autoSelectFamily: R, autoSelectFamilyAttemptTimeout: v, allowH2: M, maxConcurrentStreams: U } = {}){
        if (super(), void 0 !== g) throw new E("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== s) throw new E("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== a) throw new E("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== u) throw new E("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== d) throw new E("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != A && !Number.isFinite(A)) throw new E("invalid maxHeaderSize");
        if (null != Q && "string" != typeof Q) throw new E("invalid socketPath");
        if (null != c && (!Number.isFinite(c) || c < 0)) throw new E("invalid connectTimeout");
        if (null != h && (!Number.isFinite(h) || h <= 0)) throw new E("invalid keepAliveTimeout");
        if (null != I && (!Number.isFinite(I) || I <= 0)) throw new E("invalid keepAliveMaxTimeout");
        if (null != B && !Number.isFinite(B)) throw new E("invalid keepAliveTimeoutThreshold");
        if (null != n && (!Number.isInteger(n) || n < 0)) throw new E("headersTimeout must be a positive integer or zero");
        if (null != l && (!Number.isInteger(l) || l < 0)) throw new E("bodyTimeout must be a positive integer or zero");
        if (null != N && "function" != typeof N && "object" != typeof N) throw new E("connect must be a function or an object");
        if (null != k && (!Number.isInteger(k) || k < 0)) throw new E("maxRedirections must be a positive number");
        if (null != T && (!Number.isInteger(T) || T < 0)) throw new E("maxRequestsPerClient must be a positive number");
        if (null != D && ("string" != typeof D || 0 === r.isIP(D))) throw new E("localAddress must be valid string IP address");
        if (null != S && (!Number.isInteger(S) || S < -1)) throw new E("maxResponseSize must be a positive number");
        if (null != v && (!Number.isInteger(v) || v < -1)) throw new E("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != M && "boolean" != typeof M) throw new E("allowH2 must be a valid boolean value");
        if (null != U && ("number" != typeof U || U < 1)) throw new E("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof N && (N = y({
            ...C,
            maxCachedSessions: m,
            allowH2: M,
            socketPath: Q,
            timeout: c,
            ...i.nodeHasAutoSelectFamily && R ? {
                autoSelectFamily: R,
                autoSelectFamilyAttemptTimeout: v
            } : void 0,
            ...N
        })), this[ce] = t && t.Client && Array.isArray(t.Client) ? t.Client : [
            Le({
                maxRedirections: k
            })
        ], this[w] = i.parseOrigin(e), this[Ae] = N, this[j] = null, this[W] = null != f ? f : 1, this[X] = A || o.maxHeaderSize, this[P] = h ?? 4e3, this[Z] = I ?? 6e5, this[z] = B ?? 1e3, this[K] = this[P], this[b] = null, this[le] = null != D ? D : null, this[F] = 0, this[Y] = 0, this[V] = `host: ${this[w].hostname}${this[w].port ? `:${this[w].port}` : ""}\r\n`, this[ee] = null != l ? l : 3e5, this[$] = null != n ? n : 3e5, this[te] = p ?? !0, this[ne] = k, this[re] = T, this[De] = null, this[ue] = S > -1 ? S : -1, this[ge] = "h1", this[he] = null, this[de] = M ? {
            openStreams: 0,
            maxConcurrentStreams: null != U ? U : 100
        } : null, this[Ee] = `${this[w].hostname}${this[w].port ? `:${this[w].port}` : ""}`, this[_] = [], this[H] = 0, this[x] = 0;
    }
    get pipelining() {
        return this[W];
    }
    set pipelining(e) {
        this[W] = e, tt(this, !0);
    }
    get [M]() {
        return this[_].length - this[x];
    }
    get [v]() {
        return this[x] - this[H];
    }
    get [U]() {
        return this[_].length - this[H];
    }
    get [J]() {
        return !!this[j] && !this[O] && !this[j].destroyed;
    }
    get [T]() {
        const e = this[j];
        return e && (e[k] || e[L] || e[R]) || this[U] >= (this[W] || 1) || this[M] > 0;
    }
    [S](e) {
        $e(this), this.once("connect", e);
    }
    [ae](e, t) {
        const A = e.origin || this[w].origin, n = "h2" === this[ge] ? c[Ie](A, e, t) : c[Qe](A, e, t);
        return this[_].push(n), this[F] || (null == i.bodyLength(n.body) && i.isIterable(n.body) ? (this[F] = 1, process.nextTick(tt, this)) : tt(this, !0)), this[F] && 2 !== this[Y] && this[T] && (this[Y] = 2), this[Y] < 2;
    }
    async [se]() {
        return new Promise((e)=>{
            this[U] ? this[De] = e : e(null);
        });
    }
    async [ie](e) {
        return new Promise((t)=>{
            const A = this[_].splice(this[x]);
            for(let t = 0; t < A.length; t++){
                at(this, A[t], e);
            }
            const n = ()=>{
                this[De] && (this[De](), this[De] = null), t();
            };
            null != this[he] && (i.destroy(this[he], e), this[he] = null, this[de] = null), this[j] ? i.destroy(this[j].on("close", n), e) : queueMicrotask(n), tt(this);
        });
    }
};
