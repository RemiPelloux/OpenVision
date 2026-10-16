import { n3d, qEv, t3d, zEv } from "./A3u.js";
import { Se, bt, rn, ve, we } from "./HVr.js";
import { QDd } from "./background-work-registry.ts";
import { Pn } from "./extensions.js";
import { CX } from "./index_11.ts";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { av, sy } from "./solidEventsWrapper.js";
import { x } from "./tslib.es6.js";
var i3d, nco, r3d, s3d, Jj, o3d;
export { Jj, i3d, nco, o3d, r3d, s3d };
var __wakaru_AX_initialized = false;
export function AX() {
if (__wakaru_AX_initialized) return;
__wakaru_AX_initialized = true;
"use strict";
x(), CX(), bt(), Se(), Pn(), Ze(), sy(), i3d = [
    "id",
    "kind",
    "composerId",
    "title",
    "startTimeMs",
    "subagentComposerId",
    "toolCallId"
], nco = class kCm extends we {
    constructor(t = kCm.defaultMaxSettledTerminalShellIdsPerConversation){
        super(), this.maxSettledTerminalShellIdsPerConversation = t, this.shellWorkById = new Map, this.subagentWorkById = new Map, this.hostMirroredSessions = new Set, this.hostCompletionDeliveryOwners = new Map, this.pendingToolCallIdsByShellId = new Map, this.hostOwnedWorkIds = new Map, this.hostSnapshotWorkIds = new Map, this.wakeups = new QDd, this.settledTerminalShellIdsByConversation = new Map, this.mutedComposerIds = new Set, this.subagentKillers = [], this._onDidEnqueueCompletion = this._register(new ve), this.onDidEnqueueCompletion = this._onDidEnqueueCompletion.event, this._onDidSettleCompletion = this._register(new ve), this.onDidSettleCompletion = this._onDidSettleCompletion.event, this.backgroundWorkItems = this._register(new av([])), this.pendingCompletionsRevision = this._register(new av(0)), this.unsettledCompletionCount = this._register(new av(0));
    }
    _rememberSettledTerminalShell(t, n) {
        const i = n3d(n);
        if (i === void 0) return;
        let r = this.settledTerminalShellIdsByConversation.get(t);
        for(r === void 0 && (r = new Set, this.settledTerminalShellIdsByConversation.set(t, r)), r.add(i); r.size > this.maxSettledTerminalShellIdsPerConversation;){
            const s = r.values().next().value;
            if (s === void 0) break;
            r.delete(s);
        }
    }
    _bumpPendingCompletionsRevision() {
        this.pendingCompletionsRevision.change(this.pendingCompletionsRevision.value + 1);
    }
    _syncUnsettledCompletionCount() {
        const t = this.wakeups.getUnsettledCount();
        t !== this.unsettledCompletionCount.value && this.unsettledCompletionCount.change(t);
    }
    _publish() {
        const t = [
            ...this.subagentWorkById.values(),
            ...this.shellWorkById.values()
        ], n = this.backgroundWorkItems.value;
        n.length === t.length && n.every((i, r)=>qEv(i, t[r])) || this.backgroundWorkItems.change(t);
    }
    getComposerBackgroundWork(t) {
        return this.backgroundWorkItems.value.filter((n)=>n.composerId === t);
    }
    enqueue(t) {
        if (this.mutedComposerIds.has(t.conversationId)) return;
        const n = n3d(t.id);
        if (t3d(t) && n !== void 0 && this.settledTerminalShellIdsByConversation.get(t.conversationId)?.has(n)) return;
        const i = this.wakeups.getRevision();
        this.wakeups.enqueue(t), this.wakeups.getRevision() !== i && (this._syncUnsettledCompletionCount(), this._bumpPendingCompletionsRevision(), this._onDidEnqueueCompletion.fire({
            composerId: t.conversationId
        }));
    }
    setHostSessionMirrorActive(t, n) {
        if (n) {
            this.hostMirroredSessions.add(t);
            return;
        }
        this.hostMirroredSessions.delete(t);
        for (const [i, r] of this.pendingToolCallIdsByShellId)r.composerId === t && this.pendingToolCallIdsByShellId.delete(i);
        for (const [i, r] of this.hostSnapshotWorkIds)r === t && this.hostSnapshotWorkIds.delete(i);
    }
    isHostSessionMirrorActive(t) {
        return this.hostMirroredSessions.has(t);
    }
    acquireHostCompletionDelivery(t) {
        const n = Symbol(t);
        return this.hostCompletionDeliveryOwners.set(t, n), rn(()=>{
            this.hostCompletionDeliveryOwners.get(t) === n && this.hostCompletionDeliveryOwners.delete(t);
        });
    }
    pull(t) {
        const n = this.wakeups.getRevision(), i = this.wakeups.pull(t);
        return this._syncUnsettledCompletionCount(), this.wakeups.getRevision() !== n && this._bumpPendingCompletionsRevision(), i;
    }
    ack(t) {
        const n = this.wakeups.ack(t);
        this._syncUnsettledCompletionCount();
        for (const i of n)t3d(i) && this._rememberSettledTerminalShell(i.conversationId, i.id), this._onDidSettleCompletion.fire({
            conversationId: i.conversationId,
            taskId: i.id,
            ...i.payload.toolCallId ? {
                toolCallId: i.payload.toolCallId
            } : {}
        });
    }
    nack(t, n) {
        const i = this.wakeups.getRevision();
        this.wakeups.nack(t, n), this._syncUnsettledCompletionCount(), this.wakeups.getRevision() !== i && this._bumpPendingCompletionsRevision();
    }
    suppress(t, n) {
        const i = this.wakeups.getRevision();
        this.wakeups.suppress(t, n), this._syncUnsettledCompletionCount(), this.wakeups.getRevision() !== i && this._bumpPendingCompletionsRevision(), this._onDidSettleCompletion.fire({
            conversationId: t,
            taskId: n
        });
    }
    enqueueCompletion(t) {
        t.kind === "shell" && this.hostCompletionDeliveryOwners.has(t.composerId) || this.enqueue({
            conversationId: t.composerId,
            id: t.taskId,
            payload: t,
            source: t.kind
        });
    }
    markAwaitedCompletion(t, n) {
        this.suppress(t, n);
    }
    unmarkAwaitedCompletion(t, n) {
        this.wakeups.unsuppress(t, n);
    }
    clearComposerCompletionState(t) {
        const n = this.wakeups.getRevision();
        this.wakeups.clear(t), this.settledTerminalShellIdsByConversation.delete(t), this._syncUnsettledCompletionCount(), this.wakeups.getRevision() !== n && this._bumpPendingCompletionsRevision();
    }
    muteComposerCompletions(t) {
        this.mutedComposerIds.add(t), this.clearComposerCompletionState(t);
    }
    unmuteComposerCompletions(t) {
        this.mutedComposerIds.delete(t);
    }
    hasPendingCompletions(t) {
        return this.wakeups.hasPending(t);
    }
    drainCompletions(t) {
        const n = this.pull(t);
        return this.ack(n.map((i)=>i.id)), n.map((i)=>i.payload);
    }
    replaceShellWorkSnapshot(t) {
        const n = new Map;
        for (const [i, r] of this.shellWorkById)this.hostMirroredSessions.has(r.composerId) && n.set(i, r);
        this.shellWorkById.clear();
        for (const [i, r] of n)this.shellWorkById.set(i, r);
        for (const i of t)i.kind === "shell" && (this.hostMirroredSessions.has(i.composerId) || this.shellWorkById.set(i.id, i));
        this._publish();
    }
    replaceSessionBackgroundWork(t, n, i) {
        const r = new Set(i.map((s)=>s.id));
        for (const s of n)r.has(s) || (this.shellWorkById.delete(s), this.subagentWorkById.delete(s), this.pendingToolCallIdsByShellId.delete(s), this.hostOwnedWorkIds.get(s) === t && this.hostOwnedWorkIds.delete(s), this.hostSnapshotWorkIds.get(s) === t && this.hostSnapshotWorkIds.delete(s));
        for (const s of i){
            this.hostOwnedWorkIds.set(s.id, t), this.hostSnapshotWorkIds.set(s.id, t);
            const o = this.pendingToolCallIdsByShellId.get(s.id), a = o?.composerId === s.composerId ? o : void 0;
            a && this.pendingToolCallIdsByShellId.delete(s.id);
            const c = !s.toolCallId && a?.toolCallId ? {
                ...s,
                toolCallId: a.toolCallId
            } : s;
            c.kind === "shell" ? this.shellWorkById.set(c.id, this._mergeLocalExtras(c, this.shellWorkById.get(c.id))) : c.kind === "subagent" && this.subagentWorkById.set(c.id, this._mergeLocalExtras(c, this.subagentWorkById.get(c.id)));
        }
        this._publish();
    }
    _mergeLocalExtras(t, n) {
        return !n?.toolCallId || t.toolCallId ? t : {
            ...t,
            toolCallId: n.toolCallId
        };
    }
    _resolveMirroredShellOwner(t, n) {
        if (this.hostMirroredSessions.has(n)) return n;
        const i = this.shellWorkById.get(t);
        if (i && this.hostMirroredSessions.has(i.composerId)) return i.composerId;
        const r = this.hostOwnedWorkIds.get(t);
        if (r && this.hostMirroredSessions.has(r)) return r;
        const s = this.subagentWorkById.get(n)?.composerId ?? this.hostOwnedWorkIds.get(n);
        if (s && this.hostMirroredSessions.has(s)) return s;
    }
    upsertShellWork(t) {
        if (t.kind !== "shell") return;
        const n = this.shellWorkById.get(t.id), i = this._resolveMirroredShellOwner(t.id, t.composerId);
        if (i !== void 0) {
            t.toolCallId && this.annotateShellWorkToolCallId(t.id, i, t.toolCallId);
            return;
        }
        this.shellWorkById.set(t.id, this._mergeLocalExtras(t, n)), this._publish();
    }
    annotateShellWorkToolCallId(t, n, i) {
        const r = i.trim();
        if (!r) return;
        const s = this.shellWorkById.get(t);
        if (s) {
            if (!this.hostMirroredSessions.has(s.composerId) || s.toolCallId === r) return;
            this.shellWorkById.set(t, {
                ...s,
                toolCallId: r
            }), this._publish();
            return;
        }
        this.hostMirroredSessions.has(n) && this.pendingToolCallIdsByShellId.set(t, {
            composerId: n,
            toolCallId: r
        });
    }
    clearShellWork(t) {
        const n = this.shellWorkById.get(t), i = this.hostOwnedWorkIds.get(t), r = this.pendingToolCallIdsByShellId.get(t);
        n !== void 0 && this.hostMirroredSessions.has(n.composerId) || i !== void 0 && this.hostMirroredSessions.has(i) || r !== void 0 && this.hostMirroredSessions.has(r.composerId) || this.pendingToolCallIdsByShellId.delete(t), this.shellWorkById.delete(t) && this._publish();
    }
    async openBackgroundShell(t) {
        return this.shellOpener?.(t) ?? !1;
    }
    upsertSubagentWork(t) {
        if (t.kind !== "subagent") return;
        this.hostMirroredSessions.has(t.composerId) && this.hostOwnedWorkIds.set(t.id, t.composerId);
        const n = this.subagentWorkById.get(t.id);
        n && this.hostMirroredSessions.has(n.composerId) && this.hostOwnedWorkIds.set(t.id, n.composerId), !(this.hostSnapshotWorkIds.has(t.id) && (this.hostMirroredSessions.has(t.composerId) || n !== void 0 && this.hostMirroredSessions.has(n.composerId))) && (this.subagentWorkById.set(t.id, t), this._publish());
    }
    clearSubagentWork(t) {
        this.hostSnapshotWorkIds.has(t) || this.subagentWorkById.delete(t) && this._publish();
    }
    async killBackgroundWork(t) {
        switch(t.kind){
            case "shell":
                {
                    const n = await this.shellKiller?.(t.id);
                    return n && this.clearShellWork(t.id), n ?? !1;
                }
            case "subagent":
                {
                    for (const n of this.subagentKillers.slice().reverse())if (await n.killer(t.id)) return this.clearSubagentWork(t.id), !0;
                    return !1;
                }
            default:
                return zEv(t.kind);
        }
    }
    registerShellKiller(t) {
        return this.shellKiller = t, rn(()=>{
            this.shellKiller === t && (this.shellKiller = void 0);
        });
    }
    registerShellOpener(t) {
        return this.shellOpener = t, rn(()=>{
            this.shellOpener === t && (this.shellOpener = void 0);
        });
    }
    registerSubagentKiller(t) {
        const n = {
            killer: t
        };
        return this.subagentKillers.push(n), rn(()=>{
            const i = this.subagentKillers.indexOf(n);
            i !== -1 && this.subagentKillers.splice(i, 1);
        });
    }
}, nco.defaultMaxSettledTerminalShellIdsPerConversation = 1024, r3d = nco, s3d = new r3d, Jj = vn("backgroundWorkService"), o3d = class extends we {
    constructor(e = s3d){
        super(), this.store = e, this.onDidEnqueueCompletion = e.onDidEnqueueCompletion, this.onDidSettleCompletion = e.onDidSettleCompletion, this.backgroundWorkItems = e.backgroundWorkItems, this.pendingCompletionsRevision = e.pendingCompletionsRevision, this.unsettledCompletionCount = e.unsettledCompletionCount;
    }
    getComposerBackgroundWork(e) {
        return this.store.getComposerBackgroundWork(e);
    }
    enqueue(e) {
        this.store.enqueue(e);
    }
    pull(e) {
        return this.store.pull(e);
    }
    ack(e) {
        this.store.ack(e);
    }
    nack(e, t) {
        this.store.nack(e, t);
    }
    suppress(e, t) {
        this.store.suppress(e, t);
    }
    enqueueCompletion(e) {
        this.store.enqueueCompletion(e);
    }
    markAwaitedCompletion(e, t) {
        this.store.markAwaitedCompletion(e, t);
    }
    unmarkAwaitedCompletion(e, t) {
        this.store.unmarkAwaitedCompletion(e, t);
    }
    clearComposerCompletionState(e) {
        this.store.clearComposerCompletionState(e);
    }
    muteComposerCompletions(e) {
        this.store.muteComposerCompletions(e);
    }
    unmuteComposerCompletions(e) {
        this.store.unmuteComposerCompletions(e);
    }
    hasPendingCompletions(e) {
        return this.store.hasPendingCompletions(e);
    }
    drainCompletions(e) {
        return this.store.drainCompletions(e);
    }
    replaceShellWorkSnapshot(e) {
        this.store.replaceShellWorkSnapshot(e);
    }
    replaceSessionBackgroundWork(e, t, n) {
        this.store.replaceSessionBackgroundWork(e, t, n);
    }
    setHostSessionMirrorActive(e, t) {
        this.store.setHostSessionMirrorActive(e, t);
    }
    isHostSessionMirrorActive(e) {
        return this.store.isHostSessionMirrorActive(e);
    }
    acquireHostCompletionDelivery(e) {
        return this.store.acquireHostCompletionDelivery(e);
    }
    upsertShellWork(e) {
        this.store.upsertShellWork(e);
    }
    annotateShellWorkToolCallId(e, t, n) {
        this.store.annotateShellWorkToolCallId(e, t, n);
    }
    clearShellWork(e) {
        this.store.clearShellWork(e);
    }
    async openBackgroundShell(e) {
        return this.store.openBackgroundShell(e);
    }
    upsertSubagentWork(e) {
        this.store.upsertSubagentWork(e);
    }
    clearSubagentWork(e) {
        this.store.clearSubagentWork(e);
    }
    async killBackgroundWork(e) {
        return this.store.killBackgroundWork(e);
    }
    registerShellKiller(e) {
        return this.store.registerShellKiller(e);
    }
    registerShellOpener(e) {
        return this.store.registerShellOpener(e);
    }
    registerSubagentKiller(e) {
        return this.store.registerSubagentKiller(e);
    }
}, mn(Jj, o3d, 1);

}
