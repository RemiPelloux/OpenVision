import { le, sT, xr } from "./async.js";
import { N, se } from "./event.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { OU, m2e, p2e, u2e, zf } from "./localSchedule.js";
import { IU, Kf, RU, a2e, bU, c2e, eb, o2e, tb } from "./localScheduledTasks.js";
import { _ct, h2e } from "./localScheduledTasksState.js";
import { Z, te } from "./log.js";
import { $, $e } from "./network.js";
import { Ft, St } from "./resources.js";
import { Cn, or } from "./storageMainService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Wn, vt } from "./uuid.js";
import { bn, od } from "./workspace.js";
function r2e(e) {
    return e === "none" || e === "folder" || e === "multi-root";
}
function EU(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function s2e(e) {
    if (!EU(e)) return c2e;
    const t = Array.isArray(e.selectedModels) ? e.selectedModels.flatMap((r)=>{
        if (!EU(r) || typeof r.modelId != "string") return [];
        const s = Array.isArray(r.parameters) ? r.parameters.flatMap((i)=>EU(i) && typeof i.id == "string" && typeof i.value == "string" ? [
                {
                    id: i.id,
                    value: i.value
                }
            ] : []) : [];
        return [
            {
                modelId: r.modelId,
                parameters: s
            }
        ];
    }) : [];
    return {
        modelName: t.length > 0 ? t.map((r)=>r.modelId).join(",") : typeof e.modelName == "string" && e.modelName.length > 0 ? e.modelName : "default",
        maxMode: typeof e.maxMode == "boolean" ? e.maxMode : !1,
        useExperimentalModelOptOut: typeof e.useExperimentalModelOptOut == "boolean" ? e.useExperimentalModelOptOut : void 0,
        selectedModels: t.length > 0 ? t : e.selectedModels === null ? null : void 0
    };
}
function i2e(e) {
    if (e.status === "skipped") return;
    const t = e.status === "completed" ? "succeeded" : e.status === "failed" || e.status === "interrupted" ? "failed" : e.status === "canceled" ? "other" : "active";
    return {
        runId: e.id,
        at: e.claimedAt,
        outcome: t
    };
}
function AU(e) {
    return e.trim().replace(/\s+/g, " ");
}
function MU(e, t, n) {
    const r = new Set;
    for (const s of e.split(",")){
        if (s.length === 0) return;
        const i = s.split("/");
        if (i.length > 2) return;
        const a = i[0] ?? "";
        if (a.length === 0 || i.length === 2 && (i[1]?.length ?? 0) === 0) return;
        const o = i.length === 2 ? Number(i[1]) : 1;
        if (!Number.isInteger(o) || o <= 0) return;
        let l, d;
        if (a === "*") l = t, d = n;
        else if (a.includes("-")) {
            const u = a.split("-");
            if (u.length !== 2 || (u[0]?.length ?? 0) === 0 || (u[1]?.length ?? 0) === 0) return;
            l = Number(u[0]), d = Number(u[1]);
        } else l = Number(a), d = i.length === 2 ? n : l;
        if (!Number.isInteger(l) || !Number.isInteger(d) || l < t || d > n || l > d) return;
        for(let u = l; u <= d; u += o)r.add(u);
    }
    return r.size > 0 ? r : void 0;
}
function PU(e) {
    const t = AU(e).split(" ");
    if (t.length !== 5) return;
    const [n, r, s, i, a] = t;
    if (s !== "*" || i !== "*") return;
    const o = MU(n, 0, 59), l = MU(r, 0, 23), d = MU(a, 0, 7);
    if (!(!o || !l || !d)) return {
        minute: o,
        hour: l,
        dayOfWeek: new Set([
            ...d
        ].map((u)=>u === 7 ? 0 : u))
    };
}
function NU(e) {
    const t = OU.get(e);
    if (t !== void 0) return t ?? void 0;
    let n;
    try {
        n = new Intl.DateTimeFormat("en-US", {
            timeZone: e,
            hourCycle: "h23",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            weekday: "short"
        });
    } catch  {
        n = null;
    }
    return OU.set(e, n), n ?? void 0;
}
function l2e(e, t) {
    const n = {};
    for (const r of t.formatToParts(new Date(e)))r.type !== "literal" && (n[r.type] = r.value);
    return {
        year: Number(n.year),
        minute: Number(n.minute),
        hour: Number(n.hour) % 24,
        month: Number(n.month),
        dayOfMonth: Number(n.day),
        dayOfWeek: m2e[n.weekday ?? ""] ?? 0
    };
}
function ict(e, t) {
    return e.minute.has(t.minute) && e.hour.has(t.hour) && e.dayOfWeek.has(t.dayOfWeek);
}
function DU(e) {
    return PU(e) !== void 0;
}
function d2e(e) {
    return e.trim().length > 0 && NU(e) !== void 0;
}
function act(e, t, n) {
    const r = PU(e), s = NU(n);
    if (!r || !s || !Number.isFinite(t)) return;
    let i = Math.floor(t / zf) * zf + zf;
    for(let a = 0; a < u2e; a++){
        if (ict(r, l2e(i, s))) return i;
        i += zf;
    }
}
function oct(e, t) {
    const n = NU(t);
    if (!n) return;
    const r = l2e(e, n);
    return [
        String(r.year).padStart(4, "0"),
        String(r.month).padStart(2, "0"),
        String(r.dayOfMonth).padStart(2, "0"),
        String(r.hour).padStart(2, "0"),
        String(r.minute).padStart(2, "0")
    ].join("-");
}
function cct(e) {
    const t = PU(e);
    return t !== void 0 && t.minute.size === 1 && t.hour.size === 1;
}
function nb(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function lct(e) {
    return e.length === 0 ? "none" : "folder";
}
function dct(e, t) {
    switch(e){
        case "none":
            return t.length === 0;
        case "folder":
        case "multi-root":
            return t.length > 0;
        default:
            {
                const n = e;
                throw new Error(`Unsupported workspace kind: ${n}`);
            }
    }
}
function uct(e) {
    return e === "claimed" || e === "starting" || e === "running" || e === "needs_attention" || e === "completed" || e === "failed" || e === "canceled" || e === "interrupted" || e === "skipped";
}
function mct(e) {
    if (!(!nb(e) || typeof e.runId != "string" || typeof e.at != "number" || e.outcome !== "active" && e.outcome !== "succeeded" && e.outcome !== "failed" && e.outcome !== "other")) return {
        runId: e.runId,
        at: e.at,
        outcome: e.outcome
    };
}
function pct(e, t) {
    if (!nb(e) || typeof e.id != "string" || typeof e.taskId != "string" || e.workspaceUri !== void 0 && typeof e.workspaceUri != "string" || e.executionMode !== void 0 && e.executionMode !== "local" || typeof e.scheduledFor != "number" || e.trigger !== "schedule" && e.trigger !== "manual" || !uct(e.status) || typeof e.claimedAt != "number") return;
    const n = {
        id: e.id,
        taskId: e.taskId,
        workspaceUri: typeof e.workspaceUri == "string" ? e.workspaceUri : t.workspaceUri,
        executionMode: e.executionMode === "local" ? e.executionMode : t.executionMode,
        scheduledFor: e.scheduledFor,
        trigger: e.trigger,
        status: e.status,
        claimedAt: e.claimedAt,
        startedAt: typeof e.startedAt == "number" ? e.startedAt : void 0,
        completedAt: typeof e.completedAt == "number" ? e.completedAt : void 0,
        agentId: typeof e.agentId == "string" ? e.agentId : void 0,
        resolvedModel: typeof e.resolvedModel == "string" ? e.resolvedModel : void 0,
        error: typeof e.error == "string" ? e.error : void 0,
        skipReason: e.skipReason === "missed" || e.skipReason === "overlap" || e.skipReason === "duplicate_wall_clock" ? e.skipReason : void 0,
        missedRunAcknowledgedAt: typeof e.missedRunAcknowledgedAt == "number" ? e.missedRunAcknowledgedAt : void 0,
        claimToken: typeof e.claimToken == "string" ? e.claimToken : void 0,
        claimOwner: typeof e.claimOwner == "string" ? e.claimOwner : void 0
    };
    return (n.status === "claimed" || n.status === "starting" || n.status === "running" || n.status === "needs_attention") && (!n.claimToken || !n.claimOwner) ? {
        ...n,
        status: "interrupted",
        completedAt: n.completedAt ?? n.claimedAt,
        error: "The persisted run state was incomplete",
        claimToken: void 0,
        claimOwner: void 0
    } : n;
}
function hct(e) {
    const t = AU(e);
    if (DU(t)) return t;
    const n = t.split(" ");
    if (n.length !== 5) return;
    const r = n.map((s)=>s.split(",").filter((i)=>i.length > 0).join(",")).join(" ");
    return r !== t && DU(r) ? r : void 0;
}
function gct(e, t) {
    if (!nb(e) || typeof e.id != "string" || typeof e.revision != "number" || typeof e.ownerAuthId != "string" || typeof e.name != "string" || typeof e.prompt != "string" || typeof e.enabled != "boolean" || typeof e.workspaceId != "string" || typeof e.workspaceUri != "string" || typeof e.workspaceLabel != "string" || e.executionMode !== "local" || typeof e.schedule != "string" || typeof e.timeZone != "string" || typeof e.createdAt != "number" || typeof e.updatedAt != "number" || !Array.isArray(e.runs) || !d2e(e.timeZone)) return;
    const n = hct(e.schedule);
    if (n === void 0) return;
    const r = e.runTarget === "same-chat" ? "same-chat" : "new-chat", s = t === 1 ? lct(e.workspaceUri) : r2e(e.workspaceKind) ? e.workspaceKind : void 0;
    if (s === void 0 || !dct(s, e.workspaceUri) || s === "none" && e.workspaceId !== od.id) return;
    const i = [];
    for (const o of e.runs.slice(0, bU)){
        const l = pct(o, {
            workspaceUri: e.workspaceUri,
            executionMode: e.executionMode
        });
        if (l === void 0) return;
        i.push(l);
    }
    const a = [];
    if (e.runStats !== void 0) {
        if (!Array.isArray(e.runStats)) return;
        for (const o of e.runStats.slice(-tb)){
            const l = mct(o);
            if (l === void 0) return;
            a.push(l);
        }
    }
    for (const o of i){
        const l = i2e(o);
        if (l !== void 0) {
            const d = a.findIndex((u)=>u.runId === l.runId);
            d >= 0 ? a[d] = l : a.push(l);
        }
    }
    return {
        id: e.id,
        revision: e.revision,
        ownerAuthId: e.ownerAuthId,
        name: e.name,
        prompt: e.prompt,
        enabled: e.enabled,
        workspaceId: e.workspaceId,
        workspaceKind: s,
        workspaceUri: e.workspaceUri,
        workspaceLabel: e.workspaceLabel,
        executionMode: e.executionMode,
        runTarget: r,
        continuationAgentId: r === "same-chat" && typeof e.continuationAgentId == "string" ? e.continuationAgentId : void 0,
        modelConfig: s2e(e.modelConfig),
        schedule: n,
        timeZone: e.timeZone,
        nextRunAt: typeof e.nextRunAt == "number" ? e.nextRunAt : void 0,
        lastScheduledWallClockKey: typeof e.lastScheduledWallClockKey == "string" ? e.lastScheduledWallClockKey : void 0,
        createdAt: e.createdAt,
        updatedAt: e.updatedAt,
        runs: i,
        runStats: a.sort((o, l)=>o.at - l.at).slice(-tb)
    };
}
function fct(e) {
    if (!nb(e) || !Array.isArray(e.tasks)) return;
    const t = e.schemaVersion;
    if (t !== 1 && t !== eb) return;
    const n = [];
    for (const r of e.tasks){
        const s = gct(r, t);
        if (s === void 0) return;
        n.push(s);
    }
    return {
        schemaVersion: eb,
        tasks: n
    };
}
function em(e) {
    const { lastScheduledWallClockKey: t, runs: n, ...r } = e;
    return {
        ...r,
        runs: n.map(LU)
    };
}
function LU(e) {
    const { claimToken: t, claimOwner: n, missedRunAcknowledgedAt: r, ...s } = e;
    return s;
}
var UU, ws, g2e, f2e, _2e, xU, Ti, v2e, rb;
export { AU, DU, EU, LU, MU, NU, PU, Ti, UU, _2e, act, cct, d2e, dct, em, f2e, fct, g2e, gct, hct, i2e, ict, l2e, lct, mct, nb, oct, pct, r2e, rb, s2e, uct, v2e, ws, xU };
var __wakaru_vct_initialized = false;
export function vct() {
if (__wakaru_vct_initialized) return;
__wakaru_vct_initialized = true;
"use strict";
h(), le(), se(), j(), $e(), Ft(), ye(), Wn(), te(), IU(), p2e(), or(), bn(), _ct(), UU = "cursor.localScheduledTasks.v1", ws = "state", g2e = 200, f2e = 3, _2e = Math.floor(Kf / 4), xU = 360 * 6e4, Ti = new Set([
    "claimed",
    "starting",
    "running",
    "needs_attention"
]), v2e = new Set([
    "completed",
    "failed",
    "canceled",
    "interrupted",
    "skipped"
]), rb = class extends J {
    constructor(e, t){
        super(), this.applicationStorageService = e, this.logService = t, this.sequencer = new sT, this.startupReconciled = !1, this.isDisposed = !1, this.dueWakeTimes = [], this.lastDueWakeAts = new Map, this.dueWakeScheduler = this._register(new xr(()=>this.onDueWake(), xU)), this._onDidChangeTasks = this._register(new N), this.onDidChangeTasks = this._onDidChangeTasks.event, this._onDidBecomeDue = this._register(new N), this.onDidBecomeDue = this._onDidBecomeDue.event, this._onDidRequestCancel = this._register(new N), this.onDidRequestCancel = this._onDidRequestCancel.event, this.initializeDueWake();
    }
    async initializeDueWake() {
        try {
            await this.sequencer.queue(ws, async ()=>{
                await this.readState();
            });
        } catch (e) {
            this.logService.error("[LocalScheduledTasksMainService] Failed to initialize scheduled task due wake", e);
        }
    }
    syncDueWake(e) {
        if (this.isDisposed) return;
        this.dueWakeTimes = [
            ...new Set(e.flatMap((r)=>r.enabled && r.nextRunAt !== void 0 ? [
                    r.nextRunAt
                ] : []))
        ].sort((r, s)=>r - s);
        const t = new Set(this.dueWakeTimes);
        for (const r of this.lastDueWakeAts.keys())t.has(r) || this.lastDueWakeAts.delete(r);
        const n = Date.now();
        this.armDueWake(n);
    }
    getNextDueWakeAt(e) {
        let t;
        for (const n of this.dueWakeTimes){
            let r;
            if (n > e) r = n;
            else {
                const s = n + Kf;
                if (s < e) continue;
                const i = this.lastDueWakeAts.get(n);
                if (i === void 0) r = e;
                else {
                    const a = Math.min(i + _2e, s);
                    if (a <= i) continue;
                    r = Math.max(e, a);
                }
            }
            (t === void 0 || r < t) && (t = r);
        }
        return t;
    }
    armDueWake(e) {
        this.dueWakeScheduler.cancel();
        const t = this.getNextDueWakeAt(e);
        t !== void 0 && this.dueWakeScheduler.schedule(Math.min(xU, Math.max(0, t - e)));
    }
    onDueWake() {
        if (this.isDisposed) return;
        const e = Date.now(), t = this.getNextDueWakeAt(e);
        if (t === void 0) return;
        if (t > e) {
            this.armDueWake(e);
            return;
        }
        let n = !1;
        for (const r of this.dueWakeTimes)r <= e && e <= r + Kf && (this.lastDueWakeAts.set(r, e), n = !0);
        n && this._onDidBecomeDue.fire(), this.armDueWake(e);
    }
    dispose() {
        this.isDisposed = !0, super.dispose();
    }
    async listTasks(e) {
        return this.sequencer.queue(ws, async ()=>(await this.readState()).tasks.filter((n)=>n.ownerAuthId === e).map(em).sort((n, r)=>r.updatedAt - n.updatedAt));
    }
    async createTask(e) {
        return this.sequencer.queue(ws, async ()=>{
            const t = this.validateCreateInput(e), n = Date.now(), r = {
                id: vt(),
                revision: 1,
                ...t,
                nextRunAt: t.enabled ? this.getNextRunAt(t.schedule, n, t.timeZone) : void 0,
                createdAt: n,
                updatedAt: n,
                runs: [],
                runStats: []
            }, s = await this.readState();
            return await this.writeState({
                ...s,
                tasks: [
                    ...s.tasks,
                    r
                ]
            }), em(r);
        });
    }
    async updateTask(e, t, n) {
        return this.sequencer.queue(ws, async ()=>{
            const r = await this.readState(), s = r.tasks.findIndex((f)=>f.id === t && f.ownerAuthId === e);
            if (s < 0) throw new Error("Scheduled task not found");
            const i = r.tasks[s];
            if (n.expectedRevision !== void 0 && n.expectedRevision !== i.revision) throw new Error("This task changed in another Agent Window. Reopen it and try again");
            const a = Date.now(), o = this.validateCreateInput({
                ownerAuthId: i.ownerAuthId,
                name: n.name ?? i.name,
                prompt: n.prompt ?? i.prompt,
                workspaceId: n.workspaceId ?? i.workspaceId,
                workspaceKind: n.workspaceKind ?? i.workspaceKind,
                workspaceUri: n.workspaceUri ?? i.workspaceUri,
                workspaceLabel: n.workspaceLabel ?? i.workspaceLabel,
                executionMode: n.executionMode ?? i.executionMode,
                runTarget: n.runTarget ?? i.runTarget,
                modelConfig: n.modelConfig ?? i.modelConfig,
                schedule: n.schedule ?? i.schedule,
                timeZone: n.timeZone ?? i.timeZone,
                enabled: n.enabled ?? i.enabled
            }), l = o.schedule !== i.schedule || o.timeZone !== i.timeZone || o.enabled !== i.enabled, d = o.runTarget !== i.runTarget || o.workspaceId !== i.workspaceId || o.workspaceKind !== i.workspaceKind || o.workspaceUri !== i.workspaceUri, u = {
                ...i,
                ...o,
                continuationAgentId: o.runTarget === "same-chat" && !d ? i.continuationAgentId : void 0,
                revision: i.revision + 1,
                nextRunAt: o.enabled ? l ? this.getNextRunAt(o.schedule, a, o.timeZone) : i.nextRunAt : void 0,
                lastScheduledWallClockKey: l ? void 0 : i.lastScheduledWallClockKey,
                updatedAt: a
            }, m = [
                ...r.tasks
            ];
            return m[s] = u, await this.writeState({
                ...r,
                tasks: m
            }), em(u);
        });
    }
    async deleteTask(e, t, n) {
        return this.sequencer.queue(ws, async ()=>{
            const r = await this.readState(), s = r.tasks.findIndex((i)=>i.id === t && i.ownerAuthId === e);
            if (s < 0) return !1;
            if (n !== void 0 && n !== r.tasks[s].revision) throw new Error("This task changed in another Agent Window. Reopen it and try again");
            if (r.tasks[s].runs.some((i)=>Ti.has(i.status))) throw new Error("Cancel the active run before deleting this task");
            return await this.writeState({
                ...r,
                tasks: r.tasks.filter((i)=>i.id !== t)
            }), !0;
        });
    }
    async claimDueRuns(e, t, n, r = f2e) {
        return this.sequencer.queue(ws, async ()=>{
            const s = await this.readState(), i = [
                ...s.tasks
            ], a = i.filter((m)=>m.ownerAuthId === t && m.enabled && m.nextRunAt !== void 0 && m.nextRunAt <= n).sort((m, f)=>(m.nextRunAt ?? 0) - (f.nextRunAt ?? 0)), o = Math.max(0, Math.min(r, 10));
            let l = 0;
            const d = [];
            let u = !1;
            for (const m of a){
                const f = i.findIndex((U)=>U.id === m.id);
                if (f < 0 || m.nextRunAt === void 0) continue;
                const v = m.nextRunAt, T = this.getNextRunAt(m.schedule, n, m.timeZone), S = oct(v, m.timeZone), k = m.runs.find((U)=>Ti.has(U.status)), y = this.isLocalWorkspaceBusy(i, m, t);
                if (n - v > Kf) {
                    i[f] = this.appendRun({
                        ...m,
                        nextRunAt: T
                    }, this.createSkippedRun(m, v, n, "missed")), u = !0;
                    continue;
                }
                if (l >= o) continue;
                if (l += 1, cct(m.schedule) && S !== void 0 && S === m.lastScheduledWallClockKey) {
                    i[f] = this.appendRun({
                        ...m,
                        nextRunAt: T
                    }, this.createSkippedRun(m, v, n, "duplicate_wall_clock")), u = !0;
                    continue;
                }
                if (k || y) {
                    i[f] = this.appendRun({
                        ...m,
                        nextRunAt: T,
                        lastScheduledWallClockKey: S
                    }, this.createSkippedRun(m, v, n, "overlap")), u = !0;
                    continue;
                }
                const b = vt(), I = {
                    id: vt(),
                    taskId: m.id,
                    workspaceUri: m.workspaceUri,
                    executionMode: m.executionMode,
                    scheduledFor: v,
                    trigger: "schedule",
                    status: "claimed",
                    claimedAt: n,
                    claimToken: b,
                    claimOwner: e
                }, G = this.appendRun({
                    ...m,
                    nextRunAt: T,
                    lastScheduledWallClockKey: S
                }, I);
                i[f] = G, d.push({
                    task: em(G),
                    run: LU(I),
                    claimToken: b
                }), u = !0;
            }
            return u && await this.writeState({
                ...s,
                tasks: i
            }), d;
        });
    }
    async claimManualRun(e, t, n, r) {
        return this.sequencer.queue(ws, async ()=>{
            const s = await this.readState(), i = [
                ...s.tasks
            ], a = i.findIndex((f)=>f.id === n && f.ownerAuthId === t);
            if (a < 0) return;
            const o = i[a], l = this.isLocalWorkspaceBusy(i, o, t);
            if (o.runs.some((f)=>Ti.has(f.status)) || l) return;
            const d = vt(), u = {
                id: vt(),
                taskId: n,
                workspaceUri: o.workspaceUri,
                executionMode: o.executionMode,
                scheduledFor: r,
                trigger: "manual",
                status: "claimed",
                claimedAt: r,
                claimToken: d,
                claimOwner: e
            }, m = this.appendRun(o, u);
            return i[a] = m, await this.writeState({
                ...s,
                tasks: i
            }), {
                task: em(m),
                run: LU(u),
                claimToken: d
            };
        });
    }
    async claimMissedRunSummary(e, t) {
        return this.sequencer.queue(ws, async ()=>{
            const n = await this.readState(), r = [], s = n.tasks.map((i)=>{
                if (i.ownerAuthId !== e) return i;
                const a = i.runs.filter((l)=>l.status === "skipped" && l.skipReason === "missed" && l.missedRunAcknowledgedAt === void 0);
                if (a.length === 0) return i;
                const o = {
                    ...i,
                    runs: i.runs.map((l)=>l.status === "skipped" && l.skipReason === "missed" && l.missedRunAcknowledgedAt === void 0 ? {
                            ...l,
                            missedRunAcknowledgedAt: t
                        } : l)
                };
                return r.push({
                    task: em(o),
                    missedRunCount: a.length,
                    latestScheduledFor: Math.max(...a.map((l)=>l.scheduledFor))
                }), o;
            });
            return r.length === 0 ? [] : (await this.writeState({
                ...n,
                tasks: s
            }), r.sort((i, a)=>a.latestScheduledFor - i.latestScheduledFor));
        });
    }
    async updateRun(e) {
        return this.sequencer.queue(ws, async ()=>{
            const t = await this.readState(), n = this.findRun(t, e.runId);
            if (!n || n.run.claimToken !== e.claimToken || !this.isAllowedTransition(n.run.status, e.status)) return !1;
            const r = v2e.has(e.status), s = {
                ...n.run,
                status: e.status,
                startedAt: e.status === "running" ? n.run.startedAt ?? e.at : n.run.startedAt,
                completedAt: r ? e.at : void 0,
                agentId: e.agentId ?? n.run.agentId,
                resolvedModel: e.resolvedModel ?? n.run.resolvedModel,
                error: e.error?.slice(0, 300),
                claimToken: r ? void 0 : n.run.claimToken,
                claimOwner: r ? void 0 : n.run.claimOwner
            };
            return await this.writeState(this.replaceRunAndStats(t, {
                taskIndex: n.taskIndex,
                runIndex: n.runIndex,
                run: s,
                now: e.at
            })), !0;
        });
    }
    async setContinuationAgent(e) {
        return this.sequencer.queue(ws, async ()=>{
            const t = await this.readState(), n = this.findRun(t, e.runId);
            if (!n || n.run.claimToken !== e.claimToken || !Ti.has(n.run.status)) return !1;
            const r = t.tasks[n.taskIndex];
            if (r.runTarget !== "same-chat" || r.workspaceKind !== e.workspaceKindAtClaim || !this.isSameWorkspace(r.workspaceUri, n.run.workspaceUri)) return !1;
            if (r.continuationAgentId === e.agentId) return !0;
            const s = [
                ...t.tasks
            ];
            return s[n.taskIndex] = {
                ...r,
                continuationAgentId: e.agentId
            }, await this.writeState({
                ...t,
                tasks: s
            }), !0;
        });
    }
    async requestCancel(e, t, n) {
        let r;
        const s = await this.sequencer.queue(ws, async ()=>{
            const i = await this.readState(), a = this.findRun(i, t);
            return !a || i.tasks[a.taskIndex].ownerAuthId !== e || !Ti.has(a.run.status) || !a.run.claimOwner ? !1 : a.run.status === "claimed" ? (await this.writeState(this.replaceRunAndStats(i, {
                taskIndex: a.taskIndex,
                runIndex: a.runIndex,
                run: {
                    ...a.run,
                    status: "canceled",
                    completedAt: n,
                    claimToken: void 0,
                    claimOwner: void 0
                },
                now: n
            })), !0) : (r = {
                runId: t,
                claimOwner: a.run.claimOwner
            }, !0);
        });
        return r && this._onDidRequestCancel.fire(r), s;
    }
    async releaseRunsForOwner(e, t) {
        await this.sequencer.queue(ws, async ()=>{
            const n = await this.readState();
            let r = !1;
            const s = n.tasks.map((i)=>{
                const a = this.interruptRuns(i, (o)=>o.claimOwner === e && Ti.has(o.status), t, "The Agent Window closed before this run completed");
                return r = r || a.changed, a.task;
            });
            r && await this.writeState({
                ...n,
                tasks: s
            });
        });
    }
    validateCreateInput(e) {
        const t = e.ownerAuthId.trim(), n = e.name.trim().slice(0, a2e), r = e.prompt.trim().slice(0, o2e), s = e.workspaceId.trim(), i = e.workspaceLabel.trim().slice(0, g2e), a = AU(e.schedule), o = e.timeZone.trim();
        if (!r2e(e.workspaceKind)) throw new Error("Select a valid local project");
        const l = e.workspaceKind;
        let d, u;
        switch(l){
            case "none":
                d = s === od.id && e.workspaceUri.trim().length === 0;
                break;
            case "folder":
            case "multi-root":
                d = !1;
                try {
                    u = x.parse(e.workspaceUri);
                } catch  {
                    throw new Error("Select a valid local project");
                }
                break;
            default:
                {
                    const m = l;
                    throw new Error(`Unsupported scheduled task workspace kind: ${m}`);
                }
        }
        if (l === "none" && !d) throw new Error("Select a valid local project");
        if (!n) throw new Error("Enter a task name");
        if (!r) throw new Error("Enter task instructions");
        if (!t) throw new Error("Sign in before creating a scheduled task");
        if (!s || !d && (u === void 0 || u.scheme !== $.file || !u.path)) throw new Error("Select a local project");
        if (!DU(a)) throw new Error("Enter a valid five-field schedule");
        if (!d2e(o)) throw new Error("Enter a valid IANA timezone");
        if (e.executionMode !== "local") throw new Error("Only local execution is supported");
        if (e.runTarget !== "new-chat" && e.runTarget !== "same-chat") throw new Error("Select a valid run target");
        return {
            ownerAuthId: t,
            name: n,
            prompt: r,
            workspaceId: s,
            workspaceKind: l,
            workspaceUri: u?.toString() ?? "",
            workspaceLabel: i || u?.fsPath || "No project",
            executionMode: e.executionMode,
            runTarget: e.runTarget,
            modelConfig: s2e(e.modelConfig),
            schedule: a,
            timeZone: o,
            enabled: e.enabled ?? !0
        };
    }
    createSkippedRun(e, t, n, r) {
        return {
            id: vt(),
            taskId: e.id,
            workspaceUri: e.workspaceUri,
            executionMode: e.executionMode,
            scheduledFor: t,
            trigger: "schedule",
            status: "skipped",
            claimedAt: n,
            completedAt: n,
            skipReason: r
        };
    }
    isLocalWorkspaceBusy(e, t, n) {
        return e.some((r)=>r.ownerAuthId === n && r.runs.some((s)=>Ti.has(s.status) && this.isSameWorkspace(s.workspaceUri, t.workspaceUri)));
    }
    isSameWorkspace(e, t) {
        if (!e || !t) return e === t;
        try {
            return St.isEqual(St.removeTrailingPathSeparator(x.parse(e)), St.removeTrailingPathSeparator(x.parse(t)));
        } catch  {
            return e === t;
        }
    }
    getNextRunAt(e, t, n) {
        const r = act(e, t, n);
        if (r === void 0) throw new Error("Could not calculate the next scheduled task occurrence");
        return r;
    }
    appendRun(e, t) {
        const n = [
            t,
            ...e.runs
        ], r = n.filter((i)=>Ti.has(i.status)), s = n.filter((i)=>!Ti.has(i.status)).slice(0, Math.max(0, bU - r.length));
        return {
            ...e,
            runs: [
                ...r,
                ...s
            ]
        };
    }
    findRun(e, t) {
        for(let n = 0; n < e.tasks.length; n++){
            const r = e.tasks[n].runs.findIndex((s)=>s.id === t);
            if (r >= 0) return {
                taskIndex: n,
                runIndex: r,
                run: e.tasks[n].runs[r]
            };
        }
    }
    replaceRunAndStats(e, { taskIndex: t, runIndex: n, run: r, now: s }) {
        const i = [
            ...e.tasks
        ], a = i[t], o = [
            ...a.runs
        ];
        return o[n] = r, i[t] = this.withUpdatedRunStat({
            ...a,
            runs: o
        }, r, s), {
            ...e,
            tasks: i
        };
    }
    withUpdatedRunStat(e, t, n) {
        const r = n - RU, s = e.runStats.filter((o)=>o.at >= r && o.runId !== t.id), i = i2e(t), a = i === void 0 ? s : [
            ...s,
            i
        ];
        return {
            ...e,
            runStats: a.slice(-tb)
        };
    }
    interruptRuns(e, t, n, r) {
        const s = [], i = e.runs.map((o)=>{
            if (!t(o)) return o;
            const l = {
                ...o,
                status: "interrupted",
                completedAt: n,
                error: r,
                claimToken: void 0,
                claimOwner: void 0
            };
            return s.push(l), l;
        });
        let a = {
            ...e,
            runs: i
        };
        for (const o of s)a = this.withUpdatedRunStat(a, o, n);
        return {
            task: a,
            changed: s.length > 0
        };
    }
    isAllowedTransition(e, t) {
        if (e === t) return !0;
        switch(e){
            case "claimed":
                return [
                    "starting",
                    "running",
                    "failed",
                    "canceled",
                    "interrupted"
                ].includes(t);
            case "starting":
                return [
                    "running",
                    "failed",
                    "canceled",
                    "interrupted"
                ].includes(t);
            case "running":
                return [
                    "needs_attention",
                    "completed",
                    "failed",
                    "canceled",
                    "interrupted"
                ].includes(t);
            case "needs_attention":
                return [
                    "running",
                    "completed",
                    "failed",
                    "canceled",
                    "interrupted"
                ].includes(t);
            default:
                return !1;
        }
    }
    reconcileOrphanedRuns(e, t) {
        let n = !1;
        const r = e.tasks.map((s)=>{
            const i = this.interruptRuns(s, (a)=>Ti.has(a.status), t, "Cursor restarted before this run completed");
            return n = n || i.changed, i.task;
        });
        return {
            state: n ? {
                ...e,
                tasks: r
            } : e,
            changed: n
        };
    }
    async readState() {
        await this.applicationStorageService.whenReady;
        const e = this.applicationStorageService.get(UU, -1);
        let t = h2e;
        try {
            if (e) {
                const r = JSON.parse(e), s = fct(r);
                if (s === void 0) throw new Error("Unsupported or malformed scheduled task state");
                t = s;
            }
        } catch (r) {
            throw this.logService.error("[LocalScheduledTasksMainService] Failed to read local scheduled task state", r), new Error("Could not read scheduled task state");
        }
        if (this.startupReconciled) return this.syncDueWake(t.tasks), t;
        const n = this.reconcileOrphanedRuns(t, Date.now());
        return n.changed && await this.writeState(n.state, !1), this.startupReconciled = !0, this.syncDueWake(n.state.tasks), n.state;
    }
    async writeState(e, t = !0) {
        await this.applicationStorageService.whenReady, this.applicationStorageService.store(UU, JSON.stringify(e), -1, 1), await this.applicationStorageService.flush(), this.syncDueWake(e.tasks), t && this._onDidChangeTasks.fire();
    }
}, rb = B([
    w(0, Cn),
    w(1, Z)
], rb);

}
