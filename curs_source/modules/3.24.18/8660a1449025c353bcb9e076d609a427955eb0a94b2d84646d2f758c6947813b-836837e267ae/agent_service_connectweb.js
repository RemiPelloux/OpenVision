import { $7a, A7a, C1m, D1m, D7a, F7a, G7a, J7a, L7a, M7a, N1m, N7a, O7a, P7a, R7a, S1m, T1m, V6e, W7a, X7a, Y7a, Z7a, _1m, _J, _qe, b1m, d1m, f1m, g1m, h1m, m1m, p1m, q7a, v1m, y1m } from "./agent_service_pb.js";
import { CPe, JEn, Jqe, Qqe } from "./bidi_pb.js";
import { hr } from "./protobuf.js";
import { ke } from "./service-type.js";
import { E } from "./tslib.es6.js";
var jEi;
export { jEi };
var __wakaru_Lal_initialized = false;
export function Lal() {
if (__wakaru_Lal_initialized) return;
__wakaru_Lal_initialized = true;
"use strict";
E(), V6e(), hr(), JEn(), jEi = {
    typeName: "agent.v1.AgentService",
    methods: {
        run: {
            name: "Run",
            I: _qe,
            O: _J,
            kind: ke.BiDiStreaming
        },
        runSSE: {
            name: "RunSSE",
            I: CPe,
            O: _J,
            kind: ke.ServerStreaming
        },
        runPoll: {
            name: "RunPoll",
            I: Qqe,
            O: Jqe,
            kind: ke.ServerStreaming
        },
        nameAgent: {
            name: "NameAgent",
            I: A7a,
            O: R7a,
            kind: ke.Unary
        },
        updateConversationMetadata: {
            name: "UpdateConversationMetadata",
            I: P7a,
            O: d1m,
            kind: ke.Unary
        },
        createTranscriptOverview: {
            name: "CreateTranscriptOverview",
            I: D7a,
            O: p1m,
            kind: ke.Unary
        },
        getUsableModels: {
            name: "GetUsableModels",
            I: N7a,
            O: L7a,
            kind: ke.Unary
        },
        getDefaultModelForCli: {
            name: "GetDefaultModelForCli",
            I: O7a,
            O: F7a,
            kind: ke.Unary
        },
        getAllowedModelIntents: {
            name: "GetAllowedModelIntents",
            I: m1m,
            O: g1m,
            kind: ke.Unary
        },
        uploadConversationBlobs: {
            name: "UploadConversationBlobs",
            I: $7a,
            O: f1m,
            kind: ke.Unary
        },
        uploadLocalAgentRunToPromptQuality: {
            name: "UploadLocalAgentRunToPromptQuality",
            I: W7a,
            O: v1m,
            kind: ke.Unary
        },
        getSignedUrlForAttachedMedia: {
            name: "GetSignedUrlForAttachedMedia",
            I: G7a,
            O: _1m,
            kind: ke.Unary
        },
        notifyConversationClone: {
            name: "NotifyConversationClone",
            I: q7a,
            O: b1m,
            kind: ke.Unary
        },
        getNewChatNudgeLegacyModelPicker: {
            name: "GetNewChatNudgeLegacyModelPicker",
            I: y1m,
            O: S1m,
            kind: ke.Unary
        },
        getNewChatNudgeParameterizedModelPicker: {
            name: "GetNewChatNudgeParameterizedModelPicker",
            I: J7a,
            O: N1m,
            kind: ke.Unary
        },
        getPromptContextUsage: {
            name: "GetPromptContextUsage",
            I: M7a,
            O: h1m,
            kind: ke.Unary
        },
        listLocalSubscriptionTools: {
            name: "ListLocalSubscriptionTools",
            I: Y7a,
            O: C1m,
            kind: ke.Unary
        },
        callLocalSubscriptionTool: {
            name: "CallLocalSubscriptionTool",
            I: X7a,
            O: T1m,
            kind: ke.Unary
        },
        streamLocalAgentMailbox: {
            name: "StreamLocalAgentMailbox",
            I: Z7a,
            O: D1m,
            kind: ke.ServerStreaming
        }
    }
};

}
