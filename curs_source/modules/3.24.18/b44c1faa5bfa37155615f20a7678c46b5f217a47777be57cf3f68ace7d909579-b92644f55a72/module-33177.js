"use strict";
require.r(exports), require.d(exports, {
    ChatService: ()=>i,
    ReplayChatService: ()=>a
});
var n = require("./module-50464.js"), s = require("./module-36038.js"), o = require("./module-82537.js");
const i = {
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
            I: o.BidiRequestId,
            O: n.pV,
            kind: s.MethodKind.ServerStreaming
        },
        streamUnifiedChatWithToolsPoll: {
            name: "StreamUnifiedChatWithToolsPoll",
            I: o.BidiPollRequest,
            O: o.BidiPollResponse,
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
            I: o.BidiRequestId,
            O: n.gr,
            kind: s.MethodKind.ServerStreaming
        },
        streamUnifiedChatWithToolsIdempotentPoll: {
            name: "StreamUnifiedChatWithToolsIdempotentPoll",
            I: o.BidiPollRequest,
            O: o.BidiPollResponse,
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
