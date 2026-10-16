import { init_platform_communication_tools } from "../automations/platform-communication-tools.js";
import { init_core5 } from "./core.js";
import { ToolCall, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var DYNAMIC_TOOL_PROFILES, TOOL_CALL_TOOL_FIELDS, AGENT_PROTO_TOOL_NAMES, TOOL_IDENTIFIER_TO_PROTO_TOOL_NAME, BASE_STATIC_NATIVE_TOOL_IDENTIFIERS, NORMALIZED_PROTO_TOOL_NAMES;
export { AGENT_PROTO_TOOL_NAMES, BASE_STATIC_NATIVE_TOOL_IDENTIFIERS, DYNAMIC_TOOL_PROFILES, NORMALIZED_PROTO_TOOL_NAMES, TOOL_CALL_TOOL_FIELDS, TOOL_IDENTIFIER_TO_PROTO_TOOL_NAME };
var __wakaru_init_exclude_tools_initialized = false;
export function init_exclude_tools() {
if (__wakaru_init_exclude_tools_initialized) return;
__wakaru_init_exclude_tools_initialized = true;
"use strict";
init_agent_pb();
init_platform_communication_tools();
init_core5();
DYNAMIC_TOOL_PROFILES = [
    "all-static",
    "minimal",
    "final"
];
TOOL_CALL_TOOL_FIELDS = ToolCall.fields.list().filter((field4)=>field4.oneof?.localName === "tool");
AGENT_PROTO_TOOL_NAMES = TOOL_CALL_TOOL_FIELDS.map((field4)=>field4.name);
TOOL_IDENTIFIER_TO_PROTO_TOOL_NAME = {
    ANTHROPIC_COMPUTER_USE: "computer_use_tool_call",
    GEMINI_COMPUTER_USE: "computer_use_tool_call",
    OPENAI_COMPUTER_USE: "computer_use_tool_call",
    APPLY_PATCH: "edit_tool_call",
    ASK_QUESTION: "ask_question_tool_call",
    BLAME_BY_FILE_PATH_BUGBOT: "blame_by_file_path_tool_call",
    AWAIT: "await_tool_call",
    CREATE_PLAN: "create_plan_tool_call",
    CREATE_PLAN_V2: "create_plan_tool_call",
    CREATE_GOAL: "create_goal_tool_call",
    CODE_LINEAGE: "ai_attribution_tool_call",
    COMMUNICATE_UPDATE: "communicate_update_tool_call",
    CONNECT_SCM: "connect_scm_tool_call",
    SEND_FINAL_SUMMARY: "send_final_summary_tool_call",
    CREATE_TASK: "task_tool_call",
    DELETE: "delete_tool_call",
    EDIT_NOTEBOOK: "edit_tool_call",
    FETCH: "fetch_tool_call",
    GET_MCP_TOOLS: "get_mcp_tools_tool_call",
    FETCH_MCP_RESOURCE: "read_mcp_resource_tool_call",
    GENERATE_IMAGE: "generate_image_tool_call",
    GENERATE_VIDEO: "generate_video_tool_call",
    GLOB: "glob_tool_call",
    GREP: "grep_tool_call",
    GREP_BUGBOT: "grep_tool_call",
    LIST_MCP_RESOURCES: "list_mcp_resources_tool_call",
    LS: "ls_tool_call",
    LS_BUGBOT: "ls_tool_call",
    MCP: "mcp_tool_call",
    MCP_AUTH: "mcp_auth_tool_call",
    MINI_SWE_AGENT_BASH: "shell_tool_call",
    MOCK_READ_LINTS: "read_lints_tool_call",
    MULTI_STR_REPLACE: "edit_tool_call",
    FETCH_CLOUD_AGENT_DATA: "fetch_cloud_agent_data_tool_call",
    PI_BASH: "pi_bash_tool_call",
    PI_EDIT: "pi_edit_tool_call",
    PI_FIND: "pi_find_tool_call",
    PI_GREP: "pi_grep_tool_call",
    PI_LS: "pi_ls_tool_call",
    PI_READ: "pi_read_tool_call",
    PI_WRITE: "pi_write_tool_call",
    PR_MANAGEMENT: "pr_management_tool_call",
    READ: "read_tool_call",
    READ_BUGBOT: "read_tool_call",
    READ_LINTS: "read_lints_tool_call",
    RECORD_SCREEN: "record_screen_tool_call",
    REFLECT: "reflect_tool_call",
    REFLECT_GENERAL: "reflect_tool_call",
    REPORT_BUG: "report_bug_tool_call",
    REPORT_BUGFIX_RESULTS: "report_bugfix_results_tool_call",
    REPLACE_ENV: "replace_env_tool_call",
    SETUP_VM_ENVIRONMENT: "setup_vm_environment_tool_call",
    SEMANTIC_SEARCH: "sem_search_tool_call",
    SEARCH_CONVERSATIONS: "search_conversations_tool_call",
    SET_ACTIVE_BRANCH: "set_active_branch_tool_call",
    SEND_MESSAGE: "send_message_tool_call",
    SEND_TO_TASK: "task_tool_call",
    SEND_TO_USER: "send_to_user_tool_call",
    SHELL: "shell_tool_call",
    STR_REPLACE: "edit_tool_call",
    SWITCH_MODE: "switch_mode_tool_call",
    TASK: "task_tool_call",
    TODO_WRITE: "update_todos_tool_call",
    RECORD_CI_INVESTIGATION_FINDINGS: "record_ci_investigation_findings_tool_call",
    UPDATE_GOAL: "update_goal_tool_call",
    WEB_SEARCH: "web_search_tool_call",
    WEB_FETCH: "web_fetch_tool_call",
    WRITE: "edit_tool_call",
    X_SEARCH: "x_search_tool_call"
};
BASE_STATIC_NATIVE_TOOL_IDENTIFIERS = new Set([
    "ANTHROPIC_COMPUTER_USE",
    "APPLY_PATCH",
    "COMMUNICATE_UPDATE",
    "CREATE_PLAN",
    "CREATE_PLAN_V2",
    "GEMINI_COMPUTER_USE",
    "GLOB",
    "GREP",
    "OPENAI_COMPUTER_USE",
    "PR_MANAGEMENT",
    "READ",
    "RECORD_SCREEN",
    "SEND_MESSAGE",
    "SETUP_VM_ENVIRONMENT",
    "SHELL",
    "STR_REPLACE",
    "WRITE"
]);
NORMALIZED_PROTO_TOOL_NAMES = new Map();
for (const field4 of TOOL_CALL_TOOL_FIELDS){
    NORMALIZED_PROTO_TOOL_NAMES.set(field4.name, field4.name);
    NORMALIZED_PROTO_TOOL_NAMES.set(field4.name.toUpperCase(), field4.name);
    NORMALIZED_PROTO_TOOL_NAMES.set(field4.localName, field4.name);
}

}
