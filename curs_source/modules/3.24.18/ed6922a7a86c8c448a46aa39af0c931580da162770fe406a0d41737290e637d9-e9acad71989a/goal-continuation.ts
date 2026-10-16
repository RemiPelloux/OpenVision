import { pPd } from "./A3u.js";
import { x } from "./tslib.es6.js";
var gso, mPd, gPd, fPd;
export { fPd, gPd, gso, mPd };
var __wakaru_PCv_initialized = false;
export function PCv() {
if (__wakaru_PCv_initialized) return;
__wakaru_PCv_initialized = true;
"use strict";
x(), gso = 1, mPd = 2, gPd = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, fPd = class {
    constructor(e){
        this.host = e, this.inFlight = new Map, this.requested = new Set;
    }
    async reconcile(e) {
        if (this.inFlight.has(e)) {
            this.requested.add(e);
            return;
        }
        do {
            this.requested.delete(e);
            const t = new AbortController;
            this.inFlight.set(e, t);
            try {
                const n = this.host.getSnapshot(e);
                if (n === void 0 || t.signal.aborted) break;
                const i = pPd(n);
                if (i === void 0) break;
                await this.host.dispatchGoalContinuation({
                    conversationId: e,
                    candidate: i,
                    abortController: t
                });
            } catch (n) {
                this.requested.delete(e), t.signal.aborted || this.host.onError(e, n);
            } finally{
                this.inFlight.get(e) === t && this.inFlight.delete(e);
            }
        }while (this.requested.delete(e))
    }
    cancel(e) {
        this.inFlight.get(e)?.abort(), this.requested.delete(e);
    }
    cancelAll() {
        for (const e of this.inFlight.values())e.abort();
        this.requested.clear();
    }
    dispose() {
        this.cancelAll();
    }
};

}
