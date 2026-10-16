import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { CallMcpToolRequest, CallMcpToolResponse, ListMcpToolsRequest, ListMcpToolsResponse, MigrateMcpOAuthGrantRequest, MigrateMcpOAuthGrantResponse, RespondToMcpElicitationRequest, RespondToMcpElicitationResponse, SetMcpServerPlacementRequest, SetMcpServerPlacementResponse, init_mcp_tool_pb2 } from "./mcp_tool_pb.js";
var McpToolService;
export { McpToolService };
var __wakaru_init_mcp_tool_connect_initialized = false;
export function init_mcp_tool_connect() {
if (__wakaru_init_mcp_tool_connect_initialized) return;
__wakaru_init_mcp_tool_connect_initialized = true;
"use strict";
init_mcp_tool_pb2();
init_esm2();
McpToolService = {
    typeName: "aiserver.v1.McpToolService",
    methods: {
        listMcpTools: {
            name: "ListMcpTools",
            I: ListMcpToolsRequest,
            O: ListMcpToolsResponse,
            kind: MethodKind.Unary
        },
        callMcpTool: {
            name: "CallMcpTool",
            I: CallMcpToolRequest,
            O: CallMcpToolResponse,
            kind: MethodKind.ServerStreaming
        },
        respondToMcpElicitation: {
            name: "RespondToMcpElicitation",
            I: RespondToMcpElicitationRequest,
            O: RespondToMcpElicitationResponse,
            kind: MethodKind.Unary
        },
        migrateMcpOAuthGrant: {
            name: "MigrateMcpOAuthGrant",
            I: MigrateMcpOAuthGrantRequest,
            O: MigrateMcpOAuthGrantResponse,
            kind: MethodKind.Unary
        },
        setMcpServerPlacement: {
            name: "SetMcpServerPlacement",
            I: SetMcpServerPlacementRequest,
            O: SetMcpServerPlacementResponse,
            kind: MethodKind.Unary
        }
    }
};

}
