import { Aet, NCv, RWi, RX, VWt, cso, fDd, oZd, sPd, x2n } from "./A3u.js";
import { L4e, S_, TMn, nJe, q0e, rh } from "./De_3.js";
import { Pk, Se, ns, si } from "./HVr.js";
import { R1, pw } from "./adminSettingsService.js";
import { $Fn } from "./agentTraceContext.js";
import { hpo } from "./agentTranslationUtils.js";
import { FDn, I1, r$t, zd } from "./agent_pb.js";
import { Tse, ca, la } from "./aiMiscServices.js";
import { G$, J3 } from "./aiSettingsService.js";
import { WTh } from "./askQuestionQueryHandler.js";
import { $Th } from "./askQuestionToolCallHandler.js";
import { bI, bn } from "./async.js";
import { e8e, rtt } from "./asyncOperationRegistry.js";
import { Za, na } from "./authenticationService.js";
import { Yu } from "./browser.ts";
import { aZd } from "./bubbleTiming.js";
import { am, kc } from "./buildFlags.js";
import { j_e } from "./byokModelUtils.js";
import { p2 } from "./canvas.js";
import { FKe } from "./canvasComposer.js";
import { ZYi } from "./canvasLogger.js";
import { $_e, WVt, fqv, hqv, lqv, wXi, zPe } from "./cgh.js";
import { Hu, I4e, Tr } from "./chat_pb.js";
import { hq, q6 } from "./composerAgent.js";
import { _q } from "./composerChatService.js";
import { OR } from "./composerChatServiceInterface.js";
import { Af, Wf } from "./composerData.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { jro } from "./composerNotLoadedError.js";
import { FR, z5 } from "./composerUtilsServiceTypes.js";
import { Hv, rE } from "./composerViews.js";
import { Jm, ps } from "./composer_pb.js";
import { nEh } from "./connectScmQueryHandler.js";
import { UTh } from "./createPlanQueryHandler.js";
import { BTh } from "./createPlanToolCallHandler.js";
import { M1e, Vde } from "./cursorAgentHostService.js";
import { KX, V$ } from "./cursorHooks.js";
import { Jh, c$i } from "./dashboard_pb.js";
import { $1e, moe } from "./draftIds.js";
import { Ibh } from "./editToolCallHandler.js";
import { A$, GU } from "./experimentRefreshService.js";
import { Kr, qs } from "./experimentService.js";
import { cbh, fwo } from "./grokBotContextualBanner.js";
import { vwo } from "./grokBotContextualBannerSession.js";
import { Lu } from "./hook-step.ts";
import { dJv, rEh } from "./hostApprovalQueryHandler.js";
import { z3 } from "./index_10.ts";
import { aJv } from "./index_213.js";
import { Gp } from "./index_3.ts";
import { ND } from "./interaction-queries.ts";
import { Qn, Wn } from "./log.js";
import { XTh } from "./mcpAuthQueryHandler.js";
import { dFn } from "./mcpProcessServerIdentifier.js";
import { QS, i0 } from "./modelConfigServiceTypes.js";
import { vtt } from "./modelNudgeUtils.js";
import { eo, ko } from "./opener.js";
import { lEh, mJv } from "./partialToolCallCoalescer.js";
import { uCt, zVt } from "./pendingApprovalRegistry.js";
import { Lh, NNt, Ut, b1g, f1g, qle, qn, rp, tle, uu, zle } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { CDn, L4i, N4i } from "./replace_env_tool_pb.js";
import { hLe, oTo } from "./responseComparisonState.js";
import { dT, l0 } from "./scm.js";
import { A4i, NGs, SDn } from "./setup_vm_environment_tool_pb.js";
import { Ebh } from "./shellToolCallHandler.js";
import { xUe } from "./simulatedMessageMetadataUtils.js";
import { cSt } from "./slimConversationStateForBubbleSnapshot.js";
import { Vn, yn } from "./storage_2.js";
import { jS } from "./store.js";
import { Xh, im } from "./structuredLog.js";
import { VTh } from "./switchModeQueryHandler.js";
import { OTh } from "./taskToolCallHandler.js";
import { cEh, pJv } from "./textDeltaCoalescer.js";
import { Abh } from "./todoToolCallHandler.js";
import { nt, ql } from "./tools_pb.js";
import { yv } from "./tracing_2.js";
import { FNn, SVi } from "./transcriptVisibilityService.js";
import { x } from "./tslib.es6.js";
import { B1e } from "./types_10.js";
import { Ee, Qt } from "./uri.js";
import { Ukt, bet } from "./usageLimitPolicyStatusService.js";
import { Ku } from "./utilities_3.js";
import { NKe, hu, io, vk } from "./utils_pb.js";
import { Js, zn } from "./uuid.js";
import { qTh } from "./webFetchQueryHandler.js";
import { jTh } from "./webSearchQueryHandler.js";
import { ci } from "./workspace.js";
import { lde } from "./writable-iterable.ts";
import { U7v } from "./xmo.js";
function gJv() {
    let e = {
        parentResponse: "",
        alternateResponse: "",
        phase: "waiting",
        selected: void 0,
        parentDwellMs: 0,
        alternateDwellMs: 0
    }, t = {
        activePosition: "a"
    };
    const n = new Set;
    let i, r, s = !1, o = !1;
    const a = ()=>{
        e.phase !== "complete" || !s || i === void 0 || o || (o = !0, i({
            selectedCandidate: e.selected,
            parentDwellMs: e.parentDwellMs,
            alternateDwellMs: e.alternateDwellMs
        }));
    };
    return {
        getSnapshot: ()=>e,
        subscribe: (c)=>(n.add(c), ()=>n.delete(c)),
        update: (c)=>{
            e = {
                ...e,
                ...c
            };
            for (const l of n)l();
        },
        getViewState: ()=>t,
        updateViewState: (c)=>{
            t = {
                ...t,
                ...c
            };
        },
        setOutcomeHandler: (c)=>{
            i = c, a();
        },
        setBeforeOutcomeFinalize: (c)=>{
            r = c;
        },
        finalizeOutcome: ()=>{
            e.phase !== "complete" || o || (r?.(), s = !0, a());
        }
    };
}
function uEh(e) {
    let t = hLe.get(e);
    if (t !== void 0) return t;
    const [n, i] = Ut(0, {
        internal: !0
    });
    return t = {
        comparisons: new Map,
        revision: n,
        setRevision: i
    }, hLe.set(e, t), t;
}
function QQi(e) {
    e.setRevision((t)=>t + 1);
}
function dEh(e, t) {
    const n = uEh(e);
    for (const o of n.comparisons.keys())o !== t.generationId && (n.comparisons.get(o)?.state.session.finalizeOutcome(), n.comparisons.delete(o));
    const i = n.comparisons.get(t.generationId);
    if (i?.state.session.getSnapshot().phase === "complete") return;
    if (i?.state.comparisonId === t.comparisonId) {
        i.parentResponse.length === 0 && t.parentResponse.length > 0 && (i.parentResponse = t.parentResponse, i.state.parentInvocationId = t.parentInvocationId, i.state.session.update({
            phase: "streaming"
        }));
        return;
    }
    i?.state.session.finalizeOutcome();
    const r = gJv();
    t.parentResponse.length > 0 && r.update({
        phase: "streaming"
    });
    const s = {
        state: {
            comparisonId: t.comparisonId,
            generationId: t.generationId,
            displayOrder: t.displayOrder,
            parentInvocationId: t.parentInvocationId,
            alternateInvocationId: t.alternateInvocationId,
            comparisonConfigId: t.comparisonConfigId,
            alternateModelId: t.alternateModelId,
            session: r
        },
        parentResponse: t.parentResponse,
        alternateResponse: ""
    };
    n.comparisons.set(t.generationId, s), QQi(n);
}
function hEh(e, t, n, i) {
    const r = hLe.get(e)?.comparisons.get(t);
    r?.state.comparisonId !== n || r.state.session.getSnapshot().phase !== "streaming" || (r.alternateResponse += i);
}
function pEh(e, t, n) {
    const i = hLe.get(e)?.comparisons.get(t);
    if (i?.state.comparisonId !== n || i.state.session.getSnapshot().phase !== "streaming") return;
    if (i.parentResponse.trim().length === 0 || i.alternateResponse.trim().length === 0) {
        JQi(e, t, n);
        return;
    }
    i.state.session.update({
        parentResponse: i.parentResponse,
        alternateResponse: i.alternateResponse,
        phase: "complete"
    });
    const r = hLe.get(e);
    r !== void 0 && QQi(r);
}
function JQi(e, t, n) {
    const i = hLe.get(e), r = i?.comparisons.get(t);
    i === void 0 || r === void 0 || n !== void 0 && r.state.comparisonId !== n || (r.state.session.finalizeOutcome(), i.comparisons.delete(t), QQi(i));
}
function eJi(e, t, n) {
    const i = hLe.get(e)?.comparisons.get(t);
    i?.state.comparisonId === n && i.state.session.getSnapshot().phase !== "complete" && JQi(e, t, n);
}
function fJv(e, t) {
    const n = hLe.get(e)?.comparisons.get(t);
    n !== void 0 && n.state.session.getSnapshot().phase !== "complete" && JQi(e, t);
}
function vJv(e, t) {
    const n = hLe.get(e);
    if (n === void 0) return;
    let i = !1;
    for (const r of n.comparisons.keys())r !== t && (n.comparisons.get(r)?.state.session.finalizeOutcome(), n.comparisons.delete(r), i = !0);
    i && QQi(n);
}
function _Jv(e, t = 16) {
    const n = e.split(/(\s+)/), i = [];
    let r = "";
    for (const s of n)r += s, r.length >= t && (i.push(r), r = "");
    return r.length > 0 && (i.length > 0 && r.trim().length === 0 ? i[i.length - 1] += r : i.push(r)), i;
}
function gEh(e) {
    return e.text.length > 0 && !e.isServerNotice;
}
function fEh(e) {
    if (!e.isServerNotice) return;
    const t = yEh.exec(e.text)?.[1];
    return t === void 0 || t.length === 0 ? void 0 : t;
}
function vEh(e) {
    return !e.isLocalMode && !e.isAgentHostEnabled && !e.isNewRequestIdGateEnabled();
}
var cTo, lTo, uTo, dTo, _Eh, bEh, hTo, yEh, pTo, Ltt;
export { JQi, Ltt, QQi, _Eh, _Jv, bEh, cTo, dEh, dTo, eJi, fEh, fJv, gEh, gJv, hEh, hTo, lTo, pEh, pTo, uEh, uTo, vEh, vJv, yEh };
var __wakaru_Cjt_initialized = false;
export function Cjt() {
if (__wakaru_Cjt_initialized) return;
__wakaru_Cjt_initialized = true;
"use strict";
x(), z3(), zd(), NGs(), N4i(), ql(), Jh(), Gp(), qn(), jS(), zd(), Hu(), hu(), z3(), Jm(), Yu(), am(), M1e(), bn(), si(), B1e(), Se(), Js(), ko(), ci(), Qt(), yv(), Qn(), im(), dFn(), p2(), FKe(), ZYi(), rtt(), hq(), _q(), fwo(), vwo(), Wf(), nl(), jro(), vtt(), z5(), cSt(), rE(), zVt(), dT(), xUe(), la(), G$(), R1(), j_e(), KX(), i0(), qs(), A$(), Za(), hpo(), $Fn(), aJv(), dJv(), pJv(), mJv(), aZd(), SVi(), bet(), Ha(), Ku(), Vn(), $1e(), oTo(), cTo = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), lTo = (e)=>{
    throw TypeError(e);
}, uTo = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && lTo("Object expected");
        var i, r;
        n && (i = t[cTo("asyncDispose")]), i === void 0 && (i = t[cTo("dispose")], n && (r = i)), typeof i != "function" && lTo("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, dTo = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
}, _Eh = 200, bEh = 16, hTo = class {
    constructor(e){
        this.onChunk = e, this.timer = new bI, this.queue = [], this.currentChunks = [], this.currentChunkIndex = 0, this.isDisposed = !1;
    }
    enqueue(e) {
        this.isDisposed || (this.currentChunks.length > 0 && this.currentChunkIndex < this.currentChunks.length && this.flushCurrentChunks(), this.queue.push(e), (this.currentChunks.length === 0 || this.currentChunkIndex >= this.currentChunks.length) && this.startNextSummary());
    }
    flush() {
        for(this.timer.cancel(), this.flushCurrentChunks(); this.queue.length > 0;){
            const e = this.queue.shift();
            this.onChunk(e);
        }
    }
    flushCurrentChunks() {
        this.currentChunkIndex < this.currentChunks.length && this.onChunk(this.currentChunks.slice(this.currentChunkIndex).join("")), this.currentChunks = [], this.currentChunkIndex = 0;
    }
    startNextSummary() {
        if (this.queue.length === 0) {
            this.timer.cancel(), this.currentChunks = [], this.currentChunkIndex = 0;
            return;
        }
        const e = this.queue.shift();
        if (this.currentChunks = _Jv(e, bEh), this.currentChunkIndex = 0, this.currentChunks.length === 0) {
            this.startNextSummary();
            return;
        }
        const t = _Eh / Math.max(this.currentChunks.length, 1);
        this.timer.cancelAndSet(()=>{
            if (!this.isDisposed) {
                if (this.currentChunkIndex < this.currentChunks.length && (this.onChunk(this.currentChunks[this.currentChunkIndex]), this.currentChunkIndex++, this.queue.length > 0 && this.currentChunkIndex < this.currentChunks.length)) {
                    this.flushCurrentChunks(), this.startNextSummary();
                    return;
                }
                this.currentChunkIndex >= this.currentChunks.length && this.startNextSummary();
            }
        }, t);
    }
    dispose() {
        this.isDisposed = !0, this.timer.dispose(), this.queue.length = 0, this.currentChunks = [], this.currentChunkIndex = 0;
    }
}, yEh = /^> Auto routed to (.+?)\s*$/, pTo = class ICm {
    constructor(t, n, i, r, s){
        this.instantiationService = t, this.composerDataHandle = n, this.conversationActionManager = i, this.generationUUID = r, this.hasReceivedFirstToken = !1, this.disposed = !1, this.toolCallIdToBubbleId = new Map, this.toolCallIdIndex = void 0, this.toolCallIdIndexSource = void 0, this.unfinishedToolCallIds = new Set, this.tracedPartialToolCallIds = new Set, this.postTurnEndedWorkQueue = [], this.handledCanvasPaths = new Set, this.canvasWrittenPaths = new Set, this.textDeltaCoalescer = new cEh((a, c)=>{
            this.isActiveForCurrentGeneration() && this.handleTextDelta(a.ctx, c, a.timing);
        }, {
            getOptions: ()=>this.getTextDeltaPacingOptions(),
            isActive: ()=>this.isTranscriptVisibleForPacing()
        }), this.partialToolCallCoalescer = new lEh((a)=>{
            this.isActiveForCurrentGeneration() && Lh(()=>{
                for (const { bubbleId: c, toolFormerData: l } of a.values())this.upsertToolFormerBubbleData(c, l);
            });
        }), this.hooks = s ?? {}, this.promptSuggestionReqId = r ?? n.data.latestChatGenerationUUID, this.responseComparisonGenerationId = r ?? n.data.latestChatGenerationUUID, this.responseComparisonGenerationId !== void 0 && vJv(this.composerDataHandle, this.responseComparisonGenerationId), this.asyncOperationRegistry = t.invokeFunction((a)=>a.get(e8e)), this.scmService = t.invokeFunction((a)=>a.get(l0)), this.composerDataService = t.invokeFunction((a)=>a.get(Zs));
        const o = {
            instantiationService: t,
            composerDataHandle: n,
            conversationActionManager: i,
            onEditToolCallCompleted: this.hooks.onEditToolCallCompleted,
            onTodoToolCallCompleted: this.hooks.onTodoToolCallCompleted
        };
        this.shellToolCallHandler = new Ebh(o), this.editToolCallHandler = new Ibh(o), this.todoToolCallHandler = new Abh(o), this.taskToolCallHandler = new OTh(o), this.createPlanToolCallHandler = new BTh(o), this.askQuestionToolCallHandler = new $Th(o), this.askQuestionQueryHandler = new WTh({
            instantiationService: t,
            composerDataHandle: n,
            conversationActionManager: i,
            generationUUID: r,
            trackTrajectoryStopped: (a)=>this.trackTrajectoryStopped(a)
        }), this.switchModeQueryHandler = new VTh({
            instantiationService: t,
            composerDataHandle: n,
            conversationActionManager: i,
            generationUUID: r,
            trackTrajectoryStopped: (a)=>this.trackTrajectoryStopped(a)
        }), this.mcpAuthQueryHandler = new XTh({
            instantiationService: t,
            composerDataHandle: n,
            conversationActionManager: i,
            generationUUID: r,
            trackTrajectoryStopped: (a)=>this.trackTrajectoryStopped(a)
        }), this.connectScmQueryHandler = new nEh({
            instantiationService: t,
            composerDataHandle: n,
            conversationActionManager: i,
            generationUUID: r,
            trackTrajectoryStopped: (a)=>this.trackTrajectoryStopped(a),
            trackConnectScmDecision: (a)=>this.trackConnectScmDecision(a),
            trackConnectScmOutcome: (a)=>this.trackConnectScmOutcome(a)
        }), this.webSearchQueryHandler = new jTh({
            instantiationService: t,
            composerDataHandle: n,
            generationUUID: r,
            trackTrajectoryStopped: (a)=>this.trackTrajectoryStopped(a)
        }), this.webFetchQueryHandler = new qTh({
            instantiationService: t,
            composerDataHandle: n,
            generationUUID: r,
            trackTrajectoryStopped: (a)=>this.trackTrajectoryStopped(a),
            trackApprovalCardShown: (a)=>this.trackApprovalCardShown(a)
        }), this.hostApprovalQueryHandler = new rEh({
            instantiationService: t,
            composerDataHandle: n
        }), this.createPlanQueryHandler = new UTh({
            instantiationService: t,
            composerDataHandle: n
        }), this.specialToolHandlers = new Map, this.specialToolHandlers.set("editToolCall", this.editToolCallHandler), this.specialToolHandlers.set("updateTodosToolCall", this.todoToolCallHandler), this.specialToolHandlers.set("shellToolCall", this.shellToolCallHandler), this.specialToolHandlers.set("createPlanToolCall", this.createPlanToolCallHandler), this.specialToolHandlers.set("taskToolCall", this.taskToolCallHandler), this.specialToolHandlers.set("askQuestionToolCall", this.askQuestionToolCallHandler);
    }
    resolveConversationParentAgentId() {
        return this.conversationParentAgentId ??= this.hooks.resolveConversationParentAgentId?.()?.trim() || this.composerDataHandle.data.subagentInfo?.parentComposerId?.trim() || void 0, this.conversationParentAgentId;
    }
    refreshUsageStatusAfterSuccessfulForegroundTurn() {
        const t = this.instantiationService.invokeFunction((a)=>a.get(Ukt)), n = this.composerDataHandle.data;
        if (n.unifiedMode === "background" || n.createdFromBackgroundAgent !== void 0 || n.createdFromLocalScheduledTask !== void 0 || n.subagentInfo !== void 0 || n.isBestOfNSubcomposer === !0) {
            t.refetch(!0);
            return;
        }
        const i = this.instantiationService.invokeFunction((a)=>rh(a.get(yn), "modelNudgesEnabled")), r = this.instantiationService.invokeFunction((a)=>a.get(QS)), s = hqv(r.getEffectiveModelConfigForComposer(this.composerDataHandle), r), o = this.instantiationService.invokeFunction((a)=>a.get(Do).applicationUserPersistentStorage);
        if (s === void 0 || WVt(s.modelId, o)) {
            t.refetch(!0);
            return;
        }
        t.refetchForModelRecommendation(new c$i({
            currentModel: s,
            supportsThirdPartyUsageNudge: !0,
            modelNudgesEnabled: i
        })).then((a)=>{
            if (this.disposed || a === void 0) return;
            const c = this.instantiationService.invokeFunction((h)=>h.get(Zs)), l = this.instantiationService.invokeFunction((h)=>h.get(Do).applicationUserPersistentStorage), u = this.instantiationService.invokeFunction((h)=>rh(h.get(yn), "modelNudgesEnabled"));
            fqv({
                composerDataHandle: this.composerDataHandle,
                emptyStateDraftHandle: c.getHandleIfLoaded(moe),
                nudge: a,
                userSettings: l,
                aiSettingsService: this.instantiationService.invokeFunction((h)=>h.get(J3)),
                adminSettingsService: this.instantiationService.invokeFunction((h)=>h.get(pw)),
                analyticsService: this.instantiationService.invokeFunction((h)=>h.get(ca)),
                modelConfigService: r,
                modelNudgesEnabled: u
            });
        }).catch((a)=>{
            try {
                this.instantiationService.invokeFunction((c)=>c.get(Wn)).error("[AgentResponseAdapter] failed to apply model recommendation", a);
            } catch  {
                ns(a);
            }
        });
    }
    getToolFormer() {
        const n = this.composerDataHandle.data.capabilities.find((i)=>i.type === ps.TOOL_FORMER);
        if (!n) throw new Error("ToolFormer not found");
        return n;
    }
    trackTrajectoryStopped(t) {
        try {
            this.instantiationService.invokeFunction((i)=>i.get(ca)).trackEvent("composer.agent_trajectory_stopped", t);
        } catch  {}
    }
    trackApprovalCardShown(t) {
        try {
            this.instantiationService.invokeFunction((i)=>i.get(ca)).trackEvent("smart_mode.approval_card_shown", t);
        } catch  {}
    }
    trackConnectScmDecision(t) {
        try {
            this.instantiationService.invokeFunction((i)=>i.get(ca)).trackEvent("connect_scm.decision", t);
        } catch  {}
    }
    trackConnectScmOutcome(t) {
        try {
            this.instantiationService.invokeFunction((i)=>i.get(ca)).trackEvent("connect_scm.outcome", t);
        } catch  {}
    }
    notifyFirstTokenIfNeeded() {
        this.hasReceivedFirstToken || (this.hasReceivedFirstToken = !0, this.hooks.onFirstToken?.());
    }
    notifyBeforeUpdate() {
        this.hasReceivedFirstToken && this.hooks.onBeforeNextUpdate?.();
    }
    notifyAfterUpdate() {
        this.hooks.onAfterUpdate?.();
    }
    shouldTraceInteractionUpdate(t) {
        const n = t.message.case;
        return !(n === void 0 || ICm.HIGH_FREQUENCY_UPDATE_CASES.has(n) || n === "responseComparison" && t.message.value.event.case === "textDelta");
    }
    getMcpToolCallTelemetry(t) {
        if (t?.tool.case !== "mcpToolCall") return;
        const n = t.tool.value.args, i = n?.providerIdentifier, r = n?.toolName;
        if (!(!i || !r)) return {
            serverIdentifier: U7v(i),
            toolName: r
        };
    }
    createToolProcessingSpan(t, n, i, r) {
        const s = S_(t.withName(n));
        return s.span.setAttribute("agent.tool_call_id", i), s.span.setAttribute("tool.name", r), s;
    }
    getExistingToolFormerBubbleId(t) {
        const n = this.toolCallIdToBubbleId.get(t);
        if (n !== void 0) return n;
        const r = this.composerDataService.getLoadedConversation(this.composerDataHandle);
        if (this.toolCallIdIndex === void 0 || this.toolCallIdIndexSource !== r) {
            const o = new Map;
            for (const a of r){
                const c = uu(a), l = c.toolFormerData?.toolCallId;
                l !== void 0 && !o.has(l) && o.set(l, c.bubbleId);
            }
            this.toolCallIdIndex = o, this.toolCallIdIndexSource = r;
        }
        const s = this.toolCallIdIndex.get(t);
        return s !== void 0 && this.toolCallIdToBubbleId.set(t, s), s;
    }
    upsertToolFormerBubbleData(t, n) {
        this.composerDataService.updateComposerBubbleSetStore(this.composerDataHandle, t, (r)=>{
            r("toolFormerData", (s)=>{
                if (s === void 0) return n;
                const o = n, a = s, c = {};
                for (const h of Object.keys(o))h === "params" || h === "result" || h === "additionalData" || h === "attachments" || h === "userDecision" || Object.is(o[h], a[h]) || (c[h] = o[h]);
                const l = n.tool !== void 0 && n.tool !== s.tool;
                n.params !== void 0 ? c.params = n.params : l && s.params !== void 0 && (c.params = void 0), n.result !== void 0 ? c.result = n.result : l && s.result !== void 0 && (c.result = void 0), n.attachments !== void 0 && (c.attachments = n.attachments), n.userDecision !== void 0 && (c.userDecision = n.userDecision);
                const u = this.mergeToolFormerAdditionalData(n, s);
                return u !== s.additionalData && (c.additionalData = u), Object.keys(c).length === 0 ? s : c;
            });
        }), this.toolCallIdToBubbleId.set(n.toolCallId, t);
    }
    mergeToolFormerAdditionalData(t, n) {
        return t.additionalData === void 0 ? n?.additionalData : t.tool === nt.READ_MCP_RESOURCE && n?.tool === nt.READ_MCP_RESOURCE && t.additionalData.status === "pending" && t.additionalData.reviewData === void 0 && n.additionalData?.reviewData !== void 0 ? {
            ...n.additionalData,
            ...t.additionalData,
            reviewData: n.additionalData.reviewData
        } : t.additionalData;
    }
    getOrCreateToolFormerBubbleId(t, n) {
        const i = this.getExistingToolFormerBubbleId(n.toolCallId);
        if (i !== void 0) return i;
        const r = this.composerDataService;
        if (r.getComposerData(this.composerDataHandle) === void 0) return;
        const s = {
            ...Af(),
            codeBlocks: [],
            type: Tr.AI,
            text: "",
            capabilityType: ps.TOOL_FORMER,
            toolFormerData: n
        }, o = s.bubbleId;
        if (Lh(()=>{
            r.appendComposerBubbles(this.composerDataHandle, [
                s
            ], L4e(t)), r.updateComposerDataSetStore(this.composerDataHandle, (a)=>a("generatingBubbleIds", []));
        }), r.getComposerBubble(this.composerDataHandle, o) !== void 0) return this.instantiationService.invokeFunction((a)=>{
            a.get(uCt).signalBubbleCreated(this.composerDataHandle.composerId, n.toolCallId);
        }), this.toolCallIdToBubbleId.set(n.toolCallId, o), o;
    }
    markToolCallAsUnfinished(t) {
        this.unfinishedToolCallIds.add(t);
    }
    markToolCallAsFinished(t) {
        this.unfinishedToolCallIds.delete(t), this.tracedPartialToolCallIds.delete(t);
    }
    isArglessTaskPartialToolCall(t) {
        return t.tool.case === "taskToolCall" && t.tool.value.args === void 0;
    }
    addToolCallSizeBreadcrumbData(t, n) {
        switch(n.tool.case){
            case "readToolCall":
                {
                    const i = n.tool.value.result?.result;
                    if (i?.case === "success") {
                        const r = i.value.output;
                        r?.case === "content" && (t.charsRead = r.value.length), i.value.fileSize !== void 0 && (t.fileSize = Number(i.value.fileSize)), t.totalLines = i.value.totalLines;
                    }
                    break;
                }
            case "editToolCall":
                {
                    const i = n.tool.value.result?.result;
                    i?.case === "success" && (i.value.beforeFullFileContent !== void 0 && (t.beforeChars = i.value.beforeFullFileContent.length), i.value.afterFullFileContent !== void 0 && (t.afterChars = i.value.afterFullFileContent.length));
                    break;
                }
            case "shellToolCall":
                {
                    const i = n.tool.value.result?.result;
                    if (i?.case === "success" || i?.case === "failure") {
                        const r = i.value, s = (r.interleavedOutput?.length ?? 0) || (r.stdout?.length ?? 0) + (r.stderr?.length ?? 0);
                        t.outputChars = s;
                    }
                    break;
                }
            default:
                break;
        }
    }
    cancelUnfinishedToolCalls() {
        if (this.unfinishedToolCallIds.size === 0) return;
        const t = this.getToolFormer();
        for (const n of Array.from(this.unfinishedToolCallIds)){
            const i = this.getExistingToolFormerBubbleId(n);
            if (!i) {
                this.unfinishedToolCallIds.delete(n);
                continue;
            }
            const r = t.getBubbleData(i);
            if (!r) {
                this.unfinishedToolCallIds.delete(n);
                continue;
            }
            if (r.tool === nt.TASK_V2 && this.composerDataHandle.data.createdFromBackgroundAgent !== void 0 || (r.tool === nt.TASK_V2 || r.tool === nt.RUN_TERMINAL_COMMAND_V2) && r.additionalData?.backgrounded === !0) {
                this.unfinishedToolCallIds.delete(n);
                continue;
            }
            if (r.status === "loading") {
                const s = r.additionalData;
                let o;
                s && typeof s == "object" && "status" in s && (o = {
                    ...s,
                    status: "cancelled"
                }), t.setBubbleData(i, {
                    status: "cancelled",
                    ...o ? {
                        additionalData: o
                    } : {}
                });
            }
            this.stampCancelledToolTiming(i), this.unfinishedToolCallIds.delete(n);
        }
    }
    stampCancelledToolTiming(t) {
        const n = this.composerDataService.getComposerBubbleUntracked(this.composerDataHandle, t), i = oZd({
            startedAtMs: void 0,
            completedAtMs: void 0
        }, n ?? {}, Date.now());
        i.startedAtMs === void 0 || i.completedAtMs === void 0 || this.stampBubbleTiming(t, i);
    }
    isActiveForCurrentGeneration() {
        const t = fDd(this.composerDataHandle);
        return t === void 0 ? !1 : this.generationUUID === void 0 || t.chatGenerationUUID === this.generationUUID;
    }
    flushPendingTextDeltas() {
        this.textDeltaCoalescer.flush();
    }
    dropUnpaintedDeltas() {
        this.textDeltaCoalescer.dropPending(), this.partialToolCallCoalescer.dropPending();
    }
    getLastInFlightBubble() {
        const t = this.composerDataService.getComposerData(this.composerDataHandle);
        if (!t) return;
        const n = t.fullConversationHeadersOnly, i = cso(t.queueItems ?? []);
        for(let a = n.length - 1; a >= 0; a--){
            const c = n[a];
            if (c.type !== Tr.HUMAN) break;
            if (t.conversationMap[c.bubbleId]?.isOptimistic === !0) i.add(c.bubbleId);
            else if (!i.has(c.bubbleId)) break;
        }
        let r = n.length;
        for(; r > 0 && n[r - 1]?.type === Tr.HUMAN;)r--;
        const s = r + sPd({
            headers: n.slice(r).map((a)=>({
                    bubbleId: a.bubbleId,
                    isHuman: !0
                })),
            unconfirmedSteerMessageIds: i
        }), o = n[s - 1];
        if (o !== void 0) return t.conversationMap[o.bubbleId];
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.isActiveForCurrentGeneration() ? this.textDeltaCoalescer.dispose() : this.textDeltaCoalescer.disposeWithoutFlush(), this.partialToolCallCoalescer.dispose(), this.cancelUnfinishedToolCalls(), this.thinkingWordStreamer?.flush(), Pk(this.askQuestionQueryHandler, this.thinkingWordStreamer, this.taskToolCallHandler, this.shellToolCallHandler, this.editToolCallHandler), this.thinkingWordStreamer = void 0, this.responseComparisonGenerationId !== void 0 && fJv(this.composerDataHandle, this.responseComparisonGenerationId));
    }
    handleResponseComparison(t) {
        const n = t.message, i = this.responseComparisonGenerationId;
        if (n.case !== "responseComparison" || i === void 0) return;
        const r = n.value.comparisonId;
        try {
            switch(n.value.event.case){
                case "started":
                    {
                        const s = n.value.event.value;
                        let o;
                        switch(s.displayOrder){
                            case FDn.PARENT_FIRST:
                                o = "parent-first";
                                break;
                            case FDn.ALTERNATE_FIRST:
                                o = "alternate-first";
                                break;
                            case FDn.UNSPECIFIED:
                            default:
                                eJi(this.composerDataHandle, i, r);
                                return;
                        }
                        const a = s.parentResponse;
                        if (s.parentInvocationId.length === 0 || s.alternateInvocationId.length === 0) {
                            eJi(this.composerDataHandle, i, r);
                            return;
                        }
                        dEh(this.composerDataHandle, {
                            generationId: i,
                            comparisonId: r,
                            displayOrder: o,
                            parentInvocationId: s.parentInvocationId,
                            alternateInvocationId: s.alternateInvocationId,
                            parentResponse: a,
                            comparisonConfigId: s.comparisonConfigId,
                            alternateModelId: s.alternateModelId
                        });
                        break;
                    }
                case "textDelta":
                    hEh(this.composerDataHandle, i, r, n.value.event.value.text);
                    break;
                case "completed":
                    pEh(this.composerDataHandle, i, r);
                    break;
                case "skipped":
                case void 0:
                    eJi(this.composerDataHandle, i, r);
                    break;
                default:
                    {
                        const s = n.value.event;
                        break;
                    }
            }
        } catch (s) {
            throw eJi(this.composerDataHandle, i, r), s;
        }
    }
    isAutoRoutingResultDisplayEnabled() {
        return this.instantiationService.invokeFunction((t)=>t.get(Kr).getFeatureGateProperty("composer_auto_routing_result_display").nonReactive());
    }
    handleRoutedModel(t) {
        if (t.length === 0) return;
        this.pendingRoutedModelLabel = t;
        const n = this.composerDataService.getLastHumanBubble(this.composerDataHandle);
        n !== void 0 && n.routedModelLabel !== t && this.composerDataService.updateComposerBubbleSetStore(this.composerDataHandle, n.bubbleId, (i)=>{
            i("routedModelLabel", t);
        });
    }
    async handleToolCallDelta(t, n) {
        const i = n.message;
        if (i.case !== "toolCallDelta") return;
        this.notifyFirstTokenIfNeeded();
        const r = this.composerDataHandle.data.composerId, s = i.value.callId, o = i.value.toolCallDelta?.delta.case, a = i.value.toolCallDelta?.delta.value;
        if (o && a) {
            const c = o.replace(/Delta$/, ""), l = this.specialToolHandlers.get(c);
            l && await zPe(this.asyncOperationRegistry, r, "process_tool_call_delta", ()=>l.handleToolCallDelta(t, a, s), {
                lastToolCallId: s,
                lastToolName: c
            });
        }
    }
    async handlePartialToolCall(t, n) {
        var i = [];
        try {
            const o = n.message;
            if (o.case !== "partialToolCall") return;
            this.notifyFirstTokenIfNeeded();
            const a = o.value.toolCall;
            if (!a) return;
            const c = a.tool.case, l = o.value.callId;
            if (this.isArglessTaskPartialToolCall(a) || this.markToolCallAsUnfinished(l), !c) return;
            const u = !this.tracedPartialToolCallIds.has(l);
            u && this.tracedPartialToolCallIds.add(l);
            const h = uTo(i, u ? this.createToolProcessingSpan(t, "processPartialToolCall", l, c) : void 0), p = this.specialToolHandlers.get(c);
            if (p) {
                await p.handlePartialToolCall(a, l);
                return;
            }
            try {
                const g = await x2n(a, l, this.instantiationService, {
                    conversationParentAgentId: this.resolveConversationParentAgentId()
                }), f = this.getExistingToolFormerBubbleId(l);
                if (f !== void 0) {
                    this.partialToolCallCoalescer.enqueue(l, {
                        bubbleId: f,
                        toolFormerData: g
                    });
                    return;
                }
                Lh(()=>{
                    const v = this.getOrCreateToolFormerBubbleId(t, g);
                    v !== void 0 && this.upsertToolFormerBubbleData(v, g);
                });
            } catch (g) {
                if (g instanceof Error && g.message.includes("Unsupported tool type")) {
                    this.handleTextDelta(t, `[Tool: ${c}]
`);
                    return;
                }
                throw g;
            }
        } catch (o) {
            var r = o, s = !0;
        } finally{
            dTo(i, r, s);
        }
    }
    async handleToolCallStarted(t, n) {
        const i = n.message;
        if (i.case !== "toolCallStarted") return;
        this.notifyFirstTokenIfNeeded();
        const r = this.composerDataHandle.data.composerId, s = i.value.toolCall;
        if (!s) return;
        const o = s.tool.case, a = i.value.callId;
        this.markToolCallAsUnfinished(a), o && await zPe(this.asyncOperationRegistry, r, "process_tool_call_started", async ()=>{
            const c = this.specialToolHandlers.get(o);
            if (c) {
                await c.handleToolCallStarted(s, a);
                return;
            }
            try {
                const l = await x2n(s, a, this.instantiationService, {
                    conversationParentAgentId: this.resolveConversationParentAgentId()
                });
                Lh(()=>{
                    const u = this.getOrCreateToolFormerBubbleId(t, l);
                    u !== void 0 && this.upsertToolFormerBubbleData(u, l);
                });
            } catch (l) {
                if (l instanceof Error && l.message.includes("Unsupported tool type")) this.handleTextDelta(t, `[Tool: ${o}]
`);
                else throw l;
            }
        }, {
            lastToolCallId: a,
            lastToolName: o
        });
    }
    async handleToolCallCompleted(t, n) {
        const i = n.message;
        if (i.case !== "toolCallCompleted") return;
        const r = this.composerDataHandle.data.composerId, s = i.value.callId, o = i.value.toolCall;
        if (!o) return;
        const a = o.tool.case;
        if (this.markToolCallAsFinished(s), a === "deleteToolCall") {
            const c = o.tool.value, l = c.args?.path, u = c.result?.result?.case === "success";
            l && u && this.instantiationService.invokeFunction((h)=>{
                const p = h.get(Tse), v = h.get(Zs).getComposerData(this.composerDataHandle)?.modelConfig?.modelName;
                p.recordAiDeletedFile(l, {
                    composerId: r,
                    model: v
                }).catch((b)=>{
                    console.error("[AgentResponseAdapter] Error recording AI deleted file:", b);
                });
            });
        }
        if (a === "editToolCall") {
            const c = o.tool.value, l = c.args?.path, u = c.result?.result?.case === "success";
            l && u && zle(l) && this.canvasWrittenPaths.add(l);
        }
        if (a === "switchModeToolCall") {
            const c = o.tool.value, l = c.result?.result?.case === "success" ? c.result.result.value.toModeId : void 0;
            l && this.hooks.onSwitchModeToolCallCompleted?.({
                targetModeId: l
            });
        }
        await zPe(this.asyncOperationRegistry, r, "process_tool_call_completed", async ()=>{
            if (a) {
                const c = this.specialToolHandlers.get(a);
                if (c) {
                    const l = this.getToolExecutionLocation(a);
                    await zPe(this.asyncOperationRegistry, r, l, ()=>c.handleToolCallCompleted(o, s), {
                        lastToolCallId: s,
                        lastToolName: a
                    });
                    const u = this.getToolFormer(), h = u.getBubbleIdByToolCallId(s);
                    h && u.setBubbleData(h, {
                        toolCall: o
                    });
                    return;
                }
                try {
                    const l = await x2n(o, s, this.instantiationService, {
                        conversationParentAgentId: this.resolveConversationParentAgentId()
                    });
                    Lh(()=>{
                        const u = this.getOrCreateToolFormerBubbleId(t, l);
                        u !== void 0 && this.upsertToolFormerBubbleData(u, l);
                    });
                } catch (l) {
                    if (l instanceof Error && l.message.includes("Unsupported tool type")) {
                        this.handleTextDelta(t, `[Tool: ${a}]
`);
                        return;
                    }
                    throw l;
                }
            }
        }, {
            lastToolCallId: s,
            lastToolName: a
        });
    }
    getToolExecutionLocation(t) {
        switch(t){
            case "shellToolCall":
                return "tool_execution_shell";
            case "editToolCall":
                return "tool_execution_edit";
            case "taskToolCall":
                return "tool_execution_task";
            default:
                return "tool_execution_other";
        }
    }
    async maybeSurfaceCanvas() {
        const t = this.instantiationService.invokeFunction((c)=>c.get(Zs)), n = this.instantiationService.invokeFunction((c)=>c.get(Wn)), i = this.instantiationService.invokeFunction((c)=>c.get(Xh)), r = f1g({
            writtenPaths: this.canvasWrittenPaths,
            handledPaths: this.handledCanvasPaths
        });
        if (r.paths.length === 0) {
            this.canvasWrittenPaths.size > 0 && $_e(i, "Canvas detection: all written paths already handled", {
                composerId: this.composerDataHandle.data.composerId,
                writtenPathCount: this.canvasWrittenPaths.size,
                handledPathCount: this.handledCanvasPaths.size
            });
            return;
        }
        const s = this.composerDataHandle.data.composerId;
        $_e(i, "Canvas detected via tool write", {
            composerId: s
        });
        const o = new Set;
        for (const c of this.composerDataHandle.data.newlyCreatedFiles ?? [])o.add(c.uri.fsPath);
        const a = b1g({
            decision: r,
            headers: this.composerDataHandle.data.fullConversationHeadersOnly,
            existingActiveCanvas: qle(this.composerDataHandle.data.activeCanvas),
            newlyCreatedFilePaths: o,
            isHuman: (c)=>c.type === Tr.HUMAN,
            handledPaths: this.handledCanvasPaths,
            applyActiveCanvas: (c, l)=>{
                t.updateComposerDataSetStore(this.composerDataHandle, (u)=>{
                    u("activeCanvas", c), l && u("canvasPillCollapsed", !1);
                });
            }
        });
        a.applied ? $_e(i, "Canvas surfaced", {
            composerId: s,
            detectionSource: "tool_write"
        }) : n.error("[AgentResponseAdapter] Failed to surface canvas:", r.paths.join(", "), a.error);
    }
    stampBubbleTiming(t, n) {
        if (t === void 0) return;
        const i = this.composerDataService.getComposerBubbleUntracked(this.composerDataHandle, t);
        if (i === void 0) return;
        const r = VWt(i, n);
        r !== i && this.composerDataService.updateComposerBubbleSetStore(this.composerDataHandle, t, (s)=>{
            s("createdAt", r.createdAt), s("startedAtMs", r.startedAtMs), s("completedAtMs", r.completedAtMs);
        });
    }
    stampToolCallTiming(t) {
        const n = t.message;
        if (n.case !== "toolCallStarted" && n.case !== "toolCallCompleted" && n.case !== "partialToolCall") return;
        const i = n.value.toolCall;
        if (i === void 0) return;
        const r = this.getExistingToolFormerBubbleId(n.value.callId), s = Aet({
            kind: "tool",
            toolCall: i
        });
        if (n.case !== "toolCallCompleted") {
            this.stampBubbleTiming(r, s);
            return;
        }
        const o = r ? this.composerDataService.getComposerBubbleUntracked(this.composerDataHandle, r) : void 0;
        this.stampBubbleTiming(r, oZd(s, o ?? {}, Date.now()));
    }
    handleTextDelta(t, n, i) {
        if (n.length === 0) return;
        this.partialToolCallCoalescer.flush(), this.cancelUnfinishedToolCalls();
        const r = this.composerDataService, s = r.getComposerData(this.composerDataHandle);
        if (!s) return;
        const o = this.getLastInFlightBubble(), a = o !== void 0 && s.generatingBubbleIds?.includes(o.bubbleId) === !0, c = o?.type !== Tr.AI || o.capabilityType !== void 0 || !a;
        let l = !c && o !== void 0 ? o : void 0;
        if (c) {
            const p = VWt({
                ...Af(),
                codeBlocks: [],
                type: Tr.AI,
                text: ""
            }, i);
            Lh(()=>{
                r.appendComposerBubbles(this.composerDataHandle, [
                    p
                ], L4e(t)), r.updateComposerDataSetStore(this.composerDataHandle, (g)=>g("generatingBubbleIds", [
                        p.bubbleId
                    ]));
            }), l = p;
        }
        const u = l ?? r.getLastAiBubble(this.composerDataHandle);
        if (!u) return;
        const h = u.text + n;
        r.updateComposerBubbleSetStore(this.composerDataHandle, u.bubbleId, (p)=>p("text", h));
    }
    appendThinkingText(t) {
        const n = this.currentThinkingBubbleId;
        if (!n) return;
        this.composerDataService.updateComposerBubbleSetStore(this.composerDataHandle, n, (r)=>r("thinking", (s)=>({
                    text: (s?.text ?? "") + t,
                    signature: s?.signature ?? ""
                })));
    }
    handleThinkingDelta(t, n, i, r) {
        const s = n.length === 0;
        this.cancelUnfinishedToolCalls(), this.notifyFirstTokenIfNeeded();
        const o = this.composerDataService, a = o.getComposerData(this.composerDataHandle);
        if (a) {
            if (!s && i === void 0 && this.currentThinkingBubbleId !== void 0) {
                const c = a.fullConversationHeadersOnly;
                if (c[c.length - 1]?.bubbleId === this.currentThinkingBubbleId) {
                    const u = a.conversationMap[this.currentThinkingBubbleId];
                    if (u?.capabilityType === ps.THINKING && u.thinkingDurationMs === void 0) {
                        this.thinkingWordStreamer || (this.thinkingWordStreamer = new hTo((h)=>this.appendThinkingText(h))), this.thinkingWordStreamer.enqueue(n);
                        return;
                    }
                }
            }
            Lh(()=>{
                const c = this.getLastInFlightBubble(), u = c?.capabilityType === ps.THINKING && c?.thinkingDurationMs === void 0;
                let h;
                if (u) h = c.bubbleId;
                else {
                    this.thinkingWordStreamer && this.thinkingWordStreamer.flush();
                    const g = VWt({
                        ...Af(),
                        type: Tr.AI,
                        text: "",
                        capabilityType: ps.THINKING
                    }, r);
                    h = g.bubbleId, o.appendComposerBubbles(this.composerDataHandle, [
                        g
                    ], L4e(t)), o.updateComposerDataSetStore(this.composerDataHandle, (f)=>f("generatingBubbleIds", [
                            g.bubbleId
                        ]));
                }
                this.currentThinkingBubbleId = h;
                const p = this.convertAgentThinkingStyleToConversationThinkingStyle(i);
                o.updateComposerBubbleSetStore(this.composerDataHandle, h, (g)=>g("thinkingStyle", (f)=>f ?? p)), s ? o.updateComposerBubbleSetStore(this.composerDataHandle, h, (g)=>g("thinking", (f)=>({
                            text: f?.text ?? "",
                            signature: f?.signature ?? ""
                        }))) : (this.thinkingWordStreamer || (this.thinkingWordStreamer = new hTo((g)=>this.appendThinkingText(g))), this.thinkingWordStreamer.enqueue(n));
            });
        }
    }
    convertAgentThinkingStyleToConversationThinkingStyle(t) {
        switch(t){
            case r$t.CODEX:
                return I4e.CODEX;
            case r$t.GPT5:
                return I4e.GPT5;
            case r$t.DEFAULT:
            case r$t.UNSPECIFIED:
            case void 0:
            default:
                return I4e.DEFAULT;
        }
    }
    emitAfterModelThought(t, n) {
        const i = this.instantiationService.invokeFunction((g)=>g.get(V$));
        if (!i.hasHookForStep(Lu.afterAgentThought)) return;
        const r = this.instantiationService.invokeFunction((g)=>g.get(QS)), s = this.composerDataService, o = s.getComposerData(this.composerDataHandle), a = o?.latestChatGenerationUUID ?? o?.chatGenerationUUID ?? "", c = s.getComposerBubble(this.composerDataHandle, t), l = c?.thinking?.text ?? "", u = o?.modelConfig, h = r.getHookModelString(u), p = r.getHookModelFields(u);
        c?.thinkingDurationMs === void 0 && i.executeHookForStep(Lu.afterAgentThought, {
            conversation_id: this.composerDataHandle.data.composerId,
            generation_id: a,
            text: l,
            duration_ms: n,
            model: h,
            ...p
        }).catch((g)=>{
            console.error("[composer] error executing afterAgentThought hook", g);
        });
    }
    handleThinkingCompleted(t) {
        const n = t.message;
        n.case === "thinkingCompleted" && Lh(()=>{
            this.thinkingWordStreamer && this.thinkingWordStreamer.flush();
            const i = this.composerDataService, r = this.getLastInFlightBubble();
            if (r?.capabilityType !== ps.THINKING) return;
            const s = r.bubbleId, o = n.value.thinkingDurationMs;
            this.emitAfterModelThought(s, o), i.updateComposerBubbleSetStore(this.composerDataHandle, s, (a)=>a("thinkingDurationMs", o)), i.updateComposerDataSetStore(this.composerDataHandle, (a)=>a("generatingBubbleIds", []));
        });
    }
    handleSummaryStarted(t) {
        const n = this.composerDataService;
        if (!n.getComposerData(this.composerDataHandle)) return;
        const r = this.getLastInFlightBubble();
        if (r?.capabilityType === ps.SUMMARIZATION) {
            n.updateComposerDataSetStore(this.composerDataHandle, (o)=>o("generatingBubbleIds", [
                    r.bubbleId
                ]));
            return;
        }
        const s = {
            ...Af(),
            type: Tr.AI,
            text: "",
            capabilityType: ps.SUMMARIZATION
        };
        Lh(()=>{
            n.appendComposerBubbles(this.composerDataHandle, [
                s
            ], L4e(t)), n.updateComposerDataSetStore(this.composerDataHandle, (o)=>o("generatingBubbleIds", [
                    s.bubbleId
                ]));
        });
    }
    handleSummaryCompleted(t, n, i) {
        const r = this.composerDataService, s = this.getLastInFlightBubble();
        s?.capabilityType === ps.SUMMARIZATION && (n && r.updateComposerBubble(this.composerDataHandle, s.bubbleId, {
            text: n
        }, L4e(t)), !(i === !0 && this.composerDataHandle.data.manualSummarization?.bubbleId === s.bubbleId) && r.updateComposerDataSetStore(this.composerDataHandle, (o)=>{
            o("generatingBubbleIds", []);
        }));
    }
    enqueuePostTurnEndedWork(t) {
        this.postTurnEndedWorkQueue.push(t);
    }
    async flushPostTurnEndedWork(t) {
        const n = this.postTurnEndedWorkQueue;
        this.postTurnEndedWorkQueue = [];
        for (const i of n)try {
            await i();
        } catch (r) {
            console.error("Error executing post-turn-ended work:", r);
        }
    }
    isTranscriptVisibleForPacing() {
        try {
            return this.transcriptVisibilityService ??= this.instantiationService.invokeFunction((t)=>t.get(FNn)), this.transcriptVisibilityService.isTranscriptVisible(this.composerDataHandle.data.composerId);
        } catch  {
            return !1;
        }
    }
    isQueuedPromptNewRequestIdEnabled() {
        try {
            return this.instantiationService.invokeFunction((n)=>n.get(Kr)).checkFeatureGate("agent_queued_prompt_new_request_id", {
                disableExposureLog: !1
            });
        } catch  {
            return !1;
        }
    }
    getTextDeltaPacingOptions() {
        const t = {
            targetCharsPerFrame: 24,
            maxLagFrames: 8,
            barrierMaxWaitMs: 250
        };
        try {
            const i = this.instantiationService.invokeFunction((a)=>a.get(Kr)).getDynamicConfig("text_delta_pacing_config", {
                disableExposureLog: !1
            }), r = typeof i.targetCharsPerFrame == "number" && i.targetCharsPerFrame > 0 ? i.targetCharsPerFrame : t.targetCharsPerFrame, s = typeof i.maxLagFrames == "number" && i.maxLagFrames >= 1 ? i.maxLagFrames : t.maxLagFrames, o = typeof i.barrierMaxWaitMs == "number" && i.barrierMaxWaitMs > 0 ? i.barrierMaxWaitMs : t.barrierMaxWaitMs;
            return {
                targetCharsPerFrame: r,
                maxLagFrames: s,
                barrierMaxWaitMs: o
            };
        } catch  {
            return t;
        }
    }
    async sendUpdate(t, n) {
        if (this.disposed) return;
        const i = fDd(this.composerDataHandle);
        if (i === void 0) {
            this.hooks.onInteractionUpdateDropped?.(n, "composer_not_loaded");
            return;
        }
        const r = n.message.case, s = r === "promptSuggestion" || r === "postRequestPrompt" || r === "grokBotNudge" || r === "feedbackRequest" || r === "responseComparison" || r === "contextInjectionState", o = i.chatGenerationUUID, a = i.latestChatGenerationUUID;
        if (r === "responseComparison" && this.responseComparisonGenerationId !== void 0 && a !== this.responseComparisonGenerationId) {
            this.hooks.onInteractionUpdateDropped?.(n, "generation_uuid_mismatch");
            return;
        }
        if (this.generationUUID !== void 0 && o !== this.generationUUID && (!s || o !== void 0 && !(r === "grokBotNudge"))) {
            this.hooks.onInteractionUpdateDropped?.(n, "generation_uuid_mismatch");
            return;
        }
        this.hooks.onInteractionUpdate?.(n);
        const c = i.composerId;
        if (this.asyncOperationRegistry.enter(c, "capability_process_stream"), this.shouldTraceInteractionUpdate(n)) {
            const f = {
                composerId: i.composerId,
                generationUUID: this.generationUUID
            };
            if (r === "toolCallStarted" || r === "toolCallCompleted" || r === "toolCallDelta" || r === "partialToolCall") {
                const v = n.message.value.callId;
                if (f.toolCallId = v, r !== "toolCallDelta") {
                    const b = n.message.value.toolCall, y = b?.tool?.case;
                    y && (f.toolName = y);
                    const T = this.getMcpToolCallTelemetry(b);
                    T && (f["mcp.server.identifier"] = T.serverIdentifier, f["mcp.tool.name"] = T.toolName), r === "toolCallCompleted" && b && this.addToolCallSizeBreadcrumbData(f, b);
                }
            }
            tle({
                category: "agent.update",
                message: r,
                level: "info",
                data: f
            });
        }
        if (this.notifyBeforeUpdate(), n.message.case === "textDelta") {
            try {
                const f = fEh(n.message.value);
                if (f !== void 0 && this.isAutoRoutingResultDisplayEnabled()) {
                    this.handleRoutedModel(f);
                    return;
                }
                gEh(n.message.value) && this.notifyFirstTokenIfNeeded(), this.textDeltaCoalescer.enqueue({
                    ctx: t,
                    timing: Aet({
                        kind: "interaction",
                        update: n
                    })
                }, n.message.value.text);
            } finally{
                this.notifyAfterUpdate(), this.asyncOperationRegistry.exit(c, "capability_process_stream");
            }
            return;
        }
        const l = this.shouldTraceInteractionUpdate(n) ? S_(t.withName(`AgentResponseAdapter.${r}`)) : void 0;
        if (l && (l.span.setAttribute("agent.update.case", r ?? "unknown"), r === "toolCallStarted" || r === "toolCallCompleted")) {
            l.span.setAttribute("agent.tool_call_id", n.message.value.callId);
            const f = n.message.value.toolCall;
            l.span.setAttribute("tool.name", f?.tool.case ?? "unknown");
            const v = this.getMcpToolCallTelemetry(f);
            v && (l.span.setAttribute("mcp.server.identifier", v.serverIdentifier), l.span.setAttribute("mcp.tool.name", v.toolName));
        }
        const u = l?.ctx ?? t;
        try {
            switch(r !== "tokenDelta" && r !== "heartbeat" && (await this.textDeltaCoalescer.flushGracefully(), r !== "partialToolCall" && this.partialToolCallCoalescer.flush()), n.message.case){
                case "thinkingDelta":
                    {
                        this.handleThinkingDelta(u, n.message.value.text, n.message.value.thinkingStyle, Aet({
                            kind: "interaction",
                            update: n
                        }));
                        break;
                    }
                case "thinkingCompleted":
                    {
                        this.handleThinkingCompleted(n);
                        break;
                    }
                case "toolCallStarted":
                    await this.handleToolCallStarted(u, n), this.stampToolCallTiming(n);
                    break;
                case "toolCallCompleted":
                    await this.handleToolCallCompleted(u, n), this.stampToolCallTiming(n);
                    break;
                case "partialToolCall":
                    await this.handlePartialToolCall(u, n), this.stampToolCallTiming(n);
                    break;
                case "toolCallDelta":
                    await this.handleToolCallDelta(u, n);
                    break;
                case "userMessageAppended":
                    {
                        const f = n.message.value.userMessage, v = f?.messageId;
                        if (this.conversationActionManager && v && this.conversationActionManager.markMessageAsProcessed(f), v) {
                            const b = this.composerDataService, y = b.getComposerCapability(this.composerDataHandle, ps.QUEUING), T = y?.getSteerItemByMessageId(v);
                            T && (y?.markSteerDeliveryConfirmed(v), b.getComposerBubbleUntracked(this.composerDataHandle, v) || await this.instantiationService.invokeFunction((R)=>R.get(OR)).appendQueuedHumanMessage(this.composerDataHandle, T.query, {
                                richText: T.richText,
                                contextOverride: T.contextOverride,
                                bubbleId: v
                            }));
                            const E = b.getComposerBubbleUntracked(this.composerDataHandle, v);
                            if (E) {
                                const A = q0e(this.composerDataHandle.data.conversationState);
                                f !== void 0 && this.stampBubbleTiming(v, Aet({
                                    kind: "user",
                                    userMessage: f
                                })), b.updateComposerBubbleSetStore(this.composerDataHandle, v, (R)=>{
                                    R("conversationState", A), E.isOptimistic === !0 && R("isOptimistic", !1);
                                });
                            } else this.instantiationService.invokeFunction((R)=>R.get(Wn)).warn("[AgentResponseAdapter] Skipping conversationState snapshot for unloaded user message bubble", {
                                composerId: this.composerDataHandle.composerId,
                                messageId: v
                            });
                        }
                        break;
                    }
                case "contextInjectionState":
                    {
                        const f = n.message.value, v = f.state?.state.case;
                        if (f.injectionId && v !== void 0) {
                            const y = this.composerDataService.getComposerCapability(this.composerDataHandle, ps.QUEUING), T = {
                                queued: "queued",
                                delivered: "delivered",
                                queuedForNextTurn: "queued_for_next_turn",
                                cancelled: "cancelled",
                                rejected: "rejected"
                            }[v];
                            y?.applyContextInjectionAck(f.injectionId, T);
                        }
                        break;
                    }
                case "tokenDelta":
                    break;
                case "summary":
                    break;
                case "summaryStarted":
                    {
                        this.handleSummaryStarted(u);
                        break;
                    }
                case "summaryCompleted":
                    {
                        this.handleSummaryCompleted(u, n.message.value.hookMessage, n.message.value.failed);
                        break;
                    }
                case "heartbeat":
                    break;
                case "shellOutputDelta":
                    break;
                case "turnEnded":
                    {
                        const f = this.composerDataService, v = n.message.value;
                        (v.inputTokens !== void 0 || v.outputTokens !== void 0 || v.cacheReadTokens !== void 0 || v.cacheWriteTokens !== void 0) && f.updateComposerDataSetStore(this.composerDataHandle, (F)=>{
                            F("turnTokenUsage", {
                                inputTokens: Number(v.inputTokens ?? BigInt(0)),
                                outputTokens: Number(v.outputTokens ?? BigInt(0)),
                                cacheReadTokens: Number(v.cacheReadTokens ?? BigInt(0)),
                                cacheWriteTokens: Number(v.cacheWriteTokens ?? BigInt(0))
                            });
                        });
                        const b = f.getComposerCapability(this.composerDataHandle, ps.QUEUING), y = b?.getQueueItemsReactive() ?? [], T = RWi(y), E = T && this.composerDataHandle.data.editingQueueItemId === T.id, A = b?.isDebugReproWaitingAfterTurnEnds() === !0;
                        if (T && !E && !A) {
                            const F = this.instantiationService.invokeFunction((H)=>H.get(Vde)).isCursorAgentHostEnabled();
                            if (vEh({
                                isLocalMode: kc.localMode,
                                isAgentHostEnabled: F,
                                isNewRequestIdGateEnabled: ()=>this.isQueuedPromptNewRequestIdEnabled()
                            })) {
                                const H = this.instantiationService.invokeFunction((X)=>X.get(OR)), $ = this.instantiationService.invokeFunction((X)=>X.get(q6)), W = T.extras?.contextOverride, G = zn(), q = RX(T.extras.simulatedMsgReason, T.extras.simulatedMessageMetadata, {
                                    includeEmptyMetadata: !0,
                                    defaultToEmptyMetadata: !0
                                });
                                b?.removeFromQueue(T.id), H.appendQueuedHumanMessage(this.composerDataHandle, T.query, {
                                    richText: T.extras.richText,
                                    contextOverride: W,
                                    bubbleId: G,
                                    simulatedMsgReason: T.extras.simulatedMsgReason,
                                    sentByVoiceCall: T.extras.sentByVoiceCall,
                                    simulatedMessageMetadata: T.extras.simulatedMessageMetadata
                                });
                                const z = await $.buildComposerSelectedContext(u, this.composerDataHandle, {
                                    diffTabGitAction: T.extras.diffTabGitAction,
                                    trackSubmittedSlashSubjects: T.extras.simulatedMsgReason === void 0
                                });
                                f.updateComposerDataSetStore(this.composerDataHandle, (X)=>{
                                    X("generatingBubbleIds", []);
                                });
                                try {
                                    this.conversationActionManager.queueFollowUpUserMessage(new I1({
                                        text: T.query,
                                        richText: T.extras.richText,
                                        messageId: G,
                                        selectedContext: z,
                                        ...q ?? {},
                                        sentByVoiceCall: T.extras.sentByVoiceCall
                                    }));
                                } catch (X) {
                                    if (!(X instanceof lde)) throw X;
                                    this.instantiationService.invokeFunction((Y)=>Y.get(Xh)).warn("composer", "Queued follow-up not handed off: run aborted or disposed during the turn-end handoff", {
                                        composerId: c,
                                        requestId: this.generationUUID,
                                        bubbleId: G
                                    });
                                }
                                break;
                            }
                        }
                        f.updateComposerDataSetStore(this.composerDataHandle, (F)=>{
                            F("status", "completed"), F("generatingBubbleIds", []), F("chatGenerationUUID", void 0);
                        }), await this.maybeSurfaceCanvas();
                        const R = this.instantiationService.invokeFunction((F)=>F.get(Hv));
                        {
                            const F = R.getInputDelegate(c);
                            F.setPendingSuggestionReqId(this.promptSuggestionReqId), F.enablePendingSuggestion();
                        }
                        const D = this.instantiationService.invokeFunction((F)=>F.get(FR)), P = f.getLastHumanBubbleId(this.composerDataHandle), N = f.getLastAiBubble(this.composerDataHandle), O = N?.bubbleId;
                        if (P && O) {
                            var h = [];
                            try {
                                const F = uTo(h, NNt({
                                    parentSpanContext: L4e(u),
                                    name: "chatStreamFinishedCapabilities"
                                }));
                                wXi(F, {
                                    requestId: this.generationUUID,
                                    composerId: c
                                }), await D.runCapabilitiesForProcess(this.composerDataHandle, "chat-stream-finished", {
                                    composerId: c,
                                    humanBubbleId: P,
                                    aiBubbleId: O,
                                    startTime: void 0,
                                    parentSpanCtx: F
                                }).catch((H)=>{
                                    console.error("[AgentResponseAdapter] error running capabilities for chat-stream-finished", H);
                                });
                            } catch (F) {
                                var p = F, g = !0;
                            } finally{
                                dTo(h, p, g);
                            }
                        }
                        this.hasReceivedFirstToken && P !== void 0 && N !== void 0 && N.errorDetails === void 0 ? this.refreshUsageStatusAfterSuccessfulForegroundTurn() : this.instantiationService.invokeFunction((H)=>H.get(Ukt)).refetch(!0);
                        break;
                    }
                case "stepStarted":
                    break;
                case "toolRequestsListed":
                    break;
                case "stepCompleted":
                    {
                        const f = n.message.case === "stepCompleted" ? n.message.value : void 0;
                        if (f) {
                            const v = this.composerDataService, b = v.getLastAiBubble(this.composerDataHandle);
                            if (b) {
                                const y = this.pendingRoutedModelLabel;
                                v.updateComposerBubbleSetStore(this.composerDataHandle, b.bubbleId, (T)=>{
                                    T("turnDurationMs", Number(f.stepDurationMs)), y !== void 0 && T("routedModelLabel", y);
                                });
                            }
                        }
                        break;
                    }
                case "routedModel":
                    {
                        this.handleRoutedModel(n.message.value.displayName);
                        break;
                    }
                case "promptSuggestion":
                    {
                        const f = this.instantiationService.invokeFunction((A)=>A.get(Hv)), v = this.composerDataService, b = this.composerDataHandle.data.composerId, y = this.promptSuggestionReqId;
                        if (y === void 0) break;
                        const T = {
                            text: n.message.value.suggestion,
                            reqId: y
                        };
                        v.updateComposerDataSetStore(this.composerDataHandle, (A)=>{
                            A("promptSuggestion", T);
                        }), f.getInputDelegate(b).setSuggestionText(T.text, T.reqId);
                        break;
                    }
                case "feedbackRequest":
                    {
                        const f = this.composerDataService, { requestId: v, canonicalModelName: b, categories: y, categoryGroups: T, title: E, negativeTitle: A, commentPlaceholder: R } = n.message.value;
                        f.updateComposerDataSetStore(this.composerDataHandle, (D)=>{
                            D("feedbackRequest", {
                                requestId: v,
                                canonicalModelName: b,
                                categories: y.map((P)=>({
                                        id: P.id,
                                        label: P.label
                                    })),
                                categoryGroups: T.map((P)=>({
                                        id: P.id,
                                        prompt: P.prompt,
                                        categories: P.categories.map((N)=>({
                                                id: N.id,
                                                label: N.label
                                            }))
                                    })),
                                title: E,
                                negativeTitle: A,
                                commentPlaceholder: R
                            });
                        });
                        break;
                    }
                case "responseComparison":
                    {
                        this.handleResponseComparison(n);
                        break;
                    }
                case "postRequestPrompt":
                    {
                        const f = this.composerDataService, v = this.instantiationService.invokeFunction((y)=>y.get(eo)), b = f.getLastBubble(this.composerDataHandle);
                        if (b) {
                            const y = n.message.value;
                            f.updateComposerBubble(this.composerDataHandle, b.bubbleId, {
                                errorDetails: {
                                    title: y.title,
                                    message: y.message,
                                    requestId: "",
                                    error: new vk({
                                        error: io.CUSTOM_MESSAGE,
                                        details: new NKe({
                                            title: y.title,
                                            detail: y.message,
                                            showRequestId: !1,
                                            additionalInfo: {
                                                hideIcon: "true",
                                                hideKeybindings: "true"
                                            }
                                        })
                                    }),
                                    extraButtons: [
                                        {
                                            label: y.buttonLabel,
                                            variant: "primary",
                                            callback: ()=>{
                                                v.open(Ee.parse(y.buttonUrl));
                                            }
                                        }
                                    ]
                                }
                            });
                        }
                        break;
                    }
                case "grokBotNudge":
                    {
                        const f = this.instantiationService.invokeFunction((y)=>y.get(na)).getCurrentAuthId();
                        if (!(f !== void 0 && this.instantiationService.invokeFunction((y)=>y.get(GU)).isInitializedForIdentity(f)) || !this.instantiationService.invokeFunction((y)=>y.get(Kr)).getExperimentParam(cbh, "enabled", {
                            disableExposureLog: !1
                        })) break;
                        lqv(this.composerDataHandle.composerId, {
                            job: n.message.value.job,
                            description: n.message.value.description,
                            showNumber: n.message.value.showNumber
                        });
                        break;
                    }
                case "activeBranchChange":
                    {
                        const f = n.message.value.branchName;
                        if (f.length === 0) break;
                        let v = n.message.value.path.trim() || void 0;
                        if (!v) {
                            const T = this.composerDataHandle.data.workspaceIdentifier;
                            T && rp(T) && (v = this.scmService.getRepository(T.uri)?.provider.rootUri?.fsPath);
                        }
                        if (!v) break;
                        const b = this.composerDataService, y = TMn(this.composerDataHandle, (T)=>b.getHandleIfLoaded(T));
                        b.updateComposerData(y, {
                            trackedGitRepos: nJe(v, f, Date.now(), y.data.trackedGitRepos)
                        });
                        break;
                    }
                case void 0:
                    break;
                default:
                    {
                        const f = n.message;
                        break;
                    }
            }
        } catch (f) {
            console.error("[AgentResponseStateMachine] Error processing update:", f);
        } finally{
            l?.[Symbol.dispose](), this.notifyAfterUpdate(), this.asyncOperationRegistry.exit(c, "capability_process_stream");
        }
    }
    async answerHostQuestion(t, n) {
        switch(n.case){
            case "execApproval":
                return {
                    case: "execApproval",
                    value: await this.hostApprovalQueryHandler.handleExecApproval(t, n.value)
                };
            case "mcpElicitation":
                return {
                    case: "mcpElicitation",
                    value: await this.hostApprovalQueryHandler.handleMcpElicitation(t, n.value)
                };
        }
    }
    async query(t, n) {
        switch(n.query.case){
            case "webSearchRequestQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing web search query payload");
                    const r = await this.handleWebSearchRequest(i);
                    return r.result.case === "approved" ? ND.webSearchApproved(n.id) : ND.webSearchRejected(n.id, r.result.value?.reason);
                }
            case "webFetchRequestQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing web fetch query payload");
                    const r = await this.handleWebFetchRequest(i);
                    return r.result.case === "approved" ? ND.webFetchApproved(n.id) : ND.webFetchRejected(n.id, r.result.value?.reason);
                }
            case "askQuestionInteractionQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing ask question query payload");
                    const r = await this.handleAskQuestionRequest(i);
                    return ND.askQuestion(n.id, r.result);
                }
            case "switchModeRequestQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing switch mode query payload");
                    const r = await this.handleSwitchModeRequest(i);
                    return r.result.case === "approved" ? ND.switchModeApproved(n.id) : ND.switchModeRejected(n.id, r.result.value?.reason);
                }
            case "createPlanRequestQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing create plan query payload");
                    const r = await this.handleCreatePlanRequest(i);
                    return ND.createPlan(n.id, r.result);
                }
            case "mcpAuthRequestQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing MCP auth query payload");
                    const r = await this.handleMcpAuthRequest(i);
                    return r.result.case === "approved" ? ND.mcpAuthApproved(n.id) : ND.mcpAuthRejected(n.id, r.result.value?.reason);
                }
            case "connectScmRequestQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing connect SCM query payload");
                    const r = await this.handleConnectScmRequest(i);
                    switch(r.result.case){
                        case "approved":
                            return ND.connectScmApproved(n.id);
                        case "failed":
                            return ND.connectScmFailed(n.id, r.result.value?.error);
                        default:
                            return ND.connectScmRejected(n.id, r.result.value?.reason);
                    }
                }
            case "setupVmEnvironmentArgs":
                return ND.setupVmEnvironment(n.id, new SDn({
                    result: {
                        case: "success",
                        value: new A4i({})
                    }
                }));
            case "prManagementRequestQuery":
                return ND.prManagement(n.id, NCv());
            case "generateImageRequestQuery":
                return ND.generateImageApproved(n.id, n.query.value.args?.description);
            case "replaceEnvArgs":
                return ND.replaceEnv(n.id, new CDn({
                    result: {
                        case: "failure",
                        value: new L4i({
                            errorMessage: "Environment replacement is not supported in the IDE client",
                            setupLogs: ""
                        })
                    }
                }));
            default:
                {
                    if (n.query.case !== void 0) {
                        const i = n.query;
                    }
                    throw new Error("Unhandled interaction query type");
                }
        }
    }
    async handleAskQuestionRequest(t) {
        return this.askQuestionQueryHandler.handleAskQuestionRequest(t);
    }
    async handleSwitchModeRequest(t) {
        return this.switchModeQueryHandler.handleSwitchModeRequest(t);
    }
    async handleCreatePlanRequest(t) {
        return this.createPlanQueryHandler.handleCreatePlanRequest(t);
    }
    async handleWebSearchRequest(t) {
        return this.webSearchQueryHandler.handleWebSearchRequest(t);
    }
    async handleWebFetchRequest(t) {
        return this.webFetchQueryHandler.handleWebFetchRequest(t);
    }
    async handleMcpAuthRequest(t) {
        return this.mcpAuthQueryHandler.handleMcpAuthRequest(t);
    }
    async handleConnectScmRequest(t) {
        return this.connectScmQueryHandler.handleConnectScmRequest(t);
    }
}, pTo.HIGH_FREQUENCY_UPDATE_CASES = new Set([
    "textDelta",
    "thinkingDelta",
    "tokenDelta",
    "toolCallDelta",
    "heartbeat",
    "shellOutputDelta",
    "partialToolCall"
]), Ltt = pTo;

}
