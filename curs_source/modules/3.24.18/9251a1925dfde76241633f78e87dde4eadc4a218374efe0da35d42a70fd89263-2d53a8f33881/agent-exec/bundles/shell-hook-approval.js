import { init_shell_exec_pb } from "../../proto/dist/generated/agent/v1/shell_exec_pb.js";
var __wakaru_init_shell_hook_approval_initialized = false;
export function init_shell_hook_approval() {
if (__wakaru_init_shell_hook_approval_initialized) return;
__wakaru_init_shell_hook_approval_initialized = true;
"use strict";
init_shell_exec_pb();

}
