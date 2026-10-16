var ENABLED, WORKTRIES_REGEX;
export { ENABLED, WORKTRIES_REGEX };
var __wakaru_init_worktree_paths_initialized = false;
export function init_worktree_paths() {
if (__wakaru_init_worktree_paths_initialized) return;
__wakaru_init_worktree_paths_initialized = true;
"use strict";
ENABLED = true;
WORKTRIES_REGEX = /(^\/(?:Users|home)\/[^/]+\/\.cursor\/)worktries(?=\/|$)/g;

}
