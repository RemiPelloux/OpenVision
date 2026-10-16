import { init_agent_config } from "./agent-config.js";
import { init_dist2 } from "../../../constants/dist/index.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_project_conversation2_initialized = false;
export function init_project_conversation2() {
if (__wakaru_init_project_conversation2_initialized) return;
__wakaru_init_project_conversation2_initialized = true;
"use strict";
init_dist2();
init_agent_pb();
init_agent_config();

}
