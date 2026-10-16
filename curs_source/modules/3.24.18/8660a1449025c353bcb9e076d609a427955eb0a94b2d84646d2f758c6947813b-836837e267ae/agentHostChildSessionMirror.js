import { Nil, kog } from "./Aeg.js";
import { Ec, Nt, Qe, Vn, Wd, da, m1 } from "./Iwo.js";
import { pc } from "./LYd.js";
import { Red } from "./SZu.js";
import { Chg, Ehg, Ihg, Jbk, ccl, eyk, nyk, p_g, tyk, vos, xhg } from "./Ycg.js";
import { fos, gos } from "./agentHostInteractionMirror.js";
import { Thg } from "./agentHostTurnStart.js";
import { wAn } from "./agentResponseAdapter.js";
import { JPe, K4e, KCe, Oze, Sle, VCe, fEi, hG, jrs } from "./agent_host_pb.js";
import { ju } from "./agent_pb.js";
import { df, qn } from "./async.js";
import { rp } from "./bcIdFromAuthority.js";
import { El, yo } from "./cancellation.js";
import { sd } from "./chat_pb.js";
import { Hx } from "./cloudAgentRepositoryService.js";
import { zW } from "./composerBlobStore.js";
import { uv } from "./composerData.js";
import { Pl } from "./composerDataServiceTypes.js";
import { HPe } from "./composerModeUtils.js";
import { WB } from "./composerUtilsServiceTypes.js";
import { cGt } from "./controlled_3.ts";
import { T1 } from "./errors.ts";
import { GKm } from "./gYa.js";
import { FO } from "./index_10.ts";
import { hX } from "./index_12.ts";
import { Ng } from "./index_3.ts";
import { Dqr, HSi, Xp } from "./ipa.js";
import { Fp, zp } from "./lifecycle_2.js";
import { Uh, ip } from "./metricsService.js";
import { of } from "./modelConfigServiceTypes.js";
import { rG } from "./populateConversationFromState.js";
import { cle } from "./selectedContext.js";
import { Q0 } from "./sentry.js";
import { Zi } from "./storage_2.js";
import { Cm } from "./structuredLog.js";
import { Y4e } from "./subagentComposerServiceInterface.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { Ai, Xo } from "./uuid_2.js";
import { Aki, Zzr, _0i } from "./yBp.js";
import { Old, v6o } from "./ze.js";
var Gll, Phg, Mhg, Dhg, qll, Nhg, Lhg;
export { Dhg, Gll, Lhg, Mhg, Nhg, Phg, qll };
var __wakaru_iyk_initialized = false;
export function iyk() {
if (__wakaru_iyk_initialized) return;
__wakaru_iyk_initialized = true;
"use strict";
E(), qn(), yo(), rp(), Qe(), Xo(), Q0(), __(), ip(), Ng(), hX(), FO(), hG(), ju(), sd(), HPe(), zp(), fos(), Thg(), Gll = [
    0,
    250
], Phg = 5e3, Mhg = 1e4, Dhg = 5, qll = 100, Nhg = "cursor.agent_host.child_mirror.watch_deleted", Lhg = class {
    constructor(t, e, n, i, r, s){
        this._providerService = t, this._logService = e, this._instantiationService = n, this._backgroundWorkService = i, this._discoveryRestartDelayMs = s, this._children = new Map, this._attaches = new Map, this._interactionMirrors = new Map, this._adoptionInFlight = new Map, this._adoptionTokens = new Map, this._attachRestartAttempts = new Map, this._attachRestartTimers = new da, this._attachResumeCursor = new Map, this._attachTurnBracket = new Map, this._store = new Nt, this._discoveryRestart = this._store.add(new Vn), this._discoveryRestartAttempts = 0, this._disposed = !1, this._discoveryDesired = !1, this._catalogSessionIds = new Set, this._snapshotReceived = !1, this._snapshotDeferred = new df, this._adoptionListeners = new Set, this._hydrationWaiters = new Map, this._watchDeletedBurstFlush = this._store.add(new Vn), this._watchDeletedBurstReporter = nyk, this._stoppingAll = !1, this._adoptionServices = r, this._store.add(this._providerService.onDidChangeRegistration?.(()=>{
            this._lastRegistrationChangeAtMs = Date.now(), this._onSessionLivenessLost();
        }) ?? {
            dispose: ()=>{}
        });
    }
    registerAdoptionListener(t) {
        this._adoptionListeners.add(t);
        for (const e of [
            ...this._children.keys()
        ])try {
            t.onChildAdopted(e);
        } catch (n) {
            this._logService.warn(`[AgentHostChildSessionMirror] child adoption listener failed for ${e}`, n);
        }
        return {
            dispose: ()=>this._adoptionListeners.delete(t)
        };
    }
    waitForChildHydration(t, e) {
        if (!(this._disposed || !this._children.has(t)) && !((this._attachResumeCursor.get(t) ?? 0n) >= e)) return new Promise((n)=>{
            const i = this._hydrationWaiters.get(t) ?? [];
            i.push({
                eventId: e,
                resolve: n
            }), this._hydrationWaiters.set(t, i);
        });
    }
    _releaseHydrationWaiters(t, e) {
        const n = this._hydrationWaiters.get(t);
        if (!n?.length) return;
        const i = e === void 0 ? n : n.filter((s)=>s.eventId <= e);
        if (i.length === 0) return;
        const r = e === void 0 ? [] : n.filter((s)=>s.eventId > e);
        r.length === 0 ? this._hydrationWaiters.delete(t) : this._hydrationWaiters.set(t, r);
        for (const s of i)s.resolve();
    }
    getChildSessions() {
        return [
            ...this._children.values()
        ];
    }
    getChildSession(t) {
        return this._children.get(t);
    }
    ensureDiscovery() {
        this._disposed || (this._discoveryDesired = !0, this._ensureDiscoveryWatch());
    }
    async waitForSnapshot(t) {
        if (this.ensureDiscovery(), this._snapshotReceived) return this._catalogSessionIds;
        if (t?.aborted || this._disposed) throw new T1("Cancelled while waiting for agent host session catalog.");
        return t === void 0 ? (await this._snapshotDeferred.p, this._catalogSessionIds) : (await new Promise((e, n)=>{
            const i = ()=>n(new T1("Cancelled while waiting for agent host session catalog."));
            t.addEventListener("abort", i, {
                once: !0
            }), this._snapshotDeferred.p.then(e, n).finally(()=>{
                t.removeEventListener("abort", i);
            });
        }), this._catalogSessionIds);
    }
    onSubagentStarted(t) {
        if (this._disposed) return;
        if (pc(t.childSessionId)) {
            this._adoptCloudChild(t);
            return;
        }
        this.ensureDiscovery();
        const e = {
            sessionId: t.childSessionId,
            parentSessionId: t.parentSessionId,
            parentToolCallId: t.parentToolCallId,
            rootSessionId: t.rootSessionId,
            status: this._children.get(t.childSessionId)?.status ?? VCe.RUNNING,
            lastEventId: 0n
        };
        this._upsertChild(e), this._adoptChild(this._children.get(e.sessionId) ?? e);
    }
    async _adoptCloudChild(t) {
        try {
            const e = await this._resolveAdoptionServices();
            if (this._disposed) return;
            if (e?.cloudAgentRepositoryService === void 0) {
                this._logService.error(`[AgentHostChildSessionMirror] Cannot adopt cloud child ${t.childSessionId}: adoption services unavailable`);
                return;
            }
            e.subagentComposerService.linkParentToSubagent(t.parentToolCallId, t.childSessionId, t.parentSessionId);
            const n = await this._ensureCloudChildLoadable(e.cloudAgentRepositoryService, t.childSessionId);
            if (this._disposed) return;
            if (!n) {
                this._logService.warn(`[AgentHostChildSessionMirror] Cannot arm cloud child ${t.childSessionId}: repository row unavailable after retries`);
                return;
            }
            e.cloudAgentRepositoryService.noteCloudSubagentRunDispatched(t.childSessionId);
        } catch (e) {
            this._logService.error(`[AgentHostChildSessionMirror] Failed to adopt cloud child ${t.childSessionId}`, e);
        }
    }
    async _ensureCloudChildLoadable(t, e) {
        for(let n = 0; n <= Gll.length; n += 1){
            if (this._disposed || (await t.ensureLoadableCloudSubagent(e), this._disposed)) return !1;
            if (t.getAgentHeader(e) !== void 0) return !0;
            const i = Gll[n];
            i !== void 0 && await Wd(i);
        }
        return !1;
    }
    forgetSession(t) {
        return this._forgetSessionAsync(t);
    }
    async _forgetSessionAsync(t) {
        const e = [
            ...this._children.values()
        ].filter((n)=>n.sessionId === t || n.parentSessionId === t || n.rootSessionId === t).map((n)=>n.sessionId);
        for (const n of e)await this._removeChildAsync(n);
    }
    stopAll() {
        if (this._stopAllInFlight) return this._stopAllInFlight;
        const t = this._stopAllAsync();
        return this._stopAllInFlight = t.finally(()=>{
            this._stopAllInFlight === t && (this._stopAllInFlight = void 0);
        }), this._stopAllInFlight;
    }
    async _stopAllAsync() {
        this._stoppingAll = !0, this._adoptionTokens.clear();
        try {
            const t = new Set([
                ...this._children.keys(),
                ...this._attaches.keys()
            ]);
            for (const e of t)await this._forgetChildLocalState(e);
            await Promise.allSettled([
                ...this._adoptionInFlight.values()
            ]);
            for (const e of [
                ...this._attaches.keys()
            ])this._stopAttach(e);
            for (const e of [
                ...this._attachRestartTimers.keys(),
                ...this._attachRestartAttempts.keys()
            ])this._clearAttachRestart(e);
            for (const e of [
                ...this._hydrationWaiters.keys()
            ])this._releaseHydrationWaiters(e, void 0);
            this._children.clear(), this._attaches.clear(), this._adoptionInFlight.clear(), this._adoptionTokens.clear(), this._attachResumeCursor.clear(), this._attachTurnBracket.clear(), this._stopDiscoveryWatch(), this._resetSnapshotWaiter(), this._discoveryDesired && !this._disposed && this._ensureDiscoveryWatch();
        } finally{
            this._stoppingAll = !1;
        }
    }
    _onSessionLivenessLost() {
        const t = this._disposed || this._isWorkbenchShuttingDown() ? [] : this._collectLiveChildren();
        (async ()=>(await this.stopAll(), t.length > 0 && this._interruptUnrevivableChildren(t)))();
    }
    _isWorkbenchShuttingDown() {
        if (!this._instantiationService) return !1;
        try {
            return this._instantiationService.invokeFunction((t)=>t.get(Fp)).willShutdown;
        } catch  {
            return !0;
        }
    }
    _collectLiveChildren() {
        const t = [];
        for (const e of this._children.values()){
            if (!e.parentToolCallId?.trim() || pc(e.sessionId)) continue;
            const n = this._attaches.get(e.sessionId), i = this._attachTurnBracket.get(e.sessionId), r = n?.turnActive === !0 || n === void 0 && i?.turnActive === !0, s = n?.blockInteractionBeginUntilTurnStarted === !0 || n === void 0 && i?.blockInteractionBeginUntilTurnStarted === !0;
            (r || !s && e.status === VCe.RUNNING) && t.push(e);
        }
        return t;
    }
    _interruptUnrevivableChildren(t) {
        (async ()=>{
            const e = await this._resolveAdoptionServices();
            if (!(!e || this._disposed)) for (const n of t)try {
                if (await e.subagentComposerService.findSubagentForToolCall(n.parentToolCallId, n.parentSessionId) !== void 0) continue;
                await e.subagentComposerService.markSubagentInterrupted({
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
        this._catalogSessionIds.clear(), this._snapshotReceived = !1, this._snapshotDeferred.isSettled || (this._snapshotDeferred.p.catch(()=>{}), this._snapshotDeferred.error(new T1("Agent host session catalog watch stopped."))), this._snapshotDeferred = new df;
    }
    _releaseSnapshotWaiterIfNoSnapshot() {
        this._snapshotReceived || this._disposed || (this._snapshotDeferred.isSettled || this._snapshotDeferred.complete(), this._snapshotDeferred = new df);
    }
    dispose() {
        this._disposed = !0, this._discoveryDesired = !1, this.stopAll(), this._store.dispose(), this._attachRestartTimers.dispose();
    }
    handleWatchEventForTest(t) {
        this._handleWatchEvent(t);
    }
    setWatchDeletedBurstReporterForTest(t) {
        this._watchDeletedBurstReporter = t;
    }
    flushWatchDeletedBurstForTest() {
        return this._flushWatchDeletedBurst();
    }
    async _resolveAdoptionServices() {
        if (this._adoptionServices) return this._adoptionServices;
        if (this._instantiationService) return this._adoptionServicesPromise || (this._adoptionServicesPromise = (async ()=>{
            const [{ ICloudAgentRepositoryService: t }, { IComposerDataService: e }, { ISubagentComposerService: n }, { IModelConfigService: i }, { IStorageService: r }, { ISelectedContextService: s }, { IStructuredLogService: o }, { IComposerUtilsService: a }] = await Promise.all([
                Promise.resolve().then(()=>(Hx(), p_g)),
                Promise.resolve().then(()=>(Pl(), Aki)),
                Promise.resolve().then(()=>(Y4e(), kog)),
                Promise.resolve().then(()=>(of(), Zzr)),
                Promise.resolve().then(()=>(Zi(), Red)),
                Promise.resolve().then(()=>(cle(), GKm)),
                Promise.resolve().then(()=>(Cm(), Old)),
                Promise.resolve().then(()=>(WB(), Nil))
            ]);
            return this._instantiationService.invokeFunction((l)=>({
                    cloudAgentRepositoryService: l.get(t),
                    composerDataService: l.get(e),
                    subagentComposerService: l.get(n),
                    modelConfigService: l.get(i),
                    storageService: l.get(r),
                    selectedContextService: l.get(s),
                    structuredLogService: l.get(o),
                    composerUtilsService: l.get(a)
                }));
        })().catch((t)=>{
            this._logService.warn("[AgentHostChildSessionMirror] failed to resolve composer adoption services", t);
        })), this._adoptionServices = await this._adoptionServicesPromise, this._adoptionServices;
    }
    _ensureDiscoveryWatch() {
        if (this._disposed || this._discoveryWatch) return;
        const t = new El, e = new jrs().toBinary();
        let n;
        try {
            n = this._providerService.watchSessions(e)[Symbol.asyncIterator]();
        } catch (r) {
            t.dispose(), this._logService.warn("[AgentHostChildSessionMirror] watchSessions failed", r), this._discoveryDesired && !this._disposed ? this._scheduleDiscoveryRestart() : this._releaseSnapshotWaiterIfNoSnapshot();
            return;
        }
        const i = t.token.onCancellationRequested(()=>{
            n.return?.();
        });
        this._discoveryWatch = {
            cancellation: t,
            cancelSubscription: i
        }, this._discoveryWatchStartedAtMs = Date.now(), (async ()=>{
            let r = !1;
            try {
                for(; !t.token.isCancellationRequested && !this._disposed;){
                    const s = await n.next();
                    if (s.done || this._disposed || t.token.isCancellationRequested) break;
                    this._discoveryRestartAttempts = 0;
                    const o = KCe.fromBinary(s.value);
                    this._handleWatchEvent(o);
                }
            } catch (s) {
                !t.token.isCancellationRequested && !this._disposed && (this._logService.warn("[AgentHostChildSessionMirror] watchSessions failed", s), r = !0);
            } finally{
                i.dispose(), await n.return?.(), t.dispose(), this._discoveryWatch?.cancellation === t && (this._discoveryWatch = void 0, r && this._discoveryDesired && !this._disposed ? this._scheduleDiscoveryRestart() : !this._snapshotReceived && !this._disposed && !t.token.isCancellationRequested && this._releaseSnapshotWaiterIfNoSnapshot());
            }
        })();
    }
    _scheduleDiscoveryRestart() {
        if (this._discoveryRestart.value || this._discoveryWatch || this._disposed) return;
        if (this._discoveryRestartAttempts += 1, this._discoveryRestartAttempts > 5) {
            this._logService.warn("[AgentHostChildSessionMirror] giving up watchSessions restart after 5 attempts"), this._releaseSnapshotWaiterIfNoSnapshot();
            return;
        }
        const t = this._discoveryRestartDelayMs ?? Math.min(250 * 2 ** (this._discoveryRestartAttempts - 1), 4e3);
        this._discoveryRestart.value = Ec(()=>{
            this._discoveryRestart.clear(), this._discoveryDesired && !this._disposed && this._ensureDiscoveryWatch();
        }, t);
    }
    _stopDiscoveryWatch() {
        this._discoveryRestart.clear();
        const t = this._discoveryWatch;
        t && (this._discoveryWatch = void 0, t.cancelSubscription?.dispose(), t.cancellation.cancel(), t.cancellation.dispose());
    }
    _handleWatchEvent(t) {
        switch(t.event.case){
            case "snapshot":
                {
                    this._catalogSessionIds.clear();
                    for (const e of t.event.value.sessions)e.sessionId && this._catalogSessionIds.add(e.sessionId);
                    this._snapshotReceived = !0, this._snapshotDeferred.isSettled || this._snapshotDeferred.complete();
                    break;
                }
            case "added":
                {
                    const e = t.event.value.session;
                    if (e?.sessionId && this._catalogSessionIds.add(e.sessionId), !e?.parent) return;
                    this._upsertChild(this._toChildInfo(e)), this._adoptChild(this._children.get(e.sessionId));
                    break;
                }
            case "updated":
                {
                    const e = t.event.value.session;
                    if (!e) return;
                    if (e.parent) {
                        const n = this._children.get(e.sessionId), i = !!n?.parentToolCallId?.trim(), r = this._toChildInfo(e);
                        this._upsertChild(r);
                        const s = this._children.get(r.sessionId) ?? r;
                        this._syncTrayRowForChild(s), this._settleChildComposerStatusIfIdle(r.sessionId), n && !i && s.parentToolCallId?.trim() && this._adoptChild(s);
                        return;
                    }
                    for (const n of this._children.values())(n.parentSessionId === e.sessionId || n.rootSessionId === e.sessionId) && this._syncTrayRowForChild(n);
                    break;
                }
            case "deleted":
                {
                    const e = t.event.value.sessionId;
                    this._catalogSessionIds.delete(e);
                    const n = this._hasLocalChildState(e);
                    this._recordWatchDeleted(e, n), this._removeChildAsync(e, {
                        settleComposer: n
                    });
                    break;
                }
            case void 0:
                break;
            default:
                {
                    const e = t.event;
                    break;
                }
        }
    }
    _toChildInfo(t) {
        const e = t.parent;
        return {
            sessionId: t.sessionId,
            parentSessionId: e.parentSessionId,
            parentToolCallId: e.parentToolCallId,
            rootSessionId: e.rootSessionId,
            status: t.status,
            lastEventId: t.lastEventId,
            ...t.modelId?.trim() ? {
                modelId: t.modelId.trim()
            } : {}
        };
    }
    _upsertChild(t) {
        const e = this._children.get(t.sessionId);
        e ? this._children.set(t.sessionId, {
            ...e,
            ...t,
            parentToolCallId: t.parentToolCallId || e.parentToolCallId,
            modelId: t.modelId?.trim() || e.modelId
        }) : (this._children.set(t.sessionId, t), this._adoptionTokens.set(t.sessionId, {})), this._fireChildAdopted(t.sessionId);
    }
    _fireChildAdopted(t) {
        for (const e of [
            ...this._adoptionListeners
        ])try {
            e.onChildAdopted(t);
        } catch (n) {
            this._logService.warn(`[AgentHostChildSessionMirror] child adoption listener failed for ${t}`, n);
        }
    }
    _fireChildRemoved(t) {
        for (const e of [
            ...this._adoptionListeners
        ])try {
            e.onChildRemoved(t);
        } catch (n) {
            this._logService.warn(`[AgentHostChildSessionMirror] child removal listener failed for ${t}`, n);
        }
    }
    _removeChild(t) {
        this._removeChildAsync(t);
    }
    _hasLocalChildState(t) {
        return this._children.has(t) || this._attaches.has(t) || this._adoptionInFlight.has(t) || this._attachTurnBracket.has(t) || this._attachResumeCursor.has(t) || this._attachRestartTimers.has(t) || this._attachRestartAttempts.has(t) || this._interactionMirrors.has(t) || this._hydrationWaiters.has(t);
    }
    async _removeChildAsync(t, e) {
        this._adoptionTokens.delete(t), await this._forgetChildLocalState(t, e), this._children.delete(t), this._adoptionInFlight.delete(t), this._attachResumeCursor.delete(t), this._attachTurnBracket.delete(t);
    }
    async _forgetChildLocalState(t, e) {
        const n = this._attaches.get(t);
        n && this._endChildAttachTurn(n), this._stopAttach(t), this._clearAttachRestart(t), this._disposeInteractionMirror(t), this._backgroundWorkService?.clearSubagentWork(t), this._releaseHydrationWaiters(t, void 0), this._fireChildRemoved(t), e?.settleComposer !== !1 && await this._forceSettleChildComposerStatusAsync(t);
    }
    _recordWatchDeleted(t, e) {
        const n = this._adoptionServices === void 0 ? void 0 : this._adoptionServices.composerDataService.getHandleIfLoaded(t) !== void 0;
        this._logService.info(`[AgentHostChildSessionMirror] watchSessions.deleted ${t} knownChild=${e} composerLoaded=${n ?? "unresolved"}`), this._incrementMetric(Nhg, {
            known_child: String(e),
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
        }, this._watchDeletedBurst = r, this._watchDeletedBurstFlush.value = Ec(()=>{
            this._flushWatchDeletedBurst();
        }, Mhg)), r.lastEventAtMs = i, e ? r.knownSessionIds.push(t) : (r.unknownSessionIds.push(t), n === !0 && (r.unknownLoadedCount += 1));
    }
    _flushWatchDeletedBurst() {
        const t = this._watchDeletedBurst;
        if (t === void 0) return;
        this._watchDeletedBurst = void 0, this._watchDeletedBurstFlush.clear();
        const e = {
            knownSessionIds: t.knownSessionIds,
            unknownSessionIds: t.unknownSessionIds,
            unknownLoadedCount: t.unknownLoadedCount,
            spanMs: t.lastEventAtMs - t.startedAtMs,
            discoveryWatchActive: this._discoveryWatch !== void 0,
            snapshotReceived: this._snapshotReceived,
            msSinceDiscoveryWatchStarted: t.msSinceDiscoveryWatchStarted,
            msSinceRegistrationChange: t.msSinceRegistrationChange
        };
        if (this._logService.info(`[AgentHostChildSessionMirror] watchSessions.deleted burst: unknown=${e.unknownSessionIds.length} known=${e.knownSessionIds.length} unknownLoaded=${e.unknownLoadedCount} spanMs=${e.spanMs}`), e.unknownSessionIds.length >= Dhg) try {
            this._watchDeletedBurstReporter(e);
        } catch (n) {
            this._logService.warn("[AgentHostChildSessionMirror] failed to report watchSessions.deleted burst", n);
        }
        return e;
    }
    _incrementMetric(t, e) {
        if (this._metricsService === void 0) {
            this._metricsService = null;
            try {
                this._metricsService = this._instantiationService?.invokeFunction((n)=>n.get(Uh)) ?? null;
            } catch  {}
        }
        try {
            this._metricsService?.increment({
                stat: t,
                tags: e
            });
        } catch (n) {
            this._logService.warn(`[AgentHostChildSessionMirror] failed to increment ${t}`, n);
        }
    }
    _ensureInteractionMirror(t) {
        if (this._disposed || this._interactionMirrors.has(t) || !this._instantiationService || typeof this._providerService.watchSessionInteractions != "function") return;
        const [e, n] = Xp().withCancel(), i = new gos(t, this._providerService, this._logService, ()=>{
            const r = this._interactionMirrors.get(t);
            r?.mirror === i && (this._interactionMirrors.delete(t), r.cancel());
        });
        this._interactionMirrors.set(t, {
            mirror: i,
            cancel: n
        });
        try {
            i.bindSurface({
                ctx: e,
                interactionListener: {
                    query: (r, s)=>this._queryChildInteractionSurface(t, (o)=>o.query(r, s)),
                    answerHostQuestion: (r, s)=>this._queryChildInteractionSurface(t, (o)=>o.answerHostQuestion?.(r, s) ?? Promise.reject(new Error("This composer cannot show a Host question")))
                }
            });
        } catch (r) {
            this._logService.warn(`[AgentHostChildSessionMirror] failed to bind child interaction surface for ${t}`, r), this._disposeInteractionMirror(t);
        }
    }
    _disposeInteractionMirror(t) {
        const e = this._interactionMirrors.get(t);
        e && (this._interactionMirrors.delete(t), e.cancel(), e.mirror.dispose());
    }
    async _queryChildInteractionSurface(t, e) {
        const n = this._attaches.get(t), i = await this._resolveAdoptionServices(), r = n ? await this._resolveAttachComposerHandle(n) : void 0;
        if (!n || !r || !i || !this._instantiationService) throw new Error(`No child composer surface for session ${t}`);
        await i.composerUtilsService?.ensureCapabilitiesAreLoaded(r);
        const s = await this._ensureAttachAdapter(n);
        try {
            return await e(s);
        } finally{
            this._attaches.get(t) === n && !n.turnActive && this._releaseAttachComposerRefs(n);
        }
    }
    _adoptChild(t) {
        if (this._disposed || this._stoppingAll) return Promise.resolve();
        const e = this._adoptionTokens.get(t.sessionId);
        if (!e) return Promise.resolve();
        const i = (this._adoptionInFlight.get(t.sessionId) ?? Promise.resolve()).catch(()=>{}).then(()=>{
            const r = this._children.get(t.sessionId);
            if (r) return this._adoptChildUnlocked(r, e);
        });
        return this._adoptionInFlight.set(t.sessionId, i), i.finally(()=>{
            this._adoptionInFlight.get(t.sessionId) === i && this._adoptionInFlight.delete(t.sessionId);
        });
    }
    _isCurrentAdoption(t, e) {
        return !this._disposed && !this._stoppingAll && this._children.has(t.sessionId) && this._adoptionTokens.get(t.sessionId) === e;
    }
    async _adoptChildUnlocked(t, e) {
        if (this._isCurrentAdoption(t, e)) try {
            const n = await this._resolveAdoptionServices();
            if (!this._isCurrentAdoption(t, e)) return;
            if (n) {
                const i = this._children.get(t.sessionId);
                if (!i || !this._isCurrentAdoption(i, e) || !i.parentToolCallId?.trim()) return;
                if (!await this._linkTaskBubble(n, i)) {
                    await this._failClosedChildAdoption(i, e, "Parent Task bubble link unavailable");
                    return;
                }
                if (!this._isCurrentAdoption(i, e)) return;
                const r = await this._ensureChildComposer(n, i);
                if (!this._isCurrentAdoption(i, e)) {
                    await this._forgetChildLocalState(i.sessionId);
                    return;
                }
                const s = this._children.get(i.sessionId);
                if (!s) return;
                this._syncTrayRowForChild(s), this._ensureAttach(s, r);
            } else this._instantiationService ? await this._failClosedChildAdoption(t, e, "Composer adoption services unavailable") : this._ensureAttach(t, void 0);
        } catch (n) {
            this._logService.warn(`[AgentHostChildSessionMirror] failed to adopt child session ${t.sessionId}`, n), await this._failClosedChildAdoption(t, e, "Child adoption failed");
        }
    }
    async _failClosedChildAdoption(t, e, n) {
        if (!this._isCurrentAdoption(t, e)) return;
        this._adoptionTokens.delete(t.sessionId), this._logService.error(`[AgentHostChildSessionMirror] Cannot adopt child ${t.sessionId}: ${n}`);
        const i = ()=>!this._disposed && !this._stoppingAll && this._children.has(t.sessionId);
        !(i() ? await this._interruptSessionTree({
            sessionId: t.sessionId,
            reason: n
        }) : !0) && i() && this._logService.error(`[AgentHostChildSessionMirror] Failed to contain unlinked child ${t.sessionId}`);
        const s = t.parentToolCallId?.trim();
        this._adoptionServices && s && await this._stampParentTaskBubble(this._adoptionServices, {
            sessionId: t.sessionId,
            parentComposerId: t.parentSessionId,
            toolCallId: s,
            status: "error",
            error: `Subagent could not be linked to its parent Task: ${n}`
        }), await this._forgetChildLocalState(t.sessionId);
    }
    async _interruptSessionTree(t) {
        try {
            return fEi.fromBinary(await this._providerService.interruptTurn(new JPe({
                sessionId: t.sessionId,
                sessionTree: !0,
                reason: t.reason
            }).toBinary())).interrupted;
        } catch (e) {
            return this._logService.warn(`[AgentHostChildSessionMirror] Failed to interrupt unlinked session tree ${t.sessionId}`, e), !1;
        }
    }
    async _linkTaskBubble(t, e) {
        const n = e.parentToolCallId?.trim();
        return n ? t.subagentComposerService.linkParentToSubagentWhenReady({
            toolCallId: n,
            subagentComposerId: e.sessionId,
            parentComposerId: e.parentSessionId,
            timeoutMs: Phg
        }) : !1;
    }
    async _ensureChildComposer(t, e) {
        const n = await t.subagentComposerService.resolveTaskLaunchMetadata({
            toolCallId: e.parentToolCallId,
            parentComposerId: e.parentSessionId
        }), i = e.modelId?.trim() || n.modelId?.trim(), r = t.composerDataService.getHandleIfLoaded(e.sessionId) ?? await t.composerDataService.getComposerHandleById(e.sessionId);
        if (r) {
            if (this._ensureSubagentInfo(t, r, e, n.subagentTypeName), i) {
                const h = this._resolveChildModelConfig(t, r.data.modelConfig, i);
                tyk(r.data.modelConfig, h) || t.modelConfigService.setModelConfigForComposer?.(r, h);
            }
            return r;
        }
        const { createEmptyComposer: s } = await Promise.resolve().then(()=>(uv(), Dqr)), { SubagentType: o } = await Promise.resolve().then(()=>(sd(), v6o)), a = t.composerDataService.getHandleIfLoaded(e.parentSessionId) ?? await t.composerDataService.getComposerHandleById(e.parentSessionId), l = a?.data.modelConfig ?? t.modelConfigService.getModelConfig("composer"), c = this._resolveChildModelConfig(t, l, i), u = s({
            ...c,
            maxMode: c.maxMode ?? !1
        }, e.sessionId, a?.data.unifiedMode ?? "agent");
        u.subagentInfo = {
            subagentType: o.TASK,
            parentComposerId: e.parentSessionId,
            conversationLengthAtSpawn: a?.data.fullConversationHeadersOnly?.length ?? 0,
            additionalData: {},
            toolCallId: e.parentToolCallId,
            toolCallIdHistory: e.parentToolCallId ? [
                e.parentToolCallId
            ] : [],
            rootParentConversationId: e.rootSessionId,
            ...n.subagentTypeName ? {
                subagentTypeName: n.subagentTypeName
            } : {}
        }, a?.data.workspaceIdentifier && (u.workspaceIdentifier = a.data.workspaceIdentifier), a?.data.gitWorktree && (u.gitWorktree = {
            ...a.data.gitWorktree
        }), u.name = t.subagentComposerService.resolveTaskDescriptionTitle({
            toolCallId: e.parentToolCallId,
            parentComposerId: e.parentSessionId
        });
        const d = await t.composerDataService.appendSubComposer(u);
        if (!d) throw new Error(`Failed to append child composer for ${e.sessionId}`);
        return typeof t.modelConfigService.setModelConfigForComposer == "function" && t.modelConfigService.setModelConfigForComposer(d, c), a && t.composerDataService.updateComposerDataSetStore(a, (h)=>{
            const p = a.data.subagentComposerIds ?? [];
            p.includes(e.sessionId) || h("subagentComposerIds", [
                ...p,
                e.sessionId
            ]);
        }), d;
    }
    _resolveChildModelConfig(t, e, n) {
        const i = e ?? t.modelConfigService.getModelConfig("composer"), r = {
            modelName: n ?? i.modelName,
            maxMode: i.maxMode === !0
        }, s = typeof t.modelConfigService.fixupModelConfigForCurrentFlag == "function" ? t.modelConfigService.fixupModelConfigForCurrentFlag(r) : void 0, o = s?.selectedModels?.length ? s.selectedModels : void 0, a = i.selectedModels, l = o && a && a.length === o.length && o.every((c, u)=>c.modelId === a[u].modelId) ? a : o;
        return {
            modelName: o?.[0]?.modelId ?? r.modelName,
            maxMode: r.maxMode === !0,
            ...l?.length ? {
                selectedModels: l.map((c)=>({
                        modelId: c.modelId,
                        parameters: (c.parameters ?? []).map((u)=>({
                                ...u
                            }))
                    }))
            } : {}
        };
    }
    _ensureSubagentInfo(t, e, n, i) {
        Promise.resolve().then(()=>(sd(), v6o)).then(({ SubagentType: r })=>{
            t.composerDataService.updateComposerDataSetStore(e, (s)=>{
                const o = e.data.subagentInfo, a = [
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
    _syncTrayRowForChild(t) {
        if (!this._backgroundWorkService) return;
        if (!this._adoptionTokens.has(t.sessionId)) {
            this._backgroundWorkService.clearSubagentWork(t.sessionId);
            return;
        }
        const e = this._attaches.get(t.sessionId), n = this._attachTurnBracket.get(t.sessionId), i = e?.turnActive === !0 || e === void 0 && n?.turnActive === !0, r = e?.blockInteractionBeginUntilTurnStarted === !0 || e === void 0 && n?.blockInteractionBeginUntilTurnStarted === !0;
        if (i) {
            this._upsertTrayRow(t);
            return;
        }
        if (r) {
            this._backgroundWorkService.clearSubagentWork(t.sessionId);
            return;
        }
        if (t.status === VCe.RUNNING) {
            this._upsertTrayRow(t);
            return;
        }
        this._backgroundWorkService.clearSubagentWork(t.sessionId);
    }
    _beginChildAttachTurn(t, e) {
        const n = t.turnActive;
        t.turnActive = !0, t.blockInteractionBeginUntilTurnStarted = !1, !n && t.composerHandle && (t.turnStart = Chg(t.composerHandle.data.fullConversationHeadersOnly)), !n && e !== void 0 && (t.humanBubblePending = !1, t.echoedUserMessage = void 0), this._writeAttachTurnBracket(t);
        const i = this._children.get(t.sessionId);
        i && this._upsertTrayRow(i);
        const r = this._adoptionServices;
        if (!t.composerHandle || !r) return;
        let s = !1;
        r.composerDataService.updateComposerDataSetStore(t.composerHandle, (o)=>{
            o("status", "generating"), !n && e !== void 0 && (o("chatGenerationUUID", e || Ai()), s = !0);
        }), s && this._disposeAttachAdapters(t);
    }
    _endChildAttachTurn(t, e) {
        t.turnActive = !1, t.blockInteractionBeginUntilTurnStarted = !0, t.humanBubblePending = !1, t.echoedUserMessage = void 0, t.turnStart = void 0, this._writeAttachTurnBracket(t);
        const n = this._children.get(t.sessionId);
        (e?.forceComposerSettle === !0 || !Ehg(n?.status)) && e?.forceComposerSettle !== !0 && this._trySettleChildComposerStatusSync(t.sessionId, t.composerHandle), this._backgroundWorkService?.clearSubagentWork(t.sessionId), this._disposeAttachAdapters(t, "Child turn settled"), t.composerHandle = void 0;
    }
    _shouldSettleChildComposerStatusIfIdle(t) {
        if (this._disposed) return !1;
        const e = this._children.get(t);
        if (!e || Ehg(e.status)) return !1;
        const n = this._attaches.get(t), i = this._attachTurnBracket.get(t);
        return !(!(n?.blockInteractionBeginUntilTurnStarted === !0 || n === void 0 && i?.blockInteractionBeginUntilTurnStarted === !0) || n?.turnActive === !0 || i?.turnActive === !0);
    }
    _trySettleChildComposerStatusSync(t, e) {
        const n = this._adoptionServices;
        if (!n) return;
        const i = e ?? n.composerDataService.getHandleIfLoaded(t);
        i && this._writeChildComposerSettledStatus(i, n);
    }
    async _resolveChildComposerHandleForSettle(t, e, n) {
        if (await this._resolveAdoptionServices(), !n?.allowWhenDisposed && this._disposed) return;
        const i = this._adoptionServices;
        if (!i) return;
        const r = e ?? i.composerDataService.getHandleIfLoaded(t);
        if (r) return r;
        const s = await i.composerDataService.getComposerHandleById(t);
        if (!(!n?.allowWhenDisposed && this._disposed)) return s ?? void 0;
    }
    _writeChildComposerSettledStatus(t, e) {
        e.composerDataService.updateComposerDataSetStore(t, (n)=>{
            n("status", "none"), n("generatingBubbleIds", []);
        });
    }
    async _forceSettleChildComposerStatusAsync(t, e) {
        const n = await this._resolveChildComposerHandleForSettle(t, e, {
            allowWhenDisposed: !0
        });
        if (!n) return;
        const i = this._adoptionServices;
        i && this._writeChildComposerSettledStatus(n, i);
    }
    async _settleChildComposerStatusIfIdle(t) {
        if (!this._shouldSettleChildComposerStatusIfIdle(t)) return;
        const e = await this._resolveChildComposerHandleForSettle(t);
        if (!this._shouldSettleChildComposerStatusIfIdle(t) || !e) return;
        const n = this._adoptionServices;
        n && this._writeChildComposerSettledStatus(e, n);
    }
    _upsertTrayRow(t) {
        if (!this._backgroundWorkService) return;
        const e = this._backgroundWorkService.backgroundWorkItems.value.find((i)=>i.kind === "subagent" && (i.id === t.sessionId || i.subagentComposerId === t.sessionId))?.startTimeMs, n = this._adoptionServices?.composerDataService.getHandleIfLoaded(t.sessionId)?.data.name?.trim() || "Background subagent";
        this._backgroundWorkService.upsertSubagentWork({
            id: t.sessionId,
            kind: "subagent",
            composerId: t.parentSessionId,
            subagentComposerId: t.sessionId,
            title: n,
            startTimeMs: e ?? Date.now()
        });
    }
    _ensureAttach(t, e) {
        if (this._ensureInteractionMirror(t.sessionId), this._attaches.has(t.sessionId) || this._disposed || this._stoppingAll) {
            const c = this._attaches.get(t.sessionId);
            c?.turnActive && e && !c.composerHandle && (c.composerHandle = e);
            return;
        }
        const n = new El, i = this._attachResumeCursor.get(t.sessionId) ?? 0n, r = this._attachTurnBracket.get(t.sessionId), s = r?.turnActive ?? !1, o = {
            sessionId: t.sessionId,
            cancellation: n,
            cancelSubscription: void 0,
            adapter: void 0,
            actionManager: void 0,
            composerHandle: s ? e : void 0,
            lastAppliedEventId: i,
            hydrateQueue: Promise.resolve(),
            turnActive: s,
            blockInteractionBeginUntilTurnStarted: r?.blockInteractionBeginUntilTurnStarted ?? !1,
            humanBubblePending: r?.echoedUserMessage !== void 0,
            echoedUserMessage: r?.echoedUserMessage,
            turnStart: r?.turnStart
        };
        this._attaches.set(t.sessionId, o), this._attachRestartTimers.deleteAndDispose(t.sessionId), o.turnActive && this._resolveAdoptionServices().then(()=>{
            this._attaches.get(t.sessionId) !== o || !o.turnActive || this._beginChildAttachTurn(o);
        });
        const a = new Oze({
            sessionId: t.sessionId,
            lastEventId: i
        }).toBinary(), l = this._providerService.attachSession(a)[Symbol.asyncIterator]();
        o.cancelSubscription = n.token.onCancellationRequested(()=>{
            l.return?.();
        }), (async ()=>{
            let c = !1;
            try {
                for(; !n.token.isCancellationRequested && !this._disposed;){
                    const u = await l.next();
                    if (u.done) {
                        c = !n.token.isCancellationRequested && !this._disposed;
                        break;
                    }
                    if (this._disposed || n.token.isCancellationRequested) break;
                    const d = K4e.fromBinary(u.value), h = this._attaches.get(t.sessionId);
                    if (!h || h.cancellation !== n) break;
                    this._attachRestartAttempts.delete(t.sessionId);
                    try {
                        await this._handleAttachEvent(h, d), h.lastAppliedEventId = d.eventId, this._attachResumeCursor.set(t.sessionId, d.eventId), this._releaseHydrationWaiters(t.sessionId, d.eventId), h.turnActive || this._releaseAttachComposerRefs(h);
                    } catch (p) {
                        this._logService.warn(`[AgentHostChildSessionMirror] attach event handling failed for ${t.sessionId}`, p), c = !0;
                        break;
                    }
                }
            } catch (u) {
                !n.token.isCancellationRequested && !this._disposed && (this._logService.warn(`[AgentHostChildSessionMirror] attachSession failed for ${t.sessionId}`, u), c = !0);
            } finally{
                o.cancelSubscription?.dispose(), o.cancelSubscription = void 0, await l.return?.(), this._disposeAttachAdapters(o), n.dispose(), o.turnActive && !c && (await this._resolveAdoptionServices(), this._endChildAttachTurn(o)), this._attaches.get(t.sessionId)?.cancellation === o.cancellation && (this._attaches.delete(t.sessionId), c && this._children.has(t.sessionId) && !this._disposed && this._scheduleAttachRestart(t.sessionId));
            }
        })();
    }
    _scheduleAttachRestart(t) {
        if (this._disposed || this._attaches.has(t) || !this._children.has(t) || this._attachRestartTimers.has(t)) return;
        const e = (this._attachRestartAttempts.get(t) ?? 0) + 1;
        if (this._attachRestartAttempts.set(t, e), e > 5) return this._logService.warn(`[AgentHostChildSessionMirror] giving up attachSession restart for ${t} after 5 attempts`), this._attachRestartAttempts.delete(t), this._onAttachRestartExhausted(t);
        const n = Math.min(250 * 2 ** (e - 1), 4e3);
        this._attachRestartTimers.set(t, Ec(()=>{
            if (this._attachRestartTimers.deleteAndDispose(t), this._disposed || this._attaches.has(t) || !this._children.has(t)) return;
            const i = this._children.get(t);
            i && this._restartAttach(i);
        }, n));
    }
    async _onAttachRestartExhausted(t) {
        if (this._disposed) return;
        await this._resolveAdoptionServices();
        const e = this._attaches.get(t);
        if (e) {
            this._endChildAttachTurn(e), await this._forceSettleChildComposerStatusAsync(t);
            return;
        }
        this._attachTurnBracket.set(t, {
            turnActive: !1,
            blockInteractionBeginUntilTurnStarted: !0
        }), await this._forceSettleChildComposerStatusAsync(t), this._backgroundWorkService?.clearSubagentWork(t);
    }
    async _restartAttach(t) {
        if (this._disposed || this._attaches.has(t.sessionId) || !this._children.has(t.sessionId)) return;
        const e = await this._resolveAdoptionServices(), n = this._attachTurnBracket.get(t.sessionId)?.turnActive === !0, i = e && n ? e.composerDataService.getHandleIfLoaded(t.sessionId) ?? await e.composerDataService.getComposerHandleById(t.sessionId) : void 0;
        this._ensureAttach(t, i);
    }
    _clearAttachRestart(t) {
        this._attachRestartTimers.deleteAndDispose(t), this._attachRestartAttempts.delete(t);
    }
    async _handleAttachEvent(t, e) {
        switch(e.event.case){
            case "conversationState":
                {
                    const n = e.event.value;
                    await this._enqueueHydrate(t, async ()=>{
                        if (t.turnActive && t.adapter !== void 0) {
                            if (t.humanBubblePending && !await this._applyConversationState(t, n, !0, !0) && t.humanBubblePending) try {
                                await this._projectEchoedHumanBubble(t);
                            } catch (r) {
                                this._logService.warn(`[AgentHostChildSessionMirror] failed to project echoed human bubble for ${t.sessionId}`, r);
                            }
                            await this._storeConversationState(t, n);
                            return;
                        }
                        await this._applyConversationState(t, n);
                    });
                    break;
                }
            case "interactionUpdate":
                {
                    const n = e.event.value;
                    if (await this._enqueueHydrate(t, async ()=>{
                        await this._applyInteractionUpdate(t, n);
                    }), !t.turnActive && !t.blockInteractionBeginUntilTurnStarted) await this._resolveAdoptionServices(), this._beginChildAttachTurn(t);
                    else if (t.turnActive) {
                        const i = this._children.get(t.sessionId);
                        i && this._upsertTrayRow(i);
                    }
                    break;
                }
            case "turnInteractionsSuperseded":
                {
                    const n = e.event.value.continuation;
                    switch(n.case){
                        case "replayActionFromState":
                        case "resumeFromCheckpoint":
                            await this._enqueueHydrate(t, async ()=>{
                                try {
                                    await this._applyConversationState(t, n.value);
                                } finally{
                                    await this._clearGeneratingBubbleIds(t);
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
                    await this._resolveAdoptionServices(), await this._resolveAttachComposerHandle(t), this._beginChildAttachTurn(t, e.event.value.turnId);
                    break;
                }
            case "turnSettled":
                {
                    await this._resolveAdoptionServices(), t.humanBubblePending && await this._enqueueHydrate(t, async ()=>{
                        await this._projectEchoedHumanBubble(t);
                    }), this._endChildAttachTurn(t), this._stampParentTaskBubbleFromSettledTurn(t.sessionId, e.event.value);
                    break;
                }
            case "turnAwaitingInput":
                {
                    await this._resolveAdoptionServices(), await this._resolveAttachComposerHandle(t), this._beginChildAttachTurn(t, e.event.value.turnId), this._interactionMirrors.get(t.sessionId)?.mirror.observeSessionEvent(e);
                    break;
                }
            case "interactionResolved":
                this._interactionMirrors.get(t.sessionId)?.mirror.observeSessionEvent(e);
                break;
            case "subagentStarted":
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
    async _stampParentTaskBubbleFromSettledTurn(t, e) {
        const n = this._adoptionServices, i = this._children.get(t), r = i?.parentToolCallId?.trim();
        if (!n || !i || !r) return;
        const s = e.outcome === Sle.COMPLETED ? "success" : e.outcome === Sle.INTERRUPTED ? "aborted" : e.outcome === Sle.FAILED ? "error" : void 0;
        s !== void 0 && await this._stampParentTaskBubble(n, {
            sessionId: t,
            parentComposerId: i.parentSessionId,
            toolCallId: r,
            status: s,
            error: e.detail
        });
    }
    async _stampParentTaskBubble(t, e) {
        const n = {
            parentComposerId: e.parentComposerId,
            toolCallId: e.toolCallId,
            status: e.status,
            error: e.error
        };
        if (!t.subagentComposerService.markParentTaskBubbleCompleted(n)) try {
            if (!await t.composerDataService.getComposerHandleById(e.parentComposerId)) return;
            t.subagentComposerService.markParentTaskBubbleCompleted(n) || this._logService.warn(`[AgentHostChildSessionMirror] parent Task bubble not found while stamping ${e.status} for ${e.sessionId}`);
        } catch (i) {
            this._logService.warn(`[AgentHostChildSessionMirror] failed to stamp parent Task bubble for ${e.sessionId}`, i);
        }
    }
    _enqueueHydrate(t, e) {
        const n = t.hydrateQueue.then(e);
        return t.hydrateQueue = n.catch((i)=>{
            this._logService.warn(`[AgentHostChildSessionMirror] child transcript update failed for ${t.sessionId}`, i);
        }), n;
    }
    async _clearGeneratingBubbleIds(t) {
        const e = await this._resolveAttachComposerHandle(t), n = await this._resolveAdoptionServices();
        !e || !n || n.composerDataService.updateComposerDataSetStore(e, (i)=>i("generatingBubbleIds", []));
    }
    _writeAttachTurnBracket(t) {
        this._attachTurnBracket.set(t.sessionId, {
            turnActive: t.turnActive,
            blockInteractionBeginUntilTurnStarted: t.blockInteractionBeginUntilTurnStarted,
            echoedUserMessage: t.echoedUserMessage,
            turnStart: t.turnStart
        });
    }
    _noteUserMessageEcho(t, e) {
        const n = e.messageId.trim();
        n.length > 0 && t.composerHandle?.data.conversationMap[n] !== void 0 || (t.humanBubblePending = !0, t.echoedUserMessage = e, this._writeAttachTurnBracket(t));
    }
    async _storeConversationState(t, e) {
        const n = await this._resolveAttachComposerHandle(t), i = await this._resolveAdoptionServices();
        if (!n || !i) return;
        const r = Ihg(e.mode, n.data.unifiedMode);
        i.composerDataService.updateComposerDataSetStore(n, (s)=>{
            s("conversationState", e), r !== void 0 && s("unifiedMode", r);
        }, {
            reason: "host_hydrate",
            hostOwned: "unknown"
        });
    }
    async _applyConversationState(t, e, n = !0, i = !1) {
        const r = await this._resolveAttachComposerHandle(t), s = await this._resolveAdoptionServices();
        if (!r || !s || !this._instantiationService) return !1;
        const { ComposerBlobStore: o } = await Promise.resolve().then(()=>(zW(), HSi)), { populateConversationFromState: a } = await Promise.resolve().then(()=>(rG(), _0i)), l = new o(s.storageService, r.composerId), c = await a({
            instantiationService: this._instantiationService,
            selectedContextService: s.selectedContextService,
            structuredLogService: s.structuredLogService,
            conversationState: e,
            existingConversationMap: n ? r.data.conversationMap : {},
            existingConversationHeaders: n ? r.data.fullConversationHeadersOnly : [],
            blobStore: {
                getBlob: async (f, _)=>{
                    const b = await l.getBlob(f, _);
                    if (!b) throw new Error(`Missing blob while hydrating child session ${t.sessionId}`);
                    return b;
                }
            },
            shouldSetServerBubbleId: !0
        }, Xp()), u = Ihg(e.mode, r.data.unifiedMode), d = {
            conversationMap: r.data.conversationMap,
            conversationHeaders: r.data.fullConversationHeadersOnly
        }, h = {
            conversationMap: c.conversationMap,
            conversationHeaders: c.conversationHeaders
        }, p = i ? xhg(d, h, vos(d.conversationHeaders, t.turnStart)) : void 0;
        return (!i || eyk(t, p) || Jbk(t, d)) && (t.humanBubblePending = !1, t.echoedUserMessage = void 0, this._writeAttachTurnBracket(t)), s.composerDataService.updateComposerDataSetStore(r, (f)=>{
            f("conversationState", e), i ? p !== void 0 && (f("conversationMap", p.conversationMap), f("fullConversationHeadersOnly", p.conversationHeaders)) : (f("conversationMap", c.conversationMap), f("fullConversationHeadersOnly", c.conversationHeaders), f("todos", c.todos)), u !== void 0 && f("unifiedMode", u);
        }, {
            reason: "host_hydrate",
            hostOwned: "unknown"
        }), !0;
    }
    async _projectEchoedHumanBubble(t) {
        const e = t.echoedUserMessage, n = await this._resolveAttachComposerHandle(t), i = await this._resolveAdoptionServices();
        if (e === void 0 || !n || !i) return;
        const [{ ComposerBlobStore: r }, { createComposerMessageHeaderData: s }, { buildEagerHumanMessageBubble: o, projectSubscriptionEventNotification: a }] = await Promise.all([
            Promise.resolve().then(()=>(zW(), HSi)),
            Promise.resolve().then(()=>(uv(), Dqr)),
            Promise.resolve().then(()=>(rG(), _0i))
        ]), l = e.messageId.trim(), c = new r(i.storageService, n.composerId), u = await o({
            context: Xp(),
            userMessage: e,
            userServerBubbleId: l,
            shouldSetServerBubbleId: l.length > 0,
            bubbleIdOverride: l.length > 0 ? l : void 0,
            createdAt: new Date().toISOString(),
            eventNotification: a(void 0, e),
            blobStore: {
                getBlob: async (d, h)=>{
                    const p = await c.getBlob(d, h);
                    if (!p) throw new Error(`Missing blob while projecting child human bubble for ${t.sessionId}`);
                    return p;
                }
            },
            structuredLogService: i.structuredLogService,
            selectedContextService: i.selectedContextService
        });
        t.humanBubblePending = !1, t.echoedUserMessage = void 0, this._writeAttachTurnBracket(t), i.composerDataService.updateComposerDataSetStore(n, (d)=>{
            const h = n.data.fullConversationHeadersOnly, p = xhg({
                conversationMap: n.data.conversationMap,
                conversationHeaders: h
            }, {
                conversationMap: {
                    [u.bubbleId]: u
                },
                conversationHeaders: [
                    s(u)
                ]
            }, vos(h, t.turnStart) ?? h.length);
            p !== void 0 && (d("conversationMap", p.conversationMap), d("fullConversationHeadersOnly", p.conversationHeaders));
        });
    }
    async _applyInteractionUpdate(t, e) {
        if (!await this._resolveAttachComposerHandle(t) || (e.message.case === "userMessageAppended" && e.message.value.userMessage !== void 0 && this._noteUserMessageEcho(t, e.message.value.userMessage), !this._instantiationService)) return;
        await (await this._ensureAttachAdapter(t)).sendUpdate(Xp(), e);
    }
    async _ensureAttachAdapter(t) {
        const e = await this._resolveAttachComposerHandle(t);
        if (!e || !this._instantiationService) throw new Error(`No child composer adapter for session ${t.sessionId}`);
        if (!t.adapter) {
            const { AgentResponseAdapter: n } = await Promise.resolve().then(()=>(wAn(), ccl));
            t.actionManager = new cGt, t.adapter = new n(this._instantiationService, e, t.actionManager, e.data.chatGenerationUUID);
        }
        return t.adapter;
    }
    _stopAttach(t) {
        this._clearAttachRestart(t);
        const e = this._attaches.get(t);
        e && (this._attaches.delete(t), e.cancelSubscription?.dispose(), e.cancellation.cancel(), e.cancellation.dispose(), this._disposeAttachAdapters(e, "Child attach stopped"));
    }
    _releaseAttachComposerRefs(t) {
        this._disposeAttachAdapters(t), t.composerHandle = void 0;
    }
    async _resolveAttachComposerHandle(t) {
        if (t.composerHandle) return t.composerHandle;
        const e = await this._resolveAdoptionServices();
        if (!e) return;
        const n = e.composerDataService.getHandleIfLoaded(t.sessionId) ?? await e.composerDataService.getComposerHandleById(t.sessionId);
        if (!(!n || this._attaches.get(t.sessionId) !== t)) return t.composerHandle = n, n;
    }
    _disposeAttachAdapters(t, e) {
        try {
            e !== void 0 && t.actionManager?.abort(e), m1(t.adapter, t.actionManager);
        } catch (n) {
            this._logService.warn(`[AgentHostChildSessionMirror] failed to dispose child attach adapters for ${t.sessionId}`, n);
        }
        t.adapter = void 0, t.actionManager = void 0;
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
    hasAttachForTest(t) {
        return this._attaches.has(t);
    }
    getAttachRestartAttemptsForTest(t) {
        return this._attachRestartAttempts.get(t) ?? 0;
    }
    getAttachResumeCursorForTest(t) {
        return this._attachResumeCursor.get(t);
    }
    isHumanBubblePendingForTest(t) {
        return this._attaches.get(t)?.humanBubblePending === !0;
    }
    isAttachTurnActiveForTest(t) {
        return this._attachTurnBracket.get(t)?.turnActive === !0 || this._attaches.get(t)?.turnActive === !0;
    }
    scheduleAttachRestartForTest(t, e = 0) {
        return this._attachRestartAttempts.set(t, e), this._scheduleAttachRestart(t);
    }
    isAttachTurnSettledForTest(t) {
        return this._attachTurnBracket.get(t)?.blockInteractionBeginUntilTurnStarted === !0 || this._attaches.get(t)?.blockInteractionBeginUntilTurnStarted === !0;
    }
    upsertChildForTest(t) {
        this._children.set(t.sessionId, t);
    }
    setAttachTurnBracketForTest(t, e) {
        this._attachTurnBracket.set(t, e);
    }
    setAttachAdapterForTest(t, e, n) {
        const i = this._attaches.get(t);
        return i ? (i.adapter = e, i.actionManager = n, !0) : !1;
    }
};

}
