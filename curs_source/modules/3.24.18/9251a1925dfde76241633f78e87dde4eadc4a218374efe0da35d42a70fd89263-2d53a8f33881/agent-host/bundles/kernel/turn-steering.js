import { init_dist7 } from "../../../agent-core/dist/index.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var steeringByTurn;
export { steeringByTurn };
var __wakaru_init_turn_steering_initialized = false;
export function init_turn_steering() {
if (__wakaru_init_turn_steering_initialized) return;
__wakaru_init_turn_steering_initialized = true;
"use strict";
init_dist7();
init_agent_pb();
steeringByTurn = new WeakMap();

}
