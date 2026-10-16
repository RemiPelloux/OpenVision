"use strict";
require.d(exports, {
    Ti: ()=>g,
    q1: ()=>v,
    ir: ()=>w,
    gV: ()=>y
});
var n = require("./module-17392.js"), s = require("./module-1429.js"), o = require("./module-55625.js"), i = require("./module-63070.js");
const a = {
    loopNudge: void 0,
    progressReminderThreshold: void 0,
    longReasoningReminder: void 0,
    effortLevel: void 0,
    supportsAssistantMessagePrefill: !0,
    enableLineNumbers: !0,
    useSparseReadLineNumbers: !1,
    postToolReminders: []
};
function c(e, t) {
    return {
        ...t,
        agentTokenLimit: e.contextWindowTokens,
        estimatedCacheTtlMs: e.cacheTtlMs ?? t.estimatedCacheTtlMs,
        promptConfig: l(t.promptConfig, e.supportsAssistantPrefill)
    };
}
function l(e, t) {
    return void 0 === t ? e : {
        ...e ?? a,
        supportsAssistantMessagePrefill: t
    };
}
var u = require("./module-6688.js");
function d(e, t, r) {
    const n = new Map;
    for (const t of e.models)n.set(t.id, {
        slug: t.id,
        advertised: !0,
        valid: !0,
        blocked: !1,
        requiresMaxMode: !1,
        representativeCostDollars: 0
    });
    return {
        kind: "config",
        config: {
            forcePolicy: u.KQr.None,
            forceModelId: void 0,
            parentMaxMode: !1,
            parentRequestedModelName: t.id,
            models: n,
            aliasToSlug: new Map,
            overrides: m(r, n)
        }
    };
}
function p(e) {
    const t = new Set(e.models.map((e)=>e.id));
    return async (e)=>{
        const r = new Map;
        for (const n of e)r.set(n, t.has(n) ? n : void 0);
        return r;
    };
}
function m(e, t) {
    const r = {};
    for (const n of e){
        const e = (0, u.jyZ)(n.subagentType);
        if (void 0 === e) continue;
        const s = n.selection;
        switch(s.case){
            case "disabled":
            case "inherit":
                !0 === s.value && (r[e] = {
                    type: s.case
                });
                break;
            case "model":
                t.has(s.value.modelId) && (r[e] = {
                    type: "model",
                    modelId: s.value.modelId
                });
        }
    }
    return r;
}
const h = "reasoning", f = [
    h,
    "effort",
    "thought_level"
];
function g(e, t, r, n) {
    return async (a)=>{
        const l = function(e, t) {
            const r = t.parameters.find((e)=>e.id === i.Qt && "" !== e.value)?.value, n = (0, i.Rz)(e), o = [
                n.defaultTokens,
                n.longTokens
            ].filter((e)=>void 0 !== e), a = void 0 === r ? n.defaultTokens : o.find((e)=>String(e) === r);
            if (void 0 === a) {
                if (void 0 === n.longTokens) return e;
                throw new s.p("private-inference-context-not-supported", (0, s.t)({
                    modelId: e.id,
                    contextWindow: {
                        requested: r ?? "",
                        supported: o
                    }
                }));
            }
            return a === e.contextWindowTokens ? e : {
                ...e,
                contextWindowTokens: a
            };
        }(y(t, a.requestedModel), a.requestedModel);
        !function(e, t) {
            if (e.vision) return;
            const r = "userMessageAction" === t.action.case ? t.action.value.userMessage?.selectedContext?.selectedImages.length ?? 0 : 0;
            if (0 === r) return;
            throw new s.p("private-inference-vision-not-supported", (0, s.t)({
                modelId: e.id,
                imageCount: r
            }));
        }(l, a.action);
        const u = w(l, a.requestedModel), m = await r({
            modelId: l.providerModelId,
            promptModel: void 0 === l.cursorModelId ? void 0 : {
                modelId: l.cursorModelId,
                parameters: u
            },
            conversationId: a.runOptions.conversationId,
            attemptRequestId: a.attemptRequestId,
            originalRequestId: a.originalRequestId,
            signal: a.signal
        });
        try {
            const r = void 0 === m.resolvedModelMetadata ? void 0 : {
                ...c(l, m.resolvedModelMetadata),
                subagentModelConfig: d(t, l, a.runOptions.subagentModelOverrides ?? [])
            }, s = await e({
                model: l,
                modelParameters: u,
                attemptRequestId: a.attemptRequestId,
                originalRequestId: a.originalRequestId,
                attempt: a.attempt,
                signal: a.signal,
                onUsage: m.onUsage,
                promptMiddleware: (0, o.KW)(r?.promptConfig)
            }), i = void 0 === n ? s : n.wrapAttemptSession(a, s, l.providerModelId);
            return {
                promptSession: i.promptSession,
                promptToolSession: i.promptToolSession,
                attempt: {
                    resolvedModel: a.requestedModel,
                    supportsSelfSummary: !1,
                    routedModelDisplayName: void 0,
                    resolvedModelMetadata: r,
                    resolveCustomSubagentModels: p(t),
                    nonFileRules: [],
                    finish: m.finish
                }
            };
        } catch (e) {
            throw m.finish(), e;
        }
    };
}
function y(e, t) {
    const r = e.models.find((e)=>e.id === t.modelId);
    if (void 0 !== r) return r;
    throw new s.p("private-inference-model-not-in-catalog", (0, s.t)({
        modelId: t.modelId || void 0,
        catalogModelIds: e.models.map((e)=>e.id)
    }));
}
function w(e, t) {
    const r = t.parameters.find((e)=>f.includes(e.id) && "" !== e.value)?.value, n = e.effort;
    if (void 0 === n) return [];
    const o = r ?? n.default, i = n.tiers.find((e)=>e.id === o);
    if (void 0 === i) throw new s.p("private-inference-reasoning-not-supported", (0, s.t)({
        modelId: e.id,
        reasoning: {
            requested: o,
            supported: n.tiers.map((e)=>e.id)
        }
    }));
    return [
        {
            id: h,
            value: i.value
        }
    ];
}
function v(e) {
    return (t)=>{
        throw new n.SK("Private inference is not configured", {
            requestId: t.attemptRequestId,
            displayInfo: {
                title: "Private inference not configured",
                detail: e,
                isRetryable: !1
            }
        });
    };
}
