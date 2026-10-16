import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { BidiPollRequest, BidiPollResponse, BidiRequestId, init_bidi_pb } from "./bidi_pb.js";
import { ConversationSummary2, ConvertOALToNALRequest, ConvertOALToNALResponse, GetPromptDryRunResponse, StreamReplayChatRequest, StreamUnifiedChatRequest, StreamUnifiedChatRequestWithTools, StreamUnifiedChatRequestWithToolsIdempotent, StreamUnifiedChatResponse, StreamUnifiedChatResponseWithTools, StreamUnifiedChatResponseWithToolsIdempotent, WarmStreamUnifiedChatWithToolsResponse, init_chat_pb } from "./chat_pb.js";
var ChatService, ReplayChatService;
export { ChatService, ReplayChatService };
var __wakaru_init_chat_connect_initialized = false;
export function init_chat_connect() {
if (__wakaru_init_chat_connect_initialized) return;
__wakaru_init_chat_connect_initialized = true;
"use strict";
init_chat_pb();
init_esm2();
init_bidi_pb();
ChatService = {
    typeName: "aiserver.v1.ChatService",
    methods: {
        streamUnifiedChat: {
            name: "StreamUnifiedChat",
            I: StreamUnifiedChatRequest,
            O: StreamUnifiedChatResponse,
            kind: MethodKind.ServerStreaming
        },
        streamUnifiedChatWithTools: {
            name: "StreamUnifiedChatWithTools",
            I: StreamUnifiedChatRequestWithTools,
            O: StreamUnifiedChatResponseWithTools,
            kind: MethodKind.BiDiStreaming
        },
        streamUnifiedChatWithToolsSSE: {
            name: "StreamUnifiedChatWithToolsSSE",
            I: BidiRequestId,
            O: StreamUnifiedChatResponseWithTools,
            kind: MethodKind.ServerStreaming
        },
        streamUnifiedChatWithToolsPoll: {
            name: "StreamUnifiedChatWithToolsPoll",
            I: BidiPollRequest,
            O: BidiPollResponse,
            kind: MethodKind.ServerStreaming
        },
        streamUnifiedChatWithToolsIdempotent: {
            name: "StreamUnifiedChatWithToolsIdempotent",
            I: StreamUnifiedChatRequestWithToolsIdempotent,
            O: StreamUnifiedChatResponseWithToolsIdempotent,
            kind: MethodKind.BiDiStreaming
        },
        streamUnifiedChatWithToolsIdempotentSSE: {
            name: "StreamUnifiedChatWithToolsIdempotentSSE",
            I: BidiRequestId,
            O: StreamUnifiedChatResponseWithToolsIdempotent,
            kind: MethodKind.ServerStreaming
        },
        streamUnifiedChatWithToolsIdempotentPoll: {
            name: "StreamUnifiedChatWithToolsIdempotentPoll",
            I: BidiPollRequest,
            O: BidiPollResponse,
            kind: MethodKind.ServerStreaming
        },
        getConversationSummary: {
            name: "GetConversationSummary",
            I: StreamUnifiedChatRequest,
            O: ConversationSummary2,
            kind: MethodKind.Unary
        },
        streamSpeculativeSummaries: {
            name: "StreamSpeculativeSummaries",
            I: StreamUnifiedChatRequest,
            O: ConversationSummary2,
            kind: MethodKind.ServerStreaming
        },
        warmStreamUnifiedChatWithTools: {
            name: "WarmStreamUnifiedChatWithTools",
            I: StreamUnifiedChatRequest,
            O: WarmStreamUnifiedChatWithToolsResponse,
            kind: MethodKind.Unary
        },
        getPromptDryRun: {
            name: "GetPromptDryRun",
            I: StreamUnifiedChatRequest,
            O: GetPromptDryRunResponse,
            kind: MethodKind.Unary
        },
        streamFullFileCmdK: {
            name: "StreamFullFileCmdK",
            I: StreamUnifiedChatRequest,
            O: StreamUnifiedChatResponseWithTools,
            kind: MethodKind.ServerStreaming
        },
        warmFullFileCmdK: {
            name: "WarmFullFileCmdK",
            I: StreamUnifiedChatRequest,
            O: WarmStreamUnifiedChatWithToolsResponse,
            kind: MethodKind.Unary
        },
        convertOALToNAL: {
            name: "ConvertOALToNAL",
            I: ConvertOALToNALRequest,
            O: ConvertOALToNALResponse,
            kind: MethodKind.Unary
        }
    }
};
ReplayChatService = {
    typeName: "aiserver.v1.ReplayChatService",
    methods: {
        streamReplayChat: {
            name: "StreamReplayChat",
            I: StreamReplayChatRequest,
            O: StreamUnifiedChatResponseWithTools,
            kind: MethodKind.ServerStreaming
        }
    }
};

}
