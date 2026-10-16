import { init_shared3 } from "../prompts/deprecated-do-not-use/shared.js";
import { init_mcp_auth_instruction } from "./mcp-auth-instruction.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_mcp_file_system_initialized = false;
export function init_mcp_file_system() {
if (__wakaru_init_mcp_file_system_initialized) return;
__wakaru_init_mcp_file_system_initialized = true;
"use strict";
init_agent_pb();
init_shared3();
init_mcp_auth_instruction();
init_mcp_auth_instruction();

}
