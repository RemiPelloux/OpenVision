"use strict";
require.d(exports, {
    G5: ()=>d,
    Gj: ()=>a,
    J2: ()=>i,
    Pb: ()=>g,
    WI: ()=>m,
    jz: ()=>h,
    pA: ()=>c
});
var n = require("./module-6688.js"), s = require("./module-27322.js"), o = require("./module-69584.js");
function i(e, t) {
    return new o.QFf({
        action: {
            case: "userMessageAction",
            value: new o.Vtf({
                userMessage: new o.RGk({
                    text: e,
                    messageId: t
                })
            })
        }
    });
}
function a(e, t, r) {
    const n = void 0 === t || "" === t ? crypto.randomUUID() : t;
    return new o.QFf({
        action: {
            case: "injectContextAction",
            value: new o.hGJ({
                injectionId: n,
                expectedRunId: r,
                payload: {
                    case: "userContext",
                    value: new o.oW$({
                        userMessage: new o.RGk({
                            text: e,
                            messageId: n
                        })
                    })
                }
            })
        }
    });
}
function c(e) {
    if (void 0 !== e) return {
        generationUUID: e.generationUuid,
        agentSessionId: e.agentSessionId,
        ...l(e.customSystemPrompt, e.systemPromptSpec),
        excludeWorkspaceContext: e.excludeWorkspaceContext,
        enableAgentRetries: e.enableAgentRetries,
        fixedRetryDelayMs: e.fixedRetryDelayMs,
        endlessRetries: !0 === e.endlessRetries ? ()=>!0 : void 0,
        isRunningInTest: e.isRunningInTest,
        stallDetectorConfig: v(e),
        selectedSubagentModels: e.selectedSubagentModels,
        subagentModelOverrides: e.subagentModelOverrides,
        requestContextBlobTransportMode: w(e.requestContextBlobTransportMode),
        requestContextBlobMaxBytes: e.requestContextBlobMaxBytes,
        requestContextDynamicInlineMaxBytes: e.requestContextDynamicInlineMaxBytes,
        suggestNextPrompt: e.suggestNextPrompt,
        headers: g(f(e.requestHeaders), h(e.blobEncryptionKey)),
        clientSupportsInlineImages: e.clientSupportsInlineImages,
        clientSupportsPreviewCard: e.clientSupportsPreviewCard,
        clientSupportsSendToUser: e.clientSupportsSendToUser,
        clientSupportsRoutedModelUpdate: e.clientSupportsRoutedModelUpdate,
        canCreateCloudSubagents: e.canCreateCloudSubagents,
        localLoopGateEnabled: e.localLoopGateEnabled,
        maxSteps: 0 === e.maxSteps ? void 0 : e.maxSteps,
        toolRestriction: d(e),
        startedAsNewProject: e.startedAsNewProject,
        firstProjectOnboarding: e.firstProjectOnboarding,
        harness: y(e.harness)
    };
}
function l(e, t) {
    const r = t?.spec;
    if (void 0 === r || void 0 === r.case || "" === r.value) return {
        customSystemPrompt: y(e)
    };
    switch(r.case){
        case "replace":
            return {
                customSystemPrompt: r.value
            };
        case "append":
            return {
                systemPromptSpec: t
            };
        default:
            return r;
    }
}
class u extends Error {
    constructor(e, t){
        super(`${e} must be ToolCall field names such as read_tool_call; no tool is named ${t.join(", ")}`), this.name = "AgentHostUnknownToolError";
    }
}
function d(e) {
    const t = p("allowedTools", e?.allowedTools ?? []), r = p("excludedTools", e?.excludedTools ?? []);
    if (0 !== t.length || 0 !== r.length) return 0 === t.length ? {
        excluded: r
    } : {
        allowed: t,
        excluded: r
    };
}
function p(e, t) {
    const r = [], s = [];
    for (const e of t){
        const t = (0, n._Mz)(e);
        void 0 === t ? s.push(e) : r.push(t);
    }
    if (s.length > 0) throw new u(e, s);
    return r;
}
const m = "x-blob-encryption-key";
function h(e) {
    if ((0, s.TU)(e)) return {
        [m]: e
    };
}
function f(e) {
    if (void 0 === e) return;
    const t = Object.entries(e).map(([e, t])=>[
            e.toLowerCase(),
            t
        ]).filter(([e])=>e !== m);
    return 0 !== t.length ? Object.fromEntries(t) : void 0;
}
function g(e, t) {
    return void 0 === e ? t : void 0 === t ? e : {
        ...e,
        ...t
    };
}
function y(e) {
    return void 0 === e || "" === e ? void 0 : e;
}
function w(e) {
    switch(e){
        case "legacy":
        case "dual":
        case "ref_only":
            return e;
        default:
            return;
    }
}
function v(e) {
    const { stallAdvisoryTimeoutMs: t, stallFailTimeoutMs: r } = e;
    if (void 0 !== t || void 0 !== r) return {
        advisoryTimeoutMs: t,
        failTimeoutMs: r
    };
}
