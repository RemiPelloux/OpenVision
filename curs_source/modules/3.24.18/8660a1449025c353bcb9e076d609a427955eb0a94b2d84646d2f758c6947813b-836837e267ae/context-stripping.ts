import { E } from "./tslib.es6.js";
var zXm, Xok;
export { Xok, zXm };
var __wakaru_VXm_initialized = false;
export function VXm() {
if (__wakaru_VXm_initialized) return;
__wakaru_VXm_initialized = true;
"use strict";
E(), zXm = [
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
], Xok = (()=>{
    const t = globalThis.Intl?.Segmenter;
    return t ? new t(void 0, {
        granularity: "grapheme"
    }) : void 0;
})();

}
