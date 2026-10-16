var SCM_RPC_CALLSITE_HEADER_NAME, SCM_RPC_CALLSITES, ALLOWED_SCM_RPC_CALLSITES;
export { ALLOWED_SCM_RPC_CALLSITES, SCM_RPC_CALLSITES, SCM_RPC_CALLSITE_HEADER_NAME };
var __wakaru_init_scm_rpc_callsite_initialized = false;
export function init_scm_rpc_callsite() {
if (__wakaru_init_scm_rpc_callsite_initialized) return;
__wakaru_init_scm_rpc_callsite_initialized = true;
"use strict";
SCM_RPC_CALLSITE_HEADER_NAME = "x-cursor-rpc-callsite";
SCM_RPC_CALLSITES = [
    "pr_tab_init",
    "pr_tab_refresh",
    "pr_branch_poll",
    "pr_status_poll",
    "pr_metadata_refresh",
    "pr_reviews_subtab",
    "pr_diff_view",
    "pr_status_pill",
    "cloud_agent_pr_state",
    "agent_tool_call",
    "unknown"
];
ALLOWED_SCM_RPC_CALLSITES = new Set(SCM_RPC_CALLSITES);

}
