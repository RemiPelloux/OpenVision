import { cdg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var JIc, eAc, tAc;
export { JIc, eAc, tAc };
var __wakaru_iAc_initialized = false;
export function iAc() {
if (__wakaru_iAc_initialized) return;
__wakaru_iAc_initialized = true;
"use strict";
x(), JIc = "vscode:sleepWakeRange", eAc = 32, tAc = class {
    constructor(e = {}){
        this._ranges = [], this._maxRanges = e.maxRanges ?? eAc;
    }
    recordRange(e, t, n = "powerMonitor") {
        !Number.isFinite(e) || !Number.isFinite(t) || t <= e || this._appendRange({
            suspendTime: e,
            resumeTime: t,
            source: n
        });
    }
    getEventsInRange(e, t) {
        if (this._ranges.length === 0 || t < e) return [];
        const n = [];
        for (const i of this._ranges)i.resumeTime >= e && i.suspendTime <= t && n.push(i);
        return n.length > 1 && n.sort((i, r)=>i.suspendTime - r.suspendTime), n;
    }
    _getRangesForTesting() {
        return this._ranges;
    }
    _resetForTesting() {
        this._ranges = [];
    }
    _appendRange(e) {
        for(let t = this._ranges.length - 1; t >= 0; t--){
            const n = this._ranges[t];
            if (cdg(n, e)) {
                this._ranges[t] = {
                    suspendTime: Math.min(n.suspendTime, e.suspendTime),
                    resumeTime: Math.max(n.resumeTime, e.resumeTime),
                    source: e.source
                };
                return;
            }
        }
        this._ranges.push(e), this._ranges.length > this._maxRanges && this._ranges.splice(0, this._ranges.length - this._maxRanges);
    }
};

}
