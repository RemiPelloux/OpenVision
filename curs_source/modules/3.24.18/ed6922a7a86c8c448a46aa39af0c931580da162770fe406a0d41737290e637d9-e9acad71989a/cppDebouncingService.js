import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
var B2d;
export { B2d };
var __wakaru_gkt_initialized = false;
export function gkt() {
if (__wakaru_gkt_initialized) return;
__wakaru_gkt_initialized = true;
"use strict";
x(), Js(), B2d = class {
    constructor(e, t, n){
        this.clientDebounceDuration = e, this.totalDebounceDuration = t, this.evictionDuration = n, this.debounceHistory = [];
    }
    setDebouncingDurations({ clientDebounceDuration: e, totalDebounceDuration: t }) {
        this.clientDebounceDuration = e, this.totalDebounceDuration = t;
    }
    pruneOldRequests() {
        const e = performance.now() + performance.timeOrigin, t = [
            ...this.debounceHistory.entries()
        ].reverse();
        for (const [n, i] of t)e - i.startTime > this.evictionDuration && this.debounceHistory.splice(n, 1);
    }
    runRequest() {
        this.pruneOldRequests();
        const e = performance.now() + performance.timeOrigin, t = zn(), n = this.debounceHistory.filter((r)=>r.startTime + this.totalDebounceDuration > e).map((r)=>r.requestId);
        this.debounceHistory.push({
            requestId: t,
            startTime: e
        });
        const i = new AbortController;
        return {
            generationUUID: t,
            startTime: e,
            abortController: i,
            requestIdsToCancel: n
        };
    }
    async shouldDebounce(e, t = !1) {
        const n = [
            ...this.debounceHistory
        ];
        let i = -1;
        for (const [c, l] of n.entries())l.requestId === e && (i = c);
        if (i === -1) return !1;
        const r = performance.now() + performance.timeOrigin, s = n[i], o = r - s.startTime;
        return o < this.clientDebounceDuration && !t ? (await new Promise((c)=>setTimeout(c, this.clientDebounceDuration - o)), await this.shouldDebounce(e, !0)) : i === n.length - 1 ? !1 : n[i + 1].startTime - s.startTime < this.clientDebounceDuration;
    }
};

}
