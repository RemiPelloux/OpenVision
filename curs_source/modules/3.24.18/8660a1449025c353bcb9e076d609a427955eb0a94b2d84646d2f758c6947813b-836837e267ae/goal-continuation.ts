import { E } from "./tslib.es6.js";
import { WSm } from "./yBp.js";
var C7a, T7a, GSm, qSm;
export { C7a, GSm, T7a, qSm };
var __wakaru_M91_initialized = false;
export function M91() {
if (__wakaru_M91_initialized) return;
__wakaru_M91_initialized = true;
"use strict";
E(), C7a = 1, T7a = 2, GSm = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, qSm = class {
    constructor(t){
        this.host = t, this.inFlight = new Map, this.requested = new Set;
    }
    async reconcile(t) {
        if (this.inFlight.has(t)) {
            this.requested.add(t);
            return;
        }
        do {
            this.requested.delete(t);
            const e = new AbortController;
            this.inFlight.set(t, e);
            try {
                const n = this.host.getSnapshot(t);
                if (n === void 0 || e.signal.aborted) break;
                const i = WSm(n);
                if (i === void 0) break;
                await this.host.dispatchGoalContinuation({
                    conversationId: t,
                    candidate: i,
                    abortController: e
                });
            } catch (n) {
                this.requested.delete(t), e.signal.aborted || this.host.onError(t, n);
            } finally{
                this.inFlight.get(t) === e && this.inFlight.delete(t);
            }
        }while (this.requested.delete(t))
    }
    cancel(t) {
        this.inFlight.get(t)?.abort(), this.requested.delete(t);
    }
    cancelAll() {
        for (const t of this.inFlight.values())t.abort();
        this.requested.clear();
    }
    dispose() {
        this.cancelAll();
    }
};

}
