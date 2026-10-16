import { ActiveBranchChange, FeedbackRequestUpdate, HeartbeatUpdate, InteractionUpdate, PartialToolCallUpdate, PromptSuggestionUpdate, ShellOutputDeltaUpdate, StepCompletedUpdate, StepStartedUpdate, SummaryCompletedUpdate, SummaryStartedUpdate, SummaryUpdate, TextDeltaUpdate, ThinkingCompletedUpdate, ThinkingDeltaUpdate, TokenDeltaUpdate, ToolCallCompletedUpdate, ToolCallDeltaUpdate, ToolCallStartedUpdate, ToolRequestsListedUpdate, TurnEndedUpdate, UserMessageAppendedUpdate, init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
var Updates;
export { Updates };
var __wakaru_init_interaction_updates_initialized = false;
export function init_interaction_updates() {
if (__wakaru_init_interaction_updates_initialized) return;
__wakaru_init_interaction_updates_initialized = true;
"use strict";
init_agent_pb();
Updates = {
    textDelta (text4, messageStartedAtMs) {
        return new InteractionUpdate({
            messageStartedAtMs,
            message: {
                case: "textDelta",
                value: new TextDeltaUpdate({
                    text: text4
                })
            }
        });
    },
    toolCallStarted (callId, toolCall, modelCallId) {
        return new InteractionUpdate({
            messageStartedAtMs: toolCall.startedAtMs,
            message: {
                case: "toolCallStarted",
                value: new ToolCallStartedUpdate({
                    callId,
                    toolCall,
                    modelCallId
                })
            }
        });
    },
    toolCallCompleted (callId, toolCall, modelCallId) {
        return new InteractionUpdate({
            messageStartedAtMs: toolCall.startedAtMs,
            message: {
                case: "toolCallCompleted",
                value: new ToolCallCompletedUpdate({
                    callId,
                    toolCall,
                    modelCallId
                })
            }
        });
    },
    toolCallDelta (callId, toolCallDelta, modelCallId, messageStartedAtMs) {
        return new InteractionUpdate({
            messageStartedAtMs,
            message: {
                case: "toolCallDelta",
                value: new ToolCallDeltaUpdate({
                    callId,
                    toolCallDelta,
                    modelCallId
                })
            }
        });
    },
    thinkingDelta (text4, thinkingStyle, messageStartedAtMs) {
        return new InteractionUpdate({
            messageStartedAtMs,
            message: {
                case: "thinkingDelta",
                value: new ThinkingDeltaUpdate({
                    text: text4,
                    thinkingStyle
                })
            }
        });
    },
    thinkingCompleted (thinkingDurationMs, messageStartedAtMs) {
        return new InteractionUpdate({
            messageStartedAtMs,
            message: {
                case: "thinkingCompleted",
                value: new ThinkingCompletedUpdate({
                    thinkingDurationMs
                })
            }
        });
    },
    userMessageAppended (userMessage) {
        return new InteractionUpdate({
            messageStartedAtMs: userMessage.startedAtMs,
            message: {
                case: "userMessageAppended",
                value: new UserMessageAppendedUpdate({
                    userMessage
                })
            }
        });
    },
    partialToolCall (callId, toolCall, modelCallId) {
        return new InteractionUpdate({
            messageStartedAtMs: toolCall.startedAtMs,
            message: {
                case: "partialToolCall",
                value: new PartialToolCallUpdate({
                    callId,
                    toolCall,
                    modelCallId
                })
            }
        });
    },
    tokenDelta (tokens) {
        return new InteractionUpdate({
            message: {
                case: "tokenDelta",
                value: new TokenDeltaUpdate({
                    tokens
                })
            }
        });
    },
    summary (summary) {
        return new InteractionUpdate({
            message: {
                case: "summary",
                value: new SummaryUpdate({
                    summary
                })
            }
        });
    },
    summaryStarted () {
        return new InteractionUpdate({
            message: {
                case: "summaryStarted",
                value: new SummaryStartedUpdate()
            }
        });
    },
    heartbeat () {
        return new InteractionUpdate({
            message: {
                case: "heartbeat",
                value: new HeartbeatUpdate()
            }
        });
    },
    summaryCompleted (hookMessage, failed) {
        return new InteractionUpdate({
            message: {
                case: "summaryCompleted",
                value: new SummaryCompletedUpdate({
                    hookMessage,
                    failed
                })
            }
        });
    },
    shellOutputDelta (event) {
        return new InteractionUpdate({
            message: {
                case: "shellOutputDelta",
                value: new ShellOutputDeltaUpdate({
                    event
                })
            }
        });
    },
    turnEnded (usage, endedAtMs) {
        return new InteractionUpdate({
            message: {
                case: "turnEnded",
                value: new TurnEndedUpdate({
                    ...usage ? {
                        inputTokens: BigInt(usage.inputTokens),
                        outputTokens: BigInt(usage.outputTokens),
                        cacheReadTokens: BigInt(usage.cacheReadTokens),
                        cacheWriteTokens: BigInt(usage.cacheWriteTokens),
                        reasoningTokens: BigInt(usage.reasoningTokens ?? 0)
                    } : {},
                    ...endedAtMs !== void 0 ? {
                        endedAtMs
                    } : {}
                })
            }
        });
    },
    stepStarted (stepId) {
        return new InteractionUpdate({
            message: {
                case: "stepStarted",
                value: new StepStartedUpdate({
                    stepId: BigInt(stepId)
                })
            }
        });
    },
    toolRequestsListed (callCount) {
        return new InteractionUpdate({
            message: {
                case: "toolRequestsListed",
                value: new ToolRequestsListedUpdate({
                    callCount: Math.max(0, callCount)
                })
            }
        });
    },
    stepCompleted (stepId, stepDurationMs) {
        return new InteractionUpdate({
            message: {
                case: "stepCompleted",
                value: new StepCompletedUpdate({
                    stepId: BigInt(stepId),
                    stepDurationMs: BigInt(stepDurationMs)
                })
            }
        });
    },
    promptSuggestion (suggestion) {
        return new InteractionUpdate({
            message: {
                case: "promptSuggestion",
                value: new PromptSuggestionUpdate({
                    suggestion
                })
            }
        });
    },
    activeBranchChange (path64, branchName) {
        return new InteractionUpdate({
            message: {
                case: "activeBranchChange",
                value: new ActiveBranchChange({
                    path: path64,
                    branchName
                })
            }
        });
    },
    feedbackRequest (requestId, canonicalModelName, categories, categoryGroups = [], copy = {}) {
        return new InteractionUpdate({
            message: {
                case: "feedbackRequest",
                value: new FeedbackRequestUpdate({
                    requestId,
                    canonicalModelName,
                    categories: [
                        ...categories
                    ],
                    categoryGroups: [
                        ...categoryGroups
                    ],
                    title: copy.title,
                    negativeTitle: copy.negativeTitle,
                    commentPlaceholder: copy.commentPlaceholder
                })
            }
        });
    }
};

}
