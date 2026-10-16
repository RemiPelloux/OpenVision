var CURSOR_WORKTREES_DIR, CURSOR_WORKTREES_GLOB;
export { CURSOR_WORKTREES_DIR, CURSOR_WORKTREES_GLOB };
var __wakaru_init_worktrees_initialized = false;
export function init_worktrees() {
if (__wakaru_init_worktrees_initialized) return;
__wakaru_init_worktrees_initialized = true;
"use strict";
CURSOR_WORKTREES_DIR = ".cursor/worktrees";
CURSOR_WORKTREES_GLOB = `${CURSOR_WORKTREES_DIR}/**`;

}
