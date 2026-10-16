import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { du, kv } from "./map.js";
import { sk, vb } from "./solidEventsWrapper.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
var tNn, Hws;
export { Hws, tNn };
var __wakaru_LNi_initialized = false;
export function LNi() {
if (__wakaru_LNi_initialized) return;
__wakaru_LNi_initialized = true;
"use strict";
E(), Xo(), du(), Qe(), sk(), It(), Rn(), Ji(), Zi(), tNn = Il("aiGenerationRegistryService"), Hws = class extends st {
    constructor(t, e){
        super(), this._storageService = t, this._logService = e, this.inprogressAIGenerations = this._register(new vb([])), this.streamingAbortControllers = new Map, this.generationCache = new kv(50), this.GENERATIONS_STORAGE_KEY = "aiService.generations", this.loadGenerationsFromStorage();
        let n = [
            ...this.inprogressAIGenerations.value
        ];
        this._register(this.inprogressAIGenerations.event((i)=>{
            const r = i.map((s)=>s.generationUUID);
            for (const [s, o] of this.streamingAbortControllers)if (!r.includes(s)) {
                const a = n.find((c)=>c.generationUUID === s);
                a?.metadata?.type === "composer" && a?.metadata?.isNAL || o.abort(), this.streamingAbortControllers.delete(s);
            }
            n = [
                ...i
            ];
        })), this._register(this._storageService.onWillSaveState(()=>{
            this.saveGenerationsToStorage();
        }));
    }
    getPastGenerations() {
        return Array.from(this.generationCache.values()).sort((t, e)=>e.unixMs - t.unixMs);
    }
    clearGenerationCache() {
        this.generationCache.clear(), this._storageService.store(this.GENERATIONS_STORAGE_KEY, JSON.stringify([]), 1, 1);
    }
    registerNewGeneration(t) {
        this.streamingAbortControllers.size > 100 && (console.warn("There are more than 100 streaming abort controllers. This should not happen unless the user is starting a massive amount of generations in parallel. Clearing all of them."), this.streamingAbortControllers.clear());
        const e = t.generationUUID ?? Ai(), n = new AbortController;
        this.streamingAbortControllers.set(e, n), this.inprogressAIGenerations.change([
            ...this.inprogressAIGenerations.value,
            {
                generationUUID: e,
                metadata: t.metadata ?? {
                    type: void 0
                },
                queuePositionResponse: void 0,
                rerunQuery: t.rerunQuery
            }
        ]);
        const i = t.metadata !== void 0 && "textDescription" in t.metadata ? t.metadata.textDescription : void 0, r = 100 * 1024, s = i !== void 0 && i.length > r ? i.slice(0, r) : i;
        return this.generationCache.set(e, {
            unixMs: Date.now(),
            generationUUID: e,
            type: t.metadata?.type,
            textDescription: s
        }), this.saveGenerationsToStorage(), [
            e,
            n
        ];
    }
    removeInprogressAIGeneration(t) {
        const e = this.inprogressAIGenerations.value.filter((n)=>n.generationUUID !== t);
        e.length !== this.inprogressAIGenerations.value.length && this.inprogressAIGenerations.change(e);
    }
    getGenerationMetadata(t) {
        return this.inprogressAIGenerations.value.find((n)=>n.generationUUID === t)?.metadata;
    }
    loadGenerationsFromStorage() {
        const t = this._storageService.get(this.GENERATIONS_STORAGE_KEY, 1, "[]");
        try {
            const e = JSON.parse(t);
            if (!Array.isArray(e)) throw new Error("Stored generation cache is not an array");
            e.forEach((n)=>this.generationCache.set(n.generationUUID, n));
        } catch (e) {
            this._logService.warn("[AIGenerationRegistryService] Failed to load generation cache; resetting it.", e), this.clearGenerationCache();
        }
    }
    saveGenerationsToStorage() {
        const t = Array.from(this.generationCache.values());
        this._storageService.store(this.GENERATIONS_STORAGE_KEY, JSON.stringify(t), 1, 1);
    }
}, Hws = Re([
    F(0, ki),
    F(1, Li)
], Hws), bn(tNn, Hws, 1, 1);

}
