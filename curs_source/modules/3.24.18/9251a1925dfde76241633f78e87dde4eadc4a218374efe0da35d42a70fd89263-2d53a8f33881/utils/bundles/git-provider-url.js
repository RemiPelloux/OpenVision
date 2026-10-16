var GIT_SUFFIX, BITBUCKET_NON_REPOSITORY_ROOT_PATHS;
export { BITBUCKET_NON_REPOSITORY_ROOT_PATHS, GIT_SUFFIX };
var __wakaru_init_git_provider_url_initialized = false;
export function init_git_provider_url() {
if (__wakaru_init_git_provider_url_initialized) return;
__wakaru_init_git_provider_url_initialized = true;
"use strict";
GIT_SUFFIX = /\.git$/i;
BITBUCKET_NON_REPOSITORY_ROOT_PATHS = new Set([
    "account",
    "dashboard"
]);

}
