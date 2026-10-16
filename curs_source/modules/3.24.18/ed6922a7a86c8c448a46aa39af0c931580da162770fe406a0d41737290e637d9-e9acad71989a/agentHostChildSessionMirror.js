import { A2n, A7i, XLn, oBu } from "./A3u.js";
import { HMn, Njs, d8i, qh } from "./De_3.js";
import { Cl, He, Kl, Pk, Se, cn, po } from "./HVr.js";
import { $Qi, UQi } from "./agentHostInteractionMirror.js";
import { tTh } from "./agentHostTurnStart.js";
import { Cjt } from "./agentResponseAdapter.js";
import { V1e, ZX, bq, btt, cZi, dZi, ktt, oLe, ytt } from "./agent_host_pb.js";
import { UE, zd } from "./agent_pb.js";
import { Am, bn } from "./async.js";
import { nb } from "./bcIdFromAuthority.js";
import { Ar, Eo } from "./cancellation.js";
import { GSo, cSh } from "./cgh.js";
import { Hu, Tr } from "./chat_pb.js";
import { sZ } from "./cloudAgentRepositoryService.js";
import { BU } from "./composerBlobStore.js";
import { Wf } from "./composerData.js";
import { nl } from "./composerDataServiceTypes.js";
import { F1e } from "./composerModeUtils.js";
import { z5 } from "./composerUtilsServiceTypes.js";
import { skt } from "./controlled_3.ts";
import { hb } from "./errors.ts";
import { z3 } from "./index_10.ts";
import { ZW } from "./index_12.ts";
import { Gp } from "./index_3.ts";
import { $d, Id } from "./lifecycle_2.js";
import { Cp, vp } from "./metricsService.js";
import { i0 } from "./modelConfigServiceTypes.js";
import { nG } from "./populateConversationFromState.js";
import { Um, t2, y2c } from "./qIc.js";
import { aoe } from "./selectedContext.js";
import { Lk } from "./sentry.js";
import { Vn } from "./storage_2.js";
import { im } from "./structuredLog.js";
import { kZi } from "./subagentComposerServiceInterface.js";
import { XB } from "./trace.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
import { SFn, plh } from "./xmo.js";
function eTh(e) {
    const t = e.at(-1);
    return {
        afterBubbleId: t?.type === Tr.HUMAN && !t.serverBubbleId ? void 0 : t?.bubbleId,
        headerCount: e.length
    };
}
function HQi(e, t) {
    if (t === void 0) return;
    const n = t.afterBubbleId === void 0 ? -1 : e.findLastIndex((i)=>i.bubbleId === t.afterBubbleId);
    return n < 0 ? t.headerCount : n + 1;
}
function nTh(e) {
    return e === V1e.RUNNING || e === V1e.AWAITING_INPUT;
}
function iTh(e, t) {
    if (e === void 0 || e === UE.UNSPECIFIED) return;
    const n = SFn(e);
    return n === t ? void 0 : n;
}
function rTh(e, t, n) {
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
function sTh(e) {
    return e.echoedUserMessage?.messageId.trim() ?? "";
}
function eQv(e, t) {
    const n = sTh(e);
    return n.length > 0 && t.conversationMap[n] !== void 0;
}
function tQv(e, t) {
    if (t === void 0) return !1;
    const n = sTh(e);
    return n.length === 0 || t.conversationMap[n] !== void 0;
}
function nQv(e, t) {
    if (!e || e.modelName !== t.modelName || e.maxMode === !0 != (t.maxMode === !0)) return !1;
    const n = e.selectedModels ?? [], i = t.selectedModels ?? [];
    return n.length !== i.length ? !1 : n.every((r, s)=>{
        const o = i[s], a = r.parameters ?? [], c = o.parameters ?? [];
        return r.modelId === o.modelId && a.length === c.length && a.every((l, u)=>l.id === c[u].id && l.value === c[u].value);
    });
}
function oTh(e) {
    return e >= 50 ? "50_plus" : e >= 10 ? "10_49" : e >= 5 ? "5_9" : "1_4";
}
function iQv(e) {
    XB((t)=>{
        t.setFingerprint([
            "agent-host-watch-deleted-burst"
        ]), t.setLevel("warning"), t.setTag("agent_host.watch_deleted.unknown_bucket", oTh(e.unknownSessionIds.length)), t.setTag("agent_host.watch_deleted.known_bucket", oTh(e.knownSessionIds.length)), t.setTag("agent_host.watch_deleted.discovery_watch_active", String(e.discoveryWatchActive)), t.setTag("agent_host.watch_deleted.snapshot_received", String(e.snapshotReceived)), t.setContext("agent_host_watch_deleted_burst", {
            unknown_count: e.unknownSessionIds.length,
            known_count: e.knownSessionIds.length,
            unknown_loaded_count: e.unknownLoadedCount,
            span_ms: e.spanMs,
            ms_since_discovery_watch_started: e.msSinceDiscoveryWatchStarted,
            ms_since_registration_change: e.msSinceRegistrationChange,
            unknown_session_ids: e.unknownSessionIds.slice(0, V1o),
            known_session_ids: e.knownSessionIds.slice(0, V1o)
        });
        const n = new Error(`Agent host watch deleted burst: ${e.unknownSessionIds.length} unknown / ${e.knownSessionIds.length} known sessions in ${e.spanMs}ms`);
        n.name = "AgentHostWatchDeletedBurst", t2(n);
    });
}
var G1o, aTh, cTh, lTh, V1o, uTh, dTh;
var aTo = {};
var TRh = {};
export { G1o, HQi, TRh, V1o, aTh, aTo, cTh, dTh, eQv, eTh, iQv, iTh, lTh, nQv, nTh, oTh, rTh, sTh, tQv, uTh };
var __wakaru_rQv_initialized = false;
export function rQv() {
if (__wakaru_rQv_initialized) return;
__wakaru_rQv_initialized = true;
"use strict";
x(), bn(), Ar(), nb(), Se(), Js(), Lk(), yv(), Cp(), Gp(), ZW(), z3(), bq(), zd(), Hu(), F1e(), $d(), $Qi(), tTh(), G1o = [
    0,
    250
], aTh = 5e3, cTh = 1e4, lTh = 5, V1o = 100, uTh = "cursor.agent_host.child_mirror.watch_deleted", dTh = class {
    constructor(e, t, n, i, r, s){
        this._providerService = e, this._logService = t, this._instantiationService = n, this._backgroundWorkService = i, this._discoveryRestartDelayMs = s, this._children = new Map, this._attaches = new Map, this._interactionMirrors = new Map, this._adoptionInFlight = new Map, this._adoptionTokens = new Map, this._attachRestartAttempts = new Map, this._attachRestartTimers = new po, this._attachResumeCursor = new Map, this._attachTurnBracket = new Map, this._store = new He, this._discoveryRestart = this._store.add(new cn), this._discoveryRestartAttempts = 0, this._disposed = !1, this._discoveryDesired = !1, this._catalogSessionIds = new Set, this._snapshotReceived = !1, this._snapshotDeferred = new Am, this._adoptionListeners = new Set, this._hydrationWaiters = new Map, this._watchDeletedBurstFlush = this._store.add(new cn), this._watchDeletedBurstReporter = iQv, this._stoppingAll = !1, this._adoptionServices = r, this._store.add(this._providerService.onDidChangeRegistration?.(()=>{
            this._lastRegistrationChangeAtMs = Date.now(), this._onSessionLivenessLost();
        }) ?? {
            dispose: ()=>{}
        });
    }
    registerAdoptionListener(e) {
        this._adoptionListeners.add(e);
        for (const t of [
            ...this._children.keys()
        ])try {
            e.onChildAdopted(t);
        } catch (n) {
            this._logService.warn(`[AgentHostChildSessionMirror] child adoption listener failed for ${t}`, n);
        }
        return {
            dispose: ()=>this._adoptionListeners.delete(e)
        };
    }
    waitForChildHydration(e, t) {
        if (!(this._disposed || !this._children.has(e)) && !((this._attachResumeCursor.get(e) ?? 0n) >= t)) return new Promise((n)=>{
            const i = this._hydrationWaiters.get(e) ?? [];
            i.push({
                eventId: t,
                resolve: n
            }), this._hydrationWaiters.set(e, i);
        });
    }
    _releaseHydrationWaiters(e, t) {
        const n = this._hydrationWaiters.get(e);
        if (!n?.length) return;
        const i = t === void 0 ? n : n.filter((s)=>s.eventId <= t);
        if (i.length === 0) return;
        const r = t === void 0 ? [] : n.filter((s)=>s.eventId > t);
        r.length === 0 ? this._hydrationWaiters.delete(e) : this._hydrationWaiters.set(e, r);
        for (const s of i)s.resolve();
    }
    getChildSessions() {
        return [
            ...this._children.values()
        ];
    }
    getChildSession(e) {
        return this._children.get(e);
    }
    ensureDiscovery() {
        this._disposed || (this._discoveryDesired = !0, this._ensureDiscoveryWatch());
    }
    async waitForSnapshot(e) {
        if (this.ensureDiscovery(), this._snapshotReceived) return this._catalogSessionIds;
        if (e?.aborted || this._disposed) throw new hb("Cancelled while waiting for agent host session catalog.");
        return e === void 0 ? (await this._snapshotDeferred.p, this._catalogSessionIds) : (await new Promise((t, n)=>{
            const i = ()=>n(new hb("Cancelled while waiting for agent host session catalog."));
            e.addEventListener("abort", i, {
                once: !0
            }), this._snapshotDeferred.p.then(t, n).finally(()=>{
                e.removeEventListener("abort", i);
            });
        }), this._catalogSessionIds);
    }
    onSubagentStarted(e) {
        if (this._disposed) return;
        if (Um(e.childSessionId)) {
            this._adoptCloudChild(e);
            return;
        }
        this.ensureDiscovery();
        const t = {
            sessionId: e.childSessionId,
            parentSessionId: e.parentSessionId,
            parentToolCallId: e.parentToolCallId,
            rootSessionId: e.rootSessionId,
            status: this._children.get(e.childSessionId)?.status ?? V1e.RUNNING,
            lastEventId: 0n
        };
        this._upsertChild(t), this._adoptChild(this._children.get(t.sessionId) ?? t);
    }
    async _adoptCloudChild(e) {
        try {
            const t = await this._resolveAdoptionServices();
            if (this._disposed) return;
            if (t?.cloudAgentRepositoryService === void 0) {
                this._logService.error(`[AgentHostChildSessionMirror] Cannot adopt cloud child ${e.childSessionId}: adoption services unavailable`);
                return;
            }
            t.subagentComposerService.linkParentToSubagent(e.parentToolCallId, e.childSessionId, e.parentSessionId);
            const n = await this._ensureCloudChildLoadable(t.cloudAgentRepositoryService, e.childSessionId);
            if (this._disposed) return;
            if (!n) {
                this._logService.warn(`[AgentHostChildSessionMirror] Cannot arm cloud child ${e.childSessionId}: repository row unavailable after retries`);
                return;
            }
            t.cloudAgentRepositoryService.noteCloudSubagentRunDispatched(e.childSessionId);
        } catch (t) {
            this._logService.error(`[AgentHostChildSessionMirror] Failed to adopt cloud child ${e.childSessionId}`, t);
        }
    }
    async _ensureCloudChildLoadable(e, t) {
        for(let n = 0; n <= G1o.length; n += 1){
            if (this._disposed || (await e.ensureLoadableCloudSubagent(t), this._disposed)) return !1;
            if (e.getAgentHeader(t) !== void 0) return !0;
            const i = G1o[n];
            i !== void 0 && await Kl(i);
        }
        return !1;
    }
    forgetSession(e) {
        return this._forgetSessionAsync(e);
    }
    async _forgetSessionAsync(e) {
        const t = [
            ...this._children.values()
        ].filter((n)=>n.sessionId === e || n.parentSessionId === e || n.rootSessionId === e).map((n)=>n.sessionId);
        for (const n of t)await this._removeChildAsync(n);
    }
    stopAll() {
        if (this._stopAllInFlight) return this._stopAllInFlight;
        const e = this._stopAllAsync();
        return this._stopAllInFlight = e.finally(()=>{
            this._stopAllInFlight === e && (this._stopAllInFlight = void 0);
        }), this._stopAllInFlight;
    }
    async _stopAllAsync() {
        this._stoppingAll = !0, this._adoptionTokens.clear();
        try {
            const e = new Set([
                ...this._children.keys(),
                ...this._attaches.keys()
            ]);
            for (const t of e)await this._forgetChildLocalState(t);
            await Promise.allSettled([
                ...this._adoptionInFlight.values()
            ]);
            for (const t of [
                ...this._attaches.keys()
            ])this._stopAttach(t);
            for (const t of [
                ...this._attachRestartTimers.keys(),
                ...this._attachRestartAttempts.keys()
            ])this._clearAttachRestart(t);
            for (const t of [
                ...this._hydrationWaiters.keys()
            ])this._releaseHydrationWaiters(t, void 0);
            this._children.clear(), this._attaches.clear(), this._adoptionInFlight.clear(), this._adoptionTokens.clear(), this._attachResumeCursor.clear(), this._attachTurnBracket.clear(), this._stopDiscoveryWatch(), this._resetSnapshotWaiter(), this._discoveryDesired && !this._disposed && this._ensureDiscoveryWatch();
        } finally{
            this._stoppingAll = !1;
        }
    }
    _onSessionLivenessLost() {
        const e = this._disposed || this._isWorkbenchShuttingDown() ? [] : this._collectLiveChildren();
        (async ()=>(await this.stopAll(), e.length > 0 && this._interruptUnrevivableChildren(e)))();
    }
    _isWorkbenchShuttingDown() {
        if (!this._instantiationService) return !1;
        try {
            return this._instantiationService.invokeFunction((e)=>e.get(Id)).willShutdown;
        } catch  {
            return !0;
        }
    }
    _collectLiveChildren() {
        const e = [];
        for (const t of this._children.values()){
            if (!t.parentToolCallId?.trim() || Um(t.sessionId)) continue;
            const n = this._attaches.get(t.sessionId), i = this._attachTurnBracket.get(t.sessionId), r = n?.turnActive === !0 || n === void 0 && i?.turnActive === !0, s = n?.blockInteractionBeginUntilTurnStarted === !0 || n === void 0 && i?.blockInteractionBeginUntilTurnStarted === !0;
            (r || !s && t.status === V1e.RUNNING) && e.push(t);
        }
        return e;
    }
    _interruptUnrevivableChildren(e) {
        (async ()=>{
            const t = await this._resolveAdoptionServices();
            if (!(!t || this._disposed)) for (const n of e)try {
                if (await t.subagentComposerService.findSubagentForToolCall(n.parentToolCallId, n.parentSessionId) !== void 0) continue;
                await t.subagentComposerService.markSubagentInterrupted({
                    subagentComposerId: n.sessionId,
                    toolCallId: n.parentToolCallId,
                    parentComposerId: n.parentSessionId
                });
            } catch (i) {
                this._logService.warn(`[AgentHostChildSessionMirror] failed to settle child ${n.sessionId} after agent-host session loss`, i);
            }
        })();
    }
    _resetSnapshotWaiter() {
        this._catalogSessionIds.clear(), this._snapshotReceived = !1, this._snapshotDeferred.isSettled || (this._snapshotDeferred.p.catch(()=>{}), this._snapshotDeferred.error(new hb("Agent host session catalog watch stopped."))), this._snapshotDeferred = new Am;
    }
    _releaseSnapshotWaiterIfNoSnapshot() {
        this._snapshotReceived || this._disposed || (this._snapshotDeferred.isSettled || this._snapshotDeferred.complete(), this._snapshotDeferred = new Am);
    }
    dispose() {
        this._disposed = !0, this._discoveryDesired = !1, this.stopAll(), this._store.dispose(), this._attachRestartTimers.dispose();
    }
    handleWatchEventForTest(e) {
        this._handleWatchEvent(e);
    }
    setWatchDeletedBurstReporterForTest(e) {
        this._watchDeletedBurstReporter = e;
    }
    flushWatchDeletedBurstForTest() {
        return this._flushWatchDeletedBurst();
    }
    async _resolveAdoptionServices() {
        if (this._adoptionServices) return this._adoptionServices;
        if (this._instantiationService) return this._adoptionServicesPromise || (this._adoptionServicesPromise = (async ()=>{
            const [{ ICloudAgentRepositoryService: e }, { IComposerDataService: t }, { ISubagentComposerService: n }, { IModelConfigService: i }, { IStorageService: r }, { ISelectedContextService: s }, { IStructuredLogService: o }, { IComposerUtilsService: a }] = await Promise.all([
                Promise.resolve().then(()=>(sZ(), TRh)),
                Promise.resolve().then(()=>(nl(), XLn)),
                Promise.resolve().then(()=>(kZi(), cSh)),
                Promise.resolve().then(()=>(i0(), A7i)),
                Promise.resolve().then(()=>(Vn(), y2c)),
                Promise.resolve().then(()=>(aoe(), plh)),
                Promise.resolve().then(()=>(im(), oBu)),
                Promise.resolve().then(()=>(z5(), GSo))
            ]);
            return this._instantiationService.invokeFunction((c)=>({
                    cloudAgentRepositoryService: c.get(e),
                    composerDataService: c.get(t),
                    subagentComposerService: c.get(n),
                    modelConfigService: c.get(i),
                    storageService: c.get(r),
                    selectedContextService: c.get(s),
                    structuredLogService: c.get(o),
                    composerUtilsService: c.get(a)
                }));
        })().catch((e)=>{
            this._logService.warn("[AgentHostChildSessionMirror] failed to resolve composer adoption services", e);
        })), this._adoptionServices = await this._adoptionServicesPromise, this._adoptionServices;
    }
    _ensureDiscoveryWatch() {
        if (this._disposed || this._discoveryWatch) return;
        const e = new Eo, t = new cZi().toBinary();
        let n;
        try {
            n = this._providerService.watchSessions(t)[Symbol.asyncIterator]();
        } catch (r) {
            e.dispose(), this._logService.warn("[AgentHostChildSessionMirror] watchSessions failed", r), this._discoveryDesired && !this._disposed ? this._scheduleDiscoveryRestart() : this._releaseSnapshotWaiterIfNoSnapshot();
            return;
        }
        const i = e.token.onCancellationRequested(()=>{
            n.return?.();
        });
        this._discoveryWatch = {
            cancellation: e,
            cancelSubscription: i
        }, this._discoveryWatchStartedAtMs = Date.now(), (async ()=>{
            let r = !1;
            try {
                for(; !e.token.isCancellationRequested && !this._disposed;){
                    const s = await n.next();
                    if (s.done || this._disposed || e.token.isCancellationRequested) break;
                    this._discoveryRestartAttempts = 0;
                    const o = btt.fromBinary(s.value);
                    this._handleWatchEvent(o);
                }
            } catch (s) {
                !e.token.isCancellationRequested && !this._disposed && (this._logService.warn("[AgentHostChildSessionMirror] watchSessions failed", s), r = !0);
            } finally{
                i.dispose(), await n.return?.(), e.dispose(), this._discoveryWatch?.cancellation === e && (this._discoveryWatch = void 0, r && this._discoveryDesired && !this._disposed ? this._scheduleDiscoveryRestart() : !this._snapshotReceived && !this._disposed && !e.token.isCancellationRequested && this._releaseSnapshotWaiterIfNoSnapshot());
            }
        })();
    }
    _scheduleDiscoveryRestart() {
        if (this._discoveryRestart.value || this._discoveryWatch || this._disposed) return;
        if (this._discoveryRestartAttempts += 1, this._discoveryRestartAttempts > 5) {
            this._logService.warn("[AgentHostChildSessionMirror] giving up watchSessions restart after 5 attempts"), this._releaseSnapshotWaiterIfNoSnapshot();
            return;
        }
        const e = this._discoveryRestartDelayMs ?? Math.min(250 * 2 ** (this._discoveryRestartAttempts - 1), 4e3);
        this._discoveryRestart.value = Cl(()=>{
            this._discoveryRestart.clear(), this._discoveryDesired && !this._disposed && this._ensureDiscoveryWatch();
        }, e);
    }
    _stopDiscoveryWatch() {
        this._discoveryRestart.clear();
        const e = this._discoveryWatch;
        e && (this._discoveryWatch = void 0, e.cancelSubscription?.dispose(), e.cancellation.cancel(), e.cancellation.dispose());
    }
    _handleWatchEvent(e) {
        switch(e.event.case){
            case "snapshot":
                {
                    this._catalogSessionIds.clear();
                    for (const t of e.event.value.sessions)t.sessionId && this._catalogSessionIds.add(t.sessionId);
                    this._snapshotReceived = !0, this._snapshotDeferred.isSettled || this._snapshotDeferred.complete();
                    break;
                }
            case "added":
                {
                    const t = e.event.value.session;
                    if (t?.sessionId && this._catalogSessionIds.add(t.sessionId), !t?.parent) return;
                    this._upsertChild(this._toChildInfo(t)), this._adoptChild(this._children.get(t.sessionId));
                    break;
                }
            case "updated":
                {
                    const t = e.event.value.session;
                    if (!t) return;
                    if (t.parent) {
                        const n = this._children.get(t.sessionId), i = !!n?.parentToolCallId?.trim(), r = this._toChildInfo(t);
                        this._upsertChild(r);
                        const s = this._children.get(r.sessionId) ?? r;
                        this._syncTrayRowForChild(s), this._settleChildComposerStatusIfIdle(r.sessionId), n && !i && s.parentToolCallId?.trim() && this._adoptChild(s);
                        return;
                    }
                    for (const n of this._children.values())(n.parentSessionId === t.sessionId || n.rootSessionId === t.sessionId) && this._syncTrayRowForChild(n);
                    break;
                }
            case "deleted":
                {
                    const t = e.event.value.sessionId;
                    this._catalogSessionIds.delete(t);
                    const n = this._hasLocalChildState(t);
                    this._recordWatchDeleted(t, n), this._removeChildAsync(t, {
                        settleComposer: n
                    });
                    break;
                }
            case void 0:
                break;
            default:
                {
                    const t = e.event;
                    break;
                }
        }
    }
    _toChildInfo(e) {
        const t = e.parent;
        return {
            sessionId: e.sessionId,
            parentSessionId: t.parentSessionId,
            parentToolCallId: t.parentToolCallId,
            rootSessionId: t.rootSessionId,
            status: e.status,
            lastEventId: e.lastEventId,
            ...e.modelId?.trim() ? {
                modelId: e.modelId.trim()
            } : {}
        };
    }
    _upsertChild(e) {
        const t = this._children.get(e.sessionId);
        t ? this._children.set(e.sessionId, {
            ...t,
            ...e,
            parentToolCallId: e.parentToolCallId || t.parentToolCallId,
            modelId: e.modelId?.trim() || t.modelId
        }) : (this._children.set(e.sessionId, e), this._adoptionTokens.set(e.sessionId, {})), this._fireChildAdopted(e.sessionId);
    }
    _fireChildAdopted(e) {
        for (const t of [
            ...this._adoptionListeners
        ])try {
            t.onChildAdopted(e);
        } catch (n) {
            this._logService.warn(`[AgentHostChildSessionMirror] child adoption listener failed for ${e}`, n);
        }
    }
    _fireChildRemoved(e) {
        for (const t of [
            ...this._adoptionListeners
        ])try {
            t.onChildRemoved(e);
        } catch (n) {
            this._logService.warn(`[AgentHostChildSessionMirror] child removal listener failed for ${e}`, n);
        }
    }
    _removeChild(e) {
        this._removeChildAsync(e);
    }
    _hasLocalChildState(e) {
        return this._children.has(e) || this._attaches.has(e) || this._adoptionInFlight.has(e) || this._attachTurnBracket.has(e) || this._attachResumeCursor.has(e) || this._attachRestartTimers.has(e) || this._attachRestartAttempts.has(e) || this._interactionMirrors.has(e) || this._hydrationWaiters.has(e);
    }
    async _removeChildAsync(e, t) {
        this._adoptionTokens.delete(e), await this._forgetChildLocalState(e, t), this._children.delete(e), this._adoptionInFlight.delete(e), this._attachResumeCursor.delete(e), this._attachTurnBracket.delete(e);
    }
    async _forgetChildLocalState(e, t) {
        const n = this._attaches.get(e);
        n && this._endChildAttachTurn(n), this._stopAttach(e), this._clearAttachRestart(e), this._disposeInteractionMirror(e), this._backgroundWorkService?.clearSubagentWork(e), this._releaseHydrationWaiters(e, void 0), this._fireChildRemoved(e), t?.settleComposer !== !1 && await this._forceSettleChildComposerStatusAsync(e);
    }
    _recordWatchDeleted(e, t) {
        const n = this._adoptionServices === void 0 ? void 0 : this._adoptionServices.composerDataService.getHandleIfLoaded(e) !== void 0;
        this._logService.info(`[AgentHostChildSessionMirror] watchSessions.deleted ${e} knownChild=${t} composerLoaded=${n ?? "unresolved"}`), this._incrementMetric(uTh, {
            known_child: String(t),
            composer_loaded: n === void 0 ? "unresolved" : String(n)
        });
        const i = Date.now();
        let r = this._watchDeletedBurst;
        r === void 0 && (r = {
            startedAtMs: i,
            lastEventAtMs: i,
            knownSessionIds: [],
            unknownSessionIds: [],
            unknownLoadedCount: 0,
            msSinceDiscoveryWatchStarted: this._discoveryWatchStartedAtMs === void 0 || this._discoveryWatch === void 0 ? void 0 : i - this._discoveryWatchStartedAtMs,
            msSinceRegistrationChange: this._lastRegistrationChangeAtMs === void 0 ? void 0 : i - this._lastRegistrationChangeAtMs
        }, this._watchDeletedBurst = r, this._watchDeletedBurstFlush.value = Cl(()=>{
            this._flushWatchDeletedBurst();
        }, cTh)), r.lastEventAtMs = i, t ? r.knownSessionIds.push(e) : (r.unknownSessionIds.push(e), n === !0 && (r.unknownLoadedCount += 1));
    }
    _flushWatchDeletedBurst() {
        const e = this._watchDeletedBurst;
        if (e === void 0) return;
        this._watchDeletedBurst = void 0, this._watchDeletedBurstFlush.clear();
        const t = {
            knownSessionIds: e.knownSessionIds,
            unknownSessionIds: e.unknownSessionIds,
            unknownLoadedCount: e.unknownLoadedCount,
            spanMs: e.lastEventAtMs - e.startedAtMs,
            discoveryWatchActive: this._discoveryWatch !== void 0,
            snapshotReceived: this._snapshotReceived,
            msSinceDiscoveryWatchStarted: e.msSinceDiscoveryWatchStarted,
            msSinceRegistrationChange: e.msSinceRegistrationChange
        };
        if (this._logService.info(`[AgentHostChildSessionMirror] watchSessions.deleted burst: unknown=${t.unknownSessionIds.length} known=${t.knownSessionIds.length} unknownLoaded=${t.unknownLoadedCount} spanMs=${t.spanMs}`), t.unknownSessionIds.length >= lTh) try {
            this._watchDeletedBurstReporter(t);
        } catch (n) {
            this._logService.warn("[AgentHostChildSessionMirror] failed to report watchSessions.deleted burst", n);
        }
        return t;
    }
    _incrementMetric(e, t) {
        if (this._metricsService === void 0) {
            this._metricsService = null;
            try {
                this._metricsService = this._instantiationService?.invokeFunction((n)=>n.get(vp)) ?? null;
            } catch  {}
        }
        try {
            this._metricsService?.increment({
                stat: e,
                tags: t
            });
        } catch (n) {
            this._logService.warn(`[AgentHostChildSessionMirror] failed to increment ${e}`, n);
        }
    }
    _ensureInteractionMirror(e) {
        if (this._disposed || this._interactionMirrors.has(e) || !this._instantiationService || typeof this._providerService.watchSessionInteractions != "function") return;
        const [t, n] = qh().withCancel(), i = new UQi(e, this._providerService, this._logService, ()=>{
            const r = this._interactionMirrors.get(e);
            r?.mirror === i && (this._interactionMirrors.delete(e), r.cancel());
        });
        this._interactionMirrors.set(e, {
            mirror: i,
            cancel: n
        });
        try {
            i.bindSurface({
                ctx: t,
                interactionListener: {
                    query: (r, s)=>this._queryChildInteractionSurface(e, (o)=>o.query(r, s)),
                    answerHostQuestion: (r, s)=>this._queryChildInteractionSurface(e, (o)=>o.answerHostQuestion?.(r, s) ?? Promise.reject(new Error("This composer cannot show a Host question")))
                }
            });
        } catch (r) {
            this._logService.warn(`[AgentHostChildSessionMirror] failed to bind child interaction surface for ${e}`, r), this._disposeInteractionMirror(e);
        }
    }
    _disposeInteractionMirror(e) {
        const t = this._interactionMirrors.get(e);
        t && (this._interactionMirrors.delete(e), t.cancel(), t.mirror.dispose());
    }
    async _queryChildInteractionSurface(e, t) {
        const n = this._attaches.get(e), i = await this._resolveAdoptionServices(), r = n ? await this._resolveAttachComposerHandle(n) : void 0;
        if (!n || !r || !i || !this._instantiationService) throw new Error(`No child composer surface for session ${e}`);
        await i.composerUtilsService?.ensureCapabilitiesAreLoaded(r);
        const s = await this._ensureAttachAdapter(n);
        try {
            return await t(s);
        } finally{
            this._attaches.get(e) === n && !n.turnActive && this._releaseAttachComposerRefs(n);
        }
    }
    _adoptChild(e) {
        if (this._disposed || this._stoppingAll) return Promise.resolve();
        const t = this._adoptionTokens.get(e.sessionId);
        if (!t) return Promise.resolve();
        const i = (this._adoptionInFlight.get(e.sessionId) ?? Promise.resolve()).catch(()=>{}).then(()=>{
            const r = this._children.get(e.sessionId);
            if (r) return this._adoptChildUnlocked(r, t);
        });
        return this._adoptionInFlight.set(e.sessionId, i), i.finally(()=>{
            this._adoptionInFlight.get(e.sessionId) === i && this._adoptionInFlight.delete(e.sessionId);
        });
    }
    _isCurrentAdoption(e, t) {
        return !this._disposed && !this._stoppingAll && this._children.has(e.sessionId) && this._adoptionTokens.get(e.sessionId) === t;
    }
    async _adoptChildUnlocked(e, t) {
        if (this._isCurrentAdoption(e, t)) try {
            const n = await this._resolveAdoptionServices();
            if (!this._isCurrentAdoption(e, t)) return;
            if (n) {
                const i = this._children.get(e.sessionId);
                if (!i || !this._isCurrentAdoption(i, t) || !i.parentToolCallId?.trim()) return;
                if (!await this._linkTaskBubble(n, i)) {
                    await this._failClosedChildAdoption(i, t, "Parent Task bubble link unavailable");
                    return;
                }
                if (!this._isCurrentAdoption(i, t)) return;
                const r = await this._ensureChildComposer(n, i);
                if (!this._isCurrentAdoption(i, t)) {
                    await this._forgetChildLocalState(i.sessionId);
                    return;
                }
                const s = this._children.get(i.sessionId);
                if (!s) return;
                this._syncTrayRowForChild(s), this._ensureAttach(s, r);
            } else this._instantiationService ? await this._failClosedChildAdoption(e, t, "Composer adoption services unavailable") : this._ensureAttach(e, void 0);
        } catch (n) {
            this._logService.warn(`[AgentHostChildSessionMirror] failed to adopt child session ${e.sessionId}`, n), await this._failClosedChildAdoption(e, t, "Child adoption failed");
        }
    }
    async _failClosedChildAdoption(e, t, n) {
        if (!this._isCurrentAdoption(e, t)) return;
        this._adoptionTokens.delete(e.sessionId), this._logService.error(`[AgentHostChildSessionMirror] Cannot adopt child ${e.sessionId}: ${n}`);
        const i = ()=>!this._disposed && !this._stoppingAll && this._children.has(e.sessionId);
        !(i() ? await this._interruptSessionTree({
            sessionId: e.sessionId,
            reason: n
        }) : !0) && i() && this._logService.error(`[AgentHostChildSessionMirror] Failed to contain unlinked child ${e.sessionId}`);
        const s = e.parentToolCallId?.trim();
        this._adoptionServices && s && await this._stampParentTaskBubble(this._adoptionServices, {
            sessionId: e.sessionId,
            parentComposerId: e.parentSessionId,
            toolCallId: s,
            status: "error",
            error: `Subagent could not be linked to its parent Task: ${n}`
        }), await this._forgetChildLocalState(e.sessionId);
    }
    async _interruptSessionTree(e) {
        try {
            return dZi.fromBinary(await this._providerService.interruptTurn(new ytt({
                sessionId: e.sessionId,
                sessionTree: !0,
                reason: e.reason
            }).toBinary())).interrupted;
        } catch (t) {
            return this._logService.warn(`[AgentHostChildSessionMirror] Failed to interrupt unlinked session tree ${e.sessionId}`, t), !1;
        }
    }
    async _linkTaskBubble(e, t) {
        const n = t.parentToolCallId?.trim();
        return n ? e.subagentComposerService.linkParentToSubagentWhenReady({
            toolCallId: n,
            subagentComposerId: t.sessionId,
            parentComposerId: t.parentSessionId,
            timeoutMs: aTh
        }) : !1;
    }
    async _ensureChildComposer(e, t) {
        const n = await e.subagentComposerService.resolveTaskLaunchMetadata({
            toolCallId: t.parentToolCallId,
            parentComposerId: t.parentSessionId
        }), i = t.modelId?.trim() || n.modelId?.trim(), r = e.composerDataService.getHandleIfLoaded(t.sessionId) ?? await e.composerDataService.getComposerHandleById(t.sessionId);
        if (r) {
            if (this._ensureSubagentInfo(e, r, t, n.subagentTypeName), i) {
                const p = this._resolveChildModelConfig(e, r.data.modelConfig, i);
                nQv(r.data.modelConfig, p) || e.modelConfigService.setModelConfigForComposer?.(r, p);
            }
            return r;
        }
        const { createEmptyComposer: s } = await Promise.resolve().then(()=>(Wf(), d8i)), { SubagentType: o } = await Promise.resolve().then(()=>(Hu(), Njs)), a = e.composerDataService.getHandleIfLoaded(t.parentSessionId) ?? await e.composerDataService.getComposerHandleById(t.parentSessionId), c = a?.data.modelConfig ?? e.modelConfigService.getModelConfig("composer"), l = this._resolveChildModelConfig(e, c, i), u = s({
            ...l,
            maxMode: l.maxMode ?? !1
        }, t.sessionId, a?.data.unifiedMode ?? "agent");
        u.subagentInfo = {
            subagentType: o.TASK,
            parentComposerId: t.parentSessionId,
            conversationLengthAtSpawn: a?.data.fullConversationHeadersOnly?.length ?? 0,
            additionalData: {},
            toolCallId: t.parentToolCallId,
            toolCallIdHistory: t.parentToolCallId ? [
                t.parentToolCallId
            ] : [],
            rootParentConversationId: t.rootSessionId,
            ...n.subagentTypeName ? {
                subagentTypeName: n.subagentTypeName
            } : {}
        }, a?.data.workspaceIdentifier && (u.workspaceIdentifier = a.data.workspaceIdentifier), a?.data.gitWorktree && (u.gitWorktree = {
            ...a.data.gitWorktree
        }), u.name = e.subagentComposerService.resolveTaskDescriptionTitle({
            toolCallId: t.parentToolCallId,
            parentComposerId: t.parentSessionId
        });
        const h = await e.composerDataService.appendSubComposer(u);
        if (!h) throw new Error(`Failed to append child composer for ${t.sessionId}`);
        return typeof e.modelConfigService.setModelConfigForComposer == "function" && e.modelConfigService.setModelConfigForComposer(h, l), a && e.composerDataService.updateComposerDataSetStore(a, (p)=>{
            const g = a.data.subagentComposerIds ?? [];
            g.includes(t.sessionId) || p("subagentComposerIds", [
                ...g,
                t.sessionId
            ]);
        }), h;
    }
    _resolveChildModelConfig(e, t, n) {
        const i = t ?? e.modelConfigService.getModelConfig("composer"), r = {
            modelName: n ?? i.modelName,
            maxMode: i.maxMode === !0
        }, s = typeof e.modelConfigService.fixupModelConfigForCurrentFlag == "function" ? e.modelConfigService.fixupModelConfigForCurrentFlag(r) : void 0, o = s?.selectedModels?.length ? s.selectedModels : void 0, a = i.selectedModels, c = o && a && a.length === o.length && o.every((l, u)=>l.modelId === a[u].modelId) ? a : o;
        return {
            modelName: o?.[0]?.modelId ?? r.modelName,
            maxMode: r.maxMode === !0,
            ...c?.length ? {
                selectedModels: c.map((l)=>({
                        modelId: l.modelId,
                        parameters: (l.parameters ?? []).map((u)=>({
                                ...u
                            }))
                    }))
            } : {}
        };
    }
    _ensureSubagentInfo(e, t, n, i) {
        Promise.resolve().then(()=>(Hu(), Njs)).then(({ SubagentType: r })=>{
            e.composerDataService.updateComposerDataSetStore(t, (s)=>{
                const o = t.data.subagentInfo, a = [
                    ...o?.toolCallIdHistory ?? []
                ];
                a.length === 0 && o?.toolCallId && a.push(o.toolCallId), n.parentToolCallId && !a.includes(n.parentToolCallId) && a.push(n.parentToolCallId), s("subagentInfo", {
                    ...o ?? {},
                    subagentType: r.TASK,
                    parentComposerId: n.parentSessionId,
                    conversationLengthAtSpawn: o?.conversationLengthAtSpawn ?? 0,
                    additionalData: o?.additionalData ?? {},
                    toolCallId: n.parentToolCallId || o?.toolCallId,
                    toolCallIdHistory: a,
                    rootParentConversationId: n.rootSessionId,
                    ...i || o?.subagentTypeName ? {
                        subagentTypeName: i ?? o?.subagentTypeName
                    } : {}
                });
            });
        });
    }
    _syncTrayRowForChild(e) {
        if (!this._backgroundWorkService) return;
        if (!this._adoptionTokens.has(e.sessionId)) {
            this._backgroundWorkService.clearSubagentWork(e.sessionId);
            return;
        }
        const t = this._attaches.get(e.sessionId), n = this._attachTurnBracket.get(e.sessionId), i = t?.turnActive === !0 || t === void 0 && n?.turnActive === !0, r = t?.blockInteractionBeginUntilTurnStarted === !0 || t === void 0 && n?.blockInteractionBeginUntilTurnStarted === !0;
        if (i) {
            this._upsertTrayRow(e);
            return;
        }
        if (r) {
            this._backgroundWorkService.clearSubagentWork(e.sessionId);
            return;
        }
        if (e.status === V1e.RUNNING) {
            this._upsertTrayRow(e);
            return;
        }
        this._backgroundWorkService.clearSubagentWork(e.sessionId);
    }
    _beginChildAttachTurn(e, t) {
        const n = e.turnActive;
        e.turnActive = !0, e.blockInteractionBeginUntilTurnStarted = !1, !n && e.composerHandle && (e.turnStart = eTh(e.composerHandle.data.fullConversationHeadersOnly)), !n && t !== void 0 && (e.humanBubblePending = !1, e.echoedUserMessage = void 0), this._writeAttachTurnBracket(e);
        const i = this._children.get(e.sessionId);
        i && this._upsertTrayRow(i);
        const r = this._adoptionServices;
        if (!e.composerHandle || !r) return;
        let s = !1;
        r.composerDataService.updateComposerDataSetStore(e.composerHandle, (o)=>{
            o("status", "generating"), !n && t !== void 0 && (o("chatGenerationUUID", t || zn()), s = !0);
        }), s && this._disposeAttachAdapters(e);
    }
    _endChildAttachTurn(e, t) {
        e.turnActive = !1, e.blockInteractionBeginUntilTurnStarted = !0, e.humanBubblePending = !1, e.echoedUserMessage = void 0, e.turnStart = void 0, this._writeAttachTurnBracket(e);
        const n = this._children.get(e.sessionId);
        (t?.forceComposerSettle === !0 || !nTh(n?.status)) && t?.forceComposerSettle !== !0 && this._trySettleChildComposerStatusSync(e.sessionId, e.composerHandle), this._backgroundWorkService?.clearSubagentWork(e.sessionId), this._disposeAttachAdapters(e, "Child turn settled"), e.composerHandle = void 0;
    }
    _shouldSettleChildComposerStatusIfIdle(e) {
        if (this._disposed) return !1;
        const t = this._children.get(e);
        if (!t || nTh(t.status)) return !1;
        const n = this._attaches.get(e), i = this._attachTurnBracket.get(e);
        return !(!(n?.blockInteractionBeginUntilTurnStarted === !0 || n === void 0 && i?.blockInteractionBeginUntilTurnStarted === !0) || n?.turnActive === !0 || i?.turnActive === !0);
    }
    _trySettleChildComposerStatusSync(e, t) {
        const n = this._adoptionServices;
        if (!n) return;
        const i = t ?? n.composerDataService.getHandleIfLoaded(e);
        i && this._writeChildComposerSettledStatus(i, n);
    }
    async _resolveChildComposerHandleForSettle(e, t, n) {
        if (await this._resolveAdoptionServices(), !n?.allowWhenDisposed && this._disposed) return;
        const i = this._adoptionServices;
        if (!i) return;
        const r = t ?? i.composerDataService.getHandleIfLoaded(e);
        if (r) return r;
        const s = await i.composerDataService.getComposerHandleById(e);
        if (!(!n?.allowWhenDisposed && this._disposed)) return s ?? void 0;
    }
    _writeChildComposerSettledStatus(e, t) {
        t.composerDataService.updateComposerDataSetStore(e, (n)=>{
            n("status", "none"), n("generatingBubbleIds", []);
        });
    }
    async _forceSettleChildComposerStatusAsync(e, t) {
        const n = await this._resolveChildComposerHandleForSettle(e, t, {
            allowWhenDisposed: !0
        });
        if (!n) return;
        const i = this._adoptionServices;
        i && this._writeChildComposerSettledStatus(n, i);
    }
    async _settleChildComposerStatusIfIdle(e) {
        if (!this._shouldSettleChildComposerStatusIfIdle(e)) return;
        const t = await this._resolveChildComposerHandleForSettle(e);
        if (!this._shouldSettleChildComposerStatusIfIdle(e) || !t) return;
        const n = this._adoptionServices;
        n && this._writeChildComposerSettledStatus(t, n);
    }
    _upsertTrayRow(e) {
        if (!this._backgroundWorkService) return;
        const t = this._backgroundWorkService.backgroundWorkItems.value.find((i)=>i.kind === "subagent" && (i.id === e.sessionId || i.subagentComposerId === e.sessionId))?.startTimeMs, n = this._adoptionServices?.composerDataService.getHandleIfLoaded(e.sessionId)?.data.name?.trim() || "Background subagent";
        this._backgroundWorkService.upsertSubagentWork({
            id: e.sessionId,
            kind: "subagent",
            composerId: e.parentSessionId,
            subagentComposerId: e.sessionId,
            title: n,
            startTimeMs: t ?? Date.now()
        });
    }
    _ensureAttach(e, t) {
        if (this._ensureInteractionMirror(e.sessionId), this._attaches.has(e.sessionId) || this._disposed || this._stoppingAll) {
            const l = this._attaches.get(e.sessionId);
            l?.turnActive && t && !l.composerHandle && (l.composerHandle = t);
            return;
        }
        const n = new Eo, i = this._attachResumeCursor.get(e.sessionId) ?? 0n, r = this._attachTurnBracket.get(e.sessionId), s = r?.turnActive ?? !1, o = {
            sessionId: e.sessionId,
            cancellation: n,
            cancelSubscription: void 0,
            adapter: void 0,
            actionManager: void 0,
            composerHandle: s ? t : void 0,
            lastAppliedEventId: i,
            hydrateQueue: Promise.resolve(),
            turnActive: s,
            blockInteractionBeginUntilTurnStarted: r?.blockInteractionBeginUntilTurnStarted ?? !1,
            humanBubblePending: r?.echoedUserMessage !== void 0,
            echoedUserMessage: r?.echoedUserMessage,
            turnStart: r?.turnStart
        };
        this._attaches.set(e.sessionId, o), this._attachRestartTimers.deleteAndDispose(e.sessionId), o.turnActive && this._resolveAdoptionServices().then(()=>{
            this._attaches.get(e.sessionId) !== o || !o.turnActive || this._beginChildAttachTurn(o);
        });
        const a = new ktt({
            sessionId: e.sessionId,
            lastEventId: i
        }).toBinary(), c = this._providerService.attachSession(a)[Symbol.asyncIterator]();
        o.cancelSubscription = n.token.onCancellationRequested(()=>{
            c.return?.();
        }), (async ()=>{
            let l = !1;
            try {
                for(; !n.token.isCancellationRequested && !this._disposed;){
                    const u = await c.next();
                    if (u.done) {
                        l = !n.token.isCancellationRequested && !this._disposed;
                        break;
                    }
                    if (this._disposed || n.token.isCancellationRequested) break;
                    const h = oLe.fromBinary(u.value), p = this._attaches.get(e.sessionId);
                    if (!p || p.cancellation !== n) break;
                    this._attachRestartAttempts.delete(e.sessionId);
                    try {
                        await this._handleAttachEvent(p, h), p.lastAppliedEventId = h.eventId, this._attachResumeCursor.set(e.sessionId, h.eventId), this._releaseHydrationWaiters(e.sessionId, h.eventId), p.turnActive || this._releaseAttachComposerRefs(p);
                    } catch (g) {
                        this._logService.warn(`[AgentHostChildSessionMirror] attach event handling failed for ${e.sessionId}`, g), l = !0;
                        break;
                    }
                }
            } catch (u) {
                !n.token.isCancellationRequested && !this._disposed && (this._logService.warn(`[AgentHostChildSessionMirror] attachSession failed for ${e.sessionId}`, u), l = !0);
            } finally{
                o.cancelSubscription?.dispose(), o.cancelSubscription = void 0, await c.return?.(), this._disposeAttachAdapters(o), n.dispose(), o.turnActive && !l && (await this._resolveAdoptionServices(), this._endChildAttachTurn(o)), this._attaches.get(e.sessionId)?.cancellation === o.cancellation && (this._attaches.delete(e.sessionId), l && this._children.has(e.sessionId) && !this._disposed && this._scheduleAttachRestart(e.sessionId));
            }
        })();
    }
    _scheduleAttachRestart(e) {
        if (this._disposed || this._attaches.has(e) || !this._children.has(e) || this._attachRestartTimers.has(e)) return;
        const t = (this._attachRestartAttempts.get(e) ?? 0) + 1;
        if (this._attachRestartAttempts.set(e, t), t > 5) return this._logService.warn(`[AgentHostChildSessionMirror] giving up attachSession restart for ${e} after 5 attempts`), this._attachRestartAttempts.delete(e), this._onAttachRestartExhausted(e);
        const n = Math.min(250 * 2 ** (t - 1), 4e3);
        this._attachRestartTimers.set(e, Cl(()=>{
            if (this._attachRestartTimers.deleteAndDispose(e), this._disposed || this._attaches.has(e) || !this._children.has(e)) return;
            const i = this._children.get(e);
            i && this._restartAttach(i);
        }, n));
    }
    async _onAttachRestartExhausted(e) {
        if (this._disposed) return;
        await this._resolveAdoptionServices();
        const t = this._attaches.get(e);
        if (t) {
            this._endChildAttachTurn(t), await this._forceSettleChildComposerStatusAsync(e);
            return;
        }
        this._attachTurnBracket.set(e, {
            turnActive: !1,
            blockInteractionBeginUntilTurnStarted: !0
        }), await this._forceSettleChildComposerStatusAsync(e), this._backgroundWorkService?.clearSubagentWork(e);
    }
    async _restartAttach(e) {
        if (this._disposed || this._attaches.has(e.sessionId) || !this._children.has(e.sessionId)) return;
        const t = await this._resolveAdoptionServices(), n = this._attachTurnBracket.get(e.sessionId)?.turnActive === !0, i = t && n ? t.composerDataService.getHandleIfLoaded(e.sessionId) ?? await t.composerDataService.getComposerHandleById(e.sessionId) : void 0;
        this._ensureAttach(e, i);
    }
    _clearAttachRestart(e) {
        this._attachRestartTimers.deleteAndDispose(e), this._attachRestartAttempts.delete(e);
    }
    async _handleAttachEvent(e, t) {
        switch(t.event.case){
            case "conversationState":
                {
                    const n = t.event.value;
                    await this._enqueueHydrate(e, async ()=>{
                        if (e.turnActive && e.adapter !== void 0) {
                            if (e.humanBubblePending && !await this._applyConversationState(e, n, !0, !0) && e.humanBubblePending) try {
                                await this._projectEchoedHumanBubble(e);
                            } catch (r) {
                                this._logService.warn(`[AgentHostChildSessionMirror] failed to project echoed human bubble for ${e.sessionId}`, r);
                            }
                            await this._storeConversationState(e, n);
                            return;
                        }
                        await this._applyConversationState(e, n);
                    });
                    break;
                }
            case "interactionUpdate":
                {
                    const n = t.event.value;
                    if (await this._enqueueHydrate(e, async ()=>{
                        await this._applyInteractionUpdate(e, n);
                    }), !e.turnActive && !e.blockInteractionBeginUntilTurnStarted) await this._resolveAdoptionServices(), this._beginChildAttachTurn(e);
                    else if (e.turnActive) {
                        const i = this._children.get(e.sessionId);
                        i && this._upsertTrayRow(i);
                    }
                    break;
                }
            case "turnInteractionsSuperseded":
                {
                    const n = t.event.value.continuation;
                    switch(n.case){
                        case "replayActionFromState":
                        case "resumeFromCheckpoint":
                            await this._enqueueHydrate(e, async ()=>{
                                try {
                                    await this._applyConversationState(e, n.value);
                                } finally{
                                    await this._clearGeneratingBubbleIds(e);
                                }
                            });
                            break;
                        case void 0:
                            break;
                        default:
                            {
                                const i = n;
                            }
                    }
                    break;
                }
            case "turnStarted":
                {
                    await this._resolveAdoptionServices(), await this._resolveAttachComposerHandle(e), this._beginChildAttachTurn(e, t.event.value.turnId);
                    break;
                }
            case "turnSettled":
                {
                    await this._resolveAdoptionServices(), e.humanBubblePending && await this._enqueueHydrate(e, async ()=>{
                        await this._projectEchoedHumanBubble(e);
                    }), this._endChildAttachTurn(e), this._stampParentTaskBubbleFromSettledTurn(e.sessionId, t.event.value);
                    break;
                }
            case "turnAwaitingInput":
                {
                    await this._resolveAdoptionServices(), await this._resolveAttachComposerHandle(e), this._beginChildAttachTurn(e, t.event.value.turnId), this._interactionMirrors.get(e.sessionId)?.mirror.observeSessionEvent(t);
                    break;
                }
            case "interactionResolved":
                this._interactionMirrors.get(e.sessionId)?.mirror.observeSessionEvent(t);
                break;
            case "subagentStarted":
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
    async _stampParentTaskBubbleFromSettledTurn(e, t) {
        const n = this._adoptionServices, i = this._children.get(e), r = i?.parentToolCallId?.trim();
        if (!n || !i || !r) return;
        const s = t.outcome === ZX.COMPLETED ? "success" : t.outcome === ZX.INTERRUPTED ? "aborted" : t.outcome === ZX.FAILED ? "error" : void 0;
        s !== void 0 && await this._stampParentTaskBubble(n, {
            sessionId: e,
            parentComposerId: i.parentSessionId,
            toolCallId: r,
            status: s,
            error: t.detail
        });
    }
    async _stampParentTaskBubble(e, t) {
        const n = {
            parentComposerId: t.parentComposerId,
            toolCallId: t.toolCallId,
            status: t.status,
            error: t.error
        };
        if (!e.subagentComposerService.markParentTaskBubbleCompleted(n)) try {
            if (!await e.composerDataService.getComposerHandleById(t.parentComposerId)) return;
            e.subagentComposerService.markParentTaskBubbleCompleted(n) || this._logService.warn(`[AgentHostChildSessionMirror] parent Task bubble not found while stamping ${t.status} for ${t.sessionId}`);
        } catch (i) {
            this._logService.warn(`[AgentHostChildSessionMirror] failed to stamp parent Task bubble for ${t.sessionId}`, i);
        }
    }
    _enqueueHydrate(e, t) {
        const n = e.hydrateQueue.then(t);
        return e.hydrateQueue = n.catch((i)=>{
            this._logService.warn(`[AgentHostChildSessionMirror] child transcript update failed for ${e.sessionId}`, i);
        }), n;
    }
    async _clearGeneratingBubbleIds(e) {
        const t = await this._resolveAttachComposerHandle(e), n = await this._resolveAdoptionServices();
        !t || !n || n.composerDataService.updateComposerDataSetStore(t, (i)=>i("generatingBubbleIds", []));
    }
    _writeAttachTurnBracket(e) {
        this._attachTurnBracket.set(e.sessionId, {
            turnActive: e.turnActive,
            blockInteractionBeginUntilTurnStarted: e.blockInteractionBeginUntilTurnStarted,
            echoedUserMessage: e.echoedUserMessage,
            turnStart: e.turnStart
        });
    }
    _noteUserMessageEcho(e, t) {
        const n = t.messageId.trim();
        n.length > 0 && e.composerHandle?.data.conversationMap[n] !== void 0 || (e.humanBubblePending = !0, e.echoedUserMessage = t, this._writeAttachTurnBracket(e));
    }
    async _storeConversationState(e, t) {
        const n = await this._resolveAttachComposerHandle(e), i = await this._resolveAdoptionServices();
        if (!n || !i) return;
        const r = iTh(t.mode, n.data.unifiedMode);
        i.composerDataService.updateComposerDataSetStore(n, (s)=>{
            s("conversationState", t), r !== void 0 && s("unifiedMode", r);
        }, {
            reason: "host_hydrate",
            hostOwned: "unknown"
        });
    }
    async _applyConversationState(e, t, n = !0, i = !1) {
        const r = await this._resolveAttachComposerHandle(e), s = await this._resolveAdoptionServices();
        if (!r || !s || !this._instantiationService) return !1;
        const { ComposerBlobStore: o } = await Promise.resolve().then(()=>(BU(), HMn)), { populateConversationFromState: a } = await Promise.resolve().then(()=>(nG(), A2n)), c = new o(s.storageService, r.composerId), l = await a({
            instantiationService: this._instantiationService,
            selectedContextService: s.selectedContextService,
            structuredLogService: s.structuredLogService,
            conversationState: t,
            existingConversationMap: n ? r.data.conversationMap : {},
            existingConversationHeaders: n ? r.data.fullConversationHeadersOnly : [],
            blobStore: {
                getBlob: async (v, b)=>{
                    const y = await c.getBlob(v, b);
                    if (!y) throw new Error(`Missing blob while hydrating child session ${e.sessionId}`);
                    return y;
                }
            },
            shouldSetServerBubbleId: !0
        }, qh()), u = iTh(t.mode, r.data.unifiedMode), h = {
            conversationMap: r.data.conversationMap,
            conversationHeaders: r.data.fullConversationHeadersOnly
        }, p = {
            conversationMap: l.conversationMap,
            conversationHeaders: l.conversationHeaders
        }, g = i ? rTh(h, p, HQi(h.conversationHeaders, e.turnStart)) : void 0;
        return (!i || tQv(e, g) || eQv(e, h)) && (e.humanBubblePending = !1, e.echoedUserMessage = void 0, this._writeAttachTurnBracket(e)), s.composerDataService.updateComposerDataSetStore(r, (v)=>{
            v("conversationState", t), i ? g !== void 0 && (v("conversationMap", g.conversationMap), v("fullConversationHeadersOnly", g.conversationHeaders)) : (v("conversationMap", l.conversationMap), v("fullConversationHeadersOnly", l.conversationHeaders), v("todos", l.todos)), u !== void 0 && v("unifiedMode", u);
        }, {
            reason: "host_hydrate",
            hostOwned: "unknown"
        }), !0;
    }
    async _projectEchoedHumanBubble(e) {
        const t = e.echoedUserMessage, n = await this._resolveAttachComposerHandle(e), i = await this._resolveAdoptionServices();
        if (t === void 0 || !n || !i) return;
        const [{ ComposerBlobStore: r }, { createComposerMessageHeaderData: s }, { buildEagerHumanMessageBubble: o, projectSubscriptionEventNotification: a }] = await Promise.all([
            Promise.resolve().then(()=>(BU(), HMn)),
            Promise.resolve().then(()=>(Wf(), d8i)),
            Promise.resolve().then(()=>(nG(), A2n))
        ]), c = t.messageId.trim(), l = new r(i.storageService, n.composerId), u = await o({
            context: qh(),
            userMessage: t,
            userServerBubbleId: c,
            shouldSetServerBubbleId: c.length > 0,
            bubbleIdOverride: c.length > 0 ? c : void 0,
            createdAt: new Date().toISOString(),
            eventNotification: a(void 0, t),
            blobStore: {
                getBlob: async (h, p)=>{
                    const g = await l.getBlob(h, p);
                    if (!g) throw new Error(`Missing blob while projecting child human bubble for ${e.sessionId}`);
                    return g;
                }
            },
            structuredLogService: i.structuredLogService,
            selectedContextService: i.selectedContextService
        });
        e.humanBubblePending = !1, e.echoedUserMessage = void 0, this._writeAttachTurnBracket(e), i.composerDataService.updateComposerDataSetStore(n, (h)=>{
            const p = n.data.fullConversationHeadersOnly, g = rTh({
                conversationMap: n.data.conversationMap,
                conversationHeaders: p
            }, {
                conversationMap: {
                    [u.bubbleId]: u
                },
                conversationHeaders: [
                    s(u)
                ]
            }, HQi(p, e.turnStart) ?? p.length);
            g !== void 0 && (h("conversationMap", g.conversationMap), h("fullConversationHeadersOnly", g.conversationHeaders));
        });
    }
    async _applyInteractionUpdate(e, t) {
        if (!await this._resolveAttachComposerHandle(e) || (t.message.case === "userMessageAppended" && t.message.value.userMessage !== void 0 && this._noteUserMessageEcho(e, t.message.value.userMessage), !this._instantiationService)) return;
        await (await this._ensureAttachAdapter(e)).sendUpdate(qh(), t);
    }
    async _ensureAttachAdapter(e) {
        const t = await this._resolveAttachComposerHandle(e);
        if (!t || !this._instantiationService) throw new Error(`No child composer adapter for session ${e.sessionId}`);
        if (!e.adapter) {
            const { AgentResponseAdapter: n } = await Promise.resolve().then(()=>(Cjt(), aTo));
            e.actionManager = new skt, e.adapter = new n(this._instantiationService, t, e.actionManager, t.data.chatGenerationUUID);
        }
        return e.adapter;
    }
    _stopAttach(e) {
        this._clearAttachRestart(e);
        const t = this._attaches.get(e);
        t && (this._attaches.delete(e), t.cancelSubscription?.dispose(), t.cancellation.cancel(), t.cancellation.dispose(), this._disposeAttachAdapters(t, "Child attach stopped"));
    }
    _releaseAttachComposerRefs(e) {
        this._disposeAttachAdapters(e), e.composerHandle = void 0;
    }
    async _resolveAttachComposerHandle(e) {
        if (e.composerHandle) return e.composerHandle;
        const t = await this._resolveAdoptionServices();
        if (!t) return;
        const n = t.composerDataService.getHandleIfLoaded(e.sessionId) ?? await t.composerDataService.getComposerHandleById(e.sessionId);
        if (!(!n || this._attaches.get(e.sessionId) !== e)) return e.composerHandle = n, n;
    }
    _disposeAttachAdapters(e, t) {
        try {
            t !== void 0 && e.actionManager?.abort(t), Pk(e.adapter, e.actionManager);
        } catch (n) {
            this._logService.warn(`[AgentHostChildSessionMirror] failed to dispose child attach adapters for ${e.sessionId}`, n);
        }
        e.adapter = void 0, e.actionManager = void 0;
    }
    waitForStopAllForTest() {
        return this._stopAllInFlight ?? Promise.resolve();
    }
    hasDiscoveryWatchForTest() {
        return this._discoveryWatch !== void 0;
    }
    suppressDiscoveryForTest() {
        this._discoveryDesired = !1, this._stopDiscoveryWatch();
    }
    hasAttachForTest(e) {
        return this._attaches.has(e);
    }
    getAttachRestartAttemptsForTest(e) {
        return this._attachRestartAttempts.get(e) ?? 0;
    }
    getAttachResumeCursorForTest(e) {
        return this._attachResumeCursor.get(e);
    }
    isHumanBubblePendingForTest(e) {
        return this._attaches.get(e)?.humanBubblePending === !0;
    }
    isAttachTurnActiveForTest(e) {
        return this._attachTurnBracket.get(e)?.turnActive === !0 || this._attaches.get(e)?.turnActive === !0;
    }
    scheduleAttachRestartForTest(e, t = 0) {
        return this._attachRestartAttempts.set(e, t), this._scheduleAttachRestart(e);
    }
    isAttachTurnSettledForTest(e) {
        return this._attachTurnBracket.get(e)?.blockInteractionBeginUntilTurnStarted === !0 || this._attaches.get(e)?.blockInteractionBeginUntilTurnStarted === !0;
    }
    upsertChildForTest(e) {
        this._children.set(e.sessionId, e);
    }
    setAttachTurnBracketForTest(e, t) {
        this._attachTurnBracket.set(e, t);
    }
    setAttachAdapterForTest(e, t, n) {
        const i = this._attaches.get(e);
        return i ? (i.adapter = t, i.actionManager = n, !0) : !1;
    }
};

}
