"use strict";
require.d(exports, {
    PMe: ()=>z,
    CoO: ()=>j,
    Uwx: ()=>bx,
    y2v: ()=>Cx,
    zcK: ()=>qx,
    k78: ()=>JA,
    Xc5: ()=>_A,
    UHN: ()=>hx,
    z9K: ()=>WA,
    HUJ: ()=>YA,
    HPD: ()=>GA,
    os_: ()=>$A,
    N7j: ()=>YI,
    zcw: ()=>sk,
    pHZ: ()=>H,
    Jtz: ()=>Y,
    gDy: ()=>AC,
    WHw: ()=>PC,
    xUl: ()=>gx,
    eqd: ()=>Vx,
    A5s: ()=>hC,
    MM7: ()=>Sx,
    gnL: ()=>Ix,
    DO4: ()=>Mx,
    qhh: ()=>uq,
    DwO: ()=>eq,
    AA_: ()=>iq,
    XU9: ()=>_x,
    RA0: ()=>lR,
    ig9: ()=>mR,
    Au: ()=>XT,
    sTQ: ()=>xC,
    Wbm: ()=>Jq,
    zqs: ()=>Uc,
    qQx: ()=>nl,
    hB4: ()=>wx,
    $uu: ()=>xx,
    ROD: ()=>Hy,
    z8A: ()=>Av,
    wfQ: ()=>PA,
    On2: ()=>dx,
    c3T: ()=>mx,
    iQl: ()=>Gx,
    EvW: ()=>bC,
    oaR: ()=>Xn,
    tTx: ()=>VI,
    Pj2: ()=>tx,
    p46: ()=>gC,
    qek: ()=>fx,
    bvF: ()=>Wx,
    F0p: ()=>pC,
    LHk: ()=>Ax,
    DjL: ()=>Ex,
    KHu: ()=>VM,
    f1_: ()=>cq,
    eJ8: ()=>ZM,
    nJ0: ()=>sq,
    uS3: ()=>aR,
    jE$: ()=>dR,
    btc: ()=>YT,
    NuS: ()=>qq,
    xch: ()=>Bq,
    g95: ()=>Bx,
    O5R: ()=>kx,
    fYR: ()=>ux,
    x36: ()=>px,
    KJ$: ()=>sS,
    TnL: ()=>jx,
    dFU: ()=>Zn,
    sO1: ()=>zI,
    S$T: ()=>ex
});
var n = require("./module-15718.js"), s = require("./module-64500.js");
function o(e, t) {
    return {
        _privacyMode: t,
        start: void 0 !== e.start ? a(e.start, t) : void 0,
        end: void 0 !== e.end ? a(e.end, t) : void 0
    };
}
function i(e, t, r) {
    return new s.Q6({
        start: void 0 !== e.start ? c(e.start, t, r) : void 0,
        end: void 0 !== e.end ? c(e.end, t, r) : void 0
    });
}
function a(e, t) {
    return {
        _privacyMode: t,
        line: e.line,
        column: e.column
    };
}
function c(e, t, r) {
    return new s.yX({
        line: e.line,
        column: e.column
    });
}
function l(e, t) {
    return {
        _privacyMode: t,
        filePath: (0, n.cZ)(e.filePath, n.po.PATH, "file_path", t),
        sizeBytes: e.sizeBytes,
        lineCount: e.lineCount
    };
}
function u(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, o = r?.enforcing;
    return new s.pV({
        filePath: e.filePath.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: o
        }),
        sizeBytes: e.sizeBytes,
        lineCount: e.lineCount
    });
}
function d(e, t) {
    return {
        _privacyMode: t,
        requestId: e.requestId,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function p(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, o = r?.enforcing;
    return new s.UC({
        requestId: e.requestId,
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: o
        })
    });
}
var m = require("./module-75178.js");
function h(e, t) {
    return {
        _privacyMode: t,
        filePaths: e.filePaths.map((e)=>(0, n.cZ)(e, n.po.PATH, "file_paths", t)),
        startLine: e.startLine,
        endLine: e.endLine,
        commitHashes: e.commitHashes,
        outputMode: e.outputMode,
        maxCommits: e.maxCommits,
        includeLineRanges: e.includeLineRanges
    };
}
function f(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new m.Fw({
        filePaths: e.filePaths.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        startLine: e.startLine,
        endLine: e.endLine,
        commitHashes: e.commitHashes,
        outputMode: e.outputMode,
        maxCommits: e.maxCommits,
        includeLineRanges: e.includeLineRanges
    });
}
function g(e, t) {
    return {
        _privacyMode: t,
        result: y(e.result, t)
    };
}
function y(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: _(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: S(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function w(e, t, r) {
    return new m.Zc({
        result: v(e.result, t, r)
    });
}
function v(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: A(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: b(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function _(e, t) {
    return {
        _privacyMode: t,
        attributionText: (0, n.cZ)(e.attributionText, n.po.CODE, "attribution_text", t),
        outputLocation: void 0 !== e.outputLocation ? l(e.outputLocation, t) : void 0
    };
}
function A(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new m.v({
        attributionText: e.attributionText.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputLocation: void 0 !== e.outputLocation ? u(e.outputLocation, t, r) : void 0
    });
}
function S(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function b(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new m.qL({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function E(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? h(e.args, t) : void 0,
        result: void 0 !== e.result ? g(e.result, t) : void 0
    };
}
function I(e, t, r) {
    return new m.ex({
        args: void 0 !== e.args ? f(e.args, t, r) : void 0,
        result: void 0 !== e.result ? w(e.result, t, r) : void 0
    });
}
var C = require("./module-85814.js");
function k(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? T(e.args, t) : void 0,
        result: void 0 !== e.result ? B(e.result, t) : void 0
    };
}
function x(e, t, r) {
    return new C.JU({
        args: void 0 !== e.args ? R(e.args, t, r) : void 0,
        result: void 0 !== e.result ? J(e.result, t, r) : void 0
    });
}
function T(e, t) {
    return {
        _privacyMode: t,
        agentId: e.agentId
    };
}
function R(e, t, r) {
    return new C.W1({
        agentId: e.agentId
    });
}
function B(e, t) {
    return {
        _privacyMode: t,
        result: P(e.result, t)
    };
}
function P(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: q(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: F(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function J(e, t, r) {
    return new C.y$({
        result: M(e.result, t, r)
    });
}
function M(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: D(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: U(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function q(e, t) {
    return {
        _privacyMode: t,
        appliedChanges: e.appliedChanges.map((e)=>O(e, t))
    };
}
function D(e, t, r) {
    return new C.ud({
        appliedChanges: e.appliedChanges.map((e)=>N(e, t, r))
    });
}
function O(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        changeType: e.changeType,
        beforeContent: void 0 !== e.beforeContent ? (0, n.cZ)(e.beforeContent, n.po.CODE, "before_content", t) : void 0,
        afterContent: void 0 !== e.afterContent ? (0, n.cZ)(e.afterContent, n.po.CODE, "after_content", t) : void 0,
        error: void 0 !== e.error ? (0, n.cZ)(e.error, n.po.CODE, "error", t) : void 0,
        messageForModel: void 0 !== e.messageForModel ? (0, n.cZ)(e.messageForModel, n.po.CODE, "message_for_model", t) : void 0
    };
}
function N(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new C.H4({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        changeType: e.changeType,
        beforeContent: e.beforeContent?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        afterContent: e.afterContent?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        messageForModel: e.messageForModel?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function F(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        appliedChanges: e.appliedChanges.map((e)=>O(e, t))
    };
}
function U(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new C.rQ({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        appliedChanges: e.appliedChanges.map((e)=>N(e, t, r))
    });
}
var L = require("./module-68892.js");
function $(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? G(e.args, t) : void 0,
        result: void 0 !== e.result ? V(e.result, t) : void 0
    };
}
function Q(e, t, r) {
    return new L.OU({
        args: void 0 !== e.args ? H(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Y(e.result, t, r) : void 0
    });
}
function j(e, t) {
    return {
        args: void 0,
        result: void 0,
        ...t,
        _privacyMode: e
    };
}
function G(e, t) {
    return {
        _privacyMode: t,
        title: (0, n.cZ)(e.title, n.po.CODE, "title", t),
        questions: e.questions.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    id: e.id,
                    prompt: (0, n.cZ)(e.prompt, n.po.CODE, "prompt", t),
                    options: e.options.map((e)=>(function(e, t) {
                            return {
                                _privacyMode: t,
                                id: e.id,
                                label: (0, n.cZ)(e.label, n.po.CODE, "label", t)
                            };
                        })(e, t)),
                    allowMultiple: e.allowMultiple
                };
            })(e, t)),
        runAsync: e.runAsync,
        asyncOriginalToolCallId: e.asyncOriginalToolCallId
    };
}
function H(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new L.ju({
        title: e.title.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        questions: e.questions.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new L.WW({
                    id: e.id,
                    prompt: e.prompt.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    options: e.options.map((e)=>(function(e, t, r) {
                            const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                            return new L.pq({
                                id: e.id,
                                label: e.label.unwrap(t, {
                                    redactUnallowedFieldsInsteadOfThrowing: n,
                                    enforcing: s
                                })
                            });
                        })(e, t, r)),
                    allowMultiple: e.allowMultiple
                });
            })(e, t, r)),
        runAsync: e.runAsync,
        asyncOriginalToolCallId: e.asyncOriginalToolCallId
    });
}
function z(e, t) {
    return {
        title: (0, n.cZ)("", n.po.CODE, "title", e),
        questions: [],
        runAsync: !1,
        asyncOriginalToolCallId: "",
        ...t,
        _privacyMode: e
    };
}
function W(e, t) {
    return {
        _privacyMode: t,
        interactionId: e.interactionId
    };
}
function V(e, t) {
    return {
        _privacyMode: t,
        result: K(e.result, t)
    };
}
function K(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: X(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: te(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: ne(e.value, t)
            };
        case "async":
            return {
                case: "async",
                value: W(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Y(e, t, r) {
    return new L.tz({
        result: Z(e.result, t, r)
    });
}
function Z(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: ee(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: re(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: se(e.value, t, r)
            };
        case "async":
            return {
                case: "async",
                value: (n = e.value, new L.yt({
                    interactionId: n.interactionId
                }))
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
    var n;
}
function X(e, t) {
    return {
        _privacyMode: t,
        answers: e.answers.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    questionId: e.questionId,
                    selectedOptionIds: e.selectedOptionIds,
                    freeformText: (0, n.cZ)(e.freeformText, n.po.CODE, "freeform_text", t)
                };
            })(e, t))
    };
}
function ee(e, t, r) {
    return new L.dE({
        answers: e.answers.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new L.wh({
                    questionId: e.questionId,
                    selectedOptionIds: e.selectedOptionIds,
                    freeformText: e.freeformText.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r))
    });
}
function te(e, t) {
    return {
        _privacyMode: t,
        errorMessage: (0, n.cZ)(e.errorMessage, n.po.CODE, "error_message", t)
    };
}
function re(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new L.Ww({
        errorMessage: e.errorMessage.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function ne(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function se(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new L.ox({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var oe = require("./module-46326.js");
function ie(e, t) {
    return {
        _privacyMode: t,
        taskId: e.taskId,
        blockUntilMs: e.blockUntilMs,
        regex: void 0 !== e.regex ? (0, n.cZ)(e.regex, n.po.CODE, "regex", t) : void 0
    };
}
function ae(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new oe.wj({
        taskId: e.taskId,
        blockUntilMs: e.blockUntilMs,
        regex: e.regex?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function ce(e, t) {
    return {
        _privacyMode: t,
        taskId: e.taskId,
        runtimeMs: e.runtimeMs,
        outputFilePath: (0, n.cZ)(e.outputFilePath, n.po.PATH, "output_file_path", t),
        outputLength: e.outputLength,
        regexRequested: e.regexRequested,
        regexMatch: void 0 !== e.regexMatch ? (0, n.cZ)(e.regexMatch, n.po.CODE, "regex_match", t) : void 0,
        exitCode: e.exitCode,
        wakeReason: e.wakeReason
    };
}
function le(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new oe.nU({
        taskId: e.taskId,
        runtimeMs: e.runtimeMs,
        outputFilePath: e.outputFilePath.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputLength: e.outputLength,
        regexRequested: e.regexRequested,
        regexMatch: e.regexMatch?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        exitCode: e.exitCode,
        wakeReason: e.wakeReason
    });
}
function ue(e, t) {
    return {
        _privacyMode: t,
        taskId: e.taskId,
        runtimeMs: e.runtimeMs,
        outputFilePath: (0, n.cZ)(e.outputFilePath, n.po.PATH, "output_file_path", t),
        outputLength: e.outputLength,
        regexRequested: e.regexRequested,
        regexMatch: void 0 !== e.regexMatch ? (0, n.cZ)(e.regexMatch, n.po.CODE, "regex_match", t) : void 0,
        wakeReason: e.wakeReason
    };
}
function de(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new oe.Hr({
        taskId: e.taskId,
        runtimeMs: e.runtimeMs,
        outputFilePath: e.outputFilePath.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputLength: e.outputLength,
        regexRequested: e.regexRequested,
        regexMatch: e.regexMatch?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        wakeReason: e.wakeReason
    });
}
function pe(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function me(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new oe.vH({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function he(e, t) {
    return {
        _privacyMode: t,
        awaitResult: fe(e.awaitResult, t)
    };
}
function fe(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "complete":
            return {
                case: "complete",
                value: ce(e.value, t)
            };
        case "stillRunning":
            return {
                case: "stillRunning",
                value: ue(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ge(e, t, r) {
    return new oe.uo({
        awaitResult: ye(e.awaitResult, t, r)
    });
}
function ye(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "complete":
            return {
                case: "complete",
                value: le(e.value, t, r)
            };
        case "stillRunning":
            return {
                case: "stillRunning",
                value: de(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function we(e, t) {
    return {
        _privacyMode: t,
        result: ve(e.result, t)
    };
}
function ve(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "complete":
            return {
                case: "complete",
                value: ce(e.value, t)
            };
        case "stillRunning":
            return {
                case: "stillRunning",
                value: ue(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: pe(e.value, t)
            };
        case "success":
            return {
                case: "success",
                value: he(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function _e(e, t, r) {
    return new oe.mK({
        result: Ae(e.result, t, r)
    });
}
function Ae(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "complete":
            return {
                case: "complete",
                value: le(e.value, t, r)
            };
        case "stillRunning":
            return {
                case: "stillRunning",
                value: de(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: me(e.value, t, r)
            };
        case "success":
            return {
                case: "success",
                value: ge(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Se(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? ie(e.args, t) : void 0,
        result: void 0 !== e.result ? we(e.result, t) : void 0
    };
}
function be(e, t, r) {
    return new oe.$0({
        args: void 0 !== e.args ? ae(e.args, t, r) : void 0,
        result: void 0 !== e.result ? _e(e.result, t, r) : void 0
    });
}
var Ee = require("./module-99348.js");
function Ie(e, t) {
    return {
        _privacyMode: t,
        filePath: (0, n.cZ)(e.filePath, n.po.PATH, "file_path", t),
        startLine: e.startLine,
        endLine: e.endLine
    };
}
function Ce(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ee.zT({
        filePath: e.filePath.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        startLine: e.startLine,
        endLine: e.endLine
    });
}
function ke(e, t) {
    return {
        _privacyMode: t,
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t)
    };
}
function xe(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ee.Pq({
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Te(e, t) {
    return {
        _privacyMode: t,
        errorMessage: (0, n.cZ)(e.errorMessage, n.po.CODE, "error_message", t)
    };
}
function Re(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ee.yF({
        errorMessage: e.errorMessage.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Be(e, t) {
    return {
        _privacyMode: t,
        result: Pe(e.result, t)
    };
}
function Pe(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: ke(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Te(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Je(e, t, r) {
    return new Ee.L5({
        result: Me(e.result, t, r)
    });
}
function Me(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: xe(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Re(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function qe(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Ie(e.args, t) : void 0,
        result: void 0 !== e.result ? Be(e.result, t) : void 0
    };
}
function De(e, t, r) {
    return new Ee.EI({
        args: void 0 !== e.args ? Ce(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Je(e.result, t, r) : void 0
    });
}
var Oe = require("./module-828.js");
function Ne(e, t) {
    return {
        _privacyMode: t,
        line: e.line,
        character: e.character
    };
}
function Fe(e, t, r) {
    return new Oe.Yn({
        line: e.line,
        character: e.character
    });
}
function Ue(e, t) {
    return {
        _privacyMode: t,
        start: void 0 !== e.start ? Ne(e.start, t) : void 0,
        end: void 0 !== e.end ? Ne(e.end, t) : void 0
    };
}
function Le(e, t, r) {
    return new Oe.YH({
        start: void 0 !== e.start ? Fe(e.start) : void 0,
        end: void 0 !== e.end ? Fe(e.end) : void 0
    });
}
function $e(e, t) {
    return {
        _privacyMode: t,
        contents: (0, n.cZ)(e.contents, n.po.CODE, "contents", t),
        canvasId: e.canvasId,
        title: void 0 !== e.title ? (0, n.cZ)(e.title, n.po.CODE, "title", t) : void 0
    };
}
function Qe(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Oe.$F({
        contents: e.contents.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        canvasId: e.canvasId,
        title: e.title?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function je(e, t) {
    return {
        _privacyMode: t,
        canvasId: e.canvasId,
        title: void 0 !== e.title ? (0, n.cZ)(e.title, n.po.CODE, "title", t) : void 0,
        url: (0, n.cZ)(e.url, n.po.PATH, "url", t)
    };
}
function Ge(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Oe.p7({
        canvasId: e.canvasId,
        title: e.title?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        url: e.url.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function He(e, t) {
    return {
        _privacyMode: t,
        reason: e.reason,
        diagnostics: e.diagnostics.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    message: (0, n.cZ)(e.message, n.po.CODE, "message", t),
                    code: e.code,
                    severity: e.severity,
                    range: void 0 !== e.range ? Ue(e.range, t) : void 0
                };
            })(e, t)),
        detail: void 0 !== e.detail ? (0, n.cZ)(e.detail, n.po.CODE, "detail", t) : void 0
    };
}
function ze(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Oe.M0({
        reason: e.reason,
        diagnostics: e.diagnostics.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Oe.hR({
                    message: e.message.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    code: e.code,
                    severity: e.severity,
                    range: void 0 !== e.range ? Le(e.range) : void 0
                });
            })(e, t, r)),
        detail: e.detail?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function We(e, t) {
    return {
        _privacyMode: t,
        result: Ve(e.result, t)
    };
}
function Ve(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: je(e.value, t)
            };
        case "failure":
            return {
                case: "failure",
                value: He(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ke(e, t, r) {
    return new Oe.d({
        result: Ye(e.result, t, r)
    });
}
function Ye(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Ge(e.value, t, r)
            };
        case "failure":
            return {
                case: "failure",
                value: ze(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ze(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? $e(e.args, t) : void 0,
        result: void 0 !== e.result ? We(e.result, t) : void 0
    };
}
function Xe(e, t, r) {
    return new Oe.Kn({
        args: void 0 !== e.args ? Qe(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Ke(e.result, t, r) : void 0
    });
}
function et(e, t) {
    return {
        _privacyMode: t,
        canvasId: e.canvasId,
        url: void 0 !== e.url ? (0, n.cZ)(e.url, n.po.PATH, "url", t) : void 0
    };
}
function tt(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Oe.Kc({
        canvasId: e.canvasId,
        url: e.url?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function rt(e, t) {
    return {
        _privacyMode: t,
        canvasId: e.canvasId,
        title: void 0 !== e.title ? (0, n.cZ)(e.title, n.po.CODE, "title", t) : void 0,
        url: (0, n.cZ)(e.url, n.po.PATH, "url", t),
        source: (0, n.cZ)(e.source, n.po.CODE, "source", t)
    };
}
function nt(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Oe.y_({
        canvasId: e.canvasId,
        title: e.title?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        url: e.url.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        source: e.source.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function st(e, t) {
    return {
        _privacyMode: t,
        reason: e.reason,
        detail: void 0 !== e.detail ? (0, n.cZ)(e.detail, n.po.CODE, "detail", t) : void 0
    };
}
function ot(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Oe.tk({
        reason: e.reason,
        detail: e.detail?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function it(e, t) {
    return {
        _privacyMode: t,
        result: at(e.result, t)
    };
}
function at(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: rt(e.value, t)
            };
        case "failure":
            return {
                case: "failure",
                value: st(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ct(e, t, r) {
    return new Oe.a4({
        result: lt(e.result, t, r)
    });
}
function lt(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: nt(e.value, t, r)
            };
        case "failure":
            return {
                case: "failure",
                value: ot(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ut(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? et(e.args, t) : void 0,
        result: void 0 !== e.result ? it(e.result, t) : void 0
    };
}
function dt(e, t, r) {
    return new Oe.LM({
        args: void 0 !== e.args ? tt(e.args, t, r) : void 0,
        result: void 0 !== e.result ? ct(e.result, t, r) : void 0
    });
}
var pt = require("./module-39129.js");
function mt(e, t) {
    return {
        _privacyMode: t,
        currentStep: void 0 !== e.currentStep ? (0, n.cZ)(e.currentStep, n.po.CODE, "current_step", t) : void 0,
        finalSummary: void 0 !== e.finalSummary ? (0, n.cZ)(e.finalSummary, n.po.CODE, "final_summary", t) : void 0,
        completedSubtitle: void 0 !== e.completedSubtitle ? (0, n.cZ)(e.completedSubtitle, n.po.CODE, "completed_subtitle", t) : void 0
    };
}
function ht(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new pt.kM({
        currentStep: e.currentStep?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        finalSummary: e.finalSummary?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        completedSubtitle: e.completedSubtitle?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function ft(e, t) {
    return {
        _privacyMode: t,
        currentStep: (0, n.cZ)(e.currentStep, n.po.CODE, "current_step", t),
        messageIndex: e.messageIndex
    };
}
function gt(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new pt.Y_({
        currentStep: e.currentStep.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        messageIndex: e.messageIndex
    });
}
function yt(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function wt(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new pt.H6({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function vt(e, t) {
    return {
        _privacyMode: t,
        result: _t(e.result, t)
    };
}
function _t(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: ft(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: yt(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function At(e, t, r) {
    return new pt.CH({
        result: St(e.result, t, r)
    });
}
function St(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: gt(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: wt(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function bt(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? mt(e.args, t) : void 0,
        result: void 0 !== e.result ? vt(e.result, t) : void 0
    };
}
function Et(e, t, r) {
    return new pt.fd({
        args: void 0 !== e.args ? ht(e.args, t, r) : void 0,
        result: void 0 !== e.result ? At(e.result, t, r) : void 0
    });
}
var It = require("./module-43643.js");
function Ct(e, t) {
    return {
        _privacyMode: t,
        x: e.x,
        y: e.y
    };
}
function kt(e, t, r) {
    return new It.xp({
        x: e.x,
        y: e.y
    });
}
function xt(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        actions: e.actions.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    action: Rt(e.action, t)
                };
            })(e, t)),
        description: void 0 !== e.description ? (0, n.cZ)(e.description, n.po.CODE, "description", t) : void 0,
        bindUnmappedCharacters: e.bindUnmappedCharacters,
        desktopLeaseActorId: e.desktopLeaseActorId,
        screenshotSettleMs: e.screenshotSettleMs,
        settleUntilStable: e.settleUntilStable
    };
}
function Tt(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new It.K5({
        toolCallId: e.toolCallId,
        actions: e.actions.map((e)=>(function(e, t, r) {
                return new It.ho({
                    action: Bt(e.action, t, r)
                });
            })(e, t, r)),
        description: e.description?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        bindUnmappedCharacters: e.bindUnmappedCharacters,
        desktopLeaseActorId: e.desktopLeaseActorId,
        screenshotSettleMs: e.screenshotSettleMs,
        settleUntilStable: e.settleUntilStable
    });
}
function Rt(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "mouseMove":
            return {
                case: "mouseMove",
                value: Pt(e.value, t)
            };
        case "click":
            return {
                case: "click",
                value: Mt(e.value, t)
            };
        case "mouseDown":
            return {
                case: "mouseDown",
                value: Dt(e.value, t)
            };
        case "mouseUp":
            return {
                case: "mouseUp",
                value: Nt(e.value, t)
            };
        case "drag":
            return {
                case: "drag",
                value: Ut(e.value, t)
            };
        case "scroll":
            return {
                case: "scroll",
                value: $t(e.value, t)
            };
        case "type":
            return {
                case: "type",
                value: jt(e.value, t)
            };
        case "key":
            return {
                case: "key",
                value: Ht(e.value, t)
            };
        case "wait":
            return {
                case: "wait",
                value: Wt(e.value, t)
            };
        case "screenshot":
            return {
                case: "screenshot",
                value: Kt(e.value, t)
            };
        case "cursorPosition":
            return {
                case: "cursorPosition",
                value: Zt(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Bt(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "mouseMove":
            return {
                case: "mouseMove",
                value: Jt(e.value, t, r)
            };
        case "click":
            return {
                case: "click",
                value: qt(e.value, t, r)
            };
        case "mouseDown":
            return {
                case: "mouseDown",
                value: Ot(e.value, t, r)
            };
        case "mouseUp":
            return {
                case: "mouseUp",
                value: Ft(e.value, t, r)
            };
        case "drag":
            return {
                case: "drag",
                value: Lt(e.value, t, r)
            };
        case "scroll":
            return {
                case: "scroll",
                value: Qt(e.value, t, r)
            };
        case "type":
            return {
                case: "type",
                value: Gt(e.value, t, r)
            };
        case "key":
            return {
                case: "key",
                value: zt(e.value, t, r)
            };
        case "wait":
            return {
                case: "wait",
                value: Vt(e.value, t, r)
            };
        case "screenshot":
            return {
                case: "screenshot",
                value: Yt(e.value, t, r)
            };
        case "cursorPosition":
            return {
                case: "cursorPosition",
                value: Xt(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Pt(e, t) {
    return {
        _privacyMode: t,
        coordinate: void 0 !== e.coordinate ? Ct(e.coordinate, t) : void 0
    };
}
function Jt(e, t, r) {
    return new It.Dc({
        coordinate: void 0 !== e.coordinate ? kt(e.coordinate) : void 0
    });
}
function Mt(e, t) {
    return {
        _privacyMode: t,
        coordinate: void 0 !== e.coordinate ? Ct(e.coordinate, t) : void 0,
        button: e.button,
        count: e.count,
        modifierKeys: e.modifierKeys
    };
}
function qt(e, t, r) {
    return new It.vV({
        coordinate: void 0 !== e.coordinate ? kt(e.coordinate) : void 0,
        button: e.button,
        count: e.count,
        modifierKeys: e.modifierKeys
    });
}
function Dt(e, t) {
    return {
        _privacyMode: t,
        button: e.button
    };
}
function Ot(e, t, r) {
    return new It._3({
        button: e.button
    });
}
function Nt(e, t) {
    return {
        _privacyMode: t,
        button: e.button
    };
}
function Ft(e, t, r) {
    return new It.bG({
        button: e.button
    });
}
function Ut(e, t) {
    return {
        _privacyMode: t,
        path: e.path.map((e)=>Ct(e, t)),
        button: e.button,
        modifierKeys: e.modifierKeys
    };
}
function Lt(e, t, r) {
    return new It.RC({
        path: e.path.map((e)=>kt(e)),
        button: e.button,
        modifierKeys: e.modifierKeys
    });
}
function $t(e, t) {
    return {
        _privacyMode: t,
        coordinate: void 0 !== e.coordinate ? Ct(e.coordinate, t) : void 0,
        direction: e.direction,
        amount: e.amount,
        modifierKeys: e.modifierKeys
    };
}
function Qt(e, t, r) {
    return new It.IC({
        coordinate: void 0 !== e.coordinate ? kt(e.coordinate) : void 0,
        direction: e.direction,
        amount: e.amount,
        modifierKeys: e.modifierKeys
    });
}
function jt(e, t) {
    return {
        _privacyMode: t,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t)
    };
}
function Gt(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new It.hn({
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Ht(e, t) {
    return {
        _privacyMode: t,
        key: e.key,
        holdDurationMs: e.holdDurationMs,
        stroke: e.stroke
    };
}
function zt(e, t, r) {
    return new It.I8({
        key: e.key,
        holdDurationMs: e.holdDurationMs,
        stroke: e.stroke
    });
}
function Wt(e, t) {
    return {
        _privacyMode: t,
        durationMs: e.durationMs
    };
}
function Vt(e, t, r) {
    return new It.wm({
        durationMs: e.durationMs
    });
}
function Kt(e, t) {
    return {
        _privacyMode: t
    };
}
function Yt(e, t, r) {
    return new It.HC({});
}
function Zt(e, t) {
    return {
        _privacyMode: t
    };
}
function Xt(e, t, r) {
    return new It.oQ({});
}
function er(e, t) {
    return {
        _privacyMode: t,
        result: tr(e.result, t)
    };
}
function tr(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: sr(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: ir(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function rr(e, t, r) {
    return new It.ks({
        result: nr(e.result, t, r)
    });
}
function nr(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: or(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: ar(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function sr(e, t) {
    return {
        _privacyMode: t,
        actionCount: e.actionCount,
        durationMs: e.durationMs,
        screenshot: void 0 !== e.screenshot ? (0, n.cZ)(e.screenshot, n.po.CODE, "screenshot", t) : void 0,
        log: void 0 !== e.log ? (0, n.cZ)(e.log, n.po.CODE, "log", t) : void 0,
        screenshotPath: void 0 !== e.screenshotPath ? (0, n.cZ)(e.screenshotPath, n.po.PATH, "screenshot_path", t) : void 0,
        cursorPosition: void 0 !== e.cursorPosition ? Ct(e.cursorPosition, t) : void 0,
        settleMs: e.settleMs,
        settleOutcome: e.settleOutcome
    };
}
function or(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new It.Wd({
        actionCount: e.actionCount,
        durationMs: e.durationMs,
        screenshot: e.screenshot?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        log: e.log?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        screenshotPath: e.screenshotPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        cursorPosition: void 0 !== e.cursorPosition ? kt(e.cursorPosition) : void 0,
        settleMs: e.settleMs,
        settleOutcome: e.settleOutcome
    });
}
function ir(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        actionCount: e.actionCount,
        durationMs: e.durationMs,
        log: void 0 !== e.log ? (0, n.cZ)(e.log, n.po.CODE, "log", t) : void 0,
        screenshot: void 0 !== e.screenshot ? (0, n.cZ)(e.screenshot, n.po.CODE, "screenshot", t) : void 0,
        screenshotPath: void 0 !== e.screenshotPath ? (0, n.cZ)(e.screenshotPath, n.po.PATH, "screenshot_path", t) : void 0
    };
}
function ar(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new It.Jb({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        actionCount: e.actionCount,
        durationMs: e.durationMs,
        log: e.log?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        screenshot: e.screenshot?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        screenshotPath: e.screenshotPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function cr(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? xt(e.args, t) : void 0,
        result: void 0 !== e.result ? er(e.result, t) : void 0
    };
}
function lr(e, t, r) {
    return new It.t8({
        args: void 0 !== e.args ? Tt(e.args, t, r) : void 0,
        result: void 0 !== e.result ? rr(e.result, t, r) : void 0
    });
}
var ur = require("./module-90028.js");
function dr(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        target: pr(e.target, t)
    };
}
function pr(e, t) {
    return e && void 0 !== e.case && "github" === e.case ? {
        case: "github",
        value: fr(e.value, t)
    } : {
        case: void 0,
        value: void 0
    };
}
function mr(e, t, r) {
    return new ur.fW({
        toolCallId: e.toolCallId,
        target: hr(e.target, t, r)
    });
}
function hr(e, t, r) {
    return e && void 0 !== e.case && "github" === e.case ? {
        case: "github",
        value: gr(e.value, t, r)
    } : {
        case: void 0,
        value: void 0
    };
}
function fr(e, t) {
    return {
        _privacyMode: t,
        repository: void 0 !== e.repository ? yr(e.repository, t) : void 0,
        gheApplication: e.gheApplication
    };
}
function gr(e, t, r) {
    return new ur.D3({
        repository: void 0 !== e.repository ? wr(e.repository, t, r) : void 0,
        gheApplication: e.gheApplication
    });
}
function yr(e, t) {
    return {
        _privacyMode: t,
        owner: e.owner,
        repo: e.repo
    };
}
function wr(e, t, r) {
    return new ur.xy({
        owner: e.owner,
        repo: e.repo
    });
}
function vr(e, t) {
    return {
        _privacyMode: t,
        result: _r(e.result, t)
    };
}
function _r(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: br(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Ir(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: kr(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ar(e, t, r) {
    return new ur.TK({
        result: Sr(e.result, t, r)
    });
}
function Sr(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Er(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Cr(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: xr(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function br(e, t) {
    return {
        _privacyMode: t
    };
}
function Er(e, t, r) {
    return new ur.Lz({});
}
function Ir(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Cr(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ur.sr({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function kr(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function xr(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ur.Uf({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Tr(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? dr(e.args, t) : void 0,
        result: void 0 !== e.result ? vr(e.result, t) : void 0
    };
}
function Rr(e, t, r) {
    return new ur.iO({
        args: void 0 !== e.args ? mr(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Ar(e.result, t, r) : void 0
    });
}
function Br(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? dr(e.args, t) : void 0
    };
}
function Pr(e, t, r) {
    return new ur.$1({
        args: void 0 !== e.args ? mr(e.args, t, r) : void 0
    });
}
function Jr(e, t) {
    return {
        _privacyMode: t,
        result: Mr(e.result, t)
    };
}
function Mr(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "approved":
            return {
                case: "approved",
                value: Or(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Fr(e.value, t)
            };
        case "failed":
            return {
                case: "failed",
                value: Lr(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function qr(e, t, r) {
    return new ur.qG({
        result: Dr(e.result, t, r)
    });
}
function Dr(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "approved":
            return {
                case: "approved",
                value: Nr(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Ur(e.value, t, r)
            };
        case "failed":
            return {
                case: "failed",
                value: $r(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Or(e, t) {
    return {
        _privacyMode: t
    };
}
function Nr(e, t, r) {
    return new ur.O9({});
}
function Fr(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function Ur(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ur.lB({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Lr(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function $r(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ur.ik({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Qr = require("./module-47385.js");
function jr(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        agentIds: e.agentIds
    };
}
function Gr(e, t, r) {
    return new Qr.D({
        toolCallId: e.toolCallId,
        agentIds: e.agentIds
    });
}
function Hr(e, t) {
    return {
        _privacyMode: t,
        workers: e.workers.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    bcId: e.bcId,
                    name: (0, n.cZ)(e.name, n.po.CODE, "name", t),
                    lifecycle: e.lifecycle,
                    turnInFlight: e.turnInFlight,
                    lastTerminalTurnStatus: e.lastTerminalTurnStatus,
                    prUrl: e.prUrl,
                    lastActivityAtMs: e.lastActivityAtMs
                };
            })(e, t)),
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t)
    };
}
function zr(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qr.lC({
        workers: e.workers.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Qr.K2({
                    bcId: e.bcId,
                    name: e.name.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    lifecycle: e.lifecycle,
                    turnInFlight: e.turnInFlight,
                    lastTerminalTurnStatus: e.lastTerminalTurnStatus,
                    prUrl: e.prUrl,
                    lastActivityAtMs: e.lastActivityAtMs
                });
            })(e, t, r)),
        message: e.message.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Wr(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Vr(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qr.Wy({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Kr(e, t) {
    return {
        _privacyMode: t,
        result: Yr(e.result, t)
    };
}
function Yr(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Hr(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Wr(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Zr(e, t, r) {
    return new Qr.xX({
        result: Xr(e.result, t, r)
    });
}
function Xr(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: zr(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Vr(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function en(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? jr(e.args, t) : void 0,
        result: void 0 !== e.result ? Kr(e.result, t) : void 0
    };
}
function tn(e, t, r) {
    return new Qr.kX({
        args: void 0 !== e.args ? Gr(e.args) : void 0,
        result: void 0 !== e.result ? Zr(e.result, t, r) : void 0
    });
}
function rn(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        agentId: e.agentId,
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t),
        delivery: e.delivery,
        title: (0, n.cZ)(e.title, n.po.CODE, "title", t),
        model: e.model
    };
}
function nn(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qr.c6({
        toolCallId: e.toolCallId,
        agentId: e.agentId,
        message: e.message.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        delivery: e.delivery,
        title: e.title.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        model: e.model
    });
}
function sn(e, t) {
    return {
        _privacyMode: t,
        workerBcId: e.workerBcId,
        deliveredAs: e.deliveredAs,
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t)
    };
}
function on(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qr.sM({
        workerBcId: e.workerBcId,
        deliveredAs: e.deliveredAs,
        message: e.message.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function an(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function cn(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qr.Pw({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function ln(e, t) {
    return {
        _privacyMode: t,
        result: un(e.result, t)
    };
}
function un(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: sn(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: an(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function dn(e, t, r) {
    return new Qr.iN({
        result: pn(e.result, t, r)
    });
}
function pn(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: on(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: cn(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function mn(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? rn(e.args, t) : void 0,
        result: void 0 !== e.result ? ln(e.result, t) : void 0
    };
}
function hn(e, t, r) {
    return new Qr.PL({
        args: void 0 !== e.args ? nn(e.args, t, r) : void 0,
        result: void 0 !== e.result ? dn(e.result, t, r) : void 0
    });
}
function fn(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        agentId: e.agentId,
        mode: e.mode,
        maxTurns: e.maxTurns
    };
}
function gn(e, t, r) {
    return new Qr.hA({
        toolCallId: e.toolCallId,
        agentId: e.agentId,
        mode: e.mode,
        maxTurns: e.maxTurns
    });
}
function yn(e, t) {
    return {
        _privacyMode: t,
        transcript: (0, n.cZ)(e.transcript, n.po.CODE, "transcript", t),
        truncated: e.truncated
    };
}
function wn(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qr.Zd({
        transcript: e.transcript.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncated: e.truncated
    });
}
function vn(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function _n(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qr.Yc({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function An(e, t) {
    return {
        _privacyMode: t,
        result: Sn(e.result, t)
    };
}
function Sn(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: yn(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: vn(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function bn(e, t, r) {
    return new Qr.rL({
        result: En(e.result, t, r)
    });
}
function En(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: wn(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: _n(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function In(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? fn(e.args, t) : void 0,
        result: void 0 !== e.result ? An(e.result, t) : void 0
    };
}
function Cn(e, t, r) {
    return new Qr.wm({
        args: void 0 !== e.args ? gn(e.args) : void 0,
        result: void 0 !== e.result ? bn(e.result, t, r) : void 0
    });
}
function kn(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        prompt: (0, n.cZ)(e.prompt, n.po.CODE, "prompt", t),
        name: void 0 !== e.name ? (0, n.cZ)(e.name, n.po.CODE, "name", t) : void 0,
        model: e.model,
        baseBranch: void 0 !== e.baseBranch ? (0, n.cZ)(e.baseBranch, n.po.CODE, "base_branch", t) : void 0,
        machineType: e.machineType,
        workerId: e.workerId,
        pool: void 0 !== e.pool ? (0, n.cZ)(e.pool, n.po.CODE, "pool", t) : void 0,
        labels: new Map(Object.entries(e.labels).map(([e, r])=>[
                (0, n.cZ)(e, n.po.CODE, "labels", t),
                (0, n.cZ)(r, n.po.CODE, "labels", t)
            ])),
        environmentBuildId: e.environmentBuildId,
        environmentId: e.environmentId
    };
}
function xn(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qr.NT({
        toolCallId: e.toolCallId,
        prompt: e.prompt.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        name: e.name?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        model: e.model,
        baseBranch: e.baseBranch?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        machineType: e.machineType,
        workerId: e.workerId,
        pool: e.pool?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        labels: Object.fromEntries(Array.from(e.labels.entries()).map(([e, r])=>[
                e.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                }),
                r.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            ])),
        environmentBuildId: e.environmentBuildId,
        environmentId: e.environmentId
    });
}
function Tn(e, t) {
    return {
        _privacyMode: t,
        agentId: e.agentId,
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t)
    };
}
function Rn(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qr.h2({
        agentId: e.agentId,
        message: e.message.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Bn(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        placementApprovalState: e.placementApprovalState
    };
}
function Pn(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qr.o3({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        placementApprovalState: e.placementApprovalState
    });
}
function Jn(e, t) {
    return {
        _privacyMode: t,
        result: Mn(e.result, t)
    };
}
function Mn(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Tn(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Bn(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function qn(e, t, r) {
    return new Qr.$y({
        result: Dn(e.result, t, r)
    });
}
function Dn(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Rn(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Pn(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function On(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? kn(e.args, t) : void 0,
        result: void 0 !== e.result ? Jn(e.result, t) : void 0
    };
}
function Nn(e, t, r) {
    return new Qr.oV({
        args: void 0 !== e.args ? xn(e.args, t, r) : void 0,
        result: void 0 !== e.result ? qn(e.result, t, r) : void 0
    });
}
function Fn(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        agentId: e.agentId
    };
}
function Un(e, t, r) {
    return new Qr.b6({
        toolCallId: e.toolCallId,
        agentId: e.agentId
    });
}
function Ln(e, t) {
    return {
        _privacyMode: t,
        workerBcId: e.workerBcId,
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t)
    };
}
function $n(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qr.lm({
        workerBcId: e.workerBcId,
        message: e.message.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Qn(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function jn(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qr.mE({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Gn(e, t) {
    return {
        _privacyMode: t,
        result: Hn(e.result, t)
    };
}
function Hn(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Ln(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Qn(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function zn(e, t, r) {
    return new Qr.bY({
        result: Wn(e.result, t, r)
    });
}
function Wn(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: $n(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: jn(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Vn(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Fn(e.args, t) : void 0,
        result: void 0 !== e.result ? Gn(e.result, t) : void 0
    };
}
function Kn(e, t, r) {
    return new Qr.UR({
        args: void 0 !== e.args ? Un(e.args) : void 0,
        result: void 0 !== e.result ? zn(e.result, t, r) : void 0
    });
}
var Yn = require("./module-76222.js");
function Zn(e, t) {
    return {
        _privacyMode: t,
        id: e.id,
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
        status: e.status,
        createdAt: e.createdAt,
        updatedAt: e.updatedAt,
        dependencies: e.dependencies
    };
}
function Xn(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Yn.kW({
        id: e.id,
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        status: e.status,
        createdAt: e.createdAt,
        updatedAt: e.updatedAt,
        dependencies: e.dependencies
    });
}
function es(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? rs(e.args, t) : void 0,
        result: void 0 !== e.result ? ss(e.result, t) : void 0
    };
}
function ts(e, t, r) {
    return new Yn.bk({
        args: void 0 !== e.args ? ns(e.args, t, r) : void 0,
        result: void 0 !== e.result ? is(e.result, t, r) : void 0
    });
}
function rs(e, t) {
    return {
        _privacyMode: t,
        todos: e.todos.map((e)=>Zn(e, t)),
        merge: e.merge
    };
}
function ns(e, t, r) {
    return new Yn.wb({
        todos: e.todos.map((e)=>Xn(e, t, r)),
        merge: e.merge
    });
}
function ss(e, t) {
    return {
        _privacyMode: t,
        result: os(e.result, t)
    };
}
function os(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: cs(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: us(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function is(e, t, r) {
    return new Yn.w9({
        result: as(e.result, t, r)
    });
}
function as(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: ls(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: ds(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function cs(e, t) {
    return {
        _privacyMode: t,
        todos: e.todos.map((e)=>Zn(e, t)),
        totalCount: e.totalCount,
        wasMerge: e.wasMerge
    };
}
function ls(e, t, r) {
    return new Yn.q8({
        todos: e.todos.map((e)=>Xn(e, t, r)),
        totalCount: e.totalCount,
        wasMerge: e.wasMerge
    });
}
function us(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function ds(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Yn.fr({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function ps(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? hs(e.args, t) : void 0,
        result: void 0 !== e.result ? gs(e.result, t) : void 0
    };
}
function ms(e, t, r) {
    return new Yn.AJ({
        args: void 0 !== e.args ? fs(e.args, t, r) : void 0,
        result: void 0 !== e.result ? ws(e.result, t, r) : void 0
    });
}
function hs(e, t) {
    return {
        _privacyMode: t,
        statusFilter: e.statusFilter,
        idFilter: e.idFilter
    };
}
function fs(e, t, r) {
    return new Yn.n_({
        statusFilter: e.statusFilter,
        idFilter: e.idFilter
    });
}
function gs(e, t) {
    return {
        _privacyMode: t,
        result: ys(e.result, t)
    };
}
function ys(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: _s(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Ss(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ws(e, t, r) {
    return new Yn.Py({
        result: vs(e.result, t, r)
    });
}
function vs(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: As(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: bs(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function _s(e, t) {
    return {
        _privacyMode: t,
        todos: e.todos.map((e)=>Zn(e, t)),
        totalCount: e.totalCount
    };
}
function As(e, t, r) {
    return new Yn.Pf({
        todos: e.todos.map((e)=>Xn(e, t, r)),
        totalCount: e.totalCount
    });
}
function Ss(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function bs(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Yn.U5({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Es = require("./module-48170.js");
function Is(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? ks(e.args, t) : void 0,
        result: void 0 !== e.result ? Ts(e.result, t) : void 0
    };
}
function Cs(e, t, r) {
    return new Es.Ih({
        args: void 0 !== e.args ? xs(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Bs(e.result, t, r) : void 0
    });
}
function ks(e, t) {
    return {
        _privacyMode: t,
        plan: (0, n.cZ)(e.plan, n.po.CODE, "plan", t),
        todos: e.todos.map((e)=>Zn(e, t)),
        overview: (0, n.cZ)(e.overview, n.po.CODE, "overview", t),
        name: (0, n.cZ)(e.name, n.po.CODE, "name", t),
        isProject: e.isProject,
        phases: e.phases.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    name: (0, n.cZ)(e.name, n.po.CODE, "name", t),
                    todos: e.todos.map((e)=>Zn(e, t))
                };
            })(e, t))
    };
}
function xs(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Es.zC({
        plan: e.plan.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        todos: e.todos.map((e)=>Xn(e, t, r)),
        overview: e.overview.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        name: e.name.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        isProject: e.isProject,
        phases: e.phases.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Es.a0({
                    name: e.name.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    todos: e.todos.map((e)=>Xn(e, t, r))
                });
            })(e, t, r))
    });
}
function Ts(e, t) {
    return {
        _privacyMode: t,
        planUri: (0, n.cZ)(e.planUri, n.po.PATH, "plan_uri", t),
        result: Rs(e.result, t)
    };
}
function Rs(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Js(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: qs(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Bs(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Es.bK({
        planUri: e.planUri.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        result: Ps(e.result, t, r)
    });
}
function Ps(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Ms(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Ds(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Js(e, t) {
    return {
        _privacyMode: t
    };
}
function Ms(e, t, r) {
    return new Es.Jo({});
}
function qs(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Ds(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Es.iY({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Os(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? ks(e.args, t) : void 0,
        toolCallId: e.toolCallId
    };
}
function Ns(e, t, r) {
    return new Es.vR({
        args: void 0 !== e.args ? xs(e.args, t, r) : void 0,
        toolCallId: e.toolCallId
    });
}
function Fs(e, t) {
    return {
        _privacyMode: t,
        result: void 0 !== e.result ? Ts(e.result, t) : void 0
    };
}
function Us(e, t, r) {
    return new Es.gz({
        result: void 0 !== e.result ? Bs(e.result, t, r) : void 0
    });
}
var Ls = require("./module-19260.js");
function $s(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        toolCallId: e.toolCallId
    };
}
function Qs(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ls.dn({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId
    });
}
function js(e, t) {
    return {
        _privacyMode: t,
        result: Gs(e.result, t)
    };
}
function Gs(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Ws(e.value, t)
            };
        case "fileNotFound":
            return {
                case: "fileNotFound",
                value: Ks(e.value, t)
            };
        case "notFile":
            return {
                case: "notFile",
                value: Zs(e.value, t)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: eo(e.value, t)
            };
        case "fileBusy":
            return {
                case: "fileBusy",
                value: ro(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: so(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: io(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Hs(e, t, r) {
    return new Ls.Pi({
        result: zs(e.result, t, r)
    });
}
function zs(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Vs(e.value, t, r)
            };
        case "fileNotFound":
            return {
                case: "fileNotFound",
                value: Ys(e.value, t, r)
            };
        case "notFile":
            return {
                case: "notFile",
                value: Xs(e.value, t, r)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: to(e.value, t, r)
            };
        case "fileBusy":
            return {
                case: "fileBusy",
                value: no(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: oo(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: ao(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ws(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        deletedFile: (0, n.cZ)(e.deletedFile, n.po.PATH, "deleted_file", t),
        fileSize: e.fileSize,
        prevContent: (0, n.cZ)(e.prevContent, n.po.CODE, "prev_content", t)
    };
}
function Vs(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ls.fl({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        deletedFile: e.deletedFile.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        fileSize: e.fileSize,
        prevContent: e.prevContent.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Ks(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t)
    };
}
function Ys(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ls.n0({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Zs(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        actualType: e.actualType
    };
}
function Xs(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ls.LX({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        actualType: e.actualType
    });
}
function eo(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        clientVisibleError: (0, n.cZ)(e.clientVisibleError, n.po.CODE, "client_visible_error", t),
        isReadonly: e.isReadonly
    };
}
function to(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ls.QG({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        clientVisibleError: e.clientVisibleError.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        isReadonly: e.isReadonly
    });
}
function ro(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t)
    };
}
function no(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ls.vX({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function so(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function oo(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ls.iq({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function io(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function ao(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ls.GU({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var co = require("./module-50565.js");
function lo(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? $s(e.args, t) : void 0,
        result: void 0 !== e.result ? js(e.result, t) : void 0
    };
}
function uo(e, t, r) {
    return new co.Y({
        args: void 0 !== e.args ? Qs(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Hs(e.result, t, r) : void 0
    });
}
var po = require("./module-55525.js");
function mo(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        prUrl: e.prUrl,
        addLabels: e.addLabels.map((e)=>(0, n.cZ)(e, n.po.PATH, "add_labels", t)),
        removeLabels: e.removeLabels.map((e)=>(0, n.cZ)(e, n.po.PATH, "remove_labels", t))
    };
}
function ho(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new po.TR({
        toolCallId: e.toolCallId,
        prUrl: e.prUrl,
        addLabels: e.addLabels.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        removeLabels: e.removeLabels.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            }))
    });
}
function fo(e, t) {
    return {
        _privacyMode: t,
        result: go(e.result, t)
    };
}
function go(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: vo(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Ao(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function yo(e, t, r) {
    return new po.xc({
        result: wo(e.result, t, r)
    });
}
function wo(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: _o(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: So(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function vo(e, t) {
    return {
        _privacyMode: t,
        prUrl: e.prUrl,
        prNumber: e.prNumber,
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t)
    };
}
function _o(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new po.dT({
        prUrl: e.prUrl,
        prNumber: e.prNumber,
        message: e.message.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Ao(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function So(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new po.M2({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function bo(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? mo(e.args, t) : void 0,
        result: void 0 !== e.result ? fo(e.result, t) : void 0
    };
}
function Eo(e, t, r) {
    return new po.Kn({
        args: void 0 !== e.args ? ho(e.args, t, r) : void 0,
        result: void 0 !== e.result ? yo(e.result, t, r) : void 0
    });
}
var Io = require("./module-6450.js");
function Co(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        streamContent: void 0 !== e.streamContent ? (0, n.cZ)(e.streamContent, n.po.CODE, "stream_content", t) : void 0
    };
}
function ko(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Io.g$({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        streamContent: e.streamContent?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function xo(e, t) {
    return {
        _privacyMode: t,
        result: To(e.result, t)
    };
}
function To(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Po(e.value, t)
            };
        case "fileNotFound":
            return {
                case: "fileNotFound",
                value: Mo(e.value, t)
            };
        case "readPermissionDenied":
            return {
                case: "readPermissionDenied",
                value: Do(e.value, t)
            };
        case "writePermissionDenied":
            return {
                case: "writePermissionDenied",
                value: No(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Uo(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: $o(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ro(e, t, r) {
    return new Io.Kc({
        result: Bo(e.result, t, r)
    });
}
function Bo(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Jo(e.value, t, r)
            };
        case "fileNotFound":
            return {
                case: "fileNotFound",
                value: qo(e.value, t, r)
            };
        case "readPermissionDenied":
            return {
                case: "readPermissionDenied",
                value: Oo(e.value, t, r)
            };
        case "writePermissionDenied":
            return {
                case: "writePermissionDenied",
                value: Fo(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Lo(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Qo(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Po(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        linesAdded: e.linesAdded,
        linesRemoved: e.linesRemoved,
        diffString: void 0 !== e.diffString ? (0, n.cZ)(e.diffString, n.po.CODE, "diff_string", t) : void 0,
        beforeFullFileContent: void 0 !== e.beforeFullFileContent ? (0, n.cZ)(e.beforeFullFileContent, n.po.CODE, "before_full_file_content", t) : void 0,
        afterFullFileContent: (0, n.cZ)(e.afterFullFileContent, n.po.CODE, "after_full_file_content", t),
        message: void 0 !== e.message ? (0, n.cZ)(e.message, n.po.CODE, "message", t) : void 0
    };
}
function Jo(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Io.SG({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        linesAdded: e.linesAdded,
        linesRemoved: e.linesRemoved,
        diffString: e.diffString?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        beforeFullFileContent: e.beforeFullFileContent?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        afterFullFileContent: e.afterFullFileContent.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        message: e.message?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Mo(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t)
    };
}
function qo(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Io.kF({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Do(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t)
    };
}
function Oo(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Io.nF({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function No(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        isReadonly: e.isReadonly
    };
}
function Fo(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Io.uK({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        isReadonly: e.isReadonly
    });
}
function Uo(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function Lo(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Io.pl({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function $o(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        modelVisibleError: void 0 !== e.modelVisibleError ? (0, n.cZ)(e.modelVisibleError, n.po.CODE, "model_visible_error", t) : void 0
    };
}
function Qo(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Io.F({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        modelVisibleError: e.modelVisibleError?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function jo(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Co(e.args, t) : void 0,
        result: void 0 !== e.result ? xo(e.result, t) : void 0
    };
}
function Go(e, t, r) {
    return new Io.T6({
        args: void 0 !== e.args ? ko(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Ro(e.result, t, r) : void 0
    });
}
function Ho(e, t) {
    return {
        _privacyMode: t,
        streamContentDelta: (0, n.cZ)(e.streamContentDelta, n.po.CODE, "stream_content_delta", t)
    };
}
function zo(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Io.fw({
        streamContentDelta: e.streamContentDelta.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Wo = require("./module-21819.js");
function Vo(e, t) {
    return {
        _privacyMode: t,
        bcIds: e.bcIds,
        sources: e.sources,
        statuses: e.statuses,
        includeTeamWide: e.includeTeamWide,
        includeArchived: e.includeArchived,
        limit: e.limit,
        includeTranscript: e.includeTranscript,
        activeSince: e.activeSince
    };
}
function Ko(e, t, r) {
    return new Wo.wd({
        bcIds: e.bcIds,
        sources: e.sources,
        statuses: e.statuses,
        includeTeamWide: e.includeTeamWide,
        includeArchived: e.includeArchived,
        limit: e.limit,
        includeTranscript: e.includeTranscript,
        activeSince: e.activeSince
    });
}
function Yo(e, t) {
    return {
        _privacyMode: t,
        result: Zo(e.result, t)
    };
}
function Zo(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: ti(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: ni(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Xo(e, t, r) {
    return new Wo.K2({
        result: ei(e.result, t, r)
    });
}
function ei(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: ri(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: si(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ti(e, t) {
    return {
        _privacyMode: t,
        summary: (0, n.cZ)(e.summary, n.po.CODE, "summary", t),
        agentCount: e.agentCount,
        writtenPaths: e.writtenPaths.map((e)=>(0, n.cZ)(e, n.po.PATH, "written_paths", t)),
        unavailableBcIds: e.unavailableBcIds
    };
}
function ri(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Wo.gD({
        summary: e.summary.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        agentCount: e.agentCount,
        writtenPaths: e.writtenPaths.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        unavailableBcIds: e.unavailableBcIds
    });
}
function ni(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function si(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Wo.XH({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function oi(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Vo(e.args, t) : void 0,
        result: void 0 !== e.result ? Yo(e.result, t) : void 0
    };
}
function ii(e, t, r) {
    return new Wo.H({
        args: void 0 !== e.args ? Ko(e.args) : void 0,
        result: void 0 !== e.result ? Xo(e.result, t, r) : void 0
    });
}
var ai = require("./module-31489.js");
function ci(e, t) {
    return {
        _privacyMode: t,
        url: e.url,
        toolCallId: e.toolCallId
    };
}
function li(e, t, r) {
    return new ai.UM({
        url: e.url,
        toolCallId: e.toolCallId
    });
}
function ui(e, t) {
    return {
        _privacyMode: t,
        result: di(e.result, t)
    };
}
function di(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: hi(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: gi(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function pi(e, t, r) {
    return new ai.uN({
        result: mi(e.result, t, r)
    });
}
function mi(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: fi(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: yi(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function hi(e, t) {
    return {
        _privacyMode: t,
        url: e.url,
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
        statusCode: e.statusCode,
        contentType: e.contentType
    };
}
function fi(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ai.Uk({
        url: e.url,
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        statusCode: e.statusCode,
        contentType: e.contentType
    });
}
function gi(e, t) {
    return {
        _privacyMode: t,
        url: e.url,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function yi(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ai.fk({
        url: e.url,
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var wi = require("./module-98320.js");
function vi(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? ci(e.args, t) : void 0,
        result: void 0 !== e.result ? ui(e.result, t) : void 0
    };
}
function _i(e, t, r) {
    return new wi.b({
        args: void 0 !== e.args ? li(e.args) : void 0,
        result: void 0 !== e.result ? pi(e.result, t, r) : void 0
    });
}
var Ai = require("./module-97747.js");
function Si(e, t) {
    return {
        _privacyMode: t,
        description: (0, n.cZ)(e.description, n.po.CODE, "description", t),
        filePath: void 0 !== e.filePath ? (0, n.cZ)(e.filePath, n.po.PATH, "file_path", t) : void 0,
        referenceImagePaths: e.referenceImagePaths.map((e)=>(0, n.cZ)(e, n.po.PATH, "reference_image_paths", t)),
        aspectRatio: e.aspectRatio
    };
}
function bi(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ai.u7({
        description: e.description.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        filePath: e.filePath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        referenceImagePaths: e.referenceImagePaths.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        aspectRatio: e.aspectRatio
    });
}
function Ei(e, t) {
    return {
        _privacyMode: t,
        result: Ii(e.result, t)
    };
}
function Ii(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: xi(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Ri(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ci(e, t, r) {
    return new Ai.k4({
        result: ki(e.result, t, r)
    });
}
function ki(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Ti(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Bi(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function xi(e, t) {
    return {
        _privacyMode: t,
        filePath: (0, n.cZ)(e.filePath, n.po.PATH, "file_path", t),
        imageData: (0, n.cZ)(e.imageData, n.po.CODE, "image_data", t)
    };
}
function Ti(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ai.gS({
        filePath: e.filePath.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        imageData: e.imageData.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Ri(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Bi(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ai.Ly({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Pi(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Si(e.args, t) : void 0,
        result: void 0 !== e.result ? Ei(e.result, t) : void 0
    };
}
function Ji(e, t, r) {
    return new Ai.r9({
        args: void 0 !== e.args ? bi(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Ci(e.result, t, r) : void 0
    });
}
function Mi(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Si(e.args, t) : void 0,
        toolCallId: e.toolCallId
    };
}
function qi(e, t, r) {
    return new Ai.Uj({
        args: void 0 !== e.args ? bi(e.args, t, r) : void 0,
        toolCallId: e.toolCallId
    });
}
function Di(e, t) {
    return {
        _privacyMode: t,
        result: Oi(e.result, t)
    };
}
function Oi(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "approved":
            return {
                case: "approved",
                value: Ui(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: $i(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ni(e, t, r) {
    return new Ai.vW({
        result: Fi(e.result, t, r)
    });
}
function Fi(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "approved":
            return {
                case: "approved",
                value: Li(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Qi(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ui(e, t) {
    return {
        _privacyMode: t,
        description: (0, n.cZ)(e.description, n.po.CODE, "description", t)
    };
}
function Li(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ai.l3({
        description: e.description.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function $i(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function Qi(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ai.Uq({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var ji = require("./module-92093.js");
function Gi(e, t) {
    return {
        _privacyMode: t,
        prompt: (0, n.cZ)(e.prompt, n.po.CODE, "prompt", t),
        filePath: void 0 !== e.filePath ? (0, n.cZ)(e.filePath, n.po.PATH, "file_path", t) : void 0,
        imagePath: void 0 !== e.imagePath ? (0, n.cZ)(e.imagePath, n.po.PATH, "image_path", t) : void 0,
        referenceImagePaths: e.referenceImagePaths.map((e)=>(0, n.cZ)(e, n.po.PATH, "reference_image_paths", t)),
        durationSeconds: e.durationSeconds,
        aspectRatio: e.aspectRatio,
        resolution: e.resolution
    };
}
function Hi(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ji.sb({
        prompt: e.prompt.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        filePath: e.filePath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        imagePath: e.imagePath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        referenceImagePaths: e.referenceImagePaths.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        durationSeconds: e.durationSeconds,
        aspectRatio: e.aspectRatio,
        resolution: e.resolution
    });
}
function zi(e, t) {
    return {
        _privacyMode: t,
        result: Wi(e.result, t)
    };
}
function Wi(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Yi(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Xi(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Vi(e, t, r) {
    return new ji.gl({
        result: Ki(e.result, t, r)
    });
}
function Ki(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Zi(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: ea(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Yi(e, t) {
    return {
        _privacyMode: t,
        filePath: (0, n.cZ)(e.filePath, n.po.PATH, "file_path", t),
        durationSeconds: e.durationSeconds
    };
}
function Zi(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ji.e4({
        filePath: e.filePath.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        durationSeconds: e.durationSeconds
    });
}
function Xi(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function ea(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ji.do({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function ta(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Gi(e.args, t) : void 0,
        result: void 0 !== e.result ? zi(e.result, t) : void 0
    };
}
function ra(e, t, r) {
    return new ji.jm({
        args: void 0 !== e.args ? Hi(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Vi(e.result, t, r) : void 0
    });
}
var na = require("./module-62379.js");
function sa(e, t) {
    return {
        _privacyMode: t,
        server: e.server,
        toolName: e.toolName,
        pattern: e.pattern,
        toolCallId: e.toolCallId
    };
}
function oa(e, t, r) {
    return new na.VM({
        server: e.server,
        toolName: e.toolName,
        pattern: e.pattern,
        toolCallId: e.toolCallId
    });
}
function ia(e, t) {
    return {
        _privacyMode: t,
        result: aa(e.result, t)
    };
}
function aa(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: ua(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: pa(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ca(e, t, r) {
    return new na.Al({
        result: la(e.result, t, r)
    });
}
function la(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: da(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: ma(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ua(e, t) {
    return {
        _privacyMode: t,
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
        outputFilePath: void 0 !== e.outputFilePath ? (0, n.cZ)(e.outputFilePath, n.po.PATH, "output_file_path", t) : void 0
    };
}
function da(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new na.RN({
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputFilePath: e.outputFilePath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function pa(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function ma(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new na.iz({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function ha(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? sa(e.args, t) : void 0,
        result: void 0 !== e.result ? ia(e.result, t) : void 0
    };
}
function fa(e, t, r) {
    return new na.mJ({
        args: void 0 !== e.args ? oa(e.args) : void 0,
        result: void 0 !== e.result ? ca(e.result, t, r) : void 0
    });
}
var ga = require("./module-58544.js");
function ya(e, t) {
    return {
        _privacyMode: t,
        targetDirectory: void 0 !== e.targetDirectory ? (0, n.cZ)(e.targetDirectory, n.po.PATH, "target_directory", t) : void 0,
        globPattern: (0, n.cZ)(e.globPattern, n.po.PATH, "glob_pattern", t)
    };
}
function wa(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ga.kt({
        targetDirectory: e.targetDirectory?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        globPattern: e.globPattern.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function va(e, t) {
    return {
        _privacyMode: t,
        result: _a(e.result, t)
    };
}
function _a(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Ia(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: ba(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Aa(e, t, r) {
    return new ga.g1({
        result: Sa(e.result, t, r)
    });
}
function Sa(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Ca(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Ea(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ba(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Ea(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ga.NU({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Ia(e, t) {
    return {
        _privacyMode: t,
        pattern: (0, n.cZ)(e.pattern, n.po.PATH, "pattern", t),
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        files: e.files.map((e)=>(0, n.cZ)(e, n.po.PATH, "files", t)),
        totalFiles: e.totalFiles,
        clientTruncated: e.clientTruncated,
        ripgrepTruncated: e.ripgrepTruncated
    };
}
function Ca(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ga.wJ({
        pattern: e.pattern.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        files: e.files.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        totalFiles: e.totalFiles,
        clientTruncated: e.clientTruncated,
        ripgrepTruncated: e.ripgrepTruncated
    });
}
function ka(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? ya(e.args, t) : void 0,
        result: void 0 !== e.result ? va(e.result, t) : void 0
    };
}
function xa(e, t, r) {
    return new ga.FM({
        args: void 0 !== e.args ? wa(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Aa(e.result, t, r) : void 0
    });
}
var Ta = require("./module-53145.js");
function Ra(e, t) {
    return {
        _privacyMode: t,
        objective: (0, n.cZ)(e.objective, n.po.CODE, "objective", t)
    };
}
function Ba(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ta.L4({
        objective: e.objective.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Pa(e, t) {
    return {
        _privacyMode: t
    };
}
function Ja(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Ma(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ta.uQ({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function qa(e, t) {
    return {
        _privacyMode: t,
        result: Da(e.result, t)
    };
}
function Da(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Pa(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Ja(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Oa(e, t, r) {
    return new Ta.dl({
        result: Na(e.result, t, r)
    });
}
function Na(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: (e.value, new Ta.XV({}))
            };
        case "error":
            return {
                case: "error",
                value: Ma(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Fa(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Ra(e.args, t) : void 0,
        result: void 0 !== e.result ? qa(e.result, t) : void 0
    };
}
function Ua(e, t, r) {
    return new Ta.GS({
        args: void 0 !== e.args ? Ba(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Oa(e.result, t, r) : void 0
    });
}
function La(e, t) {
    return {
        _privacyMode: t,
        status: e.status
    };
}
function $a(e, t, r) {
    return new Ta._F({
        status: e.status
    });
}
function Qa(e, t) {
    return {
        _privacyMode: t,
        status: e.status
    };
}
function ja(e, t) {
    return {
        _privacyMode: t,
        result: Ga(e.result, t)
    };
}
function Ga(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Qa(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Ja(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ha(e, t, r) {
    return new Ta.KD({
        result: za(e.result, t, r)
    });
}
function za(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: (n = e.value, new Ta.ar({
                    status: n.status
                }))
            };
        case "error":
            return {
                case: "error",
                value: Ma(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
    var n;
}
function Wa(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? La(e.args, t) : void 0,
        result: void 0 !== e.result ? ja(e.result, t) : void 0
    };
}
function Va(e, t, r) {
    return new Ta.Ll({
        args: void 0 !== e.args ? $a(e.args) : void 0,
        result: void 0 !== e.result ? Ha(e.result, t, r) : void 0
    });
}
var Ka = require("./module-13574.js");
function Ya(e, t) {
    return {
        _privacyMode: t,
        decisionLogPath: void 0 !== e.decisionLogPath ? (0, n.cZ)(e.decisionLogPath, n.po.PATH, "decision_log_path", t) : void 0,
        logFormat: e.logFormat
    };
}
function Za(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ka.Qq({
        decisionLogPath: e.decisionLogPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        logFormat: e.logFormat
    });
}
function Xa(e, t) {
    return {
        _privacyMode: t,
        version: e.version,
        defaultAction: e.defaultAction,
        deny: e.deny,
        allow: e.allow,
        logging: void 0 !== e.logging ? Ya(e.logging, t) : void 0
    };
}
function ec(e, t, r) {
    return new Ka.RB({
        version: e.version,
        defaultAction: e.defaultAction,
        deny: e.deny,
        allow: e.allow,
        logging: void 0 !== e.logging ? Za(e.logging, t, r) : void 0
    });
}
function tc(e, t) {
    return {
        _privacyMode: t,
        type: e.type,
        networkAccess: e.networkAccess,
        additionalReadwritePaths: e.additionalReadwritePaths.map((e)=>(0, n.cZ)(e, n.po.PATH, "additional_readwrite_paths", t)),
        additionalReadonlyPaths: e.additionalReadonlyPaths.map((e)=>(0, n.cZ)(e, n.po.PATH, "additional_readonly_paths", t)),
        debugOutputDir: void 0 !== e.debugOutputDir ? (0, n.cZ)(e.debugOutputDir, n.po.PATH, "debug_output_dir", t) : void 0,
        disableTmpWrite: e.disableTmpWrite,
        allowlistEscalated: e.allowlistEscalated,
        enableSharedBuildCache: e.enableSharedBuildCache,
        networkPolicy: void 0 !== e.networkPolicy ? Xa(e.networkPolicy, t) : void 0,
        networkPolicyStrict: e.networkPolicyStrict,
        captureDenies: e.captureDenies,
        skipStatsigDefaults: e.skipStatsigDefaults,
        readBoundary: e.readBoundary,
        additionalReadPaths: e.additionalReadPaths.map((e)=>(0, n.cZ)(e, n.po.PATH, "additional_read_paths", t))
    };
}
function rc(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ka.Mw({
        type: e.type,
        networkAccess: e.networkAccess,
        additionalReadwritePaths: e.additionalReadwritePaths.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        additionalReadonlyPaths: e.additionalReadonlyPaths.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        debugOutputDir: e.debugOutputDir?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        disableTmpWrite: e.disableTmpWrite,
        allowlistEscalated: e.allowlistEscalated,
        enableSharedBuildCache: e.enableSharedBuildCache,
        networkPolicy: void 0 !== e.networkPolicy ? ec(e.networkPolicy, t, r) : void 0,
        networkPolicyStrict: e.networkPolicyStrict,
        captureDenies: e.captureDenies,
        skipStatsigDefaults: e.skipStatsigDefaults,
        readBoundary: e.readBoundary,
        additionalReadPaths: e.additionalReadPaths.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            }))
    });
}
var nc = require("./module-59903.js");
function sc(e, t) {
    return {
        _privacyMode: t,
        pattern: (0, n.cZ)(e.pattern, n.po.CODE, "pattern", t),
        path: void 0 !== e.path ? (0, n.cZ)(e.path, n.po.PATH, "path", t) : void 0,
        glob: void 0 !== e.glob ? (0, n.cZ)(e.glob, n.po.PATH, "glob", t) : void 0,
        outputMode: e.outputMode,
        contextBefore: e.contextBefore,
        contextAfter: e.contextAfter,
        context: e.context,
        caseInsensitive: e.caseInsensitive,
        type: e.type,
        headLimit: e.headLimit,
        multiline: e.multiline,
        sort: e.sort,
        sortAscending: e.sortAscending,
        toolCallId: e.toolCallId,
        sandboxPolicy: void 0 !== e.sandboxPolicy ? tc(e.sandboxPolicy, t) : void 0,
        offset: e.offset
    };
}
function oc(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new nc.Qj({
        pattern: e.pattern.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        path: e.path?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        glob: e.glob?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputMode: e.outputMode,
        contextBefore: e.contextBefore,
        contextAfter: e.contextAfter,
        context: e.context,
        caseInsensitive: e.caseInsensitive,
        type: e.type,
        headLimit: e.headLimit,
        multiline: e.multiline,
        sort: e.sort,
        sortAscending: e.sortAscending,
        toolCallId: e.toolCallId,
        sandboxPolicy: void 0 !== e.sandboxPolicy ? rc(e.sandboxPolicy, t, r) : void 0,
        offset: e.offset
    });
}
function ic(e, t) {
    return {
        _privacyMode: t,
        result: ac(e.result, t)
    };
}
function ac(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: pc(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: uc(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function cc(e, t, r) {
    return new nc.Ud({
        result: lc(e.result, t, r)
    });
}
function lc(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: mc(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: dc(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function uc(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function dc(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new nc.ts({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function pc(e, t) {
    return {
        _privacyMode: t,
        pattern: (0, n.cZ)(e.pattern, n.po.CODE, "pattern", t),
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        outputMode: e.outputMode,
        workspaceResults: new Map(Object.entries(e.workspaceResults).map(([e, r])=>[
                (0, n.cZ)(e, n.po.PATH, "workspace_results", t),
                hc(r, t)
            ])),
        activeEditorResult: void 0 !== e.activeEditorResult ? hc(e.activeEditorResult, t) : void 0
    };
}
function mc(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new nc._0({
        pattern: e.pattern.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputMode: e.outputMode,
        workspaceResults: Object.fromEntries(Array.from(e.workspaceResults.entries()).map(([e, o])=>[
                e.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                }),
                gc(o, t, r)
            ])),
        activeEditorResult: void 0 !== e.activeEditorResult ? gc(e.activeEditorResult, t, r) : void 0
    });
}
function hc(e, t) {
    return {
        _privacyMode: t,
        result: fc(e.result, t)
    };
}
function fc(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "count":
            return {
                case: "count",
                value: wc(e.value, t)
            };
        case "files":
            return {
                case: "files",
                value: _c(e.value, t)
            };
        case "content":
            return {
                case: "content",
                value: Sc(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function gc(e, t, r) {
    return new nc.vD({
        result: yc(e.result, t, r)
    });
}
function yc(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "count":
            return {
                case: "count",
                value: vc(e.value, t, r)
            };
        case "files":
            return {
                case: "files",
                value: Ac(e.value, t, r)
            };
        case "content":
            return {
                case: "content",
                value: bc(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function wc(e, t) {
    return {
        _privacyMode: t,
        counts: e.counts.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    file: (0, n.cZ)(e.file, n.po.PATH, "file", t),
                    count: e.count
                };
            })(e, t)),
        totalFiles: e.totalFiles,
        totalMatches: e.totalMatches,
        clientTruncated: e.clientTruncated,
        ripgrepTruncated: e.ripgrepTruncated,
        headLimitApplied: e.headLimitApplied,
        offsetApplied: e.offsetApplied
    };
}
function vc(e, t, r) {
    return new nc.xA({
        counts: e.counts.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new nc.sS({
                    file: e.file.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    count: e.count
                });
            })(e, t, r)),
        totalFiles: e.totalFiles,
        totalMatches: e.totalMatches,
        clientTruncated: e.clientTruncated,
        ripgrepTruncated: e.ripgrepTruncated,
        headLimitApplied: e.headLimitApplied,
        offsetApplied: e.offsetApplied
    });
}
function _c(e, t) {
    return {
        _privacyMode: t,
        files: e.files.map((e)=>(0, n.cZ)(e, n.po.PATH, "files", t)),
        totalFiles: e.totalFiles,
        clientTruncated: e.clientTruncated,
        ripgrepTruncated: e.ripgrepTruncated,
        headLimitApplied: e.headLimitApplied,
        offsetApplied: e.offsetApplied
    };
}
function Ac(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new nc.T7({
        files: e.files.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        totalFiles: e.totalFiles,
        clientTruncated: e.clientTruncated,
        ripgrepTruncated: e.ripgrepTruncated,
        headLimitApplied: e.headLimitApplied,
        offsetApplied: e.offsetApplied
    });
}
function Sc(e, t) {
    return {
        _privacyMode: t,
        matches: e.matches.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    file: (0, n.cZ)(e.file, n.po.PATH, "file", t),
                    matches: e.matches.map((e)=>(function(e, t) {
                            return {
                                _privacyMode: t,
                                lineNumber: e.lineNumber,
                                content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
                                contentTruncated: e.contentTruncated,
                                isContextLine: e.isContextLine
                            };
                        })(e, t))
                };
            })(e, t)),
        totalLines: e.totalLines,
        totalMatchedLines: e.totalMatchedLines,
        clientTruncated: e.clientTruncated,
        ripgrepTruncated: e.ripgrepTruncated,
        headLimitApplied: e.headLimitApplied,
        offsetApplied: e.offsetApplied
    };
}
function bc(e, t, r) {
    return new nc.Zp({
        matches: e.matches.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new nc.uI({
                    file: e.file.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    matches: e.matches.map((e)=>(function(e, t, r) {
                            const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                            return new nc.dx({
                                lineNumber: e.lineNumber,
                                content: e.content.unwrap(t, {
                                    redactUnallowedFieldsInsteadOfThrowing: n,
                                    enforcing: s
                                }),
                                contentTruncated: e.contentTruncated,
                                isContextLine: e.isContextLine
                            });
                        })(e, t, r))
                });
            })(e, t, r)),
        totalLines: e.totalLines,
        totalMatchedLines: e.totalMatchedLines,
        clientTruncated: e.clientTruncated,
        ripgrepTruncated: e.ripgrepTruncated,
        headLimitApplied: e.headLimitApplied,
        offsetApplied: e.offsetApplied
    });
}
var Ec = require("./module-15354.js");
function Ic(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? sc(e.args, t) : void 0,
        result: void 0 !== e.result ? ic(e.result, t) : void 0
    };
}
function Cc(e, t, r) {
    return new Ec.j({
        args: void 0 !== e.args ? oc(e.args, t, r) : void 0,
        result: void 0 !== e.result ? cc(e.result, t, r) : void 0
    });
}
var kc = require("./module-21180.js");
function xc(e, t) {
    return {
        _privacyMode: t,
        hookEventName: e.hookEventName,
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t)
    };
}
function Tc(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new kc.C({
        hookEventName: e.hookEventName,
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Rc = require("./module-72730.js");
function Bc(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        ignore: e.ignore.map((e)=>(0, n.cZ)(e, n.po.PATH, "ignore", t)),
        toolCallId: e.toolCallId,
        sandboxPolicy: void 0 !== e.sandboxPolicy ? tc(e.sandboxPolicy, t) : void 0,
        timeoutMs: e.timeoutMs
    };
}
function Pc(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Rc.xe({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        ignore: e.ignore.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        toolCallId: e.toolCallId,
        sandboxPolicy: void 0 !== e.sandboxPolicy ? rc(e.sandboxPolicy, t, r) : void 0,
        timeoutMs: e.timeoutMs
    });
}
function Jc(e, t) {
    return {
        _privacyMode: t,
        result: Mc(e.result, t)
    };
}
function Mc(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Oc(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Lc(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Qc(e.value, t)
            };
        case "timeout":
            return {
                case: "timeout",
                value: Gc(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function qc(e, t, r) {
    return new Rc.fv({
        result: Dc(e.result, t, r)
    });
}
function Dc(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Nc(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: $c(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: jc(e.value, t, r)
            };
        case "timeout":
            return {
                case: "timeout",
                value: Hc(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Oc(e, t) {
    return {
        _privacyMode: t,
        directoryTreeRoot: void 0 !== e.directoryTreeRoot ? Fc(e.directoryTreeRoot, t) : void 0
    };
}
function Nc(e, t, r) {
    return new Rc.PC({
        directoryTreeRoot: void 0 !== e.directoryTreeRoot ? Uc(e.directoryTreeRoot, t, r) : void 0
    });
}
function Fc(e, t) {
    return {
        _privacyMode: t,
        absPath: (0, n.cZ)(e.absPath, n.po.PATH, "abs_path", t),
        childrenDirs: e.childrenDirs.map((e)=>Fc(e, t)),
        childrenFiles: e.childrenFiles.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    name: (0, n.cZ)(e.name, n.po.PATH, "name", t),
                    terminalMetadata: void 0 !== e.terminalMetadata ? zc(e.terminalMetadata, t) : void 0
                };
            })(e, t)),
        childrenWereProcessed: e.childrenWereProcessed,
        fullSubtreeExtensionCounts: new Map(Object.entries(e.fullSubtreeExtensionCounts)),
        numFiles: e.numFiles
    };
}
function Uc(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Rc.vq({
        absPath: e.absPath.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        childrenDirs: e.childrenDirs.map((e)=>Uc(e, t, r)),
        childrenFiles: e.childrenFiles.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Rc.ur({
                    name: e.name.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    terminalMetadata: void 0 !== e.terminalMetadata ? Wc(e.terminalMetadata, t, r) : void 0
                });
            })(e, t, r)),
        childrenWereProcessed: e.childrenWereProcessed,
        fullSubtreeExtensionCounts: Object.fromEntries(e.fullSubtreeExtensionCounts.entries()),
        numFiles: e.numFiles
    });
}
function Lc(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function $c(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Rc.uj({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Qc(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function jc(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Rc.k2({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Gc(e, t) {
    return {
        _privacyMode: t,
        directoryTreeRoot: void 0 !== e.directoryTreeRoot ? Fc(e.directoryTreeRoot, t) : void 0
    };
}
function Hc(e, t, r) {
    return new Rc.ze({
        directoryTreeRoot: void 0 !== e.directoryTreeRoot ? Uc(e.directoryTreeRoot, t, r) : void 0
    });
}
function zc(e, t) {
    return {
        _privacyMode: t,
        cwd: void 0 !== e.cwd ? (0, n.cZ)(e.cwd, n.po.PATH, "cwd", t) : void 0,
        lastCommands: e.lastCommands.map((e)=>Vc(e, t)),
        lastModifiedMs: e.lastModifiedMs,
        currentCommand: void 0 !== e.currentCommand ? Vc(e.currentCommand, t) : void 0
    };
}
function Wc(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Rc.Y$({
        cwd: e.cwd?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        lastCommands: e.lastCommands.map((e)=>Kc(e, t, r)),
        lastModifiedMs: e.lastModifiedMs,
        currentCommand: void 0 !== e.currentCommand ? Kc(e.currentCommand, t, r) : void 0
    });
}
function Vc(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        exitCode: e.exitCode,
        timestampMs: e.timestampMs,
        durationMs: e.durationMs
    };
}
function Kc(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Rc.Sf({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        exitCode: e.exitCode,
        timestampMs: e.timestampMs,
        durationMs: e.durationMs
    });
}
var Yc = require("./module-14151.js");
function Zc(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Bc(e.args, t) : void 0,
        result: void 0 !== e.result ? Jc(e.result, t) : void 0
    };
}
function Xc(e, t, r) {
    return new Yc.q({
        args: void 0 !== e.args ? Pc(e.args, t, r) : void 0,
        result: void 0 !== e.result ? qc(e.result, t, r) : void 0
    });
}
var el = require("./module-36038.js"), tl = require("./module-34175.js");
function rl(e, t) {
    return {
        _privacyMode: t,
        name: e.name,
        providerIdentifier: e.providerIdentifier,
        toolName: e.toolName,
        description: (0, n.cZ)(e.description, n.po.CODE, "description", t),
        inputSchema: e.inputSchema?.toJson(),
        inputSchemaJson: e.inputSchemaJson,
        outputSchemaJson: e.outputSchemaJson,
        annotationsJson: e.annotationsJson,
        metaJson: void 0 !== e.metaJson ? (0, n.cZ)(e.metaJson, n.po.CODE, "meta_json", t) : void 0
    };
}
function nl(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new tl.gd({
        name: e.name,
        providerIdentifier: e.providerIdentifier,
        toolName: e.toolName,
        description: e.description.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        inputSchema: void 0 !== e.inputSchema ? el.Value.fromJson(e.inputSchema) : void 0,
        inputSchemaJson: e.inputSchemaJson,
        outputSchemaJson: e.outputSchemaJson,
        annotationsJson: e.annotationsJson,
        metaJson: e.metaJson?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function sl(e, t) {
    return {
        _privacyMode: t,
        serverName: e.serverName,
        instructions: (0, n.cZ)(e.instructions, n.po.CODE, "instructions", t),
        serverIdentifier: e.serverIdentifier
    };
}
function ol(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new tl.I0({
        serverName: e.serverName,
        instructions: e.instructions.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        serverIdentifier: e.serverIdentifier
    });
}
function il(e, t) {
    return {
        _privacyMode: t,
        serverName: e.serverName,
        serverIdentifier: e.serverIdentifier,
        folderPath: void 0 !== e.folderPath ? (0, n.cZ)(e.folderPath, n.po.PATH, "folder_path", t) : void 0,
        serverUseInstructions: void 0 !== e.serverUseInstructions ? (0, n.cZ)(e.serverUseInstructions, n.po.CODE, "server_use_instructions", t) : void 0,
        tools: e.tools.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    toolName: e.toolName,
                    definitionPath: void 0 !== e.definitionPath ? (0, n.cZ)(e.definitionPath, n.po.PATH, "definition_path", t) : void 0,
                    description: e.description,
                    inputSchema: e.inputSchema?.toJson(),
                    inputSchemaJson: e.inputSchemaJson,
                    annotationsJson: e.annotationsJson
                };
            })(e, t)),
        plugin: e.plugin,
        marketplace: e.marketplace,
        pluginDbId: e.pluginDbId,
        marketplaceId: e.marketplaceId
    };
}
function al(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new tl.UC({
        serverName: e.serverName,
        serverIdentifier: e.serverIdentifier,
        folderPath: e.folderPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        serverUseInstructions: e.serverUseInstructions?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        tools: e.tools.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new tl.E$({
                    toolName: e.toolName,
                    definitionPath: e.definitionPath?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    description: e.description,
                    inputSchema: void 0 !== e.inputSchema ? el.Value.fromJson(e.inputSchema) : void 0,
                    inputSchemaJson: e.inputSchemaJson,
                    annotationsJson: e.annotationsJson
                });
            })(e, t, r)),
        plugin: e.plugin,
        marketplace: e.marketplace,
        pluginDbId: e.pluginDbId,
        marketplaceId: e.marketplaceId
    });
}
function cl(e, t) {
    return {
        _privacyMode: t,
        enabled: e.enabled,
        workspaceProjectDir: (0, n.cZ)(e.workspaceProjectDir, n.po.PATH, "workspace_project_dir", t),
        mcpDescriptors: e.mcpDescriptors.map((e)=>il(e, t))
    };
}
function ll(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new tl.Is({
        enabled: e.enabled,
        workspaceProjectDir: e.workspaceProjectDir.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        mcpDescriptors: e.mcpDescriptors.map((e)=>al(e, t, r))
    });
}
function ul(e, t) {
    return {
        _privacyMode: t,
        enabled: e.enabled,
        mcpDescriptors: e.mcpDescriptors.map((e)=>il(e, t))
    };
}
function dl(e, t, r) {
    return new tl.U_({
        enabled: e.enabled,
        mcpDescriptors: e.mcpDescriptors.map((e)=>al(e, t, r))
    });
}
var pl = require("./module-16821.js");
function ml(e, t) {
    return {
        _privacyMode: t,
        serverIdentifier: e.serverIdentifier,
        toolCallId: e.toolCallId
    };
}
function hl(e, t, r) {
    return new pl.QZ({
        serverIdentifier: e.serverIdentifier,
        toolCallId: e.toolCallId
    });
}
function fl(e, t) {
    return {
        _privacyMode: t,
        result: gl(e.result, t)
    };
}
function gl(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: vl(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Al(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: bl(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function yl(e, t, r) {
    return new pl.wT({
        result: wl(e.result, t, r)
    });
}
function wl(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: _l(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Sl(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: El(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function vl(e, t) {
    return {
        _privacyMode: t,
        serverIdentifier: e.serverIdentifier
    };
}
function _l(e, t, r) {
    return new pl.Ib({
        serverIdentifier: e.serverIdentifier
    });
}
function Al(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Sl(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new pl.vP({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function bl(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function El(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new pl.P2({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Il(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? ml(e.args, t) : void 0,
        result: void 0 !== e.result ? fl(e.result, t) : void 0
    };
}
function Cl(e, t, r) {
    return new pl.NX({
        args: void 0 !== e.args ? hl(e.args) : void 0,
        result: void 0 !== e.result ? yl(e.result, t, r) : void 0
    });
}
function kl(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? ml(e.args, t) : void 0
    };
}
function xl(e, t) {
    return {
        _privacyMode: t,
        result: Tl(e.result, t)
    };
}
function Tl(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "approved":
            return {
                case: "approved",
                value: Pl(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Ml(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Rl(e, t, r) {
    return new pl.h({
        result: Bl(e.result, t, r)
    });
}
function Bl(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "approved":
            return {
                case: "approved",
                value: Jl(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: ql(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Pl(e, t) {
    return {
        _privacyMode: t
    };
}
function Jl(e, t, r) {
    return new pl.D5({});
}
function Ml(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function ql(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new pl.OI({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Dl = require("./module-11197.js");
function Ol(e, t) {
    return {
        _privacyMode: t,
        name: e.name,
        args: new Map(Object.entries(e.args).map(([e, t])=>[
                e,
                t.toJson()
            ])),
        toolCallId: e.toolCallId,
        providerIdentifier: e.providerIdentifier,
        toolName: e.toolName,
        smartModeApproval: void 0 !== e.smartModeApproval ? d(e.smartModeApproval, t) : void 0,
        smartModeApprovalOnly: e.smartModeApprovalOnly,
        skipApproval: e.skipApproval,
        serverIdentifier: e.serverIdentifier,
        symbolicPathArguments: e.symbolicPathArguments.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
                    sha256: e.sha256,
                    sizeBytes: e.sizeBytes
                };
            })(e, t))
    };
}
function Nl(e, t, r) {
    return new Dl.E_({
        name: e.name,
        args: Object.fromEntries(Array.from(e.args.entries()).map(([e, t])=>[
                e,
                el.Value.fromJson(t)
            ])),
        toolCallId: e.toolCallId,
        providerIdentifier: e.providerIdentifier,
        toolName: e.toolName,
        smartModeApproval: void 0 !== e.smartModeApproval ? p(e.smartModeApproval, t, r) : void 0,
        smartModeApprovalOnly: e.smartModeApprovalOnly,
        skipApproval: e.skipApproval,
        serverIdentifier: e.serverIdentifier,
        symbolicPathArguments: e.symbolicPathArguments.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Dl.n({
                    path: e.path.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    sha256: e.sha256,
                    sizeBytes: e.sizeBytes
                });
            })(e, t, r))
    });
}
function Fl(e, t) {
    return {
        _privacyMode: t,
        result: Ul(e.result, t)
    };
}
function Ul(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: nu(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: ou(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: lu(e.value, t)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: du(e.value, t)
            };
        case "toolNotFound":
            return {
                case: "toolNotFound",
                value: Gl(e.value, t)
            };
        case "serverNotFound":
            return {
                case: "serverNotFound",
                value: zl(e.value, t)
            };
        case "approved":
            return {
                case: "approved",
                value: Ql(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ll(e, t, r) {
    return new Dl.iz({
        result: $l(e.result, t, r)
    });
}
function $l(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: su(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: iu(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: uu(e.value, t, r)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: pu(e.value, t, r)
            };
        case "toolNotFound":
            return {
                case: "toolNotFound",
                value: Hl(e.value, t, r)
            };
        case "serverNotFound":
            return {
                case: "serverNotFound",
                value: Wl(e.value, t, r)
            };
        case "approved":
            return {
                case: "approved",
                value: jl(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ql(e, t) {
    return {
        _privacyMode: t
    };
}
function jl(e, t, r) {
    return new Dl.Ke({});
}
function Gl(e, t) {
    return {
        _privacyMode: t,
        name: e.name,
        availableTools: e.availableTools,
        recovery: void 0 !== e.recovery ? au(e.recovery, t) : void 0
    };
}
function Hl(e, t, r) {
    return new Dl.WV({
        name: e.name,
        availableTools: e.availableTools,
        recovery: void 0 !== e.recovery ? cu(e.recovery, t, r) : void 0
    });
}
function zl(e, t) {
    return {
        _privacyMode: t,
        name: e.name,
        availableServers: e.availableServers
    };
}
function Wl(e, t, r) {
    return new Dl.JL({
        name: e.name,
        availableServers: e.availableServers
    });
}
function Vl(e, t) {
    return {
        _privacyMode: t,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t),
        outputLocation: void 0 !== e.outputLocation ? l(e.outputLocation, t) : void 0
    };
}
function Kl(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.zN({
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputLocation: void 0 !== e.outputLocation ? u(e.outputLocation, t, r) : void 0
    });
}
function Yl(e, t) {
    return {
        _privacyMode: t,
        data: (0, n.Yz)(e.data, n.po.CODE, "data", t),
        mimeType: e.mimeType
    };
}
function Zl(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.do({
        data: e.data.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        mimeType: e.mimeType
    });
}
function Xl(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "text":
            return {
                case: "text",
                value: Vl(e.value, t)
            };
        case "image":
            return {
                case: "image",
                value: Yl(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function eu(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "text":
            return {
                case: "text",
                value: Kl(e.value, t, r)
            };
        case "image":
            return {
                case: "image",
                value: Zl(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function tu(e, t) {
    return {
        _privacyMode: t,
        body: (0, n.cZ)(e.body, n.po.CODE, "body", t)
    };
}
function ru(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.Kp({
        body: e.body.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function nu(e, t) {
    return {
        _privacyMode: t,
        content: e.content.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    content: Xl(e.content, t)
                };
            })(e, t)),
        isError: e.isError,
        structuredContent: e.structuredContent?.toJson(),
        systemReminders: e.systemReminders.map((e)=>tu(e, t))
    };
}
function su(e, t, r) {
    return new Dl.QW({
        content: e.content.map((e)=>(function(e, t, r) {
                return new Dl._Z({
                    content: eu(e.content, t, r)
                });
            })(e, t, r)),
        isError: e.isError,
        structuredContent: void 0 !== e.structuredContent ? el.Struct.fromJson(e.structuredContent) : void 0,
        systemReminders: e.systemReminders.map((e)=>ru(e, t, r))
    });
}
function ou(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        needsAuth: e.needsAuth,
        recovery: void 0 !== e.recovery ? au(e.recovery, t) : void 0,
        httpStatus: e.httpStatus
    };
}
function iu(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.Nh({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        needsAuth: e.needsAuth,
        recovery: void 0 !== e.recovery ? cu(e.recovery, t, r) : void 0,
        httpStatus: e.httpStatus
    });
}
function au(e, t) {
    return {
        _privacyMode: t,
        outcome: e.outcome,
        freshInputSchemaJson: void 0 !== e.freshInputSchemaJson ? (0, n.cZ)(e.freshInputSchemaJson, n.po.CODE, "fresh_input_schema_json", t) : void 0,
        availableTools: e.availableTools
    };
}
function cu(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.qe({
        outcome: e.outcome,
        freshInputSchemaJson: e.freshInputSchemaJson?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        availableTools: e.availableTools
    });
}
function lu(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t),
        isReadonly: e.isReadonly
    };
}
function uu(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.xo({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        isReadonly: e.isReadonly
    });
}
function du(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        isReadonly: e.isReadonly
    };
}
function pu(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.HQ({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        isReadonly: e.isReadonly
    });
}
function mu(e, t) {
    return {
        _privacyMode: t,
        serverIdentifiers: e.serverIdentifiers,
        kickOnly: e.kickOnly,
        refreshPolicy: e.refreshPolicy
    };
}
function hu(e, t) {
    return {
        _privacyMode: t,
        result: fu(e.result, t)
    };
}
function fu(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: wu(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: _u(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Su(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function gu(e, t, r) {
    return new Dl._W({
        result: yu(e.result, t, r)
    });
}
function yu(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: vu(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Au(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: bu(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function wu(e, t) {
    return {
        _privacyMode: t,
        servers: e.servers.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    serverName: e.serverName,
                    serverIdentifier: e.serverIdentifier,
                    plugin: e.plugin,
                    marketplace: e.marketplace,
                    tools: e.tools.map((e)=>rl(e, t)),
                    instructions: e.instructions.map((e)=>sl(e, t)),
                    status: e.status,
                    errorMessage: void 0 !== e.errorMessage ? (0, n.cZ)(e.errorMessage, n.po.CODE, "error_message", t) : void 0
                };
            })(e, t))
    };
}
function vu(e, t, r) {
    return new Dl.pv({
        servers: e.servers.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Dl.XE({
                    serverName: e.serverName,
                    serverIdentifier: e.serverIdentifier,
                    plugin: e.plugin,
                    marketplace: e.marketplace,
                    tools: e.tools.map((e)=>nl(e, t, r)),
                    instructions: e.instructions.map((e)=>ol(e, t, r)),
                    status: e.status,
                    errorMessage: e.errorMessage?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r))
    });
}
function _u(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Au(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.Io({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Su(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function bu(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.GN({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Eu(e, t) {
    return {
        _privacyMode: t,
        server: e.server
    };
}
function Iu(e, t, r) {
    return new Dl.kj({
        server: e.server
    });
}
function Cu(e, t) {
    return {
        _privacyMode: t,
        result: ku(e.result, t)
    };
}
function ku(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Ru(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Pu(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Mu(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function xu(e, t, r) {
    return new Dl.kP({
        result: Tu(e.result, t, r)
    });
}
function Tu(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Bu(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Ju(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: qu(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ru(e, t) {
    return {
        _privacyMode: t,
        resources: e.resources.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    uri: (0, n.cZ)(e.uri, n.po.PATH, "uri", t),
                    name: e.name,
                    description: void 0 !== e.description ? (0, n.cZ)(e.description, n.po.CODE, "description", t) : void 0,
                    mimeType: e.mimeType,
                    server: e.server,
                    annotations: new Map(Object.entries(e.annotations).map(([e, r])=>[
                            e,
                            (0, n.cZ)(r, n.po.CODE, "annotations", t)
                        ]))
                };
            })(e, t))
    };
}
function Bu(e, t, r) {
    return new Dl.T2({
        resources: e.resources.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Dl.X2({
                    uri: e.uri.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    name: e.name,
                    description: e.description?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    mimeType: e.mimeType,
                    server: e.server,
                    annotations: Object.fromEntries(Array.from(e.annotations.entries()).map(([e, r])=>[
                            e,
                            r.unwrap(t, {
                                redactUnallowedFieldsInsteadOfThrowing: n,
                                enforcing: s
                            })
                        ]))
                });
            })(e, t, r))
    });
}
function Pu(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Ju(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.w2({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Mu(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function qu(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.Is({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Du(e, t) {
    return {
        _privacyMode: t,
        server: e.server,
        uri: (0, n.cZ)(e.uri, n.po.PATH, "uri", t),
        downloadPath: void 0 !== e.downloadPath ? (0, n.cZ)(e.downloadPath, n.po.PATH, "download_path", t) : void 0,
        toolCallId: e.toolCallId,
        smartModeApproval: void 0 !== e.smartModeApproval ? d(e.smartModeApproval, t) : void 0
    };
}
function Ou(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.DI({
        server: e.server,
        uri: e.uri.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        downloadPath: e.downloadPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId,
        smartModeApproval: void 0 !== e.smartModeApproval ? p(e.smartModeApproval, t, r) : void 0
    });
}
function Nu(e, t) {
    return {
        _privacyMode: t,
        result: Fu(e.result, t)
    };
}
function Fu(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: $u(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Hu(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Wu(e.value, t)
            };
        case "notFound":
            return {
                case: "notFound",
                value: Ku(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Uu(e, t, r) {
    return new Dl.ZD({
        result: Lu(e.result, t, r)
    });
}
function Lu(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: ju(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: zu(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Vu(e.value, t, r)
            };
        case "notFound":
            return {
                case: "notFound",
                value: Yu(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function $u(e, t) {
    return {
        _privacyMode: t,
        uri: (0, n.cZ)(e.uri, n.po.PATH, "uri", t),
        name: e.name,
        description: void 0 !== e.description ? (0, n.cZ)(e.description, n.po.CODE, "description", t) : void 0,
        mimeType: e.mimeType,
        annotations: new Map(Object.entries(e.annotations).map(([e, r])=>[
                e,
                (0, n.cZ)(r, n.po.CODE, "annotations", t)
            ])),
        downloadPath: void 0 !== e.downloadPath ? (0, n.cZ)(e.downloadPath, n.po.PATH, "download_path", t) : void 0,
        outputLocation: void 0 !== e.outputLocation ? l(e.outputLocation, t) : void 0,
        metaJson: void 0 !== e.metaJson ? (0, n.cZ)(e.metaJson, n.po.CODE, "meta_json", t) : void 0,
        content: Qu(e.content, t)
    };
}
function Qu(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "text":
            return {
                case: "text",
                value: (0, n.cZ)(e.value, n.po.CODE, "text", t)
            };
        case "blob":
            return {
                case: "blob",
                value: (0, n.Yz)(e.value, n.po.CODE, "blob", t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ju(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.KZ({
        uri: e.uri.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        name: e.name,
        description: e.description?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        mimeType: e.mimeType,
        annotations: Object.fromEntries(Array.from(e.annotations.entries()).map(([e, r])=>[
                e,
                r.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            ])),
        downloadPath: e.downloadPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputLocation: void 0 !== e.outputLocation ? u(e.outputLocation, t, r) : void 0,
        metaJson: e.metaJson?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        content: Gu(e.content, t, r)
    });
}
function Gu(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "text":
            return {
                case: "text",
                value: e.value.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            };
        case "blob":
            return {
                case: "blob",
                value: e.value.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Hu(e, t) {
    return {
        _privacyMode: t,
        uri: (0, n.cZ)(e.uri, n.po.PATH, "uri", t),
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function zu(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.Jx({
        uri: e.uri.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Wu(e, t) {
    return {
        _privacyMode: t,
        uri: (0, n.cZ)(e.uri, n.po.PATH, "uri", t),
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function Vu(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.Dh({
        uri: e.uri.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Ku(e, t) {
    return {
        _privacyMode: t,
        uri: (0, n.cZ)(e.uri, n.po.PATH, "uri", t)
    };
}
function Yu(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Dl.ov({
        uri: e.uri.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Zu = require("./module-47103.js");
function Xu(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Eu(e.args, t) : void 0,
        result: void 0 !== e.result ? Cu(e.result, t) : void 0
    };
}
function ed(e, t, r) {
    return new Zu.c({
        args: void 0 !== e.args ? Iu(e.args) : void 0,
        result: void 0 !== e.result ? xu(e.result, t, r) : void 0
    });
}
function td(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Du(e.args, t) : void 0,
        result: void 0 !== e.result ? Nu(e.result, t) : void 0
    };
}
function rd(e, t, r) {
    return new Zu.$({
        args: void 0 !== e.args ? Ou(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Uu(e.result, t, r) : void 0
    });
}
var nd = require("./module-6060.js");
function sd(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        readToolDefReminder: (0, n.cZ)(e.readToolDefReminder, n.po.CODE, "read_tool_def_reminder", t),
        systemReminders: e.systemReminders.map((e)=>tu(e, t))
    };
}
function od(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new nd.jZ({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        readToolDefReminder: e.readToolDefReminder.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        systemReminders: e.systemReminders.map((e)=>ru(e, t, r))
    });
}
function id(e, t) {
    return {
        _privacyMode: t,
        result: ad(e.result, t)
    };
}
function ad(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: nu(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: sd(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: lu(e.value, t)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: du(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function cd(e, t, r) {
    return new nd.QN({
        result: ld(e.result, t, r)
    });
}
function ld(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: su(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: od(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: uu(e.value, t, r)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: pu(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ud(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Ol(e.args, t) : void 0,
        result: void 0 !== e.result ? id(e.result, t) : void 0,
        description: e.description
    };
}
function dd(e, t, r) {
    return new nd.nz({
        args: void 0 !== e.args ? Nl(e.args, t, r) : void 0,
        result: void 0 !== e.result ? cd(e.result, t, r) : void 0,
        description: e.description
    });
}
var pd = require("./module-41834.js"), md = require("./module-38036.js");
function hd(e, t) {
    return {
        _privacyMode: t,
        truncated: e.truncated,
        truncatedBy: e.truncatedBy,
        totalLines: e.totalLines,
        outputLines: e.outputLines,
        outputBytes: e.outputBytes,
        maxLines: e.maxLines,
        maxBytes: e.maxBytes,
        firstLineExceedsLimit: e.firstLineExceedsLimit,
        lastLinePartial: e.lastLinePartial
    };
}
function fd(e, t, r) {
    return new md.d({
        truncated: e.truncated,
        truncatedBy: e.truncatedBy,
        totalLines: e.totalLines,
        outputLines: e.outputLines,
        outputBytes: e.outputBytes,
        maxLines: e.maxLines,
        maxBytes: e.maxBytes,
        firstLineExceedsLimit: e.firstLineExceedsLimit,
        lastLinePartial: e.lastLinePartial
    });
}
function gd(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? wd(e.args, t) : void 0,
        result: void 0 !== e.result ? _d(e.result, t) : void 0
    };
}
function yd(e, t, r) {
    return new pd.WJ({
        args: void 0 !== e.args ? vd(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Sd(e.result, t, r) : void 0
    });
}
function wd(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        timeout: e.timeout
    };
}
function vd(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new pd.TI({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        timeout: e.timeout
    });
}
function _d(e, t) {
    return {
        _privacyMode: t,
        result: Ad(e.result, t)
    };
}
function Ad(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Ed(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Cd(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Sd(e, t, r) {
    return new pd.To({
        result: bd(e.result, t, r)
    });
}
function bd(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Id(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: kd(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ed(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.CODE, "output", t),
        truncation: void 0 !== e.truncation ? hd(e.truncation, t) : void 0,
        fullOutputPath: void 0 !== e.fullOutputPath ? (0, n.cZ)(e.fullOutputPath, n.po.PATH, "full_output_path", t) : void 0
    };
}
function Id(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new pd.XL({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncation: void 0 !== e.truncation ? fd(e.truncation) : void 0,
        fullOutputPath: e.fullOutputPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Cd(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        truncation: void 0 !== e.truncation ? hd(e.truncation, t) : void 0,
        fullOutputPath: void 0 !== e.fullOutputPath ? (0, n.cZ)(e.fullOutputPath, n.po.PATH, "full_output_path", t) : void 0
    };
}
function kd(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new pd.eC({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncation: void 0 !== e.truncation ? fd(e.truncation) : void 0,
        fullOutputPath: e.fullOutputPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var xd = require("./module-82628.js");
function Td(e, t) {
    return {
        _privacyMode: t,
        oldText: (0, n.cZ)(e.oldText, n.po.CODE, "old_text", t),
        newText: (0, n.cZ)(e.newText, n.po.CODE, "new_text", t)
    };
}
function Rd(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new xd.mR({
        oldText: e.oldText.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        newText: e.newText.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Bd(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Jd(e.args, t) : void 0,
        result: void 0 !== e.result ? qd(e.result, t) : void 0
    };
}
function Pd(e, t, r) {
    return new xd.EN({
        args: void 0 !== e.args ? Md(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Od(e.result, t, r) : void 0
    });
}
function Jd(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        edits: e.edits.map((e)=>Td(e, t))
    };
}
function Md(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new xd.$V({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        edits: e.edits.map((e)=>Rd(e, t, r))
    });
}
function qd(e, t) {
    return {
        _privacyMode: t,
        result: Dd(e.result, t)
    };
}
function Dd(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Fd(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Ld(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Qd(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Od(e, t, r) {
    return new xd.nX({
        result: Nd(e.result, t, r)
    });
}
function Nd(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Ud(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: $d(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: jd(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Fd(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.CODE, "output", t),
        diff: (0, n.cZ)(e.diff, n.po.CODE, "diff", t),
        patch: (0, n.cZ)(e.patch, n.po.CODE, "patch", t),
        firstChangedLine: e.firstChangedLine
    };
}
function Ud(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new xd.Bz({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        diff: e.diff.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        patch: e.patch.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        firstChangedLine: e.firstChangedLine
    });
}
function Ld(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function $d(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new xd.uX({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Qd(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function jd(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new xd.AM({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Gd = require("./module-78639.js");
function Hd(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Wd(e.args, t) : void 0,
        result: void 0 !== e.result ? Kd(e.result, t) : void 0
    };
}
function zd(e, t, r) {
    return new Gd.h1({
        args: void 0 !== e.args ? Vd(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Zd(e.result, t, r) : void 0
    });
}
function Wd(e, t) {
    return {
        _privacyMode: t,
        pattern: (0, n.cZ)(e.pattern, n.po.PATH, "pattern", t),
        path: void 0 !== e.path ? (0, n.cZ)(e.path, n.po.PATH, "path", t) : void 0,
        limit: e.limit
    };
}
function Vd(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Gd.YE({
        pattern: e.pattern.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        path: e.path?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        limit: e.limit
    });
}
function Kd(e, t) {
    return {
        _privacyMode: t,
        result: Yd(e.result, t)
    };
}
function Yd(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: ep(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: rp(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Zd(e, t, r) {
    return new Gd.k4({
        result: Xd(e.result, t, r)
    });
}
function Xd(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: tp(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: np(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ep(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.PATH, "output", t),
        truncation: void 0 !== e.truncation ? hd(e.truncation, t) : void 0,
        resultLimitReached: e.resultLimitReached
    };
}
function tp(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Gd.mZ({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncation: void 0 !== e.truncation ? fd(e.truncation) : void 0,
        resultLimitReached: e.resultLimitReached
    });
}
function rp(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function np(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Gd.xD({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var sp = require("./module-64772.js");
function op(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? ap(e.args, t) : void 0,
        result: void 0 !== e.result ? lp(e.result, t) : void 0
    };
}
function ip(e, t, r) {
    return new sp.Os({
        args: void 0 !== e.args ? cp(e.args, t, r) : void 0,
        result: void 0 !== e.result ? dp(e.result, t, r) : void 0
    });
}
function ap(e, t) {
    return {
        _privacyMode: t,
        pattern: (0, n.cZ)(e.pattern, n.po.CODE, "pattern", t),
        path: void 0 !== e.path ? (0, n.cZ)(e.path, n.po.PATH, "path", t) : void 0,
        glob: void 0 !== e.glob ? (0, n.cZ)(e.glob, n.po.PATH, "glob", t) : void 0,
        ignoreCase: e.ignoreCase,
        literal: e.literal,
        context: e.context,
        limit: e.limit
    };
}
function cp(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sp.NQ({
        pattern: e.pattern.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        path: e.path?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        glob: e.glob?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        ignoreCase: e.ignoreCase,
        literal: e.literal,
        context: e.context,
        limit: e.limit
    });
}
function lp(e, t) {
    return {
        _privacyMode: t,
        result: up(e.result, t)
    };
}
function up(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: mp(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: fp(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function dp(e, t, r) {
    return new sp.xS({
        result: pp(e.result, t, r)
    });
}
function pp(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: hp(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: gp(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function mp(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.CODE, "output", t),
        truncation: void 0 !== e.truncation ? hd(e.truncation, t) : void 0,
        matchLimitReached: e.matchLimitReached,
        linesTruncated: e.linesTruncated
    };
}
function hp(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sp.N1({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncation: void 0 !== e.truncation ? fd(e.truncation) : void 0,
        matchLimitReached: e.matchLimitReached,
        linesTruncated: e.linesTruncated
    });
}
function fp(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function gp(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sp.AM({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var yp = require("./module-35733.js");
function wp(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? _p(e.args, t) : void 0,
        result: void 0 !== e.result ? Sp(e.result, t) : void 0
    };
}
function vp(e, t, r) {
    return new yp.Tf({
        args: void 0 !== e.args ? Ap(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Ep(e.result, t, r) : void 0
    });
}
function _p(e, t) {
    return {
        _privacyMode: t,
        path: void 0 !== e.path ? (0, n.cZ)(e.path, n.po.PATH, "path", t) : void 0,
        limit: e.limit
    };
}
function Ap(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yp.ag({
        path: e.path?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        limit: e.limit
    });
}
function Sp(e, t) {
    return {
        _privacyMode: t,
        result: bp(e.result, t)
    };
}
function bp(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Cp(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: xp(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ep(e, t, r) {
    return new yp.G6({
        result: Ip(e.result, t, r)
    });
}
function Ip(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: kp(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Tp(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Cp(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.PATH, "output", t),
        truncation: void 0 !== e.truncation ? hd(e.truncation, t) : void 0,
        entryLimitReached: e.entryLimitReached
    };
}
function kp(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yp.e6({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncation: void 0 !== e.truncation ? fd(e.truncation) : void 0,
        entryLimitReached: e.entryLimitReached
    });
}
function xp(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Tp(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yp.XJ({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Rp = require("./module-26880.js");
function Bp(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Jp(e.args, t) : void 0,
        result: void 0 !== e.result ? qp(e.result, t) : void 0
    };
}
function Pp(e, t, r) {
    return new Rp.oT({
        args: void 0 !== e.args ? Mp(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Op(e.result, t, r) : void 0
    });
}
function Jp(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        offset: e.offset,
        limit: e.limit
    };
}
function Mp(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Rp.tC({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        offset: e.offset,
        limit: e.limit
    });
}
function qp(e, t) {
    return {
        _privacyMode: t,
        result: Dp(e.result, t)
    };
}
function Dp(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Fp(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Lp(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Op(e, t, r) {
    return new Rp.z1({
        result: Np(e.result, t, r)
    });
}
function Np(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Up(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: $p(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Fp(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.CODE, "output", t),
        truncation: void 0 !== e.truncation ? hd(e.truncation, t) : void 0
    };
}
function Up(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Rp.ni({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncation: void 0 !== e.truncation ? fd(e.truncation) : void 0
    });
}
function Lp(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function $p(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Rp.oS({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Qp = require("./module-75377.js");
function jp(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Hp(e.args, t) : void 0,
        result: void 0 !== e.result ? Wp(e.result, t) : void 0
    };
}
function Gp(e, t, r) {
    return new Qp.xP({
        args: void 0 !== e.args ? zp(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Kp(e.result, t, r) : void 0
    });
}
function Hp(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t)
    };
}
function zp(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qp.w0({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Wp(e, t) {
    return {
        _privacyMode: t,
        result: Vp(e.result, t)
    };
}
function Vp(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Zp(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: em(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: rm(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Kp(e, t, r) {
    return new Qp.gY({
        result: Yp(e.result, t, r)
    });
}
function Yp(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Xp(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: tm(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: nm(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Zp(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.CODE, "output", t)
    };
}
function Xp(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qp.qb({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function em(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function tm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qp.jE({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function rm(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function nm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Qp.Fe({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var sm = require("./module-76476.js");
function om(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        action: im(e.action, t)
    };
}
function im(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "createPr":
            return {
                case: "createPr",
                value: lm(e.value, t)
            };
        case "updatePr":
            return {
                case: "updatePr",
                value: dm(e.value, t)
            };
        case "postComment":
            return {
                case: "postComment",
                value: mm(e.value, t)
            };
        case "resolveComment":
            return {
                case: "resolveComment",
                value: fm(e.value, t)
            };
        case "getCiStatus":
            return {
                case: "getCiStatus",
                value: ym(e.value, t)
            };
        case "setPrStatus":
            return {
                case: "setPrStatus",
                value: vm(e.value, t)
            };
        case "mergePr":
            return {
                case: "mergePr",
                value: Am(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function am(e, t, r) {
    return new sm.Xd({
        toolCallId: e.toolCallId,
        action: cm(e.action, t, r)
    });
}
function cm(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "createPr":
            return {
                case: "createPr",
                value: um(e.value, t, r)
            };
        case "updatePr":
            return {
                case: "updatePr",
                value: pm(e.value, t, r)
            };
        case "postComment":
            return {
                case: "postComment",
                value: hm(e.value, t, r)
            };
        case "resolveComment":
            return {
                case: "resolveComment",
                value: gm(e.value, t, r)
            };
        case "getCiStatus":
            return {
                case: "getCiStatus",
                value: wm(e.value, t, r)
            };
        case "setPrStatus":
            return {
                case: "setPrStatus",
                value: _m(e.value, t, r)
            };
        case "mergePr":
            return {
                case: "mergePr",
                value: Sm(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function lm(e, t) {
    return {
        _privacyMode: t,
        title: (0, n.cZ)(e.title, n.po.CODE, "title", t),
        body: (0, n.cZ)(e.body, n.po.CODE, "body", t),
        baseBranch: void 0 !== e.baseBranch ? (0, n.cZ)(e.baseBranch, n.po.PATH, "base_branch", t) : void 0,
        draft: e.draft,
        branchName: (0, n.cZ)(e.branchName, n.po.PATH, "branch_name", t),
        addLabels: e.addLabels.map((e)=>(0, n.cZ)(e, n.po.PATH, "add_labels", t)),
        repoUrl: void 0 !== e.repoUrl ? (0, n.cZ)(e.repoUrl, n.po.PATH, "repo_url", t) : void 0,
        skipBranchPrefixCheck: e.skipBranchPrefixCheck,
        stackOnPrNumber: e.stackOnPrNumber
    };
}
function um(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sm.$3({
        title: e.title.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        body: e.body.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        baseBranch: e.baseBranch?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        draft: e.draft,
        branchName: e.branchName.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        addLabels: e.addLabels.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        repoUrl: e.repoUrl?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        skipBranchPrefixCheck: e.skipBranchPrefixCheck,
        stackOnPrNumber: e.stackOnPrNumber
    });
}
function dm(e, t) {
    return {
        _privacyMode: t,
        prUrl: e.prUrl,
        title: void 0 !== e.title ? (0, n.cZ)(e.title, n.po.CODE, "title", t) : void 0,
        body: void 0 !== e.body ? (0, n.cZ)(e.body, n.po.CODE, "body", t) : void 0,
        baseBranch: void 0 !== e.baseBranch ? (0, n.cZ)(e.baseBranch, n.po.PATH, "base_branch", t) : void 0,
        branchName: void 0 !== e.branchName ? (0, n.cZ)(e.branchName, n.po.PATH, "branch_name", t) : void 0,
        addLabels: e.addLabels.map((e)=>(0, n.cZ)(e, n.po.PATH, "add_labels", t)),
        removeLabels: e.removeLabels.map((e)=>(0, n.cZ)(e, n.po.PATH, "remove_labels", t)),
        repoUrl: void 0 !== e.repoUrl ? (0, n.cZ)(e.repoUrl, n.po.PATH, "repo_url", t) : void 0,
        stackOnPrNumber: e.stackOnPrNumber,
        clearStack: e.clearStack,
        draft: e.draft
    };
}
function pm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sm.YP({
        prUrl: e.prUrl,
        title: e.title?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        body: e.body?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        baseBranch: e.baseBranch?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        branchName: e.branchName?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        addLabels: e.addLabels.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        removeLabels: e.removeLabels.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        repoUrl: e.repoUrl?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        stackOnPrNumber: e.stackOnPrNumber,
        clearStack: e.clearStack,
        draft: e.draft
    });
}
function mm(e, t) {
    return {
        _privacyMode: t,
        prUrl: e.prUrl,
        branchName: void 0 !== e.branchName ? (0, n.cZ)(e.branchName, n.po.PATH, "branch_name", t) : void 0,
        body: (0, n.cZ)(e.body, n.po.CODE, "body", t),
        repoUrl: void 0 !== e.repoUrl ? (0, n.cZ)(e.repoUrl, n.po.PATH, "repo_url", t) : void 0,
        inReplyTo: e.inReplyTo,
        path: void 0 !== e.path ? (0, n.cZ)(e.path, n.po.PATH, "path", t) : void 0,
        line: e.line,
        startLine: e.startLine,
        side: e.side,
        replyToReference: e.replyToReference
    };
}
function hm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sm.ex({
        prUrl: e.prUrl,
        branchName: e.branchName?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        body: e.body.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        repoUrl: e.repoUrl?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        inReplyTo: e.inReplyTo,
        path: e.path?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        line: e.line,
        startLine: e.startLine,
        side: e.side,
        replyToReference: e.replyToReference
    });
}
function fm(e, t) {
    return {
        _privacyMode: t,
        prUrl: e.prUrl,
        branchName: void 0 !== e.branchName ? (0, n.cZ)(e.branchName, n.po.PATH, "branch_name", t) : void 0,
        commentId: e.commentId,
        repoUrl: void 0 !== e.repoUrl ? (0, n.cZ)(e.repoUrl, n.po.PATH, "repo_url", t) : void 0,
        commentReference: e.commentReference
    };
}
function gm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sm.ix({
        prUrl: e.prUrl,
        branchName: e.branchName?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        commentId: e.commentId,
        repoUrl: e.repoUrl?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        commentReference: e.commentReference
    });
}
function ym(e, t) {
    return {
        _privacyMode: t,
        prUrl: e.prUrl,
        branchName: void 0 !== e.branchName ? (0, n.cZ)(e.branchName, n.po.PATH, "branch_name", t) : void 0,
        repoUrl: void 0 !== e.repoUrl ? (0, n.cZ)(e.repoUrl, n.po.PATH, "repo_url", t) : void 0
    };
}
function wm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sm.DU({
        prUrl: e.prUrl,
        branchName: e.branchName?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        repoUrl: e.repoUrl?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function vm(e, t) {
    return {
        _privacyMode: t,
        prUrl: e.prUrl,
        branchName: void 0 !== e.branchName ? (0, n.cZ)(e.branchName, n.po.PATH, "branch_name", t) : void 0,
        repoUrl: void 0 !== e.repoUrl ? (0, n.cZ)(e.repoUrl, n.po.PATH, "repo_url", t) : void 0,
        status: e.status
    };
}
function _m(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sm.Xt({
        prUrl: e.prUrl,
        branchName: e.branchName?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        repoUrl: e.repoUrl?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        status: e.status
    });
}
function Am(e, t) {
    return {
        _privacyMode: t,
        prUrl: e.prUrl,
        branchName: void 0 !== e.branchName ? (0, n.cZ)(e.branchName, n.po.PATH, "branch_name", t) : void 0,
        repoUrl: void 0 !== e.repoUrl ? (0, n.cZ)(e.repoUrl, n.po.PATH, "repo_url", t) : void 0,
        mode: e.mode,
        method: e.method,
        expectedHeadSha: e.expectedHeadSha,
        expectedMemberHeadShas: new Map(Object.entries(e.expectedMemberHeadShas)),
        downstack: e.downstack
    };
}
function Sm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sm.PE({
        prUrl: e.prUrl,
        branchName: e.branchName?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        repoUrl: e.repoUrl?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        mode: e.mode,
        method: e.method,
        expectedHeadSha: e.expectedHeadSha,
        expectedMemberHeadShas: Object.fromEntries(e.expectedMemberHeadShas.entries()),
        downstack: e.downstack
    });
}
function bm(e, t) {
    return {
        _privacyMode: t,
        result: Em(e.result, t)
    };
}
function Em(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: km(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Tm(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Bm(e.value, t)
            };
        case "registered":
            return {
                case: "registered",
                value: Jm(e.value, t)
            };
        case "needsConfirmation":
            return {
                case: "needsConfirmation",
                value: qm(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Im(e, t, r) {
    return new sm.HL({
        result: Cm(e.result, t, r)
    });
}
function Cm(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: xm(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Rm(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Pm(e.value, t, r)
            };
        case "registered":
            return {
                case: "registered",
                value: Mm(e.value, t, r)
            };
        case "needsConfirmation":
            return {
                case: "needsConfirmation",
                value: Dm(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function km(e, t) {
    return {
        _privacyMode: t,
        prUrl: e.prUrl,
        prNumber: e.prNumber,
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t)
    };
}
function xm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sm.N9({
        prUrl: e.prUrl,
        prNumber: e.prNumber,
        message: e.message.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Tm(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Rm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sm.K$({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Bm(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function Pm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sm.sO({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Jm(e, t) {
    return {
        _privacyMode: t,
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t),
        title: (0, n.cZ)(e.title, n.po.CODE, "title", t),
        body: (0, n.cZ)(e.body, n.po.CODE, "body", t),
        baseBranch: void 0 !== e.baseBranch ? (0, n.cZ)(e.baseBranch, n.po.PATH, "base_branch", t) : void 0,
        draft: e.draft,
        branchName: (0, n.cZ)(e.branchName, n.po.PATH, "branch_name", t)
    };
}
function Mm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sm.Ur({
        message: e.message.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        title: e.title.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        body: e.body.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        baseBranch: e.baseBranch?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        draft: e.draft,
        branchName: e.branchName.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function qm(e, t) {
    return {
        _privacyMode: t,
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t),
        discoveredPrUrl: e.discoveredPrUrl,
        discoveredPrNumber: e.discoveredPrNumber,
        discoveredPrTitle: (0, n.cZ)(e.discoveredPrTitle, n.po.CODE, "discovered_pr_title", t),
        branchName: (0, n.cZ)(e.branchName, n.po.PATH, "branch_name", t)
    };
}
function Dm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new sm.Kc({
        message: e.message.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        discoveredPrUrl: e.discoveredPrUrl,
        discoveredPrNumber: e.discoveredPrNumber,
        discoveredPrTitle: e.discoveredPrTitle.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        branchName: e.branchName.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Om(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? om(e.args, t) : void 0,
        result: void 0 !== e.result ? bm(e.result, t) : void 0
    };
}
function Nm(e, t, r) {
    return new sm.AU({
        args: void 0 !== e.args ? am(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Im(e.result, t, r) : void 0
    });
}
function Fm(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? om(e.args, t) : void 0
    };
}
function Um(e, t, r) {
    return new sm.DY({
        args: void 0 !== e.args ? am(e.args, t, r) : void 0
    });
}
var Lm = require("./module-26885.js");
function $m(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        toolCallId: e.toolCallId
    };
}
function Qm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Lm._B({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId
    });
}
function jm(e, t) {
    return {
        _privacyMode: t,
        result: Gm(e.result, t)
    };
}
function Gm(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Wm(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Zm(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: eh(e.value, t)
            };
        case "fileNotFound":
            return {
                case: "fileNotFound",
                value: rh(e.value, t)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: sh(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Hm(e, t, r) {
    return new Lm.Ek({
        result: zm(e.result, t, r)
    });
}
function zm(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Vm(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Xm(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: th(e.value, t, r)
            };
        case "fileNotFound":
            return {
                case: "fileNotFound",
                value: nh(e.value, t, r)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: oh(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Wm(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        diagnostics: e.diagnostics.map((e)=>Km(e, t)),
        totalDiagnostics: e.totalDiagnostics
    };
}
function Vm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Lm.a1({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        diagnostics: e.diagnostics.map((e)=>Ym(e, t, r)),
        totalDiagnostics: e.totalDiagnostics
    });
}
function Km(e, t) {
    return {
        _privacyMode: t,
        severity: e.severity,
        range: void 0 !== e.range ? o(e.range, t) : void 0,
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t),
        source: e.source,
        code: e.code,
        isStale: e.isStale
    };
}
function Ym(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Lm.oQ({
        severity: e.severity,
        range: void 0 !== e.range ? i(e.range, t, r) : void 0,
        message: e.message.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        source: e.source,
        code: e.code,
        isStale: e.isStale
    });
}
function Zm(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Xm(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Lm.Ho({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function eh(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function th(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Lm.J6({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function rh(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t)
    };
}
function nh(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Lm.Mu({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function sh(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t)
    };
}
function oh(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Lm.RP({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var ih = require("./module-43135.js");
function ah(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? lh(e.args, t) : void 0,
        result: void 0 !== e.result ? dh(e.result, t) : void 0
    };
}
function ch(e, t, r) {
    return new ih.pP({
        args: void 0 !== e.args ? uh(e.args, t, r) : void 0,
        result: void 0 !== e.result ? mh(e.result, t, r) : void 0
    });
}
function lh(e, t) {
    return {
        _privacyMode: t,
        paths: e.paths.map((e)=>(0, n.cZ)(e, n.po.PATH, "paths", t))
    };
}
function uh(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ih.u7({
        paths: e.paths.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            }))
    });
}
function dh(e, t) {
    return {
        _privacyMode: t,
        result: ph(e.result, t)
    };
}
function ph(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: fh(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: vh(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function mh(e, t, r) {
    return new ih.Qi({
        result: hh(e.result, t, r)
    });
}
function hh(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: gh(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: _h(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function fh(e, t) {
    return {
        _privacyMode: t,
        fileDiagnostics: e.fileDiagnostics.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
                    diagnostics: e.diagnostics.map((e)=>(function(e, t) {
                            return {
                                _privacyMode: t,
                                severity: e.severity,
                                range: void 0 !== e.range ? yh(e.range, t) : void 0,
                                message: (0, n.cZ)(e.message, n.po.CODE, "message", t),
                                source: e.source,
                                code: e.code,
                                isStale: e.isStale
                            };
                        })(e, t)),
                    diagnosticsCount: e.diagnosticsCount
                };
            })(e, t)),
        totalFiles: e.totalFiles,
        totalDiagnostics: e.totalDiagnostics
    };
}
function gh(e, t, r) {
    return new ih.Yk({
        fileDiagnostics: e.fileDiagnostics.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new ih.PR({
                    path: e.path.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    diagnostics: e.diagnostics.map((e)=>(function(e, t, r) {
                            const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                            return new ih.RY({
                                severity: e.severity,
                                range: void 0 !== e.range ? wh(e.range, t, r) : void 0,
                                message: e.message.unwrap(t, {
                                    redactUnallowedFieldsInsteadOfThrowing: n,
                                    enforcing: s
                                }),
                                source: e.source,
                                code: e.code,
                                isStale: e.isStale
                            });
                        })(e, t, r)),
                    diagnosticsCount: e.diagnosticsCount
                });
            })(e, t, r)),
        totalFiles: e.totalFiles,
        totalDiagnostics: e.totalDiagnostics
    });
}
function yh(e, t) {
    return {
        _privacyMode: t,
        start: void 0 !== e.start ? a(e.start, t) : void 0,
        end: void 0 !== e.end ? a(e.end, t) : void 0
    };
}
function wh(e, t, r) {
    return new ih.L6({
        start: void 0 !== e.start ? c(e.start) : void 0,
        end: void 0 !== e.end ? c(e.end) : void 0
    });
}
function vh(e, t) {
    return {
        _privacyMode: t,
        errorMessage: (0, n.cZ)(e.errorMessage, n.po.CODE, "error_message", t)
    };
}
function _h(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ih.Tm({
        errorMessage: e.errorMessage.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Ah = require("./module-43955.js");
function Sh(e, t) {
    return {
        _privacyMode: t
    };
}
function bh(e, t) {
    return {
        _privacyMode: t,
        globs: e.globs.map((e)=>(0, n.cZ)(e, n.po.PATH, "globs", t))
    };
}
function Eh(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ah.uT({
        globs: e.globs.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            }))
    });
}
function Ih(e, t) {
    return {
        _privacyMode: t,
        description: (0, n.cZ)(e.description, n.po.CODE, "description", t)
    };
}
function Ch(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ah.Xo({
        description: e.description.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function kh(e, t) {
    return {
        _privacyMode: t
    };
}
function xh(e, t) {
    return {
        _privacyMode: t,
        type: Th(e.type, t)
    };
}
function Th(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "global":
            return {
                case: "global",
                value: Sh(e.value, t)
            };
        case "fileGlobbed":
            return {
                case: "fileGlobbed",
                value: bh(e.value, t)
            };
        case "agentFetched":
            return {
                case: "agentFetched",
                value: Ih(e.value, t)
            };
        case "manuallyAttached":
            return {
                case: "manuallyAttached",
                value: kh(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Rh(e, t, r) {
    return new Ah.f5({
        type: Bh(e.type, t, r)
    });
}
function Bh(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "global":
            return {
                case: "global",
                value: (e.value, new Ah.i9({}))
            };
        case "fileGlobbed":
            return {
                case: "fileGlobbed",
                value: Eh(e.value, t, r)
            };
        case "agentFetched":
            return {
                case: "agentFetched",
                value: Ch(e.value, t, r)
            };
        case "manuallyAttached":
            return {
                case: "manuallyAttached",
                value: (e.value, new Ah._u({}))
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ph(e, t) {
    return {
        _privacyMode: t,
        fullPath: (0, n.cZ)(e.fullPath, n.po.PATH, "full_path", t),
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
        type: void 0 !== e.type ? xh(e.type, t) : void 0,
        source: e.source,
        gitRemoteOrigin: void 0 !== e.gitRemoteOrigin ? (0, n.cZ)(e.gitRemoteOrigin, n.po.PATH, "git_remote_origin", t) : void 0,
        parseError: void 0 !== e.parseError ? (0, n.cZ)(e.parseError, n.po.CODE, "parse_error", t) : void 0,
        environments: e.environments,
        disabledEnvironments: e.disabledEnvironments,
        plugin: e.plugin,
        marketplace: e.marketplace,
        pluginId: e.pluginId,
        marketplaceId: e.marketplaceId,
        scopedTo: e.scopedTo,
        frontmatter: (0, n.cZ)(e.frontmatter, n.po.CODE, "frontmatter", t),
        isRequired: e.isRequired
    };
}
function Jh(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Ah.DX({
        fullPath: e.fullPath.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        type: void 0 !== e.type ? Rh(e.type, t, r) : void 0,
        source: e.source,
        gitRemoteOrigin: e.gitRemoteOrigin?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        parseError: e.parseError?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        environments: e.environments,
        disabledEnvironments: e.disabledEnvironments,
        plugin: e.plugin,
        marketplace: e.marketplace,
        pluginId: e.pluginId,
        marketplaceId: e.marketplaceId,
        scopedTo: e.scopedTo,
        frontmatter: e.frontmatter.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        isRequired: e.isRequired
    });
}
var Mh = require("./module-42506.js");
function qh(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Oh(e.args, t) : void 0,
        result: void 0 !== e.result ? Fh(e.result, t) : void 0
    };
}
function Dh(e, t, r) {
    return new Mh.D8({
        args: void 0 !== e.args ? Nh(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Lh(e.result, t, r) : void 0
    });
}
function Oh(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        offset: e.offset,
        limit: e.limit,
        includeLineNumbers: e.includeLineNumbers
    };
}
function Nh(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Mh.Qc({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        offset: e.offset,
        limit: e.limit,
        includeLineNumbers: e.includeLineNumbers
    });
}
function Fh(e, t) {
    return {
        _privacyMode: t,
        result: Uh(e.result, t)
    };
}
function Uh(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Gh(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Vh(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Lh(e, t, r) {
    return new Mh.uX({
        result: $h(e.result, t, r)
    });
}
function $h(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: zh(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Kh(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Qh(e, t) {
    return {
        _privacyMode: t,
        startLine: e.startLine,
        endLine: e.endLine
    };
}
function jh(e, t, r) {
    return new Mh.E8({
        startLine: e.startLine,
        endLine: e.endLine
    });
}
function Gh(e, t) {
    return {
        _privacyMode: t,
        isEmpty: e.isEmpty,
        exceededLimit: e.exceededLimit,
        totalLines: e.totalLines,
        fileSize: e.fileSize,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        readRange: void 0 !== e.readRange ? Qh(e.readRange, t) : void 0,
        includeLineNumbers: e.includeLineNumbers,
        relatedCursorRulePaths: e.relatedCursorRulePaths.map((e)=>(0, n.cZ)(e, n.po.PATH, "related_cursor_rule_paths", t)),
        relatedCursorRules: e.relatedCursorRules.map((e)=>Ph(e, t)),
        output: Hh(e.output, t)
    };
}
function Hh(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "content":
            return {
                case: "content",
                value: (0, n.cZ)(e.value, n.po.CODE, "content", t)
            };
        case "data":
            return {
                case: "data",
                value: (0, n.Yz)(e.value, n.po.CODE, "data", t)
            };
        case "dataBlobId":
            return {
                case: "dataBlobId",
                value: e.value
            };
        case "contentBlobId":
            return {
                case: "contentBlobId",
                value: e.value
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function zh(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Mh.A2({
        isEmpty: e.isEmpty,
        exceededLimit: e.exceededLimit,
        totalLines: e.totalLines,
        fileSize: e.fileSize,
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        readRange: void 0 !== e.readRange ? jh(e.readRange) : void 0,
        includeLineNumbers: e.includeLineNumbers,
        relatedCursorRulePaths: e.relatedCursorRulePaths.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        relatedCursorRules: e.relatedCursorRules.map((e)=>Jh(e, t, r)),
        output: Wh(e.output, t, r)
    });
}
function Wh(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "content":
            return {
                case: "content",
                value: e.value.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            };
        case "data":
            return {
                case: "data",
                value: e.value.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            };
        case "dataBlobId":
            return {
                case: "dataBlobId",
                value: e.value
            };
        case "contentBlobId":
            return {
                case: "contentBlobId",
                value: e.value
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Vh(e, t) {
    return {
        _privacyMode: t,
        errorMessage: (0, n.cZ)(e.errorMessage, n.po.CODE, "error_message", t)
    };
}
function Kh(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Mh.vO({
        errorMessage: e.errorMessage.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Yh = require("./module-36584.js");
function Zh(e, t) {
    return {
        _privacyMode: t,
        summary: (0, n.cZ)(e.summary, n.po.CODE, "summary", t),
        themes: e.themes.map((e)=>(0, n.cZ)(e, n.po.CODE, "themes", t)),
        recommendedAction: e.recommendedAction,
        recommendedActionEvidence: void 0 !== e.recommendedActionEvidence ? (0, n.cZ)(e.recommendedActionEvidence, n.po.CODE, "recommended_action_evidence", t) : void 0,
        checkKeys: e.checkKeys
    };
}
function Xh(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Yh.dF({
        summary: e.summary.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        themes: e.themes.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        recommendedAction: e.recommendedAction,
        recommendedActionEvidence: e.recommendedActionEvidence?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        checkKeys: e.checkKeys
    });
}
function ef(e, t) {
    return {
        _privacyMode: t,
        findings: e.findings.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    checkName: e.checkName,
                    detailsUrl: void 0 !== e.detailsUrl ? (0, n.cZ)(e.detailsUrl, n.po.PATH, "details_url", t) : void 0,
                    tldr: (0, n.cZ)(e.tldr, n.po.CODE, "tldr", t),
                    rootCause: void 0 !== e.rootCause ? (0, n.cZ)(e.rootCause, n.po.CODE, "root_cause", t) : void 0,
                    failingSignal: void 0 !== e.failingSignal ? (0, n.cZ)(e.failingSignal, n.po.CODE, "failing_signal", t) : void 0,
                    suggestedNextStep: void 0 !== e.suggestedNextStep ? (0, n.cZ)(e.suggestedNextStep, n.po.CODE, "suggested_next_step", t) : void 0,
                    diffRelation: e.diffRelation,
                    diffRelationEvidence: void 0 !== e.diffRelationEvidence ? (0, n.cZ)(e.diffRelationEvidence, n.po.CODE, "diff_relation_evidence", t) : void 0,
                    flakeAssessment: e.flakeAssessment,
                    flakeEvidence: void 0 !== e.flakeEvidence ? (0, n.cZ)(e.flakeEvidence, n.po.CODE, "flake_evidence", t) : void 0,
                    rerunAvailable: e.rerunAvailable,
                    rerunEvidence: void 0 !== e.rerunEvidence ? (0, n.cZ)(e.rerunEvidence, n.po.CODE, "rerun_evidence", t) : void 0,
                    recommendedAction: e.recommendedAction,
                    recommendedActionEvidence: void 0 !== e.recommendedActionEvidence ? (0, n.cZ)(e.recommendedActionEvidence, n.po.CODE, "recommended_action_evidence", t) : void 0,
                    confidence: e.confidence
                };
            })(e, t)),
        overall: void 0 !== e.overall ? Zh(e.overall, t) : void 0,
        toolCallId: e.toolCallId
    };
}
function tf(e, t, r) {
    return new Yh.XR({
        findings: e.findings.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Yh.v4({
                    checkName: e.checkName,
                    detailsUrl: e.detailsUrl?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    tldr: e.tldr.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    rootCause: e.rootCause?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    failingSignal: e.failingSignal?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    suggestedNextStep: e.suggestedNextStep?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    diffRelation: e.diffRelation,
                    diffRelationEvidence: e.diffRelationEvidence?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    flakeAssessment: e.flakeAssessment,
                    flakeEvidence: e.flakeEvidence?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    rerunAvailable: e.rerunAvailable,
                    rerunEvidence: e.rerunEvidence?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    recommendedAction: e.recommendedAction,
                    recommendedActionEvidence: e.recommendedActionEvidence?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    confidence: e.confidence
                });
            })(e, t, r)),
        overall: void 0 !== e.overall ? Xh(e.overall, t, r) : void 0,
        toolCallId: e.toolCallId
    });
}
function rf(e, t) {
    return {
        _privacyMode: t,
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t)
    };
}
function nf(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Yh.LO({
        message: e.message.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function sf(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function of(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Yh.Ag({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function af(e, t) {
    return {
        _privacyMode: t,
        result: cf(e.result, t)
    };
}
function cf(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: rf(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: sf(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function lf(e, t, r) {
    return new Yh.Ro({
        result: uf(e.result, t, r)
    });
}
function uf(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: nf(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: of(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function df(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? ef(e.args, t) : void 0,
        result: void 0 !== e.result ? af(e.result, t) : void 0
    };
}
function pf(e, t, r) {
    return new Yh.ge({
        args: void 0 !== e.args ? tf(e.args, t, r) : void 0,
        result: void 0 !== e.result ? lf(e.result, t, r) : void 0
    });
}
var mf = require("./module-11531.js");
function hf(e, t) {
    return {
        _privacyMode: t,
        mode: e.mode,
        toolCallId: e.toolCallId,
        saveAsFilename: void 0 !== e.saveAsFilename ? (0, n.cZ)(e.saveAsFilename, n.po.PATH, "save_as_filename", t) : void 0
    };
}
function ff(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new mf.zH({
        mode: e.mode,
        toolCallId: e.toolCallId,
        saveAsFilename: e.saveAsFilename?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function gf(e, t) {
    return {
        _privacyMode: t,
        result: yf(e.result, t)
    };
}
function yf(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "startSuccess":
            return {
                case: "startSuccess",
                value: _f(e.value, t)
            };
        case "saveSuccess":
            return {
                case: "saveSuccess",
                value: Sf(e.value, t)
            };
        case "discardSuccess":
            return {
                case: "discardSuccess",
                value: Ef(e.value, t)
            };
        case "failure":
            return {
                case: "failure",
                value: Cf(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function wf(e, t, r) {
    return new mf.Tj({
        result: vf(e.result, t, r)
    });
}
function vf(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "startSuccess":
            return {
                case: "startSuccess",
                value: Af(e.value, t, r)
            };
        case "saveSuccess":
            return {
                case: "saveSuccess",
                value: bf(e.value, t, r)
            };
        case "discardSuccess":
            return {
                case: "discardSuccess",
                value: If(e.value, t, r)
            };
        case "failure":
            return {
                case: "failure",
                value: kf(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function _f(e, t) {
    return {
        _privacyMode: t,
        wasPriorRecordingCancelled: e.wasPriorRecordingCancelled,
        wasSaveAsFilenameIgnored: e.wasSaveAsFilenameIgnored
    };
}
function Af(e, t, r) {
    return new mf.T4({
        wasPriorRecordingCancelled: e.wasPriorRecordingCancelled,
        wasSaveAsFilenameIgnored: e.wasSaveAsFilenameIgnored
    });
}
function Sf(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        recordingDurationMs: e.recordingDurationMs,
        requestedFilePathRejectedReason: e.requestedFilePathRejectedReason
    };
}
function bf(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new mf.ol({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        recordingDurationMs: e.recordingDurationMs,
        requestedFilePathRejectedReason: e.requestedFilePathRejectedReason
    });
}
function Ef(e, t) {
    return {
        _privacyMode: t
    };
}
function If(e, t, r) {
    return new mf.N8({});
}
function Cf(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function kf(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new mf.yH({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var xf = require("./module-35110.js");
function Tf(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? hf(e.args, t) : void 0,
        result: void 0 !== e.result ? gf(e.result, t) : void 0
    };
}
function Rf(e, t, r) {
    return new xf.q({
        args: void 0 !== e.args ? ff(e.args, t, r) : void 0,
        result: void 0 !== e.result ? wf(e.result, t, r) : void 0
    });
}
var Bf = require("./module-95621.js");
function Pf(e, t) {
    return {
        _privacyMode: t,
        unexpectedActionOutcomes: (0, n.cZ)(e.unexpectedActionOutcomes, n.po.CODE, "unexpected_action_outcomes", t),
        relevantInstructions: (0, n.cZ)(e.relevantInstructions, n.po.CODE, "relevant_instructions", t),
        scenarioAnalysis: (0, n.cZ)(e.scenarioAnalysis, n.po.CODE, "scenario_analysis", t),
        criticalSynthesis: (0, n.cZ)(e.criticalSynthesis, n.po.CODE, "critical_synthesis", t),
        nextSteps: (0, n.cZ)(e.nextSteps, n.po.CODE, "next_steps", t),
        toolCallId: e.toolCallId
    };
}
function Jf(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Bf.fQ({
        unexpectedActionOutcomes: e.unexpectedActionOutcomes.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        relevantInstructions: e.relevantInstructions.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        scenarioAnalysis: e.scenarioAnalysis.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        criticalSynthesis: e.criticalSynthesis.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        nextSteps: e.nextSteps.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId
    });
}
function Mf(e, t) {
    return {
        _privacyMode: t,
        result: qf(e.result, t)
    };
}
function qf(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Nf(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Uf(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Df(e, t, r) {
    return new Bf.V$({
        result: Of(e.result, t, r)
    });
}
function Of(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Ff(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Lf(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Nf(e, t) {
    return {
        _privacyMode: t
    };
}
function Ff(e, t, r) {
    return new Bf.xq({});
}
function Uf(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Lf(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Bf.ML({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function $f(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Pf(e.args, t) : void 0,
        result: void 0 !== e.result ? Mf(e.result, t) : void 0
    };
}
function Qf(e, t, r) {
    return new Bf.YF({
        args: void 0 !== e.args ? Jf(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Df(e.result, t, r) : void 0
    });
}
var jf = require("./module-23476.js");
function Gf(e, t) {
    return {
        _privacyMode: t,
        installScript: (0, n.cZ)(e.installScript, n.po.CODE, "install_script", t),
        dockerfileContents: (0, n.cZ)(e.dockerfileContents, n.po.CODE, "dockerfile_contents", t)
    };
}
function Hf(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new jf.ec({
        installScript: e.installScript.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        dockerfileContents: e.dockerfileContents.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function zf(e, t) {
    return {
        _privacyMode: t,
        config: void 0 !== e.config ? Gf(e.config, t) : void 0,
        mode: e.mode,
        checkoutRefOverrides: e.checkoutRefOverrides.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    repoUrl: (0, n.cZ)(e.repoUrl, n.po.PATH, "repo_url", t),
                    ref: (0, n.cZ)(e.ref, n.po.PATH, "ref", t)
                };
            })(e, t))
    };
}
function Wf(e, t, r) {
    return new jf.TO({
        config: void 0 !== e.config ? Hf(e.config, t, r) : void 0,
        mode: e.mode,
        checkoutRefOverrides: e.checkoutRefOverrides.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new jf.u1({
                    repoUrl: e.repoUrl.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    ref: e.ref.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r))
    });
}
function Vf(e, t) {
    return {
        _privacyMode: t,
        setupLogs: (0, n.cZ)(e.setupLogs, n.po.CODE, "setup_logs", t)
    };
}
function Kf(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new jf.fv({
        setupLogs: e.setupLogs.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Yf(e, t) {
    return {
        _privacyMode: t,
        errorMessage: (0, n.cZ)(e.errorMessage, n.po.CODE, "error_message", t),
        setupLogs: (0, n.cZ)(e.setupLogs, n.po.CODE, "setup_logs", t)
    };
}
function Zf(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new jf.uq({
        errorMessage: e.errorMessage.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        setupLogs: e.setupLogs.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Xf(e, t) {
    return {
        _privacyMode: t,
        result: eg(e.result, t)
    };
}
function eg(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Vf(e.value, t)
            };
        case "failure":
            return {
                case: "failure",
                value: Yf(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function tg(e, t, r) {
    return new jf.dV({
        result: rg(e.result, t, r)
    });
}
function rg(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Kf(e.value, t, r)
            };
        case "failure":
            return {
                case: "failure",
                value: Zf(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ng(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? zf(e.args, t) : void 0,
        result: void 0 !== e.result ? Xf(e.result, t) : void 0,
        associatedPodKey: e.associatedPodKey
    };
}
function sg(e, t, r) {
    return new jf.us({
        args: void 0 !== e.args ? Wf(e.args, t, r) : void 0,
        result: void 0 !== e.result ? tg(e.result, t, r) : void 0,
        associatedPodKey: e.associatedPodKey
    });
}
function og(e, t) {
    return {
        _privacyMode: t,
        associatedPodKey: e.associatedPodKey
    };
}
var ig = require("./module-28689.js");
function ag(e, t) {
    return {
        _privacyMode: t,
        title: (0, n.cZ)(e.title, n.po.CODE, "title", t),
        file: (0, n.cZ)(e.file, n.po.PATH, "file", t),
        startLine: e.startLine,
        endLine: e.endLine,
        description: (0, n.cZ)(e.description, n.po.CODE, "description", t),
        severity: e.severity,
        category: e.category,
        rationale: (0, n.cZ)(e.rationale, n.po.CODE, "rationale", t)
    };
}
function cg(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ig.iv({
        title: e.title.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        file: e.file.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        startLine: e.startLine,
        endLine: e.endLine,
        description: e.description.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        severity: e.severity,
        category: e.category,
        rationale: e.rationale.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function lg(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.CODE, "output", t)
    };
}
function ug(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ig.I6({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function dg(e, t) {
    return {
        _privacyMode: t,
        errorMessage: (0, n.cZ)(e.errorMessage, n.po.CODE, "error_message", t)
    };
}
function pg(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ig.Tu({
        errorMessage: e.errorMessage.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function mg(e, t) {
    return {
        _privacyMode: t,
        result: hg(e.result, t)
    };
}
function hg(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: lg(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: dg(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function fg(e, t, r) {
    return new ig.Uk({
        result: gg(e.result, t, r)
    });
}
function gg(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: ug(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: pg(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function yg(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? ag(e.args, t) : void 0,
        result: void 0 !== e.result ? mg(e.result, t) : void 0
    };
}
function wg(e, t, r) {
    return new ig.FW({
        args: void 0 !== e.args ? cg(e.args, t, r) : void 0,
        result: void 0 !== e.result ? fg(e.result, t, r) : void 0
    });
}
var vg = require("./module-60867.js");
function _g(e, t) {
    return {
        _privacyMode: t,
        bugId: e.bugId,
        bugTitle: (0, n.cZ)(e.bugTitle, n.po.CODE, "bug_title", t),
        verdict: e.verdict,
        explanation: (0, n.cZ)(e.explanation, n.po.CODE, "explanation", t),
        severity: e.severity
    };
}
function Ag(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new vg.Y6({
        bugId: e.bugId,
        bugTitle: e.bugTitle.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        verdict: e.verdict,
        explanation: e.explanation.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        severity: e.severity
    });
}
function Sg(e, t) {
    return {
        _privacyMode: t,
        summary: (0, n.cZ)(e.summary, n.po.CODE, "summary", t),
        results: e.results.map((e)=>_g(e, t))
    };
}
function bg(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new vg.p4({
        summary: e.summary.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        results: e.results.map((e)=>Ag(e, t, r))
    });
}
function Eg(e, t) {
    return {
        _privacyMode: t,
        results: e.results.map((e)=>_g(e, t))
    };
}
function Ig(e, t, r) {
    return new vg.RH({
        results: e.results.map((e)=>Ag(e, t, r))
    });
}
function Cg(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function kg(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new vg.q3({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function xg(e, t) {
    return {
        _privacyMode: t,
        result: Tg(e.result, t)
    };
}
function Tg(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Eg(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Cg(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Rg(e, t, r) {
    return new vg.Ht({
        result: Bg(e.result, t, r)
    });
}
function Bg(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Ig(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: kg(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Pg(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Sg(e.args, t) : void 0,
        result: void 0 !== e.result ? xg(e.result, t) : void 0
    };
}
function Jg(e, t, r) {
    return new vg.U_({
        args: void 0 !== e.args ? bg(e.args, t, r) : void 0,
        result: void 0 !== e.result ? Rg(e.result, t, r) : void 0
    });
}
var Mg = require("./module-83133.js");
function qg(e, t) {
    return {
        _privacyMode: t,
        fullPath: (0, n.cZ)(e.fullPath, n.po.PATH, "full_path", t),
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
        description: (0, n.cZ)(e.description, n.po.CODE, "description", t),
        parseError: void 0 !== e.parseError ? (0, n.cZ)(e.parseError, n.po.CODE, "parse_error", t) : void 0,
        environments: e.environments,
        disabledEnvironments: e.disabledEnvironments,
        gitRemoteOrigin: void 0 !== e.gitRemoteOrigin ? (0, n.cZ)(e.gitRemoteOrigin, n.po.PATH, "git_remote_origin", t) : void 0,
        disableModelInvocation: e.disableModelInvocation,
        plugin: e.plugin,
        marketplace: e.marketplace,
        pluginId: e.pluginId,
        marketplaceId: e.marketplaceId,
        globs: e.globs.map((e)=>(0, n.cZ)(e, n.po.PATH, "globs", t)),
        scopedTo: e.scopedTo,
        argumentHint: (0, n.cZ)(e.argumentHint, n.po.CODE, "argument_hint", t),
        disableUserInvocation: e.disableUserInvocation
    };
}
function Dg(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Mg.N({
        fullPath: e.fullPath.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        description: e.description.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        parseError: e.parseError?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        environments: e.environments,
        disabledEnvironments: e.disabledEnvironments,
        gitRemoteOrigin: e.gitRemoteOrigin?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        disableModelInvocation: e.disableModelInvocation,
        plugin: e.plugin,
        marketplace: e.marketplace,
        pluginId: e.pluginId,
        marketplaceId: e.marketplaceId,
        globs: e.globs.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        scopedTo: e.scopedTo,
        argumentHint: e.argumentHint.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        disableUserInvocation: e.disableUserInvocation
    });
}
var Og = require("./module-91881.js");
var Ng = require("./module-11491.js");
function Fg(e, t) {
    return {
        _privacyMode: t,
        type: Ug(e.type, t)
    };
}
function Ug(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "unspecified":
            return {
                case: "unspecified",
                value: Qg(e.value, t)
            };
        case "computerUse":
            return {
                case: "computerUse",
                value: Gg(e.value, t)
            };
        case "custom":
            return {
                case: "custom",
                value: dy(e.value, t)
            };
        case "explore":
            return {
                case: "explore",
                value: zg(e.value, t)
            };
        case "mediaReview":
            return {
                case: "mediaReview",
                value: Vg(e.value, t)
            };
        case "bash":
            return {
                case: "bash",
                value: Yg(e.value, t)
            };
        case "browserUse":
            return {
                case: "browserUse",
                value: ty(e.value, t)
            };
        case "shell":
            return {
                case: "shell",
                value: Xg(e.value, t)
            };
        case "vmSetupHelper":
            return {
                case: "vmSetupHelper",
                value: ny(e.value, t)
            };
        case "debug":
            return {
                case: "debug",
                value: oy(e.value, t)
            };
        case "cursorGuide":
            return {
                case: "cursorGuide",
                value: ay(e.value, t)
            };
        case "watchVideo":
            return {
                case: "watchVideo",
                value: ly(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Lg(e, t, r) {
    return new Ng._L({
        type: $g(e.type, t, r)
    });
}
function $g(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "unspecified":
            return {
                case: "unspecified",
                value: jg(e.value, t, r)
            };
        case "computerUse":
            return {
                case: "computerUse",
                value: Hg(e.value, t, r)
            };
        case "custom":
            return {
                case: "custom",
                value: py(e.value, t, r)
            };
        case "explore":
            return {
                case: "explore",
                value: Wg(e.value, t, r)
            };
        case "mediaReview":
            return {
                case: "mediaReview",
                value: Kg(e.value, t, r)
            };
        case "bash":
            return {
                case: "bash",
                value: Zg(e.value, t, r)
            };
        case "browserUse":
            return {
                case: "browserUse",
                value: ry(e.value, t, r)
            };
        case "shell":
            return {
                case: "shell",
                value: ey(e.value, t, r)
            };
        case "vmSetupHelper":
            return {
                case: "vmSetupHelper",
                value: sy(e.value, t, r)
            };
        case "debug":
            return {
                case: "debug",
                value: iy(e.value, t, r)
            };
        case "cursorGuide":
            return {
                case: "cursorGuide",
                value: cy(e.value, t, r)
            };
        case "watchVideo":
            return {
                case: "watchVideo",
                value: uy(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Qg(e, t) {
    return {
        _privacyMode: t
    };
}
function jg(e, t, r) {
    return new Ng.p_({});
}
function Gg(e, t) {
    return {
        _privacyMode: t
    };
}
function Hg(e, t, r) {
    return new Ng._x({});
}
function zg(e, t) {
    return {
        _privacyMode: t
    };
}
function Wg(e, t, r) {
    return new Ng.$j({});
}
function Vg(e, t) {
    return {
        _privacyMode: t
    };
}
function Kg(e, t, r) {
    return new Ng.aF({});
}
function Yg(e, t) {
    return {
        _privacyMode: t
    };
}
function Zg(e, t, r) {
    return new Ng.IR({});
}
function Xg(e, t) {
    return {
        _privacyMode: t
    };
}
function ey(e, t, r) {
    return new Ng.cr({});
}
function ty(e, t) {
    return {
        _privacyMode: t
    };
}
function ry(e, t, r) {
    return new Ng.zn({});
}
function ny(e, t) {
    return {
        _privacyMode: t
    };
}
function sy(e, t, r) {
    return new Ng.iq({});
}
function oy(e, t) {
    return {
        _privacyMode: t
    };
}
function iy(e, t, r) {
    return new Ng.l0({});
}
function ay(e, t) {
    return {
        _privacyMode: t
    };
}
function cy(e, t, r) {
    return new Ng.sx({});
}
function ly(e, t) {
    return {
        _privacyMode: t
    };
}
function uy(e, t, r) {
    return new Ng.cl({});
}
function dy(e, t) {
    return {
        _privacyMode: t,
        name: e.name
    };
}
function py(e, t, r) {
    return new Ng.Bk({
        name: e.name
    });
}
var my = require("./module-38427.js");
function hy(e, t) {
    return {
        _privacyMode: t,
        spec: fy(e.spec, t)
    };
}
function fy(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "replace":
            return {
                case: "replace",
                value: (0, n.cZ)(e.value, n.po.CODE, "replace", t)
            };
        case "append":
            return {
                case: "append",
                value: (0, n.cZ)(e.value, n.po.CODE, "append", t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function gy(e, t, r) {
    return new my.$({
        spec: yy(e.spec, t, r)
    });
}
function yy(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "replace":
            return {
                case: "replace",
                value: e.value.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            };
        case "append":
            return {
                case: "append",
                value: e.value.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
var wy = require("./module-89396.js");
function vy(e, t) {
    return {
        _privacyMode: t,
        notesSessionId: e.notesSessionId,
        workspaceId: e.workspaceId,
        readOnlyPinnedTreeSha: e.readOnlyPinnedTreeSha,
        readOnlyPluginCacheRoot: void 0 !== e.readOnlyPluginCacheRoot ? (0, n.cZ)(e.readOnlyPluginCacheRoot, n.po.PATH, "read_only_plugin_cache_root", t) : void 0,
        useCached: e.useCached,
        waitForWorkspaceCache: e.waitForWorkspaceCache
    };
}
function _y(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new wy._K({
        notesSessionId: e.notesSessionId,
        workspaceId: e.workspaceId,
        readOnlyPinnedTreeSha: e.readOnlyPinnedTreeSha,
        readOnlyPluginCacheRoot: e.readOnlyPluginCacheRoot?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        useCached: e.useCached,
        waitForWorkspaceCache: e.waitForWorkspaceCache
    });
}
function Ay(e, t) {
    return {
        _privacyMode: t,
        result: Sy(e.result, t)
    };
}
function Sy(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Iy(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: ky(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Ty(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function by(e, t, r) {
    return new wy._G({
        result: Ey(e.result, t, r)
    });
}
function Ey(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Cy(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: xy(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Ry(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Iy(e, t) {
    return {
        _privacyMode: t,
        requestContext: void 0 !== e.requestContext ? Gy(e.requestContext, t) : void 0,
        servedFromDiskCache: e.servedFromDiskCache
    };
}
function Cy(e, t, r) {
    return new wy.yW({
        requestContext: void 0 !== e.requestContext ? Hy(e.requestContext, t, r) : void 0,
        servedFromDiskCache: e.servedFromDiskCache
    });
}
function ky(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function xy(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new wy.nf({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Ty(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function Ry(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new wy.nq({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function By(e, t) {
    return {
        _privacyMode: t,
        osVersion: e.osVersion,
        workspacePaths: e.workspacePaths.map((e)=>(0, n.cZ)(e, n.po.PATH, "workspace_paths", t)),
        shell: e.shell,
        sandboxEnabled: e.sandboxEnabled,
        terminalsFolder: (0, n.cZ)(e.terminalsFolder, n.po.PATH, "terminals_folder", t),
        agentSharedNotesFolder: (0, n.cZ)(e.agentSharedNotesFolder, n.po.PATH, "agent_shared_notes_folder", t),
        agentConversationNotesFolder: (0, n.cZ)(e.agentConversationNotesFolder, n.po.PATH, "agent_conversation_notes_folder", t),
        timeZone: e.timeZone,
        projectFolder: (0, n.cZ)(e.projectFolder, n.po.PATH, "project_folder", t),
        agentTranscriptsFolder: (0, n.cZ)(e.agentTranscriptsFolder, n.po.PATH, "agent_transcripts_folder", t),
        artifactsFolder: void 0 !== e.artifactsFolder ? (0, n.cZ)(e.artifactsFolder, n.po.PATH, "artifacts_folder", t) : void 0,
        sandboxSupported: e.sandboxSupported,
        sandboxNetworkHasDefaults: e.sandboxNetworkHasDefaults,
        sandboxNetworkExplicitAllowlist: e.sandboxNetworkExplicitAllowlist,
        secretRedactionEnabled: e.secretRedactionEnabled,
        computerUseSupported: e.computerUseSupported,
        isWorkingDirHomeDir: e.isWorkingDirHomeDir,
        processWorkingDirectory: void 0 !== e.processWorkingDirectory ? (0, n.cZ)(e.processWorkingDirectory, n.po.PATH, "process_working_directory", t) : void 0,
        smartModeClassifierAutoModeEnabled: e.smartModeClassifierAutoModeEnabled,
        devForceNextSmartModeClassifierBlockToken: void 0 !== e.devForceNextSmartModeClassifierBlockToken ? (0, n.cZ)(e.devForceNextSmartModeClassifierBlockToken, n.po.CREDENTIALS, "dev_force_next_smart_mode_classifier_block_token", t) : void 0,
        devDelayNextSmartModeClassifierToken: void 0 !== e.devDelayNextSmartModeClassifierToken ? (0, n.cZ)(e.devDelayNextSmartModeClassifierToken, n.po.CREDENTIALS, "dev_delay_next_smart_mode_classifier_token", t) : void 0,
        mountedAgentStores: e.mountedAgentStores.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
                    kind: e.kind,
                    alias: void 0 !== e.alias ? (0, n.cZ)(e.alias, n.po.PATH, "alias", t) : void 0,
                    readOnly: e.readOnly,
                    inheritedFromPath: void 0 !== e.inheritedFromPath ? (0, n.cZ)(e.inheritedFromPath, n.po.PATH, "inherited_from_path", t) : void 0
                };
            })(e, t)),
        userAgentStoreWebContext: void 0 !== e.userAgentStoreWebContext ? Jy(e.userAgentStoreWebContext, t) : void 0,
        devMockPromptTime: void 0 !== e.devMockPromptTime ? e.devMockPromptTime.toDate() : void 0,
        agentStoreDynamicMountEnabled: e.agentStoreDynamicMountEnabled
    };
}
function Py(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new wy.GE({
        osVersion: e.osVersion,
        workspacePaths: e.workspacePaths.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        shell: e.shell,
        sandboxEnabled: e.sandboxEnabled,
        terminalsFolder: e.terminalsFolder.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        agentSharedNotesFolder: e.agentSharedNotesFolder.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        agentConversationNotesFolder: e.agentConversationNotesFolder.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        timeZone: e.timeZone,
        projectFolder: e.projectFolder.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        agentTranscriptsFolder: e.agentTranscriptsFolder.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        artifactsFolder: e.artifactsFolder?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        sandboxSupported: e.sandboxSupported,
        sandboxNetworkHasDefaults: e.sandboxNetworkHasDefaults,
        sandboxNetworkExplicitAllowlist: e.sandboxNetworkExplicitAllowlist,
        secretRedactionEnabled: e.secretRedactionEnabled,
        computerUseSupported: e.computerUseSupported,
        isWorkingDirHomeDir: e.isWorkingDirHomeDir,
        processWorkingDirectory: e.processWorkingDirectory?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        smartModeClassifierAutoModeEnabled: e.smartModeClassifierAutoModeEnabled,
        devForceNextSmartModeClassifierBlockToken: e.devForceNextSmartModeClassifierBlockToken?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        devDelayNextSmartModeClassifierToken: e.devDelayNextSmartModeClassifierToken?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        mountedAgentStores: e.mountedAgentStores.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new wy.Lz({
                    path: e.path.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    kind: e.kind,
                    alias: e.alias?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    readOnly: e.readOnly,
                    inheritedFromPath: e.inheritedFromPath?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r)),
        userAgentStoreWebContext: void 0 !== e.userAgentStoreWebContext ? My(e.userAgentStoreWebContext, t, r) : void 0,
        devMockPromptTime: void 0 !== e.devMockPromptTime ? el.Timestamp.fromDate(e.devMockPromptTime) : void 0,
        agentStoreDynamicMountEnabled: e.agentStoreDynamicMountEnabled
    });
}
function Jy(e, t) {
    return {
        _privacyMode: t,
        storeId: e.storeId,
        portalBaseUrl: e.portalBaseUrl
    };
}
function My(e, t, r) {
    return new wy.X7({
        storeId: e.storeId,
        portalBaseUrl: e.portalBaseUrl
    });
}
function qy(e, t) {
    return {
        _privacyMode: t,
        logPath: (0, n.cZ)(e.logPath, n.po.PATH, "log_path", t),
        serverEndpoint: e.serverEndpoint,
        sessionId: e.sessionId
    };
}
function Dy(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new wy.TT({
        logPath: e.logPath.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        serverEndpoint: e.serverEndpoint,
        sessionId: e.sessionId
    });
}
function Oy(e, t) {
    return {
        _privacyMode: t,
        skillDescriptors: e.skillDescriptors.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    name: e.name,
                    description: (0, n.cZ)(e.description, n.po.CODE, "description", t),
                    folderPath: (0, n.cZ)(e.folderPath, n.po.PATH, "folder_path", t),
                    enabled: e.enabled,
                    parseError: void 0 !== e.parseError ? (0, n.cZ)(e.parseError, n.po.CODE, "parse_error", t) : void 0,
                    readmeFilePath: (0, n.cZ)(e.readmeFilePath, n.po.PATH, "readme_file_path", t),
                    packageType: e.packageType
                };
            })(e, t))
    };
}
function Ny(e, t, r) {
    return new wy.uw({
        skillDescriptors: e.skillDescriptors.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new wy.ng({
                    name: e.name,
                    description: e.description.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    folderPath: e.folderPath.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    enabled: e.enabled,
                    parseError: e.parseError?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    readmeFilePath: e.readmeFilePath.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    packageType: e.packageType
                });
            })(e, t, r))
    });
}
function Fy(e, t) {
    return {
        _privacyMode: t,
        configuredSteps: e.configuredSteps
    };
}
function Uy(e, t, r) {
    return new wy.Jy({
        configuredSteps: e.configuredSteps
    });
}
function Ly(e, t) {
    return {
        _privacyMode: t,
        allowInstructions: e.allowInstructions.map((e)=>(0, n.cZ)(e, n.po.CODE, "allow_instructions", t)),
        blockInstructions: e.blockInstructions.map((e)=>(0, n.cZ)(e, n.po.CODE, "block_instructions", t))
    };
}
function $y(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new wy.ag({
        allowInstructions: e.allowInstructions.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        blockInstructions: e.blockInstructions.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            }))
    });
}
function Qy(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        renderedDiffs: e.renderedDiffs.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    startLineNumber: e.startLineNumber,
                    endLineNumberExclusive: e.endLineNumberExclusive,
                    beforeContextLines: e.beforeContextLines.map((e)=>(0, n.cZ)(e, n.po.CODE, "before_context_lines", t)),
                    removedLines: e.removedLines.map((e)=>(0, n.cZ)(e, n.po.CODE, "removed_lines", t)),
                    addedLines: e.addedLines.map((e)=>(0, n.cZ)(e, n.po.CODE, "added_lines", t)),
                    afterContextLines: e.afterContextLines.map((e)=>(0, n.cZ)(e, n.po.CODE, "after_context_lines", t))
                };
            })(e, t)),
        isNewFile: e.isNewFile,
        isDeletedFile: e.isDeletedFile
    };
}
function jy(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new wy.ip({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        renderedDiffs: e.renderedDiffs.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new wy.q8({
                    startLineNumber: e.startLineNumber,
                    endLineNumberExclusive: e.endLineNumberExclusive,
                    beforeContextLines: e.beforeContextLines.map((e)=>e.unwrap(t, {
                            redactUnallowedFieldsInsteadOfThrowing: n,
                            enforcing: s
                        })),
                    removedLines: e.removedLines.map((e)=>e.unwrap(t, {
                            redactUnallowedFieldsInsteadOfThrowing: n,
                            enforcing: s
                        })),
                    addedLines: e.addedLines.map((e)=>e.unwrap(t, {
                            redactUnallowedFieldsInsteadOfThrowing: n,
                            enforcing: s
                        })),
                    afterContextLines: e.afterContextLines.map((e)=>e.unwrap(t, {
                            redactUnallowedFieldsInsteadOfThrowing: n,
                            enforcing: s
                        }))
                });
            })(e, t, r)),
        isNewFile: e.isNewFile,
        isDeletedFile: e.isDeletedFile
    });
}
function Gy(e, t) {
    return {
        _privacyMode: t,
        rules: e.rules.map((e)=>Ph(e, t)),
        env: void 0 !== e.env ? By(e.env, t) : void 0,
        repositoryInfo: e.repositoryInfo.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    relativeWorkspacePath: (0, n.cZ)(e.relativeWorkspacePath, n.po.PATH, "relative_workspace_path", t),
                    remoteUrls: e.remoteUrls.map((e)=>(0, n.cZ)(e, n.po.PATH, "remote_urls", t)),
                    remoteNames: e.remoteNames.map((e)=>(0, n.cZ)(e, n.po.PATH, "remote_names", t)),
                    repoName: (0, n.cZ)(e.repoName, n.po.PATH, "repo_name", t),
                    repoOwner: (0, n.cZ)(e.repoOwner, n.po.PATH, "repo_owner", t),
                    isTracked: e.isTracked,
                    isLocal: e.isLocal,
                    orthogonalTransformSeed: e.orthogonalTransformSeed,
                    workspaceUri: (0, n.cZ)(e.workspaceUri, n.po.PATH, "workspace_uri", t),
                    pathEncryptionKey: (0, n.cZ)(e.pathEncryptionKey, n.po.CREDENTIALS, "path_encryption_key", t)
                };
            })(e, t)),
        tools: e.tools.map((e)=>rl(e, t)),
        conversationNotesListing: void 0 !== e.conversationNotesListing ? (0, n.cZ)(e.conversationNotesListing, n.po.CODE, "conversation_notes_listing", t) : void 0,
        sharedNotesListing: void 0 !== e.sharedNotesListing ? (0, n.cZ)(e.sharedNotesListing, n.po.CODE, "shared_notes_listing", t) : void 0,
        gitRepos: e.gitRepos.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
                    status: (0, n.cZ)(e.status, n.po.CODE, "status", t),
                    branchName: (0, n.cZ)(e.branchName, n.po.PATH, "branch_name", t),
                    remoteUrl: void 0 !== e.remoteUrl ? (0, n.cZ)(e.remoteUrl, n.po.PATH, "remote_url", t) : void 0,
                    previousBranchIsAncestor: e.previousBranchIsAncestor,
                    isOriginBacked: e.isOriginBacked
                };
            })(e, t)),
        projectLayouts: e.projectLayouts.map((e)=>Fc(e, t)),
        mcpInstructions: e.mcpInstructions.map((e)=>sl(e, t)),
        debugModeConfig: void 0 !== e.debugModeConfig ? qy(e.debugModeConfig, t) : void 0,
        cloudRule: void 0 !== e.cloudRule ? (0, n.cZ)(e.cloudRule, n.po.CODE, "cloud_rule", t) : void 0,
        webSearchEnabled: e.webSearchEnabled,
        skillOptions: void 0 !== e.skillOptions ? Oy(e.skillOptions, t) : void 0,
        repositoryInfoShouldQueryProd: e.repositoryInfoShouldQueryProd,
        fileContents: new Map(Object.entries(e.fileContents).map(([e, r])=>[
                (0, n.cZ)(e, n.po.PATH, "file_contents", t),
                (0, n.cZ)(r, n.po.CODE, "file_contents", t)
            ])),
        userIntentSummary: void 0 !== e.userIntentSummary ? (0, n.cZ)(e.userIntentSummary, n.po.CODE, "user_intent_summary", t) : void 0,
        customSubagents: e.customSubagents.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    fullPath: (0, n.cZ)(e.fullPath, n.po.PATH, "full_path", t),
                    name: e.name,
                    description: (0, n.cZ)(e.description, n.po.CODE, "description", t),
                    tools: e.tools,
                    model: e.model,
                    prompt: (0, n.cZ)(e.prompt, n.po.CODE, "prompt", t),
                    permissionMode: e.permissionMode,
                    isBackground: e.isBackground,
                    plugin: e.plugin,
                    marketplace: e.marketplace,
                    pluginId: e.pluginId,
                    marketplaceId: e.marketplaceId,
                    forceDefaultModel: e.forceDefaultModel,
                    source: e.source
                };
            })(e, t)),
        mcpFileSystemOptions: void 0 !== e.mcpFileSystemOptions ? cl(e.mcpFileSystemOptions, t) : void 0,
        webFetchEnabled: e.webFetchEnabled,
        hooksAdditionalContext: void 0 !== e.hooksAdditionalContext ? (0, n.cZ)(e.hooksAdditionalContext, n.po.CODE, "hooks_additional_context", t) : void 0,
        commitAttributionMessage: void 0 !== e.commitAttributionMessage ? (0, n.cZ)(e.commitAttributionMessage, n.po.CODE, "commit_attribution_message", t) : void 0,
        prAttributionMessage: void 0 !== e.prAttributionMessage ? (0, n.cZ)(e.prAttributionMessage, n.po.CODE, "pr_attribution_message", t) : void 0,
        hooksConfig: void 0 !== e.hooksConfig ? Fy(e.hooksConfig, t) : void 0,
        agentSkills: e.agentSkills.map((e)=>qg(e, t)),
        precomputedHumanChanges: e.precomputedHumanChanges.map((e)=>Qy(e, t)),
        recentlyAddedPlugin: void 0 !== e.recentlyAddedPlugin ? Wy(e.recentlyAddedPlugin, t) : void 0,
        supportsMcpAuth: e.supportsMcpAuth,
        gitRepoInfoComplete: e.gitRepoInfoComplete,
        mcpMetaToolOptions: void 0 !== e.mcpMetaToolOptions ? ul(e.mcpMetaToolOptions, t) : void 0,
        readLintsEnabled: e.readLintsEnabled,
        mcpInfoComplete: e.mcpInfoComplete,
        nonFileRules: e.nonFileRules.map((e)=>Ph(e, t)),
        matchedInstalledPlugin: void 0 !== e.matchedInstalledPlugin ? Zy(e.matchedInstalledPlugin, t) : void 0,
        rulesInfoComplete: e.rulesInfoComplete,
        envInfoComplete: e.envInfoComplete,
        repositoryInfoComplete: e.repositoryInfoComplete,
        customSubagentsInfoComplete: e.customSubagentsInfoComplete,
        agentSkillsInfoComplete: e.agentSkillsInfoComplete,
        mcpFileSystemInfoComplete: e.mcpFileSystemInfoComplete,
        gitStatusInfoComplete: e.gitStatusInfoComplete,
        userPermissionsAutoRun: void 0 !== e.userPermissionsAutoRun ? Ly(e.userPermissionsAutoRun, t) : void 0,
        projectPermissionsAutoRun: void 0 !== e.projectPermissionsAutoRun ? Ly(e.projectPermissionsAutoRun, t) : void 0,
        adminPermissionsAutoRun: void 0 !== e.adminPermissionsAutoRun ? Ly(e.adminPermissionsAutoRun, t) : void 0,
        disabledTeamRules: e.disabledTeamRules.map((e)=>(0, n.cZ)(e, n.po.PATH, "disabled_team_rules", t)),
        searchConversationsEnabled: e.searchConversationsEnabled,
        sendMessageEnabled: e.sendMessageEnabled,
        adminCommandDenylist: e.adminCommandDenylist.map((e)=>(0, n.cZ)(e, n.po.CODE, "admin_command_denylist", t)),
        systemPromptOverride: void 0 !== e.systemPromptOverride ? hy(e.systemPromptOverride, t) : void 0
    };
}
function Hy(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new wy.bb({
        rules: e.rules.map((e)=>Jh(e, t, r)),
        env: void 0 !== e.env ? Py(e.env, t, r) : void 0,
        repositoryInfo: e.repositoryInfo.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Og.D({
                    relativeWorkspacePath: e.relativeWorkspacePath.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    remoteUrls: e.remoteUrls.map((e)=>e.unwrap(t, {
                            redactUnallowedFieldsInsteadOfThrowing: n,
                            enforcing: s
                        })),
                    remoteNames: e.remoteNames.map((e)=>e.unwrap(t, {
                            redactUnallowedFieldsInsteadOfThrowing: n,
                            enforcing: s
                        })),
                    repoName: e.repoName.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    repoOwner: e.repoOwner.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    isTracked: e.isTracked,
                    isLocal: e.isLocal,
                    orthogonalTransformSeed: e.orthogonalTransformSeed,
                    workspaceUri: e.workspaceUri.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    pathEncryptionKey: e.pathEncryptionKey.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r)),
        tools: e.tools.map((e)=>nl(e, t, r)),
        conversationNotesListing: e.conversationNotesListing?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        sharedNotesListing: e.sharedNotesListing?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        gitRepos: e.gitRepos.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new wy.DS({
                    path: e.path.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    status: e.status.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    branchName: e.branchName.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    remoteUrl: e.remoteUrl?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    previousBranchIsAncestor: e.previousBranchIsAncestor,
                    isOriginBacked: e.isOriginBacked
                });
            })(e, t, r)),
        projectLayouts: e.projectLayouts.map((e)=>Uc(e, t, r)),
        mcpInstructions: e.mcpInstructions.map((e)=>ol(e, t, r)),
        debugModeConfig: void 0 !== e.debugModeConfig ? Dy(e.debugModeConfig, t, r) : void 0,
        cloudRule: e.cloudRule?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        webSearchEnabled: e.webSearchEnabled,
        skillOptions: void 0 !== e.skillOptions ? Ny(e.skillOptions, t, r) : void 0,
        repositoryInfoShouldQueryProd: e.repositoryInfoShouldQueryProd,
        fileContents: Object.fromEntries(Array.from(e.fileContents.entries()).map(([e, r])=>[
                e.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                }),
                r.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            ])),
        userIntentSummary: e.userIntentSummary?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        customSubagents: e.customSubagents.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Ng.zz({
                    fullPath: e.fullPath.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    name: e.name,
                    description: e.description.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    tools: e.tools,
                    model: e.model,
                    prompt: e.prompt.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    permissionMode: e.permissionMode,
                    isBackground: e.isBackground,
                    plugin: e.plugin,
                    marketplace: e.marketplace,
                    pluginId: e.pluginId,
                    marketplaceId: e.marketplaceId,
                    forceDefaultModel: e.forceDefaultModel,
                    source: e.source
                });
            })(e, t, r)),
        mcpFileSystemOptions: void 0 !== e.mcpFileSystemOptions ? ll(e.mcpFileSystemOptions, t, r) : void 0,
        webFetchEnabled: e.webFetchEnabled,
        hooksAdditionalContext: e.hooksAdditionalContext?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        commitAttributionMessage: e.commitAttributionMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        prAttributionMessage: e.prAttributionMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        hooksConfig: void 0 !== e.hooksConfig ? Uy(e.hooksConfig) : void 0,
        agentSkills: e.agentSkills.map((e)=>Dg(e, t, r)),
        precomputedHumanChanges: e.precomputedHumanChanges.map((e)=>jy(e, t, r)),
        recentlyAddedPlugin: void 0 !== e.recentlyAddedPlugin ? Vy(e.recentlyAddedPlugin, t, r) : void 0,
        supportsMcpAuth: e.supportsMcpAuth,
        gitRepoInfoComplete: e.gitRepoInfoComplete,
        mcpMetaToolOptions: void 0 !== e.mcpMetaToolOptions ? dl(e.mcpMetaToolOptions, t, r) : void 0,
        readLintsEnabled: e.readLintsEnabled,
        mcpInfoComplete: e.mcpInfoComplete,
        nonFileRules: e.nonFileRules.map((e)=>Jh(e, t, r)),
        matchedInstalledPlugin: void 0 !== e.matchedInstalledPlugin ? Xy(e.matchedInstalledPlugin, t, r) : void 0,
        rulesInfoComplete: e.rulesInfoComplete,
        envInfoComplete: e.envInfoComplete,
        repositoryInfoComplete: e.repositoryInfoComplete,
        customSubagentsInfoComplete: e.customSubagentsInfoComplete,
        agentSkillsInfoComplete: e.agentSkillsInfoComplete,
        mcpFileSystemInfoComplete: e.mcpFileSystemInfoComplete,
        gitStatusInfoComplete: e.gitStatusInfoComplete,
        userPermissionsAutoRun: void 0 !== e.userPermissionsAutoRun ? $y(e.userPermissionsAutoRun, t, r) : void 0,
        projectPermissionsAutoRun: void 0 !== e.projectPermissionsAutoRun ? $y(e.projectPermissionsAutoRun, t, r) : void 0,
        adminPermissionsAutoRun: void 0 !== e.adminPermissionsAutoRun ? $y(e.adminPermissionsAutoRun, t, r) : void 0,
        disabledTeamRules: e.disabledTeamRules.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        searchConversationsEnabled: e.searchConversationsEnabled,
        sendMessageEnabled: e.sendMessageEnabled,
        adminCommandDenylist: e.adminCommandDenylist.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        systemPromptOverride: void 0 !== e.systemPromptOverride ? gy(e.systemPromptOverride, t, r) : void 0
    });
}
function zy(e, t) {
    return {
        _privacyMode: t,
        rulesBlobId: e.rulesBlobId,
        rulesByteLength: e.rulesByteLength,
        skillsBlobId: e.skillsBlobId,
        skillsByteLength: e.skillsByteLength,
        subagentsBlobId: e.subagentsBlobId,
        subagentsByteLength: e.subagentsByteLength,
        mcpsBlobId: e.mcpsBlobId,
        mcpsByteLength: e.mcpsByteLength,
        dynamicContext: void 0 !== e.dynamicContext ? Gy(e.dynamicContext, t) : void 0
    };
}
function Wy(e, t) {
    return {
        _privacyMode: t,
        displayName: e.displayName,
        description: (0, n.cZ)(e.description, n.po.CODE, "description", t),
        skills: e.skills.map((e)=>Ky(e, t)),
        subagents: e.subagents.map((e)=>Ky(e, t)),
        hooks: e.hooks.map((e)=>Ky(e, t)),
        rules: e.rules.map((e)=>Ky(e, t)),
        commands: e.commands.map((e)=>Ky(e, t)),
        mcpServers: e.mcpServers
    };
}
function Vy(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new wy.iT({
        displayName: e.displayName,
        description: e.description.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        skills: e.skills.map((e)=>Yy(e, t, r)),
        subagents: e.subagents.map((e)=>Yy(e, t, r)),
        hooks: e.hooks.map((e)=>Yy(e, t, r)),
        rules: e.rules.map((e)=>Yy(e, t, r)),
        commands: e.commands.map((e)=>Yy(e, t, r)),
        mcpServers: e.mcpServers
    });
}
function Ky(e, t) {
    return {
        _privacyMode: t,
        name: e.name,
        description: (0, n.cZ)(e.description, n.po.CODE, "description", t)
    };
}
function Yy(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new wy.Ww({
        name: e.name,
        description: e.description.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Zy(e, t) {
    return {
        _privacyMode: t,
        displayName: e.displayName,
        description: (0, n.cZ)(e.description, n.po.CODE, "description", t),
        matchedKeyword: e.matchedKeyword,
        skills: e.skills.map((e)=>Ky(e, t)),
        subagents: e.subagents.map((e)=>Ky(e, t)),
        hooks: e.hooks.map((e)=>Ky(e, t)),
        rules: e.rules.map((e)=>Ky(e, t)),
        commands: e.commands.map((e)=>Ky(e, t)),
        mcpServers: e.mcpServers
    };
}
function Xy(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new wy.SW({
        displayName: e.displayName,
        description: e.description.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        matchedKeyword: e.matchedKeyword,
        skills: e.skills.map((e)=>Yy(e, t, r)),
        subagents: e.subagents.map((e)=>Yy(e, t, r)),
        hooks: e.hooks.map((e)=>Yy(e, t, r)),
        rules: e.rules.map((e)=>Yy(e, t, r)),
        commands: e.commands.map((e)=>Yy(e, t, r)),
        mcpServers: e.mcpServers
    });
}
var ew = require("./module-86209.js");
function tw(e, t) {
    return {
        _privacyMode: t,
        apiKey: (0, n.cZ)(e.apiKey, n.po.CREDENTIALS, "api_key", t),
        baseUrl: e.baseUrl
    };
}
function rw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ew.G0({
        apiKey: e.apiKey.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        baseUrl: e.baseUrl
    });
}
function nw(e, t) {
    return {
        _privacyMode: t,
        apiKey: (0, n.cZ)(e.apiKey, n.po.CREDENTIALS, "api_key", t),
        baseUrl: e.baseUrl,
        deployment: e.deployment
    };
}
function sw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ew.ih({
        apiKey: e.apiKey.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        baseUrl: e.baseUrl,
        deployment: e.deployment
    });
}
function ow(e, t) {
    return {
        _privacyMode: t,
        accessKey: (0, n.cZ)(e.accessKey, n.po.CREDENTIALS, "access_key", t),
        secretKey: (0, n.cZ)(e.secretKey, n.po.CREDENTIALS, "secret_key", t),
        region: e.region,
        sessionToken: void 0 !== e.sessionToken ? (0, n.cZ)(e.sessionToken, n.po.CREDENTIALS, "session_token", t) : void 0
    };
}
function iw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ew.R4({
        accessKey: e.accessKey.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        secretKey: e.secretKey.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        region: e.region,
        sessionToken: e.sessionToken?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function aw(e, t) {
    return {
        _privacyMode: t,
        id: e.id,
        value: (0, n.cZ)(e.value, n.po.CODE, "value", t)
    };
}
function cw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ew.SR({
        id: e.id,
        value: e.value.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var lw = require("./module-43081.js");
function uw(e, t) {
    return {
        _privacyMode: t,
        query: (0, n.cZ)(e.query, n.po.CODE, "query", t),
        toolCallId: e.toolCallId,
        limit: e.limit
    };
}
function dw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lw.$m({
        query: e.query.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId,
        limit: e.limit
    });
}
function pw(e, t) {
    return {
        _privacyMode: t,
        result: mw(e.result, t)
    };
}
function mw(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: gw(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: ww(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function hw(e, t, r) {
    return new lw.pT({
        result: fw(e.result, t, r)
    });
}
function fw(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: yw(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: vw(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function gw(e, t) {
    return {
        _privacyMode: t,
        hits: e.hits.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    conversationId: e.conversationId,
                    title: (0, n.cZ)(e.title, n.po.CODE, "title", t),
                    source: e.source,
                    updatedAtMs: e.updatedAtMs,
                    snippet: void 0 !== e.snippet ? (0, n.cZ)(e.snippet, n.po.CODE, "snippet", t) : void 0
                };
            })(e, t)),
        truncated: e.truncated,
        partial: e.partial,
        rebuilding: e.rebuilding
    };
}
function yw(e, t, r) {
    return new lw.H7({
        hits: e.hits.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new lw.B$({
                    conversationId: e.conversationId,
                    title: e.title.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    source: e.source,
                    updatedAtMs: e.updatedAtMs,
                    snippet: e.snippet?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r)),
        truncated: e.truncated,
        partial: e.partial,
        rebuilding: e.rebuilding
    });
}
function ww(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function vw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lw.w$({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var _w = require("./module-35133.js");
function Aw(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? uw(e.args, t) : void 0,
        result: void 0 !== e.result ? pw(e.result, t) : void 0
    };
}
function Sw(e, t, r) {
    return new _w.b({
        args: void 0 !== e.args ? dw(e.args, t, r) : void 0,
        result: void 0 !== e.result ? hw(e.result, t, r) : void 0
    });
}
var bw = require("./module-89582.js");
function Ew(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "blobId":
            return {
                case: "blobId",
                value: e.value
            };
        case "data":
            return {
                case: "data",
                value: (0, n.Yz)(e.value, n.po.CODE, "data", t)
            };
        case "blobIdWithData":
            return {
                case: "blobIdWithData",
                value: Cw(e.value, t)
            };
        case "promptUploadRef":
            return {
                case: "promptUploadRef",
                value: Rw(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Iw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "blobId":
            return {
                case: "blobId",
                value: e.value
            };
        case "data":
            return {
                case: "data",
                value: e.value.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            };
        case "blobIdWithData":
            return {
                case: "blobIdWithData",
                value: kw(e.value, t, r)
            };
        case "promptUploadRef":
            return {
                case: "promptUploadRef",
                value: Bw(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Cw(e, t) {
    return {
        _privacyMode: t,
        blobId: e.blobId,
        data: (0, n.Yz)(e.data, n.po.CODE, "data", t)
    };
}
function kw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.q6({
        blobId: e.blobId,
        data: e.data.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function xw(e, t) {
    return {
        _privacyMode: t,
        width: e.width,
        height: e.height
    };
}
function Tw(e, t, r) {
    return new bw.AI({
        width: e.width,
        height: e.height
    });
}
function Rw(e, t) {
    return {
        _privacyMode: t,
        uploadId: e.uploadId
    };
}
function Bw(e, t, r) {
    return new bw.tp({
        uploadId: e.uploadId
    });
}
function Pw(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "blobId":
            return {
                case: "blobId",
                value: e.value
            };
        case "data":
            return {
                case: "data",
                value: (0, n.Yz)(e.value, n.po.CODE, "data", t)
            };
        case "blobIdWithData":
            return {
                case: "blobIdWithData",
                value: Mw(e.value, t)
            };
        case "promptUploadRef":
            return {
                case: "promptUploadRef",
                value: Rw(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Jw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "blobId":
            return {
                case: "blobId",
                value: e.value
            };
        case "data":
            return {
                case: "data",
                value: e.value.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            };
        case "blobIdWithData":
            return {
                case: "blobIdWithData",
                value: qw(e.value, t, r)
            };
        case "promptUploadRef":
            return {
                case: "promptUploadRef",
                value: Bw(e.value)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Mw(e, t) {
    return {
        _privacyMode: t,
        blobId: e.blobId,
        data: (0, n.Yz)(e.data, n.po.CODE, "data", t)
    };
}
function qw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.wN({
        blobId: e.blobId,
        data: e.data.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Dw(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "blobId":
            return {
                case: "blobId",
                value: e.value
            };
        case "data":
            return {
                case: "data",
                value: (0, n.Yz)(e.value, n.po.CODE, "data", t)
            };
        case "blobIdWithData":
            return {
                case: "blobIdWithData",
                value: Nw(e.value, t)
            };
        case "signedUrl":
            return {
                case: "signedUrl",
                value: Uw(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ow(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "blobId":
            return {
                case: "blobId",
                value: e.value
            };
        case "data":
            return {
                case: "data",
                value: e.value.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            };
        case "blobIdWithData":
            return {
                case: "blobIdWithData",
                value: Fw(e.value, t, r)
            };
        case "signedUrl":
            return {
                case: "signedUrl",
                value: Lw(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Nw(e, t) {
    return {
        _privacyMode: t,
        blobId: e.blobId,
        data: (0, n.Yz)(e.data, n.po.CODE, "data", t)
    };
}
function Fw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.qf({
        blobId: e.blobId,
        data: e.data.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Uw(e, t) {
    return {
        _privacyMode: t,
        url: (0, n.cZ)(e.url, n.po.CREDENTIALS, "url", t),
        key: e.key,
        expiresAtUnixMs: e.expiresAtUnixMs,
        refreshAfterUnixMs: e.refreshAfterUnixMs,
        conversationId: e.conversationId
    };
}
function Lw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.tS({
        url: e.url.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        key: e.key,
        expiresAtUnixMs: e.expiresAtUnixMs,
        refreshAfterUnixMs: e.refreshAfterUnixMs,
        conversationId: e.conversationId
    });
}
function $w(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "data":
            return {
                case: "data",
                value: (0, n.cZ)(e.value, n.po.CODE, "data", t)
            };
        case "blobId":
            return {
                case: "blobId",
                value: e.value
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Qw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "data":
            return {
                case: "data",
                value: e.value.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            };
        case "blobId":
            return {
                case: "blobId",
                value: e.value
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function jw(e, t) {
    return {
        _privacyMode: t,
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
        fullContentLengthCharCount: e.fullContentLengthCharCount
    };
}
function Gw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.zm({
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        fullContentLengthCharCount: e.fullContentLengthCharCount
    });
}
function Hw(e, t) {
    return {
        _privacyMode: t,
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
        fullContentLengthCharCount: e.fullContentLengthCharCount
    };
}
function zw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.Dw({
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        fullContentLengthCharCount: e.fullContentLengthCharCount
    });
}
function Ww(e, t) {
    return {
        _privacyMode: t,
        pluginId: e.pluginId,
        capabilityType: e.capabilityType,
        sourcePath: (0, n.cZ)(e.sourcePath, n.po.PATH, "source_path", t),
        snapshotToken: (0, n.cZ)(e.snapshotToken, n.po.CREDENTIALS, "snapshot_token", t),
        resolvedCommitSha: e.resolvedCommitSha
    };
}
function Vw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.iN({
        pluginId: e.pluginId,
        capabilityType: e.capabilityType,
        sourcePath: e.sourcePath.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        snapshotToken: e.snapshotToken.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        resolvedCommitSha: e.resolvedCommitSha
    });
}
function Kw(e, t) {
    return {
        _privacyMode: t,
        recentAgents: e.recentAgents.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    name: e.name,
                    path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
                    overview: void 0 !== e.overview ? (0, n.cZ)(e.overview, n.po.CODE, "overview", t) : void 0
                };
            })(e, t))
    };
}
function Yw(e, t, r) {
    return new bw.$k({
        recentAgents: e.recentAgents.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.nU({
                    name: e.name,
                    path: e.path.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    overview: e.overview?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r))
    });
}
function Zw(e, t) {
    return {
        _privacyMode: t,
        callFrames: e.callFrames.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    functionName: void 0 !== e.functionName ? (0, n.cZ)(e.functionName, n.po.CODE, "function_name", t) : void 0,
                    url: e.url,
                    lineNumber: e.lineNumber,
                    columnNumber: e.columnNumber
                };
            })(e, t)),
        rawStackTrace: void 0 !== e.rawStackTrace ? (0, n.cZ)(e.rawStackTrace, n.po.CODE, "raw_stack_trace", t) : void 0
    };
}
function Xw(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.C8({
        callFrames: e.callFrames.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.A2({
                    functionName: e.functionName?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    url: e.url,
                    lineNumber: e.lineNumber,
                    columnNumber: e.columnNumber
                });
            })(e, t, r)),
        rawStackTrace: e.rawStackTrace?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function ev(e, t) {
    return {
        _privacyMode: t,
        filesToCommit: e.filesToCommit.map((e)=>(0, n.cZ)(e, n.po.PATH, "files_to_commit", t)),
        filesToExcludeFromCommit: e.filesToExcludeFromCommit.map((e)=>(0, n.cZ)(e, n.po.PATH, "files_to_exclude_from_commit", t)),
        shouldStageAllChanges: e.shouldStageAllChanges,
        createPrDraft: e.createPrDraft,
        filesToCommitWithStatus: e.filesToCommitWithStatus.map((e)=>nv(e, t)),
        filesToExcludeFromCommitWithStatus: e.filesToExcludeFromCommitWithStatus.map((e)=>nv(e, t))
    };
}
function tv(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.SL({
        filesToCommit: e.filesToCommit.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        filesToExcludeFromCommit: e.filesToExcludeFromCommit.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        shouldStageAllChanges: e.shouldStageAllChanges,
        createPrDraft: e.createPrDraft,
        filesToCommitWithStatus: e.filesToCommitWithStatus.map((e)=>sv(e, t, r)),
        filesToExcludeFromCommitWithStatus: e.filesToExcludeFromCommitWithStatus.map((e)=>sv(e, t, r))
    });
}
function rv(e, t) {
    return {
        _privacyMode: t
    };
}
function nv(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        status: e.status
    };
}
function sv(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.f2({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        status: e.status
    });
}
function ov(e, t) {
    return {
        _privacyMode: t,
        filesToPush: e.filesToPush.map((e)=>(0, n.cZ)(e, n.po.PATH, "files_to_push", t)),
        createPrDraft: e.createPrDraft
    };
}
function iv(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.$y({
        filesToPush: e.filesToPush.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        createPrDraft: e.createPrDraft
    });
}
function av(e, t) {
    return {
        _privacyMode: t,
        baseBranch: e.baseBranch,
        prUrl: e.prUrl
    };
}
function cv(e, t) {
    return {
        _privacyMode: t,
        baseBranch: e.baseBranch
    };
}
function lv(e, t, r) {
    return new bw.nD({
        baseBranch: e.baseBranch
    });
}
function uv(e, t) {
    return {
        _privacyMode: t,
        baseBranch: e.baseBranch
    };
}
function dv(e, t, r) {
    return new bw.Kn({
        baseBranch: e.baseBranch
    });
}
function pv(e, t) {
    return {
        _privacyMode: t,
        remoteBranch: e.remoteBranch
    };
}
function mv(e, t, r) {
    return new bw._A({
        remoteBranch: e.remoteBranch
    });
}
function hv(e, t) {
    return {
        _privacyMode: t,
        branchContext: void 0 !== e.branchContext ? wv(e.branchContext, t) : void 0,
        pathToTemplateFile: void 0 !== e.pathToTemplateFile ? (0, n.cZ)(e.pathToTemplateFile, n.po.PATH, "path_to_template_file", t) : void 0,
        pathToTemplateDir: void 0 !== e.pathToTemplateDir ? (0, n.cZ)(e.pathToTemplateDir, n.po.PATH, "path_to_template_dir", t) : void 0,
        params: fv(e.params, t)
    };
}
function fv(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "commitParams":
            return {
                case: "commitParams",
                value: ev(e.value, t)
            };
        case "commitAndPushParams":
            return {
                case: "commitAndPushParams",
                value: ev(e.value, t)
            };
        case "pushParams":
            return {
                case: "pushParams",
                value: ov(e.value, t)
            };
        case "createPrParams":
            return {
                case: "createPrParams",
                value: ov(e.value, t)
            };
        case "createPrWithChangesParams":
            return {
                case: "createPrWithChangesParams",
                value: ev(e.value, t)
            };
        case "fixMergeConflictsParams":
            return {
                case: "fixMergeConflictsParams",
                value: av(e.value, t)
            };
        case "babysitPrInCloudParams":
            return {
                case: "babysitPrInCloudParams",
                value: cv(e.value, t)
            };
        case "applyLocallyParams":
            return {
                case: "applyLocallyParams",
                value: pv(e.value, t)
            };
        case "checkoutBranchParams":
            return {
                case: "checkoutBranchParams",
                value: pv(e.value, t)
            };
        case "createBranchAndCommitParams":
            return {
                case: "createBranchAndCommitParams",
                value: ev(e.value, t)
            };
        case "createBranchCommitAndPushParams":
            return {
                case: "createBranchCommitAndPushParams",
                value: ev(e.value, t)
            };
        case "updateBranchParams":
            return {
                case: "updateBranchParams",
                value: uv(e.value, t)
            };
        case "createBranchParams":
            return {
                case: "createBranchParams",
                value: rv(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function gv(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.Lv({
        branchContext: void 0 !== e.branchContext ? vv(e.branchContext, t, r) : void 0,
        pathToTemplateFile: e.pathToTemplateFile?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        pathToTemplateDir: e.pathToTemplateDir?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        params: yv(e.params, t, r)
    });
}
function yv(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "commitParams":
            return {
                case: "commitParams",
                value: tv(e.value, t, r)
            };
        case "commitAndPushParams":
            return {
                case: "commitAndPushParams",
                value: tv(e.value, t, r)
            };
        case "pushParams":
            return {
                case: "pushParams",
                value: iv(e.value, t, r)
            };
        case "createPrParams":
            return {
                case: "createPrParams",
                value: iv(e.value, t, r)
            };
        case "createPrWithChangesParams":
            return {
                case: "createPrWithChangesParams",
                value: tv(e.value, t, r)
            };
        case "fixMergeConflictsParams":
            return {
                case: "fixMergeConflictsParams",
                value: (n = e.value, new bw.F_({
                    baseBranch: n.baseBranch,
                    prUrl: n.prUrl
                }))
            };
        case "babysitPrInCloudParams":
            return {
                case: "babysitPrInCloudParams",
                value: lv(e.value)
            };
        case "applyLocallyParams":
            return {
                case: "applyLocallyParams",
                value: mv(e.value)
            };
        case "checkoutBranchParams":
            return {
                case: "checkoutBranchParams",
                value: mv(e.value)
            };
        case "createBranchAndCommitParams":
            return {
                case: "createBranchAndCommitParams",
                value: tv(e.value, t, r)
            };
        case "createBranchCommitAndPushParams":
            return {
                case: "createBranchCommitAndPushParams",
                value: tv(e.value, t, r)
            };
        case "updateBranchParams":
            return {
                case: "updateBranchParams",
                value: dv(e.value)
            };
        case "createBranchParams":
            return {
                case: "createBranchParams",
                value: (e.value, new bw.$K({}))
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
    var n;
}
function wv(e, t) {
    return {
        _privacyMode: t,
        currentBranch: e.currentBranch,
        baseBranch: e.baseBranch,
        agentBranchPrefix: e.agentBranchPrefix
    };
}
function vv(e, t, r) {
    return new bw.HE({
        currentBranch: e.currentBranch,
        baseBranch: e.baseBranch,
        agentBranchPrefix: e.agentBranchPrefix
    });
}
function _v(e, t) {
    return {
        _privacyMode: t,
        selectedImages: e.selectedImages.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    uuid: e.uuid,
                    path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
                    dimension: void 0 !== e.dimension ? xw(e.dimension, t) : void 0,
                    mimeType: e.mimeType,
                    dataOrBlobId: Ew(e.dataOrBlobId, t)
                };
            })(e, t)),
        invocationContext: void 0 !== e.invocationContext ? Sv(e.invocationContext, t) : void 0,
        extraContext: e.extraContext.map((e)=>(0, n.cZ)(e, n.po.CODE, "extra_context", t)),
        extraContextEntries: e.extraContextEntries.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    dataOrBlobId: $w(e.dataOrBlobId, t)
                };
            })(e, t)),
        files: e.files.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
                    path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
                    relativePath: void 0 !== e.relativePath ? (0, n.cZ)(e.relativePath, n.po.PATH, "relative_path", t) : void 0
                };
            })(e, t)),
        codeSelections: e.codeSelections.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
                    path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
                    relativePath: void 0 !== e.relativePath ? (0, n.cZ)(e.relativePath, n.po.PATH, "relative_path", t) : void 0,
                    range: void 0 !== e.range ? o(e.range, t) : void 0
                };
            })(e, t)),
        terminals: e.terminals.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
                    title: void 0 !== e.title ? (0, n.cZ)(e.title, n.po.CODE, "title", t) : void 0,
                    path: void 0 !== e.path ? (0, n.cZ)(e.path, n.po.PATH, "path", t) : void 0
                };
            })(e, t)),
        terminalSelections: e.terminalSelections.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
                    title: void 0 !== e.title ? (0, n.cZ)(e.title, n.po.CODE, "title", t) : void 0,
                    path: void 0 !== e.path ? (0, n.cZ)(e.path, n.po.PATH, "path", t) : void 0,
                    range: void 0 !== e.range ? o(e.range, t) : void 0
                };
            })(e, t)),
        folders: e.folders.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
                    relativePath: void 0 !== e.relativePath ? (0, n.cZ)(e.relativePath, n.po.PATH, "relative_path", t) : void 0,
                    directoryTree: void 0 !== e.directoryTree ? Fc(e.directoryTree, t) : void 0
                };
            })(e, t)),
        externalLinks: e.externalLinks.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    url: e.url,
                    uuid: e.uuid,
                    pdfContent: void 0 !== e.pdfContent ? (0, n.cZ)(e.pdfContent, n.po.CODE, "pdf_content", t) : void 0,
                    isPdf: e.isPdf,
                    filename: void 0 !== e.filename ? (0, n.cZ)(e.filename, n.po.PATH, "filename", t) : void 0,
                    blobId: e.blobId
                };
            })(e, t)),
        cursorRules: e.cursorRules.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    rule: void 0 !== e.rule ? Ph(e.rule, t) : void 0
                };
            })(e, t)),
        gitDiff: void 0 !== e.gitDiff ? jw(e.gitDiff, t) : void 0,
        gitDiffFromBranchToMain: void 0 !== e.gitDiffFromBranchToMain ? Hw(e.gitDiffFromBranchToMain, t) : void 0,
        cursorCommands: e.cursorCommands.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    name: e.name,
                    content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
                    pluginCapability: void 0 !== e.pluginCapability ? Ww(e.pluginCapability, t) : void 0,
                    fullPath: void 0 !== e.fullPath ? (0, n.cZ)(e.fullPath, n.po.PATH, "full_path", t) : void 0,
                    displayName: e.displayName
                };
            })(e, t)),
        documentations: e.documentations.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    docId: e.docId,
                    name: e.name
                };
            })(e, t)),
        uiElements: e.uiElements.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    element: (0, n.cZ)(e.element, n.po.CODE, "element", t),
                    xpath: (0, n.cZ)(e.xpath, n.po.CODE, "xpath", t),
                    textContent: (0, n.cZ)(e.textContent, n.po.CODE, "text_content", t),
                    extra: (0, n.cZ)(e.extra, n.po.CODE, "extra", t),
                    component: void 0 !== e.component ? (0, n.cZ)(e.component, n.po.CODE, "component", t) : void 0,
                    componentPropsJson: void 0 !== e.componentPropsJson ? (0, n.cZ)(e.componentPropsJson, n.po.CODE, "component_props_json", t) : void 0
                };
            })(e, t)),
        consoleLogs: e.consoleLogs.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    message: (0, n.cZ)(e.message, n.po.CODE, "message", t),
                    timestamp: e.timestamp,
                    level: e.level,
                    clientName: e.clientName,
                    sessionId: e.sessionId,
                    stackTrace: void 0 !== e.stackTrace ? Zw(e.stackTrace, t) : void 0,
                    objectDataJson: void 0 !== e.objectDataJson ? (0, n.cZ)(e.objectDataJson, n.po.CODE, "object_data_json", t) : void 0
                };
            })(e, t)),
        gitCommits: e.gitCommits.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    sha: e.sha,
                    message: (0, n.cZ)(e.message, n.po.CODE, "message", t),
                    description: void 0 !== e.description ? (0, n.cZ)(e.description, n.po.CODE, "description", t) : void 0,
                    diff: (0, n.cZ)(e.diff, n.po.CODE, "diff", t)
                };
            })(e, t)),
        pastChats: e.pastChats.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    agentId: e.agentId,
                    name: e.name
                };
            })(e, t)),
        gitPrDiffSelections: e.gitPrDiffSelections.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    prUrl: e.prUrl,
                    filePath: (0, n.cZ)(e.filePath, n.po.PATH, "file_path", t),
                    startLine: e.startLine,
                    endLine: e.endLine,
                    diffContent: void 0 !== e.diffContent ? (0, n.cZ)(e.diffContent, n.po.CODE, "diff_content", t) : void 0,
                    blobId: e.blobId
                };
            })(e, t)),
        selectedPullRequests: e.selectedPullRequests.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    number: e.number,
                    url: e.url,
                    title: void 0 !== e.title ? (0, n.cZ)(e.title, n.po.CODE, "title", t) : void 0,
                    folderPath: (0, n.cZ)(e.folderPath, n.po.PATH, "folder_path", t),
                    summaryJson: void 0 !== e.summaryJson ? (0, n.cZ)(e.summaryJson, n.po.CODE, "summary_json", t) : void 0,
                    description: void 0 !== e.description ? (0, n.cZ)(e.description, n.po.CODE, "description", t) : void 0,
                    blobId: e.blobId
                };
            })(e, t)),
        selectedSubagents: e.selectedSubagents.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    name: e.name
                };
            })(e, t)),
        selectedVideos: e.selectedVideos.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    uuid: e.uuid,
                    path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
                    fps: e.fps,
                    mimeType: e.mimeType,
                    filename: (0, n.cZ)(e.filename, n.po.PATH, "filename", t),
                    materializeToFilesystem: e.materializeToFilesystem,
                    dataOrBlobId: Dw(e.dataOrBlobId, t)
                };
            })(e, t)),
        selectedBrowsers: e.selectedBrowsers.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    browserId: e.browserId,
                    url: e.url,
                    pageTitle: void 0 !== e.pageTitle ? (0, n.cZ)(e.pageTitle, n.po.CODE, "page_title", t) : void 0
                };
            })(e, t)),
        selectedDocuments: e.selectedDocuments.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    uuid: e.uuid,
                    filename: (0, n.cZ)(e.filename, n.po.PATH, "filename", t),
                    mimeType: e.mimeType,
                    path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
                    dataOrBlobId: Pw(e.dataOrBlobId, t)
                };
            })(e, t)),
        selectedSkills: e.selectedSkills.map((e)=>qg(e, t)),
        recentAgentsContext: void 0 !== e.recentAgentsContext ? Kw(e.recentAgentsContext, t) : void 0,
        selectedAgenticGitAction: void 0 !== e.selectedAgenticGitAction ? hv(e.selectedAgenticGitAction, t) : void 0
    };
}
function Av(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.xv({
        selectedImages: e.selectedImages.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.d({
                    uuid: e.uuid,
                    path: e.path.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    dimension: void 0 !== e.dimension ? Tw(e.dimension) : void 0,
                    mimeType: e.mimeType,
                    dataOrBlobId: Iw(e.dataOrBlobId, t, r)
                });
            })(e, t, r)),
        invocationContext: void 0 !== e.invocationContext ? Ev(e.invocationContext, t, r) : void 0,
        extraContext: e.extraContext.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        extraContextEntries: e.extraContextEntries.map((e)=>(function(e, t, r) {
                return new bw.o1({
                    dataOrBlobId: Qw(e.dataOrBlobId, t, r)
                });
            })(e, t, r)),
        files: e.files.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.OL({
                    content: e.content.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    path: e.path.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    relativePath: e.relativePath?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r)),
        codeSelections: e.codeSelections.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.Pd({
                    content: e.content.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    path: e.path.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    relativePath: e.relativePath?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    range: void 0 !== e.range ? i(e.range, t, r) : void 0
                });
            })(e, t, r)),
        terminals: e.terminals.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.iw({
                    content: e.content.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    title: e.title?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    path: e.path?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r)),
        terminalSelections: e.terminalSelections.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.Yc({
                    content: e.content.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    title: e.title?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    path: e.path?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    range: void 0 !== e.range ? i(e.range, t, r) : void 0
                });
            })(e, t, r)),
        folders: e.folders.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.Gy({
                    path: e.path.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    relativePath: e.relativePath?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    directoryTree: void 0 !== e.directoryTree ? Uc(e.directoryTree, t, r) : void 0
                });
            })(e, t, r)),
        externalLinks: e.externalLinks.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.Hw({
                    url: e.url,
                    uuid: e.uuid,
                    pdfContent: e.pdfContent?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    isPdf: e.isPdf,
                    filename: e.filename?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    blobId: void 0 !== e.blobId ? e.blobId : void 0
                });
            })(e, t, r)),
        cursorRules: e.cursorRules.map((e)=>(function(e, t, r) {
                return new bw.G4({
                    rule: void 0 !== e.rule ? Jh(e.rule, t, r) : void 0
                });
            })(e, t, r)),
        gitDiff: void 0 !== e.gitDiff ? Gw(e.gitDiff, t, r) : void 0,
        gitDiffFromBranchToMain: void 0 !== e.gitDiffFromBranchToMain ? zw(e.gitDiffFromBranchToMain, t, r) : void 0,
        cursorCommands: e.cursorCommands.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.Ps({
                    name: e.name,
                    content: e.content.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    pluginCapability: void 0 !== e.pluginCapability ? Vw(e.pluginCapability, t, r) : void 0,
                    fullPath: e.fullPath?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    displayName: e.displayName
                });
            })(e, t, r)),
        documentations: e.documentations.map((e)=>(function(e) {
                return new bw.uH({
                    docId: e.docId,
                    name: e.name
                });
            })(e)),
        uiElements: e.uiElements.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.wY({
                    element: e.element.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    xpath: e.xpath.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    textContent: e.textContent.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    extra: e.extra.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    component: e.component?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    componentPropsJson: e.componentPropsJson?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r)),
        consoleLogs: e.consoleLogs.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.x2({
                    message: e.message.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    timestamp: e.timestamp,
                    level: e.level,
                    clientName: e.clientName,
                    sessionId: e.sessionId,
                    stackTrace: void 0 !== e.stackTrace ? Xw(e.stackTrace, t, r) : void 0,
                    objectDataJson: e.objectDataJson?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r)),
        gitCommits: e.gitCommits.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.rV({
                    sha: e.sha,
                    message: e.message.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    description: e.description?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    diff: e.diff.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r)),
        pastChats: e.pastChats.map((e)=>(function(e) {
                return new bw.AW({
                    agentId: e.agentId,
                    name: e.name
                });
            })(e)),
        gitPrDiffSelections: e.gitPrDiffSelections.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.vf({
                    prUrl: e.prUrl,
                    filePath: e.filePath.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    startLine: e.startLine,
                    endLine: e.endLine,
                    diffContent: e.diffContent?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    blobId: void 0 !== e.blobId ? e.blobId : void 0
                });
            })(e, t, r)),
        selectedPullRequests: e.selectedPullRequests.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.UL({
                    number: e.number,
                    url: e.url,
                    title: e.title?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    folderPath: e.folderPath.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    summaryJson: e.summaryJson?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    description: e.description?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    blobId: void 0 !== e.blobId ? e.blobId : void 0
                });
            })(e, t, r)),
        selectedSubagents: e.selectedSubagents.map((e)=>(function(e) {
                return new bw.vU({
                    name: e.name
                });
            })(e)),
        selectedVideos: e.selectedVideos.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.zE({
                    uuid: e.uuid,
                    path: e.path.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    fps: e.fps,
                    mimeType: e.mimeType,
                    filename: e.filename.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    materializeToFilesystem: e.materializeToFilesystem,
                    dataOrBlobId: Ow(e.dataOrBlobId, t, r)
                });
            })(e, t, r)),
        selectedBrowsers: e.selectedBrowsers.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.i6({
                    browserId: e.browserId,
                    url: e.url,
                    pageTitle: e.pageTitle?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r)),
        selectedDocuments: e.selectedDocuments.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.vF({
                    uuid: e.uuid,
                    filename: e.filename.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    mimeType: e.mimeType,
                    path: e.path.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    dataOrBlobId: Jw(e.dataOrBlobId, t, r)
                });
            })(e, t, r)),
        selectedSkills: e.selectedSkills.map((e)=>Dg(e, t, r)),
        recentAgentsContext: void 0 !== e.recentAgentsContext ? Yw(e.recentAgentsContext, t, r) : void 0,
        selectedAgenticGitAction: void 0 !== e.selectedAgenticGitAction ? gv(e.selectedAgenticGitAction, t, r) : void 0
    });
}
function Sv(e, t) {
    return {
        _privacyMode: t,
        data: bv(e.data, t)
    };
}
function bv(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "slackThread":
            return {
                case: "slackThread",
                value: Cv(e.value, t)
            };
        case "githubPr":
            return {
                case: "githubPr",
                value: Rv(e.value, t)
            };
        case "ideState":
            return {
                case: "ideState",
                value: Pv(e.value, t)
            };
        case "microsoftTeamsThread":
            return {
                case: "microsoftTeamsThread",
                value: xv(e.value, t)
            };
        case "blobId":
            return {
                case: "blobId",
                value: e.value
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Ev(e, t, r) {
    return new bw.yz({
        data: Iv(e.data, t, r)
    });
}
function Iv(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "slackThread":
            return {
                case: "slackThread",
                value: kv(e.value, t, r)
            };
        case "githubPr":
            return {
                case: "githubPr",
                value: Bv(e.value, t, r)
            };
        case "ideState":
            return {
                case: "ideState",
                value: Jv(e.value, t, r)
            };
        case "microsoftTeamsThread":
            return {
                case: "microsoftTeamsThread",
                value: Tv(e.value, t, r)
            };
        case "blobId":
            return {
                case: "blobId",
                value: e.value
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Cv(e, t) {
    return {
        _privacyMode: t,
        thread: (0, n.cZ)(e.thread, n.po.CODE, "thread", t),
        channelName: e.channelName,
        channelPurpose: void 0 !== e.channelPurpose ? (0, n.cZ)(e.channelPurpose, n.po.CODE, "channel_purpose", t) : void 0,
        channelTopic: void 0 !== e.channelTopic ? (0, n.cZ)(e.channelTopic, n.po.CODE, "channel_topic", t) : void 0,
        senderName: void 0 !== e.senderName ? (0, n.cZ)(e.senderName, n.po.CODE, "sender_name", t) : void 0,
        senderId: e.senderId,
        senderType: e.senderType,
        isDirectlyAddressed: e.isDirectlyAddressed
    };
}
function kv(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.Rk({
        thread: e.thread.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        channelName: e.channelName,
        channelPurpose: e.channelPurpose?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        channelTopic: e.channelTopic?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        senderName: e.senderName?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        senderId: e.senderId,
        senderType: e.senderType,
        isDirectlyAddressed: e.isDirectlyAddressed
    });
}
function xv(e, t) {
    return {
        _privacyMode: t,
        thread: (0, n.cZ)(e.thread, n.po.CODE, "thread", t),
        channelName: e.channelName,
        teamName: e.teamName,
        channelDescription: void 0 !== e.channelDescription ? (0, n.cZ)(e.channelDescription, n.po.CODE, "channel_description", t) : void 0,
        teamDescription: void 0 !== e.teamDescription ? (0, n.cZ)(e.teamDescription, n.po.CODE, "team_description", t) : void 0
    };
}
function Tv(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.lG({
        thread: e.thread.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        channelName: e.channelName,
        teamName: e.teamName,
        channelDescription: e.channelDescription?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        teamDescription: e.teamDescription?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Rv(e, t) {
    return {
        _privacyMode: t,
        title: (0, n.cZ)(e.title, n.po.CODE, "title", t),
        description: (0, n.cZ)(e.description, n.po.CODE, "description", t),
        comments: (0, n.cZ)(e.comments, n.po.CODE, "comments", t),
        ciFailures: void 0 !== e.ciFailures ? (0, n.cZ)(e.ciFailures, n.po.CODE, "ci_failures", t) : void 0
    };
}
function Bv(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.KJ({
        title: e.title.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        description: e.description.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        comments: e.comments.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        ciFailures: e.ciFailures?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Pv(e, t) {
    return {
        _privacyMode: t,
        visibleFiles: e.visibleFiles.map((e)=>Mv(e, t)),
        recentlyViewedFiles: e.recentlyViewedFiles.map((e)=>Mv(e, t)),
        currentlyViewedPrs: e.currentlyViewedPrs.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    number: e.number,
                    url: e.url,
                    title: void 0 !== e.title ? (0, n.cZ)(e.title, n.po.CODE, "title", t) : void 0,
                    folderPath: void 0 !== e.folderPath ? (0, n.cZ)(e.folderPath, n.po.PATH, "folder_path", t) : void 0,
                    summaryJson: void 0 !== e.summaryJson ? (0, n.cZ)(e.summaryJson, n.po.CODE, "summary_json", t) : void 0,
                    description: void 0 !== e.description ? (0, n.cZ)(e.description, n.po.CODE, "description", t) : void 0
                };
            })(e, t))
    };
}
function Jv(e, t, r) {
    return new bw.CP({
        visibleFiles: e.visibleFiles.map((e)=>qv(e, t, r)),
        recentlyViewedFiles: e.recentlyViewedFiles.map((e)=>qv(e, t, r)),
        currentlyViewedPrs: e.currentlyViewedPrs.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new bw.le({
                    number: e.number,
                    url: e.url,
                    title: e.title?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    folderPath: e.folderPath?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    summaryJson: e.summaryJson?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    description: e.description?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r))
    });
}
function Mv(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        relativePath: void 0 !== e.relativePath ? (0, n.cZ)(e.relativePath, n.po.PATH, "relative_path", t) : void 0,
        cursorPosition: void 0 !== e.cursorPosition ? Dv(e.cursorPosition, t) : void 0,
        totalLines: e.totalLines,
        activeCommand: void 0 !== e.activeCommand ? (0, n.cZ)(e.activeCommand, n.po.CODE, "active_command", t) : void 0
    };
}
function qv(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.vp({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        relativePath: e.relativePath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        cursorPosition: void 0 !== e.cursorPosition ? Ov(e.cursorPosition, t, r) : void 0,
        totalLines: e.totalLines,
        activeCommand: e.activeCommand?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Dv(e, t) {
    return {
        _privacyMode: t,
        line: e.line,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t)
    };
}
function Ov(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bw.rY({
        line: e.line,
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Nv = require("./module-48331.js"), Fv = require("./module-81563.js"), Uv = require("./module-67918.js");
function Lv(e, t) {
    return {
        _privacyMode: t,
        line: e.line,
        column: e.column
    };
}
function $v(e, t, r) {
    return new Uv.CursorPosition({
        line: e.line,
        column: e.column
    });
}
function Qv(e, t) {
    return {
        _privacyMode: t,
        cwd: (0, n.cZ)(e.cwd, n.po.PATH, "cwd", t),
        ref: e.ref,
        baseRef: e.baseRef,
        mergeBase: e.mergeBase,
        targetPaths: e.targetPaths.map((e)=>(0, n.cZ)(e, n.po.PATH, "target_paths", t)),
        unifiedContextLines: e.unifiedContextLines,
        maxUntrackedFiles: e.maxUntrackedFiles,
        submoduleRecurseDepth: e.submoduleRecurseDepth,
        includeSpaceChanges: e.includeSpaceChanges,
        committedOnly: e.committedOnly,
        computePatchId: e.computePatchId,
        returnHeadSha: e.returnHeadSha,
        maxResponseBytes: e.maxResponseBytes,
        maxFilesWithContents: e.maxFilesWithContents,
        maxContentBytes: e.maxContentBytes,
        outputFormat: e.outputFormat
    };
}
function jv(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Uv.GetDiffRequest({
        cwd: e.cwd.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        ref: e.ref,
        baseRef: e.baseRef,
        mergeBase: e.mergeBase,
        targetPaths: e.targetPaths.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        unifiedContextLines: e.unifiedContextLines,
        maxUntrackedFiles: e.maxUntrackedFiles,
        submoduleRecurseDepth: e.submoduleRecurseDepth,
        includeSpaceChanges: e.includeSpaceChanges,
        committedOnly: e.committedOnly,
        computePatchId: e.computePatchId,
        returnHeadSha: e.returnHeadSha,
        maxResponseBytes: e.maxResponseBytes,
        maxFilesWithContents: e.maxFilesWithContents,
        maxContentBytes: e.maxContentBytes,
        outputFormat: e.outputFormat
    });
}
function Gv(e, t) {
    return {
        _privacyMode: t,
        diff: void 0 !== e.diff ? zv(e.diff, t) : void 0,
        submoduleDiffs: e.submoduleDiffs.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    relativePath: (0, n.cZ)(e.relativePath, n.po.PATH, "relative_path", t),
                    diff: void 0 !== e.diff ? zv(e.diff, t) : void 0,
                    errored: e.errored
                };
            })(e, t)),
        patchId: e.patchId,
        headSha: e.headSha,
        hasUncommittedChanges: e.hasUncommittedChanges
    };
}
function Hv(e, t, r) {
    return new Uv.GetDiffResponse({
        diff: void 0 !== e.diff ? Wv(e.diff, t, r) : void 0,
        submoduleDiffs: e.submoduleDiffs.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Uv.GetDiffResponse_SubmoduleDiff({
                    relativePath: e.relativePath.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    diff: void 0 !== e.diff ? Wv(e.diff, t, r) : void 0,
                    errored: e.errored
                });
            })(e, t, r)),
        patchId: e.patchId,
        headSha: e.headSha,
        hasUncommittedChanges: e.hasUncommittedChanges
    });
}
function zv(e, t) {
    return {
        _privacyMode: t,
        diffs: e.diffs.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    added: e.added,
                    removed: e.removed,
                    from: e.from,
                    to: e.to,
                    chunks: e.chunks.map((e)=>(function(e, t) {
                            return {
                                _privacyMode: t,
                                content: (0, n.cZ)(e.content, n.po.CODE, "content", t),
                                lines: e.lines.map((e)=>(0, n.cZ)(e, n.po.CODE, "lines", t)),
                                oldStart: e.oldStart,
                                oldLines: e.oldLines,
                                newStart: e.newStart,
                                newLines: e.newLines
                            };
                        })(e, t)),
                    beforeFileContents: void 0 !== e.beforeFileContents ? (0, n.cZ)(e.beforeFileContents, n.po.CODE, "before_file_contents", t) : void 0,
                    afterFileContents: void 0 !== e.afterFileContents ? (0, n.cZ)(e.afterFileContents, n.po.CODE, "after_file_contents", t) : void 0,
                    isGenerated: e.isGenerated,
                    oldMode: e.oldMode,
                    newMode: e.newMode
                };
            })(e, t)),
        diffType: e.diffType,
        fileContentsOmitted: e.fileContentsOmitted
    };
}
function Wv(e, t, r) {
    return new Uv.GitDiff({
        diffs: e.diffs.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Uv.FileDiff({
                    added: e.added,
                    removed: e.removed,
                    from: e.from,
                    to: e.to,
                    chunks: e.chunks.map((e)=>(function(e, t, r) {
                            const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                            return new Uv.FileDiff_Chunk({
                                content: e.content.unwrap(t, {
                                    redactUnallowedFieldsInsteadOfThrowing: n,
                                    enforcing: s
                                }),
                                lines: e.lines.map((e)=>e.unwrap(t, {
                                        redactUnallowedFieldsInsteadOfThrowing: n,
                                        enforcing: s
                                    })),
                                oldStart: e.oldStart,
                                oldLines: e.oldLines,
                                newStart: e.newStart,
                                newLines: e.newLines
                            });
                        })(e, t, r)),
                    beforeFileContents: e.beforeFileContents?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    afterFileContents: e.afterFileContents?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    isGenerated: e.isGenerated,
                    oldMode: e.oldMode,
                    newMode: e.newMode
                });
            })(e, t, r)),
        diffType: e.diffType,
        fileContentsOmitted: e.fileContentsOmitted
    });
}
function Vv(e, t) {
    return {
        _privacyMode: t,
        startPosition: void 0 !== e.startPosition ? Lv(e.startPosition, t) : void 0,
        endPosition: void 0 !== e.endPosition ? Lv(e.endPosition, t) : void 0
    };
}
function Kv(e, t, r) {
    return new Uv.CursorRange({
        startPosition: void 0 !== e.startPosition ? $v(e.startPosition) : void 0,
        endPosition: void 0 !== e.endPosition ? $v(e.endPosition) : void 0
    });
}
function Yv(e, t) {
    return {
        _privacyMode: t,
        relativeWorkspacePath: (0, n.cZ)(e.relativeWorkspacePath, n.po.PATH, "relative_workspace_path", t),
        fileContents: void 0 !== e.fileContents ? (0, n.cZ)(e.fileContents, n.po.CODE, "file_contents", t) : void 0,
        fileContentsLength: e.fileContentsLength,
        range: void 0 !== e.range ? Vv(e.range, t) : void 0,
        contents: (0, n.cZ)(e.contents, n.po.CODE, "contents", t),
        signatures: void 0 !== e.signatures ? Xv(e.signatures, t) : void 0,
        overrideContents: void 0 !== e.overrideContents ? (0, n.cZ)(e.overrideContents, n.po.CODE, "override_contents", t) : void 0,
        originalContents: void 0 !== e.originalContents ? (0, n.cZ)(e.originalContents, n.po.CODE, "original_contents", t) : void 0,
        detailedLines: e.detailedLines.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    text: (0, n.cZ)(e.text, n.po.CODE, "text", t),
                    lineNumber: e.lineNumber,
                    isSignature: e.isSignature
                };
            })(e, t)),
        fileGitContext: void 0 !== e.fileGitContext ? t_(e.fileGitContext, t) : void 0
    };
}
function Zv(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Uv.CodeBlock({
        relativeWorkspacePath: e.relativeWorkspacePath.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        fileContents: e.fileContents?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        fileContentsLength: e.fileContentsLength,
        range: void 0 !== e.range ? Kv(e.range) : void 0,
        contents: e.contents.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        signatures: void 0 !== e.signatures ? e_(e.signatures, t, r) : void 0,
        overrideContents: e.overrideContents?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        originalContents: e.originalContents?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        detailedLines: e.detailedLines.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Uv.DetailedLine({
                    text: e.text.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    lineNumber: e.lineNumber,
                    isSignature: e.isSignature
                });
            })(e, t, r)),
        fileGitContext: void 0 !== e.fileGitContext ? r_(e.fileGitContext, t, r) : void 0
    });
}
function Xv(e, t) {
    return {
        _privacyMode: t,
        ranges: e.ranges.map((e)=>Vv(e, t))
    };
}
function e_(e, t, r) {
    return new Uv.CodeBlock_Signatures({
        ranges: e.ranges.map((e)=>Kv(e))
    });
}
function t_(e, t) {
    return {
        _privacyMode: t,
        commits: e.commits.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    commit: e.commit,
                    author: e.author,
                    date: e.date,
                    message: (0, n.cZ)(e.message, n.po.CODE, "message", t)
                };
            })(e, t))
    };
}
function r_(e, t, r) {
    return new Uv.FileGit({
        commits: e.commits.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Uv.GitCommit({
                    commit: e.commit,
                    author: e.author,
                    date: e.date,
                    message: e.message.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r))
    });
}
function n_(e, t) {
    return {
        _privacyMode: t,
        codeBlock: void 0 !== e.codeBlock ? Yv(e.codeBlock, t) : void 0,
        score: e.score
    };
}
function s_(e, t, r) {
    return new Fv.PT({
        codeBlock: void 0 !== e.codeBlock ? Zv(e.codeBlock, t, r) : void 0,
        score: e.score
    });
}
function o_(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? a_(e.args, t) : void 0,
        result: void 0 !== e.result ? l_(e.result, t) : void 0
    };
}
function i_(e, t, r) {
    return new Nv.ks({
        args: void 0 !== e.args ? c_(e.args, t, r) : void 0,
        result: void 0 !== e.result ? d_(e.result, t, r) : void 0
    });
}
function a_(e, t) {
    return {
        _privacyMode: t,
        query: (0, n.cZ)(e.query, n.po.CODE, "query", t),
        targetDirectories: e.targetDirectories.map((e)=>(0, n.cZ)(e, n.po.PATH, "target_directories", t)),
        explanation: (0, n.cZ)(e.explanation, n.po.CODE, "explanation", t)
    };
}
function c_(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Nv.X_({
        query: e.query.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        targetDirectories: e.targetDirectories.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        explanation: e.explanation.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function l_(e, t) {
    return {
        _privacyMode: t,
        result: u_(e.result, t)
    };
}
function u_(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: m_(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: f_(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function d_(e, t, r) {
    return new Nv.h9({
        result: p_(e.result, t, r)
    });
}
function p_(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: h_(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: g_(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function m_(e, t) {
    return {
        _privacyMode: t,
        results: (0, n.cZ)(e.results, n.po.CODE, "results", t),
        codeResults: e.codeResults.map((e)=>n_(e, t))
    };
}
function h_(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Nv.nT({
        results: e.results.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        codeResults: e.codeResults.map((e)=>s_(e, t, r))
    });
}
function f_(e, t) {
    return {
        _privacyMode: t,
        errorMessage: (0, n.cZ)(e.errorMessage, n.po.CODE, "error_message", t)
    };
}
function g_(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Nv.Kw({
        errorMessage: e.errorMessage.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var y_ = require("./module-7972.js");
function w_(e, t) {
    return {
        _privacyMode: t,
        finalSummary: void 0 !== e.finalSummary ? (0, n.cZ)(e.finalSummary, n.po.CODE, "final_summary", t) : void 0
    };
}
function v_(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new y_.ev({
        finalSummary: e.finalSummary?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function __(e, t) {
    return {
        _privacyMode: t,
        finalSummary: (0, n.cZ)(e.finalSummary, n.po.CODE, "final_summary", t)
    };
}
function A_(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new y_.s0({
        finalSummary: e.finalSummary.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function S_(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function b_(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new y_.lX({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function E_(e, t) {
    return {
        _privacyMode: t,
        result: I_(e.result, t)
    };
}
function I_(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: __(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: S_(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function C_(e, t, r) {
    return new y_.sA({
        result: k_(e.result, t, r)
    });
}
function k_(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: A_(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: b_(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function x_(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? w_(e.args, t) : void 0,
        result: void 0 !== e.result ? E_(e.result, t) : void 0
    };
}
function T_(e, t, r) {
    return new y_.V2({
        args: void 0 !== e.args ? v_(e.args, t, r) : void 0,
        result: void 0 !== e.result ? C_(e.result, t, r) : void 0
    });
}
var R_ = require("./module-93520.js");
function B_(e, t) {
    return {
        _privacyMode: t,
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t)
    };
}
function P_(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new R_.bj({
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function J_(e, t) {
    return {
        _privacyMode: t,
        url: (0, n.cZ)(e.url, n.po.PATH, "url", t),
        alt: void 0 !== e.alt ? (0, n.cZ)(e.alt, n.po.CODE, "alt", t) : void 0
    };
}
function M_(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new R_.Z9({
        url: e.url.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        alt: e.alt?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function q_(e, t) {
    return {
        _privacyMode: t,
        message: D_(e.message, t)
    };
}
function D_(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "text":
            return {
                case: "text",
                value: B_(e.value, t)
            };
        case "attachment":
            return {
                case: "attachment",
                value: J_(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function O_(e, t, r) {
    return new R_.Xg({
        message: N_(e.message, t, r)
    });
}
function N_(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "text":
            return {
                case: "text",
                value: P_(e.value, t, r)
            };
        case "attachment":
            return {
                case: "attachment",
                value: M_(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function F_(e, t) {
    return {
        _privacyMode: t,
        timestamp: e.timestamp,
        messageId: e.messageId
    };
}
function U_(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function L_(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new R_._M({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function $_(e, t) {
    return {
        _privacyMode: t,
        result: Q_(e.result, t)
    };
}
function Q_(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: F_(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: U_(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function j_(e, t, r) {
    return new R_.HU({
        result: G_(e.result, t, r)
    });
}
function G_(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: (n = e.value, new R_.P7({
                    timestamp: n.timestamp,
                    messageId: n.messageId
                }))
            };
        case "error":
            return {
                case: "error",
                value: L_(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
    var n;
}
function H_(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? q_(e.args, t) : void 0,
        result: void 0 !== e.result ? $_(e.result, t) : void 0
    };
}
function z_(e, t, r) {
    return new R_.wl({
        args: void 0 !== e.args ? O_(e.args, t, r) : void 0,
        result: void 0 !== e.result ? j_(e.result, t, r) : void 0
    });
}
var W_ = require("./module-12522.js");
function V_(e, t) {
    return {
        _privacyMode: t,
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t)
    };
}
function K_(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new W_.qI({
        message: e.message.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Y_(e, t) {
    return {
        _privacyMode: t
    };
}
function Z_(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function X_(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new W_.zB({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function eA(e, t) {
    return {
        _privacyMode: t,
        result: tA(e.result, t)
    };
}
function tA(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Y_(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Z_(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function rA(e, t, r) {
    return new W_.Gg({
        result: nA(e.result, t, r)
    });
}
function nA(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: (e.value, new W_.__({}))
            };
        case "error":
            return {
                case: "error",
                value: X_(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function sA(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? V_(e.args, t) : void 0,
        result: void 0 !== e.result ? eA(e.result, t) : void 0
    };
}
function oA(e, t, r) {
    return new W_.fC({
        args: void 0 !== e.args ? K_(e.args, t, r) : void 0,
        result: void 0 !== e.result ? rA(e.result, t, r) : void 0
    });
}
var iA = require("./module-37735.js");
function aA(e, t) {
    return {
        _privacyMode: t,
        installCommand: (0, n.cZ)(e.installCommand, n.po.CODE, "install_command", t),
        startCommand: (0, n.cZ)(e.startCommand, n.po.CODE, "start_command", t),
        dockerfileContents: (0, n.cZ)(e.dockerfileContents, n.po.CODE, "dockerfile_contents", t)
    };
}
function cA(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new iA.BI({
        installCommand: e.installCommand.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        startCommand: e.startCommand.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        dockerfileContents: e.dockerfileContents.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function lA(e, t) {
    return {
        _privacyMode: t,
        result: uA(e.result, t)
    };
}
function uA(e, t) {
    return e && void 0 !== e.case && "success" === e.case ? {
        case: "success",
        value: mA(e.value, t)
    } : {
        case: void 0,
        value: void 0
    };
}
function dA(e, t, r) {
    return new iA.r$({
        result: pA(e.result, t, r)
    });
}
function pA(e, t, r) {
    return e && void 0 !== e.case && "success" === e.case ? {
        case: "success",
        value: hA(e.value, t, r)
    } : {
        case: void 0,
        value: void 0
    };
}
function mA(e, t) {
    return {
        _privacyMode: t
    };
}
function hA(e, t, r) {
    return new iA.JH({});
}
function fA(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? aA(e.args, t) : void 0,
        result: void 0 !== e.result ? lA(e.result, t) : void 0
    };
}
function gA(e, t, r) {
    return new iA.MU({
        args: void 0 !== e.args ? cA(e.args, t, r) : void 0,
        result: void 0 !== e.result ? dA(e.result, t, r) : void 0
    });
}
var yA = require("./module-62671.js");
function wA(e, t) {
    return {
        _privacyMode: t,
        parsingFailed: e.parsingFailed,
        executableCommands: e.executableCommands.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    name: (0, n.cZ)(e.name, n.po.CODE, "name", t),
                    args: e.args.map((e)=>(function(e, t) {
                            return {
                                _privacyMode: t,
                                type: e.type,
                                value: (0, n.cZ)(e.value, n.po.CODE, "value", t)
                            };
                        })(e, t)),
                    fullText: (0, n.cZ)(e.fullText, n.po.CODE, "full_text", t)
                };
            })(e, t)),
        hasRedirects: e.hasRedirects,
        hasCommandSubstitution: e.hasCommandSubstitution,
        allRedirectsAreDevNull: e.allRedirectsAreDevNull,
        redirects: e.redirects.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    operator: e.operator,
                    destinationFds: e.destinationFds,
                    targetNodeType: e.targetNodeType,
                    targetText: void 0 !== e.targetText ? (0, n.cZ)(e.targetText, n.po.PATH, "target_text", t) : void 0
                };
            })(e, t))
    };
}
function vA(e, t, r) {
    return new yA.HO({
        parsingFailed: e.parsingFailed,
        executableCommands: e.executableCommands.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new yA.Pv({
                    name: e.name.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    args: e.args.map((e)=>(function(e, t, r) {
                            const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                            return new yA.r6({
                                type: e.type,
                                value: e.value.unwrap(t, {
                                    redactUnallowedFieldsInsteadOfThrowing: n,
                                    enforcing: s
                                })
                            });
                        })(e, t, r)),
                    fullText: e.fullText.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r)),
        hasRedirects: e.hasRedirects,
        hasCommandSubstitution: e.hasCommandSubstitution,
        allRedirectsAreDevNull: e.allRedirectsAreDevNull,
        redirects: e.redirects.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new yA.mW({
                    operator: e.operator,
                    destinationFds: e.destinationFds,
                    targetNodeType: e.targetNodeType,
                    targetText: e.targetText?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r))
    });
}
function _A(e, t) {
    return {
        parsingFailed: !1,
        executableCommands: [],
        hasRedirects: !1,
        hasCommandSubstitution: !1,
        allRedirectsAreDevNull: void 0,
        redirects: [],
        ...t,
        _privacyMode: e
    };
}
function AA(e, t) {
    return {
        _privacyMode: t,
        commands: e.commands.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    name: (0, n.cZ)(e.name, n.po.CODE, "name", t),
                    arguments: e.arguments.map((e)=>(0, n.cZ)(e, n.po.CODE, "arguments", t)),
                    suggestedAllowlistEntry: void 0 !== e.suggestedAllowlistEntry ? (0, n.cZ)(e.suggestedAllowlistEntry, n.po.CODE, "suggested_allowlist_entry", t) : void 0,
                    subcommandTokens: e.subcommandTokens.map((e)=>(0, n.cZ)(e, n.po.CODE, "subcommand_tokens", t))
                };
            })(e, t)),
        suggestedSandboxMode: e.suggestedSandboxMode,
        classificationFailed: e.classificationFailed
    };
}
function SA(e, t, r) {
    return new yA.E4({
        commands: e.commands.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new yA.nD({
                    name: e.name.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    arguments: e.arguments.map((e)=>e.unwrap(t, {
                            redactUnallowedFieldsInsteadOfThrowing: n,
                            enforcing: s
                        })),
                    suggestedAllowlistEntry: e.suggestedAllowlistEntry?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    subcommandTokens: e.subcommandTokens.map((e)=>e.unwrap(t, {
                            redactUnallowedFieldsInsteadOfThrowing: n,
                            enforcing: s
                        }))
                });
            })(e, t, r)),
        suggestedSandboxMode: e.suggestedSandboxMode,
        classificationFailed: e.classificationFailed
    });
}
function bA(e, t) {
    return {
        _privacyMode: t,
        pattern: (0, n.cZ)(e.pattern, n.po.CODE, "pattern", t),
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t),
        debounce: e.debounce,
        notificationLimit: e.notificationLimit
    };
}
function EA(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.$F({
        pattern: e.pattern.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        debounce: e.debounce,
        notificationLimit: e.notificationLimit
    });
}
function IA(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId
    };
}
function CA(e, t, r) {
    return new yA.Hu({
        toolCallId: e.toolCallId
    });
}
function kA(e, t) {
    return {
        _privacyMode: t,
        status: e.status,
        shellResult: void 0 !== e.shellResult ? MA(e.shellResult, t) : void 0
    };
}
function xA(e, t, r) {
    return new yA.jK({
        status: e.status,
        shellResult: void 0 !== e.shellResult ? DA(e.shellResult, t, r) : void 0
    });
}
function TA(e, t) {
    return {
        _privacyMode: t,
        kind: e.kind,
        reason: void 0 !== e.reason ? (0, n.cZ)(e.reason, n.po.CODE, "reason", t) : void 0
    };
}
function RA(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.In({
        kind: e.kind,
        reason: e.reason?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function BA(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        timeout: e.timeout,
        toolCallId: e.toolCallId,
        simpleCommands: e.simpleCommands.map((e)=>(0, n.cZ)(e, n.po.CODE, "simple_commands", t)),
        hasInputRedirect: e.hasInputRedirect,
        hasOutputRedirect: e.hasOutputRedirect,
        parsingResult: void 0 !== e.parsingResult ? wA(e.parsingResult, t) : void 0,
        requestedSandboxPolicy: void 0 !== e.requestedSandboxPolicy ? tc(e.requestedSandboxPolicy, t) : void 0,
        fileOutputThresholdBytes: e.fileOutputThresholdBytes,
        isBackground: e.isBackground,
        skipApproval: e.skipApproval,
        timeoutBehavior: e.timeoutBehavior,
        hardTimeout: e.hardTimeout,
        description: e.description,
        classifierResult: void 0 !== e.classifierResult ? AA(e.classifierResult, t) : void 0,
        closeStdin: e.closeStdin,
        outputNotification: void 0 !== e.outputNotification ? bA(e.outputNotification, t) : void 0,
        smartModeApproval: void 0 !== e.smartModeApproval ? d(e.smartModeApproval, t) : void 0,
        hookApprovalRequirement: void 0 !== e.hookApprovalRequirement ? TA(e.hookApprovalRequirement, t) : void 0,
        conversationId: e.conversationId,
        adminCommandDenylist: e.adminCommandDenylist.map((e)=>(0, n.cZ)(e, n.po.CODE, "admin_command_denylist", t)),
        requestId: e.requestId,
        secretScopeId: e.secretScopeId
    };
}
function PA(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.a({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        timeout: e.timeout,
        toolCallId: e.toolCallId,
        simpleCommands: e.simpleCommands.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        hasInputRedirect: e.hasInputRedirect,
        hasOutputRedirect: e.hasOutputRedirect,
        parsingResult: void 0 !== e.parsingResult ? vA(e.parsingResult, t, r) : void 0,
        requestedSandboxPolicy: void 0 !== e.requestedSandboxPolicy ? rc(e.requestedSandboxPolicy, t, r) : void 0,
        fileOutputThresholdBytes: e.fileOutputThresholdBytes,
        isBackground: e.isBackground,
        skipApproval: e.skipApproval,
        timeoutBehavior: e.timeoutBehavior,
        hardTimeout: e.hardTimeout,
        description: e.description,
        classifierResult: void 0 !== e.classifierResult ? SA(e.classifierResult, t, r) : void 0,
        closeStdin: e.closeStdin,
        outputNotification: void 0 !== e.outputNotification ? EA(e.outputNotification, t, r) : void 0,
        smartModeApproval: void 0 !== e.smartModeApproval ? p(e.smartModeApproval, t, r) : void 0,
        hookApprovalRequirement: void 0 !== e.hookApprovalRequirement ? RA(e.hookApprovalRequirement, t, r) : void 0,
        conversationId: e.conversationId,
        adminCommandDenylist: e.adminCommandDenylist.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        requestId: e.requestId,
        secretScopeId: e.secretScopeId
    });
}
function JA(e, t) {
    return {
        command: (0, n.cZ)("", n.po.CODE, "command", e),
        workingDirectory: (0, n.cZ)("", n.po.PATH, "working_directory", e),
        timeout: 0,
        toolCallId: "",
        simpleCommands: [],
        hasInputRedirect: !1,
        hasOutputRedirect: !1,
        parsingResult: void 0,
        requestedSandboxPolicy: void 0,
        fileOutputThresholdBytes: void 0,
        isBackground: !1,
        skipApproval: !1,
        timeoutBehavior: 0,
        hardTimeout: void 0,
        description: void 0,
        classifierResult: void 0,
        closeStdin: !1,
        outputNotification: void 0,
        smartModeApproval: void 0,
        hookApprovalRequirement: void 0,
        conversationId: void 0,
        adminCommandDenylist: [],
        requestId: void 0,
        secretScopeId: void 0,
        ...t,
        _privacyMode: e
    };
}
function MA(e, t) {
    return {
        _privacyMode: t,
        sandboxPolicy: void 0 !== e.sandboxPolicy ? tc(e.sandboxPolicy, t) : void 0,
        isBackground: e.isBackground,
        terminalsFolder: void 0 !== e.terminalsFolder ? (0, n.cZ)(e.terminalsFolder, n.po.PATH, "terminals_folder", t) : void 0,
        pid: e.pid,
        result: qA(e.result, t)
    };
}
function qA(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: cS(e.value, t)
            };
        case "failure":
            return {
                case: "failure",
                value: uS(e.value, t)
            };
        case "timeout":
            return {
                case: "timeout",
                value: pS(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: hS(e.value, t)
            };
        case "spawnError":
            return {
                case: "spawnError",
                value: wS(e.value, t)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: gS(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function DA(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.W4({
        sandboxPolicy: void 0 !== e.sandboxPolicy ? rc(e.sandboxPolicy, t, r) : void 0,
        isBackground: e.isBackground,
        terminalsFolder: e.terminalsFolder?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        pid: e.pid,
        result: OA(e.result, t, r)
    });
}
function OA(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: lS(e.value, t, r)
            };
        case "failure":
            return {
                case: "failure",
                value: dS(e.value, t, r)
            };
        case "timeout":
            return {
                case: "timeout",
                value: mS(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: fS(e.value, t, r)
            };
        case "spawnError":
            return {
                case: "spawnError",
                value: vS(e.value, t, r)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: yS(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function NA(e, t) {
    return {
        _privacyMode: t,
        kind: e.kind,
        memoryLimitBytes: e.memoryLimitBytes
    };
}
function FA(e, t, r) {
    return new yA.iH({
        kind: e.kind,
        memoryLimitBytes: e.memoryLimitBytes
    });
}
function UA(e, t) {
    return {
        _privacyMode: t,
        data: (0, n.cZ)(e.data, n.po.CODE, "data", t)
    };
}
function LA(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.o0({
        data: e.data.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function $A(e, t) {
    return {
        data: (0, n.cZ)("", n.po.CODE, "data", e),
        ...t,
        _privacyMode: e
    };
}
function QA(e, t) {
    return {
        _privacyMode: t,
        data: (0, n.cZ)(e.data, n.po.CODE, "data", t)
    };
}
function jA(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.Db({
        data: e.data.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function GA(e, t) {
    return {
        data: (0, n.cZ)("", n.po.CODE, "data", e),
        ...t,
        _privacyMode: e
    };
}
function HA(e, t) {
    return {
        _privacyMode: t,
        code: e.code,
        cwd: (0, n.cZ)(e.cwd, n.po.PATH, "cwd", t),
        outputLocation: void 0 !== e.outputLocation ? l(e.outputLocation, t) : void 0,
        aborted: e.aborted,
        abortReason: e.abortReason,
        localExecutionTimeMs: e.localExecutionTimeMs,
        oomKill: void 0 !== e.oomKill ? NA(e.oomKill, t) : void 0
    };
}
function zA(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.vb({
        code: e.code,
        cwd: e.cwd.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputLocation: void 0 !== e.outputLocation ? u(e.outputLocation, t, r) : void 0,
        aborted: e.aborted,
        abortReason: e.abortReason,
        localExecutionTimeMs: e.localExecutionTimeMs,
        oomKill: void 0 !== e.oomKill ? FA(e.oomKill) : void 0
    });
}
function WA(e, t) {
    return {
        code: 0,
        cwd: (0, n.cZ)("", n.po.PATH, "cwd", e),
        outputLocation: void 0,
        aborted: !1,
        abortReason: void 0,
        localExecutionTimeMs: void 0,
        oomKill: void 0,
        ...t,
        _privacyMode: e
    };
}
function VA(e, t) {
    return {
        _privacyMode: t,
        sandboxPolicy: void 0 !== e.sandboxPolicy ? tc(e.sandboxPolicy, t) : void 0
    };
}
function KA(e, t, r) {
    return new yA.tD({
        sandboxPolicy: void 0 !== e.sandboxPolicy ? rc(e.sandboxPolicy, t, r) : void 0
    });
}
function YA(e, t) {
    return {
        sandboxPolicy: void 0,
        ...t,
        _privacyMode: e
    };
}
function ZA(e, t) {
    return {
        _privacyMode: t,
        shellId: e.shellId,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        pid: e.pid,
        msToWait: e.msToWait,
        reason: e.reason
    };
}
function XA(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.Y9({
        shellId: e.shellId,
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        pid: e.pid,
        msToWait: e.msToWait,
        reason: e.reason
    });
}
function eS(e, t) {
    return {
        _privacyMode: t,
        hookAdditionalContexts: e.hookAdditionalContexts.map((e)=>xc(e, t))
    };
}
function tS(e, t, r) {
    return new yA.Ng({
        hookAdditionalContexts: e.hookAdditionalContexts.map((e)=>Tc(e, t, r))
    });
}
function rS(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        sandboxPolicyType: e.sandboxPolicyType,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t),
        isReadonly: e.isReadonly
    };
}
function nS(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.rI({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        sandboxPolicyType: e.sandboxPolicyType,
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        isReadonly: e.isReadonly
    });
}
function sS(e, t) {
    return {
        _privacyMode: t,
        event: oS(e.event, t)
    };
}
function oS(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "stdout":
            return {
                case: "stdout",
                value: UA(e.value, t)
            };
        case "stderr":
            return {
                case: "stderr",
                value: QA(e.value, t)
            };
        case "exit":
            return {
                case: "exit",
                value: HA(e.value, t)
            };
        case "start":
            return {
                case: "start",
                value: VA(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: hS(e.value, t)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: gS(e.value, t)
            };
        case "backgrounded":
            return {
                case: "backgrounded",
                value: ZA(e.value, t)
            };
        case "hookContext":
            return {
                case: "hookContext",
                value: eS(e.value, t)
            };
        case "sandboxUnsupported":
            return {
                case: "sandboxUnsupported",
                value: rS(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function iS(e, t, r) {
    return new yA.FI({
        event: aS(e.event, t, r)
    });
}
function aS(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "stdout":
            return {
                case: "stdout",
                value: LA(e.value, t, r)
            };
        case "stderr":
            return {
                case: "stderr",
                value: jA(e.value, t, r)
            };
        case "exit":
            return {
                case: "exit",
                value: zA(e.value, t, r)
            };
        case "start":
            return {
                case: "start",
                value: KA(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: fS(e.value, t, r)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: yS(e.value, t, r)
            };
        case "backgrounded":
            return {
                case: "backgrounded",
                value: XA(e.value, t, r)
            };
        case "hookContext":
            return {
                case: "hookContext",
                value: tS(e.value, t, r)
            };
        case "sandboxUnsupported":
            return {
                case: "sandboxUnsupported",
                value: nS(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function cS(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        exitCode: e.exitCode,
        signal: e.signal,
        stdout: (0, n.cZ)(e.stdout, n.po.CODE, "stdout", t),
        stderr: (0, n.cZ)(e.stderr, n.po.CODE, "stderr", t),
        executionTime: e.executionTime,
        outputLocation: void 0 !== e.outputLocation ? l(e.outputLocation, t) : void 0,
        shellId: e.shellId,
        interleavedOutput: void 0 !== e.interleavedOutput ? (0, n.cZ)(e.interleavedOutput, n.po.CODE, "interleaved_output", t) : void 0,
        pid: e.pid,
        msToWait: e.msToWait,
        localExecutionTimeMs: e.localExecutionTimeMs,
        backgroundReason: e.backgroundReason,
        outputHead: void 0 !== e.outputHead ? (0, n.cZ)(e.outputHead, n.po.CODE, "output_head", t) : void 0,
        outputTail: void 0 !== e.outputTail ? (0, n.cZ)(e.outputTail, n.po.CODE, "output_tail", t) : void 0,
        elidedChars: e.elidedChars
    };
}
function lS(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.QR({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        exitCode: e.exitCode,
        signal: e.signal,
        stdout: e.stdout.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        stderr: e.stderr.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        executionTime: e.executionTime,
        outputLocation: void 0 !== e.outputLocation ? u(e.outputLocation, t, r) : void 0,
        shellId: e.shellId,
        interleavedOutput: e.interleavedOutput?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        pid: e.pid,
        msToWait: e.msToWait,
        localExecutionTimeMs: e.localExecutionTimeMs,
        backgroundReason: e.backgroundReason,
        outputHead: e.outputHead?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputTail: e.outputTail?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        elidedChars: e.elidedChars
    });
}
function uS(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        exitCode: e.exitCode,
        signal: e.signal,
        stdout: (0, n.cZ)(e.stdout, n.po.CODE, "stdout", t),
        stderr: (0, n.cZ)(e.stderr, n.po.CODE, "stderr", t),
        executionTime: e.executionTime,
        outputLocation: void 0 !== e.outputLocation ? l(e.outputLocation, t) : void 0,
        interleavedOutput: void 0 !== e.interleavedOutput ? (0, n.cZ)(e.interleavedOutput, n.po.CODE, "interleaved_output", t) : void 0,
        abortReason: e.abortReason,
        aborted: e.aborted,
        localExecutionTimeMs: e.localExecutionTimeMs,
        outputHead: void 0 !== e.outputHead ? (0, n.cZ)(e.outputHead, n.po.CODE, "output_head", t) : void 0,
        outputTail: void 0 !== e.outputTail ? (0, n.cZ)(e.outputTail, n.po.CODE, "output_tail", t) : void 0,
        elidedChars: e.elidedChars,
        oomKill: void 0 !== e.oomKill ? NA(e.oomKill, t) : void 0
    };
}
function dS(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.xC({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        exitCode: e.exitCode,
        signal: e.signal,
        stdout: e.stdout.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        stderr: e.stderr.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        executionTime: e.executionTime,
        outputLocation: void 0 !== e.outputLocation ? u(e.outputLocation, t, r) : void 0,
        interleavedOutput: e.interleavedOutput?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        abortReason: e.abortReason,
        aborted: e.aborted,
        localExecutionTimeMs: e.localExecutionTimeMs,
        outputHead: e.outputHead?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputTail: e.outputTail?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        elidedChars: e.elidedChars,
        oomKill: void 0 !== e.oomKill ? FA(e.oomKill) : void 0
    });
}
function pS(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        timeoutMs: e.timeoutMs
    };
}
function mS(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.eG({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        timeoutMs: e.timeoutMs
    });
}
function hS(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t),
        isReadonly: e.isReadonly
    };
}
function fS(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.pZ({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        isReadonly: e.isReadonly
    });
}
function gS(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        isReadonly: e.isReadonly
    };
}
function yS(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.jn({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        isReadonly: e.isReadonly
    });
}
function wS(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function vS(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new yA.mJ({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var _S = require("./module-202.js");
function AS(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? BA(e.args, t) : void 0,
        result: void 0 !== e.result ? MA(e.result, t) : void 0,
        description: e.description
    };
}
function SS(e, t, r) {
    return new _S.$M({
        args: void 0 !== e.args ? PA(e.args, t, r) : void 0,
        result: void 0 !== e.result ? DA(e.result, t, r) : void 0,
        description: e.description
    });
}
function bS(e, t) {
    return {
        _privacyMode: t,
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t)
    };
}
function ES(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new _S.Ag({
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function IS(e, t) {
    return {
        _privacyMode: t,
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t)
    };
}
function CS(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new _S.zw({
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function kS(e, t) {
    return {
        _privacyMode: t,
        delta: xS(e.delta, t)
    };
}
function xS(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "stdout":
            return {
                case: "stdout",
                value: bS(e.value, t)
            };
        case "stderr":
            return {
                case: "stderr",
                value: IS(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function TS(e, t, r) {
    return new _S.Nl({
        delta: RS(e.delta, t, r)
    });
}
function RS(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "stdout":
            return {
                case: "stdout",
                value: ES(e.value, t, r)
            };
        case "stderr":
            return {
                case: "stderr",
                value: CS(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
var BS = require("./module-86592.js");
function PS(e, t) {
    return {
        _privacyMode: t,
        explanation: void 0 !== e.explanation ? (0, n.cZ)(e.explanation, n.po.CODE, "explanation", t) : void 0,
        toolCallId: e.toolCallId
    };
}
function JS(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new BS.uJ({
        explanation: e.explanation?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId
    });
}
function MS(e, t) {
    return {
        _privacyMode: t,
        result: qS(e.result, t)
    };
}
function qS(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: NS(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: US(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function DS(e, t, r) {
    return new BS._r({
        result: OS(e.result, t, r)
    });
}
function OS(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: FS(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: LS(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function NS(e, t) {
    return {
        _privacyMode: t
    };
}
function FS(e, t, r) {
    return new BS.Ag({});
}
function US(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function LS(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new BS.Fz({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function $S(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? PS(e.args, t) : void 0,
        result: void 0 !== e.result ? MS(e.result, t) : void 0
    };
}
function QS(e, t, r) {
    return new BS.Jk({
        args: void 0 !== e.args ? JS(e.args, t, r) : void 0,
        result: void 0 !== e.result ? DS(e.result, t, r) : void 0
    });
}
var jS = require("./module-7577.js");
function GS(e, t) {
    return {
        _privacyMode: t,
        explanation: void 0 !== e.explanation ? (0, n.cZ)(e.explanation, n.po.CODE, "explanation", t) : void 0,
        toolCallId: e.toolCallId
    };
}
function HS(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new jS.Du({
        explanation: e.explanation?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId
    });
}
function zS(e, t) {
    return {
        _privacyMode: t,
        result: WS(e.result, t)
    };
}
function WS(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: YS(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: XS(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function VS(e, t, r) {
    return new jS.RF({
        result: KS(e.result, t, r)
    });
}
function KS(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: ZS(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: eb(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function YS(e, t) {
    return {
        _privacyMode: t
    };
}
function ZS(e, t, r) {
    return new jS.d0({});
}
function XS(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function eb(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new jS.CA({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function tb(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? GS(e.args, t) : void 0,
        result: void 0 !== e.result ? zS(e.result, t) : void 0
    };
}
function rb(e, t, r) {
    return new jS.uo({
        args: void 0 !== e.args ? HS(e.args, t, r) : void 0,
        result: void 0 !== e.result ? VS(e.result, t, r) : void 0
    });
}
var nb = require("./module-70682.js");
function sb(e, t) {
    return {
        _privacyMode: t,
        targetModeId: e.targetModeId,
        explanation: void 0 !== e.explanation ? (0, n.cZ)(e.explanation, n.po.CODE, "explanation", t) : void 0,
        toolCallId: e.toolCallId
    };
}
function ob(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new nb.Bx({
        targetModeId: e.targetModeId,
        explanation: e.explanation?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId
    });
}
function ib(e, t) {
    return {
        _privacyMode: t,
        result: ab(e.result, t)
    };
}
function ab(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: ub(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: pb(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: hb(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function cb(e, t, r) {
    return new nb.l$({
        result: lb(e.result, t, r)
    });
}
function lb(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: db(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: mb(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: fb(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ub(e, t) {
    return {
        _privacyMode: t,
        fromModeId: e.fromModeId,
        toModeId: e.toModeId
    };
}
function db(e, t, r) {
    return new nb.RO({
        fromModeId: e.fromModeId,
        toModeId: e.toModeId
    });
}
function pb(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function mb(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new nb.eU({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function hb(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function fb(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new nb.Ci({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function gb(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? sb(e.args, t) : void 0,
        result: void 0 !== e.result ? ib(e.result, t) : void 0
    };
}
function yb(e, t, r) {
    return new nb.Cs({
        args: void 0 !== e.args ? ob(e.args, t, r) : void 0,
        result: void 0 !== e.result ? cb(e.result, t, r) : void 0
    });
}
function wb(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? sb(e.args, t) : void 0
    };
}
function vb(e, t, r) {
    return new nb.Nc({
        args: void 0 !== e.args ? ob(e.args, t, r) : void 0
    });
}
function _b(e, t) {
    return {
        _privacyMode: t,
        result: Ab(e.result, t)
    };
}
function Ab(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "approved":
            return {
                case: "approved",
                value: Eb(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Cb(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Sb(e, t, r) {
    return new nb.w$({
        result: bb(e.result, t, r)
    });
}
function bb(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "approved":
            return {
                case: "approved",
                value: Ib(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: kb(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Eb(e, t) {
    return {
        _privacyMode: t
    };
}
function Ib(e, t, r) {
    return new nb.q5({});
}
function Cb(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function kb(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new nb.rA({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var xb = require("./module-337.js");
function Tb(e, t) {
    return {
        _privacyMode: t,
        url: e.url,
        toolCallId: e.toolCallId
    };
}
function Rb(e, t, r) {
    return new xb.sA({
        url: e.url,
        toolCallId: e.toolCallId
    });
}
function Bb(e, t) {
    return {
        _privacyMode: t,
        result: Pb(e.result, t)
    };
}
function Pb(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: qb(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: Ob(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Fb(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Jb(e, t, r) {
    return new xb.wA({
        result: Mb(e.result, t, r)
    });
}
function Mb(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: Db(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: Nb(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Ub(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function qb(e, t) {
    return {
        _privacyMode: t,
        url: e.url,
        markdown: (0, n.cZ)(e.markdown, n.po.CODE, "markdown", t),
        outputLocation: void 0 !== e.outputLocation ? l(e.outputLocation, t) : void 0
    };
}
function Db(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new xb.Cp({
        url: e.url,
        markdown: e.markdown.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputLocation: void 0 !== e.outputLocation ? u(e.outputLocation, t, r) : void 0
    });
}
function Ob(e, t) {
    return {
        _privacyMode: t,
        url: e.url,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function Nb(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new xb.vS({
        url: e.url,
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Fb(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function Ub(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new xb.hO({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Lb(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Tb(e.args, t) : void 0,
        result: void 0 !== e.result ? Bb(e.result, t) : void 0
    };
}
function $b(e, t, r) {
    return new xb.fd({
        args: void 0 !== e.args ? Rb(e.args) : void 0,
        result: void 0 !== e.result ? Jb(e.result, t, r) : void 0
    });
}
function Qb(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? Tb(e.args, t) : void 0,
        skipApproval: e.skipApproval,
        smartModeApproval: void 0 !== e.smartModeApproval ? d(e.smartModeApproval, t) : void 0
    };
}
function jb(e, t, r) {
    return new xb.Un({
        args: void 0 !== e.args ? Rb(e.args) : void 0,
        skipApproval: e.skipApproval,
        smartModeApproval: void 0 !== e.smartModeApproval ? p(e.smartModeApproval, t, r) : void 0
    });
}
function Gb(e, t) {
    return {
        _privacyMode: t,
        result: Hb(e.result, t)
    };
}
function Hb(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "approved":
            return {
                case: "approved",
                value: Vb(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Yb(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function zb(e, t, r) {
    return new xb.fS({
        result: Wb(e.result, t, r)
    });
}
function Wb(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "approved":
            return {
                case: "approved",
                value: Kb(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Zb(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Vb(e, t) {
    return {
        _privacyMode: t
    };
}
function Kb(e, t, r) {
    return new xb.Hs({});
}
function Yb(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function Zb(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new xb.m$({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var Xb = require("./module-32325.js");
function eE(e, t) {
    return {
        _privacyMode: t,
        searchTerm: (0, n.cZ)(e.searchTerm, n.po.CODE, "search_term", t),
        toolCallId: e.toolCallId
    };
}
function tE(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Xb.G6({
        searchTerm: e.searchTerm.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId
    });
}
function rE(e, t) {
    return {
        _privacyMode: t,
        result: nE(e.result, t)
    };
}
function nE(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: iE(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: cE(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: uE(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function sE(e, t, r) {
    return new Xb.gT({
        result: oE(e.result, t, r)
    });
}
function oE(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: aE(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: lE(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: dE(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function iE(e, t) {
    return {
        _privacyMode: t,
        references: e.references.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    title: (0, n.cZ)(e.title, n.po.CODE, "title", t),
                    url: e.url,
                    chunk: (0, n.cZ)(e.chunk, n.po.CODE, "chunk", t)
                };
            })(e, t))
    };
}
function aE(e, t, r) {
    return new Xb.Yb({
        references: e.references.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new Xb.U8({
                    title: e.title.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    url: e.url,
                    chunk: e.chunk.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r))
    });
}
function cE(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function lE(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Xb.xE({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function uE(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function dE(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Xb.P_({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function pE(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? eE(e.args, t) : void 0,
        result: void 0 !== e.result ? rE(e.result, t) : void 0
    };
}
function mE(e, t, r) {
    return new Xb.pn({
        args: void 0 !== e.args ? tE(e.args, t, r) : void 0,
        result: void 0 !== e.result ? sE(e.result, t, r) : void 0
    });
}
function hE(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? eE(e.args, t) : void 0
    };
}
function fE(e, t, r) {
    return new Xb.KL({
        args: void 0 !== e.args ? tE(e.args, t, r) : void 0
    });
}
function gE(e, t) {
    return {
        _privacyMode: t,
        result: yE(e.result, t)
    };
}
function yE(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "approved":
            return {
                case: "approved",
                value: _E(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: SE(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function wE(e, t, r) {
    return new Xb.lI({
        result: vE(e.result, t, r)
    });
}
function vE(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "approved":
            return {
                case: "approved",
                value: AE(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: bE(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function _E(e, t) {
    return {
        _privacyMode: t
    };
}
function AE(e, t, r) {
    return new Xb.XJ({});
}
function SE(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function bE(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Xb.yc({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var EE = require("./module-44498.js");
function IE(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        toolCallId: e.toolCallId,
        parsingResult: void 0 !== e.parsingResult ? wA(e.parsingResult, t) : void 0,
        sandboxPolicy: void 0 !== e.sandboxPolicy ? tc(e.sandboxPolicy, t) : void 0,
        enableWriteShellStdinTool: e.enableWriteShellStdinTool,
        description: void 0 !== e.description ? (0, n.cZ)(e.description, n.po.CODE, "description", t) : void 0,
        classifierResult: void 0 !== e.classifierResult ? AA(e.classifierResult, t) : void 0,
        outputNotification: void 0 !== e.outputNotification ? bA(e.outputNotification, t) : void 0,
        smartModeApproval: void 0 !== e.smartModeApproval ? d(e.smartModeApproval, t) : void 0,
        hookApprovalRequirement: void 0 !== e.hookApprovalRequirement ? TA(e.hookApprovalRequirement, t) : void 0,
        skipApproval: e.skipApproval,
        conversationId: e.conversationId,
        adminCommandDenylist: e.adminCommandDenylist.map((e)=>(0, n.cZ)(e, n.po.CODE, "admin_command_denylist", t)),
        requestId: e.requestId,
        suppressStdinLogging: e.suppressStdinLogging,
        secretScopeId: e.secretScopeId
    };
}
function CE(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new EE.$P({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId,
        parsingResult: void 0 !== e.parsingResult ? vA(e.parsingResult, t, r) : void 0,
        sandboxPolicy: void 0 !== e.sandboxPolicy ? rc(e.sandboxPolicy, t, r) : void 0,
        enableWriteShellStdinTool: e.enableWriteShellStdinTool,
        description: e.description?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        classifierResult: void 0 !== e.classifierResult ? SA(e.classifierResult, t, r) : void 0,
        outputNotification: void 0 !== e.outputNotification ? EA(e.outputNotification, t, r) : void 0,
        smartModeApproval: void 0 !== e.smartModeApproval ? p(e.smartModeApproval, t, r) : void 0,
        hookApprovalRequirement: void 0 !== e.hookApprovalRequirement ? RA(e.hookApprovalRequirement, t, r) : void 0,
        skipApproval: e.skipApproval,
        conversationId: e.conversationId,
        adminCommandDenylist: e.adminCommandDenylist.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        requestId: e.requestId,
        suppressStdinLogging: e.suppressStdinLogging,
        secretScopeId: e.secretScopeId
    });
}
function kE(e, t) {
    return {
        _privacyMode: t,
        result: xE(e.result, t)
    };
}
function xE(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: BE(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: JE(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: hS(e.value, t)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: gS(e.value, t)
            };
        case "sandboxUnsupported":
            return {
                case: "sandboxUnsupported",
                value: rS(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function TE(e, t, r) {
    return new EE.Lt({
        result: RE(e.result, t, r)
    });
}
function RE(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: PE(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: ME(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: fS(e.value, t, r)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: yS(e.value, t, r)
            };
        case "sandboxUnsupported":
            return {
                case: "sandboxUnsupported",
                value: nS(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function BE(e, t) {
    return {
        _privacyMode: t,
        shellId: e.shellId,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        pid: e.pid
    };
}
function PE(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new EE.Po({
        shellId: e.shellId,
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        pid: e.pid
    });
}
function JE(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function ME(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new EE.Of({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function qE(e, t) {
    return {
        _privacyMode: t,
        shellId: e.shellId,
        chars: (0, n.cZ)(e.chars, n.po.CODE, "chars", t)
    };
}
function DE(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new EE.LL({
        shellId: e.shellId,
        chars: e.chars.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function OE(e, t) {
    return {
        _privacyMode: t,
        result: NE(e.result, t)
    };
}
function NE(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: LE(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: QE(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function FE(e, t, r) {
    return new EE.nt({
        result: UE(e.result, t, r)
    });
}
function UE(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: $E(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: jE(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function LE(e, t) {
    return {
        _privacyMode: t,
        shellId: e.shellId,
        terminalFileLengthBeforeInputWritten: e.terminalFileLengthBeforeInputWritten
    };
}
function $E(e, t, r) {
    return new EE.tR({
        shellId: e.shellId,
        terminalFileLengthBeforeInputWritten: e.terminalFileLengthBeforeInputWritten
    });
}
function QE(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function jE(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new EE.Gv({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var GE = require("./module-69495.js");
function HE(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? qE(e.args, t) : void 0,
        result: void 0 !== e.result ? OE(e.result, t) : void 0
    };
}
function zE(e, t, r) {
    return new GE.k({
        args: void 0 !== e.args ? DE(e.args, t, r) : void 0,
        result: void 0 !== e.result ? FE(e.result, t, r) : void 0
    });
}
var WE = require("./module-63583.js");
function VE(e, t) {
    return {
        _privacyMode: t,
        query: (0, n.cZ)(e.query, n.po.CODE, "query", t),
        fromDate: e.fromDate,
        toDate: e.toDate,
        allowedXHandles: e.allowedXHandles.map((e)=>(0, n.cZ)(e, n.po.CODE, "allowed_x_handles", t)),
        excludedXHandles: e.excludedXHandles.map((e)=>(0, n.cZ)(e, n.po.CODE, "excluded_x_handles", t))
    };
}
function KE(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new WE._d({
        query: e.query.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        fromDate: e.fromDate,
        toDate: e.toDate,
        allowedXHandles: e.allowedXHandles.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        excludedXHandles: e.excludedXHandles.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            }))
    });
}
function YE(e, t) {
    return {
        _privacyMode: t,
        result: ZE(e.result, t)
    };
}
function ZE(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: tI(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: nI(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: oI(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function XE(e, t, r) {
    return new WE.q3({
        result: eI(e.result, t, r)
    });
}
function eI(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: rI(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: sI(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: iI(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function tI(e, t) {
    return {
        _privacyMode: t,
        answer: (0, n.cZ)(e.answer, n.po.CODE, "answer", t),
        citations: e.citations.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    url: e.url,
                    title: (0, n.cZ)(e.title, n.po.CODE, "title", t)
                };
            })(e, t))
    };
}
function rI(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new WE.gu({
        answer: e.answer.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        citations: e.citations.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new WE.W1({
                    url: e.url,
                    title: e.title.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r))
    });
}
function nI(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function sI(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new WE.zI({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function oI(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function iI(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new WE.JI({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function aI(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? VE(e.args, t) : void 0,
        result: void 0 !== e.result ? YE(e.result, t) : void 0
    };
}
function cI(e, t, r) {
    return new WE.Vi({
        args: void 0 !== e.args ? KE(e.args, t, r) : void 0,
        result: void 0 !== e.result ? XE(e.result, t, r) : void 0
    });
}
var lI = require("./module-69584.js");
function uI(e, t) {
    return {
        _privacyMode: t,
        description: (0, n.cZ)(e.description, n.po.CODE, "description", t),
        prompt: (0, n.cZ)(e.prompt, n.po.CODE, "prompt", t),
        subagentType: void 0 !== e.subagentType ? Fg(e.subagentType, t) : void 0,
        model: e.model,
        resume: e.resume,
        agentId: e.agentId,
        attachments: e.attachments.map((e)=>(0, n.cZ)(e, n.po.PATH, "attachments", t)),
        mode: e.mode,
        respondingToMessageIds: e.respondingToMessageIds,
        environment: e.environment,
        machine: void 0 !== e.machine ? pI(e.machine, t) : void 0
    };
}
function dI(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.dWK({
        description: e.description.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        prompt: e.prompt.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        subagentType: void 0 !== e.subagentType ? Lg(e.subagentType, t, r) : void 0,
        model: e.model,
        resume: e.resume,
        agentId: e.agentId,
        attachments: e.attachments.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        mode: e.mode,
        respondingToMessageIds: e.respondingToMessageIds,
        environment: e.environment,
        machine: void 0 !== e.machine ? hI(e.machine, t, r) : void 0
    });
}
function pI(e, t) {
    return {
        _privacyMode: t,
        machine: mI(e.machine, t)
    };
}
function mI(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "sameMachine":
            return {
                case: "sameMachine",
                value: gI(e.value, t)
            };
        case "newCloudVm":
            return {
                case: "newCloudVm",
                value: wI(e.value, t)
            };
        case "selfHostedWorker":
            return {
                case: "selfHostedWorker",
                value: _I(e.value, t)
            };
        case "selfHostedPool":
            return {
                case: "selfHostedPool",
                value: SI(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function hI(e, t, r) {
    return new lI.$Zl({
        machine: fI(e.machine, t, r)
    });
}
function fI(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "sameMachine":
            return {
                case: "sameMachine",
                value: yI(e.value, t, r)
            };
        case "newCloudVm":
            return {
                case: "newCloudVm",
                value: vI(e.value, t, r)
            };
        case "selfHostedWorker":
            return {
                case: "selfHostedWorker",
                value: AI(e.value, t, r)
            };
        case "selfHostedPool":
            return {
                case: "selfHostedPool",
                value: bI(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function gI(e, t) {
    return {
        _privacyMode: t
    };
}
function yI(e, t, r) {
    return new lI.xQ8({});
}
function wI(e, t) {
    return {
        _privacyMode: t,
        environmentBuildId: e.environmentBuildId,
        baseBranch: e.baseBranch
    };
}
function vI(e, t, r) {
    return new lI.UU9({
        environmentBuildId: e.environmentBuildId,
        baseBranch: e.baseBranch
    });
}
function _I(e, t) {
    return {
        _privacyMode: t,
        workerId: e.workerId
    };
}
function AI(e, t, r) {
    return new lI.dl_({
        workerId: e.workerId
    });
}
function SI(e, t) {
    return {
        _privacyMode: t,
        pool: e.pool,
        labels: e.labels.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    key: e.key,
                    value: e.value
                };
            })(e, t))
    };
}
function bI(e, t, r) {
    return new lI.DC({
        pool: e.pool,
        labels: e.labels.map((e)=>(function(e) {
                return new lI.IZk({
                    key: e.key,
                    value: e.value
                });
            })(e))
    });
}
function EI(e, t) {
    return {
        _privacyMode: t,
        conversationSteps: e.conversationSteps.map((e)=>pC(e, t)),
        agentId: e.agentId,
        isBackground: e.isBackground,
        durationMs: e.durationMs,
        resultSuffix: void 0 !== e.resultSuffix ? (0, n.cZ)(e.resultSuffix, n.po.CODE, "result_suffix", t) : void 0,
        backgroundReason: e.backgroundReason,
        transcriptPath: void 0 !== e.transcriptPath ? (0, n.cZ)(e.transcriptPath, n.po.PATH, "transcript_path", t) : void 0
    };
}
function II(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.Xg3({
        conversationSteps: e.conversationSteps.map((e)=>hC(e, t, r)),
        agentId: e.agentId,
        isBackground: e.isBackground,
        durationMs: e.durationMs,
        resultSuffix: e.resultSuffix?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        backgroundReason: e.backgroundReason,
        transcriptPath: e.transcriptPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function CI(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function kI(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.IkE({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function xI(e, t) {
    return {
        _privacyMode: t,
        result: TI(e.result, t)
    };
}
function TI(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: EI(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: CI(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function RI(e, t, r) {
    return new lI.$$B({
        result: BI(e.result, t, r)
    });
}
function BI(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: II(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: kI(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function PI(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? uI(e.args, t) : void 0,
        result: void 0 !== e.result ? xI(e.result, t) : void 0,
        cloudAgentBcId: e.cloudAgentBcId
    };
}
function JI(e, t, r) {
    return new lI.U4S({
        args: void 0 !== e.args ? dI(e.args, t, r) : void 0,
        result: void 0 !== e.result ? RI(e.result, t, r) : void 0,
        cloudAgentBcId: e.cloudAgentBcId
    });
}
function MI(e, t) {
    return {
        _privacyMode: t,
        interactionUpdate: void 0 !== e.interactionUpdate ? YT(e.interactionUpdate, t) : void 0
    };
}
function qI(e, t, r) {
    return new lI.aon({
        interactionUpdate: void 0 !== e.interactionUpdate ? XT(e.interactionUpdate, t, r) : void 0
    });
}
function DI(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        branchName: e.branchName
    };
}
function OI(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.eus({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        branchName: e.branchName
    });
}
function NI(e, t) {
    return {
        _privacyMode: t
    };
}
function FI(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function UI(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.ZKF({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function LI(e, t) {
    return {
        _privacyMode: t,
        result: $I(e.result, t)
    };
}
function $I(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: NI(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: FI(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function QI(e, t, r) {
    return new lI.kxJ({
        result: jI(e.result, t, r)
    });
}
function jI(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: (e.value, new lI.wBg({}))
            };
        case "error":
            return {
                case: "error",
                value: UI(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function GI(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? DI(e.args, t) : void 0,
        result: void 0 !== e.result ? LI(e.result, t) : void 0
    };
}
function HI(e, t, r) {
    return new lI.bct({
        args: void 0 !== e.args ? OI(e.args, t, r) : void 0,
        result: void 0 !== e.result ? QI(e.result, t, r) : void 0
    });
}
function zI(e, t) {
    return {
        _privacyMode: t,
        hookAdditionalContexts: e.hookAdditionalContexts.map((e)=>xc(e, t)),
        toolCallId: e.toolCallId,
        startedAtMs: e.startedAtMs,
        completedAtMs: e.completedAtMs,
        tool: WI(e.tool, t)
    };
}
function WI(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "shellToolCall":
            return {
                case: "shellToolCall",
                value: AS(e.value, t)
            };
        case "deleteToolCall":
            return {
                case: "deleteToolCall",
                value: lo(e.value, t)
            };
        case "globToolCall":
            return {
                case: "globToolCall",
                value: ka(e.value, t)
            };
        case "grepToolCall":
            return {
                case: "grepToolCall",
                value: Ic(e.value, t)
            };
        case "readToolCall":
            return {
                case: "readToolCall",
                value: qh(e.value, t)
            };
        case "updateTodosToolCall":
            return {
                case: "updateTodosToolCall",
                value: es(e.value, t)
            };
        case "readTodosToolCall":
            return {
                case: "readTodosToolCall",
                value: ps(e.value, t)
            };
        case "editToolCall":
            return {
                case: "editToolCall",
                value: jo(e.value, t)
            };
        case "lsToolCall":
            return {
                case: "lsToolCall",
                value: Zc(e.value, t)
            };
        case "readLintsToolCall":
            return {
                case: "readLintsToolCall",
                value: ah(e.value, t)
            };
        case "mcpToolCall":
            return {
                case: "mcpToolCall",
                value: ud(e.value, t)
            };
        case "semSearchToolCall":
            return {
                case: "semSearchToolCall",
                value: o_(e.value, t)
            };
        case "createPlanToolCall":
            return {
                case: "createPlanToolCall",
                value: Is(e.value, t)
            };
        case "webSearchToolCall":
            return {
                case: "webSearchToolCall",
                value: pE(e.value, t)
            };
        case "taskToolCall":
            return {
                case: "taskToolCall",
                value: PI(e.value, t)
            };
        case "listMcpResourcesToolCall":
            return {
                case: "listMcpResourcesToolCall",
                value: Xu(e.value, t)
            };
        case "readMcpResourceToolCall":
            return {
                case: "readMcpResourceToolCall",
                value: td(e.value, t)
            };
        case "applyAgentDiffToolCall":
            return {
                case: "applyAgentDiffToolCall",
                value: k(e.value, t)
            };
        case "askQuestionToolCall":
            return {
                case: "askQuestionToolCall",
                value: $(e.value, t)
            };
        case "fetchToolCall":
            return {
                case: "fetchToolCall",
                value: vi(e.value, t)
            };
        case "switchModeToolCall":
            return {
                case: "switchModeToolCall",
                value: gb(e.value, t)
            };
        case "generateImageToolCall":
            return {
                case: "generateImageToolCall",
                value: Pi(e.value, t)
            };
        case "recordScreenToolCall":
            return {
                case: "recordScreenToolCall",
                value: Tf(e.value, t)
            };
        case "computerUseToolCall":
            return {
                case: "computerUseToolCall",
                value: cr(e.value, t)
            };
        case "writeShellStdinToolCall":
            return {
                case: "writeShellStdinToolCall",
                value: HE(e.value, t)
            };
        case "reflectToolCall":
            return {
                case: "reflectToolCall",
                value: $f(e.value, t)
            };
        case "setupVmEnvironmentToolCall":
            return {
                case: "setupVmEnvironmentToolCall",
                value: fA(e.value, t)
            };
        case "truncatedToolCall":
            return {
                case: "truncatedToolCall",
                value: iC(e.value, t)
            };
        case "startGrindExecutionToolCall":
            return {
                case: "startGrindExecutionToolCall",
                value: $S(e.value, t)
            };
        case "startGrindPlanningToolCall":
            return {
                case: "startGrindPlanningToolCall",
                value: tb(e.value, t)
            };
        case "webFetchToolCall":
            return {
                case: "webFetchToolCall",
                value: Lb(e.value, t)
            };
        case "reportBugfixResultsToolCall":
            return {
                case: "reportBugfixResultsToolCall",
                value: Pg(e.value, t)
            };
        case "aiAttributionToolCall":
            return {
                case: "aiAttributionToolCall",
                value: E(e.value, t)
            };
        case "prManagementToolCall":
            return {
                case: "prManagementToolCall",
                value: Om(e.value, t)
            };
        case "mcpAuthToolCall":
            return {
                case: "mcpAuthToolCall",
                value: Il(e.value, t)
            };
        case "awaitToolCall":
            return {
                case: "awaitToolCall",
                value: Se(e.value, t)
            };
        case "blameByFilePathToolCall":
            return {
                case: "blameByFilePathToolCall",
                value: qe(e.value, t)
            };
        case "getMcpToolsToolCall":
            return {
                case: "getMcpToolsToolCall",
                value: ha(e.value, t)
            };
        case "reportBugToolCall":
            return {
                case: "reportBugToolCall",
                value: yg(e.value, t)
            };
        case "setActiveBranchToolCall":
            return {
                case: "setActiveBranchToolCall",
                value: GI(e.value, t)
            };
        case "communicateUpdateToolCall":
            return {
                case: "communicateUpdateToolCall",
                value: bt(e.value, t)
            };
        case "sendFinalSummaryToolCall":
            return {
                case: "sendFinalSummaryToolCall",
                value: x_(e.value, t)
            };
        case "replaceEnvToolCall":
            return {
                case: "replaceEnvToolCall",
                value: ng(e.value, t)
            };
        case "editPrLabelsToolCall":
            return {
                case: "editPrLabelsToolCall",
                value: bo(e.value, t)
            };
        case "recordCiInvestigationFindingsToolCall":
            return {
                case: "recordCiInvestigationFindingsToolCall",
                value: df(e.value, t)
            };
        case "sendMessageToolCall":
            return {
                case: "sendMessageToolCall",
                value: H_(e.value, t)
            };
        case "fetchCloudAgentDataToolCall":
            return {
                case: "fetchCloudAgentDataToolCall",
                value: oi(e.value, t)
            };
        case "sendToUserToolCall":
            return {
                case: "sendToUserToolCall",
                value: sA(e.value, t)
            };
        case "piReadToolCall":
            return {
                case: "piReadToolCall",
                value: Bp(e.value, t)
            };
        case "piBashToolCall":
            return {
                case: "piBashToolCall",
                value: gd(e.value, t)
            };
        case "piEditToolCall":
            return {
                case: "piEditToolCall",
                value: Bd(e.value, t)
            };
        case "piWriteToolCall":
            return {
                case: "piWriteToolCall",
                value: jp(e.value, t)
            };
        case "piGrepToolCall":
            return {
                case: "piGrepToolCall",
                value: op(e.value, t)
            };
        case "piFindToolCall":
            return {
                case: "piFindToolCall",
                value: Hd(e.value, t)
            };
        case "piLsToolCall":
            return {
                case: "piLsToolCall",
                value: wp(e.value, t)
            };
        case "connectScmToolCall":
            return {
                case: "connectScmToolCall",
                value: Tr(e.value, t)
            };
        case "searchConversationsToolCall":
            return {
                case: "searchConversationsToolCall",
                value: Aw(e.value, t)
            };
        case "createGoalToolCall":
            return {
                case: "createGoalToolCall",
                value: Fa(e.value, t)
            };
        case "updateGoalToolCall":
            return {
                case: "updateGoalToolCall",
                value: Wa(e.value, t)
            };
        case "getAgentStatusToolCall":
            return {
                case: "getAgentStatusToolCall",
                value: en(e.value, t)
            };
        case "sendToAgentToolCall":
            return {
                case: "sendToAgentToolCall",
                value: mn(e.value, t)
            };
        case "readAgentTranscriptToolCall":
            return {
                case: "readAgentTranscriptToolCall",
                value: In(e.value, t)
            };
        case "createAgentToolCall":
            return {
                case: "createAgentToolCall",
                value: On(e.value, t)
            };
        case "stopAgentToolCall":
            return {
                case: "stopAgentToolCall",
                value: Vn(e.value, t)
            };
        case "writeCanvasToolCall":
            return {
                case: "writeCanvasToolCall",
                value: Ze(e.value, t)
            };
        case "readCanvasToolCall":
            return {
                case: "readCanvasToolCall",
                value: ut(e.value, t)
            };
        case "generateVideoToolCall":
            return {
                case: "generateVideoToolCall",
                value: ta(e.value, t)
            };
        case "xSearchToolCall":
            return {
                case: "xSearchToolCall",
                value: aI(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function VI(e, t, r) {
    return new lI.Dm_({
        hookAdditionalContexts: e.hookAdditionalContexts.map((e)=>Tc(e, t, r)),
        toolCallId: e.toolCallId,
        startedAtMs: e.startedAtMs,
        completedAtMs: e.completedAtMs,
        tool: KI(e.tool, t, r)
    });
}
function KI(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "shellToolCall":
            return {
                case: "shellToolCall",
                value: SS(e.value, t, r)
            };
        case "deleteToolCall":
            return {
                case: "deleteToolCall",
                value: uo(e.value, t, r)
            };
        case "globToolCall":
            return {
                case: "globToolCall",
                value: xa(e.value, t, r)
            };
        case "grepToolCall":
            return {
                case: "grepToolCall",
                value: Cc(e.value, t, r)
            };
        case "readToolCall":
            return {
                case: "readToolCall",
                value: Dh(e.value, t, r)
            };
        case "updateTodosToolCall":
            return {
                case: "updateTodosToolCall",
                value: ts(e.value, t, r)
            };
        case "readTodosToolCall":
            return {
                case: "readTodosToolCall",
                value: ms(e.value, t, r)
            };
        case "editToolCall":
            return {
                case: "editToolCall",
                value: Go(e.value, t, r)
            };
        case "lsToolCall":
            return {
                case: "lsToolCall",
                value: Xc(e.value, t, r)
            };
        case "readLintsToolCall":
            return {
                case: "readLintsToolCall",
                value: ch(e.value, t, r)
            };
        case "mcpToolCall":
            return {
                case: "mcpToolCall",
                value: dd(e.value, t, r)
            };
        case "semSearchToolCall":
            return {
                case: "semSearchToolCall",
                value: i_(e.value, t, r)
            };
        case "createPlanToolCall":
            return {
                case: "createPlanToolCall",
                value: Cs(e.value, t, r)
            };
        case "webSearchToolCall":
            return {
                case: "webSearchToolCall",
                value: mE(e.value, t, r)
            };
        case "taskToolCall":
            return {
                case: "taskToolCall",
                value: JI(e.value, t, r)
            };
        case "listMcpResourcesToolCall":
            return {
                case: "listMcpResourcesToolCall",
                value: ed(e.value, t, r)
            };
        case "readMcpResourceToolCall":
            return {
                case: "readMcpResourceToolCall",
                value: rd(e.value, t, r)
            };
        case "applyAgentDiffToolCall":
            return {
                case: "applyAgentDiffToolCall",
                value: x(e.value, t, r)
            };
        case "askQuestionToolCall":
            return {
                case: "askQuestionToolCall",
                value: Q(e.value, t, r)
            };
        case "fetchToolCall":
            return {
                case: "fetchToolCall",
                value: _i(e.value, t, r)
            };
        case "switchModeToolCall":
            return {
                case: "switchModeToolCall",
                value: yb(e.value, t, r)
            };
        case "generateImageToolCall":
            return {
                case: "generateImageToolCall",
                value: Ji(e.value, t, r)
            };
        case "recordScreenToolCall":
            return {
                case: "recordScreenToolCall",
                value: Rf(e.value, t, r)
            };
        case "computerUseToolCall":
            return {
                case: "computerUseToolCall",
                value: lr(e.value, t, r)
            };
        case "writeShellStdinToolCall":
            return {
                case: "writeShellStdinToolCall",
                value: zE(e.value, t, r)
            };
        case "reflectToolCall":
            return {
                case: "reflectToolCall",
                value: Qf(e.value, t, r)
            };
        case "setupVmEnvironmentToolCall":
            return {
                case: "setupVmEnvironmentToolCall",
                value: gA(e.value, t, r)
            };
        case "truncatedToolCall":
            return {
                case: "truncatedToolCall",
                value: aC(e.value, t, r)
            };
        case "startGrindExecutionToolCall":
            return {
                case: "startGrindExecutionToolCall",
                value: QS(e.value, t, r)
            };
        case "startGrindPlanningToolCall":
            return {
                case: "startGrindPlanningToolCall",
                value: rb(e.value, t, r)
            };
        case "webFetchToolCall":
            return {
                case: "webFetchToolCall",
                value: $b(e.value, t, r)
            };
        case "reportBugfixResultsToolCall":
            return {
                case: "reportBugfixResultsToolCall",
                value: Jg(e.value, t, r)
            };
        case "aiAttributionToolCall":
            return {
                case: "aiAttributionToolCall",
                value: I(e.value, t, r)
            };
        case "prManagementToolCall":
            return {
                case: "prManagementToolCall",
                value: Nm(e.value, t, r)
            };
        case "mcpAuthToolCall":
            return {
                case: "mcpAuthToolCall",
                value: Cl(e.value, t, r)
            };
        case "awaitToolCall":
            return {
                case: "awaitToolCall",
                value: be(e.value, t, r)
            };
        case "blameByFilePathToolCall":
            return {
                case: "blameByFilePathToolCall",
                value: De(e.value, t, r)
            };
        case "getMcpToolsToolCall":
            return {
                case: "getMcpToolsToolCall",
                value: fa(e.value, t, r)
            };
        case "reportBugToolCall":
            return {
                case: "reportBugToolCall",
                value: wg(e.value, t, r)
            };
        case "setActiveBranchToolCall":
            return {
                case: "setActiveBranchToolCall",
                value: HI(e.value, t, r)
            };
        case "communicateUpdateToolCall":
            return {
                case: "communicateUpdateToolCall",
                value: Et(e.value, t, r)
            };
        case "sendFinalSummaryToolCall":
            return {
                case: "sendFinalSummaryToolCall",
                value: T_(e.value, t, r)
            };
        case "replaceEnvToolCall":
            return {
                case: "replaceEnvToolCall",
                value: sg(e.value, t, r)
            };
        case "editPrLabelsToolCall":
            return {
                case: "editPrLabelsToolCall",
                value: Eo(e.value, t, r)
            };
        case "recordCiInvestigationFindingsToolCall":
            return {
                case: "recordCiInvestigationFindingsToolCall",
                value: pf(e.value, t, r)
            };
        case "sendMessageToolCall":
            return {
                case: "sendMessageToolCall",
                value: z_(e.value, t, r)
            };
        case "fetchCloudAgentDataToolCall":
            return {
                case: "fetchCloudAgentDataToolCall",
                value: ii(e.value, t, r)
            };
        case "sendToUserToolCall":
            return {
                case: "sendToUserToolCall",
                value: oA(e.value, t, r)
            };
        case "piReadToolCall":
            return {
                case: "piReadToolCall",
                value: Pp(e.value, t, r)
            };
        case "piBashToolCall":
            return {
                case: "piBashToolCall",
                value: yd(e.value, t, r)
            };
        case "piEditToolCall":
            return {
                case: "piEditToolCall",
                value: Pd(e.value, t, r)
            };
        case "piWriteToolCall":
            return {
                case: "piWriteToolCall",
                value: Gp(e.value, t, r)
            };
        case "piGrepToolCall":
            return {
                case: "piGrepToolCall",
                value: ip(e.value, t, r)
            };
        case "piFindToolCall":
            return {
                case: "piFindToolCall",
                value: zd(e.value, t, r)
            };
        case "piLsToolCall":
            return {
                case: "piLsToolCall",
                value: vp(e.value, t, r)
            };
        case "connectScmToolCall":
            return {
                case: "connectScmToolCall",
                value: Rr(e.value, t, r)
            };
        case "searchConversationsToolCall":
            return {
                case: "searchConversationsToolCall",
                value: Sw(e.value, t, r)
            };
        case "createGoalToolCall":
            return {
                case: "createGoalToolCall",
                value: Ua(e.value, t, r)
            };
        case "updateGoalToolCall":
            return {
                case: "updateGoalToolCall",
                value: Va(e.value, t, r)
            };
        case "getAgentStatusToolCall":
            return {
                case: "getAgentStatusToolCall",
                value: tn(e.value, t, r)
            };
        case "sendToAgentToolCall":
            return {
                case: "sendToAgentToolCall",
                value: hn(e.value, t, r)
            };
        case "readAgentTranscriptToolCall":
            return {
                case: "readAgentTranscriptToolCall",
                value: Cn(e.value, t, r)
            };
        case "createAgentToolCall":
            return {
                case: "createAgentToolCall",
                value: Nn(e.value, t, r)
            };
        case "stopAgentToolCall":
            return {
                case: "stopAgentToolCall",
                value: Kn(e.value, t, r)
            };
        case "writeCanvasToolCall":
            return {
                case: "writeCanvasToolCall",
                value: Xe(e.value, t, r)
            };
        case "readCanvasToolCall":
            return {
                case: "readCanvasToolCall",
                value: dt(e.value, t, r)
            };
        case "generateVideoToolCall":
            return {
                case: "generateVideoToolCall",
                value: ra(e.value, t, r)
            };
        case "xSearchToolCall":
            return {
                case: "xSearchToolCall",
                value: cI(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function YI(e, t) {
    return {
        hookAdditionalContexts: [],
        toolCallId: void 0,
        startedAtMs: void 0,
        completedAtMs: void 0,
        tool: {
            case: void 0,
            value: void 0
        },
        ...t,
        _privacyMode: e
    };
}
function ZI(e, t) {
    return {
        _privacyMode: t
    };
}
function XI(e, t) {
    return {
        _privacyMode: t
    };
}
function eC(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function tC(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.PyH({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function rC(e, t) {
    return {
        _privacyMode: t,
        result: nC(e.result, t)
    };
}
function nC(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: XI(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: eC(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function sC(e, t, r) {
    return new lI.EKX({
        result: oC(e.result, t, r)
    });
}
function oC(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: (e.value, new lI.y35({}))
            };
        case "error":
            return {
                case: "error",
                value: tC(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function iC(e, t) {
    return {
        _privacyMode: t,
        originalStepBlobId: e.originalStepBlobId,
        args: void 0 !== e.args ? ZI(e.args, t) : void 0,
        result: void 0 !== e.result ? rC(e.result, t) : void 0,
        originalStepSizeBytes: e.originalStepSizeBytes,
        preview: void 0 !== e.preview ? zI(e.preview, t) : void 0
    };
}
function aC(e, t, r) {
    return new lI.xF4({
        originalStepBlobId: e.originalStepBlobId,
        args: void 0 !== e.args ? (e.args, new lI.aFC({})) : void 0,
        result: void 0 !== e.result ? sC(e.result, t, r) : void 0,
        originalStepSizeBytes: e.originalStepSizeBytes,
        preview: void 0 !== e.preview ? VI(e.preview, t, r) : void 0
    });
}
function cC(e, t) {
    return {
        _privacyMode: t,
        delta: lC(e.delta, t)
    };
}
function lC(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "shellToolCallDelta":
            return {
                case: "shellToolCallDelta",
                value: kS(e.value, t)
            };
        case "taskToolCallDelta":
            return {
                case: "taskToolCallDelta",
                value: MI(e.value, t)
            };
        case "editToolCallDelta":
            return {
                case: "editToolCallDelta",
                value: Ho(e.value, t)
            };
        case "replaceEnvToolCallDelta":
            return {
                case: "replaceEnvToolCallDelta",
                value: og(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function uC(e, t, r) {
    return new lI.V1v({
        delta: dC(e.delta, t, r)
    });
}
function dC(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "shellToolCallDelta":
            return {
                case: "shellToolCallDelta",
                value: TS(e.value, t, r)
            };
        case "taskToolCallDelta":
            return {
                case: "taskToolCallDelta",
                value: qI(e.value, t, r)
            };
        case "editToolCallDelta":
            return {
                case: "editToolCallDelta",
                value: zo(e.value, t, r)
            };
        case "replaceEnvToolCallDelta":
            return {
                case: "replaceEnvToolCallDelta",
                value: (n = e.value, new jf.km({
                    associatedPodKey: n.associatedPodKey
                }))
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
    var n;
}
function pC(e, t) {
    return {
        _privacyMode: t,
        message: mC(e.message, t)
    };
}
function mC(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "assistantMessage":
            return {
                case: "assistantMessage",
                value: ix(e.value, t)
            };
        case "toolCall":
            return {
                case: "toolCall",
                value: zI(e.value, t)
            };
        case "thinkingMessage":
            return {
                case: "thinkingMessage",
                value: cx(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function hC(e, t, r) {
    return new lI.kJk({
        message: fC(e.message, t, r)
    });
}
function fC(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "assistantMessage":
            return {
                case: "assistantMessage",
                value: ax(e.value, t, r)
            };
        case "toolCall":
            return {
                case: "toolCall",
                value: VI(e.value, t, r)
            };
        case "thinkingMessage":
            return {
                case: "thinkingMessage",
                value: lx(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function gC(e, t) {
    return {
        _privacyMode: t,
        triggeringAuthId: e.triggeringAuthId,
        triggeringUserInfo: void 0 !== e.triggeringUserInfo ? wC(e.triggeringUserInfo, t) : void 0,
        requestContextParts: void 0 !== e.requestContextParts ? zy(e.requestContextParts, t) : void 0,
        action: yC(e.action, t)
    };
}
function yC(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "userMessageAction":
            return {
                case: "userMessageAction",
                value: nk(e.value, t)
            };
        case "resumeAction":
            return {
                case: "resumeAction",
                value: Dk(e.value, t)
            };
        case "cancelAction":
            return {
                case: "cancelAction",
                value: qk(e.value, t)
            };
        case "summarizeAction":
            return {
                case: "summarizeAction",
                value: Nk(e.value, t)
            };
        case "shellCommandAction":
            return {
                case: "shellCommandAction",
                value: Fk(e.value, t)
            };
        case "startPlanAction":
            return {
                case: "startPlanAction",
                value: Uk(e.value, t)
            };
        case "executePlanAction":
            return {
                case: "executePlanAction",
                value: Lk(e.value, t)
            };
        case "asyncAskQuestionCompletionAction":
            return {
                case: "asyncAskQuestionCompletionAction",
                value: Ok(e.value, t)
            };
        case "cancelSubagentAction":
            return {
                case: "cancelSubagentAction",
                value: EC(e.value, t)
            };
        case "backgroundTaskCompletionAction":
            return {
                case: "backgroundTaskCompletionAction",
                value: _C(e.value, t)
            };
        case "backgroundShellAction":
            return {
                case: "backgroundShellAction",
                value: IC(e.value, t)
            };
        case "backgroundSubagentAction":
            return {
                case: "backgroundSubagentAction",
                value: CC(e.value, t)
            };
        case "subscriptionNotificationAction":
            return {
                case: "subscriptionNotificationAction",
                value: ok(e.value, t)
            };
        case "goalContinuationAction":
            return {
                case: "goalContinuationAction",
                value: ik(e.value, t)
            };
        case "injectContextAction":
            return {
                case: "injectContextAction",
                value: ak(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function wC(e, t) {
    return {
        _privacyMode: t,
        authId: e.authId,
        userId: e.userId
    };
}
function vC(e, t, r) {
    return new lI.iHX({
        authId: e.authId,
        userId: e.userId
    });
}
function _C(e, t) {
    return {
        _privacyMode: t,
        completions: e.completions.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    taskId: e.taskId,
                    kind: e.kind,
                    status: e.status,
                    title: (0, n.cZ)(e.title, n.po.CODE, "title", t),
                    detail: void 0 !== e.detail ? (0, n.cZ)(e.detail, n.po.CODE, "detail", t) : void 0,
                    outputPath: void 0 !== e.outputPath ? (0, n.cZ)(e.outputPath, n.po.PATH, "output_path", t) : void 0,
                    threadId: e.threadId,
                    reason: e.reason,
                    subagentId: e.subagentId,
                    toolCallId: e.toolCallId,
                    notificationContext: e.notificationContext,
                    completedAtMs: e.completedAtMs,
                    recordOnly: e.recordOnly
                };
            })(e, t)),
        systemReminder: void 0 !== e.systemReminder ? (0, n.cZ)(e.systemReminder, n.po.CODE, "system_reminder", t) : void 0,
        requestContext: void 0 !== e.requestContext ? Gy(e.requestContext, t) : void 0
    };
}
function AC(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.Kwc({
        completions: e.completions.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new lI.KFq({
                    taskId: e.taskId,
                    kind: e.kind,
                    status: e.status,
                    title: e.title.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    detail: e.detail?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    outputPath: e.outputPath?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    threadId: e.threadId,
                    reason: e.reason,
                    subagentId: e.subagentId,
                    toolCallId: e.toolCallId,
                    notificationContext: e.notificationContext,
                    completedAtMs: e.completedAtMs,
                    recordOnly: e.recordOnly
                });
            })(e, t, r)),
        systemReminder: e.systemReminder?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        requestContext: void 0 !== e.requestContext ? Hy(e.requestContext, t, r) : void 0
    });
}
function SC(e, t) {
    return {
        _privacyMode: t,
        parentToolCallId: e.parentToolCallId,
        subagentId: e.subagentId,
        environment: e.environment,
        status: e.status,
        title: void 0 !== e.title ? (0, n.cZ)(e.title, n.po.CODE, "title", t) : void 0,
        detail: void 0 !== e.detail ? (0, n.cZ)(e.detail, n.po.CODE, "detail", t) : void 0,
        transcriptPath: void 0 !== e.transcriptPath ? (0, n.cZ)(e.transcriptPath, n.po.PATH, "transcript_path", t) : void 0,
        outputPath: void 0 !== e.outputPath ? (0, n.cZ)(e.outputPath, n.po.PATH, "output_path", t) : void 0,
        completedTimestampMs: e.completedTimestampMs,
        completionReason: e.completionReason
    };
}
function bC(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.ayE({
        parentToolCallId: e.parentToolCallId,
        subagentId: e.subagentId,
        environment: e.environment,
        status: e.status,
        title: e.title?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        detail: e.detail?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        transcriptPath: e.transcriptPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        outputPath: e.outputPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        completedTimestampMs: e.completedTimestampMs,
        completionReason: e.completionReason
    });
}
function EC(e, t) {
    return {
        _privacyMode: t,
        subagentId: e.subagentId
    };
}
function IC(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId
    };
}
function CC(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId
    };
}
function kC(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "shellResult":
            return {
                case: "shellResult",
                value: MA(e.value, t)
            };
        case "taskResult":
            return {
                case: "taskResult",
                value: xI(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function xC(e, t, r) {
    return new lI.i_E({
        toolCallId: e.toolCallId,
        resolution: TC(e.resolution, t, r)
    });
}
function TC(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "shellResult":
            return {
                case: "shellResult",
                value: DA(e.value, t, r)
            };
        case "taskResult":
            return {
                case: "taskResult",
                value: RI(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function RC(e, t) {
    return {
        _privacyMode: t,
        resolutions: e.resolutions.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    toolCallId: e.toolCallId,
                    resolution: kC(e.resolution, t)
                };
            })(e, t))
    };
}
function BC(e, t) {
    return {
        _privacyMode: t,
        messages: e.messages.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    message: JC(e.message, t)
                };
            })(e, t)),
        replaceUserInfo: e.replaceUserInfo
    };
}
function PC(e, t, r) {
    return new lI.iBA({
        messages: e.messages.map((e)=>(function(e, t, r) {
                return new lI.lkY({
                    message: MC(e.message, t, r)
                });
            })(e, t, r)),
        replaceUserInfo: e.replaceUserInfo
    });
}
function JC(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "user":
            return {
                case: "user",
                value: qC(e.value, t)
            };
        case "assistant":
            return {
                case: "assistant",
                value: QC(e.value, t)
            };
        case "tool":
            return {
                case: "tool",
                value: XC(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function MC(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "user":
            return {
                case: "user",
                value: DC(e.value, t, r)
            };
        case "assistant":
            return {
                case: "assistant",
                value: jC(e.value, t, r)
            };
        case "tool":
            return {
                case: "tool",
                value: ek(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function qC(e, t) {
    return {
        _privacyMode: t,
        content: e.content.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    content: OC(e.content, t)
                };
            })(e, t))
    };
}
function DC(e, t, r) {
    return new lI.cX_({
        content: e.content.map((e)=>(function(e, t, r) {
                return new lI.mXO({
                    content: NC(e.content, t, r)
                });
            })(e, t, r))
    });
}
function OC(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "text":
            return {
                case: "text",
                value: FC(e.value, t)
            };
        case "image":
            return {
                case: "image",
                value: LC(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function NC(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "text":
            return {
                case: "text",
                value: UC(e.value, t, r)
            };
        case "image":
            return {
                case: "image",
                value: $C(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function FC(e, t) {
    return {
        _privacyMode: t,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t)
    };
}
function UC(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.cIe({
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function LC(e, t) {
    return {
        _privacyMode: t,
        data: (0, n.cZ)(e.data, n.po.CODE, "data", t),
        mimeType: e.mimeType
    };
}
function $C(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.KKi({
        data: e.data.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        mimeType: e.mimeType
    });
}
function QC(e, t) {
    return {
        _privacyMode: t,
        content: e.content.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    content: GC(e.content, t)
                };
            })(e, t))
    };
}
function jC(e, t, r) {
    return new lI.Nsi({
        content: e.content.map((e)=>(function(e, t, r) {
                return new lI.B1y({
                    content: HC(e.content, t, r)
                });
            })(e, t, r))
    });
}
function GC(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "text":
            return {
                case: "text",
                value: FC(e.value, t)
            };
        case "reasoning":
            return {
                case: "reasoning",
                value: zC(e.value, t)
            };
        case "redactedReasoning":
            return {
                case: "redactedReasoning",
                value: VC(e.value, t)
            };
        case "toolCall":
            return {
                case: "toolCall",
                value: YC(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function HC(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "text":
            return {
                case: "text",
                value: UC(e.value, t, r)
            };
        case "reasoning":
            return {
                case: "reasoning",
                value: WC(e.value, t, r)
            };
        case "redactedReasoning":
            return {
                case: "redactedReasoning",
                value: KC(e.value, t, r)
            };
        case "toolCall":
            return {
                case: "toolCall",
                value: ZC(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function zC(e, t) {
    return {
        _privacyMode: t,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t),
        signature: void 0 !== e.signature ? (0, n.cZ)(e.signature, n.po.CODE, "signature", t) : void 0
    };
}
function WC(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.FPh({
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        signature: e.signature?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function VC(e, t) {
    return {
        _privacyMode: t,
        data: (0, n.cZ)(e.data, n.po.CODE, "data", t)
    };
}
function KC(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.JDM({
        data: e.data.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function YC(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        toolName: e.toolName,
        argsJson: (0, n.cZ)(e.argsJson, n.po.CODE, "args_json", t)
    };
}
function ZC(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.czD({
        toolCallId: e.toolCallId,
        toolName: e.toolName,
        argsJson: e.argsJson.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function XC(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        toolName: e.toolName,
        content: e.content.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    content: tk(e.content, t)
                };
            })(e, t)),
        isError: e.isError,
        hookAdditionalContexts: e.hookAdditionalContexts.map((e)=>xc(e, t))
    };
}
function ek(e, t, r) {
    return new lI.zg9({
        toolCallId: e.toolCallId,
        toolName: e.toolName,
        content: e.content.map((e)=>(function(e, t, r) {
                return new lI.iF_({
                    content: rk(e.content, t, r)
                });
            })(e, t, r)),
        isError: e.isError,
        hookAdditionalContexts: e.hookAdditionalContexts.map((e)=>Tc(e, t, r))
    });
}
function tk(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "text":
            return {
                case: "text",
                value: FC(e.value, t)
            };
        case "image":
            return {
                case: "image",
                value: LC(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function rk(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "text":
            return {
                case: "text",
                value: UC(e.value, t, r)
            };
        case "image":
            return {
                case: "image",
                value: $C(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function nk(e, t) {
    return {
        _privacyMode: t,
        userMessage: void 0 !== e.userMessage ? ex(e.userMessage, t) : void 0,
        requestContext: void 0 !== e.requestContext ? Gy(e.requestContext, t) : void 0,
        sendToInteractionListener: e.sendToInteractionListener,
        prependUserMessages: e.prependUserMessages.map((e)=>ex(e, t)),
        interruptedPendingToolCallResolutions: void 0 !== e.interruptedPendingToolCallResolutions ? RC(e.interruptedPendingToolCallResolutions, t) : void 0,
        conversationHistory: void 0 !== e.conversationHistory ? BC(e.conversationHistory, t) : void 0,
        trailingConversationHistory: void 0 !== e.trailingConversationHistory ? BC(e.trailingConversationHistory, t) : void 0
    };
}
function sk(e, t) {
    return {
        userMessage: void 0,
        requestContext: void 0,
        sendToInteractionListener: void 0,
        prependUserMessages: [],
        interruptedPendingToolCallResolutions: void 0,
        conversationHistory: void 0,
        trailingConversationHistory: void 0,
        ...t,
        _privacyMode: e
    };
}
function ok(e, t) {
    return {
        _privacyMode: t,
        notifications: e.notifications.map((e)=>ex(e, t)),
        requestContext: void 0 !== e.requestContext ? Gy(e.requestContext, t) : void 0,
        sendToInteractionListener: e.sendToInteractionListener
    };
}
function ik(e, t) {
    return {
        _privacyMode: t
    };
}
function ak(e, t) {
    return {
        _privacyMode: t,
        injectionId: e.injectionId,
        expectedRunId: e.expectedRunId,
        payload: ck(e.payload, t)
    };
}
function ck(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "userContext":
            return {
                case: "userContext",
                value: lk(e.value, t)
            };
        case "systemContext":
            return {
                case: "systemContext",
                value: uk(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function lk(e, t) {
    return {
        _privacyMode: t,
        userMessage: void 0 !== e.userMessage ? ex(e.userMessage, t) : void 0,
        requestContext: void 0 !== e.requestContext ? Gy(e.requestContext, t) : void 0
    };
}
function uk(e, t) {
    return {
        _privacyMode: t,
        producer: e.producer,
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t)
    };
}
function dk(e, t) {
    return {
        _privacyMode: t,
        state: pk(e.state, t)
    };
}
function pk(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "queued":
            return {
                case: "queued",
                value: fk(e.value, t)
            };
        case "delivered":
            return {
                case: "delivered",
                value: yk(e.value, t)
            };
        case "queuedForNextTurn":
            return {
                case: "queuedForNextTurn",
                value: vk(e.value, t)
            };
        case "cancelled":
            return {
                case: "cancelled",
                value: Ak(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: bk(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function mk(e, t, r) {
    return new lI.O$x({
        state: hk(e.state, t, r)
    });
}
function hk(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "queued":
            return {
                case: "queued",
                value: gk(e.value, t, r)
            };
        case "delivered":
            return {
                case: "delivered",
                value: wk(e.value, t, r)
            };
        case "queuedForNextTurn":
            return {
                case: "queuedForNextTurn",
                value: _k(e.value, t, r)
            };
        case "cancelled":
            return {
                case: "cancelled",
                value: Sk(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: Ek(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function fk(e, t) {
    return {
        _privacyMode: t
    };
}
function gk(e, t, r) {
    return new lI.WAK({});
}
function yk(e, t) {
    return {
        _privacyMode: t,
        step: e.step,
        deliveryBatchId: e.deliveryBatchId,
        deliveredAtMs: e.deliveredAtMs
    };
}
function wk(e, t, r) {
    return new lI.HsH({
        step: e.step,
        deliveryBatchId: e.deliveryBatchId,
        deliveredAtMs: e.deliveredAtMs
    });
}
function vk(e, t) {
    return {
        _privacyMode: t
    };
}
function _k(e, t, r) {
    return new lI.f1A({});
}
function Ak(e, t) {
    return {
        _privacyMode: t
    };
}
function Sk(e, t, r) {
    return new lI._4P({});
}
function bk(e, t) {
    return {
        _privacyMode: t,
        reason: e.reason
    };
}
function Ek(e, t, r) {
    return new lI.ttX({
        reason: e.reason
    });
}
function Ik(e, t) {
    return {
        _privacyMode: t,
        id: (0, n.cZ)(e.id, n.po.PATH, "id", t),
        label: e.label,
        source: e.source,
        sourcePath: void 0 !== e.sourcePath ? (0, n.cZ)(e.sourcePath, n.po.PATH, "source_path", t) : void 0,
        sourceHash: e.sourceHash,
        managedSkillId: e.managedSkillId,
        pluginId: e.pluginId,
        pluginSnapshotToken: void 0 !== e.pluginSnapshotToken ? (0, n.cZ)(e.pluginSnapshotToken, n.po.CREDENTIALS, "plugin_snapshot_token", t) : void 0
    };
}
function Ck(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.e9f({
        id: e.id.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        label: e.label,
        source: e.source,
        sourcePath: e.sourcePath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        sourceHash: e.sourceHash,
        managedSkillId: e.managedSkillId,
        pluginId: e.pluginId,
        pluginSnapshotToken: e.pluginSnapshotToken?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function kk(e, t) {
    return {
        _privacyMode: t,
        id: (0, n.cZ)(e.id, n.po.PATH, "id", t),
        label: e.label
    };
}
function xk(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.hNe({
        id: e.id.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        label: e.label
    });
}
function Tk(e, t) {
    return {
        _privacyMode: t,
        nextMode: e.nextMode,
        exitedMode: void 0 !== e.exitedMode ? kk(e.exitedMode, t) : void 0
    };
}
function Rk(e, t, r) {
    return new lI.RP3({
        nextMode: e.nextMode,
        exitedMode: void 0 !== e.exitedMode ? xk(e.exitedMode, t, r) : void 0
    });
}
function Bk(e, t) {
    return {
        _privacyMode: t,
        intent: Pk(e.intent, t)
    };
}
function Pk(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "enter":
            return {
                case: "enter",
                value: Ik(e.value, t)
            };
        case "exit":
            return {
                case: "exit",
                value: Tk(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Jk(e, t, r) {
    return new lI.Pmj({
        intent: Mk(e.intent, t, r)
    });
}
function Mk(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "enter":
            return {
                case: "enter",
                value: Ck(e.value, t, r)
            };
        case "exit":
            return {
                case: "exit",
                value: Rk(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function qk(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t),
        interruptedPendingToolCallResolutions: void 0 !== e.interruptedPendingToolCallResolutions ? RC(e.interruptedPendingToolCallResolutions, t) : void 0
    };
}
function Dk(e, t) {
    return {
        _privacyMode: t,
        requestContext: void 0 !== e.requestContext ? Gy(e.requestContext, t) : void 0
    };
}
function Ok(e, t) {
    return {
        _privacyMode: t,
        originalToolCallId: e.originalToolCallId,
        originalArgs: void 0 !== e.originalArgs ? G(e.originalArgs, t) : void 0,
        result: void 0 !== e.result ? V(e.result, t) : void 0,
        requestContext: void 0 !== e.requestContext ? Gy(e.requestContext, t) : void 0
    };
}
function Nk(e, t) {
    return {
        _privacyMode: t
    };
}
function Fk(e, t) {
    return {
        _privacyMode: t,
        shellCommand: void 0 !== e.shellCommand ? ux(e.shellCommand, t) : void 0,
        execId: e.execId
    };
}
function Uk(e, t) {
    return {
        _privacyMode: t,
        userMessage: void 0 !== e.userMessage ? ex(e.userMessage, t) : void 0,
        requestContext: void 0 !== e.requestContext ? Gy(e.requestContext, t) : void 0,
        isSpec: e.isSpec
    };
}
function Lk(e, t) {
    return {
        _privacyMode: t,
        requestContext: void 0 !== e.requestContext ? Gy(e.requestContext, t) : void 0,
        plan: void 0 !== e.plan ? fx(e.plan, t) : void 0,
        planFileUri: void 0 !== e.planFileUri ? (0, n.cZ)(e.planFileUri, n.po.PATH, "plan_file_uri", t) : void 0,
        planFileContent: void 0 !== e.planFileContent ? (0, n.cZ)(e.planFileContent, n.po.CODE, "plan_file_content", t) : void 0,
        executionMode: e.executionMode,
        kickoffMessageId: e.kickoffMessageId,
        planId: e.planId,
        planFilePath: void 0 !== e.planFilePath ? (0, n.cZ)(e.planFilePath, n.po.PATH, "plan_file_path", t) : void 0
    };
}
function $k(e, t) {
    return {
        _privacyMode: t,
        interactionId: e.interactionId,
        response: void 0 !== e.response ? dR(e.response, t) : void 0,
        skippedQuestionIds: e.skippedQuestionIds
    };
}
function Qk(e, t, r) {
    return new lI.nh0({
        interactionId: e.interactionId,
        response: void 0 !== e.response ? mR(e.response, t, r) : void 0,
        skippedQuestionIds: e.skippedQuestionIds
    });
}
function jk(e, t) {
    return {
        _privacyMode: t,
        displayLabel: void 0 !== e.displayLabel ? (0, n.cZ)(e.displayLabel, n.po.CODE, "display_label", t) : void 0,
        resourceUrl: void 0 !== e.resourceUrl ? (0, n.cZ)(e.resourceUrl, n.po.CODE, "resource_url", t) : void 0,
        subscriptionId: e.subscriptionId
    };
}
function Gk(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.gan({
        displayLabel: e.displayLabel?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        resourceUrl: e.resourceUrl?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        subscriptionId: e.subscriptionId
    });
}
function Hk(e, t) {
    return {
        _privacyMode: t,
        planId: e.planId,
        planTitle: e.planTitle
    };
}
function zk(e, t, r) {
    return new lI.TGR({
        planId: e.planId,
        planTitle: e.planTitle
    });
}
function Wk(e, t) {
    return {
        _privacyMode: t,
        name: void 0 !== e.name ? (0, n.cZ)(e.name, n.po.CODE, "name", t) : void 0,
        subagent: void 0 !== e.subagent ? Kk(e.subagent, t) : void 0,
        sideChat: void 0 !== e.sideChat ? Zk(e.sideChat, t) : void 0,
        initDescription: void 0 !== e.initDescription ? (0, n.cZ)(e.initDescription, n.po.CODE, "init_description", t) : void 0
    };
}
function Vk(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.umU({
        name: e.name?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        subagent: void 0 !== e.subagent ? Yk(e.subagent, t, r) : void 0,
        sideChat: void 0 !== e.sideChat ? Xk(e.sideChat, t, r) : void 0,
        initDescription: e.initDescription?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Kk(e, t) {
    return {
        _privacyMode: t,
        storeDir: void 0 !== e.storeDir ? (0, n.cZ)(e.storeDir, n.po.CODE, "store_dir", t) : void 0
    };
}
function Yk(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.H1o({
        storeDir: e.storeDir?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Zk(e, t) {
    return {
        _privacyMode: t,
        storeDir: (0, n.cZ)(e.storeDir, n.po.CODE, "store_dir", t)
    };
}
function Xk(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.Dk0({
        storeDir: e.storeDir.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function ex(e, t) {
    return {
        _privacyMode: t,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t),
        messageId: e.messageId,
        selectedContext: void 0 !== e.selectedContext ? _v(e.selectedContext, t) : void 0,
        mode: e.mode,
        isSimulatedMsg: e.isSimulatedMsg,
        bestOfNGroupId: e.bestOfNGroupId,
        tryUseBestOfNPromotion: e.tryUseBestOfNPromotion,
        richText: void 0 !== e.richText ? (0, n.cZ)(e.richText, n.po.CODE, "rich_text", t) : void 0,
        simulatedMsgReason: e.simulatedMsgReason,
        conversationStateBlobId: e.conversationStateBlobId,
        subagentSystemReminder: void 0 !== e.subagentSystemReminder ? (0, n.cZ)(e.subagentSystemReminder, n.po.CODE, "subagent_system_reminder", t) : void 0,
        triggeringUserInfo: void 0 !== e.triggeringUserInfo ? wC(e.triggeringUserInfo, t) : void 0,
        executePlanInfo: void 0 !== e.executePlanInfo ? Hk(e.executePlanInfo, t) : void 0,
        simulatedMessageMetadata: void 0 !== e.simulatedMessageMetadata ? rx(e.simulatedMessageMetadata, t) : void 0,
        promptReferenceId: e.promptReferenceId,
        threadId: e.threadId,
        textBlobId: e.textBlobId,
        richTextBlobId: e.richTextBlobId,
        hookAdditionalContexts: e.hookAdditionalContexts.map((e)=>xc(e, t)),
        customModeIntent: void 0 !== e.customModeIntent ? Bk(e.customModeIntent, t) : void 0,
        projectDetails: void 0 !== e.projectDetails ? Wk(e.projectDetails, t) : void 0,
        turnSteer: e.turnSteer,
        startedAtMs: e.startedAtMs,
        completedAtMs: e.completedAtMs,
        sentByAgentId: e.sentByAgentId,
        sentByVoiceCall: e.sentByVoiceCall,
        sender: void 0 !== e.sender ? sx(e.sender, t) : void 0,
        forkedContext: void 0 !== e.forkedContext ? (0, n.cZ)(e.forkedContext, n.po.CODE, "forked_context", t) : void 0
    };
}
function tx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.RGk({
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        messageId: e.messageId,
        selectedContext: void 0 !== e.selectedContext ? Av(e.selectedContext, t, r) : void 0,
        mode: e.mode,
        isSimulatedMsg: e.isSimulatedMsg,
        bestOfNGroupId: e.bestOfNGroupId,
        tryUseBestOfNPromotion: e.tryUseBestOfNPromotion,
        richText: e.richText?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        simulatedMsgReason: e.simulatedMsgReason,
        conversationStateBlobId: e.conversationStateBlobId,
        subagentSystemReminder: e.subagentSystemReminder?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        triggeringUserInfo: void 0 !== e.triggeringUserInfo ? vC(e.triggeringUserInfo) : void 0,
        executePlanInfo: void 0 !== e.executePlanInfo ? zk(e.executePlanInfo) : void 0,
        simulatedMessageMetadata: void 0 !== e.simulatedMessageMetadata ? nx(e.simulatedMessageMetadata, t, r) : void 0,
        promptReferenceId: e.promptReferenceId,
        threadId: e.threadId,
        textBlobId: void 0 !== e.textBlobId ? e.textBlobId : void 0,
        richTextBlobId: void 0 !== e.richTextBlobId ? e.richTextBlobId : void 0,
        hookAdditionalContexts: e.hookAdditionalContexts.map((e)=>Tc(e, t, r)),
        customModeIntent: void 0 !== e.customModeIntent ? Jk(e.customModeIntent, t, r) : void 0,
        projectDetails: void 0 !== e.projectDetails ? Vk(e.projectDetails, t, r) : void 0,
        turnSteer: e.turnSteer,
        startedAtMs: e.startedAtMs,
        completedAtMs: e.completedAtMs,
        sentByAgentId: e.sentByAgentId,
        sentByVoiceCall: e.sentByVoiceCall,
        sender: void 0 !== e.sender ? ox(e.sender, t, r) : void 0,
        forkedContext: e.forkedContext?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function rx(e, t) {
    return {
        _privacyMode: t,
        title: void 0 !== e.title ? (0, n.cZ)(e.title, n.po.CODE, "title", t) : void 0,
        taskId: e.taskId,
        fsdFindingAction: e.fsdFindingAction,
        url: void 0 !== e.url ? (0, n.cZ)(e.url, n.po.CODE, "url", t) : void 0,
        subscriptionSource: e.subscriptionSource,
        subscriptionEventDisplay: void 0 !== e.subscriptionEventDisplay ? jk(e.subscriptionEventDisplay, t) : void 0,
        interactionResponse: void 0 !== e.interactionResponse ? $k(e.interactionResponse, t) : void 0
    };
}
function nx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.Aiv({
        title: e.title?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        taskId: e.taskId,
        fsdFindingAction: e.fsdFindingAction,
        url: e.url?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        subscriptionSource: e.subscriptionSource,
        subscriptionEventDisplay: void 0 !== e.subscriptionEventDisplay ? Gk(e.subscriptionEventDisplay, t, r) : void 0,
        interactionResponse: void 0 !== e.interactionResponse ? Qk(e.interactionResponse, t, r) : void 0
    });
}
function sx(e, t) {
    return {
        _privacyMode: t,
        kind: e.kind,
        id: e.id,
        displayName: (0, n.cZ)(e.displayName, n.po.CODE, "display_name", t)
    };
}
function ox(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.D$r({
        kind: e.kind,
        id: e.id,
        displayName: e.displayName.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function ix(e, t) {
    return {
        _privacyMode: t,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t),
        startedAtMs: e.startedAtMs,
        completedAtMs: e.completedAtMs
    };
}
function ax(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.Gd6({
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        startedAtMs: e.startedAtMs,
        completedAtMs: e.completedAtMs
    });
}
function cx(e, t) {
    return {
        _privacyMode: t,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t),
        durationMs: e.durationMs,
        startedAtMs: e.startedAtMs,
        completedAtMs: e.completedAtMs
    };
}
function lx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.qon({
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        durationMs: e.durationMs,
        startedAtMs: e.startedAtMs,
        completedAtMs: e.completedAtMs
    });
}
function ux(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t)
    };
}
function dx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.oIR({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function px(e, t) {
    return {
        _privacyMode: t,
        stdout: (0, n.cZ)(e.stdout, n.po.CODE, "stdout", t),
        stderr: (0, n.cZ)(e.stderr, n.po.CODE, "stderr", t),
        exitCode: e.exitCode
    };
}
function mx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.qKL({
        stdout: e.stdout.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        stderr: e.stderr.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        exitCode: e.exitCode
    });
}
function hx(e, t) {
    return {
        stdout: (0, n.cZ)("", n.po.CODE, "stdout", e),
        stderr: (0, n.cZ)("", n.po.CODE, "stderr", e),
        exitCode: 0,
        ...t,
        _privacyMode: e
    };
}
function fx(e, t) {
    return {
        _privacyMode: t,
        plan: (0, n.cZ)(e.plan, n.po.CODE, "plan", t)
    };
}
function gx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.ThX({
        plan: e.plan.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function yx(e, t) {
    return {
        _privacyMode: t,
        id: e.id,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t)
    };
}
function wx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.Tm3({
        id: e.id,
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function vx(e, t) {
    return {
        _privacyMode: t,
        conversationId: e.conversationId,
        goalId: e.goalId,
        objective: (0, n.cZ)(e.objective, n.po.CODE, "objective", t),
        status: e.status,
        idleContinuationsWithoutToolCalls: e.idleContinuationsWithoutToolCalls,
        activeDurationMs: e.activeDurationMs,
        lastAccruedAtMs: e.lastAccruedAtMs,
        continuationCount: e.continuationCount,
        agentSessionId: e.agentSessionId
    };
}
function _x(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.dDN({
        conversationId: e.conversationId,
        goalId: e.goalId,
        objective: e.objective.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        status: e.status,
        idleContinuationsWithoutToolCalls: e.idleContinuationsWithoutToolCalls,
        activeDurationMs: e.activeDurationMs,
        lastAccruedAtMs: e.lastAccruedAtMs,
        continuationCount: e.continuationCount,
        agentSessionId: e.agentSessionId
    });
}
function Ax(e, t) {
    return {
        _privacyMode: t,
        summary: (0, n.cZ)(e.summary, n.po.CODE, "summary", t)
    };
}
function Sx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.KRq({
        summary: e.summary.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function bx(e, t) {
    return {
        summary: (0, n.cZ)("", n.po.CODE, "summary", e),
        ...t,
        _privacyMode: e
    };
}
function Ex(e, t) {
    return {
        _privacyMode: t,
        summarizedMessages: e.summarizedMessages,
        summary: (0, n.cZ)(e.summary, n.po.CODE, "summary", t),
        windowTail: e.windowTail,
        summaryMessage: e.summaryMessage
    };
}
function Ix(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.Anz({
        summarizedMessages: e.summarizedMessages.map((e)=>e),
        summary: e.summary.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        windowTail: e.windowTail,
        summaryMessage: e.summaryMessage
    });
}
function Cx(e, t) {
    return {
        summarizedMessages: [],
        summary: (0, n.cZ)("", n.po.CODE, "summary", e),
        windowTail: 0,
        summaryMessage: new Uint8Array,
        ...t,
        _privacyMode: e
    };
}
function kx(e, t) {
    return {
        _privacyMode: t,
        totalUsedTokens: e.totalUsedTokens,
        maxTokens: e.maxTokens,
        categories: e.categories.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    id: e.id,
                    label: e.label,
                    estimatedTokens: e.estimatedTokens,
                    characterCount: e.characterCount
                };
            })(e, t))
    };
}
function xx(e, t, r) {
    return new lI.Dsb({
        totalUsedTokens: e.totalUsedTokens,
        maxTokens: e.maxTokens,
        categories: e.categories.map((e)=>(function(e) {
                return new lI.FrG({
                    id: e.id,
                    label: e.label,
                    estimatedTokens: e.estimatedTokens,
                    characterCount: e.characterCount
                });
            })(e))
    });
}
function Tx(e, t) {
    return {
        _privacyMode: t,
        sourceType: e.sourceType,
        messageIndex: e.messageIndex,
        contentPath: e.contentPath,
        startOffset: e.startOffset,
        endOffset: e.endOffset
    };
}
function Rx(e, t, r) {
    return new lI.Ulp({
        sourceType: e.sourceType,
        messageIndex: e.messageIndex,
        contentPath: e.contentPath,
        startOffset: e.startOffset,
        endOffset: e.endOffset
    });
}
function Bx(e, t) {
    return {
        _privacyMode: t,
        schemaVersion: e.schemaVersion,
        nodes: e.nodes.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    id: e.id,
                    parentId: e.parentId,
                    kind: e.kind,
                    label: (0, n.cZ)(e.label, n.po.CODE, "label", t),
                    categoryId: e.categoryId,
                    estimatedTokens: e.estimatedTokens,
                    characterCount: e.characterCount,
                    contentAvailable: e.contentAvailable,
                    source: void 0 !== e.source ? Tx(e.source, t) : void 0,
                    inlineContent: void 0 !== e.inlineContent ? (0, n.cZ)(e.inlineContent, n.po.CODE, "inline_content", t) : void 0
                };
            })(e, t))
    };
}
function Px(e, t, r) {
    return new lI.d2k({
        schemaVersion: e.schemaVersion,
        nodes: e.nodes.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new lI.mDu({
                    id: e.id,
                    parentId: e.parentId,
                    kind: e.kind,
                    label: e.label.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    categoryId: e.categoryId,
                    estimatedTokens: e.estimatedTokens,
                    characterCount: e.characterCount,
                    contentAvailable: e.contentAvailable,
                    source: void 0 !== e.source ? Rx(e.source) : void 0,
                    inlineContent: e.inlineContent?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r))
    });
}
function Jx(e, t) {
    return {
        _privacyMode: t,
        usedTokens: e.usedTokens,
        maxTokens: e.maxTokens,
        breakdown: void 0 !== e.breakdown ? kx(e.breakdown, t) : void 0,
        promptContextUsageTree: void 0 !== e.promptContextUsageTree ? Bx(e.promptContextUsageTree, t) : void 0
    };
}
function Mx(e, t, r) {
    return new lI.VNy({
        usedTokens: e.usedTokens,
        maxTokens: e.maxTokens,
        breakdown: void 0 !== e.breakdown ? xx(e.breakdown) : void 0,
        promptContextUsageTree: void 0 !== e.promptContextUsageTree ? Px(e.promptContextUsageTree, t, r) : void 0
    });
}
function qx(e, t) {
    return {
        usedTokens: 0,
        maxTokens: 0,
        breakdown: void 0,
        promptContextUsageTree: void 0,
        ...t,
        _privacyMode: e
    };
}
function Dx(e, t) {
    return {
        _privacyMode: t,
        content: void 0 !== e.content ? (0, n.Yz)(e.content, n.po.CODE, "content", t) : void 0,
        initialContent: void 0 !== e.initialContent ? (0, n.Yz)(e.initialContent, n.po.CODE, "initial_content", t) : void 0
    };
}
function Ox(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.rhc({
        content: e.content?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        initialContent: e.initialContent?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Nx(e, t) {
    return {
        _privacyMode: t,
        completedTurnCountCapped: e.completedTurnCountCapped,
        lastCompletedTurnTimestampMs: e.lastCompletedTurnTimestampMs
    };
}
function Fx(e, t, r) {
    return new lI.iDt({
        completedTurnCountCapped: e.completedTurnCountCapped,
        lastCompletedTurnTimestampMs: e.lastCompletedTurnTimestampMs
    });
}
function Ux(e, t) {
    return {
        _privacyMode: t,
        step: (0, n.cZ)(e.step, n.po.CODE, "step", t),
        messageIndex: e.messageIndex
    };
}
function Lx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.NH9({
        step: e.step.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        messageIndex: e.messageIndex
    });
}
function $x(e, t) {
    return {
        _privacyMode: t,
        history: e.history.map((e)=>Ux(e, t)),
        finalSummary: void 0 !== e.finalSummary ? (0, n.cZ)(e.finalSummary, n.po.CODE, "final_summary", t) : void 0,
        completedSubtitle: void 0 !== e.completedSubtitle ? (0, n.cZ)(e.completedSubtitle, n.po.CODE, "completed_subtitle", t) : void 0
    };
}
function Qx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.RCW({
        history: e.history.map((e)=>Lx(e, t, r)),
        finalSummary: e.finalSummary?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        completedSubtitle: e.completedSubtitle?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function jx(e, t) {
    return {
        _privacyMode: t,
        conversationState: void 0 !== e.conversationState ? Wx(e.conversationState, t) : void 0,
        createdTimestampMs: e.createdTimestampMs,
        lastUsedTimestampMs: e.lastUsedTimestampMs,
        subagentType: void 0 !== e.subagentType ? Fg(e.subagentType, t) : void 0,
        modelId: e.modelId,
        environment: e.environment,
        cloudSubagent: void 0 !== e.cloudSubagent ? Hx(e.cloudSubagent, t) : void 0,
        firstClassBcId: e.firstClassBcId,
        cloudRequestedEnvironmentBuildId: e.cloudRequestedEnvironmentBuildId,
        machine: void 0 !== e.machine ? pI(e.machine, t) : void 0
    };
}
function Gx(e, t, r) {
    return new lI.aK_({
        conversationState: void 0 !== e.conversationState ? Vx(e.conversationState, t, r) : void 0,
        createdTimestampMs: e.createdTimestampMs,
        lastUsedTimestampMs: e.lastUsedTimestampMs,
        subagentType: void 0 !== e.subagentType ? Lg(e.subagentType, t, r) : void 0,
        modelId: e.modelId,
        environment: e.environment,
        cloudSubagent: void 0 !== e.cloudSubagent ? zx(e.cloudSubagent, t, r) : void 0,
        firstClassBcId: e.firstClassBcId,
        cloudRequestedEnvironmentBuildId: e.cloudRequestedEnvironmentBuildId,
        machine: void 0 !== e.machine ? hI(e.machine, t, r) : void 0
    });
}
function Hx(e, t) {
    return {
        _privacyMode: t,
        bcId: e.bcId,
        transcriptPath: void 0 !== e.transcriptPath ? (0, n.cZ)(e.transcriptPath, n.po.PATH, "transcript_path", t) : void 0
    };
}
function zx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.AMN({
        bcId: e.bcId,
        transcriptPath: e.transcriptPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Wx(e, t) {
    return {
        _privacyMode: t,
        rootPromptMessagesJson: e.rootPromptMessagesJson,
        turns: e.turns,
        todos: e.todos,
        pendingToolCalls: e.pendingToolCalls.map((e)=>(0, n.cZ)(e, n.po.CODE, "pending_tool_calls", t)),
        tokenDetails: void 0 !== e.tokenDetails ? Jx(e.tokenDetails, t) : void 0,
        summary: e.summary,
        plan: e.plan,
        previousWorkspaceUris: e.previousWorkspaceUris.map((e)=>(0, n.cZ)(e, n.po.PATH, "previous_workspace_uris", t)),
        mode: e.mode,
        summaryArchive: e.summaryArchive,
        fileStates: new Map(Object.entries(e.fileStates).map(([e, r])=>[
                (0, n.cZ)(e, n.po.PATH, "file_states", t),
                r
            ])),
        fileStatesV2: new Map(Object.entries(e.fileStatesV2).map(([e, r])=>[
                (0, n.cZ)(e, n.po.PATH, "file_states_v2", t),
                Dx(r, t)
            ])),
        summaryArchives: e.summaryArchives,
        turnTimings: e.turnTimings.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    durationMs: e.durationMs,
                    timestampMs: e.timestampMs
                };
            })(e, t)),
        subagentStates: new Map(Object.entries(e.subagentStates).map(([e, r])=>[
                e,
                jx(r, t)
            ])),
        selfSummaryCount: e.selfSummaryCount,
        readPaths: e.readPaths.map((e)=>(0, n.cZ)(e, n.po.PATH, "read_paths", t)),
        activeBranchName: e.activeBranchName,
        plans: new Map(Object.entries(e.plans).map(([e, r])=>[
                e,
                yx(r, t)
            ])),
        trackedGitRepoBranches: e.trackedGitRepoBranches.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    repoPath: (0, n.cZ)(e.repoPath, n.po.PATH, "repo_path", t),
                    branchName: e.branchName
                };
            })(e, t)),
        agentType: e.agentType,
        communicateUpdateHistory: e.communicateUpdateHistory.map((e)=>Ux(e, t)),
        subagentThreads: new Map(Object.entries(e.subagentThreads)),
        communicateUpdateFinalSummary: void 0 !== e.communicateUpdateFinalSummary ? (0, n.cZ)(e.communicateUpdateFinalSummary, n.po.CODE, "communicate_update_final_summary", t) : void 0,
        communicateUpdateCompletedSubtitle: void 0 !== e.communicateUpdateCompletedSubtitle ? (0, n.cZ)(e.communicateUpdateCompletedSubtitle, n.po.CODE, "communicate_update_completed_subtitle", t) : void 0,
        communicateUpdateStatesByParentToolCallId: new Map(Object.entries(e.communicateUpdateStatesByParentToolCallId).map(([e, r])=>[
                e,
                $x(r, t)
            ])),
        subagentRunsByParentToolCallId: new Map(Object.entries(e.subagentRunsByParentToolCallId).map(([e, r])=>[
                e,
                SC(r, t)
            ])),
        conversationStartedTimestampMs: e.conversationStartedTimestampMs,
        conversationStartedTimeZone: e.conversationStartedTimeZone,
        subagentStateRefs: new Map(Object.entries(e.subagentStateRefs)),
        goalState: void 0 !== e.goalState ? vx(e.goalState, t) : void 0,
        isRootProjectConversation: e.isRootProjectConversation,
        completedAskQuestionToolCallIds: e.completedAskQuestionToolCallIds,
        durableSkillBlocks: e.durableSkillBlocks.map((e)=>(0, n.cZ)(e, n.po.CODE, "durable_skill_blocks", t)),
        durableCustomModeId: void 0 !== e.durableCustomModeId ? (0, n.cZ)(e.durableCustomModeId, n.po.PATH, "durable_custom_mode_id", t) : void 0,
        messageCountAtLastCompaction: e.messageCountAtLastCompaction,
        recentUserMessageIds: e.recentUserMessageIds,
        recentUserMessageIdsOlderTurnCount: e.recentUserMessageIdsOlderTurnCount,
        turnTelemetry: void 0 !== e.turnTelemetry ? Nx(e.turnTelemetry, t) : void 0,
        mentionedAgentIds: e.mentionedAgentIds
    };
}
function Vx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.Y9z({
        rootPromptMessagesJson: e.rootPromptMessagesJson.map((e)=>e),
        turns: e.turns.map((e)=>e),
        todos: e.todos.map((e)=>e),
        pendingToolCalls: e.pendingToolCalls.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        tokenDetails: void 0 !== e.tokenDetails ? Mx(e.tokenDetails, t, r) : void 0,
        summary: void 0 !== e.summary ? e.summary : void 0,
        plan: void 0 !== e.plan ? e.plan : void 0,
        previousWorkspaceUris: e.previousWorkspaceUris.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        mode: e.mode,
        summaryArchive: void 0 !== e.summaryArchive ? e.summaryArchive : void 0,
        fileStates: Object.fromEntries(Array.from(e.fileStates.entries()).map(([e, r])=>[
                e.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                }),
                r
            ])),
        fileStatesV2: Object.fromEntries(Array.from(e.fileStatesV2.entries()).map(([e, o])=>[
                e.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                }),
                Ox(o, t, r)
            ])),
        summaryArchives: e.summaryArchives.map((e)=>e),
        turnTimings: e.turnTimings.map((e)=>(function(e) {
                return new lI.H3V({
                    durationMs: e.durationMs,
                    timestampMs: e.timestampMs
                });
            })(e)),
        subagentStates: Object.fromEntries(Array.from(e.subagentStates.entries()).map(([e, n])=>[
                e,
                Gx(n, t, r)
            ])),
        selfSummaryCount: e.selfSummaryCount,
        readPaths: e.readPaths.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        activeBranchName: e.activeBranchName,
        plans: Object.fromEntries(Array.from(e.plans.entries()).map(([e, n])=>[
                e,
                wx(n, t, r)
            ])),
        trackedGitRepoBranches: e.trackedGitRepoBranches.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new lI.FRJ({
                    repoPath: e.repoPath.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    branchName: e.branchName
                });
            })(e, t, r)),
        agentType: e.agentType,
        communicateUpdateHistory: e.communicateUpdateHistory.map((e)=>Lx(e, t, r)),
        subagentThreads: Object.fromEntries(e.subagentThreads.entries()),
        communicateUpdateFinalSummary: e.communicateUpdateFinalSummary?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        communicateUpdateCompletedSubtitle: e.communicateUpdateCompletedSubtitle?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        communicateUpdateStatesByParentToolCallId: Object.fromEntries(Array.from(e.communicateUpdateStatesByParentToolCallId.entries()).map(([e, n])=>[
                e,
                Qx(n, t, r)
            ])),
        subagentRunsByParentToolCallId: Object.fromEntries(Array.from(e.subagentRunsByParentToolCallId.entries()).map(([e, n])=>[
                e,
                bC(n, t, r)
            ])),
        conversationStartedTimestampMs: e.conversationStartedTimestampMs,
        conversationStartedTimeZone: e.conversationStartedTimeZone,
        subagentStateRefs: Object.fromEntries(Array.from(e.subagentStateRefs.entries()).map(([e, t])=>[
                e,
                t
            ])),
        goalState: void 0 !== e.goalState ? _x(e.goalState, t, r) : void 0,
        isRootProjectConversation: e.isRootProjectConversation,
        completedAskQuestionToolCallIds: e.completedAskQuestionToolCallIds,
        durableSkillBlocks: e.durableSkillBlocks.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        durableCustomModeId: e.durableCustomModeId?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        messageCountAtLastCompaction: e.messageCountAtLastCompaction,
        recentUserMessageIds: e.recentUserMessageIds,
        recentUserMessageIdsOlderTurnCount: e.recentUserMessageIdsOlderTurnCount,
        turnTelemetry: void 0 !== e.turnTelemetry ? Fx(e.turnTelemetry) : void 0,
        mentionedAgentIds: e.mentionedAgentIds
    });
}
function Kx(e, t) {
    return {
        _privacyMode: t,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t),
        isServerNotice: e.isServerNotice
    };
}
function Yx(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.PtE({
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        isServerNotice: e.isServerNotice
    });
}
function Zx(e, t) {
    return {
        _privacyMode: t,
        displayName: e.displayName
    };
}
function Xx(e, t, r) {
    return new lI.IQS({
        displayName: e.displayName
    });
}
function eT(e, t) {
    return {
        _privacyMode: t,
        callId: e.callId,
        toolCall: void 0 !== e.toolCall ? zI(e.toolCall, t) : void 0,
        modelCallId: e.modelCallId
    };
}
function tT(e, t, r) {
    return new lI.xuG({
        callId: e.callId,
        toolCall: void 0 !== e.toolCall ? VI(e.toolCall, t, r) : void 0,
        modelCallId: e.modelCallId
    });
}
function rT(e, t) {
    return {
        _privacyMode: t,
        callId: e.callId,
        toolCall: void 0 !== e.toolCall ? zI(e.toolCall, t) : void 0,
        modelCallId: e.modelCallId
    };
}
function nT(e, t, r) {
    return new lI.LLS({
        callId: e.callId,
        toolCall: void 0 !== e.toolCall ? VI(e.toolCall, t, r) : void 0,
        modelCallId: e.modelCallId
    });
}
function sT(e, t) {
    return {
        _privacyMode: t,
        callId: e.callId,
        toolCallDelta: void 0 !== e.toolCallDelta ? cC(e.toolCallDelta, t) : void 0,
        modelCallId: e.modelCallId
    };
}
function oT(e, t, r) {
    return new lI.I0n({
        callId: e.callId,
        toolCallDelta: void 0 !== e.toolCallDelta ? uC(e.toolCallDelta, t, r) : void 0,
        modelCallId: e.modelCallId
    });
}
function iT(e, t) {
    return {
        _privacyMode: t,
        callId: e.callId,
        toolCall: void 0 !== e.toolCall ? zI(e.toolCall, t) : void 0,
        argsTextDelta: (0, n.cZ)(e.argsTextDelta, n.po.CODE, "args_text_delta", t),
        modelCallId: e.modelCallId
    };
}
function aT(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.fxF({
        callId: e.callId,
        toolCall: void 0 !== e.toolCall ? VI(e.toolCall, t, r) : void 0,
        argsTextDelta: e.argsTextDelta.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        modelCallId: e.modelCallId
    });
}
function cT(e, t) {
    return {
        _privacyMode: t,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t),
        thinkingStyle: e.thinkingStyle
    };
}
function lT(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.cHB({
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        thinkingStyle: e.thinkingStyle
    });
}
function uT(e, t) {
    return {
        _privacyMode: t,
        thinkingDurationMs: e.thinkingDurationMs
    };
}
function dT(e, t) {
    return {
        _privacyMode: t,
        tokens: e.tokens
    };
}
function pT(e, t, r) {
    return new lI.Fyz({
        tokens: e.tokens
    });
}
function mT(e, t) {
    return {
        _privacyMode: t,
        summary: (0, n.cZ)(e.summary, n.po.CODE, "summary", t)
    };
}
function hT(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.ECk({
        summary: e.summary.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function fT(e, t) {
    return {
        _privacyMode: t
    };
}
function gT(e, t) {
    return {
        _privacyMode: t
    };
}
function yT(e, t) {
    return {
        _privacyMode: t,
        hookMessage: void 0 !== e.hookMessage ? (0, n.cZ)(e.hookMessage, n.po.CODE, "hook_message", t) : void 0,
        failed: e.failed
    };
}
function wT(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.ZM9({
        hookMessage: e.hookMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        failed: e.failed
    });
}
function vT(e, t) {
    return {
        _privacyMode: t,
        event: _T(e.event, t)
    };
}
function _T(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "stdout":
            return {
                case: "stdout",
                value: UA(e.value, t)
            };
        case "stderr":
            return {
                case: "stderr",
                value: QA(e.value, t)
            };
        case "exit":
            return {
                case: "exit",
                value: HA(e.value, t)
            };
        case "start":
            return {
                case: "start",
                value: VA(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function AT(e, t, r) {
    return new lI.Nn_({
        event: ST(e.event, t, r)
    });
}
function ST(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "stdout":
            return {
                case: "stdout",
                value: LA(e.value, t, r)
            };
        case "stderr":
            return {
                case: "stderr",
                value: jA(e.value, t, r)
            };
        case "exit":
            return {
                case: "exit",
                value: zA(e.value, t, r)
            };
        case "start":
            return {
                case: "start",
                value: KA(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function bT(e, t) {
    return {
        _privacyMode: t,
        inputTokens: e.inputTokens,
        outputTokens: e.outputTokens,
        cacheReadTokens: e.cacheReadTokens,
        cacheWriteTokens: e.cacheWriteTokens,
        reasoningTokens: e.reasoningTokens,
        endedAtMs: e.endedAtMs
    };
}
function ET(e, t, r) {
    return new lI.lJj({
        inputTokens: e.inputTokens,
        outputTokens: e.outputTokens,
        cacheReadTokens: e.cacheReadTokens,
        cacheWriteTokens: e.cacheWriteTokens,
        reasoningTokens: e.reasoningTokens,
        endedAtMs: e.endedAtMs
    });
}
function IT(e, t) {
    return {
        _privacyMode: t,
        userMessage: void 0 !== e.userMessage ? ex(e.userMessage, t) : void 0
    };
}
function CT(e, t, r) {
    return new lI.v$T({
        userMessage: void 0 !== e.userMessage ? tx(e.userMessage, t, r) : void 0
    });
}
function kT(e, t) {
    return {
        _privacyMode: t,
        stepId: e.stepId
    };
}
function xT(e, t, r) {
    return new lI.dwJ({
        stepId: e.stepId
    });
}
function TT(e, t) {
    return {
        _privacyMode: t,
        callCount: e.callCount
    };
}
function RT(e, t, r) {
    return new lI.BU$({
        callCount: e.callCount
    });
}
function BT(e, t) {
    return {
        _privacyMode: t,
        stepId: e.stepId,
        stepDurationMs: e.stepDurationMs
    };
}
function PT(e, t, r) {
    return new lI.Lrv({
        stepId: e.stepId,
        stepDurationMs: e.stepDurationMs
    });
}
function JT(e, t) {
    return {
        _privacyMode: t,
        suggestion: (0, n.cZ)(e.suggestion, n.po.CODE, "suggestion", t)
    };
}
function MT(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.yfd({
        suggestion: e.suggestion.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function qT(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        branchName: e.branchName
    };
}
function DT(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.PSN({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        branchName: e.branchName
    });
}
function OT(e, t) {
    return {
        _privacyMode: t,
        id: e.id,
        label: e.label
    };
}
function NT(e, t, r) {
    return new lI.xBB({
        id: e.id,
        label: e.label
    });
}
function FT(e, t) {
    return {
        _privacyMode: t,
        requestId: e.requestId,
        canonicalModelName: e.canonicalModelName,
        categories: e.categories.map((e)=>OT(e, t)),
        categoryGroups: e.categoryGroups.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    id: e.id,
                    prompt: e.prompt,
                    categories: e.categories.map((e)=>OT(e, t))
                };
            })(e, t)),
        showFormImmediately: e.showFormImmediately,
        title: e.title,
        negativeTitle: e.negativeTitle,
        commentPlaceholder: e.commentPlaceholder
    };
}
function UT(e, t, r) {
    return new lI.apn({
        requestId: e.requestId,
        canonicalModelName: e.canonicalModelName,
        categories: e.categories.map((e)=>NT(e)),
        categoryGroups: e.categoryGroups.map((e)=>(function(e) {
                return new lI.upy({
                    id: e.id,
                    prompt: e.prompt,
                    categories: e.categories.map((e)=>NT(e))
                });
            })(e)),
        showFormImmediately: e.showFormImmediately,
        title: e.title,
        negativeTitle: e.negativeTitle,
        commentPlaceholder: e.commentPlaceholder
    });
}
function LT(e, t) {
    return {
        _privacyMode: t,
        displayOrder: e.displayOrder,
        parentInvocationId: e.parentInvocationId,
        alternateInvocationId: e.alternateInvocationId,
        parentResponse: (0, n.cZ)(e.parentResponse, n.po.CODE, "parent_response", t),
        comparisonConfigId: e.comparisonConfigId,
        alternateModelId: e.alternateModelId
    };
}
function $T(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.mue({
        displayOrder: e.displayOrder,
        parentInvocationId: e.parentInvocationId,
        alternateInvocationId: e.alternateInvocationId,
        parentResponse: e.parentResponse.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        comparisonConfigId: e.comparisonConfigId,
        alternateModelId: e.alternateModelId
    });
}
function QT(e, t) {
    return {
        _privacyMode: t,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t)
    };
}
function jT(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lI.c0E({
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function GT(e, t) {
    return {
        _privacyMode: t
    };
}
function HT(e, t) {
    return {
        _privacyMode: t,
        reason: e.reason
    };
}
function zT(e, t) {
    return {
        _privacyMode: t,
        comparisonId: e.comparisonId,
        event: WT(e.event, t)
    };
}
function WT(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "started":
            return {
                case: "started",
                value: LT(e.value, t)
            };
        case "textDelta":
            return {
                case: "textDelta",
                value: QT(e.value, t)
            };
        case "completed":
            return {
                case: "completed",
                value: GT(e.value, t)
            };
        case "skipped":
            return {
                case: "skipped",
                value: HT(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function VT(e, t, r) {
    return new lI.Cnm({
        comparisonId: e.comparisonId,
        event: KT(e.event, t, r)
    });
}
function KT(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "started":
            return {
                case: "started",
                value: $T(e.value, t, r)
            };
        case "textDelta":
            return {
                case: "textDelta",
                value: jT(e.value, t, r)
            };
        case "completed":
            return {
                case: "completed",
                value: (e.value, new lI.q8c({}))
            };
        case "skipped":
            return {
                case: "skipped",
                value: (n = e.value, new lI.TNM({
                    reason: n.reason
                }))
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
    var n;
}
function YT(e, t) {
    return {
        _privacyMode: t,
        messageStartedAtMs: e.messageStartedAtMs,
        message: ZT(e.message, t)
    };
}
function ZT(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "textDelta":
            return {
                case: "textDelta",
                value: Kx(e.value, t)
            };
        case "partialToolCall":
            return {
                case: "partialToolCall",
                value: iT(e.value, t)
            };
        case "toolCallDelta":
            return {
                case: "toolCallDelta",
                value: sT(e.value, t)
            };
        case "toolCallStarted":
            return {
                case: "toolCallStarted",
                value: eT(e.value, t)
            };
        case "toolCallCompleted":
            return {
                case: "toolCallCompleted",
                value: rT(e.value, t)
            };
        case "thinkingDelta":
            return {
                case: "thinkingDelta",
                value: cT(e.value, t)
            };
        case "thinkingCompleted":
            return {
                case: "thinkingCompleted",
                value: uT(e.value, t)
            };
        case "userMessageAppended":
            return {
                case: "userMessageAppended",
                value: IT(e.value, t)
            };
        case "tokenDelta":
            return {
                case: "tokenDelta",
                value: dT(e.value, t)
            };
        case "summary":
            return {
                case: "summary",
                value: mT(e.value, t)
            };
        case "summaryStarted":
            return {
                case: "summaryStarted",
                value: fT(e.value, t)
            };
        case "summaryCompleted":
            return {
                case: "summaryCompleted",
                value: yT(e.value, t)
            };
        case "shellOutputDelta":
            return {
                case: "shellOutputDelta",
                value: vT(e.value, t)
            };
        case "heartbeat":
            return {
                case: "heartbeat",
                value: gT(e.value, t)
            };
        case "turnEnded":
            return {
                case: "turnEnded",
                value: bT(e.value, t)
            };
        case "stepStarted":
            return {
                case: "stepStarted",
                value: kT(e.value, t)
            };
        case "stepCompleted":
            return {
                case: "stepCompleted",
                value: BT(e.value, t)
            };
        case "toolRequestsListed":
            return {
                case: "toolRequestsListed",
                value: TT(e.value, t)
            };
        case "promptSuggestion":
            return {
                case: "promptSuggestion",
                value: JT(e.value, t)
            };
        case "postRequestPrompt":
            return {
                case: "postRequestPrompt",
                value: nR(e.value, t)
            };
        case "activeBranchChange":
            return {
                case: "activeBranchChange",
                value: qT(e.value, t)
            };
        case "feedbackRequest":
            return {
                case: "feedbackRequest",
                value: FT(e.value, t)
            };
        case "responseComparison":
            return {
                case: "responseComparison",
                value: zT(e.value, t)
            };
        case "contextInjectionState":
            return {
                case: "contextInjectionState",
                value: tR(e.value, t)
            };
        case "routedModel":
            return {
                case: "routedModel",
                value: Zx(e.value, t)
            };
        case "grokBotNudge":
            return {
                case: "grokBotNudge",
                value: oR(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function XT(e, t, r) {
    return new lI.Uq({
        messageStartedAtMs: e.messageStartedAtMs,
        message: eR(e.message, t, r)
    });
}
function eR(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "textDelta":
            return {
                case: "textDelta",
                value: Yx(e.value, t, r)
            };
        case "partialToolCall":
            return {
                case: "partialToolCall",
                value: aT(e.value, t, r)
            };
        case "toolCallDelta":
            return {
                case: "toolCallDelta",
                value: oT(e.value, t, r)
            };
        case "toolCallStarted":
            return {
                case: "toolCallStarted",
                value: tT(e.value, t, r)
            };
        case "toolCallCompleted":
            return {
                case: "toolCallCompleted",
                value: nT(e.value, t, r)
            };
        case "thinkingDelta":
            return {
                case: "thinkingDelta",
                value: lT(e.value, t, r)
            };
        case "thinkingCompleted":
            return {
                case: "thinkingCompleted",
                value: (n = e.value, new lI.tr3({
                    thinkingDurationMs: n.thinkingDurationMs
                }))
            };
        case "userMessageAppended":
            return {
                case: "userMessageAppended",
                value: CT(e.value, t, r)
            };
        case "tokenDelta":
            return {
                case: "tokenDelta",
                value: pT(e.value)
            };
        case "summary":
            return {
                case: "summary",
                value: hT(e.value, t, r)
            };
        case "summaryStarted":
            return {
                case: "summaryStarted",
                value: (e.value, new lI.lWT({}))
            };
        case "summaryCompleted":
            return {
                case: "summaryCompleted",
                value: wT(e.value, t, r)
            };
        case "shellOutputDelta":
            return {
                case: "shellOutputDelta",
                value: AT(e.value, t, r)
            };
        case "heartbeat":
            return {
                case: "heartbeat",
                value: (e.value, new lI.ih1({}))
            };
        case "turnEnded":
            return {
                case: "turnEnded",
                value: ET(e.value)
            };
        case "stepStarted":
            return {
                case: "stepStarted",
                value: xT(e.value)
            };
        case "stepCompleted":
            return {
                case: "stepCompleted",
                value: PT(e.value)
            };
        case "toolRequestsListed":
            return {
                case: "toolRequestsListed",
                value: RT(e.value)
            };
        case "promptSuggestion":
            return {
                case: "promptSuggestion",
                value: MT(e.value, t, r)
            };
        case "postRequestPrompt":
            return {
                case: "postRequestPrompt",
                value: sR(e.value, t, r)
            };
        case "activeBranchChange":
            return {
                case: "activeBranchChange",
                value: DT(e.value, t, r)
            };
        case "feedbackRequest":
            return {
                case: "feedbackRequest",
                value: UT(e.value)
            };
        case "responseComparison":
            return {
                case: "responseComparison",
                value: VT(e.value, t, r)
            };
        case "contextInjectionState":
            return {
                case: "contextInjectionState",
                value: rR(e.value, t, r)
            };
        case "routedModel":
            return {
                case: "routedModel",
                value: Xx(e.value)
            };
        case "grokBotNudge":
            return {
                case: "grokBotNudge",
                value: iR(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
    var n;
}
function tR(e, t) {
    return {
        _privacyMode: t,
        injectionId: e.injectionId,
        state: void 0 !== e.state ? dk(e.state, t) : void 0
    };
}
function rR(e, t, r) {
    return new lI.b63({
        injectionId: e.injectionId,
        state: void 0 !== e.state ? mk(e.state, t, r) : void 0
    });
}
function nR(e, t) {
    return {
        _privacyMode: t,
        title: e.title,
        message: e.message,
        buttonLabel: e.buttonLabel,
        buttonUrl: e.buttonUrl
    };
}
function sR(e, t, r) {
    return new lI.HMi({
        title: e.title,
        message: e.message,
        buttonLabel: e.buttonLabel,
        buttonUrl: e.buttonUrl
    });
}
function oR(e, t) {
    return {
        _privacyMode: t,
        job: e.job,
        description: e.description,
        showNumber: e.showNumber
    };
}
function iR(e, t, r) {
    return new lI.ZVT({
        job: e.job,
        description: e.description,
        showNumber: e.showNumber
    });
}
function aR(e, t) {
    return {
        _privacyMode: t,
        id: e.id,
        query: cR(e.query, t)
    };
}
function cR(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "webSearchRequestQuery":
            return {
                case: "webSearchRequestQuery",
                value: hE(e.value, t)
            };
        case "askQuestionInteractionQuery":
            return {
                case: "askQuestionInteractionQuery",
                value: fR(e.value, t)
            };
        case "switchModeRequestQuery":
            return {
                case: "switchModeRequestQuery",
                value: wb(e.value, t)
            };
        case "createPlanRequestQuery":
            return {
                case: "createPlanRequestQuery",
                value: Os(e.value, t)
            };
        case "setupVmEnvironmentArgs":
            return {
                case: "setupVmEnvironmentArgs",
                value: aA(e.value, t)
            };
        case "webFetchRequestQuery":
            return {
                case: "webFetchRequestQuery",
                value: Qb(e.value, t)
            };
        case "prManagementRequestQuery":
            return {
                case: "prManagementRequestQuery",
                value: Fm(e.value, t)
            };
        case "mcpAuthRequestQuery":
            return {
                case: "mcpAuthRequestQuery",
                value: kl(e.value, t)
            };
        case "generateImageRequestQuery":
            return {
                case: "generateImageRequestQuery",
                value: Mi(e.value, t)
            };
        case "replaceEnvArgs":
            return {
                case: "replaceEnvArgs",
                value: zf(e.value, t)
            };
        case "connectScmRequestQuery":
            return {
                case: "connectScmRequestQuery",
                value: Br(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function lR(e, t, r) {
    return new lI.Pd7({
        id: e.id,
        query: uR(e.query, t, r)
    });
}
function uR(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "webSearchRequestQuery":
            return {
                case: "webSearchRequestQuery",
                value: fE(e.value, t, r)
            };
        case "askQuestionInteractionQuery":
            return {
                case: "askQuestionInteractionQuery",
                value: gR(e.value, t, r)
            };
        case "switchModeRequestQuery":
            return {
                case: "switchModeRequestQuery",
                value: vb(e.value, t, r)
            };
        case "createPlanRequestQuery":
            return {
                case: "createPlanRequestQuery",
                value: Ns(e.value, t, r)
            };
        case "setupVmEnvironmentArgs":
            return {
                case: "setupVmEnvironmentArgs",
                value: cA(e.value, t, r)
            };
        case "webFetchRequestQuery":
            return {
                case: "webFetchRequestQuery",
                value: jb(e.value, t, r)
            };
        case "prManagementRequestQuery":
            return {
                case: "prManagementRequestQuery",
                value: Um(e.value, t, r)
            };
        case "mcpAuthRequestQuery":
            return {
                case: "mcpAuthRequestQuery",
                value: (n = e.value, new pl.uL({
                    args: void 0 !== n.args ? hl(n.args) : void 0
                }))
            };
        case "generateImageRequestQuery":
            return {
                case: "generateImageRequestQuery",
                value: qi(e.value, t, r)
            };
        case "replaceEnvArgs":
            return {
                case: "replaceEnvArgs",
                value: Wf(e.value, t, r)
            };
        case "connectScmRequestQuery":
            return {
                case: "connectScmRequestQuery",
                value: Pr(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
    var n;
}
function dR(e, t) {
    return {
        _privacyMode: t,
        id: e.id,
        result: pR(e.result, t)
    };
}
function pR(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "webSearchRequestResponse":
            return {
                case: "webSearchRequestResponse",
                value: gE(e.value, t)
            };
        case "askQuestionInteractionResponse":
            return {
                case: "askQuestionInteractionResponse",
                value: yR(e.value, t)
            };
        case "switchModeRequestResponse":
            return {
                case: "switchModeRequestResponse",
                value: _b(e.value, t)
            };
        case "createPlanRequestResponse":
            return {
                case: "createPlanRequestResponse",
                value: Fs(e.value, t)
            };
        case "setupVmEnvironmentResult":
            return {
                case: "setupVmEnvironmentResult",
                value: lA(e.value, t)
            };
        case "webFetchRequestResponse":
            return {
                case: "webFetchRequestResponse",
                value: Gb(e.value, t)
            };
        case "prManagementResult":
            return {
                case: "prManagementResult",
                value: bm(e.value, t)
            };
        case "mcpAuthRequestResponse":
            return {
                case: "mcpAuthRequestResponse",
                value: xl(e.value, t)
            };
        case "generateImageRequestResponse":
            return {
                case: "generateImageRequestResponse",
                value: Di(e.value, t)
            };
        case "replaceEnvResult":
            return {
                case: "replaceEnvResult",
                value: Xf(e.value, t)
            };
        case "connectScmRequestResponse":
            return {
                case: "connectScmRequestResponse",
                value: Jr(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function mR(e, t, r) {
    return new lI.Y5({
        id: e.id,
        result: hR(e.result, t, r)
    });
}
function hR(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "webSearchRequestResponse":
            return {
                case: "webSearchRequestResponse",
                value: wE(e.value, t, r)
            };
        case "askQuestionInteractionResponse":
            return {
                case: "askQuestionInteractionResponse",
                value: wR(e.value, t, r)
            };
        case "switchModeRequestResponse":
            return {
                case: "switchModeRequestResponse",
                value: Sb(e.value, t, r)
            };
        case "createPlanRequestResponse":
            return {
                case: "createPlanRequestResponse",
                value: Us(e.value, t, r)
            };
        case "setupVmEnvironmentResult":
            return {
                case: "setupVmEnvironmentResult",
                value: dA(e.value, t, r)
            };
        case "webFetchRequestResponse":
            return {
                case: "webFetchRequestResponse",
                value: zb(e.value, t, r)
            };
        case "prManagementResult":
            return {
                case: "prManagementResult",
                value: Im(e.value, t, r)
            };
        case "mcpAuthRequestResponse":
            return {
                case: "mcpAuthRequestResponse",
                value: Rl(e.value, t, r)
            };
        case "generateImageRequestResponse":
            return {
                case: "generateImageRequestResponse",
                value: Ni(e.value, t, r)
            };
        case "replaceEnvResult":
            return {
                case: "replaceEnvResult",
                value: tg(e.value, t, r)
            };
        case "connectScmRequestResponse":
            return {
                case: "connectScmRequestResponse",
                value: qr(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function fR(e, t) {
    return {
        _privacyMode: t,
        args: void 0 !== e.args ? G(e.args, t) : void 0,
        toolCallId: e.toolCallId
    };
}
function gR(e, t, r) {
    return new lI.qZY({
        args: void 0 !== e.args ? H(e.args, t, r) : void 0,
        toolCallId: e.toolCallId
    });
}
function yR(e, t) {
    return {
        _privacyMode: t,
        result: void 0 !== e.result ? V(e.result, t) : void 0
    };
}
function wR(e, t, r) {
    return new lI.zT({
        result: void 0 !== e.result ? Y(e.result, t, r) : void 0
    });
}
var vR = require("./module-91448.js");
function _R(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        toolCallId: e.toolCallId
    };
}
function AR(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new vR.yN({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId
    });
}
function SR(e, t) {
    return {
        _privacyMode: t,
        canvasId: e.canvasId,
        title: void 0 !== e.title ? (0, n.cZ)(e.title, n.po.CODE, "title", t) : void 0,
        saveState: e.saveState,
        saveDetail: void 0 !== e.saveDetail ? (0, n.cZ)(e.saveDetail, n.po.CODE, "save_detail", t) : void 0,
        result: bR(e.result, t)
    };
}
function bR(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: CR(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: xR(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function ER(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new vR.GL({
        canvasId: e.canvasId,
        title: e.title?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        saveState: e.saveState,
        saveDetail: e.saveDetail?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        result: IR(e.result, t, r)
    });
}
function IR(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: kR(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: TR(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function CR(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        diagnostics: e.diagnostics.map((e)=>Km(e, t))
    };
}
function kR(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new vR.uX({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        diagnostics: e.diagnostics.map((e)=>Ym(e, t, r))
    });
}
function xR(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function TR(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new vR.HW({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var RR = require("./module-88701.js");
function BR(e, t) {
    return {
        _privacyMode: t,
        journalEpoch: e.journalEpoch,
        seq: e.seq,
        lastEventId: e.lastEventId
    };
}
function PR(e, t, r) {
    return new RR.LK({
        journalEpoch: e.journalEpoch,
        seq: e.seq,
        lastEventId: e.lastEventId
    });
}
function JR(e, t) {
    return {
        _privacyMode: t,
        cursor: void 0 !== e.cursor ? BR(e.cursor, t) : void 0,
        advance: e.advance,
        includeQuotaNotices: e.includeQuotaNotices
    };
}
function MR(e, t, r) {
    return new RR.Uz({
        cursor: void 0 !== e.cursor ? PR(e.cursor) : void 0,
        advance: e.advance,
        includeQuotaNotices: e.includeQuotaNotices
    });
}
function qR(e, t) {
    return {
        _privacyMode: t,
        result: DR(e.result, t)
    };
}
function DR(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: FR(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: LR(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function OR(e, t, r) {
    return new RR.Ev({
        result: NR(e.result, t, r)
    });
}
function NR(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: UR(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: $R(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function FR(e, t) {
    return {
        _privacyMode: t,
        events: e.events.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    v: e.v,
                    eventId: e.eventId,
                    journalEpoch: e.journalEpoch,
                    seq: e.seq,
                    tsMs: e.tsMs,
                    kind: e.kind,
                    storeId: e.storeId,
                    originalRelPath: void 0 !== e.originalRelPath ? (0, n.cZ)(e.originalRelPath, n.po.PATH, "original_rel_path", t) : void 0,
                    conflictRelPath: void 0 !== e.conflictRelPath ? (0, n.cZ)(e.conflictRelPath, n.po.PATH, "conflict_rel_path", t) : void 0,
                    originalAbsPath: void 0 !== e.originalAbsPath ? (0, n.cZ)(e.originalAbsPath, n.po.PATH, "original_abs_path", t) : void 0,
                    conflictAbsPath: void 0 !== e.conflictAbsPath ? (0, n.cZ)(e.conflictAbsPath, n.po.PATH, "conflict_abs_path", t) : void 0,
                    preservedBytes: e.preservedBytes,
                    scopeKind: e.scopeKind,
                    limitBytes: e.limitBytes,
                    usageBytes: e.usageBytes
                };
            })(e, t)),
        nextCursor: void 0 !== e.nextCursor ? BR(e.nextCursor, t) : void 0,
        gap: e.gap
    };
}
function UR(e, t, r) {
    return new RR.iS({
        events: e.events.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new RR.RZ({
                    v: e.v,
                    eventId: e.eventId,
                    journalEpoch: e.journalEpoch,
                    seq: e.seq,
                    tsMs: e.tsMs,
                    kind: e.kind,
                    storeId: e.storeId,
                    originalRelPath: e.originalRelPath?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    conflictRelPath: e.conflictRelPath?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    originalAbsPath: e.originalAbsPath?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    conflictAbsPath: e.conflictAbsPath?.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    preservedBytes: e.preservedBytes,
                    scopeKind: e.scopeKind,
                    limitBytes: e.limitBytes,
                    usageBytes: e.usageBytes
                });
            })(e, t, r)),
        nextCursor: void 0 !== e.nextCursor ? PR(e.nextCursor) : void 0,
        gap: e.gap
    });
}
function LR(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function $R(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new RR.h6({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var QR = require("./module-70355.js");
function jR(e, t) {
    return {
        _privacyMode: t,
        trigger: e.trigger,
        contextUsagePercent: e.contextUsagePercent,
        contextTokens: e.contextTokens,
        contextWindowSize: e.contextWindowSize,
        messageCount: e.messageCount,
        messagesToCompact: e.messagesToCompact,
        isFirstCompaction: e.isFirstCompaction,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>aw(e, t))
    };
}
function GR(e, t, r) {
    return new QR.Ks({
        trigger: e.trigger,
        contextUsagePercent: e.contextUsagePercent,
        contextTokens: e.contextTokens,
        contextWindowSize: e.contextWindowSize,
        messageCount: e.messageCount,
        messagesToCompact: e.messagesToCompact,
        isFirstCompaction: e.isFirstCompaction,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>cw(e, t, r))
    });
}
function HR(e, t) {
    return {
        _privacyMode: t,
        userMessage: void 0 !== e.userMessage ? (0, n.cZ)(e.userMessage, n.po.CODE, "user_message", t) : void 0
    };
}
function zR(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.$_({
        userMessage: e.userMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function WR(e, t) {
    return {
        _privacyMode: t,
        subagentId: e.subagentId,
        subagentType: e.subagentType,
        task: (0, n.cZ)(e.task, n.po.CODE, "task", t),
        parentConversationId: e.parentConversationId,
        toolCallId: e.toolCallId,
        subagentModel: e.subagentModel,
        isParallelWorker: e.isParallelWorker,
        gitBranch: e.gitBranch,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>aw(e, t))
    };
}
function VR(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.b3({
        subagentId: e.subagentId,
        subagentType: e.subagentType,
        task: e.task.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        parentConversationId: e.parentConversationId,
        toolCallId: e.toolCallId,
        subagentModel: e.subagentModel,
        isParallelWorker: e.isParallelWorker,
        gitBranch: e.gitBranch,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>cw(e, t, r))
    });
}
function KR(e, t) {
    return {
        _privacyMode: t,
        permission: e.permission,
        userMessage: void 0 !== e.userMessage ? (0, n.cZ)(e.userMessage, n.po.CODE, "user_message", t) : void 0,
        additionalContext: void 0 !== e.additionalContext ? (0, n.cZ)(e.additionalContext, n.po.CODE, "additional_context", t) : void 0
    };
}
function YR(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.W0({
        permission: e.permission,
        userMessage: e.userMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        additionalContext: e.additionalContext?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function ZR(e, t) {
    return {
        _privacyMode: t,
        subagentId: e.subagentId,
        subagentType: e.subagentType,
        status: e.status,
        durationMs: e.durationMs,
        summary: void 0 !== e.summary ? (0, n.cZ)(e.summary, n.po.CODE, "summary", t) : void 0,
        parentConversationId: e.parentConversationId,
        messageCount: e.messageCount,
        toolCallCount: e.toolCallCount,
        errorMessage: void 0 !== e.errorMessage ? (0, n.cZ)(e.errorMessage, n.po.CODE, "error_message", t) : void 0,
        modifiedFiles: e.modifiedFiles.map((e)=>(0, n.cZ)(e, n.po.PATH, "modified_files", t)),
        gitBranch: e.gitBranch,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        loopCount: e.loopCount,
        task: void 0 !== e.task ? (0, n.cZ)(e.task, n.po.CODE, "task", t) : void 0,
        description: void 0 !== e.description ? (0, n.cZ)(e.description, n.po.CODE, "description", t) : void 0,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>aw(e, t)),
        childConversationId: e.childConversationId
    };
}
function XR(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.ty({
        subagentId: e.subagentId,
        subagentType: e.subagentType,
        status: e.status,
        durationMs: e.durationMs,
        summary: e.summary?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        parentConversationId: e.parentConversationId,
        messageCount: e.messageCount,
        toolCallCount: e.toolCallCount,
        errorMessage: e.errorMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        modifiedFiles: e.modifiedFiles.map((e)=>e.unwrap(t, {
                redactUnallowedFieldsInsteadOfThrowing: n,
                enforcing: s
            })),
        gitBranch: e.gitBranch,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        loopCount: e.loopCount,
        task: e.task?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        description: e.description?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>cw(e, t, r)),
        childConversationId: e.childConversationId
    });
}
function eB(e, t) {
    return {
        _privacyMode: t,
        followupMessage: void 0 !== e.followupMessage ? (0, n.cZ)(e.followupMessage, n.po.CODE, "followup_message", t) : void 0,
        additionalContext: void 0 !== e.additionalContext ? (0, n.cZ)(e.additionalContext, n.po.CODE, "additional_context", t) : void 0
    };
}
function tB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.AH({
        followupMessage: e.followupMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        additionalContext: e.additionalContext?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function rB(e, t) {
    return {
        _privacyMode: t,
        prompt: (0, n.cZ)(e.prompt, n.po.CODE, "prompt", t),
        attachments: e.attachments.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    type: e.type,
                    filePath: (0, n.cZ)(e.filePath, n.po.PATH, "file_path", t)
                };
            })(e, t)),
        composerMode: e.composerMode,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>aw(e, t))
    };
}
function nB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.D2({
        prompt: e.prompt.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        attachments: e.attachments.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new QR.Ru({
                    type: e.type,
                    filePath: e.filePath.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r)),
        composerMode: e.composerMode,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>cw(e, t, r))
    });
}
function sB(e, t) {
    return {
        _privacyMode: t,
        continue: e.continue,
        userMessage: void 0 !== e.userMessage ? (0, n.cZ)(e.userMessage, n.po.CODE, "user_message", t) : void 0,
        additionalContext: void 0 !== e.additionalContext ? (0, n.cZ)(e.additionalContext, n.po.CODE, "additional_context", t) : void 0
    };
}
function oB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.u1({
        continue: e.continue,
        userMessage: e.userMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        additionalContext: e.additionalContext?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function iB(e, t) {
    return {
        _privacyMode: t,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t),
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>aw(e, t)),
        inputTokens: e.inputTokens,
        outputTokens: e.outputTokens,
        cacheReadTokens: e.cacheReadTokens,
        cacheWriteTokens: e.cacheWriteTokens
    };
}
function aB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.mL({
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>cw(e, t, r)),
        inputTokens: e.inputTokens,
        outputTokens: e.outputTokens,
        cacheReadTokens: e.cacheReadTokens,
        cacheWriteTokens: e.cacheWriteTokens
    });
}
function cB(e, t) {
    return {
        _privacyMode: t
    };
}
function lB(e, t) {
    return {
        _privacyMode: t,
        text: (0, n.cZ)(e.text, n.po.CODE, "text", t),
        durationMs: e.durationMs,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>aw(e, t))
    };
}
function uB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.AL({
        text: e.text.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        durationMs: e.durationMs,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>cw(e, t, r))
    });
}
function dB(e, t) {
    return {
        _privacyMode: t
    };
}
function pB(e, t) {
    return {
        _privacyMode: t,
        status: e.status,
        loopCount: e.loopCount,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>aw(e, t)),
        inputTokens: e.inputTokens,
        outputTokens: e.outputTokens,
        cacheReadTokens: e.cacheReadTokens,
        cacheWriteTokens: e.cacheWriteTokens
    };
}
function mB(e, t, r) {
    return new QR.Od({
        status: e.status,
        loopCount: e.loopCount,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>cw(e, t, r)),
        inputTokens: e.inputTokens,
        outputTokens: e.outputTokens,
        cacheReadTokens: e.cacheReadTokens,
        cacheWriteTokens: e.cacheWriteTokens
    });
}
function hB(e, t) {
    return {
        _privacyMode: t,
        followupMessage: void 0 !== e.followupMessage ? (0, n.cZ)(e.followupMessage, n.po.CODE, "followup_message", t) : void 0
    };
}
function fB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.rT({
        followupMessage: e.followupMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function gB(e, t) {
    return {
        _privacyMode: t,
        toolName: e.toolName,
        toolInput: e.toolInput?.toJson(),
        toolUseId: e.toolUseId,
        cwd: void 0 !== e.cwd ? (0, n.cZ)(e.cwd, n.po.PATH, "cwd", t) : void 0,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>aw(e, t)),
        parentToolCallId: e.parentToolCallId
    };
}
function yB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.CI({
        toolName: e.toolName,
        toolInput: void 0 !== e.toolInput ? el.Struct.fromJson(e.toolInput) : void 0,
        toolUseId: e.toolUseId,
        cwd: e.cwd?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>cw(e, t, r)),
        parentToolCallId: e.parentToolCallId
    });
}
function wB(e, t) {
    return {
        _privacyMode: t,
        permission: e.permission,
        userMessage: void 0 !== e.userMessage ? (0, n.cZ)(e.userMessage, n.po.CODE, "user_message", t) : void 0,
        agentMessage: void 0 !== e.agentMessage ? (0, n.cZ)(e.agentMessage, n.po.CODE, "agent_message", t) : void 0,
        updatedInput: void 0 !== e.updatedInput ? (0, n.cZ)(e.updatedInput, n.po.CODE, "updated_input", t) : void 0,
        additionalContext: void 0 !== e.additionalContext ? (0, n.cZ)(e.additionalContext, n.po.CODE, "additional_context", t) : void 0
    };
}
function vB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.Wn({
        permission: e.permission,
        userMessage: e.userMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        agentMessage: e.agentMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        updatedInput: e.updatedInput?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        additionalContext: e.additionalContext?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function _B(e, t) {
    return {
        _privacyMode: t,
        toolName: e.toolName,
        toolInput: e.toolInput?.toJson(),
        toolOutput: (0, n.cZ)(e.toolOutput, n.po.CODE, "tool_output", t),
        durationMs: e.durationMs,
        toolUseId: e.toolUseId,
        cwd: void 0 !== e.cwd ? (0, n.cZ)(e.cwd, n.po.PATH, "cwd", t) : void 0,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>aw(e, t)),
        parentToolCallId: e.parentToolCallId
    };
}
function AB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.rY({
        toolName: e.toolName,
        toolInput: void 0 !== e.toolInput ? el.Struct.fromJson(e.toolInput) : void 0,
        toolOutput: e.toolOutput.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        durationMs: e.durationMs,
        toolUseId: e.toolUseId,
        cwd: e.cwd?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>cw(e, t, r)),
        parentToolCallId: e.parentToolCallId
    });
}
function SB(e, t) {
    return {
        _privacyMode: t,
        additionalContext: void 0 !== e.additionalContext ? (0, n.cZ)(e.additionalContext, n.po.CODE, "additional_context", t) : void 0
    };
}
function bB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.uB({
        additionalContext: e.additionalContext?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function EB(e, t) {
    return {
        _privacyMode: t,
        toolName: e.toolName,
        toolInput: e.toolInput?.toJson(),
        errorMessage: (0, n.cZ)(e.errorMessage, n.po.CODE, "error_message", t),
        failureType: e.failureType,
        durationMs: e.durationMs,
        toolUseId: e.toolUseId,
        isInterrupt: e.isInterrupt,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>aw(e, t)),
        parentToolCallId: e.parentToolCallId
    };
}
function IB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.hy({
        toolName: e.toolName,
        toolInput: void 0 !== e.toolInput ? el.Struct.fromJson(e.toolInput) : void 0,
        errorMessage: e.errorMessage.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        failureType: e.failureType,
        durationMs: e.durationMs,
        toolUseId: e.toolUseId,
        isInterrupt: e.isInterrupt,
        conversationId: e.conversationId,
        generationId: e.generationId,
        model: e.model,
        modelId: e.modelId,
        modelParams: e.modelParams.map((e)=>cw(e, t, r)),
        parentToolCallId: e.parentToolCallId
    });
}
function CB(e, t) {
    return {
        _privacyMode: t,
        additionalContext: void 0 !== e.additionalContext ? (0, n.cZ)(e.additionalContext, n.po.CODE, "additional_context", t) : void 0
    };
}
function kB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new QR.U1({
        additionalContext: e.additionalContext?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var xB = require("./module-83407.js");
function TB(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        timeout: e.timeout
    };
}
function RB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new xB.CU({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        timeout: e.timeout
    });
}
function BB(e, t) {
    return {
        _privacyMode: t,
        result: PB(e.result, t)
    };
}
function PB(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: qB(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: OB(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function JB(e, t, r) {
    return new xB.AH({
        result: MB(e.result, t, r)
    });
}
function MB(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: DB(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: NB(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function qB(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.CODE, "output", t),
        truncation: void 0 !== e.truncation ? hd(e.truncation, t) : void 0,
        fullOutputPath: void 0 !== e.fullOutputPath ? (0, n.cZ)(e.fullOutputPath, n.po.PATH, "full_output_path", t) : void 0
    };
}
function DB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new xB.cV({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncation: void 0 !== e.truncation ? fd(e.truncation) : void 0,
        fullOutputPath: e.fullOutputPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function OB(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        truncation: void 0 !== e.truncation ? hd(e.truncation, t) : void 0,
        fullOutputPath: void 0 !== e.fullOutputPath ? (0, n.cZ)(e.fullOutputPath, n.po.PATH, "full_output_path", t) : void 0
    };
}
function NB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new xB.bD({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncation: void 0 !== e.truncation ? fd(e.truncation) : void 0,
        fullOutputPath: e.fullOutputPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var FB = require("./module-98837.js");
function UB(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        edits: e.edits.map((e)=>Td(e, t))
    };
}
function LB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new FB.yZ({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        edits: e.edits.map((e)=>Rd(e, t, r))
    });
}
function $B(e, t) {
    return {
        _privacyMode: t,
        result: QB(e.result, t)
    };
}
function QB(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: HB(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: WB(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: KB(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function jB(e, t, r) {
    return new FB.u7({
        result: GB(e.result, t, r)
    });
}
function GB(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: zB(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: VB(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: YB(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function HB(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.CODE, "output", t),
        diff: (0, n.cZ)(e.diff, n.po.CODE, "diff", t),
        patch: (0, n.cZ)(e.patch, n.po.CODE, "patch", t),
        firstChangedLine: e.firstChangedLine
    };
}
function zB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new FB.uL({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        diff: e.diff.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        patch: e.patch.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        firstChangedLine: e.firstChangedLine
    });
}
function WB(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function VB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new FB.Nd({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function KB(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function YB(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new FB.pE({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var ZB = require("./module-83426.js");
function XB(e, t) {
    return {
        _privacyMode: t,
        pattern: (0, n.cZ)(e.pattern, n.po.PATH, "pattern", t),
        path: void 0 !== e.path ? (0, n.cZ)(e.path, n.po.PATH, "path", t) : void 0,
        limit: e.limit
    };
}
function eP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ZB.Vo({
        pattern: e.pattern.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        path: e.path?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        limit: e.limit
    });
}
function tP(e, t) {
    return {
        _privacyMode: t,
        result: rP(e.result, t)
    };
}
function rP(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: oP(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: aP(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function nP(e, t, r) {
    return new ZB.bT({
        result: sP(e.result, t, r)
    });
}
function sP(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: iP(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: cP(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function oP(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.PATH, "output", t),
        truncation: void 0 !== e.truncation ? hd(e.truncation, t) : void 0,
        resultLimitReached: e.resultLimitReached
    };
}
function iP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ZB.x9({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncation: void 0 !== e.truncation ? fd(e.truncation) : void 0,
        resultLimitReached: e.resultLimitReached
    });
}
function aP(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function cP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new ZB.Uy({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var lP = require("./module-71125.js");
function uP(e, t) {
    return {
        _privacyMode: t,
        pattern: (0, n.cZ)(e.pattern, n.po.CODE, "pattern", t),
        path: void 0 !== e.path ? (0, n.cZ)(e.path, n.po.PATH, "path", t) : void 0,
        glob: void 0 !== e.glob ? (0, n.cZ)(e.glob, n.po.PATH, "glob", t) : void 0,
        ignoreCase: e.ignoreCase,
        literal: e.literal,
        context: e.context,
        limit: e.limit
    };
}
function dP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lP.gK({
        pattern: e.pattern.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        path: e.path?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        glob: e.glob?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        ignoreCase: e.ignoreCase,
        literal: e.literal,
        context: e.context,
        limit: e.limit
    });
}
function pP(e, t) {
    return {
        _privacyMode: t,
        result: mP(e.result, t)
    };
}
function mP(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: gP(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: wP(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function hP(e, t, r) {
    return new lP.mr({
        result: fP(e.result, t, r)
    });
}
function fP(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: yP(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: vP(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function gP(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.CODE, "output", t),
        truncation: void 0 !== e.truncation ? hd(e.truncation, t) : void 0,
        matchLimitReached: e.matchLimitReached,
        linesTruncated: e.linesTruncated
    };
}
function yP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lP.oC({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncation: void 0 !== e.truncation ? fd(e.truncation) : void 0,
        matchLimitReached: e.matchLimitReached,
        linesTruncated: e.linesTruncated
    });
}
function wP(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function vP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new lP.hP({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var _P = require("./module-53996.js");
function AP(e, t) {
    return {
        _privacyMode: t,
        path: void 0 !== e.path ? (0, n.cZ)(e.path, n.po.PATH, "path", t) : void 0,
        limit: e.limit
    };
}
function SP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new _P.D8({
        path: e.path?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        limit: e.limit
    });
}
function bP(e, t) {
    return {
        _privacyMode: t,
        result: EP(e.result, t)
    };
}
function EP(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: kP(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: TP(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function IP(e, t, r) {
    return new _P.pX({
        result: CP(e.result, t, r)
    });
}
function CP(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: xP(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: RP(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function kP(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.PATH, "output", t),
        truncation: void 0 !== e.truncation ? hd(e.truncation, t) : void 0,
        entryLimitReached: e.entryLimitReached
    };
}
function xP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new _P.f5({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncation: void 0 !== e.truncation ? fd(e.truncation) : void 0,
        entryLimitReached: e.entryLimitReached
    });
}
function TP(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function RP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new _P.iG({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var BP = require("./module-39857.js");
function PP(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        offset: e.offset,
        limit: e.limit
    };
}
function JP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new BP.cE({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        offset: e.offset,
        limit: e.limit
    });
}
function MP(e, t) {
    return {
        _privacyMode: t,
        result: qP(e.result, t)
    };
}
function qP(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: NP(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: UP(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function DP(e, t, r) {
    return new BP.Q({
        result: OP(e.result, t, r)
    });
}
function OP(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: FP(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: LP(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function NP(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.CODE, "output", t),
        truncation: void 0 !== e.truncation ? hd(e.truncation, t) : void 0
    };
}
function FP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new BP.yP({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        truncation: void 0 !== e.truncation ? fd(e.truncation) : void 0
    });
}
function UP(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function LP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new BP.tB({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var $P = require("./module-43464.js");
function QP(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        content: (0, n.cZ)(e.content, n.po.CODE, "content", t)
    };
}
function jP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new $P.VA({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        content: e.content.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function GP(e, t) {
    return {
        _privacyMode: t,
        result: HP(e.result, t)
    };
}
function HP(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: VP(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: YP(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: XP(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function zP(e, t, r) {
    return new $P.hO({
        result: WP(e.result, t, r)
    });
}
function WP(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: KP(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: ZP(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: eJ(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function VP(e, t) {
    return {
        _privacyMode: t,
        output: (0, n.cZ)(e.output, n.po.CODE, "output", t)
    };
}
function KP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new $P.vu({
        output: e.output.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function YP(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function ZP(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new $P.OD({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function XP(e, t) {
    return {
        _privacyMode: t,
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function eJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new $P.Ye({
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var tJ = require("./module-88623.js");
function rJ(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        toolCallId: e.toolCallId,
        offset: e.offset,
        limit: e.limit,
        encodingHint: e.encodingHint,
        digestOnly: e.digestOnly
    };
}
function nJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new tJ.a2({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId,
        offset: e.offset,
        limit: e.limit,
        encodingHint: e.encodingHint,
        digestOnly: e.digestOnly
    });
}
function sJ(e, t) {
    return {
        _privacyMode: t,
        result: oJ(e.result, t)
    };
}
function oJ(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: cJ(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: pJ(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: hJ(e.value, t)
            };
        case "fileNotFound":
            return {
                case: "fileNotFound",
                value: gJ(e.value, t)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: wJ(e.value, t)
            };
        case "invalidFile":
            return {
                case: "invalidFile",
                value: _J(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function iJ(e, t, r) {
    return new tJ.sV({
        result: aJ(e.result, t, r)
    });
}
function aJ(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: uJ(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: mJ(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: fJ(e.value, t, r)
            };
        case "fileNotFound":
            return {
                case: "fileNotFound",
                value: yJ(e.value, t, r)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: vJ(e.value, t, r)
            };
        case "invalidFile":
            return {
                case: "invalidFile",
                value: AJ(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function cJ(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        totalLines: e.totalLines,
        fileSize: e.fileSize,
        truncated: e.truncated,
        outputBlobId: e.outputBlobId,
        rangeApplied: e.rangeApplied,
        sha256: e.sha256,
        sizeBytes: e.sizeBytes,
        output: lJ(e.output, t)
    };
}
function lJ(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "content":
            return {
                case: "content",
                value: (0, n.cZ)(e.value, n.po.CODE, "content", t)
            };
        case "data":
            return {
                case: "data",
                value: (0, n.Yz)(e.value, n.po.CODE, "data", t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function uJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new tJ.mE({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        totalLines: e.totalLines,
        fileSize: e.fileSize,
        truncated: e.truncated,
        outputBlobId: void 0 !== e.outputBlobId ? e.outputBlobId : void 0,
        rangeApplied: e.rangeApplied,
        sha256: e.sha256,
        sizeBytes: e.sizeBytes,
        output: dJ(e.output, t, r)
    });
}
function dJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "content":
            return {
                case: "content",
                value: e.value.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            };
        case "data":
            return {
                case: "data",
                value: e.value.unwrap(t, {
                    redactUnallowedFieldsInsteadOfThrowing: n,
                    enforcing: s
                })
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function pJ(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function mJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new tJ.F_({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function hJ(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function fJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new tJ.f4({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function gJ(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t)
    };
}
function yJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new tJ.Ko({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function wJ(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t)
    };
}
function vJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new tJ.lW({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function _J(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function AJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new tJ.cW({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var SJ = require("./module-82589.js");
function bJ(e, t) {
    return {
        _privacyMode: t,
        command: (0, n.cZ)(e.command, n.po.CODE, "command", t),
        workingDirectory: (0, n.cZ)(e.workingDirectory, n.po.PATH, "working_directory", t),
        parsingResult: void 0 !== e.parsingResult ? wA(e.parsingResult, t) : void 0,
        classifierResult: void 0 !== e.classifierResult ? AA(e.classifierResult, t) : void 0,
        toolCallId: e.toolCallId
    };
}
function EJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new SJ.C({
        command: e.command.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        workingDirectory: e.workingDirectory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        parsingResult: void 0 !== e.parsingResult ? vA(e.parsingResult, t, r) : void 0,
        classifierResult: void 0 !== e.classifierResult ? SA(e.classifierResult, t, r) : void 0,
        toolCallId: e.toolCallId
    });
}
function IJ(e, t) {
    return {
        _privacyMode: t,
        allowlisted: e.allowlisted
    };
}
function CJ(e, t, r) {
    return new SJ.e({
        allowlisted: e.allowlisted
    });
}
var kJ = require("./module-18846.js");
function xJ(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        parentConversationId: e.parentConversationId,
        target: void 0 !== e.target ? RJ(e.target, t) : void 0,
        conversationContext: e.conversationContext.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    role: e.role,
                    content: (0, n.cZ)(e.content, n.po.CODE, "content", t)
                };
            })(e, t))
    };
}
function TJ(e, t, r) {
    return new kJ.Th({
        toolCallId: e.toolCallId,
        parentConversationId: e.parentConversationId,
        target: void 0 !== e.target ? BJ(e.target, t, r) : void 0,
        conversationContext: e.conversationContext.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new kJ.GR({
                    role: e.role,
                    content: e.content.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    })
                });
            })(e, t, r))
    });
}
function RJ(e, t) {
    return {
        _privacyMode: t,
        action: e.action,
        arguments: e.arguments?.toJson()
    };
}
function BJ(e, t, r) {
    return new kJ.RZ({
        action: e.action,
        arguments: void 0 !== e.arguments ? el.Struct.fromJson(e.arguments) : void 0
    });
}
function PJ(e, t) {
    return {
        _privacyMode: t,
        result: JJ(e.result, t)
    };
}
function JJ(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: DJ(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: NJ(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function MJ(e, t, r) {
    return new kJ.bN({
        result: qJ(e.result, t, r)
    });
}
function qJ(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: OJ(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: FJ(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function DJ(e, t) {
    return {
        _privacyMode: t,
        decision: e.decision,
        blockReason: void 0 !== e.blockReason ? (0, n.cZ)(e.blockReason, n.po.CODE, "block_reason", t) : void 0,
        proposedAllowRule: void 0 !== e.proposedAllowRule ? (0, n.cZ)(e.proposedAllowRule, n.po.CODE, "proposed_allow_rule", t) : void 0,
        appliedRules: e.appliedRules.map((e)=>(function(e, t) {
                return {
                    _privacyMode: t,
                    effect: e.effect,
                    text: (0, n.cZ)(e.text, n.po.CODE, "text", t),
                    source: e.source
                };
            })(e, t))
    };
}
function OJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new kJ.B9({
        decision: e.decision,
        blockReason: e.blockReason?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        proposedAllowRule: e.proposedAllowRule?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        appliedRules: e.appliedRules.map((e)=>(function(e, t, r) {
                const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
                return new kJ.$g({
                    effect: e.effect,
                    text: e.text.unwrap(t, {
                        redactUnallowedFieldsInsteadOfThrowing: n,
                        enforcing: s
                    }),
                    source: e.source
                });
            })(e, t, r))
    });
}
function NJ(e, t) {
    return {
        _privacyMode: t,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function FJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new kJ.WZ({
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var UJ = require("./module-12544.js");
function LJ(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId,
        subagentType: e.subagentType,
        modelId: e.modelId,
        prompt: (0, n.cZ)(e.prompt, n.po.CODE, "prompt", t),
        readonly: e.readonly,
        resumeAgentId: e.resumeAgentId,
        runInBackground: e.runInBackground,
        continuationConfig: void 0 !== e.continuationConfig ? GJ(e.continuationConfig, t) : void 0,
        parentConversationId: e.parentConversationId,
        interrupt: e.interrupt,
        mode: e.mode,
        forkAgentId: e.forkAgentId,
        rootParentConversationId: e.rootParentConversationId,
        selectedContext: void 0 !== e.selectedContext ? _v(e.selectedContext, t) : void 0,
        directMetaParentChildSubagent: e.directMetaParentChildSubagent,
        environment: e.environment,
        cloudBaseBranch: e.cloudBaseBranch,
        modelParameters: e.modelParameters.map((e)=>aw(e, t)),
        credentials: $J(e.credentials, t)
    };
}
function $J(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "apiKeyCredentials":
            return {
                case: "apiKeyCredentials",
                value: tw(e.value, t)
            };
        case "azureCredentials":
            return {
                case: "azureCredentials",
                value: nw(e.value, t)
            };
        case "bedrockCredentials":
            return {
                case: "bedrockCredentials",
                value: ow(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function QJ(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new UJ.Pw({
        toolCallId: e.toolCallId,
        subagentType: e.subagentType,
        modelId: e.modelId,
        prompt: e.prompt.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        readonly: e.readonly,
        resumeAgentId: e.resumeAgentId,
        runInBackground: e.runInBackground,
        continuationConfig: void 0 !== e.continuationConfig ? HJ(e.continuationConfig, t, r) : void 0,
        parentConversationId: e.parentConversationId,
        interrupt: e.interrupt,
        mode: e.mode,
        forkAgentId: e.forkAgentId,
        rootParentConversationId: e.rootParentConversationId,
        selectedContext: void 0 !== e.selectedContext ? Av(e.selectedContext, t, r) : void 0,
        directMetaParentChildSubagent: e.directMetaParentChildSubagent,
        environment: e.environment,
        cloudBaseBranch: e.cloudBaseBranch,
        modelParameters: e.modelParameters.map((e)=>cw(e, t, r)),
        credentials: jJ(e.credentials, t, r)
    });
}
function jJ(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "apiKeyCredentials":
            return {
                case: "apiKeyCredentials",
                value: rw(e.value, t, r)
            };
        case "azureCredentials":
            return {
                case: "azureCredentials",
                value: sw(e.value, t, r)
            };
        case "bedrockCredentials":
            return {
                case: "bedrockCredentials",
                value: iw(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function GJ(e, t) {
    return {
        _privacyMode: t,
        idleThreshold: e.idleThreshold,
        maxLoops: e.maxLoops,
        nudgeMessage: e.nudgeMessage,
        escapeMessageTemplate: e.escapeMessageTemplate,
        collectBackgroundChildren: e.collectBackgroundChildren,
        childrenCompletedMessageTemplate: e.childrenCompletedMessageTemplate,
        continuationRoundDelayMs: e.continuationRoundDelayMs
    };
}
function HJ(e, t, r) {
    return new UJ.N9({
        idleThreshold: e.idleThreshold,
        maxLoops: e.maxLoops,
        nudgeMessage: e.nudgeMessage,
        escapeMessageTemplate: e.escapeMessageTemplate,
        collectBackgroundChildren: e.collectBackgroundChildren,
        childrenCompletedMessageTemplate: e.childrenCompletedMessageTemplate,
        continuationRoundDelayMs: e.continuationRoundDelayMs
    });
}
function zJ(e, t) {
    return {
        _privacyMode: t,
        result: WJ(e.result, t)
    };
}
function WJ(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: dM(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: mM(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function VJ(e, t, r) {
    return new UJ.vS({
        result: KJ(e.result, t, r)
    });
}
function KJ(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: pM(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: hM(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function YJ(e, t) {
    return {
        _privacyMode: t,
        agentId: e.agentId,
        timeoutMs: e.timeoutMs
    };
}
function ZJ(e, t, r) {
    return new UJ.TN({
        agentId: e.agentId,
        timeoutMs: e.timeoutMs
    });
}
function XJ(e, t) {
    return {
        _privacyMode: t,
        result: eM(e.result, t)
    };
}
function eM(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "complete":
            return {
                case: "complete",
                value: nM(e.value, t)
            };
        case "stillRunning":
            return {
                case: "stillRunning",
                value: oM(e.value, t)
            };
        case "notFound":
            return {
                case: "notFound",
                value: aM(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: lM(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function tM(e, t, r) {
    return new UJ.zJ({
        result: rM(e.result, t, r)
    });
}
function rM(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "complete":
            return {
                case: "complete",
                value: sM(e.value, t, r)
            };
        case "stillRunning":
            return {
                case: "stillRunning",
                value: iM(e.value, t, r)
            };
        case "notFound":
            return {
                case: "notFound",
                value: cM(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: uM(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function nM(e, t) {
    return {
        _privacyMode: t,
        agentId: e.agentId,
        transcriptPath: void 0 !== e.transcriptPath ? (0, n.cZ)(e.transcriptPath, n.po.PATH, "transcript_path", t) : void 0,
        toolCallCount: e.toolCallCount,
        finalMessage: void 0 !== e.finalMessage ? (0, n.cZ)(e.finalMessage, n.po.CODE, "final_message", t) : void 0
    };
}
function sM(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new UJ.bE({
        agentId: e.agentId,
        transcriptPath: e.transcriptPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallCount: e.toolCallCount,
        finalMessage: e.finalMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function oM(e, t) {
    return {
        _privacyMode: t,
        agentId: e.agentId,
        transcriptPath: void 0 !== e.transcriptPath ? (0, n.cZ)(e.transcriptPath, n.po.PATH, "transcript_path", t) : void 0
    };
}
function iM(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new UJ.L5({
        agentId: e.agentId,
        transcriptPath: e.transcriptPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function aM(e, t) {
    return {
        _privacyMode: t,
        agentId: e.agentId
    };
}
function cM(e, t, r) {
    return new UJ.Hq({
        agentId: e.agentId
    });
}
function lM(e, t) {
    return {
        _privacyMode: t,
        agentId: e.agentId,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function uM(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new UJ.Y({
        agentId: e.agentId,
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function dM(e, t) {
    return {
        _privacyMode: t,
        agentId: e.agentId,
        finalMessage: void 0 !== e.finalMessage ? (0, n.cZ)(e.finalMessage, n.po.CODE, "final_message", t) : void 0,
        toolCallCount: e.toolCallCount,
        backgroundReason: e.backgroundReason,
        transcriptPath: void 0 !== e.transcriptPath ? (0, n.cZ)(e.transcriptPath, n.po.PATH, "transcript_path", t) : void 0
    };
}
function pM(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new UJ.HJ({
        agentId: e.agentId,
        finalMessage: e.finalMessage?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallCount: e.toolCallCount,
        backgroundReason: e.backgroundReason,
        transcriptPath: e.transcriptPath?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function mM(e, t) {
    return {
        _privacyMode: t,
        agentId: e.agentId,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function hM(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new UJ.od({
        agentId: e.agentId,
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function fM(e, t) {
    return {
        _privacyMode: t,
        toolCallId: e.toolCallId
    };
}
function gM(e, t, r) {
    return new UJ.S3({
        toolCallId: e.toolCallId
    });
}
function yM(e, t) {
    return {
        _privacyMode: t,
        status: e.status
    };
}
var wM = require("./module-83508.js");
function vM(e, t) {
    return {
        _privacyMode: t,
        url: (0, n.cZ)(e.url, n.po.PATH, "url", t),
        toolCallId: e.toolCallId
    };
}
function _M(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new wM.K({
        url: e.url.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId
    });
}
function AM(e, t) {
    return {
        _privacyMode: t,
        allowlisted: e.allowlisted
    };
}
function SM(e, t, r) {
    return new wM.M({
        allowlisted: e.allowlisted
    });
}
var bM = require("./module-19950.js");
function EM(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        fileText: (0, n.cZ)(e.fileText, n.po.CODE, "file_text", t),
        toolCallId: e.toolCallId,
        returnFileContentAfterWrite: e.returnFileContentAfterWrite,
        fileBytes: (0, n.Yz)(e.fileBytes, n.po.CODE, "file_bytes", t),
        encodingHint: e.encodingHint
    };
}
function IM(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bM.hY({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        fileText: e.fileText.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        toolCallId: e.toolCallId,
        returnFileContentAfterWrite: e.returnFileContentAfterWrite,
        fileBytes: e.fileBytes.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        encodingHint: e.encodingHint
    });
}
function CM(e, t) {
    return {
        _privacyMode: t,
        result: kM(e.result, t)
    };
}
function kM(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: RM(e.value, t)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: PM(e.value, t)
            };
        case "noSpace":
            return {
                case: "noSpace",
                value: MM(e.value, t)
            };
        case "error":
            return {
                case: "error",
                value: DM(e.value, t)
            };
        case "rejected":
            return {
                case: "rejected",
                value: NM(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function xM(e, t, r) {
    return new bM.v3({
        result: TM(e.result, t, r)
    });
}
function TM(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "success":
            return {
                case: "success",
                value: BM(e.value, t, r)
            };
        case "permissionDenied":
            return {
                case: "permissionDenied",
                value: JM(e.value, t, r)
            };
        case "noSpace":
            return {
                case: "noSpace",
                value: qM(e.value, t, r)
            };
        case "error":
            return {
                case: "error",
                value: OM(e.value, t, r)
            };
        case "rejected":
            return {
                case: "rejected",
                value: FM(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function RM(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        linesCreated: e.linesCreated,
        fileSize: e.fileSize,
        fileContentAfterWrite: void 0 !== e.fileContentAfterWrite ? (0, n.cZ)(e.fileContentAfterWrite, n.po.CODE, "file_content_after_write", t) : void 0
    };
}
function BM(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bM.j6({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        linesCreated: e.linesCreated,
        fileSize: e.fileSize,
        fileContentAfterWrite: e.fileContentAfterWrite?.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function PM(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        directory: (0, n.cZ)(e.directory, n.po.PATH, "directory", t),
        operation: e.operation,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        isReadonly: e.isReadonly
    };
}
function JM(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bM.U7({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        directory: e.directory.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        operation: e.operation,
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        isReadonly: e.isReadonly
    });
}
function MM(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t)
    };
}
function qM(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bM.bM({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function DM(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t)
    };
}
function OM(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bM.QM({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        error: e.error.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function NM(e, t) {
    return {
        _privacyMode: t,
        path: (0, n.cZ)(e.path, n.po.PATH, "path", t),
        reason: (0, n.cZ)(e.reason, n.po.CODE, "reason", t)
    };
}
function FM(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new bM.en({
        path: e.path.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        }),
        reason: e.reason.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
var UM = require("./module-55094.js"), LM = require("./module-88107.js");
function $M(e, t) {
    return {
        _privacyMode: t,
        providerIdentifier: e.providerIdentifier,
        toolName: e.toolName,
        toolCallId: e.toolCallId,
        annotationsJson: e.annotationsJson
    };
}
function QM(e, t, r) {
    return new LM.c({
        providerIdentifier: e.providerIdentifier,
        toolName: e.toolName,
        toolCallId: e.toolCallId,
        annotationsJson: e.annotationsJson
    });
}
function jM(e, t) {
    return {
        _privacyMode: t,
        allowlisted: e.allowlisted
    };
}
function GM(e, t, r) {
    return new LM.M({
        allowlisted: e.allowlisted
    });
}
function HM(e, t) {
    return {
        _privacyMode: t,
        id: e.id
    };
}
function zM(e, t) {
    return {
        _privacyMode: t,
        id: e.id,
        error: (0, n.cZ)(e.error, n.po.CODE, "error", t),
        stackTrace: void 0 !== e.stackTrace ? (0, n.cZ)(e.stackTrace, n.po.CODE, "stack_trace", t) : void 0,
        errorCode: e.errorCode
    };
}
function WM(e, t) {
    return {
        _privacyMode: t,
        id: e.id
    };
}
function VM(e, t) {
    return {
        _privacyMode: t,
        message: KM(e.message, t)
    };
}
function KM(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "streamClose":
            return {
                case: "streamClose",
                value: HM(e.value, t)
            };
        case "throw":
            return {
                case: "throw",
                value: zM(e.value, t)
            };
        case "heartbeat":
            return {
                case: "heartbeat",
                value: WM(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function YM(e, t) {
    return {
        _privacyMode: t,
        id: e.id
    };
}
function ZM(e, t) {
    return {
        _privacyMode: t,
        message: XM(e.message, t)
    };
}
function XM(e, t) {
    return e && void 0 !== e.case && "abort" === e.case ? {
        case: "abort",
        value: YM(e.value, t)
    } : {
        case: void 0,
        value: void 0
    };
}
function eq(e, t, r) {
    return new UM.Nv({
        message: tq(e.message, t, r)
    });
}
function tq(e, t, r) {
    return e && void 0 !== e.case && "abort" === e.case ? {
        case: "abort",
        value: (n = e.value, new UM.dX({
            id: n.id
        }))
    } : {
        case: void 0,
        value: void 0
    };
    var n;
}
function rq(e, t) {
    return {
        _privacyMode: t,
        traceId: e.traceId,
        spanId: e.spanId,
        traceFlags: e.traceFlags,
        traceState: e.traceState
    };
}
function nq(e, t, r) {
    return new UM.Kg({
        traceId: e.traceId,
        spanId: e.spanId,
        traceFlags: e.traceFlags,
        traceState: e.traceState
    });
}
function sq(e, t) {
    return {
        _privacyMode: t,
        id: e.id,
        execId: e.execId,
        machineId: e.machineId,
        spanContext: void 0 !== e.spanContext ? rq(e.spanContext, t) : void 0,
        acceptHookAdditionalContexts: e.acceptHookAdditionalContexts,
        message: oq(e.message, t)
    };
}
function oq(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "shellArgs":
            return {
                case: "shellArgs",
                value: BA(e.value, t)
            };
        case "writeArgs":
            return {
                case: "writeArgs",
                value: EM(e.value, t)
            };
        case "deleteArgs":
            return {
                case: "deleteArgs",
                value: $s(e.value, t)
            };
        case "grepArgs":
            return {
                case: "grepArgs",
                value: sc(e.value, t)
            };
        case "readArgs":
            return {
                case: "readArgs",
                value: rJ(e.value, t)
            };
        case "redactedReadArgs":
            return {
                case: "redactedReadArgs",
                value: rJ(e.value, t)
            };
        case "lsArgs":
            return {
                case: "lsArgs",
                value: Bc(e.value, t)
            };
        case "diagnosticsArgs":
            return {
                case: "diagnosticsArgs",
                value: $m(e.value, t)
            };
        case "requestContextArgs":
            return {
                case: "requestContextArgs",
                value: vy(e.value, t)
            };
        case "mcpArgs":
            return {
                case: "mcpArgs",
                value: Ol(e.value, t)
            };
        case "shellStreamArgs":
            return {
                case: "shellStreamArgs",
                value: BA(e.value, t)
            };
        case "backgroundShellSpawnArgs":
            return {
                case: "backgroundShellSpawnArgs",
                value: IE(e.value, t)
            };
        case "listMcpResourcesExecArgs":
            return {
                case: "listMcpResourcesExecArgs",
                value: Eu(e.value, t)
            };
        case "readMcpResourceExecArgs":
            return {
                case: "readMcpResourceExecArgs",
                value: Du(e.value, t)
            };
        case "mcpStateExecArgs":
            return {
                case: "mcpStateExecArgs",
                value: mu(e.value, t)
            };
        case "fetchArgs":
            return {
                case: "fetchArgs",
                value: ci(e.value, t)
            };
        case "recordScreenArgs":
            return {
                case: "recordScreenArgs",
                value: hf(e.value, t)
            };
        case "computerUseArgs":
            return {
                case: "computerUseArgs",
                value: xt(e.value, t)
            };
        case "writeShellStdinArgs":
            return {
                case: "writeShellStdinArgs",
                value: qE(e.value, t)
            };
        case "executeHookArgs":
            return {
                case: "executeHookArgs",
                value: pq(e.value, t)
            };
        case "subagentArgs":
            return {
                case: "subagentArgs",
                value: LJ(e.value, t)
            };
        case "forceBackgroundShellArgs":
            return {
                case: "forceBackgroundShellArgs",
                value: IA(e.value, t)
            };
        case "forceBackgroundSubagentArgs":
            return {
                case: "forceBackgroundSubagentArgs",
                value: fM(e.value, t)
            };
        case "subagentAwaitArgs":
            return {
                case: "subagentAwaitArgs",
                value: YJ(e.value, t)
            };
        case "smartModeClassifierArgs":
            return {
                case: "smartModeClassifierArgs",
                value: xJ(e.value, t)
            };
        case "canvasDiagnosticsArgs":
            return {
                case: "canvasDiagnosticsArgs",
                value: _R(e.value, t)
            };
        case "shellAllowlistPrecheckArgs":
            return {
                case: "shellAllowlistPrecheckArgs",
                value: bJ(e.value, t)
            };
        case "mcpAllowlistPrecheckArgs":
            return {
                case: "mcpAllowlistPrecheckArgs",
                value: $M(e.value, t)
            };
        case "webFetchAllowlistPrecheckArgs":
            return {
                case: "webFetchAllowlistPrecheckArgs",
                value: vM(e.value, t)
            };
        case "gitDiffRequest":
            return {
                case: "gitDiffRequest",
                value: Qv(e.value, t)
            };
        case "piReadArgs":
            return {
                case: "piReadArgs",
                value: PP(e.value, t)
            };
        case "piBashArgs":
            return {
                case: "piBashArgs",
                value: TB(e.value, t)
            };
        case "piEditArgs":
            return {
                case: "piEditArgs",
                value: UB(e.value, t)
            };
        case "piWriteArgs":
            return {
                case: "piWriteArgs",
                value: QP(e.value, t)
            };
        case "piGrepArgs":
            return {
                case: "piGrepArgs",
                value: uP(e.value, t)
            };
        case "piFindArgs":
            return {
                case: "piFindArgs",
                value: XB(e.value, t)
            };
        case "piLsArgs":
            return {
                case: "piLsArgs",
                value: AP(e.value, t)
            };
        case "miniSweAgentBashArgs":
            return {
                case: "miniSweAgentBashArgs",
                value: BA(e.value, t)
            };
        case "conversationSearchArgs":
            return {
                case: "conversationSearchArgs",
                value: uw(e.value, t)
            };
        case "agentStoreConflictArgs":
            return {
                case: "agentStoreConflictArgs",
                value: JR(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function iq(e, t, r) {
    return new UM.Ye({
        id: e.id,
        execId: e.execId,
        machineId: e.machineId,
        spanContext: void 0 !== e.spanContext ? nq(e.spanContext) : void 0,
        acceptHookAdditionalContexts: e.acceptHookAdditionalContexts,
        message: aq(e.message, t, r)
    });
}
function aq(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "shellArgs":
            return {
                case: "shellArgs",
                value: PA(e.value, t, r)
            };
        case "writeArgs":
            return {
                case: "writeArgs",
                value: IM(e.value, t, r)
            };
        case "deleteArgs":
            return {
                case: "deleteArgs",
                value: Qs(e.value, t, r)
            };
        case "grepArgs":
            return {
                case: "grepArgs",
                value: oc(e.value, t, r)
            };
        case "readArgs":
            return {
                case: "readArgs",
                value: nJ(e.value, t, r)
            };
        case "redactedReadArgs":
            return {
                case: "redactedReadArgs",
                value: nJ(e.value, t, r)
            };
        case "lsArgs":
            return {
                case: "lsArgs",
                value: Pc(e.value, t, r)
            };
        case "diagnosticsArgs":
            return {
                case: "diagnosticsArgs",
                value: Qm(e.value, t, r)
            };
        case "requestContextArgs":
            return {
                case: "requestContextArgs",
                value: _y(e.value, t, r)
            };
        case "mcpArgs":
            return {
                case: "mcpArgs",
                value: Nl(e.value, t, r)
            };
        case "shellStreamArgs":
            return {
                case: "shellStreamArgs",
                value: PA(e.value, t, r)
            };
        case "backgroundShellSpawnArgs":
            return {
                case: "backgroundShellSpawnArgs",
                value: CE(e.value, t, r)
            };
        case "listMcpResourcesExecArgs":
            return {
                case: "listMcpResourcesExecArgs",
                value: Iu(e.value)
            };
        case "readMcpResourceExecArgs":
            return {
                case: "readMcpResourceExecArgs",
                value: Ou(e.value, t, r)
            };
        case "mcpStateExecArgs":
            return {
                case: "mcpStateExecArgs",
                value: (n = e.value, new Dl.Km({
                    serverIdentifiers: n.serverIdentifiers,
                    kickOnly: n.kickOnly,
                    refreshPolicy: n.refreshPolicy
                }))
            };
        case "fetchArgs":
            return {
                case: "fetchArgs",
                value: li(e.value)
            };
        case "recordScreenArgs":
            return {
                case: "recordScreenArgs",
                value: ff(e.value, t, r)
            };
        case "computerUseArgs":
            return {
                case: "computerUseArgs",
                value: Tt(e.value, t, r)
            };
        case "writeShellStdinArgs":
            return {
                case: "writeShellStdinArgs",
                value: DE(e.value, t, r)
            };
        case "executeHookArgs":
            return {
                case: "executeHookArgs",
                value: mq(e.value, t, r)
            };
        case "subagentArgs":
            return {
                case: "subagentArgs",
                value: QJ(e.value, t, r)
            };
        case "forceBackgroundShellArgs":
            return {
                case: "forceBackgroundShellArgs",
                value: CA(e.value)
            };
        case "forceBackgroundSubagentArgs":
            return {
                case: "forceBackgroundSubagentArgs",
                value: gM(e.value)
            };
        case "subagentAwaitArgs":
            return {
                case: "subagentAwaitArgs",
                value: ZJ(e.value)
            };
        case "smartModeClassifierArgs":
            return {
                case: "smartModeClassifierArgs",
                value: TJ(e.value, t, r)
            };
        case "canvasDiagnosticsArgs":
            return {
                case: "canvasDiagnosticsArgs",
                value: AR(e.value, t, r)
            };
        case "shellAllowlistPrecheckArgs":
            return {
                case: "shellAllowlistPrecheckArgs",
                value: EJ(e.value, t, r)
            };
        case "mcpAllowlistPrecheckArgs":
            return {
                case: "mcpAllowlistPrecheckArgs",
                value: QM(e.value)
            };
        case "webFetchAllowlistPrecheckArgs":
            return {
                case: "webFetchAllowlistPrecheckArgs",
                value: _M(e.value, t, r)
            };
        case "gitDiffRequest":
            return {
                case: "gitDiffRequest",
                value: jv(e.value, t, r)
            };
        case "piReadArgs":
            return {
                case: "piReadArgs",
                value: JP(e.value, t, r)
            };
        case "piBashArgs":
            return {
                case: "piBashArgs",
                value: RB(e.value, t, r)
            };
        case "piEditArgs":
            return {
                case: "piEditArgs",
                value: LB(e.value, t, r)
            };
        case "piWriteArgs":
            return {
                case: "piWriteArgs",
                value: jP(e.value, t, r)
            };
        case "piGrepArgs":
            return {
                case: "piGrepArgs",
                value: dP(e.value, t, r)
            };
        case "piFindArgs":
            return {
                case: "piFindArgs",
                value: eP(e.value, t, r)
            };
        case "piLsArgs":
            return {
                case: "piLsArgs",
                value: SP(e.value, t, r)
            };
        case "miniSweAgentBashArgs":
            return {
                case: "miniSweAgentBashArgs",
                value: PA(e.value, t, r)
            };
        case "conversationSearchArgs":
            return {
                case: "conversationSearchArgs",
                value: dw(e.value, t, r)
            };
        case "agentStoreConflictArgs":
            return {
                case: "agentStoreConflictArgs",
                value: MR(e.value)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
    var n;
}
function cq(e, t) {
    return {
        _privacyMode: t,
        id: e.id,
        execId: e.execId,
        localExecutionTimeMs: e.localExecutionTimeMs,
        hookAdditionalContexts: e.hookAdditionalContexts.map((e)=>xc(e, t)),
        message: lq(e.message, t)
    };
}
function lq(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "shellResult":
            return {
                case: "shellResult",
                value: MA(e.value, t)
            };
        case "writeResult":
            return {
                case: "writeResult",
                value: CM(e.value, t)
            };
        case "deleteResult":
            return {
                case: "deleteResult",
                value: js(e.value, t)
            };
        case "grepResult":
            return {
                case: "grepResult",
                value: ic(e.value, t)
            };
        case "readResult":
            return {
                case: "readResult",
                value: sJ(e.value, t)
            };
        case "redactedReadResult":
            return {
                case: "redactedReadResult",
                value: sJ(e.value, t)
            };
        case "lsResult":
            return {
                case: "lsResult",
                value: Jc(e.value, t)
            };
        case "diagnosticsResult":
            return {
                case: "diagnosticsResult",
                value: jm(e.value, t)
            };
        case "requestContextResult":
            return {
                case: "requestContextResult",
                value: Ay(e.value, t)
            };
        case "mcpResult":
            return {
                case: "mcpResult",
                value: Fl(e.value, t)
            };
        case "shellStream":
            return {
                case: "shellStream",
                value: sS(e.value, t)
            };
        case "backgroundShellSpawnResult":
            return {
                case: "backgroundShellSpawnResult",
                value: kE(e.value, t)
            };
        case "listMcpResourcesExecResult":
            return {
                case: "listMcpResourcesExecResult",
                value: Cu(e.value, t)
            };
        case "readMcpResourceExecResult":
            return {
                case: "readMcpResourceExecResult",
                value: Nu(e.value, t)
            };
        case "mcpStateExecResult":
            return {
                case: "mcpStateExecResult",
                value: hu(e.value, t)
            };
        case "fetchResult":
            return {
                case: "fetchResult",
                value: ui(e.value, t)
            };
        case "recordScreenResult":
            return {
                case: "recordScreenResult",
                value: gf(e.value, t)
            };
        case "computerUseResult":
            return {
                case: "computerUseResult",
                value: er(e.value, t)
            };
        case "writeShellStdinResult":
            return {
                case: "writeShellStdinResult",
                value: OE(e.value, t)
            };
        case "executeHookResult":
            return {
                case: "executeHookResult",
                value: hq(e.value, t)
            };
        case "subagentResult":
            return {
                case: "subagentResult",
                value: zJ(e.value, t)
            };
        case "forceBackgroundShellResult":
            return {
                case: "forceBackgroundShellResult",
                value: kA(e.value, t)
            };
        case "forceBackgroundSubagentResult":
            return {
                case: "forceBackgroundSubagentResult",
                value: yM(e.value, t)
            };
        case "subagentAwaitResult":
            return {
                case: "subagentAwaitResult",
                value: XJ(e.value, t)
            };
        case "smartModeClassifierResult":
            return {
                case: "smartModeClassifierResult",
                value: PJ(e.value, t)
            };
        case "canvasDiagnosticsResult":
            return {
                case: "canvasDiagnosticsResult",
                value: SR(e.value, t)
            };
        case "shellAllowlistPrecheckResult":
            return {
                case: "shellAllowlistPrecheckResult",
                value: IJ(e.value, t)
            };
        case "mcpAllowlistPrecheckResult":
            return {
                case: "mcpAllowlistPrecheckResult",
                value: jM(e.value, t)
            };
        case "webFetchAllowlistPrecheckResult":
            return {
                case: "webFetchAllowlistPrecheckResult",
                value: AM(e.value, t)
            };
        case "gitDiffResponse":
            return {
                case: "gitDiffResponse",
                value: Gv(e.value, t)
            };
        case "piReadResult":
            return {
                case: "piReadResult",
                value: MP(e.value, t)
            };
        case "piBashResult":
            return {
                case: "piBashResult",
                value: BB(e.value, t)
            };
        case "piEditResult":
            return {
                case: "piEditResult",
                value: $B(e.value, t)
            };
        case "piWriteResult":
            return {
                case: "piWriteResult",
                value: GP(e.value, t)
            };
        case "piGrepResult":
            return {
                case: "piGrepResult",
                value: pP(e.value, t)
            };
        case "piFindResult":
            return {
                case: "piFindResult",
                value: tP(e.value, t)
            };
        case "piLsResult":
            return {
                case: "piLsResult",
                value: bP(e.value, t)
            };
        case "conversationSearchResult":
            return {
                case: "conversationSearchResult",
                value: pw(e.value, t)
            };
        case "agentStoreConflictResult":
            return {
                case: "agentStoreConflictResult",
                value: qR(e.value, t)
            };
        case "miniSweAgentBashResult":
            return {
                case: "miniSweAgentBashResult",
                value: MA(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function uq(e, t, r) {
    return new UM.yT({
        id: e.id,
        execId: e.execId,
        localExecutionTimeMs: e.localExecutionTimeMs,
        hookAdditionalContexts: e.hookAdditionalContexts.map((e)=>Tc(e, t, r)),
        message: dq(e.message, t, r)
    });
}
function dq(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "shellResult":
            return {
                case: "shellResult",
                value: DA(e.value, t, r)
            };
        case "writeResult":
            return {
                case: "writeResult",
                value: xM(e.value, t, r)
            };
        case "deleteResult":
            return {
                case: "deleteResult",
                value: Hs(e.value, t, r)
            };
        case "grepResult":
            return {
                case: "grepResult",
                value: cc(e.value, t, r)
            };
        case "readResult":
            return {
                case: "readResult",
                value: iJ(e.value, t, r)
            };
        case "redactedReadResult":
            return {
                case: "redactedReadResult",
                value: iJ(e.value, t, r)
            };
        case "lsResult":
            return {
                case: "lsResult",
                value: qc(e.value, t, r)
            };
        case "diagnosticsResult":
            return {
                case: "diagnosticsResult",
                value: Hm(e.value, t, r)
            };
        case "requestContextResult":
            return {
                case: "requestContextResult",
                value: by(e.value, t, r)
            };
        case "mcpResult":
            return {
                case: "mcpResult",
                value: Ll(e.value, t, r)
            };
        case "shellStream":
            return {
                case: "shellStream",
                value: iS(e.value, t, r)
            };
        case "backgroundShellSpawnResult":
            return {
                case: "backgroundShellSpawnResult",
                value: TE(e.value, t, r)
            };
        case "listMcpResourcesExecResult":
            return {
                case: "listMcpResourcesExecResult",
                value: xu(e.value, t, r)
            };
        case "readMcpResourceExecResult":
            return {
                case: "readMcpResourceExecResult",
                value: Uu(e.value, t, r)
            };
        case "mcpStateExecResult":
            return {
                case: "mcpStateExecResult",
                value: gu(e.value, t, r)
            };
        case "fetchResult":
            return {
                case: "fetchResult",
                value: pi(e.value, t, r)
            };
        case "recordScreenResult":
            return {
                case: "recordScreenResult",
                value: wf(e.value, t, r)
            };
        case "computerUseResult":
            return {
                case: "computerUseResult",
                value: rr(e.value, t, r)
            };
        case "writeShellStdinResult":
            return {
                case: "writeShellStdinResult",
                value: FE(e.value, t, r)
            };
        case "executeHookResult":
            return {
                case: "executeHookResult",
                value: fq(e.value, t, r)
            };
        case "subagentResult":
            return {
                case: "subagentResult",
                value: VJ(e.value, t, r)
            };
        case "forceBackgroundShellResult":
            return {
                case: "forceBackgroundShellResult",
                value: xA(e.value, t, r)
            };
        case "forceBackgroundSubagentResult":
            return {
                case: "forceBackgroundSubagentResult",
                value: (n = e.value, new UJ.a3({
                    status: n.status
                }))
            };
        case "subagentAwaitResult":
            return {
                case: "subagentAwaitResult",
                value: tM(e.value, t, r)
            };
        case "smartModeClassifierResult":
            return {
                case: "smartModeClassifierResult",
                value: MJ(e.value, t, r)
            };
        case "canvasDiagnosticsResult":
            return {
                case: "canvasDiagnosticsResult",
                value: ER(e.value, t, r)
            };
        case "shellAllowlistPrecheckResult":
            return {
                case: "shellAllowlistPrecheckResult",
                value: CJ(e.value)
            };
        case "mcpAllowlistPrecheckResult":
            return {
                case: "mcpAllowlistPrecheckResult",
                value: GM(e.value)
            };
        case "webFetchAllowlistPrecheckResult":
            return {
                case: "webFetchAllowlistPrecheckResult",
                value: SM(e.value)
            };
        case "gitDiffResponse":
            return {
                case: "gitDiffResponse",
                value: Hv(e.value, t, r)
            };
        case "piReadResult":
            return {
                case: "piReadResult",
                value: DP(e.value, t, r)
            };
        case "piBashResult":
            return {
                case: "piBashResult",
                value: JB(e.value, t, r)
            };
        case "piEditResult":
            return {
                case: "piEditResult",
                value: jB(e.value, t, r)
            };
        case "piWriteResult":
            return {
                case: "piWriteResult",
                value: zP(e.value, t, r)
            };
        case "piGrepResult":
            return {
                case: "piGrepResult",
                value: hP(e.value, t, r)
            };
        case "piFindResult":
            return {
                case: "piFindResult",
                value: nP(e.value, t, r)
            };
        case "piLsResult":
            return {
                case: "piLsResult",
                value: IP(e.value, t, r)
            };
        case "conversationSearchResult":
            return {
                case: "conversationSearchResult",
                value: hw(e.value, t, r)
            };
        case "agentStoreConflictResult":
            return {
                case: "agentStoreConflictResult",
                value: OR(e.value, t, r)
            };
        case "miniSweAgentBashResult":
            return {
                case: "miniSweAgentBashResult",
                value: DA(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
    var n;
}
function pq(e, t) {
    return {
        _privacyMode: t,
        request: void 0 !== e.request ? gq(e.request, t) : void 0
    };
}
function mq(e, t, r) {
    return new UM.Mq({
        request: void 0 !== e.request ? wq(e.request, t, r) : void 0
    });
}
function hq(e, t) {
    return {
        _privacyMode: t,
        response: void 0 !== e.response ? _q(e.response, t) : void 0
    };
}
function fq(e, t, r) {
    return new UM.S1({
        response: void 0 !== e.response ? Sq(e.response, t, r) : void 0
    });
}
function gq(e, t) {
    return {
        _privacyMode: t,
        request: yq(e.request, t)
    };
}
function yq(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "preCompact":
            return {
                case: "preCompact",
                value: jR(e.value, t)
            };
        case "subagentStart":
            return {
                case: "subagentStart",
                value: WR(e.value, t)
            };
        case "subagentStop":
            return {
                case: "subagentStop",
                value: ZR(e.value, t)
            };
        case "preToolUse":
            return {
                case: "preToolUse",
                value: gB(e.value, t)
            };
        case "postToolUse":
            return {
                case: "postToolUse",
                value: _B(e.value, t)
            };
        case "postToolUseFailure":
            return {
                case: "postToolUseFailure",
                value: EB(e.value, t)
            };
        case "beforeSubmitPrompt":
            return {
                case: "beforeSubmitPrompt",
                value: rB(e.value, t)
            };
        case "afterAgentResponse":
            return {
                case: "afterAgentResponse",
                value: iB(e.value, t)
            };
        case "afterAgentThought":
            return {
                case: "afterAgentThought",
                value: lB(e.value, t)
            };
        case "stop":
            return {
                case: "stop",
                value: pB(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function wq(e, t, r) {
    return new UM.Kw({
        request: vq(e.request, t, r)
    });
}
function vq(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "preCompact":
            return {
                case: "preCompact",
                value: GR(e.value, t, r)
            };
        case "subagentStart":
            return {
                case: "subagentStart",
                value: VR(e.value, t, r)
            };
        case "subagentStop":
            return {
                case: "subagentStop",
                value: XR(e.value, t, r)
            };
        case "preToolUse":
            return {
                case: "preToolUse",
                value: yB(e.value, t, r)
            };
        case "postToolUse":
            return {
                case: "postToolUse",
                value: AB(e.value, t, r)
            };
        case "postToolUseFailure":
            return {
                case: "postToolUseFailure",
                value: IB(e.value, t, r)
            };
        case "beforeSubmitPrompt":
            return {
                case: "beforeSubmitPrompt",
                value: nB(e.value, t, r)
            };
        case "afterAgentResponse":
            return {
                case: "afterAgentResponse",
                value: aB(e.value, t, r)
            };
        case "afterAgentThought":
            return {
                case: "afterAgentThought",
                value: uB(e.value, t, r)
            };
        case "stop":
            return {
                case: "stop",
                value: mB(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function _q(e, t) {
    return {
        _privacyMode: t,
        response: Aq(e.response, t)
    };
}
function Aq(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "preCompact":
            return {
                case: "preCompact",
                value: HR(e.value, t)
            };
        case "subagentStart":
            return {
                case: "subagentStart",
                value: KR(e.value, t)
            };
        case "subagentStop":
            return {
                case: "subagentStop",
                value: eB(e.value, t)
            };
        case "preToolUse":
            return {
                case: "preToolUse",
                value: wB(e.value, t)
            };
        case "postToolUse":
            return {
                case: "postToolUse",
                value: SB(e.value, t)
            };
        case "postToolUseFailure":
            return {
                case: "postToolUseFailure",
                value: CB(e.value, t)
            };
        case "beforeSubmitPrompt":
            return {
                case: "beforeSubmitPrompt",
                value: sB(e.value, t)
            };
        case "afterAgentResponse":
            return {
                case: "afterAgentResponse",
                value: cB(e.value, t)
            };
        case "afterAgentThought":
            return {
                case: "afterAgentThought",
                value: dB(e.value, t)
            };
        case "stop":
            return {
                case: "stop",
                value: hB(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Sq(e, t, r) {
    return new UM.w5({
        response: bq(e.response, t, r)
    });
}
function bq(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "preCompact":
            return {
                case: "preCompact",
                value: zR(e.value, t, r)
            };
        case "subagentStart":
            return {
                case: "subagentStart",
                value: YR(e.value, t, r)
            };
        case "subagentStop":
            return {
                case: "subagentStop",
                value: tB(e.value, t, r)
            };
        case "preToolUse":
            return {
                case: "preToolUse",
                value: vB(e.value, t, r)
            };
        case "postToolUse":
            return {
                case: "postToolUse",
                value: bB(e.value, t, r)
            };
        case "postToolUseFailure":
            return {
                case: "postToolUseFailure",
                value: kB(e.value, t, r)
            };
        case "beforeSubmitPrompt":
            return {
                case: "beforeSubmitPrompt",
                value: oB(e.value, t, r)
            };
        case "afterAgentResponse":
            return {
                case: "afterAgentResponse",
                value: (e.value, new QR.FW({}))
            };
        case "afterAgentThought":
            return {
                case: "afterAgentThought",
                value: (e.value, new QR.H({}))
            };
        case "stop":
            return {
                case: "stop",
                value: fB(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
var Eq = require("./module-54386.js");
function Iq(e, t) {
    return {
        _privacyMode: t,
        message: (0, n.cZ)(e.message, n.po.CODE, "message", t)
    };
}
function Cq(e, t) {
    return {
        _privacyMode: t,
        blobId: e.blobId
    };
}
function kq(e, t) {
    return {
        _privacyMode: t,
        blobData: void 0 !== e.blobData ? (0, n.Yz)(e.blobData, n.po.CODE, "blob_data", t) : void 0,
        error: void 0 !== e.error ? Iq(e.error, t) : void 0
    };
}
function xq(e, t) {
    return {
        _privacyMode: t,
        blobId: e.blobId,
        blobData: (0, n.Yz)(e.blobData, n.po.CODE, "blob_data", t)
    };
}
function Tq(e, t, r) {
    const n = r?.redactUnallowedFieldsInsteadOfThrowing ?? !1, s = r?.enforcing;
    return new Eq.Dj({
        blobId: e.blobId,
        blobData: e.blobData.unwrap(t, {
            redactUnallowedFieldsInsteadOfThrowing: n,
            enforcing: s
        })
    });
}
function Rq(e, t) {
    return {
        _privacyMode: t,
        error: void 0 !== e.error ? Iq(e.error, t) : void 0
    };
}
function Bq(e, t) {
    return {
        _privacyMode: t,
        id: e.id,
        spanContext: void 0 !== e.spanContext ? rq(e.spanContext, t) : void 0,
        message: Pq(e.message, t)
    };
}
function Pq(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "getBlobArgs":
            return {
                case: "getBlobArgs",
                value: Cq(e.value, t)
            };
        case "setBlobArgs":
            return {
                case: "setBlobArgs",
                value: xq(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
function Jq(e, t, r) {
    return new Eq.km({
        id: e.id,
        spanContext: void 0 !== e.spanContext ? nq(e.spanContext) : void 0,
        message: Mq(e.message, t, r)
    });
}
function Mq(e, t, r) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "getBlobArgs":
            return {
                case: "getBlobArgs",
                value: (n = e.value, new Eq.zn({
                    blobId: n.blobId
                }))
            };
        case "setBlobArgs":
            return {
                case: "setBlobArgs",
                value: Tq(e.value, t, r)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
    var n;
}
function qq(e, t) {
    return {
        _privacyMode: t,
        id: e.id,
        message: Dq(e.message, t)
    };
}
function Dq(e, t) {
    if (!e || void 0 === e.case) return {
        case: void 0,
        value: void 0
    };
    switch(e.case){
        case "getBlobResult":
            return {
                case: "getBlobResult",
                value: kq(e.value, t)
            };
        case "setBlobResult":
            return {
                case: "setBlobResult",
                value: Rq(e.value, t)
            };
        default:
            return {
                case: void 0,
                value: void 0
            };
    }
}
