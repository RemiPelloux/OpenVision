import { GDn, VDn, Vyt, Yb, _js, ajs, cUi, cjs, dUi, djs, fjs, gjs, hjs, jDn, jyt, lUi, ljs, mjs, pjs, uUi, ujs, zQe, zd } from "./agent_pb.js";
import { x } from "./tslib.es6.js";
var PWi;
export { PWi };
var __wakaru_HCv_initialized = false;
export function HCv() {
if (__wakaru_HCv_initialized) return;
__wakaru_HCv_initialized = true;
"use strict";
x(), zd(), PWi = {
    textDelta (e, t) {
        return new Yb({
            messageStartedAtMs: t,
            message: {
                case: "textDelta",
                value: new Vyt({
                    text: e
                })
            }
        });
    },
    toolCallStarted (e, t, n) {
        return new Yb({
            messageStartedAtMs: t.startedAtMs,
            message: {
                case: "toolCallStarted",
                value: new jyt({
                    callId: e,
                    toolCall: t,
                    modelCallId: n
                })
            }
        });
    },
    toolCallCompleted (e, t, n) {
        return new Yb({
            messageStartedAtMs: t.startedAtMs,
            message: {
                case: "toolCallCompleted",
                value: new zQe({
                    callId: e,
                    toolCall: t,
                    modelCallId: n
                })
            }
        });
    },
    toolCallDelta (e, t, n, i) {
        return new Yb({
            messageStartedAtMs: i,
            message: {
                case: "toolCallDelta",
                value: new cUi({
                    callId: e,
                    toolCallDelta: t,
                    modelCallId: n
                })
            }
        });
    },
    thinkingDelta (e, t, n) {
        return new Yb({
            messageStartedAtMs: n,
            message: {
                case: "thinkingDelta",
                value: new GDn({
                    text: e,
                    thinkingStyle: t
                })
            }
        });
    },
    thinkingCompleted (e, t) {
        return new Yb({
            messageStartedAtMs: t,
            message: {
                case: "thinkingCompleted",
                value: new VDn({
                    thinkingDurationMs: e
                })
            }
        });
    },
    userMessageAppended (e) {
        return new Yb({
            messageStartedAtMs: e.startedAtMs,
            message: {
                case: "userMessageAppended",
                value: new dUi({
                    userMessage: e
                })
            }
        });
    },
    partialToolCall (e, t, n) {
        return new Yb({
            messageStartedAtMs: t.startedAtMs,
            message: {
                case: "partialToolCall",
                value: new lUi({
                    callId: e,
                    toolCall: t,
                    modelCallId: n
                })
            }
        });
    },
    tokenDelta (e) {
        return new Yb({
            message: {
                case: "tokenDelta",
                value: new ajs({
                    tokens: e
                })
            }
        });
    },
    summary (e) {
        return new Yb({
            message: {
                case: "summary",
                value: new cjs({
                    summary: e
                })
            }
        });
    },
    summaryStarted () {
        return new Yb({
            message: {
                case: "summaryStarted",
                value: new ljs
            }
        });
    },
    heartbeat () {
        return new Yb({
            message: {
                case: "heartbeat",
                value: new uUi
            }
        });
    },
    summaryCompleted (e, t) {
        return new Yb({
            message: {
                case: "summaryCompleted",
                value: new ujs({
                    hookMessage: e,
                    failed: t
                })
            }
        });
    },
    shellOutputDelta (e) {
        return new Yb({
            message: {
                case: "shellOutputDelta",
                value: new djs({
                    event: e
                })
            }
        });
    },
    turnEnded (e, t) {
        return new Yb({
            message: {
                case: "turnEnded",
                value: new jDn({
                    ...e ? {
                        inputTokens: BigInt(e.inputTokens),
                        outputTokens: BigInt(e.outputTokens),
                        cacheReadTokens: BigInt(e.cacheReadTokens),
                        cacheWriteTokens: BigInt(e.cacheWriteTokens),
                        reasoningTokens: BigInt(e.reasoningTokens ?? 0)
                    } : {},
                    ...t !== void 0 ? {
                        endedAtMs: t
                    } : {}
                })
            }
        });
    },
    stepStarted (e) {
        return new Yb({
            message: {
                case: "stepStarted",
                value: new hjs({
                    stepId: BigInt(e)
                })
            }
        });
    },
    toolRequestsListed (e) {
        return new Yb({
            message: {
                case: "toolRequestsListed",
                value: new pjs({
                    callCount: Math.max(0, e)
                })
            }
        });
    },
    stepCompleted (e, t) {
        return new Yb({
            message: {
                case: "stepCompleted",
                value: new mjs({
                    stepId: BigInt(e),
                    stepDurationMs: BigInt(t)
                })
            }
        });
    },
    promptSuggestion (e) {
        return new Yb({
            message: {
                case: "promptSuggestion",
                value: new gjs({
                    suggestion: e
                })
            }
        });
    },
    activeBranchChange (e, t) {
        return new Yb({
            message: {
                case: "activeBranchChange",
                value: new fjs({
                    path: e,
                    branchName: t
                })
            }
        });
    },
    feedbackRequest (e, t, n, i = [], r = {}) {
        return new Yb({
            message: {
                case: "feedbackRequest",
                value: new _js({
                    requestId: e,
                    canonicalModelName: t,
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
