import { init_commit_scoring } from "../../../agent-analytics/dist/commit-scoring/index.js";
var UNKNOWN_REPO_LABEL, UNKNOWN_BRANCH_NAME;
export { UNKNOWN_BRANCH_NAME, UNKNOWN_REPO_LABEL };
var __wakaru_init_git_repo_initialized = false;
export function init_git_repo() {
if (__wakaru_init_git_repo_initialized) return;
__wakaru_init_git_repo_initialized = true;
"use strict";
init_commit_scoring();
UNKNOWN_REPO_LABEL = "unknown-repo";
UNKNOWN_BRANCH_NAME = "unknown-branch";

}
