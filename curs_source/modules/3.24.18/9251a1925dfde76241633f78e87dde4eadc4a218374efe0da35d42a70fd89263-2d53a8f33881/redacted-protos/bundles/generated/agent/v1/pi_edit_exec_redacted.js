import { init_pi_edit_exec_pb } from "../../../../../proto/dist/generated/agent/v1/pi_edit_exec_pb.js";
import { init_pi_edit_tool_redacted } from "./pi_edit_tool_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_pi_edit_exec_redacted_initialized = false;
export function init_pi_edit_exec_redacted() {
if (__wakaru_init_pi_edit_exec_redacted_initialized) return;
__wakaru_init_pi_edit_exec_redacted_initialized = true;
"use strict";
init_dist27();
init_pi_edit_exec_pb();
init_pi_edit_tool_redacted();

}
