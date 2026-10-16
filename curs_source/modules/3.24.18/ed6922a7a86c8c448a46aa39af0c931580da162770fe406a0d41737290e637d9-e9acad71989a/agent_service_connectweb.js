import { $Pd, BPd, Cso, Dso, Eso, GPd, HPd, JPd, KPd, KW, Lso, Nso, Pso, QPd, Sso, Tso, UPd, Uso, VPd, WPd, XPd, aUe, bso, dLd, eLd, jPd, kso, qPd, rLd, rPe, uLd, wso, xso, yso, zPd } from "./agent_service_pb.js";
import { EPe, E_e, QWt, xPe } from "./bidi_pb.js";
import { bi } from "./protobuf.js";
import { ae } from "./service-type.js";
import { x } from "./tslib.es6.js";
var rQi;
export { rQi };
var __wakaru_yCh_initialized = false;
export function yCh() {
if (__wakaru_yCh_initialized) return;
__wakaru_yCh_initialized = true;
"use strict";
x(), aUe(), bi(), QWt(), rQi = {
    typeName: "agent.v1.AgentService",
    methods: {
        run: {
            name: "Run",
            I: rPe,
            O: KW,
            kind: ae.BiDiStreaming
        },
        runSSE: {
            name: "RunSSE",
            I: E_e,
            O: KW,
            kind: ae.ServerStreaming
        },
        runPoll: {
            name: "RunPoll",
            I: EPe,
            O: xPe,
            kind: ae.ServerStreaming
        },
        nameAgent: {
            name: "NameAgent",
            I: bso,
            O: yso,
            kind: ae.Unary
        },
        updateConversationMetadata: {
            name: "UpdateConversationMetadata",
            I: Sso,
            O: BPd,
            kind: ae.Unary
        },
        createTranscriptOverview: {
            name: "CreateTranscriptOverview",
            I: wso,
            O: $Pd,
            kind: ae.Unary
        },
        getUsableModels: {
            name: "GetUsableModels",
            I: Cso,
            O: Tso,
            kind: ae.Unary
        },
        getDefaultModelForCli: {
            name: "GetDefaultModelForCli",
            I: Eso,
            O: xso,
            kind: ae.Unary
        },
        getAllowedModelIntents: {
            name: "GetAllowedModelIntents",
            I: HPd,
            O: WPd,
            kind: ae.Unary
        },
        uploadConversationBlobs: {
            name: "UploadConversationBlobs",
            I: Dso,
            O: GPd,
            kind: ae.Unary
        },
        uploadLocalAgentRunToPromptQuality: {
            name: "UploadLocalAgentRunToPromptQuality",
            I: Pso,
            O: VPd,
            kind: ae.Unary
        },
        getSignedUrlForAttachedMedia: {
            name: "GetSignedUrlForAttachedMedia",
            I: Lso,
            O: jPd,
            kind: ae.Unary
        },
        notifyConversationClone: {
            name: "NotifyConversationClone",
            I: Nso,
            O: qPd,
            kind: ae.Unary
        },
        getNewChatNudgeLegacyModelPicker: {
            name: "GetNewChatNudgeLegacyModelPicker",
            I: zPd,
            O: KPd,
            kind: ae.Unary
        },
        getNewChatNudgeParameterizedModelPicker: {
            name: "GetNewChatNudgeParameterizedModelPicker",
            I: Uso,
            O: dLd,
            kind: ae.Unary
        },
        getPromptContextUsage: {
            name: "GetPromptContextUsage",
            I: kso,
            O: UPd,
            kind: ae.Unary
        },
        listLocalSubscriptionTools: {
            name: "ListLocalSubscriptionTools",
            I: XPd,
            O: QPd,
            kind: ae.Unary
        },
        callLocalSubscriptionTool: {
            name: "CallLocalSubscriptionTool",
            I: JPd,
            O: eLd,
            kind: ae.Unary
        },
        streamLocalAgentMailbox: {
            name: "StreamLocalAgentMailbox",
            I: rLd,
            O: uLd,
            kind: ae.ServerStreaming
        }
    }
};

}
