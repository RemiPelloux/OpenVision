import { BaseMiddleware, init_base3 } from "../base.js";
import { createCounter, createHistogram } from "../../../dist_exports.js";
import { analyzeMessages } from "../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
var middlewareChainDuration, ttftHistogram, ttfToolCallHistogram, e2eLatencyHistogram, inputMessagesHistogram, inputCharactersHistogram, requestOutcomeCounter, TracingMiddleware, createTracingMiddleware, tracingMiddleware;
export { TracingMiddleware, createTracingMiddleware, e2eLatencyHistogram, inputCharactersHistogram, inputMessagesHistogram, middlewareChainDuration, requestOutcomeCounter, tracingMiddleware, ttfToolCallHistogram, ttftHistogram };
var __wakaru_init_tracing_middleware_initialized = false;
export function init_tracing_middleware() {
if (__wakaru_init_tracing_middleware_initialized) return;
__wakaru_init_tracing_middleware_initialized = true;
"use strict";
init_dist4();
init_base3();
middlewareChainDuration = createHistogram("agent.ttft.middlewareChainMs", {
    description: "Total synchronous time inside the middleware chain from tracing middleware entry to inner stream() returning (may exclude async preprocessing done by middleware wrappers)"
});
ttftHistogram = createHistogram("chat_inference.ttft_ms", {
    description: "Time to first token in milliseconds",
    labelNames: [
        "outcome"
    ]
});
ttfToolCallHistogram = createHistogram("chat_inference.ttf_toolcall_ms", {
    description: "Time to first tool call in milliseconds",
    labelNames: [
        "outcome"
    ]
});
e2eLatencyHistogram = createHistogram("chat_inference.e2e_latency_ms", {
    description: "End-to-end latency in milliseconds",
    labelNames: [
        "outcome"
    ]
});
inputMessagesHistogram = createHistogram("chat_inference.input_messages", {
    description: "Distribution of input message counts per request",
    labelNames: [
        "message_type"
    ]
});
inputCharactersHistogram = createHistogram("chat_inference.input_characters", {
    description: "Distribution of input character counts per request",
    labelNames: [
        "message_type"
    ]
});
requestOutcomeCounter = createCounter("chat_inference.request_outcome", {
    description: "Count of request outcomes",
    labelNames: [
        "outcome"
    ]
});
TracingMiddleware = class extends BaseMiddleware {
    stream(ctx, invocationId, tools, options2) {
        const startTime = performance.now();
        let firstTokenTime = null;
        let seenFirstToken = false;
        let firstToolCallTime = null;
        let seenFirstToolCall = false;
        const inputMessages = this.innerExecutor.getMessages();
        const messageStats = analyzeMessages(inputMessages);
        inputMessagesHistogram.histogram(ctx, messageStats.userCount, {
            message_type: "user"
        });
        inputMessagesHistogram.histogram(ctx, messageStats.assistantCount, {
            message_type: "assistant"
        });
        inputMessagesHistogram.histogram(ctx, messageStats.toolCount, {
            message_type: "tool"
        });
        inputCharactersHistogram.histogram(ctx, messageStats.userChars, {
            message_type: "user"
        });
        inputCharactersHistogram.histogram(ctx, messageStats.assistantChars, {
            message_type: "assistant"
        });
        inputCharactersHistogram.histogram(ctx, messageStats.toolChars, {
            message_type: "tool"
        });
        const streamResult = this.innerExecutor.stream(ctx, invocationId, tools, options2);
        middlewareChainDuration.histogram(ctx, performance.now() - startTime);
        const tracedFullStream = async function*() {
            try {
                for await (const part of streamResult.fullStream){
                    if (!seenFirstToken) {
                        firstTokenTime = performance.now();
                        seenFirstToken = true;
                        const ttft = firstTokenTime - startTime;
                        ttftHistogram.histogram(ctx, ttft, {
                            outcome: "success"
                        });
                    }
                    if (!seenFirstToolCall && (part.type === "tool-call" || part.type === "tool-call-delta")) {
                        firstToolCallTime = performance.now();
                        seenFirstToolCall = true;
                        const ttfToolCall = firstToolCallTime - startTime;
                        ttfToolCallHistogram.histogram(ctx, ttfToolCall, {
                            outcome: "success"
                        });
                    }
                    yield part;
                }
            } catch (error3) {
                if (!seenFirstToken) {
                    ttftHistogram.histogram(ctx, performance.now() - startTime, {
                        outcome: "failure"
                    });
                }
                throw error3;
            }
        };
        const tracedResponse = streamResult.response.then((response)=>{
            const endTime = performance.now();
            const e2eLatency = endTime - startTime;
            e2eLatencyHistogram.histogram(ctx, e2eLatency, {
                outcome: "success"
            });
            if (response.error) {
                requestOutcomeCounter.increment(ctx, 1, {
                    outcome: "failure"
                });
            } else {
                requestOutcomeCounter.increment(ctx, 1, {
                    outcome: "success"
                });
            }
            return response;
        }).catch((error3)=>{
            const endTime = performance.now();
            const e2eLatency = endTime - startTime;
            e2eLatencyHistogram.histogram(ctx, e2eLatency, {
                outcome: "failure"
            });
            requestOutcomeCounter.increment(ctx, 1, {
                outcome: "failure"
            });
            throw error3;
        });
        void tracedResponse.catch(()=>{});
        return {
            fullStream: tracedFullStream(),
            response: tracedResponse,
            usage: streamResult.usage,
            providerMetadata: streamResult.providerMetadata,
            extendedUsage: streamResult.extendedUsage,
            invocationId: streamResult.invocationId
        };
    }
};
createTracingMiddleware = ()=>{
    return (executor)=>new TracingMiddleware(executor);
};
tracingMiddleware = createTracingMiddleware();

}
