"use strict";
require.r(exports), require.d(exports, {
    InferenceService: ()=>o
});
var n = require("./module-8844.js"), s = require("./module-6038.js"), i = require("./module-2537.js");
const o = {
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
            I: i.BidiRequestId,
            O: n.fJ,
            kind: s.MethodKind.ServerStreaming
        },
        runInferencePoll: {
            name: "RunInferencePoll",
            I: i.BidiPollRequest,
            O: i.BidiPollResponse,
            kind: s.MethodKind.ServerStreaming
        }
    }
};
