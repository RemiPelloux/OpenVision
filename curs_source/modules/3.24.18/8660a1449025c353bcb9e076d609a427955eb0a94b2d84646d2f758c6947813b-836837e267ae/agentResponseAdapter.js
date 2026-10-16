import { Dzt, GPe, Imk, Pmk, Tmk, kze, qis } from "./Aeg.js";
import { Ei, Qe, m1, xr } from "./Iwo.js";
import { N5y, P5y, Pwe, dhe } from "./LYd.js";
import { $l, Rke, g6t } from "./SZu.js";
import { Bpg, Dpg, Fpg, Lpg, Npg, Upg, fSk, gSk, vSk, xos } from "./Ycg.js";
import { iS, lb } from "./adminSettingsService.js";
import { zTi } from "./agentTraceContext.js";
import { ZVa } from "./agentTranslationUtils.js";
import { Pmn, Rni, ju, t0 } from "./agent_pb.js";
import { Qr, Ss, _be } from "./aiMiscServices.js";
import { ZM, vR } from "./aiSettingsService.js";
import { upg } from "./askQuestionQueryHandler.js";
import { lpg } from "./askQuestionToolCallHandler.js";
import { AI, qn } from "./async.js";
import { fTt, sat } from "./asyncOperationRegistry.js";
import { Rs, ss } from "./authenticationService.js";
import { kl } from "./browser.ts";
import { m9m } from "./bubbleTiming.js";
import { vl, wm } from "./buildFlags.js";
import { ZPe } from "./byokModelUtils.js";
import { jD } from "./canvas.js";
import { DHe } from "./canvasComposer.js";
import { vis } from "./canvasLogger.js";
import { bs, sd, utt } from "./chat_pb.js";
import { oF, v$ } from "./composerAgent.js";
import { UJ } from "./composerChatService.js";
import { l0 } from "./composerChatServiceInterface.js";
import { J_, uv } from "./composerData.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { cie } from "./composerNotLoadedError.js";
import { WB, YM } from "./composerUtilsServiceTypes.js";
import { Bb, Ux } from "./composerViews.js";
import { mo, tf } from "./composer_pb.js";
import { Cpg } from "./connectScmQueryHandler.js";
import { apg } from "./createPlanQueryHandler.js";
import { opg } from "./createPlanToolCallHandler.js";
import { kie, zpe } from "./cursorAgentHostService.js";
import { IX, _le } from "./cursorHooks.js";
import { Du, jVr } from "./dashboard_pb.js";
import { Oh, ZS } from "./draftIds.js";
import { Grg } from "./editToolCallHandler.js";
import { $4, J5 } from "./experimentRefreshService.js";
import { Cr, _s } from "./experimentService.js";
import { ilk } from "./gYa.js";
import { krg, xrs } from "./grokBotContextualBanner.js";
import { Rrs } from "./grokBotContextualBannerSession.js";
import { dh } from "./hook-step.ts";
import { Epg, uSk } from "./hostApprovalQueryHandler.js";
import { FO } from "./index_10.ts";
import { oSk } from "./index_217.js";
import { Ng } from "./index_3.ts";
import { bL } from "./interaction-queries.ts";
import { $ae, B6e, Dh, PSi, SS, qst } from "./ipa.js";
import { Ji, Li } from "./log.js";
import { _pg } from "./mcpAuthQueryHandler.js";
import { sTi } from "./mcpProcessServerIdentifier.js";
import { eg, of } from "./modelConfigServiceTypes.js";
import { W4e } from "./modelNudgeUtils.js";
import { kc, qc } from "./opener.js";
import { Ppg, pSk } from "./partialToolCallCoalescer.js";
import { G4e, Nze } from "./pendingApprovalRegistry.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { fSr, vSr, vni } from "./replace_env_tool_pb.js";
import { lcl } from "./responseComparisonState.js";
import { aC, cN } from "./scm.js";
import { b5o, dni, hSr } from "./setup_vm_environment_tool_pb.js";
import { Hrg } from "./shellToolCallHandler.js";
import { Hqe } from "./simulatedMessageMetadataUtils.js";
import { wWt } from "./slimConversationStateForBubbleSnapshot.js";
import { Zi, ki } from "./storage_2.js";
import { v1 } from "./store.js";
import { Cm, wh } from "./structuredLog.js";
import { hpg } from "./switchModeQueryHandler.js";
import { rpg } from "./taskToolCallHandler.js";
import { Rpg, hSk } from "./textDeltaCoalescer.js";
import { qrg } from "./todoToolCallHandler.js";
import { Ct, Pu } from "./tools_pb.js";
import { __ } from "./tracing_2.js";
import { KXr, gwi } from "./transcriptVisibilityService.js";
import { E } from "./tslib.es6.js";
import { L4e } from "./types_10.js";
import { fn, rt } from "./uri.js";
import { QW, ZW } from "./usageLimitPolicyStatusService.js";
import { wu } from "./utilities_3.js";
import { Hu, P$e, pS, wo } from "./utils_pb.js";
import { Ai, Xo } from "./uuid_2.js";
import { mpg } from "./webFetchQueryHandler.js";
import { ppg } from "./webSearchQueryHandler.js";
import { Sr } from "./workspace.js";
import { Z0e } from "./writable-iterable.ts";
import { BSm, LCt, N91, WEn, Xae, c$, f0i, iYr, p9m, v7a } from "./yBp.js";
import { Qm, Wu, pi } from "./ze.js";
var ucl, dcl, hcl, pcl, jpg, $pg, mcl, Hpg, gcl, YTt;
export { $pg, Hpg, YTt, dcl, gcl, hcl, jpg, mcl, pcl, ucl };
var __wakaru_wAn_initialized = false;
export function wAn() {
if (__wakaru_wAn_initialized) return;
__wakaru_wAn_initialized = true;
"use strict";
E(), FO(), ju(), b5o(), vSr(), Pu(), Du(), Ng(), pi(), v1(), ju(), sd(), Hu(), FO(), tf(), kl(), wm(), zpe(), qn(), Ei(), L4e(), Qe(), Xo(), qc(), Sr(), fn(), __(), Ji(), Cm(), sTi(), jD(), DHe(), vis(), fTt(), v$(), UJ(), xrs(), Rrs(), uv(), Pl(), cie(), W4e(), WB(), wWt(), Ux(), Nze(), cN(), Hqe(), Ss(), ZM(), iS(), ZPe(), _le(), of(), _s(), $4(), Rs(), ZVa(), zTi(), oSk(), uSk(), hSk(), pSk(), m9m(), KXr(), QW(), el(), wu(), Zi(), ZS(), lcl(), ucl = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), dcl = (t)=>{
    throw TypeError(t);
}, hcl = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && dcl("Object expected");
        var i, r;
        n && (i = e[ucl("asyncDispose")]), i === void 0 && (i = e[ucl("dispose")], n && (r = i)), typeof i != "function" && dcl("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, pcl = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, jpg = 200, $pg = 16, mcl = class {
    constructor(t){
        this.onChunk = t, this.timer = new AI, this.queue = [], this.currentChunks = [], this.currentChunkIndex = 0, this.isDisposed = !1;
    }
    enqueue(t) {
        this.isDisposed || (this.currentChunks.length > 0 && this.currentChunkIndex < this.currentChunks.length && this.flushCurrentChunks(), this.queue.push(t), (this.currentChunks.length === 0 || this.currentChunkIndex >= this.currentChunks.length) && this.startNextSummary());
    }
    flush() {
        for(this.timer.cancel(), this.flushCurrentChunks(); this.queue.length > 0;){
            const t = this.queue.shift();
            this.onChunk(t);
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
        const t = this.queue.shift();
        if (this.currentChunks = vSk(t, $pg), this.currentChunkIndex = 0, this.currentChunks.length === 0) {
            this.startNextSummary();
            return;
        }
        const e = jpg / Math.max(this.currentChunks.length, 1);
        this.timer.cancelAndSet(()=>{
            if (!this.isDisposed) {
                if (this.currentChunkIndex < this.currentChunks.length && (this.onChunk(this.currentChunks[this.currentChunkIndex]), this.currentChunkIndex++, this.queue.length > 0 && this.currentChunkIndex < this.currentChunks.length)) {
                    this.flushCurrentChunks(), this.startNextSummary();
                    return;
                }
                this.currentChunkIndex >= this.currentChunks.length && this.startNextSummary();
            }
        }, e);
    }
    dispose() {
        this.isDisposed = !0, this.timer.dispose(), this.queue.length = 0, this.currentChunks = [], this.currentChunkIndex = 0;
    }
}, Hpg = /^> Auto routed to (.+?)\s*$/, gcl = class pPb {
    constructor(e, n, i, r, s){
        this.instantiationService = e, this.composerDataHandle = n, this.conversationActionManager = i, this.generationUUID = r, this.hasReceivedFirstToken = !1, this.disposed = !1, this.toolCallIdToBubbleId = new Map, this.toolCallIdIndex = void 0, this.toolCallIdIndexSource = void 0, this.unfinishedToolCallIds = new Set, this.tracedPartialToolCallIds = new Set, this.postTurnEndedWorkQueue = [], this.handledCanvasPaths = new Set, this.canvasWrittenPaths = new Set, this.textDeltaCoalescer = new Rpg((a, l)=>{
            this.isActiveForCurrentGeneration() && this.handleTextDelta(a.ctx, l, a.timing);
        }, {
            getOptions: ()=>this.getTextDeltaPacingOptions(),
            isActive: ()=>this.isTranscriptVisibleForPacing()
        }), this.partialToolCallCoalescer = new Ppg((a)=>{
            this.isActiveForCurrentGeneration() && Qm(()=>{
                for (const { bubbleId: l, toolFormerData: c } of a.values())this.upsertToolFormerBubbleData(l, c);
            });
        }), this.hooks = s ?? {}, this.promptSuggestionReqId = r ?? n.data.latestChatGenerationUUID, this.responseComparisonGenerationId = r ?? n.data.latestChatGenerationUUID, this.responseComparisonGenerationId !== void 0 && fSk(this.composerDataHandle, this.responseComparisonGenerationId), this.asyncOperationRegistry = e.invokeFunction((a)=>a.get(sat)), this.scmService = e.invokeFunction((a)=>a.get(aC)), this.composerDataService = e.invokeFunction((a)=>a.get(no));
        const o = {
            instantiationService: e,
            composerDataHandle: n,
            conversationActionManager: i,
            onEditToolCallCompleted: this.hooks.onEditToolCallCompleted,
            onTodoToolCallCompleted: this.hooks.onTodoToolCallCompleted
        };
        this.shellToolCallHandler = new Hrg(o), this.editToolCallHandler = new Grg(o), this.todoToolCallHandler = new qrg(o), this.taskToolCallHandler = new rpg(o), this.createPlanToolCallHandler = new opg(o), this.askQuestionToolCallHandler = new lpg(o), this.askQuestionQueryHandler = new upg({
            instantiationService: e,
            composerDataHandle: n,
            conversationActionManager: i,
            generationUUID: r,
            trackTrajectoryStopped: (a)=>this.trackTrajectoryStopped(a)
        }), this.switchModeQueryHandler = new hpg({
            instantiationService: e,
            composerDataHandle: n,
            conversationActionManager: i,
            generationUUID: r,
            trackTrajectoryStopped: (a)=>this.trackTrajectoryStopped(a)
        }), this.mcpAuthQueryHandler = new _pg({
            instantiationService: e,
            composerDataHandle: n,
            conversationActionManager: i,
            generationUUID: r,
            trackTrajectoryStopped: (a)=>this.trackTrajectoryStopped(a)
        }), this.connectScmQueryHandler = new Cpg({
            instantiationService: e,
            composerDataHandle: n,
            conversationActionManager: i,
            generationUUID: r,
            trackTrajectoryStopped: (a)=>this.trackTrajectoryStopped(a),
            trackConnectScmDecision: (a)=>this.trackConnectScmDecision(a),
            trackConnectScmOutcome: (a)=>this.trackConnectScmOutcome(a)
        }), this.webSearchQueryHandler = new ppg({
            instantiationService: e,
            composerDataHandle: n,
            generationUUID: r,
            trackTrajectoryStopped: (a)=>this.trackTrajectoryStopped(a)
        }), this.webFetchQueryHandler = new mpg({
            instantiationService: e,
            composerDataHandle: n,
            generationUUID: r,
            trackTrajectoryStopped: (a)=>this.trackTrajectoryStopped(a),
            trackApprovalCardShown: (a)=>this.trackApprovalCardShown(a)
        }), this.hostApprovalQueryHandler = new Epg({
            instantiationService: e,
            composerDataHandle: n
        }), this.createPlanQueryHandler = new apg({
            instantiationService: e,
            composerDataHandle: n
        }), this.specialToolHandlers = new Map, this.specialToolHandlers.set("editToolCall", this.editToolCallHandler), this.specialToolHandlers.set("updateTodosToolCall", this.todoToolCallHandler), this.specialToolHandlers.set("shellToolCall", this.shellToolCallHandler), this.specialToolHandlers.set("createPlanToolCall", this.createPlanToolCallHandler), this.specialToolHandlers.set("taskToolCall", this.taskToolCallHandler), this.specialToolHandlers.set("askQuestionToolCall", this.askQuestionToolCallHandler);
    }
    resolveConversationParentAgentId() {
        return this.conversationParentAgentId ??= this.hooks.resolveConversationParentAgentId?.()?.trim() || this.composerDataHandle.data.subagentInfo?.parentComposerId?.trim() || void 0, this.conversationParentAgentId;
    }
    refreshUsageStatusAfterSuccessfulForegroundTurn() {
        const e = this.instantiationService.invokeFunction((a)=>a.get(ZW)), n = this.composerDataHandle.data;
        if (n.unifiedMode === "background" || n.createdFromBackgroundAgent !== void 0 || n.createdFromLocalScheduledTask !== void 0 || n.subagentInfo !== void 0 || n.isBestOfNSubcomposer === !0) {
            e.refetch(!0);
            return;
        }
        const i = this.instantiationService.invokeFunction((a)=>Dh(a.get(ki), "modelNudgesEnabled")), r = this.instantiationService.invokeFunction((a)=>a.get(eg)), s = Imk(r.getEffectiveModelConfigForComposer(this.composerDataHandle), r), o = this.instantiationService.invokeFunction((a)=>a.get(sa).applicationUserPersistentStorage);
        if (s === void 0 || Dzt(s.modelId, o)) {
            e.refetch(!0);
            return;
        }
        e.refetchForModelRecommendation(new jVr({
            currentModel: s,
            supportsThirdPartyUsageNudge: !0,
            modelNudgesEnabled: i
        })).then((a)=>{
            if (this.disposed || a === void 0) return;
            const l = this.instantiationService.invokeFunction((d)=>d.get(no)), c = this.instantiationService.invokeFunction((d)=>d.get(sa).applicationUserPersistentStorage), u = this.instantiationService.invokeFunction((d)=>Dh(d.get(ki), "modelNudgesEnabled"));
            Pmk({
                composerDataHandle: this.composerDataHandle,
                emptyStateDraftHandle: l.getHandleIfLoaded(Oh),
                nudge: a,
                userSettings: c,
                aiSettingsService: this.instantiationService.invokeFunction((d)=>d.get(vR)),
                adminSettingsService: this.instantiationService.invokeFunction((d)=>d.get(lb)),
                analyticsService: this.instantiationService.invokeFunction((d)=>d.get(Qr)),
                modelConfigService: r,
                modelNudgesEnabled: u
            });
        }).catch((a)=>{
            try {
                this.instantiationService.invokeFunction((l)=>l.get(Li)).error("[AgentResponseAdapter] failed to apply model recommendation", a);
            } catch  {
                xr(a);
            }
        });
    }
    getToolFormer() {
        const n = this.composerDataHandle.data.capabilities.find((i)=>i.type === mo.TOOL_FORMER);
        if (!n) throw new Error("ToolFormer not found");
        return n;
    }
    trackTrajectoryStopped(e) {
        try {
            this.instantiationService.invokeFunction((i)=>i.get(Qr)).trackEvent("composer.agent_trajectory_stopped", e);
        } catch  {}
    }
    trackApprovalCardShown(e) {
        try {
            this.instantiationService.invokeFunction((i)=>i.get(Qr)).trackEvent("smart_mode.approval_card_shown", e);
        } catch  {}
    }
    trackConnectScmDecision(e) {
        try {
            this.instantiationService.invokeFunction((i)=>i.get(Qr)).trackEvent("connect_scm.decision", e);
        } catch  {}
    }
    trackConnectScmOutcome(e) {
        try {
            this.instantiationService.invokeFunction((i)=>i.get(Qr)).trackEvent("connect_scm.outcome", e);
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
    shouldTraceInteractionUpdate(e) {
        const n = e.message.case;
        return !(n === void 0 || pPb.HIGH_FREQUENCY_UPDATE_CASES.has(n) || n === "responseComparison" && e.message.value.event.case === "textDelta");
    }
    getMcpToolCallTelemetry(e) {
        if (e?.tool.case !== "mcpToolCall") return;
        const n = e.tool.value.args, i = n?.providerIdentifier, r = n?.toolName;
        if (!(!i || !r)) return {
            serverIdentifier: ilk(i),
            toolName: r
        };
    }
    createToolProcessingSpan(e, n, i, r) {
        const s = SS(e.withName(n));
        return s.span.setAttribute("agent.tool_call_id", i), s.span.setAttribute("tool.name", r), s;
    }
    getExistingToolFormerBubbleId(e) {
        const n = this.toolCallIdToBubbleId.get(e);
        if (n !== void 0) return n;
        const r = this.composerDataService.getLoadedConversation(this.composerDataHandle);
        if (this.toolCallIdIndex === void 0 || this.toolCallIdIndexSource !== r) {
            const o = new Map;
            for (const a of r){
                const l = Wu(a), c = l.toolFormerData?.toolCallId;
                c !== void 0 && !o.has(c) && o.set(c, l.bubbleId);
            }
            this.toolCallIdIndex = o, this.toolCallIdIndexSource = r;
        }
        const s = this.toolCallIdIndex.get(e);
        return s !== void 0 && this.toolCallIdToBubbleId.set(e, s), s;
    }
    upsertToolFormerBubbleData(e, n) {
        this.composerDataService.updateComposerBubbleSetStore(this.composerDataHandle, e, (r)=>{
            r("toolFormerData", (s)=>{
                if (s === void 0) return n;
                const o = n, a = s, l = {};
                for (const d of Object.keys(o))d === "params" || d === "result" || d === "additionalData" || d === "attachments" || d === "userDecision" || Object.is(o[d], a[d]) || (l[d] = o[d]);
                const c = n.tool !== void 0 && n.tool !== s.tool;
                n.params !== void 0 ? l.params = n.params : c && s.params !== void 0 && (l.params = void 0), n.result !== void 0 ? l.result = n.result : c && s.result !== void 0 && (l.result = void 0), n.attachments !== void 0 && (l.attachments = n.attachments), n.userDecision !== void 0 && (l.userDecision = n.userDecision);
                const u = this.mergeToolFormerAdditionalData(n, s);
                return u !== s.additionalData && (l.additionalData = u), Object.keys(l).length === 0 ? s : l;
            });
        }), this.toolCallIdToBubbleId.set(n.toolCallId, e);
    }
    mergeToolFormerAdditionalData(e, n) {
        return e.additionalData === void 0 ? n?.additionalData : e.tool === Ct.READ_MCP_RESOURCE && n?.tool === Ct.READ_MCP_RESOURCE && e.additionalData.status === "pending" && e.additionalData.reviewData === void 0 && n.additionalData?.reviewData !== void 0 ? {
            ...n.additionalData,
            ...e.additionalData,
            reviewData: n.additionalData.reviewData
        } : e.additionalData;
    }
    getOrCreateToolFormerBubbleId(e, n) {
        const i = this.getExistingToolFormerBubbleId(n.toolCallId);
        if (i !== void 0) return i;
        const r = this.composerDataService;
        if (r.getComposerData(this.composerDataHandle) === void 0) return;
        const s = {
            ...J_(),
            codeBlocks: [],
            type: bs.AI,
            text: "",
            capabilityType: mo.TOOL_FORMER,
            toolFormerData: n
        }, o = s.bubbleId;
        if (Qm(()=>{
            r.appendComposerBubbles(this.composerDataHandle, [
                s
            ], qst(e)), r.updateComposerDataSetStore(this.composerDataHandle, (a)=>a("generatingBubbleIds", []));
        }), r.getComposerBubble(this.composerDataHandle, o) !== void 0) return this.instantiationService.invokeFunction((a)=>{
            a.get(G4e).signalBubbleCreated(this.composerDataHandle.composerId, n.toolCallId);
        }), this.toolCallIdToBubbleId.set(n.toolCallId, o), o;
    }
    markToolCallAsUnfinished(e) {
        this.unfinishedToolCallIds.add(e);
    }
    markToolCallAsFinished(e) {
        this.unfinishedToolCallIds.delete(e), this.tracedPartialToolCallIds.delete(e);
    }
    isArglessTaskPartialToolCall(e) {
        return e.tool.case === "taskToolCall" && e.tool.value.args === void 0;
    }
    addToolCallSizeBreadcrumbData(e, n) {
        switch(n.tool.case){
            case "readToolCall":
                {
                    const i = n.tool.value.result?.result;
                    if (i?.case === "success") {
                        const r = i.value.output;
                        r?.case === "content" && (e.charsRead = r.value.length), i.value.fileSize !== void 0 && (e.fileSize = Number(i.value.fileSize)), e.totalLines = i.value.totalLines;
                    }
                    break;
                }
            case "editToolCall":
                {
                    const i = n.tool.value.result?.result;
                    i?.case === "success" && (i.value.beforeFullFileContent !== void 0 && (e.beforeChars = i.value.beforeFullFileContent.length), i.value.afterFullFileContent !== void 0 && (e.afterChars = i.value.afterFullFileContent.length));
                    break;
                }
            case "shellToolCall":
                {
                    const i = n.tool.value.result?.result;
                    if (i?.case === "success" || i?.case === "failure") {
                        const r = i.value, s = (r.interleavedOutput?.length ?? 0) || (r.stdout?.length ?? 0) + (r.stderr?.length ?? 0);
                        e.outputChars = s;
                    }
                    break;
                }
            default:
                break;
        }
    }
    cancelUnfinishedToolCalls() {
        if (this.unfinishedToolCallIds.size === 0) return;
        const e = this.getToolFormer();
        for (const n of Array.from(this.unfinishedToolCallIds)){
            const i = this.getExistingToolFormerBubbleId(n);
            if (!i) {
                this.unfinishedToolCallIds.delete(n);
                continue;
            }
            const r = e.getBubbleData(i);
            if (!r) {
                this.unfinishedToolCallIds.delete(n);
                continue;
            }
            if (r.tool === Ct.TASK_V2 && this.composerDataHandle.data.createdFromBackgroundAgent !== void 0 || (r.tool === Ct.TASK_V2 || r.tool === Ct.RUN_TERMINAL_COMMAND_V2) && r.additionalData?.backgrounded === !0) {
                this.unfinishedToolCallIds.delete(n);
                continue;
            }
            if (r.status === "loading") {
                const s = r.additionalData;
                let o;
                s && typeof s == "object" && "status" in s && (o = {
                    ...s,
                    status: "cancelled"
                }), e.setBubbleData(i, {
                    status: "cancelled",
                    ...o ? {
                        additionalData: o
                    } : {}
                });
            }
            this.stampCancelledToolTiming(i), this.unfinishedToolCallIds.delete(n);
        }
    }
    stampCancelledToolTiming(e) {
        const n = this.composerDataService.getComposerBubbleUntracked(this.composerDataHandle, e), i = p9m({
            startedAtMs: void 0,
            completedAtMs: void 0
        }, n ?? {}, Date.now());
        i.startedAtMs === void 0 || i.completedAtMs === void 0 || this.stampBubbleTiming(e, i);
    }
    isActiveForCurrentGeneration() {
        const e = c$(this.composerDataHandle);
        return e === void 0 ? !1 : this.generationUUID === void 0 || e.chatGenerationUUID === this.generationUUID;
    }
    flushPendingTextDeltas() {
        this.textDeltaCoalescer.flush();
    }
    dropUnpaintedDeltas() {
        this.textDeltaCoalescer.dropPending(), this.partialToolCallCoalescer.dropPending();
    }
    getLastInFlightBubble() {
        const e = this.composerDataService.getComposerData(this.composerDataHandle);
        if (!e) return;
        const n = e.fullConversationHeadersOnly, i = v7a(e.queueItems ?? []);
        for(let a = n.length - 1; a >= 0; a--){
            const l = n[a];
            if (l.type !== bs.HUMAN) break;
            if (e.conversationMap[l.bubbleId]?.isOptimistic === !0) i.add(l.bubbleId);
            else if (!i.has(l.bubbleId)) break;
        }
        let r = n.length;
        for(; r > 0 && n[r - 1]?.type === bs.HUMAN;)r--;
        const s = r + BSm({
            headers: n.slice(r).map((a)=>({
                    bubbleId: a.bubbleId,
                    isHuman: !0
                })),
            unconfirmedSteerMessageIds: i
        }), o = n[s - 1];
        if (o !== void 0) return e.conversationMap[o.bubbleId];
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.isActiveForCurrentGeneration() ? this.textDeltaCoalescer.dispose() : this.textDeltaCoalescer.disposeWithoutFlush(), this.partialToolCallCoalescer.dispose(), this.cancelUnfinishedToolCalls(), this.thinkingWordStreamer?.flush(), m1(this.askQuestionQueryHandler, this.thinkingWordStreamer, this.taskToolCallHandler, this.shellToolCallHandler, this.editToolCallHandler), this.thinkingWordStreamer = void 0, this.responseComparisonGenerationId !== void 0 && gSk(this.composerDataHandle, this.responseComparisonGenerationId));
    }
    handleResponseComparison(e) {
        const n = e.message, i = this.responseComparisonGenerationId;
        if (n.case !== "responseComparison" || i === void 0) return;
        const r = n.value.comparisonId;
        try {
            switch(n.value.event.case){
                case "started":
                    {
                        const s = n.value.event.value;
                        let o;
                        switch(s.displayOrder){
                            case Rni.PARENT_FIRST:
                                o = "parent-first";
                                break;
                            case Rni.ALTERNATE_FIRST:
                                o = "alternate-first";
                                break;
                            case Rni.UNSPECIFIED:
                            default:
                                xos(this.composerDataHandle, i, r);
                                return;
                        }
                        const a = s.parentResponse;
                        if (s.parentInvocationId.length === 0 || s.alternateInvocationId.length === 0) {
                            xos(this.composerDataHandle, i, r);
                            return;
                        }
                        Dpg(this.composerDataHandle, {
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
                    Npg(this.composerDataHandle, i, r, n.value.event.value.text);
                    break;
                case "completed":
                    Lpg(this.composerDataHandle, i, r);
                    break;
                case "skipped":
                case void 0:
                    xos(this.composerDataHandle, i, r);
                    break;
                default:
                    {
                        const s = n.value.event;
                        break;
                    }
            }
        } catch (s) {
            throw xos(this.composerDataHandle, i, r), s;
        }
    }
    isAutoRoutingResultDisplayEnabled() {
        return this.instantiationService.invokeFunction((e)=>e.get(Cr).getFeatureGateProperty("composer_auto_routing_result_display").nonReactive());
    }
    handleRoutedModel(e) {
        if (e.length === 0) return;
        this.pendingRoutedModelLabel = e;
        const n = this.composerDataService.getLastHumanBubble(this.composerDataHandle);
        n !== void 0 && n.routedModelLabel !== e && this.composerDataService.updateComposerBubbleSetStore(this.composerDataHandle, n.bubbleId, (i)=>{
            i("routedModelLabel", e);
        });
    }
    async handleToolCallDelta(e, n) {
        const i = n.message;
        if (i.case !== "toolCallDelta") return;
        this.notifyFirstTokenIfNeeded();
        const r = this.composerDataHandle.data.composerId, s = i.value.callId, o = i.value.toolCallDelta?.delta.case, a = i.value.toolCallDelta?.delta.value;
        if (o && a) {
            const l = o.replace(/Delta$/, ""), c = this.specialToolHandlers.get(l);
            c && await kze(this.asyncOperationRegistry, r, "process_tool_call_delta", ()=>c.handleToolCallDelta(e, a, s), {
                lastToolCallId: s,
                lastToolName: l
            });
        }
    }
    async handlePartialToolCall(e, n) {
        var i = [];
        try {
            const o = n.message;
            if (o.case !== "partialToolCall") return;
            this.notifyFirstTokenIfNeeded();
            const a = o.value.toolCall;
            if (!a) return;
            const l = a.tool.case, c = o.value.callId;
            if (this.isArglessTaskPartialToolCall(a) || this.markToolCallAsUnfinished(c), !l) return;
            const u = !this.tracedPartialToolCallIds.has(c);
            u && this.tracedPartialToolCallIds.add(c);
            const d = hcl(i, u ? this.createToolProcessingSpan(e, "processPartialToolCall", c, l) : void 0), h = this.specialToolHandlers.get(l);
            if (h) {
                await h.handlePartialToolCall(a, c);
                return;
            }
            try {
                const p = await f0i(a, c, this.instantiationService, {
                    conversationParentAgentId: this.resolveConversationParentAgentId()
                }), g = this.getExistingToolFormerBubbleId(c);
                if (g !== void 0) {
                    this.partialToolCallCoalescer.enqueue(c, {
                        bubbleId: g,
                        toolFormerData: p
                    });
                    return;
                }
                Qm(()=>{
                    const f = this.getOrCreateToolFormerBubbleId(e, p);
                    f !== void 0 && this.upsertToolFormerBubbleData(f, p);
                });
            } catch (p) {
                if (p instanceof Error && p.message.includes("Unsupported tool type")) {
                    this.handleTextDelta(e, `[Tool: ${l}]
`);
                    return;
                }
                throw p;
            }
        } catch (o) {
            var r = o, s = !0;
        } finally{
            pcl(i, r, s);
        }
    }
    async handleToolCallStarted(e, n) {
        const i = n.message;
        if (i.case !== "toolCallStarted") return;
        this.notifyFirstTokenIfNeeded();
        const r = this.composerDataHandle.data.composerId, s = i.value.toolCall;
        if (!s) return;
        const o = s.tool.case, a = i.value.callId;
        this.markToolCallAsUnfinished(a), o && await kze(this.asyncOperationRegistry, r, "process_tool_call_started", async ()=>{
            const l = this.specialToolHandlers.get(o);
            if (l) {
                await l.handleToolCallStarted(s, a);
                return;
            }
            try {
                const c = await f0i(s, a, this.instantiationService, {
                    conversationParentAgentId: this.resolveConversationParentAgentId()
                });
                Qm(()=>{
                    const u = this.getOrCreateToolFormerBubbleId(e, c);
                    u !== void 0 && this.upsertToolFormerBubbleData(u, c);
                });
            } catch (c) {
                if (c instanceof Error && c.message.includes("Unsupported tool type")) this.handleTextDelta(e, `[Tool: ${o}]
`);
                else throw c;
            }
        }, {
            lastToolCallId: a,
            lastToolName: o
        });
    }
    async handleToolCallCompleted(e, n) {
        const i = n.message;
        if (i.case !== "toolCallCompleted") return;
        const r = this.composerDataHandle.data.composerId, s = i.value.callId, o = i.value.toolCall;
        if (!o) return;
        const a = o.tool.case;
        if (this.markToolCallAsFinished(s), a === "deleteToolCall") {
            const l = o.tool.value, c = l.args?.path, u = l.result?.result?.case === "success";
            c && u && this.instantiationService.invokeFunction((d)=>{
                const h = d.get(_be), f = d.get(no).getComposerData(this.composerDataHandle)?.modelConfig?.modelName;
                h.recordAiDeletedFile(c, {
                    composerId: r,
                    model: f
                }).catch((_)=>{
                    console.error("[AgentResponseAdapter] Error recording AI deleted file:", _);
                });
            });
        }
        if (a === "editToolCall") {
            const l = o.tool.value, c = l.args?.path, u = l.result?.result?.case === "success";
            c && u && Pwe(c) && this.canvasWrittenPaths.add(c);
        }
        if (a === "switchModeToolCall") {
            const l = o.tool.value, c = l.result?.result?.case === "success" ? l.result.result.value.toModeId : void 0;
            c && this.hooks.onSwitchModeToolCallCompleted?.({
                targetModeId: c
            });
        }
        await kze(this.asyncOperationRegistry, r, "process_tool_call_completed", async ()=>{
            if (a) {
                const l = this.specialToolHandlers.get(a);
                if (l) {
                    const c = this.getToolExecutionLocation(a);
                    await kze(this.asyncOperationRegistry, r, c, ()=>l.handleToolCallCompleted(o, s), {
                        lastToolCallId: s,
                        lastToolName: a
                    });
                    const u = this.getToolFormer(), d = u.getBubbleIdByToolCallId(s);
                    d && u.setBubbleData(d, {
                        toolCall: o
                    });
                    return;
                }
                try {
                    const c = await f0i(o, s, this.instantiationService, {
                        conversationParentAgentId: this.resolveConversationParentAgentId()
                    });
                    Qm(()=>{
                        const u = this.getOrCreateToolFormerBubbleId(e, c);
                        u !== void 0 && this.upsertToolFormerBubbleData(u, c);
                    });
                } catch (c) {
                    if (c instanceof Error && c.message.includes("Unsupported tool type")) {
                        this.handleTextDelta(e, `[Tool: ${a}]
`);
                        return;
                    }
                    throw c;
                }
            }
        }, {
            lastToolCallId: s,
            lastToolName: a
        });
    }
    getToolExecutionLocation(e) {
        switch(e){
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
        const e = this.instantiationService.invokeFunction((l)=>l.get(no)), n = this.instantiationService.invokeFunction((l)=>l.get(Li)), i = this.instantiationService.invokeFunction((l)=>l.get(wh)), r = P5y({
            writtenPaths: this.canvasWrittenPaths,
            handledPaths: this.handledCanvasPaths
        });
        if (r.paths.length === 0) {
            this.canvasWrittenPaths.size > 0 && GPe(i, "Canvas detection: all written paths already handled", {
                composerId: this.composerDataHandle.data.composerId,
                writtenPathCount: this.canvasWrittenPaths.size,
                handledPathCount: this.handledCanvasPaths.size
            });
            return;
        }
        const s = this.composerDataHandle.data.composerId;
        GPe(i, "Canvas detected via tool write", {
            composerId: s
        });
        const o = new Set;
        for (const l of this.composerDataHandle.data.newlyCreatedFiles ?? [])o.add(l.uri.fsPath);
        const a = N5y({
            decision: r,
            headers: this.composerDataHandle.data.fullConversationHeadersOnly,
            existingActiveCanvas: dhe(this.composerDataHandle.data.activeCanvas),
            newlyCreatedFilePaths: o,
            isHuman: (l)=>l.type === bs.HUMAN,
            handledPaths: this.handledCanvasPaths,
            applyActiveCanvas: (l, c)=>{
                e.updateComposerDataSetStore(this.composerDataHandle, (u)=>{
                    u("activeCanvas", l), c && u("canvasPillCollapsed", !1);
                });
            }
        });
        a.applied ? GPe(i, "Canvas surfaced", {
            composerId: s,
            detectionSource: "tool_write"
        }) : n.error("[AgentResponseAdapter] Failed to surface canvas:", r.paths.join(", "), a.error);
    }
    stampBubbleTiming(e, n) {
        if (e === void 0) return;
        const i = this.composerDataService.getComposerBubbleUntracked(this.composerDataHandle, e);
        if (i === void 0) return;
        const r = WEn(i, n);
        r !== i && this.composerDataService.updateComposerBubbleSetStore(this.composerDataHandle, e, (s)=>{
            s("createdAt", r.createdAt), s("startedAtMs", r.startedAtMs), s("completedAtMs", r.completedAtMs);
        });
    }
    stampToolCallTiming(e) {
        const n = e.message;
        if (n.case !== "toolCallStarted" && n.case !== "toolCallCompleted" && n.case !== "partialToolCall") return;
        const i = n.value.toolCall;
        if (i === void 0) return;
        const r = this.getExistingToolFormerBubbleId(n.value.callId), s = LCt({
            kind: "tool",
            toolCall: i
        });
        if (n.case !== "toolCallCompleted") {
            this.stampBubbleTiming(r, s);
            return;
        }
        const o = r ? this.composerDataService.getComposerBubbleUntracked(this.composerDataHandle, r) : void 0;
        this.stampBubbleTiming(r, p9m(s, o ?? {}, Date.now()));
    }
    handleTextDelta(e, n, i) {
        if (n.length === 0) return;
        this.partialToolCallCoalescer.flush(), this.cancelUnfinishedToolCalls();
        const r = this.composerDataService, s = r.getComposerData(this.composerDataHandle);
        if (!s) return;
        const o = this.getLastInFlightBubble(), a = o !== void 0 && s.generatingBubbleIds?.includes(o.bubbleId) === !0, l = o?.type !== bs.AI || o.capabilityType !== void 0 || !a;
        let c = !l && o !== void 0 ? o : void 0;
        if (l) {
            const h = WEn({
                ...J_(),
                codeBlocks: [],
                type: bs.AI,
                text: ""
            }, i);
            Qm(()=>{
                r.appendComposerBubbles(this.composerDataHandle, [
                    h
                ], qst(e)), r.updateComposerDataSetStore(this.composerDataHandle, (p)=>p("generatingBubbleIds", [
                        h.bubbleId
                    ]));
            }), c = h;
        }
        const u = c ?? r.getLastAiBubble(this.composerDataHandle);
        if (!u) return;
        const d = u.text + n;
        r.updateComposerBubbleSetStore(this.composerDataHandle, u.bubbleId, (h)=>h("text", d));
    }
    appendThinkingText(e) {
        const n = this.currentThinkingBubbleId;
        if (!n) return;
        this.composerDataService.updateComposerBubbleSetStore(this.composerDataHandle, n, (r)=>r("thinking", (s)=>({
                    text: (s?.text ?? "") + e,
                    signature: s?.signature ?? ""
                })));
    }
    handleThinkingDelta(e, n, i, r) {
        const s = n.length === 0;
        this.cancelUnfinishedToolCalls(), this.notifyFirstTokenIfNeeded();
        const o = this.composerDataService, a = o.getComposerData(this.composerDataHandle);
        if (a) {
            if (!s && i === void 0 && this.currentThinkingBubbleId !== void 0) {
                const l = a.fullConversationHeadersOnly;
                if (l[l.length - 1]?.bubbleId === this.currentThinkingBubbleId) {
                    const u = a.conversationMap[this.currentThinkingBubbleId];
                    if (u?.capabilityType === mo.THINKING && u.thinkingDurationMs === void 0) {
                        this.thinkingWordStreamer || (this.thinkingWordStreamer = new mcl((d)=>this.appendThinkingText(d))), this.thinkingWordStreamer.enqueue(n);
                        return;
                    }
                }
            }
            Qm(()=>{
                const l = this.getLastInFlightBubble(), u = l?.capabilityType === mo.THINKING && l?.thinkingDurationMs === void 0;
                let d;
                if (u) d = l.bubbleId;
                else {
                    this.thinkingWordStreamer && this.thinkingWordStreamer.flush();
                    const p = WEn({
                        ...J_(),
                        type: bs.AI,
                        text: "",
                        capabilityType: mo.THINKING
                    }, r);
                    d = p.bubbleId, o.appendComposerBubbles(this.composerDataHandle, [
                        p
                    ], qst(e)), o.updateComposerDataSetStore(this.composerDataHandle, (g)=>g("generatingBubbleIds", [
                            p.bubbleId
                        ]));
                }
                this.currentThinkingBubbleId = d;
                const h = this.convertAgentThinkingStyleToConversationThinkingStyle(i);
                o.updateComposerBubbleSetStore(this.composerDataHandle, d, (p)=>p("thinkingStyle", (g)=>g ?? h)), s ? o.updateComposerBubbleSetStore(this.composerDataHandle, d, (p)=>p("thinking", (g)=>({
                            text: g?.text ?? "",
                            signature: g?.signature ?? ""
                        }))) : (this.thinkingWordStreamer || (this.thinkingWordStreamer = new mcl((p)=>this.appendThinkingText(p))), this.thinkingWordStreamer.enqueue(n));
            });
        }
    }
    convertAgentThinkingStyleToConversationThinkingStyle(e) {
        switch(e){
            case Pmn.CODEX:
                return utt.CODEX;
            case Pmn.GPT5:
                return utt.GPT5;
            case Pmn.DEFAULT:
            case Pmn.UNSPECIFIED:
            case void 0:
            default:
                return utt.DEFAULT;
        }
    }
    emitAfterModelThought(e, n) {
        const i = this.instantiationService.invokeFunction((p)=>p.get(IX));
        if (!i.hasHookForStep(dh.afterAgentThought)) return;
        const r = this.instantiationService.invokeFunction((p)=>p.get(eg)), s = this.composerDataService, o = s.getComposerData(this.composerDataHandle), a = o?.latestChatGenerationUUID ?? o?.chatGenerationUUID ?? "", l = s.getComposerBubble(this.composerDataHandle, e), c = l?.thinking?.text ?? "", u = o?.modelConfig, d = r.getHookModelString(u), h = r.getHookModelFields(u);
        l?.thinkingDurationMs === void 0 && i.executeHookForStep(dh.afterAgentThought, {
            conversation_id: this.composerDataHandle.data.composerId,
            generation_id: a,
            text: c,
            duration_ms: n,
            model: d,
            ...h
        }).catch((p)=>{
            console.error("[composer] error executing afterAgentThought hook", p);
        });
    }
    handleThinkingCompleted(e) {
        const n = e.message;
        n.case === "thinkingCompleted" && Qm(()=>{
            this.thinkingWordStreamer && this.thinkingWordStreamer.flush();
            const i = this.composerDataService, r = this.getLastInFlightBubble();
            if (r?.capabilityType !== mo.THINKING) return;
            const s = r.bubbleId, o = n.value.thinkingDurationMs;
            this.emitAfterModelThought(s, o), i.updateComposerBubbleSetStore(this.composerDataHandle, s, (a)=>a("thinkingDurationMs", o)), i.updateComposerDataSetStore(this.composerDataHandle, (a)=>a("generatingBubbleIds", []));
        });
    }
    handleSummaryStarted(e) {
        const n = this.composerDataService;
        if (!n.getComposerData(this.composerDataHandle)) return;
        const r = this.getLastInFlightBubble();
        if (r?.capabilityType === mo.SUMMARIZATION) {
            n.updateComposerDataSetStore(this.composerDataHandle, (o)=>o("generatingBubbleIds", [
                    r.bubbleId
                ]));
            return;
        }
        const s = {
            ...J_(),
            type: bs.AI,
            text: "",
            capabilityType: mo.SUMMARIZATION
        };
        Qm(()=>{
            n.appendComposerBubbles(this.composerDataHandle, [
                s
            ], qst(e)), n.updateComposerDataSetStore(this.composerDataHandle, (o)=>o("generatingBubbleIds", [
                    s.bubbleId
                ]));
        });
    }
    handleSummaryCompleted(e, n, i) {
        const r = this.composerDataService, s = this.getLastInFlightBubble();
        s?.capabilityType === mo.SUMMARIZATION && (n && r.updateComposerBubble(this.composerDataHandle, s.bubbleId, {
            text: n
        }, qst(e)), !(i === !0 && this.composerDataHandle.data.manualSummarization?.bubbleId === s.bubbleId) && r.updateComposerDataSetStore(this.composerDataHandle, (o)=>{
            o("generatingBubbleIds", []);
        }));
    }
    enqueuePostTurnEndedWork(e) {
        this.postTurnEndedWorkQueue.push(e);
    }
    async flushPostTurnEndedWork(e) {
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
            return this.transcriptVisibilityService ??= this.instantiationService.invokeFunction((e)=>e.get(gwi)), this.transcriptVisibilityService.isTranscriptVisible(this.composerDataHandle.data.composerId);
        } catch  {
            return !1;
        }
    }
    isQueuedPromptNewRequestIdEnabled() {
        try {
            return this.instantiationService.invokeFunction((n)=>n.get(Cr)).checkFeatureGate("agent_queued_prompt_new_request_id", {
                disableExposureLog: !1
            });
        } catch  {
            return !1;
        }
    }
    getTextDeltaPacingOptions() {
        const e = {
            targetCharsPerFrame: 24,
            maxLagFrames: 8,
            barrierMaxWaitMs: 250
        };
        try {
            const i = this.instantiationService.invokeFunction((a)=>a.get(Cr)).getDynamicConfig("text_delta_pacing_config", {
                disableExposureLog: !1
            }), r = typeof i.targetCharsPerFrame == "number" && i.targetCharsPerFrame > 0 ? i.targetCharsPerFrame : e.targetCharsPerFrame, s = typeof i.maxLagFrames == "number" && i.maxLagFrames >= 1 ? i.maxLagFrames : e.maxLagFrames, o = typeof i.barrierMaxWaitMs == "number" && i.barrierMaxWaitMs > 0 ? i.barrierMaxWaitMs : e.barrierMaxWaitMs;
            return {
                targetCharsPerFrame: r,
                maxLagFrames: s,
                barrierMaxWaitMs: o
            };
        } catch  {
            return e;
        }
    }
    async sendUpdate(e, n) {
        if (this.disposed) return;
        const i = c$(this.composerDataHandle);
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
        const l = i.composerId;
        if (this.asyncOperationRegistry.enter(l, "capability_process_stream"), this.shouldTraceInteractionUpdate(n)) {
            const g = {
                composerId: i.composerId,
                generationUUID: this.generationUUID
            };
            if (r === "toolCallStarted" || r === "toolCallCompleted" || r === "toolCallDelta" || r === "partialToolCall") {
                const f = n.message.value.callId;
                if (g.toolCallId = f, r !== "toolCallDelta") {
                    const _ = n.message.value.toolCall, b = _?.tool?.case;
                    b && (g.toolName = b);
                    const y = this.getMcpToolCallTelemetry(_);
                    y && (g["mcp.server.identifier"] = y.serverIdentifier, g["mcp.tool.name"] = y.toolName), r === "toolCallCompleted" && _ && this.addToolCallSizeBreadcrumbData(g, _);
                }
            }
            Rke({
                category: "agent.update",
                message: r,
                level: "info",
                data: g
            });
        }
        if (this.notifyBeforeUpdate(), n.message.case === "textDelta") {
            try {
                const g = Bpg(n.message.value);
                if (g !== void 0 && this.isAutoRoutingResultDisplayEnabled()) {
                    this.handleRoutedModel(g);
                    return;
                }
                Fpg(n.message.value) && this.notifyFirstTokenIfNeeded(), this.textDeltaCoalescer.enqueue({
                    ctx: e,
                    timing: LCt({
                        kind: "interaction",
                        update: n
                    })
                }, n.message.value.text);
            } finally{
                this.notifyAfterUpdate(), this.asyncOperationRegistry.exit(l, "capability_process_stream");
            }
            return;
        }
        const c = this.shouldTraceInteractionUpdate(n) ? SS(e.withName(`AgentResponseAdapter.${r}`)) : void 0;
        if (c && (c.span.setAttribute("agent.update.case", r ?? "unknown"), r === "toolCallStarted" || r === "toolCallCompleted")) {
            c.span.setAttribute("agent.tool_call_id", n.message.value.callId);
            const g = n.message.value.toolCall;
            c.span.setAttribute("tool.name", g?.tool.case ?? "unknown");
            const f = this.getMcpToolCallTelemetry(g);
            f && (c.span.setAttribute("mcp.server.identifier", f.serverIdentifier), c.span.setAttribute("mcp.tool.name", f.toolName));
        }
        const u = c?.ctx ?? e;
        try {
            switch(r !== "tokenDelta" && r !== "heartbeat" && (await this.textDeltaCoalescer.flushGracefully(), r !== "partialToolCall" && this.partialToolCallCoalescer.flush()), n.message.case){
                case "thinkingDelta":
                    {
                        this.handleThinkingDelta(u, n.message.value.text, n.message.value.thinkingStyle, LCt({
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
                        const g = n.message.value.userMessage, f = g?.messageId;
                        if (this.conversationActionManager && f && this.conversationActionManager.markMessageAsProcessed(g), f) {
                            const _ = this.composerDataService, b = _.getComposerCapability(this.composerDataHandle, mo.QUEUING), y = b?.getSteerItemByMessageId(f);
                            y && (b?.markSteerDeliveryConfirmed(f), _.getComposerBubbleUntracked(this.composerDataHandle, f) || await this.instantiationService.invokeFunction((C)=>C.get(l0)).appendQueuedHumanMessage(this.composerDataHandle, y.query, {
                                richText: y.richText,
                                contextOverride: y.contextOverride,
                                bubbleId: f
                            }));
                            const S = _.getComposerBubbleUntracked(this.composerDataHandle, f);
                            if (S) {
                                const k = B6e(this.composerDataHandle.data.conversationState);
                                g !== void 0 && this.stampBubbleTiming(f, LCt({
                                    kind: "user",
                                    userMessage: g
                                })), _.updateComposerBubbleSetStore(this.composerDataHandle, f, (C)=>{
                                    C("conversationState", k), S.isOptimistic === !0 && C("isOptimistic", !1);
                                });
                            } else this.instantiationService.invokeFunction((C)=>C.get(Li)).warn("[AgentResponseAdapter] Skipping conversationState snapshot for unloaded user message bubble", {
                                composerId: this.composerDataHandle.composerId,
                                messageId: f
                            });
                        }
                        break;
                    }
                case "contextInjectionState":
                    {
                        const g = n.message.value, f = g.state?.state.case;
                        if (g.injectionId && f !== void 0) {
                            const b = this.composerDataService.getComposerCapability(this.composerDataHandle, mo.QUEUING), y = {
                                queued: "queued",
                                delivered: "delivered",
                                queuedForNextTurn: "queued_for_next_turn",
                                cancelled: "cancelled",
                                rejected: "rejected"
                            }[f];
                            b?.applyContextInjectionAck(g.injectionId, y);
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
                        const g = this.composerDataService, f = n.message.value;
                        (f.inputTokens !== void 0 || f.outputTokens !== void 0 || f.cacheReadTokens !== void 0 || f.cacheWriteTokens !== void 0) && g.updateComposerDataSetStore(this.composerDataHandle, (M)=>{
                            M("turnTokenUsage", {
                                inputTokens: Number(f.inputTokens ?? BigInt(0)),
                                outputTokens: Number(f.outputTokens ?? BigInt(0)),
                                cacheReadTokens: Number(f.cacheReadTokens ?? BigInt(0)),
                                cacheWriteTokens: Number(f.cacheWriteTokens ?? BigInt(0))
                            });
                        });
                        const _ = g.getComposerCapability(this.composerDataHandle, mo.QUEUING), b = _?.getQueueItemsReactive() ?? [], y = iYr(b), S = y && this.composerDataHandle.data.editingQueueItemId === y.id, k = _?.isDebugReproWaitingAfterTurnEnds() === !0;
                        if (y && !S && !k) {
                            const M = this.instantiationService.invokeFunction((O)=>O.get(kie)).isCursorAgentHostEnabled();
                            if (Upg({
                                isLocalMode: vl.localMode,
                                isAgentHostEnabled: M,
                                isNewRequestIdGateEnabled: ()=>this.isQueuedPromptNewRequestIdEnabled()
                            })) {
                                const O = this.instantiationService.invokeFunction((G)=>G.get(l0)), N = this.instantiationService.invokeFunction((G)=>G.get(oF)), U = y.extras?.contextOverride, j = Ai(), $ = Xae(y.extras.simulatedMsgReason, y.extras.simulatedMessageMetadata, {
                                    includeEmptyMetadata: !0,
                                    defaultToEmptyMetadata: !0
                                });
                                _?.removeFromQueue(y.id), O.appendQueuedHumanMessage(this.composerDataHandle, y.query, {
                                    richText: y.extras.richText,
                                    contextOverride: U,
                                    bubbleId: j,
                                    simulatedMsgReason: y.extras.simulatedMsgReason,
                                    sentByVoiceCall: y.extras.sentByVoiceCall,
                                    simulatedMessageMetadata: y.extras.simulatedMessageMetadata
                                });
                                const H = await N.buildComposerSelectedContext(u, this.composerDataHandle, {
                                    diffTabGitAction: y.extras.diffTabGitAction,
                                    trackSubmittedSlashSubjects: y.extras.simulatedMsgReason === void 0
                                });
                                g.updateComposerDataSetStore(this.composerDataHandle, (G)=>{
                                    G("generatingBubbleIds", []);
                                });
                                try {
                                    this.conversationActionManager.queueFollowUpUserMessage(new t0({
                                        text: y.query,
                                        richText: y.extras.richText,
                                        messageId: j,
                                        selectedContext: H,
                                        ...$ ?? {},
                                        sentByVoiceCall: y.extras.sentByVoiceCall
                                    }));
                                } catch (G) {
                                    if (!(G instanceof Z0e)) throw G;
                                    this.instantiationService.invokeFunction((q)=>q.get(wh)).warn("composer", "Queued follow-up not handed off: run aborted or disposed during the turn-end handoff", {
                                        composerId: l,
                                        requestId: this.generationUUID,
                                        bubbleId: j
                                    });
                                }
                                break;
                            }
                        }
                        g.updateComposerDataSetStore(this.composerDataHandle, (M)=>{
                            M("status", "completed"), M("generatingBubbleIds", []), M("chatGenerationUUID", void 0);
                        }), await this.maybeSurfaceCanvas();
                        const C = this.instantiationService.invokeFunction((M)=>M.get(Bb));
                        {
                            const M = C.getInputDelegate(l);
                            M.setPendingSuggestionReqId(this.promptSuggestionReqId), M.enablePendingSuggestion();
                        }
                        const T = this.instantiationService.invokeFunction((M)=>M.get(YM)), I = g.getLastHumanBubbleId(this.composerDataHandle), A = g.getLastAiBubble(this.composerDataHandle), P = A?.bubbleId;
                        if (I && P) {
                            var d = [];
                            try {
                                const M = hcl(d, g6t({
                                    parentSpanContext: qst(u),
                                    name: "chatStreamFinishedCapabilities"
                                }));
                                qis(M, {
                                    requestId: this.generationUUID,
                                    composerId: l
                                }), await T.runCapabilitiesForProcess(this.composerDataHandle, "chat-stream-finished", {
                                    composerId: l,
                                    humanBubbleId: I,
                                    aiBubbleId: P,
                                    startTime: void 0,
                                    parentSpanCtx: M
                                }).catch((O)=>{
                                    console.error("[AgentResponseAdapter] error running capabilities for chat-stream-finished", O);
                                });
                            } catch (M) {
                                var h = M, p = !0;
                            } finally{
                                pcl(d, h, p);
                            }
                        }
                        this.hasReceivedFirstToken && I !== void 0 && A !== void 0 && A.errorDetails === void 0 ? this.refreshUsageStatusAfterSuccessfulForegroundTurn() : this.instantiationService.invokeFunction((O)=>O.get(ZW)).refetch(!0);
                        break;
                    }
                case "stepStarted":
                    break;
                case "toolRequestsListed":
                    break;
                case "stepCompleted":
                    {
                        const g = n.message.case === "stepCompleted" ? n.message.value : void 0;
                        if (g) {
                            const f = this.composerDataService, _ = f.getLastAiBubble(this.composerDataHandle);
                            if (_) {
                                const b = this.pendingRoutedModelLabel;
                                f.updateComposerBubbleSetStore(this.composerDataHandle, _.bubbleId, (y)=>{
                                    y("turnDurationMs", Number(g.stepDurationMs)), b !== void 0 && y("routedModelLabel", b);
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
                        const g = this.instantiationService.invokeFunction((k)=>k.get(Bb)), f = this.composerDataService, _ = this.composerDataHandle.data.composerId, b = this.promptSuggestionReqId;
                        if (b === void 0) break;
                        const y = {
                            text: n.message.value.suggestion,
                            reqId: b
                        };
                        f.updateComposerDataSetStore(this.composerDataHandle, (k)=>{
                            k("promptSuggestion", y);
                        }), g.getInputDelegate(_).setSuggestionText(y.text, y.reqId);
                        break;
                    }
                case "feedbackRequest":
                    {
                        const g = this.composerDataService, { requestId: f, canonicalModelName: _, categories: b, categoryGroups: y, title: S, negativeTitle: k, commentPlaceholder: C } = n.message.value;
                        g.updateComposerDataSetStore(this.composerDataHandle, (T)=>{
                            T("feedbackRequest", {
                                requestId: f,
                                canonicalModelName: _,
                                categories: b.map((I)=>({
                                        id: I.id,
                                        label: I.label
                                    })),
                                categoryGroups: y.map((I)=>({
                                        id: I.id,
                                        prompt: I.prompt,
                                        categories: I.categories.map((A)=>({
                                                id: A.id,
                                                label: A.label
                                            }))
                                    })),
                                title: S,
                                negativeTitle: k,
                                commentPlaceholder: C
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
                        const g = this.composerDataService, f = this.instantiationService.invokeFunction((b)=>b.get(kc)), _ = g.getLastBubble(this.composerDataHandle);
                        if (_) {
                            const b = n.message.value;
                            g.updateComposerBubble(this.composerDataHandle, _.bubbleId, {
                                errorDetails: {
                                    title: b.title,
                                    message: b.message,
                                    requestId: "",
                                    error: new pS({
                                        error: wo.CUSTOM_MESSAGE,
                                        details: new P$e({
                                            title: b.title,
                                            detail: b.message,
                                            showRequestId: !1,
                                            additionalInfo: {
                                                hideIcon: "true",
                                                hideKeybindings: "true"
                                            }
                                        })
                                    }),
                                    extraButtons: [
                                        {
                                            label: b.buttonLabel,
                                            variant: "primary",
                                            callback: ()=>{
                                                f.open(rt.parse(b.buttonUrl));
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
                        const g = this.instantiationService.invokeFunction((b)=>b.get(ss)).getCurrentAuthId();
                        if (!(g !== void 0 && this.instantiationService.invokeFunction((b)=>b.get(J5)).isInitializedForIdentity(g)) || !this.instantiationService.invokeFunction((b)=>b.get(Cr)).getExperimentParam(krg, "enabled", {
                            disableExposureLog: !1
                        })) break;
                        Tmk(this.composerDataHandle.composerId, {
                            job: n.message.value.job,
                            description: n.message.value.description,
                            showNumber: n.message.value.showNumber
                        });
                        break;
                    }
                case "activeBranchChange":
                    {
                        const g = n.message.value.branchName;
                        if (g.length === 0) break;
                        let f = n.message.value.path.trim() || void 0;
                        if (!f) {
                            const y = this.composerDataHandle.data.workspaceIdentifier;
                            y && $l(y) && (f = this.scmService.getRepository(y.uri)?.provider.rootUri?.fsPath);
                        }
                        if (!f) break;
                        const _ = this.composerDataService, b = PSi(this.composerDataHandle, (y)=>_.getHandleIfLoaded(y));
                        _.updateComposerData(b, {
                            trackedGitRepos: $ae(f, g, Date.now(), b.data.trackedGitRepos)
                        });
                        break;
                    }
                case void 0:
                    break;
                default:
                    {
                        const g = n.message;
                        break;
                    }
            }
        } catch (g) {
            console.error("[AgentResponseStateMachine] Error processing update:", g);
        } finally{
            c?.[Symbol.dispose](), this.notifyAfterUpdate(), this.asyncOperationRegistry.exit(l, "capability_process_stream");
        }
    }
    async answerHostQuestion(e, n) {
        switch(n.case){
            case "execApproval":
                return {
                    case: "execApproval",
                    value: await this.hostApprovalQueryHandler.handleExecApproval(e, n.value)
                };
            case "mcpElicitation":
                return {
                    case: "mcpElicitation",
                    value: await this.hostApprovalQueryHandler.handleMcpElicitation(e, n.value)
                };
        }
    }
    async query(e, n) {
        switch(n.query.case){
            case "webSearchRequestQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing web search query payload");
                    const r = await this.handleWebSearchRequest(i);
                    return r.result.case === "approved" ? bL.webSearchApproved(n.id) : bL.webSearchRejected(n.id, r.result.value?.reason);
                }
            case "webFetchRequestQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing web fetch query payload");
                    const r = await this.handleWebFetchRequest(i);
                    return r.result.case === "approved" ? bL.webFetchApproved(n.id) : bL.webFetchRejected(n.id, r.result.value?.reason);
                }
            case "askQuestionInteractionQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing ask question query payload");
                    const r = await this.handleAskQuestionRequest(i);
                    return bL.askQuestion(n.id, r.result);
                }
            case "switchModeRequestQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing switch mode query payload");
                    const r = await this.handleSwitchModeRequest(i);
                    return r.result.case === "approved" ? bL.switchModeApproved(n.id) : bL.switchModeRejected(n.id, r.result.value?.reason);
                }
            case "createPlanRequestQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing create plan query payload");
                    const r = await this.handleCreatePlanRequest(i);
                    return bL.createPlan(n.id, r.result);
                }
            case "mcpAuthRequestQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing MCP auth query payload");
                    const r = await this.handleMcpAuthRequest(i);
                    return r.result.case === "approved" ? bL.mcpAuthApproved(n.id) : bL.mcpAuthRejected(n.id, r.result.value?.reason);
                }
            case "connectScmRequestQuery":
                {
                    const i = n.query.value;
                    if (!i) throw new Error("Missing connect SCM query payload");
                    const r = await this.handleConnectScmRequest(i);
                    switch(r.result.case){
                        case "approved":
                            return bL.connectScmApproved(n.id);
                        case "failed":
                            return bL.connectScmFailed(n.id, r.result.value?.error);
                        default:
                            return bL.connectScmRejected(n.id, r.result.value?.reason);
                    }
                }
            case "setupVmEnvironmentArgs":
                return bL.setupVmEnvironment(n.id, new dni({
                    result: {
                        case: "success",
                        value: new hSr({})
                    }
                }));
            case "prManagementRequestQuery":
                return bL.prManagement(n.id, N91());
            case "generateImageRequestQuery":
                return bL.generateImageApproved(n.id, n.query.value.args?.description);
            case "replaceEnvArgs":
                return bL.replaceEnv(n.id, new vni({
                    result: {
                        case: "failure",
                        value: new fSr({
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
    async handleAskQuestionRequest(e) {
        return this.askQuestionQueryHandler.handleAskQuestionRequest(e);
    }
    async handleSwitchModeRequest(e) {
        return this.switchModeQueryHandler.handleSwitchModeRequest(e);
    }
    async handleCreatePlanRequest(e) {
        return this.createPlanQueryHandler.handleCreatePlanRequest(e);
    }
    async handleWebSearchRequest(e) {
        return this.webSearchQueryHandler.handleWebSearchRequest(e);
    }
    async handleWebFetchRequest(e) {
        return this.webFetchQueryHandler.handleWebFetchRequest(e);
    }
    async handleMcpAuthRequest(e) {
        return this.mcpAuthQueryHandler.handleMcpAuthRequest(e);
    }
    async handleConnectScmRequest(e) {
        return this.connectScmQueryHandler.handleConnectScmRequest(e);
    }
}, gcl.HIGH_FREQUENCY_UPDATE_CASES = new Set([
    "textDelta",
    "thinkingDelta",
    "tokenDelta",
    "toolCallDelta",
    "heartbeat",
    "shellOutputDelta",
    "partialToolCall"
]), YTt = gcl;

}
