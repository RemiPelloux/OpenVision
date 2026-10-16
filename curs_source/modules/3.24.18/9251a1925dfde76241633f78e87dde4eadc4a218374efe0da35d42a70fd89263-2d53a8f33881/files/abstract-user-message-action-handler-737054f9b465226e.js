import { init_dist7 } from "../../../../agent-core/dist/index.js";
import { DeferredInteractionResponseError } from "../../../../agent-core/dist/interaction-queries.js";
import { Updates } from "../../../../agent-core/dist/interaction-updates.js";
import { RedactedUpdates } from "../../../../agent-core/dist/redacted-interaction-updates.js";
import { init_server } from "../../../../agent-core/dist/server.js";
import { agentStoreConflictNoticeExecutorResource } from "../../../../agent-exec/dist/agent-store-conflict-notice.js";
import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { BackgroundSummarizationMode } from "../../../../agent-summarization/dist/background-summarization.js";
import { init_dist29 } from "../../../../agent-summarization/dist/index.js";
import { SummarizationHandler } from "../../../../agent-summarization/dist/summarization-handler.js";
import { init_ask_question_completion } from "../ask-question-completion.js";
import { init_common12 } from "../common.js";
import { init_summarization_tool_context } from "../summarization-tool-context.js";
import { init_synthetic_user_message } from "./synthetic-user-message.js";
import { init_user_message_run_warning } from "./user-message-run-warning.js";
import { InteractionHandler, init_interaction_handler } from "../../interaction-handler.js";
import { init_long_reasoning_reminder } from "../../long-reasoning-reminder.js";
import { AgentLoopError, init_agent_loop_detector } from "../../loop-detection/agent-loop-detector.js";
import { init_pending_tool_call_contract } from "../../pending-tool-call-contract.js";
import { init_project_send_message_visibility_reminder } from "../../project-send-message-visibility-reminder.js";
import { init_prompt_suggestion_handler } from "../../prompt-suggestion/prompt-suggestion-handler.js";
import { init_apply_reminders } from "../../reminders/apply-reminders.js";
import { init_shim } from "../../shims/shim.js";
import { AgentConversationTurnHandle, init_state } from "../../state.js";
import { init_steer_idle_sample_preemption } from "../../steer-idle-sample-preemption.js";
import { init_summarization_lifecycle } from "../../summarization-lifecycle.js";
import { backgroundSummarizationDiscarded, init_summarization_orchestrator } from "../../summarization-orchestrator.js";
import { init_summarization_pending_store, pendingSummaryAdoption } from "../../summarization-pending-store.js";
import { init_summarization_stale_tokens } from "../../summarization-stale-tokens.js";
import { init_error_class_name } from "../../telemetry/error-class-name.js";
import { ToolCountingStateTracker, init_tool_counting_middleware } from "../../tool-counting-middleware.js";
import { init_tool_stream_executor } from "../../tool-stream-executor.js";
import { init_common9 } from "../../tools/common.js";
import { init_core5 } from "../../tools/core.js";
import { init_connect_error2 } from "../../tools/core/connect-error.js";
import { FileOperationLockManager, init_file_operation_lock_manager } from "../../tools/core/file-operation-lock-manager.js";
import { init_remote_hooks } from "../../tools/core/remote-hooks.js";
import { init_task_tool_name } from "../../tools/task-tool-name.js";
import { init_tool_call_id_tagging } from "../../tools/tool-call-id-tagging.js";
import { init_tool_call_name, toolCallNameKey } from "../../tools/tool-call-name.js";
import { getAgentEventTracker, init_event_tracking } from "../../utils/event-tracking.js";
import { init_invocation_id } from "../../utils/invocation-id.js";
import { init_mcp_meta_tool } from "../../utils/mcp-meta-tool.js";
import { init_next_redacted_prompt_context_details } from "../../utils/next-redacted-prompt-context-details.js";
import { EVAL_ENFORCED_WAIT_FOR_SUMMARIZATION_COMPLETION, init_overridable_config } from "../../utils/overridable-config.js";
import { init_prompt_token_tracking } from "../../utils/prompt-token-tracking.js";
import { cloudAgentTurnPrepGlueMsRecorderKey, firstStepSetupMsRecorderKey, getRequestId, init_request_id } from "../../utils/request-id.js";
import { init_turn_failure_telemetry } from "../../utils/turn-failure-telemetry.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { InputTokenLimitError, OutputTokensLimitExceededError, ProactiveSummarizationThresholdError } from "../../../../chat-inference/dist/prompt-executor.js";
import { init_dist2 } from "../../../../constants/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { conflictNoticeAck, conflictNoticeRelease, conflictNoticeSyncAndPeek, createCounter, createHistogram, mcpInputSchemaToJson, sanitizeSystemReminderContent } from "../../../../dist_exports.js";
import { init_dist6 } from "../../../../hooks/dist/index.js";
import { advanceLongReasoningReminder, alternateModelIdForAnalytics, appendToolCallIdTagsToToolResults, applyAskQuestionCompletion, applyConversationStateOp, applyRemindersToToolResults, buildSummarizationToolContext, classifyTurnError, computeRestoredTokenStaleness, containsToolCall, conversationStateOpsInReplayOrder, countAssistantMessages, countImagePartsInMessages, countStartingToolRequests, createIdleModelSamplePreempter, createLoopReminderMessage, createProjectSendMessageVisibilityReminder, createRedactedConversationTokenDetails, createRedactedString, createSplitStepStateHandler, createToolCountingMiddleware, defineShim, emitSummaryLifecycleDeferred, enrichPendingToolCallJson, ensureUserMessageTiming, errorNameTag, executeDeferredToolCall, executeRemoteAfterAgentThoughtHook, extractAssistantText, extractAutomationTriggerContext, extractToolMetadataMap, fromRedactedCoreMessages, fromRedactedMcpToolDefinition, fromRedactedRequestContext, fromRedactedTodoItem, fromRedactedUserMessage2, getAdmittedEffectiveToolName, getAllRules, getAutoRoutingReasonFromContext, getBackgroundSummarizationTriggerThreshold, getClientVersionMetricTagsFromContext, getDirectDynamicToolNames, getEffectiveToolCallArgs, getEffectiveToolCallName, getExecutableTools, getFinalAssistantMessageCharacterCount, getFinalAssistantMessageUxStats, getInvocationId, getIsAnysphereTeamFromContext, getIsAutoFromContext, getIsDevFromContext, getIsPremiumFromContext, getIsSubagentFromContext, getIsUserApiKeyFromContext, getProjectPermissionsFileAutoRunInstructions, getSdkFlavorMetricTagFromContext, getSignificantOverageThreshold, getTaskToolName, getToolResultsCompletedBeforeDeferral, getToolSetMcpMetaToolServerCount, getTurnFailureTelemetrySink, getUserPermissionsFileAutoRunInstructions, hasEmptyAssistantText, hasProjectSendMessageReminderForCurrentRequest, hasReflectGeneralToolCall, incrementLoopRetryOutcome, incrementProviderDecodeRetryOutcome, isGoalContinuationNotificationMessage, isNotificationOnlyUserMessage, isProviderDecodeError, isSignificantlyOverTokenLimit, isTooManyImagesOrDocumentsError, isTrailingTaskToolCallMessage, logShimFiring, nextRedactedPromptContextDetails, persistsWithoutThreshold, recordLongReasoningReminderLifecycle, recordLongReasoningReminderOpportunity, reportLoopMitigationObservation, requestPromptSuggestion, resolveAgentSingleMessageLoopDetection, resolveWriteBarrierTimeoutMs, resumeSummaryLifecycle, shouldForceSummarizationForTesting, shouldPersistBackgroundSummarization, shouldStartBackgroundSummarization, shouldTagToolCallIdsForCurrentContext, stepModelCallContext, takePendingSummaryForAdoption, toAgentTools, toRedactedCoreMessages, toRedactedInteractionUpdate, toRedactedUserMessage2, toUnredactedInteractionListener, toolCallTelemetryName, trackPromptTokenUsage, trailingToolBatchHasFailure, warnIfLongTrailingUserMessageRun, willRetryProviderDecodeError, withCloudAgentPreAgentTurnPrepPhase, withModelStreamChunkObserver } from "../../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
import { Code } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { init_esm3 } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_index_esm } from "../../../../node_modules/.pnpm/re2js@1.2.2/node_modules/re2js/build/index.esm.js";
import { AgentMode, InteractionUpdate, ResponseComparisonCompleted, ResponseComparisonDisplayOrder, ResponseComparisonSkipReason, ResponseComparisonSkipped, ResponseComparisonStarted, ResponseComparisonTextDelta, ResponseComparisonUpdate, UserMessage, init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { RequestContext, init_request_context_exec_pb } from "../../../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { TodoStatus, init_todo_tool_pb } from "../../../../proto/dist/generated/agent/v1/todo_tool_pb.js";
import { PrivacyMode, init_privacy_mode_pb } from "../../../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
import { init_agent_v1 } from "../../../../redacted-protos/dist/agent-v1.js";
import { DataClassification, PrivacyCapability } from "../../../../redaction/dist/classification.js";
import { init_dist27 } from "../../../../redaction/dist/index.js";
import { isProjectSendMessageEnabled } from "../../../../utils_pb_exports.js";
var import_node_crypto32, __addDisposableResource62, __disposeResources62, logger74, singleMessageLoopRetry, DEFAULT_CLI_REFLECT_GENERAL_REMINDER_INTERVAL, DEFAULT_CLI_REFLECT_GENERAL_MAX_FOLLOW_UPS_PER_TURN, DEFAULT_CLI_REFLECT_GENERAL_REMINDER_TEXT, IMAGE_SUMMARIZATION_TRIGGER_COUNT, AGENT_RESPONSE_COMPARISON_TIMEOUT_MS, MAX_RESPONSE_COMPARISON_WARMUPS_PER_TURN, FINAL_ASSISTANT_MESSAGE_UX_STAT_NAMES, agentStepCount, agentStoreConflictBarrier, steerIdleSamplePreempted, steerIdleSamplePreemptedAfterMs, firstStepSetupDuration, agentTurnDuration, agentTurnResult, agentToolCallsPerTurn, finalAssistantMessageCharacters, finalAssistantMessageUxStatsMetric, unifiedHandlerNumberOfToolCalls, unfinishedTodosMetric, emptyResponseRetryClassification, loopRetryOutcome, providerDecodeRetryOutcome, EMPTY_RESPONSE_CONTINUATION_MESSAGE, EmptyResponseRetryError, StepRetriesExhaustedError, MaxStepsReachedError2, MAX_RETRY_ITERATIONS, MAX_EMPTY_RESPONSE_RETRIES_PER_TURN, toolCallArgsOutputTokens, toolCallArgsCacheWriteTokens, toolCallResultInputTokens, toolCallResultCachedReadTokens, numberOfParallelToolCalls, numberOfParallelToolCallsWithAtLeastOneCall, AbstractUserMessageActionHandler;
export { AGENT_RESPONSE_COMPARISON_TIMEOUT_MS, AbstractUserMessageActionHandler, DEFAULT_CLI_REFLECT_GENERAL_MAX_FOLLOW_UPS_PER_TURN, DEFAULT_CLI_REFLECT_GENERAL_REMINDER_INTERVAL, DEFAULT_CLI_REFLECT_GENERAL_REMINDER_TEXT, EMPTY_RESPONSE_CONTINUATION_MESSAGE, EmptyResponseRetryError, FINAL_ASSISTANT_MESSAGE_UX_STAT_NAMES, IMAGE_SUMMARIZATION_TRIGGER_COUNT, MAX_EMPTY_RESPONSE_RETRIES_PER_TURN, MAX_RESPONSE_COMPARISON_WARMUPS_PER_TURN, MAX_RETRY_ITERATIONS, MaxStepsReachedError2, StepRetriesExhaustedError, __addDisposableResource62, __disposeResources62, agentStepCount, agentStoreConflictBarrier, agentToolCallsPerTurn, agentTurnDuration, agentTurnResult, emptyResponseRetryClassification, finalAssistantMessageCharacters, finalAssistantMessageUxStatsMetric, firstStepSetupDuration, import_node_crypto32, logger74, loopRetryOutcome, numberOfParallelToolCalls, numberOfParallelToolCallsWithAtLeastOneCall, providerDecodeRetryOutcome, singleMessageLoopRetry, steerIdleSamplePreempted, steerIdleSamplePreemptedAfterMs, toolCallArgsCacheWriteTokens, toolCallArgsOutputTokens, toolCallResultCachedReadTokens, toolCallResultInputTokens, unfinishedTodosMetric, unifiedHandlerNumberOfToolCalls };
var __wakaru_init_abstract_user_message_action_handler_initialized = false;
export function init_abstract_user_message_action_handler() {
if (__wakaru_init_abstract_user_message_action_handler_initialized) return;
__wakaru_init_abstract_user_message_action_handler_initialized = true;
"use strict";
import_node_crypto32 = require("node:crypto");
init_dist7();
init_server();
init_dist8();
init_dist29();
init_dist26();
init_dist2();
init_dist();
init_dist6();
init_dist4();
init_agent_pb();
init_request_context_exec_pb();
init_todo_tool_pb();
init_privacy_mode_pb();
init_agent_v1();
init_dist27();
init_esm3();
init_index_esm();
init_interaction_handler();
init_long_reasoning_reminder();
init_agent_loop_detector();
init_pending_tool_call_contract();
init_project_send_message_visibility_reminder();
init_prompt_suggestion_handler();
init_apply_reminders();
init_shim();
init_state();
init_steer_idle_sample_preemption();
init_summarization_lifecycle();
init_summarization_orchestrator();
init_summarization_pending_store();
init_summarization_stale_tokens();
init_error_class_name();
init_tool_counting_middleware();
init_tool_stream_executor();
init_common9();
init_connect_error2();
init_file_operation_lock_manager();
init_remote_hooks();
init_core5();
init_task_tool_name();
init_tool_call_name();
init_tool_call_id_tagging();
init_event_tracking();
init_invocation_id();
init_mcp_meta_tool();
init_next_redacted_prompt_context_details();
init_overridable_config();
init_prompt_token_tracking();
init_request_id();
init_turn_failure_telemetry();
init_ask_question_completion();
init_common12();
init_summarization_tool_context();
init_synthetic_user_message();
init_user_message_run_warning();
init_synthetic_user_message();
__addDisposableResource62 = function(env, value, async) {
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
__disposeResources62 = (function(SuppressedError2) {
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
logger74 = createLogger("@anysphere/agent");
singleMessageLoopRetry = defineShim({
    name: "single_message_loop_retry"
});
DEFAULT_CLI_REFLECT_GENERAL_REMINDER_INTERVAL = 10;
DEFAULT_CLI_REFLECT_GENERAL_MAX_FOLLOW_UPS_PER_TURN = -1;
DEFAULT_CLI_REFLECT_GENERAL_REMINDER_TEXT = "<system_reminder>You MUST now use the Reflect tool to reflect on your current progress</system_reminder>";
IMAGE_SUMMARIZATION_TRIGGER_COUNT = 85;
AGENT_RESPONSE_COMPARISON_TIMEOUT_MS = 6e4;
MAX_RESPONSE_COMPARISON_WARMUPS_PER_TURN = 5;
FINAL_ASSISTANT_MESSAGE_UX_STAT_NAMES = [
    "character_count",
    "word_count",
    "line_count",
    "paragraph_count",
    "sentence_count",
    "heading_count",
    "list_item_count",
    "code_block_count",
    "inline_code_count",
    "link_count"
];
agentStepCount = createCounter("agent.step.count", {
    description: "The number of steps taken by the agent"
});
agentStoreConflictBarrier = createCounter("agent.store.conflict_barrier", {
    description: "Local-sync conflict turn-end barrier outcomes",
    labelNames: [
        "outcome",
        "timed_out"
    ]
});
steerIdleSamplePreempted = createCounter("agent.context_injection.idle_sample_preempted", {
    description: "Model samples abandoned for a pending steer before any tool call or visible text",
    labelNames: [
        "phase"
    ]
});
steerIdleSamplePreemptedAfterMs = createHistogram("agent.context_injection.idle_sample_preempted_after_ms", {
    description: "Sample age (ms since the model request was sent) when a steer preempted it"
});
firstStepSetupDuration = createHistogram("agent.ttft.firstStepSetupMs", {
    description: "Time from runStep entry to executeToolStream call (tool generation, message preparation) on the first step only"
});
agentTurnDuration = createHistogram("agent.turn.duration_ms", {
    description: "Duration of agent turn execution in milliseconds"
});
agentTurnResult = createCounter("agent.turn.result", {
    description: "Result status of agent turn execution",
    labelNames: [
        "outcome",
        "error_class",
        "newConversation",
        "isauto",
        "ispremium",
        "isanysphereteam",
        "isuserapikey",
        "issubagent",
        "autoroutingreason"
    ]
});
agentToolCallsPerTurn = createHistogram("agent.turn.tool_calls", {
    description: "Total number of tool calls executed in a turn",
    labelNames: [
        "outcome",
        "clientversion",
        "clienttype",
        "sdkflavor",
        "user.is_dev"
    ]
});
finalAssistantMessageCharacters = createHistogram("agent.turn.final_assistant_message_chars", {
    description: "Character count of the final assistant message when a turn completes"
});
finalAssistantMessageUxStatsMetric = createHistogram("agent.turn.final_assistant_message_ux_stats", {
    description: "UX stats for the final assistant message when a turn completes",
    labelNames: [
        "stat"
    ]
});
unifiedHandlerNumberOfToolCalls = createHistogram("agent.unified_handler_number_of_tool_calls", {
    description: "Number of tool calls in unified handler",
    labelNames: [
        "model",
        "hasFailedToolCalls",
        "hasUnexpectedToolCallErrors",
        "success",
        "errorName"
    ]
});
unfinishedTodosMetric = createCounter("agent.turn.unfinished_todos", {
    description: "Number of unfinished todos at the end of a turn"
});
emptyResponseRetryClassification = createCounter("nal.empty_response.retry_classification", {
    description: "Retry classification for empty model responses",
    labelNames: [
        "retryAction",
        "didRetry"
    ]
});
loopRetryOutcome = createCounter("nal.loop.retry_outcome", {
    description: "Outcome of the NAL single-message loop in-step retry (observe only)",
    labelNames: [
        "outcome",
        "loop_kind"
    ]
});
providerDecodeRetryOutcome = createCounter("nal.provider_decode_error.retry_outcome", {
    description: "Outcome of the one-shot step retry after a provider output-decode error",
    labelNames: [
        "outcome"
    ]
});
EMPTY_RESPONSE_CONTINUATION_MESSAGE = "<system_reminder>Please continue. Respond to the user or make tool calls.</system_reminder>";
EmptyResponseRetryError = class extends Error {
    constructor(retryAction, needsContinuationMessage2){
        super(`Empty model response, retry action: ${retryAction}`);
        this.name = "EmptyResponseRetryError";
        this.retryAction = retryAction;
        this.needsContinuationMessage = needsContinuationMessage2;
    }
};
StepRetriesExhaustedError = class extends Error {
    constructor(reason, options2){
        super("Failed to run step, exceeded max retries", options2);
        this.reason = reason;
        this.isStepRetriesExhausted = true;
        this.name = "StepRetriesExhaustedError";
    }
};
MaxStepsReachedError2 = class extends Error {
    constructor(maxSteps, options2){
        super("Reached maximum number of steps before turn ended (possible looping?)", options2);
        this.maxSteps = maxSteps;
        this.name = "MaxStepsReachedError";
    }
};
MAX_RETRY_ITERATIONS = 5;
MAX_EMPTY_RESPONSE_RETRIES_PER_TURN = 3;
toolCallArgsOutputTokens = createHistogram("tool_call.args.output_tokens", {
    description: "Output tokens for tool call arguments",
    labelNames: [
        "toolCallName"
    ]
});
toolCallArgsCacheWriteTokens = createHistogram("tool_call.args.cache_write_tokens", {
    description: "Cache write tokens for tool call arguments",
    labelNames: [
        "toolCallName"
    ]
});
toolCallResultInputTokens = createHistogram("tool_call.result.input_tokens", {
    description: "Input tokens for tool call result",
    labelNames: [
        "toolCallName"
    ]
});
toolCallResultCachedReadTokens = createHistogram("tool_call.result.cached_read_tokens", {
    description: "Cached read tokens for tool call result",
    labelNames: [
        "toolCallName"
    ]
});
numberOfParallelToolCalls = createHistogram("agent.unified_handler.model_invocation.number_of_parallel_tool_calls", {
    description: "Number of parallel tool calls in a model invocation",
    labelNames: [
        "hasFailedToolCalls",
        "hasUnexpectedToolCallErrors",
        "success",
        "errorName"
    ]
});
numberOfParallelToolCallsWithAtLeastOneCall = createHistogram("agent.unified_handler.model_invocation.number_of_parallel_tool_calls_with_at_least_one_call", {
    description: "Number of parallel tool calls in a model invocation when there is at least one call",
    labelNames: [
        "hasFailedToolCalls",
        "hasUnexpectedToolCallErrors",
        "success",
        "errorName",
        "clientversion",
        "clienttype",
        "user.is_dev"
    ]
});
AbstractUserMessageActionHandler = class {
    constructor(config2, resourceAccessor, interactionListener, summarizationHandler, conversationActionReceiver, orchestrator){
        this.config = config2;
        this.resourceAccessor = resourceAccessor;
        this.interactionListener = interactionListener;
        this.summarizationHandler = summarizationHandler;
        this.conversationActionReceiver = conversationActionReceiver;
        this.orchestrator = orchestrator;
        this.cachedAutomationTriggerContext = null;
        this.responseComparisonSequence = 0;
        this.responseComparisonPendingUiAttempted = false;
        this.responseComparisonModelStepStarted = false;
        this.responseComparisonWarmupsInTurn = 0;
    }
    resolveWriteBarrierTimeoutMs() {
        return resolveWriteBarrierTimeoutMs(this.config);
    }
    getAutomationTriggerContext(messages) {
        if (this.config.automationInstructions === void 0) {
            return void 0;
        }
        if (this.cachedAutomationTriggerContext !== null) {
            return this.cachedAutomationTriggerContext;
        }
        const result = extractAutomationTriggerContext(messages);
        this.cachedAutomationTriggerContext = result;
        return result;
    }
    getUserPermissionsFileAutoRunInstructions(ctx, requestContext) {
        return getUserPermissionsFileAutoRunInstructions(ctx, this.config, requestContext);
    }
    getProjectPermissionsFileAutoRunInstructions(requestContext) {
        return getProjectPermissionsFileAutoRunInstructions(requestContext);
    }
    observeLongReasoningReminderCall(ctx, turn, reasoningTokens) {
        const config2 = this.config.longReasoningReminder;
        if (config2 === void 0) {
            return;
        }
        const previousPending = turn.getPendingLongReasoningReminder();
        const transition = advanceLongReasoningReminder(config2, previousPending, reasoningTokens);
        if (transition.opportunity && reasoningTokens !== void 0) {
            recordLongReasoningReminderOpportunity(ctx, config2, reasoningTokens);
            if (!turn.hasLoggedLongReasoningReminderExposure()) {
                turn.markLongReasoningReminderExposureLogged();
                try {
                    config2.onFirstEligibleOpportunity?.();
                } catch (error3) {
                    logger74.warn(ctx, "Long-reasoning reminder exposure hook failed open", {
                        error: error3
                    });
                }
            }
        }
        if (transition.scheduled) {
            recordLongReasoningReminderLifecycle(ctx, config2, "scheduled");
        }
        if (transition.coalesced) {
            recordLongReasoningReminderLifecycle(ctx, config2, "coalesced");
        }
        if (previousPending?.remainingDelayCalls !== transition.nextPending?.remainingDelayCalls) {
            turn.setPendingLongReasoningReminder(transition.nextPending);
        }
    }
    applyLongReasoningReminderAfterStep(ctx, turn, rootPromptExecutor, privacyMode, hasToolCall) {
        const config2 = this.config.longReasoningReminder;
        const pending = turn.getPendingLongReasoningReminder();
        if (config2 === void 0 || pending === void 0) {
            return;
        }
        if (!hasToolCall) {
            turn.setPendingLongReasoningReminder(void 0);
            recordLongReasoningReminderLifecycle(ctx, config2, "expired");
            return;
        }
        if (pending.remainingDelayCalls > 0) {
            return;
        }
        rootPromptExecutor.appendMessages(toRedactedCoreMessages([
            {
                role: "user",
                content: `<system_reminder>${sanitizeSystemReminderContent(config2.reminderText)}</system_reminder>`
            }
        ], privacyMode));
        turn.setPendingLongReasoningReminder(void 0);
        recordLongReasoningReminderLifecycle(ctx, config2, "injected");
    }
    tapAgentResponseComparisonWarmup(ctx, fullStream, messages, tools) {
        const capability = this.config.agentResponseComparison;
        if (capability?.warm === void 0 || messages === void 0 || tools === void 0 || this.pendingResponseComparison === void 0) {
            return fullStream;
        }
        const maybeWarm = ()=>this.maybeWarmAgentResponseComparison(ctx, capability, messages, tools);
        return (async function*() {
            let warmTriggered = false;
            for await (const part of fullStream){
                if (!warmTriggered && part.type === "text-delta") {
                    warmTriggered = true;
                    maybeWarm();
                }
                yield part;
            }
        })();
    }
    maybeWarmAgentResponseComparison(ctx, capability, messages, tools) {
        const pending = this.pendingResponseComparison;
        if (pending === void 0 || capability.warm === void 0 || this.responseComparisonWarmupsInTurn >= MAX_RESPONSE_COMPARISON_WARMUPS_PER_TURN) {
            return;
        }
        this.responseComparisonWarmupsInTurn += 1;
        void capability.warm({
            ctx,
            selection: pending.preparedAttempt.selection,
            messages,
            tools
        }).catch((error3)=>{
            logger74.warn(ctx, "Agent response comparison warmup failed open", {
                error: error3
            });
        });
    }
    async preparePendingAgentResponseComparison(args) {
        const capability = this.config.agentResponseComparison;
        if (this.responseComparisonPendingUiAttempted || capability?.supportsPendingUi !== true || capability.preselect === void 0 || this.interactionListener.enqueuePostTurnEndedWork === void 0 || args.privacyMode !== PrivacyMode.USAGE_CODEBASE_TRAINING_ALLOWED) {
            return;
        }
        this.responseComparisonPendingUiAttempted = true;
        let preparedAttempt;
        try {
            preparedAttempt = await capability.preselect({
                isByok: getIsUserApiKeyFromContext(args.ctx),
                isSubagent: getIsSubagentFromContext(args.ctx)
            });
        } catch (error3) {
            logger74.warn(args.ctx, "Agent response comparison preselection failed open", {
                error: error3
            });
            return;
        }
        if (preparedAttempt === void 0) {
            return;
        }
        const pending = {
            kind: "awaiting-parent",
            ...args,
            preparedAttempt,
            comparisonId: (0, import_node_crypto32.randomUUID)(),
            alternateInvocationId: getInvocationId(args.ctx)
        };
        this.pendingResponseComparison = pending;
        try {
            await this.sendAgentResponseComparisonEvent({
                ctx: args.ctx,
                privacyMode: args.privacyMode,
                comparisonId: pending.comparisonId,
                event: {
                    case: "started",
                    value: new ResponseComparisonStarted({
                        displayOrder: preparedAttempt.selection.displayOrder === "parent-first" ? ResponseComparisonDisplayOrder.PARENT_FIRST : ResponseComparisonDisplayOrder.ALTERNATE_FIRST,
                        parentInvocationId: args.parentInvocationId,
                        alternateInvocationId: pending.alternateInvocationId,
                        parentResponse: "",
                        comparisonConfigId: preparedAttempt.selection.comparisonConfigId,
                        alternateModelId: alternateModelIdForAnalytics(preparedAttempt.selection)
                    })
                }
            });
        } catch (error3) {
            this.pendingResponseComparison = void 0;
            logger74.warn(args.ctx, "Agent response comparison pending update failed open", {
                error: error3
            });
        }
    }
    async finalizePendingAgentResponseComparison(shouldCompare) {
        const pending = this.pendingResponseComparison;
        if (pending === void 0) {
            return;
        }
        if (!shouldCompare || pending.kind !== "parent-ready") {
            await this.cancelPendingAgentResponseComparison();
            return;
        }
        this.pendingResponseComparison = void 0;
        this.interactionListener.enqueuePostTurnEndedWork?.(()=>this.runAgentResponseComparison({
                ctx: pending.ctx,
                parentInvocationId: pending.parentInvocationId,
                parentResponse: pending.parentResponse,
                messages: pending.messages,
                tools: pending.tools,
                privacyMode: pending.privacyMode,
                selection: pending.preparedAttempt.selection,
                preparedAttempt: pending.preparedAttempt,
                pendingUi: true,
                comparisonId: pending.comparisonId,
                alternateInvocationId: pending.alternateInvocationId
            }));
    }
    async cancelPendingAgentResponseComparison(reason = ResponseComparisonSkipReason.CANCELLED) {
        const pending = this.pendingResponseComparison;
        if (pending === void 0) {
            return;
        }
        this.pendingResponseComparison = void 0;
        try {
            await this.sendAgentResponseComparisonEvent({
                ctx: pending.ctx,
                privacyMode: pending.privacyMode,
                comparisonId: pending.comparisonId,
                event: {
                    case: "skipped",
                    value: new ResponseComparisonSkipped({
                        reason
                    })
                }
            });
        } catch (error3) {
            logger74.warn(pending.ctx, "Agent response comparison skip update failed open", {
                error: error3
            });
        }
    }
    async checkpointToolResultsCompletedBeforeDeferral({ ctx, stateHandler, pendingToolCalls, completedToolResults, onStateUpdate }) {
        if (completedToolResults.length === 0 || onStateUpdate === void 0) {
            return;
        }
        try {
            const current = await stateHandler.computeNewStructure(ctx);
            current.pendingToolCalls = [
                ...pendingToolCalls,
                ...completedToolResults.map((message)=>JSON.stringify(message))
            ].map((p2)=>createRedactedString(p2, DataClassification.CODE, "pendingToolCalls", PrivacyMode.UNSPECIFIED));
            await onStateUpdate(ctx, current);
        } catch (error3) {
            logger74.error(ctx, "Failed to checkpoint tool results completed before the deferred interaction", {
                error: error3
            });
        }
    }
    async enqueueAgentResponseComparisonIfEligible(args) {
        const capability = this.config.agentResponseComparison;
        if (capability === void 0 || this.interactionListener.enqueuePostTurnEndedWork === void 0) {
            return;
        }
        if (capability.supportsPendingUi && this.responseComparisonPendingUiAttempted) {
            const pending = this.pendingResponseComparison;
            if (pending === void 0) {
                return;
            }
            if (args.privacyMode !== PrivacyMode.USAGE_CODEBASE_TRAINING_ALLOWED || containsToolCall(args.responseMessages)) {
                await this.cancelPendingAgentResponseComparison();
                return;
            }
            let finalAssistantMessage2;
            for(let index = args.responseMessages.length - 1; index >= 0; index--){
                const message = args.responseMessages[index];
                if (message?.role === "assistant") {
                    finalAssistantMessage2 = message;
                    break;
                }
            }
            const responseText2 = finalAssistantMessage2 === void 0 ? void 0 : extractAssistantText(finalAssistantMessage2);
            if (responseText2 === void 0 || !pending.preparedAttempt.isParentLengthEligible(responseText2)) {
                await this.cancelPendingAgentResponseComparison();
                return;
            }
            this.pendingResponseComparison = {
                ...pending,
                kind: "parent-ready",
                parentInvocationId: args.parentInvocationId,
                parentResponse: responseText2,
                messages: args.messages,
                tools: args.tools
            };
            return;
        }
        if (args.privacyMode !== PrivacyMode.USAGE_CODEBASE_TRAINING_ALLOWED) {
            this.responseComparisonCandidate = void 0;
            return;
        }
        if (containsToolCall(args.responseMessages)) {
            this.responseComparisonCandidate = void 0;
            return;
        }
        let finalAssistantMessage;
        for(let index = args.responseMessages.length - 1; index >= 0; index--){
            const message = args.responseMessages[index];
            if (message?.role === "assistant") {
                finalAssistantMessage = message;
                break;
            }
        }
        const responseText = finalAssistantMessage === void 0 ? void 0 : extractAssistantText(finalAssistantMessage);
        if (responseText === void 0 || responseText.length === 0) {
            this.responseComparisonCandidate = void 0;
            return;
        }
        const sequence = ++this.responseComparisonSequence;
        this.responseComparisonCandidate = {
            ctx: args.ctx,
            parentInvocationId: args.parentInvocationId,
            responseText,
            messages: args.messages,
            tools: args.tools,
            privacyMode: args.privacyMode,
            sequence
        };
        this.interactionListener.enqueuePostTurnEndedWork(()=>this.runPendingAgentResponseComparison(capability, sequence));
    }
    async runPendingAgentResponseComparison(capability, sequence) {
        const candidate = this.responseComparisonCandidate;
        if (candidate === void 0 || candidate.sequence !== sequence) {
            return;
        }
        this.responseComparisonCandidate = void 0;
        if (candidate.privacyMode !== PrivacyMode.USAGE_CODEBASE_TRAINING_ALLOWED) {
            return;
        }
        let preparedAttempt;
        try {
            preparedAttempt = await capability.resolve({
                responseText: candidate.responseText,
                isByok: getIsUserApiKeyFromContext(candidate.ctx),
                isSubagent: getIsSubagentFromContext(candidate.ctx)
            });
        } catch (error3) {
            logger74.warn(candidate.ctx, "Agent response comparison selection failed open", {
                error: error3
            });
            return;
        }
        if (preparedAttempt === void 0) {
            return;
        }
        await this.runAgentResponseComparison({
            ctx: candidate.ctx,
            parentInvocationId: candidate.parentInvocationId,
            parentResponse: candidate.responseText,
            messages: candidate.messages,
            tools: candidate.tools,
            privacyMode: candidate.privacyMode,
            selection: preparedAttempt.selection,
            preparedAttempt,
            pendingUi: false
        });
    }
    async runAgentResponseComparison(args) {
        const capability = this.config.agentResponseComparison;
        if (capability === void 0) {
            return;
        }
        if (args.privacyMode !== PrivacyMode.USAGE_CODEBASE_TRAINING_ALLOWED) {
            return;
        }
        const comparisonId = args.comparisonId ?? (0, import_node_crypto32.randomUUID)();
        const alternateInvocationId = args.alternateInvocationId ?? getInvocationId(args.ctx);
        const comparisonCtx = args.ctx.withTimeout(AGENT_RESPONSE_COMPARISON_TIMEOUT_MS);
        const sendEvent = async (event, eventCtx = comparisonCtx)=>{
            await this.sendAgentResponseComparisonEvent({
                ctx: eventCtx,
                privacyMode: args.privacyMode,
                comparisonId,
                event
            });
        };
        let result;
        try {
            let selection = args.selection;
            if (capability.refineSelection !== void 0) {
                try {
                    const refined = await capability.refineSelection({
                        ctx: comparisonCtx,
                        parentResponse: args.parentResponse,
                        messages: args.messages,
                        selection
                    });
                    if (refined === void 0) {
                        await sendEvent({
                            case: "skipped",
                            value: new ResponseComparisonSkipped({
                                reason: ResponseComparisonSkipReason.CANCELLED
                            })
                        });
                        return;
                    }
                    selection = refined;
                } catch (error3) {
                    logger74.warn(args.ctx, "Agent response comparison selection refinement failed open", {
                        error: error3
                    });
                }
            }
            if (!args.pendingUi) {
                await sendEvent({
                    case: "started",
                    value: new ResponseComparisonStarted({
                        displayOrder: selection.displayOrder === "parent-first" ? ResponseComparisonDisplayOrder.PARENT_FIRST : ResponseComparisonDisplayOrder.ALTERNATE_FIRST,
                        parentInvocationId: args.parentInvocationId,
                        alternateInvocationId,
                        parentResponse: args.parentResponse,
                        comparisonConfigId: selection.comparisonConfigId,
                        alternateModelId: alternateModelIdForAnalytics(selection)
                    })
                });
            }
            result = capability.execute({
                ctx: comparisonCtx,
                selection,
                messages: args.messages,
                tools: args.tools,
                invocationId: alternateInvocationId
            });
            let sawToolCall = false;
            let exceededMaxResponseChars = false;
            let bufferedTextLength = 0;
            const bufferedTextDeltas = [];
            for await (const part of result.fullStream){
                if (part.type === "tool-call-streaming-start" || part.type === "tool-call-delta" || part.type === "tool-call") {
                    sawToolCall = true;
                    continue;
                }
                if (!sawToolCall && !exceededMaxResponseChars && part.type === "text-delta") {
                    bufferedTextLength += part.textDelta.length;
                    if (bufferedTextLength > args.preparedAttempt.maxResponseChars) {
                        exceededMaxResponseChars = true;
                        bufferedTextDeltas.length = 0;
                        continue;
                    }
                    bufferedTextDeltas.push(part.textDelta);
                }
            }
            const response = await result.response;
            if (sawToolCall || containsToolCall(response.messages)) {
                await sendEvent({
                    case: "skipped",
                    value: new ResponseComparisonSkipped({
                        reason: ResponseComparisonSkipReason.ALTERNATE_TOOL_CALL
                    })
                });
                return;
            }
            if (response.error !== void 0) {
                throw response.error;
            }
            if (exceededMaxResponseChars) {
                await sendEvent({
                    case: "skipped",
                    value: new ResponseComparisonSkipped({
                        reason: ResponseComparisonSkipReason.CANCELLED
                    })
                });
                return;
            }
            const alternateResponse = bufferedTextDeltas.join("");
            if (alternateResponse.trim().length === 0) {
                throw new Error("Alternate response completed without text");
            }
            if (!args.preparedAttempt.hasSufficientCharacterDiff(args.parentResponse, alternateResponse)) {
                await sendEvent({
                    case: "skipped",
                    value: new ResponseComparisonSkipped({
                        reason: ResponseComparisonSkipReason.CANCELLED
                    })
                });
                return;
            }
            if (!args.pendingUi && !await args.preparedAttempt.commitCooldown()) {
                await sendEvent({
                    case: "skipped",
                    value: new ResponseComparisonSkipped({
                        reason: ResponseComparisonSkipReason.CANCELLED
                    })
                });
                return;
            }
            if (args.pendingUi) {
                await sendEvent({
                    case: "started",
                    value: new ResponseComparisonStarted({
                        displayOrder: selection.displayOrder === "parent-first" ? ResponseComparisonDisplayOrder.PARENT_FIRST : ResponseComparisonDisplayOrder.ALTERNATE_FIRST,
                        parentInvocationId: args.parentInvocationId,
                        alternateInvocationId,
                        parentResponse: args.parentResponse,
                        comparisonConfigId: selection.comparisonConfigId,
                        alternateModelId: alternateModelIdForAnalytics(selection)
                    })
                });
            }
            await sendEvent({
                case: "textDelta",
                value: new ResponseComparisonTextDelta({
                    text: alternateResponse
                })
            });
            if (args.pendingUi) {
                if (!await args.preparedAttempt.commitCooldown()) {
                    await sendEvent({
                        case: "skipped",
                        value: new ResponseComparisonSkipped({
                            reason: ResponseComparisonSkipReason.CANCELLED
                        })
                    });
                    return;
                }
            }
            await sendEvent({
                case: "completed",
                value: new ResponseComparisonCompleted()
            });
        } catch (error3) {
            const reason = args.ctx.signal.aborted ? ResponseComparisonSkipReason.CANCELLED : comparisonCtx.signal.aborted ? ResponseComparisonSkipReason.TIMEOUT : ResponseComparisonSkipReason.INFERENCE_ERROR;
            try {
                await sendEvent({
                    case: "skipped",
                    value: new ResponseComparisonSkipped({
                        reason
                    })
                }, args.ctx);
            } catch (sendError) {
                logger74.warn(args.ctx, "Agent response comparison failed open", {
                    error: error3,
                    sendError
                });
            }
        } finally{
            if (result !== void 0) {
                void Promise.allSettled([
                    result.response,
                    result.usage,
                    result.extendedUsage,
                    result.providerMetadata,
                    result.invocationId
                ]);
            }
        }
    }
    async sendAgentResponseComparisonEvent(args) {
        await this.interactionListener.sendUpdate(args.ctx, toRedactedInteractionUpdate(new InteractionUpdate({
            message: {
                case: "responseComparison",
                value: new ResponseComparisonUpdate({
                    comparisonId: args.comparisonId,
                    event: args.event
                })
            }
        }), args.privacyMode));
    }
    createAfterAgentThoughtCallback(invocationId, requestContext) {
        return async (hookCtx, params)=>{
            const env_1 = {
                stack: [],
                error: void 0,
                hasError: false
            };
            try {
                const span = __addDisposableResource62(env_1, createSpan(hookCtx.withName("agent.lifecycleHook.afterAgentThought")), false);
                await executeRemoteAfterAgentThoughtHook({
                    ctx: span.ctx,
                    text: params.text,
                    durationMs: params.durationMs,
                    requestContext: {
                        toolCallId: `after-agent-thought:${this.config.conversationId ?? invocationId}:${invocationId}:v1`,
                        conversationId: this.config.conversationId,
                        generationId: invocationId,
                        model: this.config.modelId,
                        modelId: this.config.model?.mcid,
                        modelParams: this.config.model?.parameters !== void 0 ? [
                            ...this.config.model.parameters
                        ] : void 0
                    },
                    options: {
                        resourceAccessor: this.resourceAccessor,
                        enableExecuteHookExec: this.config.enableExecuteHookExec,
                        configuredSteps: requestContext.hooksConfig?.configuredSteps,
                        model: this.config.modelId,
                        modelId: this.config.model?.mcid,
                        modelParams: this.config.model?.parameters !== void 0 ? [
                            ...this.config.model.parameters
                        ] : void 0
                    }
                });
            } catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            } finally{
                __disposeResources62(env_1);
            }
        };
    }
    async maybeRetryProjectCoordinatorWithoutSendMessage(args) {
        if (args.hasToolCall || !args.hasSendMessageCapability || !args.isProjectCoordinator || args.isSimulatedUserMessage || args.turn.hasSendMessageCall() || args.visibilityReminderAlreadyInjected) {
            return;
        }
        const alreadyRetried = args.maxOutputTokenRetryDebug?.didRetryAfterEmptyResponse === true;
        const isLastRetryLoopIteration = (args.maxOutputTokenRetryDebug?.retryLoopIteration ?? 0) >= MAX_RETRY_ITERATIONS - 1;
        const shouldRetry = this.config.featureFlags?.enableEmptyResponseRetry === true && args.mode !== AgentMode.MULTITASK && !alreadyRetried && !isLastRetryLoopIteration;
        const retryInfo = {
            alreadyRetried,
            isLastRetryLoopIteration,
            shouldRetry
        };
        logger74.warn(args.ctx, "nal.project_send_message_missing", retryInfo);
        emptyResponseRetryClassification.increment(args.ctx, 1, {
            retryAction: "retry_missing_send_message",
            didRetry: shouldRetry ? "true" : "false"
        });
        if (!shouldRetry) {
            return;
        }
        await this.cancelPendingAgentResponseComparison();
        throw new EmptyResponseRetryError("retry_missing_send_message", true);
    }
    async runStep(parentCtx, turn, rootPromptExecutor, stateHandler, toolsGenerator, mcpTools, repositoryInfos, requestContext, fileOperationLockManager, onStateUpdate, previousQueuedMessageSource, maxOutputTokenRetryDebug) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource62(env_2, createSpan(parentCtx.withName("runStep")), false);
            const ctx = spanCtxt.ctx;
            const invocationId = getInvocationId(ctx);
            stateHandler.lastStepInvocationId = invocationId;
            spanCtxt.span.setAttribute("invocationId", invocationId);
            logger74.info(ctx, "Running step");
            const stepSetupStart = performance.now();
            const isFirstStep = turn.steps.length === 0;
            const isResponseComparisonFirstModelStep = !this.responseComparisonModelStepStarted;
            this.responseComparisonModelStepStarted = true;
            const interactionHandler = new InteractionHandler(toUnredactedInteractionListener(this.interactionListener, stateHandler.getPrivacyMode()), turn, invocationId, void 0, this.config.thinkingStyle, resolveAgentSingleMessageLoopDetection(this.config), this.createAfterAgentThoughtCallback(invocationId, requestContext));
            const userMessage = await turn.userMessage.get(ctx);
            const mode = stateHandler.resolveStepMode(userMessage);
            const toolsBuildStartMs = performance.now();
            const toolSetHandle = toolsGenerator({
                resourceAccessor: this.resourceAccessor,
                stateHandler,
                agentSessionId: this.config.agentSessionId,
                mcpTools,
                repositoryInfos,
                blobStore: stateHandler.getBlobStore(),
                mode,
                loggingContext: ctx,
                requestContext,
                fileOperationLockManager,
                smartModeClassifierMode: this.config.smartModeClassifierMode,
                smartModeClassifierShadowMode: this.config.smartModeClassifierShadowMode,
                autoRejectFirstAskQuestion: this.config.autoRejectFirstAskQuestion
            });
            ctx.get(cloudAgentTurnPrepGlueMsRecorderKey)?.("toolsBuildMs", performance.now() - toolsBuildStartMs);
            const initialMessages = fromRedactedCoreMessages(rootPromptExecutor.getMessages(), PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
            if (isFirstStep) {
                warnIfLongTrailingUserMessageRun(ctx, initialMessages, invocationId);
                const firstStepSetupMs = performance.now() - stepSetupStart;
                firstStepSetupDuration.histogram(ctx, firstStepSetupMs);
                ctx.get(firstStepSetupMsRecorderKey)?.(firstStepSetupMs);
            }
            trackPromptTokenUsage({
                ctx,
                mcpTools,
                requestContext,
                messages: initialMessages,
                selectedContext: userMessage.selectedContext,
                userInfoDisplayOptions: this.config.userInfoDisplayOptions,
                agentTokenLimit: this.config.agentTokenLimit,
                readToolName: toolSetHandle.getTool("READ")?.name,
                invocationId,
                modelInfo: this.config.modelInfo,
                featureFlags: this.config.featureFlags,
                stateHandler,
                mcpMetaToolServerCount: getToolSetMcpMetaToolServerCount(toolSetHandle)
            });
            const userAutoRunInstructions = await this.getUserPermissionsFileAutoRunInstructions(ctx, requestContext);
            const projectAutoRunInstructions = this.getProjectPermissionsFileAutoRunInstructions(requestContext);
            let responseComparisonMessages = this.config.agentResponseComparison === void 0 ? void 0 : [
                ...initialMessages
            ];
            let responseComparisonTools = this.config.agentResponseComparison === void 0 ? void 0 : Object.freeze(toAgentTools(toolSetHandle.getStaticTools(), toolSetHandle.getDescriptionProps()));
            if (isResponseComparisonFirstModelStep && responseComparisonMessages !== void 0 && responseComparisonTools !== void 0) {
                await this.preparePendingAgentResponseComparison({
                    ctx,
                    parentInvocationId: invocationId,
                    messages: responseComparisonMessages,
                    tools: responseComparisonTools,
                    privacyMode: stateHandler.getPrivacyMode()
                });
            }
            let result;
            let checkpointedPendingToolCalls;
            let pendingToolCallsCheckpointWrite;
            try {
                result = rootPromptExecutor.executeToolStream(stepModelCallContext(ctx, maxOutputTokenRetryDebug), stateHandler, interactionHandler, toolSetHandle.getToolExecutionSet(), {
                    repositoryInfos,
                    shouldQueryProd: requestContext.repositoryInfoShouldQueryProd,
                    stateHandler,
                    strictArgParsing: this.config.strictArgParsing === true,
                    modelVendor: this.config.modelInfo?.vendor,
                    enableToolArgPreservation: this.config.enableToolArgPreservation === true,
                    enableHookAdditionalContext: this.config.featureFlags?.enableHookAdditionalContext === true,
                    enableAgentStoreConflictNoticeCollector: this.config.featureFlags?.enableAgentStoreConflictNotices === true,
                    enableAgentStoreConflictNotices: this.config.featureFlags?.enableAgentStoreConflictNotices === true,
                    writeBarrierTimeoutMs: this.resolveWriteBarrierTimeoutMs(),
                    onWriteBarrier: this.config.recordAgentStoreWriteBarrier,
                    workspacePaths: requestContext.env?.workspacePaths,
                    userAutoRunInstructions,
                    projectAutoRunInstructions,
                    cursorRules: getAllRules(requestContext, this.config.nonFileRules, this.config.featureFlags),
                    agentSkills: requestContext.agentSkills ?? [],
                    contextInjectionSignal: this.conversationActionReceiver.getContextInjectionToolSignal?.()
                }, interactionHandler.recordToolCallResult.bind(interactionHandler), toolSetHandle.getDescriptionProps(), this.config.maxSteps === 1 ? void 0 : async (pending)=>{
                    const pendingToolCallStartedAtMs = Date.now();
                    const toolExecutionSet = toolSetHandle.getToolExecutionSet();
                    const allowedToolNames = toolExecutionSet.modelVisibleTools.map((tool)=>tool.name);
                    const pendingWithContracts = (pending ?? []).map((p2)=>enrichPendingToolCallJson(p2, {
                            resolveIdentity: (input)=>toolSetHandle.resolveToolCallIdentity(input),
                            toolExecutionSet,
                            allowedToolNames,
                            pendingToolCallStartedAtMs
                        }));
                    checkpointedPendingToolCalls = pendingWithContracts;
                    if (this.config.fireAndForgetCheckpoints) {
                        pendingToolCallsCheckpointWrite = stateHandler.computeNewStructure(ctx).then(async (current)=>{
                            current.pendingToolCalls = pendingWithContracts.map((p2)=>createRedactedString(p2, DataClassification.CODE, "pendingToolCalls", PrivacyMode.UNSPECIFIED));
                            if (onStateUpdate) {
                                await onStateUpdate(ctx, current);
                            }
                        }).catch((error3)=>{
                            logger74.error(ctx, "Failed to persist checkpoint with pending tool calls", {
                                error: error3
                            });
                        });
                    } else {
                        const current = await stateHandler.computeNewStructure(ctx);
                        current.pendingToolCalls = pendingWithContracts.map((p2)=>createRedactedString(p2, DataClassification.CODE, "pendingToolCalls", PrivacyMode.UNSPECIFIED));
                        if (onStateUpdate) {
                            await onStateUpdate(ctx, current);
                        }
                    }
                });
            } catch (error3) {
                await this.cancelPendingAgentResponseComparison();
                throw error3;
            }
            const tokenDetails = stateHandler.tokenDetails;
            const isCloudAgentSingleStep = this.config.maxSteps === 1;
            const shouldSuppressSelfSummaryAfterInputLimitFailure = stateHandler.shouldSuppressSelfSummaryAfterInputLimitFailure(tokenDetails.usedTokens);
            const shouldStartBg = !isCloudAgentSingleStep && !stateHandler.tokenDetailsStaleAfterSummarization && !shouldSuppressSelfSummaryAfterInputLimitFailure && this.orchestrator.shouldStartBackgroundSummarization(tokenDetails, rootPromptExecutor.getMessages(), ctx);
            const startBackgroundSummary = async (canStartBackgroundSummary, launchTokenDetails)=>{
                const accounting = launchTokenDetails ?? tokenDetails;
                logger74.info(ctx, "[summarization-trigger] Triggering background summarization since we are below free token threshold", {
                    usedTokens: accounting.usedTokens,
                    maxTokens: accounting.maxTokens,
                    backgroundSummarizationConfig: this.config.backgroundSummarizationProps
                });
                await this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
                    backgroundSummarizationMode: BackgroundSummarizationMode.Background,
                    canStartBackgroundSummary,
                    launchTokenDetails,
                    settledMessageCount: initialMessages.length,
                    triggerReason: "approaching_token_limit",
                    currentInvocationId: invocationId,
                    resourceAccessor: this.resourceAccessor,
                    tools: toolSetHandle.getStaticTools(),
                    descriptionProps: toolSetHandle.getDescriptionProps(),
                    extraT: {
                        repositoryInfos,
                        shouldQueryProd: requestContext.repositoryInfoShouldQueryProd,
                        stateHandler,
                        strictArgParsing: this.config.strictArgParsing === true,
                        modelVendor: this.config.modelInfo?.vendor,
                        enableToolArgPreservation: this.config.enableToolArgPreservation === true,
                        enableHookAdditionalContext: this.config.featureFlags?.enableHookAdditionalContext === true,
                        enableAgentStoreConflictNoticeCollector: this.config.featureFlags?.enableAgentStoreConflictNotices === true,
                        enableAgentStoreConflictNotices: this.config.featureFlags?.enableAgentStoreConflictNotices === true,
                        writeBarrierTimeoutMs: this.resolveWriteBarrierTimeoutMs(),
                        onWriteBarrier: this.config.recordAgentStoreWriteBarrier,
                        workspacePaths: requestContext.env?.workspacePaths,
                        userAutoRunInstructions,
                        projectAutoRunInstructions,
                        cursorRules: getAllRules(requestContext, this.config.nonFileRules, this.config.featureFlags),
                        agentSkills: requestContext.agentSkills ?? []
                    },
                    automationTriggerContext: this.getAutomationTriggerContext(rootPromptExecutor.getMessages())
                });
            };
            if (shouldStartBg) {
                await startBackgroundSummary();
            }
            let stepClosed = false;
            let responseSummarySetup;
            const reportResponseSummaryFailure = (error3)=>{
                logger74.warn(ctx, "Failed to start response-time background summarization", {
                    error: error3
                });
            };
            const responseSummaryLaunch = result.extendedUsage.then((currentUsage)=>{
                const threshold = this.config.backgroundSummarizationProps.usedTokensThresholdToStartBackgroundSummarization;
                const canStart = ()=>!stepClosed && !ctx.signal.aborted && !isCloudAgentSingleStep && stateHandler.backgroundSummarizationPromiseInfo === null && (this.config.selfSummaryConfig?.canUseSelfSummary?.() ?? false) && this.config.backgroundSummarizationProps.usedTokensThresholdToStartBackgroundSummarization === threshold && !stateHandler.shouldSuppressSelfSummaryAfterInputLimitFailure(currentUsage.inputTokens + currentUsage.outputTokens) && shouldStartBackgroundSummarization(currentUsage.inputTokens, currentUsage.maxTokens, {
                        usedTokensThresholdToStartBackgroundSummarization: threshold
                    });
                if (canStart()) {
                    responseSummarySetup = startBackgroundSummary(canStart, {
                        usedTokens: currentUsage.inputTokens + currentUsage.outputTokens,
                        maxTokens: currentUsage.maxTokens
                    }).catch(reportResponseSummaryFailure);
                    return responseSummarySetup;
                }
                return void 0;
            }).catch(reportResponseSummaryFailure);
            let response;
            let extendedUsage;
            let usage;
            let finalInvocationId;
            try {
                [response, extendedUsage, usage, finalInvocationId] = await Promise.all([
                    result.response,
                    result.extendedUsage,
                    result.usage,
                    result.invocationId,
                    interactionHandler.consumeStream(ctx, this.tapAgentResponseComparisonWarmup(ctx, result.fullStream, responseComparisonMessages, responseComparisonTools), turn),
                    responseSummaryLaunch
                ]);
            } catch (error3) {
                stepClosed = true;
                await this.cancelPendingAgentResponseComparison();
                if (error3 instanceof DeferredInteractionResponseError && checkpointedPendingToolCalls !== void 0) {
                    await pendingToolCallsCheckpointWrite;
                    await this.checkpointToolResultsCompletedBeforeDeferral({
                        ctx,
                        stateHandler,
                        pendingToolCalls: checkpointedPendingToolCalls,
                        completedToolResults: getToolResultsCompletedBeforeDeferral(error3),
                        onStateUpdate
                    });
                }
                throw error3;
            } finally{
                stepClosed = true;
                await responseSummarySetup;
            }
            if (finalInvocationId !== invocationId) {
                logger74.error(ctx, "Invocation ID mismatch. Bug in executeToolStream", void 0, {
                    initialInvocationId: invocationId,
                    finalInvocationId
                });
            }
            logger74.debug(ctx, "Setting token details for client token ring", {
                usedTokens: usage.totalTokens,
                maxTokens: extendedUsage.maxTokens,
                inputTokens: extendedUsage.inputTokens,
                outputTokens: extendedUsage.outputTokens,
                cacheReadTokens: extendedUsage.cacheReadTokens,
                cacheWriteTokens: extendedUsage.cacheWriteTokens
            });
            const promptContextDetails = nextRedactedPromptContextDetails(ctx, this.config, stateHandler, {
                messages: initialMessages,
                tools: toolSetHandle.getStaticTools(),
                descriptionProps: toolSetHandle.getDescriptionProps(),
                totalUsedTokens: usage.totalTokens,
                maxTokens: extendedUsage.maxTokens
            });
            stateHandler.setTokenDetails(createRedactedConversationTokenDetails(stateHandler.getPrivacyMode(), {
                usedTokens: usage.totalTokens,
                maxTokens: extendedUsage.maxTokens,
                breakdown: promptContextDetails.breakdown,
                promptContextUsageTree: promptContextDetails.promptContextUsageTree
            }));
            if (response.error || ctx.signal.aborted) {
                await this.cancelPendingAgentResponseComparison();
                if (this.config.skipErrorStateCheckpoint !== true && !willRetryProviderDecodeError(response.error, maxOutputTokenRetryDebug)) {
                    turn.appendPromptMessages(toRedactedCoreMessages(response.messages, stateHandler.getPrivacyMode()));
                    const currentState = await stateHandler.computeNewStructure(ctx);
                    if (onStateUpdate) {
                        await onStateUpdate(ctx, currentState);
                    }
                }
                throw response.error ?? new ConnectError("User aborted request", Code.Canceled);
            }
            stateHandler.addTurnUsage({
                inputTokens: extendedUsage.inputTokens,
                outputTokens: extendedUsage.outputTokens,
                cacheReadTokens: extendedUsage.cacheReadTokens,
                cacheWriteTokens: extendedUsage.cacheWriteTokens,
                reasoningTokens: extendedUsage.reasoningTokens
            });
            this.longReasoningStepAttemptUsage = {
                reasoningTokens: extendedUsage.reasoningTokens
            };
            const hasToolCall = containsToolCall(response.messages);
            const hasSendMessageCapability = toolSetHandle.getTool("SEND_MESSAGE") !== void 0;
            const isProjectCoordinator = isProjectSendMessageEnabled(stateHandler);
            const visibilityReminderAlreadyInjected = hasSendMessageCapability && hasProjectSendMessageReminderForCurrentRequest(initialMessages);
            await this.maybeRetryProjectCoordinatorWithoutSendMessage({
                ctx,
                turn,
                hasToolCall,
                hasSendMessageCapability,
                isProjectCoordinator,
                isSimulatedUserMessage: userMessage.isSimulatedMsg === true,
                visibilityReminderAlreadyInjected,
                mode,
                maxOutputTokenRetryDebug
            });
            if (!hasToolCall && responseComparisonMessages !== void 0 && responseComparisonTools !== void 0) {
                try {
                    await this.enqueueAgentResponseComparisonIfEligible({
                        ctx,
                        parentInvocationId: finalInvocationId,
                        responseMessages: response.messages,
                        messages: responseComparisonMessages,
                        tools: responseComparisonTools,
                        privacyMode: stateHandler.getPrivacyMode()
                    });
                } finally{
                    responseComparisonMessages = void 0;
                    responseComparisonTools = void 0;
                }
            }
            if (extendedUsage) {
                let currentToolCallName = "userMessage";
                for (const msg of response.messages){
                    if (msg.role === "assistant" && Array.isArray(msg.content)) {
                        for (const part of msg.content){
                            if (part.type === "tool-call") {
                                currentToolCallName = part.toolName;
                                break;
                            }
                        }
                        if (currentToolCallName !== "userMessage") break;
                    }
                }
                const argsTags = {
                    toolCallName: currentToolCallName
                };
                toolCallArgsOutputTokens.histogram(ctx, extendedUsage.outputTokens, argsTags);
                toolCallArgsCacheWriteTokens.histogram(ctx, extendedUsage.cacheWriteTokens, argsTags);
                let priorToolCallName = "userMessage";
                if (turn.steps.length > 0) {
                    const lastStepRef = turn.steps[turn.steps.length - 1];
                    const lastStep = await lastStepRef.get(ctx);
                    if (lastStep.message.case === "toolCall") {
                        const toolCase = lastStep.message.value.tool.case;
                        if (toolCase !== void 0) {
                            priorToolCallName = toolCase.replace("ToolCall", "").replace(/_/g, "-");
                        }
                    }
                }
                const resultTags = {
                    toolCallName: priorToolCallName
                };
                toolCallResultInputTokens.histogram(ctx, extendedUsage.inputTokens, resultTags);
                toolCallResultCachedReadTokens.histogram(ctx, extendedUsage.cacheReadTokens, resultTags);
            }
            const sendMessageCallRequirementSatisfied = hasSendMessageCapability && isProjectCoordinator && (turn.hasSendMessageCall() || visibilityReminderAlreadyInjected || userMessage.isSimulatedMsg === true);
            const turnBudget = maxOutputTokenRetryDebug?.emptyResponseRetryTurnBudget;
            if (!hasToolCall && hasEmptyAssistantText(response.messages)) {
                const executorMessages = rootPromptExecutor.getMessages();
                const taskToolName = toolSetHandle.getTool("TASK")?.name ?? (this.config.modelInfo !== void 0 ? getTaskToolName(this.config.modelInfo) : void 0);
                const unwrappedExecutorMessages = fromRedactedCoreMessages(executorMessages, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
                const isTrailingTaskToolCall = isTrailingTaskToolCallMessage(unwrappedExecutorMessages, taskToolName, toolSetHandle);
                const executorMessageCount = executorMessages.length;
                const lastExecutorMsg = executorMessages.at(-1);
                const lastExecutorMsgRole = lastExecutorMsg?.role ?? "unknown";
                let thinkingChars = 0;
                for (const msg of response.messages){
                    if (msg.role === "assistant" && Array.isArray(msg.content)) {
                        for (const part of msg.content){
                            if (part.type === "reasoning" && "text" in part && typeof part.text === "string") {
                                thinkingChars += part.text.length;
                            }
                        }
                    }
                }
                const emptyResponseAttrs = {
                    outputTokens: extendedUsage.outputTokens,
                    inputTokens: extendedUsage.inputTokens,
                    invocationId,
                    earlyStopDebug: {
                        hasThinkingContent: thinkingChars > 0,
                        thinkingChars,
                        lastExecutorMsgRole,
                        executorMessageCount,
                        previousQueuedMessageSource: previousQueuedMessageSource ?? "none",
                        actionClass: this.actionClass,
                        maxOutputTokenRetry: maxOutputTokenRetryDebug ?? {
                            didAddOutputTokenReminder: false,
                            outputTokenLimitRetryCount: 0
                        }
                    }
                };
                if (lastExecutorMsgRole === "assistant") {
                    logger74.warn(ctx, "nal.empty_response.sent_assistant_message", emptyResponseAttrs);
                }
                if (lastExecutorMsgRole === "tool") {
                    logger74.warn(ctx, "nal.empty_response.sent_tool", emptyResponseAttrs);
                }
                if (thinkingChars > 0) {
                    logger74.warn(ctx, "nal.empty_response.received_only_thinking", emptyResponseAttrs);
                }
                if (extendedUsage.outputTokens === 0) {
                    logger74.warn(ctx, "nal.empty_response.received_no_output_tokens", emptyResponseAttrs);
                }
                logger74.warn(ctx, "nal.empty_response", emptyResponseAttrs);
                let retryAction;
                if (this.emptyResponseRetryAction !== void 0) {
                    retryAction = this.emptyResponseRetryAction;
                } else if (lastExecutorMsgRole === "tool") {
                    retryAction = "retry_tool_result";
                } else if (lastExecutorMsgRole === "user") {
                    retryAction = "retry_user_msg";
                } else if (extendedUsage.outputTokens === 0) {
                    retryAction = "retry_no_output_tokens";
                } else if (thinkingChars > 0) {
                    retryAction = "retry_thinking_only";
                } else {
                    retryAction = "fallthrough";
                }
                const trailingUserMsg = lastExecutorMsg === void 0 ? void 0 : fromRedactedCoreMessages([
                    lastExecutorMsg
                ], PrivacyCapability.UNSAFE_ALWAYS_ALLOWED)[0];
                const isTrailingNotificationUserMsg = retryAction === "retry_user_msg" && trailingUserMsg !== void 0 && isNotificationOnlyUserMessage(trailingUserMsg) && !isGoalContinuationNotificationMessage(trailingUserMsg);
                const hasTrailingToolFailure = trailingToolBatchHasFailure(unwrappedExecutorMessages);
                const isRetryEnabled = this.config.featureFlags?.enableEmptyResponseRetry === true;
                const isMetaParentAgent = this.config.featureFlags?.glassMetaParentAgent === true;
                const isMultitaskMode = mode === AgentMode.MULTITASK;
                const alreadyRetried = maxOutputTokenRetryDebug?.didRetryAfterEmptyResponse === true;
                const isLastRetryLoopIteration = (maxOutputTokenRetryDebug?.retryLoopIteration ?? 0) >= MAX_RETRY_ITERATIONS - 1;
                const turnRetriesUsed = turnBudget?.retriesUsed ?? 0;
                const turnBudgetExhausted = turnBudget !== void 0 && turnRetriesUsed >= MAX_EMPTY_RESPONSE_RETRIES_PER_TURN;
                const shouldRetry = isRetryEnabled && !isMetaParentAgent && !isMultitaskMode && !alreadyRetried && !isLastRetryLoopIteration && !turnBudgetExhausted && !isTrailingNotificationUserMsg && !sendMessageCallRequirementSatisfied && this.emptyResponseRetryAction === void 0 && retryAction !== "fallthrough";
                const needsContinuationMessage2 = retryAction !== "retry_user_msg" && !isTrailingTaskToolCall;
                const retryInfo = {
                    retryAction,
                    isRetryEnabled,
                    isMetaParentAgent,
                    isMultitaskMode,
                    isTrailingTaskToolCall,
                    isTrailingNotificationUserMsg,
                    hasSendMessageCapability,
                    hasTrailingToolFailure,
                    sendMessageCallRequirementSatisfied,
                    alreadyRetried,
                    isLastRetryLoopIteration,
                    turnRetriesUsed,
                    turnBudgetExhausted,
                    maxEmptyResponseRetriesPerTurn: MAX_EMPTY_RESPONSE_RETRIES_PER_TURN
                };
                logger74.warn(ctx, "nal.empty_response.retry_dry_run", {
                    ...emptyResponseAttrs,
                    retryInfo,
                    shouldRetry
                });
                emptyResponseRetryClassification.increment(ctx, 1, {
                    retryAction,
                    didRetry: shouldRetry ? "true" : "false"
                });
                if (shouldRetry) {
                    await this.cancelPendingAgentResponseComparison();
                    throw new EmptyResponseRetryError(retryAction, needsContinuationMessage2);
                } else {
                    if (turnBudgetExhausted) {
                        logger74.warn(ctx, "nal.empty_response.turn_budget_exceeded", {
                            ...emptyResponseAttrs,
                            retryInfo
                        });
                    }
                    logger74.warn(ctx, "nal.empty_response.did_not_retry", {
                        ...emptyResponseAttrs,
                        retryInfo
                    });
                }
            }
            return {
                hasToolCall,
                responseMessages: response.messages
            };
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources62(env_2);
        }
    }
    async runWithMaxTokensRetry(parentCtx, rootPromptExecutor, fn, emptyResponseRetryTurnBudget) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource62(env_3, createSpan(parentCtx.withName("runWithMaxTokensRetry")), false);
            const ctx = spanCtxt.ctx;
            let didAddOutputTokenReminder = false;
            let outputTokenLimitRetryCount = 0;
            let didRetryAfterSingleMessageLoop = false;
            let didRetryAfterEmptyResponse = false;
            let didRetryAfterProviderDecodeError = false;
            let lastSingleMessageLoopKind;
            let lastSingleMessageLoopFingerprint;
            let lastRetryError;
            const singleMessageLoopDetection = resolveAgentSingleMessageLoopDetection(this.config);
            const isSingleMessageLoopRetryEnabled = singleMessageLoopDetection?.responseAction === "retry_once";
            const reportSingleMessageLoopStage = (stage)=>{
                if (lastSingleMessageLoopKind === void 0 || lastSingleMessageLoopFingerprint === void 0) {
                    return;
                }
                reportLoopMitigationObservation(singleMessageLoopDetection?.reporting, {
                    loopKind: lastSingleMessageLoopKind,
                    evidenceFingerprint: lastSingleMessageLoopFingerprint,
                    mitigation: "single_message_retry",
                    stage
                });
            };
            for(let i = 0; i < MAX_RETRY_ITERATIONS; i++){
                const retryDebug = {
                    didAddOutputTokenReminder,
                    outputTokenLimitRetryCount,
                    didRetryAfterEmptyResponse,
                    didRetryAfterProviderDecodeError,
                    retryLoopIteration: i,
                    emptyResponseRetryTurnBudget
                };
                try {
                    const result = await fn(ctx, retryDebug);
                    if (didRetryAfterSingleMessageLoop) {
                        incrementLoopRetryOutcome(ctx, "recovered", lastSingleMessageLoopKind);
                    }
                    if (didRetryAfterProviderDecodeError) {
                        incrementProviderDecodeRetryOutcome(ctx, "recovered");
                    }
                    return result;
                } catch (error3) {
                    if (error3 instanceof OutputTokensLimitExceededError) {
                        outputTokenLimitRetryCount += 1;
                        if (!didAddOutputTokenReminder) {
                            didAddOutputTokenReminder = true;
                            rootPromptExecutor.appendMessages(toRedactedCoreMessages([
                                {
                                    role: "user",
                                    content: "<system_reminder>Your response was cut off because it exceeded the output token limit. Please break your work into smaller pieces. Continue from where you left off.</system_reminder>"
                                }
                            ], PrivacyMode.UNSPECIFIED));
                            logger74.info(ctx, "Hit max tokens error, added reminder");
                        } else {
                            logger74.info(ctx, "Hit max tokens error, but already added reminder");
                        }
                    } else if (error3 instanceof EmptyResponseRetryError && !didRetryAfterEmptyResponse) {
                        didRetryAfterEmptyResponse = true;
                        if (emptyResponseRetryTurnBudget !== void 0) {
                            emptyResponseRetryTurnBudget.retriesUsed += 1;
                        }
                        if (error3.needsContinuationMessage) {
                            const continuationMessage = error3.retryAction === "retry_missing_send_message" ? createProjectSendMessageVisibilityReminder() : {
                                role: "user",
                                content: EMPTY_RESPONSE_CONTINUATION_MESSAGE
                            };
                            rootPromptExecutor.appendMessages(toRedactedCoreMessages([
                                continuationMessage
                            ], PrivacyMode.UNSPECIFIED));
                        }
                        logger74.info(ctx, "nal.empty_response.retrying", {
                            retryAction: error3.retryAction,
                            needsContinuationMessage: error3.needsContinuationMessage,
                            turnRetriesUsed: emptyResponseRetryTurnBudget?.retriesUsed,
                            maxEmptyResponseRetriesPerTurn: MAX_EMPTY_RESPONSE_RETRIES_PER_TURN
                        });
                    } else if (isSingleMessageLoopRetryEnabled && error3 instanceof AgentLoopError && error3.loopType === "singleMessage") {
                        if (didRetryAfterSingleMessageLoop) {
                            incrementLoopRetryOutcome(ctx, "looped_again", error3.singleMessageLoopKind);
                            reportSingleMessageLoopStage("looped_again");
                            lastSingleMessageLoopKind = error3.singleMessageLoopKind;
                            logger74.warn(ctx, "Single-message loop detected again after retry", {
                                loopKind: error3.singleMessageLoopKind,
                                repetitions: error3.repetitions,
                                period: error3.period
                            });
                            throw error3;
                        }
                        didRetryAfterSingleMessageLoop = true;
                        lastSingleMessageLoopKind = error3.singleMessageLoopKind;
                        lastSingleMessageLoopFingerprint = error3.evidenceFingerprint;
                        incrementLoopRetryOutcome(ctx, "retried", lastSingleMessageLoopKind);
                        reportSingleMessageLoopStage("applied");
                        logShimFiring(ctx, singleMessageLoopRetry.applied(void 0, {
                            log: {
                                loop_kind: lastSingleMessageLoopKind ?? "single_message_multi_line"
                            }
                        }));
                        const reminder = createLoopReminderMessage({
                            kind: error3.singleMessageLoopKind ?? "single_message_multi_line"
                        });
                        rootPromptExecutor.appendMessages(toRedactedCoreMessages([
                            reminder
                        ], PrivacyMode.UNSPECIFIED));
                        logger74.info(ctx, "Single-message loop detected, added reminder and retrying", {
                            loopKind: error3.singleMessageLoopKind,
                            repetitions: error3.repetitions,
                            period: error3.period
                        });
                    } else if (willRetryProviderDecodeError(error3, retryDebug)) {
                        didRetryAfterProviderDecodeError = true;
                        incrementProviderDecodeRetryOutcome(ctx, "retried");
                        logger74.info(ctx, "Provider rejected sampled output before any tool ran; retrying step");
                    } else {
                        if (isProviderDecodeError(error3)) {
                            incrementProviderDecodeRetryOutcome(ctx, didRetryAfterProviderDecodeError ? "failed_again" : "ineligible");
                        }
                        if (didRetryAfterSingleMessageLoop) {
                            reportSingleMessageLoopStage("failed");
                        }
                        throw error3;
                    }
                    lastRetryError = error3;
                }
            }
            if (didRetryAfterSingleMessageLoop) {
                incrementLoopRetryOutcome(ctx, "exhausted", lastSingleMessageLoopKind);
                reportSingleMessageLoopStage("exhausted");
            }
            throw new StepRetriesExhaustedError("step-retries", {
                cause: lastRetryError
            });
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources62(env_3);
        }
    }
    async runWithSummarizationRetry(parentCtx, stateHandler, rootPromptExecutor, requestContext, tools, extraT, descriptionProps, fn) {
        const env_4 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource62(env_4, createSpan(parentCtx.withName("runWithSummarizationRetry")), false);
            const ctx = spanCtxt.ctx;
            const automationTriggerContext = this.getAutomationTriggerContext(rootPromptExecutor.getMessages());
            let lastRetryError;
            for(let i = 0; i < 5; i++){
                try {
                    const evalCompletionMode = EVAL_ENFORCED_WAIT_FOR_SUMMARIZATION_COMPLETION(ctx);
                    const forcedSummarizationMode = shouldForceSummarizationForTesting(fromRedactedCoreMessages(rootPromptExecutor.getMessages(), PrivacyCapability.UNSAFE_ALWAYS_ALLOWED), evalCompletionMode);
                    if (forcedSummarizationMode !== void 0) {
                        logger74.info(ctx, "[summarization-trigger] Force summarization triggered", {
                            evalCompletionMode,
                            mode: forcedSummarizationMode
                        });
                        await this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
                            backgroundSummarizationMode: forcedSummarizationMode,
                            fullSummarization: true,
                            triggerReason: "force_dev_testing",
                            currentInvocationId: stateHandler.lastStepInvocationId,
                            resourceAccessor: this.resourceAccessor,
                            tools,
                            extraT,
                            descriptionProps,
                            automationTriggerContext
                        });
                    }
                    if (stateHandler.backgroundSummarizationPromiseInfo !== null && stateHandler.backgroundSummarizationHasCompleted && !stateHandler.shouldSuppressSelfSummaryAfterInputLimitFailure(stateHandler.tokenDetails.usedTokens)) {
                        const midLoopTokenDetails = stateHandler.tokenDetails;
                        const wouldMeetPersistThreshold = shouldPersistBackgroundSummarization(midLoopTokenDetails.usedTokens, midLoopTokenDetails.maxTokens, this.config.backgroundSummarizationProps);
                        const wouldMeetTriggerThreshold = shouldStartBackgroundSummarization(midLoopTokenDetails.usedTokens, midLoopTokenDetails.maxTokens, this.config.backgroundSummarizationProps);
                        const requireTriggerThreshold = this.config.backgroundSummarizationProps.requireTriggerThresholdForMidLoopPersist === true;
                        const imageCountMidLoop = countImagePartsInMessages(fromRedactedCoreMessages(rootPromptExecutor.getMessages(), PrivacyCapability.UNSAFE_ALWAYS_ALLOWED));
                        const shouldPersistForImageThresholdMidLoop = imageCountMidLoop >= IMAGE_SUMMARIZATION_TRIGGER_COUNT;
                        const shouldPersistMidLoop = shouldPersistForImageThresholdMidLoop || !requireTriggerThreshold || wouldMeetTriggerThreshold || persistsWithoutThreshold(stateHandler.backgroundSummarizationPromiseInfo);
                        logger74.info(ctx, "[summarization-persist] Mid-loop background summarization persistence: checking persist threshold", {
                            usedTokens: midLoopTokenDetails.usedTokens,
                            maxTokens: midLoopTokenDetails.maxTokens,
                            unusedTokens: midLoopTokenDetails.maxTokens - midLoopTokenDetails.usedTokens,
                            wouldMeetPersistThreshold,
                            wouldMeetTriggerThreshold,
                            requireTriggerThreshold,
                            imageCountMidLoop,
                            imageThreshold: IMAGE_SUMMARIZATION_TRIGGER_COUNT,
                            shouldPersistForImageThresholdMidLoop,
                            shouldPersistMidLoop,
                            triggerThreshold: getBackgroundSummarizationTriggerThreshold(midLoopTokenDetails.maxTokens, this.config.backgroundSummarizationProps),
                            persistConfig: {
                                unusedTokensThreshold: this.config.backgroundSummarizationProps.unusedTokensThresholdToPersistBackgroundSummarization,
                                unusedPercentTokensThreshold: this.config.backgroundSummarizationProps.unusedPercentTokensThresholdToPersistBackgroundSummarization
                            }
                        });
                        if (shouldPersistMidLoop) {
                            await this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
                                backgroundSummarizationMode: BackgroundSummarizationMode.BackgroundAndPersistIfCompleted,
                                triggerReason: shouldPersistForImageThresholdMidLoop && !wouldMeetTriggerThreshold ? "approaching_image_limit" : "approaching_token_limit",
                                currentInvocationId: stateHandler.lastStepInvocationId,
                                resourceAccessor: this.resourceAccessor,
                                tools,
                                extraT,
                                descriptionProps,
                                automationTriggerContext
                            });
                        } else {
                            emitSummaryLifecycleDeferred(ctx, stateHandler.backgroundSummarizationPromiseInfo, "persistence_threshold_not_met");
                        }
                    }
                    if (stateHandler.backgroundSummarizationPromiseInfo !== null && !stateHandler.backgroundSummarizationHasCompleted) {
                        const currentTokenDetails = stateHandler.tokenDetails;
                        if (isSignificantlyOverTokenLimit(currentTokenDetails)) {
                            logger74.info(ctx, "[summarization-persist] Blocking on background summarization because token usage significantly exceeds max tokens", {
                                usedTokens: currentTokenDetails.usedTokens,
                                maxTokens: currentTokenDetails.maxTokens,
                                overageThreshold: getSignificantOverageThreshold(currentTokenDetails.maxTokens)
                            });
                            await withCloudAgentPreAgentTurnPrepPhase(ctx, "preAgentSummarizationMs", ()=>this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
                                    backgroundSummarizationMode: BackgroundSummarizationMode.WaitForCompletion,
                                    triggerReason: "significantly_over_token_limit",
                                    currentInvocationId: stateHandler.lastStepInvocationId,
                                    resourceAccessor: this.resourceAccessor,
                                    tools,
                                    extraT,
                                    descriptionProps,
                                    automationTriggerContext
                                }));
                        }
                    }
                    const messagesBeforeImageCompaction = fromRedactedCoreMessages(rootPromptExecutor.getMessages(), PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
                    const imageCount = countImagePartsInMessages(messagesBeforeImageCompaction);
                    if (imageCount >= IMAGE_SUMMARIZATION_TRIGGER_COUNT) {
                        logger74.info(ctx, "Image count reached threshold; starting background summarization", {
                            imageCount,
                            triggerCount: IMAGE_SUMMARIZATION_TRIGGER_COUNT
                        });
                        await this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
                            backgroundSummarizationMode: BackgroundSummarizationMode.Background,
                            triggerReason: "approaching_image_limit",
                            currentInvocationId: stateHandler.lastStepInvocationId,
                            resourceAccessor: this.resourceAccessor,
                            tools,
                            extraT,
                            descriptionProps,
                            automationTriggerContext
                        });
                    }
                    if (this.config.maxSteps === 1 && this.config.featureFlags?.cloudAgentProactiveTokenLimitError === true && !stateHandler.tokenDetailsStaleAfterSummarization) {
                        const td = stateHandler.tokenDetails;
                        if (shouldPersistBackgroundSummarization(td.usedTokens, td.maxTokens, this.config.backgroundSummarizationProps) && !await this.shouldDeferProactiveCompaction(ctx, td)) {
                            const useProactiveSelfSummarization = this.config.featureFlags?.cloudAgentProactiveSelfSummarization === true;
                            logger74.info(ctx, useProactiveSelfSummarization ? "[cloud-summarization] Token usage hit configured threshold, throwing ProactiveSummarizationThresholdError to trigger compaction" : "[cloud-summarization] Token usage hit configured threshold, throwing InputTokenLimitError to trigger external compaction", {
                                usedTokens: td.usedTokens,
                                maxTokens: td.maxTokens,
                                useProactiveSelfSummarization
                            });
                            throw useProactiveSelfSummarization ? new ProactiveSummarizationThresholdError() : new InputTokenLimitError();
                        }
                    }
                    return await fn(ctx);
                } catch (error3) {
                    const isProactiveSummarizationThresholdError = error3 instanceof ProactiveSummarizationThresholdError;
                    const isTokenLimitError = SummarizationHandler.isTokenLimitError(error3);
                    const isImagePartsLimitError = isTooManyImagesOrDocumentsError(error3);
                    if (isProactiveSummarizationThresholdError || isTokenLimitError || isImagePartsLimitError) {
                        const wouldUseSelfSummary = this.orchestrator.canUseSelfSummary({
                            tools,
                            extraT
                        });
                        logger74.info(ctx, isImagePartsLimitError ? "[summarization-trigger] Hit image limit error, running blocking summarization in order to compress context" : isProactiveSummarizationThresholdError ? "[summarization-trigger] Hit configured summarization threshold, running blocking summarization in order to compress context" : "[summarization-trigger] Hit token limit error, running blocking summarization in order to compress context");
                        const forceExternalModel = isTokenLimitError || isImagePartsLimitError ? true : void 0;
                        const summarizationOptions = {
                            backgroundSummarizationMode: BackgroundSummarizationMode.WaitForCompletion,
                            currentInvocationId: stateHandler.lastStepInvocationId,
                            triggerReason: isImagePartsLimitError ? "approaching_image_limit" : isProactiveSummarizationThresholdError ? "approaching_token_limit" : wouldUseSelfSummary ? "fallback_on_limit_error" : "input_token_limit_error",
                            resourceAccessor: this.resourceAccessor,
                            forceExternalModel,
                            tools,
                            extraT,
                            descriptionProps,
                            automationTriggerContext
                        };
                        await withCloudAgentPreAgentTurnPrepPhase(ctx, "preAgentSummarizationMs", async ()=>{
                            try {
                                await this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, summarizationOptions);
                            } catch (summarizationError) {
                                const selfSummaryHitTokenLimit = wouldUseSelfSummary && SummarizationHandler.isInputOrOutputTokenLimitError(summarizationError);
                                const adoptedSelfSummaryHitTokenLimit = forceExternalModel === true && selfSummaryHitTokenLimit;
                                const shouldFallbackToExternalSummarization = adoptedSelfSummaryHitTokenLimit || this.config.featureFlags?.cloudAgentProactiveSelfSummarization === true && forceExternalModel !== true && selfSummaryHitTokenLimit;
                                if (!shouldFallbackToExternalSummarization) {
                                    throw summarizationError;
                                }
                                logger74.info(ctx, adoptedSelfSummaryHitTokenLimit ? "[summarization-trigger] Adopted in-flight self-summary hit token limit, running the forced external summarization" : "[summarization-trigger] Self-summary hit token limit, falling back to external summarization");
                                await this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
                                    ...summarizationOptions,
                                    triggerReason: "fallback_on_limit_error",
                                    forceExternalModel: true
                                });
                            }
                        });
                        lastRetryError = error3;
                        continue;
                    }
                    throw error3;
                }
            }
            throw new StepRetriesExhaustedError("summarization-retries", {
                cause: lastRetryError
            });
        } catch (e_4) {
            env_4.error = e_4;
            env_4.hasError = true;
        } finally{
            __disposeResources62(env_4);
        }
    }
    async runTurnLoop(parentCtx, rootPromptExecutor, stateHandler, initialTurn, toolsGenerator, mcpTools, repositoryInfo, requestContext, onStateUpdate) {
        const env_5 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource62(env_5, createSpan(parentCtx.withName("runTurnLoop")), false);
            const ctx = span.ctx;
            await this.cancelPendingAgentResponseComparison();
            this.responseComparisonPendingUiAttempted = false;
            this.responseComparisonModelStepStarted = false;
            this.responseComparisonWarmupsInTurn = 0;
            this.responseComparisonCandidate = void 0;
            const turnStartTime = performance.now();
            let totalToolCallsInTurn = 0;
            const turnToolCountingState = new ToolCountingStateTracker();
            const turnToolCountingMiddleware = createToolCountingMiddleware(turnToolCountingState);
            const wrappedRootPromptExecutor = turnToolCountingMiddleware(rootPromptExecutor);
            const hadPreviousAssistantMessage = wrappedRootPromptExecutor.getMessages().some((message)=>message.role === "assistant");
            const initialTodos = await Promise.all(stateHandler.todos.map((todoRef)=>todoRef.get(ctx)));
            const initialTodoCount = initialTodos.length;
            const hadUnfinishedTodosAtStart = initialTodos.some((todo)=>todo.status === TodoStatus.PENDING || todo.status === TodoStatus.IN_PROGRESS);
            const unfinishedTodosAtStart = initialTodos.filter((todo)=>todo.status === TodoStatus.PENDING || todo.status === TodoStatus.IN_PROGRESS).length;
            let turn = initialTurn;
            let currentMcpTools = mcpTools;
            let assistantMessagesSinceLastReflectGeneral = 0;
            const cliReflectGeneralReminderInterval = this.config.featureFlags?.cliReflectGeneralConfig?.stepsUntilForcedFollowUp ?? DEFAULT_CLI_REFLECT_GENERAL_REMINDER_INTERVAL;
            const cliReflectGeneralMaxFollowUpsPerTurn = this.config.featureFlags?.cliReflectGeneralConfig?.maxForcedFollowUpsPerTurn ?? DEFAULT_CLI_REFLECT_GENERAL_MAX_FOLLOW_UPS_PER_TURN;
            const cliReflectGeneralReminderText = this.config.featureFlags?.cliReflectGeneralConfig?.forcedFollowUpMessage ?? DEFAULT_CLI_REFLECT_GENERAL_REMINDER_TEXT;
            let cliReflectGeneralFollowUpsSentInTurn = 0;
            const userMessage = await initialTurn.userMessage.get(ctx);
            stateHandler.setMode(stateHandler.resolveTurnMode(userMessage));
            const stepLimit = Math.min(this.config.maxSteps, this.config.clientMaxSteps ?? Number.POSITIVE_INFINITY);
            if (!Number.isFinite(stepLimit) || stepLimit <= 0) {
                throw new Error("Max steps must be a finite number greater than 0");
            }
            const fileOperationLockManager = new FileOperationLockManager();
            await this.maybeAdoptPendingSummary(ctx, stateHandler, rootPromptExecutor, requestContext);
            this.markRestoredTokenDetailsStaleAfterCompaction(ctx, stateHandler, rootPromptExecutor);
            try {
                let previousStepCount = turn.steps.length;
                let previousMode = stateHandler.mode;
                let previousQueuedMessageSource = "none";
                let finalAssistantMessageCharacterCount;
                let finalAssistantMessageUxStats;
                const emptyResponseRetryTurnBudget = {
                    retriesUsed: 0
                };
                let conflictBarrierInjectionsRemaining = 2;
                for(let step = 0; step < stepLimit && !ctx.signal.aborted; step++){
                    try {
                        const currentMode = stateHandler.mode;
                        if (previousMode !== void 0 && currentMode !== void 0 && currentMode !== previousMode) {
                            const modeReminder = stateHandler.generateModeChangeContent(this.config, requestContext, previousMode);
                            logger74.info(ctx, "Mode changed, adding nudge", {
                                previousMode,
                                newMode: currentMode
                            });
                            if (modeReminder) {
                                await rootPromptExecutor.appendMessages(toRedactedCoreMessages([
                                    {
                                        role: "user",
                                        content: modeReminder
                                    }
                                ], stateHandler.getPrivacyMode()));
                            }
                            previousMode = currentMode;
                        }
                        const readPathsBefore = new Set(stateHandler.readPaths);
                        const { hasToolCall, responseMessages, toolCallIdentityResolver } = await this.executeStepWithMetrics(ctx, turn, {
                            wrappedPromptExecutor: wrappedRootPromptExecutor,
                            rootPromptExecutor
                        }, stateHandler, toolsGenerator, currentMcpTools, repositoryInfo, requestContext, fileOperationLockManager, onStateUpdate, previousQueuedMessageSource, emptyResponseRetryTurnBudget);
                        const toolCallsInStep = responseMessages.filter((message)=>message.role === "tool").length;
                        totalToolCallsInTurn += toolCallsInStep;
                        const assistantMessagesInStep = countAssistantMessages(responseMessages);
                        const hasReflectGeneralCall = hasReflectGeneralToolCall(responseMessages, toolCallIdentityResolver);
                        if (hasReflectGeneralCall) {
                            assistantMessagesSinceLastReflectGeneral = 0;
                        } else {
                            assistantMessagesSinceLastReflectGeneral += assistantMessagesInStep;
                        }
                        previousStepCount = turn.steps.length;
                        await this.applyPostStepProcessing(ctx, turn, rootPromptExecutor, stateHandler, hasToolCall, responseMessages, onStateUpdate);
                        const isLastIteration = step === stepLimit - 1;
                        let updatedTurn = turn;
                        let hasQueuedMessages = false;
                        let queuedMessageSource = "none";
                        let hasQueuedUserTurn = false;
                        let updatedMcpTools = currentMcpTools;
                        const queuedAction = await this.conversationActionReceiver.peek(ctx);
                        if (queuedAction?.action.case === "asyncAskQuestionCompletionAction") {
                            logger74.info(ctx, "Found queued AsyncAskQuestionCompletionAction - processing immediately", {
                                originalToolCallId: queuedAction.action.value.originalToolCallId
                            });
                            await this.conversationActionReceiver.pop(ctx);
                            const completionAction = queuedAction.action.value;
                            const application = await applyAskQuestionCompletion(ctx, {
                                action: completionAction,
                                stateHandler,
                                turn,
                                rootPromptExecutor,
                                resultFormat: "json-object"
                            });
                            if (application.outcome === "applied") {
                                const syntheticModelCallId = (0, import_node_crypto32.randomUUID)();
                                await this.interactionListener.sendUpdate(ctx, RedactedUpdates.toolCallStarted(application.recordedToolCallId, application.toolCall, syntheticModelCallId));
                                await this.interactionListener.sendUpdate(ctx, RedactedUpdates.toolCallCompleted(application.recordedToolCallId, application.toolCall, syntheticModelCallId));
                                logger74.info(ctx, "Injected async completion into current turn", {
                                    originalToolCallId: completionAction.originalToolCallId,
                                    resultCase: completionAction.result?.result.case
                                });
                                totalToolCallsInTurn += 1;
                                hasQueuedMessages = true;
                                queuedMessageSource = "asyncAskQuestionCompletion";
                            } else {
                                logger74.info(ctx, "Dropped queued async completion", {
                                    originalToolCallId: completionAction.originalToolCallId,
                                    outcome: application.outcome
                                });
                            }
                        }
                        if (!isLastIteration) {
                            const modeBeforeQueuedTurns = stateHandler.mode;
                            const result = await this.consumeQueuedUserMessagesAndMaybeCreateNewTurns(ctx, stateHandler, turn, currentMcpTools, onStateUpdate);
                            if (stateHandler.mode !== modeBeforeQueuedTurns) {
                                previousMode = stateHandler.mode;
                            }
                            updatedTurn = result.turn;
                            hasQueuedMessages = hasQueuedMessages || result.hasQueuedMessages;
                            if (result.hasQueuedMessages) {
                                queuedMessageSource = "consumeQueuedUserMessages";
                            }
                            hasQueuedUserTurn = result.hasQueuedMessages;
                            updatedMcpTools = result.mcpTools;
                        }
                        const crossedReflectReminderThreshold = !hasReflectGeneralCall && assistantMessagesInStep > 0 && Math.floor((assistantMessagesSinceLastReflectGeneral - assistantMessagesInStep) / cliReflectGeneralReminderInterval) < Math.floor(assistantMessagesSinceLastReflectGeneral / cliReflectGeneralReminderInterval);
                        const canInjectReflectReminderThisTurn = cliReflectGeneralMaxFollowUpsPerTurn === -1 || cliReflectGeneralFollowUpsSentInTurn < cliReflectGeneralMaxFollowUpsPerTurn;
                        if (!isLastIteration && !hasQueuedUserTurn && crossedReflectReminderThreshold && canInjectReflectReminderThisTurn && await this.shouldInjectCliReflectGeneralFollowUp(ctx, stateHandler, turn, toolsGenerator, updatedMcpTools, repositoryInfo, requestContext, fileOperationLockManager)) {
                            updatedTurn = await this.createCliReflectGeneralFollowUpTurn(ctx, stateHandler, turn, cliReflectGeneralReminderText, requestContext, onStateUpdate);
                            hasQueuedMessages = true;
                            queuedMessageSource = "cliReflectGeneralFollowUp";
                            cliReflectGeneralFollowUpsSentInTurn += 1;
                            logger74.info(ctx, "Injected CLI reflect-general follow-up", {
                                assistantMessagesSinceLastReflectGeneral,
                                cliReflectGeneralFollowUpsSentInTurn,
                                cliReflectGeneralMaxFollowUpsPerTurn
                            });
                        }
                        turn = updatedTurn;
                        currentMcpTools = updatedMcpTools;
                        const hostRequestedTurnEnd = this.config.isTurnEndRequested?.() === true;
                        const hasEnded = !hasToolCall && !hasQueuedMessages || isLastIteration || hostRequestedTurnEnd;
                        if (!hasToolCall && !hasQueuedMessages && conflictBarrierInjectionsRemaining > 0 && !isLastIteration && this.config.featureFlags?.enableAgentStoreConflictNotices === true && await this.maybeInjectPreFinalConflictBarrier(ctx, rootPromptExecutor, stateHandler.getPrivacyMode())) {
                            conflictBarrierInjectionsRemaining -= 1;
                            this.responseComparisonCandidate = void 0;
                            continue;
                        }
                        if (!hasEnded) {
                            this.responseComparisonCandidate = void 0;
                        } else if (hasToolCall || hasQueuedMessages) {
                            this.responseComparisonCandidate = void 0;
                            await this.finalizePendingAgentResponseComparison(false);
                        }
                        if (hasEnded) {
                            try {
                                finalAssistantMessageCharacterCount = getFinalAssistantMessageCharacterCount(responseMessages);
                            } catch (error3) {
                                logger74.error(ctx, "Failed to count final assistant message characters", error3);
                                finalAssistantMessageCharacterCount = void 0;
                            }
                            if (this.config.featureFlags?.collectModelUxStats !== false) {
                                try {
                                    finalAssistantMessageUxStats = getFinalAssistantMessageUxStats(responseMessages);
                                } catch (error3) {
                                    logger74.error(ctx, "Failed to analyze final assistant message UX stats", error3);
                                    finalAssistantMessageUxStats = void 0;
                                }
                            }
                        }
                        previousQueuedMessageSource = queuedMessageSource;
                        if (hasEnded && stateHandler.backgroundSummarizationPromiseInfo !== null) {
                            const backgroundSummarizationPromiseInfo = stateHandler.backgroundSummarizationPromiseInfo;
                            const tokenDetails = stateHandler.tokenDetails;
                            const isSelfSummary = backgroundSummarizationPromiseInfo.summarizerType === "self";
                            const shouldPersistForTokenThreshold = shouldPersistBackgroundSummarization(tokenDetails.usedTokens, tokenDetails.maxTokens, this.config.backgroundSummarizationProps);
                            const endOfTurnMessages = fromRedactedCoreMessages(rootPromptExecutor.getMessages(), PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
                            const imageCountAtTurnEnd = countImagePartsInMessages(endOfTurnMessages);
                            const shouldPersistForImageThreshold = imageCountAtTurnEnd >= IMAGE_SUMMARIZATION_TRIGGER_COUNT;
                            const shouldPersist = shouldPersistForTokenThreshold || shouldPersistForImageThreshold || persistsWithoutThreshold(backgroundSummarizationPromiseInfo);
                            const completedPersistTriggerReason = shouldPersistForImageThreshold ? "approaching_image_limit" : isSelfSummary ? "self_summary_completed" : "threshold_met";
                            if (shouldPersist) {
                                if (stateHandler.backgroundSummarizationHasCompleted) {
                                    if (stateHandler.shouldSuppressSelfSummaryAfterInputLimitFailure(tokenDetails.usedTokens)) {
                                        emitSummaryLifecycleDeferred(ctx, backgroundSummarizationPromiseInfo, "self_summary_suppressed_after_input_limit");
                                        logger74.info(ctx, "[summarization-discard] At end of turn, suppressing completed self-summary persistence after input-limit failure", {
                                            usedTokens: tokenDetails.usedTokens,
                                            selfSummaryInputLimitFailureTokenCount: stateHandler.selfSummaryInputLimitFailureTokenCount,
                                            imageCountAtTurnEnd,
                                            imageThreshold: IMAGE_SUMMARIZATION_TRIGGER_COUNT,
                                            shouldPersistForImageThreshold
                                        });
                                    } else {
                                        logger74.info(ctx, "[summarization-persist] At end of turn, background summarization has completed and persistence threshold has been hit. Persisting summarization.", {
                                            usedTokens: tokenDetails.usedTokens,
                                            maxTokens: tokenDetails.maxTokens,
                                            imageCountAtTurnEnd,
                                            imageThreshold: IMAGE_SUMMARIZATION_TRIGGER_COUNT,
                                            shouldPersistForImageThreshold
                                        });
                                        await this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
                                            backgroundSummarizationMode: BackgroundSummarizationMode.BackgroundAndPersistIfCompleted,
                                            currentInvocationId: stateHandler.lastStepInvocationId,
                                            isToolCall: totalToolCallsInTurn > 0,
                                            triggerReason: completedPersistTriggerReason,
                                            resourceAccessor: this.resourceAccessor
                                        });
                                    }
                                } else {
                                    const overageThreshold = getSignificantOverageThreshold(tokenDetails.maxTokens);
                                    const shouldBlockForTokenOverage = isSignificantlyOverTokenLimit(tokenDetails);
                                    const shouldBlockForImageThreshold = shouldPersistForImageThreshold;
                                    if (shouldBlockForTokenOverage || shouldBlockForImageThreshold) {
                                        logger74.info(ctx, shouldBlockForImageThreshold ? "[summarization-persist] At end of turn, blocking on background summarization before persistence because image count reached threshold" : "[summarization-persist] At end of turn, blocking on background summarization because token usage significantly exceeds max tokens", {
                                            usedTokens: tokenDetails.usedTokens,
                                            maxTokens: tokenDetails.maxTokens,
                                            overageThreshold,
                                            imageCountAtTurnEnd,
                                            imageThreshold: IMAGE_SUMMARIZATION_TRIGGER_COUNT,
                                            blockedForImageThreshold: shouldBlockForImageThreshold,
                                            blockedForTokenOverage: shouldBlockForTokenOverage
                                        });
                                        await this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
                                            backgroundSummarizationMode: BackgroundSummarizationMode.WaitForCompletion,
                                            currentInvocationId: stateHandler.lastStepInvocationId,
                                            isToolCall: totalToolCallsInTurn > 0,
                                            triggerReason: shouldBlockForImageThreshold ? "approaching_image_limit" : "significantly_over_token_limit",
                                            resourceAccessor: this.resourceAccessor
                                        });
                                    } else {
                                        emitSummaryLifecycleDeferred(ctx, backgroundSummarizationPromiseInfo, "generation_running_at_turn_end");
                                        logger74.info(ctx, "[summarization-discard] At end of turn, persistence threshold is met, but we are discarding background summarization as it has not completed", {
                                            usedTokens: tokenDetails.usedTokens,
                                            maxTokens: tokenDetails.maxTokens,
                                            imageCountAtTurnEnd,
                                            imageThreshold: IMAGE_SUMMARIZATION_TRIGGER_COUNT,
                                            shouldPersistForImageThreshold
                                        });
                                        backgroundSummarizationDiscarded.increment(ctx, 1, {
                                            reason: "not_completed",
                                            model: backgroundSummarizationPromiseInfo.modelId
                                        });
                                    }
                                }
                            } else {
                                if (isSelfSummary) {
                                    emitSummaryLifecycleDeferred(ctx, backgroundSummarizationPromiseInfo, "persistence_threshold_not_met");
                                    logger74.info(ctx, "[summarization-discard] At end of turn, discarding self-summary as persistence threshold is not met", {
                                        usedTokens: tokenDetails.usedTokens,
                                        maxTokens: tokenDetails.maxTokens,
                                        imageCountAtTurnEnd,
                                        imageThreshold: IMAGE_SUMMARIZATION_TRIGGER_COUNT,
                                        shouldPersistForImageThreshold,
                                        backgroundSummarizationHasCompleted: stateHandler.backgroundSummarizationHasCompleted
                                    });
                                    backgroundSummarizationDiscarded.increment(ctx, 1, {
                                        reason: "self_summary_persist_threshold_not_met",
                                        model: backgroundSummarizationPromiseInfo.modelId
                                    });
                                } else {
                                    logger74.info(ctx, "[summarization-discard] At end of turn, we are discarding background summarization as persistence threshold is not met", {
                                        usedTokens: tokenDetails.usedTokens,
                                        maxTokens: tokenDetails.maxTokens,
                                        imageCountAtTurnEnd,
                                        imageThreshold: IMAGE_SUMMARIZATION_TRIGGER_COUNT,
                                        shouldPersistForImageThreshold,
                                        backgroundSummarizationConfig: this.config.backgroundSummarizationProps,
                                        backgroundSummarizationHasCompleted: stateHandler.backgroundSummarizationHasCompleted
                                    });
                                    const completed = stateHandler.backgroundSummarizationHasCompleted;
                                    const triggerThreshold = getBackgroundSummarizationTriggerThreshold(tokenDetails.maxTokens, this.config.backgroundSummarizationProps);
                                    let reason = completed ? "threshold_not_met_completed" : "threshold_not_met_not_completed";
                                    const thresholdSignificantlyGreaterThanUsedTokens = triggerThreshold !== void 0 && tokenDetails.usedTokens < triggerThreshold * 0.6;
                                    if (thresholdSignificantlyGreaterThanUsedTokens) {
                                        reason = "incorrectly_triggered_summarization";
                                    }
                                    emitSummaryLifecycleDeferred(ctx, backgroundSummarizationPromiseInfo, thresholdSignificantlyGreaterThanUsedTokens ? "incorrectly_triggered" : "persistence_threshold_not_met");
                                    backgroundSummarizationDiscarded.increment(ctx, 1, {
                                        reason,
                                        model: backgroundSummarizationPromiseInfo.modelId
                                    });
                                }
                            }
                        }
                        if (hasEnded && stateHandler.backgroundSummarizationPromiseInfo !== null) {
                            const backgroundSummarizationPromiseInfo = stateHandler.backgroundSummarizationPromiseInfo;
                            const messagesUndergoingSummarization = stateHandler.messagesUndergoingSummarization;
                            if (backgroundSummarizationPromiseInfo.kind === "live_generation" && messagesUndergoingSummarization !== null && this.config.conversationId !== void 0) {
                                this.config.pendingSummaryStore?.reparkPendingGeneration?.({
                                    conversationId: this.config.conversationId,
                                    promiseInfo: backgroundSummarizationPromiseInfo,
                                    messagesSummarized: messagesUndergoingSummarization
                                });
                            }
                            if (stateHandler.backgroundSummarizationCancellationToken) {
                                stateHandler.backgroundSummarizationCancellationToken.cancelled = true;
                                stateHandler.backgroundSummarizationCancellationToken.onCancelled?.();
                            }
                            backgroundSummarizationPromiseInfo.promise.catch((err)=>{
                                logger74.error(ctx, "Background summarization failed", {
                                    error: err,
                                    summarizationMode: "unspecified",
                                    triggerReason: "unspecified",
                                    model: backgroundSummarizationPromiseInfo.modelId
                                });
                            });
                        }
                        if (hasEnded && !hasToolCall && !hasQueuedMessages) {
                            await this.finalizePendingAgentResponseComparison(true);
                        }
                        const lastTurn = await stateHandler.turns.at(-1)?.get(ctx);
                        if (lastTurn instanceof AgentConversationTurnHandle) {
                            const lastStep = await lastTurn.steps.at(-1)?.get(ctx);
                            if (lastStep?.message.case === "toolCall" && lastStep.message.value.tool.case === "createPlanToolCall" && lastStep.message.value.tool.value.result?.result?.case === "success") {
                                logger74.info(ctx, "Plan created, breaking out of turn loop");
                                this.responseComparisonCandidate = void 0;
                                await this.cancelPendingAgentResponseComparison();
                                break;
                            }
                        }
                        if (hostRequestedTurnEnd) {
                            logger74.info(ctx, "Host requested turn end after this step");
                            break;
                        }
                        if (!hasToolCall && !hasQueuedMessages) {
                            break;
                        }
                        if (!this.config.doNotFailOnMaxSteps && isLastIteration) {
                            throw new MaxStepsReachedError2(stepLimit);
                        }
                    } finally{
                        agentStepCount.increment(ctx, 1, {});
                    }
                }
                try {
                    const finalTodos = await Promise.all(stateHandler.todos.map((todoRef)=>todoRef.get(ctx)));
                    const unfinishedTodoCount = finalTodos.filter((todo)=>todo.status === TodoStatus.PENDING || todo.status === TodoStatus.IN_PROGRESS).length;
                    if (unfinishedTodoCount > 0) {
                        unfinishedTodosMetric.increment(ctx, unfinishedTodoCount);
                        logger74.info(ctx, "Turn ended with unfinished todos", {
                            unfinishedTodoCount
                        });
                    }
                    const eventTracker = getAgentEventTracker(ctx);
                    const finalTodoCount = finalTodos.length;
                    eventTracker.trackUnfinishedTodos(ctx, {
                        unfinishedTodoCount
                    });
                    if (finalTodoCount > initialTodoCount) {
                        const createdTodoCount = finalTodoCount - initialTodoCount;
                        eventTracker.trackUnfinishedTodosWhenCreatedTodos(ctx, {
                            unfinishedTodoCount,
                            createdTodoCount
                        });
                    }
                    if (hadUnfinishedTodosAtStart) {
                        eventTracker.trackUnfinishedTodosWhenHadUnfinishedTodosAtStart(ctx, {
                            unfinishedTodosAtEnd: unfinishedTodoCount,
                            unfinishedTodosAtStart
                        });
                    }
                } catch (error3) {
                    logger74.error(ctx, "Failed to track unfinished todos metric", error3);
                }
                const turnDuration = performance.now() - turnStartTime;
                agentTurnDuration.histogram(ctx, turnDuration);
                agentTurnResult.increment(ctx, 1, {
                    outcome: "success",
                    error_class: "none",
                    newConversation: hadPreviousAssistantMessage ? "false" : "true",
                    isauto: getIsAutoFromContext(ctx) ? "true" : "false",
                    ispremium: getIsPremiumFromContext(ctx) ? "true" : "false",
                    isanysphereteam: getIsAnysphereTeamFromContext(ctx) ? "true" : "false",
                    isuserapikey: getIsUserApiKeyFromContext(ctx) ? "true" : "false",
                    issubagent: getIsSubagentFromContext(ctx) ? "true" : "false",
                    autoroutingreason: getAutoRoutingReasonFromContext(ctx)
                });
                if (finalAssistantMessageCharacterCount !== void 0) {
                    try {
                        finalAssistantMessageCharacters.histogram(ctx, finalAssistantMessageCharacterCount);
                    } catch (error3) {
                        logger74.error(ctx, "Failed to record final assistant message character metric", error3);
                    }
                }
                if (finalAssistantMessageUxStats !== void 0) {
                    try {
                        for (const stat24 of FINAL_ASSISTANT_MESSAGE_UX_STAT_NAMES){
                            finalAssistantMessageUxStatsMetric.histogram(ctx, finalAssistantMessageUxStats[stat24], {
                                stat: stat24
                            });
                        }
                    } catch (error3) {
                        logger74.error(ctx, "Failed to record final assistant message UX stats metric", error3);
                    }
                }
                await this.interactionListener.sendUpdate(ctx, RedactedUpdates.stepCompleted(stateHandler.getPrivacyMode(), turn.steps.length, Math.round(turnDuration)));
                if (this.config.featureFlags?.enablePromptSuggestion) {
                    try {
                        const userMessageForTools = await turn.userMessage.get(ctx);
                        const modeForTools = stateHandler.resolveStepMode(userMessageForTools);
                        const toolSetHandleForSuggestion = toolsGenerator({
                            resourceAccessor: this.resourceAccessor,
                            stateHandler,
                            agentSessionId: this.config.agentSessionId,
                            mcpTools: currentMcpTools,
                            repositoryInfos: repositoryInfo,
                            blobStore: stateHandler.getBlobStore(),
                            mode: modeForTools,
                            loggingContext: ctx,
                            requestContext,
                            fileOperationLockManager,
                            smartModeClassifierMode: this.config.smartModeClassifierMode,
                            smartModeClassifierShadowMode: this.config.smartModeClassifierShadowMode,
                            autoRejectFirstAskQuestion: this.config.autoRejectFirstAskQuestion
                        });
                        const toolsForSuggestion = toAgentTools(toolSetHandleForSuggestion.getStaticTools(), toolSetHandleForSuggestion.getDescriptionProps());
                        const invocationId = getInvocationId(ctx);
                        const modelId = this.config.modelId;
                        const messagesSnapshot = rootPromptExecutor.getMessages();
                        const maxInputTokenCost = this.config.featureFlags?.promptSuggestionMaxInputTokenCost;
                        const costChecker = this.config.featureFlags?.getModelInputCostForContext;
                        this.interactionListener.enqueuePostTurnEndedWork?.(async ()=>{
                            try {
                                await requestPromptSuggestion(ctx, invocationId, modelId, rootPromptExecutor, toUnredactedInteractionListener(this.interactionListener, stateHandler.getPrivacyMode()), toolsForSuggestion, messagesSnapshot, {
                                    maxInputTokenCost,
                                    getModelInputCostForContext: costChecker
                                });
                            } catch (err) {
                                logger74.error(ctx, "Failed to request prompt suggestion", err);
                            }
                        });
                    } catch (err) {
                        logger74.error(ctx, "Failed to setup prompt suggestion", err);
                    }
                }
                const getFeedbackRequestDetails = this.config.featureFlags?.getFeedbackRequestDetails;
                if (getFeedbackRequestDetails !== void 0 && !getIsSubagentFromContext(ctx)) {
                    const feedbackRequestId = getRequestId(ctx);
                    if (feedbackRequestId !== void 0) {
                        this.interactionListener.enqueuePostTurnEndedWork?.(async ()=>{
                            try {
                                if (!hadPreviousAssistantMessage) {
                                    return;
                                }
                                const feedbackRequestDetails = await getFeedbackRequestDetails({
                                    canonicalModelName: this.config.canonicalModelName
                                });
                                if (feedbackRequestDetails === void 0) {
                                    return;
                                }
                                await this.interactionListener.sendUpdate(ctx, RedactedUpdates.feedbackRequest(feedbackRequestId, this.config.canonicalModelName, stateHandler.getPrivacyMode(), feedbackRequestDetails.categories, feedbackRequestDetails.categoryGroups ?? [], {
                                    title: feedbackRequestDetails.title,
                                    negativeTitle: feedbackRequestDetails.negativeTitle,
                                    commentPlaceholder: feedbackRequestDetails.commentPlaceholder
                                }));
                            } catch (err) {
                                logger74.error(ctx, "Failed to emit feedback request", err);
                            }
                        });
                    }
                }
                agentToolCallsPerTurn.histogram(ctx, totalToolCallsInTurn, {
                    outcome: "success",
                    ...getClientVersionMetricTagsFromContext(ctx),
                    ...getSdkFlavorMetricTagFromContext(ctx),
                    "user.is_dev": getIsDevFromContext(ctx) ? "true" : "false"
                });
                const modelName = this.config.modelId ?? "unknown";
                unifiedHandlerNumberOfToolCalls.histogram(ctx, totalToolCallsInTurn, {
                    model: modelName,
                    hasFailedToolCalls: turnToolCountingState.hasFailedToolCalls(),
                    hasUnexpectedToolCallErrors: turnToolCountingState.hasUnexpectedToolCallErrors(),
                    success: "true",
                    errorName: "none"
                });
                const eventTrackerForToolCalls = getAgentEventTracker(ctx);
                eventTrackerForToolCalls.trackNumberOfToolCalls(ctx, {
                    numberOfToolCalls: totalToolCallsInTurn,
                    numberOfFailedToolCalls: turnToolCountingState.getFailedToolCallCount(),
                    numberOfUnexpectedToolCallErrors: turnToolCountingState.getUnexpectedToolCallErrorCount(),
                    success: true
                });
            } catch (error3) {
                await this.cancelPendingAgentResponseComparison();
                const turnDuration = performance.now() - turnStartTime;
                let outcome = "error";
                if (ctx.signal.aborted) {
                    outcome = "aborted";
                }
                const failureTelemetry = getTurnFailureTelemetrySink(ctx);
                const turnResultLabels = {
                    outcome,
                    error_class: outcome === "error" ? classifyTurnError(error3) : "none",
                    newConversation: hadPreviousAssistantMessage ? "false" : "true",
                    isauto: getIsAutoFromContext(ctx) ? "true" : "false",
                    ispremium: getIsPremiumFromContext(ctx) ? "true" : "false",
                    isanysphereteam: getIsAnysphereTeamFromContext(ctx) ? "true" : "false",
                    isuserapikey: getIsUserApiKeyFromContext(ctx) ? "true" : "false",
                    issubagent: getIsSubagentFromContext(ctx) ? "true" : "false",
                    autoroutingreason: getAutoRoutingReasonFromContext(ctx)
                };
                failureTelemetry.book(()=>{
                    agentTurnDuration.histogram(ctx, turnDuration);
                    agentTurnResult.increment(ctx, 1, turnResultLabels);
                });
                const toolCallsPerTurnLabels = {
                    outcome,
                    ...getClientVersionMetricTagsFromContext(ctx),
                    ...getSdkFlavorMetricTagFromContext(ctx),
                    "user.is_dev": getIsDevFromContext(ctx) ? "true" : "false"
                };
                const modelName = this.config.modelId ?? "unknown";
                const errorName = error3 instanceof Error ? errorNameTag(error3) : "unknown";
                const toolCallCountLabels = {
                    model: modelName,
                    hasFailedToolCalls: turnToolCountingState.hasFailedToolCalls(),
                    hasUnexpectedToolCallErrors: turnToolCountingState.hasUnexpectedToolCallErrors(),
                    success: "false",
                    errorName
                };
                const numberOfToolCalls = {
                    numberOfToolCalls: totalToolCallsInTurn,
                    numberOfFailedToolCalls: turnToolCountingState.getFailedToolCallCount(),
                    numberOfUnexpectedToolCallErrors: turnToolCountingState.getUnexpectedToolCallErrorCount(),
                    success: false
                };
                failureTelemetry.book(()=>{
                    agentToolCallsPerTurn.histogram(ctx, totalToolCallsInTurn, toolCallsPerTurnLabels);
                    unifiedHandlerNumberOfToolCalls.histogram(ctx, totalToolCallsInTurn, toolCallCountLabels);
                    getAgentEventTracker(ctx).trackNumberOfToolCalls(ctx, numberOfToolCalls);
                });
                await this.interactionListener.sendUpdate(ctx, RedactedUpdates.stepCompleted(stateHandler.getPrivacyMode(), turn.steps.length, Math.round(turnDuration)));
                throw error3;
            }
        } catch (e_5) {
            env_5.error = e_5;
            env_5.hasError = true;
        } finally{
            __disposeResources62(env_5);
        }
    }
    async consumeQueuedUserMessagesAndMaybeCreateNewTurns(ctx, stateHandler, currentTurn, currentMcpTools, onStateUpdate) {
        let turn = currentTurn;
        let hasQueuedMessages = false;
        let mcpTools = currentMcpTools;
        while(true){
            const queuedAction = await this.conversationActionReceiver.peek(ctx);
            if (queuedAction?.action.case === "asyncAskQuestionCompletionAction") {
                logger74.warn(ctx, "Found AsyncAskQuestionCompletionAction in queue handler - should have been handled by inline handler", {
                    originalToolCallId: queuedAction.action.value.originalToolCallId
                });
                break;
            }
            if (queuedAction?.action.case !== "userMessageAction") {
                break;
            }
            const { userMessage: queuedMsg, requestContext: queuedReqContext } = queuedAction.action.value;
            if (!queuedMsg) {
                throw new Error("User message is required");
            }
            let consumedClaimedInjection = false;
            if (this.conversationActionReceiver.peekIsClaimedInjection?.() === true) {
                await this.conversationActionReceiver.pop(ctx);
                consumedClaimedInjection = true;
            }
            const turnMsg = await turn.userMessage.get(ctx);
            const shouldCreateNewTurn = turnMsg.messageId !== queuedMsg.messageId;
            if (!shouldCreateNewTurn || queuedReqContext === void 0) {
                logger74.info(ctx, "Queued user message consumption decision", {
                    queuedMessageId: queuedMsg.messageId,
                    currentTurnMessageId: turnMsg.messageId,
                    decision: shouldCreateNewTurn ? "new_turn_created" : "already_has_turn",
                    missingQueuedRequestContext: queuedReqContext === void 0,
                    immediatelyUpdateStateOnNewTurn: this.config.immediatelyUpdateStateOnNewTurn,
                    fireAndForgetCheckpoints: this.config.fireAndForgetCheckpoints
                });
            }
            if (shouldCreateNewTurn) {
                try {
                    ensureUserMessageTiming(queuedMsg);
                    const persistedUserMessage = fromRedactedUserMessage2(queuedMsg, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
                    if (consumedClaimedInjection) {
                        persistedUserMessage.turnSteer = true;
                    }
                    await this.interactionListener.sendUpdate(ctx, RedactedUpdates.userMessageAppended(consumedClaimedInjection ? toRedactedUserMessage2(persistedUserMessage, stateHandler.getPrivacyMode()) : queuedMsg));
                    turn = await stateHandler.createAgentTurn(ctx, persistedUserMessage, queuedReqContext ? fromRedactedRequestContext(queuedReqContext, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED) : new RequestContext(), this.config, this.resourceAccessor);
                    stateHandler.setMode(stateHandler.resolveTurnMode(persistedUserMessage));
                } catch (error3) {
                    if (consumedClaimedInjection) {
                        this.conversationActionReceiver.failConsumedInjectionDelivery?.();
                    }
                    throw error3;
                }
                hasQueuedMessages = true;
                if (this.config.immediatelyUpdateStateOnNewTurn) {
                    if (this.config.fireAndForgetCheckpoints) {
                        void stateHandler.computeNewStructure(ctx).then(async (newState)=>{
                            if (onStateUpdate) {
                                await onStateUpdate(ctx, newState);
                            }
                        }).catch((error3)=>{
                            logger74.error(ctx, "Failed to persist checkpoint after creating queued turn", {
                                error: error3
                            });
                        });
                    } else {
                        const newState = await stateHandler.computeNewStructure(ctx);
                        if (onStateUpdate) {
                            await onStateUpdate(ctx, newState);
                        }
                    }
                }
            }
            if (!consumedClaimedInjection) {
                await this.conversationActionReceiver.pop(ctx);
            }
            const unredactedTools = queuedReqContext?.tools?.map((t)=>fromRedactedMcpToolDefinition(t, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED)) ?? [];
            mcpTools = this.mergeRequestContextTools(currentMcpTools, unredactedTools);
        }
        return {
            turn,
            hasQueuedMessages,
            mcpTools
        };
    }
    async shouldInjectCliReflectGeneralFollowUp(ctx, stateHandler, turn, toolsGenerator, mcpTools, repositoryInfo, requestContext, fileOperationLockManager) {
        if (this.config.featureFlags?.enableCliReflectGeneralTool !== true) {
            return false;
        }
        const userMessage = await turn.userMessage.get(ctx);
        const mode = stateHandler.resolveStepMode(userMessage);
        return toolsGenerator({
            resourceAccessor: this.resourceAccessor,
            stateHandler,
            agentSessionId: this.config.agentSessionId,
            mcpTools,
            repositoryInfos: repositoryInfo,
            blobStore: stateHandler.getBlobStore(),
            mode,
            loggingContext: ctx,
            requestContext,
            fileOperationLockManager,
            smartModeClassifierMode: this.config.smartModeClassifierMode,
            smartModeClassifierShadowMode: this.config.smartModeClassifierShadowMode,
            autoRejectFirstAskQuestion: this.config.autoRejectFirstAskQuestion
        }).hasTool("REFLECT_GENERAL");
    }
    async maybeInjectPreFinalConflictBarrier(ctx, rootPromptExecutor, privacyMode) {
        let executor;
        try {
            executor = this.resourceAccessor.get(agentStoreConflictNoticeExecutorResource);
        } catch  {
            executor = void 0;
        }
        if (executor === void 0) {
            return false;
        }
        const isAbortSignalAborted = ()=>ctx.signal?.aborted === true;
        if (isAbortSignalAborted()) {
            return false;
        }
        const releaseConflictNoticeEvents = async (eventIds)=>{
            if (eventIds.length === 0) {
                return;
            }
            try {
                await conflictNoticeRelease(executor, ctx, eventIds, this.config.conversationId !== void 0 ? {
                    conversationId: this.config.conversationId
                } : void 0);
            } catch (releaseError) {
                logger74.warn(ctx, "Conflict barrier release failed", {
                    error: releaseError
                });
            }
        };
        try {
            const result = await conflictNoticeSyncAndPeek(executor, ctx, {
                ...this.config.conversationId !== void 0 ? {
                    conversationId: this.config.conversationId
                } : {}
            });
            const timedOut = result.kind === "timed-out" ? "true" : "false";
            if (result.kind === "mount-passive") {
                agentStoreConflictBarrier.increment(ctx, 1, {
                    outcome: "mount_passive",
                    timed_out: timedOut
                });
                return false;
            }
            const reminder = result.kind === "completed" || result.kind === "timed-out" ? result.reminder : void 0;
            const eventIds = result.kind === "completed" || result.kind === "timed-out" ? result.events.map((event)=>event.eventId) : [];
            if (isAbortSignalAborted()) {
                await releaseConflictNoticeEvents(eventIds);
                return false;
            }
            if (reminder === void 0 || reminder.length === 0) {
                agentStoreConflictBarrier.increment(ctx, 1, {
                    outcome: "checked",
                    timed_out: timedOut
                });
                return false;
            }
            const sanitizedReminder = sanitizeSystemReminderContent(reminder);
            try {
                await rootPromptExecutor.appendMessages(toRedactedCoreMessages([
                    {
                        role: "user",
                        content: `<system_reminder>
${sanitizedReminder}
</system_reminder>`
                    }
                ], privacyMode));
            } catch (error3) {
                await releaseConflictNoticeEvents(eventIds);
                throw error3;
            }
            try {
                await conflictNoticeAck(executor, ctx, eventIds, this.config.conversationId !== void 0 ? {
                    conversationId: this.config.conversationId
                } : void 0);
            } catch (error3) {
                logger74.warn(ctx, "Conflict barrier ack failed", {
                    error: error3
                });
                await releaseConflictNoticeEvents(eventIds);
            }
            agentStoreConflictBarrier.increment(ctx, 1, {
                outcome: "rescued",
                timed_out: timedOut
            });
            logger74.info(ctx, "Local-sync conflict turn-end barrier injected", {
                eventCount: eventIds.length,
                timedOut: result.kind === "timed-out"
            });
            return true;
        } catch (error3) {
            agentStoreConflictBarrier.increment(ctx, 1, {
                outcome: "error",
                timed_out: "false"
            });
            logger74.warn(ctx, "Conflict turn-end barrier failed", {
                error: error3
            });
            return false;
        }
    }
    async createCliReflectGeneralFollowUpTurn(ctx, stateHandler, _turn, reminderText, requestContext, onStateUpdate) {
        const syntheticUserMessage = new UserMessage({
            text: reminderText,
            messageId: (0, import_node_crypto32.randomUUID)(),
            isSimulatedMsg: true
        });
        ensureUserMessageTiming(syntheticUserMessage);
        await this.interactionListener.sendUpdate(ctx, toRedactedInteractionUpdate(Updates.userMessageAppended(syntheticUserMessage), stateHandler.getPrivacyMode()));
        const newTurn = await stateHandler.createAgentTurn(ctx, syntheticUserMessage, requestContext, this.config, this.resourceAccessor);
        if (this.config.immediatelyUpdateStateOnNewTurn) {
            if (this.config.fireAndForgetCheckpoints) {
                void stateHandler.computeNewStructure(ctx).then(async (newState)=>{
                    if (onStateUpdate) {
                        await onStateUpdate(ctx, newState);
                    }
                }).catch((error3)=>{
                    logger74.error(ctx, "Failed to persist checkpoint after creating CLI reflect-general follow-up turn", {
                        error: error3
                    });
                });
            } else {
                const newState = await stateHandler.computeNewStructure(ctx);
                if (onStateUpdate) {
                    await onStateUpdate(ctx, newState);
                }
            }
        }
        return newTurn;
    }
    async shouldDeferProactiveCompaction(ctx, tokenDetails) {
        const shouldDefer = this.config.shouldDeferProactiveCompaction;
        if (shouldDefer === void 0 || isSignificantlyOverTokenLimit(tokenDetails)) {
            return false;
        }
        try {
            const deferred = await shouldDefer(ctx, tokenDetails);
            if (deferred) {
                logger74.info(ctx, "[cloud-summarization] Deferring proactive compaction while a background summarization is in flight", {
                    usedTokens: tokenDetails.usedTokens,
                    maxTokens: tokenDetails.maxTokens
                });
            }
            return deferred;
        } catch (error3) {
            logger74.warn(ctx, "[cloud-summarization] Proactive compaction deferral check failed; compacting", {
                error: error3
            });
            return false;
        }
    }
    markRestoredTokenDetailsStaleAfterCompaction(ctx, stateHandler, rootPromptExecutor) {
        if (this.config.maxSteps === 1) {
            return;
        }
        if (stateHandler.tokenDetailsStaleAfterSummarization) {
            return;
        }
        const tokenDetails = stateHandler.tokenDetails;
        const messages = rootPromptExecutor.getMessages();
        const wouldLaunchForRestoredCounts = this.orchestrator.shouldStartBackgroundSummarization(tokenDetails, messages, ctx);
        if (!wouldLaunchForRestoredCounts) {
            return;
        }
        const stale = computeRestoredTokenStaleness({
            messages,
            messageCountAtLastCompaction: stateHandler.messageCountAtLastCompaction
        });
        if (!stale) {
            return;
        }
        stateHandler.tokenDetailsStaleAfterSummarization = true;
        logger74.info(ctx, "[summarization-trigger] Restored token details predate the last compaction (no model call since); suppressing turn-start trigger until fresh usage arrives", {
            restoredUsedTokens: tokenDetails.usedTokens,
            maxTokens: tokenDetails.maxTokens,
            messageCountAtLastCompaction: stateHandler.messageCountAtLastCompaction,
            messageCount: messages.length
        });
    }
    async maybeAdoptPendingSummary(ctx, stateHandler, rootPromptExecutor, requestContext) {
        const store = this.config.pendingSummaryStore;
        const conversationId = this.config.conversationId;
        if (store === void 0 || conversationId === void 0) {
            return;
        }
        if (this.config.maxSteps === 1) {
            return;
        }
        if (stateHandler.backgroundSummarizationPromiseInfo !== null) {
            return;
        }
        const pendingGeneration = store.claimPendingGeneration?.(conversationId);
        if (pendingGeneration !== void 0) {
            const { promiseInfo, messagesSummarized } = pendingGeneration;
            stateHandler.setBackgroundSummarizationState(promiseInfo, messagesSummarized, {
                cancelled: false
            });
            return;
        }
        let adoptedModelId = "unknown";
        try {
            const currentMessages = rootPromptExecutor.getMessages();
            const adoption = await takePendingSummaryForAdoption({
                ctx,
                store,
                conversationId,
                privacyMode: stateHandler.getPrivacyMode(),
                currentMessages,
                stillWarrantsCompaction: (record4)=>{
                    if (persistsWithoutThreshold(record4)) {
                        return true;
                    }
                    const tokenDetails = stateHandler.tokenDetails;
                    const backgroundSummarizationProps = {
                        ...this.config.backgroundSummarizationProps,
                        usedTokensThresholdToStartBackgroundSummarization: record4.usedTokensThresholdToStartBackgroundSummarization ?? this.config.backgroundSummarizationProps.usedTokensThresholdToStartBackgroundSummarization,
                        usedTokensThresholdToPersistBackgroundSummarization: record4.usedTokensThresholdToPersistBackgroundSummarization ?? this.config.backgroundSummarizationProps.usedTokensThresholdToPersistBackgroundSummarization
                    };
                    return shouldPersistBackgroundSummarization(tokenDetails.usedTokens, tokenDetails.maxTokens, backgroundSummarizationProps) || shouldStartBackgroundSummarization(record4.startUsedTokens, record4.startMaxTokens, backgroundSummarizationProps) || countImagePartsInMessages(fromRedactedCoreMessages(currentMessages, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED)) >= IMAGE_SUMMARIZATION_TRIGGER_COUNT;
                }
            });
            if (adoption === void 0) {
                return;
            }
            const { record: record3, result, prefixMessages } = adoption;
            adoptedModelId = record3.modelId;
            if (record3.summarizerType === "self") {
                result.onPersisted = ()=>stateHandler.incrementSelfSummaryCount();
            }
            stateHandler.setBackgroundSummarizationState({
                kind: "pending_adoption",
                promise: Promise.resolve(result),
                modelId: record3.modelId,
                summarizerType: record3.summarizerType,
                startInvocationId: record3.startInvocationId,
                startUsedTokens: record3.startUsedTokens,
                startMaxTokens: record3.startMaxTokens,
                triggerReason: record3.triggerReason,
                lifecycle: record3.summaryLifecycleId === void 0 ? void 0 : resumeSummaryLifecycle({
                    summaryLifecycleId: record3.summaryLifecycleId,
                    summarizationModelId: record3.modelId,
                    mainModelId: this.config.modelId,
                    summarizerType: record3.summarizerType
                })
            }, prefixMessages, {
                cancelled: false
            });
            stateHandler.setBackgroundSummarizationHasCompleted(0);
            const persistedSummary = await this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
                backgroundSummarizationMode: BackgroundSummarizationMode.BackgroundAndPersistIfCompleted,
                triggerReason: "pending_summary_adopted",
                currentInvocationId: stateHandler.lastStepInvocationId,
                resourceAccessor: this.resourceAccessor
            });
            const persisted = persistedSummary !== void 0;
            pendingSummaryAdoption.increment(ctx, 1, {
                model: record3.modelId,
                outcome: persisted ? "adopted" : "persist_declined"
            });
            logger74.info(ctx, persisted ? "[summarization-adopt] Adopted pending summary" : "[summarization-adopt] Pending summary passed validation but was not persisted", {
                model: record3.modelId,
                summarizerType: record3.summarizerType,
                messagesSummarizedCount: record3.messagesSummarizedCount,
                stashAgeMs: Date.now() - record3.createdAtMs
            });
        } catch (error3) {
            pendingSummaryAdoption.increment(ctx, 1, {
                model: adoptedModelId,
                outcome: "error"
            });
            logger74.warn(ctx, "[summarization-adopt] Failed to adopt pending summary; falling back to normal behavior", {
                error: error3
            });
            stateHandler.clearBackgroundSummarizationState();
        }
    }
    mergeRequestContextTools(existingTools, requestContextTools) {
        const mergedTools = [
            ...existingTools
        ];
        for (const maybeRedTool of requestContextTools){
            const tool = "_privacyMode" in maybeRedTool ? fromRedactedMcpToolDefinition(maybeRedTool, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED) : maybeRedTool;
            const exists = mergedTools.some((t)=>t.name === tool.name);
            if (!exists) {
                mergedTools.push({
                    name: tool.name,
                    providerIdentifier: tool.providerIdentifier,
                    toolName: tool.toolName,
                    description: tool.description,
                    inputSchema: mcpInputSchemaToJson(tool),
                    clientKey: tool.providerIdentifier
                });
            }
        }
        return mergedTools;
    }
    async executeStepWithMetrics(ctx, turn, executors, stateHandler, toolsGenerator, mcpTools, repositoryInfo, requestContext, fileOperationLockManager, onStateUpdate, previousQueuedMessageSource, emptyResponseRetryTurnBudget) {
        const { result, stepToolCountingState, toolCallIdentityResolver } = await this.executeStepWithCommonMetrics(ctx, turn, executors, stateHandler, toolsGenerator, mcpTools, repositoryInfo, requestContext, fileOperationLockManager, (innerCtx, wrappedPromptExecutor, maxOutputTokenRetryDebug)=>this.runStep(innerCtx, turn, wrappedPromptExecutor, stateHandler, toolsGenerator, mcpTools, repositoryInfo, requestContext, fileOperationLockManager, onStateUpdate, previousQueuedMessageSource, maxOutputTokenRetryDebug), emptyResponseRetryTurnBudget);
        return {
            ...result,
            stepToolCountingState,
            toolCallIdentityResolver
        };
    }
    async buildStepSummarizationContext(ctx, turn, stateHandler, toolsGenerator, mcpTools, repositoryInfo, requestContext, fileOperationLockManager) {
        const userMessage = await turn.userMessage.get(ctx);
        const { tools, extraT, descriptionProps, toolSetHandle } = await buildSummarizationToolContext({
            ctx,
            config: this.config,
            toolsGenerator,
            resourceAccessor: this.resourceAccessor,
            stateHandler,
            mode: stateHandler.resolveStepMode(userMessage),
            mcpTools,
            repositoryInfos: repositoryInfo,
            requestContext,
            fileOperationLockManager,
            contextInjectionSignal: this.conversationActionReceiver.getContextInjectionToolSignal?.()
        });
        return {
            tools,
            extraT,
            descriptionProps,
            toolCallIdentityResolver: toolSetHandle
        };
    }
    recordStepToolCallMetrics(ctx, stepToolCountingState) {
        const baseParallelToolCallTags = {
            hasFailedToolCalls: stepToolCountingState.hasFailedToolCalls(),
            hasUnexpectedToolCallErrors: stepToolCountingState.hasUnexpectedToolCallErrors(),
            success: "true",
            errorName: "none"
        };
        numberOfParallelToolCalls.histogram(ctx, stepToolCountingState.toolCallCount, baseParallelToolCallTags);
        if (stepToolCountingState.toolCallCount > 0) {
            numberOfParallelToolCallsWithAtLeastOneCall.histogram(ctx, stepToolCountingState.toolCallCount, {
                ...baseParallelToolCallTags,
                ...getClientVersionMetricTagsFromContext(ctx),
                "user.is_dev": getIsDevFromContext(ctx) ? "true" : "false"
            });
        }
    }
    async executeStepWithCommonMetrics(ctx, turn, executors, stateHandler, toolsGenerator, mcpTools, repositoryInfo, requestContext, fileOperationLockManager, runStep, emptyResponseRetryTurnBudget) {
        const stepToolCountingState = new ToolCountingStateTracker();
        const stepToolCountingMiddleware = createToolCountingMiddleware(stepToolCountingState);
        const stepWrappedExecutor = stepToolCountingMiddleware(executors.wrappedPromptExecutor);
        const { tools, extraT, descriptionProps, toolCallIdentityResolver } = await this.buildStepSummarizationContext(ctx, turn, stateHandler, toolsGenerator, mcpTools, repositoryInfo, requestContext, fileOperationLockManager);
        const result = await this.runWithSummarizationRetry(ctx, stateHandler, executors.rootPromptExecutor, requestContext, tools, extraT, descriptionProps, (innerCtx)=>this.runWithMaxTokensRetry(innerCtx, executors.rootPromptExecutor, (retryCtx, maxOutputTokenRetryDebug)=>{
                this.longReasoningStepAttemptUsage = void 0;
                return runStep(retryCtx, stepWrappedExecutor, maxOutputTokenRetryDebug);
            }, emptyResponseRetryTurnBudget));
        const acceptedAttemptUsage = this.longReasoningStepAttemptUsage;
        this.longReasoningStepAttemptUsage = void 0;
        if (acceptedAttemptUsage !== void 0) {
            this.observeLongReasoningReminderCall(ctx, turn, acceptedAttemptUsage.reasoningTokens);
        }
        this.recordStepToolCallMetrics(ctx, stepToolCountingState);
        return {
            result,
            stepToolCountingState,
            tools,
            toolCallIdentityResolver
        };
    }
    async applyPostStepProcessing(ctx, turn, rootPromptExecutor, stateHandler, hasToolCall, responseMessages, onStateUpdate) {
        if (hasToolCall && this.config.reminders && this.config.reminders.length > 0) {
            const currentTodos = await Promise.all(stateHandler.todos.map((t)=>t.get(ctx)));
            stateHandler.assertRootPromptBlobsLoadedForFullPromptRead();
            const conversationMessages = fromRedactedCoreMessages(rootPromptExecutor.getMessages(), PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
            await applyRemindersToToolResults(responseMessages, this.config.reminders, currentTodos.map((t)=>fromRedactedTodoItem(t, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED)), conversationMessages);
        }
        if (shouldTagToolCallIdsForCurrentContext(ctx)) {
            appendToolCallIdTagsToToolResults(responseMessages);
        }
        turn.appendPromptMessages(toRedactedCoreMessages(responseMessages, stateHandler.getPrivacyMode()));
        this.applyLongReasoningReminderAfterStep(ctx, turn, rootPromptExecutor, stateHandler.getPrivacyMode(), hasToolCall);
        if (this.config.messageHistoryModifier) {
            stateHandler.assertRootPromptBlobsLoadedForFullPromptRead();
            const currentMessages = fromRedactedCoreMessages(rootPromptExecutor.getMessages(), PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
            const modifiedHistory = this.config.messageHistoryModifier(currentMessages);
            if (modifiedHistory) {
                stateHandler.invalidateRootPromptPrefix();
                rootPromptExecutor.clearMessages();
                rootPromptExecutor.appendMessages(toRedactedCoreMessages(modifiedHistory, stateHandler.getPrivacyMode()));
            }
        }
        let persisted = Promise.resolve();
        if (this.config.fireAndForgetCheckpoints) {
            persisted = stateHandler.computeNewStructure(ctx).then(async (currentState)=>{
                await onStateUpdate(ctx, currentState);
            }).catch((error3)=>{
                logger74.error(ctx, "Failed to persist checkpoint after step", {
                    error: error3
                });
            });
        } else {
            const currentState = await stateHandler.computeNewStructure(ctx);
            await onStateUpdate(ctx, currentState);
        }
        this.config.afterStepCheckpoint?.(ctx, persisted);
    }
    async setupStep(ctx, stateHandler, turn) {
        const setupStepStartMs = performance.now();
        const userMessage = await turn.userMessage.get(ctx);
        if (stateHandler.mode === void 0) {
            stateHandler.setMode(stateHandler.resolveTurnMode(userMessage));
        }
        const fileOperationLockManager = new FileOperationLockManager();
        ctx.get(cloudAgentTurnPrepGlueMsRecorderKey)?.("setupStepMs", performance.now() - setupStepStartMs);
        return {
            fileOperationLockManager
        };
    }
    async runSingleStep(parentCtx, rootPromptExecutor, stateHandler, turn, toolsGenerator, mcpTools, repositoryInfo, requestContext, onStateUpdate) {
        const env_6 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource62(env_6, createSpan(parentCtx.withName("runSingleStep")), false);
            const ctx = span.ctx;
            const { fileOperationLockManager } = await this.setupStep(ctx, stateHandler, turn);
            try {
                const { hasToolCall, responseMessages } = await this.executeStepWithMetrics(ctx, turn, {
                    wrappedPromptExecutor: rootPromptExecutor,
                    rootPromptExecutor
                }, stateHandler, toolsGenerator, mcpTools, repositoryInfo, requestContext, fileOperationLockManager, onStateUpdate);
                await this.applyPostStepProcessing(ctx, turn, rootPromptExecutor, stateHandler, hasToolCall, responseMessages, onStateUpdate);
                return {
                    hasToolCall
                };
            } finally{
                agentStepCount.increment(ctx, 1, {});
            }
        } catch (e_6) {
            env_6.error = e_6;
            env_6.hasError = true;
        } finally{
            __disposeResources62(env_6);
        }
    }
    async buildToolExecutionContext(ctx, stateHandler, toolCallRecorder, mcpTools, repositoryInfo, requestContext, fileOperationLockManager, allowedToolNames, admittedEffectiveToolName) {
        const invocationId = getInvocationId(ctx);
        if (stateHandler.mode === void 0) {
            throw new Error("stateHandler.mode must be set before building tool execution context");
        }
        const mode = stateHandler.mode;
        const toolSetHandle = this.config.toolsGenerator({
            resourceAccessor: this.resourceAccessor,
            stateHandler,
            agentSessionId: this.config.agentSessionId,
            mcpTools,
            repositoryInfos: repositoryInfo,
            blobStore: stateHandler.getBlobStore(),
            mode,
            loggingContext: ctx,
            requestContext,
            fileOperationLockManager,
            smartModeClassifierMode: this.config.smartModeClassifierMode,
            smartModeClassifierShadowMode: this.config.smartModeClassifierShadowMode,
            autoRejectFirstAskQuestion: this.config.autoRejectFirstAskQuestion
        });
        const modelVisibleTools = toolSetHandle.getStaticTools();
        const scopedModelVisibleTools = allowedToolNames === void 0 ? modelVisibleTools : modelVisibleTools.filter((tool)=>allowedToolNames.has(tool.name) || tool.name === admittedEffectiveToolName);
        const toolExecutionSet = toolSetHandle.getToolExecutionSet(scopedModelVisibleTools);
        const executableTools = getExecutableTools(toolExecutionSet);
        const directDynamicToolNames = getDirectDynamicToolNames(toolExecutionSet);
        const toolMap = {};
        for (const tool of executableTools){
            toolMap[tool.name] = tool;
        }
        const renderProps = {
            allTools: extractToolMetadataMap(executableTools)
        };
        const userAutoRunInstructions = await this.getUserPermissionsFileAutoRunInstructions(ctx, requestContext);
        const projectAutoRunInstructions = this.getProjectPermissionsFileAutoRunInstructions(requestContext);
        const extraT = {
            repositoryInfos: repositoryInfo,
            shouldQueryProd: requestContext.repositoryInfoShouldQueryProd,
            stateHandler,
            strictArgParsing: this.config.strictArgParsing === true,
            modelVendor: this.config.modelInfo?.vendor,
            enableToolArgPreservation: this.config.enableToolArgPreservation === true,
            enableHookAdditionalContext: this.config.featureFlags?.enableHookAdditionalContext === true,
            enableAgentStoreConflictNoticeCollector: this.config.featureFlags?.enableAgentStoreConflictNotices === true,
            enableAgentStoreConflictNotices: this.config.featureFlags?.enableAgentStoreConflictNotices === true,
            writeBarrierTimeoutMs: this.resolveWriteBarrierTimeoutMs(),
            onWriteBarrier: this.config.recordAgentStoreWriteBarrier,
            workspacePaths: requestContext.env?.workspacePaths,
            userAutoRunInstructions,
            projectAutoRunInstructions,
            cursorRules: getAllRules(requestContext, this.config.nonFileRules, this.config.featureFlags),
            agentSkills: requestContext.agentSkills ?? [],
            contextInjectionSignal: this.conversationActionReceiver.getContextInjectionToolSignal?.()
        };
        const interactionHandler = new InteractionHandler(toUnredactedInteractionListener(this.interactionListener, stateHandler.getPrivacyMode()), toolCallRecorder, invocationId, void 0, this.config.thinkingStyle, resolveAgentSingleMessageLoopDetection(this.config), this.createAfterAgentThoughtCallback(invocationId, requestContext));
        return {
            toolMap,
            interactionHandler,
            extraT,
            renderProps,
            directDynamicToolNames,
            recordToolCallResult: interactionHandler.recordToolCallResult.bind(interactionHandler)
        };
    }
    async buildDeferredToolExecutionContext(ctx, descriptor, stateHandler, mcpTools, splitStepData, requestContext, fileOperationLockManager, logMessage) {
        const lastTurnRef = stateHandler.turns[stateHandler.turns.length - 1];
        if (!lastTurnRef) {
            throw new Error("No turns in conversation state");
        }
        const turn = await lastTurnRef.get(ctx);
        if (!(turn instanceof AgentConversationTurnHandle)) {
            throw new Error("Expected last turn to be an agent turn");
        }
        const { stateHandler: splitStateHandler, toolCallRecorder, stateOps } = createSplitStepStateHandler(stateHandler, turn);
        const allowedToolNames = splitStepData.allowedToolNames ? new Set(splitStepData.allowedToolNames) : void 0;
        const admittedEffectiveToolName = getAdmittedEffectiveToolName(descriptor, allowedToolNames);
        const mergedMcpTools = this.mergeRequestContextTools(mcpTools, requestContext.tools);
        const executionContext = await this.buildToolExecutionContext(ctx, splitStateHandler, toolCallRecorder, mergedMcpTools, requestContext.repositoryInfo, requestContext, fileOperationLockManager, allowedToolNames, admittedEffectiveToolName);
        if (allowedToolNames !== void 0 && !allowedToolNames.has(descriptor.toolName) && !executionContext.directDynamicToolNames.has(getEffectiveToolCallName(descriptor))) {
            logger74.warn(ctx, logMessage, {
                toolCallId: descriptor.toolCallId,
                toolName: descriptor.toolName,
                allowedToolCount: allowedToolNames.size
            });
        }
        splitStepData.stepReadPathDedup ??= new Set();
        executionContext.extraT.stepReadPathDedup = splitStepData.stepReadPathDedup;
        return {
            stateOps,
            ...executionContext
        };
    }
    async runModelStep(parentCtx, rootPromptExecutor, stateHandler, turn, toolsGenerator, mcpTools, repositoryInfo, requestContext, onStateUpdate) {
        const env_7 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource62(env_7, createSpan(parentCtx.withName("runModelStep")), false);
            const ctx = span.ctx;
            const { fileOperationLockManager } = await this.setupStep(ctx, stateHandler, turn);
            const { toolCallDescriptors, responseMessages, availableToolNames, steerPreemptedIdleSample } = await this.executeModelStepWithMetrics(ctx, turn, {
                wrappedPromptExecutor: rootPromptExecutor,
                rootPromptExecutor
            }, stateHandler, toolsGenerator, mcpTools, repositoryInfo, requestContext, fileOperationLockManager, onStateUpdate);
            return {
                toolCallDescriptors,
                splitStepData: {
                    modelResponseMessages: responseMessages,
                    requestContext,
                    allowedToolNames: availableToolNames,
                    ...steerPreemptedIdleSample === true ? {
                        steerPreemptedIdleSample: true
                    } : {}
                }
            };
        } catch (e_7) {
            env_7.error = e_7;
            env_7.hasError = true;
        } finally{
            __disposeResources62(env_7);
        }
    }
    async executeToolCall(ctx, descriptor, stateHandler, mcpTools, splitStepData, requestContext, fileOperationLockManager) {
        const { stateOps, toolMap, interactionHandler, extraT, recordToolCallResult, renderProps, directDynamicToolNames } = await this.buildDeferredToolExecutionContext(ctx, descriptor, stateHandler, mcpTools, splitStepData, requestContext, fileOperationLockManager, "Rejected deferred split-step tool call outside model-visible tool allowlist");
        const resultMessage = await executeDeferredToolCall(ctx, descriptor, toolMap, interactionHandler, extraT, recordToolCallResult, renderProps, void 0, void 0, directDynamicToolNames);
        return {
            toolCallId: descriptor.toolCallId,
            resultMessage,
            stateOps
        };
    }
    async prepareSubagent(ctx, descriptor, stateHandler, mcpTools, splitStepData, requestContext, fileOperationLockManager) {
        const { toolMap, extraT } = await this.buildDeferredToolExecutionContext(ctx, descriptor, stateHandler, mcpTools, splitStepData, requestContext, fileOperationLockManager, "Rejected deferred split-step subagent preparation outside model-visible tool allowlist");
        const effectiveToolName = getEffectiveToolCallName(descriptor);
        const tool = toolMap[effectiveToolName];
        if (tool === void 0) {
            throw new Error(`Tool not found: ${effectiveToolName}`);
        }
        if (tool.prepareSubagent === void 0) {
            throw new Error(`Tool does not support subagent preparation: ${effectiveToolName}`);
        }
        return await tool.prepareSubagent(ctx.with(toolCallNameKey, toolCallTelemetryName(tool, effectiveToolName)), getEffectiveToolCallArgs(descriptor), {
            toolCallId: descriptor.toolCallId,
            ...extraT
        });
    }
    async finalizeStep(parentCtx, splitStepData, toolCallResults, rootPromptExecutor, stateHandler, onStateUpdate) {
        const env_8 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource62(env_8, createSpan(parentCtx.withName("finalizeStep")), false);
            const ctx = span.ctx;
            const lastTurnRef = stateHandler.turns[stateHandler.turns.length - 1];
            if (!lastTurnRef) {
                return {
                    state: await stateHandler.computeNewStructure(ctx),
                    hasToolCall: false
                };
            }
            const turn = await lastTurnRef.get(ctx);
            if (!(turn instanceof AgentConversationTurnHandle)) {
                throw new Error("Expected last turn to be an agent turn");
            }
            const responseMessages = [
                ...splitStepData.modelResponseMessages,
                ...toolCallResults.map((r)=>r.resultMessage)
            ];
            const hasToolCall = toolCallResults.length > 0;
            for (const stateOp of conversationStateOpsInReplayOrder(toolCallResults)){
                await applyConversationStateOp(ctx, stateHandler, turn, stateOp);
            }
            try {
                await this.applyPostStepProcessing(ctx, turn, rootPromptExecutor, stateHandler, hasToolCall, responseMessages, onStateUpdate);
                const state = await stateHandler.computeNewStructure(ctx);
                return {
                    state,
                    hasToolCall
                };
            } finally{
                agentStepCount.increment(ctx, 1, {});
            }
        } catch (e_8) {
            env_8.error = e_8;
            env_8.hasError = true;
        } finally{
            __disposeResources62(env_8);
        }
    }
    async executeModelStepWithMetrics(ctx, turn, executors, stateHandler, toolsGenerator, mcpTools, repositoryInfo, requestContext, fileOperationLockManager, onStateUpdate) {
        const { result, tools } = await this.executeStepWithCommonMetrics(ctx, turn, executors, stateHandler, toolsGenerator, mcpTools, repositoryInfo, requestContext, fileOperationLockManager, (innerCtx, wrappedPromptExecutor, maxOutputTokenRetryDebug)=>this.runModelOnlyStep(innerCtx, turn, wrappedPromptExecutor, stateHandler, toolsGenerator, mcpTools, repositoryInfo, requestContext, fileOperationLockManager, onStateUpdate, maxOutputTokenRetryDebug));
        return {
            ...result,
            availableToolNames: tools.map((tool)=>tool.name)
        };
    }
    async runModelOnlyStep(parentCtx, turn, rootPromptExecutor, stateHandler, toolsGenerator, mcpTools, repositoryInfos, requestContext, fileOperationLockManager, onStateUpdate, maxOutputTokenRetryDebug) {
        const env_9 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource62(env_9, createSpan(parentCtx.withName("runModelOnlyStep")), false);
            const ctx = spanCtxt.ctx;
            const invocationId = getInvocationId(ctx);
            stateHandler.lastStepInvocationId = invocationId;
            spanCtxt.span.setAttribute("invocationId", invocationId);
            logger74.info(ctx, "Running model-only step");
            const stepSetupStart = performance.now();
            const isFirstStep = turn.steps.length === 0;
            const isResponseComparisonFirstModelStep = !this.responseComparisonModelStepStarted;
            this.responseComparisonModelStepStarted = true;
            const interactionHandler = new InteractionHandler(toUnredactedInteractionListener(this.interactionListener, stateHandler.getPrivacyMode()), turn, invocationId, void 0, this.config.thinkingStyle, resolveAgentSingleMessageLoopDetection(this.config), this.createAfterAgentThoughtCallback(invocationId, requestContext));
            const userMessage = await turn.userMessage.get(ctx);
            const mode = stateHandler.resolveStepMode(userMessage);
            const toolsBuildStartMs = performance.now();
            const toolSetHandle = toolsGenerator({
                resourceAccessor: this.resourceAccessor,
                stateHandler,
                agentSessionId: this.config.agentSessionId,
                mcpTools,
                repositoryInfos,
                blobStore: stateHandler.getBlobStore(),
                mode,
                loggingContext: ctx,
                requestContext,
                fileOperationLockManager,
                smartModeClassifierMode: this.config.smartModeClassifierMode,
                smartModeClassifierShadowMode: this.config.smartModeClassifierShadowMode,
                autoRejectFirstAskQuestion: this.config.autoRejectFirstAskQuestion
            });
            ctx.get(cloudAgentTurnPrepGlueMsRecorderKey)?.("toolsBuildMs", performance.now() - toolsBuildStartMs);
            const initialMessages = fromRedactedCoreMessages(rootPromptExecutor.getMessages(), PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
            if (isFirstStep) {
                warnIfLongTrailingUserMessageRun(ctx, initialMessages, invocationId);
                const firstStepSetupMs = performance.now() - stepSetupStart;
                firstStepSetupDuration.histogram(ctx, firstStepSetupMs);
                ctx.get(firstStepSetupMsRecorderKey)?.(firstStepSetupMs);
            }
            trackPromptTokenUsage({
                ctx,
                mcpTools,
                requestContext,
                messages: initialMessages,
                selectedContext: userMessage.selectedContext,
                userInfoDisplayOptions: this.config.userInfoDisplayOptions,
                agentTokenLimit: this.config.agentTokenLimit,
                readToolName: toolSetHandle.getTool("READ")?.name,
                invocationId,
                modelInfo: this.config.modelInfo,
                featureFlags: this.config.featureFlags,
                stateHandler,
                mcpMetaToolServerCount: getToolSetMcpMetaToolServerCount(toolSetHandle)
            });
            let responseComparisonMessages = this.config.agentResponseComparison === void 0 ? void 0 : [
                ...initialMessages
            ];
            let responseComparisonTools = this.config.agentResponseComparison === void 0 ? void 0 : Object.freeze(toAgentTools(toolSetHandle.getStaticTools(), toolSetHandle.getDescriptionProps()));
            if (isResponseComparisonFirstModelStep && responseComparisonMessages !== void 0 && responseComparisonTools !== void 0) {
                await this.preparePendingAgentResponseComparison({
                    ctx,
                    parentInvocationId: invocationId,
                    messages: responseComparisonMessages,
                    tools: responseComparisonTools,
                    privacyMode: stateHandler.getPrivacyMode()
                });
            }
            const [cancellableStreamCtx, cancelStream] = ctx.withCancel();
            const idleSamplePreempter = createIdleModelSamplePreempter(this.conversationActionReceiver.getContextInjectionToolSignal?.(), cancelStream);
            const streamCtx = idleSamplePreempter === void 0 ? cancellableStreamCtx : withModelStreamChunkObserver(cancellableStreamCtx, (type2)=>idleSamplePreempter.observeChunk(type2));
            idleSamplePreempter?.start();
            let result;
            try {
                result = rootPromptExecutor.executeModelStreamOnly(stepModelCallContext(streamCtx, maxOutputTokenRetryDebug), stateHandler, interactionHandler, toolSetHandle.getToolExecutionSet(), toolSetHandle.getDescriptionProps(), void 0);
            } catch (error3) {
                idleSamplePreempter?.stop();
                await this.cancelPendingAgentResponseComparison();
                throw error3;
            }
            const isCloudAgentSingleStep = this.config.maxSteps === 1;
            const tokenDetails = stateHandler.tokenDetails;
            const shouldSuppressSelfSummaryAfterInputLimitFailure = stateHandler.shouldSuppressSelfSummaryAfterInputLimitFailure(tokenDetails.usedTokens);
            const shouldStartBg = !isCloudAgentSingleStep && !stateHandler.tokenDetailsStaleAfterSummarization && !shouldSuppressSelfSummaryAfterInputLimitFailure && this.orchestrator.shouldStartBackgroundSummarization(tokenDetails, rootPromptExecutor.getMessages(), ctx);
            if (shouldStartBg) {
                const wouldMeetPersistThreshold = shouldPersistBackgroundSummarization(tokenDetails.usedTokens, tokenDetails.maxTokens, this.config.backgroundSummarizationProps);
                logger74.info(ctx, "Mid-loop background summarization trigger (model-stream-only): checking persist threshold", {
                    usedTokens: tokenDetails.usedTokens,
                    maxTokens: tokenDetails.maxTokens,
                    unusedTokens: tokenDetails.maxTokens - tokenDetails.usedTokens,
                    wouldMeetPersistThreshold,
                    triggerThreshold: getBackgroundSummarizationTriggerThreshold(tokenDetails.maxTokens, this.config.backgroundSummarizationProps),
                    backgroundSummarizationConfig: this.config.backgroundSummarizationProps,
                    persistConfig: {
                        unusedTokensThreshold: this.config.backgroundSummarizationProps.unusedTokensThresholdToPersistBackgroundSummarization,
                        unusedPercentTokensThreshold: this.config.backgroundSummarizationProps.unusedPercentTokensThresholdToPersistBackgroundSummarization
                    }
                });
                await this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
                    backgroundSummarizationMode: BackgroundSummarizationMode.Background,
                    settledMessageCount: initialMessages.length,
                    triggerReason: "approaching_token_limit",
                    currentInvocationId: invocationId,
                    resourceAccessor: this.resourceAccessor,
                    tools: toolSetHandle.getStaticTools(),
                    descriptionProps: toolSetHandle.getDescriptionProps(),
                    extraT: {
                        repositoryInfos,
                        shouldQueryProd: requestContext.repositoryInfoShouldQueryProd,
                        stateHandler,
                        modelVendor: this.config.modelInfo?.vendor,
                        enableToolArgPreservation: this.config.enableToolArgPreservation === true,
                        enableHookAdditionalContext: this.config.featureFlags?.enableHookAdditionalContext === true,
                        enableAgentStoreConflictNoticeCollector: this.config.featureFlags?.enableAgentStoreConflictNotices === true,
                        enableAgentStoreConflictNotices: this.config.featureFlags?.enableAgentStoreConflictNotices === true,
                        writeBarrierTimeoutMs: this.resolveWriteBarrierTimeoutMs(),
                        onWriteBarrier: this.config.recordAgentStoreWriteBarrier,
                        workspacePaths: requestContext.env?.workspacePaths,
                        userAutoRunInstructions: await this.getUserPermissionsFileAutoRunInstructions(ctx, requestContext),
                        projectAutoRunInstructions: this.getProjectPermissionsFileAutoRunInstructions(requestContext),
                        cursorRules: getAllRules(requestContext, this.config.nonFileRules, this.config.featureFlags),
                        agentSkills: requestContext.agentSkills ?? []
                    },
                    automationTriggerContext: this.getAutomationTriggerContext(rootPromptExecutor.getMessages())
                });
            }
            let response;
            let extendedUsage;
            let usage;
            let toolCallDescriptors;
            let finalInvocationId;
            const finishPreemptedSample = async (preempter, rejectedAfterCancel)=>{
                await this.cancelPendingAgentResponseComparison();
                const preemptedAfterMs = preempter.preemptedAfterMs ?? 0;
                logger74.info(ctx, "Model sample preempted by pending steer", {
                    invocationId,
                    phase: preempter.phase,
                    preemptedAfterMs,
                    rejectedAfterCancel,
                    graceMs: this.conversationActionReceiver.getContextInjectionToolSignal?.()?.idleModelSamplePreemption?.graceMs
                });
                steerIdleSamplePreempted.increment(ctx, 1, {
                    phase: preempter.phase
                });
                steerIdleSamplePreemptedAfterMs.histogram(ctx, preemptedAfterMs);
                return {
                    toolCallDescriptors: [],
                    responseMessages: [],
                    steerPreemptedIdleSample: true
                };
            };
            try {
                [response, extendedUsage, usage, toolCallDescriptors, finalInvocationId] = await Promise.all([
                    result.response,
                    result.extendedUsage,
                    result.usage,
                    result.toolCallDescriptors,
                    result.invocationId,
                    interactionHandler.consumeStream(streamCtx, this.tapAgentResponseComparisonWarmup(ctx, result.fullStream, responseComparisonMessages, responseComparisonTools), turn)
                ]);
            } catch (error3) {
                if (idleSamplePreempter?.preempted === true) {
                    return await finishPreemptedSample(idleSamplePreempter, true);
                }
                await this.cancelPendingAgentResponseComparison();
                throw error3;
            } finally{
                idleSamplePreempter?.stop();
            }
            if (idleSamplePreempter?.preempted === true) {
                return await finishPreemptedSample(idleSamplePreempter, false);
            }
            if (finalInvocationId !== invocationId) {
                logger74.error(ctx, "Invocation ID mismatch. Bug in executeModelStreamOnly", void 0, {
                    initialInvocationId: invocationId,
                    finalInvocationId
                });
            }
            logger74.debug(ctx, "Setting token details for client token ring (model-stream-only)", {
                usedTokens: usage.totalTokens,
                maxTokens: extendedUsage.maxTokens,
                inputTokens: extendedUsage.inputTokens,
                outputTokens: extendedUsage.outputTokens,
                cacheReadTokens: extendedUsage.cacheReadTokens,
                cacheWriteTokens: extendedUsage.cacheWriteTokens
            });
            const promptContextDetails = nextRedactedPromptContextDetails(ctx, this.config, stateHandler, {
                messages: initialMessages,
                tools: toolSetHandle.getStaticTools(),
                descriptionProps: toolSetHandle.getDescriptionProps(),
                totalUsedTokens: usage.totalTokens,
                maxTokens: extendedUsage.maxTokens
            });
            stateHandler.setTokenDetails(createRedactedConversationTokenDetails(stateHandler.getPrivacyMode(), {
                usedTokens: usage.totalTokens,
                maxTokens: extendedUsage.maxTokens,
                breakdown: promptContextDetails.breakdown,
                promptContextUsageTree: promptContextDetails.promptContextUsageTree
            }));
            if (response.error || ctx.signal.aborted) {
                await this.cancelPendingAgentResponseComparison();
                if (this.config.skipErrorStateCheckpoint !== true && !willRetryProviderDecodeError(response.error, maxOutputTokenRetryDebug)) {
                    turn.appendPromptMessages(toRedactedCoreMessages(response.messages, stateHandler.getPrivacyMode()));
                    const currentState = await stateHandler.computeNewStructure(ctx);
                    if (onStateUpdate) {
                        await onStateUpdate(ctx, currentState);
                    }
                }
                throw response.error ?? new ConnectError("User aborted request", Code.Canceled);
            }
            stateHandler.addTurnUsage({
                inputTokens: extendedUsage.inputTokens,
                outputTokens: extendedUsage.outputTokens,
                cacheReadTokens: extendedUsage.cacheReadTokens,
                cacheWriteTokens: extendedUsage.cacheWriteTokens,
                reasoningTokens: extendedUsage.reasoningTokens
            });
            this.longReasoningStepAttemptUsage = {
                reasoningTokens: extendedUsage.reasoningTokens
            };
            const hasSendMessageCapability = toolSetHandle.getTool("SEND_MESSAGE") !== void 0;
            await this.maybeRetryProjectCoordinatorWithoutSendMessage({
                ctx,
                turn,
                hasToolCall: toolCallDescriptors.length > 0,
                hasSendMessageCapability,
                isProjectCoordinator: isProjectSendMessageEnabled(stateHandler),
                isSimulatedUserMessage: userMessage.isSimulatedMsg === true,
                visibilityReminderAlreadyInjected: hasSendMessageCapability && hasProjectSendMessageReminderForCurrentRequest(initialMessages),
                mode,
                maxOutputTokenRetryDebug
            });
            if (toolCallDescriptors.length === 0 && responseComparisonMessages !== void 0 && responseComparisonTools !== void 0) {
                try {
                    await this.enqueueAgentResponseComparisonIfEligible({
                        ctx,
                        parentInvocationId: finalInvocationId,
                        responseMessages: response.messages,
                        messages: responseComparisonMessages,
                        tools: responseComparisonTools,
                        privacyMode: stateHandler.getPrivacyMode()
                    });
                } finally{
                    responseComparisonMessages = void 0;
                    responseComparisonTools = void 0;
                }
            }
            if (toolCallDescriptors.length === 0) {
                await this.finalizePendingAgentResponseComparison(true);
            }
            const listedCount = countStartingToolRequests(toolCallDescriptors, toolSetHandle.getToolExecutionSet());
            if (listedCount > 0) {
                await interactionHandler.sendToolRequestsListed(ctx, listedCount);
            }
            return {
                toolCallDescriptors,
                responseMessages: response.messages
            };
        } catch (e_9) {
            env_9.error = e_9;
            env_9.hasError = true;
        } finally{
            __disposeResources62(env_9);
        }
    }
};

}
