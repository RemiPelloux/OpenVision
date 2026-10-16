import { RedactedUpdates } from "../../../../agent-core/dist/redacted-interaction-updates.js";
import { init_server } from "../../../../agent-core/dist/server.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_common12 } from "../common.js";
import { init_meta_agent_notes } from "../meta-agent-notes.js";
import { init_reactivate_paused_goal } from "../reactivate-paused-goal.js";
import { init_user_info_catalog_update } from "../user-info-catalog-update.js";
import { init_user_info_rerender } from "../user-info-rerender.js";
import { AbstractUserMessageActionHandler, init_abstract_user_message_action_handler } from "./abstract-user-message-action-handler.js";
import { init_pending_messages } from "./pending-messages.js";
import { init_common10 } from "../../common.js";
import { init_mode_processing } from "../../mode-processing.js";
import { init_cloud_meta_agent } from "../../prompts/cloud-meta-agent/index.js";
import { init_self_document } from "../../prompts/cloud-meta-agent/self-document.js";
import { init_composer2_cloud_testing_sections } from "../../prompts/composer2-cloud-testing-sections.js";
import { init_gpt_helpers } from "../../prompts/gpt-helpers.js";
import { init_multitask_mode_user_reminder } from "../../prompts/multitask-mode-user-reminder.js";
import { init_system } from "../../prompts/system.js";
import { UserInfo, init_user_info } from "../../prompts/user-info.js";
import { init_state } from "../../state.js";
import { init_core5 } from "../../tools/core.js";
import { FileOperationLockManager, init_file_operation_lock_manager } from "../../tools/core/file-operation-lock-manager.js";
import { init_formatters2 } from "../../tools/core/shell/formatters.js";
import { init_interrupted_shell_output } from "../../tools/core/shell/interrupted-shell-output.js";
import { init_task_tool_name } from "../../tools/task-tool-name.js";
import { init_task } from "../../tools/task.js";
import { init_mcp_meta_tool } from "../../utils/mcp-meta-tool.js";
import { init_project_conversation2 } from "../../utils/project-conversation.js";
import { init_prompt_prefix_telemetry } from "../../utils/prompt-prefix-telemetry.js";
import { init_request_context4 } from "../../utils/request-context.js";
import { cloudAgentTurnPrepGlueMsRecorderKey, init_request_id } from "../../utils/request-id.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { createHistogram, shouldRerenderUserInfoForLocalPrCreationForge } from "../../../../dist_exports.js";
import { buildInterruptedPendingToolCallMessages, buildRequestContextOptions, buildSystemPromptFingerprint, buildUserInfoAgentNotesProps, deserializeConversationHistoryMessages, ensureUserMessageTiming, extractMemoryContextBlock, extractNamedAgentSelfDocumentBlock, extractToolInfo, fingerprintBotSkillsCatalog, fingerprintTeamRules, fromRedactedRequestContext, fromRedactedUserMessage2, getAllRules, getBrowserToolNames, getComposer2CloudTestingSectionsPlacement, getComposer2CustomUserRulesForModel, getDynamicToolTurnSnapshot, getExecutableTools, getFirstUserInfoAgentSkillsFingerprint, getFirstUserInfoCloudTestingSectionsPlacement, getFirstUserInfoMemoryContextResolved, getFirstUserInfoMemoryWithheld, getFirstUserInfoMessageContent, getFirstUserInfoOmitCloudWorkerProcedure, getFirstUserInfoProjectCoordinatorPrompting, getFirstUserInfoPromptVariant, getFirstUserInfoRequestContextCompleteness, getFirstUserInfoSummarizationEpoch, getFirstUserInfoTeamRulesFingerprint, getNamedAgentSessionPromptContext, getRequestContextCompleteness, getRequiredToolName, getTaskToolName, getUserInfoMcpMetaToolOptions, getUserInfoRerenderReason, isNamedAgentHomePromptSession, isRootProjectUserMessage, isStepScopedSystemMessage, joinUserTurnSystemReminders, reactivatePausedGoalForTurn, recordConversationInitMs, recordInitialCheckpointOutcomeSafely, recordSystemPromptRebuild, recordUserInfoRerendered, renderCloudMetaParentUserTurnReminder, renderMultitaskModeEnterUserReminder, renderNamedAgentHomeUserTurnReminder, renderNamedAgentSelfDocumentBlock, resolveRequestContext, resolveRootCoordinatorPrompting, resolveUserInfoCatalogUpdateReminder, shouldMigrateMultitaskEnterReminderToUserInfo, shouldRecoverUserInfoAfterSummarization, shouldRerenderUserInfoAfterSummarization, shouldRerenderUserInfoForRequestContextRecovery, toRedactedCoreMessages, toolCallIdsOf, userInfoHasMultitaskModeEnterReminder, usesGptPersistenceInstructions } from "../../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
import { AgentMode, init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_agent_v1 } from "../../../../redacted-protos/dist/agent-v1.js";
import { PrivacyCapability } from "../../../../redaction/dist/classification.js";
import { init_dist27 } from "../../../../redaction/dist/index.js";
import { init_dist3 } from "../../../../utils/dist/index.js";
import { LOCAL_PR_CREATION_FORGE_RULE_PATH } from "../../../../utils/dist/local-pr-creation-forge.js";
var __addDisposableResource69, __disposeResources69, logger85, conversationInitDuration, getRequestContextDuration, prependedMessagesDuration, systemPromptGenerationDuration, createMainTurnDuration, postTurnStateDuration, DEFAULT_MAX_PREPENDED_USER_MESSAGES, UserMessageActionHandler;
export { DEFAULT_MAX_PREPENDED_USER_MESSAGES, UserMessageActionHandler, __addDisposableResource69, __disposeResources69, conversationInitDuration, createMainTurnDuration, getRequestContextDuration, logger85, postTurnStateDuration, prependedMessagesDuration, systemPromptGenerationDuration };
var __wakaru_init_user_message_action_handler_initialized = false;
export function init_user_message_action_handler() {
if (__wakaru_init_user_message_action_handler_initialized) return;
__wakaru_init_user_message_action_handler_initialized = true;
"use strict";
init_server();
init_dist26();
init_dist();
init_dist4();
init_agent_pb();
init_agent_v1();
init_dist27();
init_dist3();
init_common10();
init_mode_processing();
init_cloud_meta_agent();
init_self_document();
init_composer2_cloud_testing_sections();
init_gpt_helpers();
init_multitask_mode_user_reminder();
init_system();
init_user_info();
init_state();
init_file_operation_lock_manager();
init_formatters2();
init_interrupted_shell_output();
init_core5();
init_task();
init_task_tool_name();
init_mcp_meta_tool();
init_project_conversation2();
init_prompt_prefix_telemetry();
init_request_context4();
init_request_id();
init_common12();
init_meta_agent_notes();
init_reactivate_paused_goal();
init_user_info_catalog_update();
init_user_info_rerender();
init_abstract_user_message_action_handler();
init_pending_messages();
__addDisposableResource69 = function(env, value, async) {
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
__disposeResources69 = (function(SuppressedError2) {
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
logger85 = createLogger("@anysphere/agent:user-message-action");
conversationInitDuration = createHistogram("agent.ttft.conversationInitMs", {
    description: "Time for initializeConversation (system prompt, rules, turn creation)"
});
getRequestContextDuration = createHistogram("agent.ttft.getRequestContextMs", {
    description: "Time to resolve the request context (may call executor)"
});
prependedMessagesDuration = createHistogram("agent.ttft.prependedMessagesMs", {
    description: "Time to process prepended user messages (sendUpdate + createAgentTurn per message)",
    labelNames: [
        "count"
    ]
});
systemPromptGenerationDuration = createHistogram("agent.ttft.systemPromptGenerationMs", {
    description: "Time for system prompt generation, UserInfo, tool generation, and message assembly"
});
createMainTurnDuration = createHistogram("agent.ttft.createMainTurnMs", {
    description: "Time for the main stateHandler.createAgentTurn call (includes processSelectedContext)",
    labelNames: [
        "overlap_pre_turn_state_snapshot"
    ]
});
postTurnStateDuration = createHistogram("agent.ttft.postTurnStateMs", {
    description: "Time for optional computeNewStructure + onStateUpdate after turn creation"
});
DEFAULT_MAX_PREPENDED_USER_MESSAGES = 5;
UserMessageActionHandler = class extends AbstractUserMessageActionHandler {
    constructor(){
        super(...arguments);
        this.actionClass = "UserMessageActionHandler";
    }
    async initializeConversation(ctx, params) {
        const { action, rootPromptExecutor, stateHandler, mcpTools, maxPrependedUserMessages, forcePrependedUserMessages, onStateUpdate, initialCheckpointMode, recordInitialCheckpointOutcome } = params;
        if (!action.userMessage) {
            throw new Error("User message is required");
        }
        const userMessage = action.userMessage;
        const isRootProject = isRootProjectUserMessage(userMessage);
        if (isRootProject) {
            stateHandler.isRootProjectConversation = true;
        }
        const resolvedTurnMode = stateHandler.resolveTurnMode(userMessage);
        const { omitCloudWorkerProcedure, useProjectCoordinatorPrompting } = resolveRootCoordinatorPrompting({
            omitCloudWorkerProcedureGateEnabled: this.config.featureFlags?.projectRootCoordinatorPrompt === true,
            localParityPromptGateEnabled: this.config.featureFlags?.projectRootCoordinatorLocalParityPrompt === true,
            agentType: this.config.agentType,
            mode: resolvedTurnMode,
            useLocalAgentPrompting: this.config.useLocalAgentPrompting === true,
            isNamedAgentSession: getNamedAgentSessionPromptContext(this.config) !== void 0 || isNamedAgentHomePromptSession(this.config),
            isRootProject
        });
        const sendToInteractionListener = action.sendToInteractionListener === true;
        const hasExistingNonSystemMessages = rootPromptExecutor.getMessages().some((message)=>message.role !== "system");
        const getRequestContextStart = performance.now();
        const { requestContext, provenance: requestContextProvenance } = await resolveRequestContext({
            parentCtx: ctx,
            maybeRequestContext: action.requestContext ? fromRedactedRequestContext(action.requestContext, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED) : void 0,
            resources: this.resourceAccessor,
            options: buildRequestContextOptions(this.config)
        });
        getRequestContextDuration.histogram(ctx, performance.now() - getRequestContextStart);
        stateHandler.getOrInitializeConversationStartedDate(requestContext.env?.timeZone, requestContext.env?.devMockPromptTime?.toDate());
        const mergedMcpTools = this.mergeRequestContextTools(mcpTools, requestContext.tools);
        const toolSetHandle = this.config.toolsGenerator({
            resourceAccessor: this.resourceAccessor,
            stateHandler,
            agentSessionId: this.config.agentSessionId,
            mcpTools: mergedMcpTools,
            repositoryInfos: requestContext.repositoryInfo,
            blobStore: stateHandler.getBlobStore(),
            mode: resolvedTurnMode,
            loggingContext: ctx,
            requestContext,
            fileOperationLockManager: new FileOperationLockManager(),
            smartModeClassifierMode: this.config.smartModeClassifierMode,
            smartModeClassifierShadowMode: this.config.smartModeClassifierShadowMode,
            autoRejectFirstAskQuestion: this.config.autoRejectFirstAskQuestion
        });
        const toolInfo = extractToolInfo(toolSetHandle);
        const sendMessageToolName = toolInfo.allTools.SEND_MESSAGE?.name;
        const dynamicToolTurnOptions = {
            ...getDynamicToolTurnSnapshot(toolSetHandle),
            ...sendMessageToolName !== void 0 ? {
                sendMessageToolName
            } : {}
        };
        const isProjectKickoffBeforePrepends = userMessage.projectDetails !== void 0 && userMessage.projectDetails.sideChat === void 0 && stateHandler.turns.length === 0;
        const prependedMessagesStart = performance.now();
        let prependedCount = 0;
        if (this.config.enablePrependedUserActions || forcePrependedUserMessages) {
            const allPrepended = action.prependUserMessages ?? [];
            const droppedCount = Math.max(0, allPrepended.length - maxPrependedUserMessages);
            const prependedMessages = allPrepended.slice(-maxPrependedUserMessages);
            prependedCount = prependedMessages.length;
            if (droppedCount > 0) {
                logger85.warn(ctx, "dropped excess prepended user messages", {
                    droppedCount,
                    totalCount: allPrepended.length,
                    keptCount: prependedMessages.length
                });
            }
            if (prependedMessages.length > 0) {
                logger85.info(ctx, "prepending user messages", {
                    prependUserMessagesCount: prependedMessages.length
                });
            }
            const prependedMessageIds = new Set(prependedMessages.map((message)=>message.messageId).filter((messageId)=>messageId.length > 0));
            const existingUserTurnMessageIds = prependedMessageIds.size > 0 ? await stateHandler.findUserTurnMessageIds(ctx, {
                messageIds: prependedMessageIds,
                stopAtMessageId: this.config.prependedUserMessageDedupeFloorMessageId
            }) : void 0;
            const prependedNamedAgentUserTurnReminder = prependedMessages.length === 0 ? void 0 : isNamedAgentHomePromptSession(this.config) ? renderNamedAgentHomeUserTurnReminder() : this.config.isCloudMetaAgentParent ? renderCloudMetaParentUserTurnReminder(getRequiredToolName(toolInfo.allTools, "TASK"), getNamedAgentSessionPromptContext(this.config)) : void 0;
            for (const prependedMessage of prependedMessages){
                const prependedUserMessage = fromRedactedUserMessage2(prependedMessage, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
                const prependedMessageId = prependedUserMessage.messageId;
                const duplicateByMessageId = prependedMessageId.length > 0 && existingUserTurnMessageIds?.has(prependedMessageId) === true;
                if (duplicateByMessageId) {
                    logger85.info(ctx, "skipping duplicate prepended user message", {
                        prependedMessageId,
                        duplicateByMessageId
                    });
                    continue;
                }
                const startedAtMs = ensureUserMessageTiming(prependedMessage);
                prependedUserMessage.startedAtMs = startedAtMs;
                prependedUserMessage.completedAtMs = startedAtMs;
                if (sendToInteractionListener) {
                    await this.interactionListener.sendUpdate(ctx, RedactedUpdates.userMessageAppended(prependedMessage));
                }
                await stateHandler.createAgentTurn(ctx, prependedUserMessage, requestContext, this.config, this.resourceAccessor, {
                    additionalUserTurnSystemReminder: prependedNamedAgentUserTurnReminder,
                    ...dynamicToolTurnOptions
                });
                if (prependedMessageId.length > 0) {
                    existingUserTurnMessageIds?.add(prependedMessageId);
                }
            }
        }
        prependedMessagesDuration.histogram(ctx, performance.now() - prependedMessagesStart, {
            count: String(prependedCount)
        });
        const systemPromptStart = performance.now();
        const rules = getAllRules(requestContext, this.config.nonFileRules, this.config.featureFlags);
        const priorMessages = rootPromptExecutor.getMessages().filter((m2)=>m2.role !== "system" || isStepScopedSystemMessage(m2));
        const userInfoCloudTestingSectionsPlacement = getComposer2CloudTestingSectionsPlacement({
            modelInfo: this.config.modelInfo,
            enableComposer2IntelligentTestingPromptSection: this.config.enableComposer2IntelligentTestingPromptSection,
            backgroundAgentSource: this.config.backgroundAgentSource,
            agentType: this.config.agentType,
            enableCloudTesting: this.config.enableCloudTesting,
            featureFlags: this.config.featureFlags,
            namedAgentSessionKind: this.config.namedAgentSessionKind,
            isCloudMetaAgentParent: this.config.isCloudMetaAgentParent
        });
        const newMessages = [];
        const systemPromptProps = {
            requestContext,
            cursorRules: rules,
            env: requestContext.env,
            browserTools: getBrowserToolNames(mcpTools),
            cloudRule: requestContext.cloudRule,
            mode: resolvedTurnMode,
            omitCloudWorkerProcedure,
            useProjectCoordinatorPrompting
        };
        const systemPromptContent = this.config.systemPromptGenerator(systemPromptProps, toolSetHandle);
        const systemPromptFingerprint = buildSystemPromptFingerprint({
            props: systemPromptProps,
            content: systemPromptContent,
            modelInfo: this.config.modelInfo,
            agentType: this.config.agentType,
            featureFlags: this.config.featureFlags,
            toolSetHandle,
            mcpTools: mergedMcpTools
        });
        recordSystemPromptRebuild(ctx, {
            previousMessages: rootPromptExecutor.getMessages(),
            current: systemPromptFingerprint,
            modelInfo: this.config.modelInfo
        });
        newMessages.unshift({
            role: "system",
            content: systemPromptContent,
            providerOptions: {
                cursor: {
                    systemPromptFingerprint
                }
            }
        });
        const shouldRenderDsv3UserInfo = stateHandler.isDsv3() || this.config.modelInfo?.isComposerMatterhorn === true;
        const namedAgentUserTurnReminder = isNamedAgentHomePromptSession(this.config) ? renderNamedAgentHomeUserTurnReminder() : this.config.isCloudMetaAgentParent ? renderCloudMetaParentUserTurnReminder(getRequiredToolName(toolInfo.allTools, "TASK"), getNamedAgentSessionPromptContext(this.config)) : void 0;
        const toolMetadataMap = toolInfo.allTools;
        const awaitToolName = toolMetadataMap.AWAIT?.name;
        const shellToolName = toolMetadataMap.SHELL?.name;
        const grepToolName = toolMetadataMap.GREP?.name;
        const matterhornCustomUserRuleOptions = {
            awaitToolName,
            shellToolName,
            grepToolName
        };
        const expectedCustomUserRules = getComposer2CustomUserRulesForModel(this.config.modelInfo, this.config.featureFlags, matterhornCustomUserRuleOptions);
        const userInfoMcpMetaToolOptions = getUserInfoMcpMetaToolOptions(requestContext.mcpMetaToolOptions, mergedMcpTools, toolSetHandle);
        const hidesMcpMetaToolSnapshot = resolvedTurnMode === AgentMode.ASK && (this.config.enableFilterEditToolsInAskMode ?? true) || this.config.modelInfo?.isComposerMatterhorn === true && this.config.modelInfo.isRawTrainingSlug === true;
        const requestContextCompleteness = getRequestContextCompleteness(requestContext);
        const firstUserInfoContent = getFirstUserInfoMessageContent(priorMessages);
        const userInfoMemoryContextResolved = this.config.getUserInfoMemoryContextResolved?.();
        const userInfoMemoryWithheld = this.config.getUserInfoMemoryWithheld?.();
        const renderedUserInfoMemoryContext = this.config.getUserInfoMemoryContext?.();
        const userInfoMemoryContext = userInfoMemoryWithheld === true ? void 0 : userInfoMemoryContextResolved === false ? extractMemoryContextBlock(firstUserInfoContent) ?? renderedUserInfoMemoryContext : renderedUserInfoMemoryContext;
        const firstUserInfoRequestContextCompleteness = getFirstUserInfoRequestContextCompleteness(priorMessages);
        const userInfoTeamRulesFingerprint = fingerprintTeamRules(rules);
        const userInfoAgentSkillsFingerprint = fingerprintBotSkillsCatalog(requestContext.agentSkills ?? []);
        const userInfoCatalogInputs = {
            availableSubagentModelsDescription: toolInfo.availableSubagentModelsDescription,
            availableSubagentTypesDescription: toolInfo.availableSubagentTypesDescription,
            mcpMetaToolOptions: userInfoMcpMetaToolOptions,
            skipDynamicToolSnapshotCheck: hidesMcpMetaToolSnapshot
        };
        const deferUserInfoCatalogRerender = this.config.featureFlags?.deferUserInfoCatalogRerender === true;
        const userInfoRerenderReason = getUserInfoRerenderReason({
            priorMessages,
            agentTypeChanged: stateHandler.hasAgentTypeChangedFromPersistedState(),
            ...userInfoCatalogInputs,
            deferCatalogRerender: deferUserInfoCatalogRerender,
            ...this.config.featureFlags?.rerenderUserInfoOnTeamRulesChange === true && requestContextCompleteness.rules && {
                teamRules: {
                    currentFingerprint: userInfoTeamRulesFingerprint,
                    previousFingerprint: getFirstUserInfoTeamRulesFingerprint(priorMessages)
                }
            },
            agentSkills: {
                currentFingerprint: userInfoAgentSkillsFingerprint,
                previousFingerprint: getFirstUserInfoAgentSkillsFingerprint(priorMessages)
            },
            customUserRules: {
                expectedRules: expectedCustomUserRules,
                modelInfo: this.config.modelInfo,
                featureFlags: this.config.featureFlags,
                toolNames: matterhornCustomUserRuleOptions
            }
        });
        const needsUserInfoRerender = userInfoRerenderReason !== void 0;
        const needsRequestContextRecoveryRerender = this.config.featureFlags?.rerenderUserInfoOnRequestContextRecovery === true && shouldRerenderUserInfoForRequestContextRecovery({
            previousCompleteness: firstUserInfoRequestContextCompleteness,
            currentCompleteness: requestContextCompleteness
        });
        const currentSummarizationEpoch = stateHandler.summaryArchives.length;
        const needsSummarizationRerender = this.config.featureFlags?.rerenderUserInfoOnSummarization === true && shouldRerenderUserInfoAfterSummarization({
            previousEpoch: getFirstUserInfoSummarizationEpoch(priorMessages),
            currentEpoch: currentSummarizationEpoch,
            hasUserInfo: firstUserInfoContent !== void 0
        });
        const needsMissingUserInfoRecovery = this.config.featureFlags?.rerenderUserInfoOnSummarization === true && shouldRecoverUserInfoAfterSummarization({
            suppliesMemoryContext: this.config.getUserInfoMemoryContext !== void 0,
            hasExistingMessages: hasExistingNonSystemMessages,
            firstMessageIsUserInfo: firstUserInfoContent !== void 0 || getFirstUserInfoSummarizationEpoch(priorMessages) !== void 0,
            currentEpoch: currentSummarizationEpoch
        });
        const needsMemoryContextRecoveryRerender = hasExistingNonSystemMessages && firstUserInfoContent !== void 0 && getFirstUserInfoMemoryContextResolved(priorMessages) === false && userInfoMemoryContextResolved === true;
        const needsMemoryWithheldRerender = hasExistingNonSystemMessages && firstUserInfoContent !== void 0 && (userInfoMemoryWithheld === true ? extractMemoryContextBlock(firstUserInfoContent) !== void 0 : userInfoMemoryWithheld === false && getFirstUserInfoMemoryWithheld(priorMessages));
        const needsOmitCloudWorkerProcedureRerender = hasExistingNonSystemMessages && firstUserInfoContent !== void 0 && getFirstUserInfoOmitCloudWorkerProcedure(priorMessages) !== omitCloudWorkerProcedure;
        const needsProjectCoordinatorPromptingRerender = hasExistingNonSystemMessages && firstUserInfoContent !== void 0 && getFirstUserInfoProjectCoordinatorPrompting(priorMessages) !== useProjectCoordinatorPrompting;
        const userInfoPromptVariant = this.config.getUserInfoPromptVariant?.();
        const needsPromptVariantRerender = hasExistingNonSystemMessages && firstUserInfoContent !== void 0 && getFirstUserInfoPromptVariant(priorMessages) !== userInfoPromptVariant;
        const needsCloudTestingPlacementRerender = hasExistingNonSystemMessages && firstUserInfoContent !== void 0 && userInfoCloudTestingSectionsPlacement !== void 0 && getFirstUserInfoCloudTestingSectionsPlacement(priorMessages) !== userInfoCloudTestingSectionsPlacement;
        const localPrCreationForgeRule = rules.find((rule)=>rule.fullPath === LOCAL_PR_CREATION_FORGE_RULE_PATH);
        const needsLocalPrCreationForgeRerender = hasExistingNonSystemMessages && firstUserInfoContent !== void 0 && shouldRerenderUserInfoForLocalPrCreationForge({
            userInfoContent: firstUserInfoContent,
            forgeRuleContent: localPrCreationForgeRule?.content
        });
        const userInfoAlreadyHasMultitaskEnterReminder = firstUserInfoContent !== void 0 && userInfoHasMultitaskModeEnterReminder(firstUserInfoContent);
        const shouldMigrateMultitaskEnterReminderInThisTurn = shouldMigrateMultitaskEnterReminderToUserInfo({
            hasExistingNonSystemMessages,
            previousTurnMode: stateHandler.mode,
            resolvedTurnMode,
            priorMessages,
            firstUserInfoContent,
            userInfoAlreadyHasMultitaskEnterReminder
        });
        const shouldReplaceUserInfoWithImportedHistory = action.conversationHistory?.replaceUserInfo === true && action.conversationHistory.messages.length > 0;
        const shouldRenderUserInfo = (!hasExistingNonSystemMessages || needsUserInfoRerender || needsRequestContextRecoveryRerender || needsSummarizationRerender || needsMissingUserInfoRecovery || needsMemoryContextRecoveryRerender || needsMemoryWithheldRerender || needsLocalPrCreationForgeRerender || needsOmitCloudWorkerProcedureRerender || needsProjectCoordinatorPromptingRerender || needsPromptVariantRerender || shouldMigrateMultitaskEnterReminderInThisTurn || needsCloudTestingPlacementRerender) && !this.config.userInfoDisplayOptions?.disable && !shouldReplaceUserInfoWithImportedHistory;
        const userInfoCatalogUpdateReminder = resolveUserInfoCatalogUpdateReminder(ctx, {
            deferUserInfoCatalogRerender: this.config.featureFlags?.deferUserInfoCatalogRerender,
            priorMessages,
            firstUserInfoContent,
            shouldRenderUserInfo,
            inputs: userInfoCatalogInputs,
            modelInfo: this.config.modelInfo
        });
        const isMainTurnStillFirstConversationTurn = stateHandler.turns.length === 0;
        const shouldAppendMultitaskEnterReminderToUserInfo = shouldRenderUserInfo && resolvedTurnMode === AgentMode.MULTITASK && (!hasExistingNonSystemMessages && isMainTurnStillFirstConversationTurn || userInfoAlreadyHasMultitaskEnterReminder || shouldMigrateMultitaskEnterReminderInThisTurn);
        let didReplaceUserInfo = false;
        if (shouldRenderUserInfo) {
            didReplaceUserInfo = hasExistingNonSystemMessages && !needsMissingUserInfoRecovery;
            if (hasExistingNonSystemMessages) {
                const reasons = [];
                if (userInfoRerenderReason !== void 0) {
                    reasons.push(userInfoRerenderReason);
                }
                if (needsRequestContextRecoveryRerender) {
                    reasons.push("request_context_recovery");
                }
                if (needsSummarizationRerender) {
                    reasons.push("summarization_epoch_advanced");
                }
                if (needsMissingUserInfoRecovery) {
                    reasons.push("missing_after_summarization");
                }
                if (needsMemoryContextRecoveryRerender) {
                    reasons.push("memory_context_recovery");
                }
                if (needsMemoryWithheldRerender) {
                    reasons.push("memory_withheld_change");
                }
                if (needsLocalPrCreationForgeRerender) {
                    reasons.push("local_pr_creation_forge_change");
                }
                if (needsOmitCloudWorkerProcedureRerender) {
                    reasons.push("omit_cloud_worker_procedure_change");
                }
                if (needsProjectCoordinatorPromptingRerender) {
                    reasons.push("project_coordinator_prompting_change");
                }
                if (needsPromptVariantRerender) {
                    reasons.push("prompt_variant_change");
                }
                if (shouldMigrateMultitaskEnterReminderInThisTurn) {
                    reasons.push("multitask_reminder_migration");
                }
                if (needsCloudTestingPlacementRerender) {
                    reasons.push("cloud_testing_placement_recovery");
                }
                logger85.info(ctx, "agent.user_info.rerendered", {
                    reasons
                });
                recordUserInfoRerendered(ctx, reasons, this.config.modelInfo);
            }
            const subagentToolName = this.config.modelInfo !== void 0 ? getTaskToolName(this.config.modelInfo) : "Task";
            const multitaskModeEnterReminderOptions = {
                ignoreGptPersistenceInstructions: usesGptPersistenceInstructions(this.config.modelInfo),
                modelInfo: this.config.modelInfo,
                hideAsyncSubagentTaskNotifications: this.config.featureFlags?.hideAsyncSubagentTaskNotifications
            };
            let namedAgentSelfDocumentBlock;
            if (this.config.getNamedAgentSelfDocument !== void 0) {
                try {
                    namedAgentSelfDocumentBlock = renderNamedAgentSelfDocumentBlock(await this.config.getNamedAgentSelfDocument());
                } catch (error3) {
                    logger85.warn(ctx, "agent.named_agent_self_document.load_failed", {
                        error: error3
                    });
                    namedAgentSelfDocumentBlock = extractNamedAgentSelfDocumentBlock(firstUserInfoContent);
                }
            }
            let userInfoContent = UserInfo({
                cursorRules: rules,
                agentSkills: requestContext.agentSkills,
                env: requestContext.env,
                gitRepos: requestContext.gitRepos,
                gitRepoInfoComplete: requestContext.gitRepoInfoComplete,
                cloudRule: requestContext.cloudRule,
                mode: resolvedTurnMode,
                isRootProject,
                omitCloudWorkerProcedure,
                useProjectCoordinatorPrompting,
                dsv3: shouldRenderDsv3UserInfo,
                displayOptions: this.config.userInfoDisplayOptions,
                mcpInfoComplete: requestContext.mcpInfoComplete,
                mcpInstructions: requestContext.mcpInstructions,
                mcpFileSystemOptions: requestContext.mcpFileSystemOptions,
                mcpMetaToolOptions: userInfoMcpMetaToolOptions,
                userIntentSummary: requestContext.userIntentSummary,
                featureFlags: this.config.featureFlags,
                enableFilterEditToolsInAskMode: this.config.enableFilterEditToolsInAskMode,
                skipMcpInstructions: (requestContext.mcpFileSystemOptions?.enabled ?? false) || (userInfoMcpMetaToolOptions?.enabled ?? false),
                hooksAdditionalContext: requestContext.hooksAdditionalContext,
                automationInstructions: this.config.automationInstructions,
                ...this.config.enableTerminalFiles !== false && {
                    terminalsFolder: requestContext.env?.terminalsFolder
                },
                ...buildUserInfoAgentNotesProps(this.config, requestContext.env),
                designatedBranches: this.config.designatedBranches,
                startedAsNewProject: this.config.startedAsNewProject,
                newProjectSeededEmptyRoot: this.config.newProjectSeededEmptyRoot,
                branchPrefix: this.config.branchPrefix,
                branchSuffix: this.config.branchSuffix,
                preferCurrentBranchInMultiPrMode: this.config.preferCurrentBranchInMultiPrMode,
                toolInfo,
                browserTools: getBrowserToolNames(mcpTools),
                agentType: this.config.agentType,
                backgroundAgentSource: this.config.backgroundAgentSource,
                isCloudMetaAgentParent: this.config.isCloudMetaAgentParent,
                isSlackV1_5: this.config.isSlackV1_5,
                namedAgentSessionKind: this.config.namedAgentSessionKind,
                memoryContextBlock: userInfoMemoryContext,
                teammatesContextBlock: this.config.getUserInfoTeammatesContext?.(),
                namedAgentSelfDocumentBlock,
                enableCloudTesting: this.config.enableCloudTesting,
                useLocalAgentPrompting: this.config.useLocalAgentPrompting,
                isRepoless: this.config.isRepoless,
                repolessPromptVariant: this.config.repolessPromptVariant,
                modelInfo: this.config.modelInfo,
                agentTokenLimit: this.config.agentTokenLimit,
                enableComposer2IntelligentTestingPromptSection: this.config.enableComposer2IntelligentTestingPromptSection
            });
            if (shouldAppendMultitaskEnterReminderToUserInfo) {
                userInfoContent = `${userInfoContent}

${renderMultitaskModeEnterUserReminder(subagentToolName, multitaskModeEnterReminderOptions)}`;
            }
            newMessages.push({
                role: "user",
                content: userInfoContent,
                providerOptions: {
                    cursor: {
                        requestContextCompleteness,
                        userInfoSummarizationEpoch: currentSummarizationEpoch,
                        ...userInfoTeamRulesFingerprint !== void 0 && {
                            userInfoTeamRulesFingerprint
                        },
                        ...userInfoAgentSkillsFingerprint !== void 0 && {
                            userInfoAgentSkillsFingerprint
                        },
                        ...userInfoMemoryContextResolved !== void 0 && {
                            userInfoMemoryContextResolved
                        },
                        ...userInfoMemoryWithheld !== void 0 && {
                            userInfoMemoryWithheld
                        },
                        omitCloudWorkerProcedure,
                        useProjectCoordinatorPrompting,
                        ...userInfoPromptVariant !== void 0 && {
                            userInfoPromptVariant
                        },
                        ...userInfoCloudTestingSectionsPlacement !== void 0 && {
                            composer2CloudTestingSectionsPlacement: userInfoCloudTestingSectionsPlacement
                        }
                    }
                }
            });
        }
        const effectivePriorMessages = didReplaceUserInfo ? priorMessages.slice(1) : priorMessages;
        const conversationHistoryMessages = deserializeConversationHistoryMessages(action.conversationHistory, stateHandler.getPrivacyMode());
        const trailingConversationHistoryMessages = action.trailingConversationHistory === void 0 ? [] : deserializeConversationHistoryMessages(action.trailingConversationHistory, stateHandler.getPrivacyMode(), toolCallIdsOf([
            ...conversationHistoryMessages,
            ...effectivePriorMessages
        ]));
        const interruptedPendingToolCallMessages = buildInterruptedPendingToolCallMessages(stateHandler, getExecutableTools(toolSetHandle.getToolExecutionSet()), action.interruptedPendingToolCallResolutions, requestContext.env?.terminalsFolder);
        rootPromptExecutor.clearMessages();
        rootPromptExecutor.appendMessages(toRedactedCoreMessages(newMessages, stateHandler.getPrivacyMode()));
        rootPromptExecutor.appendMessages([
            ...conversationHistoryMessages,
            ...effectivePriorMessages,
            ...interruptedPendingToolCallMessages,
            ...trailingConversationHistoryMessages
        ]);
        systemPromptGenerationDuration.histogram(ctx, performance.now() - systemPromptStart);
        ensureUserMessageTiming(userMessage);
        if (sendToInteractionListener) {
            await this.interactionListener.sendUpdate(ctx, RedactedUpdates.userMessageAppended(userMessage));
        }
        const createMainTurnStart = performance.now();
        const turn = await stateHandler.createAgentTurn(ctx, fromRedactedUserMessage2(userMessage, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED), requestContext, this.config, this.resourceAccessor, {
            additionalUserTurnSystemReminder: joinUserTurnSystemReminders(namedAgentUserTurnReminder ?? "", userInfoCatalogUpdateReminder ?? "") || void 0,
            ...isProjectKickoffBeforePrepends && {
                isProjectKickoff: true
            },
            ...dynamicToolTurnOptions,
            recordRoutedModelDisplayName: true
        });
        const preTurnAssistantNotice = this.config.preTurnAssistantNotice?.trim() ?? "";
        if (preTurnAssistantNotice !== "") {
            await turn.recordText(ctx, `${preTurnAssistantNotice}

`);
        }
        stateHandler.setMode(resolvedTurnMode);
        createMainTurnDuration.histogram(ctx, performance.now() - createMainTurnStart, {
            overlap_pre_turn_state_snapshot: this.config.featureFlags?.overlapPreTurnStateSnapshot === true ? "true" : "false"
        });
        ctx.get(cloudAgentTurnPrepGlueMsRecorderKey)?.("createTurnMs", performance.now() - createMainTurnStart);
        const postTurnStateStart = performance.now();
        let deferredInitialCheckpoint;
        if (this.config.immediatelyUpdateStateOnNewTurn) {
            const persistInitialCheckpoint = async ()=>{
                const newState = await stateHandler.computeNewStructure(ctx);
                if (onStateUpdate) {
                    await onStateUpdate(ctx, newState);
                }
            };
            if (this.config.fireAndForgetCheckpoints) {
                void persistInitialCheckpoint().catch((error3)=>{
                    logger85.error(ctx, "Failed to persist checkpoint for new turn", {
                        error: error3
                    });
                });
            } else if (initialCheckpointMode === "overlap_model_step") {
                const startedAtMs = performance.now();
                const timing = {};
                const completion = persistInitialCheckpoint().finally(()=>{
                    timing.checkpointMs = performance.now() - startedAtMs;
                });
                let joinPromise;
                const join76 = ()=>{
                    if (joinPromise === void 0) {
                        const joinStartedAtMs = performance.now();
                        joinPromise = completion.finally(()=>{
                            timing.joinWaitMs = performance.now() - joinStartedAtMs;
                        });
                    }
                    return joinPromise;
                };
                void completion.catch(()=>{});
                deferredInitialCheckpoint = {
                    join: join76,
                    startedAtMs,
                    timing,
                    recordOutcome: recordInitialCheckpointOutcome
                };
            } else {
                const startedAtMs = performance.now();
                let failed = true;
                try {
                    await persistInitialCheckpoint();
                    failed = false;
                } finally{
                    if (initialCheckpointMode === "blocking") {
                        recordInitialCheckpointOutcomeSafely(ctx, recordInitialCheckpointOutcome, {
                            applied: false,
                            checkpointMs: performance.now() - startedAtMs,
                            joinWaitMs: 0,
                            failed
                        });
                    }
                }
            }
        }
        postTurnStateDuration.histogram(ctx, performance.now() - postTurnStateStart);
        return {
            turn,
            mergedMcpTools,
            requestContext,
            requestContextProvenance,
            deferredInitialCheckpoint
        };
    }
    async handle(parentCtx, action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate, options2 = {}) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource69(env_1, createSpan(parentCtx.withName("UserMessageActionHandler.handle")), false);
            const ctx = span.ctx;
            if (options2.pausedGoalReactivation !== "suppress") {
                await reactivatePausedGoalForTurn(ctx, stateHandler, onStateUpdate);
            }
            const convInitStart = performance.now();
            const { turn, mergedMcpTools, requestContext } = await this.initializeConversation(ctx, {
                action,
                rootPromptExecutor,
                stateHandler,
                mcpTools,
                maxPrependedUserMessages: options2.maxPrependedUserMessages ?? DEFAULT_MAX_PREPENDED_USER_MESSAGES,
                forcePrependedUserMessages: options2.forcePrependedUserMessages ?? false,
                onStateUpdate
            });
            recordConversationInitMs(ctx, performance.now() - convInitStart);
            await this.runTurnLoop(ctx, rootPromptExecutor, stateHandler, turn, this.config.toolsGenerator, mergedMcpTools, requestContext.repositoryInfo, requestContext, onStateUpdate);
            return await stateHandler.computeNewStructure(ctx);
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources69(env_1);
        }
    }
    async initAndMeasure(ctx, action, rootPromptExecutor, stateHandler, mcpTools, options2, onStateUpdate, initialCheckpointMode, recordInitialCheckpointOutcome) {
        const start = performance.now();
        const result = await this.initializeConversation(ctx, {
            action,
            rootPromptExecutor,
            stateHandler,
            mcpTools,
            maxPrependedUserMessages: options2.maxPrependedUserMessages ?? DEFAULT_MAX_PREPENDED_USER_MESSAGES,
            forcePrependedUserMessages: options2.forcePrependedUserMessages ?? false,
            onStateUpdate,
            initialCheckpointMode,
            recordInitialCheckpointOutcome
        });
        recordConversationInitMs(ctx, performance.now() - start);
        return result;
    }
    async handleSingleStep(parentCtx, action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate, options2 = {}) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource69(env_2, createSpan(parentCtx.withName("UserMessageActionHandler.handleSingleStep")), false);
            const ctx = span.ctx;
            if (options2.pausedGoalReactivation !== "suppress") {
                await reactivatePausedGoalForTurn(ctx, stateHandler, onStateUpdate);
            }
            const { turn, mergedMcpTools, requestContext } = await this.initAndMeasure(ctx, action, rootPromptExecutor, stateHandler, mcpTools, options2, onStateUpdate);
            const { hasToolCall } = await this.runSingleStep(ctx, rootPromptExecutor, stateHandler, turn, this.config.toolsGenerator, mergedMcpTools, requestContext.repositoryInfo, requestContext, onStateUpdate);
            return {
                state: await stateHandler.computeNewStructure(ctx),
                hasToolCall
            };
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources69(env_2);
        }
    }
    async handleModelStep(parentCtx, action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate, options2 = {}) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource69(env_3, createSpan(parentCtx.withName("UserMessageActionHandler.handleModelStep")), false);
            const ctx = span.ctx;
            if (options2.pausedGoalReactivation !== "suppress") {
                await reactivatePausedGoalForTurn(ctx, stateHandler, onStateUpdate);
            }
            const { turn, mergedMcpTools, requestContext, requestContextProvenance, deferredInitialCheckpoint } = await this.initAndMeasure(ctx, action, rootPromptExecutor, stateHandler, mcpTools, options2, onStateUpdate, this.config.initialCheckpointMode, this.config.recordInitialCheckpointOutcome);
            const onStateUpdateAfterInitialCheckpoint = deferredInitialCheckpoint === void 0 ? onStateUpdate : async (updateCtx, updatedState)=>{
                await deferredInitialCheckpoint.join();
                await onStateUpdate(updateCtx, updatedState);
            };
            const { toolCallDescriptors, splitStepData } = await (async ()=>{
                try {
                    return await this.runModelStep(ctx, rootPromptExecutor, stateHandler, turn, this.config.toolsGenerator, mergedMcpTools, requestContext.repositoryInfo, requestContext, onStateUpdateAfterInitialCheckpoint);
                } finally{
                    if (deferredInitialCheckpoint !== void 0) {
                        let failed = true;
                        try {
                            await deferredInitialCheckpoint.join();
                            failed = false;
                        } finally{
                            const completedAtMs = performance.now();
                            recordInitialCheckpointOutcomeSafely(ctx, deferredInitialCheckpoint.recordOutcome, {
                                applied: true,
                                checkpointMs: deferredInitialCheckpoint.timing.checkpointMs ?? completedAtMs - deferredInitialCheckpoint.startedAtMs,
                                joinWaitMs: deferredInitialCheckpoint.timing.joinWaitMs ?? 0,
                                failed
                            });
                        }
                    }
                }
            })();
            return {
                state: await stateHandler.computeNewStructure(ctx),
                toolCallDescriptors,
                splitStepData: {
                    ...splitStepData,
                    requestContextProvenance
                }
            };
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources69(env_3);
        }
    }
};

}
