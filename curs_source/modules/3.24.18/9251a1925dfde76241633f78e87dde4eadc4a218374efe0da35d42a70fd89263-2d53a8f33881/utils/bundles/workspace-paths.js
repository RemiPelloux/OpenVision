var CURSOR_PROJECTS_DIR, TRANSCRIPTS_SUBDIR, MAX_CONVERSATION_ID_LENGTH;
export { CURSOR_PROJECTS_DIR, MAX_CONVERSATION_ID_LENGTH, TRANSCRIPTS_SUBDIR };
var __wakaru_init_workspace_paths_initialized = false;
export function init_workspace_paths() {
if (__wakaru_init_workspace_paths_initialized) return;
__wakaru_init_workspace_paths_initialized = true;
"use strict";
CURSOR_PROJECTS_DIR = ".cursor/projects";
TRANSCRIPTS_SUBDIR = "agent-transcripts";
MAX_CONVERSATION_ID_LENGTH = 200;

}
