import { E } from "./tslib.es6.js";
import { Ai, Xo } from "./uuid_2.js";
var a0m;
export { a0m };
var __wakaru__Gt_initialized = false;
export function _Gt() {
if (__wakaru__Gt_initialized) return;
__wakaru__Gt_initialized = true;
"use strict";
E(), Xo(), a0m = class {
    constructor(t, e, n){
        this.clientDebounceDuration = t, this.totalDebounceDuration = e, this.evictionDuration = n, this.debounceHistory = [];
    }
    setDebouncingDurations({ clientDebounceDuration: t, totalDebounceDuration: e }) {
        this.clientDebounceDuration = t, this.totalDebounceDuration = e;
    }
    pruneOldRequests() {
        const t = performance.now() + performance.timeOrigin, e = [
            ...this.debounceHistory.entries()
        ].reverse();
        for (const [n, i] of e)t - i.startTime > this.evictionDuration && this.debounceHistory.splice(n, 1);
    }
    runRequest() {
        this.pruneOldRequests();
        const t = performance.now() + performance.timeOrigin, e = Ai(), n = this.debounceHistory.filter((r)=>r.startTime + this.totalDebounceDuration > t).map((r)=>r.requestId);
        this.debounceHistory.push({
            requestId: e,
            startTime: t
        });
        const i = new AbortController;
        return {
            generationUUID: e,
            startTime: t,
            abortController: i,
            requestIdsToCancel: n
        };
    }
    async shouldDebounce(t, e = !1) {
        const n = [
            ...this.debounceHistory
        ];
        let i = -1;
        for (const [l, c] of n.entries())c.requestId === t && (i = l);
        if (i === -1) return !1;
        const r = performance.now() + performance.timeOrigin, s = n[i], o = r - s.startTime;
        return o < this.clientDebounceDuration && !e ? (await new Promise((l)=>setTimeout(l, this.clientDebounceDuration - o)), await this.shouldDebounce(t, !0)) : i === n.length - 1 ? !1 : n[i + 1].startTime - s.startTime < this.clientDebounceDuration;
    }
};

}
