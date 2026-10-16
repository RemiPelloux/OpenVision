import { h } from "./tslib.es6.js";
function qLe(e, t) {
    return e.suspendTime <= t.resumeTime && t.suspendTime <= e.resumeTime;
}
var jx, Hx, qx;
export { Hx, jx, qLe, qx };
var __wakaru_zx_initialized = false;
export function zx() {
if (__wakaru_zx_initialized) return;
__wakaru_zx_initialized = true;
"use strict";
h(), jx = "vscode:sleepWakeRange", Hx = 32, qx = class {
    constructor(e = {}){
        this._ranges = [], this._maxRanges = e.maxRanges ?? Hx;
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
        for (const r of this._ranges)r.resumeTime >= e && r.suspendTime <= t && n.push(r);
        return n.length > 1 && n.sort((r, s)=>r.suspendTime - s.suspendTime), n;
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
            if (qLe(n, e)) {
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
