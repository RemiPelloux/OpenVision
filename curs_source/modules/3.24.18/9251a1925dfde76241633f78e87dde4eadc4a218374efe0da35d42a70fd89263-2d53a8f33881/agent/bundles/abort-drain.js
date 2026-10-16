import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { createCounter } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { init_dist3 } from "../../utils/dist/index.js";
var logger44, ABORT_DRAIN_TIMEOUT_MS, abortDrainOutcomeCounter;
export { ABORT_DRAIN_TIMEOUT_MS, abortDrainOutcomeCounter, logger44 };
var __wakaru_init_abort_drain_initialized = false;
export function init_abort_drain() {
if (__wakaru_init_abort_drain_initialized) return;
__wakaru_init_abort_drain_initialized = true;
"use strict";
init_dist();
init_dist4();
init_dist3();
logger44 = createLogger("@anysphere/agent");
ABORT_DRAIN_TIMEOUT_MS = 5e3;
abortDrainOutcomeCounter = createCounter("agent.run_stream.abort_drain", {
    description: "Outcome of the bounded drain of pending blob/checkpoint work when runStream exits via an error (including user aborts).",
    labelNames: [
        "outcome"
    ]
});

}
