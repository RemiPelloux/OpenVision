import { init_dist7 } from "../../../agent-core/dist/index.js";
import { Updates } from "../../../agent-core/dist/interaction-updates.js";
import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_meta_agent_notes } from "./meta-agent-notes.js";
import { init_reactivate_paused_goal } from "./reactivate-paused-goal.js";
import { AbstractUserMessageActionHandler, init_abstract_user_message_action_handler } from "./user-message-action/abstract-user-message-action-handler.js";
import { AgentConversationTurnHandle, init_state } from "../state.js";
import { FileOperationLockManager, init_file_operation_lock_manager } from "../tools/core/file-operation-lock-manager.js";
import { init_background_shell_lifecycle } from "../tools/core/shell/background-shell-lifecycle.js";
import { AgentType, init_agent_config } from "../utils/agent-config.js";
import { init_mcp_meta_tool } from "../utils/mcp-meta-tool.js";
import { init_meta_parent_completion_protocol } from "../utils/meta-parent-completion-protocol.js";
import { init_project_conversation2 } from "../utils/project-conversation.js";
import { init_prompt_xml_escape } from "../utils/prompt-xml-escape.js";
import { init_request_context4 } from "../utils/request-context.js";
import { init_dist2 } from "../../../constants/dist/index.js";
import { init_dist } from "../../../context/dist/index.js";
import { buildRequestContextOptions, collectBackgroundTaskCompletionIds, composeCompletionPromptMessage, consolidatedWakeLeads, ensureUserMessageTiming, formatBackgroundCompletionsBody, formatConsolidatedWakeBody, formatMetaParentBackgroundCompletionsBody, fromRedactedBackgroundTaskCompletionAction, fromRedactedRequestContext, fromRedactedSelectedContext, getBackgroundTaskCompletionMetadata, getBackgroundTaskCompletionThreadId, getDynamicToolTurnSnapshot, getNotificationAcknowledgementUserQuery, isShellOutputCompletion, logBackgroundTaskCompletionOutcome, reactivatePausedGoalForTurn, recordShellCompletionExit, renderIncomingMessageIdTag, resolveProjectConversationContext, resolveRequestContext, summarizeBackgroundTaskCompletions, toRedactedCoreMessages, toRedactedInteractionUpdate } from "../../../mcp_sandbox_policy_exports.js";
import { init_dist32 } from "../../../prompt-jsx/dist/index.js";
import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
import { AgentMode, SimulatedMsgReason, UserMessage, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { SelectedContext, init_selected_context_pb } from "../../../proto/dist/generated/agent/v1/selected_context_pb.js";
import { init_subagents_pb } from "../../../proto/dist/generated/agent/v1/subagents_pb.js";
import { init_dist33 } from "../../../redacted-protos/dist/index.js";
import { PrivacyCapability } from "../../../redaction/dist/classification.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
import { isProjectSendMessageEnabled } from "../../../utils_pb_exports.js";
var import_node_crypto33, __addDisposableResource63, __disposeResources63, logger75, SUBAGENT_NOTIFICATION_VISIBLE_SUMMARY_LEAD, SUBAGENT_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_WITH_VISIBLE_SUMMARY_BASE, SUBAGENT_NOTIFICATION_HIDDEN_SUMMARY_LEAD, SUBAGENT_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_HIDDEN_SUMMARY_BASE, SUBAGENT_NOTIFICATION_ABORTED_INSTRUCTION, SUBAGENT_NOTIFICATION_CHAT_LINK_INSTRUCTION, SUBAGENT_NOTIFICATION_NAMED_LINK_INSTRUCTION, SUBAGENT_NOTIFICATION_CLOUD_VIEW_LINK_INSTRUCTION, SUBAGENT_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_SUFFIX, MIXED_WORKER_MESSAGE_INSTRUCTION, WORKER_MESSAGE_LEAD, WORKER_MESSAGE_ACKNOWLEDGEMENT_USER_QUERY_BASE, MIXED_WORKER_NEEDS_ATTENTION_INSTRUCTION, WORKER_NEEDS_ATTENTION_LEAD, WORKER_NEEDS_ATTENTION_ACKNOWLEDGEMENT_USER_QUERY_BASE, USER_DRIVEN_INTERACTIVE_CHILD_LEAD, USER_DRIVEN_INTERACTIVE_CHILD_ACKNOWLEDGEMENT_USER_QUERY_BASE, SHELL_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_BASE, SHELL_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY, COMPOSER_SHELL_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY, CONSOLIDATED_WAKE_KINDS, SYNTHETIC_ACKNOWLEDGEMENT_USER_QUERY_PREFIXES, BackgroundTaskCompletionActionHandler;
export { BackgroundTaskCompletionActionHandler, COMPOSER_SHELL_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY, CONSOLIDATED_WAKE_KINDS, MIXED_WORKER_MESSAGE_INSTRUCTION, MIXED_WORKER_NEEDS_ATTENTION_INSTRUCTION, SHELL_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY, SHELL_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_BASE, SUBAGENT_NOTIFICATION_ABORTED_INSTRUCTION, SUBAGENT_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_HIDDEN_SUMMARY_BASE, SUBAGENT_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_SUFFIX, SUBAGENT_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_WITH_VISIBLE_SUMMARY_BASE, SUBAGENT_NOTIFICATION_CHAT_LINK_INSTRUCTION, SUBAGENT_NOTIFICATION_CLOUD_VIEW_LINK_INSTRUCTION, SUBAGENT_NOTIFICATION_HIDDEN_SUMMARY_LEAD, SUBAGENT_NOTIFICATION_NAMED_LINK_INSTRUCTION, SUBAGENT_NOTIFICATION_VISIBLE_SUMMARY_LEAD, SYNTHETIC_ACKNOWLEDGEMENT_USER_QUERY_PREFIXES, USER_DRIVEN_INTERACTIVE_CHILD_ACKNOWLEDGEMENT_USER_QUERY_BASE, USER_DRIVEN_INTERACTIVE_CHILD_LEAD, WORKER_MESSAGE_ACKNOWLEDGEMENT_USER_QUERY_BASE, WORKER_MESSAGE_LEAD, WORKER_NEEDS_ATTENTION_ACKNOWLEDGEMENT_USER_QUERY_BASE, WORKER_NEEDS_ATTENTION_LEAD, __addDisposableResource63, __disposeResources63, import_node_crypto33, logger75 };
var __wakaru_init_background_task_completion_action_handler_initialized = false;
export function init_background_task_completion_action_handler() {
if (__wakaru_init_background_task_completion_action_handler_initialized) return;
__wakaru_init_background_task_completion_action_handler_initialized = true;
"use strict";
init_jsx_runtime();
import_node_crypto33 = require("node:crypto");
init_dist7();
init_dist2();
init_dist();
init_dist32();
init_agent_pb();
init_selected_context_pb();
init_subagents_pb();
init_dist33();
init_dist27();
init_state();
init_file_operation_lock_manager();
init_background_shell_lifecycle();
init_agent_config();
init_mcp_meta_tool();
init_meta_parent_completion_protocol();
init_project_conversation2();
init_prompt_xml_escape();
init_request_context4();
init_meta_agent_notes();
init_reactivate_paused_goal();
init_abstract_user_message_action_handler();
__addDisposableResource63 = function(env, value, async) {
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
__disposeResources63 = (function(SuppressedError2) {
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
logger75 = createLogger("@anysphere/agent");
SUBAGENT_NOTIFICATION_VISIBLE_SUMMARY_LEAD = "The beginning of the above subagent result is already visible to the user.";
SUBAGENT_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_WITH_VISIBLE_SUMMARY_BASE = SUBAGENT_NOTIFICATION_VISIBLE_SUMMARY_LEAD + " Perform any follow-up actions (if needed). DO NOT regurgitate or reiterate its result unless asked. If multiple subagents have now completed and none are still running, briefly summarize the findings and conclusions across all of them. Otherwise, if no follow-ups remain, end your response with a brief third-person confirmation that the subagent has completed.";
SUBAGENT_NOTIFICATION_HIDDEN_SUMMARY_LEAD = "Perform any necessary follow-up actions in response to the subagent completion above.";
SUBAGENT_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_HIDDEN_SUMMARY_BASE = SUBAGENT_NOTIFICATION_HIDDEN_SUMMARY_LEAD + " If no follow-up work is needed, no further action is required.";
SUBAGENT_NOTIFICATION_ABORTED_INSTRUCTION = " A status of `aborted` means the subagent's turn was deliberately stopped (for example, the user pressed stop); treat the stop as intentional, not as a failure or accidental interruption, and do not resume, restart, re-dispatch, or send new instructions to it unless the user explicitly asks you to.";
SUBAGENT_NOTIFICATION_CHAT_LINK_INSTRUCTION = " If you mention an agent or subagent in your response, link it with the `[label](id)` format using the agent_id or task_id from the notification instead of printing the raw ID.";
SUBAGENT_NOTIFICATION_NAMED_LINK_INSTRUCTION = " If you mention an agent or subagent in your response, link it with the `[Name](id)` Don't use generic label such as `[agent]`, `[worker]`, or `[subagent]`.";
SUBAGENT_NOTIFICATION_CLOUD_VIEW_LINK_INSTRUCTION = " For cloud subagents, when the agent has edited code, link to `[Review](bc-id#changes)`, or, if you know the exact added and deleted line counts, `[Review +A \u2212D](bc-id#changes)`, replacing A and D with those counts. Never write A or D literally. Use `[Try Live](bc-id#desktop)` only when the agent used computer use.";
SUBAGENT_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_SUFFIX = " Don't repeat the same confirmation every time.";
MIXED_WORKER_MESSAGE_INSTRUCTION = " Entries marked `reason: worker_message` are mid-turn messages from workers whose turns may still be running \u2014 they are NOT completions; do not treat those workers as finished, and take any coordination action their messages call for.";
WORKER_MESSAGE_LEAD = "A worker agent sent you a message mid-turn.";
WORKER_MESSAGE_ACKNOWLEDGEMENT_USER_QUERY_BASE = WORKER_MESSAGE_LEAD + " The worker's turn may still be running \u2014 do NOT treat this as the worker finishing. Take any coordination action the message calls for (reply via SendToAgent if the worker needs input). If no action is needed, no further response is required.";
MIXED_WORKER_NEEDS_ATTENTION_INSTRUCTION = " Entries marked `reason: worker_needs_attention` are workers paused waiting for the user to respond \u2014 they are NOT completions; tell the user which worker is blocked and what it is waiting on, and do not answer on the user's behalf.";
WORKER_NEEDS_ATTENTION_LEAD = "A worker agent is paused waiting for the user to respond.";
WORKER_NEEDS_ATTENTION_ACKNOWLEDGEMENT_USER_QUERY_BASE = WORKER_NEEDS_ATTENTION_LEAD + " Its turn is paused, not finished \u2014 do NOT treat this as the worker completing. Tell the user which worker is blocked and what it is waiting on (the notification detail has the question or authentication request), so they can respond to the worker directly. Do NOT answer the question or approve the authentication yourself, do NOT reply via SendToAgent on the user's behalf, and do NOT start polling the worker. The user may have already responded \u2014 the worker resumes on its own once they do, so simply inform the user and end your turn if nothing else is pending.";
USER_DRIVEN_INTERACTIVE_CHILD_LEAD = "The user is actively driving this Project child.";
USER_DRIVEN_INTERACTIVE_CHILD_ACKNOWLEDGEMENT_USER_QUERY_BASE = USER_DRIVEN_INTERACTIVE_CHILD_LEAD + " Record the completion for coordination, but do not message the user or take over the child thread. If no coordinator bookkeeping is required, end without further action.";
SHELL_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_BASE = "Briefly inform the user about the task result and perform any follow-up actions (if needed).";
SHELL_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY = `<user_query>${SHELL_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_BASE}</user_query>`;
COMPOSER_SHELL_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY = `<user_query>${SHELL_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_BASE} If there's no follow-ups needed, don't explicitly say that.</user_query>`;
CONSOLIDATED_WAKE_KINDS = [
    "worker_message",
    "user_driven_message",
    "user_driven_completion",
    "needs_attention",
    "reparented",
    "shell_finished",
    "shell_progress",
    "aborted",
    "error",
    "completion"
];
SYNTHETIC_ACKNOWLEDGEMENT_USER_QUERY_PREFIXES = [
    SHELL_NOTIFICATION_ACKNOWLEDGEMENT_USER_QUERY_BASE,
    SUBAGENT_NOTIFICATION_VISIBLE_SUMMARY_LEAD,
    SUBAGENT_NOTIFICATION_HIDDEN_SUMMARY_LEAD,
    USER_DRIVEN_INTERACTIVE_CHILD_LEAD,
    WORKER_MESSAGE_LEAD,
    WORKER_NEEDS_ATTENTION_LEAD,
    ...consolidatedWakeLeads()
];
BackgroundTaskCompletionActionHandler = class extends AbstractUserMessageActionHandler {
    constructor(){
        super(...arguments);
        this.actionClass = "BackgroundTaskCompletionActionHandler";
        this.emptyResponseRetryAction = "ok_background_task_completion_action";
    }
    async prepareFollowupTurn(ctx, action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate) {
        const completionAction = fromRedactedBackgroundTaskCompletionAction(action, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        await stateHandler.ensureSubagentStatesLoaded(ctx);
        for (const completion of completionAction.completions){
            stateHandler.recordSubagentRunCompletion(completion);
            recordShellCompletionExit(ctx, completion);
        }
        const isMetaParentAgent = this.config.featureFlags?.glassMetaParentAgent === true;
        if (this.config.featureFlags?.disableBackgroundTaskFollowUp && !isMetaParentAgent) {
            logBackgroundTaskCompletionOutcome(ctx, "skipped_disabled", summarizeBackgroundTaskCompletions(completionAction.completions), {
                is_meta_parent: isMetaParentAgent,
                task_ids: collectBackgroundTaskCompletionIds(completionAction.completions)
            });
            return {
                kind: "skip",
                ctx,
                state: await stateHandler.computeNewStructure(ctx)
            };
        }
        const modelVisibleCompletions = completionAction.completions.filter((completion)=>!completion.recordOnly);
        if (modelVisibleCompletions.length === 0 && completionAction.completions.length > 0) {
            logBackgroundTaskCompletionOutcome(ctx, "skipped_record_only", summarizeBackgroundTaskCompletions(completionAction.completions), {
                is_meta_parent: isMetaParentAgent,
                task_ids: collectBackgroundTaskCompletionIds(completionAction.completions)
            });
            return {
                kind: "record_only",
                ctx,
                state: await stateHandler.computeNewStructure(ctx)
            };
        }
        const completions = this.config.featureFlags?.enableBackgroundTaskProgress ? modelVisibleCompletions : modelVisibleCompletions.filter((completion)=>!isShellOutputCompletion(completion));
        const summary = summarizeBackgroundTaskCompletions(completions);
        if (completions.length === 0) {
            logBackgroundTaskCompletionOutcome(ctx, "skipped_empty", summary, {
                is_meta_parent: isMetaParentAgent,
                task_ids: collectBackgroundTaskCompletionIds(completionAction.completions)
            });
            return {
                kind: "skip",
                ctx,
                state: await stateHandler.computeNewStructure(ctx)
            };
        }
        await reactivatePausedGoalForTurn(ctx, stateHandler, onStateUpdate);
        const lastTurnRef = stateHandler.turns.at(-1);
        let sourceUserMessage;
        if (lastTurnRef) {
            const lastTurn = await lastTurnRef.get(ctx);
            if (lastTurn instanceof AgentConversationTurnHandle) {
                sourceUserMessage = await lastTurn.userMessage.get(ctx);
            }
        }
        const { requestContext: unredactedRequestContext, provenance: requestContextProvenance } = await resolveRequestContext({
            parentCtx: ctx,
            maybeRequestContext: action.requestContext ? fromRedactedRequestContext(action.requestContext, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED) : void 0,
            resources: this.resourceAccessor,
            options: buildRequestContextOptions(this.config)
        });
        const mergedMcpTools = this.mergeRequestContextTools(mcpTools, unredactedRequestContext.tools);
        const repositoryInfos = unredactedRequestContext.repositoryInfo;
        const followUpMode = stateHandler.mode ?? sourceUserMessage?.mode ?? AgentMode.AGENT;
        const enableAgentChatLinks = this.config.featureFlags?.enableAgentChatLinks !== false;
        const hideAsyncSubagentTaskNotifications = this.config.featureFlags?.hideAsyncSubagentTaskNotifications === true;
        const includeCloudSubagentViewLinks = this.config.agentType === AgentType.IDE || this.config.useLocalAgentPrompting === true;
        const formatOpts = {
            timeZone: unredactedRequestContext.env?.timeZone,
            mockNow: unredactedRequestContext.env?.devMockPromptTime?.toDate(),
            includeTimestamp: this.config.featureFlags?.userMessageTimestamps === true && !stateHandler.isDsv3(),
            parentModelInfo: this.config.modelInfo,
            enableAgentChatLinks,
            hideAsyncSubagentTaskNotifications,
            includeCloudSubagentViewLinks
        };
        if (!stateHandler.isRootProjectConversation) {
            stateHandler.isRootProjectConversation = (await resolveProjectConversationContext(ctx, stateHandler)).isRootProject;
        }
        const sendMessageEnabled = isProjectSendMessageEnabled(stateHandler);
        const consolidatedWake = !isMetaParentAgent && stateHandler.isRootProjectConversation && this.config.featureFlags?.cloudCoordinatorConsolidatedWakeNotifications === true;
        const acknowledgementQuery = consolidatedWake ? void 0 : getNotificationAcknowledgementUserQuery(completions, formatOpts);
        const batchSystemReminder = completionAction.systemReminder?.trim();
        const perCompletionMessages = completions.map((completion, index)=>{
            const isLast = index === completions.length - 1;
            const body = isMetaParentAgent ? formatMetaParentBackgroundCompletionsBody([
                completion
            ], formatOpts) : consolidatedWake ? formatConsolidatedWakeBody(completion, isLast ? completions : void 0, formatOpts) : formatBackgroundCompletionsBody([
                completion
            ], formatOpts);
            const completionMessage = isLast && acknowledgementQuery !== void 0 ? `${body}
${acknowledgementQuery}` : body;
            const systemReminder = isLast && batchSystemReminder !== void 0 && batchSystemReminder !== "" ? batchSystemReminder : void 0;
            const messageId = (0, import_node_crypto33.randomUUID)();
            const incomingMessageIdTag = sendMessageEnabled ? renderIncomingMessageIdTag(messageId) : void 0;
            return {
                completionMessage,
                promptBody: incomingMessageIdTag === void 0 ? body : `${incomingMessageIdTag}
${body}`,
                promptAcknowledgementQuery: isLast ? acknowledgementQuery : void 0,
                systemReminder,
                completionMetadata: getBackgroundTaskCompletionMetadata([
                    completion
                ]),
                completionThreadId: getBackgroundTaskCompletionThreadId([
                    completion
                ], stateHandler),
                messageId
            };
        });
        logBackgroundTaskCompletionOutcome(ctx, "ran_followup", summary, {
            is_meta_parent: isMetaParentAgent,
            has_source_user_message: sourceUserMessage !== void 0,
            task_ids: collectBackgroundTaskCompletionIds(completions)
        });
        const dynamicToolTurnOptions = getDynamicToolTurnSnapshot(this.config.toolsGenerator({
            resourceAccessor: this.resourceAccessor,
            stateHandler,
            agentSessionId: this.config.agentSessionId,
            mcpTools: mergedMcpTools,
            repositoryInfos,
            blobStore: stateHandler.getBlobStore(),
            mode: stateHandler.resolveStepMode({
                mode: followUpMode
            }),
            loggingContext: ctx,
            requestContext: unredactedRequestContext,
            fileOperationLockManager: new FileOperationLockManager(),
            smartModeClassifierMode: this.config.smartModeClassifierMode,
            smartModeClassifierShadowMode: this.config.smartModeClassifierShadowMode,
            autoRejectFirstAskQuestion: this.config.autoRejectFirstAskQuestion
        }));
        let latestTurn;
        for (const { completionMessage, promptBody, promptAcknowledgementQuery, systemReminder, completionMetadata, completionThreadId, messageId } of perCompletionMessages){
            const syntheticUserMessage = new UserMessage({
                text: completionMessage,
                messageId,
                selectedContext: sourceUserMessage?.selectedContext ? fromRedactedSelectedContext(sourceUserMessage.selectedContext, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED) : new SelectedContext(),
                mode: followUpMode,
                isSimulatedMsg: true,
                simulatedMsgReason: SimulatedMsgReason.BACKGROUND_TASK_COMPLETION,
                ...completionMetadata !== void 0 && {
                    simulatedMessageMetadata: completionMetadata
                },
                ...systemReminder !== void 0 && {
                    subagentSystemReminder: systemReminder
                }
            });
            ensureUserMessageTiming(syntheticUserMessage);
            if (completionThreadId !== void 0 && completionThreadId.length > 0) {
                syntheticUserMessage.threadId = completionThreadId;
            }
            await this.interactionListener.sendUpdate(ctx, toRedactedInteractionUpdate(Updates.userMessageAppended(syntheticUserMessage), stateHandler.getPrivacyMode()));
            const { turn, systemReminder: offloadReminder } = await stateHandler.createBackgroundTaskCompletionTurn(ctx, syntheticUserMessage, unredactedRequestContext, this.config, this.resourceAccessor, dynamicToolTurnOptions);
            latestTurn = turn;
            rootPromptExecutor.appendMessages(toRedactedCoreMessages([
                {
                    role: "user",
                    content: composeCompletionPromptMessage({
                        promptBody,
                        systemReminderBlocks: [
                            ...systemReminder !== void 0 ? [
                                `<system_reminder>
${systemReminder}
</system_reminder>`
                            ] : [],
                            ...offloadReminder !== void 0 ? [
                                offloadReminder
                            ] : []
                        ],
                        acknowledgementQuery: promptAcknowledgementQuery
                    })
                }
            ], stateHandler.getPrivacyMode()));
        }
        if (latestTurn === void 0) {
            return {
                kind: "skip",
                ctx,
                state: await stateHandler.computeNewStructure(ctx)
            };
        }
        return {
            kind: "ready",
            ctx,
            latestTurn,
            mergedMcpTools,
            repositoryInfos,
            requestContext: unredactedRequestContext,
            requestContextProvenance
        };
    }
    async handle(parentCtx, action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource63(env_1, createSpan(parentCtx.withName("handleBackgroundTaskCompletionAction")), false);
            const followup = await this.prepareFollowupTurn(span.ctx, action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate);
            if (followup.kind === "ready") {
                await this.runTurnLoop(followup.ctx, rootPromptExecutor, stateHandler, followup.latestTurn, this.config.toolsGenerator, followup.mergedMcpTools, followup.repositoryInfos, followup.requestContext, onStateUpdate);
            }
            return await stateHandler.computeNewStructure(followup.ctx);
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources63(env_1);
        }
    }
    async handleSingleStep(ctx, action, _rootPromptExecutor, stateHandler, _mcpTools, _onStateUpdate) {
        const completionAction = fromRedactedBackgroundTaskCompletionAction(action, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        await stateHandler.ensureSubagentStatesLoaded(ctx);
        for (const completion of completionAction.completions){
            stateHandler.recordSubagentRunCompletion(completion);
            recordShellCompletionExit(ctx, completion);
        }
        return {
            state: await stateHandler.computeNewStructure(ctx),
            hasToolCall: false
        };
    }
    async handleModelStep(parentCtx, action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource63(env_2, createSpan(parentCtx.withName("handleBackgroundTaskCompletionModelStep")), false);
            const followup = await this.prepareFollowupTurn(span.ctx, action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate);
            if (followup.kind === "record_only") {
                return {
                    state: followup.state,
                    toolCallDescriptors: [],
                    splitStepData: {
                        modelResponseMessages: [],
                        stateOnlyStep: true
                    }
                };
            }
            if (followup.kind === "skip") {
                return {
                    state: followup.state,
                    toolCallDescriptors: [],
                    splitStepData: {
                        modelResponseMessages: []
                    }
                };
            }
            const { toolCallDescriptors, splitStepData } = await this.runModelStep(followup.ctx, rootPromptExecutor, stateHandler, followup.latestTurn, this.config.toolsGenerator, followup.mergedMcpTools, followup.repositoryInfos, followup.requestContext, onStateUpdate);
            return {
                state: await stateHandler.computeNewStructure(followup.ctx),
                toolCallDescriptors,
                splitStepData: {
                    ...splitStepData,
                    requestContextProvenance: followup.requestContextProvenance
                }
            };
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources63(env_2);
        }
    }
};

}
