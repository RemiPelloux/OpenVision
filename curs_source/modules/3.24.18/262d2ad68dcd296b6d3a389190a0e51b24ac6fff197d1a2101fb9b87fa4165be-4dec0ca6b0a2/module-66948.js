const { Readable: n } = require("./module-57075.js"), { NoOpLogger: o, normalizeProvider: s } = require("./module-42997.js"), { HttpResponse: i, HttpRequest: a } = require("./module-73931.js"), { parseRfc7231DateTime: l, v4: c } = require("./module-96851.js"), { hasOwn: u } = require("./module-11255.js"), d = (e)=>e?.body instanceof n || "undefined" != typeof ReadableStream && e?.body instanceof ReadableStream, p = [
    "AccessDeniedException",
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch"
], h = [
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
], m = [
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
], v = (e)=>void 0 !== e?.$retryable, w = (e)=>p.includes(e.name), b = (e)=>e.$metadata?.clockSkewCorrected, _ = (e)=>{
    const t = new Set([
        "Failed to fetch",
        "NetworkError when attempting to fetch resource",
        "The Internet connection appears to be offline",
        "Load failed",
        "Network request failed"
    ]);
    return !!(e && e instanceof TypeError) && t.has(e.message);
}, S = (e)=>429 === e.$metadata?.httpStatusCode || h.includes(e.name) || 1 == e.$retryable?.throttling, x = (e, t = 0)=>v(e) || b(e) || "InvalidSignatureException" === e.name && e.message?.includes("Signature expired") || m.includes(e.name) || g.includes(e?.code || "") || y.includes(e?.code || "") || f.includes(e.$metadata?.httpStatusCode || 0) || _(e) || E(e) || void 0 !== e.cause && t <= 10 && x(e.cause, t + 1), k = (e)=>{
    if (void 0 !== e.$metadata?.httpStatusCode) {
        const t = e.$metadata.httpStatusCode;
        return 500 <= t && t <= 599 && !x(e);
    }
    return !1;
};
function E(e) {
    return "ERR_HTTP2_STREAM_ERROR" === e.code && e.message.includes("NGHTTP2_REFUSED_STREAM");
}
const T = 2e4, C = 500, I = "amz-sdk-invocation-id", A = "amz-sdk-request";
function P(e, t) {
    if (i.isInstance(e)) for(const r in e.headers){
        if (!u(e.headers, r)) continue;
        const n = r.toLowerCase();
        if ("retry-after" === n) {
            const n = e.headers[r];
            let o = NaN;
            if (n.endsWith("GMT")) try {
                o = (l(n).getTime() - Date.now()) / 1e3;
            } catch (e) {
                t?.trace?.("Failed to parse retry-after header"), t?.trace?.(e);
            }
            else n.match(/ GMT, ((\d+)|(\d+\.\d+))$/) ? o = Number(n.match(/ GMT, ([\d.]+)$/)?.[1]) : n.match(/^((\d+)|(\d+\.\d+))$/) ? o = Number(n) : Date.parse(n) >= Date.now() && (o = (Date.parse(n) - Date.now()) / 1e3);
            if (isNaN(o)) return;
            return new Date(Date.now() + 1e3 * o);
        }
        if ("x-amz-retry-after" === n) {
            const n = e.headers[r], o = Number(n);
            return isNaN(o) ? void t?.trace?.(`Failed to parse x-amz-retry-after=${n}`) : new Date(Date.now() + o);
        }
    }
}
const M = (e)=>e instanceof Error ? e : e instanceof Object ? Object.assign(new Error, e) : "string" == typeof e ? new Error(e) : new Error(`AWS SDK error wrapper for ${e}`);
function R(e) {
    return (t)=>(r, n)=>async (s)=>{
                let i = await t.retryStrategy();
                const l = await t.maxAttempts();
                if (!D(i)) return i?.mode && (n.userAgent = [
                    ...n.userAgent || [],
                    [
                        "cfg/retry-mode",
                        i.mode
                    ]
                ]), i.retry(r, s);
                {
                    let u = await i.acquireInitialRetryToken((n.partition_id ?? "") + (n.__retryLongPoll ? ":longpoll" : "")), d = new Error, p = 0, h = 0;
                    const { request: m } = s, f = a.isInstance(m);
                    for(f && (m.headers[I] = c());;)try {
                        f && (m.headers[A] = `attempt=${p + 1}; max=${l}`);
                        const { response: e, output: t } = await r(s);
                        return i.recordSuccess(u), t.$metadata.attempts = p + 1, t.$metadata.totalRetryDelay = h, {
                            response: e,
                            output: t
                        };
                    } catch (r) {
                        const s = N(r, t.logger);
                        if (d = M(r), f && e(m)) throw (n.logger instanceof o ? console : n.logger)?.warn("An error was encountered in a non-retryable streaming request."), d;
                        try {
                            u = await i.refreshRetryTokenForRetry(u, s);
                        } catch (e) {
                            throw d.$metadata || (d.$metadata = {}), d.$metadata.attempts = p + 1, d.$metadata.totalRetryDelay = h, d;
                        }
                        p = u.getRetryCount();
                        const a = u.getRetryDelay();
                        h += (u?.$retryLog?.acquisitionDelay ?? 0) + a, a > 0 && await O(a);
                    }
                }
            };
}
const O = (e)=>new Promise((t)=>setTimeout(t, e)), D = (e)=>void 0 !== e.acquireInitialRetryToken && void 0 !== e.refreshRetryTokenForRetry && void 0 !== e.recordSuccess, N = (e, t)=>{
    const r = {
        error: e,
        errorType: F(e)
    }, n = P(e.$response, t);
    return n && (r.retryAfterHint = n), r;
}, F = (e)=>S(e) ? "THROTTLING" : x(e) ? "TRANSIENT" : k(e) ? "SERVER_ERROR" : "CLIENT_ERROR", L = {
    name: "retryMiddleware",
    tags: [
        "RETRY"
    ],
    step: "finalizeRequest",
    priority: "high",
    override: !0
};
class U {
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
                await new Promise((e)=>U.setTimeoutFn(e, t)), this.refillTokenBucket();
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
class B {
    static v2026 = "undefined" != typeof process && "true" === process.env?.SMITHY_NEW_RETRIES_2026;
    static delay() {
        return B.v2026 ? 50 : 100;
    }
    static throttlingDelay() {
        return B.v2026 ? 1e3 : 500;
    }
    static cost() {
        return B.v2026 ? 14 : 5;
    }
    static throttlingCost() {
        return B.v2026 ? 5 : 10;
    }
    static modifiedCostType() {
        return B.v2026 ? "THROTTLING" : "TRANSIENT";
    }
}
class $ {
    x = B.delay();
    computeNextBackoffDelay(e) {
        const t = Math.random() * Math.min(this.x * 2 ** e, T);
        return Math.floor(t);
    }
    setDelayBase(e) {
        this.x = e;
    }
}
class q {
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
        return Math.min(T, this.delay);
    }
    getRetryCost() {
        return this.cost;
    }
    isLongPoll() {
        return this.longPoll;
    }
}
var j;
!function(e) {
    e.STANDARD = "standard", e.ADAPTIVE = "adaptive";
}(j || (j = {}));
const J = 3, z = j.STANDARD, H = 1, W = 2, G = 3;
let Y = class {
    mode = j.STANDARD;
    retryBackoffStrategy;
    capacity = C;
    maxAttemptsProvider;
    baseDelay;
    constructor(e){
        "number" == typeof e ? this.maxAttemptsProvider = async ()=>e : "function" == typeof e ? this.maxAttemptsProvider = e : e && "object" == typeof e && (this.maxAttemptsProvider = async ()=>e.maxAttempts, this.baseDelay = e.baseDelay, this.retryBackoffStrategy = e.backoff), this.maxAttemptsProvider ??= async ()=>J, this.baseDelay ??= B.delay(), this.retryBackoffStrategy ??= new $;
    }
    async acquireInitialRetryToken(e) {
        return new q(B.delay(), 0, void 0, B.v2026 && e.includes(":longpoll"));
    }
    async refreshRetryTokenForRetry(e, t) {
        const r = await this.getMaxAttempts(), n = this.retryCode(e, t, r), o = 0 === n, s = e.isLongPoll?.();
        if (o || s) {
            const r = t.errorType;
            this.retryBackoffStrategy.setDelayBase("THROTTLING" === r ? B.throttlingDelay() : this.baseDelay);
            const i = this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount());
            let a = i;
            if (t.retryAfterHint instanceof Date && (a = Math.max(i, Math.min(t.retryAfterHint.getTime() - Date.now(), i + 5e3))), o) {
                const t = this.getCapacityCost(r);
                this.capacity -= t;
                const n = new q(0, e.getRetryCount() + 1, t, e.isLongPoll?.() ?? !1);
                return await new Promise((e)=>setTimeout(e, a)), n.$retryLog.acquisitionDelay = a, n;
            }
            {
                const e = B.v2026 && n === G && s ? a : 0;
                e > 0 && await new Promise((t)=>setTimeout(t, e));
            }
        }
        throw new Error("No retry token available");
    }
    recordSuccess(e) {
        this.capacity = Math.min(C, this.capacity + (e.getRetryCost() ?? 1));
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
            return console.warn(`Max attempts provider could not resolve. Using default of ${J}`), J;
        }
    }
    retryCode(e, t, r) {
        const n = e.getRetryCount() + 1, o = this.isRetryableError(t.errorType) ? 0 : H, s = n < r ? 0 : W, i = this.capacity >= this.getCapacityCost(t.errorType) ? 0 : G;
        return o || s || i;
    }
    getCapacityCost(e) {
        return e === B.modifiedCostType() ? B.throttlingCost() : B.cost();
    }
    isRetryableError(e) {
        return "THROTTLING" === e || "TRANSIENT" === e;
    }
}, V = class {
    mode = j.ADAPTIVE;
    rateLimiter;
    standardRetryStrategy;
    constructor(e, t){
        const { rateLimiter: r } = t ?? {};
        this.rateLimiter = r ?? new U, this.standardRetryStrategy = new Y(t ? {
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
const K = (e, t)=>Math.floor(Math.min(T, Math.random() * 2 ** t * e)), Z = (e)=>!!e && (v(e) || w(e) || S(e) || x(e));
class X {
    maxAttemptsProvider;
    retryDecider;
    delayDecider;
    retryQuota;
    mode = j.STANDARD;
    constructor(e, t){
        this.maxAttemptsProvider = e, this.retryDecider = t?.retryDecider ?? Z, this.delayDecider = t?.delayDecider ?? K, this.retryQuota = t?.retryQuota ?? ((e)=>{
            const t = e;
            let r = e;
            const n = (e)=>"TimeoutError" === e.name ? 10 : 5, o = (e)=>n(e) <= r;
            return Object.freeze({
                hasRetryTokens: o,
                retrieveRetryTokens: (e)=>{
                    if (!o(e)) throw new Error("No retry token available");
                    const t = n(e);
                    return r -= t, t;
                },
                releaseRetryTokens: (e)=>{
                    r += e ?? 1, r = Math.min(r, t);
                }
            });
        })(C);
    }
    shouldRetry(e, t, r) {
        return t < r && this.retryDecider(e) && this.retryQuota.hasRetryTokens(e);
    }
    async getMaxAttempts() {
        let e;
        try {
            e = await this.maxAttemptsProvider();
        } catch (t) {
            e = J;
        }
        return e;
    }
    async retry(e, t, r) {
        let n, o = 0, s = 0;
        const i = await this.getMaxAttempts(), { request: l } = t;
        for(a.isInstance(l) && (l.headers[I] = c());;)try {
            a.isInstance(l) && (l.headers[A] = `attempt=${o + 1}; max=${i}`), r?.beforeRequest && await r.beforeRequest();
            const { response: c, output: u } = await e(t);
            return r?.afterRequest && r.afterRequest(c), this.retryQuota.releaseRetryTokens(n), u.$metadata.attempts = o + 1, u.$metadata.totalRetryDelay = s, {
                response: c,
                output: u
            };
        } catch (e) {
            const t = M(e);
            if (o++, this.shouldRetry(t, o, i)) {
                n = this.retryQuota.retrieveRetryTokens(t);
                const e = this.delayDecider(S(t) ? 500 : 100, o), r = Q(t.$response), i = Math.max(r || 0, e);
                s += i, await new Promise((e)=>setTimeout(e, i));
                continue;
            }
            throw t.$metadata || (t.$metadata = {}), t.$metadata.attempts = o, t.$metadata.totalRetryDelay = s, t;
        }
    }
}
const Q = (e)=>{
    if (!i.isInstance(e)) return;
    const t = Object.keys(e.headers).find((e)=>"retry-after" === e.toLowerCase());
    if (!t) return;
    const r = e.headers[t], n = Number(r);
    if (!Number.isNaN(n)) return Math.min(1e3 * n, 2e4);
    const o = new Date(r);
    return Math.min(o.getTime() - Date.now(), 2e4);
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
    default: J
}, ne = "AWS_RETRY_MODE", oe = "retry_mode", se = {
    environmentVariableSelector: (e)=>e[ne],
    configFileSelector: (e)=>e[oe],
    default: z
}, ie = ()=>(e)=>async (t)=>{
            const { request: r } = t;
            return a.isInstance(r) && (delete r.headers[I], delete r.headers[A]), e(t);
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
}, le = R(d), ce = function(e) {
    const t = R(e);
    return (e)=>({
            applyToStack: (r)=>{
                r.add(t(e), L);
            }
        });
}(d);
exports.AdaptiveRetryStrategy = V, exports.CONFIG_MAX_ATTEMPTS = te, exports.CONFIG_RETRY_MODE = oe, exports.ConfiguredRetryStrategy = class extends Y {
    computeNextBackoffDelay;
    constructor(e, t = B.delay()){
        super("function" == typeof e ? e : async ()=>e), this.computeNextBackoffDelay = "number" == typeof t ? ()=>t : t, this.retryBackoffStrategy.computeNextBackoffDelay = (e)=>{
            const t = e + 1;
            return this.computeNextBackoffDelay(t);
        };
    }
}, exports.DEFAULT_MAX_ATTEMPTS = J, exports.DEFAULT_RETRY_DELAY_BASE = 100, exports.DEFAULT_RETRY_MODE = z, exports.DefaultRateLimiter = U, exports.DeprecatedAdaptiveRetryStrategy = class extends X {
    rateLimiter;
    constructor(e, t){
        const { rateLimiter: r, ...n } = t ?? {};
        super(e, n), this.rateLimiter = r ?? new U, this.mode = j.ADAPTIVE;
    }
    async retry(e, t) {
        return super.retry(e, t, {
            beforeRequest: async ()=>this.rateLimiter.getSendToken(),
            afterRequest: (e)=>{
                this.rateLimiter.updateClientSendingRate(e);
            }
        });
    }
}, exports.DeprecatedStandardRetryStrategy = X, exports.ENV_MAX_ATTEMPTS = ee, exports.ENV_RETRY_MODE = ne, exports.INITIAL_RETRY_TOKENS = C, exports.INVOCATION_ID_HEADER = I, exports.MAXIMUM_RETRY_DELAY = T, exports.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = re, exports.NODE_RETRY_MODE_CONFIG_OPTIONS = se, exports.NO_RETRY_INCREMENT = 1, exports.REQUEST_HEADER = A, exports.RETRY_COST = 5, exports.RETRY_MODES = j, exports.Retry = B, exports.StandardRetryStrategy = Y, exports.THROTTLING_RETRY_DELAY_BASE = 500, exports.TIMEOUT_RETRY_COST = 10, exports.defaultDelayDecider = K, exports.defaultRetryDecider = Z, exports.getOmitRetryHeadersPlugin = (e)=>({
        applyToStack: (e)=>{
            e.addRelativeTo(ie(), ae);
        }
    }), exports.getRetryAfterHint = function(e, t) {
    return P(e, t);
}, exports.getRetryPlugin = ce, exports.isBrowserNetworkError = _, exports.isClockSkewCorrectedError = b, exports.isClockSkewError = w, exports.isNodeJsHttp2TransientError = E, exports.isRetryableByTrait = v, exports.isServerError = k, exports.isThrottlingError = S, exports.isTransientError = x, exports.omitRetryHeadersMiddleware = ie, exports.omitRetryHeadersMiddlewareOptions = ae, exports.resolveRetryConfig = (e, t)=>{
    const { retryStrategy: r, retryMode: n } = e, { defaultMaxAttempts: o = J, defaultBaseDelay: i = B.delay() } = t ?? {}, a = s(e.maxAttempts ?? o);
    let l = r ? Promise.resolve(r) : void 0;
    return Object.assign(e, {
        maxAttempts: a,
        retryStrategy: ()=>l ??= (async ()=>{
                const e = await a();
                return await s(n)() === j.ADAPTIVE ? new V(a, {
                    maxAttempts: e,
                    baseDelay: i
                }) : new Y({
                    maxAttempts: e,
                    baseDelay: i
                });
            })()
    });
}, exports.retryMiddleware = le, exports.retryMiddlewareOptions = L;
