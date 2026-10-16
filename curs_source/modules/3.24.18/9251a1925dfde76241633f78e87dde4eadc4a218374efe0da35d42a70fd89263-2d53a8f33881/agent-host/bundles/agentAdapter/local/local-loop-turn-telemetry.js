import { init_local_loop_turn_router } from "./local-loop-turn-router.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../context/dist/index.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
var logger110, LOCAL_LOOP, LOCAL_LOOP_TURN_RESULT_METRIC, LOCAL_LOOP_TURN_DURATION_METRIC, FIRST_TOKEN_INTERACTION_CASES;
export { FIRST_TOKEN_INTERACTION_CASES, LOCAL_LOOP, LOCAL_LOOP_TURN_DURATION_METRIC, LOCAL_LOOP_TURN_RESULT_METRIC, logger110 };
var __wakaru_init_local_loop_turn_telemetry_initialized = false;
export function init_local_loop_turn_telemetry() {
if (__wakaru_init_local_loop_turn_telemetry_initialized) return;
__wakaru_init_local_loop_turn_telemetry_initialized = true;
"use strict";
init_dist();
init_dist4();
init_local_loop_turn_router();
logger110 = createLogger("@anysphere/agent-host:local-loop-turn-telemetry");
LOCAL_LOOP = "local_loop";
LOCAL_LOOP_TURN_RESULT_METRIC = "agent_host.local_loop.turn.result";
LOCAL_LOOP_TURN_DURATION_METRIC = "agent_host.local_loop.turn.duration_ms";
FIRST_TOKEN_INTERACTION_CASES = new Set([
    "textDelta",
    "thinkingDelta",
    "partialToolCall",
    "toolCallStarted",
    "toolCallDelta"
]);

}
