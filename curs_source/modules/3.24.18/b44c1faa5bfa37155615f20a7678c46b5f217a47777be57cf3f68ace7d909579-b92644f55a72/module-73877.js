"use strict";
function n(e, t) {
    const r = e;
    switch(t.kind){
        case "queued":
            return {
                _privacyMode: r,
                state: {
                    case: "queued",
                    value: {
                        _privacyMode: r
                    }
                }
            };
        case "delivered":
            return {
                _privacyMode: r,
                state: {
                    case: "delivered",
                    value: {
                        _privacyMode: r,
                        step: t.step,
                        deliveryBatchId: t.deliveryBatchId,
                        deliveredAtMs: BigInt(t.deliveredAtMs)
                    }
                }
            };
        case "queued_for_next_turn":
            return {
                _privacyMode: r,
                state: {
                    case: "queuedForNextTurn",
                    value: {
                        _privacyMode: r
                    }
                }
            };
        case "cancelled":
            return {
                _privacyMode: r,
                state: {
                    case: "cancelled",
                    value: {
                        _privacyMode: r
                    }
                }
            };
        case "rejected":
            return {
                _privacyMode: r,
                state: {
                    case: "rejected",
                    value: {
                        _privacyMode: r,
                        reason: t.reason
                    }
                }
            };
    }
}
require.d(exports, {
    P: ()=>s
});
const s = {
    textDelta (e, t) {
        const r = e.__privacyMode;
        return {
            _privacyMode: r,
            messageStartedAtMs: t,
            message: {
                case: "textDelta",
                value: {
                    _privacyMode: r,
                    text: e,
                    isServerNotice: !1
                }
            }
        };
    },
    toolCallStarted (e, t, r) {
        const n = t._privacyMode;
        return {
            _privacyMode: n,
            messageStartedAtMs: t.startedAtMs,
            message: {
                case: "toolCallStarted",
                value: {
                    _privacyMode: n,
                    callId: e,
                    toolCall: t,
                    modelCallId: r
                }
            }
        };
    },
    toolCallCompleted (e, t, r) {
        const n = t._privacyMode;
        return {
            _privacyMode: n,
            messageStartedAtMs: t.startedAtMs,
            message: {
                case: "toolCallCompleted",
                value: {
                    _privacyMode: n,
                    callId: e,
                    toolCall: t,
                    modelCallId: r
                }
            }
        };
    },
    toolCallDelta (e, t, r, n) {
        const s = t._privacyMode;
        return {
            _privacyMode: s,
            messageStartedAtMs: n,
            message: {
                case: "toolCallDelta",
                value: {
                    _privacyMode: s,
                    callId: e,
                    toolCallDelta: t,
                    modelCallId: r
                }
            }
        };
    },
    thinkingDelta (e, t, r) {
        const n = e.__privacyMode;
        return {
            _privacyMode: n,
            messageStartedAtMs: r,
            message: {
                case: "thinkingDelta",
                value: {
                    _privacyMode: n,
                    text: e,
                    thinkingStyle: t
                }
            }
        };
    },
    thinkingCompleted: (e, t, r)=>({
            _privacyMode: e,
            messageStartedAtMs: r,
            message: {
                case: "thinkingCompleted",
                value: {
                    _privacyMode: e,
                    thinkingDurationMs: t
                }
            }
        }),
    userMessageAppended (e) {
        const t = e._privacyMode;
        return {
            _privacyMode: t,
            messageStartedAtMs: e.startedAtMs,
            message: {
                case: "userMessageAppended",
                value: {
                    _privacyMode: t,
                    userMessage: e
                }
            }
        };
    },
    partialToolCall (e, t, r, n) {
        const s = t._privacyMode;
        return {
            _privacyMode: s,
            messageStartedAtMs: t.startedAtMs,
            message: {
                case: "partialToolCall",
                value: {
                    _privacyMode: s,
                    callId: e,
                    toolCall: t,
                    modelCallId: r,
                    argsTextDelta: n
                }
            }
        };
    },
    tokenDelta: (e, t)=>({
            _privacyMode: e,
            message: {
                case: "tokenDelta",
                value: {
                    _privacyMode: e,
                    tokens: t
                }
            }
        }),
    summary (e) {
        const t = e.__privacyMode;
        return {
            _privacyMode: t,
            message: {
                case: "summary",
                value: {
                    _privacyMode: t,
                    summary: e
                }
            }
        };
    },
    summaryStarted: (e)=>({
            _privacyMode: e,
            message: {
                case: "summaryStarted",
                value: {
                    _privacyMode: e
                }
            }
        }),
    heartbeat: (e)=>({
            _privacyMode: e,
            message: {
                case: "heartbeat",
                value: {
                    _privacyMode: e
                }
            }
        }),
    contextInjectionState: (e, t, r)=>({
            _privacyMode: e,
            message: {
                case: "contextInjectionState",
                value: {
                    _privacyMode: e,
                    injectionId: t,
                    state: n(e, r)
                }
            }
        }),
    summaryCompleted: (e, t, r)=>({
            _privacyMode: e,
            message: {
                case: "summaryCompleted",
                value: {
                    _privacyMode: e,
                    hookMessage: t,
                    failed: r
                }
            }
        }),
    shellOutputDelta: (e, t)=>({
            _privacyMode: e,
            message: {
                case: "shellOutputDelta",
                value: {
                    _privacyMode: e,
                    event: t
                }
            }
        }),
    turnEnded: (e, t, r)=>({
            _privacyMode: e,
            message: {
                case: "turnEnded",
                value: {
                    _privacyMode: e,
                    ...t && {
                        inputTokens: BigInt(t.inputTokens),
                        outputTokens: BigInt(t.outputTokens),
                        cacheReadTokens: BigInt(t.cacheReadTokens),
                        cacheWriteTokens: BigInt(t.cacheWriteTokens),
                        reasoningTokens: BigInt(t.reasoningTokens ?? 0)
                    },
                    ...void 0 !== r ? {
                        endedAtMs: r
                    } : {}
                }
            }
        }),
    stepStarted: (e, t)=>({
            _privacyMode: e,
            message: {
                case: "stepStarted",
                value: {
                    _privacyMode: e,
                    stepId: BigInt(t)
                }
            }
        }),
    toolRequestsListed: (e, t)=>({
            _privacyMode: e,
            message: {
                case: "toolRequestsListed",
                value: {
                    _privacyMode: e,
                    callCount: Math.max(0, t)
                }
            }
        }),
    stepCompleted: (e, t, r)=>({
            _privacyMode: e,
            message: {
                case: "stepCompleted",
                value: {
                    _privacyMode: e,
                    stepId: BigInt(t),
                    stepDurationMs: BigInt(r)
                }
            }
        }),
    promptSuggestion (e) {
        const t = e.__privacyMode;
        return {
            _privacyMode: t,
            message: {
                case: "promptSuggestion",
                value: {
                    _privacyMode: t,
                    suggestion: e
                }
            }
        };
    },
    activeBranchChange (e, t) {
        const r = e.__privacyMode;
        return {
            _privacyMode: r,
            message: {
                case: "activeBranchChange",
                value: {
                    _privacyMode: r,
                    path: e,
                    branchName: t
                }
            }
        };
    },
    feedbackRequest (e, t, r, n, s = [], o = {}) {
        const i = (e)=>({
                _privacyMode: r,
                id: e.id,
                label: e.label
            });
        return {
            _privacyMode: r,
            message: {
                case: "feedbackRequest",
                value: {
                    _privacyMode: r,
                    requestId: e,
                    canonicalModelName: t,
                    categories: n.map(i),
                    categoryGroups: s.map((e)=>({
                            _privacyMode: r,
                            id: e.id,
                            prompt: e.prompt,
                            categories: e.categories.map(i)
                        })),
                    showFormImmediately: !1,
                    title: o.title,
                    negativeTitle: o.negativeTitle,
                    commentPlaceholder: o.commentPlaceholder
                }
            }
        };
    }
};
