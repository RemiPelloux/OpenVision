import { init_core5 } from "../tools/core.js";
import { init_exclude_tools } from "../tools/exclude-tools.js";
import { init_clamp_advertised_tools } from "../tools/mcp/clamp-advertised-tools.js";
import { init_subagents_pb } from "../../../proto/dist/generated/agent/v1/subagents_pb.js";
var __wakaru_init_tool_set_finalization_initialized = false;
export function init_tool_set_finalization() {
if (__wakaru_init_tool_set_finalization_initialized) return;
__wakaru_init_tool_set_finalization_initialized = true;
"use strict";
init_subagents_pb();
init_core5();
init_exclude_tools();
init_clamp_advertised_tools();

}
