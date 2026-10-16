import { qby } from "./SZu.js";
import { E } from "./tslib.es6.js";
var xZu, AZu, RZu;
export { AZu, RZu, xZu };
var __wakaru_MZu_initialized = false;
export function MZu() {
if (__wakaru_MZu_initialized) return;
__wakaru_MZu_initialized = true;
"use strict";
E(), xZu = "vscode:sleepWakeRange", AZu = 32, RZu = class {
    constructor(t = {}){
        this._ranges = [], this._maxRanges = t.maxRanges ?? AZu;
    }
    recordRange(t, e, n = "powerMonitor") {
        !Number.isFinite(t) || !Number.isFinite(e) || e <= t || this._appendRange({
            suspendTime: t,
            resumeTime: e,
            source: n
        });
    }
    getEventsInRange(t, e) {
        if (this._ranges.length === 0 || e < t) return [];
        const n = [];
        for (const i of this._ranges)i.resumeTime >= t && i.suspendTime <= e && n.push(i);
        return n.length > 1 && n.sort((i, r)=>i.suspendTime - r.suspendTime), n;
    }
    _getRangesForTesting() {
        return this._ranges;
    }
    _resetForTesting() {
        this._ranges = [];
    }
    _appendRange(t) {
        for(let e = this._ranges.length - 1; e >= 0; e--){
            const n = this._ranges[e];
            if (qby(n, t)) {
                this._ranges[e] = {
                    suspendTime: Math.min(n.suspendTime, t.suspendTime),
                    resumeTime: Math.max(n.resumeTime, t.resumeTime),
                    source: t.source
                };
                return;
            }
        }
        this._ranges.push(t), this._ranges.length > this._maxRanges && this._ranges.splice(0, this._ranges.length - this._maxRanges);
    }
};

}
