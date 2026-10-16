import { init_interrupted_shell_output } from "./interrupted-shell-output.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_shell_tool_pb } from "../../../../../proto/dist/generated/agent/v1/shell_tool_pb.js";
var __wakaru_init_streaming_initialized = false;
export function init_streaming() {
if (__wakaru_init_streaming_initialized) return;
__wakaru_init_streaming_initialized = true;
"use strict";
init_agent_pb();
init_shell_tool_pb();
init_interrupted_shell_output();

}
