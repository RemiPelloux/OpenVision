import { $Ti, ATt, Ybe, Yil, mng, png, qTi, ssl } from "./Aeg.js";
import { EDw, RDw, VBl, xDw } from "./BA.js";
import { Ec, Nt, Qe, Vh, da } from "./Iwo.js";
import { S$, T2 } from "./Sol.js";
import { Ezt } from "./agentQuestionnaireActions.js";
import { MI, d5e, ju, t0 } from "./agent_pb.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { qn } from "./async.js";
import { bs, sd } from "./chat_pb.js";
import { nr, rs } from "./commands.js";
import { sie, y6 } from "./composerCapabilities.js";
import { KBl } from "./composerCapabilityDecorators.js";
import { $5a, USi } from "./composerCapabilityMappings.js";
import { UJ } from "./composerChatService.js";
import { l0 } from "./composerChatServiceInterface.js";
import { Hqr, J_, uv } from "./composerData.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { iI, w1 } from "./composerLogService.js";
import { HPe } from "./composerModeUtils.js";
import { uk, xE } from "./composerModesServiceTypes.js";
import { I6, Y4 } from "./composerPlanService.js";
import { WB, YM } from "./composerUtilsServiceTypes.js";
import { mo, tf } from "./composer_pb.js";
import { Hi, Rr } from "./contextkey.js";
import { pat } from "./conversationBodyAccess.js";
import { xze } from "./conversationHeaderQueries.js";
import { a0 } from "./cursorRules.js";
import { UCe, Yqm, pis } from "./gYa.js";
import { B5a, D0t, O6e, ozr } from "./ipa.js";
import { Kp, Ph } from "./language.js";
import { G4e, Nze } from "./pendingApprovalRegistry.js";
import { AB } from "./planFileUtils.js";
import { Tzt } from "./questionnaireDecision.js";
import { Axn } from "./questionnaireUtils.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { azr } from "./serializeToolformerBubbleData.js";
import { v1 } from "./store.js";
import { Cm, wh } from "./structuredLog.js";
import { ADw } from "./todoMergeUtils.js";
import { WJ, fV } from "./toolCallHumanReviewService.js";
import { Cv, rie } from "./toolCallHumanReviewTypes.js";
import { Knl } from "./toolFormerDataMergeUtils.js";
import { A6f, d4l } from "./toolFormerDecisionTimeouts.js";
import { IDw } from "./toolFormerPendingDecisionUtils.js";
import { B3, Ct, Hde, O$e, Pu, T4t, yM } from "./tools_pb.js";
import { Mde, __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { Hae } from "./yBp.js";
import { Qm, Wu, gA, ks, pi, vt, y3o } from "./ze.js";
var ljf, YBl, XBl, rNn;
export { XBl, YBl, ljf, rNn };
var __wakaru_ZBl_initialized = false;
export function ZBl() {
if (__wakaru_ZBl_initialized) return;
__wakaru_ZBl_initialized = true;
"use strict";
E(), pi(), v1(), ju(), sd(), tf(), Pu(), qn(), Qe(), Kp(), rs(), Hi(), el(), Sr(), Cm(), a0(), __(), uv(), S$(), y6(), KBl(), USi(), UJ(), uv(), Pl(), HPe(), xE(), WB(), I6(), WJ(), AB(), Nze(), Ss(), IDw(), azr(), pat(), xze(), ADw(), Knl(), Tzt(), Axn(), Ezt(), A6f(), iI(), ljf = 15e3, YBl = 7, XBl = /^[A-Za-z0-9]{7}$/, rNn = class extends sie {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _){
        super(t, e, n), this.workspaceContextService = i, this.languageService = r, this.composerModesService = s, this.composerUtilsService = o, this.composerChatService = a, this.contextKeyService = l, this.commandService = c, this.toolCallHumanReviewService = u, this.composerPlanService = d, this.pendingApprovalRegistry = h, this._structuredLogService = p, this.analyticsService = g, this.reactiveStorageService = f, this._composerLogService = _, this.priority = 1, this.type = mo.TOOL_FORMER, this.name = "Tool Former", this.schema = $5a, this._disposableStore = new Nt, this.switchModeTimeouts = this._register(new da), this.mcpAuthTimeouts = this._register(new da), this.toolCategories = new Map([
            [
                "file_modification",
                new Set([
                    Ct.EDIT_FILE,
                    Ct.EDIT_FILE_V2
                ])
            ]
        ]), this._toolCallIdToBubbleId = new Map, [this.pendingDecisions, this.setPendingDecisions] = O6e({
            userInteractionBubbleIds: [],
            pendingDecisions: {}
        }), [this.shouldShowCancelAndResume, this.setShouldShowCancelAndResume] = O6e(!1), [this.isCurrentlyRunningTerminalInForeground, this.setIsCurrentlyRunningTerminalInForeground] = O6e(!1), this._isBlockingUserDecision = gA((b)=>{
            this._disposableStore.add({
                dispose: b
            });
            const y = vt(()=>{
                const S = this.pendingDecisions(), k = S.userInteractionBubbleIds;
                return k.length === 0 ? !1 : k.some((C)=>S.pendingDecisions[C]?.blocking);
            });
            return ()=>this._disposableStore.isDisposed ? !1 : y();
        });
    }
    isMcpAuthBlockingEnabled() {
        return this.reactiveStorageService.applicationUserPersistentStorage.composerState.mcpAuthBlocking ?? !0;
    }
    getToolCategory(t) {
        for (const [e, n] of this.toolCategories)if (n.has(t)) return e;
    }
    areToolsSimilar(t, e) {
        if (t === e) return !0;
        const n = this.getToolCategory(t), i = this.getToolCategory(e);
        return n !== void 0 && n === i;
    }
    silentOnBeforeSubmitChat(t) {
        return !0;
    }
    async onBeforeSubmitChat(t) {
        const e = this.composerDataService.getComposerData(this.getComposerHandle());
        if (!e) return;
        const n = t.submitChatProps.extra?.isResume;
        this.setLoadingToolsToCancelled({
            preservePendingApprovals: n
        }), this.clearShowCancelAndResume();
        const i = this.composerDataService.getLastBubble(this.getComposerHandle()), r = this.pendingDecisions(), s = t.submitChatProps.extra?.conversationActionOverride, o = this.takeAskQuestionIdsSkippedForInFlightSubmit(), a = !n && !s, l = a && o ? [
            ...o
        ] : [];
        if (!n) {
            const h = this.collectBlockingAskQuestionToolCallIds({
                rejectOtherBlocking: !0
            });
            (!a || o === void 0) && l.push(...h);
        }
        const c = !e.createdFromBackgroundAgent?.bcId;
        if (!n && o === void 0 && !s && c) for (const h of this.getOrphanedPendingAskQuestionToolCallIds())this.rejectToolCall(h, {
            skipReason: "user"
        });
        if (l.length > 0) {
            const { AskQuestionResult_Answer: h } = await Promise.resolve().then(()=>(Pu(), y3o));
            for (const p of l){
                const g = this.getBubbleIdByToolCallId(p), f = g ? this.getBubbleData(g) : void 0;
                let _ = f?.tool === Ct.ASK_QUESTION && f.result && Ybe(f.result) ? f.result : void 0;
                if (s && !_ && g) {
                    const b = this.getBubbleData(g), y = b?.additionalData && "currentSelections" in b.additionalData ? b.additionalData.currentSelections : void 0, S = b?.params && "questions" in b.params ? b.params.questions : [];
                    if (S.length > 0) {
                        const k = S.map((T)=>new h({
                                questionId: T.id,
                                selectedOptionIds: y?.[T.id] ?? []
                            })), C = new Hde({
                            answers: k
                        });
                        if (Ybe(C)) {
                            _ = C;
                            const T = this.getBubbleData(g)?.additionalData || {};
                            this.setBubbleData(g, {
                                result: _,
                                additionalData: {
                                    ...T,
                                    status: "submitted",
                                    currentSelections: y ?? {}
                                }
                            });
                        }
                    }
                }
                if (_ || !s) {
                    if (!g) {
                        this._structuredLogService.warn("composer", "Could not find bubbleId for questionnaire tool call", {
                            toolCallId: p
                        }), this.rejectToolCall(p);
                        continue;
                    }
                    const b = this.getBubbleData(g);
                    if (!b) {
                        this._structuredLogService.warn("composer", "Could not find bubble data for questionnaire tool call", {
                            bubbleId: g
                        }), this.rejectToolCall(p);
                        continue;
                    }
                    if (s && _) {
                        const y = new B3({
                            tool: Ct.ASK_QUESTION,
                            toolCallId: p,
                            toolIndex: b.toolIndex ?? 0,
                            modelCallId: b.modelCallId ?? p,
                            result: {
                                case: "askQuestionResult",
                                value: _
                            }
                        });
                        this.acceptToolCall(p), this.handleToolResult(y, p, !0);
                    }
                    if (!s) {
                        const S = b.params?.runAsync ?? !1;
                        if (e.conversationActionManager && !S) {
                            const k = t.submitChatProps.text;
                            if (k && k.trim().length > 0) {
                                const C = new MI({
                                    action: {
                                        case: "userMessageAction",
                                        value: new d5e({
                                            userMessage: new t0({
                                                text: k,
                                                richText: t.submitChatProps.extra?.richText,
                                                messageId: t.humanBubbleId,
                                                mode: UCe(e.unifiedMode)
                                            }),
                                            interruptedPendingToolCallResolutions: this.composerChatService.consumePendingInterruptedToolCallResolutions(e.composerId)
                                        })
                                    }
                                });
                                let T = !1;
                                const I = (M)=>{
                                    T || (T = !0, this._structuredLogService.error("composer", "[ToolFormer] Failed to submit ask_question interrupt follow-up", M instanceof Error ? M : new Error(String(M)), {
                                        composerId: e.composerId,
                                        toolCallId: p,
                                        messageId: t.humanBubbleId,
                                        actionCase: C.action.case
                                    }), this.composerDataService.updateComposerDataSetStore(this.getComposerHandle(), (O)=>O("status", "aborted")));
                                }, A = e.conversationActionManager.submitConversationAction(C);
                                return A.catch(I).finally(()=>{
                                    for (const M of l)this.rejectToolCall(M, {
                                        skipReason: "user"
                                    });
                                }), await Vh(A.then(()=>!1, (M)=>(I(M), !0)), 0) ? !1 : (this.composerDataService.updateComposerDataSetStore(this.getComposerHandle(), (M)=>M("status", "generating")), !0);
                            }
                        }
                        this.rejectToolCall(p, {
                            skipReason: "user"
                        });
                    }
                } else this.rejectToolCall(p);
            }
        }
        if (i?.type === bs.AI) return;
        const u = {}, d = [];
        Object.entries(r.pendingDecisions).forEach(([h, p])=>{
            const g = p;
            g.blocking || (u[h] = g, d.push(h));
        }), this.setPendingDecisions({
            userInteractionBubbleIds: d,
            pendingDecisions: u
        });
    }
    dispose() {
        this.toolCallHumanReviewService.cleanUpReviewModels(this.composerId), this.pendingApprovalRegistry.cleanupComposer(this.composerId), this._disposableStore.dispose(), this.shouldShowCancelAndResumeTimeout && (clearTimeout(this.shouldShowCancelAndResumeTimeout), this.shouldShowCancelAndResumeTimeout = void 0), this.setPendingDecisions({
            userInteractionBubbleIds: [],
            pendingDecisions: {}
        }), this.setShouldShowCancelAndResume(!1), super.dispose();
    }
    getBubbleData(t) {
        const e = this.getComposerHandleIfLoaded();
        return e ? this.composerDataService.getComposerBubble(e, t)?.toolFormerData : void 0;
    }
    getBubbleDataAsPlainText(t) {
        const e = this.getBubbleData(t);
        if (!e) return "";
        switch(e.tool){
            case Ct.EDIT_FILE:
                {
                    const n = e.additionalData?.codeblockId, i = e.params?.relativeWorkspacePath;
                    if (n === void 0 || i === void 0) return "";
                    const r = this.workspaceContextService.resolveRelativePath(i), o = this.composerDataService.getComposerBubble(this.getComposerHandle(), t)?.codeBlocks?.find((l)=>l.uri === r && !l.unregistered && l.codeblockId === n);
                    return o ? `\`\`\`${(this.languageService.getLanguageName(o.languageId ?? "") ?? "plaintext").toLowerCase()}:${i}
${o.content}
\`\`\`` : "";
                }
            case Ct.RUN_TERMINAL_COMMAND_V2:
                return `\`\`\`bash
${e.params?.command || ""}
\`\`\``;
            case Ct.READ_FILE:
                return "";
            case Ct.READ_SEMSEARCH_FILES:
                return "Search files...";
        }
        return "Ran tool";
    }
    setBubbleData(t, e, n) {
        try {
            this.setBubbleDataOrThrow(t, e, n);
        } catch (i) {
            this._structuredLogService.error("composer", "[ToolFormer] Failed to set bubble data", i instanceof Error ? i : new Error(String(i)), {
                composerId: this.composerId,
                bubbleId: t
            });
        }
    }
    setBubbleDataOrThrow(t, e, n) {
        this.composerDataService.updateComposerBubbleSetStore(this.getComposerHandle(), t, (i)=>{
            let r = !1;
            i((s)=>(r = s !== void 0 && s.isPlaceholder !== !0, s)), r && i("toolFormerData", (s)=>n?.mergeAdditionalData === !1 ? {
                    ...s,
                    ...e
                } : pis(s, e));
        });
    }
    stopGeneratingForUserInteractionTool(t, e) {
        const n = this.composerDataService.getComposerData(this.getComposerHandle());
        if (!n) return;
        this.setBubbleData(t, {
            status: "completed"
        });
        const i = [
            ...n.fullConversationHeadersOnly ?? []
        ].reverse().find((r)=>r.type === bs.AI)?.bubbleId;
        i && this.composerDataService.updateComposerData(this.getComposerHandle(), {
            generatingBubbleIds: n.generatingBubbleIds?.filter((r)=>r !== i) ?? []
        }), this.composerDataService.updateComposerDataSetStore(this.getComposerHandle(), (r)=>r("status", "completed"));
    }
    getBubbleByShortToolCallReferenceId(t) {
        if (!XBl.test(t)) return;
        const e = this.composerDataService.getLoadedConversation(this.getComposerHandle());
        let n;
        for (const i of e){
            const r = i.toolFormerData;
            if (r && RDw(r.toolCallId) === t) {
                if (n) return;
                n = {
                    bubbleId: i.bubbleId,
                    bubbleData: r
                };
            }
        }
        return n;
    }
    getBubbleDataByToolCallId(t) {
        const e = this.getBubbleIdByToolCallId(t);
        if (e) return this.getBubbleData(e);
    }
    getBubbleIdByToolCallId(t) {
        const e = this.getHeaderBubbleIdByToolCallId(t);
        return e !== void 0 && this.getBubbleData(e)?.tool === Ct.ASK_QUESTION ? $Ti(this, t)?.bubbleId ?? e : e;
    }
    getHeaderBubbleIdByToolCallId(t) {
        const e = this.getComposerHandleIfLoaded();
        if (!e) return;
        const n = this._toolCallIdToBubbleId.get(t);
        if (n !== void 0) {
            const r = this.composerDataService.getComposerBubbleIndex(e, n);
            if ((r >= 0 ? e.data.fullConversationHeadersOnly[r] : void 0)?.grouping?.toolCallId === t) return n;
            this._toolCallIdToBubbleId.delete(t);
        }
        const i = png(e.data.fullConversationHeadersOnly, t);
        return i !== void 0 && this._toolCallIdToBubbleId.set(t, i), i;
    }
    async getHydratedBubbleByToolCallId(t) {
        const e = this.getBubbleIdByToolCallId(t);
        if (!e) return;
        const n = this.getBubbleData(e);
        if (n?.toolCallId === t) return {
            bubbleId: e,
            bubbleData: n
        };
        const r = (await ssl(this.composerDataService, this.getComposerHandle(), e))?.toolFormerData;
        if (r?.toolCallId !== t) {
            this._toolCallIdToBubbleId.delete(t);
            return;
        }
        return {
            bubbleId: e,
            bubbleData: r
        };
    }
    createBubbleFromToolCall({ toolCallId: t, toolIndex: e, modelCallId: n, toolCallType: i, params: r, rawArgs: s, name: o, toolCall: a }) {
        const l = this.composerDataService.getComposerData(this.getComposerHandle());
        if (!l) throw new Error("[composer] Composer data not found");
        const c = l.isNAL, u = r?.value ? this.createInitialDataForTool(i, r) : void 0;
        let d, h;
        c || (h = {
            ...J_(),
            codeBlocks: [],
            type: bs.AI,
            text: ""
        });
        const p = c ? [] : [
            h
        ];
        Qm(()=>{
            const f = this.composerDataService.getLastBubble(this.getComposerHandle());
            !c && f && f.text === "" && f.capabilityType === void 0 ? (d = f, this.composerDataService.updateComposerBubble(this.getComposerHandle(), f.bubbleId, {
                codeBlocks: [],
                capabilityType: mo.TOOL_FORMER,
                toolFormerData: {
                    tool: i,
                    toolCallId: t,
                    toolIndex: e,
                    modelCallId: n,
                    status: "loading",
                    rawArgs: s,
                    name: o,
                    ...u,
                    toolCall: a
                }
            })) : (d = {
                ...J_(),
                codeBlocks: [],
                type: bs.AI,
                text: "",
                capabilityType: mo.TOOL_FORMER,
                toolFormerData: {
                    tool: i,
                    toolIndex: e,
                    modelCallId: n,
                    toolCallId: t,
                    status: "loading",
                    rawArgs: s,
                    name: o,
                    ...u,
                    toolCall: a
                }
            }, p.unshift(d)), this.composerDataService.appendComposerBubbles(this.getComposerHandle(), p), this.composerDataService.updateComposerDataSetStore(this.getComposerHandle(), (_)=>_("generatingBubbleIds", c ? [] : [
                    h.bubbleId
                ]));
        });
        const g = d.bubbleId;
        return this._toolCallIdToBubbleId.set(t, g), this.pendingApprovalRegistry.signalBubbleCreated(l.composerId, t), g;
    }
    getOrCreateBubbleId({ toolCallId: t, toolIndex: e, modelCallId: n, toolCallType: i, params: r, rawArgs: s, name: o, toolCall: a }) {
        const l = this.getBubbleIdByToolCallId(t);
        if (l) {
            const c = this.getBubbleData(l);
            return c?.tool === Ct.ASK_QUESTION && c?.additionalData && "status" in c.additionalData && (c.additionalData.status === "submitted" || c.additionalData.status === "cancelled") || this.setBubbleData(l, {
                ...s ? {
                    rawArgs: s
                } : {},
                ...o ? {
                    name: o
                } : {},
                ...r?.value ? this.createInitialDataForTool(i, r) : {},
                ...a ? {
                    toolCall: a
                } : {}
            }), this.pendingApprovalRegistry.signalBubbleCreated(this.composerId, t), l;
        }
        return this.createBubbleFromToolCall({
            toolCallId: t,
            toolIndex: e,
            modelCallId: n,
            toolCallType: i,
            params: r,
            rawArgs: s,
            name: o,
            toolCall: a
        });
    }
    shouldAutoRun_eitherUseAllowlistOrRunEverythingMode() {
        return T2().isDisabledByAdmin ? !1 : this.composerModesService.getComposerAutoRun(this.composerId) ?? !1;
    }
    isAutoRunDisabledByAdmin() {
        return T2().isDisabledByAdmin;
    }
    shouldAutoRun_runEverythingMode() {
        return T2().isDisabledByAdmin ? !1 : this.shouldAutoRun_eitherUseAllowlistOrRunEverythingMode() && (this.composerModesService.getComposerFullAutoRun(this.composerId) ?? !1);
    }
    shouldAutoRun_autoReviewMode() {
        return T2().isDisabledByAdmin ? !1 : this.composerModesService.getComposerSmartModeAutoRun(this.composerId) ?? !1;
    }
    handleInitialToolCall({ toolCallId: t, toolIndex: e, modelCallId: n, toolCallType: i, params: r, rawArgs: s, name: o, toolCall: a }) {
        if (!this.composerDataService.getComposerData(this.getComposerHandle())) throw new Error("[composer] Composer data not found");
        const c = this.getOrCreateBubbleId({
            toolCallId: t,
            toolIndex: e,
            modelCallId: n,
            toolCallType: i,
            params: r,
            rawArgs: s ?? "",
            name: o,
            toolCall: a
        });
        return Promise.resolve(c);
    }
    addPendingDecision(t, e, n, i, r = !0) {
        if (this._store.isDisposed) return i(!1), ()=>{};
        const s = this.getBubbleData(t)?.userDecision, o = EDw(s, i);
        if (o !== void 0) return o;
        const a = this.composerDataService.getComposerData(this.getComposerHandle());
        if (a?.subagentInfo?.parentComposerId && a?.subagentInfo?.parentBubbleId) {
            const l = a.subagentInfo.parentBubbleId, c = this.composerDataService.getHandleIfLoaded(a.subagentInfo.parentComposerId), d = (c ? this.composerDataService.getComposerBubble(c, l) : void 0)?.toolFormerData?.toolCallId, h = c ? this.composerDataService.getToolFormer(c) : void 0;
            if (h && d) return h.addPendingDecision(l, e, d, (p)=>{
                i(p), p ? this.acceptToolCall(n) : this.rejectToolCall(n);
            }, r);
        }
        return this.setPendingDecisions((l)=>({
                userInteractionBubbleIds: [
                    ...l.userInteractionBubbleIds,
                    t
                ],
                pendingDecisions: {
                    ...l.pendingDecisions,
                    [t]: {
                        decide: i,
                        toolCallId: n,
                        clientSideTool: e,
                        accept: ()=>this.acceptToolCall(n),
                        reject: ()=>this.rejectToolCall(n),
                        blocking: r,
                        startedAt: Date.now()
                    }
                }
            })), this.composerUtilsService.runCapabilitiesForProcess(this.getComposerHandle(), "add-pending-action", {
            composerId: this.composerId,
            humanBubbleId: "",
            parentSpanCtx: Mde
        }).catch((l)=>{
            this._structuredLogService.error("composer", "Failed to run add-pending-action capabilities", l instanceof Error ? l : new Error(String(l)), {
                composerId: this.composerId,
                toolCallId: n
            });
        }), e === Ct.SWITCH_MODE && (this.switchModeTimeouts.has(n) || this.switchModeTimeouts.set(n, Ec(()=>{
            const l = this.pendingDecisions().pendingDecisions;
            Object.values(l).some((u)=>u.toolCallId === n) && this.rejectToolCall(n, {
                skipReason: "timeout"
            }), this.switchModeTimeouts.deleteAndDispose(n);
        }, ljf))), e === Ct.MCP_AUTH && !this.isMcpAuthBlockingEnabled() && (this.mcpAuthTimeouts.has(n) || this.mcpAuthTimeouts.set(n, Ec(()=>{
            const l = this.pendingDecisions().pendingDecisions;
            Object.values(l).some((u)=>u.toolCallId === n) && !this.isMcpAuthBlockingEnabled() && this.rejectToolCall(n, {
                skipReason: "timeout"
            }), this.mcpAuthTimeouts.deleteAndDispose(n);
        }, d4l))), ()=>{
            this.setPendingDecisions((l)=>{
                const { userInteractionBubbleIds: c, pendingDecisions: u } = l, { [t]: d, ...h } = u;
                return {
                    userInteractionBubbleIds: c.filter((p)=>p !== t),
                    pendingDecisions: h
                };
            });
        };
    }
    getPendingDecisionBubbleIdForToolCall(t) {
        return Object.entries(this.pendingDecisions().pendingDecisions).find(([, e])=>e.toolCallId === t)?.[0];
    }
    getBubbleIdsByToolCallId(t) {
        const e = this.getComposerHandleIfLoaded();
        return e ? mng(Wu(e.data.fullConversationHeadersOnly), t) : [];
    }
    removePendingDecisionForToolCall(t) {
        const e = Object.entries(this.pendingDecisions().pendingDecisions).find(([, i])=>i.toolCallId === t);
        if (!e) return;
        const [n] = e;
        this.setPendingDecisions((i)=>{
            const { [n]: r, ...s } = i.pendingDecisions;
            return {
                userInteractionBubbleIds: i.userInteractionBubbleIds.filter((o)=>o !== n),
                pendingDecisions: s
            };
        });
    }
    decisionBubbleIdForToolCall(t) {
        return this.getPendingDecisionBubbleIdForToolCall(t) ?? this.getBubbleIdByToolCallId(t);
    }
    acceptToolCall(t) {
        this.switchModeTimeouts.deleteAndDispose(t), this.mcpAuthTimeouts.deleteAndDispose(t);
        const e = this.decisionBubbleIdForToolCall(t), n = e ? this.pendingDecisions().pendingDecisions[e] : void 0;
        if (e) {
            const i = this.getBubbleData(e);
            i?.tool === Ct.MCP || i?.tool === Ct.CALL_MCP_TOOL || i?.tool === Ct.MCP_AUTH ? this.setBubbleData(e, {
                userDecision: "accepted",
                status: "loading",
                additionalData: {
                    status: "loading"
                }
            }) : this.setBubbleData(e, {
                userDecision: "accepted"
            }), this.toolCallHumanReviewService.getReviewModelForBubble(this.getComposerHandle(), e)?.completeWithRunAction();
        }
        if (n && e) {
            const i = e;
            n.decide(!0), this.setPendingDecisions((r)=>{
                const { userInteractionBubbleIds: s, pendingDecisions: o } = r, { [i]: a, ...l } = o;
                return {
                    userInteractionBubbleIds: s.filter((c)=>c !== i),
                    pendingDecisions: l
                };
            });
        }
    }
    rejectToolCall(t, e) {
        this.switchModeTimeouts.deleteAndDispose(t), this.mcpAuthTimeouts.deleteAndDispose(t);
        const n = this.decisionBubbleIdForToolCall(t), i = n ? this.pendingDecisions().pendingDecisions[n] : void 0;
        if (i && n) {
            const r = n;
            i.decide(!1), this.setPendingDecisions((s)=>{
                const { userInteractionBubbleIds: o, pendingDecisions: a } = s, { [r]: l, ...c } = a;
                return {
                    userInteractionBubbleIds: o.filter((u)=>u !== r),
                    pendingDecisions: c
                };
            });
        }
        if (n) {
            const r = this.getComposerHandleIfLoaded(), s = this.getBubbleData(n);
            s?.tool === Ct.MCP || s?.tool === Ct.CALL_MCP_TOOL || s?.tool === Ct.MCP_AUTH ? (this.setBubbleData(n, {
                userDecision: "rejected",
                status: "cancelled",
                additionalData: {
                    status: "cancelled",
                    skipReason: e?.skipReason
                }
            }), (r ? this.toolCallHumanReviewService.getMCPReviewModelForBubble(r, n) : void 0)?.reset(), !i && s?.tool !== Ct.MCP_AUTH && this.cancel()) : s?.tool === Ct.RUN_TERMINAL_COMMAND_V2 ? (this.setBubbleData(n, {
                userDecision: "rejected",
                status: "cancelled",
                additionalData: {
                    ...s.additionalData,
                    status: "cancelled"
                }
            }), (r ? this.toolCallHumanReviewService.getTerminalReviewModelForBubble(r, n) : void 0)?.reset()) : s?.tool === Ct.EDIT_FILE || s?.tool === Ct.EDIT_FILE_V2 ? (this.setBubbleData(n, {
                userDecision: "rejected",
                status: "cancelled"
            }), (r ? this.toolCallHumanReviewService.getEditReviewModelForBubble(r, n) : void 0)?.reset()) : s?.tool === Ct.ASK_QUESTION ? (i || !Yil(s)) && this.setBubbleData(n, {
                userDecision: "rejected",
                status: "cancelled",
                additionalData: {
                    ...s.additionalData,
                    status: "cancelled",
                    skipReason: e?.skipReason
                }
            }) : s?.tool === Ct.WEB_FETCH ? (this.setBubbleData(n, {
                userDecision: "rejected",
                status: "cancelled"
            }), (r ? this.toolCallHumanReviewService.getWebFetchReviewModelForBubble(r, n) : void 0)?.reset()) : s?.tool === Ct.SWITCH_MODE ? this.setBubbleData(n, {
                userDecision: "rejected",
                status: "cancelled",
                additionalData: {
                    ...s.additionalData,
                    skipReason: e?.skipReason
                }
            }) : this.setBubbleData(n, {
                userDecision: "rejected",
                status: "cancelled"
            });
        }
    }
    rejectPendingDecisionForBubbleId(t) {
        const e = this.pendingDecisions().pendingDecisions[t];
        e && this.rejectToolCall(e.toolCallId, {
            skipReason: "user"
        });
    }
    skipBlockingAskQuestionsForUserSubmit(t) {
        if (t?.isResume || t?.conversationActionOverride) return this.askQuestionIdsSkippedForInFlightSubmit = void 0, [];
        const e = this.getComposerHandleIfLoaded();
        if (!e) return [];
        const n = this.composerDataService.getComposerData(e);
        if (!n) return [];
        const i = this.collectBlockingAskQuestionToolCallIds();
        if (!n.createdFromBackgroundAgent?.bcId) for (const s of this.getOrphanedPendingAskQuestionToolCallIds())this.rejectToolCall(s, {
            skipReason: "user"
        });
        for (const s of i){
            const o = this.getBubbleIdByToolCallId(s), a = o ? this.getBubbleData(o) : void 0;
            o && a?.tool === Ct.ASK_QUESTION && this.setBubbleData(o, {
                additionalData: {
                    ...a.additionalData,
                    status: "cancelled",
                    skipReason: "user"
                }
            });
        }
        return this.askQuestionIdsSkippedForInFlightSubmit = i.length > 0 ? i : void 0, i;
    }
    rejectAskQuestionsSkippedForUnsentSubmit(t) {
        if (this.askQuestionIdsSkippedForInFlightSubmit === t) {
            this.askQuestionIdsSkippedForInFlightSubmit = void 0;
            for (const e of t)this.rejectToolCall(e, {
                skipReason: "user"
            });
        }
    }
    takeAskQuestionIdsSkippedForInFlightSubmit() {
        const t = this.askQuestionIdsSkippedForInFlightSubmit;
        return this.askQuestionIdsSkippedForInFlightSubmit = void 0, t;
    }
    collectBlockingAskQuestionToolCallIds(t) {
        const e = [];
        for (const [n, i] of Object.entries(this.pendingDecisions().pendingDecisions)){
            if (!i.blocking) continue;
            this.getBubbleData(n)?.tool === Ct.ASK_QUESTION ? e.push(i.toolCallId) : t?.rejectOtherBlocking && this.rejectToolCall(i.toolCallId);
        }
        return e;
    }
    rejectAllPendingUserDecisions() {
        const t = new Set([
            ...Object.values(this.pendingDecisions().pendingDecisions).map((r)=>r.toolCallId),
            ...this.getOrphanedPendingAskQuestionToolCallIds()
        ]), e = this.composerDataService.getComposerData(this.getComposerHandle()), n = e?.subagentInfo?.parentComposerId, i = e?.subagentInfo?.parentBubbleId;
        if (n && i) {
            const r = this.composerDataService.getHandleIfLoaded(n);
            (r ? this.composerDataService.getToolFormer(r) : void 0)?.rejectPendingDecisionForBubbleId(i);
        }
        for (const r of t)this.rejectToolCall(r, {
            skipReason: "user"
        });
    }
    getPendingUserDecisionGroup() {
        return ()=>{
            const t = this.pendingDecisions(), e = [
                ...t.userInteractionBubbleIds
            ].reverse();
            if (e.length === 0) {
                const r = this.getLatestAnswerableAskQuestionDecision(t);
                return r ? [
                    r
                ] : [];
            }
            const n = e.map((r)=>t.pendingDecisions[r]).filter((r)=>r !== void 0 && r.clientSideTool === Ct.RUN_TERMINAL_COMMAND_V2);
            if (n.length > 0) return n;
            const i = [];
            for (const r of e){
                const s = t.pendingDecisions[r];
                if (s) if (i.length === 0 || this.areToolsSimilar(i[i.length - 1].clientSideTool, s.clientSideTool)) i.push(s);
                else break;
            }
            return i;
        };
    }
    getLatestAnswerableAskQuestionDecision(t) {
        const e = this.getComposerHandleIfLoaded();
        if (!e) {
            this._latestAnswerableAskCache = void 0;
            return;
        }
        const n = this.composerDataService.getComposerDataVersion(e), i = this._latestAnswerableAskCache;
        if (i !== void 0 && i.pendingDecisions === t && i.dataVersion === n) return this.trackAskQuestionStatus(i.surfacedBubble), i.result;
        const { result: r, surfacedBubble: s } = ks(()=>this.computeLatestAnswerableAskQuestionDecision(e));
        return this.trackAskQuestionStatus(s), this._latestAnswerableAskCache = n === void 0 ? void 0 : {
            pendingDecisions: t,
            dataVersion: n,
            result: r,
            surfacedBubble: s
        }, r;
    }
    trackAskQuestionStatus(t) {
        const e = t?.toolFormerData;
        e?.tool === Ct.ASK_QUESTION && e.additionalData?.status;
    }
    getOrphanedPendingAskQuestionToolCallIds() {
        const t = new Set(Object.values(this.pendingDecisions().pendingDecisions).map((n)=>n.toolCallId)), e = [];
        for (const n of this.composerDataService.getLoadedConversation(this.getComposerHandle())){
            const i = n.toolFormerData;
            if (i?.tool !== Ct.ASK_QUESTION || i.status === "loading") continue;
            const r = i.toolCallId;
            !r || t.has(r) || (i.additionalData?.status ?? "pending") === "pending" && ATt(this, n.bubbleId, r) && e.push(r);
        }
        return e;
    }
    computeLatestAnswerableAskQuestionDecision(t) {
        const e = qTi(t);
        if (!e?.bubbleData.params) return {
            result: void 0,
            surfacedBubble: void 0
        };
        const { toolCallId: n } = e;
        return {
            result: {
                blocking: !0,
                decide: ()=>{},
                accept: ()=>this.acceptToolCall(n),
                reject: ()=>this.rejectToolCall(n, {
                        skipReason: "user"
                    }),
                toolCallId: n,
                clientSideTool: Ct.ASK_QUESTION,
                startedAt: 0
            },
            surfacedBubble: this.composerDataService.getComposerBubble(t, e.bubbleId)
        };
    }
    getIsBlockingUserDecision() {
        return this._isBlockingUserDecision;
    }
    restorePendingDecisionsForUnansweredQuestionnaires() {}
    handleToolResult(t, e, n = !0) {
        const i = this.getBubbleIdByToolCallId(e);
        if (!i) return;
        const r = this.getBubbleData(i);
        r && (n && this.clearShowCancelAndResume(), Qm(()=>this._handleToolResultInner(t, r, i, n)));
    }
    _handleToolResultInner(t, e, n, i) {
        if (t.tool === e.tool && t.result.value !== void 0) {
            let r = t.result.value;
            if (e.tool === Ct.ASK_QUESTION) {
                const s = r && typeof r == "object" && "isAsync" in r ? r.isAsync : !1;
                if (e.result) {
                    const o = e.result, a = r;
                    if (o && typeof o == "object" && "answers" in o && a && typeof a == "object" && "answers" in a) {
                        const l = o, c = a, u = Ybe(l), d = Ybe(c);
                        u && !d && (r = o);
                    }
                }
                if (i && s) {
                    this.setBubbleData(n, {
                        status: "completed",
                        additionalData: {
                            status: "pending"
                        },
                        attachments: t.attachments ?? e.attachments
                    });
                    return;
                }
            }
            if (e.tool === Ct.TODO_WRITE && i && t.result.value && typeof t.result.value == "object" && "finalTodos" in t.result.value) {
                const o = t.result.value.finalTodos;
                if (o && Array.isArray(o)) {
                    const a = this.composerDataService.getComposerData(this.getComposerHandle());
                    if (a) {
                        const l = a.todos || [], c = xDw(l, o), u = l.map((_)=>new yM({
                                id: _.id,
                                content: _.content,
                                status: _.status,
                                dependencies: _.dependencies || []
                            }));
                        t.result.value.initialTodos = u, c !== a.todos && this.composerDataService.updateComposerData(this.getComposerHandle(), {
                            todos: c
                        });
                        const d = this.composerDataService.getComposerData(this.getComposerHandle());
                        let h = !1, p, g;
                        if (d) {
                            const _ = d.fullConversationHeadersOnly.findIndex((b)=>b.bubbleId === n);
                            if (_ !== -1) for(let b = _ - 1; b >= 0; b--){
                                const y = d.fullConversationHeadersOnly[b]?.bubbleId;
                                if (!y) continue;
                                const S = d.conversationMap[y];
                                if (S?.type === bs.HUMAN) {
                                    if (g = y, h = S.isPlanExecution === !0, h && S.planUri) try {
                                        p = Hae(S.planUri);
                                    } catch  {}
                                    break;
                                }
                            }
                        }
                        const f = new Map;
                        for (const _ of c){
                            const b = l.find((y)=>y.id === _.id);
                            (h || b && b.status !== _.status) && f.set(_.id, _.status);
                        }
                        f.size > 0 && this.composerPlanService.syncTodoUpdatesToFile(a.composerId, f, p).catch((_)=>{
                            this._composerLogService.error("[ToolFormer] Failed to sync todo updates to plan file:", _);
                        });
                    }
                }
            }
            if (e.tool === Ct.FETCH_RULES && i && e.result === void 0) {
                const s = r;
                if (s?.rules.length) for (const [o, a, l] of Yqm(s.rules))this.analyticsService.trackEvent("rules.attached", {
                    source: "tool",
                    origin: o,
                    plugin: a,
                    marketplace: l
                });
            }
            if (e.tool === Ct.READ_FILE_V2 && r.images.length > 0 && (r = new O$e({
                ...r,
                images: []
            })), e.tool === Ct.MCP && i) {
                const s = e.userDecision === "rejected";
                let o = !1;
                if (r && typeof r == "object" && "result" in r) try {
                    const a = JSON.parse(r.result);
                    o = a?.rejected === !0 || a?.skipped === !0;
                } catch  {}
                if (!s && !o) e.status === "cancelled" ? this.setBubbleData(n, {
                    result: r,
                    status: "cancelled",
                    additionalData: {
                        status: "cancelled"
                    },
                    attachments: t.attachments ?? e.attachments
                }) : this.setBubbleData(n, {
                    result: r,
                    status: "completed",
                    additionalData: {
                        status: "success"
                    },
                    attachments: t.attachments ?? e.attachments
                });
                else {
                    const a = e.additionalData || {};
                    this.setBubbleData(n, {
                        result: r,
                        status: "completed",
                        additionalData: a,
                        attachments: t.attachments ?? e.attachments
                    });
                }
            } else if (e.tool === Ct.ASK_QUESTION) {
                const s = i ? "completed" : e.status;
                this.setBubbleData(n, {
                    result: r,
                    status: s,
                    additionalData: e.additionalData,
                    attachments: t.attachments ?? e.attachments
                });
            } else {
                const s = i ? "completed" : e.status;
                if (e.tool === Ct.TODO_WRITE && t.result.case === "todoWriteResult") {
                    if (e.result && "initialTodos" in e.result && Array.isArray(e.result.initialTodos)) t.result.value.initialTodos = e.result.initialTodos;
                    else if (!t.result.value.initialTodos || t.result.value.initialTodos.length === 0) {
                        const o = this.composerDataService.getComposerData(this.getComposerHandle());
                        if (o) {
                            const a = o.todos || [];
                            t.result.value.initialTodos = a.map((l)=>new yM({
                                    id: l.id,
                                    content: l.content,
                                    status: l.status,
                                    dependencies: l.dependencies || []
                                }));
                        }
                    }
                }
                if (e.tool === Ct.RIPGREP_RAW_SEARCH && i) {
                    const o = t.result.value, a = B5a(o, e.params);
                    if (a) {
                        this.setBubbleData(n, {
                            result: void 0,
                            status: s,
                            additionalData: a,
                            attachments: t.attachments ?? e.attachments,
                            ...e.toolCall ? {
                                toolCall: ozr(e.toolCall)
                            } : {}
                        });
                        return;
                    }
                }
                this.setBubbleData(n, {
                    result: t.result.value,
                    status: s,
                    attachments: t.attachments ?? e.attachments
                });
            }
        } else if (e.tool === Ct.MCP ? this.setBubbleData(n, {
            status: "error",
            error: t.error,
            additionalData: {
                status: "error"
            }
        }) : e.tool === Ct.GET_MCP_TOOLS ? this.setBubbleData(n, {
            error: t.error
        }) : this.setBubbleData(n, {
            status: "error",
            error: t.error
        }), t.tool !== e.tool) throw new Hqr({
            clientVisibleErrorMessage: "Invalid tool result",
            modelVisibleErrorMessage: "Invalid tool result",
            actualErrorMessage: "Invalid tool result"
        });
    }
    handleToolError(t) {
        const e = this.composerDataService.getLoadedConversation(this.getComposerHandle());
        for (const n of e)n.toolFormerData?.status !== "completed" && this.setBubbleData(n.bubbleId, {
            additionalData: {
                status: "error"
            }
        });
    }
    createInitialDataForTool(t, e) {
        const i = this.composerDataService.getComposerData(this.getComposerHandle())?.isNAL;
        switch(t){
            case Ct.READ_SEMSEARCH_FILES:
                {
                    if (e.case !== "readSemsearchFilesParams") throw new Error("[composer] ToolFormer: Invalid params for READ_SEMSEARCH_FILES");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.RIPGREP_SEARCH:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.RIPGREP_RAW_SEARCH:
                {
                    if (e.case !== "ripgrepRawSearchParams") throw new Error("[composer] ToolFormer: Invalid params for RIPGREP_RAW_SEARCH");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.FILE_SEARCH:
                {
                    if (e.case !== "fileSearchParams") throw new Error("[composer] ToolFormer: Invalid params for FILE_SEARCH");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.RUN_TERMINAL_COMMAND_V2:
                {
                    if (e.case !== "runTerminalCommandV2Params") throw new Error("[composer] ToolFormer: Invalid params for RUN_TERMINAL_COMMAND_V2");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: {
                            status: i ? "loading" : "pending"
                        }
                    };
                }
            case Ct.FETCH_RULES:
                {
                    if (e.case !== "fetchRulesParams") throw new Error("[composer] ToolFormer: Invalid params for FETCH_RULES");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.READ_FILE:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.LIST_DIR:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.EDIT_FILE:
                {
                    if (e.case !== "editFileParams") throw new Error("[composer] ToolFormer: Invalid params for EDIT_FILE");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: {}
                    };
                }
            case Ct.EDIT_FILE_V2:
                {
                    if (e.case !== "editFileV2Params") throw new Error("[composer] ToolFormer: Invalid params for EDIT_FILE_V2");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.SEMANTIC_SEARCH_FULL:
                {
                    if (e.case !== "semanticSearchFullParams") throw new Error("[composer] ToolFormer: Invalid params for SEMANTIC_SEARCH_FULL");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.DELETE_FILE:
                {
                    if (e.case !== "deleteFileParams") throw new Error("[composer] ToolFormer: Invalid params for DELETE_FILE");
                    return {
                        params: e.value,
                        result: new T4t,
                        additionalData: void 0
                    };
                }
            case Ct.REAPPLY:
                {
                    if (e.case !== "reapplyParams") throw new Error("[composer] ToolFormer: Invalid params for REAPPLY");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.WEB_SEARCH:
                {
                    if (e.case !== "webSearchParams") throw new Error("[composer] ToolFormer: Invalid params for WEB_SEARCH");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.WEB_FETCH:
                {
                    if (e.case !== "webFetchParams") throw new Error("[composer] ToolFormer: Invalid params for WEB_FETCH");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.MCP:
                {
                    if (this._composerLogService.info("[ToolFormer] Creating initial data for MCP", {
                        params: e
                    }), e.case !== "mcpParams") throw new Error("[composer] ToolFormer: Invalid params for MCP");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: {
                            status: i ? "loading" : "pending"
                        }
                    };
                }
            case Ct.GET_MCP_TOOLS:
                {
                    if (this._structuredLogService.info("composer", "Creating initial data for GET_MCP_TOOLS", {
                        params: e
                    }), e.case !== "getMcpToolsParams") throw new Error("[composer] ToolFormer: Invalid params for GET_MCP_TOOLS");
                    return {
                        params: e.value,
                        result: void 0
                    };
                }
            case Ct.SEARCH_SYMBOLS:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.UNSPECIFIED:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.AWAIT:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.BACKGROUND_COMPOSER_FOLLOWUP:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.KNOWLEDGE_BASE:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.DEEP_SEARCH:
                {
                    if (e.case !== "deepSearchParams") throw new Error("[composer] ToolFormer: Invalid params for DEEP_SEARCH");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.CREATE_DIAGRAM:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.FIX_LINTS:
                {
                    if (e.case !== "fixLintsParams") throw new Error("[composer] ToolFormer: Invalid params for FIX_LINTS");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.READ_LINTS:
                {
                    if (e.case !== "readLintsParams") throw new Error("[composer] ToolFormer: Invalid params for READ_LINTS");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.GO_TO_DEFINITION:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.TASK:
            case Ct.AWAIT_TASK:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.TODO_READ:
                {
                    if (e.case !== "todoReadParams") throw new Error("[composer] ToolFormer: Invalid params for TODO_READ");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.TODO_WRITE:
                {
                    if (e.case !== "todoWriteParams") throw new Error("[composer] ToolFormer: Invalid params for TODO_WRITE");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.LIST_DIR_V2:
                {
                    if (e.case !== "listDirV2Params") throw new Error("[composer] ToolFormer: Invalid params for LIST_DIR_V2");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.READ_FILE_V2:
                {
                    if (e.case !== "readFileV2Params") throw new Error("[composer] ToolFormer: Invalid params for READ_FILE_V2");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.GLOB_FILE_SEARCH:
                {
                    if (e.case !== "globFileSearchParams") throw new Error("[composer] ToolFormer: Invalid params for GLOB_FILE_SEARCH");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.LIST_MCP_RESOURCES:
                {
                    if (e.case !== "listMcpResourcesParams") throw new Error("[composer] ToolFormer: Invalid params for LIST_MCP_RESOURCES");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.READ_MCP_RESOURCE:
                {
                    if (e.case !== "readMcpResourceParams") throw new Error("[composer] ToolFormer: Invalid params for READ_MCP_RESOURCE");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.CALL_MCP_TOOL:
                {
                    if (e.case !== "callMcpToolParams") throw new Error("[composer] ToolFormer: Invalid params for CALL_MCP_TOOL");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: {
                            status: "loading"
                        }
                    };
                }
            case Ct.APPLY_AGENT_DIFF:
                {
                    if (e.case !== "applyAgentDiffParams") throw new Error("[composer] ToolFormer: Invalid params for APPLY_AGENT_DIFF");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.CREATE_PLAN:
                {
                    if (e.case !== "createPlanParams") throw new Error("[composer] ToolFormer: Invalid params for CREATE_PLAN");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: {
                            reviewData: {
                                status: Cv.REQUESTED,
                                selectedOption: rie.NONE,
                                isShowingInput: !1,
                                highlightedOption: void 0
                            }
                        }
                    };
                }
            case Ct.FETCH_PULL_REQUEST:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.READ_PROJECT:
                {
                    if (e.case !== "readProjectParams") throw new Error("[composer] ToolFormer: Invalid params for READ_PROJECT");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.UPDATE_PROJECT:
                {
                    if (e.case !== "updateProjectParams") throw new Error("[composer] ToolFormer: Invalid params for UPDATE_PROJECT");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.TASK_V2:
                {
                    if (e.case !== "taskV2Params") throw new Error("[composer] ToolFormer: Invalid params for TASK_V2");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: {
                            status: "pending"
                        }
                    };
                }
            case Ct.ASK_QUESTION:
                {
                    if (e.case !== "askQuestionParams") throw new Error("[composer] ToolFormer: Invalid params for ASK_QUESTION");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: {
                            status: "pending"
                        }
                    };
                }
            case Ct.SWITCH_MODE:
                {
                    if (e.case !== "switchModeParams") throw new Error("[composer] ToolFormer: Invalid params for SWITCH_MODE");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.GENERATE_IMAGE:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.COMPUTER_USE:
                {
                    if (e.case !== "computerUseParams") throw new Error("[composer] ToolFormer: Invalid params for COMPUTER_USE");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.WRITE_SHELL_STDIN:
                {
                    if (e.case !== "writeShellStdinParams") throw new Error("[composer] ToolFormer: Invalid params for WRITE_SHELL_STDIN");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.RECORD_SCREEN:
                {
                    if (e.case !== "recordScreenParams") throw new Error("[composer] ToolFormer: Invalid params for RECORD_SCREEN");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.REPORT_BUGFIX_RESULTS:
                {
                    if (e.case !== "reportBugfixResultsParams") throw new Error("[composer] ToolFormer: Invalid params for REPORT_BUGFIX_RESULTS");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.AI_ATTRIBUTION:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.MCP_AUTH:
                return {
                    params: void 0,
                    result: void 0,
                    additionalData: void 0
                };
            case Ct.CONNECT_SCM:
                {
                    if (e.case !== "connectScmParams") throw new Error("[composer] ToolFormer: Invalid params for CONNECT_SCM");
                    return {
                        params: e.value,
                        result: void 0,
                        additionalData: void 0
                    };
                }
            case Ct.REFLECT:
                return {
                    params: void 0,
                    result: void 0
                };
            case Ct.SEND_TO_USER:
                return {
                    params: void 0,
                    result: void 0
                };
            default:
                return t;
        }
    }
    cancel() {
        super.cancel(), this.clearShowCancelAndResume();
    }
    clearShowCancelAndResume() {
        this.shouldShowCancelAndResumeTimeout && (clearTimeout(this.shouldShowCancelAndResumeTimeout), this.shouldShowCancelAndResumeTimeout = void 0), this.setShouldShowCancelAndResume(!1);
    }
    setLoadingToolsToCancelled(t) {
        const e = this.composerDataService.getLoadedConversation(this.getComposerHandle());
        for (const n of e){
            const i = n.toolFormerData;
            if (i?.status === "loading" && !((i?.tool === Ct.TASK_V2 || i?.tool === Ct.RUN_TERMINAL_COMMAND_V2) && i.additionalData?.backgrounded === !0)) {
                if (t?.preservePendingApprovals) {
                    const r = i?.additionalData?.reviewData;
                    if (r?.status === "Requested" || r?.status === "Done") continue;
                }
                i?.tool === Ct.TASK_V2 || i?.tool === Ct.MCP || i?.tool === Ct.CALL_MCP_TOOL ? this.setBubbleData(n.bubbleId, {
                    status: "cancelled",
                    additionalData: {
                        ...i.additionalData,
                        status: "cancelled"
                    }
                }) : this.setBubbleData(n.bubbleId, {
                    status: "cancelled"
                });
            }
        }
    }
    setPendingToolsToCancelled() {
        const t = this.composerDataService.getLoadedConversation(this.getComposerHandle());
        for (const e of t){
            const n = e.toolFormerData;
            if (!n) continue;
            let i = !1;
            if (n.tool === Ct.RUN_TERMINAL_COMMAND_V2 || n.tool === Ct.MCP) i = n.additionalData?.status === "pending";
            else if (n.tool === Ct.CREATE_PLAN) {
                const r = n.additionalData;
                if (r?.planUri) try {
                    const s = Hae(r.planUri);
                    i = this.composerPlanService.isPlanPendingByUri(s);
                } catch  {
                    i = !0;
                }
                else i = !0;
            }
            i && (n.tool === Ct.RUN_TERMINAL_COMMAND_V2 || n.tool === Ct.MCP ? this.setBubbleData(e.bubbleId, {
                status: "cancelled",
                additionalData: {
                    ...n.additionalData,
                    status: "cancelled"
                }
            }) : n.tool === Ct.CREATE_PLAN ? this.setBubbleData(e.bubbleId, {
                status: "cancelled",
                additionalData: {
                    ...n.additionalData,
                    status: "cancelled"
                }
            }) : this.setBubbleData(e.bubbleId, {
                status: "cancelled"
            }));
        }
    }
    setPendingAskQuestionToolsToCancelled() {
        const t = this.composerDataService.getLoadedConversation(this.getComposerHandle());
        for (const e of t){
            const n = e.toolFormerData;
            if (!n || n.tool !== Ct.ASK_QUESTION) continue;
            const r = n.additionalData?.status ?? "pending";
            r !== "pending" && r !== "loading" || (this.setBubbleData(e.bubbleId, {
                status: "cancelled",
                additionalData: {
                    ...n.additionalData,
                    status: "cancelled",
                    skipReason: "user"
                }
            }), n.toolCallId && this.removePendingDecisionForToolCall(n.toolCallId));
        }
    }
    addDisposable(t) {
        this._disposableStore.add(t);
    }
}, rNn = Re([
    VBl(),
    F(2, no),
    F(3, yr),
    F(4, Ph),
    F(5, uk),
    F(6, YM),
    F(7, l0),
    F(8, Rr),
    F(9, nr),
    F(10, fV),
    F(11, Y4),
    F(12, G4e),
    F(13, wh),
    F(14, Qr),
    F(15, sa),
    F(16, w1)
], rNn), D0t(mo.TOOL_FORMER, rNn);

}
