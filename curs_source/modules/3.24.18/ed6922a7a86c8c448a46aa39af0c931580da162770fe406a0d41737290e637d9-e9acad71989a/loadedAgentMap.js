import { ns, si } from "./HVr.js";
import { x } from "./tslib.es6.js";
var RIh, DIh, MIh;
export { DIh, MIh, RIh };
var __wakaru_xt__initialized = false;
export function xt_() {
if (__wakaru_xt__initialized) return;
__wakaru_xt__initialized = true;
"use strict";
x(), si(), RIh = 1e4, DIh = 1e4, MIh = class {
    constructor(e, t, n, i = Date.now){
        this.records = e, this.ensurePerAgent = t, this.maxLoadedAgents = n, this.now = i, this.unadoptedRegistrations = new Map, this.lastReleasedAtMsByGeneration = new WeakMap;
    }
    register(e, t) {
        const n = this.ensurePerAgent(e), i = n.loadedAgent;
        if (n.loadedAgentIdleListener?.dispose(), n.loadedAgentIdleListener = t.onDidBecomeIdle(()=>{
            this.lastReleasedAtMsByGeneration.set(t, this.now()), this.evictIdleLoadedAgentsIfNeeded();
        }), n.loadedAgent = t, this.unadoptedRegistrations.set(e, {
            loadedAgent: t,
            registeredAtMs: this.now()
        }), i !== void 0 && i !== t && !i.isDisposed) try {
            i.forceDisposeAsSupersededBy(t);
        } catch (r) {
            ns(r);
        }
        this.evictIdleLoadedAgentsIfNeeded();
    }
    markAdopted(e) {
        this.unadoptedRegistrations.delete(e);
    }
    pruneUnadoptedRegistrations() {
        const e = this.now();
        for (const [t, n] of this.unadoptedRegistrations)(!(!n.loadedAgent.isDisposed && this.records.get(t)?.loadedAgent === n.loadedAgent) || e - n.registeredAtMs >= RIh) && this.unadoptedRegistrations.delete(t);
    }
    evictIdleLoadedAgentsIfNeeded() {
        this.pruneUnadoptedRegistrations();
        let e = 0;
        for (const t of this.records.values())t.loadedAgent && !t.loadedAgent.isDisposed && e++;
        for(; e > this.maxLoadedAgents;){
            const t = this.findIdleLoadedCloudAgentWithOldestLru();
            if (!t) return;
            t.forceDispose("lru_evicted"), e--;
        }
    }
    findIdleLoadedCloudAgentWithOldestLru() {
        const e = this.now();
        let t, n = 1 / 0;
        for (const i of this.records.values()){
            const r = i.loadedAgent;
            if (!r || r.isDisposed || r.hasActiveReferences || this.unadoptedRegistrations.get(r.agentId)?.loadedAgent === r) continue;
            const s = this.lastReleasedAtMsByGeneration.get(r);
            if (s !== void 0 && e - s < DIh) continue;
            const o = r.header.lastUpdatedAt.value;
            o < n && (n = o, t = r);
        }
        return t;
    }
};

}
