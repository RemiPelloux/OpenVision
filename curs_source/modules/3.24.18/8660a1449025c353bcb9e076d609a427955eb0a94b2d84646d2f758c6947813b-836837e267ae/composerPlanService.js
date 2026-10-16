import { Eze } from "./Aeg.js";
import { Fa, Gt, KR, Qe, en, m1, st, tt, ww } from "./Iwo.js";
import { _1 } from "./LYd.js";
import { bn } from "./SZu.js";
import { MI, X4t, ju, t2 } from "./agent_pb.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { QHa, pd } from "./background_composer_pb.js";
import { Yse, bs, sd } from "./chat_pb.js";
import { Yh, vS } from "./composer.js";
import { y6 } from "./composerCapabilities.js";
import { l0, mV } from "./composerChatServiceInterface.js";
import { Kbe, WCe } from "./composerCodeBlockService.js";
import { Xpe, ple } from "./composerContextServiceTypes.js";
import { uv } from "./composerData.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Fb, LS } from "./composerEventService.js";
import { iI, w1 } from "./composerLogService.js";
import { HPe } from "./composerModeUtils.js";
import { uk, xE } from "./composerModesServiceTypes.js";
import { Ais, Sxn } from "./composerPlanServiceTypes.js";
import { WB, YM } from "./composerUtilsServiceTypes.js";
import { Bb, Ux } from "./composerViews.js";
import { mo, tf } from "./composer_pb.js";
import { Hn } from "./dom_2.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { YI, fT } from "./filesConfigurationService.js";
import { UCe } from "./gYa.js";
import { G4, UO } from "./inlineDiffService.js";
import { It, dn } from "./instantiation.js";
import { B4, Dh, NCn, Wst, kbe } from "./ipa.js";
import { eg, of } from "./modelConfigServiceTypes.js";
import { Rd, ih } from "./pathService.js";
import { AB } from "./planFileUtils.js";
import { Szt, VPe, mle } from "./planStorageService.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { lat, zPe } from "./reviewChangesService.js";
import { Zi, ki } from "./storage_2.js";
import { v1 } from "./store.js";
import { Ct, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { oT } from "./utils_16.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
import { Hae, uX, wbe } from "./yBp.js";
import { Wu, rl } from "./ze.js";
var Y4, XI, Ris;
export { Ris, XI, Y4 };
var __wakaru_I6_initialized = false;
export function I6() {
if (__wakaru_I6_initialized) return;
__wakaru_I6_initialized = true;
"use strict";
E(), It(), Rn(), Pu(), pd(), sd(), tf(), ju(), Pl(), LS(), vS(), Ux(), uv(), fn(), Wo(), oT(), _s(), Xo(), of(), y6(), el(), Gt(), Qe(), Fa(), mV(), Xpe(), xE(), Ss(), Hn(), Zi(), wu(), Ld(), G4(), fo(), WCe(), lat(), VPe(), Ais(), AB(), YI(), WB(), HPe(), ih(), Sr(), v1(), iI(), Y4 = Sxn, XI = ((t)=>(t.NONE = "none", t.ACTIVE = "active", t.COMPLETE = "complete", t))(XI || {}), Ris = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C, T, I, A){
        super(), this._composerDataService = t, this._composerEventService = e, this._composerService = n, this._composerViewsService = i, this._editorService = r, this._experimentService = s, this._instantiationService = o, this._modelConfigService = a, this._reactiveStorageService = l, this._composerContextService = c, this._analyticsService = u, this._composerModesService = d, this._storageService = h, this._editorGroupsService = p, this._inlineDiffService = g, this._composerCodeBlockService = f, this._reviewChangesService = _, this._composerChatService = b, this._planStorageService = y, this._filesConfigurationService = S, this._composerUtilsService = k, this._pathService = C, this._environmentService = T, this._workspaceContextService = I, this._composerLogService = A, this.suggestedPlans = [], this._pendingScrollToTodos = new Set, this._activeBuildComposersByPlanId = new Map, this._planScanMemo = new Map, this._onNewPlanSuggested = this._register(new tt), this.onNewPlanSuggested = this._onNewPlanSuggested.event, this._onDidPlanUpdate = this._register(new tt), this.onDidPlanUpdate = this._onDidPlanUpdate.event, this._onDidPlanStreamingStateChange = this._register(new tt), this.onDidPlanStreamingStateChange = this._onDidPlanStreamingStateChange.event, this._activePlanModelRefs = new Map, this._register(this.onDidPlanUpdate(()=>this._planScanMemo.clear())), this._register(this._planStorageService.onDidChangePlan(({ planId: M, uri: O })=>{
            this._onDidPlanUpdate.fire({
                planId: M,
                uri: O
            });
        })), this._register(this._composerEventService.onDidComposerStopGenerating(({ composerId: M, hadActiveGeneration: O })=>{
            this._discardPlanModelsForComposer(M), O && this.notifyBuilderStopped(M);
        }));
        const P = this._environmentService.isGlass ? en.filter(this._composerEventService.onDidFinishStreamChatForWorkspace, (M)=>M.workspaceIdentifier.id === this._workspaceContextService.getWorkspace().id) : this._composerEventService.onDidFinishStreamChat;
        this._register(P(({ composerId: M })=>{
            this.notifyBuilderStopped(M);
        })), this._register(this._composerEventService.onDidContextChange(({ composerId: M })=>{
            this._checkAndRegisterPlanReferences(M);
        }));
    }
    notifyPlanIdentityAttached(t, e) {
        this._onDidPlanUpdate.fire({
            planId: t,
            uri: e
        });
    }
    notifyPlanToolAttached(t) {
        this._planScanMemo.delete(t);
    }
    async _checkAndRegisterPlanReferences(t) {
        const e = this._composerDataService.getComposerDataIfLoaded(t);
        if (!e) return;
        let n;
        try {
            const r = await this._pathService.userHome();
            n = wbe(r);
        } catch  {}
        const i = e.context;
        if (i) {
            for (const r of [
                i.fileSelections,
                i.selections
            ])if (r) for (const s of r){
                const o = s.uri;
                if (!o) continue;
                const a = rt.revive(o);
                if (a && uX(a, n)) try {
                    await this.registerComposerReference(a, t);
                } catch (l) {
                    this._composerLogService.warn("[ComposerPlanService] Failed to register plan reference:", l);
                }
            }
        }
    }
    markPlanBuildActive({ planId: t, composerId: e, uri: n }) {
        const i = t, r = e, s = this._activeBuildComposersByPlanId.get(i);
        s ? s.add(r) : this._activeBuildComposersByPlanId.set(i, new Set([
            r
        ])), this._onDidPlanUpdate.fire({
            planId: t,
            uri: n
        });
    }
    clearPlanBuildActive({ planId: t, composerId: e }) {
        const n = t, i = this._activeBuildComposersByPlanId.get(n);
        i && (i.delete(e), i.size === 0 && this._activeBuildComposersByPlanId.delete(n));
    }
    clearActiveBuildsForComposer(t) {
        const e = t;
        for (const [n, i] of this._activeBuildComposersByPlanId)i.delete(e), i.size === 0 && this._activeBuildComposersByPlanId.delete(n);
    }
    async notifyBuilderStopped(t) {
        const e = await this._planStorageService.getPlanEntriesBuiltBy(t);
        this.clearActiveBuildsForComposer(t);
        for (const { planId: n, uri: i } of e)this._onDidPlanUpdate.fire({
            planId: n,
            uri: i
        });
    }
    async firePlanUpdateForUri(t) {
        const e = await this._planStorageService.getRegistryEntry(t);
        e && this._onDidPlanUpdate.fire({
            planId: e.id,
            uri: e.uri
        });
    }
    setupAutoOpenReviewPaneAfterFirstEdit(t, e, n) {
        if (n === "auto" || !this._experimentService.checkFeatureGate("auto_open_review_during_plan_build", {
            disableExposureLog: !1
        })) return;
        const r = this._composerDataService.getHandleIfLoaded(t);
        if (!r) return;
        const s = this._composerCodeBlockService.getAllInlineDiffs(r).length;
        let o = !1;
        const a = async (c)=>{
            if (!(o || c <= s) && this._composerService.shouldShowAcceptRejectAll(t)) {
                o = !0;
                try {
                    for (const u of this._editorGroupsService.groups)for (const d of u.editors){
                        const h = d.resource;
                        h && h.toString() === e.toString() && await this._editorService.closeEditor({
                            editor: d,
                            groupId: u.id
                        });
                    }
                    this._analyticsService.trackEvent("review_changes.opened", {
                        entrypoint: "plan_execution_auto",
                        composer_id: t
                    }), await this._reviewChangesService.openOrUpdateReviewChangesEditor(t, void 0);
                } catch (u) {
                    this._composerLogService.warn("[ComposerPlanService] Failed to auto-open review pane:", u);
                }
            }
        }, l = this._inlineDiffService.inlineDiffs.event(()=>{
            if (o) return;
            const c = this._composerDataService.getHandleIfLoaded(t);
            if (!c) return;
            const u = c.data.composerId, p = this._inlineDiffService.inlineDiffs.nonReactive().filter((g)=>g.composerMetadata?.composerId === u).length;
            (async ()=>(await a(p), o && l.dispose()))();
        });
    }
    getPlanExecutionConfigForExecution(t) {
        if (Dh(this._storageService, "planExecUseChatModel")) {
            const o = t?.data?.modelConfig ?? this._modelConfigService.getModelConfig("composer");
            return {
                modelName: o.modelName && o.modelName !== "" ? o.modelName : "default",
                maxMode: o.maxMode,
                selectedModels: o.selectedModels
            };
        }
        const n = this._modelConfigService.getModelConfig("plan-execution"), r = n.selectedModels && n.selectedModels.length > 0 || n.modelName && n.modelName !== "" && n.modelName !== "default" ? n : t?.data?.modelConfig ?? this._modelConfigService.getModelConfig("composer");
        return {
            modelName: r.modelName && r.modelName !== "" ? r.modelName : "default",
            maxMode: !!r.maxMode,
            selectedModels: r.selectedModels
        };
    }
    getPlanUriFromBubble(t, e) {
        const i = this.getPlanBubbleData(t, e)?.additionalData;
        if (i?.planUri) return Hae(i.planUri);
    }
    getPlanBubbleData(t, e) {
        const n = this._composerDataService.getToolFormer(t);
        if (!n) return;
        const i = n.getBubbleData(e);
        if (i?.tool === Ct.CREATE_PLAN) return i;
    }
    getMostRecentPlanBubbleId(t) {
        const e = t.data, n = Wu(e.fullConversationHeadersOnly), i = n.length, r = (a, l)=>{
            for(let c = a; c >= l; c -= 1){
                const u = n[c]?.bubbleId;
                if (!u) continue;
                if (this.getPlanBubbleData(t, u)) return u;
            }
        }, s = this._planScanMemo.get(e.composerId);
        let o;
        return s !== void 0 && s.scannedLen <= i && (s.scannedLen === 0 || n[s.scannedLen - 1]?.bubbleId === s.tailBubbleId) ? o = r(i - 1, s.scannedLen) ?? s.planBubbleId : o = r(i - 1, 0), this._planScanMemo.set(e.composerId, {
            scannedLen: i,
            tailBubbleId: n[i - 1]?.bubbleId,
            planBubbleId: o
        }), o;
    }
    hasPendingPlan(t) {
        const e = this.getMostRecentPlanBubbleId(t);
        if (!e) return !1;
        const n = this._composerDataService.getComposerData(t);
        if (n) {
            let o = !1;
            for (const a of Wu(n.fullConversationHeadersOnly)){
                if (a.bubbleId === e) {
                    o = !0;
                    continue;
                }
                if (o && a.type === bs.HUMAN) return !1;
            }
        }
        const s = this.getPlanBubbleData(t, e)?.additionalData?.planUri;
        if (!s) return !1;
        try {
            const o = Hae(s), a = this._planStorageService.getRegistryEntrySync(o);
            return a ? Object.keys(a.builtBy).length === 0 : !1;
        } catch  {
            return !1;
        }
    }
    async acceptPlan(t, e, n, i, r) {
        const s = t.data.composerId, o = t.data, { unifiedMode: a, skipSubmission: l } = r ?? {}, c = UCe(a === "background" ? "agent" : a), u = o.currentBubbleId;
        u && (await this._composerUtilsService.removeMessagesAfterBubble(t, u), this._composerDataService.updateComposerData(t, {
            currentBubbleId: void 0,
            editingBubbleId: void 0
        }));
        const d = await this._loadPlanExecutionData(e);
        if (!d) return;
        const { fullPlanContent: h, nonCompletedTodos: p, planContent: g, planName: f, planTodos: _ } = d, b = o.modelConfig?.modelName, y = this.getPlanExecutionConfigForExecution(t), S = a === "background", k = S ? "cloud" : "local", C = (()=>{
            if (!n) return;
            const G = this._composerDataService.getComposerBubble(t, n);
            if (!(!G || G.type !== bs.HUMAN)) return G.isPlanExecution === !0 ? n : void 0;
        })(), T = this._composerDataService.getToolFormer(t)?.pendingDecisions().pendingDecisions ?? {}, I = Object.values(T).some((G)=>G.blocking && G.clientSideTool === Ct.ASK_QUESTION);
        this._analyticsService.trackEvent("composer.plan_mode.plan_accepted", {
            composer_id: s,
            model: b,
            plan_execution_model: y.modelName,
            plan_execution_max_mode: y.maxMode,
            execution_target: k,
            todos_selected: _.length,
            source: i ?? "manual",
            invocationID: o.latestChatGenerationUUID
        });
        const A = a === "multitask" ? "multitask" : "agent", P = Wst(g, f), M = this._buildPlanExecutionPrompt(P, S);
        o.editingBubbleId && this._composerDataService.updateComposerDataSetStore(t, (G)=>G("editingBubbleId", void 0));
        const O = Dh(this._storageService, "planExecUseChatModel"), N = !O, U = this.getPlanExecutionConfigForExecution(t);
        if (N && (A === "agent" || A === "multitask") && (this._composerDataService.updateComposerData(t, {
            unifiedMode: A
        }), this._modelConfigService.setModelConfigForComposer(t, U)), S) {
            const G = this._modelConfigService.getModelConfig("plan-execution"), q = O ? t.data?.modelConfig ?? this._modelConfigService.getModelConfig("composer") : G;
            this._modelConfigService.setModelConfig("background-composer", {
                modelName: q.modelName && q.modelName !== "" ? q.modelName : "default",
                maxMode: !!q.maxMode,
                selectedModels: q.selectedModels
            });
        }
        this._composerDataService.updateComposerData(t, {
            unifiedMode: A,
            pendingBackgroundAgent: S
        });
        let j;
        const $ = ()=>{
            j && (this.clearPlanBuildActive({
                planId: j,
                composerId: s
            }), j = void 0, this._planStorageService.unregisterBuild(e, s).catch((G)=>{
                this._composerLogService.warn("[ComposerPlanService] Failed to unregister build:", G);
            }).finally(()=>{
                this.firePlanUpdateForUri(e);
            }));
        };
        try {
            const G = await this._planStorageService.getRegistryEntry(e), q = p.map((K)=>K.id);
            G && (j = G.id, this.markPlanBuildActive({
                planId: G.id,
                composerId: s,
                uri: e
            })), await this._planStorageService.registerBuild(e, s, q);
        } catch (G) {
            $(), this._composerLogService.warn("[ComposerPlanService] Failed to register build:", G);
        }
        this._composerDataService.updateComposerData(t, {
            todos: p
        });
        const H = ww(g).length;
        if (this._composerContextService.addContext({
            composerHandle: t,
            contextType: "selections",
            value: {
                uri: e,
                text: g,
                rawText: g,
                range: {
                    selectionStartLineNumber: 1,
                    selectionStartColumn: 1,
                    positionLineNumber: H,
                    positionColumn: 1
                },
                addedWithoutMention: !0
            },
            shouldShowPreview: !1
        }), S) try {
            await this._composerChatService.appendQueuedHumanMessage(t, M, {
                richText: M
            }), this._composerViewsService.triggerScrollToBottom(t);
            const G = this._composerDataService.getLastHumanBubble(t);
            if (!G) {
                $(), this._composerLogService.warn("[ComposerPlanService] Missing plan execution bubble for cloud submit"), this._composerDataService.updateComposerData(t, {
                    pendingBackgroundAgent: !1
                });
                return;
            }
            const q = G.bubbleId;
            this._composerDataService.updateComposerBubble(t, q, {
                isPlanExecution: !0,
                planUri: e.toString(),
                planTitle: P
            });
            const K = new MI({
                action: {
                    case: "executePlanAction",
                    value: new X4t({
                        planFileUri: e.toString(),
                        planFileContent: h,
                        executionMode: c
                    })
                }
            }), V = this._composerDataService.getComposerCapability(t, mo.BACKGROUND_COMPOSER);
            if (!V) {
                $(), this._composerLogService.warn("[ComposerPlanService] Background composer capability unavailable for cloud plan execution"), this._composerDataService.updateComposerData(t, {
                    pendingBackgroundAgent: !1
                });
                return;
            }
            await V.submitConversationActionToBackgroundComposer({
                composerHandle: t,
                humanBubbleId: q,
                conversationAction: K,
                planFollowupType: QHa.EXECUTE
            }), await this.firePlanUpdateForUri(e), this._composerViewsService.focus(t.data.composerId, !0), this.setupAutoOpenReviewPaneAfterFirstEdit(s, e, i);
            return;
        } catch (G) {
            $(), this._composerLogService.error("[ComposerPlanService] Cloud plan execution failed:", G), this._composerDataService.updateComposerData(t, {
                pendingBackgroundAgent: !1
            });
            return;
        }
        if (l) {
            await this.firePlanUpdateForUri(e), this._composerViewsService.focus(t.data.composerId, !0), this.setupAutoOpenReviewPaneAfterFirstEdit(s, e, i);
            return;
        }
        try {
            if (o.isNAL && o.conversationActionManager && !I) {
                const K = new MI({
                    action: {
                        case: "executePlanAction",
                        value: new X4t({
                            planFileUri: e.toString(),
                            planFileContent: h,
                            executionMode: c,
                            kickoffMessageId: C
                        })
                    }
                });
                await o.conversationActionManager.submitConversationAction(K), await this.firePlanUpdateForUri(e), this._composerViewsService.triggerScrollToBottom(t), this._composerViewsService.focus(t.data.composerId, !0), this.setupAutoOpenReviewPaneAfterFirstEdit(s, e, i);
                return;
            }
            const G = this.getPlanExecutionConfigForExecution(t);
            C && this._composerDataService.updateComposerBubble(t, C, {
                isPlanExecution: !0,
                planUri: e.toString(),
                planTitle: P
            });
            const q = new MI({
                action: {
                    case: "executePlanAction",
                    value: new X4t({
                        planFileUri: e.toString(),
                        planFileContent: h,
                        executionMode: c,
                        kickoffMessageId: C
                    })
                }
            });
            await this._composerChatService.submitChatMaybeAbortCurrent(t.data.composerId, M, {
                isPlanExecution: !0,
                modelOverride: G.modelName?.split(",")[0],
                planUri: e.toString(),
                planTitle: P,
                bubbleId: C,
                skipClearInput: !0,
                conversationActionOverride: q
            }), await this.firePlanUpdateForUri(e), this._composerViewsService.focus(t.data.composerId, !0), this.setupAutoOpenReviewPaneAfterFirstEdit(s, e, i);
        } catch (G) {
            throw $(), G;
        }
    }
    async acceptPlanByUri(t, e) {
        const n = await this._planStorageService.getRegistryEntry(t);
        if (!n) {
            this._composerLogService.warn("[ComposerPlanService] No registry entry found for plan URI:", t.toString());
            return;
        }
        let i = n.createdBy;
        if (!i) {
            this._composerLogService.warn("[ComposerPlanService] No createdBy composer ID in registry entry");
            return;
        }
        let r = this._composerDataService.getHandleIfLoaded(i);
        if (!r) {
            const o = await this._composerService.createComposer({
                partialState: {
                    unifiedMode: "agent"
                }
            });
            if (!o) {
                this._composerLogService.error("[ComposerPlanService] Failed to create new composer for plan execution");
                return;
            }
            if (i = o.composerId, r = this._composerDataService.getHandleIfLoaded(i), !r) {
                this._composerLogService.error("[ComposerPlanService] Failed to get handle for newly created composer");
                return;
            }
        }
        const s = this.getMostRecentPlanBubbleId(r);
        await this._composerViewsService.showAndFocus(i, {
            focusMainInputBox: !0
        }), await this.acceptPlan(r, t, s, "manual", e);
    }
    async acceptPlanById(t, e) {
        const n = await this.getRegistryEntryById(t);
        n && await this.acceptPlanByUri(n.uri, e);
    }
    async prepareCloudPlanBuildTransfer(t, e, n) {
        const i = t.data, r = await this._planStorageService.getRegistryEntry(e);
        if (!r) return;
        const s = await this._loadPlanExecutionData(e);
        if (!s) return;
        const { fullPlanContent: o, nonCompletedTodos: a, planContent: l, planName: c } = s, u = Wst(l, c), d = this._buildPlanExecutionPrompt(u, !0), h = this._getCloudPlanExecutionModelConfig(t), p = this.getPlanExecutionConfigForExecution(t);
        return this._analyticsService.trackEvent("composer.plan_mode.plan_accepted", {
            composer_id: i.composerId,
            model: i.modelConfig?.modelName,
            plan_execution_model: p.modelName,
            plan_execution_max_mode: p.maxMode,
            execution_target: "cloud",
            todos_selected: s.planTodos.length,
            source: n ?? "manual",
            invocationID: i.latestChatGenerationUUID
        }), {
            conversationAction: new MI({
                action: {
                    case: "executePlanAction",
                    value: new X4t({
                        planId: r.id,
                        planFilePath: KR(e, !0, e.scheme !== "file"),
                        planFileUri: e.toString(),
                        planFileContent: o,
                        executionMode: t2.AGENT
                    })
                }
            }),
            modelConfig: h,
            planTitle: u
        };
    }
    async _loadPlanExecutionData(t) {
        try {
            const e = await this._planStorageService.loadPlanByUri(t), n = e.metadata.todos ?? [];
            return {
                fullPlanContent: Eze(e.metadata) + `

` + e.body,
                nonCompletedTodos: n.filter((i)=>i.status !== "completed" && i.status !== "cancelled"),
                planContent: e.body,
                planName: e.metadata.name,
                planTodos: n
            };
        } catch (e) {
            this._composerLogService.warn("[ComposerPlanService] Failed to load plan content from file:", e);
            return;
        }
    }
    _buildPlanExecutionPrompt(t, e) {
        return (e ? t + `

` : "") + `Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.`;
    }
    _getCloudPlanExecutionModelConfig(t) {
        const e = Dh(this._storageService, "planExecUseChatModel"), n = this._modelConfigService.getModelConfig("plan-execution");
        return e ? t.data?.modelConfig ?? this._modelConfigService.getModelConfig("composer") : n;
    }
    isSpecModeEnabled() {
        return !1;
    }
    async openPlanInEditor(t, e) {
        try {
            const n = e?.composerId, i = n ? this._composerDataService.selectedComposerId === n : !1, r = e?.stealFocus ?? !1;
            e?.scrollToTodos && i && this._pendingScrollToTodos.add(t.toString()), await this._editorService.openEditor({
                resource: t,
                options: {
                    pinned: i,
                    preserveFocus: !r
                }
            }), e?.scrollToTodos && i && setTimeout(()=>{
                const s = new CustomEvent("markdownPlanEditor:scrollToTodos", {
                    detail: {
                        uri: t.toString()
                    }
                });
                rl().dispatchEvent(s);
            }, 100);
        } catch (n) {
            this._composerLogService.error("Failed to open plan in editor:", n);
        }
    }
    consumePendingScrollToTodos(t) {
        const e = t.toString();
        return this._pendingScrollToTodos.has(e) ? (this._pendingScrollToTodos.delete(e), !0) : !1;
    }
    getPlanTitle(t) {
        if (!t) return "Plan";
        let e = t.split(`
`)[0]?.trim();
        return e ? (e = e.replace(/^#+\s*/, ""), e = e.replace(/\*\*([^*]+)\*\*/g, "$1"), e = e.replace(/\*([^*]+)\*/g, "$1"), e = e.replace(/__([^_]+)__/g, "$1"), e = e.replace(/_([^_]+)_/g, "$1"), e = e.replace(/`([^`]+)`/g, "$1"), e = e.replace(/~~([^~]+)~~/g, "$1"), e = e.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"), e = e.replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1"), e.trim() || "Plan") : "Plan";
    }
    async createSubComposerFromPlan(t, e) {
        try {
            const n = await this._composerDataService.getComposerHandleById(t);
            if (!n) {
                this._composerLogService.error("[composer] Parent composer not found:", t);
                return;
            }
            const i = Ai(), r = NCn(n.data.gitWorktree, B4(this._modelConfigService.getModelConfig("composer"), i));
            r.plan = void 0;
            const s = kbe(this._instantiationService, i), o = n.data, l = {
                originalPlan: o.plan?.content || ""
            };
            if (r.subagentInfo = {
                subagentType: Yse.SPEC,
                parentComposerId: t,
                conversationLengthAtSpawn: 0,
                additionalData: l
            }, r.capabilities = s, r.unifiedMode = e.unifiedMode ?? o.unifiedMode, o.context && (r.context = _1(o.context)), await this._composerDataService.appendSubComposer(r), this._composerDataService.updateComposerDataSetStore(n, (c)=>{
                c("subComposerIds", (u)=>[
                        ...u,
                        i
                    ]), e.stepId && c("plan", (u)=>{
                    if (!u || !u.steps) return u;
                    const d = u.steps.map((h)=>h.id === e.stepId ? {
                            ...h,
                            subComposerId: i
                        } : h);
                    return {
                        ...u,
                        steps: d
                    };
                });
            }), e.stepId && !e.query) {
                const u = n.data.plan?.steps?.find((d)=>d.id === e.stepId);
                u && (e.query = u.instructions);
            }
            if (e.query === void 0) throw new Error("No query provided");
            return await this._composerChatService.submitChatMaybeAbortCurrent(i, e.query), i;
        } catch (n) {
            this._composerLogService.error("[composer] Failed to create composer from plan:", n);
            return;
        }
    }
    getSuggestedPlans() {
        return [
            ...this.suggestedPlans
        ];
    }
    addSuggestedPlan(t) {
        this.suggestedPlans = this.suggestedPlans.filter((e)=>e.content !== t.content), this.suggestedPlans = [
            t,
            ...this.suggestedPlans
        ], this.suggestedPlans = this.suggestedPlans.slice(0, 3), this._onNewPlanSuggested.fire();
    }
    async createPlanFile(t, e, n, i, r, s, o) {
        return (await this._planStorageService.createPlanForComposer({
            composerId: t,
            name: e,
            overview: n,
            todos: i,
            body: r,
            isProject: s,
            phases: o
        })).fileUri;
    }
    async updatePlanByUri(t, e, n, i, r, s, o, a) {
        const l = {
            overview: n,
            todos: i,
            body: r
        };
        e !== void 0 && (l.name = e), o !== void 0 && (l.isProject = o), a !== void 0 && (l.phases = a), await this._planStorageService.updatePlanFull(t, l, s);
    }
    async movePlanToWorkspace(t, e) {
        if (this.isPlanBeingStreamed(t)) return t;
        let n = !1, i;
        const r = [];
        for (const o of this._editorGroupsService.groups)for (const a of o.editors){
            const l = a.resource;
            l && l.fsPath === t.fsPath && (n = !0, i = {
                pinned: o.isPinned(a),
                preserveFocus: !1
            }, r.push({
                editor: a,
                groupId: o.id
            }));
        }
        for (const o of r)await this._editorService.closeEditor(o);
        const s = await this._planStorageService.movePlanToWorkspace(t, e);
        return n && await this._editorService.openEditor({
            resource: s,
            options: {
                pinned: i?.pinned ?? !0,
                preserveFocus: i?.preserveFocus ?? !1
            }
        }), s;
    }
    async updatePlanFileContent(t, e, n) {
        await this._planStorageService.updatePlanContent(t, e, n);
    }
    async getPlanByUri(t) {
        const e = await this._planStorageService.loadPlanByUri(t);
        return {
            name: e.metadata.name,
            overview: e.metadata.overview,
            todos: e.metadata.todos,
            body: e.body
        };
    }
    async getPlanById(t) {
        const e = await this._planStorageService.loadPlanById(t);
        if (e) return {
            name: e.metadata.name,
            overview: e.metadata.overview,
            todos: e.metadata.todos,
            body: e.body
        };
    }
    async registerComposerReference(t, e) {
        let n = await this._planStorageService.getRegistryEntry(t);
        if (!n) {
            n = await this._planStorageService.registerExistingPlan(t, e);
            return;
        }
        n.referencedBy.includes(e) || (n.referencedBy.push(e), await this._planStorageService.updatePlanMetadata(t, {}, e));
    }
    async importPlanFileForComposer(t, e, n) {
        return (await this._planStorageService.importPlanFileForComposer(t, e, n)).uri;
    }
    async getRegistryEntry(t) {
        return this._planStorageService.getRegistryEntry(t);
    }
    async getRegistryEntryById(t) {
        return this._planStorageService.getRegistryEntry(t);
    }
    async getExistingPlanUri(t) {
        return (await this._planStorageService.getPlanForComposer(t))?.uri;
    }
    async getLatestPlanEntryForComposer(t) {
        return this._planStorageService.getPlanForComposer(t);
    }
    async getPlanEntriesForComposer(t) {
        return this._planStorageService.getPlanEntriesReferencedByComposer(t);
    }
    async getOrCreatePlanFile(t, e, n, i, r, s, o) {
        const a = await this._planStorageService.getPlanForComposer(t);
        if (a) {
            const c = {
                overview: n,
                todos: i,
                body: r,
                isProject: s,
                phases: o
            };
            return e !== void 0 && (c.name = e), await this._planStorageService.updatePlanFull(a.id, c, t), (await this._planStorageService.getPlanForComposer(t))?.uri ?? a.uri;
        }
        const l = e ?? Wst(r);
        return this.createPlanFile(t, l, n, i, r, s, o);
    }
    async syncTodoUpdatesToFile(t, e, n) {
        if (e.size === 0) return;
        const i = n ?? await this.getExistingPlanUri(t);
        if (i) try {
            const s = (await this._planStorageService.loadPlanByUri(i)).metadata.todos ?? [];
            if (s.length === 0) return;
            let o = !1;
            const a = s.map((l)=>{
                const c = e.get(l.id);
                return c !== void 0 && c !== l.status ? (o = !0, {
                    ...l,
                    status: c
                }) : l;
            });
            if (!o) return;
            await this._planStorageService.updatePlanMetadata(i, {
                todos: a
            }, t);
        } catch (r) {
            this._composerLogService.error("[ComposerPlanService] Failed to sync todo updates to file:", r);
        }
    }
    async dereferencePlansCreatedByDeletedBubbles(t, e) {
        await this._planStorageService.dereferencePlansCreatedByComposer(t, e);
    }
    async getPlanDerivedStatus(t) {
        const e = await this._planStorageService.getRegistryEntry(t);
        if (!e) return mle.PENDING;
        const i = (await this._planStorageService.loadPlanByUri(t)).metadata.todos ?? [];
        return this._planStorageService.getPlanStatus(e, i);
    }
    async getPlanDerivedStatusById(t) {
        const e = await this.getRegistryEntryById(t);
        return e ? this.getPlanDerivedStatus(e.uri) : mle.PENDING;
    }
    async getPlanBuildStatus(t) {
        const e = await this._planStorageService.getRegistryEntry(t);
        if (!e) return "none";
        const i = (await this._planStorageService.loadPlanByUri(t)).metadata.todos ?? [], r = this._planStorageService.getPlanStatus(e, i);
        if (r === mle.PENDING) return "none";
        const s = Object.keys(e.builtBy), o = e.id;
        let a = this._activeBuildComposersByPlanId.get(o);
        if (a) {
            for (const f of Array.from(a)){
                const _ = this._composerDataService.getComposerDataIfLoaded(f);
                _ && _.status !== "generating" && a.delete(f);
            }
            a.size === 0 && (this._activeBuildComposersByPlanId.delete(o), a = void 0);
        }
        const l = a !== void 0 && a.size > 0, c = s.some((f)=>{
            try {
                return this._composerDataService.getComposerDataIfLoaded(f)?.status === "generating";
            } catch  {
                return this._composerLogService.warn("[composerPlanService] composer data unavailable for registered builder"), !1;
            }
        }), u = s.map((f)=>{
            const _ = e.builtBy[f] ?? [], b = this._composerDataService.getComposerDataIfLoaded(f), y = b?.todos ?? [], S = new Map(y.map((T)=>[
                    T.id,
                    T.status
                ])), k = _.map((T)=>S.get(T)), C = _.length > 0 && k.every((T)=>T === "completed" || T === "cancelled");
            return {
                composerId: f,
                composerStatus: b?.status,
                assignedTodoIds: _,
                composerTodoIds: y.map((T)=>T.id),
                assignedStatuses: k,
                allAssignedDone: C
            };
        }), d = new Set(s.flatMap((f)=>e.builtBy[f] ?? [])), h = i.some((f)=>(f.status === "pending" || f.status === "in_progress") && !d.has(f.id)), p = u.length > 0 && !h && u.every((f)=>f.allAssignedDone);
        let g;
        return r === mle.IN_PROGRESS ? l || c ? g = "active" : p ? g = "complete" : g = "none" : i.length === 0 ? g = l || c ? "active" : "none" : g = "complete", g;
    }
    async getPlanBuildStatusById(t) {
        const e = await this.getRegistryEntryById(t);
        return e ? this.getPlanBuildStatus(e.uri) : "none";
    }
    isPlanPendingByUri(t) {
        const e = this._planStorageService.getRegistryEntrySync(t);
        return e ? Object.keys(e.builtBy).length === 0 : !1;
    }
    async resolveCurrentUri(t) {
        return this._planStorageService.resolveCurrentUri(t);
    }
    async buildSelectedTodosInNewAgent(t, e) {
        if (e.length === 0) {
            this._composerLogService.warn("[ComposerPlanService] No todos selected for building");
            return;
        }
        let n;
        const i = ()=>{
            n && (this.clearPlanBuildActive(n), n = void 0, this.firePlanUpdateForUri(t));
        };
        try {
            const r = await this._planStorageService.getRegistryEntry(t);
            let s;
            r?.createdBy && (s = this._composerDataService.getHandleIfLoaded(r.createdBy));
            const o = this.getPlanExecutionConfigForExecution(s), a = await this._composerService.createComposer({
                unifiedMode: "agent",
                openInNewTab: !0
            });
            if (!a?.composerId) {
                this._composerLogService.error("[ComposerPlanService] Failed to create new composer");
                return;
            }
            const l = a.composerId, c = this._composerDataService.getHandleIfLoaded(l);
            if (!c) {
                this._composerLogService.error("[ComposerPlanService] Failed to get composer handle");
                return;
            }
            this._modelConfigService.setModelConfigForComposer(c, o, "plan-execution"), this._composerDataService.updateComposerData(c, {
                todos: e
            });
            let u, d;
            try {
                const y = await this._planStorageService.loadPlanByUri(t);
                d = y.metadata.name, u = y.body;
            } catch (y) {
                this._composerLogService.warn("[ComposerPlanService] Failed to load plan content:", y), u = "";
            }
            const p = u.split(`
`).length;
            this._composerContextService.addContext({
                composerHandle: c,
                contextType: "selections",
                value: {
                    uri: t,
                    text: u,
                    rawText: u,
                    range: {
                        selectionStartLineNumber: 1,
                        selectionStartColumn: 1,
                        positionLineNumber: p,
                        positionColumn: 1
                    }
                },
                shouldShowPreview: !1
            }), await this.registerComposerReference(t, l);
            const g = e.map((y)=>y.id).join(", "), f = e.map((y, S)=>`${S + 1}. [${y.id}] ${y.content}`).join(`
`), _ = Wst(u, d), b = `Implement the following to-dos from the plan (the plan is attached for your reference). Do NOT edit the plan file itself.

You have been assigned the following ${e.length} to-do(s) with IDs: ${g}

${f}

These to-dos have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the assigned to-dos.`;
            try {
                const y = await this._planStorageService.getRegistryEntry(t);
                y && (n = {
                    planId: y.id,
                    composerId: l
                }, this.markPlanBuildActive({
                    ...n,
                    uri: t
                }));
                const S = e.map((k)=>k.id);
                await this._planStorageService.registerBuild(t, l, S);
            } catch (y) {
                i(), this._composerLogService.warn("[ComposerPlanService] Failed to register build:", y);
            }
            return await this._composerChatService.submitChatMaybeAbortCurrent(l, b, {
                isPlanExecution: !0,
                modelOverride: o.modelName?.split(",")[0],
                planUri: t.toString(),
                planTitle: _
            }), this._composerViewsService.focus(l, !0), l;
        } catch (r) {
            i(), this._composerLogService.error("[ComposerPlanService] Error building selected todos in new agent:", r);
            return;
        }
    }
    _releasePlanModelRefs(t) {
        const e = [], n = [];
        for (const i of t){
            const r = this._activePlanModelRefs.get(i);
            r && (this._activePlanModelRefs.delete(i), e.push(r.ref, r.autoSaveDisabled), n.push(r.uri));
        }
        return m1(...e), n;
    }
    _discardPlanModelByKey(t) {
        return this._releasePlanModelRefs([
            t
        ]).length > 0;
    }
    _isComposerGenerationOver(t) {
        const e = this._composerDataService.getComposerDataIfLoaded(t);
        return e !== void 0 && e.chatGenerationUUID === void 0;
    }
    _discardPlanModelsForComposer(t) {
        const e = [];
        for (const [n, i] of this._activePlanModelRefs)i.composerId === t && e.push(n);
        if (e.length !== 0) for (const n of this._releasePlanModelRefs(e))this._onDidPlanStreamingStateChange.fire(n);
    }
    async updatePlanByUriDirty(t, e, n, i, r, s, o, a) {
        const l = {
            overview: n,
            todos: i,
            body: r
        };
        e !== void 0 && (l.name = e), o !== void 0 && (l.isProject = o), a !== void 0 && (l.phases = a);
        const c = t.toString(), u = this._activePlanModelRefs.get(c), d = u?.autoSaveDisabled ?? this._filesConfigurationService.disableAutoSave(t);
        let h;
        try {
            h = await this._planStorageService.updatePlanModelDirty(t, l, s);
        } catch (_) {
            throw u || d.dispose(), _;
        }
        const p = this._activePlanModelRefs.get(c), g = this._isComposerGenerationOver(s);
        if (g || p !== u) {
            m1(h, u ? void 0 : d), g && this.discardPlanModel(t);
            return;
        }
        const f = !u;
        this._activePlanModelRefs.set(c, {
            uri: t,
            composerId: s,
            ref: h,
            autoSaveDisabled: d
        }), u?.ref.dispose(), f && this._onDidPlanStreamingStateChange.fire(t);
    }
    async savePlanModel(t) {
        const e = t.toString(), n = this._activePlanModelRefs.get(e);
        n && (await this._planStorageService.savePlanModel(t), this._activePlanModelRefs.get(e) === n && this._discardPlanModelByKey(e) && this._onDidPlanStreamingStateChange.fire(t));
    }
    async savePlanById(t) {
        const e = await this.getRegistryEntryById(t);
        e && await this.savePlanModel(e.uri);
    }
    discardPlanModel(t) {
        this._discardPlanModelByKey(t.toString()) && this._onDidPlanStreamingStateChange.fire(t);
    }
    isPlanBeingStreamed(t) {
        const e = t.toString();
        return this._activePlanModelRefs.has(e);
    }
    dispose() {
        try {
            this._releasePlanModelRefs([
                ...this._activePlanModelRefs.keys()
            ]);
        } finally{
            super.dispose();
        }
    }
}, Ris = Re([
    F(0, no),
    F(1, Fb),
    F(2, Yh),
    F(3, Bb),
    F(4, gr),
    F(5, Cr),
    F(6, dn),
    F(7, eg),
    F(8, sa),
    F(9, ple),
    F(10, Qr),
    F(11, uk),
    F(12, ki),
    F(13, _a),
    F(14, UO),
    F(15, Kbe),
    F(16, zPe),
    F(17, l0),
    F(18, Szt),
    F(19, fT),
    F(20, YM),
    F(21, Rd),
    F(22, ps),
    F(23, yr),
    F(24, w1)
], Ris), bn(Y4, Ris, 1);

}
