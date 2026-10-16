import { Qe, m1, st, udn } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Evg, dwk, ewk, fwk, gvg, gwk, hwk, jkk, mwk, ovg, svg } from "./Ycg.js";
import { Dc, jl } from "./aiService.js";
import { ZE, qn } from "./async.js";
import { pwk } from "./cloudEnvironmentStartupLoadingState.js";
import { Ag } from "./connectErrors.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Kf, T4e, ca } from "./reactive.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $kk } from "./waterfallFixtures.js";
import { Okk } from "./waterfallStateReducer.js";
import { kvg } from "./waterfallViewModel.js";
import { _j1, rQr } from "./yBp.js";
var Ivg, Eas, vV, Cul, xvg;
export { Cul, Eas, Ivg, vV, xvg };
var __wakaru_Tul_initialized = false;
export function Tul() {
if (__wakaru_Tul_initialized) return;
__wakaru_Tul_initialized = true;
"use strict";
E(), Qe(), qn(), Rn(), It(), Okk(), $kk(), kvg(), Dc(), Ag(), fo(), Kf(), pwk(), Ivg = 300 * 1e3, Eas = Il("cloudEnvironmentLogService"), vV = class extends st {
    constructor(t, e){
        super(), this._aiService = t, this._environmentService = e, this._records = new Map, this._references = new xvg((n)=>this._ensureRecord(n), (n)=>this._ensureAttached(n), (n, i)=>this._releaseRecord(n, i));
    }
    getState(t) {
        const e = this._references.acquire(t);
        let n = !1;
        return {
            get value () {
                return e.object.reactive.value;
            },
            onChange (i) {
                return e.object.reactive.onChange(i);
            },
            dispose: ()=>{
                n || (n = !0, e.dispose());
            }
        };
    }
    getStartupLoadingState(t) {
        const e = this._references.acquire(t), n = new T4e([
            e.object.reactive
        ], (r)=>r.startupLoadingState);
        let i = !1;
        return {
            get value () {
                return n.value;
            },
            onChange (r) {
                return n.onChange(r);
            },
            dispose: ()=>{
                i || (i = !0, m1(n, e));
            }
        };
    }
    peekState(t) {
        return this._records.get(t)?.reactive.value;
    }
    peekWaterfallState(t) {
        return this._records.get(t)?.reactive.value.waterfallState;
    }
    peekWaterfallDebugLog(t) {
        return this._records.get(t)?.waterfallDebugLog ?? [];
    }
    listActiveBcIds() {
        return [
            ...this._records.keys()
        ];
    }
    injectSimulatedWaterfall(t, e) {
        const n = this._ensureRecord(t), i = jkk(e);
        this._clearSimulationTimers(n);
        const r = n.reactive.value.waterfallState;
        n.reactive.set({
            ...n.reactive.value,
            waterfallState: svg(),
            isSimulatingWaterfall: !0
        });
        const s = new Map;
        for (const l of i){
            const c = s.get(l.atMs);
            c ? c.push(l) : s.set(l.atMs, [
                l
            ]);
        }
        let o = 0;
        for (const [l, c] of s){
            o = Math.max(o, l);
            const u = setTimeout(()=>{
                if (n.simulationTimers.delete(u), this._records.get(t) !== n) return;
                const d = n.reactive.value;
                let h = d.waterfallState;
                for (const p of c)h = ovg(h, p.update);
                n.reactive.set({
                    ...d,
                    waterfallState: h
                });
            }, l);
            n.simulationTimers.add(u);
        }
        const a = setTimeout(()=>{
            n.simulationTimers.delete(a), this._records.get(t) === n && n.reactive.set({
                ...n.reactive.value,
                waterfallState: r,
                isSimulatingWaterfall: !1
            });
        }, o + vV.SIMULATION_RESTORE_DELAY_MS);
        n.simulationTimers.add(a);
    }
    _clearSimulationTimers(t) {
        for (const e of t.simulationTimers)clearTimeout(e);
        t.simulationTimers.clear();
    }
    _ensureRecord(t) {
        const e = this._records.get(t);
        if (e) return e;
        const n = {
            bcId: t,
            createdAtMs: Date.now(),
            receivedAnyResponse: !1,
            missingComposerAttempts: 0,
            reactive: new ca({
                bcId: t,
                startupLoadingState: ewk(),
                waterfallState: svg(),
                isSimulatingWaterfall: !1,
                currentSetupPhase: void 0
            }),
            seenEventIds: new Set,
            lastNonDockerBuildEventId: void 0,
            lastDockerBuildEventId: void 0,
            disposeTimer: new ZE,
            detachTimer: new ZE,
            simulationTimers: new Set,
            waterfallDebugLog: [],
            pendingLogUpdates: []
        };
        return this._records.set(t, n), n;
    }
    setMachineLogAttachPredicate(t) {
        this._machineLogAttachPredicate = t;
    }
    _ensureAttached(t) {
        if (t.disposeTimer.cancel(), t.detachTimer.cancel(), t.attachPromise || this._machineLogAttachPredicate?.(t.bcId) === !1) return;
        const e = new AbortController;
        t.attachAbortController = e, t.attachPromise = this._attachLoop(t, e.signal).finally(()=>{
            t.attachAbortController === e && this._detach(t);
        });
    }
    _detach(t) {
        t.attachAbortController?.abort(), t.attachAbortController = void 0, t.attachPromise = void 0, this._flushPendingLogUpdatesNow(t);
    }
    _releaseRecord(t, e) {
        e.detachTimer.cancelAndSet(()=>{
            this._records.get(t) === e && this._detach(e);
        }, vV.DETACH_DELAY_MS), e.disposeTimer.cancelAndSet(()=>{
            this._records.get(t) === e && (this._detach(e), this._records.delete(t), this._clearSimulationTimers(e), e.disposeTimer.dispose(), e.detachTimer.dispose());
        }, vV.RECORD_DISPOSE_DELAY_MS);
    }
    async _attachLoop(t, e) {
        for(; !e.aborted;){
            if (this._machineLogAttachPredicate?.(t.bcId) === !1) return;
            try {
                const n = this._aiService.backgroundComposerSyncClient, i = t.lastNonDockerBuildEventId, r = t.lastDockerBuildEventId, s = n.attachBackgroundComposerLogs({
                    bcId: t.bcId,
                    lastEventId: i,
                    lastDockerBuildEventId: r
                }, {
                    signal: e
                });
                let o = 0;
                for await (const a of s)o += 1, t.receivedAnyResponse = !0, t.pendingLogUpdates.push({
                    event: a.event
                }), this._scheduleLogFlush(t);
                if (this._flushPendingLogUpdatesNow(t), e.aborted || !mwk({
                    setupComplete: this._isSetupStreamComplete(t),
                    eventsReceived: o
                })) return;
                await this._sleep(vV.REATTACH_DELAY_MS, e);
            } catch (n) {
                if (e.aborted) return;
                if (rQr(n) === "terminal") {
                    if (_j1(n) && gwk({
                        receivedAnyResponse: t.receivedAnyResponse,
                        recordAgeMs: Date.now() - t.createdAtMs
                    })) {
                        const r = Math.min(vV.REATTACH_DELAY_MS * 2 ** t.missingComposerAttempts, vV.MISSING_COMPOSER_MAX_RETRY_DELAY_MS);
                        t.missingComposerAttempts += 1, await this._sleep(r, e);
                        continue;
                    }
                    return;
                }
                await this._sleep(vV.REATTACH_DELAY_MS, e);
            }
        }
    }
    _isSetupStreamComplete(t) {
        const { waterfallState: e, startupLoadingState: n } = t.reactive.value;
        if (e.spans.length > 0) {
            const i = gvg(e);
            return Evg({
                hasWaterfallSpans: !0,
                waterfallComplete: i.isComplete,
                waterfallFailed: i.overallStatus === "failed",
                legacyStartupCompleted: !1
            });
        }
        return Evg({
            hasWaterfallSpans: !1,
            waterfallComplete: !1,
            waterfallFailed: !1,
            legacyStartupCompleted: n.substates.completion.startupCompleted === !0 || n.status === "completed"
        });
    }
    _scheduleLogFlush(t) {
        const e = Date.now();
        t.firstPendingLogAtMs ??= e;
        const n = t.firstPendingLogAtMs + vV.LOG_FLUSH_MAX_WAIT_MS, i = Math.max(0, Math.min(vV.LOG_FLUSH_QUIET_MS, n - e));
        t.logFlushTimer !== void 0 && clearTimeout(t.logFlushTimer), t.logFlushTimer = setTimeout(()=>{
            if (t.logFlushTimer = void 0, t.firstPendingLogAtMs = void 0, this._records.get(t.bcId) !== t) return;
            const r = t.pendingLogUpdates.splice(0, t.pendingLogUpdates.length);
            r.length > 0 && this._applyLogUpdates(t, r);
        }, i);
    }
    _flushPendingLogUpdatesNow(t) {
        t.logFlushTimer !== void 0 && (clearTimeout(t.logFlushTimer), t.logFlushTimer = void 0), t.firstPendingLogAtMs = void 0;
        const e = t.pendingLogUpdates.splice(0, t.pendingLogUpdates.length);
        e.length > 0 && this._records.get(t.bcId) === t && this._applyLogUpdates(t, e);
    }
    _recordWaterfallDebugEntry(t, e) {
        if (this._environmentService.isBuilt) return;
        const n = Date.now();
        let i, r;
        if (e.waterfallUpdate) {
            const s = e.waterfallUpdate;
            i = `waterfall:${s.update?.case ?? "unknown"}`, r = s;
        } else if (e.event) {
            i = `pod:${e.event.payload?.case ?? "unknown"}`;
            const s = e.event.payload;
            r = s?.case === "spanStarted" || s?.case === "spanEnded" ? {
                creationTimestamp: String(e.event.creationTimestamp),
                ...s.value
            } : s?.case === "installCommand" ? {
                creationTimestamp: String(e.event.creationTimestamp),
                name: s.value.name,
                isSystem: s.value.isSystem
            } : {
                creationTimestamp: String(e.event.creationTimestamp)
            };
        } else return;
        t.waterfallDebugLog.push({
            arrivedAtMs: n,
            eventId: e.eventId,
            kind: i,
            detail: r
        }), t.waterfallDebugLog.length > Cul && t.waterfallDebugLog.splice(0, t.waterfallDebugLog.length - Cul);
    }
    _applyLogUpdates(t, e) {
        const n = t.reactive.value;
        let i = n.startupLoadingState, r = n.waterfallState;
        for (const o of e)if (o.event) {
            this._recordWaterfallDebugEntry(t, o.event);
            const a = o.event.eventId;
            (a === void 0 || !t.seenEventIds.has(a)) && (a !== void 0 && t.seenEventIds.add(a), a !== void 0 && a.startsWith("docker-build:") ? t.lastDockerBuildEventId = a : t.lastNonDockerBuildEventId = a), o.event.event && (i = dwk(i, o.event.event, o.event.eventId));
            const l = o.event.waterfallUpdate;
            l && (r = ovg(r, l));
        }
        const s = hwk(i);
        t.reactive.set({
            bcId: n.bcId,
            startupLoadingState: i,
            waterfallState: r,
            isSimulatingWaterfall: n.isSimulatingWaterfall,
            currentSetupPhase: s !== void 0 ? fwk(s) : void 0
        });
    }
    async _sleep(t, e) {
        await new Promise((n)=>{
            const i = setTimeout(()=>{
                e.removeEventListener("abort", r), n();
            }, t), r = ()=>{
                clearTimeout(i), e.removeEventListener("abort", r), n();
            };
            e.addEventListener("abort", r, {
                once: !0
            });
        });
    }
    dispose() {
        const t = [];
        for (const e of this._records.values())this._clearSimulationTimers(e), t.push(e.disposeTimer, e.detachTimer);
        try {
            m1(...t);
        } finally{
            for (const e of this._records.values())this._detach(e);
            this._records.clear(), super.dispose();
        }
    }
}, vV.RECORD_DISPOSE_DELAY_MS = 240 * 1e3, vV.DETACH_DELAY_MS = 100, vV.REATTACH_DELAY_MS = 1e3, vV.MISSING_COMPOSER_MAX_RETRY_DELAY_MS = 15e3, vV.SIMULATION_RESTORE_DELAY_MS = 3e4, vV.LOG_FLUSH_QUIET_MS = 150, vV.LOG_FLUSH_MAX_WAIT_MS = 400, vV = Re([
    F(0, jl),
    F(1, ps)
], vV), bn(Eas, vV, 1, 1), Cul = 4e3, xvg = class extends udn {
    constructor(t, e, n){
        super(), this.ensureRecord = t, this.attach = e, this.releaseRecord = n;
    }
    createReferencedObject(t) {
        const e = this.ensureRecord(t);
        return this.attach(e), e;
    }
    destroyReferencedObject(t, e) {
        this.releaseRecord(t, e);
    }
};

}
