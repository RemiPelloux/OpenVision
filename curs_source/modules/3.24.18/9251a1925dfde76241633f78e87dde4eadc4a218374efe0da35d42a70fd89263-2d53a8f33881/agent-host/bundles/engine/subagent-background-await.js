import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { init_subagent_exec_pb } from "../../../proto/dist/generated/agent/v1/subagent_exec_pb.js";
var AWAIT_TIMEOUT_ERROR_MESSAGE;
export { AWAIT_TIMEOUT_ERROR_MESSAGE };
var __wakaru_init_subagent_background_await_initialized = false;
export function init_subagent_background_await() {
if (__wakaru_init_subagent_background_await_initialized) return;
__wakaru_init_subagent_background_await_initialized = true;
"use strict";
init_dist8();
init_subagent_exec_pb();
AWAIT_TIMEOUT_ERROR_MESSAGE = "Await timed out while task is still running";

}
