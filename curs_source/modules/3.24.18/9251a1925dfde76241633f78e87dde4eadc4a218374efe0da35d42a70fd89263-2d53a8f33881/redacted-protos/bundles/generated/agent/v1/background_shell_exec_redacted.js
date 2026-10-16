import { init_background_shell_exec_pb } from "../../../../../proto/dist/generated/agent/v1/background_shell_exec_pb.js";
import { init_sandbox_redacted } from "./sandbox_redacted.js";
import { init_shell_exec_redacted } from "./shell_exec_redacted.js";
import { init_utils_redacted } from "./utils_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_background_shell_exec_redacted_initialized = false;
export function init_background_shell_exec_redacted() {
if (__wakaru_init_background_shell_exec_redacted_initialized) return;
__wakaru_init_background_shell_exec_redacted_initialized = true;
"use strict";
init_dist27();
init_background_shell_exec_pb();
init_shell_exec_redacted();
init_sandbox_redacted();
init_utils_redacted();

}
