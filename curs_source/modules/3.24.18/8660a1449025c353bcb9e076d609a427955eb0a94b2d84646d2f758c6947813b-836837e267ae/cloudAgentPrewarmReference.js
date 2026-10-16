import { Ec, Pn, Qe, Vn, da, st, udn } from "./Iwo.js";
import { Ckk, kkk } from "./Ycg.js";
import { AI, I_, qn } from "./async.js";
import { jCe } from "./cloudAgentRepositoryModel.js";
import { wkk } from "./cloudAgentStreamPrefetch.js";
import { Ag } from "./connectErrors.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
import { fqa } from "./yBp.js";
var Kfg, Yfg, Xfg, Zfg, Qfg, Jfg, evg;
export { Jfg, Kfg, Qfg, Xfg, Yfg, Zfg, evg };
var __wakaru_Tkk_initialized = false;
export function Tkk() {
if (__wakaru_Tkk_initialized) return;
__wakaru_Tkk_initialized = true;
"use strict";
E(), Bs(), qn(), Qe(), Ag(), jCe(), wkk(), Kfg = 300 * 1e3, Yfg = 300 * 1e3, Xfg = 300 * 1e3, Zfg = 3, Qfg = class {
    constructor(t = Zfg){
        if (this.maxConcurrency = t, this.queued = [], this.running = 0, this.nextSequence = 0, this.disposed = !1, t < 1) throw new Error("Cloud agent prewarm concurrency must be positive");
    }
    schedule(t, e) {
        if (this.disposed) throw new Error("Cloud agent prewarm scheduler has been disposed");
        const n = {
            sequence: this.nextSequence++,
            priority: t,
            run: e
        };
        return this.queued.push(n), this.consume(), Pn(()=>{
            const i = this.queued.indexOf(n);
            i !== -1 && this.queued.splice(i, 1);
        });
    }
    consume() {
        for(; !this.disposed && this.running < this.maxConcurrency && this.queued.length > 0;){
            let t = 0;
            for(let i = 1; i < this.queued.length; i++){
                const r = this.queued[i], s = this.queued[t];
                (r.priority > s.priority || r.priority === s.priority && r.sequence < s.sequence) && (t = i);
            }
            const [e] = this.queued.splice(t, 1);
            this.running++;
            let n;
            try {
                n = e.run();
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
}, Jfg = class extends udn {
    constructor(t, e){
        super(), this.createReference = t, this.activeReferences = new Set, this.referencedObjectsByAgentId = new Map, this.pendingDisposals = new Map, this.pendingDisposalTimers = new da, this.cacheClearListener = e(()=>this.disposeAll());
    }
    createReferencedObject(t) {
        const e = this.pendingDisposals.get(t);
        if (e !== void 0) return this.pendingDisposalTimers.deleteAndDispose(t), this.pendingDisposals.delete(t), this.referencedObjectsByAgentId.set(t, e), e;
        const n = this.createReference(t);
        return this.referencedObjectsByAgentId.set(t, n), n;
    }
    destroyReferencedObject(t, e) {
        this.pendingDisposals.set(t, e), this.pendingDisposalTimers.set(t, Ec(()=>{
            this.pendingDisposals.get(t) === e && (this.pendingDisposals.delete(t), this.pendingDisposalTimers.deleteAndDispose(t), this.referencedObjectsByAgentId.get(t) === e && this.referencedObjectsByAgentId.delete(t), e.dispose());
        }, 0));
    }
    acquireDisposable(t) {
        const e = this.acquire(t);
        this.activeReferences.add(e);
        let n = !1;
        return {
            dispose: ()=>{
                n || (n = !0, this.activeReferences.delete(e), e.dispose());
            }
        };
    }
    cancelPrefetch(t) {
        this.referencedObjectsByAgentId.get(t)?.cancelPrefetch();
    }
    preemptHeavyPrefetches(t) {
        for (const [e, n] of this.referencedObjectsByAgentId)e !== t && n.preemptHeavyPrefetch();
    }
    disposeAll() {
        for (const t of [
            ...this.activeReferences
        ])t.dispose();
        this.activeReferences.clear();
        for (const [t, e] of this.pendingDisposals)this.pendingDisposalTimers.deleteAndDispose(t), this.referencedObjectsByAgentId.get(t) === e && this.referencedObjectsByAgentId.delete(t), e.dispose();
        this.pendingDisposals.clear(), this.pendingDisposalTimers.clearAndDisposeAll(), this.referencedObjectsByAgentId.clear();
    }
    dispose() {
        this.cacheClearListener.dispose(), this.disposeAll(), this.pendingDisposalTimers.dispose();
    }
}, evg = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h){
        super(), this.agentId = t, this.aiService = e, this.cloudAgentCacheService = n, this.structuredLogService = i, this.prStatePoller = r, this.cursorServerUrlWarmupService = s, this.getConnectionTokenAgentId = o, this.getCloudAgent = a, this.hasServerAgentList = l, this.prewarmScheduler = c, this.focus = u, this.onDidPrefetchConversationState = d, this.experimentService = h, this.disposed = !1, this.prefetchScheduledTask = this._register(new Vn), this.prefetchPollTimer = this._register(new AI), this.missedPollWhileUnfocused = !1, this.ensureConnectionToken(), this.startPrefetch(), this.prefetchPollTimer.cancelAndSet(()=>this.onPollTick(), Yfg, $t), this._register(u.onDidChangeFocus((p)=>this.onDidChangeFocus(p)));
    }
    onPollTick() {
        this.focus.hasFocus ? this.startPrefetch() && (this.missedPollWhileUnfocused = !1) : this.missedPollWhileUnfocused = !0;
    }
    onDidChangeFocus(t) {
        t && this.missedPollWhileUnfocused && this.startPrefetch() && (this.missedPollWhileUnfocused = !1);
    }
    ensureConnectionToken() {
        this.cursorServerUrlWarmupService.ensureConnectionToken(this.getConnectionTokenAgentId(), {
            usePrivateWorker: this.getCloudAgent()?.usePrivateWorker
        });
    }
    async isUnchangedSince(t) {
        return await this.hasServerAgentList() && Ckk(this.getCloudAgent(), t);
    }
    async prefetchIfStale(t) {
        const e = await this.cloudAgentCacheService.getStateSavedAt(this.agentId).catch(()=>{});
        if (t.signal.aborted) return;
        const n = e === void 0 || Date.now() - e > Kfg && !await this.isUnchangedSince(e);
        if (t.signal.aborted) return;
        const i = this.getCloudAgent();
        await I_.settled([
            n ? kkk(this.agentId, this.aiService, this.cloudAgentCacheService, this.structuredLogService, t.signal, this.experimentService) : Promise.resolve(),
            this.prStatePoller.prefetch(this.agentId, i?.prUrl, i?.branchName, t.signal)
        ]), !this.disposed && this.onDidPrefetchConversationState();
    }
    async runPrefetch(t) {
        try {
            await this.prefetchIfStale(t);
        } catch (e) {
            if (!t.signal.aborted) {
                const n = {
                    agentId: this.agentId,
                    error: e instanceof Error ? e : void 0
                };
                fqa(e) === "debug" ? this.structuredLogService.debug("background_composer", "CloudAgentRepository: prefetch failed", n) : this.structuredLogService.warn("background_composer", "CloudAgentRepository: prefetch failed", n);
            }
        } finally{
            this.prefetchAbortController === t && (this.prefetchScheduledTask.clear(), this.prefetchAbortController = void 0);
        }
    }
    startPrefetch() {
        if (this.disposed || this.prefetchAbortController !== void 0) return !1;
        const t = new AbortController;
        this.prefetchAbortController = t;
        const e = this.getCloudAgent(), n = e?.updatedAt ?? e?.createdAt ?? 0;
        return this.prefetchScheduledTask.value = this.prewarmScheduler.schedule(n, ()=>this.runPrefetch(t)), !0;
    }
    cancelPrefetch() {
        const t = this.prefetchAbortController;
        t && (this.prefetchScheduledTask.clear(), t.abort(), this.prefetchAbortController = void 0);
    }
    preemptHeavyPrefetch() {
        this.cancelPrefetch();
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.cancelPrefetch(), super.dispose());
    }
};

}
