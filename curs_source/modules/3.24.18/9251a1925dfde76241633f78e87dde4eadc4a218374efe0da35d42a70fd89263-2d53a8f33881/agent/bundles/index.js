import { init_dist7 } from "../../agent-core/dist/index.js";
import { DeferredInteractionResponseError } from "../../agent-core/dist/interaction-queries.js";
import { Updates } from "../../agent-core/dist/interaction-updates.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { init_dist5 } from "../../agent-kv/dist/index.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { BackgroundSummarizationMode, DISABLED_BACKGROUND_SUMMARIZATION_PROPS } from "../../agent-summarization/dist/background-summarization.js";
import { init_dist29 } from "../../agent-summarization/dist/index.js";
import { init_abort_drain } from "./abort-drain.js";
import { AsyncAskQuestionCompletionActionHandler } from "./actions/async-ask-question-completion-action-handler.js";
import { BackgroundShellActionHandler } from "./actions/background-shell-action-handler.js";
import { BackgroundSubagentActionHandler } from "./actions/background-subagent-action-handler.js";
import { BackgroundTaskCompletionActionHandler } from "./actions/background-task-completion-action-handler.js";
import { CancelActionHandler } from "./actions/cancel-action-handler.js";
import { ExecutePlanActionHandler } from "./actions/execute-plan-action-handler.js";
import { GoalContinuationActionHandler } from "./actions/goal-continuation-action-handler.js";
import { init_actions } from "./actions/index.js";
import { init_meta_agent_notes } from "./actions/meta-agent-notes.js";
import { ShellCommandActionHandler } from "./actions/shell-command-action-handler.js";
import { SubscriptionNotificationActionHandler } from "./actions/subscription-notification-action-handler.js";
import { SummarizeActionHandler } from "./actions/summarize-action-handler.js";
import { AbstractUserMessageActionHandler, init_abstract_user_message_action_handler } from "./actions/user-message-action/abstract-user-message-action-handler.js";
import { ResumeActionHandler } from "./actions/user-message-action/resume-action-handler.js";
import { UserMessageActionHandler, init_user_message_action_handler } from "./actions/user-message-action/user-message-action-handler.js";
import { init_attached_media } from "./attached-media.js";
import { init_classifier_contract } from "./auto-review-shared/classifier-contract.js";
import { init_agent_prompt_middleware } from "./configs/agent-prompt-middleware.js";
import { init_anthropic4 } from "./configs/anthropic.js";
import { init_client_subagent_profile } from "./configs/client-subagent-profile.js";
import { init_computer_use_harness } from "./configs/computer-use-harness.js";
import { init_create_unified_agent_config } from "./configs/create-unified-agent-config.js";
import { init_dsv3_0226_canonical } from "./configs/dsv3-0226-canonical.js";
import { init_dsv31018 } from "./configs/dsv31018.js";
import { init_model_session_profile } from "./configs/model-session-profile.js";
import { init_openai_codex_cloud2 } from "./configs/openai-codex-cloud.js";
import { init_openai_codex2 } from "./configs/openai-codex.js";
import { init_qwen } from "./configs/qwen.js";
import { init_tool_config } from "./configs/tool-config.js";
import { init_unified } from "./configs/unified.js";
import { MAX_AGENT_STEPS, init_constants6 } from "./constants.js";
import { init_conversation_image_presence } from "./conversation-image-presence.js";
import { init_interaction_handler } from "./interaction-handler.js";
import { init_local_prompt_quality_capture } from "./local-prompt-quality-capture.js";
import { init_agent_loop_detector } from "./loop-detection/agent-loop-detector.js";
import { init_loop_nudge_middleware } from "./loop-detection/loop-nudge-middleware.js";
import { init_single_message_loop_detector } from "./loop-detection/single-message-loop-detector.js";
import { init_mode_processing } from "./mode-processing.js";
import { init_progress_update_reminder_middleware } from "./progress-update-reminder-middleware.js";
import { init_ask_mode_system_reminder } from "./prompts/ask-mode-system-reminder.js";
import { init_automations2 } from "./prompts/bugbot/automations.js";
import { init_claude_helpers } from "./prompts/claude-helpers.js";
import { init_cloud_agent2 } from "./prompts/cloud-agent.js";
import { init_debug_mode_system_reminder } from "./prompts/debug-mode-system-reminder.js";
import { init_default_until_sonnet_4_prompt } from "./prompts/deprecated-do-not-use/default-until-sonnet-4-prompt.js";
import { init_shared3 } from "./prompts/deprecated-do-not-use/shared.js";
import { init_dsv3_1018_system_prompt } from "./prompts/dsv3-1018-system-prompt.js";
import { init_plan_mode_followup_reminder } from "./prompts/plan-mode-followup-reminder.js";
import { init_plan_mode_system_reminder } from "./prompts/plan-mode-system-reminder.js";
import { init_project_prompt } from "./prompts/project-prompt.js";
import { init_progress_reporting } from "./prompts/subagent/progress-reporting.js";
import { init_synthesis } from "./prompts/subagent/synthesis.js";
import { init_system } from "./prompts/system.js";
import { init_triage_mode_system_reminder } from "./prompts/triage-mode-system-reminder.js";
import { init_user_info } from "./prompts/user-info.js";
import { init_reminders } from "./reminders/index.js";
import { init_sand_auto_review } from "./sand-auto-review/index.js";
import { AnthropicCompactionHandler, init_anthropic_compaction_handler } from "./self-summary/anthropic-compaction-handler.js";
import { init_constants5 } from "./self-summary/constants.js";
import { OpenAICompactionHandler, init_openai_compaction_handler } from "./self-summary/openai-compaction-handler.js";
import { init_request_prompts } from "./self-summary/request-prompts.js";
import { SelfSummarizer, init_self_summary_handler } from "./self-summary/self-summary-handler.js";
import { init_token_estimate2 } from "./self-summary/token-estimate.js";
import { XaiCompactionHandler, init_xai_compaction_handler } from "./self-summary/xai-compaction-handler.js";
import { init_serde2 } from "./serde.js";
import { init_shim } from "./shims/shim.js";
import { init_tool_step } from "./shims/tool-step.js";
import { init_slack_status_phrase } from "./slack-status-phrase.js";
import { init_smart_mode_classifier_context } from "./smart-mode-classifier-context.js";
import { init_smart_mode_classifier3 } from "./smart-mode-classifier.js";
import { init_state_utils } from "./state-utils.js";
import { ConversationStateHandle, init_state } from "./state.js";
import { init_subagent_dispatch_step } from "./subagent-dispatch-step.js";
import { init_subagent_run_completion } from "./subagent-run-completion.js";
import { SummarizationOrchestrator, init_summarization_orchestrator } from "./summarization-orchestrator.js";
import { init_summarization_pending_store_memory } from "./summarization-pending-store-memory.js";
import { init_tool_call_events } from "./telemetry/tool-call-events.js";
import { init_tool_counting_middleware } from "./tool-counting-middleware.js";
import { RedactedPromptToolExecutor, init_tool_stream_executor } from "./tool-stream-executor.js";
import { init_canvas } from "./tools/canvas/index.js";
import { init_common9 } from "./tools/common.js";
import { init_core5 } from "./tools/core.js";
import { init_tool_name } from "./tools/core/create-plan/tool-name.js";
import { init_file_operation_lock_manager } from "./tools/core/file-operation-lock-manager.js";
import { init_inline_image } from "./tools/core/inline-image.js";
import { init_fs_read } from "./tools/core/read/fs-read.js";
import { init_pdf_utils } from "./tools/core/read/pdf-utils.js";
import { init_retry_helpers } from "./tools/core/shell/retry-helpers.js";
import { init_smart_mode_approval_store2 } from "./tools/core/shell/smart-mode-approval-store.js";
import { init_smart_mode_approval2 } from "./tools/core/shell/smart-mode-approval.js";
import { init_worker_pools } from "./tools/core/worker-pools.js";
import { init_exclude_tools } from "./tools/exclude-tools.js";
import { init_tools } from "./tools/index.js";
import { init_lenient_array } from "./tools/lenient-array.js";
import { init_lenient_boolean } from "./tools/lenient-boolean.js";
import { init_builtin_tools } from "./tools/mcp/builtin-tools.js";
import { init_get_mcp_tools } from "./tools/mcp/get-mcp-tools.js";
import { init_mcp_auth_invocation } from "./tools/mcp/mcp-auth-invocation.js";
import { init_mcp_tool_error_detail } from "./tools/mcp/mcp-tool-error-detail.js";
import { init_mcp8 } from "./tools/mcp/mcp.js";
import { init_smart_mode_approval_store } from "./tools/mcp/smart-mode-approval-store.js";
import { init_smart_mode_approval } from "./tools/mcp/smart-mode-approval.js";
import { init_tool_call_name } from "./tools/tool-call-name.js";
import { init_tool_execution_timeout } from "./tools/tool-execution-timeout.js";
import { init_tool_timeout_suspension } from "./tools/tool-timeout-suspension.js";
import { init_agent_config } from "./utils/agent-config.js";
import { init_agent_event_wire } from "./utils/agent-event-wire.js";
import { init_agent_loop_runtime } from "./utils/agent-loop-runtime.js";
import { init_composer_model_family } from "./utils/composer-model-family.js";
import { init_conversation_message_inputs } from "./utils/conversation-message-inputs.js";
import { init_event_tracking } from "./utils/event-tracking.js";
import { init_feature_flag_wire } from "./utils/feature-flag-wire.js";
import { init_invocation_id } from "./utils/invocation-id.js";
import { init_ip } from "./utils/ip.js";
import { init_model_info } from "./utils/model-info.js";
import { init_overridable_config } from "./utils/overridable-config.js";
import { init_prompt_context_message_tree } from "./utils/prompt-context-message-tree.js";
import { init_prompt_token_tracking } from "./utils/prompt-token-tracking.js";
import { init_readonly_resource_accessor2 } from "./utils/readonly-resource-accessor.js";
import { bubbleRetryableTaskErrorsKey, conversationGroupIdKey, conversationIdKey, init_request_id } from "./utils/request-id.js";
import { init_routing_conversation } from "./utils/routing-conversation.js";
import { init_scoped_rule_filtering } from "./utils/scoped-rule-filtering.js";
import { init_smart_mode_classifier_measurement } from "./utils/smart-mode-classifier-measurement.js";
import { init_token_estimate3 } from "./utils/token-estimate.js";
import { init_turn_failure_telemetry } from "./utils/turn-failure-telemetry.js";
import { init_user_initiated_request } from "./utils/user-initiated-request.js";
import { init_dist26 } from "../../chat-inference/dist/index.js";
import { init_dist } from "../../context/dist/index.js";
import { createCounter, createHistogram, flushPostTurnEndedWork } from "../../dist_exports.js";
import { loggerKey } from "../../entry_exports.js";
import { createRedactedConversationTokenDetails, drainPendingWritesOnRunStreamError, estimateTokenCount2, filterByActorIdentity, fromRedactedConversationStateStructure, init_await, toRedactedInteractionUpdate } from "../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { RequestContext, init_request_context_exec_pb } from "../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { PrivacyMode, init_privacy_mode_pb } from "../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
import { init_agent_v1 } from "../../redacted-protos/dist/agent-v1.js";
import { PrivacyCapability } from "../../redaction/dist/classification.js";
import { init_dist27 } from "../../redaction/dist/index.js";
import { finalizeNeedsRootPrompt, recordTurnPrepPrewarm, withModelCallState } from "../../tree_chunk_napi_exports.js";
function createLoggerMiddleware(backend, attributes) {
    return {
        log: (ctx, entry)=>{
            backend.log(ctx, {
                ...entry,
                metadata: {
                    ...attributes,
                    ...entry.metadata
                }
            });
        }
    };
}
function withLogAttributes(ctx, attributes) {
    return ctx.with(loggerKey, createLoggerMiddleware(ctx.get(loggerKey), {
        ...attributes
    }));
}
var __addDisposableResource111, __disposeResources111, logger108, stateDeserializationDuration, actionHandlerDuration, finalizeRootPromptRestoreMode, overlapSetupStateHandle, AnysphereAgent;
export { AnysphereAgent, __addDisposableResource111, __disposeResources111, actionHandlerDuration, createLoggerMiddleware, finalizeRootPromptRestoreMode, logger108, overlapSetupStateHandle, stateDeserializationDuration, withLogAttributes };
var __wakaru_init_dist35_initialized = false;
export function init_dist35() {
if (__wakaru_init_dist35_initialized) return;
__wakaru_init_dist35_initialized = true;
"use strict";
init_dist7();
init_dist5();
init_dist29();
init_dist26();
init_dist();
init_dist4();
init_abort_drain();
init_anthropic_compaction_handler();
init_openai_compaction_handler();
init_self_summary_handler();
init_xai_compaction_handler();
init_summarization_orchestrator();
init_scoped_rule_filtering();
init_conversation_message_inputs();
init_request_context_exec_pb();
init_privacy_mode_pb();
init_agent_v1();
init_dist27();
init_actions();
init_abstract_user_message_action_handler();
init_constants6();
init_token_estimate2();
init_state();
init_tool_stream_executor();
init_request_id();
init_meta_agent_notes();
init_slack_status_phrase();
init_abstract_user_message_action_handler();
init_user_message_action_handler();
init_attached_media();
init_classifier_contract();
init_agent_prompt_middleware();
init_anthropic4();
init_client_subagent_profile();
init_computer_use_harness();
init_create_unified_agent_config();
init_dsv3_0226_canonical();
init_dsv31018();
init_model_session_profile();
init_openai_codex2();
init_openai_codex_cloud2();
init_qwen();
init_tool_config();
init_unified();
init_constants6();
init_conversation_image_presence();
init_interaction_handler();
init_local_prompt_quality_capture();
init_agent_loop_detector();
init_loop_nudge_middleware();
init_single_message_loop_detector();
init_mode_processing();
init_progress_update_reminder_middleware();
init_ask_mode_system_reminder();
init_automations2();
init_claude_helpers();
init_cloud_agent2();
init_debug_mode_system_reminder();
init_default_until_sonnet_4_prompt();
init_shared3();
init_dsv3_1018_system_prompt();
init_plan_mode_followup_reminder();
init_plan_mode_system_reminder();
init_project_prompt();
init_progress_reporting();
init_synthesis();
init_system();
init_triage_mode_system_reminder();
init_user_info();
init_reminders();
init_sand_auto_review();
init_constants5();
init_request_prompts();
init_serde2();
init_shim();
init_tool_step();
init_tool_call_name();
init_smart_mode_classifier3();
init_smart_mode_classifier_context();
init_state();
init_state_utils();
init_subagent_dispatch_step();
init_subagent_run_completion();
init_summarization_pending_store_memory();
init_tool_call_events();
init_tool_counting_middleware();
init_tool_stream_executor();
init_canvas();
init_common9();
init_await();
init_tool_name();
init_file_operation_lock_manager();
init_inline_image();
init_fs_read();
init_retry_helpers();
init_smart_mode_approval2();
init_smart_mode_approval_store2();
init_pdf_utils();
init_worker_pools();
init_core5();
init_exclude_tools();
init_tools();
init_lenient_array();
init_lenient_boolean();
init_builtin_tools();
init_get_mcp_tools();
init_mcp8();
init_mcp_auth_invocation();
init_mcp_tool_error_detail();
init_smart_mode_approval();
init_smart_mode_approval_store();
init_tool_execution_timeout();
init_tool_timeout_suspension();
init_agent_config();
init_agent_loop_runtime();
init_composer_model_family();
init_agent_event_wire();
init_event_tracking();
init_feature_flag_wire();
init_invocation_id();
init_ip();
init_model_info();
init_overridable_config();
init_prompt_context_message_tree();
init_prompt_token_tracking();
init_readonly_resource_accessor2();
init_request_id();
init_routing_conversation();
init_scoped_rule_filtering();
init_smart_mode_classifier_measurement();
init_token_estimate3();
init_turn_failure_telemetry();
init_user_initiated_request();
__addDisposableResource111 = function(env, value, async) {
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
__disposeResources111 = (function(SuppressedError2) {
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
logger108 = createLogger("@anysphere/agent");
stateDeserializationDuration = createHistogram("agent.ttft.stateDeserializationMs", {
    description: "Time to deserialize conversation state from blob store in runStream"
});
actionHandlerDuration = createHistogram("agent.ttft.actionHandlerMs", {
    description: "Time for the action handler (handle) to complete in runStream"
});
finalizeRootPromptRestoreMode = createCounter("agent.finalize_step.root_prompt_restore_mode", {
    description: "Counts whether finalizeStep restores loaded root prompt blobs or used skip mode.",
    labelNames: [
        "mode"
    ]
});
overlapSetupStateHandle = createCounter("cloud_agents.overlap_setup_state_handle", {
    description: "Whether a prewarmed model-step state handle was adopted or discarded, and why.",
    labelNames: [
        "outcome",
        "reason"
    ]
});
AnysphereAgent = class {
    shouldTrackAgentTypeChange(actionCase) {
        return actionCase === "userMessageAction" || actionCase === "subscriptionNotificationAction" || actionCase === "goalContinuationAction" || actionCase === "resumeAction" || actionCase === "executePlanAction";
    }
    stateHandleOptions(options2) {
        return {
            ...options2,
            serializeSubagentStatesAsBlobRefs: this.config.featureFlags?.serializeSubagentStatesAsBlobRefs === true,
            inlineSubagentStateSummaries: this.config.featureFlags?.inlineSubagentStateSummaries === true,
            restoreBlobFetchConcurrency: this.config.featureFlags?.agentStateRestoreBlobFetchConcurrency,
            deferSubagentStateRefLoads: this.config.featureFlags?.deferSubagentStateRefLoads === true
        };
    }
    constructor(config2, promptSession, interactionListener, resourceAccessor, blobStore, summarizationHandler, conversationActionReceiver){
        this.promptSession = promptSession;
        this.interactionListener = interactionListener;
        this.resourceAccessor = resourceAccessor;
        this.blobStore = blobStore;
        this.summarizationHandler = summarizationHandler;
        this.conversationActionReceiver = conversationActionReceiver;
        this.prewarmDiscardedBeforeSetup = false;
        if (config2.systemPromptGenerator === void 0) {
            throw new Error("systemPromptGenerator is required");
        }
        this.config = {
            planSystemReminderGenerator: ()=>"",
            askSystemReminderGenerator: (_options)=>"",
            debugSystemReminderGenerator: (_debugModeConfig, _isFirstDebugModeMessage)=>"",
            triageSystemReminderGenerator: ()=>"",
            backgroundSummarizationProps: DISABLED_BACKGROUND_SUMMARIZATION_PROPS,
            formattingOptions: {
                shouldUseFormatCodeblock: true,
                gpt5StyleLineNumbers: false,
                gpt5CodexCatN: false
            },
            nonFileRules: [],
            immediatelyUpdateStateOnNewTurn: false,
            smartModeClassifierMode: false,
            smartModeClassifierShadowMode: false,
            doNotFailOnMaxSteps: false,
            enableAgentNotes: false,
            enableTerminalFiles: true,
            enableImageFiles: false,
            enableLongCodeSelectionSpillToFile: true,
            enableToolArgPreservation: true,
            strictArgParsing: false,
            enableExecuteHookExec: false,
            enableTranscriptInSummary: true,
            summarizeActionClearTurns: false,
            summarizeActionMode: "full",
            fireAndForgetCheckpoints: false,
            bindConversationMessageInputs: false,
            skipErrorStateCheckpoint: false,
            enablePrependedUserActions: true,
            ...config2,
            maxSteps: config2.maxSteps ?? MAX_AGENT_STEPS
        };
        this.config.nonFileRules = filterByActorIdentity(this.config.nonFileRules, this.config.actorIdentity);
        const selfSummarizerFactory = this.config.selfSummaryConfig ? (stateHandler, interactionListener2, tools, extraT, descriptionProps)=>{
            const modelId = this.config.modelId ?? "self-summary";
            const selfSummaryConfig = this.config.selfSummaryConfig;
            const session = selfSummaryConfig.promptSession;
            const flavor = selfSummaryConfig.flavor ?? "generic";
            const baseRetryOptions = {
                enableReduceInputsRetry: selfSummaryConfig.enableReduceInputsRetry ?? true,
                enableRetryUncategorizedErrors: selfSummaryConfig.enableRetryUncategorizedErrors ?? true,
                descriptionProps
            };
            selfSummaryConfig.onSelfSummaryStart?.();
            switch(flavor){
                case "xai-compact":
                    return new XaiCompactionHandler(session, stateHandler, interactionListener2, tools, extraT, modelId, {
                        ...baseRetryOptions,
                        enableRetryNoSummaryResponse: selfSummaryConfig.enableRetryNoSummaryResponse ?? true,
                        enableTranscriptEnrichment: selfSummaryConfig.enableTranscriptEnrichment ?? false
                    });
                case "openai-compact":
                    return new OpenAICompactionHandler(session, stateHandler, interactionListener2, tools, extraT, modelId, {
                        ...baseRetryOptions,
                        enableRetryNoSummaryResponse: selfSummaryConfig.openAiCompactionEnableRetryNoSummaryResponse ?? false
                    });
                case "anthropic-explicit":
                    return new AnthropicCompactionHandler(session, stateHandler, interactionListener2, tools, extraT, modelId, {
                        ...baseRetryOptions,
                        enableRetryNoSummaryResponse: selfSummaryConfig.anthropicCompactionEnableRetryNoSummaryResponse ?? false
                    });
                case "generic":
                    return new SelfSummarizer(session, stateHandler, interactionListener2, tools, extraT, modelId, {
                        ...baseRetryOptions,
                        enableRetryNoSummaryResponse: selfSummaryConfig.enableRetryNoSummaryResponse ?? true
                    }, selfSummaryConfig.enableTranscriptEnrichment ?? false, selfSummaryConfig.promptVariant, selfSummaryConfig.preserveUserDeliveryTail);
                default:
                    {
                        const _exhaustive = flavor;
                        return _exhaustive;
                    }
            }
        } : void 0;
        const orchestrator = new SummarizationOrchestrator(this.summarizationHandler, selfSummarizerFactory, this.config.backgroundSummarizationProps, this.config.selfSummaryConfig?.canUseSelfSummary);
        this.orchestrator = orchestrator;
        this.actionHandlers = new Map();
        const userMessageActionHandler = new UserMessageActionHandler(this.config, this.resourceAccessor, this.interactionListener, this.summarizationHandler, this.conversationActionReceiver, orchestrator);
        this.actionHandlers.set("userMessageAction", userMessageActionHandler);
        this.actionHandlers.set("subscriptionNotificationAction", new SubscriptionNotificationActionHandler(userMessageActionHandler));
        this.actionHandlers.set("goalContinuationAction", new GoalContinuationActionHandler(userMessageActionHandler, this.config.toolsGenerator, this.resourceAccessor, this.config.agentSessionId));
        this.actionHandlers.set("resumeAction", new ResumeActionHandler(this.config, this.resourceAccessor, this.interactionListener, this.summarizationHandler, this.conversationActionReceiver, orchestrator));
        this.actionHandlers.set("summarizeAction", new SummarizeActionHandler(this.config, this.resourceAccessor, this.interactionListener, orchestrator, this.conversationActionReceiver));
        this.actionHandlers.set("shellCommandAction", new ShellCommandActionHandler(this.config, this.resourceAccessor, this.interactionListener, this.summarizationHandler, this.conversationActionReceiver));
        this.actionHandlers.set("cancelAction", new CancelActionHandler(this.config, this.resourceAccessor, this.interactionListener, this.summarizationHandler, this.conversationActionReceiver));
        this.actionHandlers.set("executePlanAction", new ExecutePlanActionHandler(this.config, this.resourceAccessor, this.interactionListener, this.summarizationHandler, this.conversationActionReceiver, orchestrator));
        this.actionHandlers.set("asyncAskQuestionCompletionAction", new AsyncAskQuestionCompletionActionHandler(this.config, this.resourceAccessor, this.interactionListener, this.summarizationHandler, this.conversationActionReceiver, orchestrator));
        this.actionHandlers.set("backgroundTaskCompletionAction", new BackgroundTaskCompletionActionHandler(this.config, this.resourceAccessor, this.interactionListener, this.summarizationHandler, this.conversationActionReceiver, orchestrator));
        this.actionHandlers.set("backgroundShellAction", new BackgroundShellActionHandler());
        this.actionHandlers.set("backgroundSubagentAction", new BackgroundSubagentActionHandler());
    }
    async runStream(parentCtx, state, action, mcpTools, onStateUpdate, options2) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource111(env_1, createSpan(parentCtx.withName("runStream")), false);
            let ctx = withLogAttributes(spanCtxt.ctx, {
                action: action.action.case,
                modelName: this.config.modelId,
                ...this.config.canonicalModelName !== void 0 && {
                    canonicalModelName: this.config.canonicalModelName
                }
            });
            if (this.config.conversationGroupId !== void 0) {
                ctx = ctx.with(conversationGroupIdKey, this.config.conversationGroupId);
            }
            if (this.config.conversationId !== void 0) {
                ctx = ctx.with(conversationIdKey, this.config.conversationId);
            }
            if (this.config.isBackground === true) {
                ctx = ctx.with(bubbleRetryableTaskErrorsKey, true);
            }
            const unredactedExecutor = this.promptSession.getExecutor();
            const baseExecutor = new RedactedPromptToolExecutor(unredactedExecutor, PrivacyMode.UNSPECIFIED);
            let restoredRootPromptImagePresence;
            const stateDeserStart = performance.now();
            const stateHandler = await ConversationStateHandle.fromConversationStateStructure(ctx, this.blobStore, state, baseExecutor, this.config.formattingOptions, this.config.modelId, this.config.agentType, this.stateHandleOptions({
                shouldTrackAgentTypeChange: this.shouldTrackAgentTypeChange(action.action.case),
                loadRootPromptBlobs: true,
                ...options2?.onRootPromptImagePresence !== void 0 ? {
                    onRootPromptImagePresence: (presence)=>{
                        restoredRootPromptImagePresence = presence;
                    }
                } : {}
            }));
            const stateDeserializationMs = performance.now() - stateDeserStart;
            stateDeserializationDuration.histogram(ctx, stateDeserializationMs);
            options2?.onStateDeserialized?.(stateDeserializationMs);
            if (restoredRootPromptImagePresence !== void 0) {
                options2?.onRootPromptImagePresence?.(restoredRootPromptImagePresence);
            }
            const currentAction = action;
            let currentState = state;
            const accumulatedUsage = {
                inputTokens: 0,
                outputTokens: 0,
                cacheReadTokens: 0,
                cacheWriteTokens: 0,
                reasoningTokens: 0
            };
            if (currentAction.action.case === void 0) {
                throw new Error("Action is required");
            }
            if (currentAction.action.case === "startPlanAction") {
                throw new Error("startPlanAction is deprecated; use userMessageAction with UserMessage.mode = PLAN");
            }
            spanCtxt.span.setAttribute("action", currentAction.action.case);
            const handler = this.actionHandlers.get(currentAction.action.case);
            if (!handler) {
                throw new Error(`Unsupported action type: ${currentAction.action.case}`);
            }
            const onStateUpdateWithFlush = async (innerCtx, state2)=>{
                const env_2 = {
                    stack: [],
                    error: void 0,
                    hasError: false
                };
                try {
                    const span = __addDisposableResource111(env_2, createSpan(innerCtx.withName("onStateUpdateWithFlush")), false);
                    await this.blobStore.flush(span.ctx);
                    await onStateUpdate?.(span.ctx, fromRedactedConversationStateStructure(state2, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED));
                } catch (e_2) {
                    env_2.error = e_2;
                    env_2.hasError = true;
                } finally{
                    __disposeResources111(env_2);
                }
            };
            let promise = Promise.resolve();
            try {
                const actionHandlerStart = performance.now();
                currentState = await handler.handle(withModelCallState(ctx, stateHandler, this.config.bindConversationMessageInputs), action.action.value, baseExecutor, stateHandler, mcpTools, onStateUpdateWithFlush);
                const actionHandlerMs = performance.now() - actionHandlerStart;
                actionHandlerDuration.histogram(ctx, actionHandlerMs, {
                    action: currentAction.action.case ?? "unknown"
                });
                const mainUsage = stateHandler.getTurnUsageAndReset();
                accumulatedUsage.inputTokens += mainUsage.inputTokens;
                accumulatedUsage.outputTokens += mainUsage.outputTokens;
                accumulatedUsage.cacheReadTokens += mainUsage.cacheReadTokens;
                accumulatedUsage.cacheWriteTokens += mainUsage.cacheWriteTokens;
                accumulatedUsage.reasoningTokens += mainUsage.reasoningTokens ?? 0;
                if (this.config.fireAndForgetCheckpoints) {
                    promise = promise.then(()=>onStateUpdateWithFlush(ctx, currentState)).catch((error3)=>{
                        logger108.error(ctx, "Failed to flush and update state", {
                            error: error3
                        });
                    });
                } else {
                    await onStateUpdateWithFlush(ctx, currentState);
                }
                while(true){
                    const queuedAction = await this.conversationActionReceiver.peek(ctx);
                    if (!queuedAction || !queuedAction.action.case) {
                        break;
                    }
                    const queuedHandler = this.actionHandlers.get(queuedAction.action.case);
                    if (!queuedHandler) {
                        await this.conversationActionReceiver.pop(ctx);
                        continue;
                    }
                    await this.conversationActionReceiver.pop(ctx);
                    baseExecutor.clearMessages();
                    const updatedStateHandler = await ConversationStateHandle.fromConversationStateStructure(ctx, this.blobStore, currentState, baseExecutor, this.config.formattingOptions, this.config.modelId, this.config.agentType, this.stateHandleOptions({
                        shouldTrackAgentTypeChange: this.shouldTrackAgentTypeChange(queuedAction.action.case),
                        loadRootPromptBlobs: true
                    }));
                    currentState = await queuedHandler.handle(withModelCallState(ctx, updatedStateHandler, this.config.bindConversationMessageInputs), queuedAction.action.value, baseExecutor, updatedStateHandler, mcpTools, onStateUpdateWithFlush);
                    const queuedUsage = updatedStateHandler.getTurnUsageAndReset();
                    accumulatedUsage.inputTokens += queuedUsage.inputTokens;
                    accumulatedUsage.outputTokens += queuedUsage.outputTokens;
                    accumulatedUsage.cacheReadTokens += queuedUsage.cacheReadTokens;
                    accumulatedUsage.cacheWriteTokens += queuedUsage.cacheWriteTokens;
                    accumulatedUsage.reasoningTokens += queuedUsage.reasoningTokens ?? 0;
                    if (this.config.fireAndForgetCheckpoints) {
                        promise = promise.then(()=>onStateUpdateWithFlush(ctx, currentState)).catch((error3)=>{
                            logger108.error(ctx, "Failed to flush and update state", {
                                error: error3
                            });
                        });
                    } else {
                        await onStateUpdateWithFlush(ctx, currentState);
                    }
                }
                if (!options2?.skipTurnEndedUpdate) {
                    const hasUsage = accumulatedUsage.inputTokens > 0 || accumulatedUsage.outputTokens > 0 || accumulatedUsage.cacheReadTokens > 0 || accumulatedUsage.cacheWriteTokens > 0;
                    await this.interactionListener.sendUpdate(ctx, toRedactedInteractionUpdate(Updates.turnEnded(hasUsage ? accumulatedUsage : void 0, BigInt(Date.now())), action._privacyMode));
                }
                await flushPostTurnEndedWork(ctx, this.interactionListener);
                await promise;
                await this.blobStore.flush(ctx);
                options2?.onTimings?.({
                    stateDeserializationMs,
                    actionHandlerMs
                });
                return fromRedactedConversationStateStructure(currentState, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
            } catch (error3) {
                await drainPendingWritesOnRunStreamError(ctx, {
                    pendingCheckpoints: promise,
                    flush: ()=>this.blobStore.flush(ctx)
                });
                throw error3;
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources111(env_1);
        }
    }
    buildSingleStepStateHandle(ctx, state, baseExecutor, trackAgentTypeChange) {
        return ConversationStateHandle.fromConversationStateStructure(ctx, this.blobStore, state, baseExecutor, this.config.formattingOptions, this.config.modelId, this.config.agentType, this.stateHandleOptions({
            shouldTrackAgentTypeChange: trackAgentTypeChange,
            loadRootPromptBlobs: true
        }));
    }
    prewarmSingleStepStateHandle(parentCtx, state, actionCase) {
        const trackAgentTypeChange = this.shouldTrackAgentTypeChange(actionCase);
        const ctx = withLogAttributes(parentCtx.withName("prewarmSingleStepStateHandle"), {
            modelName: this.config.modelId,
            ...this.config.canonicalModelName !== void 0 && {
                canonicalModelName: this.config.canonicalModelName
            }
        });
        const baseExecutor = new RedactedPromptToolExecutor(this.promptSession.getExecutor(), PrivacyMode.UNSPECIFIED);
        const handlePromise = this.buildSingleStepStateHandle(ctx, state, baseExecutor, trackAgentTypeChange);
        void handlePromise.catch(()=>{});
        this.prewarmedSingleStepStateHandle = {
            trackAgentTypeChange,
            baseExecutor,
            handlePromise
        };
        this.prewarmDiscardedBeforeSetup = false;
    }
    async discardPrewarmedSingleStepStateHandle(ctx, reason) {
        const prewarmed = this.prewarmedSingleStepStateHandle;
        this.prewarmedSingleStepStateHandle = void 0;
        if (prewarmed === void 0) {
            return;
        }
        this.prewarmDiscardedBeforeSetup = true;
        if (ctx !== void 0) {
            recordTurnPrepPrewarm(ctx, "discarded");
            if (reason !== void 0) {
                overlapSetupStateHandle.increment(ctx, 1, {
                    outcome: "discarded",
                    reason
                });
            }
        }
        await prewarmed.handlePromise.catch(()=>{});
    }
    async setupSingleStep(parentCtx, state, action, onStateUpdate) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource111(env_3, createSpan(parentCtx.withName("setupSingleStep")), false);
            let ctx = withLogAttributes(spanCtxt.ctx, {
                action: action.action.case,
                modelName: this.config.modelId,
                ...this.config.canonicalModelName !== void 0 && {
                    canonicalModelName: this.config.canonicalModelName
                }
            });
            if (this.config.conversationGroupId !== void 0) {
                ctx = ctx.with(conversationGroupIdKey, this.config.conversationGroupId);
            }
            if (this.config.conversationId !== void 0) {
                ctx = ctx.with(conversationIdKey, this.config.conversationId);
            }
            if (this.config.isBackground === true) {
                ctx = ctx.with(bubbleRetryableTaskErrorsKey, true);
            }
            const trackAgentTypeChange = this.shouldTrackAgentTypeChange(action.action.case);
            const prewarmed = this.prewarmedSingleStepStateHandle;
            this.prewarmedSingleStepStateHandle = void 0;
            const prewarmDiscardedBeforeSetup = this.prewarmDiscardedBeforeSetup;
            this.prewarmDiscardedBeforeSetup = false;
            const buildInlineSingleStep = async ()=>{
                const inlineBaseExecutor = new RedactedPromptToolExecutor(this.promptSession.getExecutor(), PrivacyMode.UNSPECIFIED);
                const inlineStateHandler = await this.buildSingleStepStateHandle(ctx, state, inlineBaseExecutor, trackAgentTypeChange);
                return {
                    baseExecutor: inlineBaseExecutor,
                    stateHandler: inlineStateHandler
                };
            };
            let baseExecutor;
            let stateHandler;
            if (prewarmed !== void 0 && prewarmed.trackAgentTypeChange === trackAgentTypeChange) {
                const residualWaitStartMs = performance.now();
                try {
                    baseExecutor = prewarmed.baseExecutor;
                    stateHandler = await prewarmed.handlePromise;
                    recordTurnPrepPrewarm(ctx, "adopted", performance.now() - residualWaitStartMs);
                    overlapSetupStateHandle.increment(ctx, 1, {
                        outcome: "adopted",
                        reason: "adopted"
                    });
                } catch  {
                    recordTurnPrepPrewarm(ctx, "discarded");
                    overlapSetupStateHandle.increment(ctx, 1, {
                        outcome: "discarded",
                        reason: "prewarm_build_failed"
                    });
                    ({ baseExecutor, stateHandler } = await buildInlineSingleStep());
                }
            } else {
                if (prewarmed !== void 0) {
                    overlapSetupStateHandle.increment(ctx, 1, {
                        outcome: "discarded",
                        reason: "track_agent_type_change_mismatch"
                    });
                    await prewarmed.handlePromise.catch(()=>{});
                    recordTurnPrepPrewarm(ctx, "discarded");
                } else {
                    recordTurnPrepPrewarm(ctx, prewarmDiscardedBeforeSetup ? "discarded" : "not_started");
                }
                ({ baseExecutor, stateHandler } = await buildInlineSingleStep());
            }
            if (action.action.case === void 0) {
                throw new Error("Action is required");
            }
            if (action.action.case === "startPlanAction") {
                throw new Error("startPlanAction is deprecated; use userMessageAction with UserMessage.mode = PLAN");
            }
            spanCtxt.span.setAttribute("action", action.action.case);
            const handler = this.actionHandlers.get(action.action.case);
            if (!handler) {
                throw new Error(`Unsupported action type: ${action.action.case}`);
            }
            const onStateUpdateWithFlush = async (innerCtx, innerState)=>{
                const env_4 = {
                    stack: [],
                    error: void 0,
                    hasError: false
                };
                try {
                    const span = __addDisposableResource111(env_4, createSpan(innerCtx.withName("onStateUpdateWithFlush")), false);
                    await this.blobStore.flush(span.ctx);
                    await onStateUpdate?.(span.ctx, fromRedactedConversationStateStructure(innerState, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED));
                } catch (e_4) {
                    env_4.error = e_4;
                    env_4.hasError = true;
                } finally{
                    __disposeResources111(env_4);
                }
            };
            return {
                ctx,
                baseExecutor,
                stateHandler,
                handler,
                onStateUpdateWithFlush
            };
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources111(env_3);
        }
    }
    async runSingleStep(parentCtx, state, action, mcpTools, onStateUpdate) {
        const { ctx, baseExecutor, stateHandler, handler, onStateUpdateWithFlush } = await this.setupSingleStep(parentCtx, state, action, onStateUpdate);
        if (!this.isSingleStepHandler(handler)) {
            throw new Error(`Action handler for ${action.action.case} does not support single-step execution`);
        }
        const result = await handler.handleSingleStep(ctx, action.action.value, baseExecutor, stateHandler, mcpTools, onStateUpdateWithFlush);
        await onStateUpdateWithFlush(ctx, result.state);
        return {
            state: fromRedactedConversationStateStructure(result.state, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED),
            hasToolCall: result.hasToolCall
        };
    }
    getSplitStepHandler(actionCase) {
        if (actionCase !== void 0) {
            const handler = this.actionHandlers.get(actionCase);
            if (handler instanceof AbstractUserMessageActionHandler) {
                return handler;
            }
            if (handler instanceof SubscriptionNotificationActionHandler) {
                return handler.getUserMessageActionHandler();
            }
            if (handler instanceof GoalContinuationActionHandler) {
                return handler.getUserMessageActionHandler();
            }
            throw new Error(`Action handler for ${actionCase} does not support split-step execution`);
        }
        for (const handler of this.actionHandlers.values()){
            if (handler instanceof AbstractUserMessageActionHandler) {
                return handler;
            }
        }
        throw new Error("No AbstractUserMessageActionHandler found");
    }
    async runModelStep(parentCtx, state, action, mcpTools, onStateUpdate) {
        const setupSingleStepStartMs = performance.now();
        const { ctx, baseExecutor, stateHandler, handler, onStateUpdateWithFlush } = await this.setupSingleStep(parentCtx, state, action, onStateUpdate);
        const setupSingleStepMs = performance.now() - setupSingleStepStartMs;
        if (!this.isSplitStepHandler(handler)) {
            throw new Error(`Action handler for ${action.action.case} does not support split-step execution`);
        }
        const result = await handler.handleModelStep(ctx, action.action.value, baseExecutor, stateHandler, mcpTools, onStateUpdateWithFlush);
        await onStateUpdateWithFlush(ctx, result.state);
        return {
            state: fromRedactedConversationStateStructure(result.state, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED),
            toolCallDescriptors: result.toolCallDescriptors,
            splitStepData: {
                ...result.splitStepData,
                actionCase: action.action.case
            },
            setupSingleStepMs
        };
    }
    async executeToolCall(parentCtx, state, descriptor, mcpTools, splitStepData, fileOperationLockManager, onStateUpdate) {
        const env_5 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource111(env_5, createSpan(parentCtx.withName("executeToolCall")), false);
            const ctx = this.config.isBackground === true ? spanCtxt.ctx.with(bubbleRetryableTaskErrorsKey, true) : spanCtxt.ctx;
            const baseExecutor = new RedactedPromptToolExecutor(this.promptSession.getExecutor(), PrivacyMode.UNSPECIFIED);
            const stateHandler = await ConversationStateHandle.fromConversationStateStructure(ctx, this.blobStore, state, baseExecutor, this.config.formattingOptions, this.config.modelId, this.config.agentType, this.stateHandleOptions({
                shouldTrackAgentTypeChange: this.shouldTrackAgentTypeChange(splitStepData.actionCase),
                loadRootPromptBlobs: false
            }));
            const handler = this.getSplitStepHandler(splitStepData.actionCase);
            try {
                return await handler.executeToolCall(ctx, descriptor, stateHandler, mcpTools, splitStepData, splitStepData.requestContext ?? new RequestContext(), fileOperationLockManager);
            } catch (error3) {
                if (error3 instanceof DeferredInteractionResponseError) {
                    if (typeof onStateUpdate !== "function") {
                        logger108.error(ctx, "executeToolCall missing onStateUpdate; cannot persist pending AskQuestion before pause");
                    } else {
                        try {
                            const pendingState = await stateHandler.computeNewStructure(ctx);
                            await onStateUpdate(ctx, fromRedactedConversationStateStructure(pendingState, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED));
                        } catch (persistError) {
                            logger108.error(ctx, "Failed to persist pending AskQuestion before pause", {
                                error: persistError
                            });
                        }
                    }
                }
                throw error3;
            }
        } catch (e_5) {
            env_5.error = e_5;
            env_5.hasError = true;
        } finally{
            __disposeResources111(env_5);
        }
    }
    async prepareSubagent(parentCtx, state, descriptor, mcpTools, splitStepData, fileOperationLockManager) {
        const env_6 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource111(env_6, createSpan(parentCtx.withName("prepareSubagent")), false);
            const ctx = spanCtxt.ctx;
            const baseExecutor = new RedactedPromptToolExecutor(this.promptSession.getExecutor(), PrivacyMode.UNSPECIFIED);
            const stateHandler = await ConversationStateHandle.fromConversationStateStructure(ctx, this.blobStore, state, baseExecutor, this.config.formattingOptions, this.config.modelId, this.config.agentType, this.stateHandleOptions({
                shouldTrackAgentTypeChange: this.shouldTrackAgentTypeChange(splitStepData.actionCase),
                loadRootPromptBlobs: true
            }));
            const handler = this.getSplitStepHandler(splitStepData.actionCase);
            return handler.prepareSubagent(ctx, descriptor, stateHandler, mcpTools, splitStepData, splitStepData.requestContext ?? new RequestContext(), fileOperationLockManager);
        } catch (e_6) {
            env_6.error = e_6;
            env_6.hasError = true;
        } finally{
            __disposeResources111(env_6);
        }
    }
    async finalizeStep(parentCtx, state, splitStepData, toolCallResults, _mcpTools, onStateUpdate) {
        const env_7 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource111(env_7, createSpan(parentCtx.withName("finalizeStep")), false);
            const ctx = spanCtxt.ctx;
            const baseExecutor = new RedactedPromptToolExecutor(this.promptSession.getExecutor(), PrivacyMode.UNSPECIFIED);
            const shouldSkipFinalizeRootPromptBlobs = !finalizeNeedsRootPrompt(this.config);
            finalizeRootPromptRestoreMode.increment(ctx, 1, {
                mode: shouldSkipFinalizeRootPromptBlobs ? "skipped" : "loaded"
            });
            const stateHandler = await ConversationStateHandle.fromConversationStateStructure(ctx, this.blobStore, state, baseExecutor, this.config.formattingOptions, this.config.modelId, this.config.agentType, this.stateHandleOptions({
                shouldTrackAgentTypeChange: this.shouldTrackAgentTypeChange(splitStepData.actionCase),
                loadRootPromptBlobs: !shouldSkipFinalizeRootPromptBlobs
            }));
            const onStateUpdateWithFlush = async (innerCtx, innerState)=>{
                const env_8 = {
                    stack: [],
                    error: void 0,
                    hasError: false
                };
                try {
                    const span = __addDisposableResource111(env_8, createSpan(innerCtx.withName("onStateUpdateWithFlush")), false);
                    await onStateUpdate?.(span.ctx, fromRedactedConversationStateStructure(innerState, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED));
                    await this.blobStore.flush(span.ctx);
                } catch (e_8) {
                    env_8.error = e_8;
                    env_8.hasError = true;
                } finally{
                    __disposeResources111(env_8);
                }
            };
            const handler = this.getSplitStepHandler(splitStepData.actionCase);
            const result = await handler.finalizeStep(ctx, splitStepData, toolCallResults, baseExecutor, stateHandler, onStateUpdateWithFlush);
            await onStateUpdateWithFlush(ctx, result.state);
            return {
                state: fromRedactedConversationStateStructure(result.state, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED),
                hasToolCall: result.hasToolCall
            };
        } catch (e_7) {
            env_7.error = e_7;
            env_7.hasError = true;
        } finally{
            __disposeResources111(env_7);
        }
    }
    shouldPrecomputeSummary(tokenDetails) {
        return this.orchestrator.shouldStartBackgroundSummarization(tokenDetails, []);
    }
    async computeSummarizedConversationState(parentCtx, state, requestContext) {
        const env_9 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource111(env_9, createSpan(parentCtx.withName("computeSummarizedConversationState")), false);
            const ctx = spanCtxt.ctx;
            const noopInteractionListener = {
                sendUpdate: async ()=>{},
                query: ()=>Promise.reject(new Error("Interaction queries are not supported during summarization"))
            };
            const baseExecutor = new RedactedPromptToolExecutor(this.promptSession.getExecutor(), PrivacyMode.UNSPECIFIED);
            const stateHandler = await ConversationStateHandle.fromConversationStateStructure(ctx, this.blobStore, state, baseExecutor, this.config.formattingOptions, this.config.modelId, this.config.agentType, {
                shouldTrackAgentTypeChange: false
            });
            const summary = await this.orchestrator.handleSummarization(ctx, stateHandler, baseExecutor, noopInteractionListener, this.config, requestContext, {
                backgroundSummarizationMode: BackgroundSummarizationMode.WaitForCompletion,
                triggerReason: "approaching_token_limit",
                resourceAccessor: this.resourceAccessor,
                forceExternalModel: true,
                currentInvocationId: stateHandler.lastStepInvocationId
            });
            if (summary === void 0) {
                return void 0;
            }
            const estimatedUsedTokens = estimateTokenCount2(baseExecutor.getMessages());
            stateHandler.setTokenDetails(createRedactedConversationTokenDetails(stateHandler.getPrivacyMode(), {
                usedTokens: estimatedUsedTokens,
                maxTokens: stateHandler.tokenDetails.maxTokens,
                breakdown: void 0,
                promptContextUsageTree: stateHandler.tokenDetails.promptContextUsageTree
            }));
            const newState = await stateHandler.computeNewStructure(ctx);
            return fromRedactedConversationStateStructure(newState, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        } catch (e_9) {
            env_9.error = e_9;
            env_9.hasError = true;
        } finally{
            __disposeResources111(env_9);
        }
    }
    isSingleStepHandler(handler) {
        return "handleSingleStep" in handler;
    }
    isSplitStepHandler(handler) {
        return "handleModelStep" in handler;
    }
};

}
