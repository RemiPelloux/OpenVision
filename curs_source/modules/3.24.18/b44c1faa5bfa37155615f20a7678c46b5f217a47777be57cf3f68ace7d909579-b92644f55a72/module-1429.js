"use strict";
require.d(exports, {
    p: ()=>o,
    t: ()=>s
});
var n = require("./module-17392.js");
function s(e) {
    return {
        actionCase: void 0,
        turnModeName: void 0,
        ...e
    };
}
class o extends n.SK {
    constructor(e, t){
        super(`Local loop cannot run this turn: ${e}`, {
            displayInfo: {
                ...i(e, t),
                isRetryable: !1
            }
        }), this.reason = e;
    }
}
function i(e, t) {
    return e.startsWith("private-inference-") ? {
        title: "Private inference can't run this turn",
        detail: c(e, t)
    } : {
        title: "Local loop can't run this turn",
        detail: `${c(e, t)} Disable agent_host_local_loop to run on the backend loop.`
    };
}
function a(e) {
    return void 0 === e.modelId ? "" : ` "${e.modelId}"`;
}
function c(e, t) {
    switch(e){
        case "action-not-supported":
            return `The local loop only runs user-message turns, plan builds, resumes, summaries, goal continuations, question answers, shell commands, and background wakeups; this turn started from ${void 0 === t.actionCase ? "an unknown action" : `"${t.actionCase}"`}.`;
        case "mode-not-supported":
            {
                const e = void 0 === t.turnModeName ? "an unknown mode" : `mode ${t.turnModeName}`, r = function(e) {
                    switch(e){
                        case "backgroundTaskCompletionAction":
                            return "Background wakeups";
                        case "resumeAction":
                            return "Resumes";
                        case "summarizeAction":
                            return "Summaries";
                        case "goalContinuationAction":
                            return "Goal continuations";
                        case "asyncAskQuestionCompletionAction":
                            return "Question answers";
                        case "shellCommandAction":
                            return "Shell commands";
                        default:
                            return;
                    }
                }(t.actionCase);
                return void 0 !== r ? `${r} only run locally in Agent, Plan, Ask, Debug, or Multitask mode conversations; this conversation is in ${e}.` : `The local loop only supports Agent, Plan, Ask, Debug, and Multitask modes; this turn runs in ${e}.`;
            }
        case "model-not-supported":
            return "The turn resolved no model id for the local loop to request.";
        case "custom-system-prompt-not-supported":
            return "Subagent turns with a custom system prompt are not supported on the local loop.";
        case "harness-not-supported":
            return "Turns with a harness override are not supported on the local loop.";
        case "exclude-workspace-context-not-supported":
            return "Turns that exclude workspace context are not supported on the local loop.";
        case "direct-meta-subagent-not-supported":
            return "Meta parent-child subagent turns are not supported on the local loop.";
        case "private-inference-unavailable":
            return "Private inference is configured but its runtime was not wired into this build. Turns fail rather than falling back to Cursor-managed models; remove the private-inference config (the enterprise private-inference.toml, or CURSOR_PRIVATE_INFERENCE_* for development) to use the backend loop.";
        case "private-inference-enablement-unavailable":
            return "Private inference is configured but your team's private inference setting could not be read. Turns fail rather than falling back to Cursor-managed models; retry, or reload the window.";
        case "private-inference-enrolled-after-activation":
            return "Private inference was enabled for your team after this window started. Turns no longer run on Cursor-managed models; reload the window to run them on private inference.";
        case "private-inference-disabled-for-team":
            return "Private inference is configured on this device but is not enabled for your team. Turns fail rather than falling back to Cursor-managed models; ask your admin to enable private inference, or reload the window to run on Cursor-managed models.";
        case "private-inference-byok-not-supported":
            return `Private inference does not accept per-turn API keys (BYOK) on the request. Each catalog model uses the endpoint and credential from the config file${void 0 === t.modelId ? "" : ` ("${t.modelId}")`}. Remove the custom key from this model or pick a catalog model.`;
        case "private-inference-model-not-in-catalog":
            {
                const e = t.catalogModelIds?.join(", ");
                return `The requested model${a(t)} is not in the private inference catalog${e ? ` (available: ${e})` : ""}. Pick one of the configured models.`;
            }
        case "private-inference-reasoning-not-supported":
            {
                const e = t.reasoning?.requested, r = t.reasoning?.supported.join(", ");
                return `The requested reasoning tier${e ? ` "${e}"` : ""} is not one the model${a(t)} declares${r ? ` (supported: ${r})` : ""}. Pick a supported tier.`;
            }
        case "private-inference-context-not-supported":
            {
                const e = t.contextWindow?.requested, r = t.contextWindow?.supported.map((e)=>e.toLocaleString()).join(", ");
                return `The requested context window${e ? ` "${e}"` : ""} is not one the model${a(t)} advertises${r ? ` (supported token counts: ${r})` : ""}. Pick a supported context size.`;
            }
        case "private-inference-vision-not-supported":
            {
                const e = t.imageCount ?? 0, r = 1 === e ? "the attached image was not sent" : `the ${e} attached images were not sent`;
                return `The model${a(t)} is not configured for image input, so ${r}. Remove the attachment, or have your admin set vision = true on this model's private-inference.toml entry if the model accepts images.`;
            }
        default:
            return e;
    }
}
