import { RedactedUpdates } from "../../../agent-core/dist/redacted-interaction-updates.js";
import { init_server } from "../../../agent-core/dist/server.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { BackgroundSummarizationMode } from "../../../agent-summarization/dist/background-summarization.js";
import { init_dist29 } from "../../../agent-summarization/dist/index.js";
import { init_common12 } from "./common.js";
import { init_meta_agent_notes } from "./meta-agent-notes.js";
import { init_summarization_tool_context } from "./summarization-tool-context.js";
import { init_token_estimate2 } from "../self-summary/token-estimate.js";
import { FileOperationLockManager, init_file_operation_lock_manager } from "../tools/core/file-operation-lock-manager.js";
import { init_prompt_token_breakdown } from "../utils/prompt-token-breakdown.js";
import { init_request_context4 } from "../utils/request-context.js";
import { init_dist } from "../../../context/dist/index.js";
import { buildRequestContextOptions, buildSummarizationToolContext, buildSummarizeRefreshSnapshot, createRedactedConversationSummary, createRedactedConversationTokenDetails, estimateTokenCount2, extractAutomationTriggerContext, fromRedactedPromptTokenBreakdownSnapshot, getRequestContext, settledUnlessAborted, summarizedConversationCharCount, toRedactedCoreMessages, toRedactedPromptTokenBreakdownSnapshot } from "../../../mcp_sandbox_policy_exports.js";
import { AgentMode, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_agent_v1 } from "../../../redacted-protos/dist/agent-v1.js";
import { PrivacyCapability } from "../../../redaction/dist/classification.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var logger81, SummarizeActionHandler;
export { SummarizeActionHandler, logger81 };
var __wakaru_init_summarize_action_handler_initialized = false;
export function init_summarize_action_handler() {
if (__wakaru_init_summarize_action_handler_initialized) return;
__wakaru_init_summarize_action_handler_initialized = true;
"use strict";
init_server();
init_dist29();
init_dist();
init_agent_pb();
init_agent_v1();
init_dist27();
init_token_estimate2();
init_file_operation_lock_manager();
init_prompt_token_breakdown();
init_request_context4();
init_common12();
init_meta_agent_notes();
init_summarization_tool_context();
logger81 = createLogger("@anysphere/agent:summarize");
SummarizeActionHandler = class {
    constructor(config2, resourceAccessor, interactionListener, orchestrator, conversationActionReceiver){
        this.config = config2;
        this.resourceAccessor = resourceAccessor;
        this.interactionListener = interactionListener;
        this.orchestrator = orchestrator;
        this.conversationActionReceiver = conversationActionReceiver;
    }
    async handle(ctx, _action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate) {
        const hasAnyMessages = rootPromptExecutor.getMessages().length > 0;
        if (!hasAnyMessages) {
            return await stateHandler.computeNewStructure(ctx);
        }
        const hasSystem = rootPromptExecutor.getMessages().some((m2)=>m2.role === "system");
        if (!hasSystem) {
            const requestContext2 = await getRequestContext(ctx, void 0, this.resourceAccessor, buildRequestContextOptions(this.config));
            const toolSetHandle = this.config.toolsGenerator({
                resourceAccessor: this.resourceAccessor,
                stateHandler,
                agentSessionId: this.config.agentSessionId,
                mcpTools: [],
                repositoryInfos: requestContext2.repositoryInfo,
                blobStore: stateHandler.getBlobStore(),
                mode: stateHandler.mode ?? AgentMode.AGENT,
                loggingContext: ctx,
                requestContext: requestContext2,
                fileOperationLockManager: new FileOperationLockManager(),
                smartModeClassifierMode: this.config.smartModeClassifierMode,
                smartModeClassifierShadowMode: this.config.smartModeClassifierShadowMode,
                autoRejectFirstAskQuestion: this.config.autoRejectFirstAskQuestion
            });
            rootPromptExecutor.appendMessages(toRedactedCoreMessages([
                {
                    role: "system",
                    content: this.config.systemPromptGenerator({
                        cursorRules: [],
                        mode: stateHandler.mode ?? AgentMode.AGENT
                    }, toolSetHandle)
                }
            ], stateHandler.getPrivacyMode()));
        }
        const requestContext = await getRequestContext(ctx, void 0, this.resourceAccessor, buildRequestContextOptions(this.config));
        const automationTriggerContext = this.config.automationInstructions !== void 0 ? extractAutomationTriggerContext(rootPromptExecutor.getMessages()) : void 0;
        if (this.config.summarizeActionMode === "threshold") {
            return await this.launchThresholdShapedSummary(ctx, stateHandler, rootPromptExecutor, mcpTools, requestContext, automationTriggerContext);
        }
        const summary = await this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
            fullSummarization: true,
            backgroundSummarizationMode: BackgroundSummarizationMode.WaitForCompletion,
            triggerReason: "force_option",
            resourceAccessor: this.resourceAccessor,
            automationTriggerContext
        });
        if (!summary) {
            throw new Error("No summary generated, even though background summarization mode is WaitForCompletion");
        }
        stateHandler.setSummary(createRedactedConversationSummary(stateHandler.getPrivacyMode(), {
            summary
        }));
        await this.interactionListener.sendUpdate(ctx, RedactedUpdates.summary(summary));
        if (this.config.summarizeActionClearTurns) {
            await stateHandler.clearTurns();
        }
        const postSummarizeMessages = rootPromptExecutor.getMessages();
        const estimatedUsedTokens = estimateTokenCount2(postSummarizeMessages);
        const previousRedactedBreakdown = stateHandler.tokenDetails.breakdown;
        const refreshedBreakdown = previousRedactedBreakdown !== void 0 ? toRedactedPromptTokenBreakdownSnapshot(buildSummarizeRefreshSnapshot({
            previousSnapshot: fromRedactedPromptTokenBreakdownSnapshot(previousRedactedBreakdown, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED),
            newSummarizedConversationCharCount: summarizedConversationCharCount(postSummarizeMessages),
            totalUsedTokens: estimatedUsedTokens,
            maxTokens: stateHandler.tokenDetails.maxTokens
        }), stateHandler.getPrivacyMode()) : previousRedactedBreakdown;
        stateHandler.setTokenDetails(createRedactedConversationTokenDetails(stateHandler.getPrivacyMode(), {
            usedTokens: estimatedUsedTokens,
            maxTokens: stateHandler.tokenDetails.maxTokens,
            breakdown: refreshedBreakdown,
            promptContextUsageTree: stateHandler.tokenDetails.promptContextUsageTree
        }));
        if (onStateUpdate) {
            if (this.config.fireAndForgetCheckpoints) {
                void stateHandler.computeNewStructure(ctx).then(async (checkpoint)=>{
                    await onStateUpdate(ctx, checkpoint);
                }).catch((error3)=>{
                    logger81.error(ctx, "Failed to persist summarization checkpoint", {
                        error: error3
                    });
                });
            } else {
                const checkpoint = await stateHandler.computeNewStructure(ctx);
                await onStateUpdate(ctx, checkpoint);
            }
        }
        return await stateHandler.computeNewStructure(ctx);
    }
    async launchThresholdShapedSummary(ctx, stateHandler, rootPromptExecutor, mcpTools, requestContext, automationTriggerContext) {
        const { tools, extraT, descriptionProps } = await buildSummarizationToolContext({
            ctx,
            config: this.config,
            toolsGenerator: this.config.toolsGenerator,
            resourceAccessor: this.resourceAccessor,
            stateHandler,
            mode: stateHandler.mode ?? AgentMode.AGENT,
            mcpTools,
            repositoryInfos: requestContext.repositoryInfo,
            requestContext,
            fileOperationLockManager: new FileOperationLockManager(),
            contextInjectionSignal: this.conversationActionReceiver.getContextInjectionToolSignal?.()
        });
        const options2 = {
            triggerReason: "idle_timer",
            currentInvocationId: stateHandler.lastStepInvocationId,
            resourceAccessor: this.resourceAccessor,
            automationTriggerContext,
            tools,
            extraT,
            descriptionProps
        };
        await this.orchestrator.handleSummarization(ctx.withDetached(), stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
            ...options2,
            backgroundSummarizationMode: BackgroundSummarizationMode.Background
        });
        const launched = stateHandler.backgroundSummarizationPromiseInfo;
        const token = stateHandler.backgroundSummarizationCancellationToken;
        if (launched === null || token === null) {
            return await stateHandler.computeNewStructure(ctx);
        }
        const completed = await settledUnlessAborted(launched.promise, ctx.signal);
        if (completed !== void 0 && completed.hadError !== true && stateHandler.backgroundSummarizationPromiseInfo === launched) {
            await this.orchestrator.handleSummarization(ctx, stateHandler, rootPromptExecutor, this.interactionListener, this.config, requestContext, {
                ...options2,
                backgroundSummarizationMode: BackgroundSummarizationMode.WaitForCompletionIfStarted
            });
            return await stateHandler.computeNewStructure(ctx);
        }
        launched.promise.catch((error3)=>{
            logger81.error(ctx, "Idle background summarization failed", {
                error: error3,
                model: launched.modelId
            });
        }).finally(()=>{
            token.cancelled = true;
            token.onCancelled?.();
        });
        return await stateHandler.computeNewStructure(ctx);
    }
};

}
