var GIT_COMMIT_APPROXIMATE_MAX_TOKENS_PER_COMMIT, GIT_COMMIT_CHARS_PER_TOKEN, MAX_GIT_COMMIT_CHAR_LENGTH, GIT_COMMIT_DIFF_TRUNCATION_NOTICE;
export { GIT_COMMIT_APPROXIMATE_MAX_TOKENS_PER_COMMIT, GIT_COMMIT_CHARS_PER_TOKEN, GIT_COMMIT_DIFF_TRUNCATION_NOTICE, MAX_GIT_COMMIT_CHAR_LENGTH };
var __wakaru_init_git_commit_processing_initialized = false;
export function init_git_commit_processing() {
if (__wakaru_init_git_commit_processing_initialized) return;
__wakaru_init_git_commit_processing_initialized = true;
"use strict";
GIT_COMMIT_APPROXIMATE_MAX_TOKENS_PER_COMMIT = 8e3;
GIT_COMMIT_CHARS_PER_TOKEN = 4;
MAX_GIT_COMMIT_CHAR_LENGTH = GIT_COMMIT_APPROXIMATE_MAX_TOKENS_PER_COMMIT * GIT_COMMIT_CHARS_PER_TOKEN;
GIT_COMMIT_DIFF_TRUNCATION_NOTICE = "\n\n[commit diff truncated due to size; run `git show <sha>` locally for the full output]";

}
