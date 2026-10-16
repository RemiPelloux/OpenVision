import { STt, Zp, fR } from "./Aeg.js";
import { Gt, Nt, Qe, Vn, m1, m4, tt } from "./Iwo.js";
import { Dgg, Jos } from "./Ycg.js";
import { LGa, NGa, Po, pd } from "./background_composer_pb.js";
import { Fgg } from "./cloudAgentAbort.js";
import { jCe } from "./cloudAgentRepositoryModel.js";
import { CEi } from "./cloudAgentStream.js";
import { bqt } from "./conversationStreamOffsets.js";
import { pis } from "./gYa.js";
import { XS } from "./githubUtils.js";
import { eas } from "./pullRequestStateEquivalence.js";
import { Kf, ca } from "./reactive.js";
import { v1 } from "./store.js";
import { Knl } from "./toolFormerDataMergeUtils.js";
import { Ct, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { pwe } from "./ze.js";
var Bgg, Ugg, jgg, Xcl;
export { Bgg, Ugg, Xcl, jgg };
var __wakaru_$gg_initialized = false;
export function $gg() {
if (__wakaru_$gg_initialized) return;
__wakaru_$gg_initialized = true;
"use strict";
E(), v1(), Qe(), Gt(), pd(), Pu(), Kf(), Knl(), Fgg(), eas(), XS(), jCe(), CEi(), bqt(), Bgg = 3e4, Ugg = 60 * 1e3, jgg = {
    submit: !0,
    followup_submitted: !0,
    interaction_answered: !0,
    row_resumed: !0,
    load_selected: !1,
    transport_change: !1,
    rebuilt_without_stream: !1
}, Xcl = class teu {
    constructor(e){
        if (this._store = m4(new Nt), this._referenceLeases = new Set, this._disposed = !1, this._forceDisposing = !1, this._streamConnectedDisposable = this._register(new Vn), this._connected = new ca(!1), this._onWillForceDispose = this._register(new tt), this._onDidBecomeIdle = this._register(new tt), this._onDidChangePrState = this._register(new tt), this._pullRequestStates = new ca([]), this._extraPullRequestStateByPrUrl = new Map, this.connected = this._connected, this.onWillForceDispose = this._onWillForceDispose.event, this.onDidBecomeIdle = this._onDidBecomeIdle.event, this.onDidChangePrState = this._onDidChangePrState.event, this.pullRequestState = new ca(void 0), this.agentId = e.agentId, this.header = e.header, this.workspaceFactory = e.workspaceFactory, this.pullRequestStates = this._pullRequestStates, this._composerDataHandle = e.composerDataHandle, this._agentEnvironment = e.agentEnvironment, this.planHandler = e.planHandler, this._privateWorkerBranchGate = e.privateWorkerBranchGate, this._getBackgroundComposerClient = e.getBackgroundComposerClient, this._composerDataService = e.composerDataService, this._structuredLogService = e.structuredLogService, this._abortCallbacks = e.abortCallbacks, this._randomFn = e.randomFn ?? Math.random, this._startPullRequestStateBurst = e.callbacks.startPullRequestStateBurst, this._refreshPullRequestStateNow = e.callbacks.refreshPullRequestStateNow, this._triggerReconnect = e.callbacks.triggerReconnect, this._onDispose = e.callbacks.onDispose, this._ensureActiveStreamAttachedForRecovery = e.callbacks.ensureActiveStreamAttachedForRecovery, e.backgroundComposerDataSource) {
            const [n, i] = pwe(teu.toBackgroundComposerData(e.backgroundComposerDataSource));
            this.backgroundComposerData = n, this.setBackgroundComposerData = i;
        } else this.backgroundComposerData = void 0, this.setBackgroundComposerData = void 0;
        this._setPullRequestStateEntries([]), this.attachStream(e.stream);
    }
    static toDiffStats(e) {
        if (!(e.filesChanged === void 0 && e.linesAdded === void 0 && e.linesRemoved === void 0)) return {
            totalFiles: e.filesChanged ?? 0,
            totalAdded: e.linesAdded ?? 0,
            totalRemoved: e.linesRemoved ?? 0
        };
    }
    static toBackgroundComposerData(e) {
        return {
            bcId: e.bcId,
            createdAt: e.createdAt,
            updatedAt: e.updatedAt,
            workspaceRootPath: e.workspaceRootPath,
            warmedCommit: void 0,
            isOwnedByDifferentTeamMember: e.isOwnedByDifferentTeamMember,
            name: e.name,
            branchName: e.branchName,
            hasStartedVm: e.hasStartedVm,
            isArchived: e.isArchived,
            isUnread: e.isUnread,
            promptGroupId: e.promptGroupId,
            status: e.status,
            workflowStatus: e.workflowStatus,
            isLoaded: !0,
            modelDetails: e.modelDetails,
            isKilled: e.isKilled,
            source: e.source,
            githubIssueId: e.githubIssueId,
            linearIssueId: e.linearIssueId,
            prUrl: e.prUrl,
            externalSourceMetadata: e.externalSourceMetadata,
            usePrivateWorker: e.usePrivateWorker,
            diffStats: teu.toDiffStats(e),
            cachedFileCount: e.filesChanged
        };
    }
    _setPullRequestStateEntries(e) {
        const n = this.header.trackedGitRepos?.value, i = n?.[0], r = i?.repoPath ?? "", s = i?.repoUrl.value, o = i?.activeBranchName.value?.trim(), a = [], l = new Set, c = new Set, u = (p)=>{
            const g = p.repoUrl?.trim();
            return !g || !n ? i : n.find((f)=>STt(f.repoUrl.value, g)) ?? i;
        };
        for(let p = 0; p < e.length; p += 1){
            const g = e[p], f = g.prUrl?.trim(), _ = f ? Zp(f) : void 0;
            if (_) {
                if (l.has(_)) continue;
                l.add(_);
            }
            const b = u(g), y = b?.repoPath ?? r, S = g.repoUrl ?? b?.repoUrl.value, k = g.branchName?.trim() || o || "";
            if (p === 0) {
                a.push({
                    repoPath: y,
                    repoUrl: S,
                    branchName: k,
                    pullRequestState: this.pullRequestState
                });
                continue;
            }
            const C = _ || `branch:${k}`;
            let T = this._extraPullRequestStateByPrUrl.get(C);
            const I = {
                type: "resolved",
                value: g
            };
            T ? T.set(I) : (T = new ca(I), this._extraPullRequestStateByPrUrl.set(C, T)), c.add(C), a.push({
                repoPath: y,
                repoUrl: S,
                branchName: k,
                pullRequestState: T
            });
        }
        a.length === 0 && a.push({
            repoPath: r,
            repoUrl: s,
            branchName: o || "",
            pullRequestState: this.pullRequestState
        });
        for (const p of this._extraPullRequestStateByPrUrl.keys())c.has(p) || this._extraPullRequestStateByPrUrl.delete(p);
        const d = this._pullRequestStates.value, h = d.length === a.length && d.every((p, g)=>p.repoPath === a[g]?.repoPath && p.repoUrl === a[g]?.repoUrl && p.branchName === a[g]?.branchName && p.pullRequestState === a[g]?.pullRequestState);
        return h || this._pullRequestStates.set(a), !h;
    }
    startPullRequestStateBurst(e) {
        this._startPullRequestStateBurst(e);
    }
    refreshPullRequestStateNow(e) {
        this._refreshPullRequestStateNow(e);
    }
    getPullRequestEntriesForRepoPath(e) {
        return this.pullRequestStates.value.filter((i)=>i.repoPath === e);
    }
    async triggerReconnect() {
        await this._triggerReconnect();
    }
    async enablePullRequestAutoMerge(e, n) {
        const i = await this._getBackgroundComposerClient().enablePullRequestAutoMerge(new NGa({
            prUrl: e,
            mergeMethod: n
        }));
        if (!i.success) throw new Error(i.error || "Failed to enable pull request auto-merge");
        this.startPullRequestStateBurst({
            skipCache: !0
        });
    }
    async disablePullRequestAutoMerge(e) {
        const n = await this._getBackgroundComposerClient().disablePullRequestAutoMerge(new LGa({
            prUrl: e
        }));
        if (!n.success) throw new Error(n.error || "Failed to disable pull request auto-merge");
        this.startPullRequestStateBurst({
            skipCache: !0
        });
    }
    setResolvedPullRequestState(e) {
        this.setResolvedPullRequestStates([
            e
        ]);
    }
    setResolvedPullRequestStates(e) {
        this.updateResolvedPullRequestStates(e), this._onDidChangePrState.fire();
    }
    updateResolvedPullRequestStates(e) {
        const n = e[0], i = this.pullRequestState.value, r = i?.type === "resolved" ? i.value : void 0, s = i?.type !== "resolved" || !Jos(r, n);
        s && this.pullRequestState.set({
            type: "resolved",
            value: n
        });
        const o = this._setPullRequestStateEntries(e);
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
        return fR(this.backgroundComposerData?.status);
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
    updateBackgroundComposerLifecycle(e) {
        if (!this.setBackgroundComposerData) return;
        "workflowStatus" in e && this.setBackgroundComposerData("workflowStatus", e.workflowStatus), "status" in e && (this.setBackgroundComposerData("status", e.status), fR(e.status) || this.setBackgroundComposerData("workflowStatus", void 0)), "isKilled" in e && this.setBackgroundComposerData("isKilled", e.isKilled);
        const n = this._composerDataHandle;
        !n?.data || n.data.status !== "generating" || !(e.isKilled === !0 || this.backgroundComposerData?.isKilled === !0 || "status" in e && !fR(e.status)) || (n.setData("status", "completed"), n.setData("generatingBubbleIds", []), n.setData("chatGenerationUUID", void 0));
    }
    attachStream(e) {
        if (this._streamConnectedDisposable.clear(), this._stream = e, this.planHandler.attachStream(e), !e) {
            this._connected.set(!1);
            return;
        }
        this._connected.set(e.connected.value), this._streamConnectedDisposable.value = e.connected.onChange((n)=>{
            this._connected.set(n);
        });
    }
    async _waitForActiveStreamConnected(e, n) {
        e.connected.value || await new Promise((i, r)=>{
            const s = setTimeout(()=>{
                o.dispose(), r(new Error("Timed out waiting for stream connection after recovery nudge"));
            }, n), o = e.connected.onChange((a)=>{
                a && (clearTimeout(s), o.dispose(), i());
            });
        });
    }
    async recoverStreamIfNeeded(e) {
        const { reason: n, cloudAgentStatus: i } = e, r = this._stream;
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
                const l = this._waitForActiveStreamConnected(a, Bgg);
                a.requestReconnect(), await l;
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
    async _abortChat(e, n) {
        if (this._disposed) return;
        const i = this.composerDataHandle.data.status === "generating" || !!this.composerDataHandle.data.chatGenerationUUID || (this.composerDataHandle.data.generatingBubbleIds?.length ?? 0) > 0, r = this.backgroundComposerData?.status === Po.RUNNING || this.backgroundComposerData?.status === Po.CREATING, s = i || r;
        if (!s && !n) return;
        let o;
        s && (o = this._applyOptimisticAbortToComposerData(), this._abortCallbacks?.onAbortStarted?.());
        try {
            await Dgg({
                bcId: this.agentId,
                getClient: this._getBackgroundComposerClient,
                structuredLogService: this._structuredLogService,
                randomFn: this._randomFn,
                isDisposed: ()=>this._disposed
            });
        } catch (a) {
            if (o !== void 0 && (this._abortCallbacks?.onAbortFailed?.(), this._rollbackOptimisticAbortComposerData(o)), e) throw a;
        }
    }
    _applyOptimisticAbortToComposerData() {
        const e = {
            status: this.composerDataHandle.data.status,
            chatGenerationUUID: this.composerDataHandle.data.chatGenerationUUID,
            generatingBubbleIds: [
                ...this.composerDataHandle.data.generatingBubbleIds ?? []
            ],
            askQuestionBubbles: this._snapshotPendingAskQuestionBubbles()
        };
        this._composerDataService.setLoadingToolFormerToolsToCancelled(this.composerDataHandle);
        const n = this._composerDataService.getToolFormer?.(this.composerDataHandle);
        return n ? n.setPendingAskQuestionToolsToCancelled() : this._cancelPendingAskQuestionBubblesViaMap(), this.composerDataHandle.setData("status", "aborted"), this.composerDataHandle.setData("chatGenerationUUID", void 0), this.composerDataHandle.setData("generatingBubbleIds", []), e;
    }
    _rollbackOptimisticAbortComposerData(e) {
        this._disposed || (this._restorePendingAskQuestionBubbles(e.askQuestionBubbles), this.composerDataHandle.data.status === "aborted" && (this.composerDataHandle.setData("status", e.status), this.composerDataHandle.data.chatGenerationUUID === void 0 && this.composerDataHandle.setData("chatGenerationUUID", e.chatGenerationUUID), (this.composerDataHandle.data.generatingBubbleIds?.length ?? 0) === 0 && this.composerDataHandle.setData("generatingBubbleIds", e.generatingBubbleIds)));
    }
    _snapshotPendingAskQuestionBubbles() {
        const e = this.composerDataHandle.data.conversationMap;
        if (!e) return [];
        const n = [];
        for (const [i, r] of Object.entries(e)){
            const s = r?.toolFormerData;
            if (!s || s.tool !== Ct.ASK_QUESTION) continue;
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
        const e = this.composerDataHandle.data.conversationMap;
        if (e) for (const [n, i] of Object.entries(e)){
            const r = i?.toolFormerData;
            if (!r || r.tool !== Ct.ASK_QUESTION) continue;
            const s = r.additionalData, o = s?.status ?? "pending";
            o !== "pending" && o !== "loading" || this._composerDataService.updateComposerBubble(this.composerDataHandle, n, {
                toolFormerData: pis(r, {
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
    _restorePendingAskQuestionBubbles(e) {
        if (e.length === 0) return;
        const n = this.composerDataHandle.data.conversationMap;
        for (const i of e){
            const r = n?.[i.bubbleId]?.toolFormerData?.additionalData;
            if (r?.status !== "cancelled" || r.skipReason !== "user") continue;
            const s = n?.[i.bubbleId]?.toolFormerData;
            s && this._composerDataService.updateComposerBubble(this.composerDataHandle, i.bubbleId, {
                toolFormerData: pis(s, i.snapshot)
            });
        }
    }
    createRef(e) {
        if (this._disposed) throw new Error(`Cannot create ref to disposed LoadedCloudAgent: ${this.agentId}`);
        if (this._forceDisposing) throw new Error(`Cannot create ref while force-disposing LoadedCloudAgent: ${this.agentId}`);
        let n = this, i = !1;
        const r = {
            dispose: ()=>{
                i || (i = !0, n._releaseReferenceLease(r));
            },
            retarget: (s)=>{
                i || n === s || (s._acceptReferenceLease(r), n._referenceLeases.delete(r), n = s, e?.(s));
            }
        };
        return this._acceptReferenceLease(r), r;
    }
    _acceptReferenceLease(e) {
        if (this._disposed) throw new Error(`Cannot transfer ref to disposed LoadedCloudAgent: ${this.agentId}`);
        if (this._forceDisposing) throw new Error(`Cannot transfer ref while force-disposing LoadedCloudAgent: ${this.agentId}`);
        this._disposeTimeoutId !== void 0 && (clearTimeout(this._disposeTimeoutId), this._disposeTimeoutId = void 0), this._referenceLeases.add(e);
    }
    _releaseReferenceLease(e) {
        this._referenceLeases.delete(e) && this._referenceLeases.size === 0 && !this._forceDisposing && (this._scheduleDispose(), this._onDidBecomeIdle.fire(this.agentId));
    }
    forceDispose(e = "force") {
        this._disposed || this._forceDisposing || (this._forceDisposing = !0, this._onWillForceDispose.fire(), this._dispose(e));
    }
    forceDisposeAsSupersededBy(e) {
        if (!(!e.isDisposed && !e._forceDisposing)) {
            this.forceDispose();
            return;
        }
        for (const r of [
            ...this._referenceLeases
        ])r.retarget(e);
        this._stream !== void 0 && this._stream === e._stream && this.attachStream(void 0), this._dispose("superseded");
    }
    _scheduleDispose() {
        this._disposed || this._disposeTimeoutId !== void 0 || (this._disposeTimeoutId = setTimeout(()=>{
            this._disposeTimeoutId = void 0, this._referenceLeases.size === 0 && this._dispose("idle_timeout");
        }, Ugg));
    }
    _register(e) {
        return this._store.add(e);
    }
    _logDispose(e) {
        const n = this._stream;
        this._structuredLogService.info?.("background_composer", "CloudAgentRepository: loaded cloud agent disposed", {
            agentId: this.agentId,
            reason: e,
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
    _dispose(e) {
        if (!this._disposed) {
            this._disposed = !0, this._disposeReason = e, this._disposeTimeoutId !== void 0 && (clearTimeout(this._disposeTimeoutId), this._disposeTimeoutId = void 0), this._logDispose(e), this._streamConnectedDisposable.clear(), this._connected.set(!1), this._stream?.abort(), delete this.streamRecoveryInFlight;
            try {
                m1(this._onWillForceDispose, this._onDidBecomeIdle, this._onDidChangePrState, this._agentEnvironment, this.planHandler, this._privateWorkerBranchGate, {
                    dispose: ()=>this._onDispose(this)
                });
            } finally{
                this._store.dispose(), this._composerDataHandle = void 0, this._agentEnvironment = void 0, this._privateWorkerBranchGate = void 0;
            }
        }
    }
};

}
