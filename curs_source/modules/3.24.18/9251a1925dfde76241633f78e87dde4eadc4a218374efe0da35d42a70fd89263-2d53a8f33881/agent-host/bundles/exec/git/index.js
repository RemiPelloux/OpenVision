import { init_create_host_git_executor } from "./create-host-git-executor.js";
import { init_local_git_executor } from "./local-git-executor.js";
import { init_resolve_host_git_executor } from "./resolve-host-git-executor.js";
var __wakaru_init_git2_initialized = false;
export function init_git2() {
if (__wakaru_init_git2_initialized) return;
__wakaru_init_git2_initialized = true;
"use strict";
init_create_host_git_executor();
init_local_git_executor();
init_resolve_host_git_executor();

}
