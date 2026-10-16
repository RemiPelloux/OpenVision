"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.RewindableAsyncIterable = void 0, exports.shouldRetryOnError = c, exports.createStreamRetryInterceptor = function(e, t) {
    const r = {
        maxRetries: t?.maxRetries ?? 3,
        baseDelayMs: t?.baseDelayMs ?? 1e3,
        maxDelayMs: t?.maxDelayMs ?? 3e4
    };
    return (t)=>async (n)=>{
            try {
                if (await e.checkFeatureGate("retry_interceptor_disabled")) return t(n);
            } catch (r) {
                return e.debugLog.warn("[StreamRetryInterceptor] Failed to check feature gate, skipping retry logic", r), t(n);
            }
            if (n.method.kind !== s.MethodKind.BiDiStreaming && n.method.kind !== s.MethodKind.ClientStreaming && n.method.kind !== s.MethodKind.ServerStreaming) return t(n);
            const o = u(n, r);
            if (null === o) return t(n);
            if (n.method.kind === s.MethodKind.BiDiStreaming || n.method.kind === s.MethodKind.ClientStreaming) {
                const e = new d(n.message);
                n = {
                    ...n,
                    message: e
                };
            }
            return p(e, n, o, "StreamRetryInterceptor", ()=>t(n));
        };
}, exports.createUnaryRetryInterceptor = function(e, t) {
    const r = {
        maxRetries: t?.maxRetries ?? 3,
        baseDelayMs: t?.baseDelayMs ?? 1e3,
        maxDelayMs: t?.maxDelayMs ?? 3e4
    };
    return (t)=>async (n)=>{
            try {
                if (await e.checkFeatureGate("retry_interceptor_disabled")) return t(n);
            } catch (r) {
                return e.debugLog.warn("[UnaryRetryInterceptor] Failed to check feature gate, skipping retry logic", r), t(n);
            }
            if (n.method.kind !== s.MethodKind.Unary) return t(n);
            const o = u(n, r);
            return null === o ? t(n) : p(e, n, o, "UnaryRetryInterceptor", ()=>t(n));
        };
};
const n = require("./module-96980.js"), s = require("./module-36038.js"), o = require("./module-97163.js"), i = require("./module-7126.js");
function a(e) {
    return new Promise((t)=>setTimeout(t, e));
}
function c(e, t, r, n) {
    if (n.retriableErrors && n.retriableErrors.length > 0) {
        const s = o.Code[e];
        for (const e of n.retriableErrors)if (e.code === s) {
            if (e.method && e.method !== r) continue;
            if (!e.errorMessage) return !0;
            if (t.includes(e.errorMessage)) return !0;
        }
    }
    return !1;
}
function l(e, t) {
    if (!e) return;
    const r = parseInt(e, 10);
    return Number.isNaN(r) || r < t ? void 0 : r;
}
function u(e, t) {
    const r = e.header, n = r.get("X-Cursor-RetryInterceptor-Enabled");
    if (!n || "true" !== n) return null;
    const s = r.get("X-Cursor-RetryInterceptor-MaxRetries"), o = r.get("X-Cursor-RetryInterceptor-BaseDelayMs"), i = r.get("X-Cursor-RetryInterceptor-MaxDelayMs");
    return {
        maxRetries: l(s, 0) ?? t.maxRetries,
        baseDelayMs: l(o, 1) ?? t.baseDelayMs,
        maxDelayMs: l(i, 1) ?? t.maxDelayMs
    };
}
class d {
    constructor(e){
        this.buffer = [], this.sourceIterator = e[Symbol.asyncIterator](), this.retryFinished = !1, this.generation = 0;
    }
    onRetryFinished() {
        this.retryFinished = !0;
    }
    async *[Symbol.asyncIterator]() {
        if (this.retryFinished) throw new Error("No new iterators can be created after retry finished; this is a bug");
        let e = 0;
        const t = this.generation;
        for(this.generation++; t === this.generation - 1;){
            if (e < this.buffer.length) {
                yield this.buffer[e++];
                continue;
            }
            const r = await this.sourceIterator.next();
            if (r.done) {
                if (e >= this.buffer.length) break;
            } else if (this.retryFinished && t === this.generation - 1) {
                for(; e < this.buffer.length;)yield this.buffer[e], e++;
                yield r.value;
            } else this.buffer.push(r.value);
        }
    }
}
async function p(e, t, r, s, l) {
    const { maxRetries: u, baseDelayMs: p, maxDelayMs: f } = r, g = await async function(e, t) {
        try {
            const t = await e.getDynamicConfigValue("retry_interceptor_config");
            return t && "object" == typeof t && "retriableErrors" in t ? t : e.getDynamicConfigFallbackValues("retry_interceptor_config");
        } catch (r) {
            return e.debugLog.error(`[${t}] Failed to fetch retry_interceptor_config, using fallback defaults`, r), e.getDynamicConfigFallbackValues("retry_interceptor_config");
        }
    }(e, s), y = t.method.name, w = "function" == typeof t.header?.get ? t.header.get("x-request-id") ?? void 0 : void 0;
    let v = 0, _ = new o.ConnectError("executeWithRetry: unknown error", o.Code.Unknown);
    for(; v <= u;)try {
        const r = await l();
        return v > 0 && m(e, s, y, v, w), t.message instanceof d && t.message.onRetryFinished(), r;
    } catch (t) {
        if (_ = t, !(t instanceof o.ConnectError)) throw t;
        if (!c(t.code, t.message, y, g)) throw t;
        const r = (0, n.calculateBackoffDelay)(v, p, f);
        v++, v <= u && (h(e, s, y, v, u, r, t.code, t.message, w), await a(r));
    }
    throw function(e, t, r, n, s, a, c, l) {
        const u = s + 1;
        e.debugLog.warn(`[${t}] Max retries (${n}) exhausted for ${r} after ${u} total requests made, giving up. Error: ${a} - ${c}`), i.StructuredLogProviderImpl.warn("transport", "Retry exhausted", {
            service: "retry_interceptor",
            subkey: "max_retries_exhausted",
            interceptor: t,
            method: r,
            requestId: l,
            retryAttemptNumber: s,
            totalRequestsMade: u,
            errorCode: o.Code[a],
            errorMessage: c
        });
    }(e, s, y, u, v, _.code, _.message, w), _;
}
function m(e, t, r, n, s) {
    const o = n + 1;
    e.debugLog.info(`[${t}] Successfully completed after ${n} retries (${o} total requests made) for ${r}`), i.StructuredLogProviderImpl.info("transport", "Retry succeeded", {
        service: "retry_interceptor",
        subkey: "retry_success",
        interceptor: t,
        method: r,
        requestId: s,
        retryAttemptNumber: n,
        totalRequestsMade: o
    });
}
function h(e, t, r, n, s, a, c, l, u) {
    const d = n;
    e.debugLog.info(`[${t}] About to retry ${r} (retry attempt ${n}/${s}, ${d} requests made so far) after ${a}ms delay. Error: ${c} - ${l}`), i.StructuredLogProviderImpl.info("transport", "Retry attempt", {
        service: "retry_interceptor",
        subkey: "retry_attempt",
        interceptor: t,
        method: r,
        requestId: u,
        retryAttemptNumber: n,
        totalRequestsMade: d,
        maxRetries: s,
        delayMs: a,
        errorCode: o.Code[c],
        errorMessage: l
    });
}
exports.RewindableAsyncIterable = d;
