import { init_git_subprocess_env } from "./git-subprocess-env.js";
var SHA_REF_REGEX, FULL_SHA_REGEX;
export { FULL_SHA_REGEX, SHA_REF_REGEX };
var __wakaru_init_git_remote_ref_resolve_initialized = false;
export function init_git_remote_ref_resolve() {
if (__wakaru_init_git_remote_ref_resolve_initialized) return;
__wakaru_init_git_remote_ref_resolve_initialized = true;
"use strict";
init_git_subprocess_env();
SHA_REF_REGEX = /^[0-9a-f]{7,40}$/i;
FULL_SHA_REGEX = /^[0-9a-f]{40}$/i;

}
