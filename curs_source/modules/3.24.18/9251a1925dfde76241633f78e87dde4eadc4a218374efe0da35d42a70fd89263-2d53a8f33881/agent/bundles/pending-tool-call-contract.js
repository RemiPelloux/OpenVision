import { init_dist8 } from "../../agent-exec/dist/index.js";
import { init_tool_stream_executor } from "./tool-stream-executor.js";
import { init_core5 } from "./tools/core.js";
var __wakaru_init_pending_tool_call_contract_initialized = false;
export function init_pending_tool_call_contract() {
if (__wakaru_init_pending_tool_call_contract_initialized) return;
__wakaru_init_pending_tool_call_contract_initialized = true;
"use strict";
init_dist8();
init_tool_stream_executor();
init_core5();

}
