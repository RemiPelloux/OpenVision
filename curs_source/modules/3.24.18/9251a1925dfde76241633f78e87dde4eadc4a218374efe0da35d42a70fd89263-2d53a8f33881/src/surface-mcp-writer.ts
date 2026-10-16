import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_mcp_allowlist_precheck_exec_pb } from "../proto/dist/generated/agent/v1/mcp_allowlist_precheck_exec_pb.js";
import { init_mcp_exec_pb } from "../proto/dist/generated/agent/v1/mcp_exec_pb.js";
var import_node_crypto58, MCP_WRITER_DELIVERED_HOP_TIMEOUT, MCP_WRITER_DELIVERED_HOP_ABORTED, MCP_WRITER_WRONG_ARM_RESPONSE;
export { MCP_WRITER_DELIVERED_HOP_ABORTED, MCP_WRITER_DELIVERED_HOP_TIMEOUT, MCP_WRITER_WRONG_ARM_RESPONSE, import_node_crypto58 };
var __wakaru_init_surface_mcp_writer_initialized = false;
export function init_surface_mcp_writer() {
if (__wakaru_init_surface_mcp_writer_initialized) return;
__wakaru_init_surface_mcp_writer_initialized = true;
"use strict";
import_node_crypto58 = require("node:crypto");
init_agent_host_surface_pb();
init_mcp_allowlist_precheck_exec_pb();
init_mcp_exec_pb();
MCP_WRITER_DELIVERED_HOP_TIMEOUT = "mcp_writer hop timed out after the hop was delivered";
MCP_WRITER_DELIVERED_HOP_ABORTED = "mcp_writer hop aborted after the hop was delivered";
MCP_WRITER_WRONG_ARM_RESPONSE = "mcp_writer hop returned a malformed or wrong-arm response";

}
