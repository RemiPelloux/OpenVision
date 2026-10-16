import { x } from "./tslib.es6.js";
var vdh, D8v;
export { D8v, vdh };
var __wakaru__dh_initialized = false;
export function _dh() {
if (__wakaru__dh_initialized) return;
__wakaru__dh_initialized = true;
"use strict";
x(), vdh = [
    "user_info",
    "project_layout",
    "rules",
    "always_applied_workspace_rules",
    "agent_requestable_workspace_rules",
    "user_rules",
    "agent_skills",
    "available_skills",
    "cloud_instructions",
    "cloud_task_instructions",
    "open_and_recently_viewed_files",
    "system_reminder",
    "system-reminder",
    "instructions_update",
    "mcp_instructions",
    "mcp_file_system",
    "mcp_file_system_servers",
    "git_status",
    "agent_transcripts",
    "cursor_rules_context",
    "attached_files",
    "system_notification",
    "task_notification",
    "agent_notification"
], D8v = (()=>{
    const e = globalThis.Intl?.Segmenter;
    return e ? new e(void 0, {
        granularity: "grapheme"
    }) : void 0;
})();

}
