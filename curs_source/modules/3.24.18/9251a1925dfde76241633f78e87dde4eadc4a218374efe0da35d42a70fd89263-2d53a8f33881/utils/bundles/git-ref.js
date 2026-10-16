var INVALID_GIT_REF_PATTERNS;
export { INVALID_GIT_REF_PATTERNS };
var __wakaru_init_git_ref_initialized = false;
export function init_git_ref() {
if (__wakaru_init_git_ref_initialized) return;
__wakaru_init_git_ref_initialized = true;
"use strict";
INVALID_GIT_REF_PATTERNS = [
    /[\s~^:?*\\]/,
    /\[/,
    /\.\./,
    /@\{/,
    /\/\//,
    /\/$/,
    /\.lock$/,
    /\.$/
];

}
