"use strict";
require.d(exports, {
    $: ()=>l
});
var n = require("./module-17392.js"), s = require("./module-8844.js"), o = require("./module-45904.js"), i = require("./module-36038.js"), a = require("./module-1025.js"), c = require("./module-26814.js");
function l(e, t, r = ()=>new Date) {
    return async (l)=>{
        l.signal.throwIfAborted();
        const u = await e.getIdentity();
        if (l.signal.throwIfAborted(), void 0 === u) throw new n.SK("Private inference usage admission needs authentication", {
            requestId: l.attemptRequestId,
            displayInfo: {
                title: "Private inference authentication required",
                detail: "Sign in to Cursor before starting a private inference turn.",
                isRetryable: !1
            }
        });
        const d = await e.admitRun(u, new o.u({
            modelName: l.modelId,
            conversationId: l.conversationId,
            clientTurnId: l.attemptRequestId,
            ...void 0 === l.promptModel ? {} : {
                promptModelName: l.promptModel.modelId,
                promptModel: new s.RK({
                    modelId: l.promptModel.modelId,
                    parameters: l.promptModel.parameters.map((e)=>new s.nF({
                            id: e.id,
                            value: e.value
                        }))
                })
            }
        }), l.signal, {
            headers: {
                "x-request-id": l.attemptRequestId,
                "x-original-request-id": l.originalRequestId
            }
        });
        if ("" === d.usageUuid) throw new n.SK("Private inference admission returned no usage identifier", {
            requestId: l.attemptRequestId
        });
        let p = 0, m = !1, h = !1;
        const f = ()=>{
            h || (h = !0, t.enqueueTurn(u, new o.YN({
                usageUuid: d.usageUuid,
                finishedAt: i.Timestamp.fromDate(r()),
                invocationCount: p,
                modelOutputDelivered: m
            })));
        };
        if (l.signal.aborted && (f(), l.signal.throwIfAborted()), !(0, a.B9)(await e.getIdentity(), u)) throw f(), (0, a.H8)();
        return {
            onUsage: (e)=>{
                p++, (e.usage.outputTokens ?? 0) > 0 && (m = !0), t.enqueue(u, new o.u0({
                    usageUuid: d.usageUuid,
                    invocationId: e.invocationId,
                    modelId: e.modelId,
                    observedAt: i.Timestamp.fromDate(e.observedAt),
                    status: e.status,
                    usage: {
                        case: "openaiResponses",
                        value: e.usage
                    },
                    ...void 0 === e.headerUsage ? {} : {
                        headerUsage: e.headerUsage
                    }
                }));
            },
            finish: f,
            resolvedModelMetadata: (0, c.Wt)(d.promptModelMetadata, l.promptModel?.modelId ?? l.modelId)
        };
    };
}
