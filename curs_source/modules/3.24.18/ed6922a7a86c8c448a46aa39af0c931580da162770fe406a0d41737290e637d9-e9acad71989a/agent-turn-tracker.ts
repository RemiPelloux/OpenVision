import { dMu, hMu, mMu, pMu } from "./De_3.js";
import { x } from "./tslib.es6.js";
var Yyt, FMe, gMu, fMu;
export { FMe, Yyt, fMu, gMu };
var __wakaru_Odv_initialized = false;
export function Odv() {
if (__wakaru_Odv_initialized) return;
__wakaru_Odv_initialized = true;
"use strict";
x(), Yyt = class extends Error {
    constructor(e, t){
        super(e), Object.setPrototypeOf(this, new.target.prototype), this.name = "AgentTurnClassifiedError", this.turnErrorInfo = {
            ...t,
            errorText: e
        };
    }
}, FMe = (e)=>e === void 0 || Number.isFinite(e) && e >= 0, gMu = [
    [
        "gatherPrependedMessagesMs",
        "pre_network_gather_prepended_messages_ms"
    ],
    [
        "requestContextProviderWaitMs",
        "pre_network_request_context_provider_wait_ms"
    ],
    [
        "requestContextMs",
        "pre_network_request_context_ms"
    ],
    [
        "agentStoreRemindersMs",
        "pre_network_agent_store_reminders_ms"
    ],
    [
        "selectedContextMs",
        "pre_network_selected_context_ms"
    ],
    [
        "runAgentLoopBuildMs",
        "pre_network_run_agent_loop_build_ms"
    ],
    [
        "agentClientRunToPhaseStartMs",
        "pre_network_agent_client_run_to_phase_start_ms"
    ]
], fMu = class {
    constructor(e){
        this.options = e, this.finalized = !1, this.started = !1, this.simulatedThinkingTimedOut = !1;
    }
    setModel(e) {
        this.modelName = e;
    }
    setConversationId(e) {
        e.length !== 0 && (this.conversationId = e);
    }
    setTurnNumber(e) {
        !Number.isInteger(e) || e < 1 || (this.turnNumber = e);
    }
    setTtftMs(e) {
        !Number.isFinite(e) || e < 0 || (this.ttftMs = e);
    }
    setTtftTransportMode(e) {
        this.ttftTransportMode = e;
    }
    setDurationMs(e) {
        !Number.isFinite(e) || e < 0 || (this.durationMs = e);
    }
    setRetryCount(e) {
        this.retriesAttempted = e;
    }
    recordRetry() {
        this.retriesAttempted = (this.retriesAttempted ?? 0) + 1;
    }
    get retryCount() {
        return this.retriesAttempted ?? 0;
    }
    setTokenUsage(e) {
        this.tokenUsage = e;
    }
    setExtraTags(e) {
        this.extraTags = e;
    }
    setPreNetworkMs(e) {
        !Number.isFinite(e) || e < 0 || (this.preNetworkMs = e);
    }
    setPreNetworkBreakdown(e) {
        const t = (n)=>n !== void 0 && Number.isFinite(n) && n >= 0 ? n : void 0;
        this.preNetworkToAbortMs = t(e.toAbortPhaseMs) ?? this.preNetworkToAbortMs, this.preNetworkAbortWaitMs = t(e.abortWaitMs) ?? this.preNetworkAbortWaitMs, this.preNetworkHooksReadyWaitMs = t(e.hooksReadyWaitMs) ?? this.preNetworkHooksReadyWaitMs, this.preNetworkHooksReadyTimedOut = e.hooksReadyTimedOut ?? this.preNetworkHooksReadyTimedOut, this.preNetworkHookMs = t(e.beforeSubmitHookMs) ?? this.preNetworkHookMs, this.preNetworkPrepMs = t(e.prepMs) ?? this.preNetworkPrepMs, this.preNetworkStreamSetupMs = t(e.streamSetupMs) ?? this.preNetworkStreamSetupMs, this.preNetworkHostBridgeWaitMs = t(e.hostBridgeWaitMs) ?? this.preNetworkHostBridgeWaitMs, this.preNetworkHostEnsureSessionMs = t(e.hostEnsureSessionMs) ?? this.preNetworkHostEnsureSessionMs, this.preNetworkHostLifecycleReadyMs = t(e.hostLifecycleReadyMs) ?? this.preNetworkHostLifecycleReadyMs, this.preNetworkHostSendActionMs = t(e.hostSendActionMs) ?? this.preNetworkHostSendActionMs, this.preNetworkHostAcceptToNetworkMs = t(e.hostAcceptToNetworkMs) ?? this.preNetworkHostAcceptToNetworkMs;
    }
    setStreamSetupBreakdown(e) {
        this.streamSetupBreakdown = e;
    }
    setRequestContextOutcome(e) {
        this.requestContextOutcome = e;
    }
    appendTtftBreakdown(e) {
        const t = this.ttftBreakdown;
        if (t === void 0) return;
        if (e.ttft_breakdown_clock = t.clock, t.clock === "client") {
            const r = t.value;
            if (r.prepMs !== void 0 && (e.client_prep_ms = String(r.prepMs)), this.ttftMs === void 0 || this.preNetworkMs === void 0) return;
            this.writeTtftSegments(e, pMu({
                ttftMs: this.ttftMs,
                preNetworkMs: this.preNetworkMs,
                breakdown: r
            }));
            return;
        }
        const n = t.value;
        if (e.server_first_token_ms = String(n.serverFirstTokenMs), e.server_pre_stream_setup_ms = String(n.preStreamSetupMs), e.server_wait_for_first_event_ms = String(n.waitForFirstEventMs), n.providerTtftMs !== void 0 && (e.server_provider_ttft_ms = String(n.providerTtftMs)), n.slowPoolWaitMs !== void 0 && (e.server_slow_pool_wait_ms = String(n.slowPoolWaitMs)), this.ttftMs === void 0 || this.preNetworkMs === void 0) return;
        const i = mMu({
            ttftMs: this.ttftMs,
            preNetworkMs: this.preNetworkMs,
            breakdown: n
        });
        i !== void 0 && this.writeTtftSegments(e, i);
    }
    writeTtftSegments(e, t) {
        e.ttft_client_ms = String(t.clientMs), e.ttft_residual_ms = String(t.residualMs), e.ttft_server_ms = String(t.serverMs), e.ttft_inference_ms = String(t.inferenceMs), e.ttft_residual_clamped = String(t.residualClamped);
    }
    appendStreamSetupBreakdown(e) {
        const t = this.streamSetupBreakdown;
        if (t !== void 0) {
            t.parallel !== void 0 && (e.pre_network_stream_setup_parallel = String(t.parallel)), t.requestContextStale !== void 0 && (e.pre_network_request_context_stale = String(t.requestContextStale));
            for (const [n, i] of gMu){
                const r = t[n];
                r !== void 0 && Number.isFinite(r) && r >= 0 && (e[i] = String(r));
            }
        }
    }
    setFirstMessageMs(e) {
        !Number.isFinite(e) || e < 0 || (this.firstMessageMs = e);
    }
    setFirstMessageNetworkMs(e) {
        !Number.isFinite(e) || e < 0 || (this.firstMessageNetworkMs = e);
    }
    setHandshakeMs(e) {
        !Number.isFinite(e) || e < 0 || (this.handshakeMs = e);
    }
    setPostFirstNonHeartbeatResponseClientMs(e) {
        !Number.isFinite(e) || e < 0 || (this.postFirstNonHeartbeatResponseClientMs = e);
    }
    setServerTtftBreakdown(e) {
        dMu(e) && (this.ttftBreakdown = {
            clock: "server",
            value: e
        });
    }
    setLocalLoopTtftBreakdown(e) {
        hMu(e) && (this.ttftBreakdown = {
            clock: "client",
            value: e
        });
    }
    setServerRegion(e) {
        e.length !== 0 && (this.serverRegion = e);
    }
    setColdStartMarkers(e) {
        this.coldStartMarkers = e;
    }
    setTraceContext(e) {
        this.traceId = e.traceId, this.spanId = e.spanId;
    }
    markSimulatedThinkingTimedOut(e) {
        this.simulatedThinkingTimedOut = !0, this.simulatedThinkingThresholdMs = e, this.options.logger.info(this.options.logKey, this.options.simulatedThinkingTimeoutEventName, {
            ...this.getBaseMetricTags(),
            threshold_ms: String(e)
        });
    }
    getBaseMetricTags() {
        const e = {
            turn_type: this.options.turnType,
            bring_your_own_key: this.options.bringYourOwnKey ? "true" : "false"
        };
        if (this.options.workspaceTag && (e.workspace = this.options.workspaceTag), this.modelName && (e.model_intent = this.modelName), this.requestId && (e.request_id = this.requestId), this.conversationId && (e.conversation_id = this.conversationId), this.traceId && (e.trace_id = this.traceId), this.spanId && (e.span_id = this.spanId), this.extraTags) for (const [t, n] of Object.entries(this.extraTags))n !== void 0 && (e[t] = n);
        return e;
    }
    start(e, t) {
        this.traceId = t.traceId, this.spanId = t.spanId, this._doStart(e);
    }
    startUntraced(e) {
        this._doStart(e);
    }
    _doStart(e) {
        if (this.started) {
            this.options.logger.warn(this.options.logKey, "Called start on a started turn tracker", this.getBaseMetricTags());
            return;
        }
        if (this.finalized) {
            this.options.logger.warn(this.options.logKey, "Called start on a finalized turn tracker", this.getBaseMetricTags());
            return;
        }
        this.requestId = e, this.started = !0, this.options.logger.info(this.options.logKey, this.options.startEventName, this.getBaseMetricTags());
    }
    finalize(e, t, n) {
        if (this.finalized) return;
        if (!this.started) {
            this.finalized = !0;
            return;
        }
        const i = this.forcedError ?? t, r = i ? "error" : e, s = this.getBaseMetricTags();
        if (s.outcome = r, r === "error" && (s.error_type = i?.errorType ?? "unknown", s.error_code = i?.errorCode ?? "unknown", i?.errorText && (s.error_text = i.errorText)), n && Object.assign(s, n), this.turnNumber !== void 0 && (s.turn_number = String(this.turnNumber)), this.ttftMs !== void 0 && (s.ttft_ms = String(this.ttftMs), this.ttftTransportMode !== void 0 && (s.transport_mode = this.ttftTransportMode)), this.durationMs !== void 0 && (s.duration_ms = String(this.durationMs)), this.retriesAttempted !== void 0 && (s.retries_attempted = String(this.retriesAttempted)), this.tokenUsage && (s.input_tokens = String(this.tokenUsage.inputTokens), s.output_tokens = String(this.tokenUsage.outputTokens), s.cache_read_tokens = String(this.tokenUsage.cacheReadTokens), s.cache_write_tokens = String(this.tokenUsage.cacheWriteTokens)), this.preNetworkMs !== void 0 && (s.pre_network_ms = String(this.preNetworkMs)), this.preNetworkToAbortMs !== void 0 && (s.pre_network_to_abort_ms = String(this.preNetworkToAbortMs)), this.preNetworkAbortWaitMs !== void 0 && (s.pre_network_abort_wait_ms = String(this.preNetworkAbortWaitMs)), this.preNetworkHooksReadyWaitMs !== void 0 && (s.pre_network_hooks_ready_wait_ms = String(this.preNetworkHooksReadyWaitMs)), this.preNetworkHooksReadyTimedOut !== void 0 && (s.pre_network_hooks_ready_timed_out = String(this.preNetworkHooksReadyTimedOut)), this.preNetworkHookMs !== void 0 && (s.pre_network_hook_ms = String(this.preNetworkHookMs)), this.preNetworkPrepMs !== void 0 && (s.pre_network_prep_ms = String(this.preNetworkPrepMs)), this.preNetworkStreamSetupMs !== void 0 && (s.pre_network_stream_setup_ms = String(this.preNetworkStreamSetupMs)), this.preNetworkHostBridgeWaitMs !== void 0 && (s.pre_network_host_bridge_wait_ms = String(this.preNetworkHostBridgeWaitMs)), this.preNetworkHostEnsureSessionMs !== void 0 && (s.pre_network_host_ensure_session_ms = String(this.preNetworkHostEnsureSessionMs)), this.preNetworkHostLifecycleReadyMs !== void 0 && (s.pre_network_host_lifecycle_ready_ms = String(this.preNetworkHostLifecycleReadyMs)), this.preNetworkHostSendActionMs !== void 0 && (s.pre_network_host_send_action_ms = String(this.preNetworkHostSendActionMs)), this.preNetworkHostAcceptToNetworkMs !== void 0 && (s.pre_network_host_accept_to_network_ms = String(this.preNetworkHostAcceptToNetworkMs)), this.appendStreamSetupBreakdown(s), this.firstMessageMs !== void 0 && (s.first_message_ms = String(this.firstMessageMs)), this.firstMessageNetworkMs !== void 0 && (s.first_message_network_ms = String(this.firstMessageNetworkMs)), this.handshakeMs !== void 0 && (s.handshake_ms = String(this.handshakeMs)), this.postFirstNonHeartbeatResponseClientMs !== void 0 && (s.post_first_non_heartbeat_response_client_ms = String(this.postFirstNonHeartbeatResponseClientMs)), this.serverRegion !== void 0 && (s.server_region = this.serverRegion), this.appendTtftBreakdown(s), this.coldStartMarkers !== void 0) {
            const a = this.coldStartMarkers;
            s.first_send_in_window = String(a.firstSendInWindow), s.composer_loaded_during_submit = String(a.composerLoadedDuringSubmit), s.send_prewarm_state = a.sendPrewarmState, a.msSinceWindowStart !== void 0 && Number.isFinite(a.msSinceWindowStart) && a.msSinceWindowStart >= 0 && (s.ms_since_window_start = String(Math.round(a.msSinceWindowStart))), a.execRuntimeState !== void 0 && (s.exec_runtime_state = a.execRuntimeState);
        }
        this.simulatedThinkingThresholdMs !== void 0 && (s.simulated_thinking_threshold_ms = String(this.simulatedThinkingThresholdMs)), s.hit_simulated_thinking_threshold = String(this.simulatedThinkingTimedOut), this.requestContextOutcome !== void 0 && (s.request_context = this.requestContextOutcome);
        const o = s;
        this.options.logger.info(this.options.logKey, this.options.outcomeEventName, o), this.options.onOutcome?.(o), this.finalized = !0;
    }
    finalizeErrored(e) {
        this.finalized || (this.forcedError = e, this.finalize("error", e));
    }
    isFinalized() {
        return this.finalized;
    }
};

}
