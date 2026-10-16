import { BTi, Cxn, Dis, Fis, Hil, Jdk, Nis, Qdk, Txn, Zdk, _$, ehk, ihk, kb, nhk, rhk, rng, sng, thk, uN, wxn } from "./Aeg.js";
import { Qe, da, m1, st } from "./Iwo.js";
import { _1 } from "./LYd.js";
import { Y9 } from "./SZu.js";
import { Ry } from "./agentRepositoryService.js";
import { F4e, gle } from "./agentWorkspaceResolutionConstants.js";
import { Dc } from "./aiService.js";
import { II, qn } from "./async.js";
import { Rs } from "./authenticationService.js";
import { rzr } from "./blob-store.ts";
import { YEn } from "./cacheStorageService.js";
import { h7 } from "./cloud-agent.ts";
import { Bnl } from "./cloudAgentEnvironment.js";
import { lxn } from "./cloudCatalogService.js";
import { Kqe } from "./cloudMcpOAuthLoopbackService.js";
import { tV } from "./cloudTargetIdentity.js";
import { uv } from "./composerData.js";
import { I6, XI, Y4 } from "./composerPlanService.js";
import { DJ } from "./cursorCommands.js";
import { S2 } from "./cursorIgnoreService.js";
import { jIn } from "./customModeUtils.js";
import { wS } from "./displayHelpers.js";
import { Oh, ZS } from "./draftIds.js";
import { _s } from "./experimentService.js";
import { kxn } from "./experimentalModelConfig.js";
import { ms } from "./files.js";
import { Fts, Vrk, nV } from "./gYa.js";
import { nl } from "./index.ts";
import { OT } from "./index_5.ts";
import { RSi, Sbe, TSi, Uy } from "./ipa.js";
import { Fil, Ktg } from "./lazyLocalAgentEnvironment.js";
import { ub } from "./localAgentRepository.js";
import { ACe } from "./mcpWellKnownDetection.js";
import { cp } from "./objects.js";
import { ih } from "./pathService.js";
import { VPe, mle } from "./planStorageService.js";
import { hu } from "./productService.js";
import { hAe, hhn } from "./project-subagents.ts";
import { wqr } from "./promptInputRichText.js";
import { Kf, ca } from "./reactive.js";
import { Em, Rh } from "./resolverService.js";
import { LM } from "./selectedContextData.js";
import { Zi } from "./storage_2.js";
import { Qpe } from "./trackedGitRepoHeader.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { oT } from "./utils_16.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr } from "./workspace.js";
import { Cu, Lc } from "./workspaceCollectionService.js";
import { Lh } from "./workspaceMetadataService.js";
import { OJ } from "./workspaceRefHelpers.js";
import { HM } from "./workspaces.js";
import { yCe } from "./yBp.js";
import { Cn, Rp, gA, pi } from "./ze.js";
var ong, Exn, ang;
export { Exn, ang, ong };
var __wakaru_Bis_initialized = false;
export function Bis() {
if (__wakaru_Bis_initialized) return;
__wakaru_Bis_initialized = true;
"use strict";
E(), qn(), cp(), Qe(), pi(), OT(), fn(), Sr(), ub(), Xo(), LM(), oT(), uv(), jIn(), Lh(), I6(), Em(), VPe(), wqr(), hu(), Zi(), YEn(), lxn(), Dc(), _s(), kxn(), Bnl(), Ry(), wS(), Kf(), tV(), Ktg(), Qpe(), OJ(), Cu(), HM(), Rs(), S2(), DJ(), ACe(), Kqe(), ih(), ms(), nl(), F4e(), ZS(), ZS(), ong = new ca(!0), Exn = class {
    constructor(t, e, n, i){
        this._header = t, this._composerDataHandle = e, this._workspaceFactory = n, this._cloudAgentEnvironmentFactory = i, this._disposed = !1, this.pullRequestState = new ca({
            type: "resolved",
            value: void 0
        }), this.pullRequestStates = new ca([]), this.connected = ong, this.branchActions = void 0, this._agentEnvironment = new Fil(this._workspaceFactory, {
            agentKind: "draft"
        });
    }
    get isDisposed() {
        return this._disposed;
    }
    get header() {
        return this._header;
    }
    get stableId() {
        return this._header.id;
    }
    get workspaceIdentifier() {
        return this._header.environment.value;
    }
    get agentEnvironment() {
        if (kb(this._header.environment.value)) {
            const t = this._header.trackedGitRepos.value.map((n)=>n.repoUrl.value).filter((n)=>!!n), e = t.join(`
`);
            return (this._cloudAgentEnvironment === void 0 || this._cloudAgentEnvironmentCacheKey !== e) && (this._cloudAgentEnvironment?.dispose(), this._cloudAgentEnvironment = this._cloudAgentEnvironmentFactory(t), this._cloudAgentEnvironmentCacheKey = e), this._cloudAgentEnvironment;
        }
        return this._cloudAgentEnvironment?.dispose(), this._cloudAgentEnvironment = void 0, this._cloudAgentEnvironmentCacheKey = void 0, this._agentEnvironment;
    }
    get workspaceFactory() {
        return this._workspaceFactory;
    }
    getPullRequestEntriesForRepoPath(t) {
        return [];
    }
    unlinkAssociatedBranch(t, e) {}
    linkAssociatedBranch(t, e) {}
    get composerDataHandle() {
        if (!this._composerDataHandle) throw new Error(`Cannot access composerDataHandle for DraftAgentReference without a handle: ${this._header.id}`);
        return this._composerDataHandle;
    }
    async ensureConversationBodies(t) {}
    async submitMessage(t, e) {
        throw new Error("Draft agents do not support submitMessage; promote with createAgent instead.");
    }
    getQueueItems() {
        return [];
    }
    async removeFromQueue(t) {
        throw new Error("Draft agents do not support queue operations.");
    }
    async updateQueueItem(t, e) {
        throw new Error("Draft agents do not support queue operations.");
    }
    async setQueueItemEditing(t, e) {
        throw new Error("Draft agents do not support queue operations.");
    }
    async submitQueueItemNow(t) {
        throw new Error("Draft agents do not support queue operations.");
    }
    isQueueSteeringAvailable() {
        return !1;
    }
    async promoteQueueItemToSteer(t) {
        return !1;
    }
    reorderQueue(t, e, n) {}
    getLatestPlan() {
        return Promise.resolve(void 0);
    }
    getPlanForUri(t) {
        return Promise.resolve(void 0);
    }
    onDidPlanChange(t) {
        return {
            dispose () {}
        };
    }
    getPlanBuildStatus(t) {
        return Promise.resolve(XI.NONE);
    }
    getPlanDerivedStatus(t) {
        return Promise.resolve(mle.PENDING);
    }
    onDidPlanContentChange(t, e) {
        return {
            dispose () {}
        };
    }
    async getPlanContent(t) {
        const e = await this.createPlanContentModelReference(t);
        if (e) try {
            return e.modelRef.object.textEditorModel.getValue();
        } finally{
            e.modelRef.dispose();
        }
    }
    setPlanContent(t, e) {
        return Promise.resolve();
    }
    async createPlanContentModelReference(t) {
        const e = await _$(this._workspaceFactory, Lc.Files, gle), i = await nV(e, Y4).getRegistryEntryById(t);
        if (!i?.uri) return;
        const r = nV(e, Rh);
        return {
            uri: i.uri,
            modelRef: await r.createModelReference(i.uri)
        };
    }
    savePlanContent(t) {
        return Promise.resolve();
    }
    executePlan(t) {
        return Promise.resolve();
    }
    async restoreToCheckpoint(t) {
        throw new Error("Draft agents do not support checkpoint restoration.");
    }
    savePendingQuestionnaireDraft(t, e) {}
    async submitPendingQuestionnaire(t, e) {
        return !1;
    }
    async skipPendingQuestionnaire(t) {}
    async resume() {
        throw new Error("Draft agents do not support resume.");
    }
    hasDiff() {
        return !1;
    }
    abortChat() {
        throw new Error("Draft agents do not support abortChat.");
    }
    async triggerReconnect() {}
    startPullRequestStateBurst(t, e) {}
    refreshPullRequestStateNow(t, e) {}
    dispose() {
        this._disposed || (this._cloudAgentEnvironment?.dispose(), this._cloudAgentEnvironment = void 0, this._cloudAgentEnvironmentCacheKey = void 0, this._agentEnvironment.dispose(), this._disposed = !0);
    }
    [Symbol.dispose]() {
        this.dispose();
    }
}, ang = class uPb extends st {
    constructor(e, n, i, r, s, o, a, l){
        super(), this.composerService = e, this.composerDataService = n, this.storageService = i, this.workspaceMetadataService = r, this.workspaceCollectionService = s, this.modelConfigService = o, this.rootWorkspace = a, this.getCloudAgentHeaders = l, this._agents = new ca([]), this._draftHeaderSyncDisposables = this._register(new da), this._draftWorkspaces = new Map, this._draftWorkspaceInFlight = new Map, this._archivedDraftWorkspaceIds = new Set, this._customModeClearGenerationByDraftId = new Map, this._modelConfigReseedGenerationByDraftId = new Map, this._cloudDraftAgentEnvironmentFactory = rhk(this.rootWorkspace, this.workspaceMetadataService, this.workspaceCollectionService, this.getCloudAgentHeaders);
        const c = this._agents;
        this.agents = {
            get value () {
                return c.value.filter((u)=>!uN(u.id));
            },
            onChange: (u)=>c.onChange(()=>u(c.value.filter((d)=>!uN(d.id))))
        }, this._register(this.workspaceMetadataService.onDidChangeMetadata((u)=>{
            if (u.kind !== "updated") return;
            const d = u.metadata;
            for (const h of this._agents.value){
                if (h.trackedGitRepos.value.some((y)=>(y.repoUrl.value?.trim().length ?? 0) > 0) || h.environment.value.id !== d.workspaceId) continue;
                const g = this.composerDataService.getComposerDataIfLoaded(h.id);
                if (!g) continue;
                const f = wxn(g.trackedGitRepos, d), { rows: _, didReplaceList: b } = Cxn(h.trackedGitRepos.value, f);
                b && h.trackedGitRepos.set(_);
            }
        }));
    }
    async moveDraftsToWorkspace(e, n) {
        await this.composerDataService.retargetStoredDrafts(e, n);
        for (const i of [
            ...this._agents.value
        ]){
            const r = i.targetEnvironment;
            r.type === "existing" && r.environment.id === e && this.updateDraftHeader(i.id, {
                ...r,
                environment: n
            });
        }
    }
    static async create(e, n, i, r, s, o, a, l, c) {
        const u = new uPb(e, n, i, r, s, o, l, c);
        performance.mark("code/glass/willRestoreDrafts");
        const d = u.restoreDrafts().then(()=>{
            performance.mark("code/glass/didRestoreDrafts");
        }), h = u.ensureEmptyStateDraftAsync(a).then((g)=>(performance.mark("code/glass/didEnsureEmptyStateDraft"), g)), [, p] = await Promise.all([
            d,
            h
        ]);
        return u._emptyStateDraftRef = p, u;
    }
    async createDraftAgent(e, n, i) {
        let r = i?.draftId, s = r === void 0 ? void 0 : await this.ensureDraftHandle(r);
        if (!s) {
            const k = await this.composerService.createComposer({
                skipShowAndFocus: !0,
                skipFocus: !0,
                skipSelect: !0,
                partialState: {
                    ...r ? {
                        composerId: r
                    } : void 0,
                    ...i?.modelConfig ? {
                        modelConfig: i.modelConfig
                    } : void 0
                }
            });
            s = k?.weakHandle, r = k?.composerId;
        }
        if (!s || !r) throw new Error(`Failed to create or load draft composer: ${r ?? "unknown"}`);
        const o = await this.ensureHandleAndData(r, s);
        if (!o) throw new Error(`Failed to access loaded draft composer data: ${r}`);
        const a = o.handle, l = o.data;
        i?.unifiedMode && a.setData("unifiedMode", i.unifiedMode);
        const c = Math.max(l.context?.selectedImages?.length ?? 0, i?.context?.selectedImages?.length ?? 0, i?.promotedSelectedImagesCount ?? 0), u = Math.max(l.context?.selectedVideos?.length ?? 0, i?.context?.selectedVideos?.length ?? 0, i?.promotedSelectedVideosCount ?? 0), d = i?.richText, h = Txn({
            text: e,
            richText: d,
            imageCount: c,
            videoCount: u
        }), p = this.environmentToDraftTarget(n), g = i?.hasBeenInSidebar === !0 || l.hasBeenInSidebar === !0, f = i?.projectIdentity, _ = i?.cloudProjectWorkerDraft ?? l.cloudProjectWorkerDraft, b = Date.now();
        this.composerDataService.updateComposerData(a, {
            text: e,
            richText: d,
            subtitle: h,
            isDraft: !0,
            draftTarget: p,
            hasBeenInSidebar: g,
            name: _ !== void 0 ? hhn : f?.name,
            isProject: f !== void 0,
            projectAppearance: f?.appearance,
            cloudProjectWorkerDraft: _,
            hasUnreadMessages: !1,
            lastUpdatedAt: b,
            ...i?.agentApprovalModeOverride !== void 0 ? {
                agentApprovalModeOverride: i.agentApprovalModeOverride
            } : {},
            ...i?.context !== void 0 ? {
                context: _1(i.context)
            } : {}
        }), this.composerDataService.setAllComposersData("allComposers", (k)=>k.composerId === r, {
            subtitle: h,
            isDraft: !0,
            draftTarget: p,
            hasBeenInSidebar: g,
            name: _ !== void 0 ? hhn : f?.name,
            isProject: f !== void 0,
            projectAppearance: f?.appearance,
            cloudProjectWorkerDraft: _,
            hasUnreadMessages: !1,
            lastUpdatedAt: b
        });
        const y = this.upsertHeader(r, p, {
            subtitle: h,
            createdAt: l.createdAt,
            lastUpdatedAt: b,
            hasUnreadMessages: !1,
            hasBeenInSidebar: g,
            cloudProjectWorkerDraft: _
        }), S = new Exn(y, a, this._createDraftWorkspaceFactory(r, y), this._cloudDraftAgentEnvironmentFactory);
        return i?.onCreated?.(S), S;
    }
    async loadAgent(e, n) {
        let i = this._agents.value.find((l)=>l.id === e);
        const r = this.composerDataService.allComposersData.allComposers.find((l)=>l.composerId === e);
        if (r?.isArchived) throw new Error(`Draft agent not found: ${e}`);
        const s = await this.ensureHandleAndData(e, await this.ensureDraftHandle(e));
        if (!s) throw new Error(`Draft composer handle not found: ${e}`);
        const o = s.handle, a = s.data;
        if (!i) {
            const l = r?.draftTarget ?? a.draftTarget;
            if (a.isDraft === !1 || !l) throw new Error(`Draft agent not found: ${e}`);
            const c = this.healPersistedDraftTarget(l), u = Txn({
                text: a.text,
                richText: a.richText,
                imageCount: a.context?.selectedImages?.length ?? 0,
                videoCount: a.context?.selectedVideos?.length ?? 0
            });
            i = this.upsertHeader(e, c, {
                subtitle: u,
                createdAt: a.createdAt,
                lastUpdatedAt: a.lastUpdatedAt ?? a.createdAt,
                hasUnreadMessages: a.hasUnreadMessages ?? !1,
                hasBeenInSidebar: a.hasBeenInSidebar === !0 || r?.hasBeenInSidebar === !0,
                cloudProjectWorkerDraft: a.cloudProjectWorkerDraft ?? r?.cloudProjectWorkerDraft
            });
        }
        return this.tryRegisterDraftHeaderComposerSync(e), new Exn(i, o, this._createDraftWorkspaceFactory(e, i), this._cloudDraftAgentEnvironmentFactory);
    }
    async archiveAgent(e, n) {
        this._archivedDraftWorkspaceIds.add(e), this.disposeDraftHeaderSync(e), this._disposeDraftWorkspace(e), this._agents.set(this._agents.value.filter((i)=>i.id !== e)), this.composerDataService.setAllComposersData("allComposers", (i)=>i.composerId === e, {
            isArchived: !0,
            lastUpdatedAt: Date.now()
        }), await this.composerDataService.saveComposers(), await this.storageService.flush();
    }
    async unarchiveAgent(e) {}
    async unarchiveAgents(e) {
        return [];
    }
    async hardDeleteAgents(e) {
        if (e.length === 0) return {
            deletedCount: 0
        };
        for (const r of e)this._archivedDraftWorkspaceIds.add(r);
        const n = new Set(e);
        this.composerDataService.setAllComposersData("allComposers", (r)=>n.has(r.composerId), {
            isArchived: !0,
            lastUpdatedAt: Date.now()
        }), await this.composerDataService.saveComposers();
        let i = 0;
        for (const r of e)try {
            this.disposeDraftHeaderSync(r), this._disposeDraftWorkspace(r), this._agents.set(this._agents.value.filter((s)=>s.id !== r)), await this.composerDataService.deleteComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(r, !0), i++;
        } catch  {}
        return i > 0 && (await this.composerDataService.saveComposers(), await this.storageService.flush()), {
            deletedCount: i
        };
    }
    getEmptyStateDraft() {
        return this._emptyStateDraftRef;
    }
    async getOrCreateTileDraft(e, n) {
        try {
            return await this.loadAgent(e);
        } catch  {
            const i = n?.targetEnvironment ?? this._emptyStateDraftRef.header.targetEnvironment;
            return this.createDraftAgent("", i, {
                draftId: e,
                unifiedMode: "agent"
            });
        }
    }
    async createSidebarDraft(e, n) {
        return n?.retainEmptyStateWorkspace !== !0 && this._releaseDraftWorkspace(Oh), this.createDraftAgent(n?.text ?? "", e, {
            hasBeenInSidebar: !0,
            unifiedMode: n?.unifiedMode ?? "agent",
            richText: n?.richText,
            context: n?.context,
            modelConfig: n?.modelConfig ? Sbe(n.modelConfig) : this.modelConfigService.getModelConfig(Fts(e.type))
        });
    }
    async discardDraftIfEmpty(e) {
        if (uN(e)) return;
        const n = this._agents.value.find((r)=>r.id === e);
        if (!n || n.source !== "draft" || n.isArchived.value) return;
        const i = this.composerDataService.getHandleIfLoaded(e);
        if (i) {
            if (rng(this.composerDataService.getComposerData(i))) return;
        } else if ((n.subtitle.value?.trim().length ?? 0) > 0) return;
        await this.archiveAgent(e);
    }
    async createCloudProjectWorkerDraft(e, n) {
        const i = {
            managerAgentId: e,
            creationId: Ai()
        }, r = await ehk(i);
        return this.createDraftAgent("", n, {
            draftId: r,
            unifiedMode: "agent",
            cloudProjectWorkerDraft: i,
            modelConfig: this.modelConfigService.getModelConfig("background-composer")
        });
    }
    async beginCloudProjectWorkerDraftPromotion(e) {
        const n = await this.ensureHandleAndData(e, await this.ensureDraftHandle(e));
        if (!n) throw new Error(`Cloud Project worker draft not found: ${e}`);
        const i = n.data.cloudProjectWorkerDraft;
        if (!i) throw new Error(`Composer is not a cloud Project worker draft: ${e}`);
        const r = this._agents.value.find((c)=>c.id === e), s = n.data.draftTarget, o = r?.targetEnvironment ?? (s !== void 0 ? this.draftTargetToEnvironment(this.healPersistedDraftTarget(s)) : void 0);
        if (!o) throw new Error(`Cloud Project worker draft has no target environment: ${e}`);
        let a = !1;
        const l = ()=>{
            a || (a = !0, this.disposeDraftHeaderSync(e), this._disposeDraftWorkspace(e), this._agents.set(this._agents.value.filter((c)=>c.id !== e)));
        };
        return {
            environment: o,
            metadata: i,
            hideDraft: l,
            commit: async ()=>{
                l();
                const c = {
                    isDraft: !1,
                    draftTarget: void 0,
                    cloudProjectWorkerDraft: void 0,
                    createdFromBackgroundAgent: {
                        bcId: e,
                        shouldStreamMessages: !0
                    }
                }, u = this.composerDataService.getHandleIfLoaded(e);
                u && this.composerDataService.updateComposerData(u, c), this.composerDataService.setAllComposersData("allComposers", (d)=>d.composerId === e, c), await this.composerDataService.saveComposers();
            },
            rollback: async (c, u)=>{
                a = !1, await this.createDraftAgent(c, o, {
                    draftId: e,
                    richText: u.richText,
                    context: u.context,
                    unifiedMode: u.unifiedMode,
                    cloudProjectWorkerDraft: i
                });
            }
        };
    }
    async discardSubagentIfEmpty(e) {
        const n = this._agents.value.find((a)=>a.id === e);
        if (!n || n.isArchived.value) return !1;
        const i = this.composerDataService.getHandleIfLoaded(e), r = i ? this.composerDataService.getComposerData(i) : void 0, s = this.composerDataService.allComposersData.allComposers.find((a)=>a.composerId === e);
        if (!((r?.cloudProjectWorkerDraft ?? s?.cloudProjectWorkerDraft) !== void 0 || n.subagentTypeName === hAe)) return !1;
        if (r !== void 0) {
            if (Txn({
                text: r.text,
                richText: r.richText,
                imageCount: r.context?.selectedImages?.length ?? 0,
                videoCount: r.context?.selectedVideos?.length ?? 0
            }) !== void 0) return !1;
        } else if ((n.subtitle.value?.trim().length ?? 0) > 0) return !1;
        return await this.archiveAgent(e), !0;
    }
    resetEmptyStateDraft(e) {
        const n = this.composerDataService.getHandleIfLoaded(Oh);
        if (!n) return;
        this._releaseDraftWorkspace(Oh);
        const i = e ? Fts(e.environment.type) : void 0;
        e && i && this.modelConfigService.setModelConfig(i, BTi(e.modelConfig));
        const r = this._agents.value.find((d)=>d.id === Oh), o = n.data.unifiedMode === "background" || n.data.pendingBackgroundAgent === !0 || r?.targetEnvironment.type === "new" ? "background-composer" : "composer", a = BTi(Sbe(this.modelConfigService.getModelConfig(o))), l = a.selectedModels;
        l && i !== o && (a.selectedModels = l.map((d)=>{
            const h = this.modelConfigService.getModelParameterPreferences(d.modelId);
            if (!h || h.parameters.length === 0) return d;
            const p = this.modelConfigService.resolveModelParametersForSubmission(d.modelId, h.parameters, a.maxMode);
            return {
                ...d,
                parameters: p.length > 0 ? p : h.parameters
            };
        })), this.composerDataService.updateComposerData(n, {
            text: "",
            richText: void 0,
            subtitle: void 0,
            name: void 0,
            isProject: !1,
            projectAppearance: void 0,
            context: Uy(),
            draftBranchOverrides: void 0,
            agentApprovalModeOverride: void 0,
            submitErrorDetails: void 0,
            pendingModelNudge: void 0,
            activeCustomMode: Vrk(n.data.activeCustomMode),
            committedCustomMode: null,
            pendingExitedCustomMode: null,
            modelConfig: a,
            lastUpdatedAt: void 0
        }), this.composerDataService.setAllComposersData("allComposers", (d)=>d.composerId === Oh, {
            subtitle: void 0,
            name: void 0,
            isProject: !1,
            projectAppearance: void 0,
            lastUpdatedAt: void 0
        });
        const c = r;
        if (c && (c.name.set(Fis(void 0)), c.subtitle.set(void 0)), !c) return;
        const u = this._emptyStateDraftRef;
        u instanceof Exn && !u.isDisposed && u.header === c || (u?.dispose(), this._emptyStateDraftRef = new Exn(c, n, this._createDraftWorkspaceFactory(Oh, c), this._cloudDraftAgentEnvironmentFactory));
    }
    async createDraftFromEmptyState(e) {
        const n = this.composerDataService.getHandleIfLoaded(Oh);
        if (!n) return !1;
        const i = this.composerDataService.getComposerData(n);
        if (!i) return this.disposeDraftHeaderSync(Oh), !1;
        if (i.submitErrorDetails) return !1;
        const r = i.text?.trim() ?? "", s = [
            ...i.context?.selectedImages ?? []
        ], o = [
            ...i.context?.selectedVideos ?? []
        ];
        if (r.length === 0 && s.length === 0 && o.length === 0) return !1;
        const l = this.composerDataService.allComposersData.allComposers.find((g)=>g.composerId === Oh)?.draftTarget ?? i.draftTarget;
        if (!l) return !1;
        const c = this.healPersistedDraftTarget(l), u = this.draftTargetToEnvironment(c), d = i.richText, h = i.isProject === !0 ? {
            name: i.name,
            appearance: i.projectAppearance
        } : void 0;
        (s.length > 0 || o.length > 0) && this.composerDataService.updateComposerData(n, {
            context: {
                ...i.context,
                selectedImages: [],
                selectedVideos: []
            }
        });
        const p = this.createDraftAgent(r, u, {
            richText: d,
            unifiedMode: i.unifiedMode,
            promotedSelectedImagesCount: s.length,
            promotedSelectedVideosCount: o.length,
            hasBeenInSidebar: !0,
            agentApprovalModeOverride: i.agentApprovalModeOverride,
            projectIdentity: h,
            onCreated: e?.onCreated
        }).then((g)=>((s.length > 0 || o.length > 0) && this.composerDataService.updateComposerData(g.composerDataHandle, {
                context: {
                    ...g.composerDataHandle.data.context,
                    ...s.length > 0 ? {
                        selectedImages: s
                    } : {},
                    ...o.length > 0 ? {
                        selectedVideos: o
                    } : {}
                }
            }), g.dispose(), !0)).catch(()=>!1);
        return this.resetEmptyStateDraft(), p;
    }
    updateDraftHeader(e, n, i) {
        const r = this._agents.value.find((h)=>h.id === e);
        if (!r) return;
        const s = r.targetEnvironment.type, o = this.environmentToDraftTarget(r.targetEnvironment), a = this.environmentToDraftTarget(n);
        i?.persistTarget !== !1 && this.persistDraftTarget(e, a);
        const { targetEnvironment: c, environment: u, trackedGitRepos: d } = this.getHeaderEnvironment(a, e);
        r.targetEnvironment = c, (!thk(o, a) || r.environment.value.id !== u.id || !nhk(r.trackedGitRepos.value, d)) && (r.environment.set(u), r.trackedGitRepos.set(d)), s !== n.type && (this.clearDraftCustomModeOnEnvironmentKindChange(e), i?.reseedModelConfigOnSurfaceChange && this.reseedDraftModelConfigForSurface(e, n.type)), this._updateDraftWorkspace(e, n);
    }
    async restoreFailedSubmission(e, n) {
        const i = this.composerDataService.getHandleIfLoaded(Oh), r = i ? this.composerDataService.getComposerData(i) : void 0;
        if (i && !rng(r) && !TSi(r?.context)) {
            sng(i, n), i.setData("unifiedMode", e.unifiedMode ?? "agent"), this.retargetEmptyStateDraft(e.environment, e.modelConfig);
            return;
        }
        const s = await this.createSidebarDraft(e.environment, {
            text: n.text,
            richText: n.richText,
            context: n.context,
            unifiedMode: e.unifiedMode,
            modelConfig: e.modelConfig,
            retainEmptyStateWorkspace: !0
        });
        try {
            s.composerDataHandle.setData("submitErrorDetails", n.errorDetails);
        } finally{
            s.dispose();
        }
    }
    retargetEmptyStateDraft(e, n) {
        this.updateDraftHeader(Oh, e), this.reseedDraftModelConfigForSurface(Oh, e.type, n);
    }
    reseedDraftModelConfigForSurface(e, n, i) {
        const r = (this._modelConfigReseedGenerationByDraftId.get(e) ?? 0) + 1;
        this._modelConfigReseedGenerationByDraftId.set(e, r);
        const s = Fts(n), o = (l)=>{
            this.modelConfigService.setModelConfigForComposer(l, RSi(i ?? this.modelConfigService.getModelConfig(s)), s);
        }, a = this.composerDataService.getHandleIfLoaded(e);
        if (a) {
            o(a);
            return;
        }
        this.composerDataService.getComposerHandleById(e).then((l)=>{
            this._modelConfigReseedGenerationByDraftId.get(e) === r && l && o(l);
        });
    }
    clearDraftCustomModeOnEnvironmentKindChange(e) {
        const n = (this._customModeClearGenerationByDraftId.get(e) ?? 0) + 1;
        this._customModeClearGenerationByDraftId.set(e, n);
        const i = (s)=>{
            const o = this.composerDataService.getComposerData(s);
            o && (o.activeCustomMode == null && o.pendingExitedCustomMode == null && o.committedCustomMode == null || this.composerDataService.updateComposerData(s, {
                activeCustomMode: null,
                pendingExitedCustomMode: null,
                committedCustomMode: null
            }));
        }, r = this.composerDataService.getHandleIfLoaded(e);
        if (r) {
            i(r);
            return;
        }
        this.composerDataService.getComposerHandleById(e).then((s)=>{
            this._customModeClearGenerationByDraftId.get(e) === n && s && i(s);
        });
    }
    async persistDraftTarget(e, n) {
        const i = await this.composerDataService.getComposerHandleById(e);
        i && this.composerDataService.updateComposerData(i, {
            draftTarget: n
        }), this.composerDataService.setAllComposersData("allComposers", (r)=>r.composerId === e, {
            draftTarget: n
        });
    }
    markDraftSeenInSidebar(e) {
        if (uN(e)) return;
        const n = this._agents.value.find((i)=>i.id === e);
        !n || n.source !== "draft" || n.hasBeenInSidebar.value || (n.hasBeenInSidebar.set(!0), this.persistDraftHasBeenInSidebar(e));
    }
    async persistDraftHasBeenInSidebar(e) {
        const n = await this.composerDataService.getComposerHandleById(e);
        n && this.composerDataService.updateComposerData(n, {
            hasBeenInSidebar: !0
        }), this.composerDataService.setAllComposersData("allComposers", (i)=>i.composerId === e, {
            hasBeenInSidebar: !0
        });
    }
    async ensureEmptyStateDraftAsync(e) {
        try {
            performance.mark("code/glass/willLoadEmptyStateDraft");
            const s = await this.loadAgent(Oh);
            if (performance.mark("code/glass/didLoadEmptyStateDraft"), !this.composerDataService.getComposerData(s.composerDataHandle)) throw s.dispose(), new Error("Empty-state draft data unavailable");
            return s;
        } catch  {
            performance.mark("code/glass/willRecreateEmptyStateDraft");
        }
        const n = this.composerDataService.allComposersData.allComposers.find((s)=>s.composerId === Oh && !s.isArchived)?.draftTarget, i = n ? this.draftTargetToEnvironment(this.healPersistedDraftTarget(n)) : e;
        this.disposeDraftHeaderSync(Oh), this._disposeDraftWorkspace(Oh);
        try {
            await this.composerDataService.deleteComposer_DO_NOT_CALL_UNLESS_YOU_KNOW_WHAT_YOURE_DOING(Oh);
        } catch  {}
        const r = await this.createDraftAgent("", i, {
            draftId: Oh
        });
        try {
            await this.composerDataService.persistComposerArchivedState(Oh, !1);
        } catch  {}
        return r;
    }
    async markAgentRead(e) {
        await this.setUnreadState(e, !1);
    }
    async markAgentUnread(e) {
        await this.setUnreadState(e, !0);
    }
    advanceAgentReadCursor(e, n) {}
    dispose() {
        this._draftHeaderSyncDisposables.clearAndDisposeAll(), this._emptyStateDraftRef?.dispose();
        const e = [];
        for (const n of this._draftWorkspaces.values()){
            const i = n.value;
            i && (n.set(void 0), e.push(i));
        }
        this._draftWorkspaces.clear(), this._draftWorkspaceInFlight.clear(), m1(...e), super.dispose();
    }
    getAgentHeader(e) {
        return this._agents.value.find((n)=>n.id === e);
    }
    getAgent(e) {
        const n = this.composerDataService.getHandleIfLoaded(e);
        if (!n || !this.isHandleLoaded(n)) return;
        const i = this._agents.value.find((r)=>r.id === e);
        if (i) return new Exn(i, n, this._createDraftWorkspaceFactory(e, i), this._cloudDraftAgentEnvironmentFactory);
    }
    isAgentLoaded(e) {
        const n = this.composerDataService.getHandleIfLoaded(e);
        return !n || !this.isHandleLoaded(n) ? !1 : this._agents.value.some((i)=>i.id === e);
    }
    getMaterializedWorkspaceId(e) {
        if (this.isAgentLoaded(e)) return this._draftWorkspaces.get(e)?.value?.object.workspaceIdentifier.id;
    }
    createAgentPrewarmHandle(e) {
        return {
            agentId: e,
            dispose () {}
        };
    }
    createEnvironmentPrewarmHandle(e) {
        return {
            dispose () {}
        };
    }
    async loadAgentEnvironment(e) {
        throw new Error("loadAgentEnvironment is not supported for draft agents");
    }
    async setUnreadState(e, n) {
        const i = this._agents.value.find((s)=>s.id === e);
        if (!i) return;
        i.hasUnreadMessages.set(n);
        const r = await this.ensureDraftHandle(e);
        r && this.composerDataService.updateComposerData(r, {
            hasUnreadMessages: n
        }), this.composerDataService.setAllComposersData("allComposers", (s)=>s.composerId === e, {
            hasUnreadMessages: n
        });
    }
    async ensureDraftHandle(e) {
        let n = await this.composerDataService.getComposerHandleById(e);
        if (n && this.isHandleLoaded(n) || (await this.composerDataService.whenInitialComposerDataLoaded(), n = await this.composerDataService.getComposerHandleById(e), n && this.isHandleLoaded(n))) return n;
    }
    _getDraftWorkspaceReactive(e) {
        if (this._archivedDraftWorkspaceIds.has(e)) throw new Error(`Draft workspace archived: ${e}`);
        if (this._store.isDisposed) throw new Error(`Draft repository disposed: ${e}`);
        let n = this._draftWorkspaces.get(e);
        return n || (n = new ca(void 0), this._draftWorkspaces.set(e, n)), n;
    }
    _createDraftWorkspaceFactory(e, n) {
        const i = this._getDraftWorkspaceReactive(e), r = (s)=>{
            const o = Promise.reject(new Error(s));
            return o.catch(()=>{}), o;
        };
        return {
            load: ()=>this._archivedDraftWorkspaceIds.has(e) ? r(`Draft workspace archived: ${e}`) : this._store.isDisposed ? r(`Draft repository disposed: ${e}`) : (i.value === void 0 && this._updateDraftWorkspace(e, n.targetEnvironment), Zdk(i, gle)),
            workspace: Nis(i)
        };
    }
    _updateDraftWorkspace(e, n) {
        if (this._archivedDraftWorkspaceIds.has(e) || this._store.isDisposed) return;
        const i = this._getDraftWorkspaceReactive(e), r = n.type === "existing" ? n.environment : n.environment.privateWorkspaceIdentifier;
        if (r !== void 0) {
            const s = i.value;
            if (s?.object.workspaceIdentifier.id === r.id || this._draftWorkspaceInFlight.get(e) === r.id) return;
            i.set(void 0), s?.dispose();
            const o = r.id;
            this._draftWorkspaceInFlight.set(e, o), (async ()=>{
                let a;
                try {
                    a = await this.workspaceCollectionService.createWorkspaceReference(r, Lc.Unknown);
                    const l = this._agents.value.find((d)=>d.id === e)?.targetEnvironment;
                    if (!(l?.type === "existing" ? l.environment.id === o : l?.environment.privateWorkspaceIdentifier?.id === o)) {
                        a.dispose();
                        return;
                    }
                    if (this._store.isDisposed || this._archivedDraftWorkspaceIds.has(e) || !this._draftWorkspaces.has(e) || this._draftWorkspaceInFlight.get(e) !== o) {
                        a.dispose();
                        return;
                    }
                    const u = i.value;
                    i.set(a), a = void 0, u?.dispose();
                } catch  {
                    a?.dispose(), i.set(void 0);
                } finally{
                    this._draftWorkspaceInFlight.get(e) === o && this._draftWorkspaceInFlight.delete(e);
                }
            })();
        } else {
            this._draftWorkspaceInFlight.delete(e);
            const s = i.value;
            i.set(void 0), s?.dispose();
        }
    }
    _releaseDraftWorkspace(e) {
        const n = this._draftWorkspaces.get(e);
        if (this._draftWorkspaceInFlight.delete(e), n) {
            const i = n.value;
            n.set(void 0), i?.dispose();
        }
    }
    _disposeDraftWorkspace(e) {
        this._releaseDraftWorkspace(e), this._draftWorkspaces.delete(e);
    }
    isHandleLoaded(e) {
        return this.composerDataService.getComposerData(e) !== void 0;
    }
    async ensureHandleAndData(e, n) {
        if (n) {
            const s = this.composerDataService.getComposerData(n);
            if (s) return {
                handle: n,
                data: s
            };
            this.disposeDraftHeaderSync(e);
        }
        const i = await this.ensureDraftHandle(e);
        if (!i) return;
        const r = this.composerDataService.getComposerData(i);
        if (!r) {
            this.disposeDraftHeaderSync(e);
            return;
        }
        return {
            handle: i,
            data: r
        };
    }
    disposeDraftHeaderSync(e) {
        this._draftHeaderSyncDisposables.deleteAndDispose(e);
    }
    tryRegisterDraftHeaderComposerSync(e) {
        if (this._draftHeaderSyncDisposables.has(e)) return;
        const n = this._agents.value.find((s)=>s.id === e);
        if (!n) return;
        const i = new II(100);
        let r;
        if (gA((s)=>{
            r = s, Cn(()=>{
                const o = this.composerDataService.getComposerDataIfLoadedReactive(e);
                o && (o.text, o.richText, o.context?.selectedImages?.length, o.context?.selectedVideos?.length, o.lastUpdatedAt, o.hasBeenInSidebar, i.trigger(()=>{
                    const a = this.composerDataService.getComposerDataIfLoadedReactive(e);
                    if (!a) return;
                    const l = a.context?.selectedImages?.length ?? 0, c = a.context?.selectedVideos?.length ?? 0, u = Txn({
                        text: a.text,
                        richText: a.richText,
                        imageCount: l,
                        videoCount: c
                    });
                    n.subtitle.set(u), a.cloudProjectWorkerDraft !== void 0 ? (n.name.set(hhn), n.subagentParentId = a.cloudProjectWorkerDraft.managerAgentId, n.subagentTypeName = hAe) : n.name.set(Fis(u)), n.hasBeenInSidebar.set(a.hasBeenInSidebar === !0), a.lastUpdatedAt !== void 0 && n.lastUpdatedAt.set(a.lastUpdatedAt);
                }));
            });
        }), r !== void 0) {
            const s = r;
            this._draftHeaderSyncDisposables.set(e, {
                dispose: ()=>{
                    i.dispose(), s();
                }
            });
        } else i.dispose();
    }
    environmentToDraftTarget(e) {
        switch(e.type){
            case "existing":
                return {
                    type: "existing",
                    environment: e.environment,
                    ...e.glassWorktreePicker ? {
                        glassWorktreePicker: e.glassWorktreePicker
                    } : {},
                    ...e.displayName ? {
                        displayName: e.displayName
                    } : {},
                    ...e.repoUrls && e.repoUrls.length > 0 ? {
                        repoUrls: e.repoUrls
                    } : {}
                };
            case "new":
                return {
                    type: "new",
                    environment: e.environment
                };
            default:
                {
                    const n = e;
                    throw new Error(`Unknown environment type: ${n.type}`);
                }
        }
    }
    healPersistedDraftTarget(e) {
        if (e.type !== "existing") return e;
        const n = Y9(e.environment);
        if (!kb(n)) return e;
        const i = Qdk(e, n, this.workspaceMetadataService);
        return {
            type: "existing",
            environment: this.rootWorkspace.workspaceIdentifier,
            ...i.length > 0 ? {
                repoUrls: i
            } : {},
            ...e.displayName ? {
                displayName: e.displayName
            } : {},
            ...e.glassWorktreePicker ? {
                glassWorktreePicker: e.glassWorktreePicker
            } : {}
        };
    }
    draftTargetToEnvironment(e) {
        switch(e.type){
            case "existing":
                return {
                    type: "existing",
                    environment: e.environment,
                    ...e.glassWorktreePicker ? {
                        glassWorktreePicker: e.glassWorktreePicker
                    } : {},
                    ...e.displayName ? {
                        displayName: e.displayName
                    } : {},
                    ...e.repoUrls && e.repoUrls.length > 0 ? {
                        repoUrls: e.repoUrls
                    } : {}
                };
            case "new":
                return {
                    type: "new",
                    environment: {
                        ...e.environment,
                        cloudTargetKey: e.environment.cloudTargetKey ?? yCe(e.environment.id)
                    }
                };
            default:
                {
                    const n = e;
                    throw new Error(`Unknown draft target type: ${n.type}`);
                }
        }
    }
    getHeaderEnvironment(e, n) {
        if (e.type === "existing") {
            const o = Y9(e.environment), a = {
                type: "existing",
                environment: o,
                ...e.glassWorktreePicker ? {
                    glassWorktreePicker: e.glassWorktreePicker
                } : {},
                ...e.displayName ? {
                    displayName: e.displayName
                } : {},
                ...e.repoUrls && e.repoUrls.length > 0 ? {
                    repoUrls: e.repoUrls
                } : {}
            }, l = this.workspaceMetadataService.getMetadata(o), c = this.composerDataService.getComposerDataIfLoaded(n)?.trackedGitRepos;
            let u = wxn(c, l);
            if (!u.some((d)=>(d.repoUrl.value?.trim().length ?? 0) > 0)) {
                const d = Hil(e.repoUrls);
                d.length > 0 && (u = Dis({
                    workspaceRootPath: h7,
                    normalizedRepoUrls: d,
                    activeBranchName: void 0
                }));
            }
            return {
                targetEnvironment: a,
                environment: o,
                trackedGitRepos: u
            };
        }
        const i = this.draftTargetToEnvironment(e), r = e.environment.usePrivateWorker === !0 ? Y9(e.environment.privateWorkspaceIdentifier) : void 0, s = Jdk(e);
        return {
            targetEnvironment: i,
            environment: r ?? ihk(n),
            trackedGitRepos: Dis({
                workspaceRootPath: h7,
                normalizedRepoUrls: s,
                activeBranchName: void 0
            })
        };
    }
    createHeader(e, n, i) {
        const { targetEnvironment: r, environment: s, trackedGitRepos: o } = this.getHeaderEnvironment(n, e), a = new ca(o), l = new ca(s);
        return {
            id: e,
            projectId: "",
            isArchived: new ca(!1),
            targetEnvironment: r,
            environment: l,
            name: new ca(i.cloudProjectWorkerDraft !== void 0 ? hhn : Fis(i.subtitle)),
            ...i.cloudProjectWorkerDraft !== void 0 ? {
                subagentParentId: i.cloudProjectWorkerDraft.managerAgentId,
                subagentTypeName: hAe
            } : {},
            source: "draft",
            status: new ca("done"),
            createdAt: i.createdAt,
            lastUpdatedAt: new ca(i.lastUpdatedAt),
            subtitle: new ca(i.subtitle),
            trackedGitRepos: a,
            hasUnreadMessages: new ca(i.hasUnreadMessages),
            hasBeenInSidebar: new ca(i.hasBeenInSidebar),
            conversationState: new ca(void 0),
            blobStore: rzr,
            prUrl: new ca(void 0)
        };
    }
    upsertHeader(e, n, i) {
        const r = this._agents.value.find((o)=>o.id === e);
        if (r) {
            const { targetEnvironment: o, environment: a, trackedGitRepos: l } = this.getHeaderEnvironment(n, e);
            i.cloudProjectWorkerDraft !== void 0 ? (r.name.set(hhn), r.subagentParentId = i.cloudProjectWorkerDraft.managerAgentId, r.subagentTypeName = hAe) : r.name.set(Fis(i.subtitle)), r.status.set("done"), r.lastUpdatedAt.set(i.lastUpdatedAt), r.subtitle.set(i.subtitle), r.hasBeenInSidebar.set(i.hasBeenInSidebar), r.targetEnvironment = o, Rp(r.environment.value, a) || r.environment.set(a);
            const { rows: c, didReplaceList: u } = Cxn(r.trackedGitRepos.value, l);
            return u && r.trackedGitRepos.set(c), this.sortHeadersByLastUpdated(), this.tryRegisterDraftHeaderComposerSync(e), r;
        }
        const s = this.createHeader(e, n, i);
        return this._agents.set([
            s,
            ...this._agents.value
        ]), this.sortHeadersByLastUpdated(), this.tryRegisterDraftHeaderComposerSync(e), s;
    }
    sortHeadersByLastUpdated() {
        this._agents.set([
            ...this._agents.value
        ].sort((e, n)=>n.lastUpdatedAt.value - e.lastUpdatedAt.value));
    }
    async restoreDrafts() {
        await this.composerDataService.whenInitialComposerDataLoaded();
        const n = this.composerDataService.allComposersData.allComposers.filter((a)=>a.isDraft && a.draftTarget && !a.isArchived && !uN(a.composerId)), r = (await Promise.all(n.map(async (a)=>{
            const l = await this.composerDataService.getComposerHandleById(a.composerId);
            if (!l) return;
            const c = this.composerDataService.getComposerData(l);
            if (!c || c.isDraft === !1) return;
            const u = Txn({
                text: c.text,
                richText: c.richText,
                imageCount: c.context?.selectedImages?.length ?? 0,
                videoCount: c.context?.selectedVideos?.length ?? 0
            });
            return this.createHeader(a.composerId, this.healPersistedDraftTarget(a.draftTarget), {
                subtitle: u,
                createdAt: a.createdAt,
                lastUpdatedAt: c.lastUpdatedAt ?? a.lastUpdatedAt ?? a.createdAt,
                hasUnreadMessages: c.hasUnreadMessages ?? !1,
                hasBeenInSidebar: c.hasBeenInSidebar === !0 || a.hasBeenInSidebar === !0,
                cloudProjectWorkerDraft: c.cloudProjectWorkerDraft ?? a.cloudProjectWorkerDraft
            });
        }))).filter((a)=>a !== void 0), o = [
            ...this._agents.value.filter((a)=>uN(a.id)),
            ...r
        ];
        o.sort((a, l)=>l.lastUpdatedAt.value - a.lastUpdatedAt.value), this._agents.set(o);
        for (const a of r)this.tryRegisterDraftHeaderComposerSync(a.id);
    }
};

}
