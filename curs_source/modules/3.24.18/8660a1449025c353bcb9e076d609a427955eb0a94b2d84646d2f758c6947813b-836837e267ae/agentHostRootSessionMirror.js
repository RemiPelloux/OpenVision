import { Aeg, Nil } from "./Aeg.js";
import { Ec, Nt, Qe, da, m1 } from "./Iwo.js";
import { Chg, Uhg, ccl, cyk, lyk, vos } from "./Ycg.js";
import { fos, gos } from "./agentHostInteractionMirror.js";
import { Thg } from "./agentHostTurnStart.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { wAn } from "./agentResponseAdapter.js";
import { K4e, Oze, Sle, hG } from "./agent_host_pb.js";
import { qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { bs, sd } from "./chat_pb.js";
import { zW } from "./composerBlobStore.js";
import { mV } from "./composerChatServiceInterface.js";
import { uv } from "./composerData.js";
import { Pl } from "./composerDataServiceTypes.js";
import { WB } from "./composerUtilsServiceTypes.js";
import { cGt } from "./controlled_3.ts";
import { FO } from "./index_10.ts";
import { Ng } from "./index_3.ts";
import { Dqr, HSi, Xp } from "./ipa.js";
import { rG } from "./populateConversationFromState.js";
import { cle, lG } from "./selectedContext.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { Ai, Xo } from "./uuid_2.js";
import { Aki, _0i } from "./yBp.js";
var jhg;
export { jhg };
var __wakaru_uyk_initialized = false;
export function uyk() {
if (__wakaru_uyk_initialized) return;
__wakaru_uyk_initialized = true;
"use strict";
E(), qn(), yo(), Qe(), Xo(), Zi(), Cm(), Ng(), FO(), hG(), sd(), wl(), cle(), fos(), Thg(), jhg = class {
    constructor(t, e, n, i, r, s = {}){
        this._providerService = t, this._logService = e, this._lastEventIds = n, this._instantiationService = i, this._options = s, this._store = new Nt, this._localExecutions = new Set, this._remoteSessions = new Set, this._heldAgents = new Map, this._attaches = new Map, this._attachRestartTimers = this._store.add(new da), this._attachRestartAttempts = new Map, this._titleRequestedSessions = new Set, this._localStops = new Map, this._surfaceContext = Xp().withCancel(), this._disposed = !1, this._composerServices = r;
    }
    onRemoteSendMessage(t) {
        this._disposed || (this._remoteSessions.add(t), this._localExecutions.has(t) || this._ensureAttach(t));
    }
    markLocalExecution(t) {
        this._localExecutions.add(t);
        const e = this._attaches.get(t);
        e !== void 0 && (e.activeTurnId = void 0), this._releaseAgent(t), this._stopAttach(t);
    }
    unmarkLocalExecution(t) {
        this._localExecutions.delete(t), this._remoteSessions.has(t) && this._ensureAttach(t);
    }
    noteLocalStop(t, e) {
        this._localStops.set(t, e);
    }
    forgetSession(t) {
        this._localExecutions.delete(t), this._remoteSessions.delete(t), this._releaseAgent(t), this._stopAttach(t), this._attachRestartAttempts.delete(t), this._titleRequestedSessions.delete(t), this._localStops.delete(t);
    }
    stopAll() {
        for (const t of [
            ...this._attaches.keys()
        ])this._stopAttach(t);
        for (const t of [
            ...this._heldAgents.keys()
        ])this._releaseAgent(t);
        this._attachRestartTimers.clearAndDisposeAll(), this._localExecutions.clear(), this._remoteSessions.clear(), this._attachRestartAttempts.clear(), this._titleRequestedSessions.clear(), this._localStops.clear();
    }
    dispose() {
        this._disposed = !0, this.stopAll(), this._surfaceContext[1](), this._store.dispose();
    }
    hasAttachForTest(t) {
        return this._attaches.has(t);
    }
    setAttachAdapterForTest(t, e) {
        const n = this._attaches.get(t);
        return n ? (n.adapter = e, !0) : !1;
    }
    async _resolveComposerServices() {
        if (this._composerServices) return this._composerServices;
        if (this._instantiationService) return this._composerServicesPromise || (this._composerServicesPromise = (async ()=>{
            const [{ IComposerDataService: t }, { IComposerUtilsService: e }] = await Promise.all([
                Promise.resolve().then(()=>(Pl(), Aki)),
                Promise.resolve().then(()=>(WB(), Nil))
            ]);
            return this._instantiationService.invokeFunction((n)=>({
                    composerDataService: n.get(t),
                    storageService: n.get(ki),
                    selectedContextService: n.get(lG),
                    structuredLogService: n.get(wh),
                    agentRepositoryService: n.get(ma),
                    composerUtilsService: n.get(e)
                }));
        })().catch((t)=>{
            this._logService.warn("[AgentHostRootSessionMirror] failed to resolve composer services", t);
        })), this._composerServices = await this._composerServicesPromise, this._composerServices;
    }
    async _resolveComposerChatService(t) {
        if (t.composerChatService) return t.composerChatService;
        if (this._instantiationService) return this._composerChatServicePromise || (this._composerChatServicePromise = (async ()=>{
            const { IComposerChatService: e } = await Promise.resolve().then(()=>(mV(), Aeg)), n = this._instantiationService.invokeFunction((i)=>i.get(e));
            return {
                renameComposerIfNeeded: (i)=>n.renameComposerIfNeeded(i)
            };
        })().catch((e)=>{
            this._logService.warn("[AgentHostRootSessionMirror] failed to resolve the composer chat service", e);
        })), this._composerChatServicePromise;
    }
    async _ensureAttach(t, e) {
        if (this._disposed || this._localExecutions.has(t) || this._attaches.has(t)) return;
        let n;
        try {
            const l = await this._resolveComposerServices();
            n = l ? l.composerDataService.getHandleIfLoaded(t) ?? await l.composerDataService.getComposerHandleById(t) : void 0;
        } catch (l) {
            this._logService.warn(`[AgentHostRootSessionMirror] composer lookup failed for ${t}`, l);
            return;
        }
        if (this._disposed || this._localExecutions.has(t) || this._attaches.has(t)) return;
        const i = new El, r = {
            sessionId: t,
            cancellation: i,
            cancelSubscription: void 0,
            adapter: void 0,
            actionManager: void 0,
            composerHandle: n,
            activeTurnId: e?.activeTurnId,
            humanBubblePending: e?.echoedUserMessage !== void 0,
            echoedUserMessage: e?.echoedUserMessage,
            turnStart: e?.turnStart,
            pendingSurfaceQueries: 0
        };
        this._attaches.set(t, r), this._attachRestartTimers.deleteAndDispose(t), e !== void 0 && this._bindInteractionSurface(t);
        const s = this._lastEventIds.get(t), o = new Oze({
            sessionId: t,
            ...s === void 0 ? {} : {
                lastEventId: s
            }
        }).toBinary(), a = this._providerService.attachSession(o)[Symbol.asyncIterator]();
        r.cancelSubscription = i.token.onCancellationRequested(()=>{
            a.return?.();
        }), (async ()=>{
            let l = !1;
            try {
                for(; !i.token.isCancellationRequested && !this._disposed;){
                    const c = await a.next();
                    if (this._disposed || i.token.isCancellationRequested) break;
                    if (c.done) {
                        l = !0;
                        break;
                    }
                    const u = K4e.fromBinary(c.value), d = this._attaches.get(t);
                    if (!d || d.cancellation !== i) break;
                    this._attachRestartAttempts.delete(t);
                    try {
                        await this._handleAttachEvent(d, u), this._lastEventIds.set(t, u.eventId);
                    } catch (h) {
                        this._logService.warn(`[AgentHostRootSessionMirror] attach event handling failed for ${t}`, h), l = !0;
                        break;
                    }
                }
            } catch (c) {
                !i.token.isCancellationRequested && !this._disposed && (this._logService.warn(`[AgentHostRootSessionMirror] attachSession failed for ${t}`, c), l = !0);
            } finally{
                r.cancelSubscription?.dispose(), r.cancelSubscription = void 0, await a.return?.(), this._disposeAttachAdapters(r), i.dispose();
                let c = !1;
                this._attaches.get(t)?.cancellation === r.cancellation && (this._attaches.delete(t), c = l && !this._disposed && !this._localExecutions.has(t), c && this._scheduleAttachRestart(t, r.activeTurnId === void 0 ? void 0 : {
                    activeTurnId: r.activeTurnId,
                    echoedUserMessage: r.echoedUserMessage,
                    turnStart: r.turnStart
                })), !c && r.activeTurnId !== void 0 && await this._endTurn(r);
            }
        })();
    }
    _scheduleAttachRestart(t, e) {
        if (this._attachRestartTimers.has(t)) return;
        const n = (this._attachRestartAttempts.get(t) ?? 0) + 1;
        if (this._attachRestartAttempts.set(t, n), n > 5) {
            this._logService.warn(`[AgentHostRootSessionMirror] giving up attachSession restart for ${t} after 5 attempts`), this._attachRestartAttempts.delete(t), this._remoteSessions.delete(t), e !== void 0 && this._settleComposer(t, void 0, void 0), this._releaseAgent(t);
            return;
        }
        const i = Math.min(250 * 2 ** (n - 1), 4e3);
        this._attachRestartTimers.set(t, Ec(()=>{
            this._attachRestartTimers.deleteAndDispose(t), this._ensureAttach(t, e);
        }, i));
    }
    async _handleAttachEvent(t, e) {
        switch(e.event.case){
            case "conversationState":
                if (t.activeTurnId !== void 0 && (t.adapter !== void 0 || t.pendingSurfaceQueries > 0)) {
                    if (t.humanBubblePending) {
                        await this._applyConversationState(t, e.event.value, !0, !0);
                        break;
                    }
                    await this._storeConversationState(t, e.event.value);
                    break;
                }
                await this._applyConversationState(t, e.event.value);
                break;
            case "interactionUpdate":
                await this._applyInteractionUpdate(t, e.event.value);
                break;
            case "turnStarted":
            case "turnAwaitingInput":
                {
                    const n = e.event.value.turnId;
                    t.activeTurnId !== n && await this._beginTurn(t, n), e.event.case === "turnAwaitingInput" && this._options.interactionMirrors?.get(t.sessionId)?.observeSessionEvent(e);
                    break;
                }
            case "interactionResolved":
                this._options.interactionMirrors?.get(t.sessionId)?.observeSessionEvent(e);
                break;
            case "turnSettled":
                t.activeTurnId === e.event.value.turnId && await this._endTurn(t, e.event.value);
                break;
            case "turnInteractionsSuperseded":
                {
                    const n = e.event.value.continuation;
                    if (n.case === void 0) break;
                    try {
                        await this._applyConversationState(t, n.value, n.case !== "replayActionFromState");
                    } finally{
                        await this._clearGeneratingBubbleIds(t);
                    }
                    break;
                }
            case "subagentStarted":
                {
                    const n = e.event.value;
                    this._options.onSubagentStarted?.({
                        parentSessionId: t.sessionId,
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
                    const n = e.event;
                    break;
                }
        }
    }
    _attachSuperseded(t) {
        return this._localExecutions.has(t.sessionId) || t.cancellation.token.isCancellationRequested;
    }
    async _beginTurn(t, e) {
        t.activeTurnId = e;
        const n = await this._resolveComposerServices();
        !t.composerHandle || !n || this._attachSuperseded(t) || (t.turnStart = Chg(t.composerHandle.data.fullConversationHeadersOnly), this._holdAgent(t.sessionId, n), n.composerDataService.updateComposerDataSetStore(t.composerHandle, (i)=>{
            e && i("latestChatGenerationUUID", e), i("status", "generating"), i("chatGenerationUUID", e || Ai()), i("submitErrorDetails", void 0), i("abortReason", void 0), i("lastUpdatedAt", Date.now());
        }), this._disposeAttachAdapters(t), this._bindInteractionSurface(t.sessionId));
    }
    _bindInteractionSurface(t) {
        const e = this._options.interactionMirrors;
        if (e === void 0 || typeof this._providerService.watchSessionInteractions != "function") return;
        let n = e.get(t);
        if (n === void 0) {
            const i = new gos(t, this._providerService, this._logService, ()=>{
                e.get(t) === i && e.delete(t);
            });
            n = i, e.set(t, i);
        }
        try {
            n.bindSurface({
                ctx: this._surfaceContext[0],
                interactionListener: {
                    query: (i, r)=>this._queryInteractionSurface(t, (s)=>s.query(i, r)),
                    answerHostQuestion: (i, r)=>this._queryInteractionSurface(t, (s)=>s.answerHostQuestion?.(i, r) ?? Promise.reject(new Error("This composer cannot show a Host question")))
                },
                onSurfaceFailure: "leavePending"
            });
        } catch (i) {
            this._logService.warn(`[AgentHostRootSessionMirror] failed to bind the interaction surface for ${t}`, i);
        }
    }
    async _queryInteractionSurface(t, e) {
        const n = this._attaches.get(t);
        if (n === void 0) throw new Error(`[AgentHostRootSessionMirror] no composer surface for a Host interaction on ${t}`);
        n.pendingSurfaceQueries += 1;
        try {
            return await this._answerInteractionQuery(n, e);
        } finally{
            n.pendingSurfaceQueries -= 1;
        }
    }
    async _answerInteractionQuery(t, e) {
        const n = await this._resolveComposerServices(), i = t.composerHandle;
        if (i === void 0 || n === void 0) throw new Error(`[AgentHostRootSessionMirror] no composer surface for a Host interaction on ${t.sessionId}`);
        await n.composerUtilsService?.ensureCapabilitiesAreLoaded(i);
        const r = await this._ensureAttachAdapter(t);
        if (r === void 0) throw new Error(`[AgentHostRootSessionMirror] the attach for ${t.sessionId} ended before its interaction was answered`);
        const s = await e(r);
        if (t.adapter !== r) throw new Error(`[AgentHostRootSessionMirror] the adapter answering a Host interaction on ${t.sessionId} was torn down while the question waited`);
        return s;
    }
    async _endTurn(t, e) {
        t.activeTurnId = void 0, this._disposeAttachAdapters(t), e !== void 0 && t.humanBubblePending && await this._projectEchoedHumanBubble(t), await this._settleComposer(t.sessionId, t.composerHandle, e), this._releaseAgent(t.sessionId);
    }
    async _projectEchoedHumanBubble(t) {
        const e = t.echoedUserMessage, n = t.composerHandle, i = await this._resolveComposerServices();
        if (e === void 0 || !n || !i || this._attachSuperseded(t)) return;
        const [{ ComposerBlobStore: r }, { createComposerMessageHeaderData: s }, { buildEagerHumanMessageBubble: o, projectSubscriptionEventNotification: a }] = await Promise.all([
            Promise.resolve().then(()=>(zW(), HSi)),
            Promise.resolve().then(()=>(uv(), Dqr)),
            Promise.resolve().then(()=>(rG(), _0i))
        ]);
        if (this._attachSuperseded(t)) return;
        const l = e.messageId.trim(), c = await o({
            context: Xp(),
            userMessage: e,
            userServerBubbleId: l,
            shouldSetServerBubbleId: l.length > 0,
            bubbleIdOverride: l.length > 0 ? l : void 0,
            createdAt: new Date().toISOString(),
            eventNotification: a(void 0, e),
            blobStore: this._hydrationBlobStore(t, new r(i.storageService, n.composerId)),
            structuredLogService: i.structuredLogService,
            selectedContextService: i.selectedContextService
        });
        this._attachSuperseded(t) || (t.humanBubblePending = !1, t.echoedUserMessage = void 0, i.composerDataService.updateComposerDataSetStore(n, (u)=>{
            const d = n.data.fullConversationHeadersOnly, h = Uhg({
                conversationMap: n.data.conversationMap,
                conversationHeaders: d
            }, {
                conversationMap: {
                    [c.bubbleId]: c
                },
                conversationHeaders: [
                    s(c)
                ]
            }, vos(d, t.turnStart) ?? d.length);
            h !== void 0 && (u("conversationMap", h.conversationMap), u("fullConversationHeadersOnly", h.conversationHeaders));
        }));
    }
    _holdAgent(t, e) {
        if (this._heldAgents.has(t)) return;
        const n = e.agentRepositoryService.loadAgent(t).then((i)=>{
            if (this._heldAgents.get(t) !== n) {
                i.dispose();
                return;
            }
            return i;
        }, (i)=>{
            this._logService.warn(`[AgentHostRootSessionMirror] could not load agent ${t} for a projected turn`, i);
        });
        this._heldAgents.set(t, n);
    }
    _releaseAgent(t) {
        const e = this._heldAgents.get(t);
        e !== void 0 && (this._heldAgents.delete(t), e.then((n)=>n?.dispose()));
    }
    async _settleComposer(t, e, n) {
        const i = await this._resolveComposerServices(), r = e ?? i?.composerDataService.getHandleIfLoaded(t);
        if (!r || !i || this._localExecutions.has(t)) return;
        const s = n !== void 0 && this._localStops.get(t) === n.turnId;
        s && this._localStops.delete(t);
        const { status: o, abortReason: a } = cyk(n, s);
        i.composerDataService.updateComposerDataSetStore(r, (l)=>{
            l("status", o), l("generatingBubbleIds", []), n !== void 0 && l("chatGenerationUUID", void 0), a !== void 0 && l("abortReason", a), n !== void 0 && n.outcome === Sle.FAILED && l("submitErrorDetails", lyk(n));
        });
    }
    async _clearGeneratingBubbleIds(t) {
        const e = await this._resolveComposerServices();
        !t.composerHandle || !e || this._attachSuperseded(t) || e.composerDataService.updateComposerDataSetStore(t.composerHandle, (n)=>n("generatingBubbleIds", []));
    }
    async _applyConversationState(t, e, n = !0, i = !1) {
        const r = t.composerHandle, s = await this._resolveComposerServices();
        if (!r || !s || !this._instantiationService || this._attachSuperseded(t)) return;
        const { ComposerBlobStore: o } = await Promise.resolve().then(()=>(zW(), HSi)), { populateConversationFromState: a } = await Promise.resolve().then(()=>(rG(), _0i));
        if (this._attachSuperseded(t)) return;
        const l = await a({
            instantiationService: this._instantiationService,
            selectedContextService: s.selectedContextService,
            structuredLogService: s.structuredLogService,
            conversationState: e,
            existingConversationMap: n ? r.data.conversationMap : {},
            existingConversationHeaders: n ? r.data.fullConversationHeadersOnly : [],
            blobStore: this._hydrationBlobStore(t, new o(s.storageService, r.composerId)),
            shouldSetServerBubbleId: !0
        }, Xp());
        this._attachSuperseded(t) || (t.humanBubblePending = !1, t.echoedUserMessage = void 0, s.composerDataService.updateComposerDataSetStore(r, (c)=>{
            if (c("conversationState", e), i) {
                const u = r.data.fullConversationHeadersOnly, d = Uhg({
                    conversationMap: r.data.conversationMap,
                    conversationHeaders: u
                }, l, vos(u, t.turnStart));
                d !== void 0 && (c("conversationMap", d.conversationMap), c("fullConversationHeadersOnly", d.conversationHeaders));
                return;
            }
            c("conversationMap", l.conversationMap), c("fullConversationHeadersOnly", l.conversationHeaders), c("todos", l.todos);
        }, {
            reason: "host_hydrate",
            hostOwned: "unknown"
        }), this._requestTitleForProjectedExchange(t.sessionId, s, r, l.conversationHeaders));
    }
    _requestTitleForProjectedExchange(t, e, n, i) {
        this._titleRequestedSessions.has(t) || i.some((r)=>r.type === bs.HUMAN) && (this._titleRequestedSessions.add(t), this._resolveComposerChatService(e).then((r)=>r?.renameComposerIfNeeded(n)).catch((r)=>{
            this._logService.warn(`[AgentHostRootSessionMirror] failed to title the chat for ${t}`, r);
        }));
    }
    _hydrationBlobStore(t, e) {
        return {
            getBlob: async (n, i)=>{
                const r = await e.getBlob(n, i);
                if (!r) throw new Error(`Missing blob while hydrating root session ${t.sessionId}`);
                return r;
            }
        };
    }
    async _storeConversationState(t, e) {
        const n = await this._resolveComposerServices();
        !t.composerHandle || !n || this._attachSuperseded(t) || n.composerDataService.updateComposerDataSetStore(t.composerHandle, (i)=>i("conversationState", e), {
            reason: "host_hydrate",
            hostOwned: "unknown"
        });
    }
    async _applyInteractionUpdate(t, e) {
        e.message.case === "userMessageAppended" && e.message.value.userMessage !== void 0 && this._noteUserMessageEcho(t, e.message.value.userMessage);
        const n = await this._ensureAttachAdapter(t);
        n !== void 0 && await n.sendUpdate(Xp(), e);
    }
    _noteUserMessageEcho(t, e) {
        const n = e.messageId.trim();
        n.length > 0 && t.composerHandle?.data.conversationMap[n] !== void 0 || (t.humanBubblePending = !0, t.echoedUserMessage = e);
    }
    async _ensureAttachAdapter(t) {
        const e = t.composerHandle;
        if (!e || !this._instantiationService) return;
        if (t.adapter) return t.adapter;
        const { AgentResponseAdapter: n } = await Promise.resolve().then(()=>(wAn(), ccl));
        if (!this._attachSuperseded(t)) return t.adapter || (t.actionManager = new cGt, t.adapter = new n(this._instantiationService, e, t.actionManager, e.data.chatGenerationUUID)), t.adapter;
    }
    _stopAttach(t) {
        this._attachRestartTimers.deleteAndDispose(t);
        const e = this._attaches.get(t);
        e && (this._attaches.delete(t), e.cancellation.cancel(), e.cancelSubscription?.dispose(), e.cancellation.dispose(), this._disposeAttachAdapters(e));
    }
    _disposeAttachAdapters(t) {
        try {
            m1(t.adapter, t.actionManager);
        } catch (e) {
            this._logService.warn(`[AgentHostRootSessionMirror] failed to dispose attach adapters for ${t.sessionId}`, e);
        }
        t.adapter = void 0, t.actionManager = void 0;
    }
};

}
