import { LSv, MSv, OSv, PSv } from "./A3u.js";
import { bt, ve } from "./HVr.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
var vDd, _Dd, qro, bDd, yDd, SDd, kDd, wDd, MHt, CDd;
export { CDd, MHt, SDd, _Dd, bDd, kDd, qro, vDd, wDd, yDd };
var __wakaru_TDd_initialized = false;
export function TDd() {
if (__wakaru_TDd_initialized) return;
__wakaru_TDd_initialized = true;
"use strict";
x(), lo(), bt(), vDd = 2e3, _Dd = 200, qro = 4e3, bDd = 2e3, yDd = 60, SDd = {
    settle: ()=>{}
}, kDd = {
    enabled: !1,
    recentOps: [],
    aggregates: [],
    totalRequests: 0,
    inFlightCount: 0,
    settledCount: 0,
    errorCount: 0,
    spawnedGitProcessCount: 0,
    runningGitProcessCount: 0,
    series: [],
    startedAt: Date.now(),
    builtAt: Date.now(),
    revision: 0
}, wDd = class {
    constructor(){
        this.listeners = new Set, this._onDidSettleOp = new ve, this.onDidSettleOp = this._onDidSettleOp.event, this.enabled = !1, this.nextId = 1, this.startedAt = Date.now(), this.recent = [], this.aggregates = new Map, this.totalRequests = 0, this.inFlightCount = 0, this.settledCount = 0, this.errorCount = 0, this.spawnedGitProcessCount = 0, this.runningGitProcessCount = 0, this.series = [], this.bucketPeakInFlight = 0, this.bucketPeakRunning = 0, this.revision = 0, this.snapshot = kDd, this.subscribe = (e)=>(this.listeners.add(e), ()=>{
                this.listeners.delete(e);
            }), this.getSnapshot = ()=>this.snapshot;
    }
    isEnabled() {
        return this.enabled;
    }
    setEnabled(e) {
        this.enabled !== e && (this.enabled = e, e ? (this.bucketPeakInFlight = this.inFlightCount, this.bucketPeakRunning = this.runningGitProcessCount, this.startSampling()) : (this.stopSampling(), this.series.length = 0, this.bucketPeakInFlight = 0, this.bucketPeakRunning = 0), this.flushNow());
    }
    begin(e, t, n) {
        if (!this.enabled) return SDd;
        const i = {
            id: this.nextId++,
            op: e,
            args: PSv(t),
            workspaceId: n,
            caller: OSv,
            startedAt: Date.now(),
            startPerf: performance.now(),
            durationMs: void 0,
            status: "ongoing",
            settled: !1
        };
        this.recent.push(i), this.recent.length > vDd && this.recent.shift(), this.totalRequests++, this.inFlightCount++, this.bucketPeakInFlight = Math.max(this.bucketPeakInFlight, this.inFlightCount);
        const r = this.getOrCreateAggregate(e);
        return r.count++, r.inFlight++, this.scheduleFlush(), {
            settle: (s, o)=>this.settle(i, s, o)
        };
    }
    setGitProcessStats(e) {
        const t = Number.isFinite(e.spawnedGitProcessCount) ? e.spawnedGitProcessCount : this.spawnedGitProcessCount, n = Number.isFinite(e.runningGitProcessCount) ? e.runningGitProcessCount : this.runningGitProcessCount;
        t === this.spawnedGitProcessCount && n === this.runningGitProcessCount || (this.spawnedGitProcessCount = t, this.runningGitProcessCount = n, this.bucketPeakRunning = Math.max(this.bucketPeakRunning, this.runningGitProcessCount), this.scheduleFlush());
    }
    settle(e, t, n) {
        if (e.settled) return;
        e.settled = !0;
        const i = Math.max(0, Math.round(performance.now() - e.startPerf));
        e.durationMs = i, e.status = t ? "success" : "error";
        const r = t ? void 0 : MSv(n);
        e.errorName = r, e.errorMessage = t ? void 0 : LSv(n), this.inFlightCount = Math.max(0, this.inFlightCount - 1), this.settledCount++, t || this.errorCount++;
        const s = this.getOrCreateAggregate(e.op);
        s.inFlight = Math.max(0, s.inFlight - 1), s.totalDurationMs += i, s.maxDurationMs = Math.max(s.maxDurationMs, i), t || s.errorCount++, this._onDidSettleOp.fire({
            op: e.op,
            caller: e.caller,
            durationMs: i,
            success: t,
            errorName: r,
            totalRequests: this.totalRequests,
            inFlightCount: this.inFlightCount,
            spawnedGitProcessCount: this.spawnedGitProcessCount,
            runningGitProcessCount: this.runningGitProcessCount
        }), this.scheduleFlush();
    }
    getOrCreateAggregate(e) {
        let t = this.aggregates.get(e);
        return t || (t = {
            op: e,
            count: 0,
            inFlight: 0,
            errorCount: 0,
            totalDurationMs: 0,
            maxDurationMs: 0
        }, this.aggregates.set(e, t)), t;
    }
    scheduleFlush() {
        this.flushHandle === void 0 && (this.flushHandle = setTimeout(()=>{
            this.flushHandle = void 0, this.flushNow();
        }, _Dd));
    }
    flushNow() {
        this.flushHandle !== void 0 && (clearTimeout(this.flushHandle), this.flushHandle = void 0), this.revision++;
        const e = [];
        for(let n = this.recent.length - 1; n >= 0; n--){
            const i = this.recent[n];
            e.push({
                id: i.id,
                op: i.op,
                startedAt: i.startedAt,
                durationMs: i.durationMs,
                status: i.status,
                errorName: i.errorName,
                errorMessage: i.errorMessage,
                args: i.args,
                workspaceId: i.workspaceId,
                caller: i.caller
            });
        }
        const t = [];
        for (const n of this.aggregates.values()){
            const i = n.count - n.inFlight;
            t.push({
                op: n.op,
                count: n.count,
                inFlight: n.inFlight,
                errorCount: n.errorCount,
                totalDurationMs: n.totalDurationMs,
                maxDurationMs: n.maxDurationMs,
                avgDurationMs: i > 0 ? Math.round(n.totalDurationMs / i) : 0
            });
        }
        t.sort((n, i)=>i.count - n.count), this.snapshot = {
            enabled: this.enabled,
            recentOps: e,
            aggregates: t,
            totalRequests: this.totalRequests,
            inFlightCount: this.inFlightCount,
            settledCount: this.settledCount,
            errorCount: this.errorCount,
            spawnedGitProcessCount: this.spawnedGitProcessCount,
            runningGitProcessCount: this.runningGitProcessCount,
            series: this.series.slice(),
            startedAt: this.startedAt,
            builtAt: Date.now(),
            revision: this.revision
        };
        for (const n of this.listeners)n();
        this.updateTick();
    }
    updateTick() {
        const e = this.enabled && this.inFlightCount > 0;
        e && this.tickHandle === void 0 ? this.tickHandle = on.setInterval(()=>this.flushNow(), 500) : !e && this.tickHandle !== void 0 && (on.clearInterval(this.tickHandle), this.tickHandle = void 0);
    }
    startSampling() {
        this.sampleHandle === void 0 && (this.sampleHandle = on.setInterval(()=>this.sampleSeries(), bDd));
    }
    stopSampling() {
        this.sampleHandle !== void 0 && (on.clearInterval(this.sampleHandle), this.sampleHandle = void 0);
    }
    sampleSeries() {
        this.enabled && (this.series.push({
            t: Date.now(),
            inFlight: this.bucketPeakInFlight,
            running: this.bucketPeakRunning
        }), this.series.length > yDd && this.series.shift(), this.bucketPeakInFlight = this.inFlightCount, this.bucketPeakRunning = this.runningGitProcessCount, this.flushNow());
    }
}, MHt = new wDd, CDd = new Set([
    "getGitProcessStats"
]);

}
