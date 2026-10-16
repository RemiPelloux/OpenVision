import { init_dist28 } from "../../../../agent-transcript/dist/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_labeling_agent_mode_initialized = false;
export function init_labeling_agent_mode() {
if (__wakaru_init_labeling_agent_mode_initialized) return;
__wakaru_init_labeling_agent_mode_initialized = true;
"use strict";
init_dist28();
init_agent_pb();

}
