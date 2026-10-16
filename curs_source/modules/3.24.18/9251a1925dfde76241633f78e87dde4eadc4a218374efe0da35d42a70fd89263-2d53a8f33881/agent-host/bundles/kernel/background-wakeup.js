import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_background_wakeup_initialized = false;
export function init_background_wakeup() {
if (__wakaru_init_background_wakeup_initialized) return;
__wakaru_init_background_wakeup_initialized = true;
"use strict";
init_agent_pb();

}
