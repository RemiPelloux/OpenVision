import { Iel, XKm, ZKm, aYm, cns, dYm, mYm, pYm, uYm, uns, wYm } from "./mcp_tool_pb_2.js";
import { hr } from "./protobuf.js";
import { ke } from "./service-type.js";
import { E } from "./tslib.es6.js";
var jel;
export { jel };
var __wakaru_eXm_initialized = false;
export function eXm() {
if (__wakaru_eXm_initialized) return;
__wakaru_eXm_initialized = true;
"use strict";
E(), uns(), hr(), jel = {
    typeName: "aiserver.v1.McpToolService",
    methods: {
        listMcpTools: {
            name: "ListMcpTools",
            I: Iel,
            O: XKm,
            kind: ke.Unary
        },
        callMcpTool: {
            name: "CallMcpTool",
            I: ZKm,
            O: aYm,
            kind: ke.ServerStreaming
        },
        respondToMcpElicitation: {
            name: "RespondToMcpElicitation",
            I: uYm,
            O: dYm,
            kind: ke.Unary
        },
        migrateMcpOAuthGrant: {
            name: "MigrateMcpOAuthGrant",
            I: pYm,
            O: mYm,
            kind: ke.Unary
        },
        setMcpServerPlacement: {
            name: "SetMcpServerPlacement",
            I: cns,
            O: wYm,
            kind: ke.Unary
        }
    }
};

}
