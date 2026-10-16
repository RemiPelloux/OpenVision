import { init_default_model } from "./default-model.js";
import { init_turn_runner2 } from "./turn-runner.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_session_runner_initialized = false;
export function init_session_runner() {
if (__wakaru_init_session_runner_initialized) return;
__wakaru_init_session_runner_initialized = true;
"use strict";
init_agent_pb();
init_default_model();
init_turn_runner2();

}
