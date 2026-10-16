import { init_dist7 } from "../../../agent-core/dist/index.js";
import { init_turn_steering } from "./turn-steering.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_agent_host_pb } from "../../../proto/dist/generated/agent/v1/agent_host_pb.js";
var logger115, SOFT_INTERRUPT_HARD_CANCEL_GRACE_MS, queuedTurnStarts;
export { SOFT_INTERRUPT_HARD_CANCEL_GRACE_MS, logger115, queuedTurnStarts };
var __wakaru_init_turn_queue_initialized = false;
export function init_turn_queue() {
if (__wakaru_init_turn_queue_initialized) return;
__wakaru_init_turn_queue_initialized = true;
"use strict";
init_dist7();
init_dist();
init_agent_host_pb();
init_turn_steering();
logger115 = createLogger("agent-host:turn");
SOFT_INTERRUPT_HARD_CANCEL_GRACE_MS = 8e3;
queuedTurnStarts = new WeakMap();

}
