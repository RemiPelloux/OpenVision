var CLAUDE_HOME_SUBDIR, CLAUDE_PROJECTS_SUBDIR, CLAUDE_HISTORY_FILENAME;
export { CLAUDE_HISTORY_FILENAME, CLAUDE_HOME_SUBDIR, CLAUDE_PROJECTS_SUBDIR };
var __wakaru_init_claude_code_paths_initialized = false;
export function init_claude_code_paths() {
if (__wakaru_init_claude_code_paths_initialized) return;
__wakaru_init_claude_code_paths_initialized = true;
"use strict";
CLAUDE_HOME_SUBDIR = ".claude";
CLAUDE_PROJECTS_SUBDIR = "projects";
CLAUDE_HISTORY_FILENAME = "history.jsonl";

}
