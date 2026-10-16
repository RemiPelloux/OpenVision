import { init_mcp_tool_pb } from "../../../../../proto/dist/generated/agent/v1/mcp_tool_pb.js";
import { init_mcp_exec_redacted } from "./mcp_exec_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_mcp_tool_redacted_initialized = false;
export function init_mcp_tool_redacted() {
if (__wakaru_init_mcp_tool_redacted_initialized) return;
__wakaru_init_mcp_tool_redacted_initialized = true;
"use strict";
init_dist27();
init_mcp_tool_pb();
init_mcp_exec_redacted();

}
