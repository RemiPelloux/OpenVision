import { Jil, Tze, Zp, _$, fR } from "./Aeg.js";
import { Ei, Gt, Nt, Qe, Vn, da, m1, st, tt, x5, xr } from "./Iwo.js";
import { Agg, j1k, qze, vgg, xgg } from "./Ycg.js";
import { Ezt } from "./agentQuestionnaireActions.js";
import { MI, X4t, fY, hc, ju, t0, t2, zSr } from "./agent_pb.js";
import { Rs, ss } from "./authenticationService.js";
import { Pqe, ec, pd } from "./background_composer_pb.js";
import { bs, sd, wy } from "./chat_pb.js";
import { fgg, x1k } from "./cloudAgentChatBlobStore.js";
import { D1k, Egg } from "./cloudAgentLoader.js";
import { jCe } from "./cloudAgentRepositoryModel.js";
import { _gg } from "./cloudCommittedDiffCounts.js";
import { FBp, yFa } from "./composerDraftRecord.js";
import { I6, XI } from "./composerPlanService.js";
import { Kcl, Mgg, Qos, Vcl, Ycl, Zos } from "./disposedAgentReferenceTombstone.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { nV } from "./gYa.js";
import { XS } from "./githubUtils.js";
import { nl } from "./index.ts";
import { Ng } from "./index_3.ts";
import { OT } from "./index_5.ts";
import { Xp } from "./ipa.js";
import { $gg } from "./loadedCloudAgent.js";
import { Uh, ip } from "./metricsService.js";
import { Rd, ih } from "./pathService.js";
import { VPe, mle } from "./planStorageService.js";
import { Kf, cV } from "./reactive.js";
import { Em, Rh } from "./resolverService.js";
import { Lr, gu } from "./resources.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Ai, Xo } from "./uuid_2.js";
import { Cu, Lc } from "./workspaceCollectionService.js";
import { OJ } from "./workspaceRefHelpers.js";
import { fqt } from "./workspaces_2.js";
var Hgg, Wgg, Ggg, qgg, zgg, Vgg, Kgg, Ygg;
export { Ggg, Hgg, Kgg, Vgg, Wgg, Ygg, qgg, zgg };
var __wakaru_$1k_initialized = false;
export function $1k() {
if (__wakaru_$1k_initialized) return;
__wakaru_$1k_initialized = true;
"use strict";
E(), nl(), Ng(), OT(), ju(), sd(), Ei(), Gt(), Qe(), Lr(), fn(), Xo(), Em(), fo(), pd(), ih(), I6(), VPe(), x1k(), u_(), _gg(), Kf(), FBp(), OJ(), D1k(), jCe(), XS(), Mgg(), fqt(), Ezt(), Rs(), _s(), ip(), Cu(), $gg(), Hgg = "cloudAgentDraft:", Wgg = class {
    constructor(t, e, n, i, r, s, o, a, l = {}){
        this.instantiationService = t, this.structuredLogService = e, this.modelConfigService = n, this.aiService = i, this.selectedContextService = r, this.workspaceContextService = s, this.storageService = a, this.activeStreams = new Map, this._onActiveStreamAttachedPending = new Map, this.placeholderResolvers = new Map, this._streams = new Map, this._chatBlobStores = new da;
        const { onWorkflowStatus: c, onPinnedWorkerOffline: u, getAgentRowUpdatedAtMs: d, getHydrationBackgroundComposerStatus: h, getHydrationBackgroundComposerSource: p, onInteractionUpdateFanout: g, onAgentName: f, onStreamOpen: _, onInitialStateHydrated: b, getHydrationSideChatSeedTurnCount: y, getHydrationParentAgentId: S, getHydrationTurnWindowSize: k, getHydrationTurnWindowLimit: C, onHydrationTurnWindowLimitGrown: T } = l;
        this.cloudAgentCacheService = o, this._onWorkflowStatus = c, this._getHydrationBackgroundComposerStatus = h, this._getHydrationBackgroundComposerSource = p, this._getHydrationSideChatSeedTurnCount = y, this._getHydrationParentAgentId = S, this._getHydrationTurnWindowSize = k, this._getHydrationTurnWindowLimit = C, this._drafts = new yFa(a, Hgg), this._loader = new Egg({
            activeStreams: this.activeStreams,
            placeholderResolvers: this.placeholderResolvers,
            streams: this._streams,
            getChatBlobStore: (I)=>this.getChatBlobStore(I),
            notifyActiveStreamAttached: (I, A)=>this._notifyActiveStreamAttached(I, A),
            instantiationService: this.instantiationService,
            structuredLogService: this.structuredLogService,
            modelConfigService: this.modelConfigService,
            aiService: this.aiService,
            metricsService: this.instantiationService.invokeFunction((I)=>I.get(Uh)),
            experimentService: this.instantiationService.invokeFunction((I)=>I.get(Cr)),
            selectedContextService: this.selectedContextService,
            workspaceContextService: this.workspaceContextService,
            cloudAgentCacheService: this.cloudAgentCacheService,
            onWorkflowStatus: this._onWorkflowStatus,
            onPinnedWorkerOffline: u,
            getAgentRowUpdatedAtMs: d,
            onAgentName: f,
            onStreamOpen: _,
            onInteractionUpdateFanout: g,
            getHydrationBackgroundComposerStatus: this._getHydrationBackgroundComposerStatus,
            getHydrationBackgroundComposerSource: this._getHydrationBackgroundComposerSource,
            getHydrationSideChatSeedTurnCount: this._getHydrationSideChatSeedTurnCount,
            getHydrationParentAgentId: this._getHydrationParentAgentId,
            getHydrationTurnWindowSize: this._getHydrationTurnWindowSize,
            getHydrationTurnWindowLimit: this._getHydrationTurnWindowLimit,
            onHydrationTurnWindowLimitGrown: T,
            onInitialStateHydrated: b,
            getViewerAuthId: ()=>this.instantiationService.invokeFunction((I)=>I.get(ss).getCurrentAuthId())
        });
    }
    onActiveStreamAttached(t, e) {
        const n = this.activeStreams.get(t);
        if (n) return e(n), {
            dispose: ()=>{}
        };
        let i = this._onActiveStreamAttachedPending.get(t);
        return i || (i = new Set, this._onActiveStreamAttachedPending.set(t, i)), i.add(e), {
            dispose: ()=>{
                const r = this._onActiveStreamAttachedPending.get(t);
                r && (r.delete(e), r.size === 0 && this._onActiveStreamAttachedPending.delete(t));
            }
        };
    }
    _notifyActiveStreamAttached(t, e) {
        const n = this._onActiveStreamAttachedPending.get(t);
        if (n) {
            for (const i of [
                ...n
            ])i(e);
            this._onActiveStreamAttachedPending.delete(t);
        }
    }
    async load(t, e, n = !1) {
        const [i, r] = await Promise.all([
            this._loader.load(t, n),
            this._drafts.read(t)
        ]);
        return i !== void 0 && r !== void 0 && (i.text ?? "") === "" && (i.text = r.text, r.richText !== void 0 && (i.richText = r.richText)), i;
    }
    async persistLoadedComposer(t, e) {
        return this._drafts.write(t.composerId, t);
    }
    async clearAllDraftState() {
        return this._drafts.clear();
    }
    registerSaveHook(t) {
        return this.storageService.cursorDiskKVOnShouldSave(t);
    }
    async deleteComposer(t) {
        this.disposeAgentStream(t), this.disposeChatBlobStore(t), await this._drafts.delete(t);
    }
    disposeAgentStream(t) {
        const e = this.activeStreams.get(t);
        e && (e.abort(), this.activeStreams.delete(t)), this.placeholderResolvers.delete(t), this.deleteStream(t), this._drafts.forget(t);
    }
    async loadOfsContent(t, e) {}
    getChatBlobStore(t) {
        let e = this._chatBlobStores.get(t);
        return e === void 0 && (e = new fgg(t, this.cloudAgentCacheService, this.aiService), this._chatBlobStores.set(t, e)), e;
    }
    disposeChatBlobStore(t) {
        this._chatBlobStores.deleteAndDispose(t);
    }
    deleteStream(t) {
        const e = this._streams.get(t);
        e && (e.abort(), this._streams.delete(t));
    }
    disposeStreams() {
        for (const t of this._streams.values())t.abort();
        this._streams.clear(), this.placeholderResolvers.clear(), this._chatBlobStores.clearAndDisposeAll();
    }
    abortAllStreams() {
        for (const t of this.activeStreams.values())t.abort();
        this.activeStreams.clear(), this._onActiveStreamAttachedPending.clear(), this.disposeStreams();
    }
    dispose() {
        this.abortAllStreams(), this._chatBlobStores.dispose();
    }
}, Ggg = class extends st {
    constructor(t){
        super(), this.options = t, this.trackedPlans = new Map, this.onDidPlanChangeEmitter = this._register(new tt), this.onDidRequestLoadedAgentStreamRecoveryEmitter = this._register(new tt), this.streamDisposables = this._register(new Nt), this._register(this.options.conversationState.onChange(()=>{
            this.refreshLatestPlan();
        }));
        const e = this.options.workspaceFactory.workspace;
        let n = e.value !== void 0;
        this._register(e.onChange((r)=>{
            const s = r !== void 0;
            !n && s && this.refreshLatestPlan(), n = s;
        }));
        const i = this.getActiveStream();
        i ? this.attachStream(i) : this._register(this.onActiveStreamAttached((r)=>{
            this.attachStream(r);
        })), i || this.refreshLatestPlan();
    }
    getActiveStream() {
        return this.options.getActiveStream();
    }
    onActiveStreamAttached(t) {
        return this.options.onActiveStreamAttached(t);
    }
    dispose() {
        const t = Array.from(this.trackedPlans.values()).flatMap((e)=>[
                e.modelDisposables,
                e.contentEmitter
            ]);
        try {
            m1(...t);
        } finally{
            this.trackedPlans.clear(), super.dispose();
        }
    }
    emitPlanChange(t) {
        this.onDidPlanChangeEmitter.fire(t);
    }
    getConversationState() {
        return this.options.getConversationState();
    }
    getPlanRegistryEntriesForState(t) {
        return t ? Object.values(t.plans ?? {}) : [];
    }
    getLatestPlanRegistryEntryForState(t) {
        const e = this.getPlanRegistryEntriesForState(t);
        return e.length > 0 ? e[e.length - 1] : void 0;
    }
    getCurrentWorkspace() {
        return this.options.workspaceFactory.workspace.value;
    }
    attachStream(t) {
        if (this.streamDisposables.clear(), !t) return;
        const e = ()=>{
            this.refreshLatestPlan();
        };
        t.conversationStateListeners.add(e), t.workflowStatusListeners.add(e), this.streamDisposables.add({
            dispose: ()=>{
                t.conversationStateListeners.delete(e), t.workflowStatusListeners.delete(e);
            }
        }), this.refreshLatestPlan();
    }
    async refreshLatestPlan() {
        await this.refreshTrackedPlans();
        const t = this.getLatestPlanRegistryEntryForState(this.getConversationState());
        if (!t) {
            this.currentPlanId && this.emitPlanChange({
                planId: this.currentPlanId
            }), this.currentPlanId = void 0;
            return;
        }
        this.currentPlanId = t.id, this.emitPlanChange({
            planId: t.id
        });
    }
    planRegistryFsPathToUri(t, e) {
        return t ? t.instantiationService.invokeFunction((n)=>{
            const i = n.get(Rd), r = n.get(ps);
            return x5(rt.file(e), r.remoteAuthority, i.defaultUriScheme);
        }) : rt.file(e);
    }
    getPlanDisplayFromContent(t) {
        if (!t) return {
            title: "Plan",
            overview: ""
        };
        const e = Tze(t);
        return {
            title: e?.frontmatter.name || "Plan",
            overview: e?.frontmatter.overview ?? ""
        };
    }
    decodeArtifactTextContent(t) {
        return new TextDecoder().decode(t);
    }
    async getFallbackArtifactPlanContent(t) {
        const e = await this.options.artifactsStore.listArtifacts();
        if (e.length === 0) return;
        const n = e.find((s)=>s.absolutePath === t.path);
        if (!n) return;
        const i = await this.options.artifactsStore.getArtifactBytes(n.absolutePath);
        if (!i) return;
        const r = this.decodeArtifactTextContent(i.content);
        return {
            absolutePath: n.absolutePath,
            content: r
        };
    }
    async getPlanContentSource(t) {
        let e;
        try {
            e = (await this.ensureTrackedPlan(t))?.modelRef?.object.textEditorModel.getValue();
        } catch  {}
        const n = this.getConversationState()?.plans?.[t], i = this.options.getPlanContentSnapshot?.(t);
        if (e !== void 0 && (e.length > 0 || i === void 0)) return e.length > 0 && n !== void 0 && this.options.clearPlanContentSnapshot?.(t), {
            content: e,
            readonly: !1
        };
        if (!n) return i !== void 0 ? {
            content: i,
            readonly: !0
        } : void 0;
        const r = await this.getFallbackArtifactPlanContent(n);
        if (r?.content.length) return this.options.clearPlanContentSnapshot?.(t), {
            content: r.content,
            readonly: !0
        };
        const s = n.path.length === 0 ? await this.getConversationStatePlanContent() : void 0;
        if (s !== void 0 && s.length > 0) return {
            content: s,
            readonly: !0
        };
        if (i !== void 0) return {
            content: i,
            readonly: !0
        };
    }
    async getConversationStatePlanContent() {
        const t = this.getConversationState()?.plan;
        if (t === void 0 || t.length === 0) return;
        const e = this.options.getBlobStore();
        if (e) try {
            const n = await e.getBlob(Xp(), t);
            if (n === void 0 || n.length === 0) return;
            const i = zSr.fromBinary(n);
            return i.plan.length === 0 ? void 0 : i.plan;
        } catch  {
            return;
        }
    }
    getOrCreateTrackedPlan(t) {
        const e = this.trackedPlans.get(t);
        if (e) return e;
        const n = {
            contentEmitter: new tt,
            modelDisposables: new Nt
        };
        return this.trackedPlans.set(t, n), n;
    }
    async resolvePlanUri(t) {
        const e = this.getCurrentWorkspace();
        if (!e) return;
        const n = this.getConversationState()?.plans?.[t];
        if (n?.path) return this.planRegistryFsPathToUri(e, n.path);
    }
    async ensureTrackedPlan(t) {
        const e = this.getOrCreateTrackedPlan(t);
        if (e.ensurePromise) return await e.ensurePromise, e.modelRef ? e : void 0;
        const n = this.doEnsureTrackedPlan(t, e);
        e.ensurePromise = n;
        try {
            await n;
        } finally{
            e.ensurePromise === n && (e.ensurePromise = void 0);
        }
        return e.modelRef ? e : void 0;
    }
    async doEnsureTrackedPlan(t, e) {
        const n = this.getCurrentWorkspace();
        if (!n) {
            e.modelDisposables.clear(), e.modelRef = void 0, e.uri = void 0;
            return;
        }
        const i = this.getConversationState()?.plans?.[t], r = i?.path ? this.planRegistryFsPathToUri(n, i.path) : void 0;
        if (!r) {
            e.modelDisposables.clear(), e.modelRef = void 0, e.uri = void 0;
            return;
        }
        if (e.modelRef && e.uri?.toString() === r.toString()) return;
        e.modelDisposables.clear(), e.modelRef = void 0, e.uri = void 0;
        const o = await nV(n, Rh).createModelReference(r);
        if (e.modelDisposables.isDisposed) {
            o.dispose();
            return;
        }
        e.modelRef = o, e.uri = r, e.modelDisposables.add(o), e.modelDisposables.add(o.object.textEditorModel.onDidChangeContent(()=>{
            e.contentEmitter.fire(o.object.textEditorModel.getValue());
        }));
    }
    async refreshTrackedPlans() {
        for (const t of this.trackedPlans.keys())await this.ensureTrackedPlan(t);
    }
    async getPlanTodosFromDisk(t) {
        const e = await this.getPlanContent(t);
        return Tze(e ?? "")?.frontmatter.todos ?? [];
    }
    async getLastTurnUserMessage() {
        const t = this.getConversationState()?.turns.at(-1), e = this.options.getBlobStore();
        if (!(!t || !e)) try {
            const n = Xp(), i = await e.getBlob(n, t);
            if (!i) return;
            const r = fY.fromBinary(i);
            if (r.turn.case !== "agentConversationTurn") return;
            const s = r.turn.value.userMessage;
            if (!s || s.length === 0) return;
            const o = await e.getBlob(n, s);
            return o ? t0.fromBinary(o) : void 0;
        } catch  {
            return;
        }
    }
    isPlanExecutionMessage(t, e) {
        if (!t || t.isSimulatedMsg !== !0 || t.simulatedMsgReason !== hc.PLAN_EXECUTION || !this.getConversationState()?.plans?.[e]) return !1;
        const n = t.executePlanInfo;
        return n?.planId !== void 0 && n.planId.length > 0 ? n.planId === e : !1;
    }
    hasComposerPlanExecutionBubbleForPlan(t) {
        const e = this.options.getComposerDataHandle(), n = e?.data.fullConversationHeadersOnly, i = e?.data.conversationMap;
        if (!n?.length || !i) return !1;
        let r;
        for(let o = n.length - 1; o >= 0; o--)if (n[o].type === bs.HUMAN) {
            r = n[o].bubbleId;
            break;
        }
        if (!r) return !1;
        const s = i[r];
        return s.type !== bs.HUMAN || s.isPlanExecution !== !0 ? !1 : s.planId === t;
    }
    async getPlanStatusInputs(t) {
        const e = await this.getPlanTodosFromDisk(t), n = e.some((l)=>l.status === "in_progress"), i = e.some((l)=>l.status !== "pending"), s = this.options.getComposerDataHandle()?.data.status === "generating" || fR(this.options.getCloudAgentStatus()), o = await this.getLastTurnUserMessage(), a = s && (n || this.isPlanExecutionMessage(o, t) || this.hasComposerPlanExecutionBubbleForPlan(t));
        return {
            planTodos: e,
            hasStartedTodoOnDisk: i,
            isPlanExecutionActive: a
        };
    }
    async getLatestPlan() {
        const t = this.getLatestPlanRegistryEntryForState(this.getConversationState());
        return t ? this.toPlanSnapshot(t) : void 0;
    }
    async getPlanForUri(t) {
        const e = this.getPlanRegistryEntriesForState(this.getConversationState()).find((n)=>n.path.length > 0 && gu(rt.file(n.path), t));
        return e ? this.toPlanSnapshot(e) : void 0;
    }
    async toPlanSnapshot(t) {
        const e = await this.getPlanContentSource(t.id), n = e?.content, { title: i, overview: r } = this.getPlanDisplayFromContent(n);
        return {
            planId: t.id,
            title: i,
            overview: r,
            readonly: e?.readonly ?? !1
        };
    }
    async restorePlanTextModels(t) {
        if (!t) return;
        const e = this.getPlanRegistryEntriesForState(this.getConversationState());
        if (e.length === 0) return;
        const n = t.instantiationService.invokeFunction((r)=>r.get(Vf)), i = new Set;
        for (const r of e){
            if (!r.path) continue;
            const s = this.planRegistryFsPathToUri(t, r.path), o = s.toString();
            i.has(o) || (i.add(o), await n.revert(s, {
                force: !0,
                soft: !1
            }));
        }
    }
    onDidPlanChange(t) {
        return this.onDidPlanChangeEmitter.event(t);
    }
    onDidRequestLoadedAgentStreamRecovery(t) {
        return this._register(this.onDidRequestLoadedAgentStreamRecoveryEmitter.event(t));
    }
    async getPlanBuildStatus(t) {
        const e = this.getConversationState()?.plans?.[t] !== void 0, n = this.options.getPlanContentSnapshot?.(t) !== void 0, i = this.options.getActiveStream(), r = this.options.getCloudAgentStatus();
        if (!e) return n && (i !== void 0 || fR(r)) ? XI.ACTIVE : XI.NONE;
        const { planTodos: s, isPlanExecutionActive: o } = await this.getPlanStatusInputs(t);
        return s.length === 0 ? o ? XI.ACTIVE : XI.NONE : s.every((a)=>a.status === "completed" || a.status === "cancelled") ? XI.COMPLETE : o ? XI.ACTIVE : XI.NONE;
    }
    async getPlanDerivedStatus(t) {
        if (!this.getConversationState()?.plans?.[t]) return mle.PENDING;
        const { planTodos: e, hasStartedTodoOnDisk: n, isPlanExecutionActive: i } = await this.getPlanStatusInputs(t);
        return e.length === 0 ? i ? mle.IN_PROGRESS : mle.PENDING : e.every((r)=>r.status === "completed" || r.status === "cancelled") ? mle.COMPLETE : i || n ? mle.IN_PROGRESS : mle.PENDING;
    }
    onDidPlanContentChange(t, e) {
        const n = this.getOrCreateTrackedPlan(t);
        return this.ensureTrackedPlan(t).catch(()=>{}), n.contentEmitter.event(e);
    }
    async getPlanContent(t) {
        return (await this.getPlanContentSource(t))?.content;
    }
    async setPlanContent(t, e) {
        const i = (await this.ensureTrackedPlan(t))?.modelRef?.object.textEditorModel;
        !i || i.getValue() === e || i.setValue(e);
    }
    async createPlanContentModelReference(t) {
        const e = this.getCurrentWorkspace(), n = await this.resolvePlanUri(t);
        if (!e || !n) return;
        const i = nV(e, Rh);
        try {
            return {
                uri: n,
                modelRef: await i.createModelReference(n)
            };
        } catch  {
            return;
        }
    }
    async savePlanContent(t) {
        let e;
        try {
            e = await _$(this.options.workspaceFactory, Lc.Files);
        } catch (r) {
            throw new Error(`CloudAgentPlanHandler.savePlanContent: workspace not available for ${t}`, {
                cause: r
            });
        }
        const n = await this.resolvePlanUri(t);
        if (!n) throw new Error(`CloudAgentPlanHandler.savePlanContent: plan URI not available for ${t}`);
        await e.instantiationService.invokeFunction((r)=>r.get(Vf)).save(n, {
            force: !0
        }), this.emitPlanChange({
            planId: t
        });
    }
    buildPlanExecutionPrompt(t) {
        return `${t}

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.`;
    }
    async executePlan(t) {
        const e = this.options.agentId, { structuredLogService: n } = this.options, i = this.options.getComposerDataHandle();
        if (!i) throw new Error(`CloudAgentPlanHandler.executePlan: composer handle not loaded for ${e}`);
        const r = Ai(), s = this.getConversationState()?.plans?.[t];
        if (!s) throw new Error(`CloudAgentPlanHandler.executePlan: plan entry not found for ${t}`);
        const o = await this.getPlanContent(t);
        if (!o) return;
        const a = this.getPlanDisplayFromContent(o).title, l = s.path;
        this.options.beginOptimisticPlanExecution(), this.options.appendOptimisticPlanExecutionMessage({
            bubbleId: r,
            planTitle: a,
            planId: t
        });
        const c = {
            planId: t
        };
        this.emitPlanChange(c);
        const u = i.data.unifiedMode;
        i.setData("unifiedMode", "agent");
        const d = ()=>{
            this.options.rollbackOptimisticPlanExecution(r), i.setData("unifiedMode", u);
        }, { requestedModel: h, legacyModelDetails: p } = await this.options.buildSubmitModelFields(), g = this.buildPlanExecutionPrompt(a), f = new wy({
            type: bs.HUMAN,
            bubbleId: r,
            text: g
        }), _ = new MI({
            action: {
                case: "executePlanAction",
                value: new X4t({
                    planFileContent: o,
                    executionMode: t2.AGENT,
                    kickoffMessageId: r,
                    planId: t,
                    planFilePath: l
                })
            }
        });
        try {
            await this.options.aiService.backgroundComposerSyncClient.addAsyncFollowupBackgroundComposer(new Pqe({
                bcId: e,
                synchronous: !0,
                followupMessage: f,
                followupConversationAction: _,
                requestedModel: h,
                modelDetails: p,
                followupSource: ec.WEBSITE,
                followupId: r
            }));
        } catch (b) {
            throw n.error("background_composer", "CloudAgentPlanHandler: execute plan failed", b instanceof Error ? b : void 0, {
                agentId: e,
                planId: t,
                followupId: r
            }), d(), this.emitPlanChange(c), b;
        }
        n.info("background_composer", "CloudAgentPlanHandler: execute plan submitted", {
            agentId: e,
            planId: t,
            followupId: r
        }), this.onDidRequestLoadedAgentStreamRecoveryEmitter.fire("followup_submitted");
    }
}, qgg = new cV(!1), zgg = new cV(qze()), Vgg = new cV(!1), Kgg = new cV(void 0), Ygg = class {
    constructor(t, e, n, i = void 0){
        this._inner = t, this._stableId = e, this._callbacks = n, this._branchGate = i, this._ref = new Vn, this._disposed = !1, this._notifiedSyncUserIntentFailure = !1, this._agentId = this._inner.agentId;
        const r = new Nt, s = r.add(new Vn), o = (l)=>{
            s.value = l.onWillForceDispose(()=>this.dispose());
        }, a = this._inner.createRef((l)=>{
            this._inner = l, this._branchGate = l.privateWorkerBranchGate, o(l);
        });
        o(this._inner), r.add(a), this._ref.value = r;
    }
    get isDisposed() {
        return this._disposed;
    }
    _liveInner(t) {
        const e = this._disposedStandIn;
        return e ? (e.report(t), this._callbacks.getLiveLoadedAgent(this._agentId)) : this._inner;
    }
    _withLiveAgent(t, e) {
        const n = this._liveInner(t);
        if (!n) throw new Zos({
            stableId: this._stableId,
            agentId: this._agentId,
            operation: t
        });
        return e(n);
    }
    _withLiveAgentSync(t, e) {
        try {
            this._withLiveAgent(t, e);
        } catch (n) {
            if (!(n instanceof Zos)) throw n;
            xr(n), this._notifiedSyncUserIntentFailure || (this._notifiedSyncUserIntentFailure = !0, this._callbacks.notifyUserIntentFailed(t));
        }
    }
    async _applyPullRequestAutoMerge(t, e, n, i) {
        const r = e.trim();
        if (!r) {
            const o = n ? "enable" : "disable";
            throw new Error(`Cannot ${o} pull request auto-merge: missing prUrl for agent ${t.agentId}`);
        }
        await i(r);
        const s = t.pullRequestState.value;
        if (s?.type === "resolved" && s.value && Zp(s.value.prUrl) === Zp(r)) {
            t.setResolvedPullRequestState({
                ...s.value,
                isAutoMergeEnabled: n
            });
            return;
        }
        t.notifyDidChangePrState();
    }
    get header() {
        const t = this._disposedStandIn;
        return t ? t.header : this._inner.header;
    }
    get stableId() {
        return this._stableId;
    }
    get workspaceIdentifier() {
        return this.header.environment.value;
    }
    get agentEnvironment() {
        const t = this._disposedStandIn;
        return t ? (t.report("agentEnvironment"), Ycl) : this._inner.agentEnvironment;
    }
    get workspaceFactory() {
        const t = this._disposedStandIn;
        return t ? (t.report("workspaceFactory"), t.workspaceFactory) : this._inner.workspaceFactory;
    }
    get pullRequestState() {
        return this._disposed ? Vcl : this._inner.pullRequestState;
    }
    get pullRequestStates() {
        return this._disposed ? Kcl : this._inner.pullRequestStates;
    }
    getPullRequestEntriesForRepoPath(t) {
        return this._disposedStandIn ? (this._disposedStandIn.report("getPullRequestEntriesForRepoPath"), Qos) : this._inner.getPullRequestEntriesForRepoPath(t);
    }
    unlinkAssociatedBranch(t, e) {}
    linkAssociatedBranch(t, e) {}
    get connected() {
        return this._disposed ? qgg : this._inner.connected;
    }
    get pullRequestActions() {
        return {
            create: (t, e)=>this._withLiveAgent("createPullRequest", ()=>this._callbacks.createPullRequest(this._agentId, e)),
            markAsReady: (t)=>this._withLiveAgent("markAsReady", ()=>this._callbacks.markAsReady(this._agentId, t)),
            merge: (t, e, n)=>this._withLiveAgent("merge", ()=>this._callbacks.merge(this._agentId, t, e, n)),
            enableAutoMerge: (t, e)=>this._withLiveAgent("enableAutoMerge", (n)=>this._applyPullRequestAutoMerge(n, t, !0, (i)=>n.enablePullRequestAutoMerge(i, e))),
            disableAutoMerge: (t)=>this._withLiveAgent("disableAutoMerge", (e)=>this._applyPullRequestAutoMerge(e, t, !1, (n)=>e.disablePullRequestAutoMerge(n)))
        };
    }
    get branchActions() {
        if (this._disposed || !this._branchGate && !this._inner.privateWorkerBranchGate) return;
        const t = ()=>this._disposed ? void 0 : this._branchGate ?? this._inner.privateWorkerBranchGate;
        return {
            get branchMismatchRequest () {
                return t()?.branchMismatchRequest;
            },
            get branchAncestryCache () {
                return t()?.branchAncestryCache;
            },
            directCheckout: (e)=>t()?.directCheckout(e) ?? Promise.resolve({
                    status: "failed"
                }),
            initBranchAncestryTracking: (...e)=>t()?.initBranchAncestryTracking(...e) ?? st.None,
            runBranchMismatchGate: (...e)=>t()?.runBranchMismatchGate(...e) ?? Promise.resolve({
                    success: !1,
                    status: "cancelled"
                })
        };
    }
    get composerDataHandle() {
        const t = this._disposedStandIn;
        return t ? (t.report("composerDataHandle"), t.composerDataHandle) : this._inner.composerDataHandle;
    }
    ensureConversationBodies(t) {
        return this._callbacks.ensureConversationBodies(t);
    }
    get backgroundComposerData() {
        const t = this._disposedStandIn;
        if (t) {
            t.report("backgroundComposerData");
            return;
        }
        return this._inner.backgroundComposerData;
    }
    async submitMessage(t, e) {
        await this._withLiveAgent("submitMessage", ()=>this._callbacks.submitMessage(this._agentId, t, e));
    }
    getQueueItems() {
        return this._callbacks.getQueueItems(this._agentId);
    }
    async removeFromQueue(t) {
        await this._withLiveAgent("removeFromQueue", ()=>this._callbacks.removeFromQueue(this._agentId, t));
    }
    async updateQueueItem(t, e) {
        await this._withLiveAgent("updateQueueItem", ()=>this._callbacks.updateQueueItem(this._agentId, t, e));
    }
    async setQueueItemEditing(t, e) {
        await this._withLiveAgent("setQueueItemEditing", ()=>this._callbacks.setQueueItemEditing({
                agentId: this._agentId,
                queueItemId: t,
                editing: e
            }));
    }
    async submitQueueItemNow(t) {
        await this._withLiveAgent("submitQueueItemNow", ()=>this._callbacks.submitQueueItemNow(this._agentId, t));
    }
    isQueueSteeringAvailable() {
        return this._callbacks.isQueueSteeringAvailable?.(this._agentId) ?? !1;
    }
    async promoteQueueItemToSteer(t) {
        return await this._withLiveAgent("promoteQueueItemToSteer", ()=>this._callbacks.promoteQueueItemToSteer?.(this._agentId, t)) ?? !1;
    }
    reorderQueue(t, e, n) {
        this._withLiveAgentSync("reorderQueue", ()=>this._callbacks.reorderQueue(this._agentId, t, e, n));
    }
    async getLatestPlan() {
        return this._liveInner("getLatestPlan")?.planHandler.getLatestPlan();
    }
    async getPlanForUri(t) {
        return this._liveInner("getPlanForUri")?.planHandler.getPlanForUri(t);
    }
    onDidPlanChange(t) {
        return this._liveInner("onDidPlanChange")?.planHandler.onDidPlanChange(t) ?? st.None;
    }
    async getPlanBuildStatus(t) {
        const e = this._liveInner("getPlanBuildStatus");
        return e ? e.planHandler.getPlanBuildStatus(t) : XI.NONE;
    }
    async getPlanDerivedStatus(t) {
        const e = this._liveInner("getPlanDerivedStatus");
        return e ? e.planHandler.getPlanDerivedStatus(t) : mle.PENDING;
    }
    onDidPlanContentChange(t, e) {
        return this._liveInner("onDidPlanContentChange")?.planHandler.onDidPlanContentChange(t, e) ?? st.None;
    }
    async getPlanContent(t) {
        return this._liveInner("getPlanContent")?.planHandler.getPlanContent(t);
    }
    async setPlanContent(t, e) {
        return this._withLiveAgent("setPlanContent", (n)=>n.planHandler.setPlanContent(t, e));
    }
    async createPlanContentModelReference(t) {
        return this._liveInner("createPlanContentModelReference")?.planHandler.createPlanContentModelReference(t);
    }
    async savePlanContent(t) {
        return this._withLiveAgent("savePlanContent", (e)=>e.planHandler.savePlanContent(t));
    }
    async executePlan(t) {
        await this._withLiveAgent("executePlan", (e)=>e.planHandler.executePlan(t.planId));
    }
    async restoreToCheckpoint(t) {
        throw new Error("Cloud agent checkpoint restoration not yet supported");
    }
    savePendingQuestionnaireDraft(t, e) {
        this._withLiveAgentSync("savePendingQuestionnaireDraft", (n)=>Jil(n.composerDataHandle, t, e));
    }
    async submitPendingQuestionnaire(t, e) {
        return this._withLiveAgent("submitPendingQuestionnaire", ()=>this._callbacks.submitPendingQuestionnaire(this._agentId, t, e));
    }
    async skipPendingQuestionnaire(t) {
        await this._withLiveAgent("skipPendingQuestionnaire", ()=>this._callbacks.skipPendingQuestionnaire(this._agentId, t));
    }
    async acceptCloudMcpAuth(t) {
        await this._withLiveAgent("acceptCloudMcpAuth", ()=>this._callbacks.acceptCloudMcpAuth(this._agentId, t));
    }
    async skipCloudMcpAuth(t) {
        await this._withLiveAgent("skipCloudMcpAuth", ()=>this._callbacks.skipCloudMcpAuth(this._agentId, t));
    }
    async resume() {
        throw new Error("Cloud agent resume not yet supported");
    }
    hasDiff() {
        if (this._disposed) return !1;
        const t = vgg({
            diffStats: this._inner.backgroundComposerData?.diffStats,
            composerLines: this._inner.composerDataHandle.data
        });
        return t.files > 0 || t.added > 0 || t.removed > 0;
    }
    abortChat() {
        this._withLiveAgentSync("abortChat", (t)=>t.abortChat());
    }
    startPullRequestStateBurst(t, e) {
        this._withLiveAgentSync("startPullRequestStateBurst", (n)=>n.startPullRequestStateBurst());
    }
    refreshPullRequestStateNow(t, e) {
        this._withLiveAgentSync("refreshPullRequestStateNow", (n)=>n.refreshPullRequestStateNow());
    }
    async triggerReconnect() {
        await this._withLiveAgent("triggerReconnect", (t)=>t.triggerReconnect());
    }
    dispose() {
        this._disposed || (this._disposed = !0, this._disposedStandIn = xgg({
            header: j1k(this._inner.header, {
                agentId: this._agentId,
                stableId: this._stableId
            }),
            composerId: this._inner.composerDataHandle?.composerId ?? this._stableId,
            agentId: this._agentId,
            stableId: this._stableId
        }), this._inner = Agg(this._stableId), this._branchGate = void 0, this._ref.dispose());
    }
    [Symbol.dispose]() {
        this.dispose();
    }
};

}
