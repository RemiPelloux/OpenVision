import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../context/dist/index.js";
var logger127, LOCAL_LOOP_TURN_NOT_COMPLETED;
export { LOCAL_LOOP_TURN_NOT_COMPLETED, logger127 };
var __wakaru_init_local_loop_attempt_release_initialized = false;
export function init_local_loop_attempt_release() {
if (__wakaru_init_local_loop_attempt_release_initialized) return;
__wakaru_init_local_loop_attempt_release_initialized = true;
"use strict";
init_dist();
logger127 = createLogger("@anysphere/agent-host:local-loop-attempt-release");
LOCAL_LOOP_TURN_NOT_COMPLETED = {
    turnCompleted: false
};

}
