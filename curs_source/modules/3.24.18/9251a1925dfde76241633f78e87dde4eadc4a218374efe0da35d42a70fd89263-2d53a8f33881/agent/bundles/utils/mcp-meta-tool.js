import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { init_builtin_tools } from "../tools/mcp/builtin-tools.js";
import { init_mcp8 } from "../tools/mcp/mcp.js";
import { init_meta_tool_names } from "../tools/mcp/meta-tool-names.js";
import { init_mcp_auth_instruction } from "./mcp-auth-instruction.js";
var __wakaru_init_mcp_meta_tool_initialized = false;
export function init_mcp_meta_tool() {
if (__wakaru_init_mcp_meta_tool_initialized) return;
__wakaru_init_mcp_meta_tool_initialized = true;
"use strict";
init_dist8();
init_builtin_tools();
init_mcp8();
init_meta_tool_names();
init_mcp_auth_instruction();

}
