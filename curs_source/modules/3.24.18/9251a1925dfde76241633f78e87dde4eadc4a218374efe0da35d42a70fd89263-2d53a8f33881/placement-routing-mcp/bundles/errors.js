import { describeNotReachableReason } from "../../daemon_metrics_exports.js";
import { init_esm3 } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { McpPlacement, init_mcp_tool_pb2 } from "../../proto/dist/generated/aiserver/v1/mcp_tool_pb.js";
var PlacementRoutingNeedsAuthError, PlacementRoutingNotReachableError, PlacementRoutingNotDialedError;
export { PlacementRoutingNeedsAuthError, PlacementRoutingNotDialedError, PlacementRoutingNotReachableError };
var __wakaru_init_errors9_initialized = false;
export function init_errors9() {
if (__wakaru_init_errors9_initialized) return;
__wakaru_init_errors9_initialized = true;
"use strict";
init_mcp_tool_pb2();
init_esm3();
PlacementRoutingNeedsAuthError = class extends Error {
    constructor(args){
        super(`MCP server "${args.serverIdentifier}" requires authentication. Call mcp_auth for this server to authorize it, then retry.` + (args.detail ? ` (${args.detail})` : ""));
        this.name = "PlacementRoutingNeedsAuthError";
        this.serverIdentifier = args.serverIdentifier;
        this.servedBy = args.servedBy;
        this.detail = args.detail;
    }
};
PlacementRoutingNotReachableError = class extends Error {
    constructor(args){
        const label = describeNotReachableReason(args.notReachable.reason);
        super(`MCP server "${args.serverIdentifier}" is not reachable from the Cursor backend (${label})` + (args.notReachable.detail ? `: ${args.notReachable.detail}` : "") + ". It can be reclassified as client-placed in MCP settings.");
        this.name = "PlacementRoutingNotReachableError";
        this.serverIdentifier = args.serverIdentifier;
        this.reason = args.notReachable.reason;
        this.detail = args.notReachable.detail;
    }
};
PlacementRoutingNotDialedError = class extends Error {
    constructor(args){
        super(`MCP server "${args.serverIdentifier}" is not dialed by the Cursor backend (placement ${McpPlacement[args.notDialed.placement] ?? "UNSPECIFIED"})` + (args.notDialed.detail ? `: ${args.notDialed.detail}` : ""));
        this.name = "PlacementRoutingNotDialedError";
        this.serverIdentifier = args.serverIdentifier;
        this.placement = args.notDialed.placement;
        this.detail = args.notDialed.detail;
    }
};

}
