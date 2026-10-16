import { PLn, c5i, l5i } from "./agentStoreTasksBrief.js";
import { AI, qn } from "./async.js";
import { E } from "./tslib.es6.js";
var uVl, imv, rmv;
export { imv, rmv, uVl };
var __wakaru_smv_initialized = false;
export function smv() {
if (__wakaru_smv_initialized) return;
__wakaru_smv_initialized = true;
"use strict";
E(), qn(), c5i(), uVl = [
    PLn,
    l5i
], imv = 6e4, rmv = class {
    constructor(t){
        this.options = t, this.timer = new AI, this.started = !1, this.inFlight = !1, this.disposed = !1, this.consecutiveFailures = 0, this.ticksFired = 0, this.ticksSkipped = 0;
    }
    start() {
        return this.disposed || this.started ? this : (this.started = !0, this.arm(), this);
    }
    get intervalMs() {
        return Math.max(this.options.intervalMs, Math.min(imv, this.options.intervalMs * 2 ** this.consecutiveFailures));
    }
    get stats() {
        return {
            fired: this.ticksFired,
            skipped: this.ticksSkipped
        };
    }
    arm() {
        this.timer.cancelAndSet(()=>{
            this.fire();
        }, this.intervalMs);
    }
    async fire() {
        if (this.disposed) return;
        if (this.inFlight) {
            this.ticksSkipped += 1;
            return;
        }
        this.inFlight = !0, this.ticksFired += 1;
        let t;
        try {
            t = await this.options.tick();
        } catch  {
            t = void 0;
        } finally{
            this.inFlight = !1;
        }
        if (this.disposed) return;
        const e = this.intervalMs, n = t === void 0 || this.options.isFailure(t);
        this.consecutiveFailures = n ? this.consecutiveFailures + 1 : 0, this.intervalMs !== e && this.arm(), this.options.onTick?.(t);
    }
    dispose() {
        this.disposed = !0, this.timer.dispose();
    }
};

}
