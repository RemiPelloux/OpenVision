"use strict";
require.d(exports, {
    QZ: ()=>h,
    au: ()=>p,
    gy: ()=>y,
    nn: ()=>u
});
var n = require("./module-6688.js"), s = require("./module-37949.js"), o = require("./module-69584.js"), i = require("./module-1429.js");
const a = "agent_host_local_loop", c = {
    "managed-local-unavailable": "expected",
    "managed-local-client-absent": "fallback",
    "gate-reader-unavailable": "fallback",
    "gate-check-failed": "fallback",
    "gate-off": "expected",
    "enrollment-denied": "expected",
    "subscription-notification-connect-routed": "fallback",
    "byok-connect-routed": "fallback",
    "private-inference-not-enrolled": "fallback"
};
function l(e) {
    return {
        runtime: "connect",
        reason: e,
        disposition: c[e]
    };
}
const u = new Set([
    o.xyI.AGENT,
    o.xyI.PLAN,
    o.xyI.ASK,
    o.xyI.DEBUG,
    o.xyI.MULTITASK
]);
function d(e) {
    switch(e.action.case){
        case "userMessageAction":
            return e.action.value.userMessage?.mode;
        case "executePlanAction":
            return e.action.value.executionMode === o.xyI.UNSPECIFIED ? o.xyI.AGENT : e.action.value.executionMode;
        default:
            return;
    }
}
function p(e, t) {
    return (0, n.wLs)(t.mode, d(e));
}
const m = (0, s.h)("@anysphere/agent-host:local-loop-turn-router");
function h(e) {
    return async (t)=>{
        if (void 0 !== e.privateInference) return async function(e, t, r) {
            const n = g(r);
            if (!e) return f("private-inference-unavailable", n);
            let s;
            try {
                s = await t.readTeamEnablement();
            } catch (e) {
                m.warn(r.ctx, "Private inference team enablement read threw", {
                    error: e instanceof Error ? e.stack ?? e.message : String(e)
                }), s = "unavailable";
            }
            switch(s){
                case "enabled":
                    break;
                case "disabled":
                    return t.enrollmentUndecided ? l("private-inference-not-enrolled") : f("private-inference-disabled-for-team", n);
                case "unavailable":
                    return f("private-inference-enablement-unavailable", n);
            }
            if (n.hasModelCredentials) return f("private-inference-byok-not-supported", n);
            const o = v(n);
            if (void 0 !== o) return f(o, n);
            return {
                runtime: "managed-local",
                reason: "private-inference-eligible"
            };
        }(e.managedLocalAvailable, e.privateInference, t);
        if (void 0 !== e.readEnrollmentAfterActivation && "enabled" === function(e, t) {
            try {
                return e();
            } catch (e) {
                return m.warn(t.ctx, "Private inference enrollment read threw", {
                    error: e instanceof Error ? e.stack ?? e.message : String(e)
                }), "unavailable";
            }
        }(e.readEnrollmentAfterActivation, t)) return f("private-inference-enrolled-after-activation", g(t));
        if (!e.managedLocalAvailable) return l(e.localLoopRequested ?? e.managedLocalAvailable ? "managed-local-client-absent" : "managed-local-unavailable");
        let r;
        const n = t.runOptions.localLoopGateEnabled;
        if (void 0 !== n) r = n;
        else {
            const n = e.runtimeCapabilities;
            if (void 0 === n || void 0 === n.checkFeatureGate) return l("gate-reader-unavailable");
            try {
                r = await n.checkFeatureGate(a);
            } catch (e) {
                return m.warn(t.ctx, "Local loop gate check threw", {
                    error: e instanceof Error ? e.stack ?? e.message : String(e)
                }), l("gate-check-failed");
            }
        }
        const s = !0 === e.enrollmentLatch?.observeGate(r);
        if (!r) return l("gate-off");
        if (s) return l("enrollment-denied");
        if ("subscriptionNotificationAction" === t.action.action.case) return l("subscription-notification-connect-routed");
        const o = g(t);
        if (o.hasModelCredentials) return l("byok-connect-routed");
        const i = v(o);
        return void 0 !== i ? f(i, o) : {
            runtime: "managed-local",
            reason: "eligible"
        };
    };
}
function f(e, t) {
    return {
        runtime: "fail",
        reason: e,
        error: new i.p(e, {
            actionCase: t.actionCase,
            turnModeName: o.xyI[t.turnMode],
            modelId: t.modelId
        })
    };
}
function g(e) {
    const t = e.runOptions.requestedModel?.modelId, r = e.modelDetails?.modelId;
    return {
        conversationId: e.runOptions.conversationId,
        generationUUID: e.runOptions.generationUUID,
        actionCase: e.action.action.case,
        modelId: t || r || void 0,
        requestedMode: d(e.action),
        turnMode: p(e.action, e.conversationState),
        hasModelCredentials: void 0 !== e.runOptions.requestedModel?.credentials.case || void 0 !== e.modelDetails?.credentials.case,
        hasCustomSystemPrompt: (e.runOptions.customSystemPrompt ?? "").length > 0,
        unsupportedRunOptionReason: w(e.runOptions),
        isHostedSubagentChild: y(e.runOptions)
    };
}
function y(e) {
    return Boolean(e.subagentTypeName || e.parentAgentToolCallId);
}
function w(e) {
    return void 0 !== e.harness ? "harness-not-supported" : !0 === e.excludeWorkspaceContext ? "exclude-workspace-context-not-supported" : !0 === e.directMetaParentChildSubagent ? "direct-meta-subagent-not-supported" : void 0;
}
function v(e) {
    return "backgroundTaskCompletionAction" !== (t = e.actionCase) && "resumeAction" !== t && "summarizeAction" !== t && "goalContinuationAction" !== t && "asyncAskQuestionCompletionAction" !== t && "shellCommandAction" !== t && "userMessageAction" !== e.actionCase && "executePlanAction" !== e.actionCase ? "action-not-supported" : function(e) {
        if (u.has(e.turnMode)) return !0;
        return e.isHostedSubagentChild && e.requestedMode === o.xyI.UNSPECIFIED;
    }(e) ? function(e) {
        if (void 0 === e.modelId) return "model-not-supported";
        if (e.hasCustomSystemPrompt && e.isHostedSubagentChild) return "custom-system-prompt-not-supported";
        return e.unsupportedRunOptionReason;
    }(e) : "mode-not-supported";
    var t;
}
