import { Flh, Llh, Olh, Plh, QKi, Rlh, ZKi, blh, qlh, ubo, ylh } from "./mcp_tool_pb_2.js";
import { bi } from "./protobuf.js";
import { ae } from "./service-type.js";
import { x } from "./tslib.es6.js";
var Cbo;
export { Cbo };
var __wakaru_wuh_initialized = false;
export function wuh() {
if (__wakaru_wuh_initialized) return;
__wakaru_wuh_initialized = true;
"use strict";
x(), QKi(), bi(), Cbo = {
    typeName: "aiserver.v1.McpToolService",
    methods: {
        listMcpTools: {
            name: "ListMcpTools",
            I: ubo,
            O: blh,
            kind: ae.Unary
        },
        callMcpTool: {
            name: "CallMcpTool",
            I: ylh,
            O: Rlh,
            kind: ae.ServerStreaming
        },
        respondToMcpElicitation: {
            name: "RespondToMcpElicitation",
            I: Plh,
            O: Llh,
            kind: ae.Unary
        },
        migrateMcpOAuthGrant: {
            name: "MigrateMcpOAuthGrant",
            I: Olh,
            O: Flh,
            kind: ae.Unary
        },
        setMcpServerPlacement: {
            name: "SetMcpServerPlacement",
            I: ZKi,
            O: qlh,
            kind: ae.Unary
        }
    }
};

}
