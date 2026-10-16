import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { init_mcp_exec_pb } from "../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { init_utils_pb } from "../../proto/dist/generated/agent/v1/utils_pb.js";
import { init_write_exec_pb } from "../../proto/dist/generated/agent/v1/write_exec_pb.js";
var import_node_crypto12, import_node_path44, AGENT_TOOLS_DIR, BIDI_APPEND_LIMIT_BYTES, BIDI_APPEND_HEADROOM_BYTES, MAX_OUTPUT_FILE_SIZE, MCP_TEXT_FILE_THRESHOLD_BYTES, AGENT_TOOLS_FILE_WRITE_THRESHOLD_BYTES;
export { AGENT_TOOLS_DIR, AGENT_TOOLS_FILE_WRITE_THRESHOLD_BYTES, BIDI_APPEND_HEADROOM_BYTES, BIDI_APPEND_LIMIT_BYTES, MAX_OUTPUT_FILE_SIZE, MCP_TEXT_FILE_THRESHOLD_BYTES, import_node_crypto12, import_node_path44 };
var __wakaru_init_agent_tools_file_initialized = false;
export function init_agent_tools_file() {
if (__wakaru_init_agent_tools_file_initialized) return;
__wakaru_init_agent_tools_file_initialized = true;
"use strict";
import_node_crypto12 = require("node:crypto");
import_node_path44 = __toESM(require("node:path"), 1);
init_mcp_exec_pb();
init_utils_pb();
init_write_exec_pb();
AGENT_TOOLS_DIR = "agent-tools";
BIDI_APPEND_LIMIT_BYTES = 50 * 1024 * 1024;
BIDI_APPEND_HEADROOM_BYTES = 1024 * 1024;
MAX_OUTPUT_FILE_SIZE = BIDI_APPEND_LIMIT_BYTES - BIDI_APPEND_HEADROOM_BYTES;
MCP_TEXT_FILE_THRESHOLD_BYTES = 4e4;
AGENT_TOOLS_FILE_WRITE_THRESHOLD_BYTES = 2e4;

}
