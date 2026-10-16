import { init_dist8 } from "../../agent-exec/dist/index.js";
import { init_dist15 } from "../../mcp-core/dist/index.js";
import { init_mcp_tool_pb2 } from "../../proto/dist/generated/aiserver/v1/mcp_tool_pb.js";
var DEFAULT_MCP_ACCOUNT_KEY, EMPTY_PLACEMENT_SNAPSHOT;
export { DEFAULT_MCP_ACCOUNT_KEY, EMPTY_PLACEMENT_SNAPSHOT };
var __wakaru_init_placement_snapshot_initialized = false;
export function init_placement_snapshot() {
if (__wakaru_init_placement_snapshot_initialized) return;
__wakaru_init_placement_snapshot_initialized = true;
"use strict";
init_dist8();
init_dist15();
init_mcp_tool_pb2();
DEFAULT_MCP_ACCOUNT_KEY = "default";
EMPTY_PLACEMENT_SNAPSHOT = {
    rows: new Map(),
    serverPlacedIdentifiers: new Set(),
    serverPlacedUrls: new Set()
};

}
