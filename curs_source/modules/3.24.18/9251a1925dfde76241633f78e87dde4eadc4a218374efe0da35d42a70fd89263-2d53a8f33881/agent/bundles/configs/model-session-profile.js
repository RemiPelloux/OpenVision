import { init_agent_config } from "../utils/agent-config.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_model_session_profile_initialized = false;
export function init_model_session_profile() {
if (__wakaru_init_model_session_profile_initialized) return;
__wakaru_init_model_session_profile_initialized = true;
"use strict";
init_agent_pb();
init_agent_config();

}
