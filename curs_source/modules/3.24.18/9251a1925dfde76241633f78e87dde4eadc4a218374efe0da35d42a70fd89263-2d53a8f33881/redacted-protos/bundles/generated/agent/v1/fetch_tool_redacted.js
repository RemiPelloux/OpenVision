import { init_fetch_tool_pb } from "../../../../../proto/dist/generated/agent/v1/fetch_tool_pb.js";
import { init_fetch_exec_redacted } from "./fetch_exec_redacted.js";
var __wakaru_init_fetch_tool_redacted_initialized = false;
export function init_fetch_tool_redacted() {
if (__wakaru_init_fetch_tool_redacted_initialized) return;
__wakaru_init_fetch_tool_redacted_initialized = true;
"use strict";
init_fetch_tool_pb();
init_fetch_exec_redacted();

}
