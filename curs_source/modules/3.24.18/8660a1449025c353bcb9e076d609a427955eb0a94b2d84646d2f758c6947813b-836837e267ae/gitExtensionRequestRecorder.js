import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
import { DF1, GKr, MF1, NF1 } from "./yBp.js";
var Qbm, Jbm, e7a, eym, tym, nym, iym, rym, dot, sym;
export { Jbm, Qbm, dot, e7a, eym, iym, nym, rym, sym, tym };
var __wakaru_qKr_initialized = false;
export function qKr() {
if (__wakaru_qKr_initialized) return;
__wakaru_qKr_initialized = true;
"use strict";
E(), Bs(), Gt(), Qbm = 2e3, Jbm = 200, e7a = 4e3, eym = 2e3, tym = 60, nym = {
    settle: ()=>{}
}, iym = {
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
}, rym = class {
    constructor(){
        this.listeners = new Set, this._onDidSettleOp = new tt, this.onDidSettleOp = this._onDidSettleOp.event, this.enabled = !1, this.nextId = 1, this.startedAt = Date.now(), this.recent = [], this.aggregates = new Map, this.totalRequests = 0, this.inFlightCount = 0, this.settledCount = 0, this.errorCount = 0, this.spawnedGitProcessCount = 0, this.runningGitProcessCount = 0, this.series = [], this.bucketPeakInFlight = 0, this.bucketPeakRunning = 0, this.revision = 0, this.snapshot = iym, this.subscribe = (t)=>(this.listeners.add(t), ()=>{
                this.listeners.delete(t);
            }), this.getSnapshot = ()=>this.snapshot;
    }
    isEnabled() {
        return this.enabled;
    }
    setEnabled(t) {
        this.enabled !== t && (this.enabled = t, t ? (this.bucketPeakInFlight = this.inFlightCount, this.bucketPeakRunning = this.runningGitProcessCount, this.startSampling()) : (this.stopSampling(), this.series.length = 0, this.bucketPeakInFlight = 0, this.bucketPeakRunning = 0), this.flushNow());
    }
    begin(t, e, n) {
        if (!this.enabled) return nym;
        const i = {
            id: this.nextId++,
            op: t,
            args: DF1(e),
            workspaceId: n,
            caller: GKr,
            startedAt: Date.now(),
            startPerf: performance.now(),
            durationMs: void 0,
            status: "ongoing",
            settled: !1
        };
        this.recent.push(i), this.recent.length > Qbm && this.recent.shift(), this.totalRequests++, this.inFlightCount++, this.bucketPeakInFlight = Math.max(this.bucketPeakInFlight, this.inFlightCount);
        const r = this.getOrCreateAggregate(t);
        return r.count++, r.inFlight++, this.scheduleFlush(), {
            settle: (s, o)=>this.settle(i, s, o)
        };
    }
    setGitProcessStats(t) {
        const e = Number.isFinite(t.spawnedGitProcessCount) ? t.spawnedGitProcessCount : this.spawnedGitProcessCount, n = Number.isFinite(t.runningGitProcessCount) ? t.runningGitProcessCount : this.runningGitProcessCount;
        e === this.spawnedGitProcessCount && n === this.runningGitProcessCount || (this.spawnedGitProcessCount = e, this.runningGitProcessCount = n, this.bucketPeakRunning = Math.max(this.bucketPeakRunning, this.runningGitProcessCount), this.scheduleFlush());
    }
    settle(t, e, n) {
        if (t.settled) return;
        t.settled = !0;
        const i = Math.max(0, Math.round(performance.now() - t.startPerf));
        t.durationMs = i, t.status = e ? "success" : "error";
        const r = e ? void 0 : MF1(n);
        t.errorName = r, t.errorMessage = e ? void 0 : NF1(n), this.inFlightCount = Math.max(0, this.inFlightCount - 1), this.settledCount++, e || this.errorCount++;
        const s = this.getOrCreateAggregate(t.op);
        s.inFlight = Math.max(0, s.inFlight - 1), s.totalDurationMs += i, s.maxDurationMs = Math.max(s.maxDurationMs, i), e || s.errorCount++, this._onDidSettleOp.fire({
            op: t.op,
            caller: t.caller,
            durationMs: i,
            success: e,
            errorName: r,
            totalRequests: this.totalRequests,
            inFlightCount: this.inFlightCount,
            spawnedGitProcessCount: this.spawnedGitProcessCount,
            runningGitProcessCount: this.runningGitProcessCount
        }), this.scheduleFlush();
    }
    getOrCreateAggregate(t) {
        let e = this.aggregates.get(t);
        return e || (e = {
            op: t,
            count: 0,
            inFlight: 0,
            errorCount: 0,
            totalDurationMs: 0,
            maxDurationMs: 0
        }, this.aggregates.set(t, e)), e;
    }
    scheduleFlush() {
        this.flushHandle === void 0 && (this.flushHandle = setTimeout(()=>{
            this.flushHandle = void 0, this.flushNow();
        }, Jbm));
    }
    flushNow() {
        this.flushHandle !== void 0 && (clearTimeout(this.flushHandle), this.flushHandle = void 0), this.revision++;
        const t = [];
        for(let n = this.recent.length - 1; n >= 0; n--){
            const i = this.recent[n];
            t.push({
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
        const e = [];
        for (const n of this.aggregates.values()){
            const i = n.count - n.inFlight;
            e.push({
                op: n.op,
                count: n.count,
                inFlight: n.inFlight,
                errorCount: n.errorCount,
                totalDurationMs: n.totalDurationMs,
                maxDurationMs: n.maxDurationMs,
                avgDurationMs: i > 0 ? Math.round(n.totalDurationMs / i) : 0
            });
        }
        e.sort((n, i)=>i.count - n.count), this.snapshot = {
            enabled: this.enabled,
            recentOps: t,
            aggregates: e,
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
        const t = this.enabled && this.inFlightCount > 0;
        t && this.tickHandle === void 0 ? this.tickHandle = $t.setInterval(()=>this.flushNow(), 500) : !t && this.tickHandle !== void 0 && ($t.clearInterval(this.tickHandle), this.tickHandle = void 0);
    }
    startSampling() {
        this.sampleHandle === void 0 && (this.sampleHandle = $t.setInterval(()=>this.sampleSeries(), eym));
    }
    stopSampling() {
        this.sampleHandle !== void 0 && ($t.clearInterval(this.sampleHandle), this.sampleHandle = void 0);
    }
    sampleSeries() {
        this.enabled && (this.series.push({
            t: Date.now(),
            inFlight: this.bucketPeakInFlight,
            running: this.bucketPeakRunning
        }), this.series.length > tym && this.series.shift(), this.bucketPeakInFlight = this.inFlightCount, this.bucketPeakRunning = this.runningGitProcessCount, this.flushNow());
    }
}, dot = new rym, sym = new Set([
    "getGitProcessStats"
]);

}
