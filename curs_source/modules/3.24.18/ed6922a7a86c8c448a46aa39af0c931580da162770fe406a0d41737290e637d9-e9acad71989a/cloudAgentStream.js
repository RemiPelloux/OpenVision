import { td, wVd } from "./A3u.js";
import { qW, qh } from "./De_3.js";
import { Rl, si } from "./HVr.js";
import { Hm, zd } from "./agent_pb.js";
import { VNn, Yd, e2n, hPe, hm } from "./background_composer_pb.js";
import { iwt } from "./cacheFirstBlobStore.js";
import { BSh, CSh, Kqv, QX, RSh, XVt, Yqv, _Sh, lCo, sCo } from "./cgh.js";
import { bSh } from "./cloudAgentBlobPrefetchRequest.js";
import { cCo } from "./cloudAgentLifecycleObservability.js";
import { CVd } from "./cloudAgentNameBlob.js";
import { Lqv, vSh } from "./cloudAgentStreamReadTimeout.js";
import { u3n } from "./cloudConversationTurnWindow.js";
import { hg } from "./connect.js";
import { TN } from "./connectErrors.js";
import { rwt } from "./conversationStreamOffsets.js";
import { Gp } from "./index_3.ts";
import { A1 } from "./index_5.ts";
import { bu } from "./objects.js";
import { yh } from "./qIc.js";
import { N1, gh } from "./reactive.js";
import { x } from "./tslib.es6.js";
import { Fw } from "./utils_24.js";
import { hu } from "./utils_pb.js";
import { Js, zn } from "./uuid.js";
import { lo, on } from "./window.js";
import { Net, Wqi, zee } from "./xmo.js";
var USh, $Sh, uCo, HSh, dCo, hCo, WSh, pCo, d3n, GSh, VSh, jSh, qSh, mCo;
export { $Sh, GSh, HSh, USh, VSh, WSh, d3n, dCo, hCo, jSh, mCo, pCo, qSh, uCo };
var __wakaru_h3n_initialized = false;
export function h3n() {
if (__wakaru_h3n_initialized) return;
__wakaru_h3n_initialized = true;
"use strict";
x(), Gp(), A1(), hm(), zd(), hu(), si(), bu(), Js(), lo(), hg(), Fw(), TN(), Lqv(), rwt(), N1(), CVd(), iwt(), bSh(), u3n(), cCo(), USh = "cloud_agent_stop_permanent_stream_reconnect", $Sh = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, "0")), uCo = 10, HSh = 1e3, dCo = 3e4, hCo = 6e4, WSh = .2, pCo = 4, d3n = 6e4, GSh = pCo * d3n + dCo, VSh = 12e4, jSh = 3, qSh = "cloud_agent.stream_conversation.interaction_update_staleness_ms", mCo = class {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g){
        this.bcId = e, this._listener = t, this._aiService = n, this._cacheService = i, this._structuredLogService = r, this._onWorkflowStatus = s, this._onNewInitialState = o, this._experimentService = a, this._onAgentName = c, this._metricsService = l, this._cachedStatePromise = u, this._turnWindowSize = h, this._workflowStatusHistory = g, this._abortController = new AbortController, this._requestId = zn(), this._connected = new gh(!1), this.interactionQueryListeners = new Set, this.conversationStateListeners = new Set, this.admittedCustomModeStateListeners = new Set, this.videoAnnotationsBlobIdListeners = new Set, this.voiceCallsBlobIdListeners = new Set, this.suggestedRepoNamesListeners = new Set, this._conversationState = new gh(void 0), this._participantsByUserId = new Map, this._videoAnnotationsBlobIdState = {
            observed: !1,
            blobId: void 0
        }, this._voiceCallsBlobIdState = {
            observed: !1,
            blobId: void 0
        }, this._agentNameDecodeGeneration = 0, this._lastStreamActivityAtMs = Date.now(), this._lastFrameAtMs = Date.now(), this._attemptEndedByReadTimeout = !1, this._timedOutAttemptsWithoutOffsetProgress = 0, this._streamAttachedAtMs = Date.now(), this._userFacingErrorDetailsRevision = 0, this._streamError = new gh(void 0), this._pinnedWorkerOffline = new gh(!1), this._networkInitialStateSeen = new Promise((f)=>{
            this._resolveNetworkInitialStateSeen = f;
        }), this._aborted = !1, this._streamLoopExited = !1, this._terminalWorkflowStatusSeen = !1, this._terminalReconnectRequested = !1, this.getCurrentSubagentRunsByParentToolCallId = ()=>this._conversationState.value?.subagentRunsByParentToolCallId, this._cachedBlobKeys = p?.cachedBlobKeys ?? new Set, this._cacheFirstBlobStore = Net({
            getBlobFromCache: (f)=>this._cacheService.getBlob(this.bcId, f),
            getBlobFromRemote: async (f)=>(await (await this._aiService.backgroundComposerClient()).getBlobForAgentKV(new hPe({
                    bcId: this.bcId,
                    blobId: f
                }), {
                    signal: this._abortController.signal,
                    headers: td(this._requestId)
                })).blobData,
            setBlobInCache: (f, v)=>{
                this._aborted || this._cacheService.setBlob(this.bcId, f, v);
            },
            onBlobResolved: (f)=>{
                this._cachedBlobKeys.add(QX(f));
            }
        }), this._blobStore = p ?? {
            getBlob: async (f, v)=>this._cacheFirstBlobStore.getBlob(v),
            hasBlobCached: (f)=>this._cachedBlobKeys.has(QX(f))
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
    _advanceProcessedOffsetKey(e) {
        e === void 0 || e.length === 0 || (this._latestOffsetKey === void 0 || zee(e, this._latestOffsetKey) > 0) && (this._latestOffsetKey = e);
    }
    _recordInteractionUpdateStaleness(e) {
        if (this._metricsService === void 0 || e === void 0) return;
        const t = Wqi(e);
        if (t === void 0) return;
        const n = t >= this._streamAttachedAtMs ? "live" : "catchup";
        this._metricsService.distribution({
            stat: qSh,
            value: Date.now() - t,
            tags: {
                surface: "glass",
                stream_phase: n
            }
        });
    }
    _hasProcessedOffsetKey(e) {
        return this._latestOffsetKey !== void 0 && zee(e, this._latestOffsetKey) <= 0;
    }
    _isSupersededWorkflowStatus(e, t) {
        const n = this._workflowStatusHistory;
        if (n === void 0) return !1;
        const i = n.appliedOffsetKey();
        if (i !== void 0 && zee(t, i) <= 0) return !0;
        if (!lCo(e)) return !1;
        const r = n.rowUpdatedAtMs(), s = Wqi(t);
        return r !== void 0 && s !== void 0 && s < r;
    }
    _shouldApplyConversationState(e) {
        if (this._conversationState.value === void 0) return !0;
        const t = this._conversationStateOffsetKey;
        return t === void 0 || t.length === 0 ? !0 : e === void 0 || e.length === 0 ? !1 : zee(e, t) >= 0;
    }
    getLatestNumCompletedTurns() {
        return this._latestNumCompletedTurns;
    }
    getLatestSuggestedRepoNames() {
        return this._latestSuggestedRepoNames;
    }
    _adoptFirstNonEmptySuggestedRepoNames(e) {
        const t = e?.suggestedRepoNames;
        if (t === void 0 || t.length === 0 || this._latestSuggestedRepoNames !== void 0) return;
        const n = [
            ...t
        ];
        this._latestSuggestedRepoNames = n;
        for (const i of this.suggestedRepoNamesListeners)i(n);
    }
    _updateNumCompletedTurns(e) {
        e !== void 0 && (this._latestNumCompletedTurns === void 0 || e > this._latestNumCompletedTurns) && (this._latestNumCompletedTurns = e);
    }
    _updateAgentName(e) {
        const t = this._onAgentName;
        if (t === void 0 || e?.agentName === void 0 || e.agentName.length === 0) return;
        const n = QX(e.agentName);
        if (n === this._deliveredAgentNameBlobKey) return;
        const i = ++this._agentNameDecodeGeneration;
        wVd(e.agentName, (r)=>this._blobStore.getBlob(qh(), r)).then((r)=>{
            this._aborted || i !== this._agentNameDecodeGeneration || r === void 0 || (this._deliveredAgentNameBlobKey = n, t(r));
        }).catch((r)=>{
            this._structuredLogService.warn("background_composer", "CloudAgentStream: failed to resolve streamed agent name", {
                bcId: this.bcId,
                requestId: this._requestId,
                error: r instanceof Error ? r.message : String(r)
            });
        });
    }
    _updateAdmittedCustomModeStateBlobId(e) {
        const t = e !== void 0 && e.length > 0 ? e : void 0, n = this._admittedCustomModeStateBlobId;
        if (!(n === void 0 && t === void 0 || n !== void 0 && t !== void 0 && QX(n) === QX(t))) {
            this._admittedCustomModeStateBlobId = t;
            for (const i of this.admittedCustomModeStateListeners)i(t);
        }
    }
    _updateVideoAnnotationsBlobId(e) {
        const t = BSh(this._videoAnnotationsBlobIdState, e);
        if (t !== void 0) {
            this._videoAnnotationsBlobIdState = t;
            for (const n of this.videoAnnotationsBlobIdListeners)n(t);
        }
    }
    _updateVoiceCallsBlobId(e) {
        const t = BSh(this._voiceCallsBlobIdState, e);
        if (t !== void 0) {
            this._voiceCallsBlobIdState = t;
            for (const n of this.voiceCallsBlobIdListeners)n(t);
        }
    }
    getLatestUserFacingErrorDetails() {
        return this._latestUserFacingErrorDetails;
    }
    getLatestResubmitSkippedOffsetKey() {
        return this._latestResubmitSkippedOffsetKey;
    }
    _setLatestUserFacingErrorDetails(e, t) {
        this._userFacingErrorDetailsRevision++, this._latestUserFacingErrorDetails = e ? {
            errorMessage: e.errorMessage,
            errorCode: e.errorCode,
            ...e.errorDetails !== void 0 ? {
                errorDetails: e.errorDetails
            } : {}
        } : void 0, e?.errorCode === "ResubmitSkipped" && t !== void 0 ? this._latestResubmitSkippedOffsetKey = t : e !== void 0 && (this._latestResubmitSkippedOffsetKey = void 0);
    }
    clearUserFacingErrorDetails() {
        this.clearUserFacingErrorDetailsWithRestore();
    }
    clearUserFacingErrorDetailsWithRestore() {
        const e = this._latestUserFacingErrorDetails, t = this._latestResubmitSkippedOffsetKey;
        this._latestUserFacingErrorDetails = void 0, this._latestResubmitSkippedOffsetKey = void 0;
        const n = ++this._userFacingErrorDetailsRevision;
        return ()=>{
            this._userFacingErrorDetailsRevision === n && (this._latestUserFacingErrorDetails = e, this._latestResubmitSkippedOffsetKey = t, this._userFacingErrorDetailsRevision++);
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
    _setStreamError(e) {
        yh(this._streamError.value, e) || this._streamError.set(e);
    }
    _applyWorkflowStatusToStreamError(e) {
        if (this._terminalWorkflowStatusSeen = lCo(e), e === Yd.ERROR) {
            const t = this._latestUserFacingErrorDetails?.errorMessage?.trim();
            this._setStreamError({
                kind: "terminal",
                status: "error",
                ...t !== void 0 && t.length > 0 ? {
                    errorMessage: t
                } : {},
                ...this._latestUserFacingErrorDetails?.errorCode !== void 0 ? {
                    errorCode: this._latestUserFacingErrorDetails.errorCode
                } : {},
                ...this._latestUserFacingErrorDetails?.errorDetails !== void 0 ? {
                    errorDetails: this._latestUserFacingErrorDetails.errorDetails
                } : {}
            });
        } else e === Yd.EXPIRED ? this._setStreamError({
            kind: "terminal",
            status: "expired"
        }) : this._setStreamError(void 0);
    }
    debugInjectStreamMessage(e) {
        this._aborted || this._handleStreamMessage(e, {
            readyState: {
                resolved: !0,
                lastInitialStateResolved: void 0
            },
            resolve: ()=>{}
        });
    }
    abort() {
        this._aborted || (this._aborted = !0, this._agentNameDecodeGeneration++, this._connected.set(!1), this._abortController.abort(), this._wakeRetryBackoff?.(), this._wakeTerminalReconnect?.(), this._readySettlement?.reject(new Rl), this._markNetworkInitialStateSeen(), this._cacheFirstBlobStore.clear());
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
        return new Promise((e, t)=>{
            const n = Yqv(e, t);
            this._readySettlement = n, this._bootstrapReadyAndStream(n).catch((i)=>{
                n.reject(i);
            }).finally(()=>{
                this._streamLoopExited = !0;
            });
        });
    }
    async _bootstrapReadyAndStream(e) {
        const [t, n] = await Promise.all([
            this._cachedStatePromise ?? this._cacheService.loadState(this.bcId).catch(()=>{}),
            this._cacheService.listBlobs(this.bcId).catch(()=>[])
        ]);
        if (this._aborted) return;
        for (const r of n)this._cachedBlobKeys.add(QX(r));
        const i = {
            resolved: !1,
            lastInitialStateResolved: void 0
        };
        t?.state && (this._conversationState.set(t.state), this._conversationStateOffsetKey = t.offsetKey, this._advanceProcessedOffsetKey(t.offsetKey), i.lastInitialStateResolved = t.state, i.resolved = !0, e.resolve(t.state)), await this._runStreamWithRetry({
            cachedState: t,
            cachedBlobIds: n,
            readyState: i,
            resolve: e.resolve,
            reject: e.reject
        });
    }
    async _runStreamWithRetry(e) {
        let t = 0, n = 0;
        for(; !this._aborted;){
            let i = !1;
            try {
                if (await this._runStreamAttempt(t, e, ()=>{
                    i = !0;
                }), this._terminalWorkflowStatusSeen) {
                    if (await this._waitForTerminalReconnect(), this._aborted) return;
                    t = 1;
                }
            } catch (r) {
                if (e.readyState.resolved) {
                    if (this._abortController.signal.aborted) return;
                    if (this._experimentService?.checkFeatureGate(USh, {
                        disableExposureLog: !0
                    }) === !0 && Kqv(r)) {
                        this._structuredLogService.warn("background_composer", "CloudAgentStream: stopping reconnect after permanent stream error", {
                            bcId: this.bcId,
                            requestId: this._requestId,
                            lastOffsetKey: this._latestOffsetKey,
                            error: sCo(r)
                        });
                        return;
                    }
                } else {
                    n++;
                    const o = XVt({
                        error: r,
                        signalAborted: this._abortController.signal.aborted
                    });
                    if (this._abortController.signal.aborted || !RSh(o, r) || n >= pCo) {
                        this._abortController.signal.aborted || this._structuredLogService.error("background_composer", "CloudAgentStream: stream failed before ready", void 0, {
                            bcId: this.bcId,
                            requestId: this._requestId,
                            preReadyAttempts: n,
                            classificationOutcome: o.outcome,
                            connectErrorCode: o.connectErrorCodeName,
                            error: sCo(r)
                        }), e.reject(r), e.readyState.resolved = !0;
                        return;
                    }
                }
                i && (t = 0), t++;
                const s = this._getRetryDelayMs(t);
                this._structuredLogService.warn("background_composer", "CloudAgentStream: reconnecting after stream error", {
                    bcId: this.bcId,
                    requestId: this._requestId,
                    retryCount: t,
                    steadyStateRetryDelayMs: t > uCo ? hCo : void 0,
                    delayMs: Math.round(s),
                    lastOffsetKey: this._latestOffsetKey,
                    error: r instanceof Error ? r.message : String(r)
                }), await this._waitForRetry(s);
            }
        }
        this._aborted && !e.readyState.resolved && (e.reject(new Rl), e.readyState.resolved = !0);
    }
    async _runStreamAttempt(e, t, n) {
        const i = e > 0;
        this._terminalWorkflowStatusSeen = !1, this._terminalReconnectRequested = !1, i && this._attemptEndedByReadTimeout && this._latestOffsetKey === this._offsetKeyAtAttemptStart ? this._timedOutAttemptsWithoutOffsetProgress++ : this._timedOutAttemptsWithoutOffsetProgress = 0, this._offsetKeyAtAttemptStart = this._latestOffsetKey, this._attemptEndedByReadTimeout = !1;
        const r = this._experimentService?.getDynamicConfig("cloud_agent_stream_reattach", {
            disableExposureLog: !0
        }), s = r?.enabled ?? !0, o = r?.rehydrateAfterMs ?? VSh, a = s && i && Date.now() - this._lastFrameAtMs >= o, c = s && i && this._timedOutAttemptsWithoutOffsetProgress >= jSh, u = i && !a && !c ? this._latestOffsetKey : void 0, h = i ? Array.from(this._cachedBlobKeys).map((P)=>qW(P)) : t.cachedBlobIds, p = _Sh(h), g = await this._aiService.backgroundComposerClient();
        let f = !1;
        const v = new AbortController, b = AbortSignal.any([
            this._abortController.signal,
            v.signal
        ]);
        let y = Date.now(), T = !1;
        const E = new vSh, A = Math.min(5e3, Math.max(1e3, Math.floor(d3n / 12))), R = on.setInterval(()=>{
            if (!T && Date.now() - y > d3n) {
                const P = new Error(`CloudAgentStream timed out waiting ${d3n}ms for stream response for bcId ${this.bcId}`);
                T = E.reject(P), T && (this._attemptEndedByReadTimeout = !0, v.abort());
            }
        }, A), D = ()=>E.reject(new Rl);
        b.addEventListener("abort", D, {
            once: !0
        });
        try {
            this._streamAttachedAtMs = Date.now();
            const P = g.streamConversation(new e2n({
                bcId: this.bcId,
                offsetKey: u,
                purpose: VNn.LIVE,
                includeStreamHeartbeats: !0,
                filterHeavyStepData: !0,
                shouldSendPrefetchedBlobsFirst: !0,
                prefetchOnlyLastStepPerTurn: !0,
                maxBlobsAfterPrefetch: 30,
                ...CSh(this._turnWindowSize),
                preFetchedBlobIds: p.preFetchedBlobIds,
                preFetchedBlobFilter: p.preFetchedBlobFilter
            }), {
                signal: b,
                headers: td(this._requestId)
            });
            f = !0, this._connected.set(!0);
            const N = P[Symbol.asyncIterator]();
            for(y = Date.now();;){
                if (b.aborted) throw new Rl;
                const O = await E.readNext(N);
                if (y = Date.now(), this._aborted) return;
                if (O.done) break;
                const F = O.value;
                if (this._lastFrameAtMs = y, F.message.case !== "streamHeartbeat" && (this._lastStreamActivityAtMs = y, n(), this._handleStreamMessage(F, t), this._terminalWorkflowStatusSeen)) break;
            }
            if (t.readyState.resolved || (t.readyState.resolved = !0, this._structuredLogService.warn("background_composer", "CloudAgentStream: stream ended before initialState", {
                bcId: this.bcId,
                requestId: this._requestId,
                hadCachedState: !!t.cachedState?.state
            }), t.cachedState?.state ? (t.readyState.lastInitialStateResolved = t.cachedState.state, t.resolve(t.cachedState.state)) : t.reject(new Error(`CloudAgentStream ended before initialState for bcId ${this.bcId}`))), this._abortController.signal.aborted || this._terminalWorkflowStatusSeen) return;
            throw new Error(`CloudAgentStream ended unexpectedly for bcId ${this.bcId}`);
        } finally{
            on.clearInterval(R), b.removeEventListener("abort", D), f && this._connected.set(!1), v.abort();
        }
    }
    _handleStreamMessage(e, t) {
        if (!this._aborted) switch(e.message.case){
            case "prefetchedBlobs":
                this._cacheBlobs(e.message.value.preFetchedBlobs);
                break;
            case "initialState":
                {
                    this._cacheBlobs(e.message.value.preFetchedBlobs), this._recordUserDisplayInfos(e.message.value.userDisplayInfos), this._markNetworkInitialStateSeen();
                    const n = e.message.value.cloudAgentState, i = n?.conversationState ?? new Hm, r = n?.lastInteractionUpdateOffsetKey, s = e.message.value.workflowStatus;
                    if ((this._pinnedWorkerOfflineOffsetKey === void 0 || r && zee(r, this._pinnedWorkerOfflineOffsetKey) > 0 || s !== Yd.UNSPECIFIED && s !== Yd.RUNNING) && this._pinnedWorkerOffline.set(!1), !this._shouldApplyConversationState(r || void 0)) {
                        if (this._structuredLogService.warn("background_composer", "CloudAgentStream: skipping stale initialState snapshot", {
                            bcId: this.bcId,
                            requestId: this._requestId,
                            snapshotOffsetKey: r,
                            currentStateOffsetKey: this._conversationStateOffsetKey
                        }), this._setLatestUserFacingErrorDetails(n?.userFacingErrorDetails, r || void 0), this._adoptFirstNonEmptySuggestedRepoNames(n), e.message.value.workflowStatus !== Yd.UNSPECIFIED && (this._applyWorkflowStatusToStreamError(e.message.value.workflowStatus), this._onWorkflowStatus?.(e.message.value.workflowStatus, r)), !t.readyState.resolved) {
                            const o = this._conversationState.value ?? i;
                            t.readyState.resolved = !0, t.readyState.lastInitialStateResolved = o, t.resolve(o);
                        }
                        break;
                    }
                    this._updateNumCompletedTurns(n?.numCompletedTurns), this._updateAgentName(n), this._adoptFirstNonEmptySuggestedRepoNames(n), this._updateAdmittedCustomModeStateBlobId(n?.admittedCustomModeStateBlobId), this._updateVideoAnnotationsBlobId(n?.videoAnnotationsBlobId), this._updateVoiceCallsBlobId(n?.voiceCallsBlobId), this._setLatestUserFacingErrorDetails(n?.userFacingErrorDetails, r || void 0), r && (this._advanceProcessedOffsetKey(r), this._conversationStateOffsetKey = r, this._cacheService.saveState(this.bcId, i, r)), this._conversationState.set(i);
                    for (const o of this.conversationStateListeners)o();
                    e.message.value.workflowStatus !== Yd.UNSPECIFIED && (this._applyWorkflowStatusToStreamError(e.message.value.workflowStatus), this._onWorkflowStatus?.(e.message.value.workflowStatus, r)), t.readyState.resolved ? (t.readyState.lastInitialStateResolved === void 0 || !Hm.equals(t.readyState.lastInitialStateResolved, i)) && (t.readyState.lastInitialStateResolved = i, this._onNewInitialState?.(i)) : (t.readyState.resolved = !0, t.readyState.lastInitialStateResolved = i, t.resolve(i));
                    break;
                }
            case "cloudAgentStateWithIdAndOffset":
                {
                    this._cacheBlobs(e.message.value.preFetchedBlobs), this._recordUserDisplayInfos(e.message.value.userDisplayInfos);
                    const n = e.message.value.offsetKey;
                    if (n && this._hasProcessedOffsetKey(n)) break;
                    const i = e.message.value.cloudAgentState;
                    this._updateNumCompletedTurns(i?.numCompletedTurns), this._updateAgentName(i), this._adoptFirstNonEmptySuggestedRepoNames(i), this._updateAdmittedCustomModeStateBlobId(i?.admittedCustomModeStateBlobId), this._updateVideoAnnotationsBlobId(i?.videoAnnotationsBlobId), this._updateVoiceCallsBlobId(i?.voiceCallsBlobId), this._setLatestUserFacingErrorDetails(i?.userFacingErrorDetails, n || void 0), i?.userFacingErrorDetails && this._streamError.value?.kind === "terminal" && this._streamError.value.status === "error" && this._applyWorkflowStatusToStreamError(Yd.ERROR), this._advanceProcessedOffsetKey(n);
                    const r = i?.lastInteractionUpdateOffsetKey || void 0;
                    r && this._pinnedWorkerOfflineOffsetKey !== void 0 && zee(r, this._pinnedWorkerOfflineOffsetKey) > 0 && this._pinnedWorkerOffline.set(!1);
                    const s = r ?? n;
                    if (i?.conversationState && this._shouldApplyConversationState(s || void 0)) {
                        s && (this._conversationStateOffsetKey = s, this._cacheService.saveState(this.bcId, i.conversationState, s)), this._conversationState.set(i.conversationState);
                        for (const o of this.conversationStateListeners)o();
                    }
                    break;
                }
            case "interactionUpdateWithOffset":
                {
                    this._recordUserDisplayInfos(e.message.value.userDisplayInfos);
                    const n = e.message.value.interactionUpdate, i = e.message.value.offsetKey;
                    if (i && this._hasProcessedOffsetKey(i)) break;
                    this._recordInteractionUpdateStaleness(i), this._advanceProcessedOffsetKey(i), this._streamError.value?.kind === "transient" && this._setStreamError(void 0), this._pinnedWorkerOffline.set(!1), n && this._listener(n, i || void 0);
                    break;
                }
            case "interactionQueryWithOffset":
                {
                    const n = e.message.value.interactionQuery, i = e.message.value.offsetKey;
                    if (i && this._hasProcessedOffsetKey(i)) break;
                    if (this._advanceProcessedOffsetKey(i), n) for (const r of this.interactionQueryListeners)r(n);
                    break;
                }
            case "workflowStatusWithOffset":
                {
                    const n = e.message.value.offsetKey;
                    if (n && this._hasProcessedOffsetKey(n)) break;
                    this._advanceProcessedOffsetKey(n);
                    const i = e.message.value.workflowStatus;
                    if (i !== Yd.RUNNING && this._pinnedWorkerOffline.set(!1), n) {
                        if (this._isSupersededWorkflowStatus(i, n)) break;
                        this._workflowStatusHistory?.recordApplied(n);
                    }
                    i !== Yd.ERROR && this._setLatestUserFacingErrorDetails(void 0, n || void 0), this._applyWorkflowStatusToStreamError(i), this._onWorkflowStatus?.(i, n);
                    break;
                }
            case "workerLifecycleEventWithOffset":
                {
                    const n = e.message.value.offsetKey;
                    if (n && this._hasProcessedOffsetKey(n)) break;
                    this._advanceProcessedOffsetKey(n);
                    const i = e.message.value.workerLifecycleEvent?.event;
                    i?.case === "pinnedWorkerOffline" ? (this._pinnedWorkerOfflineOffsetKey = n || void 0, this._pinnedWorkerOffline.set(!0)) : i?.case === "pinnedWorkerReconnected" && this._pinnedWorkerOffline.set(!1);
                    break;
                }
            case "transientErrorWithOffset":
                {
                    const n = e.message.value.offsetKey;
                    if (n && this._hasProcessedOffsetKey(n) || (this._advanceProcessedOffsetKey(n), this._streamError.value?.kind === "terminal")) break;
                    const i = e.message.value.transientError?.errorMessage.trim();
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
                    const n = e.message;
                    break;
                }
        }
    }
    _cacheBlobs(e) {
        for (const t of e)this._cachedBlobKeys.add(QX(t.id)), this._cacheService.setBlob(this.bcId, t.id, t.value);
    }
    _recordUserDisplayInfos(e) {
        if (e !== void 0) for (const t of e)t.userId !== 0 && this._participantsByUserId.set(t.userId, {
            displayName: t.displayName,
            email: t.email
        });
    }
    _getRetryDelayMs(e) {
        if (e > uCo) return hCo;
        const t = Math.min(HSh * Math.pow(2, Math.max(0, e - 1)), dCo), n = t * WSh, i = Math.random() * (n * 2) - n;
        return Math.max(0, Math.round(t + i));
    }
    async _waitForRetry(e) {
        this._abortController.signal.aborted || await new Promise((t)=>{
            let n = !1;
            const i = ()=>{
                n || (n = !0, clearTimeout(r), this._abortController.signal.removeEventListener("abort", s), this._wakeRetryBackoff = void 0, t());
            }, r = setTimeout(i, e), s = ()=>i();
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
        this._abortController.signal.aborted || await new Promise((e)=>{
            let t = !1;
            const n = ()=>{
                t || (t = !0, this._abortController.signal.removeEventListener("abort", n), this._wakeTerminalReconnect = void 0, this._terminalReconnectRequested = !1, e());
            };
            this._abortController.signal.addEventListener("abort", n, {
                once: !0
            }), this._wakeTerminalReconnect = n, this._terminalReconnectRequested && n();
        });
    }
};

}
