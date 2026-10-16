import { Ei } from "./Iwo.js";
import { dJm, onl, uJm } from "./gYa.js";
import { lnl } from "./requestHelpers.js";
import { E } from "./tslib.es6.js";
var cnl, dTt, hTt;
export { cnl, dTt, hTt };
var __wakaru_pTt_initialized = false;
export function pTt() {
if (__wakaru_pTt_initialized) return;
__wakaru_pTt_initialized = true;
"use strict";
E(), Ei(), lnl(), cnl = 6e4, dTt = class {
    constructor(t){
        this.activeRequests = new Set, this.generation = 0, this.disposed = !1, this.cacheTtlMs = t.cacheTtlMs, this.timeoutMs = t.timeoutMs, this.now = t._testing?.now ?? Date.now, this.createTimeoutSignal = t._testing?.createTimeoutSignal ?? ((i)=>AbortSignal.timeout(i));
        const e = t.defaultBackoffMs;
        if (e !== void 0 && (!Number.isFinite(e) || e <= 0)) throw new RangeError("defaultBackoffMs must be a finite, positive number");
        const n = e ?? cnl;
        if (this.getErrorBackoffMs = t.getErrorBackoffMs ?? ((i)=>onl(i, {
                defaultDelayMs: n,
                nowMs: this.now()
            })), !Number.isFinite(this.cacheTtlMs) || this.cacheTtlMs < 0) throw new RangeError("cacheTtlMs must be a finite, non-negative number");
        if (!Number.isFinite(this.timeoutMs) || this.timeoutMs <= 0) throw new RangeError("timeoutMs must be a finite, positive number");
    }
    async get(t, e = {}) {
        if (e.signal?.throwIfAborted(), this.disposed) throw new Error("CachedRequest has been disposed");
        const n = e.cache !== !1, i = e.forceRefresh === !0, r = this.cached;
        if (n && !i && r !== void 0 && this.now() - r.fetchedAtMs < this.cacheTtlMs) return r.value;
        if (n) {
            const a = this.blocked;
            if (a !== void 0) {
                if (this.now() < a.retryAtMs) throw a.error;
                this.blocked = void 0;
            }
        }
        const s = e.coalesceKey;
        if (n && this.inFlight !== void 0 && this.inFlight.coalesceKey === s && (!i || this.inFlight.isForced)) return this.waitForRequest(this.inFlight, e.signal);
        n && this.inFlight !== void 0 && this.generation++;
        const o = this.startRequest(t, {
            generation: this.generation,
            isForced: i,
            coalesceKey: s,
            useCache: n
        });
        return n && (this.inFlight = o), this.waitForRequest(o, e.signal);
    }
    hasFreshValue() {
        return this.cached !== void 0 && this.now() - this.cached.fetchedAtMs < this.cacheTtlMs;
    }
    hasActiveRequests() {
        return this.activeRequests.size > 0;
    }
    invalidate(t = {}) {
        if (this.generation++, this.cached = void 0, this.blocked = void 0, this.inFlight = void 0, t.abortInFlight === !0) for (const e of this.activeRequests)dJm(e.controller, "Cached request invalidated");
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.invalidate({
            abortInFlight: !0
        }));
    }
    startRequest(t, e) {
        const n = new AbortController, i = AbortSignal.any([
            n.signal,
            this.createTimeoutSignal(this.timeoutMs)
        ]);
        let r;
        try {
            r = t(i);
        } catch (a) {
            r = Promise.reject(a);
        }
        const s = uJm(r, i), o = {
            promise: s,
            controller: n,
            generation: e.generation,
            isForced: e.isForced,
            coalesceKey: e.coalesceKey,
            waiterCount: 0,
            settled: !1
        };
        return this.activeRequests.add(o), s.then((a)=>{
            !this.disposed && o.generation === this.generation && (this.blocked = void 0, e.useCache && (this.cached = {
                value: a,
                fetchedAtMs: this.now()
            })), this.finishRequest(o);
        }, (a)=>{
            const l = this.getErrorBackoffMs?.(a);
            e.useCache && !this.disposed && o.generation === this.generation && l !== void 0 && Number.isFinite(l) && l > 0 && (this.blocked = {
                error: a,
                retryAtMs: this.now() + l
            }), this.finishRequest(o);
        }), o;
    }
    finishRequest(t) {
        t.settled = !0, this.activeRequests.delete(t), this.inFlight === t && (this.inFlight = void 0);
    }
    async waitForRequest(t, e) {
        t.waiterCount++;
        try {
            return await uJm(t.promise, e);
        } finally{
            t.waiterCount--, t.waiterCount === 0 && !t.settled && (this.inFlight === t && (this.inFlight = void 0, this.generation++), dJm(t.controller, "Cached request has no active waiters"));
        }
    }
}, hTt = class {
    constructor(t){
        if (this.configuration = t, this.requests = new Map, this.activeRequests = new Set, this.disposed = !1, !Number.isInteger(t.maxEntries) || t.maxEntries <= 0) throw new RangeError("maxEntries must be a positive integer");
        this.maxEntries = t.maxEntries;
    }
    async get(t, e, n = {}) {
        if (this.disposed) throw new Error("KeyedCachedRequest has been disposed");
        let i = this.requests.get(t);
        i === void 0 ? (i = new dTt(this.configuration), this.requests.set(t, i)) : (this.requests.delete(t), this.requests.set(t, i));
        const r = i.get(e, n);
        i.hasActiveRequests() && this.activeRequests.add(i), this.trimIdleRequests();
        try {
            return await r;
        } finally{
            i.hasActiveRequests() || this.activeRequests.delete(i), this.trimIdleRequests();
        }
    }
    invalidateAll(t = {}) {
        for (const e of this.requests.values())e.invalidate(t);
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = !0;
            for (const t of this.requests.values())t.dispose();
            this.requests.clear(), this.activeRequests.clear();
        }
    }
    trimIdleRequests() {
        if (!(this.requests.size <= this.maxEntries) && !(this.activeRequests.size >= this.maxEntries)) for (const [t, e] of this.requests){
            if (this.requests.size <= this.maxEntries) break;
            e.hasActiveRequests() || (this.requests.delete(t), this.activeRequests.delete(e), e.dispose());
        }
    }
};

}
