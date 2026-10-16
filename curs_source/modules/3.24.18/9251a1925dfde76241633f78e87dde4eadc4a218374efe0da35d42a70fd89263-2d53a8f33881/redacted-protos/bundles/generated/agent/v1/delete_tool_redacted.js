import { init_delete_tool_pb } from "../../../../../proto/dist/generated/agent/v1/delete_tool_pb.js";
import { init_delete_exec_redacted } from "./delete_exec_redacted.js";
var __wakaru_init_delete_tool_redacted_initialized = false;
export function init_delete_tool_redacted() {
if (__wakaru_init_delete_tool_redacted_initialized) return;
__wakaru_init_delete_tool_redacted_initialized = true;
"use strict";
init_delete_tool_pb();
init_delete_exec_redacted();

}
