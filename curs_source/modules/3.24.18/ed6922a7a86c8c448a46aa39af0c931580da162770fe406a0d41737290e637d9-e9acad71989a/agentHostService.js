import { A7i, XLn, dNd, tFd } from "./A3u.js";
import { L4e, qh } from "./De_3.js";
import { He, Hp, Pk, Se, bt, ja, po, rn, si, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { LQi } from "./agentCompatService.js";
import { QZv, Y1h } from "./agentHostBackgroundWorkMirror.js";
import { V1h } from "./agentHostBridgeLoss.js";
import { F1o, FQi, O1o, XZv } from "./agentHostBridgeRecovery.js";
import { BQi, q1h } from "./agentHostBridgeWait.js";
import { dTh, rQv } from "./agentHostChildSessionMirror.js";
import { cQv, mTh } from "./agentHostCompletionMirror.js";
import { $Qi, UQi } from "./agentHostInteractionMirror.js";
import { G_e, H1e } from "./agentHostProviderService.js";
import { dQv, fTh } from "./agentHostRootSessionMirror.js";
import { STh, _Qv } from "./agentHostSendActionEncoder.js";
import { bQv, kTh } from "./agentHostSessionState.js";
import { gQv, vTh } from "./agentHostSessionTurnLifecycleWatches.js";
import { GOn, VOn } from "./agentRemoteWorkspacePolicy.js";
import { Awo, Dwo, Gwo, Lwo, Mwo, Nwo, Pwo, Qwo, Rwo, SZi, Uwo, V1e, Vwo, Xwo, YVt, Ywo, ZX, Zwo, _oe, a3n, bZi, bq, btt, c3n, cZi, dZi, eCo, fZi, gZi, hCt, hZi, jwo, ktt, lZi, mZi, o3n, oLe, pZi, s3n, sLe, tCo, vZi, yZi, ytt } from "./agent_host_pb.js";
import { Hm, a$t, x1, zd } from "./agent_pb.js";
import { Sg } from "./aiService.js";
import { bn } from "./async.js";
import { AX, Jj } from "./backgroundWorkRegistry.js";
import { P3n, t1o } from "./blobEncryptionKeyHeader.js";
import { _Vv, fVv, oko, vVv } from "./cgh.js";
import { PPd } from "./common_2.ts";
import { nl } from "./composerDataServiceTypes.js";
import { M1e, Vde } from "./cursorAgentHostService.js";
import { YW, c_e, hb, jM } from "./errors.ts";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { ZW } from "./index_12.ts";
import { Gp } from "./index_3.ts";
import { Ze, _t } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { Cp, vp } from "./metricsService.js";
import { i0 } from "./modelConfigServiceTypes.js";
import { mn, vn } from "./qIc.js";
import { ako } from "./requestedModelForComposer.js";
import { x } from "./tslib.es6.js";
var E1o = {};
function KZv(e) {
    const t = e.action.value;
    if (t !== void 0 && "requestContext" in t) return t.requestContext;
}
function YZv(e) {
    return new x1({
        action: {
            case: "resumeAction",
            value: new a$t({
                requestContext: KZv(e)
            })
        }
    });
}
function dLe(e) {
    return e.toBinary();
}
function q1o(e) {
    return e ? V1e.RUNNING : V1e.IDLE;
}
function Sjt() {
    return (async function*() {})();
}
function CTh(e, t, n, i) {
    return (async function*() {
        const r = new He, s = [
            ...e
        ];
        let o, a, c;
        const l = new Promise((h)=>{
            c = ()=>h(!0);
        }), u = ()=>{
            o?.(), o = void 0, a = void 0;
        };
        if (r.add(t((h)=>{
            s.push(h), u();
        })), n && r.add(n(()=>{
            c?.(), c = void 0;
        })), i) {
            if (i.isCancellationRequested) return;
            r.add(i.onCancellationRequested(()=>{
                c?.(), c = void 0;
            }));
        }
        try {
            for(;;){
                for(; s.length > 0;)yield s.shift();
                if (await Promise.race([
                    l,
                    (a ??= new Promise((h)=>{
                        o = h;
                    })).then(()=>!1)
                ])) break;
            }
        } finally{
            r.dispose();
        }
    })();
}
function z1o(e, t) {
    return new SZi({
        generationUuid: e.generationUUID,
        agentSessionId: e.agentSessionId,
        customSystemPrompt: e.customSystemPrompt,
        excludeWorkspaceContext: e.excludeWorkspaceContext,
        enableAgentRetries: e.enableAgentRetries,
        fixedRetryDelayMs: e.fixedRetryDelayMs,
        endlessRetries: e.endlessRetries?.() === !0,
        isRunningInTest: e.isRunningInTest,
        stallAdvisoryTimeoutMs: dNd(e.stallDetectorConfig?.advisoryTimeoutMs),
        stallFailTimeoutMs: dNd(e.stallDetectorConfig?.failTimeoutMs),
        selectedSubagentModels: e.selectedSubagentModels,
        subagentModelOverrides: e.subagentModelOverrides,
        requestContextBlobTransportMode: e.requestContextBlobTransportMode,
        requestContextBlobMaxBytes: e.requestContextBlobMaxBytes,
        requestContextDynamicInlineMaxBytes: e.requestContextDynamicInlineMaxBytes,
        suggestNextPrompt: e.suggestNextPrompt,
        blobEncryptionKey: e.headers?.[P3n],
        requestHeaders: yQv(e.headers),
        clientSupportsInlineImages: e.clientSupportsInlineImages,
        clientSupportsPreviewCard: e.clientSupportsPreviewCard,
        clientSupportsSendToUser: e.clientSupportsSendToUser,
        clientSupportsRoutedModelUpdate: e.clientSupportsRoutedModelUpdate,
        canCreateCloudSubagents: e.canCreateCloudSubagents,
        localLoopGateEnabled: e.localLoopGateEnabled,
        startedAsNewProject: e.startedAsNewProject,
        firstProjectOnboarding: e.firstProjectOnboarding,
        harness: e.harness,
        ...t?.subagentSmartModeAutoRun === void 0 ? {} : {
            subagentSmartModeAutoRun: t.subagentSmartModeAutoRun
        }
    });
}
function yQv(e) {
    if (e === void 0) return;
    const { [P3n]: t, ...n } = e;
    return Object.keys(n).length === 0 ? void 0 : n;
}
function SQv(e) {
    const t = e.detail || "[AgentHostService] host-backed turn failed", n = e.error;
    if (n === void 0) return new Error(t);
    const i = {
        title: n.title,
        detail: n.detail,
        isRetryable: n.isRetryable,
        connectCode: n.connectCode,
        errorCode: n.errorDetails?.error,
        inferenceRequestErrorType: n.inferenceRequestErrorType,
        errorDetails: n.errorDetails
    }, r = {
        requestId: n.requestId,
        displayInfo: i
    };
    if (n.kind === "RetriableError") return new jM(t, r);
    if (n.kind === "ActionRequiredError") {
        const s = n.action ?? n.errorDetails?.details?.analyticsMetadata?.actionRequired ?? "unknown";
        return new c_e(t, s, r);
    }
    return new YW(t, r);
}
function TTh(e) {
    if (e.aborted) return typeof e.reason == "string" ? e.reason : e.reason instanceof Error ? e.reason.message : void 0;
}
function kQv(e) {
    switch(TTh(e)){
        case "user_stopped_generation":
        case "remote_control_stopped":
        case "migration":
            return _oe.USER_STOP;
        case "new_message_submitted":
            return _oe.FOLLOW_UP;
        default:
            return _oe.CLIENT_ERROR;
    }
}
function wQv(e, t) {
    return e.catch(()=>{}), new Promise((n, i)=>{
        const r = ()=>i(new hb("Cancelled while waiting for the agent host before the send."));
        if (t.aborted) {
            r();
            return;
        }
        t.addEventListener("abort", r, {
            once: !0
        }), e.then((s)=>{
            t.removeEventListener("abort", r), n(s);
        }, (s)=>{
            t.removeEventListener("abort", r), i(s);
        });
    });
}
function ETh(e, t) {
    return e.isDisposed ? (t.dispose(), t) : e.add(t);
}
function CQv(e, t, n) {
    let i;
    const r = async ()=>(i ??= (async ()=>{
            const { AgentCompatService: s } = await Promise.resolve().then(()=>(LQi(), E1o));
            return ETh(n, e.createInstance(s, {
                executionStrategy: t
            }));
        })(), i);
    return {
        runAgentLoop: async (s, o)=>(await r()).runAgentLoop(s, o),
        resume: async (s, o)=>(await r()).resume(s, o),
        summarize: async (s, o)=>(await r()).summarize(s, o),
        flushTranscriptForConversation: async (s)=>(await r()).flushTranscriptForConversation(s)
    };
}
var GQi, K1o, Y1o, X1o, Z1o, B3n, U3n, $3n;
export { $3n, B3n, CQv, CTh, E1o, ETh, GQi, K1o, KZv, SQv, Sjt, TTh, U3n, X1o, Y1o, YZv, Z1o, dLe, kQv, q1o, wQv, yQv, z1o };
var __wakaru_Q1o_initialized = false;
export function Q1o() {
if (__wakaru_Q1o_initialized) return;
__wakaru_Q1o_initialized = true;
"use strict";
x(), bn(), bt(), si(), Se(), Ze(), Pn(), Ze(), Qn(), M1e(), VOn(), qs(), Cp(), H1e(), XZv(), q1h(), Gp(), ZW(), zd(), bq(), t1o(), QZv(), rQv(), cQv(), $Qi(), dQv(), gQv(), ako(), AX(), V1h(), _Qv(), bQv(), q1h(), GQi = vn("agentHostService"), K1o = 5e3, Y1o = 3e4, X1o = class extends we {
    constructor(e, t, n, i){
        super(), this._providerService = e, this._logService = t, this._createdSessions = new Set, this._lastEventIds = new Map, this._interactionMirrors = new Map, this._deferredMirrorSessionIds = new Set, this._sessionHydrateInFlight = new Map, this._prewarmedSessions = new Set, this._sendActionEncoder = new STh, this._lifetimeAbort = new AbortController, this._sessionTurnLifecycleWatches = new vTh(this._providerService);
        const r = n !== void 0 && typeof n == "object" && !("upsertSubagentWork" in n) ? n : {
            backgroundWorkService: n,
            restartDelayMs: i
        }, s = r.backgroundWorkService;
        this._teardownTimeoutMs = r.teardownTimeoutMs ?? K1o, this._sessionPrewarmTimeoutMs = r.sessionPrewarmTimeoutMs ?? Y1o, this._metricsService = r.metricsService, this._bridgeWait = new BQi({
            initialTimeoutMs: r.bridgeWaitInitialTimeoutMs,
            retryTimeoutMs: r.bridgeWaitRetryTimeoutMs,
            maxAttempts: r.bridgeWaitMaxAttempts
        }, this._providerService, this._logService, r.metricsService, r.experimentService), this._bridgeRecovery = new FQi({
            isDisposed: ()=>this._store.isDisposed,
            signal: this._lifetimeAbort.signal
        }, {
            windowMs: r.bridgeRecoveryWindowMs,
            maxAttempts: r.bridgeRecoveryMaxAttempts,
            backoffMs: r.bridgeRecoveryBackoffMs
        }, this._providerService, this._logService, r.metricsService), this._instantiationService = r.instantiationService, this._backgroundWorkMirror = s ? new Y1h(this._providerService, s, this._logService, r.restartDelayMs) : void 0, this._completionMirror = s ? new mTh(this._providerService, s, this._logService, {
            restartDelayMs: r.restartDelayMs,
            waitForCompletionDelivery: (o, a)=>this._childSessionMirror?.waitForChildHydration(o, a)
        }) : void 0, r.childSessionMirror ? (this._childSessionMirror = r.childSessionMirror, this._ownsChildSessionMirror = !1) : r.instantiationService || r.childSessionAdoptionServices ? (this._childSessionMirror = new dTh(this._providerService, this._logService, r.instantiationService, s, r.childSessionAdoptionServices), this._ownsChildSessionMirror = !0) : (this._childSessionMirror = void 0, this._ownsChildSessionMirror = !1), this._childAdoptionListener = this._childSessionMirror && this._completionMirror ? this._childSessionMirror.registerAdoptionListener({
            onChildAdopted: (o)=>this._completionMirror?.ensureWatch(o),
            onChildRemoved: (o)=>this._completionMirror?.stop(o)
        }) : we.None, this._rootSessionMirror = r.instantiationService || r.childSessionAdoptionServices ? new fTh(this._providerService, this._logService, this._lastEventIds, r.instantiationService, r.childSessionAdoptionServices, {
            onSubagentStarted: (o)=>this._childSessionMirror?.onSubagentStarted(o),
            interactionMirrors: this._interactionMirrors
        }) : void 0, this._providerRegistrationListener = this._providerService.onDidChangeRegistration?.(()=>{
            this._backgroundWorkMirror?.stopAll(), this._completionMirror?.stopAll(), this._childSessionMirror?.stopAll(), this._rootSessionMirror?.stopAll(), this._createdSessions.clear(), this._prewarmedSessions.clear(), this._deferredMirrorSessionIds.clear(), this._lastEventIds.clear(), this._sessionTurnLifecycleWatches.disposeAll();
            for (const o of this._interactionMirrors.values())o.dispose();
            this._interactionMirrors.clear();
        }) ?? we.None, this._register(rn(()=>this._lifetimeAbort.abort())), this._register(this._providerRegistrationListener), this._register(this._childAdoptionListener), this._backgroundWorkMirror && this._register(this._backgroundWorkMirror), this._completionMirror && this._register(this._completionMirror), this._ownsChildSessionMirror && this._childSessionMirror && this._register(this._childSessionMirror), this._rootSessionMirror && this._register(this._rootSessionMirror), this._register(rn(()=>Pk(...this._interactionMirrors.values()))), this._register(rn(()=>{
            this._ownsChildSessionMirror || this._childSessionMirror?.stopAll(), this._createdSessions.clear(), this._prewarmedSessions.clear(), this._deferredMirrorSessionIds.clear(), this._lastEventIds.clear(), this._sessionTurnLifecycleWatches.disposeAll(), this._interactionMirrors.clear();
        }));
    }
    get childSessionMirrorForTest() {
        return this._childSessionMirror;
    }
    async prepareRemoteSend(e) {
        this._rootSessionMirror?.onRemoteSendMessage(e.sessionId), this._childSessionMirror?.ensureDiscovery(), this._backgroundWorkMirror?.ensureWatch(e.sessionId), this._completionMirror?.ensureWatch(e.sessionId);
        const t = fVv(e);
        if (t !== void 0) {
            await this._adoptRemoteSendModel(e.sessionId, t);
            return;
        }
        if (!(e.modelId || e.modelDetails !== void 0 || e.requestedModel !== void 0)) try {
            const n = await this._requestedModelForComposer(e.sessionId);
            if (n === void 0) return;
            e.modelId = n.modelId, e.requestedModel = n;
        } catch (n) {
            this._logService.warn(`[AgentHostService] could not resolve the composer model for remote send session=${e.sessionId}`, n);
        }
    }
    async _adoptRemoteSendModel(e, t) {
        if (this._instantiationService !== void 0) try {
            const { IComposerDataService: n } = await Promise.resolve().then(()=>(nl(), XLn)), { IModelConfigService: i } = await Promise.resolve().then(()=>(i0(), A7i)), r = this._instantiationService.invokeFunction((o)=>({
                    composerDataService: o.get(n),
                    modelConfigService: o.get(i)
                })), s = await r.composerDataService.getComposerHandleById(e);
            if (s === void 0 || vVv(r, s, t)) return;
            r.modelConfigService.setModelConfigForComposer(s, _Vv(t)), this._logService.info(`[AgentHostService] composer adopted the remote send's model session=${e} modelId=${t.modelId} maxMode=${t.maxMode ?? "(unchanged)"}`);
        } catch (n) {
            this._logService.warn(`[AgentHostService] could not adopt the remote send's model into the composer session=${e}`, n);
        }
    }
    async _requestedModelForComposer(e) {
        if (this._instantiationService === void 0) return;
        const { IComposerDataService: t } = await Promise.resolve().then(()=>(nl(), XLn)), { IAIService: n } = await Promise.resolve().then(()=>(Sg(), tFd)), { IModelConfigService: i } = await Promise.resolve().then(()=>(i0(), A7i)), r = this._instantiationService.invokeFunction((a)=>({
                composerDataService: a.get(t),
                aiService: a.get(n),
                modelConfigService: a.get(i),
                logService: this._logService
            })), s = await r.composerDataService.getComposerHandleById(e);
        if (s === void 0) return;
        const o = await r.aiService.getModelDetails({
            composerId: e
        });
        return oko(r, o, s);
    }
    noteLocalStop(e, t) {
        this._rootSessionMirror?.noteLocalStop(e, t);
    }
    _startDeferredTrayMirrors(e) {
        this._deferredMirrorSessionIds.delete(e) && (this._backgroundWorkMirror?.ensureWatch(e), this._completionMirror?.ensureWatch(e));
    }
    forgetSession(e) {
        this._backgroundWorkMirror?.stop(e), this._completionMirror?.stop(e), this._childSessionMirror?.forgetSession(e), this._rootSessionMirror?.forgetSession(e), this._interactionMirrors.get(e)?.dispose(), this._interactionMirrors.delete(e), this._createdSessions.delete(e), this._prewarmedSessions.delete(e), this._deferredMirrorSessionIds.delete(e), this._lastEventIds.delete(e), this._sessionTurnLifecycleWatches.forgetSession(e);
    }
    async executeTurn(e) {
        const t = e.conversationId;
        this._rootSessionMirror?.markLocalExecution(t);
        try {
            let n = e, i = !1, r = !1, s = 0;
            const o = {
                networkPhaseDelivered: !1
            }, a = ()=>{
                r && (e.runOptions.onConnectionStateChange?.({
                    state: "connected"
                }), r = !1);
            };
            for(;;){
                this._throwIfRecoveryAbandoned(e, "while waiting for the agent host bridge to be recreated");
                const c = {
                    turnStarted: !1
                };
                let l = !1;
                try {
                    await this._executeTurn(n, t, c, o, a), a();
                    return;
                } catch (u) {
                    this._bridgeRecovery.snapshotPresenceAtFailure(c);
                    const h = this._cancelledIfAbortedPreSend(u, c, e);
                    if (h !== void 0) throw h;
                    if (this._isTurnAborted(e)) throw u instanceof hb ? u : new hb("Cancelled while awaiting host turn events.");
                    const p = this._bridgeRecovery.isRetryableAfterSend(u, c);
                    if (!this._bridgeRecovery.isRetryableBeforeSend(u, c) && !p) throw this._bridgeRecovery.upgradeToRetriableError(u, c) ?? u;
                    if (this._store.isDisposed) throw this._bridgeRecovery.upgradeToRetriableError(u, c) ?? u;
                    if (p && (i = !0), s++, s > this._bridgeRecovery.maxAttempts) throw O1o(u, i ? "mid_turn" : "pre_send");
                    r = !0, e.runOptions.onConnectionStateChange?.({
                        state: "reconnecting",
                        attempt: s,
                        trigger: {
                            errorClass: "RetriableError",
                            countAsTransportError: !0
                        }
                    });
                    const f = ()=>this._throwIfRecoveryAbandoned(e, "while waiting for the agent host bridge to be recreated");
                    let v = await this._bridgeRecovery.waitForRecovery(e, f);
                    for(v || this._bridgeRecovery.recordTimeout(u); !v && s < this._bridgeRecovery.maxAttempts;)await this._bridgeRecovery.backoff(s, e), s++, e.runOptions.onConnectionStateChange?.({
                        state: "reconnecting",
                        attempt: s,
                        trigger: {
                            errorClass: "RetriableError",
                            countAsTransportError: !0
                        }
                    }), v = await this._bridgeRecovery.waitForRecovery(e, f), v || this._bridgeRecovery.recordTimeout(u);
                    if (!v) throw O1o(u, i ? "mid_turn" : "pre_send");
                    this._throwIfRecoveryAbandoned(e, "while waiting for the agent host bridge to be recreated"), this._logService.info(i ? `[AgentHostService] agent host bridge restored; resuming the in-flight turn from checkpoint for session=${t}` : `[AgentHostService] agent host bridge restored; retrying the pre-send turn for session=${t}`), this._metricsService?.increment({
                        stat: F1o,
                        tags: {
                            outcome: i ? "retried_resume" : "retried"
                        }
                    }), e.conversationActionManager.resetStream(), i && (n = await this._resumeParamsAfterRepair(e, t)), l = !0;
                } finally{
                    !c.turnStarted && !l && this._startDeferredTrayMirrors(t);
                }
            }
        } finally{
            this._rootSessionMirror?.unmarkLocalExecution(t);
        }
    }
    _isTurnAborted(e) {
        return e.abortController.signal.aborted || e.conversationActionManager.signal.aborted || e.ctx.signal?.aborted === !0;
    }
    _throwIfRecoveryAbandoned(e, t) {
        if (this._isTurnAborted(e) || this._store.isDisposed) throw new hb(`Cancelled ${t}.`);
    }
    async _resumeParamsAfterRepair(e, t) {
        const n = YZv(e.action);
        try {
            await PPd(e.ctx, n, e.resourceAccessor, t);
        } catch (i) {
            if (this._throwIfRecoveryAbandoned(e, "while hydrating request context for repair resume"), ja(i) || i instanceof hb) throw i instanceof hb ? i : new hb("Cancelled while hydrating request context for repair resume.");
            this._logService.warn("[AgentHostService] failed to hydrate request context for repair resume; using the original action context", i);
        }
        return this._throwIfRecoveryAbandoned(e, "while hydrating request context for repair resume"), {
            ...e,
            action: n
        };
    }
    _cancelledIfAbortedPreSend(e, t, n) {
        if (!(t.turnStarted || e instanceof hb || !this._isTurnAborted(n))) return new hb("Cancelled while the send was waiting on the agent host.");
    }
    async _awaitTeardownBounded(e, t) {
        if (e === void 0) return;
        const n = e.then(()=>!0, (r)=>(this._logService.warn(`[AgentHostService] ${t} failed during turn teardown`, r), !0));
        await Hp(n, this._teardownTimeoutMs) === void 0 && this._logService.warn(`[AgentHostService] ${t} did not settle within ${this._teardownTimeoutMs}ms during turn teardown; abandoning it`);
    }
    _encodeSendActionRequest(e) {
        return this._sendActionEncoder.encode(e);
    }
    _encodePrimarySendActionRequest(e, t, n) {
        return this._encodeSendActionRequest(new YVt({
            sessionId: t,
            action: e.action,
            modelId: n,
            modelDetails: e.modelDetails,
            requestedModel: e.runOptions.requestedModel,
            baseHistory: e.historyRewrite === !0 ? e.conversationState : void 0,
            turnOptions: z1o(e.runOptions, {
                subagentSmartModeAutoRun: e.subagentSmartModeAutoRun
            }),
            requestContextDecoration: e.requestContextDecoration
        }));
    }
    async _executeTurn(e, t, n, i, r) {
        const s = AbortSignal.any([
            e.abortController.signal,
            e.conversationActionManager.signal,
            e.ctx.signal
        ]);
        if (s.aborted) throw new hb("Cancelled before host execution started.");
        const o = e.runOptions.requestedModel, a = e.modelDetails?.modelId ?? o?.modelId;
        if (!a) throw new Error("[AgentHostService] Missing model id for host-backed agent execution");
        const c = e.modelDetails, l = z1o(e.runOptions, {
            subagentSmartModeAutoRun: e.subagentSmartModeAutoRun
        }), u = L4e(e.ctx), h = u === void 0 ? void 0 : {
            traceId: u.traceId,
            spanId: u.spanId,
            traceFlags: u.traceFlags
        }, p = performance.now(), g = [
            this._bridgeWait.waitUntilRegistered(s)
        ], f = Promise.all(g), v = this._encodePrimarySendActionRequest(e, t, a), b = this._sendActionEncoder.lastByteSnapshot();
        await f;
        const y = performance.now() - p, T = e.runOptions.onNetworkPhaseStart !== void 0 || e.runOptions.onPreSendTimings !== void 0 || e.runOptions.onHeader !== void 0 || e.runOptions.onConnectionStateChange !== void 0 || e.runOptions.onFirstMessage !== void 0 || e.runOptions.onFirstMessageNetwork !== void 0 || e.runOptions.onFirstNonHeartbeatResponse !== void 0 || e.runOptions.onTtftBreakdown !== void 0 || e.runOptions.onTurnRuntimeSelected !== void 0, E = performance.now();
        await wQv(this._ensureSession(t, e, s), s);
        const A = performance.now() - E;
        n.registrationGenerationAtStart = this._providerService.getRegistrationDiagnostics?.()?.generation;
        const R = new ktt({
            sessionId: t,
            lastEventId: this._lastEventIds.get(t)
        });
        let D, P, N = 0, O = Promise.resolve(), F, H = 0;
        const $ = this._sessionTurnLifecycleWatches.bindExecution({
            sessionId: t,
            runOptions: e.runOptions,
            delivery: i,
            getPreSendTimings: ()=>({
                    bridgeWaitMs: y,
                    ensureSessionMs: A,
                    lifecycleReadyMs: N,
                    sendActionMs: H,
                    sendActionResolvedAt: F,
                    requestContextByteSnapshot: b
                })
        });
        let W, G, q = !1;
        const z = [], X = new Map, Y = new Map;
        let Z = !1, K;
        const J = async ()=>{
            const re = W;
            if (re !== void 0 && G !== re) {
                G = re;
                const ue = TTh(s), ce = kQv(s);
                await this._awaitTeardownBounded(this._providerService.cancelQueuedTurn(new hZi({
                    sessionId: t,
                    turnId: re,
                    reason: ue,
                    initiatedBy: ce
                }).toBinary()), "cancelling the queued host turn"), await this._awaitTeardownBounded(this._providerService.interruptTurn(new ytt({
                    sessionId: t,
                    turnId: re,
                    reason: ue,
                    initiatedBy: ce
                }).toBinary()), "interrupting the host turn");
            }
            q || (q = !0, await this._awaitTeardownBounded(D?.return?.(), "attach stream close")), $.cancel();
        }, ne = ()=>{
            J();
        };
        s.addEventListener("abort", ne, {
            once: !0
        });
        let ee = this._interactionMirrors.get(t);
        if (ee === void 0) {
            const re = new UQi(t, this._providerService, this._logService, ()=>{
                this._interactionMirrors.get(t) === re && this._interactionMirrors.delete(t);
            });
            ee = re, this._interactionMirrors.set(t, re);
        }
        let se = 0;
        try {
            se = performance.now();
            const re = this._providerService.sendAction(v, h);
            ee.bindSurface(e), T && (O = this._sessionTurnLifecycleWatches.beginReady(t, s).then((_e)=>{
                N = _e;
            })), O.catch(()=>{}), D = this._providerService.attachSession(R.toBinary())[Symbol.asyncIterator](), P = D.next();
            const ue = await re;
            if (F = performance.now(), H = F - se, n.turnStarted = !0, this._childSessionMirror?.ensureDiscovery(), this._startDeferredTrayMirrors(t), r?.(), W = s3n.fromBinary(ue).turnId, !W) throw new Error("[AgentHostService] Host-backed agent execution did not return a turn id");
            T && $.startPump(()=>W), $.flushDeferredNetworkPhase(), $.flushPending(W);
            const ce = async (_e)=>{
                const me = await this._providerService.sendAction(this._encodeSendActionRequest(new YVt({
                    sessionId: t,
                    action: _e,
                    modelId: a,
                    modelDetails: c,
                    requestedModel: o,
                    turnOptions: l,
                    requestContextDecoration: e.requestContextDecoration
                })), h), Ce = s3n.fromBinary(me).turnId;
                if (!Ce) throw new Error("[AgentHostService] Host-backed follow-up turn did not return a turn id");
                W = Ce, $.flushPending(Ce);
                const xe = _e.action.case === "userMessageAction" ? _e.action.value.userMessage : void 0;
                return xe !== void 0 && e.conversationActionManager.markMessageAsProcessed(xe), Ce;
            }, de = (_e)=>{
                for (const me of X.values())if (me === _e) return !0;
                for (const me of Y.values())if (me === _e) return !0;
                return !1;
            }, le = async (_e)=>{
                try {
                    await this._providerService.interruptTurn(new ytt({
                        sessionId: t,
                        turnId: _e,
                        reason: "User submitted a follow-up message",
                        initiatedBy: _oe.FOLLOW_UP
                    }).toBinary());
                } catch (me) {
                    this._logService.warn("[AgentHostService] interrupting host turn for a follow-up message failed", me);
                }
            }, ye = async ()=>{
                const _e = W;
                !Z || _e === void 0 || s.aborted || de(_e) || (Z = !1, await le(_e));
            };
            if (K = e.conversationActionManager.run(e.ctx, {
                write: async (_e)=>{
                    if (_e.action.case === "injectContextAction") {
                        const me = W;
                        if (me === void 0 || s.aborted) return;
                        _e.action.value.expectedRunId = e.runOptions.generationUUID ?? me, this._logService.info(`[AgentHostService] steering InjectContext via sendAction expectedRunId=${_e.action.value.expectedRunId} turnId=${me}`), await this._providerService.sendAction(new YVt({
                            sessionId: t,
                            action: _e,
                            modelId: a,
                            modelDetails: c,
                            requestedModel: o,
                            turnOptions: l,
                            requestContextDecoration: e.requestContextDecoration
                        }).toBinary(), h);
                        return;
                    }
                    if (_e.action.case === "userMessageAction") {
                        if (z.push(_e), W === void 0 || s.aborted) return;
                        Z = !0, await ye();
                        return;
                    }
                    _e.action.case !== "cancelAction" && this._logService.warn("[AgentHostService] dropping conversation action with no host delivery path", {
                        sessionId: t,
                        actionCase: _e.action.case
                    });
                }
            }), s.aborted) throw await J(), new hb("Cancelled before host turn started.");
            for(;;){
                if (D === void 0) throw new Error("[AgentHostService] attach stream was not opened after sendAction");
                const _e = await (P ?? D.next());
                if (P = void 0, _e.done) throw s.aborted ? new hb("Cancelled while awaiting host turn events.") : new Error("[AgentHostService] Agent host event stream ended before the turn completed; please retry.");
                const me = _e.value, Ce = oLe.fromBinary(me);
                switch(this._lastEventIds.set(t, Ce.eventId), Ce.event.case){
                    case "interactionUpdate":
                        {
                            const xe = Ce.event.value;
                            await e.interactionListener.sendUpdate(e.ctx, xe), xe.message.case === "toolCallCompleted" && (Y.delete(xe.message.value.callId), await ye());
                            break;
                        }
                    case "conversationState":
                        {
                            await e.checkpointHandler.handleCheckpoint(e.ctx, Ce.event.value);
                            break;
                        }
                    case "turnInteractionsSuperseded":
                        {
                            const xe = Ce.event.value.continuation;
                            switch(xe.case){
                                case "replayActionFromState":
                                    await e.onInteractionHistorySuperseded?.({
                                        case: "replayActionFromState",
                                        state: xe.value
                                    });
                                    break;
                                case "resumeFromCheckpoint":
                                    await e.onInteractionHistorySuperseded?.({
                                        case: "resumeFromCheckpoint",
                                        state: xe.value
                                    });
                                    break;
                                case void 0:
                                    throw new Error("[AgentHostService] interaction supersession event is missing its continuation");
                                default:
                                    {
                                        const Le = xe;
                                        throw new Error(`[AgentHostService] unhandled interaction supersession continuation: ${JSON.stringify(Le)}`);
                                    }
                            }
                            break;
                        }
                    case "turnStarted":
                        Ce.event.value.turnId !== W && this._logService.warn("[AgentHostService] host turnStarted event mismatched turnId", {
                            sessionId: t,
                            expectedTurnId: W,
                            actualTurnId: Ce.event.value.turnId
                        });
                        break;
                    case "turnAwaitingInput":
                        {
                            const { interactionId: xe, question: Le } = Ce.event.value;
                            if (!xe || Le.case === void 0) throw new Error("[AgentHostService] Host interaction event is missing its interaction id or question");
                            if (X.set(xe, Ce.event.value.turnId), Le.case === "interactionQuery" && Le.value.query.case === "askQuestionInteractionQuery") {
                                const Be = Le.value.query.value.toolCallId;
                                Be && Y.set(Be, Ce.event.value.turnId);
                            }
                            ee.observeSessionEvent(Ce);
                            break;
                        }
                    case "interactionResolved":
                        {
                            X.delete(Ce.event.value.interactionId), ee.observeSessionEvent(Ce), await ye();
                            break;
                        }
                    case "turnSettled":
                        if (Ce.event.value.turnId === W) {
                            await $.waitForFinished(W), Z = !1;
                            const xe = Ce.event.value.outcome;
                            if (!s.aborted && (xe === ZX.COMPLETED || xe === ZX.INTERRUPTED)) {
                                const Le = z.shift();
                                if (Le !== void 0) {
                                    if (await ce(Le), s.aborted) throw await J(), new hb("Cancelled while starting host follow-up turn.");
                                    break;
                                }
                            }
                            switch(xe){
                                case ZX.COMPLETED:
                                    return;
                                case ZX.FAILED:
                                    throw SQv(Ce.event.value);
                                case ZX.INTERRUPTED:
                                    throw new hb(Ce.event.value.detail ?? "host turn interrupted");
                                default:
                                    throw new Error("[AgentHostService] host turn settled with unspecified outcome");
                            }
                        }
                        break;
                    case "subagentStarted":
                        {
                            const xe = Ce.event.value;
                            this._childSessionMirror?.onSubagentStarted({
                                parentSessionId: t,
                                childSessionId: xe.childSessionId,
                                parentToolCallId: xe.parentToolCallId,
                                rootSessionId: xe.rootSessionId,
                                turnId: xe.turnId
                            });
                            break;
                        }
                    case "backgroundTaskCompleted":
                        break;
                    case void 0:
                        throw new Error("[AgentHostService] Received agent-host session event without a payload");
                    default:
                        {
                            const xe = Ce.event;
                            throw new Error(`Unhandled agent-host session event: ${JSON.stringify(xe)}`);
                        }
                }
            }
        } finally{
            this._bridgeRecovery.snapshotPresenceAtFailure(n), s.removeEventListener("abort", ne), e.conversationActionManager.close(), P?.catch(()=>{}), await this._awaitTeardownBounded(K, "conversation action pump"), await this._awaitTeardownBounded(D?.return?.(), "attach stream close"), $.cancel(), await this._awaitTeardownBounded($.pump, "turn lifecycle pump"), $.dispose();
        }
    }
    prewarmSession(e, t = "submit") {
        if (this._store.isDisposed || this._createdSessions.has(e) || this._prewarmedSessions.has(e) || this._sessionHydrateInFlight.has(e)) return;
        const n = this._prewarmSession(e).finally(()=>{
            this._sessionHydrateInFlight.get(e) === n && this._sessionHydrateInFlight.delete(e);
        });
        this._sessionHydrateInFlight.set(e, n), n.then((i)=>{
            i === "hydrated" && (this._createdSessions.has(e) ? this._prewarmedSessions.delete(e) : (this._prewarmedSessions.add(e), this._createdSessions.add(e), this._deferredMirrorSessionIds.add(e))), this._metricsService?.increment({
                stat: "cursor.agent_host.session_prewarm",
                tags: {
                    outcome: i,
                    trigger: t
                }
            });
        }, (i)=>{
            this._store.isDisposed || (this._logService.debug("[AgentHostService] session prewarm failed; the turn will redo session setup", i), this._metricsService?.increment({
                stat: "cursor.agent_host.session_prewarm",
                tags: {
                    outcome: "failed",
                    trigger: t
                }
            }));
        });
    }
    async _awaitSessionHydrateInFlight(e) {
        const t = this._sessionHydrateInFlight.get(e);
        if (t !== void 0) try {
            await t;
        } catch  {}
    }
    async _prewarmSession(e) {
        const t = AbortSignal.any([
            AbortSignal.timeout(this._sessionPrewarmTimeoutMs),
            this._lifetimeAbort.signal
        ]);
        if (await this._providerService.waitForProviderRegistration?.(t), this._store.isDisposed || this._store.isDisposed || this._createdSessions.has(e)) return "noop";
        const n = await this._providerService.ensureLoaded(e);
        return this._store.isDisposed || this._createdSessions.has(e) ? "noop" : n ? "hydrated" : "noop";
    }
    async _ensureSession(e, t, n) {
        await this._providerService.waitForProviderRegistration?.(n);
        let i = this._createdSessions.has(e) && this._prewarmedSessions.has(e);
        if (this._createdSessions.has(e) && !i) {
            this._deferredMirrorSessionIds.add(e);
            return;
        }
        const r = t.resourceAccessor.agentHostSessionOptionsBase;
        if (!r) throw new Error("[AgentHostService] Missing host session bootstrap options on resource accessor");
        if (i) {
            await this._createOrRebindHostSession(e, t, r, !1), this._prewarmedSessions.delete(e);
            return;
        }
        const s = t.action.action.case === "resumeAction" || (t.conversationState.turns?.length ?? 0) > 0;
        if (i = this._createdSessions.has(e) && this._prewarmedSessions.has(e), i) {
            await this._createOrRebindHostSession(e, t, r, !1), this._prewarmedSessions.delete(e);
            return;
        }
        let o = !s;
        if (s && (await this._providerService.ensureLoaded(e) || (o = !0)), !s && (await this._awaitSessionHydrateInFlight(e), i = this._createdSessions.has(e) && this._prewarmedSessions.has(e), i)) {
            await this._createOrRebindHostSession(e, t, r, !1), this._prewarmedSessions.delete(e), this._deferredMirrorSessionIds.add(e);
            return;
        }
        await this._createOrRebindHostSession(e, t, r, o), this._createdSessions.add(e), this._prewarmedSessions.delete(e), this._deferredMirrorSessionIds.add(e);
    }
    async _createOrRebindHostSession(e, t, n, i) {
        const r = t.blobStore;
        try {
            await this._providerService.createSession(e, {
                ...n,
                ...i ? {
                    initialHistory: t.conversationState.toBinary()
                } : {},
                getBlob: (s)=>r.getBlob(qh(), s),
                setBlob: async ({ blobId: s, blobData: o, locallyOnly: a })=>{
                    if (a) {
                        await r.setBlobLocallyOnly(qh(), s, o);
                        return;
                    }
                    await r.setBlob(qh(), s, o);
                }
            });
        } catch (s) {
            if (!(s instanceof Error) || !/agent host session already exists/i.test(s.message)) throw s;
        }
    }
}, Z1o = class extends we {
    constructor(e, t){
        super(), this._instantiationService = e, this._sessions = this._register(new po), this._watchSessionsEmitter = this._register(new ve), t !== void 0 && (this._highLevelDelegatePromise = Promise.resolve(t));
    }
    async _getHighLevelDelegate() {
        return this._highLevelDelegatePromise || (this._highLevelDelegatePromise = (async ()=>{
            const { AgentCompatService: e } = await Promise.resolve().then(()=>(LQi(), E1o));
            return ETh(this._store, this._instantiationService.createInstance(e, void 0));
        })()), this._highLevelDelegatePromise;
    }
    async runAgentLoop(e, t) {
        return (await this._getHighLevelDelegate()).runAgentLoop(e, t);
    }
    async resume(e, t) {
        return (await this._getHighLevelDelegate()).resume(e, t);
    }
    async summarize(e, t) {
        return (await this._getHighLevelDelegate()).summarize(e, t);
    }
    async flushTranscriptForConversation(e) {
        return (await this._getHighLevelDelegate()).flushTranscriptForConversation(e);
    }
    prewarmSession(e, t) {}
    async createSession(e, t) {
        this._createSession(e, t);
    }
    async listSessions(e) {
        return this._listSessions(Awo.fromBinary(e));
    }
    watchSessions(e, t) {
        const n = cZi.fromBinary(e);
        return this._watchSessions(n, t);
    }
    async sendMessage(e) {
        return this._sendMessage(Uwo.fromBinary(e));
    }
    async sendAction(e) {
        return this._sendAction(YVt.fromBinary(e));
    }
    async deleteSession(e) {
        return this._deleteSession(o3n.fromBinary(e));
    }
    async interruptTurn(e) {
        return this._interruptTurn(ytt.fromBinary(e));
    }
    async cancelQueuedTurn(e) {
        return this._cancelQueuedTurn(hZi.fromBinary(e));
    }
    async respondToInteraction(e) {
        return this._respondToInteraction(a3n.fromBinary(e));
    }
    watchSessionInteractions(e, t) {
        return this._watchSessionInteractions(pZi.fromBinary(e), t);
    }
    watchSessionBackgroundWork(e, t) {
        return this._watchSessionBackgroundWork(gZi.fromBinary(e), t);
    }
    watchSessionTurnLifecycle(e, t) {
        return this._watchSessionTurnLifecycle(vZi.fromBinary(e), t);
    }
    async abortBackgroundWork(e) {
        return this._abortBackgroundWork(Ywo.fromBinary(e));
    }
    async abortAllBackgroundWork(e) {
        return this._abortAllBackgroundWork(Zwo.fromBinary(e));
    }
    attachSession(e, t) {
        return this._attachSession(ktt.fromBinary(e), t);
    }
    async getSessionBlobs(e) {
        return this._getSessionBlobs(bZi.fromBinary(e));
    }
    readFile(e, t) {
        return this._readFile(eCo.fromBinary(e), t);
    }
    async listWorkspaces(e) {
        return this._listWorkspaces(Lwo.fromBinary(e));
    }
    noteLocalStop(e, t) {}
    _emitWatch(e) {
        this._watchSessionsEmitter.fire(e.toBinary());
    }
}, B3n = class extends Z1o {
    constructor(e, t, n){
        super(t, e), n.debug("[LegacyAgentHostService] initialized");
    }
    _createSession(e, t) {
        const n = new kTh(e, t);
        if (this._sessions.set(e, n), t.initialHistory !== void 0) {
            const i = Hm.fromBinary(t.initialHistory);
            this._appendAttachEvent(n, new oLe({
                eventId: 1n,
                event: {
                    case: "conversationState",
                    value: i
                }
            }));
        }
    }
    async _listSessions(e) {
        const t = [
            ...this._sessions.values()
        ].map((n)=>new sLe({
                sessionId: n.sessionId,
                status: q1o(n.lastTurnId),
                lastEventId: n.lastEventId
            }));
        return dLe(new Rwo({
            sessions: t
        }));
    }
    _watchSessions(e, t) {
        const n = new btt({
            event: {
                case: "snapshot",
                value: new Dwo({
                    sessions: [
                        ...this._sessions.values()
                    ].map((i)=>new sLe({
                            sessionId: i.sessionId,
                            status: q1o(i.lastTurnId),
                            lastEventId: i.lastEventId
                        }))
                })
            }
        }).toBinary();
        return CTh([
            n
        ], (i)=>this._watchSessionsEmitter.event(i), void 0, t);
    }
    async _sendMessage(e) {
        const t = this._startTurn(e.sessionId, e.turnOptions?.generationUuid ?? "turn");
        return dLe(new Gwo({
            turnId: t
        }));
    }
    async _sendAction(e) {
        const t = this._startTurn(e.sessionId, e.turnOptions?.generationUuid ?? "turn");
        return dLe(new s3n({
            turnId: t
        }));
    }
    async _deleteSession(e) {
        const t = this._sessions.get(e.sessionId);
        if (t) {
            this._appendWatchEvent(t, new btt({
                event: {
                    case: "deleted",
                    value: new Pwo({
                        sessionId: e.sessionId
                    })
                }
            }));
            try {
                t.dispose();
            } finally{
                this._sessions.deleteAndLeak(e.sessionId);
            }
        }
        return dLe(new Vwo);
    }
    async _interruptTurn(e) {
        const t = this._sessions.get(e.sessionId);
        let n = !1;
        return t?.lastTurnId !== void 0 && (t.lastTurnId === e.turnId || e.sessionTree) && (this._appendAttachEvent(t, new oLe({
            eventId: t.lastEventId + 1n,
            event: {
                case: "turnSettled",
                value: new yZi({
                    turnId: t.lastTurnId,
                    outcome: ZX.INTERRUPTED,
                    detail: e.reason,
                    interruptedBy: e.initiatedBy
                })
            }
        })), t.lastTurnId = void 0, n = !0), dLe(new dZi({
            interrupted: n
        }));
    }
    async _cancelQueuedTurn(e) {
        return dLe(new jwo({
            cancelled: !1
        }));
    }
    async _respondToInteraction(e) {
        return dLe(new c3n({
            status: hCt.NOT_FOUND
        }));
    }
    async *_watchSessionInteractions(e) {
        yield new mZi({
            event: {
                case: "snapshot",
                value: {
                    interactions: []
                }
            }
        }).toBinary();
    }
    _watchSessionBackgroundWork(e, t) {
        const i = [
            ...this._sessions.get(e.sessionId)?.backgroundWork.values() ?? []
        ], r = new fZi({
            event: {
                case: "snapshot",
                value: {
                    work: i
                }
            }
        }).toBinary();
        return (async function*() {
            t?.isCancellationRequested || (yield r);
        })();
    }
    async *_watchSessionTurnLifecycle(e) {}
    async _abortBackgroundWork(e) {
        const n = this._sessions.get(e.sessionId)?.backgroundWork.delete(e.workId) ?? !1;
        return dLe(new Xwo({
            aborted: n
        }));
    }
    async _abortAllBackgroundWork(e) {
        const t = this._sessions.get(e.sessionId), n = t ? t.backgroundWork.size : 0;
        return t?.backgroundWork.clear(), dLe(new Qwo({
            abortedCount: n
        }));
    }
    _attachSession(e, t) {
        const n = this._sessions.get(e.sessionId);
        if (!n) return Sjt();
        const i = e.lastEventId ?? -1n, r = n.eventLog.filter((s)=>s.eventId > i).map((s)=>s.bytes);
        return CTh(r, (s)=>n.attachEmitter.event(s), n.closeEmitter.event, t);
    }
    async _getSessionBlobs(e) {
        throw new Error(`Agent host session blobs are not served by the legacy agent host: ${e.sessionId}`);
    }
    async *_readFile(e) {
        throw new Error("Agent host file reads are not served by the legacy agent host");
    }
    async _listWorkspaces(e) {
        return dLe(new Nwo);
    }
    _startTurn(e, t) {
        const n = this._sessions.get(e);
        return n && (n.lastTurnId = t, this._appendAttachEvent(n, new oLe({
            eventId: n.lastEventId + 1n,
            event: {
                case: "turnStarted",
                value: new tCo({
                    turnId: t
                })
            }
        })), this._emitWatch(new btt({
            event: {
                case: "added",
                value: new Mwo({
                    session: new sLe({
                        sessionId: e,
                        status: V1e.IDLE,
                        lastEventId: n.lastEventId
                    })
                })
            }
        })), this._appendWatchEvent(n, new btt({
            event: {
                case: "updated",
                value: new lZi({
                    session: new sLe({
                        sessionId: e,
                        status: V1e.RUNNING,
                        lastEventId: n.lastEventId
                    })
                })
            }
        })), this._appendAttachEvent(n, new oLe({
            eventId: n.lastEventId + 1n,
            event: {
                case: "turnSettled",
                value: new yZi({
                    turnId: t,
                    outcome: ZX.COMPLETED
                })
            }
        })), n.lastTurnId = void 0), t;
    }
    _appendAttachEvent(e, t) {
        const n = t.toBinary();
        e.lastEventId = t.eventId, e.eventLog.push({
            eventId: t.eventId,
            bytes: n
        }), e.attachEmitter.fire(n), e.watchEmitter.fire(new btt({
            event: {
                case: "updated",
                value: new lZi({
                    session: new sLe({
                        sessionId: e.sessionId,
                        status: q1o(e.lastTurnId),
                        lastEventId: e.lastEventId
                    })
                })
            }
        }).toBinary());
    }
    _appendWatchEvent(e, t) {
        this._emitWatch(t), e.watchEmitter.fire(t.toBinary());
    }
}, B3n = ie([
    C(1, _t),
    C(2, Wn)
], B3n), U3n = class extends Z1o {
    constructor(e, t, n, i, r, s, o){
        const a = e === void 0 ? new X1o(n, r, {
            backgroundWorkService: i,
            instantiationService: t,
            metricsService: s,
            experimentService: o
        }) : void 0, c = new He;
        super(t, e ?? (a ? CQv(t, a, c) : void 0)), this._providerService = n, this._register(c), this._executionStrategy = a, a && this._register(rn(()=>a.dispose())), r.debug("[ExtensionHostAgentHostService] initialized");
    }
    prewarmSession(e, t) {
        this._executionStrategy?.prewarmSession(e, t);
    }
    _createSession(e, t) {
        this._providerService.createSession(e, t);
    }
    async _listSessions(e) {
        return this._providerService.listSessions(e.toBinary());
    }
    _watchSessions(e, t) {
        return t?.isCancellationRequested ? Sjt() : this._providerService.watchSessions(e.toBinary(), t);
    }
    async _sendMessage(e) {
        return await this._executionStrategy?.prepareRemoteSend(e), this._providerService.sendMessage(e.toBinary());
    }
    async _sendAction(e) {
        return await this._executionStrategy?.prepareRemoteSend(e), this._providerService.sendAction(e.toBinary());
    }
    async _deleteSession(e) {
        const t = await this._providerService.deleteSession(e.toBinary());
        return this._executionStrategy?.forgetSession(e.sessionId), t;
    }
    async _interruptTurn(e) {
        return this._providerService.interruptTurn(e.toBinary());
    }
    async _cancelQueuedTurn(e) {
        return this._providerService.cancelQueuedTurn(e.toBinary());
    }
    noteLocalStop(e, t) {
        this._executionStrategy?.noteLocalStop(e, t);
    }
    async _respondToInteraction(e) {
        return this._providerService.respondToInteraction(e.toBinary());
    }
    async *_watchSessionInteractions(e) {
        yield* this._providerService.watchSessionInteractions(e.toBinary());
    }
    _watchSessionBackgroundWork(e, t) {
        return t?.isCancellationRequested ? Sjt() : this._providerService.watchSessionBackgroundWork(e.toBinary());
    }
    _watchSessionTurnLifecycle(e, t) {
        return t?.isCancellationRequested ? Sjt() : this._providerService.watchSessionTurnLifecycle(e.toBinary());
    }
    async _abortBackgroundWork(e) {
        return this._providerService.abortBackgroundWork(e.toBinary());
    }
    async _abortAllBackgroundWork(e) {
        return this._providerService.abortAllBackgroundWork(e.toBinary());
    }
    _attachSession(e, t) {
        return t?.isCancellationRequested ? Sjt() : this._providerService.attachSession(e.toBinary(), t);
    }
    _getSessionBlobs(e) {
        return this._providerService.getSessionBlobs(e.toBinary());
    }
    _readFile(e, t) {
        return t?.isCancellationRequested ? Sjt() : this._providerService.readFile(e.toBinary(), t);
    }
    _listWorkspaces(e) {
        return this._providerService.listWorkspaces(e.toBinary());
    }
}, U3n = ie([
    C(1, _t),
    C(2, G_e),
    C(3, Jj),
    C(4, Wn),
    C(5, vp),
    C(6, Kr)
], U3n), $3n = class extends we {
    constructor(e, t, n, i){
        super(), this.agentRemoteWorkspacePolicyService = n, this._delegate = t.isCursorAgentHostEnabled() ? this._register(e.createInstance(U3n, void 0)) : this._register(e.createInstance(B3n, void 0)), i.info(`[AgentHostService] using ${t.isCursorAgentHostEnabled() ? "extension-host" : "legacy"} implementation`);
    }
    _assertAgentAllowed() {
        const e = this.agentRemoteWorkspacePolicyService.decision;
        if (!e.allowed) throw new Error(e.message);
    }
    runAgentLoop(e, t) {
        return this._assertAgentAllowed(), this._delegate.runAgentLoop(e, t);
    }
    resume(e, t) {
        return this._assertAgentAllowed(), this._delegate.resume(e, t);
    }
    summarize(e, t) {
        return this._assertAgentAllowed(), this._delegate.summarize(e, t);
    }
    flushTranscriptForConversation(e) {
        return this._delegate.flushTranscriptForConversation(e);
    }
    prewarmSession(e, t) {
        this.agentRemoteWorkspacePolicyService.decision.allowed && this._delegate.prewarmSession(e, t);
    }
    createSession(e, t) {
        return this._assertAgentAllowed(), this._delegate.createSession(e, t);
    }
    listSessions(e) {
        return this._delegate.listSessions(e);
    }
    watchSessions(e, t) {
        return this._delegate.watchSessions(e, t);
    }
    sendMessage(e) {
        return this._assertAgentAllowed(), this._delegate.sendMessage(e);
    }
    sendAction(e) {
        return this._assertAgentAllowed(), this._delegate.sendAction(e);
    }
    deleteSession(e) {
        return this._delegate.deleteSession(e);
    }
    interruptTurn(e) {
        return this._delegate.interruptTurn(e);
    }
    cancelQueuedTurn(e) {
        return this._delegate.cancelQueuedTurn(e);
    }
    respondToInteraction(e) {
        return this._delegate.respondToInteraction(e);
    }
    watchSessionInteractions(e, t) {
        return this._delegate.watchSessionInteractions(e, t);
    }
    watchSessionBackgroundWork(e, t) {
        return this._delegate.watchSessionBackgroundWork(e, t);
    }
    watchSessionTurnLifecycle(e, t) {
        return this._delegate.watchSessionTurnLifecycle(e, t);
    }
    abortBackgroundWork(e) {
        return this._delegate.abortBackgroundWork(e);
    }
    abortAllBackgroundWork(e) {
        return this._delegate.abortAllBackgroundWork(e);
    }
    attachSession(e, t) {
        return this._delegate.attachSession(e, t);
    }
    getSessionBlobs(e) {
        return this._delegate.getSessionBlobs(e);
    }
    readFile(e, t) {
        return this._delegate.readFile(e, t);
    }
    listWorkspaces(e) {
        return this._delegate.listWorkspaces(e);
    }
    noteLocalStop(e, t) {
        this._delegate.noteLocalStop(e, t);
    }
}, $3n = ie([
    C(0, _t),
    C(1, Vde),
    C(2, GOn),
    C(3, Wn)
], $3n), mn(GQi, $3n, 0);

}
