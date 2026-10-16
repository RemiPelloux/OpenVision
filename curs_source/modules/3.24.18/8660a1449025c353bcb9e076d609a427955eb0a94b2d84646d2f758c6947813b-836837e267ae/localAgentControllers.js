import { TTi, oS } from "./Aeg.js";
import { qJ } from "./ImageUtil.js";
import { Qe, Vn } from "./Iwo.js";
import { CIr, _1 } from "./LYd.js";
import { Q1k, cfg, dfg, ekk, kIi, lfg, nfg, nkk, oas, rkk, rul, tkk, ufg, wIi, yIi } from "./Ycg.js";
import { wTt } from "./agentBranchAffinity.js";
import { hG } from "./agent_host_pb.js";
import { Ss } from "./aiMiscServices.js";
import { Dxn } from "./checkoutProviderService.js";
import { Yh, vS } from "./composer.js";
import { l0, mV } from "./composerChatServiceInterface.js";
import { uv } from "./composerData.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { tf } from "./composer_pb.js";
import { cy, fb } from "./environment.js";
import { is, ms } from "./files.js";
import { Jv, hy } from "./gitContextService.js";
import { Dss } from "./gitFailurePatterns.js";
import { Od, Tc } from "./host.js";
import { Uy } from "./ipa.js";
import { eg, of } from "./modelConfigServiceTypes.js";
import { Ki } from "./network.js";
import { Ks } from "./notification.js";
import { Rd, ih } from "./pathService.js";
import { MB } from "./pathUtils.js";
import { Ul } from "./path_2.js";
import { Gu } from "./quickInput.js";
import { Kf, ca } from "./reactive.js";
import { el } from "./reactiveStorageServiceTypes.js";
import { cN } from "./scm.js";
import { LM } from "./selectedContextData.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { oT } from "./utils_16.js";
import { Sr, yr } from "./workspace.js";
import { Cu } from "./workspaceCollectionService.js";
import { OJ } from "./workspaceRefHelpers.js";
var QTt, hfg, sul, pfg, mfg, oul;
export { QTt, hfg, mfg, oul, pfg, sul };
var __wakaru_aas_initialized = false;
export function aas() {
if (__wakaru_aas_initialized) return;
__wakaru_aas_initialized = true;
"use strict";
E(), hG(), tf(), Ki(), Ul(), fn(), fb(), ms(), Ks(), Gu(), ih(), Sr(), mV(), uv(), Pl(), vS(), cN(), qJ(), Od(), Dxn(), hy(), Ss(), Cm(), of(), LM(), oT(), OJ(), Dss(), wTt(), MB(), Qe(), Kf(), el(), Cu(), QTt = {
    kind: "ineligible"
}, hfg = 3e4, sul = "branch-mismatch", pfg = class {
    constructor(t, e){
        this._runtime = t, this._branchMismatchRequest = e;
    }
    getQueueItems() {
        return this._runtime.isDisposed ? [] : this._runtime.composerDataHandle.data.queueItems ?? [];
    }
    async removeFromQueue(t) {
        const e = this._requireLoadedAgent();
        this._branchMismatchRequest.value?.dismiss(), this._getQueuingCapabilityForLoadedAgent(e)?.removeFromQueue(t, {
            isUserDiscard: !0
        });
    }
    async updateQueueItem(t, e) {
        const n = this._requireLoadedAgent(), i = n.workspaceFactory.workspace.value, r = e.images.length === 0 ? [] : i ? await i.instantiationService.invokeFunction(async (o)=>{
            const a = {
                fileService: o.get(is),
                environmentService: o.get(cy),
                workspaceContextService: o.get(yr),
                pathService: o.get(Rd),
                hostService: o.get(Tc)
            };
            return yIi(e.images, a);
        }) : void 0, s = (n.composerDataHandle.data.queueItems ?? []).find((o)=>o.id === t);
        s && this._getQueuingCapabilityForLoadedAgent(n)?.updateQueueItem(t, {
            query: e.text,
            richText: e.richText,
            contextOverride: {
                ..._1(e.context ?? s.contextOverride ?? Uy()),
                selectedImages: r ?? e.context?.selectedImages ?? s.contextOverride?.selectedImages ?? []
            }
        });
    }
    async setQueueItemEditing(t, e) {
        const n = this._requireLoadedAgent(), i = !e && n.composerDataHandle.data.editingQueueItemId === t;
        (e || i) && n.composerDataHandle.setData("editingQueueItemId", e ? t : void 0), i && this._getQueuingCapabilityForLoadedAgent(n)?.tryDispatchNextQueueItem();
    }
    async submitQueueItemNow(t) {
        const e = this._requireLoadedAgent(), n = this._getQueuingCapabilityForLoadedAgent(e);
        if (!n) return;
        const r = n.getQueueItemsReactive().find((s)=>s.id === t);
        if (r) try {
            await n.submitQueueItem(r);
        } finally{
            this._branchMismatchRequest.set(null);
        }
    }
    isQueueSteeringAvailable() {
        const t = this._runtime;
        return t.isDisposed ? !1 : this._getQueuingCapabilityForLoadedAgent(t)?.isSteeringAvailable() ?? !1;
    }
    async promoteQueueItemToSteer(t) {
        const e = this._requireLoadedAgent(), n = this._getQueuingCapabilityForLoadedAgent(e);
        return n ? n.promoteQueueItemToSteer(t) : !1;
    }
    reorderQueue(t, e, n) {
        const i = this._requireLoadedAgent();
        this._getQueuingCapabilityForLoadedAgent(i)?.reorderQueueById(t, e, n);
    }
    _requireLoadedAgent() {
        const t = this._runtime;
        if (t.isDisposed) throw new Error(`Agent not loaded: ${t.agentId}`);
        return t;
    }
    _getQueuingCapabilityForLoadedAgent(t) {
        return t?.composerDataHandle.data.capabilities?.find(ekk);
    }
}, mfg = class {
    constructor(t, e){
        this._runtime = t, this._branchMismatchRequest = e, this._branchAncestryCache = new ca(null), this._branchTrackingDisposable = new Vn, this._recomputeGeneration = 0;
    }
    get branchMismatchRequest() {
        return this._branchMismatchRequest;
    }
    get branchAncestryCache() {
        return this._branchAncestryCache;
    }
    initBranchAncestryTracking(t, e, n) {
        this._branchTrackingDisposable.clear();
        const i = async ()=>{
            const l = ++this._recomputeGeneration, c = oS(e.value), u = oS(t.getCachedCurrentBranch({
                cwd: n
            }));
            if (!c || !u) {
                this._branchAncestryCache.set(null);
                return;
            }
            c !== u && this._branchAncestryCache.set(null);
            const d = await dfg(t, n, c, u);
            l === this._recomputeGeneration && this._branchAncestryCache.set(d);
        };
        i(), t.getOrFetchCurrentBranch({
            cwd: n
        }).then(()=>i()).catch(()=>{});
        const r = t.onDidChangeCachedBranch((l)=>{
            l.cwd === n && i();
        }), s = t.onDidRunGitStatus((l)=>{
            l === n && i();
        }), o = e.onChange(()=>i()), a = {
            dispose: ()=>{
                r.dispose(), s.dispose(), o.dispose();
            }
        };
        return this._branchTrackingDisposable.value = a, a;
    }
    dismissBranchMismatch() {
        this._branchMismatchRequest.value?.dismiss();
    }
    async runBranchMismatchGate(t) {
        return this._runBranchMismatchGate(t);
    }
    async runBranchMismatchGateForRepo(t, e) {
        return this._runBranchMismatchGate(e, t);
    }
    async _runBranchMismatchGate(t, e) {
        const n = this._requireLoadedAgent(), i = await kIi(n.workspaceFactory);
        if (!i) return {
            success: !1,
            status: "cancelled"
        };
        const r = {
            allowAncestorShortCircuit: t?.allowAncestorShortCircuit ?? !0,
            respectDontAskAgain: t?.respectDontAskAgain ?? !0,
            onDismiss: t?.onDismiss ?? "cancel",
            moveToCloud: t?.moveToCloud ?? QTt,
            copy: t?.copy
        }, s = await rul(n, this._branchMismatchRequest, i, this._branchAncestryCache, r, e);
        return this._finishBranchMismatchGateAfterDecision(n, i, s, r, e);
    }
    async _finishBranchMismatchGateAfterDecision(t, e, n, i, r) {
        switch(n.kind){
            case "no-mismatch":
                return {
                    success: !0,
                    status: "no-mismatch"
                };
            case "continue":
            case "dont-ask-again":
                return {
                    success: !0,
                    status: "continued"
                };
            case "cancel":
                return {
                    success: !1,
                    status: "cancelled"
                };
            case "move-to-cloud":
                return {
                    success: !0,
                    status: "move-to-cloud"
                };
            case "checkout":
                break;
        }
        try {
            const s = await wIi({
                loadedAgent: t,
                branchMismatchReactive: this._branchMismatchRequest,
                workspace: e,
                copy: oas(i.copy, r?.repoPath),
                explicitTarget: r ? {
                    repoPath: r.repoPath,
                    branchName: r.agentBranch
                } : void 0,
                moveToCloud: i.moveToCloud
            });
            return ufg(s);
        } catch  {
            return {
                success: !1,
                status: "checkout-failed"
            };
        }
    }
    async showBranchMismatchTray() {
        if (this._branchMismatchRequest.value !== null) return !1;
        const t = this._requireLoadedAgent(), e = t.workspaceFactory.workspace.value;
        if (!e) return !1;
        const n = await rul(t, this._branchMismatchRequest, e, this._branchAncestryCache, {
            allowAncestorShortCircuit: !0,
            respectDontAskAgain: !0,
            onDismiss: "cancel",
            moveToCloud: QTt
        });
        if (n.kind === "cancel") return !1;
        if (n.kind === "continue" || n.kind === "dont-ask-again" || n.kind === "no-mismatch" || n.kind === "move-to-cloud") return !0;
        this._branchMismatchRequest.set(null);
        try {
            return await lfg(t, e), !0;
        } catch  {
            return !1;
        }
    }
    async directCheckout(t) {
        const e = this._requireLoadedAgent(), n = e.workspaceFactory.workspace.value;
        if (!n) return {
            status: "failed"
        };
        try {
            return await wIi({
                loadedAgent: e,
                branchMismatchReactive: this._branchMismatchRequest,
                workspace: n,
                moveToCloud: t?.moveToCloud ?? QTt
            });
        } catch  {
            return {
                status: "handledFailure"
            };
        }
    }
    async checkoutBranch({ repoPath: t, branchName: e }, n) {
        const i = this._requireLoadedAgent();
        if (this._branchMismatchRequest.value !== null) return {
            status: "busy"
        };
        const r = t.trim(), s = oS(e), o = await kIi(i.workspaceFactory);
        if (!o || !r || !s) return {
            status: "failed"
        };
        if (this._branchMismatchRequest.value !== null) return {
            status: "busy"
        };
        const a = nfg(o, r);
        if (a === void 0) return {
            status: "failed"
        };
        try {
            const l = await wIi({
                loadedAgent: i,
                branchMismatchReactive: this._branchMismatchRequest,
                workspace: o,
                explicitTarget: {
                    repoPath: a,
                    branchName: s
                },
                moveToCloud: n?.moveToCloud ?? QTt
            });
            switch(l.status){
                case "checkedOut":
                    break;
                case "movedToCloud":
                    return l;
                default:
                    return l;
            }
        } catch  {
            return {
                status: "handledFailure"
            };
        }
        return cfg(i, o, a, s), {
            status: "checkedOut"
        };
    }
    async createAndCheckoutBranch({ repoPath: t, branchName: e }) {
        const n = this._requireLoadedAgent();
        if (this._branchMismatchRequest.value !== null) return {
            status: "busy"
        };
        const i = t.trim(), r = oS(e);
        if (!i) return {
            status: "notRepository"
        };
        if (!r) return {
            status: "invalidName"
        };
        const s = await kIi(n.workspaceFactory);
        if (!s) return {
            status: "failed"
        };
        if (this._branchMismatchRequest.value !== null) return {
            status: "busy"
        };
        const o = nfg(s, i);
        if (o === void 0) return {
            status: "notRepository"
        };
        const a = s.instantiationService.invokeFunction((c)=>c.get(Jv));
        let l;
        try {
            l = await a.createAndCheckoutBranch({
                cwd: o,
                branchName: r
            });
        } catch  {
            return {
                status: "failed"
            };
        }
        return l.status !== "created" || (cfg(n, s, o, r), await nkk(n, s, o)), l;
    }
    abortChat(t = "user") {
        const e = this._requireLoadedAgent();
        this._branchMismatchRequest.value?.dismiss();
        const n = e.workspaceFactory.workspace.value;
        if (!n) throw new Error(`Agent ${e.agentId} has no workbench`);
        const i = e.composerDataHandle, { composerDataService: r, chatService: s, composerService: o, structuredLogService: a } = n.instantiationService.invokeFunction((u)=>({
                composerDataService: u.get(no),
                chatService: u.get(l0),
                composerService: u.get(Yh),
                structuredLogService: u.get(wh)
            })), l = r.getComposerData(i);
        if (l?.status === "generating" || !!l?.chatGenerationUUID) {
            const u = l?.conversationActionManager !== void 0;
            t === "remote_control" && s.markRemoteControlAbort(i);
            const d = t === "migration" ? "migration" : t === "remote_control" ? "remote_control_stopped" : "user_stopped_generation";
            if (l?.conversationActionManager?.abort(d), !u) {
                const h = l?.chatGenerationUUID;
                h ? Q1k(n, a, i.composerId, h, d).then((p)=>{
                    p || e.isDisposed || i.data.chatGenerationUUID !== h || s.handleAbortChat(i, {
                        abortReason: t
                    });
                }) : s.handleAbortChat(i, {
                    abortReason: t
                });
            }
            s.abortChatAndWaitForFinish(i);
        }
        o.cancelChat(e.agentId);
    }
    async checkoutAssociatedBranch() {
        const t = this._requireLoadedAgent();
        await lfg(t);
    }
    async useCurrentBranchForAgent(t) {
        const e = this._requireLoadedAgent();
        await tkk(e, t);
    }
    async submitMessage(t, e) {
        const n = this._requireLoadedAgent(), i = n.workspaceFactory.workspace.value;
        if (!i) throw new Error(`Agent ${n.agentId} has no workbench`);
        const r = i.instantiationService.invokeFunction((c)=>c.get(l0));
        for(;;){
            const c = r.getPendingPreGenerationSubmission?.(n.agentId);
            if (c === void 0) break;
            await c;
        }
        const s = n.composerDataHandle.data.status === "generating" && e?.messageId === void 0 && e?.forceSubmit !== !0, o = e?.checkoutToBranch;
        if (e?.modelConfig) {
            const c = e.modelConfig;
            i.instantiationService.invokeFunction((u)=>u.get(eg).setModelConfigForComposer(n.composerDataHandle, c));
        }
        if (e?.context) {
            const c = _1(e.context), u = e.messageId;
            u ? n.composerDataHandle.setData("conversationMap", u, "context", c) : e._internalPreserveDraft || n.composerDataHandle.setData("context", CIr(c));
        }
        if (e?.messageId) {
            await r.submitChatMaybeAbortCurrent(n.agentId, t, {
                bubbleId: e.messageId,
                richText: e.richText,
                contextOverride: e.context,
                shouldCheckout: e.shouldCheckout,
                checkoutToBranch: o,
                checkpointValidation: e.checkpointValidation,
                ignoreQueuing: e.forceSubmit,
                modifierKeyStatus: e.modifierKeyStatus,
                simulatedMsgReason: e.simulatedMsgReason,
                sentByVoiceCall: e.sentByVoiceCall,
                diffTabGitAction: e.diffTabGitAction,
                simulatedMessageMetadata: e.simulatedMessageMetadata,
                isPlanExecution: e.isPlanExecution,
                submitEventCtx: e.submitEventCtx,
                ...TTi(e),
                onDidSendRequest: e.onDidSendRequest
            });
            return;
        }
        const a = !e?.simulatedMsgReason && !s, l = e?.forceBubbleId ?? (a ? crypto.randomUUID() : void 0);
        if (a && l !== void 0 && r.appendQueuedHumanMessage(n.composerDataHandle, t, {
            richText: e?.richText,
            bubbleId: l,
            sentByVoiceCall: e?.sentByVoiceCall,
            ...e?._internalPreserveDraft && {
                contextOverride: e.context
            }
        }), n.submitReadiness) try {
            await n.submitReadiness;
        } catch  {}
        await r.submitChatMaybeAbortCurrent(n.agentId, t, {
            bubbleId: void 0,
            forceBubbleId: l,
            richText: e?.richText,
            contextOverride: e?.context,
            checkoutToBranch: o,
            ignoreQueuing: e?.forceSubmit,
            modifierKeyStatus: e?.modifierKeyStatus,
            simulatedMsgReason: e?.simulatedMsgReason,
            sentByVoiceCall: e?.sentByVoiceCall,
            diffTabGitAction: e?.diffTabGitAction,
            simulatedMessageMetadata: e?.simulatedMessageMetadata,
            isPlanExecution: e?.isPlanExecution,
            submitEventCtx: e?.submitEventCtx,
            ...TTi(e),
            onDidSendRequest: e?.onDidSendRequest
        });
    }
    dispose() {
        this._branchTrackingDisposable.dispose();
    }
    _requireLoadedAgent() {
        const t = this._runtime;
        if (t.isDisposed) throw new Error(`Agent not loaded: ${t.agentId}`);
        return t;
    }
}, oul = class {
    constructor(t){
        this.branchMismatchRequest = new ca(null), this.branchAncestryCache = new ca(null), this._branchTrackingDisposable = new Vn, this._recomputeGeneration = 0, this._disposed = !1, this._host = {
            agentId: "private-worker-branch-gate",
            isDisposed: !1,
            composerDataHandle: t.composerDataHandle,
            workspaceFactory: t.workspaceFactory
        };
    }
    dispose() {
        this._disposed || (this._disposed = !0, this.branchMismatchRequest.value?.dismiss(), this._branchTrackingDisposable.dispose());
    }
    initBranchAncestryTracking(t, e, n) {
        this._branchTrackingDisposable.clear();
        const i = async ()=>{
            const l = ++this._recomputeGeneration, c = oS(e.value), u = oS(await t.getCurrentBranch({
                cwd: n
            }).catch(()=>{}));
            if (!c || !u) {
                this.branchAncestryCache.set(null);
                return;
            }
            c !== u && this.branchAncestryCache.set(null);
            const d = await dfg(t, n, c, u);
            l === this._recomputeGeneration && this.branchAncestryCache.set(d);
        };
        i();
        const r = t.onDidChangeCachedBranch((l)=>{
            l.cwd === n && i();
        }), s = t.onDidRunGitStatus((l)=>{
            l === n && i();
        }), o = e.onChange(()=>i()), a = {
            dispose: ()=>{
                r.dispose(), s.dispose(), o.dispose();
            }
        };
        return this._branchTrackingDisposable.value = a, a;
    }
    async runBranchMismatchGate(t) {
        return this._runBranchMismatchGate(t);
    }
    async runBranchMismatchGateForRepo(t, e) {
        return this._runBranchMismatchGate(e, t);
    }
    async directCheckout(t) {
        const e = await kIi(this._host.workspaceFactory);
        if (!e) return {
            status: "failed"
        };
        try {
            return await wIi({
                loadedAgent: this._host,
                branchMismatchReactive: this.branchMismatchRequest,
                workspace: e,
                moveToCloud: t?.moveToCloud ?? QTt
            });
        } catch  {
            return {
                status: "handledFailure"
            };
        }
    }
    async confirmInitialSubmitBranches(t) {
        let e = t.moveToCloud ?? QTt;
        for (const n of t.targets){
            const i = await this.runBranchMismatchGateForRepo(n, {
                allowAncestorShortCircuit: !1,
                respectDontAskAgain: !1,
                onDismiss: "cancel",
                moveToCloud: e,
                copy: t.copy
            });
            if (i.status === "move-to-cloud") return "move-to-cloud";
            if (!i.success) return "cancelled";
            i.status === "checked-out" && (e = rkk(e));
        }
        return "confirmed";
    }
    async _runBranchMismatchGate(t, e) {
        const n = await kIi(this._host.workspaceFactory);
        if (!n || this._disposed) return {
            success: !1,
            status: "cancelled"
        };
        const i = {
            allowAncestorShortCircuit: t?.allowAncestorShortCircuit ?? !0,
            respectDontAskAgain: t?.respectDontAskAgain ?? !0,
            onDismiss: t?.onDismiss ?? "cancel",
            moveToCloud: t?.moveToCloud ?? QTt,
            copy: t?.copy
        }, r = await rul(this._host, this.branchMismatchRequest, n, this.branchAncestryCache, i, e);
        return this._finishBranchMismatchGateAfterDecision(n, r, i, e);
    }
    async _finishBranchMismatchGateAfterDecision(t, e, n, i) {
        switch(e.kind){
            case "no-mismatch":
                return {
                    success: !0,
                    status: "no-mismatch"
                };
            case "continue":
            case "dont-ask-again":
                return {
                    success: !0,
                    status: "continued"
                };
            case "cancel":
                return {
                    success: !1,
                    status: "cancelled"
                };
            case "move-to-cloud":
                return {
                    success: !0,
                    status: "move-to-cloud"
                };
            case "checkout":
                break;
        }
        try {
            const r = await wIi({
                loadedAgent: this._host,
                branchMismatchReactive: this.branchMismatchRequest,
                workspace: t,
                copy: oas(n.copy, i?.repoPath),
                explicitTarget: i ? {
                    repoPath: i.repoPath,
                    branchName: i.agentBranch
                } : void 0,
                moveToCloud: n.moveToCloud
            });
            return ufg(r);
        } catch  {
            return {
                success: !1,
                status: "checkout-failed"
            };
        }
    }
};

}
