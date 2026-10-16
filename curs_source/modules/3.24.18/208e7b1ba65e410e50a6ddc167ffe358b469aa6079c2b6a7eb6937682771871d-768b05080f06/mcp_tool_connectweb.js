import { $ue, Aue, CD, Cue, Hue, Vue, Wue, ame, eme, tme, vw } from "./mcp_tool_pb_2.js";
import { F } from "./protobuf.js";
import { C } from "./service-type.js";
import { h } from "./tslib.es6.js";
var ome;
export { ome };
var __wakaru_wKe_initialized = false;
export function wKe() {
if (__wakaru_wKe_initialized) return;
__wakaru_wKe_initialized = true;
"use strict";
h(), ame(), F(), ome = {
    typeName: "aiserver.v1.McpToolService",
    methods: {
        listMcpTools: {
            name: "ListMcpTools",
            I: vw,
            O: Cue,
            kind: C.Unary
        },
        callMcpTool: {
            name: "CallMcpTool",
            I: Aue,
            O: Wue,
            kind: C.ServerStreaming
        },
        respondToMcpElicitation: {
            name: "RespondToMcpElicitation",
            I: Vue,
            O: $ue,
            kind: C.Unary
        },
        migrateMcpOAuthGrant: {
            name: "MigrateMcpOAuthGrant",
            I: CD,
            O: Hue,
            kind: C.Unary
        },
        setMcpServerPlacement: {
            name: "SetMcpServerPlacement",
            I: eme,
            O: tme,
            kind: C.Unary
        }
    }
};

}
