import { Dhk, Mhk, Phk, trl } from "./Aeg.js";
import { Ei, Gt, Nt, Pn, Qe, Vh, Ya, da, m1, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Fll, Hze, Ill, Kbk, Khg, Kll, Syk, Vhg, Yhg, Yll, kyk, wyk, yAn, yyk } from "./Ycg.js";
import { tIi } from "./agentCompatService.js";
import { Zbk, bhg } from "./agentHostBackgroundWorkMirror.js";
import { mhg } from "./agentHostBridgeLoss.js";
import { Bll, Ybk, pos } from "./agentHostBridgeRecovery.js";
import { fhg, mos } from "./agentHostBridgeWait.js";
import { Lhg, iyk } from "./agentHostChildSessionMirror.js";
import { Bhg, ayk } from "./agentHostCompletionMirror.js";
import { fos, gos } from "./agentHostInteractionMirror.js";
import { TX, fle } from "./agentHostProviderService.js";
import { jhg, uyk } from "./agentHostRootSessionMirror.js";
import { qhg, vyk } from "./agentHostSendActionEncoder.js";
import { _yk, zhg } from "./agentHostSessionState.js";
import { $hg, myk } from "./agentHostSessionTurnLifecycleWatches.js";
import { UCi, jCi } from "./agentRemoteWorkspacePolicy.js";
import { $rs, $sl, $zt, Dsl, Hrs, Hsl, JPe, K4e, KCe, Krs, Ksl, Lze, Msl, Oze, Psl, Qsl, Sle, Uzt, VCe, Vrs, Vsl, Vxn, Wrs, Xrs, Ysl, Zsl, bEi, fEi, gEi, gat, hG, jJ, jTt, jrs, mEi, pEi, qrs, qxn, vEi, yEi, zrs, zsl, zxn } from "./agent_host_pb.js";
import { ju, nf } from "./agent_pb.js";
import { Dc } from "./aiService.js";
import { qn } from "./async.js";
import { ZD, jO } from "./backgroundWorkRegistry.js";
import { sll } from "./blobEncryptionKeyHeader.js";
import { l1m } from "./common_2.ts";
import { Pl } from "./composerDataServiceTypes.js";
import { kie, zpe } from "./cursorAgentHostService.js";
import { T1 } from "./errors.ts";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { hX } from "./index_12.ts";
import { Ng } from "./index_3.ts";
import { It, dn } from "./instantiation.js";
import { Xp, qst } from "./ipa.js";
import { Ji, Li } from "./log.js";
import { Uh, ip } from "./metricsService.js";
import { of } from "./modelConfigServiceTypes.js";
import { nrl } from "./requestedModelForComposer.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Aki, TCm, Zzr } from "./yBp.js";
var iVt, Xll, Zll, Qll, Jll, iIi, rIi, sIi;
export { Jll, Qll, Xll, Zll, iIi, iVt, rIi, sIi };
var __wakaru_SAn_initialized = false;
export function SAn() {
if (__wakaru_SAn_initialized) return;
__wakaru_SAn_initialized = true;
"use strict";
E(), qn(), Gt(), Ei(), Qe(), It(), Rn(), It(), Ji(), zpe(), jCi(), _s(), ip(), fle(), Ybk(), fhg(), Ng(), hX(), ju(), hG(), sll(), Zbk(), iyk(), ayk(), fos(), uyk(), myk(), nrl(), jO(), mhg(), vyk(), _yk(), fhg(), iVt = jn("agentHostService"), Xll = 5e3, Zll = 3e4, Qll = class extends st {
    constructor(t, e, n, i){
        super(), this._providerService = t, this._logService = e, this._createdSessions = new Set, this._lastEventIds = new Map, this._interactionMirrors = new Map, this._deferredMirrorSessionIds = new Set, this._sessionHydrateInFlight = new Map, this._prewarmedSessions = new Set, this._sendActionEncoder = new qhg, this._lifetimeAbort = new AbortController, this._sessionTurnLifecycleWatches = new $hg(this._providerService);
        const r = n !== void 0 && typeof n == "object" && !("upsertSubagentWork" in n) ? n : {
            backgroundWorkService: n,
            restartDelayMs: i
        }, s = r.backgroundWorkService;
        this._teardownTimeoutMs = r.teardownTimeoutMs ?? Xll, this._sessionPrewarmTimeoutMs = r.sessionPrewarmTimeoutMs ?? Zll, this._metricsService = r.metricsService, this._bridgeWait = new mos({
            initialTimeoutMs: r.bridgeWaitInitialTimeoutMs,
            retryTimeoutMs: r.bridgeWaitRetryTimeoutMs,
            maxAttempts: r.bridgeWaitMaxAttempts
        }, this._providerService, this._logService, r.metricsService, r.experimentService), this._bridgeRecovery = new pos({
            isDisposed: ()=>this._store.isDisposed,
            signal: this._lifetimeAbort.signal
        }, {
            windowMs: r.bridgeRecoveryWindowMs,
            maxAttempts: r.bridgeRecoveryMaxAttempts,
            backoffMs: r.bridgeRecoveryBackoffMs
        }, this._providerService, this._logService, r.metricsService), this._instantiationService = r.instantiationService, this._backgroundWorkMirror = s ? new bhg(this._providerService, s, this._logService, r.restartDelayMs) : void 0, this._completionMirror = s ? new Bhg(this._providerService, s, this._logService, {
            restartDelayMs: r.restartDelayMs,
            waitForCompletionDelivery: (o, a)=>this._childSessionMirror?.waitForChildHydration(o, a)
        }) : void 0, r.childSessionMirror ? (this._childSessionMirror = r.childSessionMirror, this._ownsChildSessionMirror = !1) : r.instantiationService || r.childSessionAdoptionServices ? (this._childSessionMirror = new Lhg(this._providerService, this._logService, r.instantiationService, s, r.childSessionAdoptionServices), this._ownsChildSessionMirror = !0) : (this._childSessionMirror = void 0, this._ownsChildSessionMirror = !1), this._childAdoptionListener = this._childSessionMirror && this._completionMirror ? this._childSessionMirror.registerAdoptionListener({
            onChildAdopted: (o)=>this._completionMirror?.ensureWatch(o),
            onChildRemoved: (o)=>this._completionMirror?.stop(o)
        }) : st.None, this._rootSessionMirror = r.instantiationService || r.childSessionAdoptionServices ? new jhg(this._providerService, this._logService, this._lastEventIds, r.instantiationService, r.childSessionAdoptionServices, {
            onSubagentStarted: (o)=>this._childSessionMirror?.onSubagentStarted(o),
            interactionMirrors: this._interactionMirrors
        }) : void 0, this._providerRegistrationListener = this._providerService.onDidChangeRegistration?.(()=>{
            this._backgroundWorkMirror?.stopAll(), this._completionMirror?.stopAll(), this._childSessionMirror?.stopAll(), this._rootSessionMirror?.stopAll(), this._createdSessions.clear(), this._prewarmedSessions.clear(), this._deferredMirrorSessionIds.clear(), this._lastEventIds.clear(), this._sessionTurnLifecycleWatches.disposeAll();
            for (const o of this._interactionMirrors.values())o.dispose();
            this._interactionMirrors.clear();
        }) ?? st.None, this._register(Pn(()=>this._lifetimeAbort.abort())), this._register(this._providerRegistrationListener), this._register(this._childAdoptionListener), this._backgroundWorkMirror && this._register(this._backgroundWorkMirror), this._completionMirror && this._register(this._completionMirror), this._ownsChildSessionMirror && this._childSessionMirror && this._register(this._childSessionMirror), this._rootSessionMirror && this._register(this._rootSessionMirror), this._register(Pn(()=>m1(...this._interactionMirrors.values()))), this._register(Pn(()=>{
            this._ownsChildSessionMirror || this._childSessionMirror?.stopAll(), this._createdSessions.clear(), this._prewarmedSessions.clear(), this._deferredMirrorSessionIds.clear(), this._lastEventIds.clear(), this._sessionTurnLifecycleWatches.disposeAll(), this._interactionMirrors.clear();
        }));
    }
    get childSessionMirrorForTest() {
        return this._childSessionMirror;
    }
    async prepareRemoteSend(t) {
        this._rootSessionMirror?.onRemoteSendMessage(t.sessionId), this._childSessionMirror?.ensureDiscovery(), this._backgroundWorkMirror?.ensureWatch(t.sessionId), this._completionMirror?.ensureWatch(t.sessionId);
        const e = Phk(t);
        if (e !== void 0) {
            await this._adoptRemoteSendModel(t.sessionId, e);
            return;
        }
        if (!(t.modelId || t.modelDetails !== void 0 || t.requestedModel !== void 0)) try {
            const n = await this._requestedModelForComposer(t.sessionId);
            if (n === void 0) return;
            t.modelId = n.modelId, t.requestedModel = n;
        } catch (n) {
            this._logService.warn(`[AgentHostService] could not resolve the composer model for remote send session=${t.sessionId}`, n);
        }
    }
    async _adoptRemoteSendModel(t, e) {
        if (this._instantiationService !== void 0) try {
            const { IComposerDataService: n } = await Promise.resolve().then(()=>(Pl(), Aki)), { IModelConfigService: i } = await Promise.resolve().then(()=>(of(), Zzr)), r = this._instantiationService.invokeFunction((o)=>({
                    composerDataService: o.get(n),
                    modelConfigService: o.get(i)
                })), s = await r.composerDataService.getComposerHandleById(t);
            if (s === void 0 || Mhk(r, s, e)) return;
            r.modelConfigService.setModelConfigForComposer(s, Dhk(e)), this._logService.info(`[AgentHostService] composer adopted the remote send's model session=${t} modelId=${e.modelId} maxMode=${e.maxMode ?? "(unchanged)"}`);
        } catch (n) {
            this._logService.warn(`[AgentHostService] could not adopt the remote send's model into the composer session=${t}`, n);
        }
    }
    async _requestedModelForComposer(t) {
        if (this._instantiationService === void 0) return;
        const { IComposerDataService: e } = await Promise.resolve().then(()=>(Pl(), Aki)), { IAIService: n } = await Promise.resolve().then(()=>(Dc(), TCm)), { IModelConfigService: i } = await Promise.resolve().then(()=>(of(), Zzr)), r = this._instantiationService.invokeFunction((a)=>({
                composerDataService: a.get(e),
                aiService: a.get(n),
                modelConfigService: a.get(i),
                logService: this._logService
            })), s = await r.composerDataService.getComposerHandleById(t);
        if (s === void 0) return;
        const o = await r.aiService.getModelDetails({
            composerId: t
        });
        return trl(r, o, s);
    }
    noteLocalStop(t, e) {
        this._rootSessionMirror?.noteLocalStop(t, e);
    }
    _startDeferredTrayMirrors(t) {
        this._deferredMirrorSessionIds.delete(t) && (this._backgroundWorkMirror?.ensureWatch(t), this._completionMirror?.ensureWatch(t));
    }
    forgetSession(t) {
        this._backgroundWorkMirror?.stop(t), this._completionMirror?.stop(t), this._childSessionMirror?.forgetSession(t), this._rootSessionMirror?.forgetSession(t), this._interactionMirrors.get(t)?.dispose(), this._interactionMirrors.delete(t), this._createdSessions.delete(t), this._prewarmedSessions.delete(t), this._deferredMirrorSessionIds.delete(t), this._lastEventIds.delete(t), this._sessionTurnLifecycleWatches.forgetSession(t);
    }
    async executeTurn(t) {
        const e = t.conversationId;
        this._rootSessionMirror?.markLocalExecution(e);
        try {
            let n = t, i = !1, r = !1, s = 0;
            const o = {
                networkPhaseDelivered: !1
            }, a = ()=>{
                r && (t.runOptions.onConnectionStateChange?.({
                    state: "connected"
                }), r = !1);
            };
            for(;;){
                this._throwIfRecoveryAbandoned(t, "while waiting for the agent host bridge to be recreated");
                const l = {
                    turnStarted: !1
                };
                let c = !1;
                try {
                    await this._executeTurn(n, e, l, o, a), a();
                    return;
                } catch (u) {
                    this._bridgeRecovery.snapshotPresenceAtFailure(l);
                    const d = this._cancelledIfAbortedPreSend(u, l, t);
                    if (d !== void 0) throw d;
                    if (this._isTurnAborted(t)) throw u instanceof T1 ? u : new T1("Cancelled while awaiting host turn events.");
                    const h = this._bridgeRecovery.isRetryableAfterSend(u, l);
                    if (!this._bridgeRecovery.isRetryableBeforeSend(u, l) && !h) throw this._bridgeRecovery.upgradeToRetriableError(u, l) ?? u;
                    if (this._store.isDisposed) throw this._bridgeRecovery.upgradeToRetriableError(u, l) ?? u;
                    if (h && (i = !0), s++, s > this._bridgeRecovery.maxAttempts) throw Fll(u, i ? "mid_turn" : "pre_send");
                    r = !0, t.runOptions.onConnectionStateChange?.({
                        state: "reconnecting",
                        attempt: s,
                        trigger: {
                            errorClass: "RetriableError",
                            countAsTransportError: !0
                        }
                    });
                    const g = ()=>this._throwIfRecoveryAbandoned(t, "while waiting for the agent host bridge to be recreated");
                    let f = await this._bridgeRecovery.waitForRecovery(t, g);
                    for(f || this._bridgeRecovery.recordTimeout(u); !f && s < this._bridgeRecovery.maxAttempts;)await this._bridgeRecovery.backoff(s, t), s++, t.runOptions.onConnectionStateChange?.({
                        state: "reconnecting",
                        attempt: s,
                        trigger: {
                            errorClass: "RetriableError",
                            countAsTransportError: !0
                        }
                    }), f = await this._bridgeRecovery.waitForRecovery(t, g), f || this._bridgeRecovery.recordTimeout(u);
                    if (!f) throw Fll(u, i ? "mid_turn" : "pre_send");
                    this._throwIfRecoveryAbandoned(t, "while waiting for the agent host bridge to be recreated"), this._logService.info(i ? `[AgentHostService] agent host bridge restored; resuming the in-flight turn from checkpoint for session=${e}` : `[AgentHostService] agent host bridge restored; retrying the pre-send turn for session=${e}`), this._metricsService?.increment({
                        stat: Bll,
                        tags: {
                            outcome: i ? "retried_resume" : "retried"
                        }
                    }), t.conversationActionManager.resetStream(), i && (n = await this._resumeParamsAfterRepair(t, e)), c = !0;
                } finally{
                    !l.turnStarted && !c && this._startDeferredTrayMirrors(e);
                }
            }
        } finally{
            this._rootSessionMirror?.unmarkLocalExecution(e);
        }
    }
    _isTurnAborted(t) {
        return t.abortController.signal.aborted || t.conversationActionManager.signal.aborted || t.ctx.signal?.aborted === !0;
    }
    _throwIfRecoveryAbandoned(t, e) {
        if (this._isTurnAborted(t) || this._store.isDisposed) throw new T1(`Cancelled ${e}.`);
    }
    async _resumeParamsAfterRepair(t, e) {
        const n = Kbk(t.action);
        try {
            await l1m(t.ctx, n, t.resourceAccessor, e);
        } catch (i) {
            if (this._throwIfRecoveryAbandoned(t, "while hydrating request context for repair resume"), Ya(i) || i instanceof T1) throw i instanceof T1 ? i : new T1("Cancelled while hydrating request context for repair resume.");
            this._logService.warn("[AgentHostService] failed to hydrate request context for repair resume; using the original action context", i);
        }
        return this._throwIfRecoveryAbandoned(t, "while hydrating request context for repair resume"), {
            ...t,
            action: n
        };
    }
    _cancelledIfAbortedPreSend(t, e, n) {
        if (!(e.turnStarted || t instanceof T1 || !this._isTurnAborted(n))) return new T1("Cancelled while the send was waiting on the agent host.");
    }
    async _awaitTeardownBounded(t, e) {
        if (t === void 0) return;
        const n = t.then(()=>!0, (r)=>(this._logService.warn(`[AgentHostService] ${e} failed during turn teardown`, r), !0));
        await Vh(n, this._teardownTimeoutMs) === void 0 && this._logService.warn(`[AgentHostService] ${e} did not settle within ${this._teardownTimeoutMs}ms during turn teardown; abandoning it`);
    }
    _encodeSendActionRequest(t) {
        return this._sendActionEncoder.encode(t);
    }
    _encodePrimarySendActionRequest(t, e, n) {
        return this._encodeSendActionRequest(new gat({
            sessionId: e,
            action: t.action,
            modelId: n,
            modelDetails: t.modelDetails,
            requestedModel: t.runOptions.requestedModel,
            baseHistory: t.historyRewrite === !0 ? t.conversationState : void 0,
            turnOptions: Yll(t.runOptions, {
                subagentSmartModeAutoRun: t.subagentSmartModeAutoRun
            }),
            requestContextDecoration: t.requestContextDecoration
        }));
    }
    async _executeTurn(t, e, n, i, r) {
        const s = AbortSignal.any([
            t.abortController.signal,
            t.conversationActionManager.signal,
            t.ctx.signal
        ]);
        if (s.aborted) throw new T1("Cancelled before host execution started.");
        const o = t.runOptions.requestedModel, a = t.modelDetails?.modelId ?? o?.modelId;
        if (!a) throw new Error("[AgentHostService] Missing model id for host-backed agent execution");
        const l = t.modelDetails, c = Yll(t.runOptions, {
            subagentSmartModeAutoRun: t.subagentSmartModeAutoRun
        }), u = qst(t.ctx), d = u === void 0 ? void 0 : {
            traceId: u.traceId,
            spanId: u.spanId,
            traceFlags: u.traceFlags
        }, h = performance.now(), p = [
            this._bridgeWait.waitUntilRegistered(s)
        ], g = Promise.all(p), f = this._encodePrimarySendActionRequest(t, e, a), _ = this._sendActionEncoder.lastByteSnapshot();
        await g;
        const b = performance.now() - h, y = t.runOptions.onNetworkPhaseStart !== void 0 || t.runOptions.onPreSendTimings !== void 0 || t.runOptions.onHeader !== void 0 || t.runOptions.onConnectionStateChange !== void 0 || t.runOptions.onFirstMessage !== void 0 || t.runOptions.onFirstMessageNetwork !== void 0 || t.runOptions.onFirstNonHeartbeatResponse !== void 0 || t.runOptions.onTtftBreakdown !== void 0 || t.runOptions.onTurnRuntimeSelected !== void 0, S = performance.now();
        await kyk(this._ensureSession(e, t, s), s);
        const k = performance.now() - S;
        n.registrationGenerationAtStart = this._providerService.getRegistrationDiagnostics?.()?.generation;
        const C = new Oze({
            sessionId: e,
            lastEventId: this._lastEventIds.get(e)
        });
        let T, I, A = 0, P = Promise.resolve(), M, O = 0;
        const N = this._sessionTurnLifecycleWatches.bindExecution({
            sessionId: e,
            runOptions: t.runOptions,
            delivery: i,
            getPreSendTimings: ()=>({
                    bridgeWaitMs: b,
                    ensureSessionMs: k,
                    lifecycleReadyMs: A,
                    sendActionMs: O,
                    sendActionResolvedAt: M,
                    requestContextByteSnapshot: _
                })
        });
        let U, j, $ = !1;
        const H = [], G = new Map, q = new Map;
        let K = !1, V;
        const Y = async ()=>{
            const ee = U;
            if (ee !== void 0 && j !== ee) {
                j = ee;
                const re = Khg(s), ie = Syk(s);
                await this._awaitTeardownBounded(this._providerService.cancelQueuedTurn(new jTt({
                    sessionId: e,
                    turnId: ee,
                    reason: re,
                    initiatedBy: ie
                }).toBinary()), "cancelling the queued host turn"), await this._awaitTeardownBounded(this._providerService.interruptTurn(new JPe({
                    sessionId: e,
                    turnId: ee,
                    reason: re,
                    initiatedBy: ie
                }).toBinary()), "interrupting the host turn");
            }
            $ || ($ = !0, await this._awaitTeardownBounded(T?.return?.(), "attach stream close")), N.cancel();
        }, J = ()=>{
            Y();
        };
        s.addEventListener("abort", J, {
            once: !0
        });
        let Q = this._interactionMirrors.get(e);
        if (Q === void 0) {
            const ee = new gos(e, this._providerService, this._logService, ()=>{
                this._interactionMirrors.get(e) === ee && this._interactionMirrors.delete(e);
            });
            Q = ee, this._interactionMirrors.set(e, ee);
        }
        let te = 0;
        try {
            te = performance.now();
            const ee = this._providerService.sendAction(f, d);
            Q.bindSurface(t), y && (P = this._sessionTurnLifecycleWatches.beginReady(e, s).then((ce)=>{
                A = ce;
            })), P.catch(()=>{}), T = this._providerService.attachSession(C.toBinary())[Symbol.asyncIterator](), I = T.next();
            const re = await ee;
            if (M = performance.now(), O = M - te, n.turnStarted = !0, this._childSessionMirror?.ensureDiscovery(), this._startDeferredTrayMirrors(e), r?.(), U = mEi.fromBinary(re).turnId, !U) throw new Error("[AgentHostService] Host-backed agent execution did not return a turn id");
            y && N.startPump(()=>U), N.flushDeferredNetworkPhase(), N.flushPending(U);
            const ie = async (ce)=>{
                const ae = await this._providerService.sendAction(this._encodeSendActionRequest(new gat({
                    sessionId: e,
                    action: ce,
                    modelId: a,
                    modelDetails: l,
                    requestedModel: o,
                    turnOptions: c,
                    requestContextDecoration: t.requestContextDecoration
                })), d), de = mEi.fromBinary(ae).turnId;
                if (!de) throw new Error("[AgentHostService] Host-backed follow-up turn did not return a turn id");
                U = de, N.flushPending(de);
                const he = ce.action.case === "userMessageAction" ? ce.action.value.userMessage : void 0;
                return he !== void 0 && t.conversationActionManager.markMessageAsProcessed(he), de;
            }, oe = (ce)=>{
                for (const ae of G.values())if (ae === ce) return !0;
                for (const ae of q.values())if (ae === ce) return !0;
                return !1;
            }, se = async (ce)=>{
                try {
                    await this._providerService.interruptTurn(new JPe({
                        sessionId: e,
                        turnId: ce,
                        reason: "User submitted a follow-up message",
                        initiatedBy: jJ.FOLLOW_UP
                    }).toBinary());
                } catch (ae) {
                    this._logService.warn("[AgentHostService] interrupting host turn for a follow-up message failed", ae);
                }
            }, le = async ()=>{
                const ce = U;
                !K || ce === void 0 || s.aborted || oe(ce) || (K = !1, await se(ce));
            };
            if (V = t.conversationActionManager.run(t.ctx, {
                write: async (ce)=>{
                    if (ce.action.case === "injectContextAction") {
                        const ae = U;
                        if (ae === void 0 || s.aborted) return;
                        ce.action.value.expectedRunId = t.runOptions.generationUUID ?? ae, this._logService.info(`[AgentHostService] steering InjectContext via sendAction expectedRunId=${ce.action.value.expectedRunId} turnId=${ae}`), await this._providerService.sendAction(new gat({
                            sessionId: e,
                            action: ce,
                            modelId: a,
                            modelDetails: l,
                            requestedModel: o,
                            turnOptions: c,
                            requestContextDecoration: t.requestContextDecoration
                        }).toBinary(), d);
                        return;
                    }
                    if (ce.action.case === "userMessageAction") {
                        if (H.push(ce), U === void 0 || s.aborted) return;
                        K = !0, await le();
                        return;
                    }
                    ce.action.case !== "cancelAction" && this._logService.warn("[AgentHostService] dropping conversation action with no host delivery path", {
                        sessionId: e,
                        actionCase: ce.action.case
                    });
                }
            }), s.aborted) throw await Y(), new T1("Cancelled before host turn started.");
            for(;;){
                if (T === void 0) throw new Error("[AgentHostService] attach stream was not opened after sendAction");
                const ce = await (I ?? T.next());
                if (I = void 0, ce.done) throw s.aborted ? new T1("Cancelled while awaiting host turn events.") : new Error("[AgentHostService] Agent host event stream ended before the turn completed; please retry.");
                const ae = ce.value, de = K4e.fromBinary(ae);
                switch(this._lastEventIds.set(e, de.eventId), de.event.case){
                    case "interactionUpdate":
                        {
                            const he = de.event.value;
                            await t.interactionListener.sendUpdate(t.ctx, he), he.message.case === "toolCallCompleted" && (q.delete(he.message.value.callId), await le());
                            break;
                        }
                    case "conversationState":
                        {
                            await t.checkpointHandler.handleCheckpoint(t.ctx, de.event.value);
                            break;
                        }
                    case "turnInteractionsSuperseded":
                        {
                            const he = de.event.value.continuation;
                            switch(he.case){
                                case "replayActionFromState":
                                    await t.onInteractionHistorySuperseded?.({
                                        case: "replayActionFromState",
                                        state: he.value
                                    });
                                    break;
                                case "resumeFromCheckpoint":
                                    await t.onInteractionHistorySuperseded?.({
                                        case: "resumeFromCheckpoint",
                                        state: he.value
                                    });
                                    break;
                                case void 0:
                                    throw new Error("[AgentHostService] interaction supersession event is missing its continuation");
                                default:
                                    {
                                        const ge = he;
                                        throw new Error(`[AgentHostService] unhandled interaction supersession continuation: ${JSON.stringify(ge)}`);
                                    }
                            }
                            break;
                        }
                    case "turnStarted":
                        de.event.value.turnId !== U && this._logService.warn("[AgentHostService] host turnStarted event mismatched turnId", {
                            sessionId: e,
                            expectedTurnId: U,
                            actualTurnId: de.event.value.turnId
                        });
                        break;
                    case "turnAwaitingInput":
                        {
                            const { interactionId: he, question: ge } = de.event.value;
                            if (!he || ge.case === void 0) throw new Error("[AgentHostService] Host interaction event is missing its interaction id or question");
                            if (G.set(he, de.event.value.turnId), ge.case === "interactionQuery" && ge.value.query.case === "askQuestionInteractionQuery") {
                                const pe = ge.value.query.value.toolCallId;
                                pe && q.set(pe, de.event.value.turnId);
                            }
                            Q.observeSessionEvent(de);
                            break;
                        }
                    case "interactionResolved":
                        {
                            G.delete(de.event.value.interactionId), Q.observeSessionEvent(de), await le();
                            break;
                        }
                    case "turnSettled":
                        if (de.event.value.turnId === U) {
                            await N.waitForFinished(U), K = !1;
                            const he = de.event.value.outcome;
                            if (!s.aborted && (he === Sle.COMPLETED || he === Sle.INTERRUPTED)) {
                                const ge = H.shift();
                                if (ge !== void 0) {
                                    if (await ie(ge), s.aborted) throw await Y(), new T1("Cancelled while starting host follow-up turn.");
                                    break;
                                }
                            }
                            switch(he){
                                case Sle.COMPLETED:
                                    return;
                                case Sle.FAILED:
                                    throw yyk(de.event.value);
                                case Sle.INTERRUPTED:
                                    throw new T1(de.event.value.detail ?? "host turn interrupted");
                                default:
                                    throw new Error("[AgentHostService] host turn settled with unspecified outcome");
                            }
                        }
                        break;
                    case "subagentStarted":
                        {
                            const he = de.event.value;
                            this._childSessionMirror?.onSubagentStarted({
                                parentSessionId: e,
                                childSessionId: he.childSessionId,
                                parentToolCallId: he.parentToolCallId,
                                rootSessionId: he.rootSessionId,
                                turnId: he.turnId
                            });
                            break;
                        }
                    case "backgroundTaskCompleted":
                        break;
                    case void 0:
                        throw new Error("[AgentHostService] Received agent-host session event without a payload");
                    default:
                        {
                            const he = de.event;
                            throw new Error(`Unhandled agent-host session event: ${JSON.stringify(he)}`);
                        }
                }
            }
        } finally{
            this._bridgeRecovery.snapshotPresenceAtFailure(n), s.removeEventListener("abort", J), t.conversationActionManager.close(), I?.catch(()=>{}), await this._awaitTeardownBounded(V, "conversation action pump"), await this._awaitTeardownBounded(T?.return?.(), "attach stream close"), N.cancel(), await this._awaitTeardownBounded(N.pump, "turn lifecycle pump"), N.dispose();
        }
    }
    prewarmSession(t, e = "submit") {
        if (this._store.isDisposed || this._createdSessions.has(t) || this._prewarmedSessions.has(t) || this._sessionHydrateInFlight.has(t)) return;
        const n = this._prewarmSession(t).finally(()=>{
            this._sessionHydrateInFlight.get(t) === n && this._sessionHydrateInFlight.delete(t);
        });
        this._sessionHydrateInFlight.set(t, n), n.then((i)=>{
            i === "hydrated" && (this._createdSessions.has(t) ? this._prewarmedSessions.delete(t) : (this._prewarmedSessions.add(t), this._createdSessions.add(t), this._deferredMirrorSessionIds.add(t))), this._metricsService?.increment({
                stat: "cursor.agent_host.session_prewarm",
                tags: {
                    outcome: i,
                    trigger: e
                }
            });
        }, (i)=>{
            this._store.isDisposed || (this._logService.debug("[AgentHostService] session prewarm failed; the turn will redo session setup", i), this._metricsService?.increment({
                stat: "cursor.agent_host.session_prewarm",
                tags: {
                    outcome: "failed",
                    trigger: e
                }
            }));
        });
    }
    async _awaitSessionHydrateInFlight(t) {
        const e = this._sessionHydrateInFlight.get(t);
        if (e !== void 0) try {
            await e;
        } catch  {}
    }
    async _prewarmSession(t) {
        const e = AbortSignal.any([
            AbortSignal.timeout(this._sessionPrewarmTimeoutMs),
            this._lifetimeAbort.signal
        ]);
        if (await this._providerService.waitForProviderRegistration?.(e), this._store.isDisposed || this._store.isDisposed || this._createdSessions.has(t)) return "noop";
        const n = await this._providerService.ensureLoaded(t);
        return this._store.isDisposed || this._createdSessions.has(t) ? "noop" : n ? "hydrated" : "noop";
    }
    async _ensureSession(t, e, n) {
        await this._providerService.waitForProviderRegistration?.(n);
        let i = this._createdSessions.has(t) && this._prewarmedSessions.has(t);
        if (this._createdSessions.has(t) && !i) {
            this._deferredMirrorSessionIds.add(t);
            return;
        }
        const r = e.resourceAccessor.agentHostSessionOptionsBase;
        if (!r) throw new Error("[AgentHostService] Missing host session bootstrap options on resource accessor");
        if (i) {
            await this._createOrRebindHostSession(t, e, r, !1), this._prewarmedSessions.delete(t);
            return;
        }
        const s = e.action.action.case === "resumeAction" || (e.conversationState.turns?.length ?? 0) > 0;
        if (i = this._createdSessions.has(t) && this._prewarmedSessions.has(t), i) {
            await this._createOrRebindHostSession(t, e, r, !1), this._prewarmedSessions.delete(t);
            return;
        }
        let o = !s;
        if (s && (await this._providerService.ensureLoaded(t) || (o = !0)), !s && (await this._awaitSessionHydrateInFlight(t), i = this._createdSessions.has(t) && this._prewarmedSessions.has(t), i)) {
            await this._createOrRebindHostSession(t, e, r, !1), this._prewarmedSessions.delete(t), this._deferredMirrorSessionIds.add(t);
            return;
        }
        await this._createOrRebindHostSession(t, e, r, o), this._createdSessions.add(t), this._prewarmedSessions.delete(t), this._deferredMirrorSessionIds.add(t);
    }
    async _createOrRebindHostSession(t, e, n, i) {
        const r = e.blobStore;
        try {
            await this._providerService.createSession(t, {
                ...n,
                ...i ? {
                    initialHistory: e.conversationState.toBinary()
                } : {},
                getBlob: (s)=>r.getBlob(Xp(), s),
                setBlob: async ({ blobId: s, blobData: o, locallyOnly: a })=>{
                    if (a) {
                        await r.setBlobLocallyOnly(Xp(), s, o);
                        return;
                    }
                    await r.setBlob(Xp(), s, o);
                }
            });
        } catch (s) {
            if (!(s instanceof Error) || !/agent host session already exists/i.test(s.message)) throw s;
        }
    }
}, Jll = class extends st {
    constructor(t, e){
        super(), this._instantiationService = t, this._sessions = this._register(new da), this._watchSessionsEmitter = this._register(new tt), e !== void 0 && (this._highLevelDelegatePromise = Promise.resolve(e));
    }
    async _getHighLevelDelegate() {
        return this._highLevelDelegatePromise || (this._highLevelDelegatePromise = (async ()=>{
            const { AgentCompatService: t } = await Promise.resolve().then(()=>(tIi(), Ill));
            return Yhg(this._store, this._instantiationService.createInstance(t, void 0));
        })()), this._highLevelDelegatePromise;
    }
    async runAgentLoop(t, e) {
        return (await this._getHighLevelDelegate()).runAgentLoop(t, e);
    }
    async resume(t, e) {
        return (await this._getHighLevelDelegate()).resume(t, e);
    }
    async summarize(t, e) {
        return (await this._getHighLevelDelegate()).summarize(t, e);
    }
    async flushTranscriptForConversation(t) {
        return (await this._getHighLevelDelegate()).flushTranscriptForConversation(t);
    }
    prewarmSession(t, e) {}
    async createSession(t, e) {
        this._createSession(t, e);
    }
    async listSessions(t) {
        return this._listSessions(Psl.fromBinary(t));
    }
    watchSessions(t, e) {
        const n = jrs.fromBinary(t);
        return this._watchSessions(n, e);
    }
    async sendMessage(t) {
        return this._sendMessage(zxn.fromBinary(t));
    }
    async sendAction(t) {
        return this._sendAction(gat.fromBinary(t));
    }
    async deleteSession(t) {
        return this._deleteSession(gEi.fromBinary(t));
    }
    async interruptTurn(t) {
        return this._interruptTurn(JPe.fromBinary(t));
    }
    async cancelQueuedTurn(t) {
        return this._cancelQueuedTurn(jTt.fromBinary(t));
    }
    async respondToInteraction(t) {
        return this._respondToInteraction($zt.fromBinary(t));
    }
    watchSessionInteractions(t, e) {
        return this._watchSessionInteractions(Vxn.fromBinary(t), e);
    }
    watchSessionBackgroundWork(t, e) {
        return this._watchSessionBackgroundWork(zrs.fromBinary(t), e);
    }
    watchSessionTurnLifecycle(t, e) {
        return this._watchSessionTurnLifecycle(Krs.fromBinary(t), e);
    }
    async abortBackgroundWork(t) {
        return this._abortBackgroundWork(zsl.fromBinary(t));
    }
    async abortAllBackgroundWork(t) {
        return this._abortAllBackgroundWork(Ksl.fromBinary(t));
    }
    attachSession(t, e) {
        return this._attachSession(Oze.fromBinary(t), e);
    }
    async getSessionBlobs(t) {
        return this._getSessionBlobs(yEi.fromBinary(t));
    }
    readFile(t, e) {
        return this._readFile(Zsl.fromBinary(t), e);
    }
    async listWorkspaces(t) {
        return this._listWorkspaces(Msl.fromBinary(t));
    }
    noteLocalStop(t, e) {}
    _emitWatch(t) {
        this._watchSessionsEmitter.fire(t.toBinary());
    }
}, iIi = class extends Jll {
    constructor(t, e, n){
        super(e, t), n.debug("[LegacyAgentHostService] initialized");
    }
    _createSession(t, e) {
        const n = new zhg(t, e);
        if (this._sessions.set(t, n), e.initialHistory !== void 0) {
            const i = nf.fromBinary(e.initialHistory);
            this._appendAttachEvent(n, new K4e({
                eventId: 1n,
                event: {
                    case: "conversationState",
                    value: i
                }
            }));
        }
    }
    async _listSessions(t) {
        const e = [
            ...this._sessions.values()
        ].map((n)=>new Lze({
                sessionId: n.sessionId,
                status: Kll(n.lastTurnId),
                lastEventId: n.lastEventId
            }));
        return Hze(new qxn({
            sessions: e
        }));
    }
    _watchSessions(t, e) {
        const n = new KCe({
            event: {
                case: "snapshot",
                value: new $rs({
                    sessions: [
                        ...this._sessions.values()
                    ].map((i)=>new Lze({
                            sessionId: i.sessionId,
                            status: Kll(i.lastTurnId),
                            lastEventId: i.lastEventId
                        }))
                })
            }
        }).toBinary();
        return Vhg([
            n
        ], (i)=>this._watchSessionsEmitter.event(i), void 0, e);
    }
    async _sendMessage(t) {
        const e = this._startTurn(t.sessionId, t.turnOptions?.generationUuid ?? "turn");
        return Hze(new $sl({
            turnId: e
        }));
    }
    async _sendAction(t) {
        const e = this._startTurn(t.sessionId, t.turnOptions?.generationUuid ?? "turn");
        return Hze(new mEi({
            turnId: e
        }));
    }
    async _deleteSession(t) {
        const e = this._sessions.get(t.sessionId);
        if (e) {
            this._appendWatchEvent(e, new KCe({
                event: {
                    case: "deleted",
                    value: new Wrs({
                        sessionId: t.sessionId
                    })
                }
            }));
            try {
                e.dispose();
            } finally{
                this._sessions.deleteAndLeak(t.sessionId);
            }
        }
        return Hze(new Hsl);
    }
    async _interruptTurn(t) {
        const e = this._sessions.get(t.sessionId);
        let n = !1;
        return e?.lastTurnId !== void 0 && (e.lastTurnId === t.turnId || t.sessionTree) && (this._appendAttachEvent(e, new K4e({
            eventId: e.lastEventId + 1n,
            event: {
                case: "turnSettled",
                value: new Xrs({
                    turnId: e.lastTurnId,
                    outcome: Sle.INTERRUPTED,
                    detail: t.reason,
                    interruptedBy: t.initiatedBy
                })
            }
        })), e.lastTurnId = void 0, n = !0), Hze(new fEi({
            interrupted: n
        }));
    }
    async _cancelQueuedTurn(t) {
        return Hze(new qrs({
            cancelled: !1
        }));
    }
    async _respondToInteraction(t) {
        return Hze(new vEi({
            status: Uzt.NOT_FOUND
        }));
    }
    async *_watchSessionInteractions(t) {
        yield new bEi({
            event: {
                case: "snapshot",
                value: {
                    interactions: []
                }
            }
        }).toBinary();
    }
    _watchSessionBackgroundWork(t, e) {
        const i = [
            ...this._sessions.get(t.sessionId)?.backgroundWork.values() ?? []
        ], r = new Vrs({
            event: {
                case: "snapshot",
                value: {
                    work: i
                }
            }
        }).toBinary();
        return (async function*() {
            e?.isCancellationRequested || (yield r);
        })();
    }
    async *_watchSessionTurnLifecycle(t) {}
    async _abortBackgroundWork(t) {
        const n = this._sessions.get(t.sessionId)?.backgroundWork.delete(t.workId) ?? !1;
        return Hze(new Vsl({
            aborted: n
        }));
    }
    async _abortAllBackgroundWork(t) {
        const e = this._sessions.get(t.sessionId), n = e ? e.backgroundWork.size : 0;
        return e?.backgroundWork.clear(), Hze(new Ysl({
            abortedCount: n
        }));
    }
    _attachSession(t, e) {
        const n = this._sessions.get(t.sessionId);
        if (!n) return yAn();
        const i = t.lastEventId ?? -1n, r = n.eventLog.filter((s)=>s.eventId > i).map((s)=>s.bytes);
        return Vhg(r, (s)=>n.attachEmitter.event(s), n.closeEmitter.event, e);
    }
    async _getSessionBlobs(t) {
        throw new Error(`Agent host session blobs are not served by the legacy agent host: ${t.sessionId}`);
    }
    async *_readFile(t) {
        throw new Error("Agent host file reads are not served by the legacy agent host");
    }
    async _listWorkspaces(t) {
        return Hze(new Dsl);
    }
    _startTurn(t, e) {
        const n = this._sessions.get(t);
        return n && (n.lastTurnId = e, this._appendAttachEvent(n, new K4e({
            eventId: n.lastEventId + 1n,
            event: {
                case: "turnStarted",
                value: new Qsl({
                    turnId: e
                })
            }
        })), this._emitWatch(new KCe({
            event: {
                case: "added",
                value: new Hrs({
                    session: new Lze({
                        sessionId: t,
                        status: VCe.IDLE,
                        lastEventId: n.lastEventId
                    })
                })
            }
        })), this._appendWatchEvent(n, new KCe({
            event: {
                case: "updated",
                value: new pEi({
                    session: new Lze({
                        sessionId: t,
                        status: VCe.RUNNING,
                        lastEventId: n.lastEventId
                    })
                })
            }
        })), this._appendAttachEvent(n, new K4e({
            eventId: n.lastEventId + 1n,
            event: {
                case: "turnSettled",
                value: new Xrs({
                    turnId: e,
                    outcome: Sle.COMPLETED
                })
            }
        })), n.lastTurnId = void 0), e;
    }
    _appendAttachEvent(t, e) {
        const n = e.toBinary();
        t.lastEventId = e.eventId, t.eventLog.push({
            eventId: e.eventId,
            bytes: n
        }), t.attachEmitter.fire(n), t.watchEmitter.fire(new KCe({
            event: {
                case: "updated",
                value: new pEi({
                    session: new Lze({
                        sessionId: t.sessionId,
                        status: Kll(t.lastTurnId),
                        lastEventId: t.lastEventId
                    })
                })
            }
        }).toBinary());
    }
    _appendWatchEvent(t, e) {
        this._emitWatch(e), t.watchEmitter.fire(e.toBinary());
    }
}, iIi = Re([
    F(1, dn),
    F(2, Li)
], iIi), rIi = class extends Jll {
    constructor(t, e, n, i, r, s, o){
        const a = t === void 0 ? new Qll(n, r, {
            backgroundWorkService: i,
            instantiationService: e,
            metricsService: s,
            experimentService: o
        }) : void 0, l = new Nt;
        super(e, t ?? (a ? wyk(e, a, l) : void 0)), this._providerService = n, this._register(l), this._executionStrategy = a, a && this._register(Pn(()=>a.dispose())), r.debug("[ExtensionHostAgentHostService] initialized");
    }
    prewarmSession(t, e) {
        this._executionStrategy?.prewarmSession(t, e);
    }
    _createSession(t, e) {
        this._providerService.createSession(t, e);
    }
    async _listSessions(t) {
        return this._providerService.listSessions(t.toBinary());
    }
    _watchSessions(t, e) {
        return e?.isCancellationRequested ? yAn() : this._providerService.watchSessions(t.toBinary(), e);
    }
    async _sendMessage(t) {
        return await this._executionStrategy?.prepareRemoteSend(t), this._providerService.sendMessage(t.toBinary());
    }
    async _sendAction(t) {
        return await this._executionStrategy?.prepareRemoteSend(t), this._providerService.sendAction(t.toBinary());
    }
    async _deleteSession(t) {
        const e = await this._providerService.deleteSession(t.toBinary());
        return this._executionStrategy?.forgetSession(t.sessionId), e;
    }
    async _interruptTurn(t) {
        return this._providerService.interruptTurn(t.toBinary());
    }
    async _cancelQueuedTurn(t) {
        return this._providerService.cancelQueuedTurn(t.toBinary());
    }
    noteLocalStop(t, e) {
        this._executionStrategy?.noteLocalStop(t, e);
    }
    async _respondToInteraction(t) {
        return this._providerService.respondToInteraction(t.toBinary());
    }
    async *_watchSessionInteractions(t) {
        yield* this._providerService.watchSessionInteractions(t.toBinary());
    }
    _watchSessionBackgroundWork(t, e) {
        return e?.isCancellationRequested ? yAn() : this._providerService.watchSessionBackgroundWork(t.toBinary());
    }
    _watchSessionTurnLifecycle(t, e) {
        return e?.isCancellationRequested ? yAn() : this._providerService.watchSessionTurnLifecycle(t.toBinary());
    }
    async _abortBackgroundWork(t) {
        return this._providerService.abortBackgroundWork(t.toBinary());
    }
    async _abortAllBackgroundWork(t) {
        return this._providerService.abortAllBackgroundWork(t.toBinary());
    }
    _attachSession(t, e) {
        return e?.isCancellationRequested ? yAn() : this._providerService.attachSession(t.toBinary(), e);
    }
    _getSessionBlobs(t) {
        return this._providerService.getSessionBlobs(t.toBinary());
    }
    _readFile(t, e) {
        return e?.isCancellationRequested ? yAn() : this._providerService.readFile(t.toBinary(), e);
    }
    _listWorkspaces(t) {
        return this._providerService.listWorkspaces(t.toBinary());
    }
}, rIi = Re([
    F(1, dn),
    F(2, TX),
    F(3, ZD),
    F(4, Li),
    F(5, Uh),
    F(6, Cr)
], rIi), sIi = class extends st {
    constructor(t, e, n, i){
        super(), this.agentRemoteWorkspacePolicyService = n, this._delegate = e.isCursorAgentHostEnabled() ? this._register(t.createInstance(rIi, void 0)) : this._register(t.createInstance(iIi, void 0)), i.info(`[AgentHostService] using ${e.isCursorAgentHostEnabled() ? "extension-host" : "legacy"} implementation`);
    }
    _assertAgentAllowed() {
        const t = this.agentRemoteWorkspacePolicyService.decision;
        if (!t.allowed) throw new Error(t.message);
    }
    runAgentLoop(t, e) {
        return this._assertAgentAllowed(), this._delegate.runAgentLoop(t, e);
    }
    resume(t, e) {
        return this._assertAgentAllowed(), this._delegate.resume(t, e);
    }
    summarize(t, e) {
        return this._assertAgentAllowed(), this._delegate.summarize(t, e);
    }
    flushTranscriptForConversation(t) {
        return this._delegate.flushTranscriptForConversation(t);
    }
    prewarmSession(t, e) {
        this.agentRemoteWorkspacePolicyService.decision.allowed && this._delegate.prewarmSession(t, e);
    }
    createSession(t, e) {
        return this._assertAgentAllowed(), this._delegate.createSession(t, e);
    }
    listSessions(t) {
        return this._delegate.listSessions(t);
    }
    watchSessions(t, e) {
        return this._delegate.watchSessions(t, e);
    }
    sendMessage(t) {
        return this._assertAgentAllowed(), this._delegate.sendMessage(t);
    }
    sendAction(t) {
        return this._assertAgentAllowed(), this._delegate.sendAction(t);
    }
    deleteSession(t) {
        return this._delegate.deleteSession(t);
    }
    interruptTurn(t) {
        return this._delegate.interruptTurn(t);
    }
    cancelQueuedTurn(t) {
        return this._delegate.cancelQueuedTurn(t);
    }
    respondToInteraction(t) {
        return this._delegate.respondToInteraction(t);
    }
    watchSessionInteractions(t, e) {
        return this._delegate.watchSessionInteractions(t, e);
    }
    watchSessionBackgroundWork(t, e) {
        return this._delegate.watchSessionBackgroundWork(t, e);
    }
    watchSessionTurnLifecycle(t, e) {
        return this._delegate.watchSessionTurnLifecycle(t, e);
    }
    abortBackgroundWork(t) {
        return this._delegate.abortBackgroundWork(t);
    }
    abortAllBackgroundWork(t) {
        return this._delegate.abortAllBackgroundWork(t);
    }
    attachSession(t, e) {
        return this._delegate.attachSession(t, e);
    }
    getSessionBlobs(t) {
        return this._delegate.getSessionBlobs(t);
    }
    readFile(t, e) {
        return this._delegate.readFile(t, e);
    }
    listWorkspaces(t) {
        return this._delegate.listWorkspaces(t);
    }
    noteLocalStop(t, e) {
        this._delegate.noteLocalStop(t, e);
    }
}, sIi = Re([
    F(0, dn),
    F(1, kie),
    F(2, UCi),
    F(3, Li)
], sIi), bn(iVt, sIi, 0);

}
