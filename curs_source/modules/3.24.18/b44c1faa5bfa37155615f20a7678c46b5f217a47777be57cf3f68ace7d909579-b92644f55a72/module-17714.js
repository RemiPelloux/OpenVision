"use strict";
require.r(exports), require.d(exports, {
    AgentService: ()=>i
});
var n = require("./module-68100.js"), s = require("./module-36038.js"), o = require("./module-82537.js");
const i = {
    typeName: "agent.v1.AgentService",
    methods: {
        run: {
            name: "Run",
            I: n.KS,
            O: n.Oy,
            kind: s.MethodKind.BiDiStreaming
        },
        runSSE: {
            name: "RunSSE",
            I: o.BidiRequestId,
            O: n.Oy,
            kind: s.MethodKind.ServerStreaming
        },
        runPoll: {
            name: "RunPoll",
            I: o.BidiPollRequest,
            O: o.BidiPollResponse,
            kind: s.MethodKind.ServerStreaming
        },
        nameAgent: {
            name: "NameAgent",
            I: n.Il,
            O: n.mw,
            kind: s.MethodKind.Unary
        },
        updateConversationMetadata: {
            name: "UpdateConversationMetadata",
            I: n.vw,
            O: n.HJ,
            kind: s.MethodKind.Unary
        },
        createTranscriptOverview: {
            name: "CreateTranscriptOverview",
            I: n.BU,
            O: n.Hi,
            kind: s.MethodKind.Unary
        },
        getUsableModels: {
            name: "GetUsableModels",
            I: n.KD,
            O: n.sY,
            kind: s.MethodKind.Unary
        },
        getDefaultModelForCli: {
            name: "GetDefaultModelForCli",
            I: n.Tu,
            O: n.pe,
            kind: s.MethodKind.Unary
        },
        getAllowedModelIntents: {
            name: "GetAllowedModelIntents",
            I: n.Ov,
            O: n.k4,
            kind: s.MethodKind.Unary
        },
        uploadConversationBlobs: {
            name: "UploadConversationBlobs",
            I: n.yD,
            O: n.W$,
            kind: s.MethodKind.Unary
        },
        uploadLocalAgentRunToPromptQuality: {
            name: "UploadLocalAgentRunToPromptQuality",
            I: n.uK,
            O: n.eE,
            kind: s.MethodKind.Unary
        },
        getSignedUrlForAttachedMedia: {
            name: "GetSignedUrlForAttachedMedia",
            I: n.W3,
            O: n.wq,
            kind: s.MethodKind.Unary
        },
        notifyConversationClone: {
            name: "NotifyConversationClone",
            I: n.xk,
            O: n.JF,
            kind: s.MethodKind.Unary
        },
        getNewChatNudgeLegacyModelPicker: {
            name: "GetNewChatNudgeLegacyModelPicker",
            I: n.Pg,
            O: n.zP,
            kind: s.MethodKind.Unary
        },
        getNewChatNudgeParameterizedModelPicker: {
            name: "GetNewChatNudgeParameterizedModelPicker",
            I: n.hs,
            O: n.TW,
            kind: s.MethodKind.Unary
        },
        getPromptContextUsage: {
            name: "GetPromptContextUsage",
            I: n.Y3,
            O: n.KE,
            kind: s.MethodKind.Unary
        },
        listLocalSubscriptionTools: {
            name: "ListLocalSubscriptionTools",
            I: n.dw,
            O: n.JH,
            kind: s.MethodKind.Unary
        },
        callLocalSubscriptionTool: {
            name: "CallLocalSubscriptionTool",
            I: n.uw,
            O: n.uu,
            kind: s.MethodKind.Unary
        },
        streamLocalAgentMailbox: {
            name: "StreamLocalAgentMailbox",
            I: n.k5,
            O: n.ic,
            kind: s.MethodKind.ServerStreaming
        }
    }
};
