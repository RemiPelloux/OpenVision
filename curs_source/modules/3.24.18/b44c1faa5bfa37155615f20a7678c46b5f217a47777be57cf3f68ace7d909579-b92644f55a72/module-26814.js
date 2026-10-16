"use strict";
require.d(exports, {
    FG: ()=>u,
    Wt: ()=>f,
    Yg: ()=>m,
    cf: ()=>h
});
var n = require("./module-6688.js"), s = require("./module-37949.js"), o = require("./module-33002.js"), i = require("./module-20859.js"), a = require("./module-33275.js");
const c = (0, s.h)("@anysphere/agent-host:managed-local-model"), l = [
    "anthropic",
    "openai",
    "google",
    "xai",
    "zai",
    "cursor",
    "unknown"
], u = [
    "dsv3-1018",
    "dsv3-1205",
    "cursor-0226",
    "latest",
    "gpt5-codex",
    "codex-cloud",
    "haiku"
], d = [
    "low",
    "medium",
    "high",
    "extra-high",
    "xhigh",
    "max"
], p = [
    "anonymous",
    "composer",
    "auto",
    "grok",
    "grok-4.5",
    "grok-4.6",
    "grok-4.7"
];
function m(e) {
    return e.nameWeTellTheModelToCallItself ?? "Cursor";
}
function h(e) {
    return void 0 === e.promptConfig ? void 0 : (0, n.op5)(e.promptConfig.postToolReminders);
}
function f(e, t, r = (0, o.q6)()) {
    if (void 0 === e) return;
    const n = Object.keys(e.featureFlags).length > 0;
    return n || c.warn(r, "run_ready carried no evaluated feature flags; the config paths keep their pinned fallback flags and the all-static tool layout", {
        resolvedModelId: t
    }), {
        promptModelInfo: _(e, t),
        nameWeTellTheModelToCallItself: "" === e.selfIdentityName ? void 0 : e.selfIdentityName,
        useDsv3Harness: e.useDsv3Harness,
        dsv3IsThinking: e.dsv3IsThinking,
        agentTokenLimit: e.agentTokenLimit,
        estimatedCacheTtlMs: e.estimatedCacheTtlMs,
        persona: p.find((t)=>t === e.persona),
        featureFlags: n ? v(e, t, r) : void 0,
        promptConfig: n ? y(e, t, r) : void 0,
        modeConfig: (0, i.pI)(e),
        askQuestionConfig: (0, i.nH)(e),
        subagentModelConfig: (0, a._)(e, t, r),
        enableSemanticSearch: e.enableSemanticSearch,
        smartModeClassifier: g(e)
    };
}
function g(e) {
    if (void 0 !== e.smartModeClassifierMode) return {
        mode: e.smartModeClassifierMode,
        shadowMode: e.smartModeClassifierShadowMode ?? !1
    };
}
function y(e, t, r) {
    const n = e.longReasoningReminder, s = function(e) {
        switch(e){
            case "control":
            case "reminder_1000":
            case "reminder_2000":
                return e;
            default:
                return;
        }
    }(n?.arm);
    return {
        loopNudge: void 0 === e.loopNudge ? void 0 : {
            minRepetitions: e.loopNudge.minRepetitions,
            minMessageLength: e.loopNudge.minMessageLength,
            injectReminder: e.loopNudge.injectReminder
        },
        progressReminderThreshold: e.progressReminderThreshold,
        longReasoningReminder: void 0 === n || void 0 === s || n.thresholdTokens <= 0 || 0 === n.reminderText.length ? void 0 : {
            arm: s,
            enabled: n.enabled,
            thresholdTokens: n.thresholdTokens,
            delayCalls: n.delayCalls,
            reminderText: n.reminderText
        },
        effortLevel: e.effortLevel,
        supportsAssistantMessagePrefill: e.supportsAssistantMessagePrefill,
        enableLineNumbers: e.enableLineNumbers,
        useSparseReadLineNumbers: e.useSparseReadLineNumbers,
        postToolReminders: w(e, t, r)
    };
}
function w(e, t, r) {
    const s = [];
    for (const o of e.postToolReminders){
        const e = (0, n.oLV)({
            id: o.id,
            intervalToolCalls: o.intervalToolCalls
        });
        e.ok ? s.push(e.row) : c.warn(r, "unknown-id" === e.rejection.kind ? "run_ready post-tool reminder names a reminder this build does not know; leaving it uninstalled" : "run_ready post-tool reminder carries no usable interval; leaving it uninstalled", {
            reminderId: o.id,
            intervalToolCalls: o.intervalToolCalls,
            resolvedModelId: t
        });
    }
    return s;
}
function v(e, t, r) {
    const s = new Map;
    for (const [t, r] of Object.entries(e.featureFlags))switch(r.value.case){
        case "boolValue":
        case "numberValue":
        case "stringValue":
            s.set(t, r.value.value);
    }
    const o = (0, n.sDw)(s, {
        onUnrecognizedValue: (e)=>{
            c.warn(r, "run_ready feature flag value is not one this build knows; leaving the flag unset", {
                flag: e.key,
                value: e.value,
                knownValues: e.knownValues,
                resolvedModelId: t
            });
        }
    });
    return s.has("dynamicToolProfile") || c.warn(r, "run_ready feature flags carry no dynamicToolProfile; the tool layout stays all-static", {
        resolvedModelId: t
    }), o;
}
function _(e, t) {
    const r = "gemini" === e.vendor ? "google" : l.find((t)=>t === e.vendor), n = u.find((t)=>t === e.promptVersion);
    if (void 0 === r || void 0 === n) return;
    const s = d.find((t)=>t === e.reasoningEffort);
    return {
        vendor: r,
        modelName: t,
        promptVersion: n,
        isSonnet45: e.isSonnet45,
        isGemini3: e.isGemini3,
        isGpt51: e.isGpt51,
        isGpt52: e.isGpt52,
        isGpt5: e.isGpt5,
        isGpt55: e.isGpt55,
        isGpt56: e.isGpt56,
        isSonnet4: e.isSonnet4,
        isCodexFamily: e.isCodexFamily,
        isGpt54: e.isGpt54,
        isGpt52Codex: e.isGpt52Codex,
        isGpt53Codex: e.isGpt53Codex,
        isGpt53CodexSpark: e.isGpt53CodexSpark,
        isClaude4X: e.isClaude4x,
        isOpus45: e.isOpus45,
        isOpus46: e.isOpus46,
        isOpus48: e.isOpus48,
        isOpus5: e.isOpus5,
        isOpus55: e.isOpus55,
        isFable5: e.isFable5,
        isFable51: e.isFable51,
        isFruitcake: e.isFruitcake,
        isGpt5Family: e.isGpt5Family,
        isComposer1: e.isComposer1,
        isComposer15: e.isComposer15,
        isComposer2: e.isComposer2,
        isComposerMatterhorn: e.isComposerMatterhorn,
        isGrok45ProductPrompt: e.isGrok45ProductPrompt,
        isGrok46ProductPrompt: e.isGrok46ProductPrompt,
        isRawTrainingSlug: e.isRawTrainingSlug,
        ...void 0 === s ? {} : {
            reasoningEffort: s
        }
    };
}
