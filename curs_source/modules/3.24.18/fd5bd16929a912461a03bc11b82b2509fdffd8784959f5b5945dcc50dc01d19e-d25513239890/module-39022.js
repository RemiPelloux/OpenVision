"use strict";
require.r(exports), require.d(exports, {
    AdaptiveRetryStrategy: ()=>S,
    CONFIG_MAX_ATTEMPTS: ()=>T,
    CONFIG_RETRY_MODE: ()=>_,
    ENV_MAX_ATTEMPTS: ()=>x,
    ENV_RETRY_MODE: ()=>C,
    NODE_MAX_ATTEMPT_CONFIG_OPTIONS: ()=>A,
    NODE_RETRY_MODE_CONFIG_OPTIONS: ()=>R,
    StandardRetryStrategy: ()=>y,
    defaultDelayDecider: ()=>g,
    defaultRetryDecider: ()=>m,
    getOmitRetryHeadersPlugin: ()=>k,
    getRetryAfterHint: ()=>L,
    getRetryPlugin: ()=>q,
    omitRetryHeadersMiddleware: ()=>I,
    omitRetryHeadersMiddlewareOptions: ()=>D,
    resolveRetryConfig: ()=>N,
    retryMiddleware: ()=>U,
    retryMiddlewareOptions: ()=>H
});
var n = require("./module-36419.js"), s = require("./module-64972.js"), i = require(50333), o = require("./module-7369.js"), a = require("./module-41011.js"), c = require("./module-51181.js"), l = require(76982), u = ()=>l && l.__esModule ? l.default : l;
const d = u().randomUUID.bind(u()), h = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, "0")), f = ()=>{
    if (d) return d();
    const e = new Uint8Array(16);
    return crypto.getRandomValues(e), e[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128, h[e[0]] + h[e[1]] + h[e[2]] + h[e[3]] + "-" + h[e[4]] + h[e[5]] + "-" + h[e[6]] + h[e[7]] + "-" + h[e[8]] + h[e[9]] + "-" + h[e[10]] + h[e[11]] + h[e[12]] + h[e[13]] + h[e[14]] + h[e[15]];
}, p = (e)=>e instanceof Error ? e : e instanceof Object ? Object.assign(new Error, e) : "string" == typeof e ? new Error(e) : new Error(`AWS SDK error wrapper for ${e}`), g = (e, t)=>Math.floor(Math.min(c.G8, Math.random() * 2 ** t * e)), m = (e)=>!!e && ((0, a.S0)(e) || (0, a.h5)(e) || (0, a.Qb)(e) || (0, a.bV)(e));
class y {
    maxAttemptsProvider;
    retryDecider;
    delayDecider;
    retryQuota;
    mode = s.cm.STANDARD;
    constructor(e, t){
        this.maxAttemptsProvider = e, this.retryDecider = t?.retryDecider ?? m, this.delayDecider = t?.delayDecider ?? g, this.retryQuota = t?.retryQuota ?? ((e, t)=>{
            const r = e, n = t?.noRetryIncrement ?? c.XP, s = t?.retryCost ?? c.XS, i = t?.timeoutRetryCost ?? c.Rn;
            let o = e;
            const a = (e)=>"TimeoutError" === e.name ? i : s, l = (e)=>a(e) <= o;
            return Object.freeze({
                hasRetryTokens: l,
                retrieveRetryTokens: (e)=>{
                    if (!l(e)) throw new Error("No retry token available");
                    const t = a(e);
                    return o -= t, t;
                },
                releaseRetryTokens: (e)=>{
                    o += e ?? n, o = Math.min(o, r);
                }
            });
        })(c.Df);
    }
    shouldRetry(e, t, r) {
        return t < r && this.retryDecider(e) && this.retryQuota.hasRetryTokens(e);
    }
    async getMaxAttempts() {
        let e;
        try {
            e = await this.maxAttemptsProvider();
        } catch (t) {
            e = s.Gz;
        }
        return e;
    }
    async retry(e, t, r) {
        let n, s = 0, o = 0;
        const l = await this.getMaxAttempts(), { request: u } = t;
        for(i.K.isInstance(u) && (u.headers[c.l5] = f());;)try {
            i.K.isInstance(u) && (u.headers[c.ok] = `attempt=${s + 1}; max=${l}`), r?.beforeRequest && await r.beforeRequest();
            const { response: a, output: d } = await e(t);
            return r?.afterRequest && r.afterRequest(a), this.retryQuota.releaseRetryTokens(n), d.$metadata.attempts = s + 1, d.$metadata.totalRetryDelay = o, {
                response: a,
                output: d
            };
        } catch (e) {
            const t = p(e);
            if (s++, this.shouldRetry(t, s, l)) {
                n = this.retryQuota.retrieveRetryTokens(t);
                const e = this.delayDecider((0, a.Qb)(t) ? c.jh : c.bp, s), r = w(t.$response), i = Math.max(r || 0, e);
                o += i, await new Promise((e)=>setTimeout(e, i));
                continue;
            }
            throw t.$metadata || (t.$metadata = {}), t.$metadata.attempts = s, t.$metadata.totalRetryDelay = o, t;
        }
    }
}
const w = (e)=>{
    if (!o.c.isInstance(e)) return;
    const t = Object.keys(e.headers).find((e)=>"retry-after" === e.toLowerCase());
    if (!t) return;
    const r = e.headers[t], n = Number(r);
    if (!Number.isNaN(n)) return 1e3 * n;
    return new Date(r).getTime() - Date.now();
};
class S extends y {
    rateLimiter;
    constructor(e, t){
        const { rateLimiter: r, ...i } = t ?? {};
        super(e, i), this.rateLimiter = r ?? new n.Q, this.mode = s.cm.ADAPTIVE;
    }
    async retry(e, t) {
        return super.retry(e, t, {
            beforeRequest: async ()=>this.rateLimiter.getSendToken(),
            afterRequest: (e)=>{
                this.rateLimiter.updateClientSendingRate(e);
            }
        });
    }
}
var b = require("./module-90570.js"), E = require("./module-3745.js"), v = require("./module-23694.js");
const x = "AWS_MAX_ATTEMPTS", T = "max_attempts", A = {
    environmentVariableSelector: (e)=>{
        const t = e[x];
        if (!t) return;
        const r = parseInt(t);
        if (Number.isNaN(r)) throw new Error(`Environment variable ${x} mast be a number, got "${t}"`);
        return r;
    },
    configFileSelector: (e)=>{
        const t = e[T];
        if (!t) return;
        const r = parseInt(t);
        if (Number.isNaN(r)) throw new Error(`Shared config file entry ${T} mast be a number, got "${t}"`);
        return r;
    },
    default: s.Gz
}, N = (e)=>{
    const { retryStrategy: t, retryMode: r } = e, n = (0, b.t)(e.maxAttempts ?? s.Gz);
    let i = t ? Promise.resolve(t) : void 0;
    return Object.assign(e, {
        maxAttempts: n,
        retryStrategy: ()=>i ??= (async ()=>await (0, b.t)(r)() === s.cm.ADAPTIVE ? new E.Y(n) : new v.r(n))()
    });
}, C = "AWS_RETRY_MODE", _ = "retry_mode", R = {
    environmentVariableSelector: (e)=>e[C],
    configFileSelector: (e)=>e[_],
    default: s.L0
}, I = ()=>(e)=>async (t)=>{
            const { request: r } = t;
            return i.K.isInstance(r) && (delete r.headers[c.l5], delete r.headers[c.ok]), e(t);
        }, D = {
    name: "omitRetryHeadersMiddleware",
    tags: [
        "RETRY",
        "HEADERS",
        "OMIT_RETRY_HEADERS"
    ],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: !0
}, k = (e)=>({
        applyToStack: (e)=>{
            e.addRelativeTo(I(), D);
        }
    });
var O = require("./module-65844.js"), M = require(2203);
const P = (e)=>e?.body instanceof M.Readable || "undefined" != typeof ReadableStream && e?.body instanceof ReadableStream;
var $ = require(96851);
function j(e, t) {
    if (o.c.isInstance(e)) for (const r of Object.keys(e.headers)){
        const n = r.toLowerCase();
        if ("retry-after" === n) {
            const n = e.headers[r];
            let s = NaN;
            if (n.endsWith("GMT")) try {
                s = ((0, $.parseRfc7231DateTime)(n).getTime() - Date.now()) / 1e3;
            } catch (e) {
                t?.trace?.("Failed to parse retry-after header"), t?.trace?.(e);
            }
            else n.match(/ GMT, ((\d+)|(\d+\.\d+))$/) ? s = Number(n.match(/ GMT, ([\d.]+)$/)?.[1]) : n.match(/^((\d+)|(\d+\.\d+))$/) ? s = Number(n) : Date.parse(n) >= Date.now() && (s = (Date.parse(n) - Date.now()) / 1e3);
            if (isNaN(s)) return;
            return new Date(Date.now() + 1e3 * s);
        }
        if ("x-amz-retry-after" === n) {
            const n = e.headers[r], s = Number(n);
            return isNaN(s) ? void t?.trace?.(`Failed to parse x-amz-retry-after=${n}`) : new Date(Date.now() + s);
        }
    }
}
function L(e, t) {
    return j(e, t);
}
const U = (e)=>(t, r)=>async (n)=>{
            let s = await e.retryStrategy();
            const o = await e.maxAttempts();
            if (!F(s)) return s?.mode && (r.userAgent = [
                ...r.userAgent || [],
                [
                    "cfg/retry-mode",
                    s.mode
                ]
            ]), s.retry(t, n);
            {
                let a = await s.acquireInitialRetryToken((r.partition_id ?? "") + (r.__retryLongPoll ? ":longpoll" : "")), l = new Error, u = 0, d = 0;
                const { request: h } = n, g = i.K.isInstance(h);
                for(g && (h.headers[c.l5] = f());;)try {
                    g && (h.headers[c.ok] = `attempt=${u + 1}; max=${o}`);
                    const { response: e, output: r } = await t(n);
                    return s.recordSuccess(a), r.$metadata.attempts = u + 1, r.$metadata.totalRetryDelay = d, {
                        response: e,
                        output: r
                    };
                } catch (t) {
                    const n = z(t, e.logger);
                    if (l = p(t), g && P(h)) throw (r.logger instanceof O.N ? console : r.logger)?.warn("An error was encountered in a non-retryable streaming request."), l;
                    try {
                        a = await s.refreshRetryTokenForRetry(a, n);
                    } catch (e) {
                        throw "number" == typeof e.$backoff && await B(e.$backoff), l.$metadata || (l.$metadata = {}), l.$metadata.attempts = u + 1, l.$metadata.totalRetryDelay = d, l;
                    }
                    u = a.getRetryCount();
                    const i = a.getRetryDelay();
                    d += i, await B(i);
                }
            }
        }, B = (e)=>new Promise((t)=>setTimeout(t, e)), F = (e)=>void 0 !== e.acquireInitialRetryToken && void 0 !== e.refreshRetryTokenForRetry && void 0 !== e.recordSuccess, z = (e, t)=>{
    const r = {
        error: e,
        errorType: V(e)
    }, n = j(e.$response, t);
    return n && (r.retryAfterHint = n), r;
}, V = (e)=>(0, a.Qb)(e) ? "THROTTLING" : (0, a.bV)(e) ? "TRANSIENT" : (0, a.GQ)(e) ? "SERVER_ERROR" : "CLIENT_ERROR", H = {
    name: "retryMiddleware",
    tags: [
        "RETRY"
    ],
    step: "finalizeRequest",
    priority: "high",
    override: !0
}, q = (e)=>({
        applyToStack: (t)=>{
            t.add(U(e), H);
        }
    });
