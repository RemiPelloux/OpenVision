import { jpo } from "./A3u.js";
import { qh } from "./De_3.js";
import { He, Pk, Se, XL, bt, cn, ns, po, si, ve, we } from "./HVr.js";
import { UFn } from "./agentQuestionnaireActions.js";
import { Hyt, I1, UE, mX, oUi, x1, xd, zd } from "./agent_pb.js";
import { Za, na } from "./authenticationService.js";
import { Zc, hm, pPe } from "./background_composer_pb.js";
import { JNu } from "./blob-store.ts";
import { a8e, cE, lVv, s8e, zE } from "./cgh.js";
import { Hu, Tr, Uv } from "./chat_pb.js";
import { bU } from "./cloud-agent.ts";
import { Fxh, Ge_ } from "./cloudAgentChatBlobStore.js";
import { Xe_, jxh } from "./cloudAgentLoader.js";
import { U1e } from "./cloudAgentRepositoryModel.js";
import { je_ } from "./cloudCommittedDiffCounts.js";
import { G3u, gXs } from "./composerDraftRecord.js";
import { aG, mF } from "./composerPlanService.js";
import { Kxh, NTo, Yxh, Zxh, mLe, nt_, qxh, vJi, zxh } from "./disposedAgentReferenceTombstone.js";
import { Vr, Yi } from "./environmentService.js";
import { Kr, qs } from "./experimentService.js";
import { pF } from "./githubUtils.js";
import { Ml } from "./index.ts";
import { Gp } from "./index_3.ts";
import { A1 } from "./index_5.ts";
import { oIh } from "./loadedCloudAgent.js";
import { Cp, vp } from "./metricsService.js";
import { fu, zl } from "./pathService.js";
import { Kde, ott } from "./planStorageService.js";
import { N1, t8 } from "./reactive.js";
import { Nl, bc } from "./resolverService.js";
import { Ac, Li } from "./resources.js";
import { Ag, Xp } from "./textfiles.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Js, zn } from "./uuid.js";
import { U0, Yv } from "./workspaceCollectionService.js";
import { XPe } from "./workspaceRefHelpers.js";
import { M2n } from "./workspaces_2.js";
import { Let } from "./xmo.js";
function Ve_(e) {
    const { diffStats: t, composerLines: n } = e;
    return t ? {
        files: t.totalFiles,
        added: t.totalAdded,
        removed: t.totalRemoved
    } : {
        files: 0,
        added: n.totalLinesAdded ?? 0,
        removed: n.totalLinesRemoved ?? 0
    };
}
function et_(e) {
    return new Zxh(e.header, e.composerId, e.agentId, e.stableId);
}
function tt_(e, t = qxh(e, "tombstone")) {
    const n = new Proxy(function() {}, {
        get (i, r) {
            if (r !== "then") return r === "isDisposed" ? !0 : r === Symbol.iterator ? function*() {} : r === Symbol.toPrimitive || r === "toString" || r === "valueOf" ? ()=>"" : (t(String(r)), n);
        },
        apply () {
            return t("call"), n;
        }
    });
    return n;
}
function st_(e, t) {
    const n = Object.freeze(jpo(Ee.from({
        scheme: "vscode-remote",
        authority: `background-composer+${t.agentId}`,
        path: bU
    }))), i = e?.targetEnvironment ?? Object.freeze({
        type: "existing",
        environment: n
    });
    return Object.freeze({
        id: t.agentId,
        subagentParentId: e?.subagentParentId,
        subagentTypeName: e?.subagentTypeName,
        projectId: e?.projectId ?? "",
        environment: new t8(e?.environment?.value ?? n),
        targetEnvironment: i,
        name: new t8(e?.name?.value ?? ""),
        source: e?.source ?? "cloud",
        cloudSource: e?.cloudSource,
        startedAsNewProject: new t8(e?.startedAsNewProject?.value ?? !1),
        status: new t8(e?.status?.value ?? "done"),
        createdAt: e?.createdAt ?? 0,
        lastUpdatedAt: new t8(e?.lastUpdatedAt?.value ?? 0),
        subtitle: new t8(e?.subtitle?.value),
        trackedGitRepos: dIh,
        hasUnreadMessages: hIh,
        conversationState: pIh,
        blobStore: JNu,
        prUrl: new t8(e?.prUrl?.value),
        isArchived: new t8(e?.isArchived?.value ?? !1)
    });
}
var aIh, cIh, lIh, uIh, dIh, hIh, pIh, mIh;
export { Ve_, aIh, cIh, dIh, et_, hIh, lIh, mIh, pIh, st_, tt_, uIh };
var __wakaru_ot__initialized = false;
export function ot_() {
if (__wakaru_ot__initialized) return;
__wakaru_ot__initialized = true;
"use strict";
x(), Ml(), Gp(), A1(), zd(), Hu(), si(), bt(), Se(), Li(), Qt(), Js(), Nl(), Vr(), hm(), fu(), aG(), ott(), Ge_(), Ag(), je_(), N1(), G3u(), XPe(), Xe_(), U1e(), pF(), nt_(), M2n(), UFn(), Za(), qs(), Cp(), Yv(), oIh(), aIh = "cloudAgentDraft:", cIh = class {
    constructor(e, t, n, i, r, s, o, a, c = {}){
        this.instantiationService = e, this.structuredLogService = t, this.modelConfigService = n, this.aiService = i, this.selectedContextService = r, this.workspaceContextService = s, this.storageService = a, this.activeStreams = new Map, this._onActiveStreamAttachedPending = new Map, this.placeholderResolvers = new Map, this._streams = new Map, this._chatBlobStores = new po;
        const { onWorkflowStatus: l, onPinnedWorkerOffline: u, getAgentRowUpdatedAtMs: h, getHydrationBackgroundComposerStatus: p, getHydrationBackgroundComposerSource: g, onInteractionUpdateFanout: f, onAgentName: v, onStreamOpen: b, onInitialStateHydrated: y, getHydrationSideChatSeedTurnCount: T, getHydrationParentAgentId: E, getHydrationTurnWindowSize: A, getHydrationTurnWindowLimit: R, onHydrationTurnWindowLimitGrown: D } = c;
        this.cloudAgentCacheService = o, this._onWorkflowStatus = l, this._getHydrationBackgroundComposerStatus = p, this._getHydrationBackgroundComposerSource = g, this._getHydrationSideChatSeedTurnCount = T, this._getHydrationParentAgentId = E, this._getHydrationTurnWindowSize = A, this._getHydrationTurnWindowLimit = R, this._drafts = new gXs(a, aIh), this._loader = new jxh({
            activeStreams: this.activeStreams,
            placeholderResolvers: this.placeholderResolvers,
            streams: this._streams,
            getChatBlobStore: (P)=>this.getChatBlobStore(P),
            notifyActiveStreamAttached: (P, N)=>this._notifyActiveStreamAttached(P, N),
            instantiationService: this.instantiationService,
            structuredLogService: this.structuredLogService,
            modelConfigService: this.modelConfigService,
            aiService: this.aiService,
            metricsService: this.instantiationService.invokeFunction((P)=>P.get(vp)),
            experimentService: this.instantiationService.invokeFunction((P)=>P.get(Kr)),
            selectedContextService: this.selectedContextService,
            workspaceContextService: this.workspaceContextService,
            cloudAgentCacheService: this.cloudAgentCacheService,
            onWorkflowStatus: this._onWorkflowStatus,
            onPinnedWorkerOffline: u,
            getAgentRowUpdatedAtMs: h,
            onAgentName: v,
            onStreamOpen: b,
            onInteractionUpdateFanout: f,
            getHydrationBackgroundComposerStatus: this._getHydrationBackgroundComposerStatus,
            getHydrationBackgroundComposerSource: this._getHydrationBackgroundComposerSource,
            getHydrationSideChatSeedTurnCount: this._getHydrationSideChatSeedTurnCount,
            getHydrationParentAgentId: this._getHydrationParentAgentId,
            getHydrationTurnWindowSize: this._getHydrationTurnWindowSize,
            getHydrationTurnWindowLimit: this._getHydrationTurnWindowLimit,
            onHydrationTurnWindowLimitGrown: D,
            onInitialStateHydrated: y,
            getViewerAuthId: ()=>this.instantiationService.invokeFunction((P)=>P.get(na).getCurrentAuthId())
        });
    }
    onActiveStreamAttached(e, t) {
        const n = this.activeStreams.get(e);
        if (n) return t(n), {
            dispose: ()=>{}
        };
        let i = this._onActiveStreamAttachedPending.get(e);
        return i || (i = new Set, this._onActiveStreamAttachedPending.set(e, i)), i.add(t), {
            dispose: ()=>{
                const r = this._onActiveStreamAttachedPending.get(e);
                r && (r.delete(t), r.size === 0 && this._onActiveStreamAttachedPending.delete(e));
            }
        };
    }
    _notifyActiveStreamAttached(e, t) {
        const n = this._onActiveStreamAttachedPending.get(e);
        if (n) {
            for (const i of [
                ...n
            ])i(t);
            this._onActiveStreamAttachedPending.delete(e);
        }
    }
    async load(e, t, n = !1) {
        const [i, r] = await Promise.all([
            this._loader.load(e, n),
            this._drafts.read(e)
        ]);
        return i !== void 0 && r !== void 0 && (i.text ?? "") === "" && (i.text = r.text, r.richText !== void 0 && (i.richText = r.richText)), i;
    }
    async persistLoadedComposer(e, t) {
        return this._drafts.write(e.composerId, e);
    }
    async clearAllDraftState() {
        return this._drafts.clear();
    }
    registerSaveHook(e) {
        return this.storageService.cursorDiskKVOnShouldSave(e);
    }
    async deleteComposer(e) {
        this.disposeAgentStream(e), this.disposeChatBlobStore(e), await this._drafts.delete(e);
    }
    disposeAgentStream(e) {
        const t = this.activeStreams.get(e);
        t && (t.abort(), this.activeStreams.delete(e)), this.placeholderResolvers.delete(e), this.deleteStream(e), this._drafts.forget(e);
    }
    async loadOfsContent(e, t) {}
    getChatBlobStore(e) {
        let t = this._chatBlobStores.get(e);
        return t === void 0 && (t = new Fxh(e, this.cloudAgentCacheService, this.aiService), this._chatBlobStores.set(e, t)), t;
    }
    disposeChatBlobStore(e) {
        this._chatBlobStores.deleteAndDispose(e);
    }
    deleteStream(e) {
        const t = this._streams.get(e);
        t && (t.abort(), this._streams.delete(e));
    }
    disposeStreams() {
        for (const e of this._streams.values())e.abort();
        this._streams.clear(), this.placeholderResolvers.clear(), this._chatBlobStores.clearAndDisposeAll();
    }
    abortAllStreams() {
        for (const e of this.activeStreams.values())e.abort();
        this.activeStreams.clear(), this._onActiveStreamAttachedPending.clear(), this.disposeStreams();
    }
    dispose() {
        this.abortAllStreams(), this._chatBlobStores.dispose();
    }
}, lIh = class extends we {
    constructor(e){
        super(), this.options = e, this.trackedPlans = new Map, this.onDidPlanChangeEmitter = this._register(new ve), this.onDidRequestLoadedAgentStreamRecoveryEmitter = this._register(new ve), this.streamDisposables = this._register(new He), this._register(this.options.conversationState.onChange(()=>{
            this.refreshLatestPlan();
        }));
        const t = this.options.workspaceFactory.workspace;
        let n = t.value !== void 0;
        this._register(t.onChange((r)=>{
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
    onActiveStreamAttached(e) {
        return this.options.onActiveStreamAttached(e);
    }
    dispose() {
        const e = Array.from(this.trackedPlans.values()).flatMap((t)=>[
                t.modelDisposables,
                t.contentEmitter
            ]);
        try {
            Pk(...e);
        } finally{
            this.trackedPlans.clear(), super.dispose();
        }
    }
    emitPlanChange(e) {
        this.onDidPlanChangeEmitter.fire(e);
    }
    getConversationState() {
        return this.options.getConversationState();
    }
    getPlanRegistryEntriesForState(e) {
        return e ? Object.values(e.plans ?? {}) : [];
    }
    getLatestPlanRegistryEntryForState(e) {
        const t = this.getPlanRegistryEntriesForState(e);
        return t.length > 0 ? t[t.length - 1] : void 0;
    }
    getCurrentWorkspace() {
        return this.options.workspaceFactory.workspace.value;
    }
    attachStream(e) {
        if (this.streamDisposables.clear(), !e) return;
        const t = ()=>{
            this.refreshLatestPlan();
        };
        e.conversationStateListeners.add(t), e.workflowStatusListeners.add(t), this.streamDisposables.add({
            dispose: ()=>{
                e.conversationStateListeners.delete(t), e.workflowStatusListeners.delete(t);
            }
        }), this.refreshLatestPlan();
    }
    async refreshLatestPlan() {
        await this.refreshTrackedPlans();
        const e = this.getLatestPlanRegistryEntryForState(this.getConversationState());
        if (!e) {
            this.currentPlanId && this.emitPlanChange({
                planId: this.currentPlanId
            }), this.currentPlanId = void 0;
            return;
        }
        this.currentPlanId = e.id, this.emitPlanChange({
            planId: e.id
        });
    }
    planRegistryFsPathToUri(e, t) {
        return e ? e.instantiationService.invokeFunction((n)=>{
            const i = n.get(zl), r = n.get(Yi);
            return XL(Ee.file(t), r.remoteAuthority, i.defaultUriScheme);
        }) : Ee.file(t);
    }
    getPlanDisplayFromContent(e) {
        if (!e) return {
            title: "Plan",
            overview: ""
        };
        const t = s8e(e);
        return {
            title: t?.frontmatter.name || "Plan",
            overview: t?.frontmatter.overview ?? ""
        };
    }
    decodeArtifactTextContent(e) {
        return new TextDecoder().decode(e);
    }
    async getFallbackArtifactPlanContent(e) {
        const t = await this.options.artifactsStore.listArtifacts();
        if (t.length === 0) return;
        const n = t.find((s)=>s.absolutePath === e.path);
        if (!n) return;
        const i = await this.options.artifactsStore.getArtifactBytes(n.absolutePath);
        if (!i) return;
        const r = this.decodeArtifactTextContent(i.content);
        return {
            absolutePath: n.absolutePath,
            content: r
        };
    }
    async getPlanContentSource(e) {
        let t;
        try {
            t = (await this.ensureTrackedPlan(e))?.modelRef?.object.textEditorModel.getValue();
        } catch  {}
        const n = this.getConversationState()?.plans?.[e], i = this.options.getPlanContentSnapshot?.(e);
        if (t !== void 0 && (t.length > 0 || i === void 0)) return t.length > 0 && n !== void 0 && this.options.clearPlanContentSnapshot?.(e), {
            content: t,
            readonly: !1
        };
        if (!n) return i !== void 0 ? {
            content: i,
            readonly: !0
        } : void 0;
        const r = await this.getFallbackArtifactPlanContent(n);
        if (r?.content.length) return this.options.clearPlanContentSnapshot?.(e), {
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
        const e = this.getConversationState()?.plan;
        if (e === void 0 || e.length === 0) return;
        const t = this.options.getBlobStore();
        if (t) try {
            const n = await t.getBlob(qh(), e);
            if (n === void 0 || n.length === 0) return;
            const i = oUi.fromBinary(n);
            return i.plan.length === 0 ? void 0 : i.plan;
        } catch  {
            return;
        }
    }
    getOrCreateTrackedPlan(e) {
        const t = this.trackedPlans.get(e);
        if (t) return t;
        const n = {
            contentEmitter: new ve,
            modelDisposables: new He
        };
        return this.trackedPlans.set(e, n), n;
    }
    async resolvePlanUri(e) {
        const t = this.getCurrentWorkspace();
        if (!t) return;
        const n = this.getConversationState()?.plans?.[e];
        if (n?.path) return this.planRegistryFsPathToUri(t, n.path);
    }
    async ensureTrackedPlan(e) {
        const t = this.getOrCreateTrackedPlan(e);
        if (t.ensurePromise) return await t.ensurePromise, t.modelRef ? t : void 0;
        const n = this.doEnsureTrackedPlan(e, t);
        t.ensurePromise = n;
        try {
            await n;
        } finally{
            t.ensurePromise === n && (t.ensurePromise = void 0);
        }
        return t.modelRef ? t : void 0;
    }
    async doEnsureTrackedPlan(e, t) {
        const n = this.getCurrentWorkspace();
        if (!n) {
            t.modelDisposables.clear(), t.modelRef = void 0, t.uri = void 0;
            return;
        }
        const i = this.getConversationState()?.plans?.[e], r = i?.path ? this.planRegistryFsPathToUri(n, i.path) : void 0;
        if (!r) {
            t.modelDisposables.clear(), t.modelRef = void 0, t.uri = void 0;
            return;
        }
        if (t.modelRef && t.uri?.toString() === r.toString()) return;
        t.modelDisposables.clear(), t.modelRef = void 0, t.uri = void 0;
        const o = await Let(n, bc).createModelReference(r);
        if (t.modelDisposables.isDisposed) {
            o.dispose();
            return;
        }
        t.modelRef = o, t.uri = r, t.modelDisposables.add(o), t.modelDisposables.add(o.object.textEditorModel.onDidChangeContent(()=>{
            t.contentEmitter.fire(o.object.textEditorModel.getValue());
        }));
    }
    async refreshTrackedPlans() {
        for (const e of this.trackedPlans.keys())await this.ensureTrackedPlan(e);
    }
    async getPlanTodosFromDisk(e) {
        const t = await this.getPlanContent(e);
        return s8e(t ?? "")?.frontmatter.todos ?? [];
    }
    async getLastTurnUserMessage() {
        const e = this.getConversationState()?.turns.at(-1), t = this.options.getBlobStore();
        if (!(!e || !t)) try {
            const n = qh(), i = await t.getBlob(n, e);
            if (!i) return;
            const r = mX.fromBinary(i);
            if (r.turn.case !== "agentConversationTurn") return;
            const s = r.turn.value.userMessage;
            if (!s || s.length === 0) return;
            const o = await t.getBlob(n, s);
            return o ? I1.fromBinary(o) : void 0;
        } catch  {
            return;
        }
    }
    isPlanExecutionMessage(e, t) {
        if (!e || e.isSimulatedMsg !== !0 || e.simulatedMsgReason !== xd.PLAN_EXECUTION || !this.getConversationState()?.plans?.[t]) return !1;
        const n = e.executePlanInfo;
        return n?.planId !== void 0 && n.planId.length > 0 ? n.planId === t : !1;
    }
    hasComposerPlanExecutionBubbleForPlan(e) {
        const t = this.options.getComposerDataHandle(), n = t?.data.fullConversationHeadersOnly, i = t?.data.conversationMap;
        if (!n?.length || !i) return !1;
        let r;
        for(let o = n.length - 1; o >= 0; o--)if (n[o].type === Tr.HUMAN) {
            r = n[o].bubbleId;
            break;
        }
        if (!r) return !1;
        const s = i[r];
        return s.type !== Tr.HUMAN || s.isPlanExecution !== !0 ? !1 : s.planId === e;
    }
    async getPlanStatusInputs(e) {
        const t = await this.getPlanTodosFromDisk(e), n = t.some((c)=>c.status === "in_progress"), i = t.some((c)=>c.status !== "pending"), s = this.options.getComposerDataHandle()?.data.status === "generating" || cE(this.options.getCloudAgentStatus()), o = await this.getLastTurnUserMessage(), a = s && (n || this.isPlanExecutionMessage(o, e) || this.hasComposerPlanExecutionBubbleForPlan(e));
        return {
            planTodos: t,
            hasStartedTodoOnDisk: i,
            isPlanExecutionActive: a
        };
    }
    async getLatestPlan() {
        const e = this.getLatestPlanRegistryEntryForState(this.getConversationState());
        return e ? this.toPlanSnapshot(e) : void 0;
    }
    async getPlanForUri(e) {
        const t = this.getPlanRegistryEntriesForState(this.getConversationState()).find((n)=>n.path.length > 0 && Ac(Ee.file(n.path), e));
        return t ? this.toPlanSnapshot(t) : void 0;
    }
    async toPlanSnapshot(e) {
        const t = await this.getPlanContentSource(e.id), n = t?.content, { title: i, overview: r } = this.getPlanDisplayFromContent(n);
        return {
            planId: e.id,
            title: i,
            overview: r,
            readonly: t?.readonly ?? !1
        };
    }
    async restorePlanTextModels(e) {
        if (!e) return;
        const t = this.getPlanRegistryEntriesForState(this.getConversationState());
        if (t.length === 0) return;
        const n = e.instantiationService.invokeFunction((r)=>r.get(Xp)), i = new Set;
        for (const r of t){
            if (!r.path) continue;
            const s = this.planRegistryFsPathToUri(e, r.path), o = s.toString();
            i.has(o) || (i.add(o), await n.revert(s, {
                force: !0,
                soft: !1
            }));
        }
    }
    onDidPlanChange(e) {
        return this.onDidPlanChangeEmitter.event(e);
    }
    onDidRequestLoadedAgentStreamRecovery(e) {
        return this._register(this.onDidRequestLoadedAgentStreamRecoveryEmitter.event(e));
    }
    async getPlanBuildStatus(e) {
        const t = this.getConversationState()?.plans?.[e] !== void 0, n = this.options.getPlanContentSnapshot?.(e) !== void 0, i = this.options.getActiveStream(), r = this.options.getCloudAgentStatus();
        if (!t) return n && (i !== void 0 || cE(r)) ? mF.ACTIVE : mF.NONE;
        const { planTodos: s, isPlanExecutionActive: o } = await this.getPlanStatusInputs(e);
        return s.length === 0 ? o ? mF.ACTIVE : mF.NONE : s.every((a)=>a.status === "completed" || a.status === "cancelled") ? mF.COMPLETE : o ? mF.ACTIVE : mF.NONE;
    }
    async getPlanDerivedStatus(e) {
        if (!this.getConversationState()?.plans?.[e]) return Kde.PENDING;
        const { planTodos: t, hasStartedTodoOnDisk: n, isPlanExecutionActive: i } = await this.getPlanStatusInputs(e);
        return t.length === 0 ? i ? Kde.IN_PROGRESS : Kde.PENDING : t.every((r)=>r.status === "completed" || r.status === "cancelled") ? Kde.COMPLETE : i || n ? Kde.IN_PROGRESS : Kde.PENDING;
    }
    onDidPlanContentChange(e, t) {
        const n = this.getOrCreateTrackedPlan(e);
        return this.ensureTrackedPlan(e).catch(()=>{}), n.contentEmitter.event(t);
    }
    async getPlanContent(e) {
        return (await this.getPlanContentSource(e))?.content;
    }
    async setPlanContent(e, t) {
        const i = (await this.ensureTrackedPlan(e))?.modelRef?.object.textEditorModel;
        !i || i.getValue() === t || i.setValue(t);
    }
    async createPlanContentModelReference(e) {
        const t = this.getCurrentWorkspace(), n = await this.resolvePlanUri(e);
        if (!t || !n) return;
        const i = Let(t, bc);
        try {
            return {
                uri: n,
                modelRef: await i.createModelReference(n)
            };
        } catch  {
            return;
        }
    }
    async savePlanContent(e) {
        let t;
        try {
            t = await a8e(this.options.workspaceFactory, U0.Files);
        } catch (r) {
            throw new Error(`CloudAgentPlanHandler.savePlanContent: workspace not available for ${e}`, {
                cause: r
            });
        }
        const n = await this.resolvePlanUri(e);
        if (!n) throw new Error(`CloudAgentPlanHandler.savePlanContent: plan URI not available for ${e}`);
        await t.instantiationService.invokeFunction((r)=>r.get(Xp)).save(n, {
            force: !0
        }), this.emitPlanChange({
            planId: e
        });
    }
    buildPlanExecutionPrompt(e) {
        return `${e}

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.`;
    }
    async executePlan(e) {
        const t = this.options.agentId, { structuredLogService: n } = this.options, i = this.options.getComposerDataHandle();
        if (!i) throw new Error(`CloudAgentPlanHandler.executePlan: composer handle not loaded for ${t}`);
        const r = zn(), s = this.getConversationState()?.plans?.[e];
        if (!s) throw new Error(`CloudAgentPlanHandler.executePlan: plan entry not found for ${e}`);
        const o = await this.getPlanContent(e);
        if (!o) return;
        const a = this.getPlanDisplayFromContent(o).title, c = s.path;
        this.options.beginOptimisticPlanExecution(), this.options.appendOptimisticPlanExecutionMessage({
            bubbleId: r,
            planTitle: a,
            planId: e
        });
        const l = {
            planId: e
        };
        this.emitPlanChange(l);
        const u = i.data.unifiedMode;
        i.setData("unifiedMode", "agent");
        const h = ()=>{
            this.options.rollbackOptimisticPlanExecution(r), i.setData("unifiedMode", u);
        }, { requestedModel: p, legacyModelDetails: g } = await this.options.buildSubmitModelFields(), f = this.buildPlanExecutionPrompt(a), v = new Uv({
            type: Tr.HUMAN,
            bubbleId: r,
            text: f
        }), b = new x1({
            action: {
                case: "executePlanAction",
                value: new Hyt({
                    planFileContent: o,
                    executionMode: UE.AGENT,
                    kickoffMessageId: r,
                    planId: e,
                    planFilePath: c
                })
            }
        });
        try {
            await this.options.aiService.backgroundComposerSyncClient.addAsyncFollowupBackgroundComposer(new pPe({
                bcId: t,
                synchronous: !0,
                followupMessage: v,
                followupConversationAction: b,
                requestedModel: p,
                modelDetails: g,
                followupSource: Zc.WEBSITE,
                followupId: r
            }));
        } catch (y) {
            throw n.error("background_composer", "CloudAgentPlanHandler: execute plan failed", y instanceof Error ? y : void 0, {
                agentId: t,
                planId: e,
                followupId: r
            }), h(), this.emitPlanChange(l), y;
        }
        n.info("background_composer", "CloudAgentPlanHandler: execute plan submitted", {
            agentId: t,
            planId: e,
            followupId: r
        }), this.onDidRequestLoadedAgentStreamRecoveryEmitter.fire("followup_submitted");
    }
}, uIh = new t8(!1), dIh = new t8(mLe()), hIh = new t8(!1), pIh = new t8(void 0), mIh = class {
    constructor(e, t, n, i = void 0){
        this._inner = e, this._stableId = t, this._callbacks = n, this._branchGate = i, this._ref = new cn, this._disposed = !1, this._notifiedSyncUserIntentFailure = !1, this._agentId = this._inner.agentId;
        const r = new He, s = r.add(new cn), o = (c)=>{
            s.value = c.onWillForceDispose(()=>this.dispose());
        }, a = this._inner.createRef((c)=>{
            this._inner = c, this._branchGate = c.privateWorkerBranchGate, o(c);
        });
        o(this._inner), r.add(a), this._ref.value = r;
    }
    get isDisposed() {
        return this._disposed;
    }
    _liveInner(e) {
        const t = this._disposedStandIn;
        return t ? (t.report(e), this._callbacks.getLiveLoadedAgent(this._agentId)) : this._inner;
    }
    _withLiveAgent(e, t) {
        const n = this._liveInner(e);
        if (!n) throw new vJi({
            stableId: this._stableId,
            agentId: this._agentId,
            operation: e
        });
        return t(n);
    }
    _withLiveAgentSync(e, t) {
        try {
            this._withLiveAgent(e, t);
        } catch (n) {
            if (!(n instanceof vJi)) throw n;
            ns(n), this._notifiedSyncUserIntentFailure || (this._notifiedSyncUserIntentFailure = !0, this._callbacks.notifyUserIntentFailed(e));
        }
    }
    async _applyPullRequestAutoMerge(e, t, n, i) {
        const r = t.trim();
        if (!r) {
            const o = n ? "enable" : "disable";
            throw new Error(`Cannot ${o} pull request auto-merge: missing prUrl for agent ${e.agentId}`);
        }
        await i(r);
        const s = e.pullRequestState.value;
        if (s?.type === "resolved" && s.value && zE(s.value.prUrl) === zE(r)) {
            e.setResolvedPullRequestState({
                ...s.value,
                isAutoMergeEnabled: n
            });
            return;
        }
        e.notifyDidChangePrState();
    }
    get header() {
        const e = this._disposedStandIn;
        return e ? e.header : this._inner.header;
    }
    get stableId() {
        return this._stableId;
    }
    get workspaceIdentifier() {
        return this.header.environment.value;
    }
    get agentEnvironment() {
        const e = this._disposedStandIn;
        return e ? (e.report("agentEnvironment"), Yxh) : this._inner.agentEnvironment;
    }
    get workspaceFactory() {
        const e = this._disposedStandIn;
        return e ? (e.report("workspaceFactory"), e.workspaceFactory) : this._inner.workspaceFactory;
    }
    get pullRequestState() {
        return this._disposed ? zxh : this._inner.pullRequestState;
    }
    get pullRequestStates() {
        return this._disposed ? Kxh : this._inner.pullRequestStates;
    }
    getPullRequestEntriesForRepoPath(e) {
        return this._disposedStandIn ? (this._disposedStandIn.report("getPullRequestEntriesForRepoPath"), NTo) : this._inner.getPullRequestEntriesForRepoPath(e);
    }
    unlinkAssociatedBranch(e, t) {}
    linkAssociatedBranch(e, t) {}
    get connected() {
        return this._disposed ? uIh : this._inner.connected;
    }
    get pullRequestActions() {
        return {
            create: (e, t)=>this._withLiveAgent("createPullRequest", ()=>this._callbacks.createPullRequest(this._agentId, t)),
            markAsReady: (e)=>this._withLiveAgent("markAsReady", ()=>this._callbacks.markAsReady(this._agentId, e)),
            merge: (e, t, n)=>this._withLiveAgent("merge", ()=>this._callbacks.merge(this._agentId, e, t, n)),
            enableAutoMerge: (e, t)=>this._withLiveAgent("enableAutoMerge", (n)=>this._applyPullRequestAutoMerge(n, e, !0, (i)=>n.enablePullRequestAutoMerge(i, t))),
            disableAutoMerge: (e)=>this._withLiveAgent("disableAutoMerge", (t)=>this._applyPullRequestAutoMerge(t, e, !1, (n)=>t.disablePullRequestAutoMerge(n)))
        };
    }
    get branchActions() {
        if (this._disposed || !this._branchGate && !this._inner.privateWorkerBranchGate) return;
        const e = ()=>this._disposed ? void 0 : this._branchGate ?? this._inner.privateWorkerBranchGate;
        return {
            get branchMismatchRequest () {
                return e()?.branchMismatchRequest;
            },
            get branchAncestryCache () {
                return e()?.branchAncestryCache;
            },
            directCheckout: (t)=>e()?.directCheckout(t) ?? Promise.resolve({
                    status: "failed"
                }),
            initBranchAncestryTracking: (...t)=>e()?.initBranchAncestryTracking(...t) ?? we.None,
            runBranchMismatchGate: (...t)=>e()?.runBranchMismatchGate(...t) ?? Promise.resolve({
                    success: !1,
                    status: "cancelled"
                })
        };
    }
    get composerDataHandle() {
        const e = this._disposedStandIn;
        return e ? (e.report("composerDataHandle"), e.composerDataHandle) : this._inner.composerDataHandle;
    }
    ensureConversationBodies(e) {
        return this._callbacks.ensureConversationBodies(e);
    }
    get backgroundComposerData() {
        const e = this._disposedStandIn;
        if (e) {
            e.report("backgroundComposerData");
            return;
        }
        return this._inner.backgroundComposerData;
    }
    async submitMessage(e, t) {
        await this._withLiveAgent("submitMessage", ()=>this._callbacks.submitMessage(this._agentId, e, t));
    }
    getQueueItems() {
        return this._callbacks.getQueueItems(this._agentId);
    }
    async removeFromQueue(e) {
        await this._withLiveAgent("removeFromQueue", ()=>this._callbacks.removeFromQueue(this._agentId, e));
    }
    async updateQueueItem(e, t) {
        await this._withLiveAgent("updateQueueItem", ()=>this._callbacks.updateQueueItem(this._agentId, e, t));
    }
    async setQueueItemEditing(e, t) {
        await this._withLiveAgent("setQueueItemEditing", ()=>this._callbacks.setQueueItemEditing({
                agentId: this._agentId,
                queueItemId: e,
                editing: t
            }));
    }
    async submitQueueItemNow(e) {
        await this._withLiveAgent("submitQueueItemNow", ()=>this._callbacks.submitQueueItemNow(this._agentId, e));
    }
    isQueueSteeringAvailable() {
        return this._callbacks.isQueueSteeringAvailable?.(this._agentId) ?? !1;
    }
    async promoteQueueItemToSteer(e) {
        return await this._withLiveAgent("promoteQueueItemToSteer", ()=>this._callbacks.promoteQueueItemToSteer?.(this._agentId, e)) ?? !1;
    }
    reorderQueue(e, t, n) {
        this._withLiveAgentSync("reorderQueue", ()=>this._callbacks.reorderQueue(this._agentId, e, t, n));
    }
    async getLatestPlan() {
        return this._liveInner("getLatestPlan")?.planHandler.getLatestPlan();
    }
    async getPlanForUri(e) {
        return this._liveInner("getPlanForUri")?.planHandler.getPlanForUri(e);
    }
    onDidPlanChange(e) {
        return this._liveInner("onDidPlanChange")?.planHandler.onDidPlanChange(e) ?? we.None;
    }
    async getPlanBuildStatus(e) {
        const t = this._liveInner("getPlanBuildStatus");
        return t ? t.planHandler.getPlanBuildStatus(e) : mF.NONE;
    }
    async getPlanDerivedStatus(e) {
        const t = this._liveInner("getPlanDerivedStatus");
        return t ? t.planHandler.getPlanDerivedStatus(e) : Kde.PENDING;
    }
    onDidPlanContentChange(e, t) {
        return this._liveInner("onDidPlanContentChange")?.planHandler.onDidPlanContentChange(e, t) ?? we.None;
    }
    async getPlanContent(e) {
        return this._liveInner("getPlanContent")?.planHandler.getPlanContent(e);
    }
    async setPlanContent(e, t) {
        return this._withLiveAgent("setPlanContent", (n)=>n.planHandler.setPlanContent(e, t));
    }
    async createPlanContentModelReference(e) {
        return this._liveInner("createPlanContentModelReference")?.planHandler.createPlanContentModelReference(e);
    }
    async savePlanContent(e) {
        return this._withLiveAgent("savePlanContent", (t)=>t.planHandler.savePlanContent(e));
    }
    async executePlan(e) {
        await this._withLiveAgent("executePlan", (t)=>t.planHandler.executePlan(e.planId));
    }
    async restoreToCheckpoint(e) {
        throw new Error("Cloud agent checkpoint restoration not yet supported");
    }
    savePendingQuestionnaireDraft(e, t) {
        this._withLiveAgentSync("savePendingQuestionnaireDraft", (n)=>lVv(n.composerDataHandle, e, t));
    }
    async submitPendingQuestionnaire(e, t) {
        return this._withLiveAgent("submitPendingQuestionnaire", ()=>this._callbacks.submitPendingQuestionnaire(this._agentId, e, t));
    }
    async skipPendingQuestionnaire(e) {
        await this._withLiveAgent("skipPendingQuestionnaire", ()=>this._callbacks.skipPendingQuestionnaire(this._agentId, e));
    }
    async acceptCloudMcpAuth(e) {
        await this._withLiveAgent("acceptCloudMcpAuth", ()=>this._callbacks.acceptCloudMcpAuth(this._agentId, e));
    }
    async skipCloudMcpAuth(e) {
        await this._withLiveAgent("skipCloudMcpAuth", ()=>this._callbacks.skipCloudMcpAuth(this._agentId, e));
    }
    async resume() {
        throw new Error("Cloud agent resume not yet supported");
    }
    hasDiff() {
        if (this._disposed) return !1;
        const e = Ve_({
            diffStats: this._inner.backgroundComposerData?.diffStats,
            composerLines: this._inner.composerDataHandle.data
        });
        return e.files > 0 || e.added > 0 || e.removed > 0;
    }
    abortChat() {
        this._withLiveAgentSync("abortChat", (e)=>e.abortChat());
    }
    startPullRequestStateBurst(e, t) {
        this._withLiveAgentSync("startPullRequestStateBurst", (n)=>n.startPullRequestStateBurst());
    }
    refreshPullRequestStateNow(e, t) {
        this._withLiveAgentSync("refreshPullRequestStateNow", (n)=>n.refreshPullRequestStateNow());
    }
    async triggerReconnect() {
        await this._withLiveAgent("triggerReconnect", (e)=>e.triggerReconnect());
    }
    dispose() {
        this._disposed || (this._disposed = !0, this._disposedStandIn = et_({
            header: st_(this._inner.header, {
                agentId: this._agentId,
                stableId: this._stableId
            }),
            composerId: this._inner.composerDataHandle?.composerId ?? this._stableId,
            agentId: this._agentId,
            stableId: this._stableId
        }), this._inner = tt_(this._stableId), this._branchGate = void 0, this._ref.dispose());
    }
    [Symbol.dispose]() {
        this.dispose();
    }
};

}
