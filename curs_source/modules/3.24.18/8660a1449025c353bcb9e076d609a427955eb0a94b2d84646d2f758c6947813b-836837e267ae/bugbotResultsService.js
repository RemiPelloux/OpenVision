import { Gt, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { eee } from "./Ycg.js";
import { yPn } from "./agentReviewLifecycleLog.js";
import { Rn } from "./extensions.js";
import { It, dn } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { MB } from "./pathUtils.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { Y6e } from "./yBp.js";
var OVe, Lms;
export { Lms, OVe };
var __wakaru_wIt_initialized = false;
export function wIt() {
if (__wakaru_wIt_initialized) return;
__wakaru_wIt_initialized = true;
"use strict";
E(), Gt(), It(), Rn(), Ji(), Sr(), MB(), yPn(), OVe = jn("bugbotResultsService"), Lms = class {
    constructor(t, e, n){
        this.workspaceContextService = e, this.logService = n, this.snapshot = void 0, this.abortController = void 0, this.cancelRequested = !1, this.runCounter = 0, this.dismissedBugIdsByRun = new Map, this._onDidChange = new tt, this.onDidChange = this._onDidChange.event;
    }
    getSnapshot() {
        return this.snapshot;
    }
    beginRun(t) {
        const e = `run-${Date.now()}-${++this.runCounter}`;
        eee(this.logService, "beginRun", {
            runId: e,
            previousRunId: this.snapshot?.runId,
            previousBugCount: this.snapshot?.bugs.length ?? 0,
            previousState: this.snapshot?.state,
            sourceKind: t?.sourceKind,
            composerId: t?.composerId
        });
        const n = new AbortController;
        return this.abortController = n, this.cancelRequested && n.abort(), this.dismissedBugIdsByRun.set(e, new Set), this.snapshot = {
            runId: e,
            state: this.cancelRequested ? "cancelRequested" : "starting",
            isRunning: !0,
            statusLog: [],
            bugs: [],
            everHadBugs: !1,
            instructionText: t?.instructionText ?? this.snapshot?.instructionText,
            progress: 0,
            sourceKind: t?.sourceKind ?? this.snapshot?.sourceKind,
            composerId: t?.composerId,
            baseRef: t?.baseRef
        }, this._onDidChange.fire(this.snapshot), {
            runId: e,
            controller: n,
            signal: n.signal
        };
    }
    appendStatus(t, e) {
        this.snapshot && (e && this.snapshot.runId !== e || (this.snapshot = {
            ...this.snapshot,
            statusLog: [
                ...this.snapshot.statusLog,
                t
            ]
        }, this._onDidChange.fire(this.snapshot)));
    }
    setBugs(t, e) {
        if (!this.snapshot || e && this.snapshot.runId !== e) return;
        const n = this.snapshot.runId, i = n ? this.dismissedBugIdsByRun.get(n) : void 0, r = i && i.size > 0 ? t.filter((u)=>!u.id || !i.has(u.id)) : t, s = r.map((u)=>{
            const d = Array.isArray(u.locations) ? u.locations.map((h)=>({
                    ...h,
                    file: Y6e(this.workspaceContextService, typeof h.file == "string" ? h.file : void 0)
                })) : u.locations;
            return {
                ...u,
                locations: d
            };
        }), o = [], a = new Map;
        for (const u of s){
            const d = u.locations && u.locations.length > 0 ? u.locations[0] : void 0, h = typeof d?.file == "string" ? d.file : "__no_file__";
            a.has(h) || (o.push(h), a.set(h, [])), a.get(h).push(u);
        }
        for (const u of a.values())u.sort((d, h)=>{
            const p = d.locations && d.locations.length > 0 ? d.locations[0] : void 0, g = h.locations && h.locations.length > 0 ? h.locations[0] : void 0, f = typeof p?.startLine == "number" ? p.startLine : Number.MAX_SAFE_INTEGER, _ = typeof g?.startLine == "number" ? g.startLine : Number.MAX_SAFE_INTEGER;
            return f - _;
        });
        const l = [];
        for (const u of o)l.push(...a.get(u));
        const c = this.snapshot.everHadBugs === !0 || r.length > 0;
        this.snapshot = {
            ...this.snapshot,
            bugs: l,
            everHadBugs: c
        }, this._onDidChange.fire(this.snapshot);
    }
    dismissBug(t) {
        if (!this.snapshot) return;
        const e = this.snapshot.runId;
        if (e) {
            const n = this.dismissedBugIdsByRun.get(e) ?? new Set;
            n.add(t), this.dismissedBugIdsByRun.set(e, n);
        }
        this.snapshot = {
            ...this.snapshot,
            bugs: this.snapshot.bugs.filter((n)=>n.id !== t)
        }, this._onDidChange.fire(this.snapshot);
    }
    markStreaming(t) {
        this.snapshot && (t && this.snapshot.runId !== t || this.snapshot.state === "starting" && (this.snapshot = {
            ...this.snapshot,
            state: "streaming",
            isRunning: !0
        }, this._onDidChange.fire(this.snapshot)));
    }
    updateProgress(t, e) {
        this.snapshot && (e && this.snapshot.runId !== e || (this.snapshot = {
            ...this.snapshot,
            progress: Math.min(100, Math.max(0, t))
        }, this._onDidChange.fire(this.snapshot)));
    }
    complete(t) {
        if (!this.snapshot || t && this.snapshot.runId !== t) return;
        eee(this.logService, "complete", {
            runId: this.snapshot.runId,
            requestedRunId: t,
            bugCount: this.snapshot.bugs.length,
            previousState: this.snapshot.state
        });
        const e = this.snapshot.state, n = e === "cancelRequested" || this.cancelRequested, r = e === "error" ? "error" : n ? "cancelRequested" : "completed", s = this.snapshot.progress ?? 0, o = r === "completed" ? 100 : s;
        this.snapshot = {
            ...this.snapshot,
            isRunning: !1,
            state: r,
            progress: o
        }, this._onDidChange.fire(this.snapshot), this.abortController = void 0, this.cancelRequested = !1;
    }
    clear(t) {
        if (t && this.snapshot?.runId !== t) {
            eee(this.logService, "clear.skipped", {
                requestedRunId: t,
                snapshotRunId: this.snapshot?.runId,
                bugCount: this.snapshot?.bugs.length ?? 0
            });
            return;
        }
        eee(this.logService, "clear", {
            requestedRunId: t,
            snapshotRunId: this.snapshot?.runId,
            bugCount: this.snapshot?.bugs.length ?? 0,
            state: this.snapshot?.state
        }), this.snapshot = void 0, this._onDidChange.fire(this.snapshot), this.abortController = void 0, this.cancelRequested = !1, this.dismissedBugIdsByRun.clear();
    }
    cancel() {
        eee(this.logService, "cancel", {
            runId: this.snapshot?.runId,
            bugCount: this.snapshot?.bugs.length ?? 0,
            state: this.snapshot?.state,
            isRunning: this.snapshot?.isRunning === !0
        }), this.cancelRequested = !0, this.snapshot && this.snapshot.isRunning && this.snapshot.state !== "cancelRequested" && (this.snapshot = {
            ...this.snapshot,
            state: "cancelRequested",
            isRunning: !0
        }, this._onDidChange.fire(this.snapshot)), this.abortController?.abort();
    }
    error(t) {
        this.snapshot && (t && this.snapshot.runId !== t || (eee(this.logService, "error", {
            runId: this.snapshot.runId,
            requestedRunId: t,
            bugCount: this.snapshot.bugs.length,
            previousState: this.snapshot.state
        }), this.snapshot = {
            ...this.snapshot,
            isRunning: !1,
            state: "error"
        }, this._onDidChange.fire(this.snapshot)));
    }
}, Lms = Re([
    F(0, dn),
    F(1, yr),
    F(2, Li)
], Lms), bn(OVe, Lms, 1);

}
