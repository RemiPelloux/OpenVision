import { A2n, XLn } from "./A3u.js";
import { HMn, d8i, qh } from "./De_3.js";
import { Cl, He, Pk, Se, po } from "./HVr.js";
import { HQi, aTo, eTh } from "./agentHostChildSessionMirror.js";
import { $Qi, UQi } from "./agentHostInteractionMirror.js";
import { tTh } from "./agentHostTurnStart.js";
import { Kv, Rb } from "./agentRepositoryServiceTypes.js";
import { Cjt } from "./agentResponseAdapter.js";
import { ZX, _oe, bq, ktt, oLe } from "./agent_host_pb.js";
import { bn } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { GSo, cgh } from "./cgh.js";
import { Hu, Tr } from "./chat_pb.js";
import { BU } from "./composerBlobStore.js";
import { loe } from "./composerChatServiceInterface.js";
import { Wf } from "./composerData.js";
import { nl } from "./composerDataServiceTypes.js";
import { z5 } from "./composerUtilsServiceTypes.js";
import { skt } from "./controlled_3.ts";
import { z3 } from "./index_10.ts";
import { Gp } from "./index_3.ts";
import { nG } from "./populateConversationFromState.js";
import { WX, aoe } from "./selectedContext.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
function lQv(e) {
    const t = e.error, n = t?.isRetryable ?? t?.errorDetails?.details?.isRetryable ?? !0;
    return {
        requestId: t?.requestId || e.turnId,
        error: t?.errorDetails,
        title: t?.title,
        message: t?.detail,
        stackTrace: e.detail,
        connectCode: t?.connectCode,
        isRetryable: n,
        resumeOnRetry: n
    };
}
function uQv(e, t) {
    switch(e?.outcome){
        case ZX.COMPLETED:
            return {
                status: "completed",
                abortReason: void 0
            };
        case ZX.FAILED:
            return {
                status: "aborted",
                abortReason: "error"
            };
        case ZX.INTERRUPTED:
            switch(e.interruptedBy){
                case _oe.USER_STOP:
                    return {
                        status: "aborted",
                        abortReason: t ? "user" : "remote_control"
                    };
                case _oe.FOLLOW_UP:
                    return {
                        status: "none",
                        abortReason: void 0
                    };
                case _oe.CLIENT_ERROR:
                case _oe.HOST:
                    return {
                        status: "aborted",
                        abortReason: "error"
                    };
                case _oe.UNSPECIFIED:
                case void 0:
                    return {
                        status: "aborted",
                        abortReason: "user"
                    };
                default:
                    return {
                        status: "aborted",
                        abortReason: "error"
                    };
            }
        default:
            return {
                status: "none",
                abortReason: void 0
            };
    }
}
function gTh(e, t, n) {
    const i = new Set(e.conversationHeaders.map((u)=>u.bubbleId)), r = t.conversationHeaders.filter((u)=>u.type === Tr.HUMAN && !i.has(u.bubbleId));
    if (r.length === 0) return;
    const s = e.conversationHeaders, o = new Set(t.conversationHeaders.map((u)=>u.bubbleId)), a = s.findIndex((u)=>!o.has(u.bubbleId)), c = Math.min(n ?? (a === -1 ? s.length : a), s.length), l = {
        ...e.conversationMap
    };
    for (const u of r)l[u.bubbleId] = t.conversationMap[u.bubbleId];
    return {
        conversationMap: l,
        conversationHeaders: [
            ...s.slice(0, c),
            ...r,
            ...s.slice(c)
        ]
    };
}
var fTh;
export { fTh, gTh, lQv, uQv };
var __wakaru_dQv_initialized = false;
export function dQv() {
if (__wakaru_dQv_initialized) return;
__wakaru_dQv_initialized = true;
"use strict";
x(), bn(), Ar(), Se(), Js(), Vn(), im(), Gp(), z3(), bq(), Hu(), Rb(), aoe(), $Qi(), tTh(), fTh = class {
    constructor(e, t, n, i, r, s = {}){
        this._providerService = e, this._logService = t, this._lastEventIds = n, this._instantiationService = i, this._options = s, this._store = new He, this._localExecutions = new Set, this._remoteSessions = new Set, this._heldAgents = new Map, this._attaches = new Map, this._attachRestartTimers = this._store.add(new po), this._attachRestartAttempts = new Map, this._titleRequestedSessions = new Set, this._localStops = new Map, this._surfaceContext = qh().withCancel(), this._disposed = !1, this._composerServices = r;
    }
    onRemoteSendMessage(e) {
        this._disposed || (this._remoteSessions.add(e), this._localExecutions.has(e) || this._ensureAttach(e));
    }
    markLocalExecution(e) {
        this._localExecutions.add(e);
        const t = this._attaches.get(e);
        t !== void 0 && (t.activeTurnId = void 0), this._releaseAgent(e), this._stopAttach(e);
    }
    unmarkLocalExecution(e) {
        this._localExecutions.delete(e), this._remoteSessions.has(e) && this._ensureAttach(e);
    }
    noteLocalStop(e, t) {
        this._localStops.set(e, t);
    }
    forgetSession(e) {
        this._localExecutions.delete(e), this._remoteSessions.delete(e), this._releaseAgent(e), this._stopAttach(e), this._attachRestartAttempts.delete(e), this._titleRequestedSessions.delete(e), this._localStops.delete(e);
    }
    stopAll() {
        for (const e of [
            ...this._attaches.keys()
        ])this._stopAttach(e);
        for (const e of [
            ...this._heldAgents.keys()
        ])this._releaseAgent(e);
        this._attachRestartTimers.clearAndDisposeAll(), this._localExecutions.clear(), this._remoteSessions.clear(), this._attachRestartAttempts.clear(), this._titleRequestedSessions.clear(), this._localStops.clear();
    }
    dispose() {
        this._disposed = !0, this.stopAll(), this._surfaceContext[1](), this._store.dispose();
    }
    hasAttachForTest(e) {
        return this._attaches.has(e);
    }
    setAttachAdapterForTest(e, t) {
        const n = this._attaches.get(e);
        return n ? (n.adapter = t, !0) : !1;
    }
    async _resolveComposerServices() {
        if (this._composerServices) return this._composerServices;
        if (this._instantiationService) return this._composerServicesPromise || (this._composerServicesPromise = (async ()=>{
            const [{ IComposerDataService: e }, { IComposerUtilsService: t }] = await Promise.all([
                Promise.resolve().then(()=>(nl(), XLn)),
                Promise.resolve().then(()=>(z5(), GSo))
            ]);
            return this._instantiationService.invokeFunction((n)=>({
                    composerDataService: n.get(e),
                    storageService: n.get(yn),
                    selectedContextService: n.get(WX),
                    structuredLogService: n.get(Xh),
                    agentRepositoryService: n.get(Kv),
                    composerUtilsService: n.get(t)
                }));
        })().catch((e)=>{
            this._logService.warn("[AgentHostRootSessionMirror] failed to resolve composer services", e);
        })), this._composerServices = await this._composerServicesPromise, this._composerServices;
    }
    async _resolveComposerChatService(e) {
        if (e.composerChatService) return e.composerChatService;
        if (this._instantiationService) return this._composerChatServicePromise || (this._composerChatServicePromise = (async ()=>{
            const { IComposerChatService: t } = await Promise.resolve().then(()=>(loe(), cgh)), n = this._instantiationService.invokeFunction((i)=>i.get(t));
            return {
                renameComposerIfNeeded: (i)=>n.renameComposerIfNeeded(i)
            };
        })().catch((t)=>{
            this._logService.warn("[AgentHostRootSessionMirror] failed to resolve the composer chat service", t);
        })), this._composerChatServicePromise;
    }
    async _ensureAttach(e, t) {
        if (this._disposed || this._localExecutions.has(e) || this._attaches.has(e)) return;
        let n;
        try {
            const c = await this._resolveComposerServices();
            n = c ? c.composerDataService.getHandleIfLoaded(e) ?? await c.composerDataService.getComposerHandleById(e) : void 0;
        } catch (c) {
            this._logService.warn(`[AgentHostRootSessionMirror] composer lookup failed for ${e}`, c);
            return;
        }
        if (this._disposed || this._localExecutions.has(e) || this._attaches.has(e)) return;
        const i = new Eo, r = {
            sessionId: e,
            cancellation: i,
            cancelSubscription: void 0,
            adapter: void 0,
            actionManager: void 0,
            composerHandle: n,
            activeTurnId: t?.activeTurnId,
            humanBubblePending: t?.echoedUserMessage !== void 0,
            echoedUserMessage: t?.echoedUserMessage,
            turnStart: t?.turnStart,
            pendingSurfaceQueries: 0
        };
        this._attaches.set(e, r), this._attachRestartTimers.deleteAndDispose(e), t !== void 0 && this._bindInteractionSurface(e);
        const s = this._lastEventIds.get(e), o = new ktt({
            sessionId: e,
            ...s === void 0 ? {} : {
                lastEventId: s
            }
        }).toBinary(), a = this._providerService.attachSession(o)[Symbol.asyncIterator]();
        r.cancelSubscription = i.token.onCancellationRequested(()=>{
            a.return?.();
        }), (async ()=>{
            let c = !1;
            try {
                for(; !i.token.isCancellationRequested && !this._disposed;){
                    const l = await a.next();
                    if (this._disposed || i.token.isCancellationRequested) break;
                    if (l.done) {
                        c = !0;
                        break;
                    }
                    const u = oLe.fromBinary(l.value), h = this._attaches.get(e);
                    if (!h || h.cancellation !== i) break;
                    this._attachRestartAttempts.delete(e);
                    try {
                        await this._handleAttachEvent(h, u), this._lastEventIds.set(e, u.eventId);
                    } catch (p) {
                        this._logService.warn(`[AgentHostRootSessionMirror] attach event handling failed for ${e}`, p), c = !0;
                        break;
                    }
                }
            } catch (l) {
                !i.token.isCancellationRequested && !this._disposed && (this._logService.warn(`[AgentHostRootSessionMirror] attachSession failed for ${e}`, l), c = !0);
            } finally{
                r.cancelSubscription?.dispose(), r.cancelSubscription = void 0, await a.return?.(), this._disposeAttachAdapters(r), i.dispose();
                let l = !1;
                this._attaches.get(e)?.cancellation === r.cancellation && (this._attaches.delete(e), l = c && !this._disposed && !this._localExecutions.has(e), l && this._scheduleAttachRestart(e, r.activeTurnId === void 0 ? void 0 : {
                    activeTurnId: r.activeTurnId,
                    echoedUserMessage: r.echoedUserMessage,
                    turnStart: r.turnStart
                })), !l && r.activeTurnId !== void 0 && await this._endTurn(r);
            }
        })();
    }
    _scheduleAttachRestart(e, t) {
        if (this._attachRestartTimers.has(e)) return;
        const n = (this._attachRestartAttempts.get(e) ?? 0) + 1;
        if (this._attachRestartAttempts.set(e, n), n > 5) {
            this._logService.warn(`[AgentHostRootSessionMirror] giving up attachSession restart for ${e} after 5 attempts`), this._attachRestartAttempts.delete(e), this._remoteSessions.delete(e), t !== void 0 && this._settleComposer(e, void 0, void 0), this._releaseAgent(e);
            return;
        }
        const i = Math.min(250 * 2 ** (n - 1), 4e3);
        this._attachRestartTimers.set(e, Cl(()=>{
            this._attachRestartTimers.deleteAndDispose(e), this._ensureAttach(e, t);
        }, i));
    }
    async _handleAttachEvent(e, t) {
        switch(t.event.case){
            case "conversationState":
                if (e.activeTurnId !== void 0 && (e.adapter !== void 0 || e.pendingSurfaceQueries > 0)) {
                    if (e.humanBubblePending) {
                        await this._applyConversationState(e, t.event.value, !0, !0);
                        break;
                    }
                    await this._storeConversationState(e, t.event.value);
                    break;
                }
                await this._applyConversationState(e, t.event.value);
                break;
            case "interactionUpdate":
                await this._applyInteractionUpdate(e, t.event.value);
                break;
            case "turnStarted":
            case "turnAwaitingInput":
                {
                    const n = t.event.value.turnId;
                    e.activeTurnId !== n && await this._beginTurn(e, n), t.event.case === "turnAwaitingInput" && this._options.interactionMirrors?.get(e.sessionId)?.observeSessionEvent(t);
                    break;
                }
            case "interactionResolved":
                this._options.interactionMirrors?.get(e.sessionId)?.observeSessionEvent(t);
                break;
            case "turnSettled":
                e.activeTurnId === t.event.value.turnId && await this._endTurn(e, t.event.value);
                break;
            case "turnInteractionsSuperseded":
                {
                    const n = t.event.value.continuation;
                    if (n.case === void 0) break;
                    try {
                        await this._applyConversationState(e, n.value, n.case !== "replayActionFromState");
                    } finally{
                        await this._clearGeneratingBubbleIds(e);
                    }
                    break;
                }
            case "subagentStarted":
                {
                    const n = t.event.value;
                    this._options.onSubagentStarted?.({
                        parentSessionId: e.sessionId,
                        childSessionId: n.childSessionId,
                        parentToolCallId: n.parentToolCallId,
                        rootSessionId: n.rootSessionId,
                        turnId: n.turnId
                    });
                    break;
                }
            case "backgroundTaskCompleted":
            case void 0:
                break;
            default:
                {
                    const n = t.event;
                    break;
                }
        }
    }
    _attachSuperseded(e) {
        return this._localExecutions.has(e.sessionId) || e.cancellation.token.isCancellationRequested;
    }
    async _beginTurn(e, t) {
        e.activeTurnId = t;
        const n = await this._resolveComposerServices();
        !e.composerHandle || !n || this._attachSuperseded(e) || (e.turnStart = eTh(e.composerHandle.data.fullConversationHeadersOnly), this._holdAgent(e.sessionId, n), n.composerDataService.updateComposerDataSetStore(e.composerHandle, (i)=>{
            t && i("latestChatGenerationUUID", t), i("status", "generating"), i("chatGenerationUUID", t || zn()), i("submitErrorDetails", void 0), i("abortReason", void 0), i("lastUpdatedAt", Date.now());
        }), this._disposeAttachAdapters(e), this._bindInteractionSurface(e.sessionId));
    }
    _bindInteractionSurface(e) {
        const t = this._options.interactionMirrors;
        if (t === void 0 || typeof this._providerService.watchSessionInteractions != "function") return;
        let n = t.get(e);
        if (n === void 0) {
            const i = new UQi(e, this._providerService, this._logService, ()=>{
                t.get(e) === i && t.delete(e);
            });
            n = i, t.set(e, i);
        }
        try {
            n.bindSurface({
                ctx: this._surfaceContext[0],
                interactionListener: {
                    query: (i, r)=>this._queryInteractionSurface(e, (s)=>s.query(i, r)),
                    answerHostQuestion: (i, r)=>this._queryInteractionSurface(e, (s)=>s.answerHostQuestion?.(i, r) ?? Promise.reject(new Error("This composer cannot show a Host question")))
                },
                onSurfaceFailure: "leavePending"
            });
        } catch (i) {
            this._logService.warn(`[AgentHostRootSessionMirror] failed to bind the interaction surface for ${e}`, i);
        }
    }
    async _queryInteractionSurface(e, t) {
        const n = this._attaches.get(e);
        if (n === void 0) throw new Error(`[AgentHostRootSessionMirror] no composer surface for a Host interaction on ${e}`);
        n.pendingSurfaceQueries += 1;
        try {
            return await this._answerInteractionQuery(n, t);
        } finally{
            n.pendingSurfaceQueries -= 1;
        }
    }
    async _answerInteractionQuery(e, t) {
        const n = await this._resolveComposerServices(), i = e.composerHandle;
        if (i === void 0 || n === void 0) throw new Error(`[AgentHostRootSessionMirror] no composer surface for a Host interaction on ${e.sessionId}`);
        await n.composerUtilsService?.ensureCapabilitiesAreLoaded(i);
        const r = await this._ensureAttachAdapter(e);
        if (r === void 0) throw new Error(`[AgentHostRootSessionMirror] the attach for ${e.sessionId} ended before its interaction was answered`);
        const s = await t(r);
        if (e.adapter !== r) throw new Error(`[AgentHostRootSessionMirror] the adapter answering a Host interaction on ${e.sessionId} was torn down while the question waited`);
        return s;
    }
    async _endTurn(e, t) {
        e.activeTurnId = void 0, this._disposeAttachAdapters(e), t !== void 0 && e.humanBubblePending && await this._projectEchoedHumanBubble(e), await this._settleComposer(e.sessionId, e.composerHandle, t), this._releaseAgent(e.sessionId);
    }
    async _projectEchoedHumanBubble(e) {
        const t = e.echoedUserMessage, n = e.composerHandle, i = await this._resolveComposerServices();
        if (t === void 0 || !n || !i || this._attachSuperseded(e)) return;
        const [{ ComposerBlobStore: r }, { createComposerMessageHeaderData: s }, { buildEagerHumanMessageBubble: o, projectSubscriptionEventNotification: a }] = await Promise.all([
            Promise.resolve().then(()=>(BU(), HMn)),
            Promise.resolve().then(()=>(Wf(), d8i)),
            Promise.resolve().then(()=>(nG(), A2n))
        ]);
        if (this._attachSuperseded(e)) return;
        const c = t.messageId.trim(), l = await o({
            context: qh(),
            userMessage: t,
            userServerBubbleId: c,
            shouldSetServerBubbleId: c.length > 0,
            bubbleIdOverride: c.length > 0 ? c : void 0,
            createdAt: new Date().toISOString(),
            eventNotification: a(void 0, t),
            blobStore: this._hydrationBlobStore(e, new r(i.storageService, n.composerId)),
            structuredLogService: i.structuredLogService,
            selectedContextService: i.selectedContextService
        });
        this._attachSuperseded(e) || (e.humanBubblePending = !1, e.echoedUserMessage = void 0, i.composerDataService.updateComposerDataSetStore(n, (u)=>{
            const h = n.data.fullConversationHeadersOnly, p = gTh({
                conversationMap: n.data.conversationMap,
                conversationHeaders: h
            }, {
                conversationMap: {
                    [l.bubbleId]: l
                },
                conversationHeaders: [
                    s(l)
                ]
            }, HQi(h, e.turnStart) ?? h.length);
            p !== void 0 && (u("conversationMap", p.conversationMap), u("fullConversationHeadersOnly", p.conversationHeaders));
        }));
    }
    _holdAgent(e, t) {
        if (this._heldAgents.has(e)) return;
        const n = t.agentRepositoryService.loadAgent(e).then((i)=>{
            if (this._heldAgents.get(e) !== n) {
                i.dispose();
                return;
            }
            return i;
        }, (i)=>{
            this._logService.warn(`[AgentHostRootSessionMirror] could not load agent ${e} for a projected turn`, i);
        });
        this._heldAgents.set(e, n);
    }
    _releaseAgent(e) {
        const t = this._heldAgents.get(e);
        t !== void 0 && (this._heldAgents.delete(e), t.then((n)=>n?.dispose()));
    }
    async _settleComposer(e, t, n) {
        const i = await this._resolveComposerServices(), r = t ?? i?.composerDataService.getHandleIfLoaded(e);
        if (!r || !i || this._localExecutions.has(e)) return;
        const s = n !== void 0 && this._localStops.get(e) === n.turnId;
        s && this._localStops.delete(e);
        const { status: o, abortReason: a } = uQv(n, s);
        i.composerDataService.updateComposerDataSetStore(r, (c)=>{
            c("status", o), c("generatingBubbleIds", []), n !== void 0 && c("chatGenerationUUID", void 0), a !== void 0 && c("abortReason", a), n !== void 0 && n.outcome === ZX.FAILED && c("submitErrorDetails", lQv(n));
        });
    }
    async _clearGeneratingBubbleIds(e) {
        const t = await this._resolveComposerServices();
        !e.composerHandle || !t || this._attachSuperseded(e) || t.composerDataService.updateComposerDataSetStore(e.composerHandle, (n)=>n("generatingBubbleIds", []));
    }
    async _applyConversationState(e, t, n = !0, i = !1) {
        const r = e.composerHandle, s = await this._resolveComposerServices();
        if (!r || !s || !this._instantiationService || this._attachSuperseded(e)) return;
        const { ComposerBlobStore: o } = await Promise.resolve().then(()=>(BU(), HMn)), { populateConversationFromState: a } = await Promise.resolve().then(()=>(nG(), A2n));
        if (this._attachSuperseded(e)) return;
        const c = await a({
            instantiationService: this._instantiationService,
            selectedContextService: s.selectedContextService,
            structuredLogService: s.structuredLogService,
            conversationState: t,
            existingConversationMap: n ? r.data.conversationMap : {},
            existingConversationHeaders: n ? r.data.fullConversationHeadersOnly : [],
            blobStore: this._hydrationBlobStore(e, new o(s.storageService, r.composerId)),
            shouldSetServerBubbleId: !0
        }, qh());
        this._attachSuperseded(e) || (e.humanBubblePending = !1, e.echoedUserMessage = void 0, s.composerDataService.updateComposerDataSetStore(r, (l)=>{
            if (l("conversationState", t), i) {
                const u = r.data.fullConversationHeadersOnly, h = gTh({
                    conversationMap: r.data.conversationMap,
                    conversationHeaders: u
                }, c, HQi(u, e.turnStart));
                h !== void 0 && (l("conversationMap", h.conversationMap), l("fullConversationHeadersOnly", h.conversationHeaders));
                return;
            }
            l("conversationMap", c.conversationMap), l("fullConversationHeadersOnly", c.conversationHeaders), l("todos", c.todos);
        }, {
            reason: "host_hydrate",
            hostOwned: "unknown"
        }), this._requestTitleForProjectedExchange(e.sessionId, s, r, c.conversationHeaders));
    }
    _requestTitleForProjectedExchange(e, t, n, i) {
        this._titleRequestedSessions.has(e) || i.some((r)=>r.type === Tr.HUMAN) && (this._titleRequestedSessions.add(e), this._resolveComposerChatService(t).then((r)=>r?.renameComposerIfNeeded(n)).catch((r)=>{
            this._logService.warn(`[AgentHostRootSessionMirror] failed to title the chat for ${e}`, r);
        }));
    }
    _hydrationBlobStore(e, t) {
        return {
            getBlob: async (n, i)=>{
                const r = await t.getBlob(n, i);
                if (!r) throw new Error(`Missing blob while hydrating root session ${e.sessionId}`);
                return r;
            }
        };
    }
    async _storeConversationState(e, t) {
        const n = await this._resolveComposerServices();
        !e.composerHandle || !n || this._attachSuperseded(e) || n.composerDataService.updateComposerDataSetStore(e.composerHandle, (i)=>i("conversationState", t), {
            reason: "host_hydrate",
            hostOwned: "unknown"
        });
    }
    async _applyInteractionUpdate(e, t) {
        t.message.case === "userMessageAppended" && t.message.value.userMessage !== void 0 && this._noteUserMessageEcho(e, t.message.value.userMessage);
        const n = await this._ensureAttachAdapter(e);
        n !== void 0 && await n.sendUpdate(qh(), t);
    }
    _noteUserMessageEcho(e, t) {
        const n = t.messageId.trim();
        n.length > 0 && e.composerHandle?.data.conversationMap[n] !== void 0 || (e.humanBubblePending = !0, e.echoedUserMessage = t);
    }
    async _ensureAttachAdapter(e) {
        const t = e.composerHandle;
        if (!t || !this._instantiationService) return;
        if (e.adapter) return e.adapter;
        const { AgentResponseAdapter: n } = await Promise.resolve().then(()=>(Cjt(), aTo));
        if (!this._attachSuperseded(e)) return e.adapter || (e.actionManager = new skt, e.adapter = new n(this._instantiationService, t, e.actionManager, t.data.chatGenerationUUID)), e.adapter;
    }
    _stopAttach(e) {
        this._attachRestartTimers.deleteAndDispose(e);
        const t = this._attaches.get(e);
        t && (this._attaches.delete(e), t.cancellation.cancel(), t.cancelSubscription?.dispose(), t.cancellation.dispose(), this._disposeAttachAdapters(t));
    }
    _disposeAttachAdapters(e) {
        try {
            Pk(e.adapter, e.actionManager);
        } catch (t) {
            this._logService.warn(`[AgentHostRootSessionMirror] failed to dispose attach adapters for ${e.sessionId}`, t);
        }
        e.adapter = void 0, e.actionManager = void 0;
    }
};

}
