import { Bog, Gog, Kxn, Mog, Qog, cgk, kle, nol, ool, ugk } from "./Aeg.js";
import { Ei, Hc } from "./Iwo.js";
import { ju, nf } from "./agent_pb.js";
import { Dp, Mwi, Rqe, pd, wwi } from "./background_composer_pb.js";
import { _qt } from "./cacheFirstBlobStore.js";
import { Dog } from "./cloudAgentBlobPrefetchRequest.js";
import { sol } from "./cloudAgentLifecycleObservability.js";
import { sOm } from "./cloudAgentNameBlob.js";
import { Pog, Ymk } from "./cloudAgentStreamReadTimeout.js";
import { kEi } from "./cloudConversationTurnWindow.js";
import { dp } from "./connect.js";
import { Ag } from "./connectErrors.js";
import { bqt } from "./conversationStreamOffsets.js";
import { Fpe, UCt, qJr } from "./gYa.js";
import { Ng } from "./index_3.ts";
import { OT } from "./index_5.ts";
import { Xp, fJ } from "./ipa.js";
import { cp } from "./objects.js";
import { Kf, ca } from "./reactive.js";
import { E } from "./tslib.es6.js";
import { gT } from "./utils_24.js";
import { Hu } from "./utils_pb.js";
import { Ai, Xo } from "./uuid_2.js";
import { $t, Bs } from "./window.js";
import { rOm, vh } from "./yBp.js";
import { Rp } from "./ze.js";
var Jog, eag, aol, tag, lol, col, nag, uol, wEi, iag, rag, sag, oag, dol;
export { Jog, aol, col, dol, eag, iag, lol, nag, oag, rag, sag, tag, uol, wEi };
var __wakaru_CEi_initialized = false;
export function CEi() {
if (__wakaru_CEi_initialized) return;
__wakaru_CEi_initialized = true;
"use strict";
E(), Ng(), OT(), pd(), ju(), Hu(), Ei(), cp(), Xo(), Bs(), dp(), gT(), Ag(), Ymk(), bqt(), Kf(), sOm(), _qt(), Dog(), kEi(), sol(), Jog = "cloud_agent_stop_permanent_stream_reconnect", eag = Array.from({
    length: 256
}, (t, e)=>e.toString(16).padStart(2, "0")), aol = 10, tag = 1e3, lol = 3e4, col = 6e4, nag = .2, uol = 4, wEi = 6e4, iag = uol * wEi + lol, rag = 12e4, sag = 3, oag = "cloud_agent.stream_conversation.interaction_update_staleness_ms", dol = class {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p){
        this.bcId = t, this._listener = e, this._aiService = n, this._cacheService = i, this._structuredLogService = r, this._onWorkflowStatus = s, this._onNewInitialState = o, this._experimentService = a, this._onAgentName = l, this._metricsService = c, this._cachedStatePromise = u, this._turnWindowSize = d, this._workflowStatusHistory = p, this._abortController = new AbortController, this._requestId = Ai(), this._connected = new ca(!1), this.interactionQueryListeners = new Set, this.conversationStateListeners = new Set, this.admittedCustomModeStateListeners = new Set, this.videoAnnotationsBlobIdListeners = new Set, this.voiceCallsBlobIdListeners = new Set, this.suggestedRepoNamesListeners = new Set, this._conversationState = new ca(void 0), this._participantsByUserId = new Map, this._videoAnnotationsBlobIdState = {
            observed: !1,
            blobId: void 0
        }, this._voiceCallsBlobIdState = {
            observed: !1,
            blobId: void 0
        }, this._agentNameDecodeGeneration = 0, this._lastStreamActivityAtMs = Date.now(), this._lastFrameAtMs = Date.now(), this._attemptEndedByReadTimeout = !1, this._timedOutAttemptsWithoutOffsetProgress = 0, this._streamAttachedAtMs = Date.now(), this._userFacingErrorDetailsRevision = 0, this._streamError = new ca(void 0), this._pinnedWorkerOffline = new ca(!1), this._networkInitialStateSeen = new Promise((g)=>{
            this._resolveNetworkInitialStateSeen = g;
        }), this._aborted = !1, this._streamLoopExited = !1, this._terminalWorkflowStatusSeen = !1, this._terminalReconnectRequested = !1, this.getCurrentSubagentRunsByParentToolCallId = ()=>this._conversationState.value?.subagentRunsByParentToolCallId, this._cachedBlobKeys = h?.cachedBlobKeys ?? new Set, this._cacheFirstBlobStore = UCt({
            getBlobFromCache: (g)=>this._cacheService.getBlob(this.bcId, g),
            getBlobFromRemote: async (g)=>(await (await this._aiService.backgroundComposerClient()).getBlobForAgentKV(new Rqe({
                    bcId: this.bcId,
                    blobId: g
                }), {
                    signal: this._abortController.signal,
                    headers: vh(this._requestId)
                })).blobData,
            setBlobInCache: (g, f)=>{
                this._aborted || this._cacheService.setBlob(this.bcId, g, f);
            },
            onBlobResolved: (g)=>{
                this._cachedBlobKeys.add(kle(g));
            }
        }), this._blobStore = h ?? {
            getBlob: async (g, f)=>this._cacheFirstBlobStore.getBlob(f),
            hasBlobCached: (g)=>this._cachedBlobKeys.has(kle(g))
        }, this.ready = this._run();
    }
    get requestId() {
        return this._requestId;
    }
    get abortController() {
        return this._abortController;
    }
    get blobStore() {
        return this._blobStore;
    }
    get isAborted() {
        return this._aborted;
    }
    get connected() {
        return this._connected;
    }
    get conversationState() {
        return this._conversationState;
    }
    get participantsByUserId() {
        return this._participantsByUserId;
    }
    getLatestOffsetKey() {
        return this._latestOffsetKey;
    }
    getLatestAdmittedCustomModeStateBlobId() {
        return this._admittedCustomModeStateBlobId;
    }
    getLatestVideoAnnotationsBlobIdState() {
        return this._videoAnnotationsBlobIdState;
    }
    getLatestVoiceCallsBlobIdState() {
        return this._voiceCallsBlobIdState;
    }
    getConversationStateOffsetKey() {
        return this._conversationStateOffsetKey;
    }
    waitForNetworkInitialState() {
        return this._networkInitialStateSeen;
    }
    getLastStreamActivityAtMs() {
        return this._lastStreamActivityAtMs;
    }
    _markNetworkInitialStateSeen() {
        this._resolveNetworkInitialStateSeen?.(), this._resolveNetworkInitialStateSeen = void 0;
    }
    _advanceProcessedOffsetKey(t) {
        t === void 0 || t.length === 0 || (this._latestOffsetKey === void 0 || Fpe(t, this._latestOffsetKey) > 0) && (this._latestOffsetKey = t);
    }
    _recordInteractionUpdateStaleness(t) {
        if (this._metricsService === void 0 || t === void 0) return;
        const e = qJr(t);
        if (e === void 0) return;
        const n = e >= this._streamAttachedAtMs ? "live" : "catchup";
        this._metricsService.distribution({
            stat: oag,
            value: Date.now() - e,
            tags: {
                surface: "glass",
                stream_phase: n
            }
        });
    }
    _hasProcessedOffsetKey(t) {
        return this._latestOffsetKey !== void 0 && Fpe(t, this._latestOffsetKey) <= 0;
    }
    _isSupersededWorkflowStatus(t, e) {
        const n = this._workflowStatusHistory;
        if (n === void 0) return !1;
        const i = n.appliedOffsetKey();
        if (i !== void 0 && Fpe(e, i) <= 0) return !0;
        if (!ool(t)) return !1;
        const r = n.rowUpdatedAtMs(), s = qJr(e);
        return r !== void 0 && s !== void 0 && s < r;
    }
    _shouldApplyConversationState(t) {
        if (this._conversationState.value === void 0) return !0;
        const e = this._conversationStateOffsetKey;
        return e === void 0 || e.length === 0 ? !0 : t === void 0 || t.length === 0 ? !1 : Fpe(t, e) >= 0;
    }
    getLatestNumCompletedTurns() {
        return this._latestNumCompletedTurns;
    }
    getLatestSuggestedRepoNames() {
        return this._latestSuggestedRepoNames;
    }
    _adoptFirstNonEmptySuggestedRepoNames(t) {
        const e = t?.suggestedRepoNames;
        if (e === void 0 || e.length === 0 || this._latestSuggestedRepoNames !== void 0) return;
        const n = [
            ...e
        ];
        this._latestSuggestedRepoNames = n;
        for (const i of this.suggestedRepoNamesListeners)i(n);
    }
    _updateNumCompletedTurns(t) {
        t !== void 0 && (this._latestNumCompletedTurns === void 0 || t > this._latestNumCompletedTurns) && (this._latestNumCompletedTurns = t);
    }
    _updateAgentName(t) {
        const e = this._onAgentName;
        if (e === void 0 || t?.agentName === void 0 || t.agentName.length === 0) return;
        const n = kle(t.agentName);
        if (n === this._deliveredAgentNameBlobKey) return;
        const i = ++this._agentNameDecodeGeneration;
        rOm(t.agentName, (r)=>this._blobStore.getBlob(Xp(), r)).then((r)=>{
            this._aborted || i !== this._agentNameDecodeGeneration || r === void 0 || (this._deliveredAgentNameBlobKey = n, e(r));
        }).catch((r)=>{
            this._structuredLogService.warn("background_composer", "CloudAgentStream: failed to resolve streamed agent name", {
                bcId: this.bcId,
                requestId: this._requestId,
                error: r instanceof Error ? r.message : String(r)
            });
        });
    }
    _updateAdmittedCustomModeStateBlobId(t) {
        const e = t !== void 0 && t.length > 0 ? t : void 0, n = this._admittedCustomModeStateBlobId;
        if (!(n === void 0 && e === void 0 || n !== void 0 && e !== void 0 && kle(n) === kle(e))) {
            this._admittedCustomModeStateBlobId = e;
            for (const i of this.admittedCustomModeStateListeners)i(e);
        }
    }
    _updateVideoAnnotationsBlobId(t) {
        const e = Qog(this._videoAnnotationsBlobIdState, t);
        if (e !== void 0) {
            this._videoAnnotationsBlobIdState = e;
            for (const n of this.videoAnnotationsBlobIdListeners)n(e);
        }
    }
    _updateVoiceCallsBlobId(t) {
        const e = Qog(this._voiceCallsBlobIdState, t);
        if (e !== void 0) {
            this._voiceCallsBlobIdState = e;
            for (const n of this.voiceCallsBlobIdListeners)n(e);
        }
    }
    getLatestUserFacingErrorDetails() {
        return this._latestUserFacingErrorDetails;
    }
    getLatestResubmitSkippedOffsetKey() {
        return this._latestResubmitSkippedOffsetKey;
    }
    _setLatestUserFacingErrorDetails(t, e) {
        this._userFacingErrorDetailsRevision++, this._latestUserFacingErrorDetails = t ? {
            errorMessage: t.errorMessage,
            errorCode: t.errorCode,
            ...t.errorDetails !== void 0 ? {
                errorDetails: t.errorDetails
            } : {}
        } : void 0, t?.errorCode === "ResubmitSkipped" && e !== void 0 ? this._latestResubmitSkippedOffsetKey = e : t !== void 0 && (this._latestResubmitSkippedOffsetKey = void 0);
    }
    clearUserFacingErrorDetails() {
        this.clearUserFacingErrorDetailsWithRestore();
    }
    clearUserFacingErrorDetailsWithRestore() {
        const t = this._latestUserFacingErrorDetails, e = this._latestResubmitSkippedOffsetKey;
        this._latestUserFacingErrorDetails = void 0, this._latestResubmitSkippedOffsetKey = void 0;
        const n = ++this._userFacingErrorDetailsRevision;
        return ()=>{
            this._userFacingErrorDetailsRevision === n && (this._latestUserFacingErrorDetails = t, this._latestResubmitSkippedOffsetKey = e, this._userFacingErrorDetailsRevision++);
        };
    }
    get streamError() {
        return this._streamError;
    }
    clearStreamError() {
        this._setStreamError(void 0);
    }
    get pinnedWorkerOffline() {
        return this._pinnedWorkerOffline;
    }
    _setStreamError(t) {
        Rp(this._streamError.value, t) || this._streamError.set(t);
    }
    _applyWorkflowStatusToStreamError(t) {
        if (this._terminalWorkflowStatusSeen = ool(t), t === Dp.ERROR) {
            const e = this._latestUserFacingErrorDetails?.errorMessage?.trim();
            this._setStreamError({
                kind: "terminal",
                status: "error",
                ...e !== void 0 && e.length > 0 ? {
                    errorMessage: e
                } : {},
                ...this._latestUserFacingErrorDetails?.errorCode !== void 0 ? {
                    errorCode: this._latestUserFacingErrorDetails.errorCode
                } : {},
                ...this._latestUserFacingErrorDetails?.errorDetails !== void 0 ? {
                    errorDetails: this._latestUserFacingErrorDetails.errorDetails
                } : {}
            });
        } else t === Dp.EXPIRED ? this._setStreamError({
            kind: "terminal",
            status: "expired"
        }) : this._setStreamError(void 0);
    }
    debugInjectStreamMessage(t) {
        this._aborted || this._handleStreamMessage(t, {
            readyState: {
                resolved: !0,
                lastInitialStateResolved: void 0
            },
            resolve: ()=>{}
        });
    }
    abort() {
        this._aborted || (this._aborted = !0, this._agentNameDecodeGeneration++, this._connected.set(!1), this._abortController.abort(), this._wakeRetryBackoff?.(), this._wakeTerminalReconnect?.(), this._readySettlement?.reject(new Hc), this._markNetworkInitialStateSeen(), this._cacheFirstBlobStore.clear());
    }
    requestReconnect() {
        this._wakeRetryBackoff?.(), this._terminalWorkflowStatusSeen && (this._terminalReconnectRequested = !0, this._wakeTerminalReconnect?.());
    }
    get terminalParked() {
        return this._terminalWorkflowStatusSeen && !this._aborted;
    }
    get streamLoopExited() {
        return this._streamLoopExited;
    }
    _run() {
        return new Promise((t, e)=>{
            const n = ugk(t, e);
            this._readySettlement = n, this._bootstrapReadyAndStream(n).catch((i)=>{
                n.reject(i);
            }).finally(()=>{
                this._streamLoopExited = !0;
            });
        });
    }
    async _bootstrapReadyAndStream(t) {
        const [e, n] = await Promise.all([
            this._cachedStatePromise ?? this._cacheService.loadState(this.bcId).catch(()=>{}),
            this._cacheService.listBlobs(this.bcId).catch(()=>[])
        ]);
        if (this._aborted) return;
        for (const r of n)this._cachedBlobKeys.add(kle(r));
        const i = {
            resolved: !1,
            lastInitialStateResolved: void 0
        };
        e?.state && (this._conversationState.set(e.state), this._conversationStateOffsetKey = e.offsetKey, this._advanceProcessedOffsetKey(e.offsetKey), i.lastInitialStateResolved = e.state, i.resolved = !0, t.resolve(e.state)), await this._runStreamWithRetry({
            cachedState: e,
            cachedBlobIds: n,
            readyState: i,
            resolve: t.resolve,
            reject: t.reject
        });
    }
    async _runStreamWithRetry(t) {
        let e = 0, n = 0;
        for(; !this._aborted;){
            let i = !1;
            try {
                if (await this._runStreamAttempt(e, t, ()=>{
                    i = !0;
                }), this._terminalWorkflowStatusSeen) {
                    if (await this._waitForTerminalReconnect(), this._aborted) return;
                    e = 1;
                }
            } catch (r) {
                if (t.readyState.resolved) {
                    if (this._abortController.signal.aborted) return;
                    if (this._experimentService?.checkFeatureGate(Jog, {
                        disableExposureLog: !0
                    }) === !0 && cgk(r)) {
                        this._structuredLogService.warn("background_composer", "CloudAgentStream: stopping reconnect after permanent stream error", {
                            bcId: this.bcId,
                            requestId: this._requestId,
                            lastOffsetKey: this._latestOffsetKey,
                            error: nol(r)
                        });
                        return;
                    }
                } else {
                    n++;
                    const o = Kxn({
                        error: r,
                        signalAborted: this._abortController.signal.aborted
                    });
                    if (this._abortController.signal.aborted || !Gog(o, r) || n >= uol) {
                        this._abortController.signal.aborted || this._structuredLogService.error("background_composer", "CloudAgentStream: stream failed before ready", void 0, {
                            bcId: this.bcId,
                            requestId: this._requestId,
                            preReadyAttempts: n,
                            classificationOutcome: o.outcome,
                            connectErrorCode: o.connectErrorCodeName,
                            error: nol(r)
                        }), t.reject(r), t.readyState.resolved = !0;
                        return;
                    }
                }
                i && (e = 0), e++;
                const s = this._getRetryDelayMs(e);
                this._structuredLogService.warn("background_composer", "CloudAgentStream: reconnecting after stream error", {
                    bcId: this.bcId,
                    requestId: this._requestId,
                    retryCount: e,
                    steadyStateRetryDelayMs: e > aol ? col : void 0,
                    delayMs: Math.round(s),
                    lastOffsetKey: this._latestOffsetKey,
                    error: r instanceof Error ? r.message : String(r)
                }), await this._waitForRetry(s);
            }
        }
        this._aborted && !t.readyState.resolved && (t.reject(new Hc), t.readyState.resolved = !0);
    }
    async _runStreamAttempt(t, e, n) {
        const i = t > 0;
        this._terminalWorkflowStatusSeen = !1, this._terminalReconnectRequested = !1, i && this._attemptEndedByReadTimeout && this._latestOffsetKey === this._offsetKeyAtAttemptStart ? this._timedOutAttemptsWithoutOffsetProgress++ : this._timedOutAttemptsWithoutOffsetProgress = 0, this._offsetKeyAtAttemptStart = this._latestOffsetKey, this._attemptEndedByReadTimeout = !1;
        const r = this._experimentService?.getDynamicConfig("cloud_agent_stream_reattach", {
            disableExposureLog: !0
        }), s = r?.enabled ?? !0, o = r?.rehydrateAfterMs ?? rag, a = s && i && Date.now() - this._lastFrameAtMs >= o, l = s && i && this._timedOutAttemptsWithoutOffsetProgress >= sag, u = i && !a && !l ? this._latestOffsetKey : void 0, d = i ? Array.from(this._cachedBlobKeys).map((I)=>fJ(I)) : e.cachedBlobIds, h = Mog(d), p = await this._aiService.backgroundComposerClient();
        let g = !1;
        const f = new AbortController, _ = AbortSignal.any([
            this._abortController.signal,
            f.signal
        ]);
        let b = Date.now(), y = !1;
        const S = new Pog, k = Math.min(5e3, Math.max(1e3, Math.floor(wEi / 12))), C = $t.setInterval(()=>{
            if (!y && Date.now() - b > wEi) {
                const I = new Error(`CloudAgentStream timed out waiting ${wEi}ms for stream response for bcId ${this.bcId}`);
                y = S.reject(I), y && (this._attemptEndedByReadTimeout = !0, f.abort());
            }
        }, k), T = ()=>S.reject(new Hc);
        _.addEventListener("abort", T, {
            once: !0
        });
        try {
            this._streamAttachedAtMs = Date.now();
            const I = p.streamConversation(new Mwi({
                bcId: this.bcId,
                offsetKey: u,
                purpose: wwi.LIVE,
                includeStreamHeartbeats: !0,
                filterHeavyStepData: !0,
                shouldSendPrefetchedBlobsFirst: !0,
                prefetchOnlyLastStepPerTurn: !0,
                maxBlobsAfterPrefetch: 30,
                ...Bog(this._turnWindowSize),
                preFetchedBlobIds: h.preFetchedBlobIds,
                preFetchedBlobFilter: h.preFetchedBlobFilter
            }), {
                signal: _,
                headers: vh(this._requestId)
            });
            g = !0, this._connected.set(!0);
            const A = I[Symbol.asyncIterator]();
            for(b = Date.now();;){
                if (_.aborted) throw new Hc;
                const P = await S.readNext(A);
                if (b = Date.now(), this._aborted) return;
                if (P.done) break;
                const M = P.value;
                if (this._lastFrameAtMs = b, M.message.case !== "streamHeartbeat" && (this._lastStreamActivityAtMs = b, n(), this._handleStreamMessage(M, e), this._terminalWorkflowStatusSeen)) break;
            }
            if (e.readyState.resolved || (e.readyState.resolved = !0, this._structuredLogService.warn("background_composer", "CloudAgentStream: stream ended before initialState", {
                bcId: this.bcId,
                requestId: this._requestId,
                hadCachedState: !!e.cachedState?.state
            }), e.cachedState?.state ? (e.readyState.lastInitialStateResolved = e.cachedState.state, e.resolve(e.cachedState.state)) : e.reject(new Error(`CloudAgentStream ended before initialState for bcId ${this.bcId}`))), this._abortController.signal.aborted || this._terminalWorkflowStatusSeen) return;
            throw new Error(`CloudAgentStream ended unexpectedly for bcId ${this.bcId}`);
        } finally{
            $t.clearInterval(C), _.removeEventListener("abort", T), g && this._connected.set(!1), f.abort();
        }
    }
    _handleStreamMessage(t, e) {
        if (!this._aborted) switch(t.message.case){
            case "prefetchedBlobs":
                this._cacheBlobs(t.message.value.preFetchedBlobs);
                break;
            case "initialState":
                {
                    this._cacheBlobs(t.message.value.preFetchedBlobs), this._recordUserDisplayInfos(t.message.value.userDisplayInfos), this._markNetworkInitialStateSeen();
                    const n = t.message.value.cloudAgentState, i = n?.conversationState ?? new nf, r = n?.lastInteractionUpdateOffsetKey, s = t.message.value.workflowStatus;
                    if ((this._pinnedWorkerOfflineOffsetKey === void 0 || r && Fpe(r, this._pinnedWorkerOfflineOffsetKey) > 0 || s !== Dp.UNSPECIFIED && s !== Dp.RUNNING) && this._pinnedWorkerOffline.set(!1), !this._shouldApplyConversationState(r || void 0)) {
                        if (this._structuredLogService.warn("background_composer", "CloudAgentStream: skipping stale initialState snapshot", {
                            bcId: this.bcId,
                            requestId: this._requestId,
                            snapshotOffsetKey: r,
                            currentStateOffsetKey: this._conversationStateOffsetKey
                        }), this._setLatestUserFacingErrorDetails(n?.userFacingErrorDetails, r || void 0), this._adoptFirstNonEmptySuggestedRepoNames(n), t.message.value.workflowStatus !== Dp.UNSPECIFIED && (this._applyWorkflowStatusToStreamError(t.message.value.workflowStatus), this._onWorkflowStatus?.(t.message.value.workflowStatus, r)), !e.readyState.resolved) {
                            const o = this._conversationState.value ?? i;
                            e.readyState.resolved = !0, e.readyState.lastInitialStateResolved = o, e.resolve(o);
                        }
                        break;
                    }
                    this._updateNumCompletedTurns(n?.numCompletedTurns), this._updateAgentName(n), this._adoptFirstNonEmptySuggestedRepoNames(n), this._updateAdmittedCustomModeStateBlobId(n?.admittedCustomModeStateBlobId), this._updateVideoAnnotationsBlobId(n?.videoAnnotationsBlobId), this._updateVoiceCallsBlobId(n?.voiceCallsBlobId), this._setLatestUserFacingErrorDetails(n?.userFacingErrorDetails, r || void 0), r && (this._advanceProcessedOffsetKey(r), this._conversationStateOffsetKey = r, this._cacheService.saveState(this.bcId, i, r)), this._conversationState.set(i);
                    for (const o of this.conversationStateListeners)o();
                    t.message.value.workflowStatus !== Dp.UNSPECIFIED && (this._applyWorkflowStatusToStreamError(t.message.value.workflowStatus), this._onWorkflowStatus?.(t.message.value.workflowStatus, r)), e.readyState.resolved ? (e.readyState.lastInitialStateResolved === void 0 || !nf.equals(e.readyState.lastInitialStateResolved, i)) && (e.readyState.lastInitialStateResolved = i, this._onNewInitialState?.(i)) : (e.readyState.resolved = !0, e.readyState.lastInitialStateResolved = i, e.resolve(i));
                    break;
                }
            case "cloudAgentStateWithIdAndOffset":
                {
                    this._cacheBlobs(t.message.value.preFetchedBlobs), this._recordUserDisplayInfos(t.message.value.userDisplayInfos);
                    const n = t.message.value.offsetKey;
                    if (n && this._hasProcessedOffsetKey(n)) break;
                    const i = t.message.value.cloudAgentState;
                    this._updateNumCompletedTurns(i?.numCompletedTurns), this._updateAgentName(i), this._adoptFirstNonEmptySuggestedRepoNames(i), this._updateAdmittedCustomModeStateBlobId(i?.admittedCustomModeStateBlobId), this._updateVideoAnnotationsBlobId(i?.videoAnnotationsBlobId), this._updateVoiceCallsBlobId(i?.voiceCallsBlobId), this._setLatestUserFacingErrorDetails(i?.userFacingErrorDetails, n || void 0), i?.userFacingErrorDetails && this._streamError.value?.kind === "terminal" && this._streamError.value.status === "error" && this._applyWorkflowStatusToStreamError(Dp.ERROR), this._advanceProcessedOffsetKey(n);
                    const r = i?.lastInteractionUpdateOffsetKey || void 0;
                    r && this._pinnedWorkerOfflineOffsetKey !== void 0 && Fpe(r, this._pinnedWorkerOfflineOffsetKey) > 0 && this._pinnedWorkerOffline.set(!1);
                    const s = r ?? n;
                    if (i?.conversationState && this._shouldApplyConversationState(s || void 0)) {
                        s && (this._conversationStateOffsetKey = s, this._cacheService.saveState(this.bcId, i.conversationState, s)), this._conversationState.set(i.conversationState);
                        for (const o of this.conversationStateListeners)o();
                    }
                    break;
                }
            case "interactionUpdateWithOffset":
                {
                    this._recordUserDisplayInfos(t.message.value.userDisplayInfos);
                    const n = t.message.value.interactionUpdate, i = t.message.value.offsetKey;
                    if (i && this._hasProcessedOffsetKey(i)) break;
                    this._recordInteractionUpdateStaleness(i), this._advanceProcessedOffsetKey(i), this._streamError.value?.kind === "transient" && this._setStreamError(void 0), this._pinnedWorkerOffline.set(!1), n && this._listener(n, i || void 0);
                    break;
                }
            case "interactionQueryWithOffset":
                {
                    const n = t.message.value.interactionQuery, i = t.message.value.offsetKey;
                    if (i && this._hasProcessedOffsetKey(i)) break;
                    if (this._advanceProcessedOffsetKey(i), n) for (const r of this.interactionQueryListeners)r(n);
                    break;
                }
            case "workflowStatusWithOffset":
                {
                    const n = t.message.value.offsetKey;
                    if (n && this._hasProcessedOffsetKey(n)) break;
                    this._advanceProcessedOffsetKey(n);
                    const i = t.message.value.workflowStatus;
                    if (i !== Dp.RUNNING && this._pinnedWorkerOffline.set(!1), n) {
                        if (this._isSupersededWorkflowStatus(i, n)) break;
                        this._workflowStatusHistory?.recordApplied(n);
                    }
                    i !== Dp.ERROR && this._setLatestUserFacingErrorDetails(void 0, n || void 0), this._applyWorkflowStatusToStreamError(i), this._onWorkflowStatus?.(i, n);
                    break;
                }
            case "workerLifecycleEventWithOffset":
                {
                    const n = t.message.value.offsetKey;
                    if (n && this._hasProcessedOffsetKey(n)) break;
                    this._advanceProcessedOffsetKey(n);
                    const i = t.message.value.workerLifecycleEvent?.event;
                    i?.case === "pinnedWorkerOffline" ? (this._pinnedWorkerOfflineOffsetKey = n || void 0, this._pinnedWorkerOffline.set(!0)) : i?.case === "pinnedWorkerReconnected" && this._pinnedWorkerOffline.set(!1);
                    break;
                }
            case "transientErrorWithOffset":
                {
                    const n = t.message.value.offsetKey;
                    if (n && this._hasProcessedOffsetKey(n) || (this._advanceProcessedOffsetKey(n), this._streamError.value?.kind === "terminal")) break;
                    const i = t.message.value.transientError?.errorMessage.trim();
                    this._setStreamError(i !== void 0 && i.length > 0 ? {
                        kind: "transient",
                        errorMessage: i
                    } : void 0);
                    break;
                }
            case "streamSignal":
            case "readOnlySharedPodLifecycleEventWithOffset":
            case "devBannerMessage":
            case "streamHeartbeat":
            case "interactionSettledWithOffset":
            case void 0:
                break;
            default:
                {
                    const n = t.message;
                    break;
                }
        }
    }
    _cacheBlobs(t) {
        for (const e of t)this._cachedBlobKeys.add(kle(e.id)), this._cacheService.setBlob(this.bcId, e.id, e.value);
    }
    _recordUserDisplayInfos(t) {
        if (t !== void 0) for (const e of t)e.userId !== 0 && this._participantsByUserId.set(e.userId, {
            displayName: e.displayName,
            email: e.email
        });
    }
    _getRetryDelayMs(t) {
        if (t > aol) return col;
        const e = Math.min(tag * Math.pow(2, Math.max(0, t - 1)), lol), n = e * nag, i = Math.random() * (n * 2) - n;
        return Math.max(0, Math.round(e + i));
    }
    async _waitForRetry(t) {
        this._abortController.signal.aborted || await new Promise((e)=>{
            let n = !1;
            const i = ()=>{
                n || (n = !0, clearTimeout(r), this._abortController.signal.removeEventListener("abort", s), this._wakeRetryBackoff = void 0, e());
            }, r = setTimeout(i, t), s = ()=>i();
            this._abortController.signal.addEventListener("abort", s, {
                once: !0
            }), this._wakeRetryBackoff = i;
        });
    }
    async _waitForTerminalReconnect() {
        if (this._terminalReconnectRequested) {
            this._terminalReconnectRequested = !1;
            return;
        }
        this._abortController.signal.aborted || await new Promise((t)=>{
            let e = !1;
            const n = ()=>{
                e || (e = !0, this._abortController.signal.removeEventListener("abort", n), this._wakeTerminalReconnect = void 0, this._terminalReconnectRequested = !1, t());
            };
            this._abortController.signal.addEventListener("abort", n, {
                once: !0
            }), this._wakeTerminalReconnect = n, this._terminalReconnectRequested && n();
        });
    }
};

}
