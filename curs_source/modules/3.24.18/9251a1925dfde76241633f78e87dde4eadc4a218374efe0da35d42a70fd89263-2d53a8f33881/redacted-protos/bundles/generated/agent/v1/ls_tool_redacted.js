import { init_ls_tool_pb } from "../../../../../proto/dist/generated/agent/v1/ls_tool_pb.js";
import { init_ls_exec_redacted } from "./ls_exec_redacted.js";
var __wakaru_init_ls_tool_redacted_initialized = false;
export function init_ls_tool_redacted() {
if (__wakaru_init_ls_tool_redacted_initialized) return;
__wakaru_init_ls_tool_redacted_initialized = true;
"use strict";
init_ls_tool_pb();
init_ls_exec_redacted();

}
