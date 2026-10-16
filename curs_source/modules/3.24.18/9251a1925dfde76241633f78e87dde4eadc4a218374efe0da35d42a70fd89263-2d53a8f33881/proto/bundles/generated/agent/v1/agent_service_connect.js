import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { AgentClientMessage, AgentServerMessage, CallLocalSubscriptionToolRequest, CallLocalSubscriptionToolResponse, CreateTranscriptOverviewRequest, CreateTranscriptOverviewResponse, GetAllowedModelIntentsRequest, GetAllowedModelIntentsResponse, GetDefaultModelForCliRequest, GetDefaultModelForCliResponse, GetNewChatNudgeLegacyModelPickerRequest, GetNewChatNudgeLegacyModelPickerResponse, GetNewChatNudgeParameterizedModelPickerRequest, GetNewChatNudgeParameterizedModelPickerResponse, GetPromptContextUsageRequest, GetPromptContextUsageResponse, GetSignedUrlForAttachedMediaRequest, GetSignedUrlForAttachedMediaResponse, GetUsableModelsRequest, GetUsableModelsResponse, ListLocalSubscriptionToolsRequest, ListLocalSubscriptionToolsResponse, NameAgentRequest, NameAgentResponse, NotifyConversationCloneRequest, NotifyConversationCloneResponse, StreamLocalAgentMailboxRequest, StreamLocalAgentMailboxResponse, UpdateConversationMetadataRequest, UpdateConversationMetadataResponse, UploadConversationBlobsRequest, UploadConversationBlobsResponse, UploadLocalAgentRunToPromptQualityRequest, UploadLocalAgentRunToPromptQualityResponse, init_agent_service_pb } from "./agent_service_pb.js";
import { BidiPollRequest, BidiPollResponse, BidiRequestId, init_bidi_pb } from "../../aiserver/v1/bidi_pb.js";
var AgentService;
export { AgentService };
var __wakaru_init_agent_service_connect_initialized = false;
export function init_agent_service_connect() {
if (__wakaru_init_agent_service_connect_initialized) return;
__wakaru_init_agent_service_connect_initialized = true;
"use strict";
init_agent_service_pb();
init_esm2();
init_bidi_pb();
AgentService = {
    typeName: "agent.v1.AgentService",
    methods: {
        run: {
            name: "Run",
            I: AgentClientMessage,
            O: AgentServerMessage,
            kind: MethodKind.BiDiStreaming
        },
        runSSE: {
            name: "RunSSE",
            I: BidiRequestId,
            O: AgentServerMessage,
            kind: MethodKind.ServerStreaming
        },
        runPoll: {
            name: "RunPoll",
            I: BidiPollRequest,
            O: BidiPollResponse,
            kind: MethodKind.ServerStreaming
        },
        nameAgent: {
            name: "NameAgent",
            I: NameAgentRequest,
            O: NameAgentResponse,
            kind: MethodKind.Unary
        },
        updateConversationMetadata: {
            name: "UpdateConversationMetadata",
            I: UpdateConversationMetadataRequest,
            O: UpdateConversationMetadataResponse,
            kind: MethodKind.Unary
        },
        createTranscriptOverview: {
            name: "CreateTranscriptOverview",
            I: CreateTranscriptOverviewRequest,
            O: CreateTranscriptOverviewResponse,
            kind: MethodKind.Unary
        },
        getUsableModels: {
            name: "GetUsableModels",
            I: GetUsableModelsRequest,
            O: GetUsableModelsResponse,
            kind: MethodKind.Unary
        },
        getDefaultModelForCli: {
            name: "GetDefaultModelForCli",
            I: GetDefaultModelForCliRequest,
            O: GetDefaultModelForCliResponse,
            kind: MethodKind.Unary
        },
        getAllowedModelIntents: {
            name: "GetAllowedModelIntents",
            I: GetAllowedModelIntentsRequest,
            O: GetAllowedModelIntentsResponse,
            kind: MethodKind.Unary
        },
        uploadConversationBlobs: {
            name: "UploadConversationBlobs",
            I: UploadConversationBlobsRequest,
            O: UploadConversationBlobsResponse,
            kind: MethodKind.Unary
        },
        uploadLocalAgentRunToPromptQuality: {
            name: "UploadLocalAgentRunToPromptQuality",
            I: UploadLocalAgentRunToPromptQualityRequest,
            O: UploadLocalAgentRunToPromptQualityResponse,
            kind: MethodKind.Unary
        },
        getSignedUrlForAttachedMedia: {
            name: "GetSignedUrlForAttachedMedia",
            I: GetSignedUrlForAttachedMediaRequest,
            O: GetSignedUrlForAttachedMediaResponse,
            kind: MethodKind.Unary
        },
        notifyConversationClone: {
            name: "NotifyConversationClone",
            I: NotifyConversationCloneRequest,
            O: NotifyConversationCloneResponse,
            kind: MethodKind.Unary
        },
        getNewChatNudgeLegacyModelPicker: {
            name: "GetNewChatNudgeLegacyModelPicker",
            I: GetNewChatNudgeLegacyModelPickerRequest,
            O: GetNewChatNudgeLegacyModelPickerResponse,
            kind: MethodKind.Unary
        },
        getNewChatNudgeParameterizedModelPicker: {
            name: "GetNewChatNudgeParameterizedModelPicker",
            I: GetNewChatNudgeParameterizedModelPickerRequest,
            O: GetNewChatNudgeParameterizedModelPickerResponse,
            kind: MethodKind.Unary
        },
        getPromptContextUsage: {
            name: "GetPromptContextUsage",
            I: GetPromptContextUsageRequest,
            O: GetPromptContextUsageResponse,
            kind: MethodKind.Unary
        },
        listLocalSubscriptionTools: {
            name: "ListLocalSubscriptionTools",
            I: ListLocalSubscriptionToolsRequest,
            O: ListLocalSubscriptionToolsResponse,
            kind: MethodKind.Unary
        },
        callLocalSubscriptionTool: {
            name: "CallLocalSubscriptionTool",
            I: CallLocalSubscriptionToolRequest,
            O: CallLocalSubscriptionToolResponse,
            kind: MethodKind.Unary
        },
        streamLocalAgentMailbox: {
            name: "StreamLocalAgentMailbox",
            I: StreamLocalAgentMailboxRequest,
            O: StreamLocalAgentMailboxResponse,
            kind: MethodKind.ServerStreaming
        }
    }
};

}
