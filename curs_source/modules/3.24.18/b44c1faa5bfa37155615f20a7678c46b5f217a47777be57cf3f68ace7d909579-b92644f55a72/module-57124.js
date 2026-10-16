"use strict";
require.d(exports, {
    L: ()=>s
});
var n = require("./module-69584.js");
const s = {
    textDelta: (e, t)=>new n.Uq({
            messageStartedAtMs: t,
            message: {
                case: "textDelta",
                value: new n.PtE({
                    text: e
                })
            }
        }),
    toolCallStarted: (e, t, r)=>new n.Uq({
            messageStartedAtMs: t.startedAtMs,
            message: {
                case: "toolCallStarted",
                value: new n.xuG({
                    callId: e,
                    toolCall: t,
                    modelCallId: r
                })
            }
        }),
    toolCallCompleted: (e, t, r)=>new n.Uq({
            messageStartedAtMs: t.startedAtMs,
            message: {
                case: "toolCallCompleted",
                value: new n.LLS({
                    callId: e,
                    toolCall: t,
                    modelCallId: r
                })
            }
        }),
    toolCallDelta: (e, t, r, s)=>new n.Uq({
            messageStartedAtMs: s,
            message: {
                case: "toolCallDelta",
                value: new n.I0n({
                    callId: e,
                    toolCallDelta: t,
                    modelCallId: r
                })
            }
        }),
    thinkingDelta: (e, t, r)=>new n.Uq({
            messageStartedAtMs: r,
            message: {
                case: "thinkingDelta",
                value: new n.cHB({
                    text: e,
                    thinkingStyle: t
                })
            }
        }),
    thinkingCompleted: (e, t)=>new n.Uq({
            messageStartedAtMs: t,
            message: {
                case: "thinkingCompleted",
                value: new n.tr3({
                    thinkingDurationMs: e
                })
            }
        }),
    userMessageAppended: (e)=>new n.Uq({
            messageStartedAtMs: e.startedAtMs,
            message: {
                case: "userMessageAppended",
                value: new n.v$T({
                    userMessage: e
                })
            }
        }),
    partialToolCall: (e, t, r)=>new n.Uq({
            messageStartedAtMs: t.startedAtMs,
            message: {
                case: "partialToolCall",
                value: new n.fxF({
                    callId: e,
                    toolCall: t,
                    modelCallId: r
                })
            }
        }),
    tokenDelta: (e)=>new n.Uq({
            message: {
                case: "tokenDelta",
                value: new n.Fyz({
                    tokens: e
                })
            }
        }),
    summary: (e)=>new n.Uq({
            message: {
                case: "summary",
                value: new n.ECk({
                    summary: e
                })
            }
        }),
    summaryStarted: ()=>new n.Uq({
            message: {
                case: "summaryStarted",
                value: new n.lWT
            }
        }),
    heartbeat: ()=>new n.Uq({
            message: {
                case: "heartbeat",
                value: new n.ih1
            }
        }),
    summaryCompleted: (e, t)=>new n.Uq({
            message: {
                case: "summaryCompleted",
                value: new n.ZM9({
                    hookMessage: e,
                    failed: t
                })
            }
        }),
    shellOutputDelta: (e)=>new n.Uq({
            message: {
                case: "shellOutputDelta",
                value: new n.Nn_({
                    event: e
                })
            }
        }),
    turnEnded: (e, t)=>new n.Uq({
            message: {
                case: "turnEnded",
                value: new n.lJj({
                    ...e ? {
                        inputTokens: BigInt(e.inputTokens),
                        outputTokens: BigInt(e.outputTokens),
                        cacheReadTokens: BigInt(e.cacheReadTokens),
                        cacheWriteTokens: BigInt(e.cacheWriteTokens),
                        reasoningTokens: BigInt(e.reasoningTokens ?? 0)
                    } : {},
                    ...void 0 !== t ? {
                        endedAtMs: t
                    } : {}
                })
            }
        }),
    stepStarted: (e)=>new n.Uq({
            message: {
                case: "stepStarted",
                value: new n.dwJ({
                    stepId: BigInt(e)
                })
            }
        }),
    toolRequestsListed: (e)=>new n.Uq({
            message: {
                case: "toolRequestsListed",
                value: new n.BU$({
                    callCount: Math.max(0, e)
                })
            }
        }),
    stepCompleted: (e, t)=>new n.Uq({
            message: {
                case: "stepCompleted",
                value: new n.Lrv({
                    stepId: BigInt(e),
                    stepDurationMs: BigInt(t)
                })
            }
        }),
    promptSuggestion: (e)=>new n.Uq({
            message: {
                case: "promptSuggestion",
                value: new n.yfd({
                    suggestion: e
                })
            }
        }),
    activeBranchChange: (e, t)=>new n.Uq({
            message: {
                case: "activeBranchChange",
                value: new n.PSN({
                    path: e,
                    branchName: t
                })
            }
        }),
    feedbackRequest: (e, t, r, s = [], o = {})=>new n.Uq({
            message: {
                case: "feedbackRequest",
                value: new n.apn({
                    requestId: e,
                    canonicalModelName: t,
                    categories: [
                        ...r
                    ],
                    categoryGroups: [
                        ...s
                    ],
                    title: o.title,
                    negativeTitle: o.negativeTitle,
                    commentPlaceholder: o.commentPlaceholder
                })
            }
        })
};
