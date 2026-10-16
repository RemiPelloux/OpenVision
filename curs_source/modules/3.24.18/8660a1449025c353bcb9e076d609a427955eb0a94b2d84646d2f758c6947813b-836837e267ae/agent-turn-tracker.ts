import { BLp, FLp, LLp, OLp } from "./ipa.js";
import { E } from "./tslib.es6.js";
var hWt, iqe, ULp, jLp;
export { ULp, hWt, iqe, jLp };
var __wakaru_ZR1_initialized = false;
export function ZR1() {
if (__wakaru_ZR1_initialized) return;
__wakaru_ZR1_initialized = true;
"use strict";
E(), hWt = class extends Error {
    constructor(t, e){
        super(t), Object.setPrototypeOf(this, new.target.prototype), this.name = "AgentTurnClassifiedError", this.turnErrorInfo = {
            ...e,
            errorText: t
        };
    }
}, iqe = (t)=>t === void 0 || Number.isFinite(t) && t >= 0, ULp = [
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
], jLp = class {
    constructor(t){
        this.options = t, this.finalized = !1, this.started = !1, this.simulatedThinkingTimedOut = !1;
    }
    setModel(t) {
        this.modelName = t;
    }
    setConversationId(t) {
        t.length !== 0 && (this.conversationId = t);
    }
    setTurnNumber(t) {
        !Number.isInteger(t) || t < 1 || (this.turnNumber = t);
    }
    setTtftMs(t) {
        !Number.isFinite(t) || t < 0 || (this.ttftMs = t);
    }
    setTtftTransportMode(t) {
        this.ttftTransportMode = t;
    }
    setDurationMs(t) {
        !Number.isFinite(t) || t < 0 || (this.durationMs = t);
    }
    setRetryCount(t) {
        this.retriesAttempted = t;
    }
    recordRetry() {
        this.retriesAttempted = (this.retriesAttempted ?? 0) + 1;
    }
    get retryCount() {
        return this.retriesAttempted ?? 0;
    }
    setTokenUsage(t) {
        this.tokenUsage = t;
    }
    setExtraTags(t) {
        this.extraTags = t;
    }
    setPreNetworkMs(t) {
        !Number.isFinite(t) || t < 0 || (this.preNetworkMs = t);
    }
    setPreNetworkBreakdown(t) {
        const e = (n)=>n !== void 0 && Number.isFinite(n) && n >= 0 ? n : void 0;
        this.preNetworkToAbortMs = e(t.toAbortPhaseMs) ?? this.preNetworkToAbortMs, this.preNetworkAbortWaitMs = e(t.abortWaitMs) ?? this.preNetworkAbortWaitMs, this.preNetworkHooksReadyWaitMs = e(t.hooksReadyWaitMs) ?? this.preNetworkHooksReadyWaitMs, this.preNetworkHooksReadyTimedOut = t.hooksReadyTimedOut ?? this.preNetworkHooksReadyTimedOut, this.preNetworkHookMs = e(t.beforeSubmitHookMs) ?? this.preNetworkHookMs, this.preNetworkPrepMs = e(t.prepMs) ?? this.preNetworkPrepMs, this.preNetworkStreamSetupMs = e(t.streamSetupMs) ?? this.preNetworkStreamSetupMs, this.preNetworkHostBridgeWaitMs = e(t.hostBridgeWaitMs) ?? this.preNetworkHostBridgeWaitMs, this.preNetworkHostEnsureSessionMs = e(t.hostEnsureSessionMs) ?? this.preNetworkHostEnsureSessionMs, this.preNetworkHostLifecycleReadyMs = e(t.hostLifecycleReadyMs) ?? this.preNetworkHostLifecycleReadyMs, this.preNetworkHostSendActionMs = e(t.hostSendActionMs) ?? this.preNetworkHostSendActionMs, this.preNetworkHostAcceptToNetworkMs = e(t.hostAcceptToNetworkMs) ?? this.preNetworkHostAcceptToNetworkMs;
    }
    setStreamSetupBreakdown(t) {
        this.streamSetupBreakdown = t;
    }
    setRequestContextOutcome(t) {
        this.requestContextOutcome = t;
    }
    appendTtftBreakdown(t) {
        const e = this.ttftBreakdown;
        if (e === void 0) return;
        if (t.ttft_breakdown_clock = e.clock, e.clock === "client") {
            const r = e.value;
            if (r.prepMs !== void 0 && (t.client_prep_ms = String(r.prepMs)), this.ttftMs === void 0 || this.preNetworkMs === void 0) return;
            this.writeTtftSegments(t, FLp({
                ttftMs: this.ttftMs,
                preNetworkMs: this.preNetworkMs,
                breakdown: r
            }));
            return;
        }
        const n = e.value;
        if (t.server_first_token_ms = String(n.serverFirstTokenMs), t.server_pre_stream_setup_ms = String(n.preStreamSetupMs), t.server_wait_for_first_event_ms = String(n.waitForFirstEventMs), n.providerTtftMs !== void 0 && (t.server_provider_ttft_ms = String(n.providerTtftMs)), n.slowPoolWaitMs !== void 0 && (t.server_slow_pool_wait_ms = String(n.slowPoolWaitMs)), this.ttftMs === void 0 || this.preNetworkMs === void 0) return;
        const i = BLp({
            ttftMs: this.ttftMs,
            preNetworkMs: this.preNetworkMs,
            breakdown: n
        });
        i !== void 0 && this.writeTtftSegments(t, i);
    }
    writeTtftSegments(t, e) {
        t.ttft_client_ms = String(e.clientMs), t.ttft_residual_ms = String(e.residualMs), t.ttft_server_ms = String(e.serverMs), t.ttft_inference_ms = String(e.inferenceMs), t.ttft_residual_clamped = String(e.residualClamped);
    }
    appendStreamSetupBreakdown(t) {
        const e = this.streamSetupBreakdown;
        if (e !== void 0) {
            e.parallel !== void 0 && (t.pre_network_stream_setup_parallel = String(e.parallel)), e.requestContextStale !== void 0 && (t.pre_network_request_context_stale = String(e.requestContextStale));
            for (const [n, i] of ULp){
                const r = e[n];
                r !== void 0 && Number.isFinite(r) && r >= 0 && (t[i] = String(r));
            }
        }
    }
    setFirstMessageMs(t) {
        !Number.isFinite(t) || t < 0 || (this.firstMessageMs = t);
    }
    setFirstMessageNetworkMs(t) {
        !Number.isFinite(t) || t < 0 || (this.firstMessageNetworkMs = t);
    }
    setHandshakeMs(t) {
        !Number.isFinite(t) || t < 0 || (this.handshakeMs = t);
    }
    setPostFirstNonHeartbeatResponseClientMs(t) {
        !Number.isFinite(t) || t < 0 || (this.postFirstNonHeartbeatResponseClientMs = t);
    }
    setServerTtftBreakdown(t) {
        LLp(t) && (this.ttftBreakdown = {
            clock: "server",
            value: t
        });
    }
    setLocalLoopTtftBreakdown(t) {
        OLp(t) && (this.ttftBreakdown = {
            clock: "client",
            value: t
        });
    }
    setServerRegion(t) {
        t.length !== 0 && (this.serverRegion = t);
    }
    setColdStartMarkers(t) {
        this.coldStartMarkers = t;
    }
    setTraceContext(t) {
        this.traceId = t.traceId, this.spanId = t.spanId;
    }
    markSimulatedThinkingTimedOut(t) {
        this.simulatedThinkingTimedOut = !0, this.simulatedThinkingThresholdMs = t, this.options.logger.info(this.options.logKey, this.options.simulatedThinkingTimeoutEventName, {
            ...this.getBaseMetricTags(),
            threshold_ms: String(t)
        });
    }
    getBaseMetricTags() {
        const t = {
            turn_type: this.options.turnType,
            bring_your_own_key: this.options.bringYourOwnKey ? "true" : "false"
        };
        if (this.options.workspaceTag && (t.workspace = this.options.workspaceTag), this.modelName && (t.model_intent = this.modelName), this.requestId && (t.request_id = this.requestId), this.conversationId && (t.conversation_id = this.conversationId), this.traceId && (t.trace_id = this.traceId), this.spanId && (t.span_id = this.spanId), this.extraTags) for (const [e, n] of Object.entries(this.extraTags))n !== void 0 && (t[e] = n);
        return t;
    }
    start(t, e) {
        this.traceId = e.traceId, this.spanId = e.spanId, this._doStart(t);
    }
    startUntraced(t) {
        this._doStart(t);
    }
    _doStart(t) {
        if (this.started) {
            this.options.logger.warn(this.options.logKey, "Called start on a started turn tracker", this.getBaseMetricTags());
            return;
        }
        if (this.finalized) {
            this.options.logger.warn(this.options.logKey, "Called start on a finalized turn tracker", this.getBaseMetricTags());
            return;
        }
        this.requestId = t, this.started = !0, this.options.logger.info(this.options.logKey, this.options.startEventName, this.getBaseMetricTags());
    }
    finalize(t, e, n) {
        if (this.finalized) return;
        if (!this.started) {
            this.finalized = !0;
            return;
        }
        const i = this.forcedError ?? e, r = i ? "error" : t, s = this.getBaseMetricTags();
        if (s.outcome = r, r === "error" && (s.error_type = i?.errorType ?? "unknown", s.error_code = i?.errorCode ?? "unknown", i?.errorText && (s.error_text = i.errorText)), n && Object.assign(s, n), this.turnNumber !== void 0 && (s.turn_number = String(this.turnNumber)), this.ttftMs !== void 0 && (s.ttft_ms = String(this.ttftMs), this.ttftTransportMode !== void 0 && (s.transport_mode = this.ttftTransportMode)), this.durationMs !== void 0 && (s.duration_ms = String(this.durationMs)), this.retriesAttempted !== void 0 && (s.retries_attempted = String(this.retriesAttempted)), this.tokenUsage && (s.input_tokens = String(this.tokenUsage.inputTokens), s.output_tokens = String(this.tokenUsage.outputTokens), s.cache_read_tokens = String(this.tokenUsage.cacheReadTokens), s.cache_write_tokens = String(this.tokenUsage.cacheWriteTokens)), this.preNetworkMs !== void 0 && (s.pre_network_ms = String(this.preNetworkMs)), this.preNetworkToAbortMs !== void 0 && (s.pre_network_to_abort_ms = String(this.preNetworkToAbortMs)), this.preNetworkAbortWaitMs !== void 0 && (s.pre_network_abort_wait_ms = String(this.preNetworkAbortWaitMs)), this.preNetworkHooksReadyWaitMs !== void 0 && (s.pre_network_hooks_ready_wait_ms = String(this.preNetworkHooksReadyWaitMs)), this.preNetworkHooksReadyTimedOut !== void 0 && (s.pre_network_hooks_ready_timed_out = String(this.preNetworkHooksReadyTimedOut)), this.preNetworkHookMs !== void 0 && (s.pre_network_hook_ms = String(this.preNetworkHookMs)), this.preNetworkPrepMs !== void 0 && (s.pre_network_prep_ms = String(this.preNetworkPrepMs)), this.preNetworkStreamSetupMs !== void 0 && (s.pre_network_stream_setup_ms = String(this.preNetworkStreamSetupMs)), this.preNetworkHostBridgeWaitMs !== void 0 && (s.pre_network_host_bridge_wait_ms = String(this.preNetworkHostBridgeWaitMs)), this.preNetworkHostEnsureSessionMs !== void 0 && (s.pre_network_host_ensure_session_ms = String(this.preNetworkHostEnsureSessionMs)), this.preNetworkHostLifecycleReadyMs !== void 0 && (s.pre_network_host_lifecycle_ready_ms = String(this.preNetworkHostLifecycleReadyMs)), this.preNetworkHostSendActionMs !== void 0 && (s.pre_network_host_send_action_ms = String(this.preNetworkHostSendActionMs)), this.preNetworkHostAcceptToNetworkMs !== void 0 && (s.pre_network_host_accept_to_network_ms = String(this.preNetworkHostAcceptToNetworkMs)), this.appendStreamSetupBreakdown(s), this.firstMessageMs !== void 0 && (s.first_message_ms = String(this.firstMessageMs)), this.firstMessageNetworkMs !== void 0 && (s.first_message_network_ms = String(this.firstMessageNetworkMs)), this.handshakeMs !== void 0 && (s.handshake_ms = String(this.handshakeMs)), this.postFirstNonHeartbeatResponseClientMs !== void 0 && (s.post_first_non_heartbeat_response_client_ms = String(this.postFirstNonHeartbeatResponseClientMs)), this.serverRegion !== void 0 && (s.server_region = this.serverRegion), this.appendTtftBreakdown(s), this.coldStartMarkers !== void 0) {
            const a = this.coldStartMarkers;
            s.first_send_in_window = String(a.firstSendInWindow), s.composer_loaded_during_submit = String(a.composerLoadedDuringSubmit), s.send_prewarm_state = a.sendPrewarmState, a.msSinceWindowStart !== void 0 && Number.isFinite(a.msSinceWindowStart) && a.msSinceWindowStart >= 0 && (s.ms_since_window_start = String(Math.round(a.msSinceWindowStart))), a.execRuntimeState !== void 0 && (s.exec_runtime_state = a.execRuntimeState);
        }
        this.simulatedThinkingThresholdMs !== void 0 && (s.simulated_thinking_threshold_ms = String(this.simulatedThinkingThresholdMs)), s.hit_simulated_thinking_threshold = String(this.simulatedThinkingTimedOut), this.requestContextOutcome !== void 0 && (s.request_context = this.requestContextOutcome);
        const o = s;
        this.options.logger.info(this.options.logKey, this.options.outcomeEventName, o), this.options.onOutcome?.(o), this.finalized = !0;
    }
    finalizeErrored(t) {
        this.finalized || (this.forcedError = t, this.finalize("error", t));
    }
    isFinalized() {
        return this.finalized;
    }
};

}
