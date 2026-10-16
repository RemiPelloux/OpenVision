import { toRedactedContextInjectionStateValue } from "../../mcp_sandbox_policy_exports.js";
var RedactedUpdates;
export { RedactedUpdates };
var __wakaru_init_redacted_interaction_updates_initialized = false;
export function init_redacted_interaction_updates() {
if (__wakaru_init_redacted_interaction_updates_initialized) return;
__wakaru_init_redacted_interaction_updates_initialized = true;
"use strict";
RedactedUpdates = {
    textDelta (text4, messageStartedAtMs) {
        const privacyMode = text4.__privacyMode;
        return {
            _privacyMode: privacyMode,
            messageStartedAtMs,
            message: {
                case: "textDelta",
                value: {
                    _privacyMode: privacyMode,
                    text: text4,
                    isServerNotice: false
                }
            }
        };
    },
    toolCallStarted (callId, toolCall, modelCallId) {
        const privacyMode = toolCall._privacyMode;
        return {
            _privacyMode: privacyMode,
            messageStartedAtMs: toolCall.startedAtMs,
            message: {
                case: "toolCallStarted",
                value: {
                    _privacyMode: privacyMode,
                    callId,
                    toolCall,
                    modelCallId
                }
            }
        };
    },
    toolCallCompleted (callId, toolCall, modelCallId) {
        const privacyMode = toolCall._privacyMode;
        return {
            _privacyMode: privacyMode,
            messageStartedAtMs: toolCall.startedAtMs,
            message: {
                case: "toolCallCompleted",
                value: {
                    _privacyMode: privacyMode,
                    callId,
                    toolCall,
                    modelCallId
                }
            }
        };
    },
    toolCallDelta (callId, toolCallDelta, modelCallId, messageStartedAtMs) {
        const privacyMode = toolCallDelta._privacyMode;
        return {
            _privacyMode: privacyMode,
            messageStartedAtMs,
            message: {
                case: "toolCallDelta",
                value: {
                    _privacyMode: privacyMode,
                    callId,
                    toolCallDelta,
                    modelCallId
                }
            }
        };
    },
    thinkingDelta (text4, thinkingStyle, messageStartedAtMs) {
        const privacyMode = text4.__privacyMode;
        return {
            _privacyMode: privacyMode,
            messageStartedAtMs,
            message: {
                case: "thinkingDelta",
                value: {
                    _privacyMode: privacyMode,
                    text: text4,
                    thinkingStyle
                }
            }
        };
    },
    thinkingCompleted (privacyMode, thinkingDurationMs, messageStartedAtMs) {
        return {
            _privacyMode: privacyMode,
            messageStartedAtMs,
            message: {
                case: "thinkingCompleted",
                value: {
                    _privacyMode: privacyMode,
                    thinkingDurationMs
                }
            }
        };
    },
    userMessageAppended (userMessage) {
        const privacyMode = userMessage._privacyMode;
        return {
            _privacyMode: privacyMode,
            messageStartedAtMs: userMessage.startedAtMs,
            message: {
                case: "userMessageAppended",
                value: {
                    _privacyMode: privacyMode,
                    userMessage
                }
            }
        };
    },
    partialToolCall (callId, toolCall, modelCallId, argsTextDelta) {
        const privacyMode = toolCall._privacyMode;
        return {
            _privacyMode: privacyMode,
            messageStartedAtMs: toolCall.startedAtMs,
            message: {
                case: "partialToolCall",
                value: {
                    _privacyMode: privacyMode,
                    callId,
                    toolCall,
                    modelCallId,
                    argsTextDelta
                }
            }
        };
    },
    tokenDelta (privacyMode, tokens) {
        return {
            _privacyMode: privacyMode,
            message: {
                case: "tokenDelta",
                value: {
                    _privacyMode: privacyMode,
                    tokens
                }
            }
        };
    },
    summary (summary) {
        const privacyMode = summary.__privacyMode;
        return {
            _privacyMode: privacyMode,
            message: {
                case: "summary",
                value: {
                    _privacyMode: privacyMode,
                    summary
                }
            }
        };
    },
    summaryStarted (privacyMode) {
        return {
            _privacyMode: privacyMode,
            message: {
                case: "summaryStarted",
                value: {
                    _privacyMode: privacyMode
                }
            }
        };
    },
    heartbeat (privacyMode) {
        return {
            _privacyMode: privacyMode,
            message: {
                case: "heartbeat",
                value: {
                    _privacyMode: privacyMode
                }
            }
        };
    },
    contextInjectionState (privacyMode, injectionId, state) {
        return {
            _privacyMode: privacyMode,
            message: {
                case: "contextInjectionState",
                value: {
                    _privacyMode: privacyMode,
                    injectionId,
                    state: toRedactedContextInjectionStateValue(privacyMode, state)
                }
            }
        };
    },
    summaryCompleted (privacyMode, hookMessage, failed) {
        return {
            _privacyMode: privacyMode,
            message: {
                case: "summaryCompleted",
                value: {
                    _privacyMode: privacyMode,
                    hookMessage,
                    failed
                }
            }
        };
    },
    shellOutputDelta (privacyMode, event) {
        return {
            _privacyMode: privacyMode,
            message: {
                case: "shellOutputDelta",
                value: {
                    _privacyMode: privacyMode,
                    event
                }
            }
        };
    },
    turnEnded (privacyMode, usage, endedAtMs) {
        return {
            _privacyMode: privacyMode,
            message: {
                case: "turnEnded",
                value: {
                    _privacyMode: privacyMode,
                    ...usage && {
                        inputTokens: BigInt(usage.inputTokens),
                        outputTokens: BigInt(usage.outputTokens),
                        cacheReadTokens: BigInt(usage.cacheReadTokens),
                        cacheWriteTokens: BigInt(usage.cacheWriteTokens),
                        reasoningTokens: BigInt(usage.reasoningTokens ?? 0)
                    },
                    ...endedAtMs !== void 0 ? {
                        endedAtMs
                    } : {}
                }
            }
        };
    },
    stepStarted (privacyMode, stepId) {
        return {
            _privacyMode: privacyMode,
            message: {
                case: "stepStarted",
                value: {
                    _privacyMode: privacyMode,
                    stepId: BigInt(stepId)
                }
            }
        };
    },
    toolRequestsListed (privacyMode, callCount) {
        return {
            _privacyMode: privacyMode,
            message: {
                case: "toolRequestsListed",
                value: {
                    _privacyMode: privacyMode,
                    callCount: Math.max(0, callCount)
                }
            }
        };
    },
    stepCompleted (privacyMode, stepId, stepDurationMs) {
        return {
            _privacyMode: privacyMode,
            message: {
                case: "stepCompleted",
                value: {
                    _privacyMode: privacyMode,
                    stepId: BigInt(stepId),
                    stepDurationMs: BigInt(stepDurationMs)
                }
            }
        };
    },
    promptSuggestion (suggestion) {
        const privacyMode = suggestion.__privacyMode;
        return {
            _privacyMode: privacyMode,
            message: {
                case: "promptSuggestion",
                value: {
                    _privacyMode: privacyMode,
                    suggestion
                }
            }
        };
    },
    activeBranchChange (path64, branchName) {
        const privacyMode = path64.__privacyMode;
        return {
            _privacyMode: privacyMode,
            message: {
                case: "activeBranchChange",
                value: {
                    _privacyMode: privacyMode,
                    path: path64,
                    branchName
                }
            }
        };
    },
    feedbackRequest (requestId, canonicalModelName, privacyMode, categories, categoryGroups = [], copy = {}) {
        const toRedactedCategory = (category)=>({
                _privacyMode: privacyMode,
                id: category.id,
                label: category.label
            });
        return {
            _privacyMode: privacyMode,
            message: {
                case: "feedbackRequest",
                value: {
                    _privacyMode: privacyMode,
                    requestId,
                    canonicalModelName,
                    categories: categories.map(toRedactedCategory),
                    categoryGroups: categoryGroups.map((group)=>({
                            _privacyMode: privacyMode,
                            id: group.id,
                            prompt: group.prompt,
                            categories: group.categories.map(toRedactedCategory)
                        })),
                    showFormImmediately: false,
                    title: copy.title,
                    negativeTitle: copy.negativeTitle,
                    commentPlaceholder: copy.commentPlaceholder
                }
            }
        };
    }
};

}
