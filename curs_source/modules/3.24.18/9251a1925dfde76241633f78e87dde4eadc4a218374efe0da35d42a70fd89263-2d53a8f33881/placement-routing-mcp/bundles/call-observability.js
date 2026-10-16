import { init_runtime } from "../../agent-host/dist/runtime.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { createTurnRuntimeCallerResolver } from "../../daemon_metrics_exports.js";
import { createKey } from "../../entry_exports.js";
import { init_dist19 } from "../../mcp-agent-exec/dist/index.js";
import { init_dist15 } from "../../mcp-core/dist/index.js";
import { init_esm3 } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_errors9 } from "./errors.js";
import { init_mcp_tool_pb2 } from "../../proto/dist/generated/aiserver/v1/mcp_tool_pb.js";
var import_node_crypto55, logger138, MCP_TOOL_CLIENT_CALL_DURATION_STAT, ROUTED_MCP_TOOL_CALL_MESSAGE, callingConversationKey, defaultCallerResolver, MCP_PLACEMENT_LISTING_WAIT_STAT;
export { MCP_PLACEMENT_LISTING_WAIT_STAT, MCP_TOOL_CLIENT_CALL_DURATION_STAT, ROUTED_MCP_TOOL_CALL_MESSAGE, callingConversationKey, defaultCallerResolver, import_node_crypto55, logger138 };
var __wakaru_init_call_observability_initialized = false;
export function init_call_observability() {
if (__wakaru_init_call_observability_initialized) return;
__wakaru_init_call_observability_initialized = true;
"use strict";
import_node_crypto55 = require("node:crypto");
init_runtime();
init_dist();
init_dist19();
init_dist15();
init_mcp_tool_pb2();
init_esm3();
init_errors9();
logger138 = createLogger("placement-routing-mcp:call");
MCP_TOOL_CLIENT_CALL_DURATION_STAT = "mcp_tool.client_call.duration_ms";
ROUTED_MCP_TOOL_CALL_MESSAGE = "Routed MCP tool call";
callingConversationKey = createKey(Symbol.for("cursor.agentStreamMetadata"), void 0);
defaultCallerResolver = createTurnRuntimeCallerResolver();
MCP_PLACEMENT_LISTING_WAIT_STAT = "mcp_tool.placement_listing.wait_ms";

}
