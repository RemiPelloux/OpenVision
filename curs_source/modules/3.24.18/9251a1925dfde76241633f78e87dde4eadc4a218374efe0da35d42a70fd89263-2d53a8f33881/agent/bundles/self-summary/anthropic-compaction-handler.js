import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist29 } from "../../../agent-summarization/dist/index.js";
import { SUMMARIZATION_CURSOR_PROVIDER_OPTIONS } from "../../../agent-summarization/dist/summarization-handler.js";
import { CLAUDE_CODE_COMPACTION_PROMPT, init_constants5 } from "./constants.js";
import { init_self_summary_handler } from "./self-summary-handler.js";
import { init_self_summary } from "./self-summary.js";
import { init_dist } from "../../../context/dist/index.js";
import { createCounter, createHistogram } from "../../../dist_exports.js";
import { appendDurableBlocks, collectAllSkillBlocks, createRedactedString, executeSelfSummaryWithRetry, extractTextContent, fromRedactedCoreMessage, getRetryDirective, prepareMessagesForCompaction, prependDurableBlocks, renderDurableBlocks, runSummarizationPipeline, safeString, toRedactedCoreMessage } from "../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
import { DataClassification, PrivacyCapability } from "../../../redaction/dist/classification.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var __addDisposableResource52, __disposeResources52, logger54, MODE_LABELS, compactionInputTokens, compactionOutputTokens, compactionCacheReadTokens, compactionCacheWriteTokens, compactionTimeTakenMs, compactionStatus, AnthropicCompactionHandler;
export { AnthropicCompactionHandler, MODE_LABELS, __addDisposableResource52, __disposeResources52, compactionCacheReadTokens, compactionCacheWriteTokens, compactionInputTokens, compactionOutputTokens, compactionStatus, compactionTimeTakenMs, logger54 };
var __wakaru_init_anthropic_compaction_handler_initialized = false;
export function init_anthropic_compaction_handler() {
if (__wakaru_init_anthropic_compaction_handler_initialized) return;
__wakaru_init_anthropic_compaction_handler_initialized = true;
"use strict";
init_dist29();
init_dist();
init_dist4();
init_dist27();
init_constants5();
init_self_summary();
init_self_summary_handler();
__addDisposableResource52 = function(env, value, async) {
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
__disposeResources52 = (function(SuppressedError2) {
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
logger54 = createLogger("@anysphere/agent");
MODE_LABELS = {
    mode: "explicit"
};
compactionInputTokens = createHistogram("anthropic_compaction.input_token", {
    description: "Input tokens consumed during Anthropic compaction",
    labelNames: [
        "mode"
    ]
});
compactionOutputTokens = createHistogram("anthropic_compaction.output_token", {
    description: "Output tokens generated during Anthropic compaction",
    labelNames: [
        "mode"
    ]
});
compactionCacheReadTokens = createHistogram("anthropic_compaction.cache_read_token", {
    description: "Cache read tokens during Anthropic compaction",
    labelNames: [
        "mode"
    ]
});
compactionCacheWriteTokens = createHistogram("anthropic_compaction.cache_write_token", {
    description: "Cache write tokens during Anthropic compaction",
    labelNames: [
        "mode"
    ]
});
compactionTimeTakenMs = createHistogram("anthropic_compaction.time_taken_ms", {
    description: "Time taken for Anthropic compaction in milliseconds",
    labelNames: [
        "mode"
    ]
});
compactionStatus = createCounter("anthropic_compaction.status", {
    description: "Count of Anthropic compaction attempts and their outcomes",
    labelNames: [
        "outcome",
        "errorKind",
        "mode"
    ]
});
AnthropicCompactionHandler = class {
    constructor(promptSession, stateHandler, interactionListener, tools, extraT, modelId, options2){
        this.promptSession = promptSession;
        this.stateHandler = stateHandler;
        this.interactionListener = interactionListener;
        this.tools = tools;
        this.extraT = extraT;
        this.modelId = modelId;
        this.retryOptions = options2 ?? {};
    }
    getModelId() {
        return this.modelId;
    }
    getMetricsModelLabel() {
        return this.modelId;
    }
    partitionMessages(messages, _options) {
        const { systemMessage, userInfoMessage, messagesForSummarization } = prepareMessagesForCompaction(messages);
        const skillBlocks = collectAllSkillBlocks(messagesForSummarization);
        return {
            systemMessage,
            userInfoMessage,
            messagesToSummarize: messagesForSummarization,
            preservedTailMessages: [],
            skillBlocks
        };
    }
    async generateSummary(ctx, partitioned, _options) {
        if (!partitioned.systemMessage) {
            throw new Error("Expected system message in conversation");
        }
        const privacySource = partitioned.preservedTailMessages[0] ?? partitioned.userInfoMessage ?? partitioned.systemMessage;
        logger54.info(ctx, "[anthropic-compaction] generating summary via explicit user prompt");
        const compactInputMessages = [
            partitioned.systemMessage,
            ...partitioned.userInfoMessage ? [
                partitioned.userInfoMessage
            ] : [],
            ...partitioned.messagesToSummarize,
            {
                _privacyMode: privacySource._privacyMode,
                role: "user",
                content: safeString(CLAUDE_CODE_COMPACTION_PROMPT),
                providerOptions: SUMMARIZATION_CURSOR_PROVIDER_OPTIONS
            }
        ];
        const unredact = (m2)=>fromRedactedCoreMessage(m2, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        const { assistantMessage, inputTokens, outputTokens, cacheReadTokens, cacheWriteTokens } = await executeSelfSummaryWithRetry(ctx, this.promptSession, this.stateHandler, this.interactionListener, compactInputMessages.map(unredact), this.tools, this.extraT, {
            preservedPrefixMessageCount: 1 + (partitioned.userInfoMessage !== void 0 ? 1 : 0),
            ...this.retryOptions
        });
        compactionInputTokens.histogram(ctx, inputTokens, MODE_LABELS);
        compactionOutputTokens.histogram(ctx, outputTokens, MODE_LABELS);
        compactionCacheReadTokens.histogram(ctx, cacheReadTokens, MODE_LABELS);
        compactionCacheWriteTokens.histogram(ctx, cacheWriteTokens, MODE_LABELS);
        const summaryText = extractTextContent(toRedactedCoreMessage(assistantMessage, this.stateHandler.getPrivacyMode())).unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        let candidate = summaryText.trim();
        if (candidate.startsWith("<analysis>")) {
            const leadingAnalysisClose = candidate.indexOf("</analysis>");
            if (leadingAnalysisClose !== -1) {
                candidate = candidate.slice(leadingAnalysisClose + "</analysis>".length);
            }
        }
        if (candidate.trimEnd().endsWith("</analysis>")) {
            const trailingAnalysisOpen = candidate.lastIndexOf("<analysis>");
            if (trailingAnalysisOpen !== -1 && candidate.lastIndexOf("</summary>", trailingAnalysisOpen) !== -1) {
                candidate = candidate.slice(0, trailingAnalysisOpen);
            }
        }
        const openTagIndex = candidate.indexOf("<summary>");
        const closeTagIndex = candidate.lastIndexOf("</summary>");
        const extractedSummaryBody = openTagIndex !== -1 && closeTagIndex > openTagIndex ? candidate.slice(openTagIndex + "<summary>".length, closeTagIndex).trim() : candidate.trim() || summaryText;
        return {
            text: extractedSummaryBody,
            inputTokens,
            outputTokens
        };
    }
    buildSummaryMessage(rawSummary, partitioned, enrichments) {
        const durableBlocks = renderDurableBlocks("anthropic-compaction", enrichments);
        const wrappedContent = `${prependDurableBlocks("anthropic-compaction", durableBlocks)}

<summary>
${rawSummary.text}
</summary>${appendDurableBlocks("anthropic-compaction", durableBlocks)}`;
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
        return [
            partitioned.systemMessage,
            ...partitioned.userInfoMessage ? [
                partitioned.userInfoMessage
            ] : [],
            summaryMessage
        ];
    }
    async summarize(ctx, messages, options2) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource52(env_1, createSpan(ctx.withName("AnthropicCompactionHandler.summarize")), false);
            const innerCtx = spanCtxt.ctx;
            const startTime = performance.now();
            logger54.info(innerCtx, "[anthropic-compaction] summarize starting", {
                messageCount: messages.length,
                modelId: this.modelId
            });
            try {
                const pipelineResult = await runSummarizationPipeline(this, innerCtx, messages, options2);
                const summaryCodeString = createRedactedString(pipelineResult.rawSummary.text, DataClassification.CODE, "compaction-summary", this.stateHandler.getPrivacyMode());
                logger54.info(innerCtx, "[anthropic-compaction] summarize completed", {
                    summaryTextLength: pipelineResult.rawSummary.text.length,
                    fullReplacementMessagesCount: pipelineResult.fullReplacementMessages.length,
                    messagesActuallySummarizedCount: pipelineResult.messagesActuallySummarized.length
                });
                compactionStatus.increment(innerCtx, 1, {
                    outcome: "success",
                    errorKind: "Ok",
                    ...MODE_LABELS
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
            } catch (error3) {
                const errorKind = getRetryDirective(error3, {
                    transientRetryDelayMs: 0
                }).errorType;
                compactionStatus.increment(innerCtx, 1, {
                    outcome: "failed",
                    errorKind,
                    ...MODE_LABELS
                });
                throw error3;
            } finally{
                compactionTimeTakenMs.histogram(innerCtx, performance.now() - startTime, MODE_LABELS);
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources52(env_1);
        }
    }
};

}
