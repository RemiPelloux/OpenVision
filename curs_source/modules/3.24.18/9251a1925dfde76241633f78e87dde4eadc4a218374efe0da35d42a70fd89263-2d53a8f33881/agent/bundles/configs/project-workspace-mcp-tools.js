import { init_project_conversation2 } from "../utils/project-conversation.js";
import { init_mcp_pb } from "../../../proto/dist/generated/agent/v1/mcp_pb.js";
var CURSOR_APP_CONTROL_SERVER, WORKSPACE_MUTATION_TOOLS;
export { CURSOR_APP_CONTROL_SERVER, WORKSPACE_MUTATION_TOOLS };
var __wakaru_init_project_workspace_mcp_tools_initialized = false;
export function init_project_workspace_mcp_tools() {
if (__wakaru_init_project_workspace_mcp_tools_initialized) return;
__wakaru_init_project_workspace_mcp_tools_initialized = true;
"use strict";
init_mcp_pb();
init_project_conversation2();
CURSOR_APP_CONTROL_SERVER = "cursor-app-control";
WORKSPACE_MUTATION_TOOLS = new Set([
    "move_agent_to_root",
    "move_agent_to_cloned_root",
    "create_repo"
]);

}
