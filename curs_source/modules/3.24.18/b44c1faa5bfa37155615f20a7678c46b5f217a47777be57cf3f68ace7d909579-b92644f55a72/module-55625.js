"use strict";
require.d(exports, {
    KW: ()=>m,
    bJ: ()=>p
});
var n = require("./module-6688.js"), s = require("./module-24804.js"), o = require("./module-83360.js"), i = require("./module-28963.js"), a = require("./module-51635.js"), c = require("./module-8844.js");
function l(e) {
    if ("userMessageAction" !== e.action.case) return [];
    if (!(0, n.nl9)(e)) return [];
    const t = e.action.value.userMessage?.text;
    return void 0 === t || 0 === t.trim().length ? [] : [
        new c.S0({
            role: c.R8.USER,
            text: t
        })
    ];
}
var u = require("./module-26814.js"), d = require("./module-87159.js");
function p(e, t) {
    return async (r)=>{
        const c = await (0, d.WZ)(e, {
            agentModule: t,
            conversationId: r.runOptions.conversationId,
            conversationGroupId: r.runOptions.conversationGroupId,
            requestedModel: r.requestedModel,
            routingConversation: l(r.action),
            agentMode: (p = r.action, g = r.conversationState, (0, s.zn)((0, a.au)(p, g))),
            turnAgentMode: (0, i.p)(r.conversationState),
            subagentTypeName: r.runOptions.subagentTypeName || void 0,
            selectedSubagentModels: r.runOptions.selectedSubagentModels ?? [],
            subagentModelOverrides: r.runOptions.subagentModelOverrides ?? [],
            isSummarizeAction: "summarizeAction" === r.action.action.case,
            previousRequestId: r.previousRequestId,
            executePlan: f(r.action),
            attemptRequestId: r.attemptRequestId,
            originalRequestId: r.originalRequestId,
            signal: r.signal,
            ctx: r.ctx,
            stallDetectorConfig: r.runOptions.stallDetectorConfig,
            isRunningInTest: r.runOptions.isRunningInTest,
            requestHeaders: r.runOptions.headers,
            onHeader: r.runOptions.onHeader,
            clientHeartbeatIntervalMs: r.runOptions.clientHeartbeatIntervalMs
        });
        var p, g;
        const y = (0, u.Wt)(c.promptModelMetadata, c.resolvedModel.modelId, r.ctx), { onFirstInvocationStart: w } = r, v = (0, o.Mm)(void 0 === w ? c.inferenceClient : function(e, t) {
            let r = !1;
            return {
                stream: (n, s)=>(r || (r = !0, t()), e.stream(n, s))
            };
        }(c.inferenceClient, w), c.resolvedModel), _ = v.getSession(m(y?.promptConfig)), A = {
            getExecutor: (e)=>new n.Ycw(_.getExecutor(e))
        }, S = (0, o.Mm)(c.inferenceClient, c.resolvedModel).getSession(m(y?.promptConfig)), b = c.summarization, E = void 0 === b ? void 0 : {
            promptSession: (0, o.Mm)(b.inferenceClient, b.model).getSession(h()),
            isFallbackToMainModel: b.isFallbackToMainModel,
            maxPromptChars: b.maxPromptChars
        };
        return {
            promptSession: _,
            promptToolSession: A,
            selfSummaryPromptSession: S,
            summarizationPromptSession: (0, o.Mm)(c.inferenceClient, c.resolvedModel).getSession(h()),
            attempt: {
                resolvedModel: c.resolvedModel,
                supportsSelfSummary: c.supportsSelfSummary,
                routedModelDisplayName: c.routedModelDisplayName,
                resolvedModelMetadata: y,
                nonFileRules: c.nonFileRules,
                metricLabels: c.metricLabels,
                ...void 0 === E ? {} : {
                    summarization: E
                },
                ...void 0 === b?.backgroundProps ? {} : {
                    backgroundSummarizationProps: b.backgroundProps
                },
                kvBlobTelemetryEnabled: c.kvBlobTelemetryEnabled,
                ...c.agentRunRequestLogRequested ? {
                    reportAgentRunRequest: c.reportAgentRunRequest
                } : {},
                agentEvents: c.agentEvents,
                agentEventsAccepted: c.acceptsAgentEvents,
                ...void 0 === c.resolveCustomSubagentModels ? {} : {
                    resolveCustomSubagentModels: c.resolveCustomSubagentModels
                },
                finish: c.finish
            }
        };
    };
}
function m(e) {
    return (0, n.sXH)((0, n.got)({
        imageResizing: {
            webpWithoutCodec: "passthrough"
        },
        configureDsv3Thinking: !1,
        isSlopPromptSession: !1,
        usesComposerFacade: !1,
        safeTokenizationEnabled: !1,
        ...void 0 === e?.loopNudge ? {} : {
            loopNudge: e.loopNudge
        },
        ...void 0 === e?.progressReminderThreshold ? {} : {
            progressReminderThreshold: e.progressReminderThreshold
        },
        ...void 0 === e?.effortLevel ? {} : {
            effortLevel: e.effortLevel
        },
        supportsAssistantMessagePrefill: e?.supportsAssistantMessagePrefill ?? !0
    }, {}));
}
function h() {
    return m(void 0);
}
function f(e) {
    if ("executePlanAction" === e.action.case) return {
        planFileUri: e.action.value.planFileUri,
        planFileContent: e.action.value.planFileContent
    };
}
