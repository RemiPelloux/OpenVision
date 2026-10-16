"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.RewindableAsyncIterable = void 0, exports.shouldRetryOnError = u, exports.createStreamRetryInterceptor = function(t, e) {
    const r = {
        maxRetries: e?.maxRetries ?? 3,
        baseDelayMs: e?.baseDelayMs ?? 1e3,
        maxDelayMs: e?.maxDelayMs ?? 3e4
    };
    return (e)=>async (n)=>{
            try {
                if (await t.checkFeatureGate("retry_interceptor_disabled")) return e(n);
            } catch (r) {
                return t.debugLog.warn("[StreamRetryInterceptor] Failed to check feature gate, skipping retry logic", r), e(n);
            }
            if (n.method.kind !== s.MethodKind.BiDiStreaming && n.method.kind !== s.MethodKind.ClientStreaming && n.method.kind !== s.MethodKind.ServerStreaming) return e(n);
            const i = l(n, r);
            if (null === i) return e(n);
            if (n.method.kind === s.MethodKind.BiDiStreaming || n.method.kind === s.MethodKind.ClientStreaming) {
                const t = new m(n.message);
                n = {
                    ...n,
                    message: t
                };
            }
            return d(t, n, i, "StreamRetryInterceptor", ()=>e(n));
        };
}, exports.createUnaryRetryInterceptor = function(t, e) {
    const r = {
        maxRetries: e?.maxRetries ?? 3,
        baseDelayMs: e?.baseDelayMs ?? 1e3,
        maxDelayMs: e?.maxDelayMs ?? 3e4
    };
    return (e)=>async (n)=>{
            try {
                if (await t.checkFeatureGate("retry_interceptor_disabled")) return e(n);
            } catch (r) {
                return t.debugLog.warn("[UnaryRetryInterceptor] Failed to check feature gate, skipping retry logic", r), e(n);
            }
            if (n.method.kind !== s.MethodKind.Unary) return e(n);
            const i = l(n, r);
            return null === i ? e(n) : d(t, n, i, "UnaryRetryInterceptor", ()=>e(n));
        };
};
const n = require("./module-6402.js"), s = require("./module-6038.js"), i = require("./module-8394.js"), o = require("./module-7126.js");
function a(t) {
    return new Promise((e)=>setTimeout(e, t));
}
function u(t, e, r, n) {
    if (n.retriableErrors && n.retriableErrors.length > 0) {
        const s = i.Code[t];
        for (const t of n.retriableErrors)if (t.code === s) {
            if (t.method && t.method !== r) continue;
            if (!t.errorMessage) return !0;
            if (e.includes(t.errorMessage)) return !0;
        }
    }
    return !1;
}
function c(t, e) {
    if (!t) return;
    const r = parseInt(t, 10);
    return Number.isNaN(r) || r < e ? void 0 : r;
}
function l(t, e) {
    const r = t.header, n = r.get("X-Cursor-RetryInterceptor-Enabled");
    if (!n || "true" !== n) return null;
    const s = r.get("X-Cursor-RetryInterceptor-MaxRetries"), i = r.get("X-Cursor-RetryInterceptor-BaseDelayMs"), o = r.get("X-Cursor-RetryInterceptor-MaxDelayMs");
    return {
        maxRetries: c(s, 0) ?? e.maxRetries,
        baseDelayMs: c(i, 1) ?? e.baseDelayMs,
        maxDelayMs: c(o, 1) ?? e.maxDelayMs
    };
}
class m {
    constructor(t){
        this.buffer = [], this.sourceIterator = t[Symbol.asyncIterator](), this.retryFinished = !1, this.generation = 0;
    }
    onRetryFinished() {
        this.retryFinished = !0;
    }
    async *[Symbol.asyncIterator]() {
        if (this.retryFinished) throw new Error("No new iterators can be created after retry finished; this is a bug");
        let t = 0;
        const e = this.generation;
        for(this.generation++; e === this.generation - 1;){
            if (t < this.buffer.length) {
                yield this.buffer[t++];
                continue;
            }
            const r = await this.sourceIterator.next();
            if (r.done) {
                if (t >= this.buffer.length) break;
            } else if (this.retryFinished && e === this.generation - 1) {
                for(; t < this.buffer.length;)yield this.buffer[t], t++;
                yield r.value;
            } else this.buffer.push(r.value);
        }
    }
}
async function d(t, e, r, s, c) {
    const { maxRetries: l, baseDelayMs: d, maxDelayMs: h } = r, g = await async function(t, e) {
        try {
            const e = await t.getDynamicConfigValue("retry_interceptor_config");
            return e && "object" == typeof e && "retriableErrors" in e ? e : t.getDynamicConfigFallbackValues("retry_interceptor_config");
        } catch (r) {
            return t.debugLog.error(`[${e}] Failed to fetch retry_interceptor_config, using fallback defaults`, r), t.getDynamicConfigFallbackValues("retry_interceptor_config");
        }
    }(t, s), A = e.method.name, _ = "function" == typeof e.header?.get ? e.header.get("x-request-id") ?? void 0 : void 0;
    let y = 0, w = new i.ConnectError("executeWithRetry: unknown error", i.Code.Unknown);
    for(; y <= l;)try {
        const r = await c();
        return y > 0 && f(t, s, A, y, _), e.message instanceof m && e.message.onRetryFinished(), r;
    } catch (e) {
        if (w = e, !(e instanceof i.ConnectError)) throw e;
        if (!u(e.code, e.message, A, g)) throw e;
        const r = (0, n.calculateBackoffDelay)(y, d, h);
        y++, y <= l && (p(t, s, A, y, l, r, e.code, e.message, _), await a(r));
    }
    throw function(t, e, r, n, s, a, u, c) {
        const l = s + 1;
        t.debugLog.warn(`[${e}] Max retries (${n}) exhausted for ${r} after ${l} total requests made, giving up. Error: ${a} - ${u}`), o.StructuredLogProviderImpl.warn("transport", "Retry exhausted", {
            service: "retry_interceptor",
            subkey: "max_retries_exhausted",
            interceptor: e,
            method: r,
            requestId: c,
            retryAttemptNumber: s,
            totalRequestsMade: l,
            errorCode: i.Code[a],
            errorMessage: u
        });
    }(t, s, A, l, y, w.code, w.message, _), w;
}
function f(t, e, r, n, s) {
    const i = n + 1;
    t.debugLog.info(`[${e}] Successfully completed after ${n} retries (${i} total requests made) for ${r}`), o.StructuredLogProviderImpl.info("transport", "Retry succeeded", {
        service: "retry_interceptor",
        subkey: "retry_success",
        interceptor: e,
        method: r,
        requestId: s,
        retryAttemptNumber: n,
        totalRequestsMade: i
    });
}
function p(t, e, r, n, s, a, u, c, l) {
    const m = n;
    t.debugLog.info(`[${e}] About to retry ${r} (retry attempt ${n}/${s}, ${m} requests made so far) after ${a}ms delay. Error: ${u} - ${c}`), o.StructuredLogProviderImpl.info("transport", "Retry attempt", {
        service: "retry_interceptor",
        subkey: "retry_attempt",
        interceptor: e,
        method: r,
        requestId: l,
        retryAttemptNumber: n,
        totalRequestsMade: m,
        maxRetries: s,
        delayMs: a,
        errorCode: i.Code[u],
        errorMessage: c
    });
}
exports.RewindableAsyncIterable = m;
