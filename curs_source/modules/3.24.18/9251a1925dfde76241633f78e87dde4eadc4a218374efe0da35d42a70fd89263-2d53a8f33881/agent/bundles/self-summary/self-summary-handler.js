import { init_server } from "../../../agent-core/dist/server.js";
import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist29 } from "../../../agent-summarization/dist/index.js";
import { SUMMARIZATION_CURSOR_PROVIDER_OPTIONS } from "../../../agent-summarization/dist/summarization-handler.js";
import { init_interaction_handler } from "../interaction-handler.js";
import { init_constants5 } from "./constants.js";
import { init_self_summary } from "./self-summary.js";
import { init_core5 } from "../tools/core.js";
import { init_invocation_id } from "../utils/invocation-id.js";
import { init_request_id } from "../utils/request-id.js";
import { init_dist } from "../../../context/dist/index.js";
import { createCounter, createHistogram } from "../../../dist_exports.js";
import { appendDurableBlocks, collectAllSkillBlocks, createRedactedString, executeSelfSummaryWithRetry, extractTextContent, findLastUserMessageIndex2, fromRedactedCoreMessage, getMembershipTypeMetricTagsFromContext, prepareMessagesForCompaction, prependDurableBlocks, renderDurableBlocks, runSummarizationPipeline, safeString, selectUserDeliveryTail, selfSummarizationPromptForVariant, toRedactedCoreMessage } from "../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
import { DataClassification, PrivacyCapability } from "../../../redaction/dist/classification.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var __addDisposableResource51, __disposeResources51, logger53, TRANSIENT_SELF_SUMMARY_RETRY_DELAY_MS, TOOL_MESSAGE_DROP_THRESHOLD, selfSummaryInputTokens, selfSummaryOutputTokens, selfSummaryCacheReadTokens, selfSummaryCacheWriteTokens, selfSummaryTimeTakenMs, selfSummaryStatus, selfSummaryTryAttempts, selfSummaryTrySuccess, selfSummaryTryFailures, selfSummaryRetries, selfSummaryUnexpectedToolCalls, SelfSummarizer;
export { SelfSummarizer, TOOL_MESSAGE_DROP_THRESHOLD, TRANSIENT_SELF_SUMMARY_RETRY_DELAY_MS, __addDisposableResource51, __disposeResources51, logger53, selfSummaryCacheReadTokens, selfSummaryCacheWriteTokens, selfSummaryInputTokens, selfSummaryOutputTokens, selfSummaryRetries, selfSummaryStatus, selfSummaryTimeTakenMs, selfSummaryTryAttempts, selfSummaryTryFailures, selfSummaryTrySuccess, selfSummaryUnexpectedToolCalls };
var __wakaru_init_self_summary_handler_initialized = false;
export function init_self_summary_handler() {
if (__wakaru_init_self_summary_handler_initialized) return;
__wakaru_init_self_summary_handler_initialized = true;
"use strict";
init_server();
init_dist29();
init_dist();
init_dist4();
init_dist27();
init_dist3();
init_interaction_handler();
init_core5();
init_invocation_id();
init_request_id();
init_constants5();
init_self_summary();
__addDisposableResource51 = function(env, value, async) {
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
__disposeResources51 = (function(SuppressedError2) {
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
logger53 = createLogger("@anysphere/agent");
TRANSIENT_SELF_SUMMARY_RETRY_DELAY_MS = 2e3;
TOOL_MESSAGE_DROP_THRESHOLD = 0.25;
selfSummaryInputTokens = createHistogram("self_summary.input_token", {
    description: "Input tokens consumed during self-summarization",
    labelNames: [
        "membershiptype"
    ]
});
selfSummaryOutputTokens = createHistogram("self_summary.output_token", {
    description: "Output tokens generated during self-summarization",
    labelNames: [
        "membershiptype"
    ]
});
selfSummaryCacheReadTokens = createHistogram("self_summary.cache_read_token", {
    description: "Cache read tokens during self-summarization",
    labelNames: [
        "membershiptype"
    ]
});
selfSummaryCacheWriteTokens = createHistogram("self_summary.cache_write_token", {
    description: "Cache write tokens during self-summarization",
    labelNames: [
        "membershiptype"
    ]
});
selfSummaryTimeTakenMs = createHistogram("self_summary.time_taken_ms", {
    description: "Time taken for self-summarization in milliseconds",
    labelNames: [
        "membershiptype"
    ]
});
selfSummaryStatus = createCounter("self_summary.status", {
    description: "Count of self-summary attempts and their outcomes",
    labelNames: [
        "outcome",
        "errorKind",
        "membershiptype",
        "maxmode"
    ]
});
selfSummaryTryAttempts = createCounter("self_summary.try.attempts", {
    description: "Per-try self-summary attempts within the retry loop",
    labelNames: [
        "membershiptype"
    ]
});
selfSummaryTrySuccess = createCounter("self_summary.try.success", {
    description: "Per-try successful self-summary attempts",
    labelNames: [
        "membershiptype"
    ]
});
selfSummaryTryFailures = createCounter("self_summary.try.failures", {
    description: "Per-try failed self-summary attempts",
    labelNames: [
        "errorKind",
        "membershiptype"
    ]
});
selfSummaryRetries = createCounter("self_summary.retries", {
    description: "Total retries (attempts beyond the first) that actually executed",
    labelNames: [
        "errorKind",
        "membershiptype"
    ]
});
selfSummaryUnexpectedToolCalls = createCounter("self_summary.unexpected_tool_calls", {
    description: "Count of unexpected tool calls detected in self-summary response",
    labelNames: [
        "membershiptype"
    ]
});
SelfSummarizer = class {
    constructor(promptSession, stateHandler, interactionListener, tools, extraT, modelId, retryOptions, enableTranscriptEnrichment, promptVariant, deliveryTail){
        this.promptSession = promptSession;
        this.stateHandler = stateHandler;
        this.interactionListener = interactionListener;
        this.tools = tools;
        this.extraT = extraT;
        this.modelId = modelId;
        this.deliveryTail = deliveryTail;
        this.retryOptions = retryOptions ?? {};
        this.enableTranscriptEnrichment = enableTranscriptEnrichment ?? false;
        this.summarizationPrompt = selfSummarizationPromptForVariant(promptVariant);
    }
    getModelId() {
        return this.modelId;
    }
    getMetricsModelLabel() {
        return this.modelId;
    }
    partitionMessages(messages, options2) {
        if (messages.length < 3) {
            throw new Error(`Self-summary requires at least 3 messages, got ${messages.length}`);
        }
        const { systemMessage, userInfoMessage, messagesForSummarization } = prepareMessagesForCompaction(messages);
        if (!systemMessage || systemMessage.role !== "system") {
            throw new Error("Expected system message in conversation");
        }
        const lastUserIdx = findLastUserMessageIndex2(messages);
        const lastUserQuery2 = messages[lastUserIdx];
        const deliveryTail = lastUserQuery2 !== void 0 && this.deliveryTail !== void 0 && this.deliveryTail.triggerReasons.includes(options2.triggerReason) ? selectUserDeliveryTail(messages.slice(lastUserIdx + 1), this.deliveryTail) : [];
        const skillBlocks = collectAllSkillBlocks(messagesForSummarization);
        return {
            systemMessage,
            userInfoMessage,
            messagesToSummarize: messagesForSummarization,
            preservedTailMessages: lastUserQuery2 ? [
                lastUserQuery2,
                ...deliveryTail
            ] : [],
            skillBlocks
        };
    }
    async generateSummary(ctx, partitioned, _options) {
        if (!partitioned.systemMessage) {
            throw new Error("Expected system message in conversation");
        }
        const privacySource = partitioned.preservedTailMessages[0] ?? partitioned.userInfoMessage ?? partitioned.systemMessage;
        const summarizationInputMessages = [
            partitioned.systemMessage,
            ...partitioned.userInfoMessage ? [
                partitioned.userInfoMessage
            ] : [],
            ...partitioned.messagesToSummarize,
            {
                _privacyMode: privacySource._privacyMode,
                role: "user",
                content: safeString(this.summarizationPrompt),
                providerOptions: SUMMARIZATION_CURSOR_PROVIDER_OPTIONS
            }
        ];
        const unredact = (m2)=>fromRedactedCoreMessage(m2, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        const { assistantMessage } = await executeSelfSummaryWithRetry(ctx, this.promptSession, this.stateHandler, this.interactionListener, summarizationInputMessages.map(unredact), this.tools, this.extraT, {
            preservedPrefixMessageCount: 1 + (partitioned.userInfoMessage !== void 0 ? 1 : 0),
            ...this.retryOptions
        });
        const summaryText = extractTextContent(toRedactedCoreMessage(assistantMessage, this.stateHandler.getPrivacyMode())).unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        return {
            text: summaryText
        };
    }
    buildSummaryMessage(rawSummary, partitioned, enrichments) {
        const totalSummariesAfter = this.stateHandler.selfSummaryCount + 1;
        const durableBlocks = renderDurableBlocks("self-summary", enrichments, {
            includeTranscript: this.enableTranscriptEnrichment
        });
        const wrappedContent = `${prependDurableBlocks("self-summary", durableBlocks)}

Your conversation was summarized due to context constraints. Here is the summary of the conversation so far:

<summary_content>
${rawSummary.text}
</summary_content>${appendDurableBlocks("self-summary", durableBlocks)}

Total summaries generated so far for this user query: ${totalSummariesAfter}

If the task is complete, respond to the user. Otherwise, continue working on the task.`;
        const lastUserQuery2 = partitioned.preservedTailMessages[0];
        const privacySource = lastUserQuery2 ?? partitioned.userInfoMessage ?? partitioned.systemMessage;
        const summaryPrivacyMode = privacySource._privacyMode ?? this.stateHandler.getPrivacyMode();
        return {
            message: toRedactedCoreMessage({
                role: "user",
                content: wrappedContent,
                providerOptions: {
                    cursor: {
                        isSummary: true
                    }
                }
            }, summaryPrivacyMode),
            summaryTextLength: wrappedContent.length
        };
    }
    assembleFinalMessages(partitioned, summaryMessage) {
        if (!partitioned.systemMessage) {
            throw new Error("Expected system message in conversation");
        }
        const [lastUserQuery2, ...deliveryTail] = partitioned.preservedTailMessages;
        return [
            partitioned.systemMessage,
            ...partitioned.userInfoMessage ? [
                partitioned.userInfoMessage
            ] : [],
            ...lastUserQuery2 === void 0 ? [] : [
                lastUserQuery2
            ],
            summaryMessage,
            ...deliveryTail
        ];
    }
    async summarize(ctx, messages, options2) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource51(env_3, createSpan(ctx.withName("SelfSummarizer.summarize")), false);
            const innerCtx = spanCtxt.ctx;
            const startTime = performance.now();
            logger53.info(innerCtx, "[self-summary] SelfSummarizer.summarize starting", {
                summarization: {
                    messageCount: messages.length,
                    modelId: this.modelId
                }
            });
            try {
                const pipelineResult = await runSummarizationPipeline(this, innerCtx, messages, options2);
                const summaryCodeString = createRedactedString(pipelineResult.rawSummary.text, DataClassification.CODE, "summary", this.stateHandler.getPrivacyMode());
                logger53.info(innerCtx, "[self-summary] SelfSummarizer.summarize completed", {
                    summarization: {
                        summaryTextLength: pipelineResult.rawSummary.text.length,
                        fullReplacementMessagesCount: pipelineResult.fullReplacementMessages.length,
                        messagesActuallySummarizedCount: pipelineResult.messagesActuallySummarized.length
                    }
                });
                return {
                    ...pipelineResult,
                    summary: {
                        summary: summaryCodeString
                    },
                    onPersisted: ()=>{
                        this.stateHandler.incrementSelfSummaryCount();
                    }
                };
            } finally{
                selfSummaryTimeTakenMs.histogram(innerCtx, performance.now() - startTime, getMembershipTypeMetricTagsFromContext(innerCtx));
            }
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources51(env_3);
        }
    }
};

}
