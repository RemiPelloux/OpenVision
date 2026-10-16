import { Nse, bX, qj } from "./A3u.js";
import { G0e, I$t, M4e, O5, rh } from "./De_3.js";
import { Ct, Pk, Ps, Se, bt, hM, ry, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Hyt, UE, x1, zd } from "./agent_pb.js";
import { ca, la } from "./aiMiscServices.js";
import { Mlo, hm } from "./background_composer_pb.js";
import { o8e } from "./cgh.js";
import { Hu, Tr, ade } from "./chat_pb.js";
import { Hh, Xy } from "./composer.js";
import { T2 } from "./composerCapabilities.js";
import { OR, loe } from "./composerChatServiceInterface.js";
import { poe, zde } from "./composerCodeBlockService.js";
import { qX, uoe } from "./composerContextServiceTypes.js";
import { Wf } from "./composerData.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Zy, yC } from "./composerEventService.js";
import { lb, n0 } from "./composerLogService.js";
import { F1e } from "./composerModeUtils.js";
import { AA, xC } from "./composerModesServiceTypes.js";
import { WSo, hXi } from "./composerPlanServiceTypes.js";
import { FR, z5 } from "./composerUtilsServiceTypes.js";
import { Hv, rE } from "./composerViews.js";
import { Jm, ps } from "./composer_pb.js";
import { en } from "./dom_2.js";
import { Nc, gs } from "./editorGroupsService.js";
import { Ni, hn } from "./editorService.js";
import { Vr, Yi } from "./environmentService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { $w, aE } from "./filesConfigurationService.js";
import { CN, zM } from "./inlineDiffService.js";
import { Ze, _t } from "./instantiation.js";
import { QS, i0 } from "./modelConfigServiceTypes.js";
import { fu, zl } from "./pathService.js";
import { eF } from "./planFileUtils.js";
import { Kde, TVt, ott } from "./planStorageService.js";
import { Dx, mn, sa, uu } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { W_e, r8e } from "./reviewChangesService.js";
import { Vn, yn } from "./storage_2.js";
import { jS } from "./store.js";
import { nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Ku } from "./utilities_3.js";
import { b1 } from "./utils_16.js";
import { Js, zn } from "./uuid.js";
import { Jn, ci } from "./workspace.js";
import { qde } from "./xmo.js";
var gq, mF, pXi;
export { gq, mF, pXi };
var __wakaru_aG_initialized = false;
export function aG() {
if (__wakaru_aG_initialized) return;
__wakaru_aG_initialized = true;
"use strict";
x(), Ze(), Pn(), ql(), hm(), Hu(), Jm(), zd(), nl(), yC(), Xy(), rE(), Wf(), Qt(), Ni(), b1(), qs(), Js(), i0(), T2(), Ha(), bt(), Se(), Ps(), loe(), uoe(), AA(), la(), en(), Vn(), Ku(), Nc(), CN(), Vr(), zde(), r8e(), ott(), WSo(), eF(), aE(), z5(), F1e(), fu(), ci(), jS(), n0(), gq = hXi, mF = ((e)=>(e.NONE = "none", e.ACTIVE = "active", e.COMPLETE = "complete", e))(mF || {}), pXi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T, E, A, R, D, P, N){
        super(), this._composerDataService = e, this._composerEventService = t, this._composerService = n, this._composerViewsService = i, this._editorService = r, this._experimentService = s, this._instantiationService = o, this._modelConfigService = a, this._reactiveStorageService = c, this._composerContextService = l, this._analyticsService = u, this._composerModesService = h, this._storageService = p, this._editorGroupsService = g, this._inlineDiffService = f, this._composerCodeBlockService = v, this._reviewChangesService = b, this._composerChatService = y, this._planStorageService = T, this._filesConfigurationService = E, this._composerUtilsService = A, this._pathService = R, this._environmentService = D, this._workspaceContextService = P, this._composerLogService = N, this.suggestedPlans = [], this._pendingScrollToTodos = new Set, this._activeBuildComposersByPlanId = new Map, this._planScanMemo = new Map, this._onNewPlanSuggested = this._register(new ve), this.onNewPlanSuggested = this._onNewPlanSuggested.event, this._onDidPlanUpdate = this._register(new ve), this.onDidPlanUpdate = this._onDidPlanUpdate.event, this._onDidPlanStreamingStateChange = this._register(new ve), this.onDidPlanStreamingStateChange = this._onDidPlanStreamingStateChange.event, this._activePlanModelRefs = new Map, this._register(this.onDidPlanUpdate(()=>this._planScanMemo.clear())), this._register(this._planStorageService.onDidChangePlan(({ planId: F, uri: H })=>{
            this._onDidPlanUpdate.fire({
                planId: F,
                uri: H
            });
        })), this._register(this._composerEventService.onDidComposerStopGenerating(({ composerId: F, hadActiveGeneration: H })=>{
            this._discardPlanModelsForComposer(F), H && this.notifyBuilderStopped(F);
        }));
        const O = this._environmentService.isGlass ? Ct.filter(this._composerEventService.onDidFinishStreamChatForWorkspace, (F)=>F.workspaceIdentifier.id === this._workspaceContextService.getWorkspace().id) : this._composerEventService.onDidFinishStreamChat;
        this._register(O(({ composerId: F })=>{
            this.notifyBuilderStopped(F);
        })), this._register(this._composerEventService.onDidContextChange(({ composerId: F })=>{
            this._checkAndRegisterPlanReferences(F);
        }));
    }
    notifyPlanIdentityAttached(e, t) {
        this._onDidPlanUpdate.fire({
            planId: e,
            uri: t
        });
    }
    notifyPlanToolAttached(e) {
        this._planScanMemo.delete(e);
    }
    async _checkAndRegisterPlanReferences(e) {
        const t = this._composerDataService.getComposerDataIfLoaded(e);
        if (!t) return;
        let n;
        try {
            const r = await this._pathService.userHome();
            n = Nse(r);
        } catch  {}
        const i = t.context;
        if (i) {
            for (const r of [
                i.fileSelections,
                i.selections
            ])if (r) for (const s of r){
                const o = s.uri;
                if (!o) continue;
                const a = Ee.revive(o);
                if (a && qj(a, n)) try {
                    await this.registerComposerReference(a, e);
                } catch (c) {
                    this._composerLogService.warn("[ComposerPlanService] Failed to register plan reference:", c);
                }
            }
        }
    }
    markPlanBuildActive({ planId: e, composerId: t, uri: n }) {
        const i = e, r = t, s = this._activeBuildComposersByPlanId.get(i);
        s ? s.add(r) : this._activeBuildComposersByPlanId.set(i, new Set([
            r
        ])), this._onDidPlanUpdate.fire({
            planId: e,
            uri: n
        });
    }
    clearPlanBuildActive({ planId: e, composerId: t }) {
        const n = e, i = this._activeBuildComposersByPlanId.get(n);
        i && (i.delete(t), i.size === 0 && this._activeBuildComposersByPlanId.delete(n));
    }
    clearActiveBuildsForComposer(e) {
        const t = e;
        for (const [n, i] of this._activeBuildComposersByPlanId)i.delete(t), i.size === 0 && this._activeBuildComposersByPlanId.delete(n);
    }
    async notifyBuilderStopped(e) {
        const t = await this._planStorageService.getPlanEntriesBuiltBy(e);
        this.clearActiveBuildsForComposer(e);
        for (const { planId: n, uri: i } of t)this._onDidPlanUpdate.fire({
            planId: n,
            uri: i
        });
    }
    async firePlanUpdateForUri(e) {
        const t = await this._planStorageService.getRegistryEntry(e);
        t && this._onDidPlanUpdate.fire({
            planId: t.id,
            uri: t.uri
        });
    }
    setupAutoOpenReviewPaneAfterFirstEdit(e, t, n) {
        if (n === "auto" || !this._experimentService.checkFeatureGate("auto_open_review_during_plan_build", {
            disableExposureLog: !1
        })) return;
        const r = this._composerDataService.getHandleIfLoaded(e);
        if (!r) return;
        const s = this._composerCodeBlockService.getAllInlineDiffs(r).length;
        let o = !1;
        const a = async (l)=>{
            if (!(o || l <= s) && this._composerService.shouldShowAcceptRejectAll(e)) {
                o = !0;
                try {
                    for (const u of this._editorGroupsService.groups)for (const h of u.editors){
                        const p = h.resource;
                        p && p.toString() === t.toString() && await this._editorService.closeEditor({
                            editor: h,
                            groupId: u.id
                        });
                    }
                    this._analyticsService.trackEvent("review_changes.opened", {
                        entrypoint: "plan_execution_auto",
                        composer_id: e
                    }), await this._reviewChangesService.openOrUpdateReviewChangesEditor(e, void 0);
                } catch (u) {
                    this._composerLogService.warn("[ComposerPlanService] Failed to auto-open review pane:", u);
                }
            }
        }, c = this._inlineDiffService.inlineDiffs.event(()=>{
            if (o) return;
            const l = this._composerDataService.getHandleIfLoaded(e);
            if (!l) return;
            const u = l.data.composerId, g = this._inlineDiffService.inlineDiffs.nonReactive().filter((f)=>f.composerMetadata?.composerId === u).length;
            (async ()=>(await a(g), o && c.dispose()))();
        });
    }
    getPlanExecutionConfigForExecution(e) {
        if (rh(this._storageService, "planExecUseChatModel")) {
            const o = e?.data?.modelConfig ?? this._modelConfigService.getModelConfig("composer");
            return {
                modelName: o.modelName && o.modelName !== "" ? o.modelName : "default",
                maxMode: o.maxMode,
                selectedModels: o.selectedModels
            };
        }
        const n = this._modelConfigService.getModelConfig("plan-execution"), r = n.selectedModels && n.selectedModels.length > 0 || n.modelName && n.modelName !== "" && n.modelName !== "default" ? n : e?.data?.modelConfig ?? this._modelConfigService.getModelConfig("composer");
        return {
            modelName: r.modelName && r.modelName !== "" ? r.modelName : "default",
            maxMode: !!r.maxMode,
            selectedModels: r.selectedModels
        };
    }
    getPlanUriFromBubble(e, t) {
        const i = this.getPlanBubbleData(e, t)?.additionalData;
        if (i?.planUri) return bX(i.planUri);
    }
    getPlanBubbleData(e, t) {
        const n = this._composerDataService.getToolFormer(e);
        if (!n) return;
        const i = n.getBubbleData(t);
        if (i?.tool === nt.CREATE_PLAN) return i;
    }
    getMostRecentPlanBubbleId(e) {
        const t = e.data, n = uu(t.fullConversationHeadersOnly), i = n.length, r = (a, c)=>{
            for(let l = a; l >= c; l -= 1){
                const u = n[l]?.bubbleId;
                if (!u) continue;
                if (this.getPlanBubbleData(e, u)) return u;
            }
        }, s = this._planScanMemo.get(t.composerId);
        let o;
        return s !== void 0 && s.scannedLen <= i && (s.scannedLen === 0 || n[s.scannedLen - 1]?.bubbleId === s.tailBubbleId) ? o = r(i - 1, s.scannedLen) ?? s.planBubbleId : o = r(i - 1, 0), this._planScanMemo.set(t.composerId, {
            scannedLen: i,
            tailBubbleId: n[i - 1]?.bubbleId,
            planBubbleId: o
        }), o;
    }
    hasPendingPlan(e) {
        const t = this.getMostRecentPlanBubbleId(e);
        if (!t) return !1;
        const n = this._composerDataService.getComposerData(e);
        if (n) {
            let o = !1;
            for (const a of uu(n.fullConversationHeadersOnly)){
                if (a.bubbleId === t) {
                    o = !0;
                    continue;
                }
                if (o && a.type === Tr.HUMAN) return !1;
            }
        }
        const s = this.getPlanBubbleData(e, t)?.additionalData?.planUri;
        if (!s) return !1;
        try {
            const o = bX(s), a = this._planStorageService.getRegistryEntrySync(o);
            return a ? Object.keys(a.builtBy).length === 0 : !1;
        } catch  {
            return !1;
        }
    }
    async acceptPlan(e, t, n, i, r) {
        const s = e.data.composerId, o = e.data, { unifiedMode: a, skipSubmission: c } = r ?? {}, l = qde(a === "background" ? "agent" : a), u = o.currentBubbleId;
        u && (await this._composerUtilsService.removeMessagesAfterBubble(e, u), this._composerDataService.updateComposerData(e, {
            currentBubbleId: void 0,
            editingBubbleId: void 0
        }));
        const h = await this._loadPlanExecutionData(t);
        if (!h) return;
        const { fullPlanContent: p, nonCompletedTodos: g, planContent: f, planName: v, planTodos: b } = h, y = o.modelConfig?.modelName, T = this.getPlanExecutionConfigForExecution(e), E = a === "background", A = E ? "cloud" : "local", R = (()=>{
            if (!n) return;
            const X = this._composerDataService.getComposerBubble(e, n);
            if (!(!X || X.type !== Tr.HUMAN)) return X.isPlanExecution === !0 ? n : void 0;
        })(), D = this._composerDataService.getToolFormer(e)?.pendingDecisions().pendingDecisions ?? {}, P = Object.values(D).some((X)=>X.blocking && X.clientSideTool === nt.ASK_QUESTION);
        this._analyticsService.trackEvent("composer.plan_mode.plan_accepted", {
            composer_id: s,
            model: y,
            plan_execution_model: T.modelName,
            plan_execution_max_mode: T.maxMode,
            execution_target: A,
            todos_selected: b.length,
            source: i ?? "manual",
            invocationID: o.latestChatGenerationUUID
        });
        const N = a === "multitask" ? "multitask" : "agent", O = M4e(f, v), F = this._buildPlanExecutionPrompt(O, E);
        o.editingBubbleId && this._composerDataService.updateComposerDataSetStore(e, (X)=>X("editingBubbleId", void 0));
        const H = rh(this._storageService, "planExecUseChatModel"), $ = !H, W = this.getPlanExecutionConfigForExecution(e);
        if ($ && (N === "agent" || N === "multitask") && (this._composerDataService.updateComposerData(e, {
            unifiedMode: N
        }), this._modelConfigService.setModelConfigForComposer(e, W)), E) {
            const X = this._modelConfigService.getModelConfig("plan-execution"), Y = H ? e.data?.modelConfig ?? this._modelConfigService.getModelConfig("composer") : X;
            this._modelConfigService.setModelConfig("background-composer", {
                modelName: Y.modelName && Y.modelName !== "" ? Y.modelName : "default",
                maxMode: !!Y.maxMode,
                selectedModels: Y.selectedModels
            });
        }
        this._composerDataService.updateComposerData(e, {
            unifiedMode: N,
            pendingBackgroundAgent: E
        });
        let G;
        const q = ()=>{
            G && (this.clearPlanBuildActive({
                planId: G,
                composerId: s
            }), G = void 0, this._planStorageService.unregisterBuild(t, s).catch((X)=>{
                this._composerLogService.warn("[ComposerPlanService] Failed to unregister build:", X);
            }).finally(()=>{
                this.firePlanUpdateForUri(t);
            }));
        };
        try {
            const X = await this._planStorageService.getRegistryEntry(t), Y = g.map((Z)=>Z.id);
            X && (G = X.id, this.markPlanBuildActive({
                planId: X.id,
                composerId: s,
                uri: t
            })), await this._planStorageService.registerBuild(t, s, Y);
        } catch (X) {
            q(), this._composerLogService.warn("[ComposerPlanService] Failed to register build:", X);
        }
        this._composerDataService.updateComposerData(e, {
            todos: g
        });
        const z = ry(f).length;
        if (this._composerContextService.addContext({
            composerHandle: e,
            contextType: "selections",
            value: {
                uri: t,
                text: f,
                rawText: f,
                range: {
                    selectionStartLineNumber: 1,
                    selectionStartColumn: 1,
                    positionLineNumber: z,
                    positionColumn: 1
                },
                addedWithoutMention: !0
            },
            shouldShowPreview: !1
        }), E) try {
            await this._composerChatService.appendQueuedHumanMessage(e, F, {
                richText: F
            }), this._composerViewsService.triggerScrollToBottom(e);
            const X = this._composerDataService.getLastHumanBubble(e);
            if (!X) {
                q(), this._composerLogService.warn("[ComposerPlanService] Missing plan execution bubble for cloud submit"), this._composerDataService.updateComposerData(e, {
                    pendingBackgroundAgent: !1
                });
                return;
            }
            const Y = X.bubbleId;
            this._composerDataService.updateComposerBubble(e, Y, {
                isPlanExecution: !0,
                planUri: t.toString(),
                planTitle: O
            });
            const Z = new x1({
                action: {
                    case: "executePlanAction",
                    value: new Hyt({
                        planFileUri: t.toString(),
                        planFileContent: p,
                        executionMode: l
                    })
                }
            }), K = this._composerDataService.getComposerCapability(e, ps.BACKGROUND_COMPOSER);
            if (!K) {
                q(), this._composerLogService.warn("[ComposerPlanService] Background composer capability unavailable for cloud plan execution"), this._composerDataService.updateComposerData(e, {
                    pendingBackgroundAgent: !1
                });
                return;
            }
            await K.submitConversationActionToBackgroundComposer({
                composerHandle: e,
                humanBubbleId: Y,
                conversationAction: Z,
                planFollowupType: Mlo.EXECUTE
            }), await this.firePlanUpdateForUri(t), this._composerViewsService.focus(e.data.composerId, !0), this.setupAutoOpenReviewPaneAfterFirstEdit(s, t, i);
            return;
        } catch (X) {
            q(), this._composerLogService.error("[ComposerPlanService] Cloud plan execution failed:", X), this._composerDataService.updateComposerData(e, {
                pendingBackgroundAgent: !1
            });
            return;
        }
        if (c) {
            await this.firePlanUpdateForUri(t), this._composerViewsService.focus(e.data.composerId, !0), this.setupAutoOpenReviewPaneAfterFirstEdit(s, t, i);
            return;
        }
        try {
            if (o.isNAL && o.conversationActionManager && !P) {
                const Z = new x1({
                    action: {
                        case: "executePlanAction",
                        value: new Hyt({
                            planFileUri: t.toString(),
                            planFileContent: p,
                            executionMode: l,
                            kickoffMessageId: R
                        })
                    }
                });
                await o.conversationActionManager.submitConversationAction(Z), await this.firePlanUpdateForUri(t), this._composerViewsService.triggerScrollToBottom(e), this._composerViewsService.focus(e.data.composerId, !0), this.setupAutoOpenReviewPaneAfterFirstEdit(s, t, i);
                return;
            }
            const X = this.getPlanExecutionConfigForExecution(e);
            R && this._composerDataService.updateComposerBubble(e, R, {
                isPlanExecution: !0,
                planUri: t.toString(),
                planTitle: O
            });
            const Y = new x1({
                action: {
                    case: "executePlanAction",
                    value: new Hyt({
                        planFileUri: t.toString(),
                        planFileContent: p,
                        executionMode: l,
                        kickoffMessageId: R
                    })
                }
            });
            await this._composerChatService.submitChatMaybeAbortCurrent(e.data.composerId, F, {
                isPlanExecution: !0,
                modelOverride: X.modelName?.split(",")[0],
                planUri: t.toString(),
                planTitle: O,
                bubbleId: R,
                skipClearInput: !0,
                conversationActionOverride: Y
            }), await this.firePlanUpdateForUri(t), this._composerViewsService.focus(e.data.composerId, !0), this.setupAutoOpenReviewPaneAfterFirstEdit(s, t, i);
        } catch (X) {
            throw q(), X;
        }
    }
    async acceptPlanByUri(e, t) {
        const n = await this._planStorageService.getRegistryEntry(e);
        if (!n) {
            this._composerLogService.warn("[ComposerPlanService] No registry entry found for plan URI:", e.toString());
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
        }), await this.acceptPlan(r, e, s, "manual", t);
    }
    async acceptPlanById(e, t) {
        const n = await this.getRegistryEntryById(e);
        n && await this.acceptPlanByUri(n.uri, t);
    }
    async prepareCloudPlanBuildTransfer(e, t, n) {
        const i = e.data, r = await this._planStorageService.getRegistryEntry(t);
        if (!r) return;
        const s = await this._loadPlanExecutionData(t);
        if (!s) return;
        const { fullPlanContent: o, nonCompletedTodos: a, planContent: c, planName: l } = s, u = M4e(c, l), h = this._buildPlanExecutionPrompt(u, !0), p = this._getCloudPlanExecutionModelConfig(e), g = this.getPlanExecutionConfigForExecution(e);
        return this._analyticsService.trackEvent("composer.plan_mode.plan_accepted", {
            composer_id: i.composerId,
            model: i.modelConfig?.modelName,
            plan_execution_model: g.modelName,
            plan_execution_max_mode: g.maxMode,
            execution_target: "cloud",
            todos_selected: s.planTodos.length,
            source: n ?? "manual",
            invocationID: i.latestChatGenerationUUID
        }), {
            conversationAction: new x1({
                action: {
                    case: "executePlanAction",
                    value: new Hyt({
                        planId: r.id,
                        planFilePath: hM(t, !0, t.scheme !== "file"),
                        planFileUri: t.toString(),
                        planFileContent: o,
                        executionMode: UE.AGENT
                    })
                }
            }),
            modelConfig: p,
            planTitle: u
        };
    }
    async _loadPlanExecutionData(e) {
        try {
            const t = await this._planStorageService.loadPlanByUri(e), n = t.metadata.todos ?? [];
            return {
                fullPlanContent: o8e(t.metadata) + `

` + t.body,
                nonCompletedTodos: n.filter((i)=>i.status !== "completed" && i.status !== "cancelled"),
                planContent: t.body,
                planName: t.metadata.name,
                planTodos: n
            };
        } catch (t) {
            this._composerLogService.warn("[ComposerPlanService] Failed to load plan content from file:", t);
            return;
        }
    }
    _buildPlanExecutionPrompt(e, t) {
        return (t ? e + `

` : "") + `Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.`;
    }
    _getCloudPlanExecutionModelConfig(e) {
        const t = rh(this._storageService, "planExecUseChatModel"), n = this._modelConfigService.getModelConfig("plan-execution");
        return t ? e.data?.modelConfig ?? this._modelConfigService.getModelConfig("composer") : n;
    }
    isSpecModeEnabled() {
        return !1;
    }
    async openPlanInEditor(e, t) {
        try {
            const n = t?.composerId, i = n ? this._composerDataService.selectedComposerId === n : !1, r = t?.stealFocus ?? !1;
            t?.scrollToTodos && i && this._pendingScrollToTodos.add(e.toString()), await this._editorService.openEditor({
                resource: e,
                options: {
                    pinned: i,
                    preserveFocus: !r
                }
            }), t?.scrollToTodos && i && setTimeout(()=>{
                const s = new CustomEvent("markdownPlanEditor:scrollToTodos", {
                    detail: {
                        uri: e.toString()
                    }
                });
                sa().dispatchEvent(s);
            }, 100);
        } catch (n) {
            this._composerLogService.error("Failed to open plan in editor:", n);
        }
    }
    consumePendingScrollToTodos(e) {
        const t = e.toString();
        return this._pendingScrollToTodos.has(t) ? (this._pendingScrollToTodos.delete(t), !0) : !1;
    }
    getPlanTitle(e) {
        if (!e) return "Plan";
        let t = e.split(`
`)[0]?.trim();
        return t ? (t = t.replace(/^#+\s*/, ""), t = t.replace(/\*\*([^*]+)\*\*/g, "$1"), t = t.replace(/\*([^*]+)\*/g, "$1"), t = t.replace(/__([^_]+)__/g, "$1"), t = t.replace(/_([^_]+)_/g, "$1"), t = t.replace(/`([^`]+)`/g, "$1"), t = t.replace(/~~([^~]+)~~/g, "$1"), t = t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"), t = t.replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1"), t.trim() || "Plan") : "Plan";
    }
    async createSubComposerFromPlan(e, t) {
        try {
            const n = await this._composerDataService.getComposerHandleById(e);
            if (!n) {
                this._composerLogService.error("[composer] Parent composer not found:", e);
                return;
            }
            const i = zn(), r = I$t(n.data.gitWorktree, O5(this._modelConfigService.getModelConfig("composer"), i));
            r.plan = void 0;
            const s = G0e(this._instantiationService, i), o = n.data, c = {
                originalPlan: o.plan?.content || ""
            };
            if (r.subagentInfo = {
                subagentType: ade.SPEC,
                parentComposerId: e,
                conversationLengthAtSpawn: 0,
                additionalData: c
            }, r.capabilities = s, r.unifiedMode = t.unifiedMode ?? o.unifiedMode, o.context && (r.context = Dx(o.context)), await this._composerDataService.appendSubComposer(r), this._composerDataService.updateComposerDataSetStore(n, (l)=>{
                l("subComposerIds", (u)=>[
                        ...u,
                        i
                    ]), t.stepId && l("plan", (u)=>{
                    if (!u || !u.steps) return u;
                    const h = u.steps.map((p)=>p.id === t.stepId ? {
                            ...p,
                            subComposerId: i
                        } : p);
                    return {
                        ...u,
                        steps: h
                    };
                });
            }), t.stepId && !t.query) {
                const u = n.data.plan?.steps?.find((h)=>h.id === t.stepId);
                u && (t.query = u.instructions);
            }
            if (t.query === void 0) throw new Error("No query provided");
            return await this._composerChatService.submitChatMaybeAbortCurrent(i, t.query), i;
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
    addSuggestedPlan(e) {
        this.suggestedPlans = this.suggestedPlans.filter((t)=>t.content !== e.content), this.suggestedPlans = [
            e,
            ...this.suggestedPlans
        ], this.suggestedPlans = this.suggestedPlans.slice(0, 3), this._onNewPlanSuggested.fire();
    }
    async createPlanFile(e, t, n, i, r, s, o) {
        return (await this._planStorageService.createPlanForComposer({
            composerId: e,
            name: t,
            overview: n,
            todos: i,
            body: r,
            isProject: s,
            phases: o
        })).fileUri;
    }
    async updatePlanByUri(e, t, n, i, r, s, o, a) {
        const c = {
            overview: n,
            todos: i,
            body: r
        };
        t !== void 0 && (c.name = t), o !== void 0 && (c.isProject = o), a !== void 0 && (c.phases = a), await this._planStorageService.updatePlanFull(e, c, s);
    }
    async movePlanToWorkspace(e, t) {
        if (this.isPlanBeingStreamed(e)) return e;
        let n = !1, i;
        const r = [];
        for (const o of this._editorGroupsService.groups)for (const a of o.editors){
            const c = a.resource;
            c && c.fsPath === e.fsPath && (n = !0, i = {
                pinned: o.isPinned(a),
                preserveFocus: !1
            }, r.push({
                editor: a,
                groupId: o.id
            }));
        }
        for (const o of r)await this._editorService.closeEditor(o);
        const s = await this._planStorageService.movePlanToWorkspace(e, t);
        return n && await this._editorService.openEditor({
            resource: s,
            options: {
                pinned: i?.pinned ?? !0,
                preserveFocus: i?.preserveFocus ?? !1
            }
        }), s;
    }
    async updatePlanFileContent(e, t, n) {
        await this._planStorageService.updatePlanContent(e, t, n);
    }
    async getPlanByUri(e) {
        const t = await this._planStorageService.loadPlanByUri(e);
        return {
            name: t.metadata.name,
            overview: t.metadata.overview,
            todos: t.metadata.todos,
            body: t.body
        };
    }
    async getPlanById(e) {
        const t = await this._planStorageService.loadPlanById(e);
        if (t) return {
            name: t.metadata.name,
            overview: t.metadata.overview,
            todos: t.metadata.todos,
            body: t.body
        };
    }
    async registerComposerReference(e, t) {
        let n = await this._planStorageService.getRegistryEntry(e);
        if (!n) {
            n = await this._planStorageService.registerExistingPlan(e, t);
            return;
        }
        n.referencedBy.includes(t) || (n.referencedBy.push(t), await this._planStorageService.updatePlanMetadata(e, {}, t));
    }
    async importPlanFileForComposer(e, t, n) {
        return (await this._planStorageService.importPlanFileForComposer(e, t, n)).uri;
    }
    async getRegistryEntry(e) {
        return this._planStorageService.getRegistryEntry(e);
    }
    async getRegistryEntryById(e) {
        return this._planStorageService.getRegistryEntry(e);
    }
    async getExistingPlanUri(e) {
        return (await this._planStorageService.getPlanForComposer(e))?.uri;
    }
    async getLatestPlanEntryForComposer(e) {
        return this._planStorageService.getPlanForComposer(e);
    }
    async getPlanEntriesForComposer(e) {
        return this._planStorageService.getPlanEntriesReferencedByComposer(e);
    }
    async getOrCreatePlanFile(e, t, n, i, r, s, o) {
        const a = await this._planStorageService.getPlanForComposer(e);
        if (a) {
            const l = {
                overview: n,
                todos: i,
                body: r,
                isProject: s,
                phases: o
            };
            return t !== void 0 && (l.name = t), await this._planStorageService.updatePlanFull(a.id, l, e), (await this._planStorageService.getPlanForComposer(e))?.uri ?? a.uri;
        }
        const c = t ?? M4e(r);
        return this.createPlanFile(e, c, n, i, r, s, o);
    }
    async syncTodoUpdatesToFile(e, t, n) {
        if (t.size === 0) return;
        const i = n ?? await this.getExistingPlanUri(e);
        if (i) try {
            const s = (await this._planStorageService.loadPlanByUri(i)).metadata.todos ?? [];
            if (s.length === 0) return;
            let o = !1;
            const a = s.map((c)=>{
                const l = t.get(c.id);
                return l !== void 0 && l !== c.status ? (o = !0, {
                    ...c,
                    status: l
                }) : c;
            });
            if (!o) return;
            await this._planStorageService.updatePlanMetadata(i, {
                todos: a
            }, e);
        } catch (r) {
            this._composerLogService.error("[ComposerPlanService] Failed to sync todo updates to file:", r);
        }
    }
    async dereferencePlansCreatedByDeletedBubbles(e, t) {
        await this._planStorageService.dereferencePlansCreatedByComposer(e, t);
    }
    async getPlanDerivedStatus(e) {
        const t = await this._planStorageService.getRegistryEntry(e);
        if (!t) return Kde.PENDING;
        const i = (await this._planStorageService.loadPlanByUri(e)).metadata.todos ?? [];
        return this._planStorageService.getPlanStatus(t, i);
    }
    async getPlanDerivedStatusById(e) {
        const t = await this.getRegistryEntryById(e);
        return t ? this.getPlanDerivedStatus(t.uri) : Kde.PENDING;
    }
    async getPlanBuildStatus(e) {
        const t = await this._planStorageService.getRegistryEntry(e);
        if (!t) return "none";
        const i = (await this._planStorageService.loadPlanByUri(e)).metadata.todos ?? [], r = this._planStorageService.getPlanStatus(t, i);
        if (r === Kde.PENDING) return "none";
        const s = Object.keys(t.builtBy), o = t.id;
        let a = this._activeBuildComposersByPlanId.get(o);
        if (a) {
            for (const v of Array.from(a)){
                const b = this._composerDataService.getComposerDataIfLoaded(v);
                b && b.status !== "generating" && a.delete(v);
            }
            a.size === 0 && (this._activeBuildComposersByPlanId.delete(o), a = void 0);
        }
        const c = a !== void 0 && a.size > 0, l = s.some((v)=>{
            try {
                return this._composerDataService.getComposerDataIfLoaded(v)?.status === "generating";
            } catch  {
                return this._composerLogService.warn("[composerPlanService] composer data unavailable for registered builder"), !1;
            }
        }), u = s.map((v)=>{
            const b = t.builtBy[v] ?? [], y = this._composerDataService.getComposerDataIfLoaded(v), T = y?.todos ?? [], E = new Map(T.map((D)=>[
                    D.id,
                    D.status
                ])), A = b.map((D)=>E.get(D)), R = b.length > 0 && A.every((D)=>D === "completed" || D === "cancelled");
            return {
                composerId: v,
                composerStatus: y?.status,
                assignedTodoIds: b,
                composerTodoIds: T.map((D)=>D.id),
                assignedStatuses: A,
                allAssignedDone: R
            };
        }), h = new Set(s.flatMap((v)=>t.builtBy[v] ?? [])), p = i.some((v)=>(v.status === "pending" || v.status === "in_progress") && !h.has(v.id)), g = u.length > 0 && !p && u.every((v)=>v.allAssignedDone);
        let f;
        return r === Kde.IN_PROGRESS ? c || l ? f = "active" : g ? f = "complete" : f = "none" : i.length === 0 ? f = c || l ? "active" : "none" : f = "complete", f;
    }
    async getPlanBuildStatusById(e) {
        const t = await this.getRegistryEntryById(e);
        return t ? this.getPlanBuildStatus(t.uri) : "none";
    }
    isPlanPendingByUri(e) {
        const t = this._planStorageService.getRegistryEntrySync(e);
        return t ? Object.keys(t.builtBy).length === 0 : !1;
    }
    async resolveCurrentUri(e) {
        return this._planStorageService.resolveCurrentUri(e);
    }
    async buildSelectedTodosInNewAgent(e, t) {
        if (t.length === 0) {
            this._composerLogService.warn("[ComposerPlanService] No todos selected for building");
            return;
        }
        let n;
        const i = ()=>{
            n && (this.clearPlanBuildActive(n), n = void 0, this.firePlanUpdateForUri(e));
        };
        try {
            const r = await this._planStorageService.getRegistryEntry(e);
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
            const c = a.composerId, l = this._composerDataService.getHandleIfLoaded(c);
            if (!l) {
                this._composerLogService.error("[ComposerPlanService] Failed to get composer handle");
                return;
            }
            this._modelConfigService.setModelConfigForComposer(l, o, "plan-execution"), this._composerDataService.updateComposerData(l, {
                todos: t
            });
            let u, h;
            try {
                const T = await this._planStorageService.loadPlanByUri(e);
                h = T.metadata.name, u = T.body;
            } catch (T) {
                this._composerLogService.warn("[ComposerPlanService] Failed to load plan content:", T), u = "";
            }
            const g = u.split(`
`).length;
            this._composerContextService.addContext({
                composerHandle: l,
                contextType: "selections",
                value: {
                    uri: e,
                    text: u,
                    rawText: u,
                    range: {
                        selectionStartLineNumber: 1,
                        selectionStartColumn: 1,
                        positionLineNumber: g,
                        positionColumn: 1
                    }
                },
                shouldShowPreview: !1
            }), await this.registerComposerReference(e, c);
            const f = t.map((T)=>T.id).join(", "), v = t.map((T, E)=>`${E + 1}. [${T.id}] ${T.content}`).join(`
`), b = M4e(u, h), y = `Implement the following to-dos from the plan (the plan is attached for your reference). Do NOT edit the plan file itself.

You have been assigned the following ${t.length} to-do(s) with IDs: ${f}

${v}

These to-dos have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the assigned to-dos.`;
            try {
                const T = await this._planStorageService.getRegistryEntry(e);
                T && (n = {
                    planId: T.id,
                    composerId: c
                }, this.markPlanBuildActive({
                    ...n,
                    uri: e
                }));
                const E = t.map((A)=>A.id);
                await this._planStorageService.registerBuild(e, c, E);
            } catch (T) {
                i(), this._composerLogService.warn("[ComposerPlanService] Failed to register build:", T);
            }
            return await this._composerChatService.submitChatMaybeAbortCurrent(c, y, {
                isPlanExecution: !0,
                modelOverride: o.modelName?.split(",")[0],
                planUri: e.toString(),
                planTitle: b
            }), this._composerViewsService.focus(c, !0), c;
        } catch (r) {
            i(), this._composerLogService.error("[ComposerPlanService] Error building selected todos in new agent:", r);
            return;
        }
    }
    _releasePlanModelRefs(e) {
        const t = [], n = [];
        for (const i of e){
            const r = this._activePlanModelRefs.get(i);
            r && (this._activePlanModelRefs.delete(i), t.push(r.ref, r.autoSaveDisabled), n.push(r.uri));
        }
        return Pk(...t), n;
    }
    _discardPlanModelByKey(e) {
        return this._releasePlanModelRefs([
            e
        ]).length > 0;
    }
    _isComposerGenerationOver(e) {
        const t = this._composerDataService.getComposerDataIfLoaded(e);
        return t !== void 0 && t.chatGenerationUUID === void 0;
    }
    _discardPlanModelsForComposer(e) {
        const t = [];
        for (const [n, i] of this._activePlanModelRefs)i.composerId === e && t.push(n);
        if (t.length !== 0) for (const n of this._releasePlanModelRefs(t))this._onDidPlanStreamingStateChange.fire(n);
    }
    async updatePlanByUriDirty(e, t, n, i, r, s, o, a) {
        const c = {
            overview: n,
            todos: i,
            body: r
        };
        t !== void 0 && (c.name = t), o !== void 0 && (c.isProject = o), a !== void 0 && (c.phases = a);
        const l = e.toString(), u = this._activePlanModelRefs.get(l), h = u?.autoSaveDisabled ?? this._filesConfigurationService.disableAutoSave(e);
        let p;
        try {
            p = await this._planStorageService.updatePlanModelDirty(e, c, s);
        } catch (b) {
            throw u || h.dispose(), b;
        }
        const g = this._activePlanModelRefs.get(l), f = this._isComposerGenerationOver(s);
        if (f || g !== u) {
            Pk(p, u ? void 0 : h), f && this.discardPlanModel(e);
            return;
        }
        const v = !u;
        this._activePlanModelRefs.set(l, {
            uri: e,
            composerId: s,
            ref: p,
            autoSaveDisabled: h
        }), u?.ref.dispose(), v && this._onDidPlanStreamingStateChange.fire(e);
    }
    async savePlanModel(e) {
        const t = e.toString(), n = this._activePlanModelRefs.get(t);
        n && (await this._planStorageService.savePlanModel(e), this._activePlanModelRefs.get(t) === n && this._discardPlanModelByKey(t) && this._onDidPlanStreamingStateChange.fire(e));
    }
    async savePlanById(e) {
        const t = await this.getRegistryEntryById(e);
        t && await this.savePlanModel(t.uri);
    }
    discardPlanModel(e) {
        this._discardPlanModelByKey(e.toString()) && this._onDidPlanStreamingStateChange.fire(e);
    }
    isPlanBeingStreamed(e) {
        const t = e.toString();
        return this._activePlanModelRefs.has(t);
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
}, pXi = ie([
    C(0, Zs),
    C(1, Zy),
    C(2, Hh),
    C(3, Hv),
    C(4, hn),
    C(5, Kr),
    C(6, _t),
    C(7, QS),
    C(8, Do),
    C(9, qX),
    C(10, ca),
    C(11, xC),
    C(12, yn),
    C(13, gs),
    C(14, zM),
    C(15, poe),
    C(16, W_e),
    C(17, OR),
    C(18, TVt),
    C(19, $w),
    C(20, FR),
    C(21, zl),
    C(22, Yi),
    C(23, Jn),
    C(24, lb)
], pXi), mn(gq, pXi, 1);

}
