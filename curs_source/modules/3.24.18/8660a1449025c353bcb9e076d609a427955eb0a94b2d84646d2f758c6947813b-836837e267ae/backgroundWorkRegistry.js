import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { r7a } from "./background-work-registry.ts";
import { Rn } from "./extensions.js";
import { uie } from "./index_11.ts";
import { It } from "./instantiation.js";
import { sk, vb } from "./solidEventsWrapper.js";
import { E } from "./tslib.es6.js";
import { $U1, WU1, kTm, wTm } from "./yBp.js";
var CTm, C$a, TTm, ETm, ZD, ITm;
export { C$a, CTm, ETm, ITm, TTm, ZD };
var __wakaru_jO_initialized = false;
export function jO() {
if (__wakaru_jO_initialized) return;
__wakaru_jO_initialized = true;
"use strict";
E(), uie(), Gt(), Qe(), Rn(), It(), sk(), CTm = [
    "id",
    "kind",
    "composerId",
    "title",
    "startTimeMs",
    "subagentComposerId",
    "toolCallId"
], C$a = class oPb extends st {
    constructor(e = oPb.defaultMaxSettledTerminalShellIdsPerConversation){
        super(), this.maxSettledTerminalShellIdsPerConversation = e, this.shellWorkById = new Map, this.subagentWorkById = new Map, this.hostMirroredSessions = new Set, this.hostCompletionDeliveryOwners = new Map, this.pendingToolCallIdsByShellId = new Map, this.hostOwnedWorkIds = new Map, this.hostSnapshotWorkIds = new Map, this.wakeups = new r7a, this.settledTerminalShellIdsByConversation = new Map, this.mutedComposerIds = new Set, this.subagentKillers = [], this._onDidEnqueueCompletion = this._register(new tt), this.onDidEnqueueCompletion = this._onDidEnqueueCompletion.event, this._onDidSettleCompletion = this._register(new tt), this.onDidSettleCompletion = this._onDidSettleCompletion.event, this.backgroundWorkItems = this._register(new vb([])), this.pendingCompletionsRevision = this._register(new vb(0)), this.unsettledCompletionCount = this._register(new vb(0));
    }
    _rememberSettledTerminalShell(e, n) {
        const i = wTm(n);
        if (i === void 0) return;
        let r = this.settledTerminalShellIdsByConversation.get(e);
        for(r === void 0 && (r = new Set, this.settledTerminalShellIdsByConversation.set(e, r)), r.add(i); r.size > this.maxSettledTerminalShellIdsPerConversation;){
            const s = r.values().next().value;
            if (s === void 0) break;
            r.delete(s);
        }
    }
    _bumpPendingCompletionsRevision() {
        this.pendingCompletionsRevision.change(this.pendingCompletionsRevision.value + 1);
    }
    _syncUnsettledCompletionCount() {
        const e = this.wakeups.getUnsettledCount();
        e !== this.unsettledCompletionCount.value && this.unsettledCompletionCount.change(e);
    }
    _publish() {
        const e = [
            ...this.subagentWorkById.values(),
            ...this.shellWorkById.values()
        ], n = this.backgroundWorkItems.value;
        n.length === e.length && n.every((i, r)=>$U1(i, e[r])) || this.backgroundWorkItems.change(e);
    }
    getComposerBackgroundWork(e) {
        return this.backgroundWorkItems.value.filter((n)=>n.composerId === e);
    }
    enqueue(e) {
        if (this.mutedComposerIds.has(e.conversationId)) return;
        const n = wTm(e.id);
        if (kTm(e) && n !== void 0 && this.settledTerminalShellIdsByConversation.get(e.conversationId)?.has(n)) return;
        const i = this.wakeups.getRevision();
        this.wakeups.enqueue(e), this.wakeups.getRevision() !== i && (this._syncUnsettledCompletionCount(), this._bumpPendingCompletionsRevision(), this._onDidEnqueueCompletion.fire({
            composerId: e.conversationId
        }));
    }
    setHostSessionMirrorActive(e, n) {
        if (n) {
            this.hostMirroredSessions.add(e);
            return;
        }
        this.hostMirroredSessions.delete(e);
        for (const [i, r] of this.pendingToolCallIdsByShellId)r.composerId === e && this.pendingToolCallIdsByShellId.delete(i);
        for (const [i, r] of this.hostSnapshotWorkIds)r === e && this.hostSnapshotWorkIds.delete(i);
    }
    isHostSessionMirrorActive(e) {
        return this.hostMirroredSessions.has(e);
    }
    acquireHostCompletionDelivery(e) {
        const n = Symbol(e);
        return this.hostCompletionDeliveryOwners.set(e, n), Pn(()=>{
            this.hostCompletionDeliveryOwners.get(e) === n && this.hostCompletionDeliveryOwners.delete(e);
        });
    }
    pull(e) {
        const n = this.wakeups.getRevision(), i = this.wakeups.pull(e);
        return this._syncUnsettledCompletionCount(), this.wakeups.getRevision() !== n && this._bumpPendingCompletionsRevision(), i;
    }
    ack(e) {
        const n = this.wakeups.ack(e);
        this._syncUnsettledCompletionCount();
        for (const i of n)kTm(i) && this._rememberSettledTerminalShell(i.conversationId, i.id), this._onDidSettleCompletion.fire({
            conversationId: i.conversationId,
            taskId: i.id,
            ...i.payload.toolCallId ? {
                toolCallId: i.payload.toolCallId
            } : {}
        });
    }
    nack(e, n) {
        const i = this.wakeups.getRevision();
        this.wakeups.nack(e, n), this._syncUnsettledCompletionCount(), this.wakeups.getRevision() !== i && this._bumpPendingCompletionsRevision();
    }
    suppress(e, n) {
        const i = this.wakeups.getRevision();
        this.wakeups.suppress(e, n), this._syncUnsettledCompletionCount(), this.wakeups.getRevision() !== i && this._bumpPendingCompletionsRevision(), this._onDidSettleCompletion.fire({
            conversationId: e,
            taskId: n
        });
    }
    enqueueCompletion(e) {
        e.kind === "shell" && this.hostCompletionDeliveryOwners.has(e.composerId) || this.enqueue({
            conversationId: e.composerId,
            id: e.taskId,
            payload: e,
            source: e.kind
        });
    }
    markAwaitedCompletion(e, n) {
        this.suppress(e, n);
    }
    unmarkAwaitedCompletion(e, n) {
        this.wakeups.unsuppress(e, n);
    }
    clearComposerCompletionState(e) {
        const n = this.wakeups.getRevision();
        this.wakeups.clear(e), this.settledTerminalShellIdsByConversation.delete(e), this._syncUnsettledCompletionCount(), this.wakeups.getRevision() !== n && this._bumpPendingCompletionsRevision();
    }
    muteComposerCompletions(e) {
        this.mutedComposerIds.add(e), this.clearComposerCompletionState(e);
    }
    unmuteComposerCompletions(e) {
        this.mutedComposerIds.delete(e);
    }
    hasPendingCompletions(e) {
        return this.wakeups.hasPending(e);
    }
    drainCompletions(e) {
        const n = this.pull(e);
        return this.ack(n.map((i)=>i.id)), n.map((i)=>i.payload);
    }
    replaceShellWorkSnapshot(e) {
        const n = new Map;
        for (const [i, r] of this.shellWorkById)this.hostMirroredSessions.has(r.composerId) && n.set(i, r);
        this.shellWorkById.clear();
        for (const [i, r] of n)this.shellWorkById.set(i, r);
        for (const i of e)i.kind === "shell" && (this.hostMirroredSessions.has(i.composerId) || this.shellWorkById.set(i.id, i));
        this._publish();
    }
    replaceSessionBackgroundWork(e, n, i) {
        const r = new Set(i.map((s)=>s.id));
        for (const s of n)r.has(s) || (this.shellWorkById.delete(s), this.subagentWorkById.delete(s), this.pendingToolCallIdsByShellId.delete(s), this.hostOwnedWorkIds.get(s) === e && this.hostOwnedWorkIds.delete(s), this.hostSnapshotWorkIds.get(s) === e && this.hostSnapshotWorkIds.delete(s));
        for (const s of i){
            this.hostOwnedWorkIds.set(s.id, e), this.hostSnapshotWorkIds.set(s.id, e);
            const o = this.pendingToolCallIdsByShellId.get(s.id), a = o?.composerId === s.composerId ? o : void 0;
            a && this.pendingToolCallIdsByShellId.delete(s.id);
            const l = !s.toolCallId && a?.toolCallId ? {
                ...s,
                toolCallId: a.toolCallId
            } : s;
            l.kind === "shell" ? this.shellWorkById.set(l.id, this._mergeLocalExtras(l, this.shellWorkById.get(l.id))) : l.kind === "subagent" && this.subagentWorkById.set(l.id, this._mergeLocalExtras(l, this.subagentWorkById.get(l.id)));
        }
        this._publish();
    }
    _mergeLocalExtras(e, n) {
        return !n?.toolCallId || e.toolCallId ? e : {
            ...e,
            toolCallId: n.toolCallId
        };
    }
    _resolveMirroredShellOwner(e, n) {
        if (this.hostMirroredSessions.has(n)) return n;
        const i = this.shellWorkById.get(e);
        if (i && this.hostMirroredSessions.has(i.composerId)) return i.composerId;
        const r = this.hostOwnedWorkIds.get(e);
        if (r && this.hostMirroredSessions.has(r)) return r;
        const s = this.subagentWorkById.get(n)?.composerId ?? this.hostOwnedWorkIds.get(n);
        if (s && this.hostMirroredSessions.has(s)) return s;
    }
    upsertShellWork(e) {
        if (e.kind !== "shell") return;
        const n = this.shellWorkById.get(e.id), i = this._resolveMirroredShellOwner(e.id, e.composerId);
        if (i !== void 0) {
            e.toolCallId && this.annotateShellWorkToolCallId(e.id, i, e.toolCallId);
            return;
        }
        this.shellWorkById.set(e.id, this._mergeLocalExtras(e, n)), this._publish();
    }
    annotateShellWorkToolCallId(e, n, i) {
        const r = i.trim();
        if (!r) return;
        const s = this.shellWorkById.get(e);
        if (s) {
            if (!this.hostMirroredSessions.has(s.composerId) || s.toolCallId === r) return;
            this.shellWorkById.set(e, {
                ...s,
                toolCallId: r
            }), this._publish();
            return;
        }
        this.hostMirroredSessions.has(n) && this.pendingToolCallIdsByShellId.set(e, {
            composerId: n,
            toolCallId: r
        });
    }
    clearShellWork(e) {
        const n = this.shellWorkById.get(e), i = this.hostOwnedWorkIds.get(e), r = this.pendingToolCallIdsByShellId.get(e);
        n !== void 0 && this.hostMirroredSessions.has(n.composerId) || i !== void 0 && this.hostMirroredSessions.has(i) || r !== void 0 && this.hostMirroredSessions.has(r.composerId) || this.pendingToolCallIdsByShellId.delete(e), this.shellWorkById.delete(e) && this._publish();
    }
    async openBackgroundShell(e) {
        return this.shellOpener?.(e) ?? !1;
    }
    upsertSubagentWork(e) {
        if (e.kind !== "subagent") return;
        this.hostMirroredSessions.has(e.composerId) && this.hostOwnedWorkIds.set(e.id, e.composerId);
        const n = this.subagentWorkById.get(e.id);
        n && this.hostMirroredSessions.has(n.composerId) && this.hostOwnedWorkIds.set(e.id, n.composerId), !(this.hostSnapshotWorkIds.has(e.id) && (this.hostMirroredSessions.has(e.composerId) || n !== void 0 && this.hostMirroredSessions.has(n.composerId))) && (this.subagentWorkById.set(e.id, e), this._publish());
    }
    clearSubagentWork(e) {
        this.hostSnapshotWorkIds.has(e) || this.subagentWorkById.delete(e) && this._publish();
    }
    async killBackgroundWork(e) {
        switch(e.kind){
            case "shell":
                {
                    const n = await this.shellKiller?.(e.id);
                    return n && this.clearShellWork(e.id), n ?? !1;
                }
            case "subagent":
                {
                    for (const n of this.subagentKillers.slice().reverse())if (await n.killer(e.id)) return this.clearSubagentWork(e.id), !0;
                    return !1;
                }
            default:
                return WU1(e.kind);
        }
    }
    registerShellKiller(e) {
        return this.shellKiller = e, Pn(()=>{
            this.shellKiller === e && (this.shellKiller = void 0);
        });
    }
    registerShellOpener(e) {
        return this.shellOpener = e, Pn(()=>{
            this.shellOpener === e && (this.shellOpener = void 0);
        });
    }
    registerSubagentKiller(e) {
        const n = {
            killer: e
        };
        return this.subagentKillers.push(n), Pn(()=>{
            const i = this.subagentKillers.indexOf(n);
            i !== -1 && this.subagentKillers.splice(i, 1);
        });
    }
}, C$a.defaultMaxSettledTerminalShellIdsPerConversation = 1024, TTm = C$a, ETm = new TTm, ZD = jn("backgroundWorkService"), ITm = class extends st {
    constructor(t = ETm){
        super(), this.store = t, this.onDidEnqueueCompletion = t.onDidEnqueueCompletion, this.onDidSettleCompletion = t.onDidSettleCompletion, this.backgroundWorkItems = t.backgroundWorkItems, this.pendingCompletionsRevision = t.pendingCompletionsRevision, this.unsettledCompletionCount = t.unsettledCompletionCount;
    }
    getComposerBackgroundWork(t) {
        return this.store.getComposerBackgroundWork(t);
    }
    enqueue(t) {
        this.store.enqueue(t);
    }
    pull(t) {
        return this.store.pull(t);
    }
    ack(t) {
        this.store.ack(t);
    }
    nack(t, e) {
        this.store.nack(t, e);
    }
    suppress(t, e) {
        this.store.suppress(t, e);
    }
    enqueueCompletion(t) {
        this.store.enqueueCompletion(t);
    }
    markAwaitedCompletion(t, e) {
        this.store.markAwaitedCompletion(t, e);
    }
    unmarkAwaitedCompletion(t, e) {
        this.store.unmarkAwaitedCompletion(t, e);
    }
    clearComposerCompletionState(t) {
        this.store.clearComposerCompletionState(t);
    }
    muteComposerCompletions(t) {
        this.store.muteComposerCompletions(t);
    }
    unmuteComposerCompletions(t) {
        this.store.unmuteComposerCompletions(t);
    }
    hasPendingCompletions(t) {
        return this.store.hasPendingCompletions(t);
    }
    drainCompletions(t) {
        return this.store.drainCompletions(t);
    }
    replaceShellWorkSnapshot(t) {
        this.store.replaceShellWorkSnapshot(t);
    }
    replaceSessionBackgroundWork(t, e, n) {
        this.store.replaceSessionBackgroundWork(t, e, n);
    }
    setHostSessionMirrorActive(t, e) {
        this.store.setHostSessionMirrorActive(t, e);
    }
    isHostSessionMirrorActive(t) {
        return this.store.isHostSessionMirrorActive(t);
    }
    acquireHostCompletionDelivery(t) {
        return this.store.acquireHostCompletionDelivery(t);
    }
    upsertShellWork(t) {
        this.store.upsertShellWork(t);
    }
    annotateShellWorkToolCallId(t, e, n) {
        this.store.annotateShellWorkToolCallId(t, e, n);
    }
    clearShellWork(t) {
        this.store.clearShellWork(t);
    }
    async openBackgroundShell(t) {
        return this.store.openBackgroundShell(t);
    }
    upsertSubagentWork(t) {
        this.store.upsertSubagentWork(t);
    }
    clearSubagentWork(t) {
        this.store.clearSubagentWork(t);
    }
    async killBackgroundWork(t) {
        return this.store.killBackgroundWork(t);
    }
    registerShellKiller(t) {
        return this.store.registerShellKiller(t);
    }
    registerShellOpener(t) {
        return this.store.registerShellOpener(t);
    }
    registerSubagentKiller(t) {
        return this.store.registerSubagentKiller(t);
    }
}, bn(ZD, ITm, 1);

}
