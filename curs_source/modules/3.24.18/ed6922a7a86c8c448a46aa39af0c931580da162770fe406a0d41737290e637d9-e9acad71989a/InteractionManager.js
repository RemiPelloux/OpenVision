import { GTc, xjr } from "./interactionCountPolyfill.js";
import { x } from "./tslib.es6.js";
var Epi, Ijr, VTc, jTc;
export { Epi, Ijr, VTc, jTc };
var __wakaru_Mcg_initialized = false;
export function Mcg() {
if (__wakaru_Mcg_initialized) return;
__wakaru_Mcg_initialized = true;
"use strict";
x(), GTc(), Epi = 10, Ijr = 0, VTc = ()=>xjr() - Ijr, jTc = class {
    constructor(){
        this._longestInteractionList = [], this._longestInteractionMap = new Map;
    }
    _resetInteractions() {
        Ijr = xjr(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear();
    }
    _estimateP98LongestInteraction() {
        const e = Math.min(this._longestInteractionList.length - 1, Math.floor(VTc() / 50));
        return this._longestInteractionList[e];
    }
    _processEntry(e) {
        if (this._onBeforeProcessingEntry?.(e), !(e.interactionId || e.entryType === "first-input")) return;
        const t = this._longestInteractionList.at(-1);
        let n = this._longestInteractionMap.get(e.interactionId);
        if (n || this._longestInteractionList.length < Epi || e.duration > t._latency) {
            if (n ? e.duration > n._latency ? (n.entries = [
                e
            ], n._latency = e.duration) : e.duration === n._latency && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                id: e.interactionId,
                entries: [
                    e
                ],
                _latency: e.duration
            }, this._longestInteractionMap.set(n.id, n), this._longestInteractionList.push(n)), this._longestInteractionList.sort((i, r)=>r._latency - i._latency), this._longestInteractionList.length > Epi) {
                const i = this._longestInteractionList.splice(Epi);
                for (const r of i)this._longestInteractionMap.delete(r.id);
            }
            this._onAfterProcessingINPCandidate?.(n);
        }
    }
};

}
