import { Fni, JFo, KFo, KSr, Lni, Oni, QFo, VFo, XFo, XSr, YFo, YSr, ZFo, ZSr, cbt, e6o, ju, n6o, n9t, ok, qFo, t9t, zFo } from "./agent_pb.js";
import { E } from "./tslib.es6.js";
var aYr;
export { aYr };
var __wakaru_j91_initialized = false;
export function j91() {
if (__wakaru_j91_initialized) return;
__wakaru_j91_initialized = true;
"use strict";
E(), ju(), aYr = {
    textDelta (t, e) {
        return new ok({
            messageStartedAtMs: e,
            message: {
                case: "textDelta",
                value: new t9t({
                    text: t
                })
            }
        });
    },
    toolCallStarted (t, e, n) {
        return new ok({
            messageStartedAtMs: e.startedAtMs,
            message: {
                case: "toolCallStarted",
                value: new n9t({
                    callId: t,
                    toolCall: e,
                    modelCallId: n
                })
            }
        });
    },
    toolCallCompleted (t, e, n) {
        return new ok({
            messageStartedAtMs: e.startedAtMs,
            message: {
                case: "toolCallCompleted",
                value: new cbt({
                    callId: t,
                    toolCall: e,
                    modelCallId: n
                })
            }
        });
    },
    toolCallDelta (t, e, n, i) {
        return new ok({
            messageStartedAtMs: i,
            message: {
                case: "toolCallDelta",
                value: new KSr({
                    callId: t,
                    toolCallDelta: e,
                    modelCallId: n
                })
            }
        });
    },
    thinkingDelta (t, e, n) {
        return new ok({
            messageStartedAtMs: n,
            message: {
                case: "thinkingDelta",
                value: new Lni({
                    text: t,
                    thinkingStyle: e
                })
            }
        });
    },
    thinkingCompleted (t, e) {
        return new ok({
            messageStartedAtMs: e,
            message: {
                case: "thinkingCompleted",
                value: new Oni({
                    thinkingDurationMs: t
                })
            }
        });
    },
    userMessageAppended (t) {
        return new ok({
            messageStartedAtMs: t.startedAtMs,
            message: {
                case: "userMessageAppended",
                value: new ZSr({
                    userMessage: t
                })
            }
        });
    },
    partialToolCall (t, e, n) {
        return new ok({
            messageStartedAtMs: e.startedAtMs,
            message: {
                case: "partialToolCall",
                value: new YSr({
                    callId: t,
                    toolCall: e,
                    modelCallId: n
                })
            }
        });
    },
    tokenDelta (t) {
        return new ok({
            message: {
                case: "tokenDelta",
                value: new qFo({
                    tokens: t
                })
            }
        });
    },
    summary (t) {
        return new ok({
            message: {
                case: "summary",
                value: new zFo({
                    summary: t
                })
            }
        });
    },
    summaryStarted () {
        return new ok({
            message: {
                case: "summaryStarted",
                value: new VFo
            }
        });
    },
    heartbeat () {
        return new ok({
            message: {
                case: "heartbeat",
                value: new XSr
            }
        });
    },
    summaryCompleted (t, e) {
        return new ok({
            message: {
                case: "summaryCompleted",
                value: new KFo({
                    hookMessage: t,
                    failed: e
                })
            }
        });
    },
    shellOutputDelta (t) {
        return new ok({
            message: {
                case: "shellOutputDelta",
                value: new YFo({
                    event: t
                })
            }
        });
    },
    turnEnded (t, e) {
        return new ok({
            message: {
                case: "turnEnded",
                value: new Fni({
                    ...t ? {
                        inputTokens: BigInt(t.inputTokens),
                        outputTokens: BigInt(t.outputTokens),
                        cacheReadTokens: BigInt(t.cacheReadTokens),
                        cacheWriteTokens: BigInt(t.cacheWriteTokens),
                        reasoningTokens: BigInt(t.reasoningTokens ?? 0)
                    } : {},
                    ...e !== void 0 ? {
                        endedAtMs: e
                    } : {}
                })
            }
        });
    },
    stepStarted (t) {
        return new ok({
            message: {
                case: "stepStarted",
                value: new XFo({
                    stepId: BigInt(t)
                })
            }
        });
    },
    toolRequestsListed (t) {
        return new ok({
            message: {
                case: "toolRequestsListed",
                value: new ZFo({
                    callCount: Math.max(0, t)
                })
            }
        });
    },
    stepCompleted (t, e) {
        return new ok({
            message: {
                case: "stepCompleted",
                value: new QFo({
                    stepId: BigInt(t),
                    stepDurationMs: BigInt(e)
                })
            }
        });
    },
    promptSuggestion (t) {
        return new ok({
            message: {
                case: "promptSuggestion",
                value: new JFo({
                    suggestion: t
                })
            }
        });
    },
    activeBranchChange (t, e) {
        return new ok({
            message: {
                case: "activeBranchChange",
                value: new e6o({
                    path: t,
                    branchName: e
                })
            }
        });
    },
    feedbackRequest (t, e, n, i = [], r = {}) {
        return new ok({
            message: {
                case: "feedbackRequest",
                value: new n6o({
                    requestId: t,
                    canonicalModelName: e,
                    categories: [
                        ...n
                    ],
                    categoryGroups: [
                        ...i
                    ],
                    title: r.title,
                    negativeTitle: r.negativeTitle,
                    commentPlaceholder: r.commentPlaceholder
                })
            }
        });
    }
};

}
