import { oOp, w21 } from "./clock.ts";
import { E } from "./tslib.es6.js";
var aOp;
export { aOp };
var __wakaru_C21_initialized = false;
export function C21() {
if (__wakaru_C21_initialized) return;
__wakaru_C21_initialized = true;
"use strict";
E(), w21(), aOp = class {
    constructor(t){
        this.holding = !1, this.detached = !1, this.generation = 0, this.handBacksInFlight = new Set, this.transport = t.transport, this.ttlMs = t.ttlMs, this.onLost = t.onLost, this.clock = t.clock ?? oOp, this.newLeaseId = t.newLeaseId ?? (()=>crypto.randomUUID());
    }
    get isHolding() {
        return this.holding;
    }
    acquire() {
        return this.detached ? Promise.resolve("released") : (this.inFlight ??= this.acquireOnce().finally(()=>{
            this.inFlight = void 0;
        }), this.inFlight);
    }
    attach() {
        this.detached = !1;
    }
    detach() {
        this.detached = !0;
        const t = this.holding;
        this.release(), t && this.onLost();
    }
    release() {
        this.generation += 1, this.stopRenewing();
        const t = this.leaseId;
        this.leaseId = void 0, !(!this.holding || t === void 0) && (this.holding = !1, this.handBack(t));
    }
    handBack(t) {
        const e = this.transport.release(t).catch(()=>{}).finally(()=>this.handBacksInFlight.delete(e));
        this.handBacksInFlight.add(e);
    }
    async awaitHandBacks() {
        const t = new AbortController;
        await Promise.race([
            Promise.all(this.handBacksInFlight),
            this.clock.delay(Math.floor(this.ttlMs / 3), t.signal)
        ]), t.abort();
    }
    async acquireOnce() {
        const t = this.generation;
        this.handBacksInFlight.size > 0 && await this.awaitHandBacks();
        const e = this.leaseId ?? this.newLeaseId();
        let n;
        try {
            n = await this.transport.acquire(e);
        } catch  {
            n = void 0, e !== this.leaseId && this.handBack(e);
        }
        return t !== this.generation ? (n === "held" && this.handBack(e), "released") : n === void 0 ? "denied" : n !== "held" ? n === "busy" ? "denied" : "unsupported" : (this.holding || (this.holding = !0, this.leaseId = e, this.renewLoop = new AbortController, this.renew(this.renewLoop.signal, e, this.clock.now())), "granted");
    }
    stopRenewing() {
        this.renewLoop?.abort(), this.renewLoop = void 0;
    }
    async renew(t, e, n) {
        const i = Math.floor(this.ttlMs / 3);
        let r = n;
        for(; !t.aborted;){
            if (await this.clock.delay(i, t), t.aborted) return;
            const s = this.transport.acquire(e).catch(()=>"unsupported"), o = await this.beforeTtlExpires(s, r);
            if ((t.aborted || o === void 0) && (s.then((a)=>{
                a === "held" && this.leaseId !== e && this.handBack(e);
            }), t.aborted)) return;
            if (o === "held") {
                r = this.clock.now();
                continue;
            }
            if (o === void 0 || o === "busy" || this.clock.now() - r >= this.ttlMs) {
                this.generation += 1, this.stopRenewing(), this.holding = !1, this.leaseId = void 0, o === void 0 && this.handBack(e), this.onLost();
                return;
            }
        }
    }
    async beforeTtlExpires(t, e) {
        const n = new AbortController, i = this.clock.delay(e + this.ttlMs - this.clock.now(), n.signal).then(()=>{});
        try {
            return await Promise.race([
                t,
                i
            ]);
        } finally{
            n.abort();
        }
    }
};

}
