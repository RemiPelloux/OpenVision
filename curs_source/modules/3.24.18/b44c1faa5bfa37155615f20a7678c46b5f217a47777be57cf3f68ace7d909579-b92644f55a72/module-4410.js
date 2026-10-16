"use strict";
require.r(exports), require.d(exports, {
    InferenceService: ()=>i
});
var n = require("./module-8844.js"), s = require("./module-36038.js"), o = require("./module-82537.js");
const i = {
    typeName: "aiserver.v1.InferenceService",
    methods: {
        stream: {
            name: "Stream",
            I: n.Zc,
            O: n.jK,
            kind: s.MethodKind.ServerStreaming
        },
        recordAgentFollowupClassification: {
            name: "RecordAgentFollowupClassification",
            I: n.yJ,
            O: s.Empty,
            kind: s.MethodKind.Unary
        },
        recordAgentPostTurnLabeling: {
            name: "RecordAgentPostTurnLabeling",
            I: n.kG,
            O: s.Empty,
            kind: s.MethodKind.Unary
        },
        runInference: {
            name: "RunInference",
            I: n.jR,
            O: n.fJ,
            kind: s.MethodKind.BiDiStreaming
        },
        runInferenceSSE: {
            name: "RunInferenceSSE",
            I: o.BidiRequestId,
            O: n.fJ,
            kind: s.MethodKind.ServerStreaming
        },
        runInferencePoll: {
            name: "RunInferencePoll",
            I: o.BidiPollRequest,
            O: o.BidiPollResponse,
            kind: s.MethodKind.ServerStreaming
        }
    }
};
