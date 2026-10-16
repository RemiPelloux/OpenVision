const { Readable: n } = require("./module-57075.js"), { NoOpLogger: s, normalizeProvider: o } = require("./module-42997.js"), { HttpResponse: i, HttpRequest: a } = require("./module-73931.js"), { parseRfc7231DateTime: c, v4: l } = require("./module-96851.js"), { hasOwn: u } = require("./module-11255.js"), d = (e)=>e?.body instanceof n || "undefined" != typeof ReadableStream && e?.body instanceof ReadableStream, p = [
    "AccessDeniedException",
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch"
], m = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException"
], h = [
    "TimeoutError",
    "RequestTimeout",
    "RequestTimeoutException"
], f = [
    500,
    502,
    503,
    504
], g = [
    "ECONNRESET",
    "ECONNREFUSED",
    "EPIPE",
    "ETIMEDOUT"
], y = [
    "EHOSTUNREACH",
    "ENETUNREACH",
    "ENOTFOUND",
    "EAI_AGAIN"
], w = (e)=>void 0 !== e?.$retryable, v = (e)=>p.includes(e.name), _ = (e)=>e.$metadata?.clockSkewCorrected, b = (e)=>{
    const t = new Set([
        "Failed to fetch",
        "NetworkError when attempting to fetch resource",
        "The Internet connection appears to be offline",
        "Load failed",
        "Network request failed"
    ]);
    return !!(e && e instanceof TypeError) && t.has(e.message);
}, S = (e)=>429 === e.$metadata?.httpStatusCode || m.includes(e.name) || 1 == e.$retryable?.throttling, k = (e, t = 0)=>w(e) || _(e) || "InvalidSignatureException" === e.name && e.message?.includes("Signature expired") || h.includes(e.name) || g.includes(e?.code || "") || y.includes(e?.code || "") || f.includes(e.$metadata?.httpStatusCode || 0) || b(e) || E(e) || void 0 !== e.cause && t <= 10 && k(e.cause, t + 1), x = (e)=>{
    if (void 0 !== e.$metadata?.httpStatusCode) {
        const t = e.$metadata.httpStatusCode;
        return 500 <= t && t <= 599 && !k(e);
    }
    return !1;
};
function E(e) {
    return "ERR_HTTP2_STREAM_ERROR" === e.code && e.message.includes("NGHTTP2_REFUSED_STREAM");
}
const I = 2e4, T = 500, C = "amz-sdk-invocation-id", P = "amz-sdk-request";
function A(e, t) {
    if (i.isInstance(e)) for(const r in e.headers){
        if (!u(e.headers, r)) continue;
        const n = r.toLowerCase();
        if ("retry-after" === n) {
            const n = e.headers[r];
            let s = NaN;
            if (n.endsWith("GMT")) try {
                s = (c(n).getTime() - Date.now()) / 1e3;
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
const R = (e)=>e instanceof Error ? e : e instanceof Object ? Object.assign(new Error, e) : "string" == typeof e ? new Error(e) : new Error(`AWS SDK error wrapper for ${e}`);
function M(e) {
    return (t)=>(r, n)=>async (o)=>{
                let i = await t.retryStrategy();
                const c = await t.maxAttempts();
                if (!O(i)) return i?.mode && (n.userAgent = [
                    ...n.userAgent || [],
                    [
                        "cfg/retry-mode",
                        i.mode
                    ]
                ]), i.retry(r, o);
                {
                    let u = await i.acquireInitialRetryToken((n.partition_id ?? "") + (n.__retryLongPoll ? ":longpoll" : "")), d = new Error, p = 0, m = 0;
                    const { request: h } = o, f = a.isInstance(h);
                    for(f && (h.headers[C] = l());;)try {
                        f && (h.headers[P] = `attempt=${p + 1}; max=${c}`);
                        const { response: e, output: t } = await r(o);
                        return i.recordSuccess(u), t.$metadata.attempts = p + 1, t.$metadata.totalRetryDelay = m, {
                            response: e,
                            output: t
                        };
                    } catch (r) {
                        const o = B(r, t.logger);
                        if (d = R(r), f && e(h)) throw (n.logger instanceof s ? console : n.logger)?.warn("An error was encountered in a non-retryable streaming request."), d;
                        try {
                            u = await i.refreshRetryTokenForRetry(u, o);
                        } catch (e) {
                            throw d.$metadata || (d.$metadata = {}), d.$metadata.attempts = p + 1, d.$metadata.totalRetryDelay = m, d;
                        }
                        p = u.getRetryCount();
                        const a = u.getRetryDelay();
                        m += (u?.$retryLog?.acquisitionDelay ?? 0) + a, a > 0 && await J(a);
                    }
                }
            };
}
const J = (e)=>new Promise((t)=>setTimeout(t, e)), O = (e)=>void 0 !== e.acquireInitialRetryToken && void 0 !== e.refreshRetryTokenForRetry && void 0 !== e.recordSuccess, B = (e, t)=>{
    const r = {
        error: e,
        errorType: D(e)
    }, n = A(e.$response, t);
    return n && (r.retryAfterHint = n), r;
}, D = (e)=>S(e) ? "THROTTLING" : k(e) ? "TRANSIENT" : x(e) ? "SERVER_ERROR" : "CLIENT_ERROR", q = {
    name: "retryMiddleware",
    tags: [
        "RETRY"
    ],
    step: "finalizeRequest",
    priority: "high",
    override: !0
};
class N {
    static setTimeoutFn = (e, t)=>setTimeout(e, t);
    beta;
    minCapacity;
    minFillRate;
    scaleConstant;
    smooth;
    enabled = !1;
    availableTokens = 0;
    lastMaxRate = 0;
    measuredTxRate = 0;
    requestCount = 0;
    fillRate;
    lastThrottleTime;
    lastTimestamp = 0;
    lastTxRateBucket;
    maxCapacity;
    timeWindow = 0;
    constructor(e){
        this.beta = e?.beta ?? .7, this.minCapacity = e?.minCapacity ?? 1, this.minFillRate = e?.minFillRate ?? .5, this.scaleConstant = e?.scaleConstant ?? .4, this.smooth = e?.smooth ?? .8, this.lastThrottleTime = this.getCurrentTimeInSeconds(), this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    updateClientSendingRate(e) {
        let t;
        this.updateMeasuredRate();
        const r = e;
        if ("THROTTLING" === r?.errorType || S(r?.error ?? e)) {
            const e = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
            this.lastMaxRate = e, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), t = this.cubicThrottle(e), this.enableTokenBucket();
        } else this.calculateTimeWindow(), t = this.cubicSuccess(this.getCurrentTimeInSeconds());
        const n = Math.min(t, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(n);
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
    }
    async acquireTokenBucket(e) {
        if (this.enabled) {
            for(this.refillTokenBucket(); e > this.availableTokens;){
                const t = (e - this.availableTokens) / this.fillRate * 1e3;
                await new Promise((e)=>N.setTimeoutFn(e, t)), this.refillTokenBucket();
            }
            this.availableTokens = this.availableTokens - e;
        }
    }
    refillTokenBucket() {
        const e = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) return void (this.lastTimestamp = e);
        const t = (e - this.lastTimestamp) * this.fillRate;
        this.availableTokens = Math.min(this.maxCapacity, this.availableTokens + t), this.lastTimestamp = e;
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(e) {
        return this.getPrecise(e * this.beta);
    }
    cubicSuccess(e) {
        return this.getPrecise(this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = !0;
    }
    updateTokenBucketRate(e) {
        this.refillTokenBucket(), this.fillRate = Math.max(e, this.minFillRate), this.maxCapacity = Math.max(e, this.minCapacity), this.availableTokens = Math.min(this.availableTokens, this.maxCapacity);
    }
    updateMeasuredRate() {
        const e = this.getCurrentTimeInSeconds(), t = Math.floor(2 * e) / 2;
        if (this.requestCount++, t > this.lastTxRateBucket) {
            const e = this.requestCount / (t - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(e * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = t;
        }
    }
    getPrecise(e) {
        return parseFloat(e.toFixed(8));
    }
}
class F {
    static v2026 = "undefined" != typeof process && "true" === process.env?.SMITHY_NEW_RETRIES_2026;
    static delay() {
        return F.v2026 ? 50 : 100;
    }
    static throttlingDelay() {
        return F.v2026 ? 1e3 : 500;
    }
    static cost() {
        return F.v2026 ? 14 : 5;
    }
    static throttlingCost() {
        return F.v2026 ? 5 : 10;
    }
    static modifiedCostType() {
        return F.v2026 ? "THROTTLING" : "TRANSIENT";
    }
}
class U {
    x = F.delay();
    computeNextBackoffDelay(e) {
        const t = Math.random() * Math.min(this.x * 2 ** e, I);
        return Math.floor(t);
    }
    setDelayBase(e) {
        this.x = e;
    }
}
class L {
    delay;
    count;
    cost;
    longPoll;
    $retryLog = {
        acquisitionDelay: 0
    };
    constructor(e, t, r, n){
        this.delay = e, this.count = t, this.cost = r, this.longPoll = n;
    }
    getRetryCount() {
        return this.count;
    }
    getRetryDelay() {
        return Math.min(I, this.delay);
    }
    getRetryCost() {
        return this.cost;
    }
    isLongPoll() {
        return this.longPoll;
    }
}
var $;
!function(e) {
    e.STANDARD = "standard", e.ADAPTIVE = "adaptive";
}($ || ($ = {}));
const j = 3, G = $.STANDARD, z = 1, W = 2, H = 3;
let K = class {
    mode = $.STANDARD;
    retryBackoffStrategy;
    capacity = T;
    maxAttemptsProvider;
    baseDelay;
    constructor(e){
        "number" == typeof e ? this.maxAttemptsProvider = async ()=>e : "function" == typeof e ? this.maxAttemptsProvider = e : e && "object" == typeof e && (this.maxAttemptsProvider = async ()=>e.maxAttempts, this.baseDelay = e.baseDelay, this.retryBackoffStrategy = e.backoff), this.maxAttemptsProvider ??= async ()=>j, this.baseDelay ??= F.delay(), this.retryBackoffStrategy ??= new U;
    }
    async acquireInitialRetryToken(e) {
        return new L(F.delay(), 0, void 0, F.v2026 && e.includes(":longpoll"));
    }
    async refreshRetryTokenForRetry(e, t) {
        const r = await this.getMaxAttempts(), n = this.retryCode(e, t, r), s = 0 === n, o = e.isLongPoll?.();
        if (s || o) {
            const r = t.errorType;
            this.retryBackoffStrategy.setDelayBase("THROTTLING" === r ? F.throttlingDelay() : this.baseDelay);
            const i = this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount());
            let a = i;
            if (t.retryAfterHint instanceof Date && (a = Math.max(i, Math.min(t.retryAfterHint.getTime() - Date.now(), i + 5e3))), s) {
                const t = this.getCapacityCost(r);
                this.capacity -= t;
                const n = new L(0, e.getRetryCount() + 1, t, e.isLongPoll?.() ?? !1);
                return await new Promise((e)=>setTimeout(e, a)), n.$retryLog.acquisitionDelay = a, n;
            }
            {
                const e = F.v2026 && n === H && o ? a : 0;
                e > 0 && await new Promise((t)=>setTimeout(t, e));
            }
        }
        throw new Error("No retry token available");
    }
    recordSuccess(e) {
        this.capacity = Math.min(T, this.capacity + (e.getRetryCost() ?? 1));
    }
    getCapacity() {
        return this.capacity;
    }
    async maxAttempts() {
        return this.maxAttemptsProvider();
    }
    async getMaxAttempts() {
        try {
            return await this.maxAttemptsProvider();
        } catch (e) {
            return console.warn(`Max attempts provider could not resolve. Using default of ${j}`), j;
        }
    }
    retryCode(e, t, r) {
        const n = e.getRetryCount() + 1, s = this.isRetryableError(t.errorType) ? 0 : z, o = n < r ? 0 : W, i = this.capacity >= this.getCapacityCost(t.errorType) ? 0 : H;
        return s || o || i;
    }
    getCapacityCost(e) {
        return e === F.modifiedCostType() ? F.throttlingCost() : F.cost();
    }
    isRetryableError(e) {
        return "THROTTLING" === e || "TRANSIENT" === e;
    }
}, V = class {
    mode = $.ADAPTIVE;
    rateLimiter;
    standardRetryStrategy;
    constructor(e, t){
        const { rateLimiter: r } = t ?? {};
        this.rateLimiter = r ?? new N, this.standardRetryStrategy = new K(t ? {
            maxAttempts: "number" == typeof e ? e : 3,
            ...t
        } : e);
    }
    async acquireInitialRetryToken(e) {
        const t = await this.standardRetryStrategy.acquireInitialRetryToken(e);
        return await this.rateLimiter.getSendToken(), t;
    }
    async refreshRetryTokenForRetry(e, t) {
        this.rateLimiter.updateClientSendingRate(t);
        const r = await this.standardRetryStrategy.refreshRetryTokenForRetry(e, t);
        return await this.rateLimiter.getSendToken(), r;
    }
    recordSuccess(e) {
        this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e);
    }
    async maxAttemptsProvider() {
        return this.standardRetryStrategy.maxAttempts();
    }
};
const Y = (e, t)=>Math.floor(Math.min(I, Math.random() * 2 ** t * e)), Q = (e)=>!!e && (w(e) || v(e) || S(e) || k(e));
class X {
    maxAttemptsProvider;
    retryDecider;
    delayDecider;
    retryQuota;
    mode = $.STANDARD;
    constructor(e, t){
        this.maxAttemptsProvider = e, this.retryDecider = t?.retryDecider ?? Q, this.delayDecider = t?.delayDecider ?? Y, this.retryQuota = t?.retryQuota ?? ((e)=>{
            const t = e;
            let r = e;
            const n = (e)=>"TimeoutError" === e.name ? 10 : 5, s = (e)=>n(e) <= r;
            return Object.freeze({
                hasRetryTokens: s,
                retrieveRetryTokens: (e)=>{
                    if (!s(e)) throw new Error("No retry token available");
                    const t = n(e);
                    return r -= t, t;
                },
                releaseRetryTokens: (e)=>{
                    r += e ?? 1, r = Math.min(r, t);
                }
            });
        })(T);
    }
    shouldRetry(e, t, r) {
        return t < r && this.retryDecider(e) && this.retryQuota.hasRetryTokens(e);
    }
    async getMaxAttempts() {
        let e;
        try {
            e = await this.maxAttemptsProvider();
        } catch (t) {
            e = j;
        }
        return e;
    }
    async retry(e, t, r) {
        let n, s = 0, o = 0;
        const i = await this.getMaxAttempts(), { request: c } = t;
        for(a.isInstance(c) && (c.headers[C] = l());;)try {
            a.isInstance(c) && (c.headers[P] = `attempt=${s + 1}; max=${i}`), r?.beforeRequest && await r.beforeRequest();
            const { response: l, output: u } = await e(t);
            return r?.afterRequest && r.afterRequest(l), this.retryQuota.releaseRetryTokens(n), u.$metadata.attempts = s + 1, u.$metadata.totalRetryDelay = o, {
                response: l,
                output: u
            };
        } catch (e) {
            const t = R(e);
            if (s++, this.shouldRetry(t, s, i)) {
                n = this.retryQuota.retrieveRetryTokens(t);
                const e = this.delayDecider(S(t) ? 500 : 100, s), r = Z(t.$response), i = Math.max(r || 0, e);
                o += i, await new Promise((e)=>setTimeout(e, i));
                continue;
            }
            throw t.$metadata || (t.$metadata = {}), t.$metadata.attempts = s, t.$metadata.totalRetryDelay = o, t;
        }
    }
}
const Z = (e)=>{
    if (!i.isInstance(e)) return;
    const t = Object.keys(e.headers).find((e)=>"retry-after" === e.toLowerCase());
    if (!t) return;
    const r = e.headers[t], n = Number(r);
    if (!Number.isNaN(n)) return Math.min(1e3 * n, 2e4);
    const s = new Date(r);
    return Math.min(s.getTime() - Date.now(), 2e4);
};
const ee = "AWS_MAX_ATTEMPTS", te = "max_attempts", re = {
    environmentVariableSelector: (e)=>{
        const t = e[ee];
        if (!t) return;
        const r = parseInt(t);
        if (Number.isNaN(r)) throw new Error(`Environment variable ${ee} mast be a number, got "${t}"`);
        return r;
    },
    configFileSelector: (e)=>{
        const t = e[te];
        if (!t) return;
        const r = parseInt(t);
        if (Number.isNaN(r)) throw new Error(`Shared config file entry ${te} mast be a number, got "${t}"`);
        return r;
    },
    default: j
}, ne = "AWS_RETRY_MODE", se = "retry_mode", oe = {
    environmentVariableSelector: (e)=>e[ne],
    configFileSelector: (e)=>e[se],
    default: G
}, ie = ()=>(e)=>async (t)=>{
            const { request: r } = t;
            return a.isInstance(r) && (delete r.headers[C], delete r.headers[P]), e(t);
        }, ae = {
    name: "omitRetryHeadersMiddleware",
    tags: [
        "RETRY",
        "HEADERS",
        "OMIT_RETRY_HEADERS"
    ],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: !0
}, ce = M(d), le = function(e) {
    const t = M(e);
    return (e)=>({
            applyToStack: (r)=>{
                r.add(t(e), q);
            }
        });
}(d);
exports.AdaptiveRetryStrategy = V, exports.CONFIG_MAX_ATTEMPTS = te, exports.CONFIG_RETRY_MODE = se, exports.ConfiguredRetryStrategy = class extends K {
    computeNextBackoffDelay;
    constructor(e, t = F.delay()){
        super("function" == typeof e ? e : async ()=>e), this.computeNextBackoffDelay = "number" == typeof t ? ()=>t : t, this.retryBackoffStrategy.computeNextBackoffDelay = (e)=>{
            const t = e + 1;
            return this.computeNextBackoffDelay(t);
        };
    }
}, exports.DEFAULT_MAX_ATTEMPTS = j, exports.DEFAULT_RETRY_DELAY_BASE = 100, exports.DEFAULT_RETRY_MODE = G, exports.DefaultRateLimiter = N, exports.DeprecatedAdaptiveRetryStrategy = class extends X {
    rateLimiter;
    constructor(e, t){
        const { rateLimiter: r, ...n } = t ?? {};
        super(e, n), this.rateLimiter = r ?? new N, this.mode = $.ADAPTIVE;
    }
    async retry(e, t) {
        return super.retry(e, t, {
            beforeRequest: async ()=>this.rateLimiter.getSendToken(),
            afterRequest: (e)=>{
                this.rateLimiter.updateClientSendingRate(e);
            }
        });
    }
}, exports.DeprecatedStandardRetryStrategy = X, exports.ENV_MAX_ATTEMPTS = ee, exports.ENV_RETRY_MODE = ne, exports.INITIAL_RETRY_TOKENS = T, exports.INVOCATION_ID_HEADER = C, exports.MAXIMUM_RETRY_DELAY = I, exports.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = re, exports.NODE_RETRY_MODE_CONFIG_OPTIONS = oe, exports.NO_RETRY_INCREMENT = 1, exports.REQUEST_HEADER = P, exports.RETRY_COST = 5, exports.RETRY_MODES = $, exports.Retry = F, exports.StandardRetryStrategy = K, exports.THROTTLING_RETRY_DELAY_BASE = 500, exports.TIMEOUT_RETRY_COST = 10, exports.defaultDelayDecider = Y, exports.defaultRetryDecider = Q, exports.getOmitRetryHeadersPlugin = (e)=>({
        applyToStack: (e)=>{
            e.addRelativeTo(ie(), ae);
        }
    }), exports.getRetryAfterHint = function(e, t) {
    return A(e, t);
}, exports.getRetryPlugin = le, exports.isBrowserNetworkError = b, exports.isClockSkewCorrectedError = _, exports.isClockSkewError = v, exports.isNodeJsHttp2TransientError = E, exports.isRetryableByTrait = w, exports.isServerError = x, exports.isThrottlingError = S, exports.isTransientError = k, exports.omitRetryHeadersMiddleware = ie, exports.omitRetryHeadersMiddlewareOptions = ae, exports.resolveRetryConfig = (e, t)=>{
    const { retryStrategy: r, retryMode: n } = e, { defaultMaxAttempts: s = j, defaultBaseDelay: i = F.delay() } = t ?? {}, a = o(e.maxAttempts ?? s);
    let c = r ? Promise.resolve(r) : void 0;
    return Object.assign(e, {
        maxAttempts: a,
        retryStrategy: ()=>c ??= (async ()=>{
                const e = await a();
                return await o(n)() === $.ADAPTIVE ? new V(a, {
                    maxAttempts: e,
                    baseDelay: i
                }) : new K({
                    maxAttempts: e,
                    baseDelay: i
                });
            })()
    });
}, exports.retryMiddleware = ce, exports.retryMiddlewareOptions = q;
