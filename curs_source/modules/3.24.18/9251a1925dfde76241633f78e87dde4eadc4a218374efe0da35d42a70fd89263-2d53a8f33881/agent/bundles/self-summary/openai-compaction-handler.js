import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist29 } from "../../../agent-summarization/dist/index.js";
import { SUMMARIZATION_CURSOR_PROVIDER_OPTIONS } from "../../../agent-summarization/dist/summarization-handler.js";
import { init_background_task_completion_action_handler } from "../actions/background-task-completion-action-handler.js";
import { init_self_summary_handler } from "./self-summary-handler.js";
import { init_self_summary } from "./self-summary.js";
import { init_dist } from "../../../context/dist/index.js";
import { createCounter, createHistogram } from "../../../dist_exports.js";
import { appendDurableBlocks, collectAllSkillBlocks, collectBudgetedUserMessages, createRedactedString, executeSelfSummaryWithRetry, extractTextContent, fromRedactedCoreMessage, getRetryDirective, prepareMessagesForCompaction, prependDurableBlocks, renderDurableBlocks, runSummarizationPipeline, safeString, toRedactedCoreMessage } from "../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
import { DataClassification, PrivacyCapability } from "../../../redaction/dist/classification.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var __addDisposableResource64, __disposeResources64, logger76, compactionInputTokens2, compactionOutputTokens2, compactionCacheReadTokens2, compactionCacheWriteTokens2, compactionTimeTakenMs2, compactionStatus2, OPENAI_COMPACTION_PROMPT, SUMMARY_PREFIX, APPROX_CHARS_PER_TOKEN, COMPACT_USER_MESSAGE_MAX_TOKENS, OpenAICompactionHandler;
export { APPROX_CHARS_PER_TOKEN, COMPACT_USER_MESSAGE_MAX_TOKENS, OPENAI_COMPACTION_PROMPT, OpenAICompactionHandler, SUMMARY_PREFIX, __addDisposableResource64, __disposeResources64, compactionCacheReadTokens2, compactionCacheWriteTokens2, compactionInputTokens2, compactionOutputTokens2, compactionStatus2, compactionTimeTakenMs2, logger76 };
var __wakaru_init_openai_compaction_handler_initialized = false;
export function init_openai_compaction_handler() {
if (__wakaru_init_openai_compaction_handler_initialized) return;
__wakaru_init_openai_compaction_handler_initialized = true;
"use strict";
init_dist29();
init_dist();
init_dist4();
init_dist27();
init_background_task_completion_action_handler();
init_self_summary();
init_self_summary_handler();
__addDisposableResource64 = function(env, value, async) {
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
__disposeResources64 = (function(SuppressedError2) {
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
logger76 = createLogger("@anysphere/agent");
compactionInputTokens2 = createHistogram("openai_compaction.input_token", {
    description: "Input tokens consumed during OpenAI compaction"
});
compactionOutputTokens2 = createHistogram("openai_compaction.output_token", {
    description: "Output tokens generated during OpenAI compaction"
});
compactionCacheReadTokens2 = createHistogram("openai_compaction.cache_read_token", {
    description: "Cache read tokens during OpenAI compaction"
});
compactionCacheWriteTokens2 = createHistogram("openai_compaction.cache_write_token", {
    description: "Cache write tokens during OpenAI compaction"
});
compactionTimeTakenMs2 = createHistogram("openai_compaction.time_taken_ms", {
    description: "Time taken for OpenAI compaction in milliseconds"
});
compactionStatus2 = createCounter("openai_compaction.status", {
    description: "Count of OpenAI compaction attempts and their outcomes",
    labelNames: [
        "outcome",
        "errorKind"
    ]
});
OPENAI_COMPACTION_PROMPT = `You are performing a CONTEXT CHECKPOINT COMPACTION. Create a handoff summary for another LLM that will resume the task.

Include:
- Current progress and key decisions made
- Important context, constraints, or user preferences
- What remains to be done (clear next steps)
- Any critical data, examples, or references needed to continue

Be concise, structured, and focused on helping the next LLM seamlessly continue the work.
Do not make any tool calls.`;
SUMMARY_PREFIX = "Another language model started to solve this problem and produced a summary of its thinking process. The workspace and transcript reflects changes made by the previous model \u2014 use your tools to inspect the current state of files, terminals, and other resources. Build on the work that has already been done and avoid duplicating work. Here is the summary produced by the other language model, use the information in this summary to assist with your own analysis:";
APPROX_CHARS_PER_TOKEN = 4;
COMPACT_USER_MESSAGE_MAX_TOKENS = 1e4;
OpenAICompactionHandler = class {
    constructor(promptSession, stateHandler, interactionListener, tools, extraT, modelId, retryOptions){
        this.promptSession = promptSession;
        this.stateHandler = stateHandler;
        this.interactionListener = interactionListener;
        this.tools = tools;
        this.extraT = extraT;
        this.modelId = modelId;
        this.retryOptions = retryOptions ?? {};
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
        const preservedTailMessages = collectBudgetedUserMessages(messagesForSummarization, COMPACT_USER_MESSAGE_MAX_TOKENS);
        return {
            systemMessage,
            userInfoMessage,
            messagesToSummarize: messagesForSummarization,
            preservedTailMessages,
            skillBlocks
        };
    }
    async generateSummary(ctx, partitioned, _options) {
        if (!partitioned.systemMessage) {
            throw new Error("Expected system message in conversation");
        }
        const privacySource = partitioned.preservedTailMessages.at(-1) ?? partitioned.userInfoMessage ?? partitioned.systemMessage;
        logger76.info(ctx, "[openai-compaction] generating summary via compaction prompt", {
            preservedUserMessageCount: partitioned.preservedTailMessages.length
        });
        const compactInputMessages = [
            partitioned.systemMessage,
            ...partitioned.userInfoMessage ? [
                partitioned.userInfoMessage
            ] : [],
            ...partitioned.messagesToSummarize,
            {
                _privacyMode: privacySource._privacyMode,
                role: "user",
                content: safeString(OPENAI_COMPACTION_PROMPT),
                providerOptions: SUMMARIZATION_CURSOR_PROVIDER_OPTIONS
            }
        ];
        const unredact = (m2)=>fromRedactedCoreMessage(m2, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        const { assistantMessage, inputTokens, outputTokens, cacheReadTokens, cacheWriteTokens } = await executeSelfSummaryWithRetry(ctx, this.promptSession, this.stateHandler, this.interactionListener, compactInputMessages.map(unredact), this.tools, this.extraT, {
            preservedPrefixMessageCount: 1 + (partitioned.userInfoMessage !== void 0 ? 1 : 0),
            ...this.retryOptions
        });
        compactionInputTokens2.histogram(ctx, inputTokens);
        compactionOutputTokens2.histogram(ctx, outputTokens);
        compactionCacheReadTokens2.histogram(ctx, cacheReadTokens);
        compactionCacheWriteTokens2.histogram(ctx, cacheWriteTokens);
        const summaryText = extractTextContent(toRedactedCoreMessage(assistantMessage, this.stateHandler.getPrivacyMode())).unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        return {
            text: summaryText,
            inputTokens,
            outputTokens
        };
    }
    buildSummaryMessage(rawSummary, partitioned, enrichments) {
        const durableBlocks = renderDurableBlocks("openai-compaction", enrichments);
        const wrappedContent = `${prependDurableBlocks("openai-compaction", durableBlocks)}${appendDurableBlocks("openai-compaction", durableBlocks)}

${SUMMARY_PREFIX}
${rawSummary.text}`;
        const lastUserQuery2 = partitioned.preservedTailMessages.at(-1);
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
            ...partitioned.preservedTailMessages,
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
            const spanCtxt = __addDisposableResource64(env_1, createSpan(ctx.withName("OpenAICompactionHandler.summarize")), false);
            const innerCtx = spanCtxt.ctx;
            const startTime = performance.now();
            logger76.info(innerCtx, "[openai-compaction] summarize starting", {
                messageCount: messages.length,
                modelId: this.modelId
            });
            try {
                const pipelineResult = await runSummarizationPipeline(this, innerCtx, messages, options2);
                const summaryCodeString = createRedactedString(pipelineResult.rawSummary.text, DataClassification.CODE, "compaction-summary", this.stateHandler.getPrivacyMode());
                logger76.info(innerCtx, "[openai-compaction] summarize completed", {
                    summaryTextLength: pipelineResult.rawSummary.text.length,
                    fullReplacementMessagesCount: pipelineResult.fullReplacementMessages.length,
                    messagesActuallySummarizedCount: pipelineResult.messagesActuallySummarized.length
                });
                compactionStatus2.increment(innerCtx, 1, {
                    outcome: "success",
                    errorKind: "Ok"
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
                compactionStatus2.increment(innerCtx, 1, {
                    outcome: "failed",
                    errorKind
                });
                throw error3;
            } finally{
                compactionTimeTakenMs2.histogram(innerCtx, performance.now() - startTime);
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources64(env_1);
        }
    }
};

}
