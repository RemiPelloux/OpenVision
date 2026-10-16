import { init_grep_tool_pb } from "../../../../../proto/dist/generated/agent/v1/grep_tool_pb.js";
import { init_grep_exec_redacted } from "./grep_exec_redacted.js";
var __wakaru_init_grep_tool_redacted_initialized = false;
export function init_grep_tool_redacted() {
if (__wakaru_init_grep_tool_redacted_initialized) return;
__wakaru_init_grep_tool_redacted_initialized = true;
"use strict";
init_grep_tool_pb();
init_grep_exec_redacted();

}
