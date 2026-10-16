"use strict";
const r = require(56970), s = require(77030), o = require(37067), n = require("./module-55201.js"), { channels: i } = require("./module-98565.js"), a = require("./module-52588.js"), Q = require("./module-27110.js"), { InvalidArgumentError: g, InformationalError: E, ClientDestroyedError: B } = require("./module-38238.js"), c = require("./module-60039.js"), { kUrl: I, kServerName: C, kClient: h, kBusy: l, kConnect: u, kResuming: d, kRunning: f, kPending: w, kSize: y, kQueue: D, kConnected: p, kConnecting: k, kNeedDrain: R, kKeepAliveDefaultTimeout: F, kHostHeader: m, kPendingIdx: b, kRunningIdx: N, kError: S, kPipelining: M, kKeepAliveTimeoutValue: U, kMaxHeadersSize: L, kKeepAliveMaxTimeout: T, kKeepAliveTimeoutThreshold: Y, kHeadersTimeout: G, kBodyTimeout: J, kStrictContentLength: v, kConnector: H, kMaxRedirections: V, kMaxRequests: x, kCounter: W, kClose: O, kDestroy: P, kDispatch: q, kInterceptors: Z, kLocalAddress: z, kMaxResponseSize: K, kOnError: X, kHTTPContext: _, kMaxConcurrentStreams: j, kResume: $ } = require("./module-76992.js"), AA = require("./module-62322.js"), eA = require("./module-63231.js");
let tA = !1;
const rA = Symbol("kClosedResolve"), sA = ()=>{};
function oA(A) {
    return A[M] ?? A[_]?.defaultPipelining ?? 1;
}
const nA = require("./module-39935.js");
function iA(A, e) {
    if (0 === A[f] && "UND_ERR_INFO" !== e.code && "UND_ERR_SOCKET" !== e.code) {
        r(A[b] === A[N]);
        const t = A[D].splice(A[N]);
        for(let r = 0; r < t.length; r++){
            const s = t[r];
            n.errorRequest(A, s, e);
        }
        r(0 === A[y]);
    }
}
async function aA(A) {
    r(!A[k]), r(!A[_]);
    let { host: e, hostname: t, protocol: o, port: a } = A[I];
    if ("[" === t[0]) {
        const A = t.indexOf("]");
        r(-1 !== A);
        const e = t.substring(1, A);
        r(s.isIP(e)), t = e;
    }
    A[k] = !0, i.beforeConnect.hasSubscribers && i.beforeConnect.publish({
        connectParams: {
            host: e,
            hostname: t,
            protocol: o,
            port: a,
            version: A[_]?.version,
            servername: A[C],
            localAddress: A[z]
        },
        connector: A[H]
    });
    try {
        const s = await new Promise((r, s)=>{
            A[H]({
                host: e,
                hostname: t,
                protocol: o,
                port: a,
                servername: A[C],
                localAddress: A[z]
            }, (A, e)=>{
                A ? s(A) : r(e);
            });
        });
        if (A.destroyed) return void n.destroy(s.on("error", sA), new B);
        r(s);
        try {
            A[_] = "h2" === s.alpnProtocol ? await eA(A, s) : await AA(A, s);
        } catch (A) {
            throw s.destroy().on("error", sA), A;
        }
        A[k] = !1, s[W] = 0, s[x] = A[x], s[h] = A, s[S] = null, i.connected.hasSubscribers && i.connected.publish({
            connectParams: {
                host: e,
                hostname: t,
                protocol: o,
                port: a,
                version: A[_]?.version,
                servername: A[C],
                localAddress: A[z]
            },
            connector: A[H],
            socket: s
        }), A.emit("connect", A[I], [
            A
        ]);
    } catch (s) {
        if (A.destroyed) return;
        if (A[k] = !1, i.connectError.hasSubscribers && i.connectError.publish({
            connectParams: {
                host: e,
                hostname: t,
                protocol: o,
                port: a,
                version: A[_]?.version,
                servername: A[C],
                localAddress: A[z]
            },
            connector: A[H],
            error: s
        }), "ERR_TLS_CERT_ALTNAME_INVALID" === s.code) for(r(0 === A[f]); A[w] > 0 && A[D][A[b]].servername === A[C];){
            const e = A[D][A[b]++];
            n.errorRequest(A, e, s);
        }
        else iA(A, s);
        A.emit("connectionError", A[I], [
            A
        ], s);
    }
    A[$]();
}
function QA(A) {
    A[R] = 0, A.emit("drain", A[I], [
        A
    ]);
}
function gA(A, e) {
    2 !== A[d] && (A[d] = 2, function(A, e) {
        for(;;){
            if (A.destroyed) return void r(0 === A[w]);
            if (A[rA] && !A[y]) return A[rA](), void (A[rA] = null);
            if (A[_] && A[_].resume(), A[l]) A[R] = 2;
            else if (2 === A[R]) {
                e ? (A[R] = 1, queueMicrotask(()=>QA(A))) : QA(A);
                continue;
            }
            if (0 === A[w]) return;
            if (A[f] >= (oA(A) || 1)) return;
            const t = A[D][A[b]];
            if ("https:" === A[I].protocol && A[C] !== t.servername) {
                if (A[f] > 0) return;
                A[C] = t.servername, A[_]?.destroy(new E("servername changed"), ()=>{
                    A[_] = null, gA(A);
                });
            }
            if (A[k]) return;
            if (!A[_]) return void aA(A);
            if (A[_].destroyed) return;
            if (A[_].busy(t)) return;
            !t.aborted && A[_].write(t) ? A[b]++ : A[D].splice(A[b], 1);
        }
    }(A, e), A[d] = 0, A[N] > 256 && (A[D].splice(0, A[N]), A[b] -= A[N], A[N] = 0));
}
module.exports = class extends Q {
    constructor(A, { interceptors: e, maxHeaderSize: t, headersTimeout: r, socketTimeout: i, requestTimeout: a, connectTimeout: Q, bodyTimeout: E, idleTimeout: B, keepAlive: h, keepAliveTimeout: l, maxKeepAliveTimeout: u, keepAliveMaxTimeout: f, keepAliveTimeoutThreshold: w, socketPath: y, pipelining: p, tls: k, strictContentLength: S, maxCachedSessions: W, maxRedirections: O, connect: P, maxRequestsPerClient: q, localAddress: AA, maxResponseSize: eA, autoSelectFamily: sA, autoSelectFamilyAttemptTimeout: oA, maxConcurrentStreams: aA, allowH2: QA, webSocket: EA } = {}){
        if (super({
            webSocket: EA
        }), void 0 !== h) throw new g("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== i) throw new g("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== a) throw new g("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== B) throw new g("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== u) throw new g("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != t && !Number.isFinite(t)) throw new g("invalid maxHeaderSize");
        if (null != y && "string" != typeof y) throw new g("invalid socketPath");
        if (null != Q && (!Number.isFinite(Q) || Q < 0)) throw new g("invalid connectTimeout");
        if (null != l && (!Number.isFinite(l) || l <= 0)) throw new g("invalid keepAliveTimeout");
        if (null != f && (!Number.isFinite(f) || f <= 0)) throw new g("invalid keepAliveMaxTimeout");
        if (null != w && !Number.isFinite(w)) throw new g("invalid keepAliveTimeoutThreshold");
        if (null != r && (!Number.isInteger(r) || r < 0)) throw new g("headersTimeout must be a positive integer or zero");
        if (null != E && (!Number.isInteger(E) || E < 0)) throw new g("bodyTimeout must be a positive integer or zero");
        if (null != P && "function" != typeof P && "object" != typeof P) throw new g("connect must be a function or an object");
        if (null != O && (!Number.isInteger(O) || O < 0)) throw new g("maxRedirections must be a positive number");
        if (null != q && (!Number.isInteger(q) || q < 0)) throw new g("maxRequestsPerClient must be a positive number");
        if (null != AA && ("string" != typeof AA || 0 === s.isIP(AA))) throw new g("localAddress must be valid string IP address");
        if (null != eA && (!Number.isInteger(eA) || eA < -1)) throw new g("maxResponseSize must be a positive number");
        if (null != oA && (!Number.isInteger(oA) || oA < -1)) throw new g("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != QA && "boolean" != typeof QA) throw new g("allowH2 must be a valid boolean value");
        if (null != aA && ("number" != typeof aA || aA < 1)) throw new g("maxConcurrentStreams must be a positive integer, greater than 0");
        "function" != typeof P && (P = c({
            ...k,
            maxCachedSessions: W,
            allowH2: QA,
            socketPath: y,
            timeout: Q,
            ...sA ? {
                autoSelectFamily: sA,
                autoSelectFamilyAttemptTimeout: oA
            } : void 0,
            ...P
        })), e?.Client && Array.isArray(e.Client) ? (this[Z] = e.Client, tA || (tA = !0, process.emitWarning("Client.Options#interceptor is deprecated. Use Dispatcher#compose instead.", {
            code: "UNDICI-CLIENT-INTERCEPTOR-DEPRECATED"
        }))) : this[Z] = [
            nA({
                maxRedirections: O
            })
        ], this[I] = n.parseOrigin(A), this[H] = P, this[M] = null != p ? p : 1, this[L] = t || o.maxHeaderSize, this[F] = l ?? 4e3, this[T] = f ?? 6e5, this[Y] = w ?? 2e3, this[U] = this[F], this[C] = null, this[z] = null != AA ? AA : null, this[d] = 0, this[R] = 0, this[m] = `host: ${this[I].hostname}${this[I].port ? `:${this[I].port}` : ""}\r\n`, this[J] = null != E ? E : 3e5, this[G] = null != r ? r : 3e5, this[v] = S ?? !0, this[V] = O, this[x] = q, this[rA] = null, this[K] = eA > -1 ? eA : -1, this[j] = null != aA ? aA : 100, this[_] = null, this[D] = [], this[N] = 0, this[b] = 0, this[$] = (A)=>gA(this, A), this[X] = (A)=>iA(this, A);
    }
    get pipelining() {
        return this[M];
    }
    set pipelining(A) {
        this[M] = A, this[$](!0);
    }
    get [w]() {
        return this[D].length - this[b];
    }
    get [f]() {
        return this[b] - this[N];
    }
    get [y]() {
        return this[D].length - this[N];
    }
    get [p]() {
        return !!this[_] && !this[k] && !this[_].destroyed;
    }
    get [l]() {
        return Boolean(this[_]?.busy(null) || this[y] >= (oA(this) || 1) || this[w] > 0);
    }
    [u](A) {
        aA(this), this.once("connect", A);
    }
    [q](A, e) {
        const t = A.origin || this[I].origin, r = new a(t, A, e);
        return this[D].push(r), this[d] || (null == n.bodyLength(r.body) && n.isIterable(r.body) ? (this[d] = 1, queueMicrotask(()=>gA(this))) : this[$](!0)), this[d] && 2 !== this[R] && this[l] && (this[R] = 2), this[R] < 2;
    }
    async [O]() {
        return new Promise((A)=>{
            this[y] ? this[rA] = A : A(null);
        });
    }
    async [P](A) {
        return new Promise((e)=>{
            const t = this[D].splice(this[b]);
            for(let e = 0; e < t.length; e++){
                const r = t[e];
                n.errorRequest(this, r, A);
            }
            const r = ()=>{
                this[rA] && (this[rA](), this[rA] = null), e(null);
            };
            this[_] ? (this[_].destroy(A, r), this[_] = null) : queueMicrotask(r), this[$]();
        });
    }
};
