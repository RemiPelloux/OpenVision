import { init_shell_exec_pb } from "../../proto/dist/generated/agent/v1/shell_exec_pb.js";
var DEFAULT_SHELL_FOREGROUND_TIMEOUT_MS;
export { DEFAULT_SHELL_FOREGROUND_TIMEOUT_MS };
var __wakaru_init_shell_timeout_initialized = false;
export function init_shell_timeout() {
if (__wakaru_init_shell_timeout_initialized) return;
__wakaru_init_shell_timeout_initialized = true;
"use strict";
init_shell_exec_pb();
DEFAULT_SHELL_FOREGROUND_TIMEOUT_MS = 3e4;

}
