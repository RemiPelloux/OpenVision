import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_background_summarization } from "./background-summarization.js";
import { DEFAULT_DETERMINISTIC_FALLBACK_WINDOW_RATIO, init_deterministic_summary_builder } from "./deterministic-summary-builder.js";
import { init_durable_blocks } from "./durable-blocks.js";
import { init_error_handling } from "./error-handling.js";
import { init_latest_image } from "./latest-image.js";
import { init_pipeline2 } from "./pipeline.js";
import { init_prepare_messages } from "./prepare-messages.js";
import { init_prompt_truncation } from "./prompt-truncation.js";
import { init_skill_persistence } from "./skill-persistence.js";
import { init_dist26 } from "../../chat-inference/dist/index.js";
import { InputTokenLimitError, OutputTokensLimitExceededError } from "../../chat-inference/dist/prompt-executor.js";
import { init_dist } from "../../context/dist/index.js";
import { createCounter, createHistogram } from "../../dist_exports.js";
import { appendDurableBlocks, buildDeterministicSummaryText, collectAllSkillBlocks, computeDeterministicFallbackMaxChars, createRedactedString, executeSummarizationWithRetry, findLatestImagePart, hasErrorName, isInjectedReminderMessage, isRedactedString, parseSummarizerModelLabel, prepareMessagesForCompaction, renderDurableBlocks, runSummarizationPipeline, toRedactedCoreMessage, toUserMessageImagePart, turnMessageToString } from "../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { PrivacyMode, init_privacy_mode_pb } from "../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
import { DataClassification } from "../../redaction/dist/classification.js";
import { init_dist27 } from "../../redaction/dist/index.js";
var import_node_fs32, import_node_os23, import_node_path71, logger43, MAX_TOOL_CONTENT_PART_CHARS, MAX_PROMPT_BYTES, MAX_SUMMARIZATION_RETRIES, TRANSIENT_SUMMARIZATION_RETRY_DELAY_MS, MIN_SUMMARIZATION_PROMPT_CHARS, INPUT_TOKENS_WARN_THRESHOLD, OUT_TOKENS_WARN_THRESHOLD, SHORTER_OUTPUT_RETRY_PROMPT, SUMMARIZATION_CURSOR_PROVIDER_OPTIONS, summarizationSuccess, summarizationAttempts, summarizationFailures, summarizationTryAttempts, summarizationTrySuccess, summarizationTryFailures, summarizationRetries, summaryLengthChars, summaryBlockingDurationMs, summarizationInputTokens, summarizationOutputTokens, summarizationCompressionPercent, summarizationOriginalLengthChars, summarizationPersistedLengthChars, summarizationTotalCompressionPercent, summarizationDeterministicFallbackUsed, summarizationFallbackAttempts, summarizationFallbackFailures, timeBetweenLastTwoMessagesMs, DEBUG_SUMMARIZATION_STRATEGY_FILE, SUMMARIZATION_SYSTEM_PROMPT, PREVIOUS_CONVERSATION_SUMMARY_PREFIX, SUMMARY_PRESERVED_IMAGE_NOTE, MORE_PROMPT, SummarizationHandler;
export { DEBUG_SUMMARIZATION_STRATEGY_FILE, INPUT_TOKENS_WARN_THRESHOLD, MAX_PROMPT_BYTES, MAX_SUMMARIZATION_RETRIES, MAX_TOOL_CONTENT_PART_CHARS, MIN_SUMMARIZATION_PROMPT_CHARS, MORE_PROMPT, OUT_TOKENS_WARN_THRESHOLD, PREVIOUS_CONVERSATION_SUMMARY_PREFIX, SHORTER_OUTPUT_RETRY_PROMPT, SUMMARIZATION_CURSOR_PROVIDER_OPTIONS, SUMMARIZATION_SYSTEM_PROMPT, SUMMARY_PRESERVED_IMAGE_NOTE, SummarizationHandler, TRANSIENT_SUMMARIZATION_RETRY_DELAY_MS, import_node_fs32, import_node_os23, import_node_path71, logger43, summarizationAttempts, summarizationCompressionPercent, summarizationDeterministicFallbackUsed, summarizationFailures, summarizationFallbackAttempts, summarizationFallbackFailures, summarizationInputTokens, summarizationOriginalLengthChars, summarizationOutputTokens, summarizationPersistedLengthChars, summarizationRetries, summarizationSuccess, summarizationTotalCompressionPercent, summarizationTryAttempts, summarizationTryFailures, summarizationTrySuccess, summaryBlockingDurationMs, summaryLengthChars, timeBetweenLastTwoMessagesMs };
var __wakaru_init_summarization_handler_initialized = false;
export function init_summarization_handler() {
if (__wakaru_init_summarization_handler_initialized) return;
__wakaru_init_summarization_handler_initialized = true;
"use strict";
import_node_fs32 = __toESM(require("node:fs"), 1);
import_node_os23 = __toESM(require("node:os"), 1);
import_node_path71 = __toESM(require("node:path"), 1);
init_dist26();
init_dist();
init_dist4();
init_privacy_mode_pb();
init_dist27();
init_background_summarization();
init_deterministic_summary_builder();
init_durable_blocks();
init_error_handling();
init_latest_image();
init_pipeline2();
init_prepare_messages();
init_prompt_truncation();
init_skill_persistence();
logger43 = createLogger("summarization-handler");
MAX_TOOL_CONTENT_PART_CHARS = 1e5;
MAX_PROMPT_BYTES = 9 * 1024 * 1024;
MAX_SUMMARIZATION_RETRIES = 3;
TRANSIENT_SUMMARIZATION_RETRY_DELAY_MS = 2e3;
MIN_SUMMARIZATION_PROMPT_CHARS = 5e4;
INPUT_TOKENS_WARN_THRESHOLD = 9e5;
OUT_TOKENS_WARN_THRESHOLD = 18e3;
SHORTER_OUTPUT_RETRY_PROMPT = `

Additional instruction: Write a shorter summary that focuses on the highest-signal context. Avoid long code snippets and avoid unnecessarily exhaustive detail. Prioritize the most recent user intent, recent implementation work, and unresolved blockers.
IMPORTANT: When listing user messages, you do not need to repeat each message verbatim. Concisely capture user intent.`;
SUMMARIZATION_CURSOR_PROVIDER_OPTIONS = {
    cursor: {
        inferenceReason: "agent-summarization",
        featureType: "agenticComposerSummary"
    }
};
summarizationSuccess = createCounter("agent.summarization.success", {
    description: "Successful summarizations",
    labelNames: [
        "invocation",
        "triggerReason",
        "model",
        "provider"
    ]
});
summarizationAttempts = createCounter("agent.summarization.attempts", {
    description: "Total summarization attempts",
    labelNames: [
        "invocation",
        "triggerReason",
        "model",
        "provider"
    ]
});
summarizationFailures = createCounter("agent.summarization.failures", {
    description: "Failed summarizations",
    labelNames: [
        "errorKind",
        "invocation",
        "triggerReason",
        "model",
        "provider"
    ]
});
summarizationTryAttempts = createCounter("agent.summarization.try.attempts", {
    description: "Per-try summarization attempts within the retry loop",
    labelNames: [
        "model",
        "provider"
    ]
});
summarizationTrySuccess = createCounter("agent.summarization.try.success", {
    description: "Per-try successful summarization attempts",
    labelNames: [
        "model",
        "provider"
    ]
});
summarizationTryFailures = createCounter("agent.summarization.try.failures", {
    description: "Per-try failed summarization attempts",
    labelNames: [
        "errorKind",
        "invocation",
        "triggerReason",
        "model",
        "provider"
    ]
});
summarizationRetries = createCounter("agent.summarization.retries", {
    description: "Total retries (attempts beyond the first) that actually executed",
    labelNames: [
        "errorKind"
    ]
});
summaryLengthChars = createHistogram("agent.summarization.summary_length_chars", {
    description: "Summary length in characters"
});
summaryBlockingDurationMs = createHistogram("agent.summarization.summary_blocking_duration_ms", {
    description: "Blocking duration of summarization"
});
summarizationInputTokens = createHistogram("agent.summarization.input_tokens", {
    description: "Input tokens consumed during summarization",
    labelNames: [
        "model",
        "provider"
    ]
});
summarizationOutputTokens = createHistogram("agent.summarization.output_tokens", {
    description: "Output tokens generated during summarization",
    labelNames: [
        "model",
        "provider"
    ]
});
summarizationCompressionPercent = createHistogram("agent.summarization.compression_percent", {
    description: "Percentage of tokens removed by summarization: (input - output) / input * 100",
    labelNames: [
        "model",
        "provider"
    ]
});
summarizationOriginalLengthChars = createHistogram("agent.summarization.original_length_chars", {
    description: "Total character length of all messages before summarization",
    labelNames: [
        "model",
        "provider"
    ]
});
summarizationPersistedLengthChars = createHistogram("agent.summarization.persisted_length_chars", {
    description: "Total character length of all messages persisted after summarization (system + userInfo + summary + preserved tail)",
    labelNames: [
        "model",
        "provider"
    ]
});
summarizationTotalCompressionPercent = createHistogram("agent.summarization.total_compression_percent", {
    description: "End-to-end compression percentage including preserved tail messages: (1 - persisted/original) * 100",
    labelNames: [
        "model",
        "provider"
    ]
});
summarizationDeterministicFallbackUsed = createCounter("agent.summarization.deterministic_fallback.used", {
    description: "WaitForCompletion summarizations that fell back to deterministic compaction after LLM retries exhausted",
    labelNames: [
        "errorKind",
        "triggerReason",
        "model",
        "provider"
    ]
});
summarizationFallbackAttempts = createCounter("agent.summarization.fallback_attempts", {
    description: "Summarization attempts where all summarization models are blocked and the main model is used as fallback"
});
summarizationFallbackFailures = createCounter("agent.summarization.fallback_failures", {
    description: "Failed summarizations where all summarization models are blocked and the main model is used as fallback",
    labelNames: [
        "errorKind",
        "invocation",
        "triggerReason"
    ]
});
timeBetweenLastTwoMessagesMs = createHistogram("agent.summarization.time_between_last_two_messages_ms", {
    description: "Time between last two messages in conversation"
});
DEBUG_SUMMARIZATION_STRATEGY_FILE = import_node_path71.default.join(import_node_os23.default.homedir(), "debug-summarization-strategy.txt");
SUMMARIZATION_SYSTEM_PROMPT = `You are an intelligent assistant, tasked with summarizing the following conversation. You MUST follow the instructions given in the <summarization_request> tags and summarize the conversation. This summary will be provided to another AI assistant to continue the task at hand, so you should align the summary with the task in the conversation.`;
PREVIOUS_CONVERSATION_SUMMARY_PREFIX = "[Previous conversation summary]:";
SUMMARY_PRESERVED_IMAGE_NOTE = "[Latest screenshot]: The image below is the most recent screenshot from the summarized conversation, captured before the summary above was created. Use it to continue from the last known visual state; take a fresh screenshot if you need to confirm the current state.";
MORE_PROMPT = `What you see above is the conversation so far, rendered as a transcript. Previous user messages, previous assistant messages, and tool calls are shown in tags, while the original system prompt has been removed. The content in the tags has been rendered exactly as it was in the original conversation.

Your task is to create a detailed summary of the conversation so far, paying close attention to the user's explicit requests and your previous actions. This summary will be provided to another AI assistant to continue the task at hand, so you should align the summary with the task in the conversation above. So you should NEVER refer to summarization in your summary, just an output that could be used to continue the task.

This summary should be thorough in capturing technical details, code patterns, and architectural decisions
that would be essential for continuing development work without losing context.

1. Chronologically analyze each message and section of the conversation. For each section thoroughly identify:
   - The user's explicit requests and intents
   - Your approach to addressing the user's requests
   - Key decisions, technical concepts and code patterns
   - Specific details like:
   - file names
   - full code snippets
   - function signatures
   - file edits
- Errors that you ran into and how you fixed them
- Pay special attention to specific user feedback that you received, especially if the user told you to do
something differently.
2. Double-check for technical accuracy and completeness, addressing each required element thoroughly.

Your summary should include the following sections:

1. Primary Request and Intent: Capture all of the user's explicit requests and intents in detail
2. Key Technical Concepts: List all important technical concepts, technologies, and frameworks discussed.
3. Files and Code Sections: Enumerate specific files and code sections examined, modified, or created. Pay special attention to the most recent messages and include full code snippets where applicable and include a summary of why this file read or edit is important.
4. Errors and fixes: List all errors that you ran into, and how you fixed them. Pay special attention to specific user feedback that you received, especially if the user told you to do something differently.
5. Problem Solving: Document problems solved and any ongoing troubleshooting efforts.
6. All user messages: List ALL user messages that are not tool results or subagent prompts/results. These are critical for understanding the users' feedback and changing intent.
7. Pending Tasks: Outline any pending tasks that you have explicitly been asked to work on.
8. Current Work: Describe in detail precisely what was being worked on immediately before this summary request, paying special attention to the most recent messages from both user and assistant. Include file names and code snippets where applicable.
9. Optional Next Step: List the next step that you will take that is related to the most recent work you were doing. IMPORTANT: ensure that this step is DIRECTLY in line with the user's explicit requests, and the task you were working on immediately before this summary request. If your last task was concluded, then only list next steps if they are explicitly in line with the users request. Do not start on tangential requests or really old requests that were already completed.
10. Active Subscriptions and Waiting On: List every event subscription created in the conversation that has not been unsubscribed or reported closed (subscribe_* tool results, list_subscriptions output), with its subscription id, type, and target (PR URL or number, repo and branch, channel, issue, timer) verbatim, plus what you are waiting for from each (a CI result, a review, a reply). Subscribed events arrive as notifications when the turn ends, so also note anything else the conversation is waiting on externally. Write "None" if there are no active subscriptions; never invent ids.

If there is a next step, include direct quotes from the most recent conversation
showing exactly what task you were working on and where you left off. This should be verbatim to ensure
there's no drift in task interpretation.

Here's an example of how your output should be structured:

<example>
Summary:
1. Primary Request and Intent:
   [Detailed description]

2. Key Technical Concepts:
   - [Concept 1]
   - [Concept 2]
   - [...]

3. Files and Code Sections:
   - [File Name 1]
      - [Summary of why this file is important]
      - [Summary of the changes made to this file, if any]
      - [Important Code Snippet]
   - [File Name 2]
      - [Important Code Snippet]
   - [...]

4. Errors and fixes:
   - [Detailed description of error 1]:
      - [How you fixed the error]
      - [User feedback on the error if any]
   - [...]

5. Problem Solving:
   [Description of solved problems and ongoing troubleshooting]

6. All user messages:
   - [Detailed non tool use, non subagent user message]
   - [...]

7. Pending Tasks:
   - [Task 1]
   - [Task 2]
   - [...]

8. Current Work:
   [Precise description of current work]

9. Optional Next Step:
   [Optional Next step to take]

10. Active Subscriptions and Waiting On:
   - [subscription id] ([type], [target]): [what you are waiting for]
   - [...]
</example>

Please provide your summary based on the conversation so far, following this structure and ensuring precision and thoroughness in your response.`;
SummarizationHandler = class {
    constructor(promptSession, isFallbackToMainModel = false, options2){
        this.promptSession = promptSession;
        this.isFallbackToMainModel = isFallbackToMainModel;
        this.enableReduceInputsRetry = options2?.enableReduceInputsRetry ?? false;
        this.enableRetryUncategorizedErrors = options2?.enableRetryUncategorizedErrors ?? true;
        this.throwOnRetryExhaustion = options2?.throwOnRetryExhaustion ?? false;
        this.maxPromptChars = options2?.maxPromptChars;
        this.useRelaxedSplitIndexGuard = options2?.useRelaxedSplitIndexGuard ?? false;
        this.preserveLastUserMessage = options2?.preserveLastUserMessage ?? true;
        this.alwaysRetryOutputTokenLimit = options2?.alwaysRetryOutputTokenLimit ?? true;
        this.preserveLatestImage = options2?.preserveLatestImage ?? false;
        this.enableDeterministicFallback = options2?.enableDeterministicFallback ?? false;
        this.deterministicFallbackWindowRatio = options2?.deterministicFallbackWindowRatio ?? DEFAULT_DETERMINISTIC_FALLBACK_WINDOW_RATIO;
        this.maxOutputTokens = this.isFallbackToMainModel ? void 0 : options2?.maxOutputTokens;
    }
    getModelId() {
        return this.promptSession.getModelId();
    }
    getMetricsModelLabel() {
        return this.getMetricsLabels().model;
    }
    getMetricsLabels() {
        return parseSummarizerModelLabel(this.promptSession.getModelId());
    }
    partitionMessages(messages, options2) {
        const { systemMessage, userInfoMessage, messagesForSummarization } = prepareMessagesForCompaction(messages);
        let splitIndex = -1;
        for(let i = messagesForSummarization.length - 1; i >= 0; i--){
            const message = messagesForSummarization[i];
            if (message.role === "user" && !isInjectedReminderMessage(message)) {
                splitIndex = i;
                break;
            }
        }
        const splitGuardThreshold = this.useRelaxedSplitIndexGuard ? 0 : 1;
        if (splitIndex <= splitGuardThreshold || options2.fullSummarization) {
            splitIndex = messagesForSummarization.length;
        }
        const preserveLastUser = this.preserveLastUserMessage && options2.fullSummarization !== true;
        const summarizeEnd = preserveLastUser ? splitIndex + 1 : splitIndex;
        const messagesToSummarize = messagesForSummarization.slice(0, summarizeEnd);
        let preservedTailMessages = messagesForSummarization.slice(splitIndex);
        if (preserveLastUser && preservedTailMessages.length === 0 && messagesToSummarize.length > 0) {
            let lastUserIndex = -1;
            for(let i = messagesToSummarize.length - 1; i >= 0; i--){
                const m2 = messagesToSummarize[i];
                if (m2.role === "user" && m2.providerOptions?.cursor?.isSummary !== true && !isInjectedReminderMessage(m2)) {
                    lastUserIndex = i;
                    break;
                }
            }
            if (lastUserIndex !== -1 && lastUserIndex !== messagesToSummarize.length - 1) {
                preservedTailMessages = [
                    messagesToSummarize[lastUserIndex]
                ];
            }
        }
        const skillBlocks = collectAllSkillBlocks(messagesForSummarization);
        return {
            systemMessage,
            userInfoMessage,
            messagesToSummarize,
            preservedTailMessages,
            skillBlocks
        };
    }
    async generateSummary(ctx, partitioned, options2) {
        const result = await executeSummarizationWithRetry(ctx, this.promptSession, partitioned.messagesToSummarize, {
            isFallbackToMainModel: this.isFallbackToMainModel,
            enableReduceInputsRetry: this.enableReduceInputsRetry,
            enableRetryUncategorizedErrors: this.enableRetryUncategorizedErrors,
            enableRetryOutputTokenLimit: options2.enableRetryOutputTokenLimit ?? this.alwaysRetryOutputTokenLimit,
            throwOnRetryExhaustion: this.throwOnRetryExhaustion,
            maxPromptChars: this.maxPromptChars,
            backgroundSummarizationMode: options2.backgroundSummarizationMode,
            triggerReason: options2.triggerReason,
            maxOutputTokens: this.maxOutputTokens,
            cancellationToken: options2.cancellationToken
        });
        if (this.shouldUseDeterministicFallback(result) && partitioned.messagesToSummarize.length > 0) {
            const fallbackText = this.buildDeterministicFallbackText(ctx, partitioned, options2, result.errorKind);
            if (fallbackText !== null) {
                return {
                    ...result,
                    text: fallbackText,
                    isPlaceholder: false
                };
            }
        }
        return result;
    }
    shouldUseDeterministicFallback(result) {
        if (!this.enableDeterministicFallback) {
            return false;
        }
        if (!result.hadError) {
            return false;
        }
        const errorKind = result.errorKind;
        if (errorKind === "Cancelled") {
            return false;
        }
        if (errorKind?.toLowerCase().includes("abort")) {
            return false;
        }
        return true;
    }
    buildDeterministicFallbackText(ctx, partitioned, options2, errorKind) {
        const { model: metricsModel, provider: metricsProvider } = this.getMetricsLabels();
        const maxChars = computeDeterministicFallbackMaxChars(options2.contextWindowTokens, this.deterministicFallbackWindowRatio);
        const built = buildDeterministicSummaryText(ctx, partitioned.messagesToSummarize, {
            maxChars
        });
        if (built === null) {
            logger43.warn(ctx, "[summarization-handler] Deterministic fallback could not fit within budget; falling through to placeholder", {
                summarization: {
                    model: metricsModel,
                    triggerReason: options2.triggerReason,
                    backgroundSummarizationMode: options2.backgroundSummarizationMode,
                    errorKind: errorKind ?? "unknown",
                    contextWindowTokens: options2.contextWindowTokens,
                    windowRatio: this.deterministicFallbackWindowRatio,
                    maxChars,
                    totalMessages: partitioned.messagesToSummarize.length
                }
            });
            return null;
        }
        summarizationDeterministicFallbackUsed.increment(ctx, 1, {
            errorKind: errorKind ?? "unknown",
            triggerReason: options2.triggerReason,
            model: metricsModel,
            provider: metricsProvider
        });
        logger43.info(ctx, "[summarization-handler] Deterministic fallback produced summary", {
            summarization: {
                model: metricsModel,
                triggerReason: options2.triggerReason,
                backgroundSummarizationMode: options2.backgroundSummarizationMode,
                errorKind: errorKind ?? "unknown",
                contextWindowTokens: options2.contextWindowTokens,
                windowRatio: this.deterministicFallbackWindowRatio,
                maxChars,
                fallbackTextLength: built.text.length,
                fullyPreservedMessageCount: built.fullyPreservedMessageCount,
                truncatedCount: built.truncatedCount,
                droppedCount: built.droppedCount,
                totalMessages: partitioned.messagesToSummarize.length
            }
        });
        return built.text;
    }
    buildSummaryMessage(rawSummary, partitioned, enrichments, options2) {
        const durableBlocks = renderDurableBlocks("external", enrichments);
        const summary = rawSummary.text + appendDurableBlocks("external", durableBlocks);
        const carrierContent = `${PREVIOUS_CONVERSATION_SUMMARY_PREFIX} ${summary}`;
        const privacyMode = options2?.privacyMode ?? partitioned.messagesToSummarize[0]?._privacyMode ?? partitioned.systemMessage?._privacyMode ?? PrivacyMode.UNSPECIFIED;
        const preservedImage = this.preserveLatestImage && findLatestImagePart(partitioned.preservedTailMessages) === null ? findLatestImagePart(partitioned.messagesToSummarize) : null;
        const carrierMessage = preservedImage === null ? {
            role: "user",
            content: carrierContent,
            providerOptions: {
                cursor: {
                    isSummary: true
                }
            }
        } : {
            role: "user",
            content: [
                {
                    type: "text",
                    text: carrierContent
                },
                {
                    type: "text",
                    text: SUMMARY_PRESERVED_IMAGE_NOTE
                },
                toUserMessageImagePart(preservedImage)
            ],
            providerOptions: {
                cursor: {
                    isSummary: true
                }
            }
        };
        return {
            message: toRedactedCoreMessage(carrierMessage, privacyMode),
            summaryTextLength: carrierContent.length
        };
    }
    assembleFinalMessages(partitioned, summaryMessage) {
        return [
            ...partitioned.systemMessage ? [
                partitioned.systemMessage
            ] : [],
            ...partitioned.userInfoMessage ? [
                partitioned.userInfoMessage
            ] : [],
            summaryMessage,
            ...partitioned.preservedTailMessages
        ];
    }
    async summarize(ctx, messages, options2) {
        if (!messages.find((message)=>message.role === "system")) {
            logger43.warn(ctx, "Compaction input has no system message", {
                summarization: {
                    messagesCount: messages.length
                }
            });
        }
        const { userInfoMessage } = prepareMessagesForCompaction(messages);
        if (!userInfoMessage) {
            logger43.warn(ctx, "Compaction input has no userInfo message", {
                summarization: {
                    messagesCount: messages.length
                }
            });
        }
        const summarizationLogFields = {
            summarizationMode: options2.backgroundSummarizationMode,
            triggerReason: options2.triggerReason,
            model: this.getMetricsModelLabel()
        };
        const startTime = performance.now();
        let timeBetweenMessages;
        if (messages.length >= 2) {
            const lastMsg = messages[messages.length - 1];
            const secondLastMsg = messages[messages.length - 2];
            if ("timestamp" in lastMsg && "timestamp" in secondLastMsg) {
                const lastTime = lastMsg.timestamp;
                const secondLastTime = secondLastMsg.timestamp;
                if (typeof lastTime === "number" && typeof secondLastTime === "number") {
                    timeBetweenMessages = lastTime - secondLastTime;
                }
            }
        }
        try {
            const pipelineResult = await runSummarizationPipeline(this, ctx, messages, options2);
            const { rawSummary, summaryTextLength } = pipelineResult;
            const durationMs2 = performance.now() - startTime;
            this.recordMetrics(ctx, {
                rawSummary,
                durationMs: durationMs2,
                timeBetweenMessages,
                originalMessages: messages,
                fullReplacementMessages: pipelineResult.fullReplacementMessages,
                summaryTextLength
            });
            const content = pipelineResult.newSummaryMessage.content;
            let carrierText;
            if (isRedactedString(content)) {
                carrierText = content;
            } else if (Array.isArray(content)) {
                for (const part of content){
                    if (part.type === "text" && isRedactedString(part.text)) {
                        carrierText = part.text;
                        break;
                    }
                }
            }
            const summaryPrefix = `${PREVIOUS_CONVERSATION_SUMMARY_PREFIX} `;
            const summary = carrierText !== void 0 ? carrierText.safeTransform((summaryText)=>summaryText.startsWith(summaryPrefix) ? summaryText.slice(summaryPrefix.length) : summaryText) : createRedactedString(pipelineResult.rawSummary.text, DataClassification.CODE, "summary", options2.privacyMode ?? messages[0]?._privacyMode ?? PrivacyMode.UNSPECIFIED);
            const hadError = pipelineResult.rawSummary.hadError === true;
            logger43.info(ctx, "[summarization-handler] Summarization completed", {
                summarization: {
                    ...summarizationLogFields,
                    durationMs: durationMs2,
                    hadError,
                    errorKind: pipelineResult.rawSummary.errorKind
                }
            });
            return {
                ...pipelineResult,
                summary: {
                    summary
                },
                hadError,
                errorKind: pipelineResult.rawSummary.errorKind,
                isPlaceholder: pipelineResult.rawSummary.isPlaceholder === true
            };
        } catch (error3) {
            const durationMs2 = performance.now() - startTime;
            summaryBlockingDurationMs.histogram(ctx, durationMs2);
            if (timeBetweenMessages !== void 0) {
                timeBetweenLastTwoMessagesMs.histogram(ctx, timeBetweenMessages);
            }
            logger43.error(ctx, "[summarization-handler] Summarize pipeline failed", error3, {
                summarization: summarizationLogFields
            });
            throw error3;
        }
    }
    recordMetrics(ctx, params) {
        const { rawSummary, durationMs: durationMs2, timeBetweenMessages } = params;
        summaryBlockingDurationMs.histogram(ctx, durationMs2);
        summaryLengthChars.histogram(ctx, params.summaryTextLength);
        const { model, provider } = this.getMetricsLabels();
        if (rawSummary.inputTokens !== void 0) {
            summarizationInputTokens.histogram(ctx, rawSummary.inputTokens, {
                model,
                provider
            });
            if (rawSummary.inputTokens > INPUT_TOKENS_WARN_THRESHOLD) {
                logger43.warn(ctx, "[summarization-handler] Summarization input tokens are very high", {
                    summarization: {
                        inputTokens: rawSummary.inputTokens,
                        outputTokens: rawSummary.outputTokens,
                        durationMs: durationMs2,
                        model
                    }
                });
            }
        }
        if (rawSummary.outputTokens !== void 0) {
            summarizationOutputTokens.histogram(ctx, rawSummary.outputTokens, {
                model,
                provider
            });
            if (rawSummary.outputTokens > OUT_TOKENS_WARN_THRESHOLD) {
                logger43.warn(ctx, "[summarization-handler] Summarization output tokens are very high", {
                    summarization: {
                        inputTokens: rawSummary.inputTokens,
                        outputTokens: rawSummary.outputTokens,
                        durationMs: durationMs2,
                        model
                    }
                });
            }
        }
        if (rawSummary.inputTokens !== void 0 && rawSummary.outputTokens !== void 0 && rawSummary.inputTokens > 0) {
            const pctRemoved = (rawSummary.inputTokens - rawSummary.outputTokens) / rawSummary.inputTokens * 100;
            summarizationCompressionPercent.histogram(ctx, pctRemoved, {
                model,
                provider
            });
        }
        if (timeBetweenMessages !== void 0) {
            timeBetweenLastTwoMessagesMs.histogram(ctx, timeBetweenMessages);
        }
        const originalLengthChars = this.totalRawSerializedCharLength(params.originalMessages);
        const persistedLengthChars = this.totalRawSerializedCharLength(params.fullReplacementMessages);
        summarizationOriginalLengthChars.histogram(ctx, originalLengthChars, {
            model,
            provider
        });
        summarizationPersistedLengthChars.histogram(ctx, persistedLengthChars, {
            model,
            provider
        });
        if (originalLengthChars > 0) {
            const compressionPercent = (originalLengthChars - persistedLengthChars) / originalLengthChars * 100;
            summarizationTotalCompressionPercent.histogram(ctx, compressionPercent, {
                model,
                provider
            });
        }
    }
    totalRawSerializedCharLength(messages) {
        let total = 0;
        for (const message of messages){
            total += turnMessageToString(message, false).length;
        }
        return total;
    }
    static isTokenLimitError(error3) {
        return error3 instanceof InputTokenLimitError;
    }
    static isInputOrOutputTokenLimitError(error3) {
        return error3 instanceof InputTokenLimitError || hasErrorName(error3, "InputTokenLimitError") || error3 instanceof OutputTokensLimitExceededError || hasErrorName(error3, "OutputTokensLimitExceededError");
    }
};

}
