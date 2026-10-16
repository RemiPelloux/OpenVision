import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var Jdc, ehc, AQv;
export { AQv, Jdc, ehc };
var __wakaru_RQv_initialized = false;
export function RQv() {
if (__wakaru_RQv_initialized) return;
__wakaru_RQv_initialized = true;
"use strict";
E(), Gt(), Qe(), Rn(), It(), Jdc = jn("glassPlanCachingService"), ehc = class KMb extends st {
    constructor(){
        super(...arguments), this._latestPlanByAgentId = new Map, this._onDidChangeLatestPlan = this._register(new tt), this.onDidChangeLatestPlan = this._onDidChangeLatestPlan.event;
    }
    getLatestPlan(e) {
        return e ? this._latestPlanByAgentId.get(e) ?? null : null;
    }
    setLatestPlan(e, n) {
        if ((this._latestPlanByAgentId.get(e) ?? null) === n) {
            n !== null && this._markAgentAsRecentlyUsed(e, n);
            return;
        }
        const r = [];
        n === null ? this._latestPlanByAgentId.delete(e) : (this._markAgentAsRecentlyUsed(e, n), r.push(...this._trimOldestPlans())), this._onDidChangeLatestPlan.fire(e);
        for (const s of r)this._onDidChangeLatestPlan.fire(s);
    }
    _markAgentAsRecentlyUsed(e, n) {
        this._latestPlanByAgentId.has(e) && this._latestPlanByAgentId.delete(e), this._latestPlanByAgentId.set(e, n);
    }
    _trimOldestPlans() {
        const e = [];
        for(; this._latestPlanByAgentId.size > KMb.MAX_CACHED_AGENTS;){
            const n = this._latestPlanByAgentId.keys().next().value;
            if (!n) break;
            this._latestPlanByAgentId.delete(n), e.push(n);
        }
        return e;
    }
}, ehc.MAX_CACHED_AGENTS = 32, AQv = ehc, bn(Jdc, AQv, 1);

}
