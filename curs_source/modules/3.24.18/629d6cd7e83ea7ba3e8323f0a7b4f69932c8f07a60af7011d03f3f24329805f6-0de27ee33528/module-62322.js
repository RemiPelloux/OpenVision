"use strict";
const r = require(56970), s = require("./module-55201.js"), { channels: o } = require("./module-98565.js"), n = require("./module-29254.js"), { RequestContentLengthMismatchError: i, ResponseContentLengthMismatchError: a, RequestAbortedError: Q, InvalidArgumentError: g, HeadersTimeoutError: E, HeadersOverflowError: B, SocketError: c, InformationalError: I, BodyTimeoutError: C, HTTPParserError: h, ResponseExceededMaxSizeError: l } = require("./module-38238.js"), { kUrl: u, kReset: d, kClient: f, kParser: w, kBlocking: y, kRunning: D, kPending: p, kSize: k, kWriting: R, kQueue: F, kNoRef: m, kKeepAliveDefaultTimeout: b, kHostHeader: N, kPendingIdx: S, kRunningIdx: M, kError: U, kPipelining: L, kSocket: T, kKeepAliveTimeoutValue: Y, kMaxHeadersSize: G, kKeepAliveMaxTimeout: J, kKeepAliveTimeoutThreshold: v, kHeadersTimeout: H, kBodyTimeout: V, kStrictContentLength: x, kMaxRequests: W, kCounter: O, kMaxResponseSize: P, kOnError: q, kResume: Z, kHTTPContext: z } = require("./module-76992.js"), K = require("./module-56555.js"), X = Buffer.alloc(0), _ = Buffer[Symbol.species], j = s.addListener, $ = s.removeAllListeners, AA = Symbol("kIdleSocketValidation"), eA = Symbol("kIdleSocketValidationTimeout"), tA = Symbol("kSocketUsed");
let rA;
let sA = null, oA = async function() {
    const A = process.env.JEST_WORKER_ID ? require("./module-31205.js") : void 0;
    let e;
    try {
        e = await WebAssembly.compile(require("./module-26647.js"));
    } catch (r) {
        e = await WebAssembly.compile(A || require("./module-31205.js"));
    }
    return await WebAssembly.instantiate(e, {
        env: {
            wasm_on_url: (A, e, t)=>0,
            wasm_on_status: (A, e, t)=>{
                r(nA.ptr === A);
                const s = e - QA + iA.byteOffset;
                return nA.onStatus(new _(iA.buffer, s, t)) || 0;
            },
            wasm_on_message_begin: (A)=>(r(nA.ptr === A), nA.onMessageBegin() || 0),
            wasm_on_header_field: (A, e, t)=>{
                r(nA.ptr === A);
                const s = e - QA + iA.byteOffset;
                return nA.onHeaderField(new _(iA.buffer, s, t)) || 0;
            },
            wasm_on_header_value: (A, e, t)=>{
                r(nA.ptr === A);
                const s = e - QA + iA.byteOffset;
                return nA.onHeaderValue(new _(iA.buffer, s, t)) || 0;
            },
            wasm_on_headers_complete: (A, e, t, s)=>(r(nA.ptr === A), nA.onHeadersComplete(e, Boolean(t), Boolean(s)) || 0),
            wasm_on_body: (A, e, t)=>{
                r(nA.ptr === A);
                const s = e - QA + iA.byteOffset;
                return nA.onBody(new _(iA.buffer, s, t)) || 0;
            },
            wasm_on_message_complete: (A)=>(r(nA.ptr === A), nA.onMessageComplete() || 0)
        }
    });
}();
oA.catch();
let nA = null, iA = null, aA = 0, QA = null;
class gA {
    constructor(A, e, { exports: t }){
        r(Number.isFinite(A[G]) && A[G] > 0), this.llhttp = t, this.ptr = this.llhttp.llhttp_alloc(K.TYPE.RESPONSE), this.client = A, this.socket = e, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = A[G], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = A[P];
    }
    setTimeout(A, e) {
        A !== this.timeoutValue || 1 & e ^ 1 & this.timeoutType ? (this.timeout && (n.clearTimeout(this.timeout), this.timeout = null), A && (1 & e ? this.timeout = n.setFastTimeout(EA, A, new WeakRef(this)) : (this.timeout = setTimeout(EA, A, new WeakRef(this)), this.timeout.unref())), this.timeoutValue = A) : this.timeout && this.timeout.refresh && this.timeout.refresh(), this.timeoutType = e;
    }
    resume() {
        !this.socket.destroyed && this.paused && (r(null != this.ptr), r(null == nA), this.llhttp.llhttp_resume(this.ptr), r(5 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || X), this.readMore());
    }
    readMore() {
        for(; !this.paused && this.ptr;){
            const A = this.socket.read();
            if (null === A) break;
            this.execute(A);
        }
    }
    execute(A) {
        r(null != this.ptr), r(null == nA), r(!this.paused);
        const { socket: e, llhttp: t } = this;
        A.length > aA && (QA && t.free(QA), aA = 4096 * Math.ceil(A.length / 4096), QA = t.malloc(aA)), new Uint8Array(t.memory.buffer, QA, aA).set(A);
        try {
            let r;
            try {
                iA = A, nA = this, r = t.llhttp_execute(this.ptr, QA, A.length);
            } catch (A) {
                throw A;
            } finally{
                nA = null, iA = null;
            }
            const s = t.llhttp_get_error_pos(this.ptr) - QA;
            if (r !== K.ERROR.OK) {
                const t = A.subarray(s);
                if (r === K.ERROR.PAUSED_UPGRADE) this.onUpgrade(t);
                else {
                    if (r !== K.ERROR.PAUSED) throw this.createError(r, t);
                    this.paused = !0, e.unshift(t);
                }
            }
        } catch (A) {
            s.destroy(e, A);
        }
    }
    finish() {
        r(null === nA), r(null != this.ptr), r(!this.paused);
        const { llhttp: A } = this;
        let e;
        try {
            nA = this, e = A.llhttp_finish(this.ptr);
        } finally{
            nA = null;
        }
        return e === K.ERROR.OK ? null : e === K.ERROR.PAUSED || e === K.ERROR.PAUSED_UPGRADE ? (this.paused = !0, null) : this.createError(e, X);
    }
    createError(A, e) {
        const { llhttp: t, contentLength: r, bytesRead: s } = this;
        if (r && s !== parseInt(r, 10)) return new a;
        const o = t.llhttp_get_error_reason(this.ptr);
        let n = "";
        if (o) {
            const A = new Uint8Array(t.memory.buffer, o).indexOf(0);
            n = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(t.memory.buffer, o, A).toString() + ")";
        }
        return new h(n, K.ERROR[A], e);
    }
    destroy() {
        r(null != this.ptr), r(null == nA), this.llhttp.llhttp_free(this.ptr), this.ptr = null, this.timeout && n.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
    }
    onStatus(A) {
        this.statusText = A.toString();
    }
    onMessageBegin() {
        const { socket: A, client: e } = this;
        if (A.destroyed) return -1;
        if (0 === e[D]) return s.destroy(A, new c("bad response", s.getSocketInfo(A))), -1;
        const t = e[F][e[M]];
        if (!t) return -1;
        t.onResponseStarted();
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
        if (10 === t.length) {
            const e = s.bufferToLowerCasedHeaderName(t);
            "keep-alive" === e ? this.keepAlive += A.toString() : "connection" === e && (this.connection += A.toString());
        } else 14 === t.length && "content-length" === s.bufferToLowerCasedHeaderName(t) && (this.contentLength += A.toString());
        this.trackHeader(A.length);
    }
    trackHeader(A) {
        this.headersSize += A, this.headersSize >= this.headersMaxSize && s.destroy(this.socket, new B);
    }
    onUpgrade(A) {
        const { upgrade: e, client: t, socket: o, headers: n, statusCode: i } = this;
        r(e), r(t[T] === o), r(!o.destroyed), r(!this.paused), r(!(1 & n.length));
        const a = t[F][t[M]];
        r(a), r(a.upgrade || "CONNECT" === a.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, this.headers = [], this.headersSize = 0, o.unshift(A), o[w].destroy(), o[w] = null, o[f] = null, o[U] = null, $(o), t[T] = null, t[z] = null, t[F][t[M]++] = null, t.emit("disconnect", t[u], [
            t
        ], new I("upgrade"));
        try {
            a.onUpgrade(i, n, o);
        } catch (A) {
            s.destroy(o, A);
        }
        t[Z]();
    }
    onHeadersComplete(A, e, t) {
        const { client: o, socket: n, headers: i, statusText: a } = this;
        if (n.destroyed) return -1;
        if (0 === o[D]) return s.destroy(n, new c("bad response", s.getSocketInfo(n))), -1;
        const Q = o[F][o[M]];
        if (!Q) return -1;
        if (r(!this.upgrade), r(this.statusCode < 200), 100 === A) return s.destroy(n, new c("bad response", s.getSocketInfo(n))), -1;
        if (e && !Q.upgrade) return s.destroy(n, new c("bad upgrade", s.getSocketInfo(n))), -1;
        if (r(3 === this.timeoutType), this.statusCode = A, this.shouldKeepAlive = t || "HEAD" === Q.method && !n[d] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
            const A = null != Q.bodyTimeout ? Q.bodyTimeout : o[V];
            this.setTimeout(A, 5);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === Q.method) return r(1 === o[D]), this.upgrade = !0, 2;
        if (e) return r(1 === o[D]), this.upgrade = !0, 2;
        if (r(!(1 & this.headers.length)), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && o[L]) {
            const A = this.keepAlive ? s.parseKeepAliveTimeout(this.keepAlive) : null;
            if (null != A) {
                const e = Math.min(A - o[v], o[J]);
                e <= 0 ? n[d] = !0 : o[Y] = e;
            } else o[Y] = o[b];
        } else n[d] = !0;
        const g = !1 === Q.onHeaders(A, i, this.resume, a);
        return Q.aborted ? -1 : "HEAD" === Q.method || A < 200 ? 1 : (n[y] && (n[y] = !1, o[Z]()), g ? K.ERROR.PAUSED : 0);
    }
    onBody(A) {
        const { client: e, socket: t, statusCode: o, maxResponseSize: n } = this;
        if (t.destroyed) return -1;
        const i = e[F][e[M]];
        return r(i), r(5 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), r(o >= 200), n > -1 && this.bytesRead + A.length > n ? (s.destroy(t, new l), -1) : (this.bytesRead += A.length, !1 === i.onData(A) ? K.ERROR.PAUSED : void 0);
    }
    onMessageComplete() {
        const { client: A, socket: e, statusCode: t, upgrade: o, headers: n, contentLength: i, bytesRead: Q, shouldKeepAlive: g } = this;
        if (e.destroyed && (!t || g)) return -1;
        if (o) return;
        r(t >= 100), r(!(1 & this.headers.length));
        const E = A[F][A[M]];
        return r(E), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", this.headers = [], this.headersSize = 0, t < 200 ? void 0 : "HEAD" !== E.method && i && Q !== parseInt(i, 10) ? (s.destroy(e, new a), -1) : (E.onComplete(n), A[F][A[M]++] = null, e[tA] = !0, e[R] ? (r(0 === A[D]), s.destroy(e, new I("reset")), K.ERROR.PAUSED) : g ? e[d] && 0 === A[D] ? (s.destroy(e, new I("reset")), K.ERROR.PAUSED) : void (null == A[L] || 1 === A[L] ? setImmediate(()=>A[Z]()) : A[Z]()) : (s.destroy(e, new I("reset")), K.ERROR.PAUSED));
    }
}
function EA(A) {
    const { socket: e, timeoutType: t, client: o, paused: n } = A.deref();
    3 === t ? (!e[R] || e.writableNeedDrain || o[D] > 1) && (r(!n, "cannot be paused while waiting for headers"), s.destroy(e, new E)) : 5 === t ? n || s.destroy(e, new C) : 8 === t && (r(0 === o[D] && o[Y]), s.destroy(e, new I("socket idle timeout")));
}
function BA(A) {
    A[eA] && (clearTimeout(A[eA]), A[eA] = null), A[AA] = 0;
}
function cA(A, e, t, o, n, i, a, Q) {
    try {
        e ? s.isBuffer(e) && (r(i === e.byteLength, "buffer body must have content length"), n.cork(), n.write(`${a}content-length: ${i}\r\n\r\n`, "latin1"), n.write(e), n.uncork(), o.onBodySent(e), Q || !1 === o.reset || (n[d] = !0)) : 0 === i ? n.write(`${a}content-length: 0\r\n\r\n`, "latin1") : (r(null === i, "no body must not have content length"), n.write(`${a}\r\n`, "latin1")), o.onRequestSent(), t[Z]();
    } catch (e) {
        A(e);
    }
}
async function IA(A, e, t, s, o, n, i, a) {
    r(0 !== n || 0 === t[D], "iterator body cannot be pipelined");
    let Q = null;
    function g() {
        if (Q) {
            const A = Q;
            Q = null, A();
        }
    }
    const E = ()=>new Promise((A, e)=>{
            r(null === Q), o[U] ? e(o[U]) : Q = A;
        });
    o.on("close", g).on("drain", g);
    const B = new CA({
        abort: A,
        socket: o,
        request: s,
        contentLength: n,
        client: t,
        expectsPayload: a,
        header: i
    });
    try {
        for await (const A of e){
            if (o[U]) throw o[U];
            B.write(A) || await E();
        }
        B.end();
    } catch (A) {
        B.destroy(A);
    } finally{
        o.off("close", g).off("drain", g);
    }
}
class CA {
    constructor({ abort: A, socket: e, request: t, contentLength: r, client: s, expectsPayload: o, header: n }){
        this.socket = e, this.request = t, this.contentLength = r, this.client = s, this.bytesWritten = 0, this.expectsPayload = o, this.header = n, this.abort = A, e[R] = !0;
    }
    write(A) {
        const { socket: e, request: t, contentLength: r, client: s, bytesWritten: o, expectsPayload: n, header: a } = this;
        if (e[U]) throw e[U];
        if (e.destroyed) return !1;
        const Q = Buffer.byteLength(A);
        if (!Q) return !0;
        if (null !== r && o + Q > r) {
            if (s[x]) throw new i;
            process.emitWarning(new i);
        }
        e.cork(), 0 === o && (n || !1 === t.reset || (e[d] = !0), null === r ? e.write(`${a}transfer-encoding: chunked\r\n`, "latin1") : e.write(`${a}content-length: ${r}\r\n\r\n`, "latin1")), null === r && e.write(`\r\n${Q.toString(16)}\r\n`, "latin1"), this.bytesWritten += Q;
        const g = e.write(A);
        return e.uncork(), t.onBodySent(A), g || e[w].timeout && 3 === e[w].timeoutType && e[w].timeout.refresh && e[w].timeout.refresh(), g;
    }
    end() {
        const { socket: A, contentLength: e, client: t, bytesWritten: r, expectsPayload: s, header: o, request: n } = this;
        if (n.onRequestSent(), A[R] = !1, A[U]) throw A[U];
        if (!A.destroyed) {
            if (0 === r ? s ? A.write(`${o}content-length: 0\r\n\r\n`, "latin1") : A.write(`${o}\r\n`, "latin1") : null === e && A.write("\r\n0\r\n\r\n", "latin1"), null !== e && r !== e) {
                if (t[x]) throw new i;
                process.emitWarning(new i);
            }
            A[w].timeout && 3 === A[w].timeoutType && A[w].timeout.refresh && A[w].timeout.refresh(), t[Z]();
        }
    }
    destroy(A) {
        const { socket: e, client: t, abort: s } = this;
        e[R] = !1, A && (r(t[D] <= 1, "pipeline should only contain this request"), s(A));
    }
}
module.exports = async function(A, e) {
    A[T] = e, sA || (sA = await oA, oA = null), e[m] = !1, e[R] = !1, e[d] = !1, e[y] = !1, e[AA] = 0, e[eA] = null, e[tA] = !1, e[w] = new gA(A, e, sA), j(e, "error", function(A) {
        r("ERR_TLS_CERT_ALTNAME_INVALID" !== A.code);
        const e = this[w];
        if ("ECONNRESET" === A.code && e.statusCode && !e.shouldKeepAlive) {
            const A = e.finish();
            return void (A && (this[U] = A, this[f][q](A)));
        }
        this[U] = A, this[f][q](A);
    }), j(e, "readable", function() {
        const A = this[w];
        A && A.readMore();
    }), j(e, "end", function() {
        const A = this[w];
        if (A.statusCode && !A.shouldKeepAlive) {
            const e = A.finish();
            return void (e && s.destroy(this, e));
        }
        s.destroy(this, new c("other side closed", s.getSocketInfo(this)));
    }), j(e, "close", function() {
        const A = this[f], e = this[w];
        BA(this), e && (this[U] || !e.statusCode || e.shouldKeepAlive || (this[U] = e.finish() || this[U]), this[w].destroy(), this[w] = null);
        const t = this[U] || new c("closed", s.getSocketInfo(this));
        if (A[T] = null, A[z] = null, A.destroyed) {
            r(0 === A[p]);
            const e = A[F].splice(A[M]);
            for(let r = 0; r < e.length; r++){
                const o = e[r];
                s.errorRequest(A, o, t);
            }
        } else if (A[D] > 0 && "UND_ERR_INFO" !== t.code) {
            const e = A[F][A[M]];
            A[F][A[M]++] = null, s.errorRequest(A, e, t);
        }
        A[S] = A[M], r(0 === A[D]), A.emit("disconnect", A[u], [
            A
        ], t), A[Z]();
    });
    let n = !1;
    return e.on("close", ()=>{
        n = !0;
    }), {
        version: "h1",
        defaultPipelining: 1,
        write: (...e)=>(function(A, e) {
                const { method: n, path: a, host: E, upgrade: B, blocking: c, reset: C } = e;
                let { body: h, headers: l, contentLength: u } = e;
                const f = "PUT" === n || "POST" === n || "PATCH" === n || "QUERY" === n || "PROPFIND" === n || "PROPPATCH" === n;
                if (s.isFormDataLike(h)) {
                    rA || (rA = require("./module-33095.js").extractBody);
                    const [A, r] = rA(h);
                    null == e.contentType && l.push("content-type", r), h = A.stream, u = A.length;
                } else if (s.isBlobLike(h) && null == e.contentType) {
                    const t = h.type;
                    if (t) {
                        const r = `${t}`;
                        if (!s.isValidHeaderValue(r)) return s.errorRequest(A, e, new g("invalid content-type header")), !1;
                        l.push("content-type", r);
                    }
                }
                h && "function" == typeof h.read && h.read(0);
                const w = s.bodyLength(h);
                u = w ?? u, null === u && (u = e.contentLength);
                0 !== u || f || (u = null);
                if (function(A) {
                    return "GET" !== A && "HEAD" !== A && "OPTIONS" !== A && "TRACE" !== A && "CONNECT" !== A;
                }(n) && u > 0 && null !== e.contentLength && e.contentLength !== u) {
                    if (A[x]) return s.errorRequest(A, e, new i), !1;
                    process.emitWarning(new i);
                }
                const p = A[T];
                BA(p);
                const k = (t)=>{
                    e.aborted || e.completed || (s.errorRequest(A, e, t || new Q), s.destroy(h), s.destroy(p, new I("aborted")));
                };
                try {
                    e.onConnect(k);
                } catch (t) {
                    s.errorRequest(A, e, t);
                }
                if (e.aborted) return !1;
                "HEAD" === n && (p[d] = !0);
                (B || "CONNECT" === n) && (p[d] = !0);
                null != C && (p[d] = C);
                A[W] && p[O]++ >= A[W] && (p[d] = !0);
                c && (p[y] = !0);
                let F = `${n} ${a} HTTP/1.1\r\n`;
                F += "string" == typeof E ? `host: ${E}\r\n` : A[N];
                B ? F += `connection: upgrade\r\nupgrade: ${B}\r\n` : A[L] && !p[d] ? F += "connection: keep-alive\r\n" : F += "connection: close\r\n";
                if (Array.isArray(l)) for(let A = 0; A < l.length; A += 2){
                    const e = l[A + 0], t = l[A + 1];
                    if (Array.isArray(t)) for(let A = 0; A < t.length; A++)F += `${e}: ${t[A]}\r\n`;
                    else F += `${e}: ${t}\r\n`;
                }
                o.sendHeaders.hasSubscribers && o.sendHeaders.publish({
                    request: e,
                    headers: F,
                    socket: p
                });
                h && 0 !== w ? s.isBuffer(h) ? cA(k, h, A, e, p, u, F, f) : s.isBlobLike(h) ? "function" == typeof h.stream ? IA(k, h.stream(), A, e, p, u, F, f) : async function(A, e, t, s, o, n, a, Q) {
                    r(n === e.size, "blob body must have content length");
                    try {
                        if (null != n && n !== e.size) throw new i;
                        const A = Buffer.from(await e.arrayBuffer());
                        o.cork(), o.write(`${a}content-length: ${n}\r\n\r\n`, "latin1"), o.write(A), o.uncork(), s.onBodySent(A), s.onRequestSent(), Q || !1 === s.reset || (o[d] = !0), t[Z]();
                    } catch (e) {
                        A(e);
                    }
                }(k, h, A, e, p, u, F, f) : s.isStream(h) ? function(A, e, t, o, n, i, a, g) {
                    r(0 !== i || 0 === t[D], "stream body cannot be pipelined");
                    let E = !1;
                    const B = new CA({
                        abort: A,
                        socket: n,
                        request: o,
                        contentLength: i,
                        client: t,
                        expectsPayload: g,
                        header: a
                    }), c = function(A) {
                        if (!E) try {
                            !B.write(A) && this.pause && this.pause();
                        } catch (A) {
                            s.destroy(this, A);
                        }
                    }, I = function() {
                        E || e.resume && e.resume();
                    }, C = function() {
                        if (queueMicrotask(()=>{
                            e.removeListener("error", h);
                        }), !E) {
                            const A = new Q;
                            queueMicrotask(()=>h(A));
                        }
                    }, h = function(A) {
                        if (!E) {
                            if (E = !0, r(n.destroyed || n[R] && t[D] <= 1), n.off("drain", I).off("error", h), e.removeListener("data", c).removeListener("end", h).removeListener("close", C), !A) try {
                                B.end();
                            } catch (e) {
                                A = e;
                            }
                            B.destroy(A), !A || "UND_ERR_INFO" === A.code && "reset" === A.message ? s.destroy(e) : s.destroy(e, A);
                        }
                    };
                    e.on("data", c).on("end", h).on("error", h).on("close", C), e.resume && e.resume();
                    n.on("drain", I).on("error", h), e.errorEmitted ?? e.errored ? setImmediate(()=>h(e.errored)) : (e.endEmitted ?? e.readableEnded) && setImmediate(()=>h(null));
                    (e.closeEmitted ?? e.closed) && setImmediate(C);
                }(k, h, A, e, p, u, F, f) : s.isIterable(h) ? IA(k, h, A, e, p, u, F, f) : r(!1) : cA(k, null, A, e, p, u, F, f);
                return !0;
            })(A, ...e),
        resume () {
            !function(A) {
                const e = A[T];
                if (e && !e.destroyed) {
                    if (0 === A[k] ? !e[m] && e.unref && (e.unref(), e[m] = !0) : e[m] && e.ref && (e.ref(), e[m] = !1), 0 === A[D] && A[p] > 0 && e[tA]) {
                        if (0 === e[AA]) return function(A, e) {
                            e[AA] = 1, e[eA] = setTimeout(()=>{
                                e[eA] = null, e[AA] = 2, A[T] !== e || e.destroyed || A[Z]();
                            }, 0), e[eA].unref?.();
                        }(A, e), e[w].readMore(), void e.destroyed;
                        if (1 === e[AA]) return e[w].readMore(), void e.destroyed;
                    }
                    if (0 === A[D] && (e[w].readMore(), e.destroyed)) return;
                    if (0 === A[k]) 8 !== e[w].timeoutType && e[w].setTimeout(A[Y], 8);
                    else if (A[D] > 0 && e[w].statusCode < 200 && 3 !== e[w].timeoutType) {
                        const t = A[F][A[M]], r = null != t.headersTimeout ? t.headersTimeout : A[H];
                        e[w].setTimeout(r, 3);
                    }
                }
            }(A);
        },
        destroy (A, t) {
            n ? queueMicrotask(t) : e.destroy(A).on("close", t);
        },
        get destroyed () {
            return e.destroyed;
        },
        busy (t) {
            if (e[R] || e[d] || e[y] || 1 === e[AA]) return !0;
            if (t) {
                if (A[D] > 0 && !t.idempotent) return !0;
                if (A[D] > 0 && (t.upgrade || "CONNECT" === t.method)) return !0;
                if (A[D] > 0 && 0 !== s.bodyLength(t.body) && (s.isStream(t.body) || s.isAsyncIterable(t.body) || s.isFormDataLike(t.body))) return !0;
            }
            return !1;
        }
    };
};
