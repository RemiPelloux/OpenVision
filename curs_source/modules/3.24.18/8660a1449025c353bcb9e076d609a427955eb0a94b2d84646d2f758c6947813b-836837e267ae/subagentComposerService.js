import { Ang, Cog, Iog, Isl, Izt, Qrs, Vrg, gog, lsl, vog, wog, xog } from "./Aeg.js";
import { Ei, Fa, Ga, Qe, Tr, Vh, Ya, st, ww } from "./Iwo.js";
import { pc } from "./LYd.js";
import { bn, x0 } from "./SZu.js";
import { $bk, Ayk, Cyk, Ele, Eyk, Iyk, Tyk, Vll, Xhg, Yug, Zhg, chg, hhg, xyk } from "./Ycg.js";
import { $ze } from "./agentClientService.js";
import { SAn } from "./agentHostService.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { Eog } from "./agentStoreSubagentMount.js";
import { zTi } from "./agentTraceContext.js";
import { JPe, hG } from "./agent_host_pb.js";
import { ju, nf } from "./agent_pb.js";
import { Vae } from "./aiEverythingProviderService.js";
import { Dc, jl } from "./aiService.js";
import { qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { ZD, jO } from "./backgroundWorkRegistry.js";
import { rp } from "./bcIdFromAuthority.js";
import { Yse, bs, sd } from "./chat_pb.js";
import { dhg } from "./cloudSubagentRunner.js";
import { nr, rs } from "./commands.js";
import { oF, v$ } from "./composerAgent.js";
import { y6 } from "./composerCapabilities.js";
import { l0, mV } from "./composerChatServiceInterface.js";
import { J_, uv } from "./composerData.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Fb, LS } from "./composerEventService.js";
import { csl } from "./composerRequestLifecycle.js";
import { WB, YM } from "./composerUtilsServiceTypes.js";
import { mo, tf } from "./composer_pb.js";
import { Rng } from "./contextSetup.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { bze, hZm, pZm, wX } from "./gYa.js";
import { AIn, pCi } from "./globalCommandsService.js";
import { uie } from "./index_11.ts";
import { Ng } from "./index_3.ts";
import { It, dn } from "./instantiation.js";
import { B4, NCn, SS, Xp, kbe } from "./ipa.js";
import { Uh, ip } from "./metricsService.js";
import { eg, of } from "./modelConfigServiceTypes.js";
import { Ks, Wr } from "./notification.js";
import { Rd, ih } from "./pathService.js";
import { Ul, Z0 } from "./path_2.js";
import { G4e, Nze } from "./pendingApprovalRegistry.js";
import { Hqe } from "./simulatedMessageMetadataUtils.js";
import { Cm, wh } from "./structuredLog.js";
import { i1m } from "./subagent-lifecycle-store.ts";
import { Sog } from "./subagentClientVideoAttachments.js";
import { Y4e, nme } from "./subagentComposerServiceInterface.js";
import { Jrs } from "./subagentFinalMessage.js";
import { Kmk } from "./subagentHostRestartInterruption.js";
import { Hbk } from "./subagentModelParameterInheritance.js";
import { Qrg } from "./subagentSpawnMetrics.js";
import { bQ, zse } from "./subagents_pb.js";
import { Ct, Mve, Pu } from "./tools_pb.js";
import { M4e } from "./transcriptPaths.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Re } from "./userDataProfile.js";
import { Hu, Mg } from "./utils_pb.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
import { C2 } from "./workspaceProjectPaths.js";
import { MCm, Xae, nB1, t1m } from "./yBp.js";
var ecl, tcl, Zbe, Qhg, Jhg, epg, tpg, npg, Ile, bos;
export { Ile, Jhg, Qhg, Zbe, bos, ecl, epg, npg, tcl, tpg };
var __wakaru_yos_initialized = false;
export function yos() {
if (__wakaru_yos_initialized) return;
__wakaru_yos_initialized = true;
"use strict";
E(), uie(), Ng(), ju(), bQ(), sd(), Pu(), tf(), Pu(), Hu(), Ga(), qn(), rp(), Qe(), Fa(), fn(), Ei(), Xo(), ms(), Rn(), It(), Cm(), Sr(), v$(), y6(), mV(), uv(), Pl(), LS(), WB(), Nze(), csl(), Hqe(), Dc(), ip(), Qrg(), Rs(), _s(), fo(), of(), Ks(), wl(), hG(), ih(), AIn(), Ul(), C2(), Sog(), jO(), zTi(), Rng(), M4e(), Y4e(), Eog(), Kmk(), dhg(), Jrs(), Hbk(), rs(), Y4e(), ecl = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), tcl = (t)=>{
    throw TypeError(t);
}, Zbe = (t, e)=>(n, i)=>e(n, i, t), Qhg = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && tcl("Object expected");
        var i, r;
        n && (i = e[ecl("asyncDispose")]), i === void 0 && (i = e[ecl("dispose")], n && (r = i)), typeof i != "function" && tcl("Object not disposable"), r && (i = function() {
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
}, Jhg = (t, e, n)=>{
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
}, epg = 8, tpg = "bugbot", npg = "security-review", Ile = class extends Error {
    constructor(t, e){
        super(t), this.composerId = e, this.name = "SubagentCreationError";
    }
}, bos = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h){
        super(), this._composerDataService = t, this._aiService = e, this._modelConfigService = n, this._instantiationService = i, this._structuredLogService = r, this._metricsService = s, this._workspaceContextService = o, this._pathService = a, this._backgroundWorkService = l, this._experimentService = c, this._fileService = u, this._globalCommandsService = d, this._pendingApprovalRegistry = h, this._lifecycleStore = new i1m({
            onStateChange: ({ sessionId: p, nextState: g })=>{
                this._syncBackgroundWorkRegistration(p, g);
            },
            onQueuedRunReady: ({ sessionId: p, sourceRunId: g, queuedResume: f })=>{
                this._startQueuedResumeRunFromLifecycle(p, g, f);
            }
        }), this._backgroundPromises = new Map, this._backgroundAbortControllers = new Map, this._terminationReasonByComposerId = new Map, this._deferredCompletionByRunKey = new Map, this._localRunAborts = new Map, this._register(this._backgroundWorkService.registerSubagentKiller(async (p)=>{
            if (!pc(p)) {
                const g = this._lifecycleStore.getState(p), f = this._composerDataService.getHandleIfLoaded(p), _ = f ? this._composerDataService.getComposerData(f) : void 0, b = _?.chatGenerationUUID !== void 0 && this._aiService.streamingAbortControllers.has(_.chatGenerationUUID);
                if (g.status === "idle" && !this._backgroundPromises.has(p) && !b && !this._localRunAborts.has(p)) return !1;
            }
            return await this.stopSubagentTree(p), !0;
        }));
    }
    dispose() {
        try {
            for (const t of this._localRunAborts.values())t.abort();
            this._localRunAborts.clear();
            for (const { abortController: t } of this._backgroundAbortControllers.values())t.abort();
            this._backgroundAbortControllers.clear();
            for (const t of this._backgroundPromises.values()){
                if (t.settled) {
                    this._resolveBackgroundWaiters(t);
                    continue;
                }
                const e = t.waiters;
                if (!e || e.size === 0) continue;
                t.waiters = void 0;
                const n = new Error("Subagent host disposed before the background subagent settled");
                for (const i of e)i.reject(n);
            }
            this._backgroundPromises.clear(), this._deferredCompletionByRunKey.clear();
        } finally{
            super.dispose();
        }
    }
    isLongRunningJobsEnabled() {
        return this._experimentService.checkFeatureGate("long_running_jobs", {
            disableExposureLog: !1
        });
    }
    async _waitForParentTaskBubbleIfPossible(t) {
        const e = Ele(t.parentConversationId), n = Ele(t.toolCallId);
        if (!e || !n) return;
        const i = this._composerDataService.getHandleIfLoaded(e);
        if (i !== void 0 && (this._composerDataService.loadComposerCapabilities?.(i), this._composerDataService.getComposerCapability(i, mo.TOOL_FORMER)?.getBubbleIdByToolCallId(n) !== void 0)) {
            this._pendingApprovalRegistry.signalBubbleCreated(e, n);
            return;
        }
        await this._pendingApprovalRegistry.waitForBubbleCreation(e, n);
    }
    async createOrResumeSubagent(t) {
        const e = {
            mode: t.resumeAgentId ? "resume" : t.forkAgentId ? "fork" : "create",
            surfaceKind: Vrg({
                parentConversationId: t.parentConversationId.trim(),
                parentComposer: this._composerDataService.getHandleIfLoaded(t.parentConversationId.trim())?.data,
                getComposer: (i)=>this._composerDataService.getHandleIfLoaded(i)?.data
            })
        }, n = performance.now();
        try {
            const i = await this._createOrResumeSubagentSpawn(t, e);
            return Isl(this._metricsService, {
                phase: "total",
                mode: e.mode,
                surfaceKind: e.surfaceKind,
                durationMs: performance.now() - n,
                outcome: "ok"
            }), i;
        } catch (i) {
            throw Isl(this._metricsService, {
                phase: "total",
                mode: e.mode,
                surfaceKind: e.surfaceKind,
                durationMs: performance.now() - n,
                outcome: Ya(i) ? "aborted" : "error"
            }), i;
        }
    }
    async _createOrResumeSubagentSpawn(t, e) {
        let n;
        const i = t.resumeAgentId || void 0, r = i ? this._beginLocalRunAbort(i) : void 0;
        if (i && r?.signal.aborted) {
            const c = await this._composerDataService.getComposerHandleById(i);
            if (c) return c;
            throw new Ile("Subagent was aborted by the user", i);
        }
        let s = i;
        const o = await this._prependRequiredGlobalCommandPrompt(t);
        if (await this._waitForParentTaskBubbleIfPossible(t), i && r?.signal.aborted) {
            const c = await this._composerDataService.getComposerHandleById(i);
            if (c) return c;
            throw new Ile("Subagent was aborted by the user", i);
        }
        const a = t.parentConversationId.trim(), l = a ? this._composerDataService.getHandleIfLoaded(a) : void 0;
        try {
            const c = this._resolveInheritedGitWorktree(t);
            if (t.resumeAgentId) {
                if (t.forkAgentId) throw new Ile("Cannot set both resumeAgentId and forkAgentId for the same subagent request.", t.resumeAgentId);
                s = t.resumeAgentId;
                const u = await this._composerDataService.getComposerHandleById(s);
                if (!u) throw new Ile(`Composer not found for resume: ${s}`, s);
                if (this.isLongRunningJobsEnabled()) {
                    const p = u.data.subagentInfo?.parentComposerId?.trim();
                    if (!a) throw new Ile(`Subagent parent mismatch for resume: requested=<missing>, actual=${p ?? "<missing>"}`, s);
                    if (p && p !== a) throw new Ile(`Subagent parent mismatch for resume: requested=${a}, actual=${p}`, s);
                }
                n = u;
                const d = this._resolveTaskDescriptionTitle(t), h = Xhg(n.data.subagentInfo, t.toolCallId);
                (d || h) && this._composerDataService.updateComposerDataSetStore(n, (p)=>{
                    d && p("name", d), h && p("subagentInfo", h);
                }), this.isLongRunningJobsEnabled() && !n.data.subagentInfo?.parentComposerId && a && this._composerDataService.updateComposerDataSetStore(n, (p)=>{
                    p("subagentInfo", {
                        ...n.data.subagentInfo ?? {},
                        parentComposerId: a
                    });
                }), c && !n.data.gitWorktree && this._composerDataService.updateComposerDataSetStore(n, (p)=>{
                    p("gitWorktree", {
                        ...c
                    });
                }), t.idempotentReplayResume || await this._appendPromptBubbles(n, {
                    prompt: o,
                    toolCallId: t.toolCallId,
                    parentComposerId: t.parentConversationId
                });
            } else {
                if (s = Ai(), this._beginLocalRunAbort(s).signal.aborted) throw new Ile("Subagent was aborted by the user", s);
                const d = this._resolveTaskDescriptionTitle(t), h = Iyk(t);
                let p;
                if (t.forkAgentId) {
                    const _ = await this._composerDataService.getComposerHandleById(t.forkAgentId);
                    if (!_) throw new Ile(`Fork source subagent not found: ${t.forkAgentId}`, s);
                    this._assertCanForkDirectChild({
                        forkAgentId: t.forkAgentId,
                        parentComposerId: a,
                        forkSourceHandle: _,
                        newComposerId: s
                    }), p = await this._instantiationService.invokeFunction((y)=>y.get(YM)).deepCloneComposer(_.data, s, {
                        skipCapabilities: !0
                    }), Eyk(p, t.toolCallId), p.modelConfig = {
                        modelName: t.modelId,
                        maxMode: p.modelConfig?.maxMode === !0
                    }, p.unifiedMode = h, p.subagentComposerIds = [], p.name = void 0, p.subtitle = void 0, p.chatGenerationUUID = void 0, p.latestChatGenerationUUID = void 0;
                } else {
                    const _ = this._modelConfigService.getModelConfig("composer"), b = typeof this._modelConfigService.fixupModelConfigForCurrentFlag == "function" ? this._modelConfigService.fixupModelConfigForCurrentFlag({
                        modelName: t.modelId,
                        maxMode: _.maxMode === !0
                    }) : void 0, y = hhg(b?.selectedModels ?? [], b?.selectedModels?.[0]?.modelId ?? t.modelId, t.modelParameters), S = {
                        modelName: y[0]?.modelId ?? t.modelId,
                        maxMode: _.maxMode === !0,
                        ...y.length ? {
                            selectedModels: y.map((k)=>({
                                    modelId: k.modelId,
                                    parameters: (k.parameters ?? []).map((C)=>({
                                            ...C
                                        }))
                                }))
                        } : {}
                    };
                    p = NCn(c, B4(S, s, h));
                }
                l?.data.workspaceIdentifier && !p.workspaceIdentifier && (p.workspaceIdentifier = l.data.workspaceIdentifier);
                const g = kbe(this._instantiationService, s, {
                    forceCapabilities: [
                        mo.TOOL_FORMER,
                        mo.THINKING,
                        mo.QUEUING,
                        mo.CHIMES,
                        mo.NOTIFICATIONS
                    ]
                });
                if (p.capabilities = g, this.isLongRunningJobsEnabled()) {
                    if (!a) throw new Ile(`Missing parentConversationId for subagent spawn (toolCallId: ${t.toolCallId})`, s);
                    const _ = t.forkAgentId ? p.fullConversationHeadersOnly?.length ?? 0 : 0, b = this._deriveLineageFromParent(l);
                    p.subagentInfo = {
                        subagentType: Yse.TASK,
                        parentComposerId: a,
                        conversationLengthAtSpawn: _,
                        ...t.forkAgentId ? {
                            forkedFromComposerId: t.forkAgentId
                        } : {},
                        additionalData: {},
                        subagentTypeName: t.subagentType,
                        toolCallId: t.toolCallId,
                        toolCallIdHistory: [
                            t.toolCallId
                        ],
                        rootParentConversationId: t.rootParentConversationId,
                        ...b
                    };
                } else if (a) {
                    const _ = t.forkAgentId ? p.fullConversationHeadersOnly?.length ?? 0 : 0, b = this._deriveLineageFromParent(l);
                    p.subagentInfo = {
                        subagentType: Yse.TASK,
                        parentComposerId: a,
                        conversationLengthAtSpawn: _,
                        ...t.forkAgentId ? {
                            forkedFromComposerId: t.forkAgentId
                        } : {},
                        additionalData: {},
                        subagentTypeName: t.subagentType,
                        toolCallId: t.toolCallId,
                        toolCallIdHistory: [
                            t.toolCallId
                        ],
                        rootParentConversationId: t.rootParentConversationId,
                        ...b
                    };
                } else if (t.forkAgentId) throw new Ile(`Missing parentConversationId for fork request (forkAgentId: ${t.forkAgentId})`, s);
                d && (p.name = d);
                const f = await this._composerDataService.appendSubComposer(p);
                if (!f) throw new Ile("Failed to create subagent composer", s);
                n = f, await this._appendPromptBubbles(n, {
                    prompt: o,
                    toolCallId: t.toolCallId,
                    parentComposerId: t.parentConversationId,
                    simulatedMsgReason: Ayk(t.subagentType)
                }), d || this._triggerRenameComposer(n);
            }
        } catch (c) {
            const u = c instanceof Error ? c.message : String(c);
            throw new Ile(u, s ?? Ai());
        }
        if (t.environment !== zse.CLOUD) {
            const c = n.data.subagentInfo?.parentComposerId ?? t.parentConversationId, u = performance.now();
            try {
                await this._instantiationService.invokeFunction(async (d)=>{
                    const h = d.get(nr);
                    await wog({
                        commandService: h,
                        experimentService: this._experimentService,
                        parentConversationId: c,
                        childConversationId: n.data.composerId
                    });
                }), Isl(this._metricsService, {
                    phase: "store_inherit",
                    mode: e.mode,
                    surfaceKind: e.surfaceKind,
                    durationMs: performance.now() - u,
                    outcome: "ok"
                });
            } catch  {}
        }
        return n;
    }
    async runSubagentWithHandle(t, e) {
        return this._runSubagent(t, e);
    }
    async resolveBackgroundTranscriptPath(t) {
        return this._resolveAndEnsureTranscriptFile(t);
    }
    getLastTerminationReason(t) {
        return this._terminationReasonByComposerId.get(t);
    }
    async canInterruptSubagentTree({ composerId: t, parentConversationId: e }) {
        const n = e.trim();
        if (n.length === 0) return !1;
        const i = this._composerDataService.getHandleIfLoaded(t) ?? await this._composerDataService.getComposerHandleById(t);
        return i ? i.data.subagentInfo?.parentComposerId?.trim() === n : !1;
    }
    notifyBackgroundFailure({ toolCallId: t, error: e, parentComposerId: n }) {
        this.markParentTaskBubbleCompleted({
            parentComposerId: n,
            toolCallId: t,
            status: "error",
            error: e
        });
    }
    async markSubagentInterrupted(t) {
        const e = Ele(t.toolCallId);
        if (!e) return !1;
        let n = this._scanLoadedComposersForParentBubbleByToolCallId(e, t.parentComposerId);
        if (!n && (!await this._composerDataService.getComposerHandleById(t.parentComposerId) || (n = this._scanLoadedComposersForParentBubbleByToolCallId(e, t.parentComposerId), !n))) return !1;
        await n.toolFormer.getHydratedBubbleByToolCallId(e), n = this._scanLoadedComposersForParentBubbleByToolCallId(e, t.parentComposerId);
        const i = n?.toolFormer.getBubbleData(n.bubbleId);
        if (!n || !Iog(i)) return !1;
        n.toolFormer.setBubbleData(n.bubbleId, xog());
        const r = this._composerDataService.getHandleIfLoaded(t.subagentComposerId) ?? await this._composerDataService.getComposerHandleById(t.subagentComposerId);
        return r && (r.data.status === "generating" || (r.data.generatingBubbleIds?.length ?? 0) > 0) && this._composerDataService.updateComposerDataSetStore(r, (s)=>{
            s("status", "none"), s("generatingBubbleIds", []);
        }), !0;
    }
    markParentTaskBubbleCompleted(t) {
        const e = Ele(t.toolCallId);
        if (!e) return !1;
        const n = this._scanLoadedComposersForParentBubbleByToolCallId(e, t.parentComposerId);
        if (!n) return !1;
        switch(t.status){
            case "success":
                return n.toolFormer.setBubbleData(n.bubbleId, {
                    status: "completed",
                    additionalData: {
                        status: "success",
                        terminationReason: "completed",
                        backgroundCompletionStatus: "success"
                    }
                }), !0;
            case "aborted":
                return n.toolFormer.setBubbleData(n.bubbleId, {
                    status: "cancelled",
                    additionalData: {
                        status: "cancelled",
                        terminationReason: "aborted",
                        backgroundCompletionStatus: "aborted"
                    }
                }), !0;
            case "error":
                {
                    const i = t.error || "Subagent failed in background.";
                    return n.toolFormer.setBubbleData(n.bubbleId, {
                        status: "error",
                        error: new Mve({
                            clientVisibleErrorMessage: i
                        }),
                        additionalData: {
                            status: "error",
                            terminationReason: "error",
                            backgroundCompletionStatus: "error"
                        }
                    }), !0;
                }
            default:
                return t.status;
        }
    }
    _markSubagentParentTaskBubbleCancelled(t, e) {
        const n = this._backgroundPromises.get(t)?.metadata, i = e?.data.subagentInfo, r = Ele(i?.toolCallId ?? n?.toolCallId), s = (r ? this._scanLoadedComposersForParentBubbleByToolCallId(r, i?.parentComposerId ?? n?.parentComposerId) : void 0) ?? this._scanLoadedComposersForParentBubbleBySubagentId(t);
        if (!s) return;
        const o = s.toolFormer.getBubbleData(s.bubbleId);
        Iog(o) && s.toolFormer.setBubbleData(s.bubbleId, xog());
    }
    registerBackgroundPromise({ composerId: t, promise: e, abortController: n, metadata: i }) {
        const r = this._lifecycleStore.startRun(t, {
            abort: n ? ()=>n.abort() : void 0
        }), { parentComposerId: s, title: o } = i ?? {}, a = Ele(o) ?? this._resolveBackgroundSubagentTitleFromToolCallId(i?.toolCallId, s), l = a ?? "Background subagent", c = i && {
            ...i,
            ...a ? {
                title: a
            } : {}
        };
        if (s) {
            const f = this._backgroundWorkService.backgroundWorkItems.value.find((_)=>_.kind === "subagent" && _.id === t)?.startTimeMs;
            this._backgroundWorkService.upsertSubagentWork({
                id: t,
                kind: "subagent",
                composerId: s,
                title: l,
                startTimeMs: f ?? Date.now(),
                subagentComposerId: t
            });
        }
        const u = {
            runId: r,
            promise: e,
            metadata: c,
            disposition: "deliver",
            settled: !1
        }, d = ()=>u.disposition === "suppress", h = (f)=>u.disposition === "cancel" ? {
                success: !1,
                composerId: t,
                error: "Subagent was aborted by the user",
                terminationReason: "aborted"
            } : f, p = ()=>{
            this._backgroundPromises.get(t)?.runId === r && this._backgroundPromises.delete(t), this._backgroundAbortControllers.get(t)?.runId === r && this._backgroundAbortControllers.delete(t), this._lifecycleStore.finishRun(t, r), this._releaseLifecycleIfIdle(t);
        }, g = async (f)=>{
            try {
                if (d()) {
                    this._dropDeferredSubagentCompletion(t, r);
                    return;
                }
                this.hasQueuedResumePending({
                    composerId: t
                }) ? this._storeDeferredSubagentCompletion(t, r, f) : (this._dropDeferredSubagentCompletion(t, r), await this._enqueueSubagentCompletion(f, c).catch(()=>{}));
            } finally{
                this._resolveBackgroundWaiters(u), p();
            }
        };
        e.then((f)=>{
            const _ = h(f);
            u.settled = !0, u.result = _, g(_);
        }, (f)=>{
            u.settled = !0, u.result = h({
                success: !1,
                composerId: t,
                error: "Background subagent promise rejected",
                terminationReason: "error"
            }), g(u.result);
        }), this._backgroundPromises.set(t, u), n && this._backgroundAbortControllers.set(t, {
            runId: r,
            abortController: n
        });
    }
    async _enqueueSubagentCompletion(t, e) {
        if (!this.isLongRunningJobsEnabled()) return;
        const i = this._composerDataService.getHandleIfLoaded(t.composerId), r = this._backgroundWorkService.backgroundWorkItems.value.find((_)=>_.kind === "subagent" && _.id === t.composerId), s = i?.data.subagentInfo?.parentComposerId, o = t.success ? "success" : t.terminationReason === "aborted" ? "aborted" : "error", a = t.success ? t.finalMessage : t.error, l = Ele(r?.title), c = Ele(e?.title) ?? (l === "Background subagent" ? void 0 : l) ?? this._resolveBackgroundSubagentTitle(i) ?? "Background subagent", u = await this._resolveBackgroundOutputPath(t.composerId, e), d = e?.toolCallId ?? i?.data.subagentInfo?.toolCallId, h = e?.parentComposerId ?? i?.data.subagentInfo?.parentComposerId;
        this.markParentTaskBubbleCompleted({
            parentComposerId: h,
            toolCallId: d,
            status: o,
            ...o === "error" ? {
                error: a
            } : {}
        });
        const p = {
            taskId: t.composerId,
            kind: "subagent",
            status: o,
            title: c,
            ...a ? {
                detail: a
            } : {},
            ...u ? {
                outputPath: u
            } : {},
            subagentId: t.composerId,
            ...d ? {
                toolCallId: d
            } : {},
            reason: "task_finished"
        }, g = e?.parentComposerId ?? r?.composerId ?? s ?? t.composerId;
        if (!g) return;
        const f = {
            composerId: g,
            ...p
        };
        this._backgroundWorkService.enqueue({
            conversationId: g,
            id: f.taskId,
            source: "subagent",
            payload: f
        });
    }
    async _resolveBackgroundOutputPath(t, e) {
        if (e?.suppressTranscriptPath !== !0) return e?.transcriptPath ?? await this.resolveBackgroundTranscriptPath(t).catch(()=>{});
    }
    _deferredCompletionKey(t, e) {
        return `${t}:${e}`;
    }
    _markBackgroundCompletionsSuppressedForTree(t) {
        const e = this._backgroundPromises.get(t);
        e && (e.disposition = "suppress");
        const n = this._composerDataService.getHandleIfLoaded(t);
        if (!n) return;
        const i = this._composerDataService.getComposerData(n);
        if (i) for (const r of i.subagentComposerIds ?? [])this._markBackgroundCompletionsSuppressedForTree(r);
    }
    _storeDeferredSubagentCompletion(t, e, n) {
        this._deferredCompletionByRunKey.set(this._deferredCompletionKey(t, e), n);
    }
    _takeDeferredSubagentCompletion(t, e) {
        const n = this._deferredCompletionKey(t, e), i = this._deferredCompletionByRunKey.get(n);
        return this._deferredCompletionByRunKey.delete(n), i;
    }
    _dropDeferredSubagentCompletion(t, e) {
        this._deferredCompletionByRunKey.delete(this._deferredCompletionKey(t, e));
    }
    isRunningInBackground({ composerId: t }) {
        return this._lifecycleStore.isBusy(t) || this._backgroundPromises.has(t);
    }
    hasQueuedResumePending({ composerId: t }) {
        return this._lifecycleStore.getState(t).status === "runningWithQueuedResume";
    }
    enqueueOrMergeResumePrompt({ composerId: t, prompt: e, toolCallId: n, parentConversationId: i, subagentType: r, modelId: s, credentials: o, readonly: a, mode: l, continuationConfig: c, selectedContext: u }) {
        const d = this._lifecycleStore.getState(t), h = d.status === "running" || d.status === "runningWithQueuedResume" ? d.runId : this._backgroundPromises.get(t)?.runId;
        this._lifecycleStore.queueResume(t, {
            queuedResume: {
                prompt: e,
                toolCallIds: [
                    n
                ],
                runToolCallId: n,
                parentConversationId: i,
                subagentType: r,
                modelId: s,
                credentials: o,
                readonly: a,
                mode: l,
                continuationConfig: c,
                selectedContext: u
            },
            targetRunId: h,
            mergeQueuedResume: (p, g)=>{
                const f = nB1({
                    existingPrompt: p.prompt,
                    newPrompt: g.prompt
                });
                return {
                    ...g,
                    prompt: f,
                    parentConversationId: p.parentConversationId,
                    credentials: p.credentials ?? g.credentials,
                    selectedContext: xyk(p.selectedContext, g.selectedContext),
                    toolCallIds: p.toolCallIds.includes(g.runToolCallId) ? p.toolCallIds : [
                        ...p.toolCallIds,
                        g.runToolCallId
                    ]
                };
            }
        }), this._linkParentToSubagent(n, t, i);
    }
    async waitForBackgroundSubagent({ composerId: t, abortSignal: e }) {
        const n = this.isLongRunningJobsEnabled(), i = this._backgroundPromises.get(t);
        if (i) {
            if (n) {
                const s = await this._waitForBackgroundEntry(i, e);
                return await this._flushTranscriptAfterAwaitCompletion(s.composerId || t), s;
            }
            const r = await i.promise;
            return this._backgroundPromises.get(t) === i && this._backgroundPromises.delete(t), await this._flushTranscriptAfterAwaitCompletion(r.composerId || t), r;
        }
        for (const [r, s] of this._backgroundPromises){
            const o = this._composerDataService.getHandleIfLoaded(r) ?? await this._composerDataService.getComposerHandleById(r);
            if (o && o.data.subagentInfo?.parentComposerId === t) {
                if (n) {
                    const l = await this._waitForBackgroundEntry(s, e);
                    return await this._flushTranscriptAfterAwaitCompletion(l.composerId || r), l;
                }
                const a = await s.promise;
                return this._backgroundPromises.get(r) === s && this._backgroundPromises.delete(r), await this._flushTranscriptAfterAwaitCompletion(a.composerId || r), a;
            }
        }
        return {
            success: !0,
            composerId: t
        };
    }
    async awaitBackgroundSubagentBounded({ composerId: t, timeoutMs: e, abortSignal: n }) {
        const i = await this._findBackgroundEntryForAwait(t), r = i?.agentId ?? t;
        if (!i) return {
            status: "notFound",
            agentId: r
        };
        const s = await this._waitForBackgroundEntryBounded(i.entry, e, n);
        if (s.status === "stillRunning") {
            await this._flushTranscriptAfterAwaitCompletion(r);
            const c = await this._resolveBackgroundOutputPath(r, i.entry.metadata);
            return {
                status: "stillRunning",
                agentId: r,
                transcriptPath: c
            };
        }
        const o = s.result, a = o.composerId || r;
        await this._flushTranscriptAfterAwaitCompletion(a);
        const l = await this._resolveBackgroundOutputPath(a, i.entry.metadata);
        return {
            status: "completed",
            result: o,
            transcriptPath: l
        };
    }
    _resolveBackgroundWaiters(t) {
        const e = t.waiters;
        if (!e || e.size === 0) return;
        t.waiters = void 0;
        const n = t.result;
        if (!n) {
            const i = new Error("Background subagent settled without a result");
            for (const r of e)r.reject(i);
            return;
        }
        for (const i of e)i.resolve(n);
    }
    async _findBackgroundEntryForAwait(t) {
        const e = this._backgroundPromises.get(t);
        if (e) return {
            agentId: t,
            entry: e
        };
        for (const [n, i] of this._backgroundPromises){
            const r = this._composerDataService.getHandleIfLoaded(n) ?? await this._composerDataService.getComposerHandleById(n);
            if (r && r.data.subagentInfo?.parentComposerId === t) return {
                agentId: n,
                entry: i
            };
        }
    }
    _waitForBackgroundEntryBounded(t, e, n) {
        return t.settled ? t.result ? Promise.resolve({
            status: "completed",
            result: t.result
        }) : Promise.resolve({
            status: "completed",
            result: {
                success: !1,
                composerId: "",
                error: "Background subagent settled without a result",
                terminationReason: "error"
            }
        }) : n?.aborted ? Promise.reject(new Error("aborted")) : e <= 0 ? Promise.resolve({
            status: "stillRunning"
        }) : new Promise((i, r)=>{
            let s = !1, o, a;
            const l = {
                resolve: (h)=>u({
                        status: "completed",
                        result: h
                    }),
                reject: d
            }, c = ()=>{
                o !== void 0 && (clearTimeout(o), o = void 0), n && a && n.removeEventListener("abort", a), t.waiters?.delete(l);
            }, u = (h)=>{
                s || (s = !0, c(), i(h));
            };
            function d(h) {
                s || (s = !0, c(), r(h));
            }
            if (a = ()=>d(new Error("aborted")), n?.addEventListener("abort", a, {
                once: !0
            }), n?.aborted) {
                d(new Error("aborted"));
                return;
            }
            t.waiters || (t.waiters = new Set), t.waiters.add(l), o = setTimeout(()=>{
                u({
                    status: "stillRunning"
                });
            }, e);
        });
    }
    async _flushTranscriptAfterAwaitCompletion(t) {
        if (t.trim().length === 0) return;
        const e = this._instantiationService.invokeFunction((r)=>r.get(oF)), n = 1500;
        let i;
        try {
            await Promise.race([
                e.flushTranscriptForConversation(t),
                new Promise((r, s)=>{
                    i = setTimeout(()=>{
                        s(new Error(`Timed out flushing transcript after ${n}ms`));
                    }, n);
                })
            ]);
        } catch (r) {
            console.warn("[subagentComposerService] Failed to flush transcript after Await completion", {
                conversationId: t,
                error: r
            });
        } finally{
            i !== void 0 && clearTimeout(i);
        }
    }
    _waitForBackgroundEntry(t, e) {
        return t.settled ? t.result ? Promise.resolve(t.result) : Promise.resolve({
            success: !1,
            composerId: "",
            error: "Background subagent settled without a result",
            terminationReason: "error"
        }) : e?.aborted ? Promise.reject(new Error("aborted")) : new Promise((n, i)=>{
            let r = !1;
            const s = ()=>{
                e && c && e.removeEventListener("abort", c);
            }, o = (u)=>{
                r || (r = !0, s(), n(u));
            }, a = (u)=>{
                r || (r = !0, s(), i(u));
            }, l = {
                resolve: o,
                reject: a
            };
            let c;
            if (e && (c = ()=>{
                t.waiters?.delete(l) && a(new Error("aborted"));
            }, e.addEventListener("abort", c, {
                once: !0
            }), e.aborted)) {
                a(new Error("aborted"));
                return;
            }
            t.waiters || (t.waiters = new Set), t.waiters.add(l);
        });
    }
    cancelSubagentTree(t) {
        this._cancelSubagentTree(t, {
            markParentTaskBubbleCancelled: !0,
            abortLocalRuns: !0
        });
    }
    async stopSubagentTree(t) {
        const e = await this._loadSubagentTreeForStop(t);
        try {
            if (!pc(t)) {
                await this._interruptAgentHostSessionTree(t), this.cancelSubagentTree(t);
                return;
            }
            const i = await this._instantiationService.invokeFunction((r)=>r.get(ma)).abortCloudAgent(t);
            this._cancelSubagentTree(t, {
                markParentTaskBubbleCancelled: !0,
                abortLocalRuns: !0,
                externallyPausedCloudAgentId: i === "server-confirmed" ? t : void 0
            });
        } finally{
            e.clear();
        }
    }
    async _loadSubagentTreeForStop(t) {
        const n = new Map, i = new Set, r = [
            t
        ];
        for(; r.length > 0 && i.size < 256;){
            const s = r.shift();
            if (i.has(s)) continue;
            i.add(s);
            let o = this._composerDataService.getHandleIfLoaded(s);
            if (!o && !pc(s)) try {
                o = await this._composerDataService.getComposerHandleById(s);
            } catch (l) {
                this._structuredLogService.warn("background_composer", "SubagentComposerService: failed to load subagent composer for stop cascade", {
                    composerId: s,
                    error: l instanceof Error ? l.message : String(l)
                });
                continue;
            }
            if (!o) continue;
            n.set(s, o);
            const a = this._composerDataService.getComposerData(o);
            for (const l of a?.subagentComposerIds ?? [])r.push(l);
        }
        return n;
    }
    async _interruptAgentHostSessionTree(t) {
        try {
            const { IAgentHostService: e } = await Promise.resolve().then(()=>(SAn(), Vll));
            await this._instantiationService.invokeFunction((i)=>i.get(e)).interruptTurn(new JPe({
                sessionId: t,
                sessionTree: !0,
                reason: "Subagent tree stopped by user"
            }).toBinary());
        } catch (e) {
            this._structuredLogService.warn("background_composer", "SubagentComposerService: agent host session-tree interrupt failed", {
                composerId: t,
                error: e instanceof Error ? e.message : String(e)
            });
        }
    }
    _beginLocalRunAbort(t) {
        const e = this._localRunAborts.get(t);
        if (e?.signal.aborted) return e;
        const n = new AbortController;
        return this._localRunAborts.set(t, n), n;
    }
    _abortLocalRun(t) {
        const e = this._localRunAborts.get(t);
        if (e) {
            e.abort();
            return;
        }
        if (this._hasAbortableLocalRun(t)) return;
        const n = new AbortController;
        n.abort(), this._localRunAborts.set(t, n);
    }
    _consumeAbortedLocalRun(t) {
        return this._localRunAborts.get(t)?.signal.aborted ? (this._localRunAborts.delete(t), !0) : !1;
    }
    _releaseLocalRunAbort(t, e) {
        this._localRunAborts.get(t) === e && this._localRunAborts.delete(t);
    }
    _hasAbortableLocalRun(t) {
        const e = this._localRunAborts.get(t);
        if (e && !e.signal.aborted || this._backgroundAbortControllers.has(t)) return !0;
        const n = this._composerDataService.getHandleIfLoaded(t), i = n ? this._composerDataService.getComposerData(n)?.chatGenerationUUID : void 0;
        return i !== void 0 && this._aiService.streamingAbortControllers.has(i);
    }
    _cancelSubagentTree(t, e) {
        e.abortLocalRuns && !pc(t) && this._abortLocalRun(t);
        const n = this._backgroundPromises.get(t);
        e.markParentTaskBubbleCancelled && n && n.disposition !== "suppress" && (n.disposition = "cancel"), this._lifecycleStore.abort(t), this._lifecycleStore.clearQueuedResume(t), this._releaseLifecycleIfIdle(t);
        const i = this._abortComposerRun(t);
        pc(t) && t !== e.externallyPausedCloudAgentId && !i && this._pauseCloudSubagent(t);
        const r = this._composerDataService.getHandleIfLoaded(t);
        if (e.markParentTaskBubbleCancelled && this._markSubagentParentTaskBubbleCancelled(t, r), !r) return;
        const s = this._composerDataService.getComposerData(r);
        if (!s) return;
        const o = [
            ...s.subagentComposerIds ?? []
        ];
        this._composerDataService.rejectAllPendingUserDecisions(r), s.hasBlockingPendingActions && this._composerDataService.updateComposerDataSetStore(r, (a)=>{
            a("hasBlockingPendingActions", !1);
        });
        for (const a of o)this._cancelSubagentTree(a, {
            markParentTaskBubbleCancelled: e.markParentTaskBubbleCancelled,
            abortLocalRuns: e.abortLocalRuns === !0 || e.abortChildLocalRuns === !0,
            externallyPausedCloudAgentId: e.externallyPausedCloudAgentId
        }), this._lifecycleStore.clearQueuedResume(a), this._releaseLifecycleIfIdle(a);
    }
    interruptSubagentTree(t) {
        this._markBackgroundCompletionsSuppressedForTree(t), this._cancelSubagentTree(t, {
            markParentTaskBubbleCancelled: !1
        }), this._detachChatGenerationForInterruptedTree(t);
    }
    _detachChatGenerationForInterruptedTree(t) {
        const e = this._composerDataService.getHandleIfLoaded(t);
        e?.data.chatGenerationUUID !== void 0 && this._composerDataService.updateComposerDataSetStore(e, (i)=>{
            i("chatGenerationUUID", void 0);
        });
        const n = e ? this._composerDataService.getComposerData(e) : void 0;
        for (const i of n?.subagentComposerIds ?? [])this._detachChatGenerationForInterruptedTree(i);
    }
    async _appendPromptBubbles(t, e) {
        const n = Ai(), i = Ai(), r = Xae(e.simulatedMsgReason, e.simulatedMessageMetadata);
        await this._composerDataService.appendComposerBubbles(t, [
            {
                ...J_(),
                bubbleId: n,
                type: bs.HUMAN,
                text: e.prompt,
                richText: e.prompt,
                createdAt: new Date().toISOString(),
                ...e.toolCallId ? {
                    subagentSpawnTaskToolCallId: e.toolCallId
                } : {},
                ...r ?? {}
            },
            {
                ...J_(),
                bubbleId: i,
                type: bs.AI,
                text: "",
                richText: "",
                createdAt: new Date().toISOString()
            }
        ]), this._linkParentToSubagent(e.toolCallId, t.data.composerId, e.parentComposerId);
    }
    async _prependRequiredGlobalCommandPrompt(t) {
        if (t.subagentType !== "best-of-n-runner" || t.prompt.includes("--- Cursor Command: worktree ---")) return t.prompt;
        const n = (await this._globalCommandsService.getGlobalCommands()).find((r)=>r.name === "worktree");
        return n?.content ? `${`<cursor_commands>
--- Cursor Command: worktree ---
${n.content}
--- End Command ---
</cursor_commands>`}

${t.prompt}` : t.prompt;
    }
    _deriveLineageFromParent(t) {
        if (!t) return {};
        const e = this._composerDataService.getComposerData(t), n = e?.chatGenerationUUID ?? e?.latestChatGenerationUUID;
        if (!n) return {};
        const i = e?.subagentInfo?.rootParentRequestId ?? e?.subagentInfo?.parentRequestId ?? n;
        return {
            parentRequestId: n,
            rootParentRequestId: i
        };
    }
    _assertCanForkDirectChild(t) {
        const { forkAgentId: e, parentComposerId: n, forkSourceHandle: i, newComposerId: r } = t, s = i.data.subagentInfo?.parentComposerId?.trim();
        if (!n) throw new Ile(`Fork requires parentConversationId (forkAgentId: ${e})`, r);
        if (n !== e) {
            if (!s) throw new Ile(`Fork source is not a direct child of parent ${n}: ${e}`, r);
            if (s !== n) throw new Ile(`Fork source ${e} is not a direct child of parent ${n}`, r);
        }
    }
    async _runSubagent(t, e, n) {
        const i = performance.now(), r = e.data.composerId;
        if (this._consumeAbortedLocalRun(r)) return this._terminationReasonByComposerId.set(r, "aborted"), this._cancelSubagentTree(r, {
            markParentTaskBubbleCancelled: !0,
            abortChildLocalRuns: !0
        }), {
            success: !1,
            composerId: r,
            error: "Subagent was aborted by the user",
            terminationReason: "aborted"
        };
        this._terminationReasonByComposerId.delete(r);
        const s = this._beginLocalRunAbort(r), [o, a] = this._aiService.registerNewGeneration({
            generationUUID: Ai(),
            metadata: {
                type: "composer",
                textDescription: t.prompt,
                isNAL: !0
            }
        }), l = ()=>{
            a.abort();
        };
        s.signal.addEventListener("abort", l), s.signal.aborted && a.abort();
        let c, u;
        t.abortSignal && (c = ()=>{
            a.abort();
        }, t.abortSignal.addEventListener("abort", c));
        try {
            var d = [];
            try {
                const g = e.data.subagentInfo?.parentComposerId ?? t.parentConversationId, f = g ? this._composerDataService.getHandleIfLoaded(g) : void 0, _ = f ? this._composerDataService.getComposerData(f)?.modelConfig?.maxMode ?? !1 : !1, b = e.data.modelConfig, y = f ? this._composerDataService.getComposerData(f)?.modelConfig : void 0, S = (()=>{
                    const se = b?.modelName?.trim() ?? "";
                    if (se.length > 0 && se !== "default") return se;
                    const le = b?.selectedModels?.[0]?.modelId?.trim() ?? "";
                    if (le.length > 0 && le !== "default") return le;
                })(), k = (t.modelId ?? "").trim(), C = (()=>{
                    const se = new Set, le = (ce)=>{
                        const ae = ce?.trim() ?? "";
                        ae.length > 0 && ae !== "default" && se.add(ae);
                    };
                    le(y?.modelName);
                    for (const ce of y?.selectedModels ?? [])le(ce.modelId);
                    return [
                        ...se
                    ];
                })(), T = t.resumeAgentId !== void 0 && k.length > 0 && C.some((se)=>k === se || k.startsWith(`${se}-`)), A = t.resumeAgentId !== void 0 && S !== void 0 && (k.length === 0 || T) ? S : t.modelId, M = (typeof this._modelConfigService.fixupModelConfigForCurrentFlag == "function" ? this._modelConfigService.fixupModelConfigForCurrentFlag({
                    modelName: A,
                    maxMode: _
                }) : void 0)?.selectedModels ?? [], O = b?.selectedModels ?? [], N = M.length > 0 && O.length === M.length && O.every((se, le)=>se.modelId === M[le]?.modelId), U = hhg(N ? O : M, M[0]?.modelId ?? A, k === A ? t.modelParameters : void 0), j = U.length > 0 ? {
                    maxMode: _,
                    selectedModels: U.map((se)=>({
                            modelId: se.modelId,
                            parameters: (se.parameters ?? []).map((le)=>({
                                    ...le
                                }))
                        }))
                } : {
                    modelName: A,
                    maxMode: _
                }, $ = U[0];
                b?.maxMode === _ && ($ !== void 0 ? b?.selectedModels?.[0]?.modelId === $.modelId && $bk(b?.selectedModels?.[0]?.parameters, $.parameters) : b?.modelName === A && (b?.selectedModels?.length ?? 0) === 0) || (typeof this._modelConfigService.setModelConfigForComposer == "function" ? this._modelConfigService.setModelConfigForComposer(e, j) : this._composerDataService.updateComposerDataSetStore(e, (se)=>{
                    se("modelConfig", {
                        ...b ?? {},
                        ...j,
                        ...U.length > 0 ? {} : {
                            selectedModels: void 0
                        }
                    });
                }));
                const G = new Mg({
                    modelName: A,
                    maxMode: _,
                    ...Tyk(t.credentials)
                }), K = this._composerDataService.getComposerData(e)?.conversationState ?? new nf, V = this._composerDataService.getLoadedConversation(e).length;
                this._composerDataService.updateComposerDataSetStore(e, (se)=>{
                    se("status", "generating"), se("chatGenerationUUID", o), se("latestChatGenerationUUID", o);
                });
                const Y = Ang(t.context ?? Xp(), this._structuredLogService, this._metricsService), J = Qhg(d, SS(Y.withName("subagent.request"))), Q = Izt(J.ctx, {
                    requestId: o,
                    composerId: r
                }), te = this._instantiationService.invokeFunction((se)=>se.get(oF));
                u = this._instantiationService.invokeFunction((se)=>lsl({
                        composerEventService: se.get(Fb),
                        isGlass: !!se.get(ps).isGlass,
                        generationUUID: o,
                        workspaceIdentifier: x0(this._workspaceContextService.getWorkspace()),
                        origin: "subagent"
                    }));
                const ee = t.selectedContext === void 0 ? void 0 : await (async ()=>{
                    const [{ processClientSubagentVideoAttachments: se }, { IAgentClientService: le }, { IEverythingProviderService: ce }] = await Promise.all([
                        Promise.resolve().then(()=>(Sog(), gog)),
                        Promise.resolve().then(()=>($ze(), Yug)),
                        Promise.resolve().then(()=>(Vae(), MCm))
                    ]), ae = this._workspaceContextService.getWorkspace(), de = ae.folders.map((ve)=>ve.uri.fsPath), he = (await wX(ae, this._pathService)).fsPath, ge = [];
                    he.length > 0 && ge.push(Z0(he, "uploads"), Z0(he, "attachments"));
                    for (const ve of de)ve.length > 0 && ge.push(Z0(ve, "uploads"), Z0(ve, "attachments"));
                    const pe = f ? vog(this._composerDataService.getLoadedConversation(f)) : [];
                    return this._instantiationService.invokeFunction((ve)=>se({
                            ctx: Q,
                            subagentType: t.subagentType,
                            selectedContext: t.selectedContext,
                            conversationId: t.parentConversationId,
                            privacyMode: ve.get(ss).granularPrivacyModeRawEnum(),
                            experimentService: this._experimentService,
                            fileService: this._fileService,
                            agentClientService: ve.get(le),
                            everythingProviderService: ve.get(ce),
                            notificationService: ve.get(Wr),
                            structuredLogService: this._structuredLogService,
                            allowedPrefixes: ge,
                            userAttachedVideoPaths: pe
                        }));
                })();
                u.markSent(), await te.getAgentStreamResponse(Q, {
                    modelDetails: G,
                    generationUUID: o,
                    composerHandle: e,
                    abortController: a,
                    startTime: i,
                    conversationState: K,
                    selectedContextOverride: ee,
                    parentAgentToolCallIdOverride: t.toolCallId
                }), a.signal.throwIfAborted(), e.data.chatGenerationUUID === o && (this._composerDataService.updateComposerDataSetStore(e, (se)=>{
                    se("status", n?.deferCompletedStatus ? "generating" : "completed"), se("chatGenerationUUID", void 0), se("generatingBubbleIds", []);
                }), this._terminationReasonByComposerId.set(r, "completed")), this._aiService.streamingAbortControllers.delete(o);
                const ie = this._extractFinalAssistantMessage(e), oe = this._countToolCallsSince(e, V);
                return u?.finish({
                    composerId: r,
                    isCompleted: !0,
                    isAborted: !1,
                    isErrored: !1,
                    diffEvents: [],
                    startTime: i,
                    generationUUID: o
                }), {
                    success: !0,
                    composerId: r,
                    finalMessage: ie,
                    toolCallCount: oe,
                    terminationReason: "completed"
                };
            } catch (g) {
                var h = g, p = !0;
            } finally{
                Jhg(d, h, p);
            }
        } catch (g) {
            const f = e.data.chatGenerationUUID === o;
            f && this._composerDataService.updateComposerDataSetStore(e, (b)=>{
                b("status", "aborted"), b("chatGenerationUUID", void 0), b("generatingBubbleIds", []);
            }), this._aiService.streamingAbortControllers.delete(o);
            const _ = a.signal.aborted ? "aborted" : "error";
            return f && this._terminationReasonByComposerId.set(r, _), u?.finish({
                composerId: r,
                isCompleted: !1,
                isAborted: a.signal.aborted,
                isErrored: !a.signal.aborted,
                diffEvents: [],
                startTime: i,
                generationUUID: o
            }), a.signal.aborted ? {
                success: !1,
                composerId: r,
                error: "Subagent was aborted by the user",
                terminationReason: _
            } : {
                success: !1,
                composerId: r,
                error: g instanceof Error ? g.message : String(g),
                terminationReason: _
            };
        } finally{
            if (s.signal.removeEventListener("abort", l), this._releaseLocalRunAbort(r, s), this._aiService.removeInprogressAIGeneration(o), t.abortSignal && c && t.abortSignal.removeEventListener("abort", c), t.environment !== zse.CLOUD && n?.clearAgentStoreInheritanceOnFinish !== !1) try {
                await this._instantiationService.invokeFunction(async (g)=>{
                    const f = g.get(nr);
                    await Cog({
                        commandService: f,
                        experimentService: this._experimentService,
                        childConversationId: r
                    });
                });
            } catch  {}
        }
    }
    async runWithContinuation(t, e, n) {
        const i = e.data.composerId, r = n.maxLoops > 0 ? n.maxLoops : 1 / 0, s = {
            ...t,
            runInBackground: !1
        };
        let o;
        this._composerDataService.updateComposerDataSetStore(e, (a)=>{
            a("isContinuationInProgress", !0);
        });
        try {
            let a = await this._runContinuationLoop(s, e, n, r);
            if (n.collectBackgroundChildren && a.success) {
                this._markComposerAsGenerating(e);
                const l = 500;
                for(let c = 0; c < l; c++){
                    if (t.abortSignal.aborted) {
                        a = {
                            success: !1,
                            composerId: i,
                            error: "Aborted while collecting child results",
                            terminationReason: "aborted"
                        };
                        break;
                    }
                    const u = await this._collectAvailableChildren(i);
                    if (u.length === 0) break;
                    const d = this._buildChildrenCompletedMessage(u, n.childrenCompletedMessageTemplate);
                    if (await this._appendPromptBubbles(e, {
                        prompt: d,
                        toolCallId: t.toolCallId,
                        parentComposerId: t.parentConversationId,
                        ...this._getContinuationSimulatedMessageFields(n)
                    }), a = await this._runContinuationLoop({
                        ...s,
                        prompt: d,
                        resumeAgentId: i
                    }, e, n, r), !a.success) break;
                }
            }
            return o = a, a;
        } catch (a) {
            return o = {
                success: !1,
                composerId: i,
                error: a instanceof Error ? a.message : String(a),
                terminationReason: t.abortSignal.aborted ? "aborted" : "error"
            }, o;
        } finally{
            if (this._finalizeComposerAfterContinuation(e, o ?? {
                success: !1,
                composerId: i,
                error: "Subagent continuation exited unexpectedly",
                terminationReason: "error"
            }), t.environment !== zse.CLOUD) try {
                await this._instantiationService.invokeFunction(async (a)=>{
                    const l = a.get(nr);
                    await Cog({
                        commandService: l,
                        experimentService: this._experimentService,
                        childConversationId: i
                    });
                });
            } catch  {}
        }
    }
    async _runContinuationLoop(t, e, n, i) {
        const r = e.data.composerId;
        let s = 0, o, a;
        for(let l = 0; l < i; l++){
            if (l === 0) a = await this._runSubagent(t, e, {
                deferCompletedStatus: !0,
                clearAgentStoreInheritanceOnFinish: !1
            });
            else {
                if (!await Cyk(t.abortSignal, n.continuationRoundDelayMs)) return {
                    success: !1,
                    composerId: r,
                    error: "Aborted while waiting for next continuation round",
                    terminationReason: "aborted"
                };
                const h = this._computeContinuationNudge(n, s, o);
                await this._appendPromptBubbles(e, {
                    prompt: h,
                    toolCallId: t.toolCallId,
                    parentComposerId: t.parentConversationId,
                    ...this._getContinuationSimulatedMessageFields(n)
                }), a = await this._runSubagent({
                    ...t,
                    prompt: h,
                    resumeAgentId: r
                }, e, {
                    deferCompletedStatus: !0,
                    clearAgentStoreInheritanceOnFinish: !1
                });
            }
            if (!a.success) return a;
            const c = a.toolCallCount ?? 0, u = a.finalMessage ?? "";
            if (o && u.includes(o)) break;
            if (c > 0) {
                this._markComposerAsGenerating(e), s = 0, o = void 0;
                continue;
            }
            s++, s >= n.idleThreshold ? o = `DONE_${this._randomHex(4)}` : o = void 0, this._markComposerAsGenerating(e);
        }
        return a ?? {
            success: !1,
            composerId: r,
            error: "No iterations ran",
            terminationReason: "error"
        };
    }
    _markComposerAsGenerating(t) {
        this._composerDataService.updateComposerDataSetStore(t, (e)=>{
            e("status", "generating");
        });
    }
    _finalizeComposerAfterContinuation(t, e) {
        if (t.data.chatGenerationUUID !== void 0) return;
        const n = e.terminationReason ?? (e.success ? "completed" : "error");
        this._terminationReasonByComposerId.set(t.data.composerId, n), this._composerDataService.updateComposerDataSetStore(t, (i)=>{
            i("status", n === "completed" ? "completed" : "aborted"), i("chatGenerationUUID", void 0), i("generatingBubbleIds", []), i("isContinuationInProgress", !1);
        });
    }
    _computeContinuationNudge(t, e, n) {
        return e >= t.idleThreshold && n ? t.escapeMessageTemplate.replace("{idle_count}", String(e)).replace("{escape_token}", n) : t.nudgeMessage;
    }
    _getContinuationSimulatedMessageFields(t) {
        const e = t, n = {};
        return e.simulatedMsgReason !== void 0 && (n.simulatedMsgReason = e.simulatedMsgReason), e.simulatedMessageMetadata !== void 0 && (n.simulatedMessageMetadata = e.simulatedMessageMetadata), n;
    }
    async _startQueuedResumeRunFromLifecycle(t, e, n) {
        const i = this._lifecycleStore.getState(t);
        if (i.status === "idle") {
            this._dropDeferredSubagentCompletion(t, e);
            return;
        }
        if (i.runId !== e) {
            this._dropDeferredSubagentCompletion(t, e);
            return;
        }
        const r = await this._startQueuedResumeRun(t, e, n);
        if (r.started) {
            this._dropDeferredSubagentCompletion(t, e);
            return;
        }
        const s = this._lifecycleStore.getState(t);
        if (s.status === "idle") {
            this._dropDeferredSubagentCompletion(t, e);
            return;
        }
        if (s.runId !== e) {
            this._dropDeferredSubagentCompletion(t, e);
            return;
        }
        const o = this._takeDeferredSubagentCompletion(t, e), a = r.error ? {
            success: !1,
            composerId: t,
            error: r.error,
            terminationReason: "error"
        } : o;
        a && await this._enqueueSubagentCompletion(a), this._lifecycleStore.finishRun(t, e), this._releaseLifecycleIfIdle(t);
    }
    async _startQueuedResumeRun(t, e, n) {
        const i = this._composerDataService.getHandleIfLoaded(t) ?? await this._composerDataService.getComposerHandleById(t);
        if (!i) {
            const r = `Subagent composer not found for queued resume: ${t}`;
            return this._notifyQueuedResumeFailure(n, r), {
                started: !1,
                error: r
            };
        }
        try {
            const r = this._resolveTaskDescriptionTitle({
                resumeAgentId: t,
                toolCallId: n.runToolCallId,
                parentConversationId: n.parentConversationId
            }), s = Xhg(i.data.subagentInfo, n.runToolCallId);
            (r || s) && this._composerDataService.updateComposerDataSetStore(i, (u)=>{
                r && u("name", r), s && u("subagentInfo", s);
            }), await this._appendPromptBubbles(i, {
                prompt: n.prompt,
                toolCallId: n.runToolCallId,
                parentComposerId: n.parentConversationId
            });
            const o = this._lifecycleStore.getState(t);
            if (o.status === "idle") return {
                started: !1
            };
            if (o.runId !== e) return {
                started: !1
            };
            const a = new AbortController, l = {
                abortSignal: a.signal,
                toolCallId: n.runToolCallId,
                parentConversationId: n.parentConversationId,
                subagentType: n.subagentType,
                modelId: n.modelId,
                credentials: n.credentials,
                prompt: n.prompt,
                readonly: n.readonly,
                resumeAgentId: t,
                runInBackground: !0,
                continuationConfig: n.continuationConfig,
                selectedContext: n.selectedContext
            }, c = (n.continuationConfig ? this.runWithContinuation(l, i, n.continuationConfig) : this.runSubagentWithHandle(l, i)).catch((u)=>{
                const d = u instanceof Error ? u.message : String(u);
                return {
                    success: !1,
                    composerId: t,
                    error: d,
                    terminationReason: "error"
                };
            });
            return this.registerBackgroundPromise({
                composerId: t,
                promise: c,
                abortController: a
            }), c.then((u)=>{
                u.success || this._notifyQueuedResumeFailure(n, u.error ?? "Unknown subagent error");
            }), {
                started: !0
            };
        } catch (r) {
            const s = r instanceof Error ? r.message : String(r);
            return this._notifyQueuedResumeFailure(n, s), {
                started: !1,
                error: s
            };
        }
    }
    _syncBackgroundWorkRegistration(t, e = t1m()) {
        if (e.status === "running" || e.status === "runningWithQueuedResume") {
            const n = this._composerDataService.getHandleIfLoaded(t), i = n?.data.subagentInfo?.parentComposerId ?? t, r = this._resolveBackgroundSubagentTitle(n) ?? "Background subagent", s = this._backgroundWorkService.backgroundWorkItems.value.find((o)=>o.kind === "subagent" && o.id === t)?.startTimeMs;
            this._backgroundWorkService.upsertSubagentWork({
                id: t,
                kind: "subagent",
                composerId: i,
                title: r,
                startTimeMs: s ?? Date.now(),
                subagentComposerId: t
            });
            return;
        }
        this._backgroundWorkService.clearSubagentWork(t);
    }
    _resolveBackgroundSubagentTitle(t) {
        const e = t?.data.subagentInfo?.toolCallId, n = t?.data.subagentInfo?.parentComposerId, i = this._resolveBackgroundSubagentTitleFromToolCallId(e, n);
        if (i) return i;
        const r = Ele(t?.data.name);
        if (r && r !== t?.data.composerId) return r;
    }
    _resolveBackgroundSubagentTitleFromToolCallId(t, e) {
        if (t) {
            const n = this._scanLoadedComposersForParentBubbleByToolCallId(t, e), r = n?.toolFormer.getBubbleData(n.bubbleId)?.params, s = this._extractTaskTitleFromParams(r);
            if (s) return s;
            const o = typeof r?.prompt == "string" ? r.prompt.trim() : typeof r?.value?.prompt == "string" ? r.value.prompt.trim() : void 0;
            if (o && o.length > 0) return ww(o)[0];
        }
    }
    _releaseLifecycleIfIdle(t) {
        this._backgroundPromises.has(t) || this._lifecycleStore.getState(t).status !== "idle" || this._lifecycleStore.release(t);
    }
    _abortComposerRun(t) {
        let e = !1;
        const n = this._backgroundAbortControllers.get(t);
        n && (n.abortController.abort(), this._backgroundAbortControllers.delete(t), e = !0);
        const i = this._composerDataService.getHandleIfLoaded(t);
        if (!i) return e;
        const r = this._composerDataService.getComposerData(i);
        if (!r?.chatGenerationUUID) return e;
        const s = this._aiService.streamingAbortControllers.get(r.chatGenerationUUID);
        return s && (s.abort(), this._aiService.streamingAbortControllers.delete(r.chatGenerationUUID), e = !0), e;
    }
    async _pauseCloudSubagent(t) {
        try {
            await chg(this._aiService.backgroundComposerSyncClient, t);
        } catch (e) {
            this._structuredLogService.warn("background_composer", "SubagentComposerService: failed to pause cloud subagent", {
                composerId: t,
                error: e instanceof Error ? e.message : String(e)
            });
        }
    }
    _notifyQueuedResumeFailure(t, e) {
        for (const n of t.toolCallIds)this.notifyBackgroundFailure({
            toolCallId: n,
            error: e,
            parentComposerId: t.parentConversationId
        });
    }
    async _findChildEntries(t) {
        const e = [];
        for (const [n, i] of this._backgroundPromises){
            const r = this._composerDataService.getHandleIfLoaded(n) ?? await this._composerDataService.getComposerHandleById(n);
            r && r.data.subagentInfo?.parentComposerId === t && e.push({
                childId: n,
                entry: i
            });
        }
        return e;
    }
    async _collectAvailableChildren(t) {
        const e = [], n = await this._findChildEntries(t);
        if (n.length === 0) return e;
        let i = n.filter((s)=>s.entry.settled);
        const r = n.filter((s)=>!s.entry.settled);
        i.length === 0 && r.length > 0 && (await Promise.race(r.map((s)=>s.entry.promise.catch(()=>{}))), i = n.filter((s)=>s.entry.settled));
        for (const s of i){
            const o = s.entry.result ?? await s.entry.promise;
            this._backgroundPromises.get(s.childId) === s.entry && this._backgroundPromises.delete(s.childId), e.push({
                agentId: o.composerId ?? s.childId,
                success: o.success,
                finalMessage: o.success ? o.finalMessage ?? "" : o.error ?? "Unknown error"
            });
        }
        return e;
    }
    _buildChildrenCompletedMessage(t, e) {
        const n = t.map((i)=>{
            const r = i.success ? "SUCCESS" : "FAILED";
            return `## Agent ${i.agentId} -- ${r}

${i.finalMessage}`;
        }).join(`

---

`);
        return e.replace("{summaries}", n);
    }
    _randomHex(t) {
        const e = new Uint8Array(t);
        return crypto.getRandomValues(e), Array.from(e, (n)=>n.toString(16).padStart(2, "0")).join("");
    }
    async _resolveAndEnsureTranscriptFile(t) {
        try {
            const e = this._workspaceContextService.getWorkspace(), n = await bze(e, this._pathService), r = (await this._composerDataService.getComposerHandleById(t))?.data.subagentInfo?.parentComposerId, s = r ? pZm({
                transcriptsDir: n,
                parentConversationId: r,
                conversationId: t
            }) : hZm(n, t);
            try {
                const o = rt.joinPath(s, "..");
                await this._fileService.createFolder(o);
            } catch  {}
            try {
                await this._fileService.exists(s) || await this._fileService.writeFile(s, Tr.fromString(""));
            } catch  {}
            return s.fsPath;
        } catch  {
            return;
        }
    }
    _countToolCallsSince(t, e) {
        const n = this._composerDataService.getLoadedConversation(t);
        let i = 0;
        for(let r = e; r < n.length; r++)n[r].toolFormerData?.tool && i++;
        return i;
    }
    _extractFinalAssistantMessage(t) {
        const e = this._composerDataService.getLoadedConversation(t);
        return Qrs(e);
    }
    resolveTaskDescriptionTitle(t) {
        return this._resolveTaskDescriptionTitle({
            toolCallId: t.toolCallId,
            parentConversationId: t.parentComposerId
        });
    }
    async resolveTaskLaunchMetadata(t) {
        let e = this._scanLoadedComposersForParentBubbleByToolCallId(t.toolCallId, t.parentComposerId);
        if (!e) {
            if (!await this._composerDataService.getComposerHandleById(t.parentComposerId)) return {};
            e = this._scanLoadedComposersForParentBubbleByToolCallId(t.toolCallId, t.parentComposerId);
        }
        if (!e) return {};
        const n = await e.toolFormer.getHydratedBubbleByToolCallId(t.toolCallId);
        return this._extractTaskLaunchMetadataFromParams(n?.bubbleData.params);
    }
    _extractTaskLaunchMetadataFromParams(t) {
        let e = t;
        if (typeof e == "object" && e !== null && "value" in e && (e = e.value), typeof e != "object" || e === null) return {};
        const n = "model" in e && typeof e.model == "string" ? e.model.trim() : "", i = "name" in e && typeof e.name == "string" ? e.name.trim() : "", r = "subagentType" in e && typeof e.subagentType == "string" ? e.subagentType.trim() : "", s = i || (r !== "unspecified" && r !== "custom" && r !== "unknown" ? r : "");
        return {
            ...n ? {
                modelId: n
            } : {},
            ...s ? {
                subagentTypeName: s
            } : {}
        };
    }
    _resolveTaskDescriptionTitle(t) {
        const e = this._scanLoadedComposersForParentBubbleByToolCallId(t.toolCallId, t.parentConversationId), n = e?.toolFormer.getBubbleData(e.bubbleId);
        return this._extractTaskTitleFromParams(n?.params);
    }
    _extractTaskTitleFromParams(t) {
        const e = t, n = typeof e?.description == "string" ? e.description.trim() : typeof e?.value?.description == "string" ? e.value.description.trim() : void 0;
        if (!(!n || n.length === 0)) return n;
    }
    _triggerRenameComposer(t) {
        this._instantiationService.invokeFunction((n)=>n.get(l0)).renameComposerIfNeeded(t).catch((n)=>{
            console.error("[subagentComposerService] Error renaming subagent composer:", n);
        });
    }
    linkParentToSubagent(t, e, n) {
        this._linkParentToSubagent(t, e, n);
    }
    async linkParentToSubagentWhenReady(t) {
        const e = Ele(t.toolCallId), n = Ele(t.subagentComposerId), i = Ele(t.parentComposerId);
        if (!e || !n || !i || t.timeoutMs <= 0) return !1;
        let r = !1;
        const s = async ()=>{
            const u = this._composerDataService.getHandleIfLoaded(i) ?? await this._composerDataService.getComposerHandleById(i);
            if (r) return !1;
            u && this._composerDataService.loadComposerCapabilities?.(u);
            const d = this._scanLoadedComposersForParentBubbleByToolCallId(e, i);
            if (!d) return !1;
            const h = await d.toolFormer.getHydratedBubbleByToolCallId(e);
            return h?.bubbleData.tool !== Ct.TASK_V2 || h.bubbleData.toolCallId !== e || r ? !1 : this._linkParentToSubagentVerified(e, n, i);
        };
        let o;
        const a = new Promise((u)=>{
            o = u;
        }), l = this._pendingApprovalRegistry.onBubbleCreated((u)=>{
            u.composerId === i && u.toolCallId === e && o?.();
        }), c = async ()=>await s() ? !0 : (this._pendingApprovalRegistry.hasCreatedBubble({
                composerId: i,
                toolCallId: e
            }) || await a, s());
        try {
            return await Vh(c().catch(()=>!1), t.timeoutMs, ()=>{
                r = !0;
            }) === !0;
        } finally{
            l.dispose();
        }
    }
    async findSubagentForToolCall(t, e) {
        const n = e?.trim();
        let i = this._scanLoadedComposersForParentBubbleByToolCallId(t, n);
        !i && n && await this._composerDataService.getComposerHandleById(n) && (i = this._scanLoadedComposersForParentBubbleByToolCallId(t, n));
        const r = i ? (await i.toolFormer.getHydratedBubbleByToolCallId(t))?.bubbleData : void 0, s = [], o = r?.additionalData?.subagentComposerId, a = [];
        for (const l of this._composerDataService.getLoadedComposers()){
            const c = this._composerDataService.getHandleIfLoaded(l);
            c?.data.subagentInfo?.toolCallId === t && (n && c.data.subagentInfo?.parentComposerId !== n || a.push(l));
        }
        if (n && a.length > 0) s.push(...a);
        else {
            o && s.push(o);
            for (const l of a)l !== o && s.push(l);
        }
        for (const l of s)if (await this._composerDataService.getComposerHandleById(l)) return l;
    }
    _linkParentToSubagent(t, e, n) {
        const i = this._scanLoadedComposersForParentBubbleByToolCallId(t, n);
        if (!i) return;
        const r = i.toolFormer.getBubbleData(i.bubbleId), s = r?.tool === Ct.TASK_V2 ? r.additionalData : void 0, o = s?.subagentComposerId?.trim(), a = Zhg(s?.supersededSubagentComposerIds, o, e);
        i.toolFormer.setBubbleData(i.bubbleId, {
            additionalData: {
                subagentComposerId: e,
                ...a ? {
                    supersededSubagentComposerIds: a
                } : {}
            }
        }), this._composerDataService.updateComposerDataSetStore(i.parentHandle, (l)=>{
            l("subagentComposerIds", (c)=>{
                const u = c ?? [];
                return u.includes(e) ? u : [
                    ...u,
                    e
                ];
            });
        });
    }
    _linkParentToSubagentVerified(t, e, n) {
        const i = this._scanLoadedComposersForParentBubbleByToolCallId(t, n);
        if (!i) return !1;
        const r = i.toolFormer.getBubbleData(i.bubbleId), s = r?.tool === Ct.TASK_V2 ? r.additionalData : void 0, o = Zhg(s?.supersededSubagentComposerIds, s?.subagentComposerId?.trim(), e);
        try {
            i.toolFormer.setBubbleDataOrThrow(i.bubbleId, {
                additionalData: {
                    subagentComposerId: e,
                    ...o ? {
                        supersededSubagentComposerIds: o
                    } : {}
                }
            });
        } catch  {
            return !1;
        }
        const a = i.toolFormer.getBubbleData(i.bubbleId);
        return a?.tool !== Ct.TASK_V2 || a.toolCallId !== t || a.additionalData?.subagentComposerId !== e ? !1 : (this._composerDataService.updateComposerDataSetStore(i.parentHandle, (l)=>{
            l("subagentComposerIds", (c)=>{
                const u = c ?? [];
                return u.includes(e) ? u : [
                    ...u,
                    e
                ];
            });
        }), !0);
    }
    _scanLoadedComposersForParentBubbleByToolCallId(t, e) {
        const n = e?.trim(), i = n ? [
            n
        ] : this._composerDataService.getLoadedComposers();
        for (const r of i){
            const s = this._composerDataService.getHandleIfLoaded(r);
            if (!s) continue;
            const o = this._composerDataService.getComposerCapability(s, mo.TOOL_FORMER);
            if (!o) continue;
            const a = o.getBubbleIdByToolCallId(t);
            if (a) return {
                parentHandle: s,
                bubbleId: a,
                toolFormer: o
            };
        }
    }
    _scanLoadedComposersForParentBubbleBySubagentId(t) {
        for (const e of this._composerDataService.getLoadedComposers()){
            const n = this._composerDataService.getHandleIfLoaded(e);
            if (!n) continue;
            const i = n.data.conversationMap ?? {}, r = n.data.fullConversationHeadersOnly.map((l)=>l.bubbleId).filter((l)=>typeof l == "string"), o = (r.length > 0 ? r : Object.keys(i)).slice().reverse().find((l)=>{
                const c = i[l];
                return c ? c.toolFormerData?.additionalData?.subagentComposerId === t : !1;
            });
            if (!o) continue;
            const a = this._composerDataService.getComposerCapability(n, mo.TOOL_FORMER);
            if (a) return {
                parentHandle: n,
                bubbleId: o,
                toolFormer: a
            };
        }
    }
    _resolveInheritedGitWorktree(t) {
        const e = t.parentConversationId.trim(), n = e ? this._composerDataService.getHandleIfLoaded(e) : void 0;
        if (!n) return;
        const i = this._composerDataService.getComposerData(n);
        if (i?.gitWorktree) return i.gitWorktree;
        const r = this._composerDataService.getRootComposerId(n.data.composerId);
        if (r === n.data.composerId) return;
        const s = this._composerDataService.getHandleIfLoaded(r);
        return s ? this._composerDataService.getComposerData(s)?.gitWorktree : void 0;
    }
}, bos = Re([
    Zbe(0, no),
    Zbe(1, jl),
    Zbe(2, eg),
    Zbe(3, dn),
    Zbe(4, wh),
    Zbe(5, Uh),
    Zbe(6, yr),
    Zbe(7, Rd),
    Zbe(8, ZD),
    Zbe(9, Cr),
    Zbe(10, is),
    Zbe(11, pCi),
    Zbe(12, G4e)
], bos), bn(nme, bos, 1);

}
