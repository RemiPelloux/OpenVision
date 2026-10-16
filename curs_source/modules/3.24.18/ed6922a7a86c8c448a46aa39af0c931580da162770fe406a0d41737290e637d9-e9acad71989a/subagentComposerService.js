import { EPd, RX, i0v, uFd } from "./A3u.js";
import { G0e, I$t, O5, S_, qh } from "./De_3.js";
import { Fo, Hp, Ps, Se, ja, ry, si, we, wi } from "./HVr.js";
import { ie } from "./actions_2.js";
import { Mtt } from "./agentClientService.js";
import { Q1o } from "./agentHostService.js";
import { Kv, Rb } from "./agentRepositoryServiceTypes.js";
import { hSh } from "./agentStoreSubagentMount.js";
import { $Fn } from "./agentTraceContext.js";
import { bq, ytt } from "./agent_host_pb.js";
import { Hm, xd, zd } from "./agent_pb.js";
import { xX } from "./aiEverythingProviderService.js";
import { Sg, jp } from "./aiService.js";
import { bn } from "./async.js";
import { Za, na } from "./authenticationService.js";
import { AX, Jj } from "./backgroundWorkRegistry.js";
import { nb } from "./bcIdFromAuthority.js";
import { Cwo, Dbh, fCo, iSh, lSh, mSh, nvh, nwo, pSh, tCt, tSh, uSh } from "./cgh.js";
import { Hu, Tr, ade } from "./chat_pb.js";
import { H1h, U1h } from "./cloudSubagentRunner.js";
import { $n, vi } from "./commands.js";
import { hq, q6 } from "./composerAgent.js";
import { T2 } from "./composerCapabilities.js";
import { OR, loe } from "./composerChatServiceInterface.js";
import { Af, Wf } from "./composerData.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Zy, yC } from "./composerEventService.js";
import { iwo } from "./composerRequestLifecycle.js";
import { FR, z5 } from "./composerUtilsServiceTypes.js";
import { Jm, ps } from "./composer_pb.js";
import { ivh } from "./contextSetup.js";
import { Vr, Yi } from "./environmentService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Fi, Ii } from "./files.js";
import { RGt, bOn } from "./globalCommandsService.js";
import { CX } from "./index_11.ts";
import { Gp } from "./index_3.ts";
import { Ze, _t } from "./instantiation.js";
import { Cp, vp } from "./metricsService.js";
import { QS, i0 } from "./modelConfigServiceTypes.js";
import { di, ji } from "./notification.js";
import { fu, zl } from "./pathService.js";
import { Jk, ba } from "./path_2.js";
import { uCt, zVt } from "./pendingApprovalRegistry.js";
import { Um, mn, pS } from "./qIc.js";
import { xUe } from "./simulatedMessageMetadataUtils.js";
import { Xh, im } from "./structuredLog.js";
import { IPd } from "./subagent-lifecycle-store.ts";
import { aSh } from "./subagentClientVideoAttachments.js";
import { kZi, wtt } from "./subagentComposerServiceInterface.js";
import { vCo } from "./subagentFinalMessage.js";
import { Pqv } from "./subagentHostRestartInterruption.js";
import { GZv } from "./subagentModelParameterInheritance.js";
import { Obh } from "./subagentSpawnMetrics.js";
import { Jxn, Pj, pse } from "./subagents_pb.js";
import { mse, nt, ql } from "./tools_pb.js";
import { L1e } from "./transcriptPaths.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Iss, hu, xf, xss } from "./utils_pb.js";
import { Js, zn } from "./uuid.js";
import { Jn, ci } from "./workspace.js";
import { NR } from "./workspaceProjectPaths.js";
import { $$, Bdh, XUe, Y8v } from "./xmo.js";
var R0h = {};
function WZv(e, t) {
    const n = e ?? [], i = t ?? [];
    if (n.length !== i.length) return !1;
    const r = new Map(n.map((s)=>[
            s.id,
            s.value
        ]));
    return r.size !== n.length ? n.every((s, o)=>s.id === i[o]?.id && s.value === i[o]?.value) : i.every((s)=>r.get(s.id) === s.value);
}
function W1h(e, t, n) {
    if (e.length === 0 || !t || (n?.length ?? 0) === 0) return e;
    let i = !1;
    const r = e.map((s)=>s.modelId !== t || (s.parameters?.length ?? 0) > 0 ? s : (i = !0, {
            ...s,
            parameters: n.map((o)=>({
                    ...o
                }))
        }));
    return i ? r : e;
}
var wTh = {};
async function TQv(e, t) {
    return t <= 0 ? !e.aborted : e.aborted ? !1 : new Promise((n)=>{
        const i = setTimeout(()=>{
            e.removeEventListener("abort", r), n(!0);
        }, t), r = ()=>{
            clearTimeout(i), n(!1);
        };
        e.addEventListener("abort", r, {
            once: !0
        });
    });
}
function EQv(e) {
    if (e === void 0) return {
        apiKey: void 0,
        openaiApiBaseUrl: void 0,
        azureState: void 0,
        bedrockState: void 0
    };
    switch(e.case){
        case "apiKeyCredentials":
            return {
                apiKey: e.value.apiKey,
                openaiApiBaseUrl: e.value.baseUrl,
                azureState: void 0,
                bedrockState: void 0
            };
        case "azureCredentials":
            return {
                apiKey: void 0,
                openaiApiBaseUrl: void 0,
                azureState: new xss({
                    apiKey: e.value.apiKey,
                    baseUrl: e.value.baseUrl,
                    deployment: e.value.deployment,
                    useAzure: !0
                }),
                bedrockState: void 0
            };
        case "bedrockCredentials":
            return {
                apiKey: void 0,
                openaiApiBaseUrl: void 0,
                azureState: void 0,
                bedrockState: new Iss({
                    accessKey: e.value.accessKey,
                    secretKey: e.value.secretKey,
                    region: e.value.region,
                    sessionToken: e.value.sessionToken ?? "",
                    useBedrock: !0
                })
            };
        case void 0:
            return {
                apiKey: void 0,
                openaiApiBaseUrl: void 0,
                azureState: void 0,
                bedrockState: void 0
            };
        default:
            return {
                apiKey: void 0,
                openaiApiBaseUrl: void 0,
                azureState: void 0,
                bedrockState: void 0
            };
    }
}
function xQv(e, t) {
    const n = t?.trim(), i = e.conversationMap;
    n && i !== void 0 && (e.fullConversationHeadersOnly = e.fullConversationHeadersOnly?.filter((r)=>{
        const s = i[r.bubbleId]?.toolFormerData, o = (s?.tool === nt.TASK || s?.tool === nt.TASK_V2) && s.toolCallId === n;
        return o && delete i[r.bubbleId], !o;
    }) ?? []), e.queueItems = [], e.selectedQueueItemId = void 0, e.inputEditSession = void 0, e.editingQueueItemId = void 0, e.editingQueueItemSnapshot = void 0;
}
function IQv(e) {
    return e.mode === Jxn.PLAN ? "plan" : e.readonly ? "chat" : "agent";
}
function AQv(e, t) {
    return e ?? t;
}
function nZ(e) {
    const t = e?.trim();
    return t && t.length > 0 ? t : void 0;
}
function xTh(e, t) {
    if (!e) return;
    const n = nZ(t);
    if (!n) return;
    const i = e.toolCallIdHistory?.map(nZ).filter((a)=>a !== void 0) ?? [], r = nZ(e.toolCallId);
    i.length === 0 && r && i.push(r), i.at(-1) !== n && i.push(n);
    const s = e.toolCallIdHistory, o = s?.length !== i.length || i.some((a, c)=>s?.[c] !== a);
    if (!(e.toolCallId === n && !o)) return {
        ...e,
        toolCallId: n,
        toolCallIdHistory: i
    };
}
function ITh(e, t, n) {
    const i = n.trim(), r = e?.map(nZ).filter((s)=>s !== void 0 && s !== i) ?? [];
    if (t && t !== i && !r.includes(t) && r.push(t), r.length !== 0 && !(e && r.length === e.length && r.every((s, o)=>e[o] === s))) return r.slice(-DTh);
}
function RQv(e) {
    switch(e){
        case MTh:
            return xd.RUN_BUGBOT_REVIEW;
        case PTh:
            return xd.RUN_SECURITY_REVIEW;
        default:
            return;
    }
}
var J1o, eTo, yoe, ATh, RTh, DTh, MTh, PTh, iZ, VQi;
export { AQv, ATh, DTh, EQv, IQv, ITh, J1o, MTh, PTh, R0h, RQv, RTh, TQv, VQi, W1h, WZv, eTo, iZ, nZ, wTh, xQv, xTh, yoe };
var __wakaru_jQi_initialized = false;
export function jQi() {
if (__wakaru_jQi_initialized) return;
__wakaru_jQi_initialized = true;
"use strict";
x(), CX(), Gp(), zd(), Pj(), Hu(), ql(), Jm(), ql(), hu(), Fo(), bn(), nb(), Se(), Ps(), Qt(), si(), Js(), Fi(), Pn(), Ze(), im(), ci(), hq(), T2(), loe(), Wf(), nl(), yC(), z5(), zVt(), iwo(), xUe(), Sg(), Cp(), Obh(), Za(), qs(), Vr(), i0(), ji(), Rb(), bq(), fu(), RGt(), ba(), NR(), aSh(), AX(), $Fn(), ivh(), L1e(), kZi(), hSh(), Pqv(), H1h(), vCo(), GZv(), vi(), kZi(), J1o = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), eTo = (e)=>{
    throw TypeError(e);
}, yoe = (e, t)=>(n, i)=>t(n, i, e), ATh = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && eTo("Object expected");
        var i, r;
        n && (i = t[J1o("asyncDispose")]), i === void 0 && (i = t[J1o("dispose")], n && (r = i)), typeof i != "function" && eTo("Object not disposable"), r && (i = function() {
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
}, RTh = (e, t, n)=>{
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
}, DTh = 8, MTh = "bugbot", PTh = "security-review", iZ = class extends Error {
    constructor(e, t){
        super(e), this.composerId = t, this.name = "SubagentCreationError";
    }
}, VQi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p){
        super(), this._composerDataService = e, this._aiService = t, this._modelConfigService = n, this._instantiationService = i, this._structuredLogService = r, this._metricsService = s, this._workspaceContextService = o, this._pathService = a, this._backgroundWorkService = c, this._experimentService = l, this._fileService = u, this._globalCommandsService = h, this._pendingApprovalRegistry = p, this._lifecycleStore = new IPd({
            onStateChange: ({ sessionId: g, nextState: f })=>{
                this._syncBackgroundWorkRegistration(g, f);
            },
            onQueuedRunReady: ({ sessionId: g, sourceRunId: f, queuedResume: v })=>{
                this._startQueuedResumeRunFromLifecycle(g, f, v);
            }
        }), this._backgroundPromises = new Map, this._backgroundAbortControllers = new Map, this._terminationReasonByComposerId = new Map, this._deferredCompletionByRunKey = new Map, this._localRunAborts = new Map, this._register(this._backgroundWorkService.registerSubagentKiller(async (g)=>{
            if (!Um(g)) {
                const f = this._lifecycleStore.getState(g), v = this._composerDataService.getHandleIfLoaded(g), b = v ? this._composerDataService.getComposerData(v) : void 0, y = b?.chatGenerationUUID !== void 0 && this._aiService.streamingAbortControllers.has(b.chatGenerationUUID);
                if (f.status === "idle" && !this._backgroundPromises.has(g) && !y && !this._localRunAborts.has(g)) return !1;
            }
            return await this.stopSubagentTree(g), !0;
        }));
    }
    dispose() {
        try {
            for (const e of this._localRunAborts.values())e.abort();
            this._localRunAborts.clear();
            for (const { abortController: e } of this._backgroundAbortControllers.values())e.abort();
            this._backgroundAbortControllers.clear();
            for (const e of this._backgroundPromises.values()){
                if (e.settled) {
                    this._resolveBackgroundWaiters(e);
                    continue;
                }
                const t = e.waiters;
                if (!t || t.size === 0) continue;
                e.waiters = void 0;
                const n = new Error("Subagent host disposed before the background subagent settled");
                for (const i of t)i.reject(n);
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
    async _waitForParentTaskBubbleIfPossible(e) {
        const t = nZ(e.parentConversationId), n = nZ(e.toolCallId);
        if (!t || !n) return;
        const i = this._composerDataService.getHandleIfLoaded(t);
        if (i !== void 0 && (this._composerDataService.loadComposerCapabilities?.(i), this._composerDataService.getComposerCapability(i, ps.TOOL_FORMER)?.getBubbleIdByToolCallId(n) !== void 0)) {
            this._pendingApprovalRegistry.signalBubbleCreated(t, n);
            return;
        }
        await this._pendingApprovalRegistry.waitForBubbleCreation(t, n);
    }
    async createOrResumeSubagent(e) {
        const t = {
            mode: e.resumeAgentId ? "resume" : e.forkAgentId ? "fork" : "create",
            surfaceKind: Dbh({
                parentConversationId: e.parentConversationId.trim(),
                parentComposer: this._composerDataService.getHandleIfLoaded(e.parentConversationId.trim())?.data,
                getComposer: (i)=>this._composerDataService.getHandleIfLoaded(i)?.data
            })
        }, n = performance.now();
        try {
            const i = await this._createOrResumeSubagentSpawn(e, t);
            return Cwo(this._metricsService, {
                phase: "total",
                mode: t.mode,
                surfaceKind: t.surfaceKind,
                durationMs: performance.now() - n,
                outcome: "ok"
            }), i;
        } catch (i) {
            throw Cwo(this._metricsService, {
                phase: "total",
                mode: t.mode,
                surfaceKind: t.surfaceKind,
                durationMs: performance.now() - n,
                outcome: ja(i) ? "aborted" : "error"
            }), i;
        }
    }
    async _createOrResumeSubagentSpawn(e, t) {
        let n;
        const i = e.resumeAgentId || void 0, r = i ? this._beginLocalRunAbort(i) : void 0;
        if (i && r?.signal.aborted) {
            const l = await this._composerDataService.getComposerHandleById(i);
            if (l) return l;
            throw new iZ("Subagent was aborted by the user", i);
        }
        let s = i;
        const o = await this._prependRequiredGlobalCommandPrompt(e);
        if (await this._waitForParentTaskBubbleIfPossible(e), i && r?.signal.aborted) {
            const l = await this._composerDataService.getComposerHandleById(i);
            if (l) return l;
            throw new iZ("Subagent was aborted by the user", i);
        }
        const a = e.parentConversationId.trim(), c = a ? this._composerDataService.getHandleIfLoaded(a) : void 0;
        try {
            const l = this._resolveInheritedGitWorktree(e);
            if (e.resumeAgentId) {
                if (e.forkAgentId) throw new iZ("Cannot set both resumeAgentId and forkAgentId for the same subagent request.", e.resumeAgentId);
                s = e.resumeAgentId;
                const u = await this._composerDataService.getComposerHandleById(s);
                if (!u) throw new iZ(`Composer not found for resume: ${s}`, s);
                if (this.isLongRunningJobsEnabled()) {
                    const g = u.data.subagentInfo?.parentComposerId?.trim();
                    if (!a) throw new iZ(`Subagent parent mismatch for resume: requested=<missing>, actual=${g ?? "<missing>"}`, s);
                    if (g && g !== a) throw new iZ(`Subagent parent mismatch for resume: requested=${a}, actual=${g}`, s);
                }
                n = u;
                const h = this._resolveTaskDescriptionTitle(e), p = xTh(n.data.subagentInfo, e.toolCallId);
                (h || p) && this._composerDataService.updateComposerDataSetStore(n, (g)=>{
                    h && g("name", h), p && g("subagentInfo", p);
                }), this.isLongRunningJobsEnabled() && !n.data.subagentInfo?.parentComposerId && a && this._composerDataService.updateComposerDataSetStore(n, (g)=>{
                    g("subagentInfo", {
                        ...n.data.subagentInfo ?? {},
                        parentComposerId: a
                    });
                }), l && !n.data.gitWorktree && this._composerDataService.updateComposerDataSetStore(n, (g)=>{
                    g("gitWorktree", {
                        ...l
                    });
                }), e.idempotentReplayResume || await this._appendPromptBubbles(n, {
                    prompt: o,
                    toolCallId: e.toolCallId,
                    parentComposerId: e.parentConversationId
                });
            } else {
                if (s = zn(), this._beginLocalRunAbort(s).signal.aborted) throw new iZ("Subagent was aborted by the user", s);
                const h = this._resolveTaskDescriptionTitle(e), p = IQv(e);
                let g;
                if (e.forkAgentId) {
                    const b = await this._composerDataService.getComposerHandleById(e.forkAgentId);
                    if (!b) throw new iZ(`Fork source subagent not found: ${e.forkAgentId}`, s);
                    this._assertCanForkDirectChild({
                        forkAgentId: e.forkAgentId,
                        parentComposerId: a,
                        forkSourceHandle: b,
                        newComposerId: s
                    }), g = await this._instantiationService.invokeFunction((T)=>T.get(FR)).deepCloneComposer(b.data, s, {
                        skipCapabilities: !0
                    }), xQv(g, e.toolCallId), g.modelConfig = {
                        modelName: e.modelId,
                        maxMode: g.modelConfig?.maxMode === !0
                    }, g.unifiedMode = p, g.subagentComposerIds = [], g.name = void 0, g.subtitle = void 0, g.chatGenerationUUID = void 0, g.latestChatGenerationUUID = void 0;
                } else {
                    const b = this._modelConfigService.getModelConfig("composer"), y = typeof this._modelConfigService.fixupModelConfigForCurrentFlag == "function" ? this._modelConfigService.fixupModelConfigForCurrentFlag({
                        modelName: e.modelId,
                        maxMode: b.maxMode === !0
                    }) : void 0, T = W1h(y?.selectedModels ?? [], y?.selectedModels?.[0]?.modelId ?? e.modelId, e.modelParameters), E = {
                        modelName: T[0]?.modelId ?? e.modelId,
                        maxMode: b.maxMode === !0,
                        ...T.length ? {
                            selectedModels: T.map((A)=>({
                                    modelId: A.modelId,
                                    parameters: (A.parameters ?? []).map((R)=>({
                                            ...R
                                        }))
                                }))
                        } : {}
                    };
                    g = I$t(l, O5(E, s, p));
                }
                c?.data.workspaceIdentifier && !g.workspaceIdentifier && (g.workspaceIdentifier = c.data.workspaceIdentifier);
                const f = G0e(this._instantiationService, s, {
                    forceCapabilities: [
                        ps.TOOL_FORMER,
                        ps.THINKING,
                        ps.QUEUING,
                        ps.CHIMES,
                        ps.NOTIFICATIONS
                    ]
                });
                if (g.capabilities = f, this.isLongRunningJobsEnabled()) {
                    if (!a) throw new iZ(`Missing parentConversationId for subagent spawn (toolCallId: ${e.toolCallId})`, s);
                    const b = e.forkAgentId ? g.fullConversationHeadersOnly?.length ?? 0 : 0, y = this._deriveLineageFromParent(c);
                    g.subagentInfo = {
                        subagentType: ade.TASK,
                        parentComposerId: a,
                        conversationLengthAtSpawn: b,
                        ...e.forkAgentId ? {
                            forkedFromComposerId: e.forkAgentId
                        } : {},
                        additionalData: {},
                        subagentTypeName: e.subagentType,
                        toolCallId: e.toolCallId,
                        toolCallIdHistory: [
                            e.toolCallId
                        ],
                        rootParentConversationId: e.rootParentConversationId,
                        ...y
                    };
                } else if (a) {
                    const b = e.forkAgentId ? g.fullConversationHeadersOnly?.length ?? 0 : 0, y = this._deriveLineageFromParent(c);
                    g.subagentInfo = {
                        subagentType: ade.TASK,
                        parentComposerId: a,
                        conversationLengthAtSpawn: b,
                        ...e.forkAgentId ? {
                            forkedFromComposerId: e.forkAgentId
                        } : {},
                        additionalData: {},
                        subagentTypeName: e.subagentType,
                        toolCallId: e.toolCallId,
                        toolCallIdHistory: [
                            e.toolCallId
                        ],
                        rootParentConversationId: e.rootParentConversationId,
                        ...y
                    };
                } else if (e.forkAgentId) throw new iZ(`Missing parentConversationId for fork request (forkAgentId: ${e.forkAgentId})`, s);
                h && (g.name = h);
                const v = await this._composerDataService.appendSubComposer(g);
                if (!v) throw new iZ("Failed to create subagent composer", s);
                n = v, await this._appendPromptBubbles(n, {
                    prompt: o,
                    toolCallId: e.toolCallId,
                    parentComposerId: e.parentConversationId,
                    simulatedMsgReason: RQv(e.subagentType)
                }), h || this._triggerRenameComposer(n);
            }
        } catch (l) {
            const u = l instanceof Error ? l.message : String(l);
            throw new iZ(u, s ?? zn());
        }
        if (e.environment !== pse.CLOUD) {
            const l = n.data.subagentInfo?.parentComposerId ?? e.parentConversationId, u = performance.now();
            try {
                await this._instantiationService.invokeFunction(async (h)=>{
                    const p = h.get($n);
                    await lSh({
                        commandService: p,
                        experimentService: this._experimentService,
                        parentConversationId: l,
                        childConversationId: n.data.composerId
                    });
                }), Cwo(this._metricsService, {
                    phase: "store_inherit",
                    mode: t.mode,
                    surfaceKind: t.surfaceKind,
                    durationMs: performance.now() - u,
                    outcome: "ok"
                });
            } catch  {}
        }
        return n;
    }
    async runSubagentWithHandle(e, t) {
        return this._runSubagent(e, t);
    }
    async resolveBackgroundTranscriptPath(e) {
        return this._resolveAndEnsureTranscriptFile(e);
    }
    getLastTerminationReason(e) {
        return this._terminationReasonByComposerId.get(e);
    }
    async canInterruptSubagentTree({ composerId: e, parentConversationId: t }) {
        const n = t.trim();
        if (n.length === 0) return !1;
        const i = this._composerDataService.getHandleIfLoaded(e) ?? await this._composerDataService.getComposerHandleById(e);
        return i ? i.data.subagentInfo?.parentComposerId?.trim() === n : !1;
    }
    notifyBackgroundFailure({ toolCallId: e, error: t, parentComposerId: n }) {
        this.markParentTaskBubbleCompleted({
            parentComposerId: n,
            toolCallId: e,
            status: "error",
            error: t
        });
    }
    async markSubagentInterrupted(e) {
        const t = nZ(e.toolCallId);
        if (!t) return !1;
        let n = this._scanLoadedComposersForParentBubbleByToolCallId(t, e.parentComposerId);
        if (!n && (!await this._composerDataService.getComposerHandleById(e.parentComposerId) || (n = this._scanLoadedComposersForParentBubbleByToolCallId(t, e.parentComposerId), !n))) return !1;
        await n.toolFormer.getHydratedBubbleByToolCallId(t), n = this._scanLoadedComposersForParentBubbleByToolCallId(t, e.parentComposerId);
        const i = n?.toolFormer.getBubbleData(n.bubbleId);
        if (!n || !pSh(i)) return !1;
        n.toolFormer.setBubbleData(n.bubbleId, mSh());
        const r = this._composerDataService.getHandleIfLoaded(e.subagentComposerId) ?? await this._composerDataService.getComposerHandleById(e.subagentComposerId);
        return r && (r.data.status === "generating" || (r.data.generatingBubbleIds?.length ?? 0) > 0) && this._composerDataService.updateComposerDataSetStore(r, (s)=>{
            s("status", "none"), s("generatingBubbleIds", []);
        }), !0;
    }
    markParentTaskBubbleCompleted(e) {
        const t = nZ(e.toolCallId);
        if (!t) return !1;
        const n = this._scanLoadedComposersForParentBubbleByToolCallId(t, e.parentComposerId);
        if (!n) return !1;
        switch(e.status){
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
                    const i = e.error || "Subagent failed in background.";
                    return n.toolFormer.setBubbleData(n.bubbleId, {
                        status: "error",
                        error: new mse({
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
                return e.status;
        }
    }
    _markSubagentParentTaskBubbleCancelled(e, t) {
        const n = this._backgroundPromises.get(e)?.metadata, i = t?.data.subagentInfo, r = nZ(i?.toolCallId ?? n?.toolCallId), s = (r ? this._scanLoadedComposersForParentBubbleByToolCallId(r, i?.parentComposerId ?? n?.parentComposerId) : void 0) ?? this._scanLoadedComposersForParentBubbleBySubagentId(e);
        if (!s) return;
        const o = s.toolFormer.getBubbleData(s.bubbleId);
        pSh(o) && s.toolFormer.setBubbleData(s.bubbleId, mSh());
    }
    registerBackgroundPromise({ composerId: e, promise: t, abortController: n, metadata: i }) {
        const r = this._lifecycleStore.startRun(e, {
            abort: n ? ()=>n.abort() : void 0
        }), { parentComposerId: s, title: o } = i ?? {}, a = nZ(o) ?? this._resolveBackgroundSubagentTitleFromToolCallId(i?.toolCallId, s), c = a ?? "Background subagent", l = i && {
            ...i,
            ...a ? {
                title: a
            } : {}
        };
        if (s) {
            const v = this._backgroundWorkService.backgroundWorkItems.value.find((b)=>b.kind === "subagent" && b.id === e)?.startTimeMs;
            this._backgroundWorkService.upsertSubagentWork({
                id: e,
                kind: "subagent",
                composerId: s,
                title: c,
                startTimeMs: v ?? Date.now(),
                subagentComposerId: e
            });
        }
        const u = {
            runId: r,
            promise: t,
            metadata: l,
            disposition: "deliver",
            settled: !1
        }, h = ()=>u.disposition === "suppress", p = (v)=>u.disposition === "cancel" ? {
                success: !1,
                composerId: e,
                error: "Subagent was aborted by the user",
                terminationReason: "aborted"
            } : v, g = ()=>{
            this._backgroundPromises.get(e)?.runId === r && this._backgroundPromises.delete(e), this._backgroundAbortControllers.get(e)?.runId === r && this._backgroundAbortControllers.delete(e), this._lifecycleStore.finishRun(e, r), this._releaseLifecycleIfIdle(e);
        }, f = async (v)=>{
            try {
                if (h()) {
                    this._dropDeferredSubagentCompletion(e, r);
                    return;
                }
                this.hasQueuedResumePending({
                    composerId: e
                }) ? this._storeDeferredSubagentCompletion(e, r, v) : (this._dropDeferredSubagentCompletion(e, r), await this._enqueueSubagentCompletion(v, l).catch(()=>{}));
            } finally{
                this._resolveBackgroundWaiters(u), g();
            }
        };
        t.then((v)=>{
            const b = p(v);
            u.settled = !0, u.result = b, f(b);
        }, (v)=>{
            u.settled = !0, u.result = p({
                success: !1,
                composerId: e,
                error: "Background subagent promise rejected",
                terminationReason: "error"
            }), f(u.result);
        }), this._backgroundPromises.set(e, u), n && this._backgroundAbortControllers.set(e, {
            runId: r,
            abortController: n
        });
    }
    async _enqueueSubagentCompletion(e, t) {
        if (!this.isLongRunningJobsEnabled()) return;
        const i = this._composerDataService.getHandleIfLoaded(e.composerId), r = this._backgroundWorkService.backgroundWorkItems.value.find((b)=>b.kind === "subagent" && b.id === e.composerId), s = i?.data.subagentInfo?.parentComposerId, o = e.success ? "success" : e.terminationReason === "aborted" ? "aborted" : "error", a = e.success ? e.finalMessage : e.error, c = nZ(r?.title), l = nZ(t?.title) ?? (c === "Background subagent" ? void 0 : c) ?? this._resolveBackgroundSubagentTitle(i) ?? "Background subagent", u = await this._resolveBackgroundOutputPath(e.composerId, t), h = t?.toolCallId ?? i?.data.subagentInfo?.toolCallId, p = t?.parentComposerId ?? i?.data.subagentInfo?.parentComposerId;
        this.markParentTaskBubbleCompleted({
            parentComposerId: p,
            toolCallId: h,
            status: o,
            ...o === "error" ? {
                error: a
            } : {}
        });
        const g = {
            taskId: e.composerId,
            kind: "subagent",
            status: o,
            title: l,
            ...a ? {
                detail: a
            } : {},
            ...u ? {
                outputPath: u
            } : {},
            subagentId: e.composerId,
            ...h ? {
                toolCallId: h
            } : {},
            reason: "task_finished"
        }, f = t?.parentComposerId ?? r?.composerId ?? s ?? e.composerId;
        if (!f) return;
        const v = {
            composerId: f,
            ...g
        };
        this._backgroundWorkService.enqueue({
            conversationId: f,
            id: v.taskId,
            source: "subagent",
            payload: v
        });
    }
    async _resolveBackgroundOutputPath(e, t) {
        if (t?.suppressTranscriptPath !== !0) return t?.transcriptPath ?? await this.resolveBackgroundTranscriptPath(e).catch(()=>{});
    }
    _deferredCompletionKey(e, t) {
        return `${e}:${t}`;
    }
    _markBackgroundCompletionsSuppressedForTree(e) {
        const t = this._backgroundPromises.get(e);
        t && (t.disposition = "suppress");
        const n = this._composerDataService.getHandleIfLoaded(e);
        if (!n) return;
        const i = this._composerDataService.getComposerData(n);
        if (i) for (const r of i.subagentComposerIds ?? [])this._markBackgroundCompletionsSuppressedForTree(r);
    }
    _storeDeferredSubagentCompletion(e, t, n) {
        this._deferredCompletionByRunKey.set(this._deferredCompletionKey(e, t), n);
    }
    _takeDeferredSubagentCompletion(e, t) {
        const n = this._deferredCompletionKey(e, t), i = this._deferredCompletionByRunKey.get(n);
        return this._deferredCompletionByRunKey.delete(n), i;
    }
    _dropDeferredSubagentCompletion(e, t) {
        this._deferredCompletionByRunKey.delete(this._deferredCompletionKey(e, t));
    }
    isRunningInBackground({ composerId: e }) {
        return this._lifecycleStore.isBusy(e) || this._backgroundPromises.has(e);
    }
    hasQueuedResumePending({ composerId: e }) {
        return this._lifecycleStore.getState(e).status === "runningWithQueuedResume";
    }
    enqueueOrMergeResumePrompt({ composerId: e, prompt: t, toolCallId: n, parentConversationId: i, subagentType: r, modelId: s, credentials: o, readonly: a, mode: c, continuationConfig: l, selectedContext: u }) {
        const h = this._lifecycleStore.getState(e), p = h.status === "running" || h.status === "runningWithQueuedResume" ? h.runId : this._backgroundPromises.get(e)?.runId;
        this._lifecycleStore.queueResume(e, {
            queuedResume: {
                prompt: t,
                toolCallIds: [
                    n
                ],
                runToolCallId: n,
                parentConversationId: i,
                subagentType: r,
                modelId: s,
                credentials: o,
                readonly: a,
                mode: c,
                continuationConfig: l,
                selectedContext: u
            },
            targetRunId: p,
            mergeQueuedResume: (g, f)=>{
                const v = i0v({
                    existingPrompt: g.prompt,
                    newPrompt: f.prompt
                });
                return {
                    ...f,
                    prompt: v,
                    parentConversationId: g.parentConversationId,
                    credentials: g.credentials ?? f.credentials,
                    selectedContext: AQv(g.selectedContext, f.selectedContext),
                    toolCallIds: g.toolCallIds.includes(f.runToolCallId) ? g.toolCallIds : [
                        ...g.toolCallIds,
                        f.runToolCallId
                    ]
                };
            }
        }), this._linkParentToSubagent(n, e, i);
    }
    async waitForBackgroundSubagent({ composerId: e, abortSignal: t }) {
        const n = this.isLongRunningJobsEnabled(), i = this._backgroundPromises.get(e);
        if (i) {
            if (n) {
                const s = await this._waitForBackgroundEntry(i, t);
                return await this._flushTranscriptAfterAwaitCompletion(s.composerId || e), s;
            }
            const r = await i.promise;
            return this._backgroundPromises.get(e) === i && this._backgroundPromises.delete(e), await this._flushTranscriptAfterAwaitCompletion(r.composerId || e), r;
        }
        for (const [r, s] of this._backgroundPromises){
            const o = this._composerDataService.getHandleIfLoaded(r) ?? await this._composerDataService.getComposerHandleById(r);
            if (o && o.data.subagentInfo?.parentComposerId === e) {
                if (n) {
                    const c = await this._waitForBackgroundEntry(s, t);
                    return await this._flushTranscriptAfterAwaitCompletion(c.composerId || r), c;
                }
                const a = await s.promise;
                return this._backgroundPromises.get(r) === s && this._backgroundPromises.delete(r), await this._flushTranscriptAfterAwaitCompletion(a.composerId || r), a;
            }
        }
        return {
            success: !0,
            composerId: e
        };
    }
    async awaitBackgroundSubagentBounded({ composerId: e, timeoutMs: t, abortSignal: n }) {
        const i = await this._findBackgroundEntryForAwait(e), r = i?.agentId ?? e;
        if (!i) return {
            status: "notFound",
            agentId: r
        };
        const s = await this._waitForBackgroundEntryBounded(i.entry, t, n);
        if (s.status === "stillRunning") {
            await this._flushTranscriptAfterAwaitCompletion(r);
            const l = await this._resolveBackgroundOutputPath(r, i.entry.metadata);
            return {
                status: "stillRunning",
                agentId: r,
                transcriptPath: l
            };
        }
        const o = s.result, a = o.composerId || r;
        await this._flushTranscriptAfterAwaitCompletion(a);
        const c = await this._resolveBackgroundOutputPath(a, i.entry.metadata);
        return {
            status: "completed",
            result: o,
            transcriptPath: c
        };
    }
    _resolveBackgroundWaiters(e) {
        const t = e.waiters;
        if (!t || t.size === 0) return;
        e.waiters = void 0;
        const n = e.result;
        if (!n) {
            const i = new Error("Background subagent settled without a result");
            for (const r of t)r.reject(i);
            return;
        }
        for (const i of t)i.resolve(n);
    }
    async _findBackgroundEntryForAwait(e) {
        const t = this._backgroundPromises.get(e);
        if (t) return {
            agentId: e,
            entry: t
        };
        for (const [n, i] of this._backgroundPromises){
            const r = this._composerDataService.getHandleIfLoaded(n) ?? await this._composerDataService.getComposerHandleById(n);
            if (r && r.data.subagentInfo?.parentComposerId === e) return {
                agentId: n,
                entry: i
            };
        }
    }
    _waitForBackgroundEntryBounded(e, t, n) {
        return e.settled ? e.result ? Promise.resolve({
            status: "completed",
            result: e.result
        }) : Promise.resolve({
            status: "completed",
            result: {
                success: !1,
                composerId: "",
                error: "Background subagent settled without a result",
                terminationReason: "error"
            }
        }) : n?.aborted ? Promise.reject(new Error("aborted")) : t <= 0 ? Promise.resolve({
            status: "stillRunning"
        }) : new Promise((i, r)=>{
            let s = !1, o, a;
            const c = {
                resolve: (p)=>u({
                        status: "completed",
                        result: p
                    }),
                reject: h
            }, l = ()=>{
                o !== void 0 && (clearTimeout(o), o = void 0), n && a && n.removeEventListener("abort", a), e.waiters?.delete(c);
            }, u = (p)=>{
                s || (s = !0, l(), i(p));
            };
            function h(p) {
                s || (s = !0, l(), r(p));
            }
            if (a = ()=>h(new Error("aborted")), n?.addEventListener("abort", a, {
                once: !0
            }), n?.aborted) {
                h(new Error("aborted"));
                return;
            }
            e.waiters || (e.waiters = new Set), e.waiters.add(c), o = setTimeout(()=>{
                u({
                    status: "stillRunning"
                });
            }, t);
        });
    }
    async _flushTranscriptAfterAwaitCompletion(e) {
        if (e.trim().length === 0) return;
        const t = this._instantiationService.invokeFunction((r)=>r.get(q6)), n = 1500;
        let i;
        try {
            await Promise.race([
                t.flushTranscriptForConversation(e),
                new Promise((r, s)=>{
                    i = setTimeout(()=>{
                        s(new Error(`Timed out flushing transcript after ${n}ms`));
                    }, n);
                })
            ]);
        } catch (r) {
            console.warn("[subagentComposerService] Failed to flush transcript after Await completion", {
                conversationId: e,
                error: r
            });
        } finally{
            i !== void 0 && clearTimeout(i);
        }
    }
    _waitForBackgroundEntry(e, t) {
        return e.settled ? e.result ? Promise.resolve(e.result) : Promise.resolve({
            success: !1,
            composerId: "",
            error: "Background subagent settled without a result",
            terminationReason: "error"
        }) : t?.aborted ? Promise.reject(new Error("aborted")) : new Promise((n, i)=>{
            let r = !1;
            const s = ()=>{
                t && l && t.removeEventListener("abort", l);
            }, o = (u)=>{
                r || (r = !0, s(), n(u));
            }, a = (u)=>{
                r || (r = !0, s(), i(u));
            }, c = {
                resolve: o,
                reject: a
            };
            let l;
            if (t && (l = ()=>{
                e.waiters?.delete(c) && a(new Error("aborted"));
            }, t.addEventListener("abort", l, {
                once: !0
            }), t.aborted)) {
                a(new Error("aborted"));
                return;
            }
            e.waiters || (e.waiters = new Set), e.waiters.add(c);
        });
    }
    cancelSubagentTree(e) {
        this._cancelSubagentTree(e, {
            markParentTaskBubbleCancelled: !0,
            abortLocalRuns: !0
        });
    }
    async stopSubagentTree(e) {
        const t = await this._loadSubagentTreeForStop(e);
        try {
            if (!Um(e)) {
                await this._interruptAgentHostSessionTree(e), this.cancelSubagentTree(e);
                return;
            }
            const i = await this._instantiationService.invokeFunction((r)=>r.get(Kv)).abortCloudAgent(e);
            this._cancelSubagentTree(e, {
                markParentTaskBubbleCancelled: !0,
                abortLocalRuns: !0,
                externallyPausedCloudAgentId: i === "server-confirmed" ? e : void 0
            });
        } finally{
            t.clear();
        }
    }
    async _loadSubagentTreeForStop(e) {
        const n = new Map, i = new Set, r = [
            e
        ];
        for(; r.length > 0 && i.size < 256;){
            const s = r.shift();
            if (i.has(s)) continue;
            i.add(s);
            let o = this._composerDataService.getHandleIfLoaded(s);
            if (!o && !Um(s)) try {
                o = await this._composerDataService.getComposerHandleById(s);
            } catch (c) {
                this._structuredLogService.warn("background_composer", "SubagentComposerService: failed to load subagent composer for stop cascade", {
                    composerId: s,
                    error: c instanceof Error ? c.message : String(c)
                });
                continue;
            }
            if (!o) continue;
            n.set(s, o);
            const a = this._composerDataService.getComposerData(o);
            for (const c of a?.subagentComposerIds ?? [])r.push(c);
        }
        return n;
    }
    async _interruptAgentHostSessionTree(e) {
        try {
            const { IAgentHostService: t } = await Promise.resolve().then(()=>(Q1o(), wTh));
            await this._instantiationService.invokeFunction((i)=>i.get(t)).interruptTurn(new ytt({
                sessionId: e,
                sessionTree: !0,
                reason: "Subagent tree stopped by user"
            }).toBinary());
        } catch (t) {
            this._structuredLogService.warn("background_composer", "SubagentComposerService: agent host session-tree interrupt failed", {
                composerId: e,
                error: t instanceof Error ? t.message : String(t)
            });
        }
    }
    _beginLocalRunAbort(e) {
        const t = this._localRunAborts.get(e);
        if (t?.signal.aborted) return t;
        const n = new AbortController;
        return this._localRunAborts.set(e, n), n;
    }
    _abortLocalRun(e) {
        const t = this._localRunAborts.get(e);
        if (t) {
            t.abort();
            return;
        }
        if (this._hasAbortableLocalRun(e)) return;
        const n = new AbortController;
        n.abort(), this._localRunAborts.set(e, n);
    }
    _consumeAbortedLocalRun(e) {
        return this._localRunAborts.get(e)?.signal.aborted ? (this._localRunAborts.delete(e), !0) : !1;
    }
    _releaseLocalRunAbort(e, t) {
        this._localRunAborts.get(e) === t && this._localRunAborts.delete(e);
    }
    _hasAbortableLocalRun(e) {
        const t = this._localRunAborts.get(e);
        if (t && !t.signal.aborted || this._backgroundAbortControllers.has(e)) return !0;
        const n = this._composerDataService.getHandleIfLoaded(e), i = n ? this._composerDataService.getComposerData(n)?.chatGenerationUUID : void 0;
        return i !== void 0 && this._aiService.streamingAbortControllers.has(i);
    }
    _cancelSubagentTree(e, t) {
        t.abortLocalRuns && !Um(e) && this._abortLocalRun(e);
        const n = this._backgroundPromises.get(e);
        t.markParentTaskBubbleCancelled && n && n.disposition !== "suppress" && (n.disposition = "cancel"), this._lifecycleStore.abort(e), this._lifecycleStore.clearQueuedResume(e), this._releaseLifecycleIfIdle(e);
        const i = this._abortComposerRun(e);
        Um(e) && e !== t.externallyPausedCloudAgentId && !i && this._pauseCloudSubagent(e);
        const r = this._composerDataService.getHandleIfLoaded(e);
        if (t.markParentTaskBubbleCancelled && this._markSubagentParentTaskBubbleCancelled(e, r), !r) return;
        const s = this._composerDataService.getComposerData(r);
        if (!s) return;
        const o = [
            ...s.subagentComposerIds ?? []
        ];
        this._composerDataService.rejectAllPendingUserDecisions(r), s.hasBlockingPendingActions && this._composerDataService.updateComposerDataSetStore(r, (a)=>{
            a("hasBlockingPendingActions", !1);
        });
        for (const a of o)this._cancelSubagentTree(a, {
            markParentTaskBubbleCancelled: t.markParentTaskBubbleCancelled,
            abortLocalRuns: t.abortLocalRuns === !0 || t.abortChildLocalRuns === !0,
            externallyPausedCloudAgentId: t.externallyPausedCloudAgentId
        }), this._lifecycleStore.clearQueuedResume(a), this._releaseLifecycleIfIdle(a);
    }
    interruptSubagentTree(e) {
        this._markBackgroundCompletionsSuppressedForTree(e), this._cancelSubagentTree(e, {
            markParentTaskBubbleCancelled: !1
        }), this._detachChatGenerationForInterruptedTree(e);
    }
    _detachChatGenerationForInterruptedTree(e) {
        const t = this._composerDataService.getHandleIfLoaded(e);
        t?.data.chatGenerationUUID !== void 0 && this._composerDataService.updateComposerDataSetStore(t, (i)=>{
            i("chatGenerationUUID", void 0);
        });
        const n = t ? this._composerDataService.getComposerData(t) : void 0;
        for (const i of n?.subagentComposerIds ?? [])this._detachChatGenerationForInterruptedTree(i);
    }
    async _appendPromptBubbles(e, t) {
        const n = zn(), i = zn(), r = RX(t.simulatedMsgReason, t.simulatedMessageMetadata);
        await this._composerDataService.appendComposerBubbles(e, [
            {
                ...Af(),
                bubbleId: n,
                type: Tr.HUMAN,
                text: t.prompt,
                richText: t.prompt,
                createdAt: new Date().toISOString(),
                ...t.toolCallId ? {
                    subagentSpawnTaskToolCallId: t.toolCallId
                } : {},
                ...r ?? {}
            },
            {
                ...Af(),
                bubbleId: i,
                type: Tr.AI,
                text: "",
                richText: "",
                createdAt: new Date().toISOString()
            }
        ]), this._linkParentToSubagent(t.toolCallId, e.data.composerId, t.parentComposerId);
    }
    async _prependRequiredGlobalCommandPrompt(e) {
        if (e.subagentType !== "best-of-n-runner" || e.prompt.includes("--- Cursor Command: worktree ---")) return e.prompt;
        const n = (await this._globalCommandsService.getGlobalCommands()).find((r)=>r.name === "worktree");
        return n?.content ? `${`<cursor_commands>
--- Cursor Command: worktree ---
${n.content}
--- End Command ---
</cursor_commands>`}

${e.prompt}` : e.prompt;
    }
    _deriveLineageFromParent(e) {
        if (!e) return {};
        const t = this._composerDataService.getComposerData(e), n = t?.chatGenerationUUID ?? t?.latestChatGenerationUUID;
        if (!n) return {};
        const i = t?.subagentInfo?.rootParentRequestId ?? t?.subagentInfo?.parentRequestId ?? n;
        return {
            parentRequestId: n,
            rootParentRequestId: i
        };
    }
    _assertCanForkDirectChild(e) {
        const { forkAgentId: t, parentComposerId: n, forkSourceHandle: i, newComposerId: r } = e, s = i.data.subagentInfo?.parentComposerId?.trim();
        if (!n) throw new iZ(`Fork requires parentConversationId (forkAgentId: ${t})`, r);
        if (n !== t) {
            if (!s) throw new iZ(`Fork source is not a direct child of parent ${n}: ${t}`, r);
            if (s !== n) throw new iZ(`Fork source ${t} is not a direct child of parent ${n}`, r);
        }
    }
    async _runSubagent(e, t, n) {
        const i = performance.now(), r = t.data.composerId;
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
            generationUUID: zn(),
            metadata: {
                type: "composer",
                textDescription: e.prompt,
                isNAL: !0
            }
        }), c = ()=>{
            a.abort();
        };
        s.signal.addEventListener("abort", c), s.signal.aborted && a.abort();
        let l, u;
        e.abortSignal && (l = ()=>{
            a.abort();
        }, e.abortSignal.addEventListener("abort", l));
        try {
            var h = [];
            try {
                const f = t.data.subagentInfo?.parentComposerId ?? e.parentConversationId, v = f ? this._composerDataService.getHandleIfLoaded(f) : void 0, b = v ? this._composerDataService.getComposerData(v)?.modelConfig?.maxMode ?? !1 : !1, y = t.data.modelConfig, T = v ? this._composerDataService.getComposerData(v)?.modelConfig : void 0, E = (()=>{
                    const le = y?.modelName?.trim() ?? "";
                    if (le.length > 0 && le !== "default") return le;
                    const ye = y?.selectedModels?.[0]?.modelId?.trim() ?? "";
                    if (ye.length > 0 && ye !== "default") return ye;
                })(), A = (e.modelId ?? "").trim(), R = (()=>{
                    const le = new Set, ye = (_e)=>{
                        const me = _e?.trim() ?? "";
                        me.length > 0 && me !== "default" && le.add(me);
                    };
                    ye(T?.modelName);
                    for (const _e of T?.selectedModels ?? [])ye(_e.modelId);
                    return [
                        ...le
                    ];
                })(), D = e.resumeAgentId !== void 0 && A.length > 0 && R.some((le)=>A === le || A.startsWith(`${le}-`)), N = e.resumeAgentId !== void 0 && E !== void 0 && (A.length === 0 || D) ? E : e.modelId, F = (typeof this._modelConfigService.fixupModelConfigForCurrentFlag == "function" ? this._modelConfigService.fixupModelConfigForCurrentFlag({
                    modelName: N,
                    maxMode: b
                }) : void 0)?.selectedModels ?? [], H = y?.selectedModels ?? [], $ = F.length > 0 && H.length === F.length && H.every((le, ye)=>le.modelId === F[ye]?.modelId), W = W1h($ ? H : F, F[0]?.modelId ?? N, A === N ? e.modelParameters : void 0), G = W.length > 0 ? {
                    maxMode: b,
                    selectedModels: W.map((le)=>({
                            modelId: le.modelId,
                            parameters: (le.parameters ?? []).map((ye)=>({
                                    ...ye
                                }))
                        }))
                } : {
                    modelName: N,
                    maxMode: b
                }, q = W[0];
                y?.maxMode === b && (q !== void 0 ? y?.selectedModels?.[0]?.modelId === q.modelId && WZv(y?.selectedModels?.[0]?.parameters, q.parameters) : y?.modelName === N && (y?.selectedModels?.length ?? 0) === 0) || (typeof this._modelConfigService.setModelConfigForComposer == "function" ? this._modelConfigService.setModelConfigForComposer(t, G) : this._composerDataService.updateComposerDataSetStore(t, (le)=>{
                    le("modelConfig", {
                        ...y ?? {},
                        ...G,
                        ...W.length > 0 ? {} : {
                            selectedModels: void 0
                        }
                    });
                }));
                const X = new xf({
                    modelName: N,
                    maxMode: b,
                    ...EQv(e.credentials)
                }), Z = this._composerDataService.getComposerData(t)?.conversationState ?? new Hm, K = this._composerDataService.getLoadedConversation(t).length;
                this._composerDataService.updateComposerDataSetStore(t, (le)=>{
                    le("status", "generating"), le("chatGenerationUUID", o), le("latestChatGenerationUUID", o);
                });
                const J = nvh(e.context ?? qh(), this._structuredLogService, this._metricsService), ne = ATh(h, S_(J.withName("subagent.request"))), ee = tCt(ne.ctx, {
                    requestId: o,
                    composerId: r
                }), se = this._instantiationService.invokeFunction((le)=>le.get(q6));
                u = this._instantiationService.invokeFunction((le)=>nwo({
                        composerEventService: le.get(Zy),
                        isGlass: !!le.get(Yi).isGlass,
                        generationUUID: o,
                        workspaceIdentifier: pS(this._workspaceContextService.getWorkspace()),
                        origin: "subagent"
                    }));
                const re = e.selectedContext === void 0 ? void 0 : await (async ()=>{
                    const [{ processClientSubagentVideoAttachments: le }, { IAgentClientService: ye }, { IEverythingProviderService: _e }] = await Promise.all([
                        Promise.resolve().then(()=>(aSh(), tSh)),
                        Promise.resolve().then(()=>(Mtt(), R0h)),
                        Promise.resolve().then(()=>(xX(), uFd))
                    ]), me = this._workspaceContextService.getWorkspace(), Ce = me.folders.map((je)=>je.uri.fsPath), xe = (await $$(me, this._pathService)).fsPath, Le = [];
                    xe.length > 0 && Le.push(Jk(xe, "uploads"), Jk(xe, "attachments"));
                    for (const je of Ce)je.length > 0 && Le.push(Jk(je, "uploads"), Jk(je, "attachments"));
                    const Be = v ? iSh(this._composerDataService.getLoadedConversation(v)) : [];
                    return this._instantiationService.invokeFunction((je)=>le({
                            ctx: ee,
                            subagentType: e.subagentType,
                            selectedContext: e.selectedContext,
                            conversationId: e.parentConversationId,
                            privacyMode: je.get(na).granularPrivacyModeRawEnum(),
                            experimentService: this._experimentService,
                            fileService: this._fileService,
                            agentClientService: je.get(ye),
                            everythingProviderService: je.get(_e),
                            notificationService: je.get(di),
                            structuredLogService: this._structuredLogService,
                            allowedPrefixes: Le,
                            userAttachedVideoPaths: Be
                        }));
                })();
                u.markSent(), await se.getAgentStreamResponse(ee, {
                    modelDetails: X,
                    generationUUID: o,
                    composerHandle: t,
                    abortController: a,
                    startTime: i,
                    conversationState: Z,
                    selectedContextOverride: re,
                    parentAgentToolCallIdOverride: e.toolCallId
                }), a.signal.throwIfAborted(), t.data.chatGenerationUUID === o && (this._composerDataService.updateComposerDataSetStore(t, (le)=>{
                    le("status", n?.deferCompletedStatus ? "generating" : "completed"), le("chatGenerationUUID", void 0), le("generatingBubbleIds", []);
                }), this._terminationReasonByComposerId.set(r, "completed")), this._aiService.streamingAbortControllers.delete(o);
                const ce = this._extractFinalAssistantMessage(t), de = this._countToolCallsSince(t, K);
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
                    finalMessage: ce,
                    toolCallCount: de,
                    terminationReason: "completed"
                };
            } catch (f) {
                var p = f, g = !0;
            } finally{
                RTh(h, p, g);
            }
        } catch (f) {
            const v = t.data.chatGenerationUUID === o;
            v && this._composerDataService.updateComposerDataSetStore(t, (y)=>{
                y("status", "aborted"), y("chatGenerationUUID", void 0), y("generatingBubbleIds", []);
            }), this._aiService.streamingAbortControllers.delete(o);
            const b = a.signal.aborted ? "aborted" : "error";
            return v && this._terminationReasonByComposerId.set(r, b), u?.finish({
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
                terminationReason: b
            } : {
                success: !1,
                composerId: r,
                error: f instanceof Error ? f.message : String(f),
                terminationReason: b
            };
        } finally{
            if (s.signal.removeEventListener("abort", c), this._releaseLocalRunAbort(r, s), this._aiService.removeInprogressAIGeneration(o), e.abortSignal && l && e.abortSignal.removeEventListener("abort", l), e.environment !== pse.CLOUD && n?.clearAgentStoreInheritanceOnFinish !== !1) try {
                await this._instantiationService.invokeFunction(async (f)=>{
                    const v = f.get($n);
                    await uSh({
                        commandService: v,
                        experimentService: this._experimentService,
                        childConversationId: r
                    });
                });
            } catch  {}
        }
    }
    async runWithContinuation(e, t, n) {
        const i = t.data.composerId, r = n.maxLoops > 0 ? n.maxLoops : 1 / 0, s = {
            ...e,
            runInBackground: !1
        };
        let o;
        this._composerDataService.updateComposerDataSetStore(t, (a)=>{
            a("isContinuationInProgress", !0);
        });
        try {
            let a = await this._runContinuationLoop(s, t, n, r);
            if (n.collectBackgroundChildren && a.success) {
                this._markComposerAsGenerating(t);
                const c = 500;
                for(let l = 0; l < c; l++){
                    if (e.abortSignal.aborted) {
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
                    const h = this._buildChildrenCompletedMessage(u, n.childrenCompletedMessageTemplate);
                    if (await this._appendPromptBubbles(t, {
                        prompt: h,
                        toolCallId: e.toolCallId,
                        parentComposerId: e.parentConversationId,
                        ...this._getContinuationSimulatedMessageFields(n)
                    }), a = await this._runContinuationLoop({
                        ...s,
                        prompt: h,
                        resumeAgentId: i
                    }, t, n, r), !a.success) break;
                }
            }
            return o = a, a;
        } catch (a) {
            return o = {
                success: !1,
                composerId: i,
                error: a instanceof Error ? a.message : String(a),
                terminationReason: e.abortSignal.aborted ? "aborted" : "error"
            }, o;
        } finally{
            if (this._finalizeComposerAfterContinuation(t, o ?? {
                success: !1,
                composerId: i,
                error: "Subagent continuation exited unexpectedly",
                terminationReason: "error"
            }), e.environment !== pse.CLOUD) try {
                await this._instantiationService.invokeFunction(async (a)=>{
                    const c = a.get($n);
                    await uSh({
                        commandService: c,
                        experimentService: this._experimentService,
                        childConversationId: i
                    });
                });
            } catch  {}
        }
    }
    async _runContinuationLoop(e, t, n, i) {
        const r = t.data.composerId;
        let s = 0, o, a;
        for(let c = 0; c < i; c++){
            if (c === 0) a = await this._runSubagent(e, t, {
                deferCompletedStatus: !0,
                clearAgentStoreInheritanceOnFinish: !1
            });
            else {
                if (!await TQv(e.abortSignal, n.continuationRoundDelayMs)) return {
                    success: !1,
                    composerId: r,
                    error: "Aborted while waiting for next continuation round",
                    terminationReason: "aborted"
                };
                const p = this._computeContinuationNudge(n, s, o);
                await this._appendPromptBubbles(t, {
                    prompt: p,
                    toolCallId: e.toolCallId,
                    parentComposerId: e.parentConversationId,
                    ...this._getContinuationSimulatedMessageFields(n)
                }), a = await this._runSubagent({
                    ...e,
                    prompt: p,
                    resumeAgentId: r
                }, t, {
                    deferCompletedStatus: !0,
                    clearAgentStoreInheritanceOnFinish: !1
                });
            }
            if (!a.success) return a;
            const l = a.toolCallCount ?? 0, u = a.finalMessage ?? "";
            if (o && u.includes(o)) break;
            if (l > 0) {
                this._markComposerAsGenerating(t), s = 0, o = void 0;
                continue;
            }
            s++, s >= n.idleThreshold ? o = `DONE_${this._randomHex(4)}` : o = void 0, this._markComposerAsGenerating(t);
        }
        return a ?? {
            success: !1,
            composerId: r,
            error: "No iterations ran",
            terminationReason: "error"
        };
    }
    _markComposerAsGenerating(e) {
        this._composerDataService.updateComposerDataSetStore(e, (t)=>{
            t("status", "generating");
        });
    }
    _finalizeComposerAfterContinuation(e, t) {
        if (e.data.chatGenerationUUID !== void 0) return;
        const n = t.terminationReason ?? (t.success ? "completed" : "error");
        this._terminationReasonByComposerId.set(e.data.composerId, n), this._composerDataService.updateComposerDataSetStore(e, (i)=>{
            i("status", n === "completed" ? "completed" : "aborted"), i("chatGenerationUUID", void 0), i("generatingBubbleIds", []), i("isContinuationInProgress", !1);
        });
    }
    _computeContinuationNudge(e, t, n) {
        return t >= e.idleThreshold && n ? e.escapeMessageTemplate.replace("{idle_count}", String(t)).replace("{escape_token}", n) : e.nudgeMessage;
    }
    _getContinuationSimulatedMessageFields(e) {
        const t = e, n = {};
        return t.simulatedMsgReason !== void 0 && (n.simulatedMsgReason = t.simulatedMsgReason), t.simulatedMessageMetadata !== void 0 && (n.simulatedMessageMetadata = t.simulatedMessageMetadata), n;
    }
    async _startQueuedResumeRunFromLifecycle(e, t, n) {
        const i = this._lifecycleStore.getState(e);
        if (i.status === "idle") {
            this._dropDeferredSubagentCompletion(e, t);
            return;
        }
        if (i.runId !== t) {
            this._dropDeferredSubagentCompletion(e, t);
            return;
        }
        const r = await this._startQueuedResumeRun(e, t, n);
        if (r.started) {
            this._dropDeferredSubagentCompletion(e, t);
            return;
        }
        const s = this._lifecycleStore.getState(e);
        if (s.status === "idle") {
            this._dropDeferredSubagentCompletion(e, t);
            return;
        }
        if (s.runId !== t) {
            this._dropDeferredSubagentCompletion(e, t);
            return;
        }
        const o = this._takeDeferredSubagentCompletion(e, t), a = r.error ? {
            success: !1,
            composerId: e,
            error: r.error,
            terminationReason: "error"
        } : o;
        a && await this._enqueueSubagentCompletion(a), this._lifecycleStore.finishRun(e, t), this._releaseLifecycleIfIdle(e);
    }
    async _startQueuedResumeRun(e, t, n) {
        const i = this._composerDataService.getHandleIfLoaded(e) ?? await this._composerDataService.getComposerHandleById(e);
        if (!i) {
            const r = `Subagent composer not found for queued resume: ${e}`;
            return this._notifyQueuedResumeFailure(n, r), {
                started: !1,
                error: r
            };
        }
        try {
            const r = this._resolveTaskDescriptionTitle({
                resumeAgentId: e,
                toolCallId: n.runToolCallId,
                parentConversationId: n.parentConversationId
            }), s = xTh(i.data.subagentInfo, n.runToolCallId);
            (r || s) && this._composerDataService.updateComposerDataSetStore(i, (u)=>{
                r && u("name", r), s && u("subagentInfo", s);
            }), await this._appendPromptBubbles(i, {
                prompt: n.prompt,
                toolCallId: n.runToolCallId,
                parentComposerId: n.parentConversationId
            });
            const o = this._lifecycleStore.getState(e);
            if (o.status === "idle") return {
                started: !1
            };
            if (o.runId !== t) return {
                started: !1
            };
            const a = new AbortController, c = {
                abortSignal: a.signal,
                toolCallId: n.runToolCallId,
                parentConversationId: n.parentConversationId,
                subagentType: n.subagentType,
                modelId: n.modelId,
                credentials: n.credentials,
                prompt: n.prompt,
                readonly: n.readonly,
                resumeAgentId: e,
                runInBackground: !0,
                continuationConfig: n.continuationConfig,
                selectedContext: n.selectedContext
            }, l = (n.continuationConfig ? this.runWithContinuation(c, i, n.continuationConfig) : this.runSubagentWithHandle(c, i)).catch((u)=>{
                const h = u instanceof Error ? u.message : String(u);
                return {
                    success: !1,
                    composerId: e,
                    error: h,
                    terminationReason: "error"
                };
            });
            return this.registerBackgroundPromise({
                composerId: e,
                promise: l,
                abortController: a
            }), l.then((u)=>{
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
    _syncBackgroundWorkRegistration(e, t = EPd()) {
        if (t.status === "running" || t.status === "runningWithQueuedResume") {
            const n = this._composerDataService.getHandleIfLoaded(e), i = n?.data.subagentInfo?.parentComposerId ?? e, r = this._resolveBackgroundSubagentTitle(n) ?? "Background subagent", s = this._backgroundWorkService.backgroundWorkItems.value.find((o)=>o.kind === "subagent" && o.id === e)?.startTimeMs;
            this._backgroundWorkService.upsertSubagentWork({
                id: e,
                kind: "subagent",
                composerId: i,
                title: r,
                startTimeMs: s ?? Date.now(),
                subagentComposerId: e
            });
            return;
        }
        this._backgroundWorkService.clearSubagentWork(e);
    }
    _resolveBackgroundSubagentTitle(e) {
        const t = e?.data.subagentInfo?.toolCallId, n = e?.data.subagentInfo?.parentComposerId, i = this._resolveBackgroundSubagentTitleFromToolCallId(t, n);
        if (i) return i;
        const r = nZ(e?.data.name);
        if (r && r !== e?.data.composerId) return r;
    }
    _resolveBackgroundSubagentTitleFromToolCallId(e, t) {
        if (e) {
            const n = this._scanLoadedComposersForParentBubbleByToolCallId(e, t), r = n?.toolFormer.getBubbleData(n.bubbleId)?.params, s = this._extractTaskTitleFromParams(r);
            if (s) return s;
            const o = typeof r?.prompt == "string" ? r.prompt.trim() : typeof r?.value?.prompt == "string" ? r.value.prompt.trim() : void 0;
            if (o && o.length > 0) return ry(o)[0];
        }
    }
    _releaseLifecycleIfIdle(e) {
        this._backgroundPromises.has(e) || this._lifecycleStore.getState(e).status !== "idle" || this._lifecycleStore.release(e);
    }
    _abortComposerRun(e) {
        let t = !1;
        const n = this._backgroundAbortControllers.get(e);
        n && (n.abortController.abort(), this._backgroundAbortControllers.delete(e), t = !0);
        const i = this._composerDataService.getHandleIfLoaded(e);
        if (!i) return t;
        const r = this._composerDataService.getComposerData(i);
        if (!r?.chatGenerationUUID) return t;
        const s = this._aiService.streamingAbortControllers.get(r.chatGenerationUUID);
        return s && (s.abort(), this._aiService.streamingAbortControllers.delete(r.chatGenerationUUID), t = !0), t;
    }
    async _pauseCloudSubagent(e) {
        try {
            await U1h(this._aiService.backgroundComposerSyncClient, e);
        } catch (t) {
            this._structuredLogService.warn("background_composer", "SubagentComposerService: failed to pause cloud subagent", {
                composerId: e,
                error: t instanceof Error ? t.message : String(t)
            });
        }
    }
    _notifyQueuedResumeFailure(e, t) {
        for (const n of e.toolCallIds)this.notifyBackgroundFailure({
            toolCallId: n,
            error: t,
            parentComposerId: e.parentConversationId
        });
    }
    async _findChildEntries(e) {
        const t = [];
        for (const [n, i] of this._backgroundPromises){
            const r = this._composerDataService.getHandleIfLoaded(n) ?? await this._composerDataService.getComposerHandleById(n);
            r && r.data.subagentInfo?.parentComposerId === e && t.push({
                childId: n,
                entry: i
            });
        }
        return t;
    }
    async _collectAvailableChildren(e) {
        const t = [], n = await this._findChildEntries(e);
        if (n.length === 0) return t;
        let i = n.filter((s)=>s.entry.settled);
        const r = n.filter((s)=>!s.entry.settled);
        i.length === 0 && r.length > 0 && (await Promise.race(r.map((s)=>s.entry.promise.catch(()=>{}))), i = n.filter((s)=>s.entry.settled));
        for (const s of i){
            const o = s.entry.result ?? await s.entry.promise;
            this._backgroundPromises.get(s.childId) === s.entry && this._backgroundPromises.delete(s.childId), t.push({
                agentId: o.composerId ?? s.childId,
                success: o.success,
                finalMessage: o.success ? o.finalMessage ?? "" : o.error ?? "Unknown error"
            });
        }
        return t;
    }
    _buildChildrenCompletedMessage(e, t) {
        const n = e.map((i)=>{
            const r = i.success ? "SUCCESS" : "FAILED";
            return `## Agent ${i.agentId} -- ${r}

${i.finalMessage}`;
        }).join(`

---

`);
        return t.replace("{summaries}", n);
    }
    _randomHex(e) {
        const t = new Uint8Array(e);
        return crypto.getRandomValues(t), Array.from(t, (n)=>n.toString(16).padStart(2, "0")).join("");
    }
    async _resolveAndEnsureTranscriptFile(e) {
        try {
            const t = this._workspaceContextService.getWorkspace(), n = await XUe(t, this._pathService), r = (await this._composerDataService.getComposerHandleById(e))?.data.subagentInfo?.parentComposerId, s = r ? Y8v({
                transcriptsDir: n,
                parentConversationId: r,
                conversationId: e
            }) : Bdh(n, e);
            try {
                const o = Ee.joinPath(s, "..");
                await this._fileService.createFolder(o);
            } catch  {}
            try {
                await this._fileService.exists(s) || await this._fileService.writeFile(s, wi.fromString(""));
            } catch  {}
            return s.fsPath;
        } catch  {
            return;
        }
    }
    _countToolCallsSince(e, t) {
        const n = this._composerDataService.getLoadedConversation(e);
        let i = 0;
        for(let r = t; r < n.length; r++)n[r].toolFormerData?.tool && i++;
        return i;
    }
    _extractFinalAssistantMessage(e) {
        const t = this._composerDataService.getLoadedConversation(e);
        return fCo(t);
    }
    resolveTaskDescriptionTitle(e) {
        return this._resolveTaskDescriptionTitle({
            toolCallId: e.toolCallId,
            parentConversationId: e.parentComposerId
        });
    }
    async resolveTaskLaunchMetadata(e) {
        let t = this._scanLoadedComposersForParentBubbleByToolCallId(e.toolCallId, e.parentComposerId);
        if (!t) {
            if (!await this._composerDataService.getComposerHandleById(e.parentComposerId)) return {};
            t = this._scanLoadedComposersForParentBubbleByToolCallId(e.toolCallId, e.parentComposerId);
        }
        if (!t) return {};
        const n = await t.toolFormer.getHydratedBubbleByToolCallId(e.toolCallId);
        return this._extractTaskLaunchMetadataFromParams(n?.bubbleData.params);
    }
    _extractTaskLaunchMetadataFromParams(e) {
        let t = e;
        if (typeof t == "object" && t !== null && "value" in t && (t = t.value), typeof t != "object" || t === null) return {};
        const n = "model" in t && typeof t.model == "string" ? t.model.trim() : "", i = "name" in t && typeof t.name == "string" ? t.name.trim() : "", r = "subagentType" in t && typeof t.subagentType == "string" ? t.subagentType.trim() : "", s = i || (r !== "unspecified" && r !== "custom" && r !== "unknown" ? r : "");
        return {
            ...n ? {
                modelId: n
            } : {},
            ...s ? {
                subagentTypeName: s
            } : {}
        };
    }
    _resolveTaskDescriptionTitle(e) {
        const t = this._scanLoadedComposersForParentBubbleByToolCallId(e.toolCallId, e.parentConversationId), n = t?.toolFormer.getBubbleData(t.bubbleId);
        return this._extractTaskTitleFromParams(n?.params);
    }
    _extractTaskTitleFromParams(e) {
        const t = e, n = typeof t?.description == "string" ? t.description.trim() : typeof t?.value?.description == "string" ? t.value.description.trim() : void 0;
        if (!(!n || n.length === 0)) return n;
    }
    _triggerRenameComposer(e) {
        this._instantiationService.invokeFunction((n)=>n.get(OR)).renameComposerIfNeeded(e).catch((n)=>{
            console.error("[subagentComposerService] Error renaming subagent composer:", n);
        });
    }
    linkParentToSubagent(e, t, n) {
        this._linkParentToSubagent(e, t, n);
    }
    async linkParentToSubagentWhenReady(e) {
        const t = nZ(e.toolCallId), n = nZ(e.subagentComposerId), i = nZ(e.parentComposerId);
        if (!t || !n || !i || e.timeoutMs <= 0) return !1;
        let r = !1;
        const s = async ()=>{
            const u = this._composerDataService.getHandleIfLoaded(i) ?? await this._composerDataService.getComposerHandleById(i);
            if (r) return !1;
            u && this._composerDataService.loadComposerCapabilities?.(u);
            const h = this._scanLoadedComposersForParentBubbleByToolCallId(t, i);
            if (!h) return !1;
            const p = await h.toolFormer.getHydratedBubbleByToolCallId(t);
            return p?.bubbleData.tool !== nt.TASK_V2 || p.bubbleData.toolCallId !== t || r ? !1 : this._linkParentToSubagentVerified(t, n, i);
        };
        let o;
        const a = new Promise((u)=>{
            o = u;
        }), c = this._pendingApprovalRegistry.onBubbleCreated((u)=>{
            u.composerId === i && u.toolCallId === t && o?.();
        }), l = async ()=>await s() ? !0 : (this._pendingApprovalRegistry.hasCreatedBubble({
                composerId: i,
                toolCallId: t
            }) || await a, s());
        try {
            return await Hp(l().catch(()=>!1), e.timeoutMs, ()=>{
                r = !0;
            }) === !0;
        } finally{
            c.dispose();
        }
    }
    async findSubagentForToolCall(e, t) {
        const n = t?.trim();
        let i = this._scanLoadedComposersForParentBubbleByToolCallId(e, n);
        !i && n && await this._composerDataService.getComposerHandleById(n) && (i = this._scanLoadedComposersForParentBubbleByToolCallId(e, n));
        const r = i ? (await i.toolFormer.getHydratedBubbleByToolCallId(e))?.bubbleData : void 0, s = [], o = r?.additionalData?.subagentComposerId, a = [];
        for (const c of this._composerDataService.getLoadedComposers()){
            const l = this._composerDataService.getHandleIfLoaded(c);
            l?.data.subagentInfo?.toolCallId === e && (n && l.data.subagentInfo?.parentComposerId !== n || a.push(c));
        }
        if (n && a.length > 0) s.push(...a);
        else {
            o && s.push(o);
            for (const c of a)c !== o && s.push(c);
        }
        for (const c of s)if (await this._composerDataService.getComposerHandleById(c)) return c;
    }
    _linkParentToSubagent(e, t, n) {
        const i = this._scanLoadedComposersForParentBubbleByToolCallId(e, n);
        if (!i) return;
        const r = i.toolFormer.getBubbleData(i.bubbleId), s = r?.tool === nt.TASK_V2 ? r.additionalData : void 0, o = s?.subagentComposerId?.trim(), a = ITh(s?.supersededSubagentComposerIds, o, t);
        i.toolFormer.setBubbleData(i.bubbleId, {
            additionalData: {
                subagentComposerId: t,
                ...a ? {
                    supersededSubagentComposerIds: a
                } : {}
            }
        }), this._composerDataService.updateComposerDataSetStore(i.parentHandle, (c)=>{
            c("subagentComposerIds", (l)=>{
                const u = l ?? [];
                return u.includes(t) ? u : [
                    ...u,
                    t
                ];
            });
        });
    }
    _linkParentToSubagentVerified(e, t, n) {
        const i = this._scanLoadedComposersForParentBubbleByToolCallId(e, n);
        if (!i) return !1;
        const r = i.toolFormer.getBubbleData(i.bubbleId), s = r?.tool === nt.TASK_V2 ? r.additionalData : void 0, o = ITh(s?.supersededSubagentComposerIds, s?.subagentComposerId?.trim(), t);
        try {
            i.toolFormer.setBubbleDataOrThrow(i.bubbleId, {
                additionalData: {
                    subagentComposerId: t,
                    ...o ? {
                        supersededSubagentComposerIds: o
                    } : {}
                }
            });
        } catch  {
            return !1;
        }
        const a = i.toolFormer.getBubbleData(i.bubbleId);
        return a?.tool !== nt.TASK_V2 || a.toolCallId !== e || a.additionalData?.subagentComposerId !== t ? !1 : (this._composerDataService.updateComposerDataSetStore(i.parentHandle, (c)=>{
            c("subagentComposerIds", (l)=>{
                const u = l ?? [];
                return u.includes(t) ? u : [
                    ...u,
                    t
                ];
            });
        }), !0);
    }
    _scanLoadedComposersForParentBubbleByToolCallId(e, t) {
        const n = t?.trim(), i = n ? [
            n
        ] : this._composerDataService.getLoadedComposers();
        for (const r of i){
            const s = this._composerDataService.getHandleIfLoaded(r);
            if (!s) continue;
            const o = this._composerDataService.getComposerCapability(s, ps.TOOL_FORMER);
            if (!o) continue;
            const a = o.getBubbleIdByToolCallId(e);
            if (a) return {
                parentHandle: s,
                bubbleId: a,
                toolFormer: o
            };
        }
    }
    _scanLoadedComposersForParentBubbleBySubagentId(e) {
        for (const t of this._composerDataService.getLoadedComposers()){
            const n = this._composerDataService.getHandleIfLoaded(t);
            if (!n) continue;
            const i = n.data.conversationMap ?? {}, r = n.data.fullConversationHeadersOnly.map((c)=>c.bubbleId).filter((c)=>typeof c == "string"), o = (r.length > 0 ? r : Object.keys(i)).slice().reverse().find((c)=>{
                const l = i[c];
                return l ? l.toolFormerData?.additionalData?.subagentComposerId === e : !1;
            });
            if (!o) continue;
            const a = this._composerDataService.getComposerCapability(n, ps.TOOL_FORMER);
            if (a) return {
                parentHandle: n,
                bubbleId: o,
                toolFormer: a
            };
        }
    }
    _resolveInheritedGitWorktree(e) {
        const t = e.parentConversationId.trim(), n = t ? this._composerDataService.getHandleIfLoaded(t) : void 0;
        if (!n) return;
        const i = this._composerDataService.getComposerData(n);
        if (i?.gitWorktree) return i.gitWorktree;
        const r = this._composerDataService.getRootComposerId(n.data.composerId);
        if (r === n.data.composerId) return;
        const s = this._composerDataService.getHandleIfLoaded(r);
        return s ? this._composerDataService.getComposerData(s)?.gitWorktree : void 0;
    }
}, VQi = ie([
    yoe(0, Zs),
    yoe(1, jp),
    yoe(2, QS),
    yoe(3, _t),
    yoe(4, Xh),
    yoe(5, vp),
    yoe(6, Jn),
    yoe(7, zl),
    yoe(8, Jj),
    yoe(9, Kr),
    yoe(10, Ii),
    yoe(11, bOn),
    yoe(12, uCt)
], VQi), mn(wtt, VQi, 1);

}
