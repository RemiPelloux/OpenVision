"use strict";
require.r(exports), require.d(exports, {
    ChatService: ()=>o,
    ReplayChatService: ()=>a
});
var n = require("./module-464.js"), s = require("./module-6038.js"), i = require("./module-2537.js");
const o = {
    typeName: "aiserver.v1.ChatService",
    methods: {
        streamUnifiedChat: {
            name: "StreamUnifiedChat",
            I: n.w1,
            O: n.QX,
            kind: s.MethodKind.ServerStreaming
        },
        streamUnifiedChatWithTools: {
            name: "StreamUnifiedChatWithTools",
            I: n.jc,
            O: n.pV,
            kind: s.MethodKind.BiDiStreaming
        },
        streamUnifiedChatWithToolsSSE: {
            name: "StreamUnifiedChatWithToolsSSE",
            I: i.BidiRequestId,
            O: n.pV,
            kind: s.MethodKind.ServerStreaming
        },
        streamUnifiedChatWithToolsPoll: {
            name: "StreamUnifiedChatWithToolsPoll",
            I: i.BidiPollRequest,
            O: i.BidiPollResponse,
            kind: s.MethodKind.ServerStreaming
        },
        streamUnifiedChatWithToolsIdempotent: {
            name: "StreamUnifiedChatWithToolsIdempotent",
            I: n.Wu,
            O: n.gr,
            kind: s.MethodKind.BiDiStreaming
        },
        streamUnifiedChatWithToolsIdempotentSSE: {
            name: "StreamUnifiedChatWithToolsIdempotentSSE",
            I: i.BidiRequestId,
            O: n.gr,
            kind: s.MethodKind.ServerStreaming
        },
        streamUnifiedChatWithToolsIdempotentPoll: {
            name: "StreamUnifiedChatWithToolsIdempotentPoll",
            I: i.BidiPollRequest,
            O: i.BidiPollResponse,
            kind: s.MethodKind.ServerStreaming
        },
        getConversationSummary: {
            name: "GetConversationSummary",
            I: n.w1,
            O: n.KR,
            kind: s.MethodKind.Unary
        },
        streamSpeculativeSummaries: {
            name: "StreamSpeculativeSummaries",
            I: n.w1,
            O: n.KR,
            kind: s.MethodKind.ServerStreaming
        },
        warmStreamUnifiedChatWithTools: {
            name: "WarmStreamUnifiedChatWithTools",
            I: n.w1,
            O: n.oP,
            kind: s.MethodKind.Unary
        },
        getPromptDryRun: {
            name: "GetPromptDryRun",
            I: n.w1,
            O: n.K4,
            kind: s.MethodKind.Unary
        },
        streamFullFileCmdK: {
            name: "StreamFullFileCmdK",
            I: n.w1,
            O: n.pV,
            kind: s.MethodKind.ServerStreaming
        },
        warmFullFileCmdK: {
            name: "WarmFullFileCmdK",
            I: n.w1,
            O: n.oP,
            kind: s.MethodKind.Unary
        },
        convertOALToNAL: {
            name: "ConvertOALToNAL",
            I: n.Db,
            O: n.xb,
            kind: s.MethodKind.Unary
        }
    }
}, a = {
    typeName: "aiserver.v1.ReplayChatService",
    methods: {
        streamReplayChat: {
            name: "StreamReplayChat",
            I: n.fN,
            O: n.pV,
            kind: s.MethodKind.ServerStreaming
        }
    }
};
