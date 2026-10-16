import { si } from "./HVr.js";
import { Myo } from "./requestHelpers.js";
import { x } from "./tslib.es6.js";
import { Iph, Ryo, xph } from "./xmo.js";
var Pyo, Uwt, ntt;
export { Pyo, Uwt, ntt };
var __wakaru_$wt_initialized = false;
export function $wt() {
if (__wakaru_$wt_initialized) return;
__wakaru_$wt_initialized = true;
"use strict";
x(), si(), Myo(), Pyo = 6e4, Uwt = class {
    constructor(e){
        this.activeRequests = new Set, this.generation = 0, this.disposed = !1, this.cacheTtlMs = e.cacheTtlMs, this.timeoutMs = e.timeoutMs, this.now = e._testing?.now ?? Date.now, this.createTimeoutSignal = e._testing?.createTimeoutSignal ?? ((i)=>AbortSignal.timeout(i));
        const t = e.defaultBackoffMs;
        if (t !== void 0 && (!Number.isFinite(t) || t <= 0)) throw new RangeError("defaultBackoffMs must be a finite, positive number");
        const n = t ?? Pyo;
        if (this.getErrorBackoffMs = e.getErrorBackoffMs ?? ((i)=>Ryo(i, {
                defaultDelayMs: n,
                nowMs: this.now()
            })), !Number.isFinite(this.cacheTtlMs) || this.cacheTtlMs < 0) throw new RangeError("cacheTtlMs must be a finite, non-negative number");
        if (!Number.isFinite(this.timeoutMs) || this.timeoutMs <= 0) throw new RangeError("timeoutMs must be a finite, positive number");
    }
    async get(e, t = {}) {
        if (t.signal?.throwIfAborted(), this.disposed) throw new Error("CachedRequest has been disposed");
        const n = t.cache !== !1, i = t.forceRefresh === !0, r = this.cached;
        if (n && !i && r !== void 0 && this.now() - r.fetchedAtMs < this.cacheTtlMs) return r.value;
        if (n) {
            const a = this.blocked;
            if (a !== void 0) {
                if (this.now() < a.retryAtMs) throw a.error;
                this.blocked = void 0;
            }
        }
        const s = t.coalesceKey;
        if (n && this.inFlight !== void 0 && this.inFlight.coalesceKey === s && (!i || this.inFlight.isForced)) return this.waitForRequest(this.inFlight, t.signal);
        n && this.inFlight !== void 0 && this.generation++;
        const o = this.startRequest(e, {
            generation: this.generation,
            isForced: i,
            coalesceKey: s,
            useCache: n
        });
        return n && (this.inFlight = o), this.waitForRequest(o, t.signal);
    }
    hasFreshValue() {
        return this.cached !== void 0 && this.now() - this.cached.fetchedAtMs < this.cacheTtlMs;
    }
    hasActiveRequests() {
        return this.activeRequests.size > 0;
    }
    invalidate(e = {}) {
        if (this.generation++, this.cached = void 0, this.blocked = void 0, this.inFlight = void 0, e.abortInFlight === !0) for (const t of this.activeRequests)Iph(t.controller, "Cached request invalidated");
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.invalidate({
            abortInFlight: !0
        }));
    }
    startRequest(e, t) {
        const n = new AbortController, i = AbortSignal.any([
            n.signal,
            this.createTimeoutSignal(this.timeoutMs)
        ]);
        let r;
        try {
            r = e(i);
        } catch (a) {
            r = Promise.reject(a);
        }
        const s = xph(r, i), o = {
            promise: s,
            controller: n,
            generation: t.generation,
            isForced: t.isForced,
            coalesceKey: t.coalesceKey,
            waiterCount: 0,
            settled: !1
        };
        return this.activeRequests.add(o), s.then((a)=>{
            !this.disposed && o.generation === this.generation && (this.blocked = void 0, t.useCache && (this.cached = {
                value: a,
                fetchedAtMs: this.now()
            })), this.finishRequest(o);
        }, (a)=>{
            const c = this.getErrorBackoffMs?.(a);
            t.useCache && !this.disposed && o.generation === this.generation && c !== void 0 && Number.isFinite(c) && c > 0 && (this.blocked = {
                error: a,
                retryAtMs: this.now() + c
            }), this.finishRequest(o);
        }), o;
    }
    finishRequest(e) {
        e.settled = !0, this.activeRequests.delete(e), this.inFlight === e && (this.inFlight = void 0);
    }
    async waitForRequest(e, t) {
        e.waiterCount++;
        try {
            return await xph(e.promise, t);
        } finally{
            e.waiterCount--, e.waiterCount === 0 && !e.settled && (this.inFlight === e && (this.inFlight = void 0, this.generation++), Iph(e.controller, "Cached request has no active waiters"));
        }
    }
}, ntt = class {
    constructor(e){
        if (this.configuration = e, this.requests = new Map, this.activeRequests = new Set, this.disposed = !1, !Number.isInteger(e.maxEntries) || e.maxEntries <= 0) throw new RangeError("maxEntries must be a positive integer");
        this.maxEntries = e.maxEntries;
    }
    async get(e, t, n = {}) {
        if (this.disposed) throw new Error("KeyedCachedRequest has been disposed");
        let i = this.requests.get(e);
        i === void 0 ? (i = new Uwt(this.configuration), this.requests.set(e, i)) : (this.requests.delete(e), this.requests.set(e, i));
        const r = i.get(t, n);
        i.hasActiveRequests() && this.activeRequests.add(i), this.trimIdleRequests();
        try {
            return await r;
        } finally{
            i.hasActiveRequests() || this.activeRequests.delete(i), this.trimIdleRequests();
        }
    }
    invalidateAll(e = {}) {
        for (const t of this.requests.values())t.invalidate(e);
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = !0;
            for (const e of this.requests.values())e.dispose();
            this.requests.clear(), this.activeRequests.clear();
        }
    }
    trimIdleRequests() {
        if (!(this.requests.size <= this.maxEntries) && !(this.activeRequests.size >= this.maxEntries)) for (const [e, t] of this.requests){
            if (this.requests.size <= this.maxEntries) break;
            t.hasActiveRequests() || (this.requests.delete(e), this.activeRequests.delete(t), t.dispose());
        }
    }
};

}
