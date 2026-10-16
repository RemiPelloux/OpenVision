import { Ei, xr } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var gfg, ffg, vfg;
export { ffg, gfg, vfg };
var __wakaru_skk_initialized = false;
export function skk() {
if (__wakaru_skk_initialized) return;
__wakaru_skk_initialized = true;
"use strict";
E(), Ei(), gfg = 1e4, ffg = 1e4, vfg = class {
    constructor(t, e, n, i = Date.now){
        this.records = t, this.ensurePerAgent = e, this.maxLoadedAgents = n, this.now = i, this.unadoptedRegistrations = new Map, this.lastReleasedAtMsByGeneration = new WeakMap;
    }
    register(t, e) {
        const n = this.ensurePerAgent(t), i = n.loadedAgent;
        if (n.loadedAgentIdleListener?.dispose(), n.loadedAgentIdleListener = e.onDidBecomeIdle(()=>{
            this.lastReleasedAtMsByGeneration.set(e, this.now()), this.evictIdleLoadedAgentsIfNeeded();
        }), n.loadedAgent = e, this.unadoptedRegistrations.set(t, {
            loadedAgent: e,
            registeredAtMs: this.now()
        }), i !== void 0 && i !== e && !i.isDisposed) try {
            i.forceDisposeAsSupersededBy(e);
        } catch (r) {
            xr(r);
        }
        this.evictIdleLoadedAgentsIfNeeded();
    }
    markAdopted(t) {
        this.unadoptedRegistrations.delete(t);
    }
    pruneUnadoptedRegistrations() {
        const t = this.now();
        for (const [e, n] of this.unadoptedRegistrations)(!(!n.loadedAgent.isDisposed && this.records.get(e)?.loadedAgent === n.loadedAgent) || t - n.registeredAtMs >= gfg) && this.unadoptedRegistrations.delete(e);
    }
    evictIdleLoadedAgentsIfNeeded() {
        this.pruneUnadoptedRegistrations();
        let t = 0;
        for (const e of this.records.values())e.loadedAgent && !e.loadedAgent.isDisposed && t++;
        for(; t > this.maxLoadedAgents;){
            const e = this.findIdleLoadedCloudAgentWithOldestLru();
            if (!e) return;
            e.forceDispose("lru_evicted"), t--;
        }
    }
    findIdleLoadedCloudAgentWithOldestLru() {
        const t = this.now();
        let e, n = 1 / 0;
        for (const i of this.records.values()){
            const r = i.loadedAgent;
            if (!r || r.isDisposed || r.hasActiveReferences || this.unadoptedRegistrations.get(r.agentId)?.loadedAgent === r) continue;
            const s = this.lastReleasedAtMsByGeneration.get(r);
            if (s !== void 0 && t - s < ffg) continue;
            const o = r.header.lastUpdatedAt.value;
            o < n && (n = o, e = r);
        }
        return e;
    }
};

}
