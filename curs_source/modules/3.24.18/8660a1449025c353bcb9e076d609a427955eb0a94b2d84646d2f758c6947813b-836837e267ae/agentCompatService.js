import { Dng, Izt, UTt, trl, uag } from "./Aeg.js";
import { Ga, Pn, Qe, Tr, da, m1, st } from "./Iwo.js";
import { L3, x0 } from "./SZu.js";
import { tMe } from "./Sol.js";
import { Bbk, Dbk, Ebk, Ell, Fbk, Jss, Obk, Pbk, Rug, ehg, ihg, nhg, rhg, shg, sme, thg, uos, xbk, xll } from "./Ycg.js";
import { $ze, Q4e } from "./agentClientService.js";
import { FEi, xal } from "./agentMigrationFailureClassifier.js";
import { Tbk } from "./agentModelRequestRouting.js";
import { YTt, wAn } from "./agentResponseAdapter.js";
import { ECe } from "./agentStoreScopePaths.js";
import { kat } from "./agentStreamMetadataKey.js";
import { zTi } from "./agentTraceContext.js";
import { FFo, J4t, MFo, MI, Nmn, Ove, PFo, WSr, Z4t, d5e, fY, iz, ju, nf, t0 } from "./agent_pb.js";
import { Dc, jl } from "./aiService.js";
import { Ebe, c_ } from "./async.cursor.js";
import { II, qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { ZD, jO } from "./backgroundWorkRegistry.js";
import { sll } from "./blobEncryptionKeyHeader.js";
import { _ze, ixn } from "./browser_2.ts";
import { Yse, bs, sd } from "./chat_pb.js";
import { Ibk } from "./checkpointHandlerOwnership.js";
import { Lk, Nw } from "./cloudEnvironmentTemplateService.js";
import { rU } from "./cloudProjects.js";
import { nr, rs } from "./commands.js";
import { KD, zW } from "./composerBlobStore.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { or, yi } from "./configuration.js";
import { A_t, pa } from "./constants_8.js";
import { Aze, erl } from "./conversationActionManager.js";
import { TEi, ess } from "./conversationClassificationService.js";
import { a0, xA } from "./cursorRules.js";
import { fo, ps } from "./environmentService.js";
import { BO } from "./errors.ts";
import { Cr, _s } from "./experimentService.js";
import { Mbk } from "./explicitSubagentModels.js";
import { Cal, Rss } from "./fileAppendService.js";
import { is, ms } from "./files.js";
import { Ens, bze, mZm, nat, sle, wX } from "./gYa.js";
import { Pug } from "./ideClientCapabilities.js";
import { nl } from "./index.ts";
import { hX } from "./index_12.ts";
import { uZm } from "./index_15.ts";
import { Ng } from "./index_3.ts";
import { OT } from "./index_5.ts";
import { It, dn } from "./instantiation.js";
import { EKa, wKa } from "./interactiveChildInbox.js";
import { $v, Dh, OSi, SS, Xp, dpe, fJ, iie } from "./ipa.js";
import { Uze, bat } from "./knowledgeBaseService.js";
import { ub } from "./localAgentRepository.js";
import { Ji, Li } from "./log.js";
import { gV } from "./mcpService.js";
import { N0 } from "./mcpServiceTypes.js";
import { eg, of } from "./modelConfigServiceTypes.js";
import { Rd, ih } from "./pathService.js";
import { rG } from "./populateConversationFromState.js";
import { au, bE } from "./privacy_mode_pb.js";
import { hAe } from "./project-subagents.ts";
import { uEi } from "./projectLineage.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { fgk } from "./releaseSessionCancelHandle.js";
import { Nh, Sg } from "./remoteAgentService.js";
import { uGt, wki } from "./request-context-blob.ts";
import { nrl } from "./requestedModelForComposer.js";
import { K4t, Rj, gY } from "./selected_context_pb.js";
import { Q0 } from "./sentry.js";
import { PI } from "./side-chats.ts";
import { Zi, ki } from "./storage_2.js";
import { s7 } from "./trace.js";
import { __ } from "./tracing_2.js";
import { Nbk } from "./transcriptAppend.js";
import { M4e, ctl, utl } from "./transcriptPaths.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { Hu, Mg } from "./utils_pb.js";
import { dY, i5e, n5e } from "./utils_pb_2.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
import { Lh, Qg } from "./workspaceMetadataService.js";
import { C2 } from "./workspaceProjectPaths.js";
import { HW1, Mot, WW1, aJr, k0i, qW1 } from "./yBp.js";
var All, Rll, A6, Pll, Mll, Dll, ohg, ahg, lhg, eIi, Xbe;
export { A6, All, Dll, Mll, Pll, Rll, Xbe, ahg, eIi, lhg, ohg };
var __wakaru_tIi_initialized = false;
export function tIi() {
if (__wakaru_tIi_initialized) return;
__wakaru_tIi_initialized = true;
"use strict";
E(), hX(), OT(), _ze(), Ng(), ju(), nl(), Rj(), i5e(), sd(), bE(), Hu(), qn(), c_(), Ga(), pa(), Qe(), fgk(), rs(), fn(), Xo(), or(), ms(), It(), Ji(), Zi(), Q0(), __(), Sr(), ess(), zW(), Pl(), uEi(), Dc(), gV(), Rs(), a0(), fo(), _s(), bat(), of(), nrl(), ih(), Sg(), C2(), Cal(), ub(), el(), wu(), FEi(), rU(), Nw(), Lh(), $ze(), Pug(), sll(), sme(), zTi(), wAn(), Tbk(), Ibk(), erl(), Mbk(), M4e(), rG(), EKa(), ECe(), Nbk(), jO(), All = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), Rll = (t)=>{
    throw TypeError(t);
}, A6 = (t, e)=>(n, i)=>e(n, i, t), Pll = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && Rll("Object expected");
        var i, r;
        n && (i = e[All("asyncDispose")]), i === void 0 && (i = e[All("dispose")], n && (r = i)), typeof i != "function" && Rll("Object not disposable"), r && (i = function() {
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
}, Mll = (t, e, n)=>{
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
}, Dll = iie("@anysphere/agent-compat-service"), ohg = "User aborted/interrupted manually.", ahg = class {
    constructor(t){
        this.agentClientService = t;
    }
    executeTurn(t) {
        return this.agentClientService.run(t.ctx, t.conversationState, t.action, t.modelDetails, t.interactionListener, t.resourceAccessor, t.blobStore, t.conversationActionManager, t.checkpointHandler, t.mcpTools, t.runOptions);
    }
}, lhg = class {
    constructor(t, e, n, i, r){
        this.conversationId = t, this.priorConversationState = e, this.onCheckpoint = n, this.transcriptWriter = i, this.onTranscriptWritten = r, this.writeDelayer = new II(1e3), this.hasWrittenOnce = !1, this.handleCheckpoint = async (s, o)=>{
            try {
                this.onCheckpoint && await this.onCheckpoint(o), this.priorConversationState = o, this.transcriptWriter && (this.latestWriteState = {
                    ctx: s,
                    checkpoint: o
                }, this.hasWrittenOnce || (this.hasWrittenOnce = !0, this.writeDelayer.trigger(()=>this.flushWrite())));
            } catch (a) {
                throw console.error("[AgentCompatService] Error storing checkpoint:", a), a;
            }
        }, this.getLatestCheckpoint = ()=>this.priorConversationState, this.writtenRootPromptCount = e.rootPromptMessagesJson.length;
    }
    async flushWrite(t) {
        if (!this.transcriptWriter) return;
        const e = this.latestWriteState ?? (t?.isFinalWrite ? {
            ctx: Xp(),
            checkpoint: this.priorConversationState
        } : void 0);
        if (!e) return;
        const { ctx: n, checkpoint: i } = e;
        this.latestWriteState = void 0;
        try {
            const r = await this.transcriptWriter(n, i, {
                ...t,
                previousRootPromptCount: this.writtenRootPromptCount
            });
            typeof r == "number" && (this.writtenRootPromptCount = r), this.onTranscriptWritten?.(this.conversationId);
        } catch (r) {
            console.error("[AgentCompatService] Error writing transcript:", r);
        }
    }
    async flush() {
        this.writeDelayer.cancel(), await this.flushWrite({
            isFinalWrite: !0
        });
    }
}, eIi = 15, Xbe = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C, T, I, A, P){
        super(), this.storageService = e, this.cursorRulesService = n, this.workspaceContextService = i, this.aiService = r, this.knowledgeBaseService = s, this.modelConfigService = o, this.agentClientService = a, this.instantiationService = l, this.composerDataService = c, this.pathService = u, this.remoteAgentService = d, this.experimentService = h, this.mcpService = p, this.fileService = g, this.conversationClassificationService = f, this.logService = _, this.configurationService = b, this.environmentService = y, this.cursorAuthenticationService = S, this.reactiveStorageService = k, this.fileAppendService = C, this.cloudEnvironmentTemplateService = T, this.workspaceMetadataService = I, this.commandService = A, this.backgroundWorkService = P, this._sessionIdToCancelFn = this._register(new da), this._activeCheckpointHandlers = new Map, this._executionStrategy = t?.executionStrategy ?? new ahg(this.agentClientService), this._register(Pn(()=>this._executionStrategy.dispose?.()));
    }
    logSessionReplacement(t, e, n, i) {
        const r = {
            conversationId: e,
            requestId: n,
            abortSource: "session_replaced",
            abortSourceLocation: i
        };
        Dll.error(t, "AgentCompat replacing active session", new Error("session_replaced"), r);
    }
    stampIdeClientCapabilities(t) {
        return Rug(t, {
            isRunningInTest: t.isRunningInTest ?? this.environmentService.enableSmokeTestDriver === !0,
            localLoopGateEnabled: this.readLocalLoopGate()
        });
    }
    canCreateCloudSubagents(t) {
        const e = x0(this.workspaceContextService.getWorkspace());
        return ehg([
            Obk(t),
            sle(this.workspaceMetadataService.getMetadata(e))
        ], tMe(this.cloudEnvironmentTemplateService.data.value), this.cloudEnvironmentTemplateService);
    }
    readLocalLoopGate() {
        return this.experimentService.checkFeatureGate("agent_host_local_loop", {
            disableExposureLog: !0
        });
    }
    async resolveProjectSubagentDetails(t) {
        const e = UTt({
            composer: t.composer,
            getComposer: (r)=>this.composerDataService.getHandleIfLoaded(r)?.data
        });
        if (!ihg({
            owningProjectAgentId: e,
            simulatedMsgReason: t.simulatedMsgReason,
            bestOfNGroupId: t.bestOfNGroupId
        }) || e === void 0) return;
        const n = await this.resolveAgentStoreFilesDir(e);
        if (n === void 0) return;
        const i = t.composer?.subagentInfo?.subagentTypeName === hAe;
        return new Z4t({
            ...i ? {
                name: this.resolveProjectDisplayName(e)
            } : {},
            subagent: new PFo({
                storeDir: n
            })
        });
    }
    async resolveProjectSideChatDetails(t) {
        if (t.composer?.subagentInfo?.subagentTypeName !== PI || t.simulatedMsgReason !== void 0 || t.bestOfNGroupId !== void 0) return;
        const e = t.composer.subagentInfo.sideChatSeedTurnCount;
        if (e === void 0 || t.conversationStateTurnCount !== e) return;
        const n = UTt({
            composer: t.composer,
            getComposer: (r)=>this.composerDataService.getHandleIfLoaded(r)?.data,
            includeSideChats: !0
        });
        if (n === void 0) return;
        const i = await this.resolveAgentStoreFilesDir(n);
        if (i !== void 0) return new Z4t({
            name: this.resolveProjectDisplayName(n),
            sideChat: new MFo({
                storeDir: i
            })
        });
    }
    async resolveAgentStoreFilesDir(t) {
        return k0i(this.commandService, t);
    }
    resolveProjectDisplayName(t) {
        const e = this.composerDataService.getHandleIfLoaded(t)?.data.name?.trim();
        return e || void 0;
    }
    getRequestContextBlobTransportConfig() {
        const t = this.cursorAuthenticationService.granularPrivacyModeRawEnum();
        if (t === au.UNSPECIFIED || t === au.NO_STORAGE) return xll({
            privacyMode: t,
            mode: "legacy",
            maxBlobBytes: uGt,
            maxInlineDynamicBytes: wki
        });
        const e = this.experimentService.getDynamicConfig("nal_request_context_blob_transport_config", {
            disableExposureLog: !1
        });
        return xll({
            privacyMode: t,
            mode: e.mode,
            maxBlobBytes: e.max_blob_bytes,
            maxInlineDynamicBytes: e.max_inline_dynamic_bytes
        });
    }
    async runAgentLoop(t, e) {
        var n = [];
        try {
            t = Pll(n, SS(t.withName("AgentCompatService.runAgentLoop"))).ctx;
            const { userText: o, richText: a, mode: l, selectedContext: c, requestContext: u, modelDetails: d, generationUUID: h, conversationId: p, messageId: g, abortController: f, onCheckpoint: _, resourceAccessor: b, bestOfNGroupId: y, headers: S, parentRequestId: k, rootParentRequestId: C, parentAgentToolCallId: T, conversationState: I, historyRewrite: A, onHeader: P, composerHandle: M } = e, O = M.composerId, N = T || M.data.subagentInfo?.toolCallId;
            t = t.with(kat, {
                conversationId: p,
                composerId: O,
                requestId: h,
                modelName: d.modelName ?? "",
                ...N ? {
                    parentToolCallId: N
                } : {},
                ...M.data.createdFromBackgroundAgent?.shouldStreamMessages === !1 ? {
                    resumeAgentStore: !0
                } : {}
            }), t = Izt(t, {
                requestId: h,
                composerId: O
            });
            const U = t, [j, $] = U.withCancel(), H = Pn($);
            this._sessionIdToCancelFn.has(p) && this.logSessionReplacement(t, p, h, "runAgentLoop"), this._sessionIdToCancelFn.set(p, H);
            const q = this.composerDataService.getComposerData(M);
            let K = q?.conversationActionManager;
            K || (K = new Aze(p, f, this.instantiationService, h), this.composerDataService.updateComposerDataSetStore(M, (se)=>se("conversationActionManager", K)));
            const V = dpe(OSi(t.withName("client.network_ttft")));
            let Y = !1;
            const J = (se)=>{
                Y || (Y = !0, se && V && V.setStatus({
                    code: 2,
                    message: se instanceof Error ? se.message : String(se)
                }), V?.end());
            }, Q = {
                ...e.hooks,
                onFirstToken: ()=>{
                    J(), e.hooks?.onFirstToken?.();
                }
            };
            let te, ee, re, ie, oe;
            try {
                re = SS(t.withName("AgentCompatService.agentClientService.run")), te = new YTt(this.instantiationService, M, K, h, Q);
                const se = this.modelConfigService.getSelectedModelsForComposer(M), le = Ell({
                    selectedModels: se,
                    subagentTypeName: e.subagentTypeName
                }), ce = le ? void 0 : new Ove({
                    modelId: d.modelName,
                    maxMode: d.maxMode,
                    credentials: this.convertModelDetailsToCredentials(d)
                }), ae = await this.resolveProjectSubagentDetails({
                    composer: q,
                    simulatedMsgReason: e.simulatedMsgReason,
                    bestOfNGroupId: y
                }) ?? await this.resolveProjectSideChatDetails({
                    composer: q,
                    conversationStateTurnCount: I.turns.length,
                    simulatedMsgReason: e.simulatedMsgReason,
                    bestOfNGroupId: y
                }), de = (e.prependUserMessages ?? []).map(({ bubble: be, selectedContext: je })=>thg({
                        bubble: be,
                        selectedContext: je,
                        mode: l
                    })), he = nhg({
                    userText: o,
                    richText: a,
                    messageId: g,
                    conversationId: p,
                    selectedContext: c,
                    mode: l,
                    bestOfNGroupId: y,
                    simulatedMsgReason: e.simulatedMsgReason,
                    simulatedMessageMetadata: e.simulatedMessageMetadata,
                    sentByVoiceCall: e.sentByVoiceCall,
                    systemReminder: e.systemReminder,
                    beforeSubmitPromptHookAdditionalContexts: e.beforeSubmitPromptHookAdditionalContexts,
                    projectDetails: ae,
                    customModeIntent: e.customModeIntent
                }), ge = e.conversationActionOverride ?? new MI({
                    action: {
                        case: "userMessageAction",
                        value: new d5e({
                            userMessage: he,
                            requestContext: u,
                            prependUserMessages: de,
                            interruptedPendingToolCallResolutions: e.interruptedPendingToolCallResolutions
                        })
                    }
                }), pe = new KD(this.storageService, p), ve = !!e.subagentTypeName, fe = ve ? q?.subagentInfo?.parentComposerId : void 0;
                ie = fe, ee = this.createCheckpointHandler(p, _, I, {
                    isSubagent: ve,
                    parentConversationId: fe
                });
                const Te = le ? this.buildRequestedModel(d, M) : void 0, _e = this.getSmokeTestEndlessRetries(), Ce = this.getSmokeTestRetryDelayMs(), Se = this.experimentService.checkFeatureGate("nal_agent_retries", {
                    disableExposureLog: !1
                }), Pe = this.configurationService.getValue(A_t);
                Dll.debug(t, "[AgentCompatService] suggestNextPrompt setting", {
                    suggestNextPrompt: Pe
                });
                const { selectedSubagentModels: we } = this.getSelectedSubagentModelSelections(d), Ie = this.getSubagentModelOverrides(), Me = this.getRequestContextBlobTransportConfig(), De = {
                    conversationId: p,
                    conversationGroupId: e.conversationGroupId,
                    agentSessionId: q?.agentSessionId?.trim() || void 0,
                    generationUUID: h,
                    canCreateCloudSubagents: this.canCreateCloudSubagents(u),
                    parentRequestId: k,
                    rootParentRequestId: C,
                    parentAgentToolCallId: T,
                    headers: Jss(q?.blobEncryptionKey, S),
                    onHeader: P,
                    requestedModel: Te,
                    selectedSubagentModels: we,
                    subagentModelOverrides: Ie,
                    onConnectionStateChange: e.onConnectionStateChange,
                    onRetryStarting: async (be, je)=>{
                        await e.onRetryStarting?.(be, je);
                    },
                    onRetryResuming: e.onRetryResuming,
                    stallDetectorConfig: this.getStallDetectorTimeoutConfig(),
                    enableAgentRetries: Se,
                    requestContextBlobTransportMode: Me.mode,
                    requestContextBlobMaxBytes: Me.maxBlobBytes,
                    requestContextDynamicInlineMaxBytes: Me.maxInlineDynamicBytes,
                    endlessRetries: _e,
                    fixedRetryDelayMs: Ce,
                    suggestNextPrompt: Pe,
                    startedAsNewProject: q?.startedAsNewProject === !0 ? !0 : void 0,
                    firstProjectOnboarding: q?.firstProjectOnboarding === !0 ? !0 : void 0,
                    subagentTypeName: e.subagentTypeName,
                    suppressSubagentProgressUpdateTool: e.suppressSubagentProgressUpdateTool,
                    harness: e.harness,
                    onStall: this._createStallCallback(p),
                    onNetworkPhaseStart: e.onNetworkPhaseStart,
                    onPreSendTimings: e.onPreSendTimings,
                    onRequestContextBytes: e.onRequestContextBytes,
                    onFirstMessage: e.onFirstMessage,
                    onFirstMessageNetwork: e.onFirstMessageNetwork,
                    onFirstNonHeartbeatResponse: e.onFirstNonHeartbeatResponse,
                    onTtftBreakdown: e.onTtftBreakdown,
                    onTurnRuntimeSelected: e.onTurnRuntimeSelected
                };
                e.onTurnDispatch?.(), await this._executionStrategy.executeTurn({
                    ctx: j,
                    conversationId: p,
                    composerHandle: M,
                    conversationState: I,
                    historyRewrite: A,
                    action: ge,
                    requestContextDecoration: e.requestContextDecoration,
                    subagentSmartModeAutoRun: e.subagentSmartModeAutoRun,
                    modelDetails: ce,
                    interactionListener: te,
                    resourceAccessor: b,
                    blobStore: pe,
                    conversationActionManager: K,
                    checkpointHandler: ee,
                    mcpTools: [],
                    runOptions: this.stampIdeClientCapabilities(De),
                    abortController: f,
                    onInteractionHistorySuperseded: e.onInteractionHistorySuperseded
                }), oe = uos(f.signal);
            } catch (se) {
                throw oe = uos(f.signal, se), J(se), se instanceof BO && se.displayInfo?.title, se;
            } finally{
                J(), re?.[Symbol.dispose](), m1(te, K), M.data.conversationActionManager === K && this.composerDataService.updateComposerDataSetStore(M, (le)=>le("conversationActionManager", void 0)), ee && await this.unregisterCheckpointHandler(p, ee);
                const se = this._sessionIdToCancelFn.get(p) === H;
                oe && se && await this.writeTerminalRunArtifactsBestEffort(t, {
                    conversationId: p,
                    parentConversationId: ie,
                    state: ee?.getLatestCheckpoint() ?? I,
                    turnEnded: oe,
                    composerHandle: M,
                    runId: h,
                    isSimulatedTurn: e.simulatedMsgReason !== void 0,
                    isBestOfNTurn: y !== void 0
                }), se && uag(this._sessionIdToCancelFn, p, H);
            }
        } catch (s) {
            var i = s, r = !0;
        } finally{
            Mll(n, i, r);
        }
    }
    async resume(t, e) {
        var n = [];
        try {
            t = Pll(n, SS(t.withName("AgentCompatService.resume"))).ctx;
            const { requestContext: o, modelDetails: a, generationUUID: l, conversationId: c, abortController: u, onCheckpoint: d, resourceAccessor: h, headers: p, parentRequestId: g, rootParentRequestId: f, parentAgentToolCallId: _, conversationState: b, onHeader: y, composerHandle: S } = e, k = S.composerId, C = _ || S.data.subagentInfo?.toolCallId;
            t = t.with(kat, {
                conversationId: c,
                composerId: k,
                requestId: l,
                modelName: a.modelName ?? "",
                ...C ? {
                    parentToolCallId: C
                } : {},
                ...S.data.createdFromBackgroundAgent?.shouldStreamMessages === !1 ? {
                    resumeAgentStore: !0
                } : {}
            }), t = Izt(t, {
                requestId: l,
                composerId: k
            });
            const T = t, [I, A] = T.withCancel(), P = Pn(A);
            this._sessionIdToCancelFn.has(c) && this.logSessionReplacement(t, c, l, "resume"), this._sessionIdToCancelFn.set(c, P);
            let O = S.data.conversationActionManager;
            O || (O = new Aze(c, u, this.instantiationService, l), this.composerDataService.updateComposerDataSetStore(S, (de)=>de("conversationActionManager", O)));
            const N = new YTt(this.instantiationService, S, O, l, e.hooks), U = !!e.subagentTypeName, j = this.modelConfigService.getSelectedModelsForComposer(S), $ = Ell({
                selectedModels: j,
                subagentTypeName: e.subagentTypeName
            }), H = $ ? void 0 : new Ove({
                modelId: a.modelName,
                maxMode: a.maxMode,
                credentials: this.convertModelDetailsToCredentials(a)
            }), G = new MI({
                action: {
                    case: "resumeAction",
                    value: new Nmn({
                        requestContext: o
                    })
                }
            }), q = new KD(this.storageService, c), K = this.composerDataService.getComposerData(S), V = U ? K?.subagentInfo?.parentComposerId : void 0, Y = this.createCheckpointHandler(c, d, b, {
                isSubagent: U,
                parentConversationId: V
            }), J = this.experimentService.checkFeatureGate("nal_agent_retries", {
                disableExposureLog: !1
            }), Q = $ ? this.buildRequestedModel(a, S) : void 0, te = this.getSmokeTestEndlessRetries(), ee = this.getSmokeTestRetryDelayMs(), { selectedSubagentModels: re } = this.getSelectedSubagentModelSelections(a), ie = this.getSubagentModelOverrides(), oe = this.getRequestContextBlobTransportConfig(), se = {
                conversationId: c,
                agentSessionId: K?.agentSessionId?.trim() || void 0,
                generationUUID: l,
                canCreateCloudSubagents: this.canCreateCloudSubagents(o),
                parentRequestId: g,
                rootParentRequestId: f,
                parentAgentToolCallId: _,
                headers: Jss(K?.blobEncryptionKey, p),
                onHeader: y,
                requestedModel: Q,
                selectedSubagentModels: re,
                subagentModelOverrides: ie,
                onRetryStarting: async (de, he)=>{
                    await e.onRetryStarting?.(de, he);
                },
                onRetryResuming: e.onRetryResuming,
                stallDetectorConfig: this.getStallDetectorTimeoutConfig(),
                enableAgentRetries: J,
                requestContextBlobTransportMode: oe.mode,
                requestContextBlobMaxBytes: oe.maxBlobBytes,
                requestContextDynamicInlineMaxBytes: oe.maxInlineDynamicBytes,
                endlessRetries: te,
                fixedRetryDelayMs: ee,
                suggestNextPrompt: this.configurationService.getValue(A_t),
                startedAsNewProject: K?.startedAsNewProject === !0 ? !0 : void 0,
                firstProjectOnboarding: K?.firstProjectOnboarding === !0 ? !0 : void 0,
                subagentTypeName: e.subagentTypeName,
                suppressSubagentProgressUpdateTool: e.suppressSubagentProgressUpdateTool,
                harness: e.harness,
                onStall: this._createStallCallback(c),
                onNetworkPhaseStart: e.onNetworkPhaseStart,
                onRequestContextBytes: e.onRequestContextBytes,
                onFirstMessage: e.onFirstMessage,
                onFirstMessageNetwork: e.onFirstMessageNetwork,
                onFirstNonHeartbeatResponse: e.onFirstNonHeartbeatResponse,
                onTtftBreakdown: e.onTtftBreakdown,
                onTurnRuntimeSelected: e.onTurnRuntimeSelected
            }, le = SS(t.withName("AgentCompatService.agentClientService.resume")), ce = this._executionStrategy.executeTurn({
                ctx: I,
                conversationId: c,
                composerHandle: S,
                conversationState: b,
                action: G,
                requestContextDecoration: e.requestContextDecoration,
                subagentSmartModeAutoRun: e.subagentSmartModeAutoRun,
                modelDetails: H,
                interactionListener: N,
                resourceAccessor: h,
                blobStore: q,
                conversationActionManager: O,
                checkpointHandler: Y,
                mcpTools: [],
                runOptions: this.stampIdeClientCapabilities(se),
                abortController: u,
                onInteractionHistorySuperseded: e.onInteractionHistorySuperseded
            });
            let ae;
            try {
                await ce, ae = uos(u.signal);
            } catch (de) {
                throw ae = uos(u.signal, de), de instanceof BO && de.displayInfo?.title, de;
            } finally{
                le[Symbol.dispose](), m1(N, O), S.data.conversationActionManager === O && this.composerDataService.updateComposerDataSetStore(S, (he)=>he("conversationActionManager", void 0)), await this.unregisterCheckpointHandler(c, Y);
                const de = this._sessionIdToCancelFn.get(c) === P;
                ae && de && await this.writeTerminalRunArtifactsBestEffort(t, {
                    conversationId: c,
                    parentConversationId: V,
                    state: Y.getLatestCheckpoint() ?? b,
                    turnEnded: ae,
                    composerHandle: S,
                    runId: l
                }), de && uag(this._sessionIdToCancelFn, c, P);
            }
        } catch (s) {
            var i = s, r = !0;
        } finally{
            Mll(n, i, r);
        }
    }
    _flattenHandlerStates(t, e) {
        if (!t) return {};
        const n = {};
        for (const [i, r] of Object.entries(t))n[`handler_${i}_state`] = r.state, n[`handler_${i}_duration_ms`] = r.durationMs, r.error && !e && (n[`handler_${i}_error`] = r.error);
        return n;
    }
    _createStallCallback(t) {
        const e = Xbe.STALL_LOG_TOKEN;
        return (n)=>{
            const i = n.type === "heartbeat_only" ? "stream_stall_heartbeat_only" : "stream_stall", r = n.type === "heartbeat_only" ? n.lastMeaningfulActivityAgoMs : n.lastActivityAgoMs;
            s7((s)=>{
                s.setFingerprint([
                    "vscode-stall",
                    i,
                    "any_stream_activity"
                ]), s.setLevel("warning"), s.setTag("hang.category", i), s.setTag("hang.waiting_for", "any_stream_activity"), n.modelName && s.setTag("hang.model_name", n.modelName), n.type === "heartbeat_only" && s.setTag("hang.heartbeats_only", "true");
                const o = this.cursorAuthenticationService.privacyMode();
                s.setContext("hang_details", {
                    category: i,
                    waiting_for: "any_stream_activity",
                    last_activity_ago_ms: r,
                    last_activity_type: n.lastActivityType,
                    request_id: n.requestId,
                    conversation_id: t,
                    model_name: n.modelName,
                    heartbeats_only: n.type === "heartbeat_only",
                    last_heartbeat_ago_ms: n.lastServerHeartbeatAgoMs,
                    stream_open: !n.streamEnded,
                    lastMeaningfulActivityAgoMs: n.lastMeaningfulActivityAgoMs,
                    lastInboundMessageType: n.lastInboundMessageType,
                    lastOutboundMessageType: n.lastOutboundMessageType,
                    aborted: n.aborted,
                    lastClientHeartbeatAgoMs: n.lastClientHeartbeatAgoMs,
                    thresholdMs: n.thresholdMs,
                    ...this._flattenHandlerStates(n.handlers, o)
                });
                const a = i === "stream_stall_heartbeat_only" ? `VSCode stall: heartbeats only, no meaningful data for ${Math.round(r / 1e3)}s` : `VSCode stall: no activity for ${Math.round(r / 1e3)}s`, l = new Error(a);
                l.name = "VSCodeStallDetected", L3(l);
            });
        };
    }
    getStallDetectorTimeoutConfig() {
        const t = this.environmentService.smokeTestNalStreamTimeoutMs;
        if (t !== void 0) return {
            advisoryTimeoutMs: void 0,
            failTimeoutMs: t
        };
        const e = this.experimentService.getDynamicConfig("nal_stall_detector_timeout_config", {
            disableExposureLog: !1
        });
        return {
            advisoryTimeoutMs: e.advisoryTimeoutMs,
            failTimeoutMs: e.failTimeoutMs
        };
    }
    getSmokeTestEndlessRetries() {
        if (this.environmentService.smokeTestNalEndlessRetries) return ()=>!0;
    }
    getSmokeTestRetryDelayMs() {
        return this.environmentService.smokeTestNalRetryDelayMs;
    }
    getSelectedSubagentModelSelections(t) {
        return Pbk({
            modelDetails: t,
            flagEnabled: this.experimentService.checkFeatureGate("explicit_subagent_models", {
                disableExposureLog: !1
            }),
            availableModels: this.modelConfigService.getAvailableDefaultModels(),
            storage: this.reactiveStorageService.applicationUserPersistentStorage,
            resolveModelParametersForSubmission: (e, n)=>this.modelConfigService.resolveModelParametersForSubmission(e, void 0, n)
        });
    }
    getSubagentModelOverrides() {
        const t = Dh(this.storageService, "subagentModelOverrides");
        return xbk({
            overrides: t,
            resolveModelParametersForSubmission: (e, n, i)=>this.modelConfigService.resolveModelParametersForSubmission(e, n, i)
        });
    }
    buildRequestedModel(t, e) {
        return trl({
            composerDataService: this.composerDataService,
            modelConfigService: this.modelConfigService,
            logService: this.logService
        }, t, e);
    }
    convertModelDetailsToCredentials(t) {
        return Dng(t);
    }
    async summarize(t, e) {
        const { composerId: n, resourceAccessor: i, abortController: r, onCheckpoint: s } = e, o = await this.composerDataService.getComposerHandleById(n);
        if (!o) throw new Error(`No composer data handle found for composer: ${n}`);
        const a = this.composerDataService.getComposerData(o);
        if (!a) throw new Error(`No composer found for ID: ${n}`);
        const l = new KD(this.storageService, n), c = a.conversationState;
        if (!c) throw new Error(`No conversation state found for composer: ${n}`);
        const u = this.createCheckpointHandler(n, s, c), d = new MI({
            action: {
                case: "summarizeAction",
                value: new WSr({})
            }
        }), h = new Mg({
            modelName: a.modelConfig?.modelName,
            maxMode: !1
        }), p = this.modelConfigService.getSelectedModelsForComposer(o), g = Ell({
            selectedModels: p,
            subagentTypeName: void 0
        }), f = g ? void 0 : new Ove({
            modelId: a.modelConfig?.modelName,
            maxMode: !1,
            credentials: this.convertModelDetailsToCredentials(h)
        }), _ = g ? this.buildRequestedModel(h, o) : void 0, b = Ai(), y = new Aze(n, r, this.instantiationService, b);
        this.composerDataService.updateComposerDataSetStore(o, (C)=>{
            C("conversationActionManager", y), C("chatGenerationUUID", b);
        });
        const S = new YTt(this.instantiationService, o, y, b), k = this._executionStrategy.executeTurn({
            ctx: t,
            conversationId: n,
            composerHandle: o,
            conversationState: c,
            action: d,
            modelDetails: f,
            interactionListener: S,
            resourceAccessor: i,
            blobStore: l,
            conversationActionManager: y,
            checkpointHandler: u,
            mcpTools: [],
            runOptions: this.stampIdeClientCapabilities({
                conversationId: n,
                agentSessionId: a.agentSessionId?.trim() || void 0,
                generationUUID: b,
                headers: Jss(a.blobEncryptionKey),
                stallDetectorConfig: this.getStallDetectorTimeoutConfig(),
                requestedModel: _,
                subagentModelOverrides: [],
                onStall: this._createStallCallback(n),
                onTurnRuntimeSelected: e.onTurnRuntimeSelected
            }),
            abortController: r
        });
        try {
            await k;
        } catch (C) {
            throw C instanceof BO && C.displayInfo?.title, C;
        } finally{
            m1(S, y), o.data.conversationActionManager === y && this.composerDataService.updateComposerDataSetStore(o, (C)=>C("conversationActionManager", void 0)), o.data.chatGenerationUUID === b && this.composerDataService.updateComposerDataSetStore(o, (C)=>C("chatGenerationUUID", void 0)), await this.unregisterCheckpointHandler(n, u);
        }
    }
    async createTranscriptStore(t, e) {
        const n = this.workspaceContextService.getWorkspace(), i = await wX(n, this.pathService), r = i.fsPath, s = e?.isSubagent === !0, o = e?.parentConversationId, a = async (h, p)=>{
            const g = this.getProjectRelativeFileUris(i, h);
            if (g) {
                try {
                    await this.fileService.createFolder(g.parentDir);
                } catch  {}
                await this.fileService.writeFile(g.uri, Tr.fromString(p));
            }
        }, l = new KD(this.storageService, t), c = s ? "subagent" : "primary", u = (h, p)=>Ens({
                conversationId: h,
                ext: p,
                kind: c,
                parentConversationId: o
            }), d = async (h, p)=>{
            const g = this.getProjectRelativeFileUris(i, h);
            if (!g) return;
            const f = !await this.transcriptFileEndsWithNewline(g.uri);
            await Dbk(g.uri, f ? `
${p}` : p, this.fileAppendService, this.fileService);
        };
        return new uZm(r, l, a, {
            writeText: !1,
            writeJsonl: !0,
            pathResolver: u,
            appendFile: d
        });
    }
    async transcriptFileEndsWithNewline(t) {
        try {
            const e = await this.fileService.stat(t);
            return e.size ? (await this.fileService.readFile(t, {
                position: e.size - 1,
                length: 1
            })).value.toString() === `
` : !0;
        } catch  {
            return !0;
        }
    }
    getProjectRelativeFileUris(t, e) {
        const n = e.split("/").filter(Boolean);
        if (n.length !== 0) return {
            uri: rt.joinPath(t, ...n),
            parentDir: n.length > 1 ? rt.joinPath(t, ...n.slice(0, -1)) : t
        };
    }
    createTranscriptWriter(t, e) {
        return async (n, i, r)=>{
            const o = r?.isFinalWrite === !0 && this.experimentService.checkFeatureGate("x-chat-context", {
                disableExposureLog: !0
            }), a = await this.createTranscriptStore(t, {
                ...e
            }), l = o ? {
                overviewFactory: (c)=>this.agentClientService.createTranscriptOverview(n, c)
            } : void 0;
            return a.writeFromStateIncremental(n, i, t, r?.previousRootPromptCount ?? 0, l);
        };
    }
    createCheckpointHandler(t, e, n, i) {
        const r = i?.skipTranscript ? void 0 : this.createTranscriptWriter(t, {
            isSubagent: i?.isSubagent,
            parentConversationId: i?.parentConversationId
        }), s = new lhg(t, n, e, r, (o)=>{
            this.conversationClassificationService.classifyConversationsByIds([
                o
            ]);
        });
        return this._activeCheckpointHandlers.set(t, s), s;
    }
    async unregisterCheckpointHandler(t, e) {
        await Ebk(this._activeCheckpointHandlers, t, e);
    }
    async writeTurnEndedTranscriptBestEffort(t, e) {
        try {
            await (await this.createTranscriptStore(e.conversationId, {
                isSubagent: !!e.parentConversationId,
                parentConversationId: e.parentConversationId
            })).writeFromStateIncremental(t, e.state, e.conversationId, e.state.rootPromptMessagesJson.length, {
                turnEnded: e.turnEnded
            });
        } catch (n) {
            this.logService.warn("[AgentCompatService] Failed to write turn-ended transcript", {
                conversationId: e.conversationId,
                error: n
            });
        }
    }
    async writeTerminalRunArtifactsBestEffort(t, e) {
        await this.writeTurnEndedTranscriptBestEffort(t, {
            conversationId: e.conversationId,
            parentConversationId: e.parentConversationId,
            state: e.state,
            turnEnded: e.turnEnded
        }), await this.deliverInteractiveChildCompletionBestEffort({
            composerHandle: e.composerHandle,
            childComposerId: e.conversationId,
            runId: e.runId,
            turnEnded: e.turnEnded,
            isSimulatedTurn: e.isSimulatedTurn,
            isBestOfNTurn: e.isBestOfNTurn
        });
    }
    async deliverInteractiveChildCompletionBestEffort(t) {
        try {
            const e = this.experimentService.checkFeatureGate(wKa, {
                disableExposureLog: !0
            }), n = this.composerDataService.getComposerData(t.composerHandle), i = n?.subagentInfo?.parentComposerId;
            if (i === void 0) return;
            const r = shg(t.composerHandle, t), s = UTt({
                composer: n,
                getComposer: (f)=>this.composerDataService.getHandleIfLoaded(f)?.data,
                includeSideChats: !0
            }), o = t.composerHandle.data.fullConversationHeadersOnly.filter((f)=>f.type === bs.HUMAN), a = o.at(-1), l = a === void 0 ? void 0 : t.composerHandle.data.conversationMap[a.bubbleId], c = o.length > 1 && l !== void 0 && l.isSimulatedMsg !== !0 && l.subagentSpawnTaskToolCallId === void 0, u = HW1({
                inboxGateEnabled: e,
                wakeEnabled: this.environmentService.isGlass === !0,
                subagentTypeName: n?.subagentInfo?.subagentTypeName,
                isTaskOrigin: n?.subagentInfo?.subagentType === Yse.TASK,
                currentTurnIsDirectUserEntered: c,
                parentComposerId: i,
                owningProjectAgentId: s,
                ...r
            });
            if (u === "none") return;
            const d = Bbk(t.composerHandle), h = rhg(t.composerHandle), p = t.turnEnded.status === "success" ? void 0 : t.turnEnded.error;
            if (u === "background-task") {
                this.backgroundWorkService.enqueue(WW1({
                    parentComposerId: i,
                    childComposerId: t.childComposerId,
                    runId: t.runId,
                    turnId: d?.runId,
                    currentTurnIsDirectUserEntered: c,
                    status: t.turnEnded.status,
                    title: this.composerDataService.getComposerTitle(t.childComposerId),
                    errorText: p,
                    resultText: h
                }));
                return;
            }
            const g = await this.resolveAgentStoreFilesDir(i);
            if (g === void 0) return;
            await qW1(this.fileService, {
                parentStoreFilesDir: g,
                turn: {
                    parentComposerId: i,
                    childComposerId: t.childComposerId,
                    runId: d?.runId ?? t.runId,
                    status: t.turnEnded.status,
                    errorText: p,
                    resultText: h,
                    finishedAt: new Date,
                    pathTimestamp: d?.pathTimestamp
                }
            });
        } catch (e) {
            this.logService.warn("[AgentCompatService] Failed to persist or wake interactive-child completion", {
                conversationId: t.childComposerId,
                error: e
            });
        }
    }
    async flushTranscriptForConversation(t) {
        const e = this._activeCheckpointHandlers.get(t);
        if (e) try {
            await e.flush();
        } catch (n) {
            this.logService.warn("[AgentCompatService] Failed to flush transcript for conversation", {
                conversationId: t,
                error: n
            });
        }
    }
    async getConversationStateForCloudTransfer(t, e) {
        const n = Xp();
        let i = e;
        if (!i) {
            const _ = this._activeCheckpointHandlers.get(t);
            _ && (i = _.getLatestCheckpoint());
        }
        const r = new KD(this.storageService, t);
        if (!i) {
            const _ = this.composerDataService.getHandleIfLoaded(t);
            i = _ ? this.composerDataService.getComposerData(_)?.conversationState : void 0;
        }
        if (!i) {
            console.warn("[AgentCompatService] No conversation state found for cloud transfer", {
                composerId: t
            });
            return;
        }
        const s = nf.fromBinary(i.toBinary()), o = new Set, a = new Map, l = new Set, c = [], u = (_)=>{
            _ && _.length > 0 && o.add($v(_));
        }, d = (_)=>{
            for (const b of _.turns)u(b);
            _.summary && u(_.summary), u(_.summaryArchive);
            for (const b of _.todos)u(b);
            _.plan && u(_.plan);
            for (const [, b] of Object.entries(_.fileStates))u(b);
            for (const b of Object.values(_.fileStatesV2))u(b.content), u(b.initialContent);
            for (const b of _.summaryArchives)u(b);
            for (const b of _.rootPromptMessagesJson)u(b);
            for (const b of Object.values(_.subagentStates))b.conversationState && d(b.conversationState);
            for (const b of Object.values(_.subagentStateRefs))if (u(b), b && b.length > 0) {
                const y = $v(b);
                l.has(y) || (l.add(y), c.push(y));
            }
        };
        d(s);
        const h = new Set, p = async ()=>{
            for (const _ of o)if (!h.has(_)) {
                h.add(_);
                try {
                    const b = fJ(_), y = await r.getBlob(n, b);
                    y && a.set(_, y);
                } catch (b) {
                    this.logService.error("[AgentCompatService] Failed to fetch blob for cloud transfer", {
                        blobIdHex: _,
                        error: b
                    });
                }
            }
        };
        for(await p(); c.length > 0;){
            const _ = c.splice(0);
            for (const b of _){
                const y = a.get(b);
                if (y) try {
                    const S = J4t.fromBinary(y);
                    S.conversationState && d(S.conversationState);
                } catch (S) {
                    this.logService.error("[AgentCompatService] Failed to decode subagent state blob for cloud transfer", {
                        blobIdHex: b,
                        error: S
                    });
                }
            }
            await p();
        }
        await this.collectNestedBlobs(n, r, a, new Set(o)), await this.collectConversationStateGraphBlobs(n, s, r, a);
        try {
            await this.embedPastChatTranscriptsForCloudTransfer(a);
        } catch (_) {
            console.warn("[AgentCompatService] Failed to embed past chat transcripts for cloud transfer", {
                composerId: t,
                error: _
            });
        }
        try {
            await this.embedPlanSelectionsForCloudTransfer(a);
        } catch (_) {
            console.warn("[AgentCompatService] Failed to embed plan selections for cloud transfer", {
                composerId: t,
                error: _
            });
        }
        try {
            await this.embedImplicitFileMentionsForCloudTransfer(a);
        } catch (_) {
            console.warn("[AgentCompatService] Failed to embed implicit file mentions for cloud transfer", {
                composerId: t,
                error: _
            });
        }
        const g = s.toBinary(), f = await Fbk(g);
        return a.set($v(f), g), {
            conversationStateStructure: s,
            blobs: a
        };
    }
    static encodeTranscriptFilename(t) {
        return `${encodeURIComponent(t).replace(/%/g, "_")}.txt`;
    }
    static getBasename(t) {
        const n = t.replace(/\\/g, "/").split("/");
        return n[n.length - 1] ?? t;
    }
    static countLinesAndLastColumn(t) {
        const e = t.split(`
`), n = Math.max(1, e.length), i = (e[e.length - 1]?.length ?? 0) + 1;
        return {
            endLine: n,
            endCol: i
        };
    }
    static extractAtMentionTokens(t) {
        const e = [], n = /@([^\s]+)/g;
        let i;
        for(; (i = n.exec(t)) !== null;){
            const s = (i[1] ?? "").replace(/[)\],.?!;:]+$/g, "");
            s.trim().length > 0 && e.push(s);
        }
        return e;
    }
    async embedPastChatTranscriptsForCloudTransfer(t) {
        const e = this.workspaceContextService.getWorkspace(), n = await bze(e, this.pathService), i = new Map, r = new Ebe(eIi);
        for (const [s, o] of t){
            await r.yieldIfExhausted();
            let a;
            try {
                a = t0.fromBinary(o);
            } catch  {
                continue;
            }
            const l = a.selectedContext, c = l?.pastChats ?? [];
            if (!l || c.length === 0) continue;
            l.codeSelections || (l.codeSelections = []);
            const u = l.codeSelections, d = new Set(u.map((p)=>p.relativePath).filter((p)=>typeof p == "string"));
            let h = !1;
            for (const p of c){
                const g = p.agentId ?? "";
                if (g.trim().length === 0) continue;
                const f = ixn(g), _ = Xbe.encodeTranscriptFilename(g), b = _.replace(/\.txt$/, ""), y = `agent-transcripts/${f}/${f}.txt`, S = `${b}.jsonl`, k = `agent-transcripts/${f}/${f}.jsonl`, C = `agent-transcripts/${S}`, T = `agent-transcripts/${_}`;
                if (d.has(k) || d.has(y) || d.has(C) || d.has(T)) continue;
                const I = i.get(g);
                let A = I?.text, P = I?.relativePath ?? k, M = I?.uri ?? rt.joinPath(n, f, `${f}.jsonl`);
                if (A === void 0) {
                    const j = await mZm(this.fileService, nat({
                        transcriptsDir: n,
                        conversationId: g,
                        preferJsonl: !0
                    }), {
                        maxBytes: ctl,
                        headBytes: utl
                    });
                    if (j) {
                        A = j.content, M = j.uri;
                        const $ = rt.joinPath(n, f, `${f}.jsonl`), H = rt.joinPath(n, f, `${f}.txt`), G = rt.joinPath(n, S), q = rt.joinPath(n, _);
                        P = new Map([
                            [
                                $.path,
                                k
                            ],
                            [
                                H.path,
                                y
                            ],
                            [
                                G.path,
                                C
                            ],
                            [
                                q.path,
                                T
                            ]
                        ]).get(j.uri.path) ?? k;
                    } else A = "";
                    i.set(g, {
                        text: A,
                        uri: M,
                        relativePath: P
                    });
                }
                if (A.trim().length === 0) continue;
                const { endLine: O, endCol: N } = Xbe.countLinesAndLastColumn(A), U = new K4t({
                    content: A,
                    path: M.toString(),
                    relativePath: P,
                    range: new n5e({
                        start: new dY({
                            line: 1,
                            column: 1
                        }),
                        end: new dY({
                            line: O,
                            column: N
                        })
                    })
                });
                u.push(U), d.add(k), d.add(y), d.add(C), d.add(T), h = !0;
            }
            if (h) try {
                t.set(s, a.toBinary());
            } catch (p) {
                console.warn("[AgentCompatService] Failed to re-serialize UserMessage after embedding transcripts", {
                    blobIdHex: s,
                    error: p
                });
            }
        }
    }
    async embedPlanSelectionsForCloudTransfer(t) {
        const e = [], n = new Ebe(eIi);
        for (const [i, r] of t){
            await n.yieldIfExhausted();
            let s;
            try {
                s = iz.fromBinary(r);
            } catch  {
                continue;
            }
            if (s.message.case !== "toolCall") continue;
            const o = s.message.value;
            if (o.tool.case !== "createPlanToolCall") continue;
            const a = o.tool.value, l = a.args?.plan ?? "", c = a.result?.planUri ?? "", u = Xbe.getBasename(c);
            l.trim().length === 0 || c.trim().length === 0 || u.trim().length === 0 || e.push({
                planUri: c,
                planText: l,
                basename: u
            });
        }
        if (e.length !== 0) for (const [i, r] of t){
            await n.yieldIfExhausted();
            let s;
            try {
                s = t0.fromBinary(r);
            } catch  {
                continue;
            }
            const o = s.text ?? "";
            if (o.trim().length === 0) continue;
            const a = e.find((f)=>!!(o.includes(f.planUri) || o.includes(f.basename)));
            if (!a) continue;
            s.selectedContext || (s.selectedContext = new gY);
            const l = s.selectedContext;
            l.codeSelections || (l.codeSelections = []);
            const c = l.codeSelections;
            if (c.some((f)=>{
                const _ = f.relativePath ?? "", b = f.path ?? "";
                return _.includes(a.basename) || b.includes(a.basename);
            })) continue;
            const d = `.cursor/plans/${a.basename}`, h = a.planText, { endLine: p, endCol: g } = Xbe.countLinesAndLastColumn(h);
            c.push(new K4t({
                content: h,
                path: a.planUri,
                relativePath: d,
                range: new n5e({
                    start: new dY({
                        line: 1,
                        column: 1
                    }),
                    end: new dY({
                        line: p,
                        column: g
                    })
                })
            }));
            try {
                t.set(i, s.toBinary());
            } catch (f) {
                console.warn("[AgentCompatService] Failed to re-serialize UserMessage after embedding plan selection", {
                    blobIdHex: i,
                    error: f
                });
            }
        }
    }
    async embedImplicitFileMentionsForCloudTransfer(t) {
        const n = this.workspaceContextService.getWorkspace().folders.map((c)=>c.uri);
        if (n.length === 0) return;
        const i = 512e3, r = 24e3, s = 6, o = new Set([
            ".ts",
            ".tsx",
            ".js",
            ".jsx",
            ".json",
            ".md",
            ".txt",
            ".proto",
            ".yml",
            ".yaml",
            ".toml",
            ".sql"
        ]), a = async (c)=>{
            for (const u of n){
                const d = rt.joinPath(u, c);
                try {
                    const h = await this.fileService.readFile(d);
                    if (h.value.byteLength > i) return;
                    const p = h.value.toString();
                    return p.includes("\0") ? void 0 : {
                        uri: d,
                        content: p
                    };
                } catch  {}
            }
        }, l = new Ebe(eIi);
        for (const [c, u] of t){
            await l.yieldIfExhausted();
            let d;
            try {
                d = t0.fromBinary(u);
            } catch  {
                continue;
            }
            const h = d.text ?? "";
            if (h.trim().length === 0) continue;
            const p = Xbe.extractAtMentionTokens(h).filter((y)=>y.includes("/") || y.includes("\\")).slice(0, s);
            if (p.length === 0) continue;
            d.selectedContext || (d.selectedContext = new gY);
            const g = d.selectedContext;
            g.codeSelections || (g.codeSelections = []);
            const f = g.codeSelections, _ = new Set(f.map((y)=>y.relativePath).filter((y)=>typeof y == "string"));
            let b = !1;
            for (const y of p){
                const S = y.replace(/\\/g, "/"), k = S.includes(".") ? S.slice(S.lastIndexOf(".")).toLowerCase() : "";
                if (!o.has(k) || _.has(S)) continue;
                const C = await a(S);
                if (!C) continue;
                const T = C.content, I = T.length > r ? `${T.slice(0, r)}

... (truncated) ...
` : T, { endLine: A, endCol: P } = Xbe.countLinesAndLastColumn(I);
                f.push(new K4t({
                    content: I,
                    path: C.uri.toString(),
                    relativePath: S,
                    range: new n5e({
                        start: new dY({
                            line: 1,
                            column: 1
                        }),
                        end: new dY({
                            line: A,
                            column: P
                        })
                    })
                })), _.add(S), b = !0;
            }
            if (b) try {
                t.set(c, d.toBinary());
            } catch (y) {
                console.warn("[AgentCompatService] Failed to re-serialize UserMessage after embedding implicit file mentions", {
                    blobIdHex: c,
                    error: y
                });
            }
        }
    }
    async collectConversationStateGraphBlobs(t, e, n, i) {
        const r = {
            getBlob: async (o, a)=>{
                const l = $v(a), c = i.get(l);
                if (c) return c;
                const u = await n.getBlob(o, a);
                if (!u) throw new Error(`${xal}: ${l}`);
                return i.set(l, u), u;
            }
        }, s = await Mot(e, r);
        for (const o of s)await r.getBlob(t, o);
    }
    async collectNestedBlobs(t, e, n, i, r = new Set) {
        const s = new Set, o = (u)=>{
            if (u && u.length > 0) {
                const d = $v(u);
                i.has(d) || s.add(d);
            }
        }, a = (u)=>{
            u && u.length > 0 && r.add($v(u)), o(u);
        }, l = (u)=>{
            const d = t0.fromBinary(u);
            if (!d.selectedContext) return !1;
            const h = [];
            aJr(d.selectedContext, h);
            for (const p of h)o(p);
            return !0;
        }, c = new Ebe(eIi);
        for (const [u, d] of n)if (!i.has(u + ":parsed")) {
            i.add(u + ":parsed"), await c.yieldIfExhausted();
            try {
                const h = fY.fromBinary(d);
                let p = !1;
                if (h.turn.case === "agentConversationTurn") {
                    p = !0;
                    const g = h.turn.value;
                    a(g.userMessage);
                    for (const f of g.steps)o(f);
                } else if (h.turn.case === "shellConversationTurn") {
                    p = !0;
                    const g = h.turn.value;
                    o(g.shellCommand), o(g.shellOutput);
                }
                if (p) continue;
            } catch  {}
            if (r.has(u)) try {
                l(d);
                continue;
            } catch  {}
            try {
                if (iz.fromBinary(d).message.case) continue;
            } catch  {}
            try {
                const h = FFo.fromBinary(d);
                let p = !1;
                for (const g of h.summarizedMessages)p = !0, o(g);
                if (h.summaryMessage && h.summaryMessage.length > 0 && (p = !0, o(h.summaryMessage)), p) continue;
            } catch  {}
            try {
                if (l(d)) continue;
            } catch  {}
        }
        if (s.size > 0) {
            for (const u of s){
                i.add(u);
                try {
                    const d = fJ(u), h = await e.getBlob(t, d);
                    h && n.set(u, h);
                } catch (d) {
                    console.error("[AgentCompatService] Failed to fetch nested blob", {
                        blobIdHex: u,
                        error: d
                    });
                }
            }
            await this.collectNestedBlobs(t, e, n, i, r);
        }
    }
}, Xbe.STALL_LOG_TOKEN = "stall-detector", Xbe = Re([
    A6(1, ki),
    A6(2, xA),
    A6(3, yr),
    A6(4, jl),
    A6(5, Uze),
    A6(6, eg),
    A6(7, Q4e),
    A6(8, dn),
    A6(9, no),
    A6(10, Rd),
    A6(11, Nh),
    A6(12, Cr),
    A6(13, N0),
    A6(14, is),
    A6(15, TEi),
    A6(16, Li),
    A6(17, yi),
    A6(18, ps),
    A6(19, ss),
    A6(20, sa),
    A6(21, Rss),
    A6(22, Lk),
    A6(23, Qg),
    A6(24, nr),
    A6(25, ZD)
], Xbe);

}
