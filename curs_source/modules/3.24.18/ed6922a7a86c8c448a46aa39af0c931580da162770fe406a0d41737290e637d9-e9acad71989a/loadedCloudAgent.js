import { gji, mji, pjd } from "./A3u.js";
import { He, Kl, Pk, Rl, Se, bt, cn, ja, u3, ve } from "./HVr.js";
import { edo, go, hm, tdo } from "./background_composer_pb.js";
import { IFn, cE, zE } from "./cgh.js";
import { Jxh, eIh, nIh, tIh } from "./cloudAgentAbort.js";
import { U1e } from "./cloudAgentRepositoryModel.js";
import { h3n } from "./cloudAgentStream.js";
import { rwt } from "./conversationStreamOffsets.js";
import { pF } from "./githubUtils.js";
import { FTo } from "./pullRequestStateEquivalence.js";
import { GV, Omt } from "./qIc.js";
import { N1, gh } from "./reactive.js";
import { jS } from "./store.js";
import { aSo } from "./toolFormerDataMergeUtils.js";
import { nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { KYi } from "./xmo.js";
function it_(e) {
    return ja(e) ? !0 : pjd(e) && !mji(e);
}
async function Qxh(e) {
    let t, n = 0;
    for(let i = 0; i < Jxh; i++){
        if (i > 0 && await Kl(Omt(i - 1, eIh, tIh, e.randomFn)), e.isDisposed?.()) throw new Rl;
        n++;
        try {
            await e.getClient().pauseBackgroundComposer({
                bcId: e.bcId
            });
            return;
        } catch (r) {
            if (gji(r)) return;
            if (t = r, !it_(r)) break;
        }
    }
    throw e.structuredLogService.warn("background_composer", "Failed to signal cloud agent abort", {
        bcId: e.bcId,
        attempts: String(n),
        error: t instanceof Error ? t : void 0
    }), t;
}
function _Ji(e, t) {
    if (Object.is(e, t)) return !0;
    if (typeof e == "string" || typeof t == "string" || e === null || t === null || typeof e != "object" || typeof t != "object") return !1;
    const n = Array.isArray(e), i = Array.isArray(t);
    if (n !== i) return !1;
    if (n && i) {
        if (e.length !== t.length) return !1;
        for(let c = 0; c < e.length; c++)if (!_Ji(e[c], t[c])) return !1;
        return !0;
    }
    const r = e, s = t, o = Object.keys(r), a = new Set;
    for (const c of o)if (a.add(c), !_Ji(r[c], s[c])) return !1;
    for (const c of Object.keys(s))if (!a.has(c) && !_Ji(void 0, s[c])) return !1;
    return !0;
}
function OTo(e, t) {
    return _Ji(e, t);
}
var iIh, rIh, sIh, BTo;
export { BTo, OTo, Qxh, _Ji, iIh, it_, rIh, sIh };
var __wakaru_oIh_initialized = false;
export function oIh() {
if (__wakaru_oIh_initialized) return;
__wakaru_oIh_initialized = true;
"use strict";
x(), jS(), Se(), bt(), hm(), ql(), N1(), aSo(), nIh(), FTo(), pF(), U1e(), h3n(), rwt(), iIh = 3e4, rIh = 60 * 1e3, sIh = {
    submit: !0,
    followup_submitted: !0,
    interaction_answered: !0,
    row_resumed: !0,
    load_selected: !1,
    transport_change: !1,
    rebuilt_without_stream: !1
}, BTo = class fAa {
    constructor(t){
        if (this._store = u3(new He), this._referenceLeases = new Set, this._disposed = !1, this._forceDisposing = !1, this._streamConnectedDisposable = this._register(new cn), this._connected = new gh(!1), this._onWillForceDispose = this._register(new ve), this._onDidBecomeIdle = this._register(new ve), this._onDidChangePrState = this._register(new ve), this._pullRequestStates = new gh([]), this._extraPullRequestStateByPrUrl = new Map, this.connected = this._connected, this.onWillForceDispose = this._onWillForceDispose.event, this.onDidBecomeIdle = this._onDidBecomeIdle.event, this.onDidChangePrState = this._onDidChangePrState.event, this.pullRequestState = new gh(void 0), this.agentId = t.agentId, this.header = t.header, this.workspaceFactory = t.workspaceFactory, this.pullRequestStates = this._pullRequestStates, this._composerDataHandle = t.composerDataHandle, this._agentEnvironment = t.agentEnvironment, this.planHandler = t.planHandler, this._privateWorkerBranchGate = t.privateWorkerBranchGate, this._getBackgroundComposerClient = t.getBackgroundComposerClient, this._composerDataService = t.composerDataService, this._structuredLogService = t.structuredLogService, this._abortCallbacks = t.abortCallbacks, this._randomFn = t.randomFn ?? Math.random, this._startPullRequestStateBurst = t.callbacks.startPullRequestStateBurst, this._refreshPullRequestStateNow = t.callbacks.refreshPullRequestStateNow, this._triggerReconnect = t.callbacks.triggerReconnect, this._onDispose = t.callbacks.onDispose, this._ensureActiveStreamAttachedForRecovery = t.callbacks.ensureActiveStreamAttachedForRecovery, t.backgroundComposerDataSource) {
            const [n, i] = GV(fAa.toBackgroundComposerData(t.backgroundComposerDataSource));
            this.backgroundComposerData = n, this.setBackgroundComposerData = i;
        } else this.backgroundComposerData = void 0, this.setBackgroundComposerData = void 0;
        this._setPullRequestStateEntries([]), this.attachStream(t.stream);
    }
    static toDiffStats(t) {
        if (!(t.filesChanged === void 0 && t.linesAdded === void 0 && t.linesRemoved === void 0)) return {
            totalFiles: t.filesChanged ?? 0,
            totalAdded: t.linesAdded ?? 0,
            totalRemoved: t.linesRemoved ?? 0
        };
    }
    static toBackgroundComposerData(t) {
        return {
            bcId: t.bcId,
            createdAt: t.createdAt,
            updatedAt: t.updatedAt,
            workspaceRootPath: t.workspaceRootPath,
            warmedCommit: void 0,
            isOwnedByDifferentTeamMember: t.isOwnedByDifferentTeamMember,
            name: t.name,
            branchName: t.branchName,
            hasStartedVm: t.hasStartedVm,
            isArchived: t.isArchived,
            isUnread: t.isUnread,
            promptGroupId: t.promptGroupId,
            status: t.status,
            workflowStatus: t.workflowStatus,
            isLoaded: !0,
            modelDetails: t.modelDetails,
            isKilled: t.isKilled,
            source: t.source,
            githubIssueId: t.githubIssueId,
            linearIssueId: t.linearIssueId,
            prUrl: t.prUrl,
            externalSourceMetadata: t.externalSourceMetadata,
            usePrivateWorker: t.usePrivateWorker,
            diffStats: fAa.toDiffStats(t),
            cachedFileCount: t.filesChanged
        };
    }
    _setPullRequestStateEntries(t) {
        const n = this.header.trackedGitRepos?.value, i = n?.[0], r = i?.repoPath ?? "", s = i?.repoUrl.value, o = i?.activeBranchName.value?.trim(), a = [], c = new Set, l = new Set, u = (g)=>{
            const f = g.repoUrl?.trim();
            return !f || !n ? i : n.find((v)=>IFn(v.repoUrl.value, f)) ?? i;
        };
        for(let g = 0; g < t.length; g += 1){
            const f = t[g], v = f.prUrl?.trim(), b = v ? zE(v) : void 0;
            if (b) {
                if (c.has(b)) continue;
                c.add(b);
            }
            const y = u(f), T = y?.repoPath ?? r, E = f.repoUrl ?? y?.repoUrl.value, A = f.branchName?.trim() || o || "";
            if (g === 0) {
                a.push({
                    repoPath: T,
                    repoUrl: E,
                    branchName: A,
                    pullRequestState: this.pullRequestState
                });
                continue;
            }
            const R = b || `branch:${A}`;
            let D = this._extraPullRequestStateByPrUrl.get(R);
            const P = {
                type: "resolved",
                value: f
            };
            D ? D.set(P) : (D = new gh(P), this._extraPullRequestStateByPrUrl.set(R, D)), l.add(R), a.push({
                repoPath: T,
                repoUrl: E,
                branchName: A,
                pullRequestState: D
            });
        }
        a.length === 0 && a.push({
            repoPath: r,
            repoUrl: s,
            branchName: o || "",
            pullRequestState: this.pullRequestState
        });
        for (const g of this._extraPullRequestStateByPrUrl.keys())l.has(g) || this._extraPullRequestStateByPrUrl.delete(g);
        const h = this._pullRequestStates.value, p = h.length === a.length && h.every((g, f)=>g.repoPath === a[f]?.repoPath && g.repoUrl === a[f]?.repoUrl && g.branchName === a[f]?.branchName && g.pullRequestState === a[f]?.pullRequestState);
        return p || this._pullRequestStates.set(a), !p;
    }
    startPullRequestStateBurst(t) {
        this._startPullRequestStateBurst(t);
    }
    refreshPullRequestStateNow(t) {
        this._refreshPullRequestStateNow(t);
    }
    getPullRequestEntriesForRepoPath(t) {
        return this.pullRequestStates.value.filter((i)=>i.repoPath === t);
    }
    async triggerReconnect() {
        await this._triggerReconnect();
    }
    async enablePullRequestAutoMerge(t, n) {
        const i = await this._getBackgroundComposerClient().enablePullRequestAutoMerge(new edo({
            prUrl: t,
            mergeMethod: n
        }));
        if (!i.success) throw new Error(i.error || "Failed to enable pull request auto-merge");
        this.startPullRequestStateBurst({
            skipCache: !0
        });
    }
    async disablePullRequestAutoMerge(t) {
        const n = await this._getBackgroundComposerClient().disablePullRequestAutoMerge(new tdo({
            prUrl: t
        }));
        if (!n.success) throw new Error(n.error || "Failed to disable pull request auto-merge");
        this.startPullRequestStateBurst({
            skipCache: !0
        });
    }
    setResolvedPullRequestState(t) {
        this.setResolvedPullRequestStates([
            t
        ]);
    }
    setResolvedPullRequestStates(t) {
        this.updateResolvedPullRequestStates(t), this._onDidChangePrState.fire();
    }
    updateResolvedPullRequestStates(t) {
        const n = t[0], i = this.pullRequestState.value, r = i?.type === "resolved" ? i.value : void 0, s = i?.type !== "resolved" || !OTo(r, n);
        s && this.pullRequestState.set({
            type: "resolved",
            value: n
        });
        const o = this._setPullRequestStateEntries(t);
        return s || o;
    }
    notifyDidChangePrState() {
        this._onDidChangePrState.fire();
    }
    get isDisposed() {
        return this._disposed;
    }
    get disposeReason() {
        return this._disposeReason;
    }
    get hasActiveReferences() {
        return this._referenceLeases.size > 0;
    }
    get isWorkflowInProgress() {
        return cE(this.backgroundComposerData?.status);
    }
    get composerDataHandle() {
        if (!this._composerDataHandle) throw new Error(`Cannot access composerDataHandle for disposed LoadedCloudAgent: ${this.agentId}`);
        return this._composerDataHandle;
    }
    get agentEnvironment() {
        if (!this._agentEnvironment) throw new Error(`Cannot access agentEnvironment for disposed LoadedCloudAgent: ${this.agentId}`);
        return this._agentEnvironment;
    }
    get privateWorkerBranchGate() {
        return this._privateWorkerBranchGate;
    }
    updateBackgroundComposerLifecycle(t) {
        if (!this.setBackgroundComposerData) return;
        "workflowStatus" in t && this.setBackgroundComposerData("workflowStatus", t.workflowStatus), "status" in t && (this.setBackgroundComposerData("status", t.status), cE(t.status) || this.setBackgroundComposerData("workflowStatus", void 0)), "isKilled" in t && this.setBackgroundComposerData("isKilled", t.isKilled);
        const n = this._composerDataHandle;
        !n?.data || n.data.status !== "generating" || !(t.isKilled === !0 || this.backgroundComposerData?.isKilled === !0 || "status" in t && !cE(t.status)) || (n.setData("status", "completed"), n.setData("generatingBubbleIds", []), n.setData("chatGenerationUUID", void 0));
    }
    attachStream(t) {
        if (this._streamConnectedDisposable.clear(), this._stream = t, this.planHandler.attachStream(t), !t) {
            this._connected.set(!1);
            return;
        }
        this._connected.set(t.connected.value), this._streamConnectedDisposable.value = t.connected.onChange((n)=>{
            this._connected.set(n);
        });
    }
    async _waitForActiveStreamConnected(t, n) {
        t.connected.value || await new Promise((i, r)=>{
            const s = setTimeout(()=>{
                o.dispose(), r(new Error("Timed out waiting for stream connection after recovery nudge"));
            }, n), o = t.connected.onChange((a)=>{
                a && (clearTimeout(s), o.dispose(), i());
            });
        });
    }
    async recoverStreamIfNeeded(t) {
        const { reason: n, cloudAgentStatus: i } = t, r = this._stream;
        if (r?.connected.value || this._disposed) return r;
        const s = this.streamRecoveryInFlight;
        if (s) return await s, this._stream;
        this._structuredLogService.info("background_composer", "CloudAgentRepository: recovering stream connection", {
            agentId: this.agentId,
            reason: n,
            cloudAgentStatus: i,
            hadStream: !!r,
            wasConnected: r?.connected.value ?? !1,
            streamLoopExited: r?.isStreamLoopExited?.() ?? !1
        });
        const o = (async ()=>{
            try {
                const a = this._stream;
                if (!a) {
                    await this._ensureActiveStreamAttachedForRecovery();
                    return;
                }
                if (a.connected.value) return;
                if (a.isStreamLoopExited?.()) {
                    await this._ensureActiveStreamAttachedForRecovery();
                    return;
                }
                const c = this._waitForActiveStreamConnected(a, iIh);
                a.requestReconnect(), await c;
            } catch (a) {
                this._structuredLogService.warn("background_composer", "CloudAgentRepository: failed to recover stream connection", {
                    agentId: this.agentId,
                    reason: n,
                    error: a instanceof Error ? a : void 0
                });
            }
        })();
        this.streamRecoveryInFlight = o;
        try {
            await o;
        } finally{
            this.streamRecoveryInFlight === o && delete this.streamRecoveryInFlight;
        }
        return this._stream ?? r;
    }
    abortChat() {
        this._abortChat(!1, !1);
    }
    abortChatAndWait() {
        return this._abortChat(!0, !0);
    }
    async _abortChat(t, n) {
        if (this._disposed) return;
        const i = this.composerDataHandle.data.status === "generating" || !!this.composerDataHandle.data.chatGenerationUUID || (this.composerDataHandle.data.generatingBubbleIds?.length ?? 0) > 0, r = this.backgroundComposerData?.status === go.RUNNING || this.backgroundComposerData?.status === go.CREATING, s = i || r;
        if (!s && !n) return;
        let o;
        s && (o = this._applyOptimisticAbortToComposerData(), this._abortCallbacks?.onAbortStarted?.());
        try {
            await Qxh({
                bcId: this.agentId,
                getClient: this._getBackgroundComposerClient,
                structuredLogService: this._structuredLogService,
                randomFn: this._randomFn,
                isDisposed: ()=>this._disposed
            });
        } catch (a) {
            if (o !== void 0 && (this._abortCallbacks?.onAbortFailed?.(), this._rollbackOptimisticAbortComposerData(o)), t) throw a;
        }
    }
    _applyOptimisticAbortToComposerData() {
        const t = {
            status: this.composerDataHandle.data.status,
            chatGenerationUUID: this.composerDataHandle.data.chatGenerationUUID,
            generatingBubbleIds: [
                ...this.composerDataHandle.data.generatingBubbleIds ?? []
            ],
            askQuestionBubbles: this._snapshotPendingAskQuestionBubbles()
        };
        this._composerDataService.setLoadingToolFormerToolsToCancelled(this.composerDataHandle);
        const n = this._composerDataService.getToolFormer?.(this.composerDataHandle);
        return n ? n.setPendingAskQuestionToolsToCancelled() : this._cancelPendingAskQuestionBubblesViaMap(), this.composerDataHandle.setData("status", "aborted"), this.composerDataHandle.setData("chatGenerationUUID", void 0), this.composerDataHandle.setData("generatingBubbleIds", []), t;
    }
    _rollbackOptimisticAbortComposerData(t) {
        this._disposed || (this._restorePendingAskQuestionBubbles(t.askQuestionBubbles), this.composerDataHandle.data.status === "aborted" && (this.composerDataHandle.setData("status", t.status), this.composerDataHandle.data.chatGenerationUUID === void 0 && this.composerDataHandle.setData("chatGenerationUUID", t.chatGenerationUUID), (this.composerDataHandle.data.generatingBubbleIds?.length ?? 0) === 0 && this.composerDataHandle.setData("generatingBubbleIds", t.generatingBubbleIds)));
    }
    _snapshotPendingAskQuestionBubbles() {
        const t = this.composerDataHandle.data.conversationMap;
        if (!t) return [];
        const n = [];
        for (const [i, r] of Object.entries(t)){
            const s = r?.toolFormerData;
            if (!s || s.tool !== nt.ASK_QUESTION) continue;
            const a = s.additionalData?.status ?? "pending";
            a !== "pending" && a !== "loading" || n.push({
                bubbleId: i,
                snapshot: {
                    additionalData: s.additionalData !== void 0 && s.additionalData !== null && typeof s.additionalData == "object" ? {
                        ...s.additionalData
                    } : s.additionalData,
                    result: s.result,
                    status: s.status
                }
            });
        }
        return n;
    }
    _cancelPendingAskQuestionBubblesViaMap() {
        const t = this.composerDataHandle.data.conversationMap;
        if (t) for (const [n, i] of Object.entries(t)){
            const r = i?.toolFormerData;
            if (!r || r.tool !== nt.ASK_QUESTION) continue;
            const s = r.additionalData, o = s?.status ?? "pending";
            o !== "pending" && o !== "loading" || this._composerDataService.updateComposerBubble(this.composerDataHandle, n, {
                toolFormerData: KYi(r, {
                    status: "cancelled",
                    additionalData: {
                        ...s,
                        status: "cancelled",
                        skipReason: "user"
                    }
                })
            });
        }
    }
    _restorePendingAskQuestionBubbles(t) {
        if (t.length === 0) return;
        const n = this.composerDataHandle.data.conversationMap;
        for (const i of t){
            const r = n?.[i.bubbleId]?.toolFormerData?.additionalData;
            if (r?.status !== "cancelled" || r.skipReason !== "user") continue;
            const s = n?.[i.bubbleId]?.toolFormerData;
            s && this._composerDataService.updateComposerBubble(this.composerDataHandle, i.bubbleId, {
                toolFormerData: KYi(s, i.snapshot)
            });
        }
    }
    createRef(t) {
        if (this._disposed) throw new Error(`Cannot create ref to disposed LoadedCloudAgent: ${this.agentId}`);
        if (this._forceDisposing) throw new Error(`Cannot create ref while force-disposing LoadedCloudAgent: ${this.agentId}`);
        let n = this, i = !1;
        const r = {
            dispose: ()=>{
                i || (i = !0, n._releaseReferenceLease(r));
            },
            retarget: (s)=>{
                i || n === s || (s._acceptReferenceLease(r), n._referenceLeases.delete(r), n = s, t?.(s));
            }
        };
        return this._acceptReferenceLease(r), r;
    }
    _acceptReferenceLease(t) {
        if (this._disposed) throw new Error(`Cannot transfer ref to disposed LoadedCloudAgent: ${this.agentId}`);
        if (this._forceDisposing) throw new Error(`Cannot transfer ref while force-disposing LoadedCloudAgent: ${this.agentId}`);
        this._disposeTimeoutId !== void 0 && (clearTimeout(this._disposeTimeoutId), this._disposeTimeoutId = void 0), this._referenceLeases.add(t);
    }
    _releaseReferenceLease(t) {
        this._referenceLeases.delete(t) && this._referenceLeases.size === 0 && !this._forceDisposing && (this._scheduleDispose(), this._onDidBecomeIdle.fire(this.agentId));
    }
    forceDispose(t = "force") {
        this._disposed || this._forceDisposing || (this._forceDisposing = !0, this._onWillForceDispose.fire(), this._dispose(t));
    }
    forceDisposeAsSupersededBy(t) {
        if (!(!t.isDisposed && !t._forceDisposing)) {
            this.forceDispose();
            return;
        }
        for (const r of [
            ...this._referenceLeases
        ])r.retarget(t);
        this._stream !== void 0 && this._stream === t._stream && this.attachStream(void 0), this._dispose("superseded");
    }
    _scheduleDispose() {
        this._disposed || this._disposeTimeoutId !== void 0 || (this._disposeTimeoutId = setTimeout(()=>{
            this._disposeTimeoutId = void 0, this._referenceLeases.size === 0 && this._dispose("idle_timeout");
        }, rIh));
    }
    _register(t) {
        return this._store.add(t);
    }
    _logDispose(t) {
        const n = this._stream;
        this._structuredLogService.info?.("background_composer", "CloudAgentRepository: loaded cloud agent disposed", {
            agentId: this.agentId,
            reason: t,
            cloudAgentStatus: this.backgroundComposerData?.status,
            workflowStatus: this.backgroundComposerData?.workflowStatus,
            workflowInProgress: this.isWorkflowInProgress,
            headerStatus: this.header.status?.value,
            handleStatus: this._composerDataHandle?.data?.status,
            hadStream: n !== void 0,
            streamConnected: n?.connected?.value ?? !1,
            streamLoopExited: n?.isStreamLoopExited?.() ?? !1,
            leaseCount: this._referenceLeases.size
        });
    }
    _dispose(t) {
        if (!this._disposed) {
            this._disposed = !0, this._disposeReason = t, this._disposeTimeoutId !== void 0 && (clearTimeout(this._disposeTimeoutId), this._disposeTimeoutId = void 0), this._logDispose(t), this._streamConnectedDisposable.clear(), this._connected.set(!1), this._stream?.abort(), delete this.streamRecoveryInFlight;
            try {
                Pk(this._onWillForceDispose, this._onDidBecomeIdle, this._onDidChangePrState, this._agentEnvironment, this.planHandler, this._privateWorkerBranchGate, {
                    dispose: ()=>this._onDispose(this)
                });
            } finally{
                this._store.dispose(), this._composerDataHandle = void 0, this._agentEnvironment = void 0, this._privateWorkerBranchGate = void 0;
            }
        }
    }
};

}
