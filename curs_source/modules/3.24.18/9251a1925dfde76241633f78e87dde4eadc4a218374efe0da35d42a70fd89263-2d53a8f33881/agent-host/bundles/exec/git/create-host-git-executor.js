import { init_local_git_executor } from "./local-git-executor.js";
var __wakaru_init_create_host_git_executor_initialized = false;
export function init_create_host_git_executor() {
if (__wakaru_init_create_host_git_executor_initialized) return;
__wakaru_init_create_host_git_executor_initialized = true;
"use strict";
init_local_git_executor();

}
