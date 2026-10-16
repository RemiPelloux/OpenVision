"use strict";
require.d(exports, {
    r: ()=>d
});
var n = require("./module-64972.js"), s = require("./module-51181.js"), i = require("./module-79892.js");
class o {
    x = i.f.delay();
    computeNextBackoffDelay(e) {
        const t = Math.random() * Math.min(this.x * 2 ** e, s.G8);
        return Math.floor(t);
    }
    setDelayBase(e) {
        this.x = e;
    }
}
class a {
    delay;
    count;
    cost;
    longPoll;
    constructor(e, t, r, n){
        this.delay = e, this.count = t, this.cost = r, this.longPoll = n;
    }
    getRetryCount() {
        return this.count;
    }
    getRetryDelay() {
        return Math.min(s.G8, this.delay);
    }
    getRetryCost() {
        return this.cost;
    }
    isLongPoll() {
        return this.longPoll;
    }
}
const c = 1, l = 2, u = 3;
class d {
    mode = n.cm.STANDARD;
    capacity = s.Df;
    retryBackoffStrategy;
    maxAttemptsProvider;
    baseDelay;
    constructor(e){
        "number" == typeof e ? this.maxAttemptsProvider = async ()=>e : "function" == typeof e ? this.maxAttemptsProvider = e : e && "object" == typeof e && (this.maxAttemptsProvider = async ()=>e.maxAttempts, this.baseDelay = e.baseDelay, this.retryBackoffStrategy = e.backoff), this.maxAttemptsProvider ??= async ()=>n.Gz, this.baseDelay ??= i.f.delay(), this.retryBackoffStrategy ??= new o;
    }
    async acquireInitialRetryToken(e) {
        return new a(i.f.delay(), 0, void 0, i.f.v2026 && e.includes(":longpoll"));
    }
    async refreshRetryTokenForRetry(e, t) {
        const r = await this.getMaxAttempts(), n = this.retryCode(e, t, r), s = 0 === n, o = e.isLongPoll?.();
        if (s || o) {
            const r = t.errorType;
            this.retryBackoffStrategy.setDelayBase("THROTTLING" === r ? i.f.throttlingDelay() : this.baseDelay);
            const c = this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount());
            let l = c;
            if (t.retryAfterHint instanceof Date && (l = Math.max(c, Math.min(t.retryAfterHint.getTime() - Date.now(), c + 5e3))), s) {
                const t = this.getCapacityCost(r);
                return this.capacity -= t, new a(l, e.getRetryCount() + 1, t, e.isLongPoll?.() ?? !1);
            }
            throw Object.assign(new Error("No retry token available"), {
                $backoff: i.f.v2026 && n === u && o ? l : 0
            });
        }
        throw new Error("No retry token available");
    }
    recordSuccess(e) {
        this.capacity = Math.min(s.Df, this.capacity + (e.getRetryCost() ?? s.XP));
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
            return console.warn(`Max attempts provider could not resolve. Using default of ${n.Gz}`), n.Gz;
        }
    }
    retryCode(e, t, r) {
        const n = e.getRetryCount() + 1, s = this.isRetryableError(t.errorType) ? 0 : c, i = n < r ? 0 : l, o = this.capacity >= this.getCapacityCost(t.errorType) ? 0 : u;
        return s || i || o;
    }
    getCapacityCost(e) {
        return e === i.f.modifiedCostType() ? i.f.throttlingCost() : i.f.cost();
    }
    isRetryableError(e) {
        return "THROTTLING" === e || "TRANSIENT" === e;
    }
}
