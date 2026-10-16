import { Ddo, td } from "./A3u.js";
import { Cl, Se, cn, po, rn, we, z3e } from "./HVr.js";
import { Hm } from "./agent_pb.js";
import { Rm, bI, bn } from "./async.js";
import { VNn, e2n } from "./background_composer_pb.js";
import { CSh, _Sh, cE, wSh } from "./cgh.js";
import { U1e } from "./cloudAgentRepositoryModel.js";
import { Xt_ } from "./cloudAgentStreamPrefetch.js";
import { TN } from "./connectErrors.js";
import { x } from "./tslib.es6.js";
import { zn } from "./uuid.js";
import { lo, on } from "./window.js";
import { zee } from "./xmo.js";
async function Yt_(e, t, n, i, r, s) {
    const o = zn(), a = new AbortController, c = r ? AbortSignal.any([
        r,
        a.signal
    ]) : a.signal, l = n.beginWriteFence(e);
    try {
        const u = await n.listBlobs(e);
        if (c.aborted) return;
        const h = await t.backgroundComposerClient();
        if (c.aborted) return;
        const p = _Sh(u), g = wSh(s, {
            disableExposureLog: !0
        }), f = h.streamConversation(new e2n({
            bcId: e,
            purpose: VNn.PREWARM,
            filterHeavyStepData: !0,
            shouldSendPrefetchedBlobsFirst: !0,
            prefetchOnlyLastStepPerTurn: !0,
            maxBlobsAfterPrefetch: 30,
            ...CSh(g),
            preFetchedBlobIds: p.preFetchedBlobIds,
            preFetchedBlobFilter: p.preFetchedBlobFilter
        }), {
            signal: c,
            headers: td(o)
        });
        for await (const v of f){
            if (c.aborted) return;
            switch(v.message.case){
                case "prefetchedBlobs":
                    aAh(e, n, v.message.value.preFetchedBlobs, l);
                    break;
                case "initialState":
                    {
                        aAh(e, n, v.message.value.preFetchedBlobs, l);
                        const b = v.message.value.cloudAgentState, y = b?.conversationState ?? new Hm, T = b?.lastInteractionUpdateOffsetKey;
                        if (T) {
                            const E = await n.getPersistedOffsetKey(e).catch(()=>{});
                            if (c.aborted) return;
                            E !== void 0 && n.armStateOffsetWatermark({
                                agentId: e,
                                offsetKey: E,
                                fence: l
                            }), E !== void 0 && zee(T, E) < 0 ? i.info("background_composer", "prefetchAndCacheConversation: skipping save, cache holds a newer offsetKey", {
                                bcId: e,
                                requestId: o
                            }) : n.saveState(e, y, T, l);
                        }
                        i.info("background_composer", "prefetchAndCacheConversation: got initial state, returning", {
                            bcId: e,
                            requestId: o
                        });
                        return;
                    }
                case "cloudAgentStateWithIdAndOffset":
                case "interactionUpdateWithOffset":
                case "interactionQueryWithOffset":
                case "workflowStatusWithOffset":
                case "transientErrorWithOffset":
                case "streamSignal":
                case "devBannerMessage":
                case "workerLifecycleEventWithOffset":
                case "readOnlySharedPodLifecycleEventWithOffset":
                case "streamHeartbeat":
                case "interactionSettledWithOffset":
                case void 0:
                    break;
                default:
                    {
                        const b = v.message;
                        break;
                    }
            }
        }
    } finally{
        a.abort();
    }
}
function aAh(e, t, n, i) {
    for (const r of n)t.setBlob(e, r.id, r.value, i);
}
function Zt_(e, t) {
    if (e?.status === void 0 || cE(e.status)) return !1;
    const n = Math.max(e.rowUpdatedAtMs ?? 0, e.updatedAt ?? 0, e.lastMessageActivityAtMs ?? 0);
    return n > 0 && n + uAh <= t;
}
var cAh, lAh, uAh, dAh, hAh, pAh, mAh;
export { Yt_, Zt_, aAh, cAh, dAh, hAh, lAh, mAh, pAh, uAh };
var __wakaru_Qt__initialized = false;
export function Qt_() {
if (__wakaru_Qt__initialized) return;
__wakaru_Qt__initialized = true;
"use strict";
x(), lo(), bn(), Se(), TN(), U1e(), Xt_(), cAh = 300 * 1e3, lAh = 300 * 1e3, uAh = 300 * 1e3, dAh = 3, hAh = class {
    constructor(e = dAh){
        if (this.maxConcurrency = e, this.queued = [], this.running = 0, this.nextSequence = 0, this.disposed = !1, e < 1) throw new Error("Cloud agent prewarm concurrency must be positive");
    }
    schedule(e, t) {
        if (this.disposed) throw new Error("Cloud agent prewarm scheduler has been disposed");
        const n = {
            sequence: this.nextSequence++,
            priority: e,
            run: t
        };
        return this.queued.push(n), this.consume(), rn(()=>{
            const i = this.queued.indexOf(n);
            i !== -1 && this.queued.splice(i, 1);
        });
    }
    consume() {
        for(; !this.disposed && this.running < this.maxConcurrency && this.queued.length > 0;){
            let e = 0;
            for(let i = 1; i < this.queued.length; i++){
                const r = this.queued[i], s = this.queued[e];
                (r.priority > s.priority || r.priority === s.priority && r.sequence < s.sequence) && (e = i);
            }
            const [t] = this.queued.splice(e, 1);
            this.running++;
            let n;
            try {
                n = t.run();
            } catch  {
                this.didFinishPrewarm();
                continue;
            }
            n.then(()=>this.didFinishPrewarm(), ()=>this.didFinishPrewarm());
        }
    }
    didFinishPrewarm() {
        this.running--, this.consume();
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.queued.length = 0);
    }
}, pAh = class extends z3e {
    constructor(e, t){
        super(), this.createReference = e, this.activeReferences = new Set, this.referencedObjectsByAgentId = new Map, this.pendingDisposals = new Map, this.pendingDisposalTimers = new po, this.cacheClearListener = t(()=>this.disposeAll());
    }
    createReferencedObject(e) {
        const t = this.pendingDisposals.get(e);
        if (t !== void 0) return this.pendingDisposalTimers.deleteAndDispose(e), this.pendingDisposals.delete(e), this.referencedObjectsByAgentId.set(e, t), t;
        const n = this.createReference(e);
        return this.referencedObjectsByAgentId.set(e, n), n;
    }
    destroyReferencedObject(e, t) {
        this.pendingDisposals.set(e, t), this.pendingDisposalTimers.set(e, Cl(()=>{
            this.pendingDisposals.get(e) === t && (this.pendingDisposals.delete(e), this.pendingDisposalTimers.deleteAndDispose(e), this.referencedObjectsByAgentId.get(e) === t && this.referencedObjectsByAgentId.delete(e), t.dispose());
        }, 0));
    }
    acquireDisposable(e) {
        const t = this.acquire(e);
        this.activeReferences.add(t);
        let n = !1;
        return {
            dispose: ()=>{
                n || (n = !0, this.activeReferences.delete(t), t.dispose());
            }
        };
    }
    cancelPrefetch(e) {
        this.referencedObjectsByAgentId.get(e)?.cancelPrefetch();
    }
    preemptHeavyPrefetches(e) {
        for (const [t, n] of this.referencedObjectsByAgentId)t !== e && n.preemptHeavyPrefetch();
    }
    disposeAll() {
        for (const e of [
            ...this.activeReferences
        ])e.dispose();
        this.activeReferences.clear();
        for (const [e, t] of this.pendingDisposals)this.pendingDisposalTimers.deleteAndDispose(e), this.referencedObjectsByAgentId.get(e) === t && this.referencedObjectsByAgentId.delete(e), t.dispose();
        this.pendingDisposals.clear(), this.pendingDisposalTimers.clearAndDisposeAll(), this.referencedObjectsByAgentId.clear();
    }
    dispose() {
        this.cacheClearListener.dispose(), this.disposeAll(), this.pendingDisposalTimers.dispose();
    }
}, mAh = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p){
        super(), this.agentId = e, this.aiService = t, this.cloudAgentCacheService = n, this.structuredLogService = i, this.prStatePoller = r, this.cursorServerUrlWarmupService = s, this.getConnectionTokenAgentId = o, this.getCloudAgent = a, this.hasServerAgentList = c, this.prewarmScheduler = l, this.focus = u, this.onDidPrefetchConversationState = h, this.experimentService = p, this.disposed = !1, this.prefetchScheduledTask = this._register(new cn), this.prefetchPollTimer = this._register(new bI), this.missedPollWhileUnfocused = !1, this.ensureConnectionToken(), this.startPrefetch(), this.prefetchPollTimer.cancelAndSet(()=>this.onPollTick(), lAh, on), this._register(u.onDidChangeFocus((g)=>this.onDidChangeFocus(g)));
    }
    onPollTick() {
        this.focus.hasFocus ? this.startPrefetch() && (this.missedPollWhileUnfocused = !1) : this.missedPollWhileUnfocused = !0;
    }
    onDidChangeFocus(e) {
        e && this.missedPollWhileUnfocused && this.startPrefetch() && (this.missedPollWhileUnfocused = !1);
    }
    ensureConnectionToken() {
        this.cursorServerUrlWarmupService.ensureConnectionToken(this.getConnectionTokenAgentId(), {
            usePrivateWorker: this.getCloudAgent()?.usePrivateWorker
        });
    }
    async isUnchangedSince(e) {
        return await this.hasServerAgentList() && Zt_(this.getCloudAgent(), e);
    }
    async prefetchIfStale(e) {
        const t = await this.cloudAgentCacheService.getStateSavedAt(this.agentId).catch(()=>{});
        if (e.signal.aborted) return;
        const n = t === void 0 || Date.now() - t > cAh && !await this.isUnchangedSince(t);
        if (e.signal.aborted) return;
        const i = this.getCloudAgent();
        await Rm.settled([
            n ? Yt_(this.agentId, this.aiService, this.cloudAgentCacheService, this.structuredLogService, e.signal, this.experimentService) : Promise.resolve(),
            this.prStatePoller.prefetch(this.agentId, i?.prUrl, i?.branchName, e.signal)
        ]), !this.disposed && this.onDidPrefetchConversationState();
    }
    async runPrefetch(e) {
        try {
            await this.prefetchIfStale(e);
        } catch (t) {
            if (!e.signal.aborted) {
                const n = {
                    agentId: this.agentId,
                    error: t instanceof Error ? t : void 0
                };
                Ddo(t) === "debug" ? this.structuredLogService.debug("background_composer", "CloudAgentRepository: prefetch failed", n) : this.structuredLogService.warn("background_composer", "CloudAgentRepository: prefetch failed", n);
            }
        } finally{
            this.prefetchAbortController === e && (this.prefetchScheduledTask.clear(), this.prefetchAbortController = void 0);
        }
    }
    startPrefetch() {
        if (this.disposed || this.prefetchAbortController !== void 0) return !1;
        const e = new AbortController;
        this.prefetchAbortController = e;
        const t = this.getCloudAgent(), n = t?.updatedAt ?? t?.createdAt ?? 0;
        return this.prefetchScheduledTask.value = this.prewarmScheduler.schedule(n, ()=>this.runPrefetch(e)), !0;
    }
    cancelPrefetch() {
        const e = this.prefetchAbortController;
        e && (this.prefetchScheduledTask.clear(), e.abort(), this.prefetchAbortController = void 0);
    }
    preemptHeavyPrefetch() {
        this.cancelPrefetch();
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.cancelPrefetch(), super.dispose());
    }
};

}
