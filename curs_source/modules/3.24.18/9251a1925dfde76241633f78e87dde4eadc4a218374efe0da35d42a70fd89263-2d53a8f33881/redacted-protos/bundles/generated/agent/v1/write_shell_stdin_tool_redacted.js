import { init_write_shell_stdin_tool_pb } from "../../../../../proto/dist/generated/agent/v1/write_shell_stdin_tool_pb.js";
import { init_background_shell_exec_redacted } from "./background_shell_exec_redacted.js";
var __wakaru_init_write_shell_stdin_tool_redacted_initialized = false;
export function init_write_shell_stdin_tool_redacted() {
if (__wakaru_init_write_shell_stdin_tool_redacted_initialized) return;
__wakaru_init_write_shell_stdin_tool_redacted_initialized = true;
"use strict";
init_write_shell_stdin_tool_pb();
init_background_shell_exec_redacted();

}
