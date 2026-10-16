var CONTEXT_TAGS_TO_STRIP, graphemeSegmenter;
export { CONTEXT_TAGS_TO_STRIP, graphemeSegmenter };
var __wakaru_init_context_stripping_initialized = false;
export function init_context_stripping() {
if (__wakaru_init_context_stripping_initialized) return;
__wakaru_init_context_stripping_initialized = true;
"use strict";
CONTEXT_TAGS_TO_STRIP = [
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
];
graphemeSegmenter = (()=>{
    const segmenterCtor = globalThis.Intl?.Segmenter;
    return segmenterCtor ? new segmenterCtor(void 0, {
        granularity: "grapheme"
    }) : void 0;
})();

}
