import { init_dist7 } from "../../agent-core/dist/index.js";
import { Updates } from "../../agent-core/dist/interaction-updates.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { AgentLoopError, SingleMessageLoopDetector2, init_agent_loop_detector } from "./loop-detection/agent-loop-detector.js";
import { JsonStringContentStream, init_json_string_content_stream } from "./loop-detection/json-string-content-stream.js";
import { ToolCallAbortedError, init_common9 } from "./tools/common.js";
import { init_tool_call_name, toolCallNameKey } from "./tools/tool-call-name.js";
import { init_agent_loop_runtime } from "./utils/agent-loop-runtime.js";
import { init_dist26 } from "../../chat-inference/dist/index.js";
import { InputTokenLimitError } from "../../chat-inference/dist/prompt-executor.js";
import { init_dist } from "../../context/dist/index.js";
import { createCounter, createHistogram, isIntentionalAbortReason } from "../../dist_exports.js";
import { createKey } from "../../entry_exports.js";
import { checkForAgentSingleMessageLooping, getAgentLoopRuntime, isUserAbortErrorShape, normalizeAgentSingleMessageLoopDetection, toRedactedToolCall } from "../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { init_esm3 } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { EditArgs, init_edit_tool_pb } from "../../proto/dist/generated/agent/v1/edit_tool_pb.js";
import { PrivacyMode, init_privacy_mode_pb } from "../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
import { init_agent_v1 } from "../../redacted-protos/dist/agent-v1.js";
var __addDisposableResource50, __disposeResources50, toolExecutionDisabledKey, logger52, USER_ABORTED_REQUEST_MESSAGE, THINKING_RELATED_CHUNK_TYPES, toolCallLatency, toolCallCount, toolCallOutputTokens, toolCallResultTokens, InteractionHandler;
export { InteractionHandler, THINKING_RELATED_CHUNK_TYPES, USER_ABORTED_REQUEST_MESSAGE, __addDisposableResource50, __disposeResources50, logger52, toolCallCount, toolCallLatency, toolCallOutputTokens, toolCallResultTokens, toolExecutionDisabledKey };
var __wakaru_init_interaction_handler_initialized = false;
export function init_interaction_handler() {
if (__wakaru_init_interaction_handler_initialized) return;
__wakaru_init_interaction_handler_initialized = true;
"use strict";
init_dist7();
init_dist26();
init_dist();
init_dist4();
init_edit_tool_pb();
init_privacy_mode_pb();
init_agent_v1();
init_esm3();
init_agent_loop_detector();
init_json_string_content_stream();
init_common9();
init_tool_call_name();
init_agent_loop_runtime();
__addDisposableResource50 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources50 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
toolExecutionDisabledKey = createKey(Symbol("toolExecutionDisabled"), false);
logger52 = createLogger("interaction-handler");
USER_ABORTED_REQUEST_MESSAGE = "User aborted request";
THINKING_RELATED_CHUNK_TYPES = [
    "reasoning",
    "reasoning-signature",
    "redacted-reasoning"
];
toolCallLatency = createHistogram("agent.tool_call.latency_ms", {
    description: "Latency of tool calls in milliseconds",
    labelNames: [
        "tool_name",
        "harness_tool_name"
    ]
});
toolCallCount = createCounter("agent.tool_call.count", {
    description: "Total number of tool calls executed",
    labelNames: [
        "tool_name",
        "harness_tool_name"
    ]
});
toolCallOutputTokens = createHistogram("agent.tool_call.output_tokens", {
    description: "Approximate number of tokens in tool call output (text.length / 4)",
    labelNames: [
        "tool_name"
    ]
});
toolCallResultTokens = createHistogram("agent.tool_call_result_tokens", {
    description: "Number of tokens in tool call result content",
    labelNames: [
        "tool_name",
        "success"
    ]
});
InteractionHandler = class {
    constructor(interactionProvider, toolCallRecorder, invocationId, overrideSignal, thinkingStyle, singleMessageLoopDetection = false, onThinkingCompleted){
        this.interactionProvider = interactionProvider;
        this.toolCallRecorder = toolCallRecorder;
        this.invocationId = invocationId;
        this.overrideSignal = overrideSignal;
        this.thinkingStyle = thinkingStyle;
        this.onThinkingCompleted = onThinkingCompleted;
        this.latestToolCallsById = new Map();
        this.shouldPreserveArgsOnErrorCallIds = new Set();
        this.toolCallStartedAtMsByCallId = new Map();
        this.leftoverTokenCharCount = 0;
        this.singleMessageLoopPolicy = normalizeAgentSingleMessageLoopDetection(singleMessageLoopDetection);
    }
    async sendToolRequestsListed(ctx, callCount) {
        await this.interactionProvider.sendUpdate(ctx, Updates.toolRequestsListed(callCount));
    }
    getOrCreateToolCallStartedAtMs(callId, candidate) {
        const existing = this.toolCallStartedAtMsByCallId.get(callId);
        if (existing !== void 0) {
            return existing;
        }
        const candidateNumber = candidate === void 0 ? void 0 : Number(candidate);
        const startedAtMs = candidateNumber !== void 0 && Number.isSafeInteger(candidateNumber) && candidateNumber > 0 ? candidateNumber : Date.now();
        this.toolCallStartedAtMsByCallId.set(callId, startedAtMs);
        return startedAtMs;
    }
    get listener() {
        return this.interactionProvider;
    }
    getAbortSignal(ctx) {
        return this.overrideSignal ?? ctx.signal;
    }
    markToolCallForArgPreservation(callId) {
        this.shouldPreserveArgsOnErrorCallIds.add(callId);
    }
    rememberToolCallForArgPreservation(callId, toolCall) {
        this.rememberLatestToolCall(callId, toolCall);
    }
    applyArgsFromLatestToolCall(callId, incomingToolCall) {
        const latestToolCall = this.latestToolCallsById.get(callId);
        if (latestToolCall === void 0 || latestToolCall.tool.case !== incomingToolCall.tool.case) {
            return incomingToolCall;
        }
        const mergedToolCall = incomingToolCall.clone();
        if (mergedToolCall.tool.case === "createAgentToolCall" && latestToolCall.tool.case === "createAgentToolCall") {
            const latestArgs = latestToolCall.tool.value.args;
            if (latestArgs !== void 0) {
                mergedToolCall.tool.value.args = latestArgs.clone();
            }
            return mergedToolCall;
        }
        if (mergedToolCall.tool.case === "sendToAgentToolCall" && latestToolCall.tool.case === "sendToAgentToolCall") {
            const latestArgs = latestToolCall.tool.value.args;
            if (latestArgs !== void 0) {
                mergedToolCall.tool.value.args = latestArgs.clone();
            }
            return mergedToolCall;
        }
        if (mergedToolCall.tool.case === "editToolCall" && latestToolCall.tool.case === "editToolCall") {
            const latestArgs = latestToolCall.tool.value.args;
            if (latestArgs === void 0) {
                return mergedToolCall;
            }
            const mergedArgs = mergedToolCall.tool.value.args;
            if (mergedArgs === void 0) {
                mergedToolCall.tool.value.args = latestArgs.clone();
                return mergedToolCall;
            }
            if (mergedArgs.path.length === 0 && latestArgs.path.length > 0) {
                mergedArgs.path = latestArgs.path;
            }
            if (mergedArgs.streamContent === void 0 && latestArgs.streamContent !== void 0) {
                mergedArgs.streamContent = latestArgs.streamContent;
            }
            return mergedToolCall;
        }
        return mergedToolCall;
    }
    rememberLatestToolCall(callId, toolCall) {
        if (!this.shouldPreserveArgsOnErrorCallIds.has(callId)) {
            return;
        }
        this.latestToolCallsById.set(callId, this.applyArgsFromLatestToolCall(callId, toolCall));
    }
    async upsertRecordedToolCall(ctx, callId, toolCall) {
        if (this.toolCallRecorder.upsertToolCall !== void 0) {
            await this.toolCallRecorder.upsertToolCall(ctx, toolCall, callId);
            return;
        }
        this.toolCallRecorder.recordToolCall(toolCall, callId);
    }
    applyDeltaToLatestToolCall(callId, toolCallDelta) {
        if (!this.shouldPreserveArgsOnErrorCallIds.has(callId)) {
            return;
        }
        const latestToolCall = this.latestToolCallsById.get(callId);
        if (latestToolCall?.tool.case !== "editToolCall" || toolCallDelta.delta.case !== "editToolCallDelta") {
            return;
        }
        const editToolCall = latestToolCall.tool.value;
        editToolCall.args ??= new EditArgs();
        editToolCall.args.streamContent = (editToolCall.args.streamContent ?? "") + toolCallDelta.delta.value.streamContentDelta;
    }
    withToolCallMetadata(callId, toolCall, timestamps) {
        const startedAtMs = timestamps?.startedAtMs !== void 0 ? BigInt(timestamps.startedAtMs) : void 0;
        const completedAtMs = timestamps?.completedAtMs !== void 0 ? BigInt(timestamps.completedAtMs) : void 0;
        if (toolCall.toolCallId === callId && (startedAtMs === void 0 || toolCall.startedAtMs === startedAtMs) && (completedAtMs === void 0 || toolCall.completedAtMs === completedAtMs)) {
            return toolCall;
        }
        const stamped = toolCall.clone();
        stamped.toolCallId = callId;
        if (startedAtMs !== void 0) {
            stamped.startedAtMs = startedAtMs;
        }
        if (completedAtMs !== void 0) {
            stamped.completedAtMs = completedAtMs;
        }
        return stamped;
    }
    async emitTokenDeltaFromChars(ctx, newChars) {
        const combinedLength = this.leftoverTokenCharCount + newChars.length;
        const tokens = Math.floor(combinedLength / 4);
        this.leftoverTokenCharCount = combinedLength % 4;
        if (tokens > 0) {
            await this.interactionProvider.sendUpdate(ctx, Updates.tokenDelta(tokens));
        }
    }
    isConsumerSideError(error3) {
        if (!(error3 instanceof Error)) {
            return false;
        }
        if (error3.name === "CacheRuntimeError" || error3.message.includes("Cache operation") || error3.message.includes("Redis") || error3.message.includes("xadd")) {
            return true;
        }
        const stack = error3.stack ?? "";
        const stackFrames = stack.split("\n").slice(1).join("\n");
        return stackFrames.includes("sendUpdate") || stackFrames.includes("appendUpdateToConversationStreamAsync") || stackFrames.includes("pushAsync") || stackFrames.includes("conversationStream");
    }
    async consumeStream(ctx, fullStream, textHandler) {
        let _textAccumulator = "";
        let assistantStartTime;
        let currentAssistantActive = false;
        let thinkingAccumulator = "";
        let thinkingStartTime;
        let currentThinkingActive = false;
        const loopPolicy = this.singleMessageLoopPolicy;
        const loopCaller = getAgentLoopRuntime(ctx);
        const singleMessageLoopDetector = loopPolicy !== void 0 ? new SingleMessageLoopDetector2() : null;
        const reasoningLoopDetector = loopPolicy !== void 0 ? new SingleMessageLoopDetector2() : null;
        const isOutboundMessageTool = loopPolicy?.isOutboundMessageTool;
        const streamingToolNames = new Map();
        const outboundArgsLoopDetectors = new Map();
        const checkOutboundArgsForLoop = (toolCallId, toolName, argsTextDelta)=>{
            if (isOutboundMessageTool === void 0 || !isOutboundMessageTool(toolName)) {
                return;
            }
            let state = outboundArgsLoopDetectors.get(toolCallId);
            if (state === void 0) {
                state = {
                    args: new JsonStringContentStream(),
                    detector: new SingleMessageLoopDetector2()
                };
                outboundArgsLoopDetectors.set(toolCallId, state);
            }
            const newText = state.args.push(argsTextDelta);
            if (newText.length === 0) {
                return;
            }
            const result = checkForAgentSingleMessageLooping({
                ctx,
                newText,
                detector: state.detector,
                caller: loopCaller,
                reporting: loopPolicy?.reporting
            });
            if (result.loopDetected && loopPolicy?.responseAction === "retry_once") {
                throw new AgentLoopError({
                    loopType: "singleMessage",
                    loopKind: result.loopKind ?? "single_message_multi_line",
                    repetitions: result.repetitions ?? 0,
                    period: result.period,
                    evidenceFingerprint: result.evidenceFingerprint
                });
            }
        };
        const sealCurrentAssistant = async ()=>{
            if (!currentAssistantActive || assistantStartTime === void 0) {
                return;
            }
            currentAssistantActive = false;
            const startedAtMs = BigInt(assistantStartTime);
            const completedAtMs = BigInt(Date.now());
            assistantStartTime = void 0;
            if (textHandler.completeOpenMessageStep !== void 0) {
                textHandler.completeOpenMessageStep(completedAtMs);
                return;
            }
            await textHandler.recordText(ctx, "", startedAtMs, completedAtMs);
        };
        const sealCurrentThinking = async ()=>{
            if (!currentThinkingActive || thinkingStartTime === void 0) {
                return;
            }
            currentThinkingActive = false;
            if (reasoningLoopDetector !== null) {
                checkForAgentSingleMessageLooping({
                    ctx,
                    newText: "\n",
                    detector: reasoningLoopDetector,
                    caller: loopCaller,
                    channel: "reasoning",
                    reporting: loopPolicy?.reporting
                });
            }
            const completedAtMs = Date.now();
            const duration3 = Math.max(1, completedAtMs - thinkingStartTime);
            const startedAtMs = BigInt(thinkingStartTime);
            await this.interactionProvider.sendUpdate(ctx, Updates.thinkingCompleted(duration3, startedAtMs));
            await textHandler.recordThinking(ctx, "", duration3, startedAtMs, BigInt(completedAtMs));
            thinkingStartTime = void 0;
            const completedThinkingText = thinkingAccumulator;
            thinkingAccumulator = "";
            void this.onThinkingCompleted?.(ctx, {
                text: completedThinkingText,
                durationMs: duration3
            }).catch((error3)=>{
                logger52.warn(ctx, "afterAgentThought hook callback failed", {
                    error: error3 instanceof Error ? error3.message : String(error3)
                });
            });
        };
        try {
            for await (const chunk of fullStream){
                if (chunk.type === "reasoning-signature") {
                    await sealCurrentAssistant();
                    if (thinkingAccumulator.length > 0) {
                        await sealCurrentThinking();
                    }
                    continue;
                }
                if (currentThinkingActive && !THINKING_RELATED_CHUNK_TYPES.includes(chunk.type)) {
                    await sealCurrentThinking();
                }
                if (currentAssistantActive && chunk.type !== "text-delta") {
                    await sealCurrentAssistant();
                }
                if (chunk.type === "text-delta") {
                    if (!currentAssistantActive || assistantStartTime === void 0) {
                        assistantStartTime = Date.now();
                        currentAssistantActive = true;
                    }
                    const startedAtMs = BigInt(assistantStartTime);
                    _textAccumulator += chunk.textDelta;
                    if (singleMessageLoopDetector !== null) {
                        const singleMessageLoopResult = checkForAgentSingleMessageLooping({
                            ctx,
                            newText: chunk.textDelta,
                            detector: singleMessageLoopDetector,
                            caller: loopCaller,
                            reporting: loopPolicy?.reporting
                        });
                        if (singleMessageLoopResult.loopDetected && loopPolicy?.responseAction === "retry_once") {
                            throw new AgentLoopError({
                                loopType: "singleMessage",
                                loopKind: singleMessageLoopResult.loopKind ?? "single_message_multi_line",
                                repetitions: singleMessageLoopResult.repetitions ?? 0,
                                period: singleMessageLoopResult.period,
                                evidenceFingerprint: singleMessageLoopResult.evidenceFingerprint
                            });
                        }
                    }
                    await this.interactionProvider.sendUpdate(ctx, Updates.textDelta(chunk.textDelta, startedAtMs));
                    await this.emitTokenDeltaFromChars(ctx, chunk.textDelta);
                    await textHandler.recordText(ctx, chunk.textDelta, startedAtMs);
                } else if (THINKING_RELATED_CHUNK_TYPES.includes(chunk.type)) {
                    let activeThinkingStartTime = thinkingStartTime;
                    if (!currentThinkingActive || activeThinkingStartTime === void 0) {
                        activeThinkingStartTime = Date.now();
                        thinkingStartTime = activeThinkingStartTime;
                        currentThinkingActive = true;
                    }
                    const startedAtMs = BigInt(activeThinkingStartTime);
                    let delta = "";
                    if (chunk.type === "reasoning") {
                        delta = chunk.textDelta;
                    }
                    thinkingAccumulator += delta;
                    const isDerivedSummaryChunk = chunk.type === "reasoning" && chunk.providerOptions?.cursor?.isAlreadySummarizedThinking === true;
                    if (reasoningLoopDetector !== null && delta.length > 0 && !isDerivedSummaryChunk) {
                        const reasoningLoopResult = checkForAgentSingleMessageLooping({
                            ctx,
                            newText: delta,
                            detector: reasoningLoopDetector,
                            caller: loopCaller,
                            channel: "reasoning",
                            reporting: loopPolicy?.reporting
                        });
                        if (reasoningLoopResult.loopDetected && reasoningLoopResult.loopKind === "single_message_reasoning_single_line" && loopPolicy?.responseAction === "retry_once") {
                            throw new AgentLoopError({
                                loopType: "singleMessage",
                                loopKind: reasoningLoopResult.loopKind,
                                repetitions: reasoningLoopResult.repetitions ?? 0,
                                period: reasoningLoopResult.period,
                                evidenceFingerprint: reasoningLoopResult.evidenceFingerprint
                            });
                        }
                    }
                    await this.interactionProvider.sendUpdate(ctx, Updates.thinkingDelta(delta, this.thinkingStyle, startedAtMs));
                    await this.emitTokenDeltaFromChars(ctx, delta);
                    await textHandler.recordThinking(ctx, delta, void 0, startedAtMs);
                } else if (chunk.type === "tool-call-streaming-start") {
                    streamingToolNames.set(chunk.toolCallId, chunk.toolName);
                } else if (chunk.type === "tool-call-delta") {
                    checkOutboundArgsForLoop(chunk.toolCallId, chunk.toolName || (streamingToolNames.get(chunk.toolCallId) ?? ""), chunk.argsTextDelta);
                    await this.emitTokenDeltaFromChars(ctx, chunk.argsTextDelta);
                }
            }
        } catch (error3) {
            if (error3 instanceof AgentLoopError && error3.loopType === "singleMessage") {
                throw error3;
            }
            if (error3 instanceof InputTokenLimitError) {
                logger52.warn(ctx, "InputTokenLimitError will trigger blocking summarization", {
                    error: error3
                });
                return;
            }
            const streamAbortReason = ctx.reason;
            const isStreamIntentionalAbort = ctx.canceled && isIntentionalAbortReason(ctx.reason);
            if (isStreamIntentionalAbort) {
                logger52.info(ctx, "consumeStream aborted (intentional cancellation)", {
                    error: error3,
                    intentionalAbort: true,
                    abortReason: streamAbortReason?.reason
                });
            } else if (isUserAbortErrorShape(error3)) {
                logger52.info(ctx, "consumeStream aborted (user abort)", {
                    error: error3,
                    intentionalAbort: true,
                    abortReason: "user_abort_error"
                });
            } else if (ctx.canceled) {
                logger52.warn(ctx, "consumeStream aborted", {
                    error: error3,
                    intentionalAbort: false,
                    abortReason: streamAbortReason?.reason
                });
            } else {
                logger52.error(ctx, "Error in consumeStream", error3);
            }
            if (this.isConsumerSideError(error3)) {
                throw error3;
            }
        } finally{
            await sealCurrentThinking();
            await sealCurrentAssistant();
            textHandler.completeOpenMessageStep?.(BigInt(Date.now()));
        }
    }
    async emitPartialToolCall(ctx, callId, toolCall) {
        const startedAtMs = this.getOrCreateToolCallStartedAtMs(callId, toolCall.startedAtMs);
        const toolCallWithId = this.withToolCallMetadata(callId, toolCall, {
            startedAtMs
        });
        this.rememberLatestToolCall(callId, toolCallWithId);
        await this.interactionProvider.sendUpdate(ctx, Updates.partialToolCall(callId, toolCallWithId, this.invocationId));
    }
    async recordPendingToolCall(ctx, callId, toolCall) {
        const startedAtMs = this.getOrCreateToolCallStartedAtMs(callId, toolCall.startedAtMs);
        const toolCallWithId = this.withToolCallMetadata(callId, toolCall, {
            startedAtMs
        });
        const redactedToolCall = toRedactedToolCall(toolCallWithId, PrivacyMode.UNSPECIFIED);
        if (this.toolCallRecorder.recordPendingToolCall !== void 0) {
            await this.toolCallRecorder.recordPendingToolCall(ctx, redactedToolCall, callId);
            return;
        }
        await this.upsertRecordedToolCall(ctx, callId, redactedToolCall);
    }
    async emitToolCallDelta(ctx, callId, toolCallDelta) {
        this.applyDeltaToLatestToolCall(callId, toolCallDelta);
        const startedAtMs = this.getOrCreateToolCallStartedAtMs(callId, void 0);
        await this.interactionProvider.sendUpdate(ctx, Updates.toolCallDelta(callId, toolCallDelta, this.invocationId, BigInt(startedAtMs)));
    }
    async emitToolCallError(ctx, callId, erroredToolCall) {
        const shouldPreserveArgs = this.shouldPreserveArgsOnErrorCallIds.has(callId);
        const toolCallWithArgs = shouldPreserveArgs ? this.applyArgsFromLatestToolCall(callId, erroredToolCall) : erroredToolCall;
        const startedAtMs = this.getOrCreateToolCallStartedAtMs(callId, toolCallWithArgs.startedAtMs);
        const toolCallWithId = this.withToolCallMetadata(callId, toolCallWithArgs, {
            startedAtMs,
            completedAtMs: Date.now()
        });
        this.toolCallStartedAtMsByCallId.delete(callId);
        this.latestToolCallsById.delete(callId);
        this.shouldPreserveArgsOnErrorCallIds.delete(callId);
        await this.interactionProvider.sendUpdate(ctx, Updates.toolCallCompleted(callId, toolCallWithId, this.invocationId));
        const redactedToolCall = toRedactedToolCall(toolCallWithId, PrivacyMode.UNSPECIFIED);
        if (toolCallWithId.tool.case === "askQuestionToolCall" || toolCallWithId.tool.case === "mcpAuthToolCall") {
            await this.upsertRecordedToolCall(ctx, callId, redactedToolCall);
        } else {
            this.toolCallRecorder.recordToolCall(redactedToolCall, callId);
        }
    }
    async recordToolCallResult(ctx, result, loggedToolName, errorClassification) {
        let totalTextLength = 0;
        for (const part of result.content){
            if (part.type === "text") {
                totalTextLength += part.text.length;
                await this.emitTokenDeltaFromChars(ctx, part.text);
            }
        }
        if (totalTextLength > 0) {
            const approximateTokens = Math.floor(totalTextLength / 4);
            toolCallOutputTokens.histogram(ctx, approximateTokens, {
                tool_name: loggedToolName
            });
            toolCallResultTokens.histogram(ctx, approximateTokens, {
                tool_name: loggedToolName,
                success: errorClassification === void 0 ? "true" : "false"
            });
        }
    }
    async sendHeartbeat(ctx) {
        await this.interactionProvider.sendUpdate(ctx, Updates.heartbeat());
    }
    async executeToolCall(parentCtx, toolCall, callId, promiseFn, resultMergeFn, hookContextCollector) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            if (parentCtx.get(toolExecutionDisabledKey)) {
                throw new ToolCallAbortedError({
                    intentional: true,
                    reason: "tool execution disabled for this run"
                });
            }
            const spanCtxt = __addDisposableResource50(env_1, createSpan(parentCtx.withName("executeToolCall")), false);
            const ctx = spanCtxt.ctx;
            const toolCallStartedAtMs = this.getOrCreateToolCallStartedAtMs(callId, toolCall.startedAtMs);
            const startSendStartMs = Date.now();
            {
                const env_2 = {
                    stack: [],
                    error: void 0,
                    hasError: false
                };
                try {
                    const startSendSpan = __addDisposableResource50(env_2, createSpan(ctx.withName("executeToolCall.sendStartUpdate")), false);
                    const toolCallWithId = this.withToolCallMetadata(callId, toolCall, {
                        startedAtMs: toolCallStartedAtMs
                    });
                    this.rememberLatestToolCall(callId, toolCallWithId);
                    await this.interactionProvider.sendUpdate(startSendSpan.ctx, Updates.toolCallStarted(callId, toolCallWithId, this.invocationId));
                } catch (e_1) {
                    env_2.error = e_1;
                    env_2.hasError = true;
                } finally{
                    __disposeResources50(env_2);
                }
            }
            const startSendMs = Date.now() - startSendStartMs;
            if (startSendMs > 1e3) {
                logger52.warn(ctx, "nal.await_stall.start_send_slow", {
                    callId,
                    toolName: toolCall.tool?.case ?? "unknown",
                    startSendMs
                });
            }
            const startTime = Date.now();
            let result;
            const abortSignal = this.getAbortSignal(ctx);
            const resolvers = Promise.withResolvers();
            if (abortSignal.aborted) {
                throw new ToolCallAbortedError();
            } else {
                abortSignal.addEventListener("abort", ()=>{
                    resolvers.reject(new ToolCallAbortedError());
                }, {
                    once: true
                });
            }
            promiseFn(ctx).then((r)=>{
                result = r;
                const newToolCall2 = resultMergeFn(r);
                if (hookContextCollector && hookContextCollector.length > 0) {
                    newToolCall2.hookAdditionalContexts.push(...hookContextCollector);
                }
                resolvers.resolve(newToolCall2);
            }).catch((error3)=>{
                resolvers.reject(error3);
            });
            const newToolCall = this.withToolCallMetadata(callId, await resolvers.promise, {
                startedAtMs: toolCallStartedAtMs,
                completedAtMs: Date.now()
            });
            this.toolCallStartedAtMsByCallId.delete(callId);
            this.rememberLatestToolCall(callId, newToolCall);
            const toolExecutionMs = Date.now() - startTime;
            const toolName = toolCall.tool?.case ?? "unknown";
            const toolLabels = {
                tool_name: toolName,
                harness_tool_name: ctx.get(toolCallNameKey) ?? "unknown"
            };
            toolCallLatency.histogram(ctx, toolExecutionMs, toolLabels);
            toolCallCount.increment(ctx, 1, toolLabels);
            const completionSendStartMs = Date.now();
            {
                const env_3 = {
                    stack: [],
                    error: void 0,
                    hasError: false
                };
                try {
                    const completionSendSpan = __addDisposableResource50(env_3, createSpan(ctx.withName("executeToolCall.sendCompletionUpdate")), false);
                    await this.interactionProvider.sendUpdate(completionSendSpan.ctx, Updates.toolCallCompleted(callId, newToolCall, this.invocationId));
                } catch (e_2) {
                    env_3.error = e_2;
                    env_3.hasError = true;
                } finally{
                    __disposeResources50(env_3);
                }
            }
            const completionSendMs = Date.now() - completionSendStartMs;
            if (completionSendMs > 1e3) {
                logger52.warn(ctx, "nal.await_stall.completion_send_slow", {
                    callId,
                    toolName,
                    toolExecutionMs,
                    completionSendMs
                });
            }
            const redactedToolCall = toRedactedToolCall(newToolCall, PrivacyMode.UNSPECIFIED);
            if (newToolCall.tool.case === "askQuestionToolCall" || newToolCall.tool.case === "mcpAuthToolCall") {
                await this.upsertRecordedToolCall(ctx, callId, redactedToolCall);
            } else {
                this.toolCallRecorder.recordToolCall(redactedToolCall, callId);
            }
            this.latestToolCallsById.delete(callId);
            this.shouldPreserveArgsOnErrorCallIds.delete(callId);
            return result;
        } catch (e_3) {
            env_1.error = e_3;
            env_1.hasError = true;
        } finally{
            __disposeResources50(env_1);
        }
    }
    async query(ctx, query) {
        return this.interactionProvider.query(ctx, query);
    }
};

}
