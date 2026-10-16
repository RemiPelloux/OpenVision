import { init_errors2 } from "./errors.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
var logger13, BASE_DELAY_MS, BASE_DELAY_MS_IN_TEST, MAX_FINITE_RETRY_DELAY_MS, MAX_ENDLESS_RETRY_DELAY_MS, MAX_NO_PROGRESS_RESUME_FAILURES, MODEL_OUTPUT_UPDATE_CASES;
export { BASE_DELAY_MS, BASE_DELAY_MS_IN_TEST, MAX_ENDLESS_RETRY_DELAY_MS, MAX_FINITE_RETRY_DELAY_MS, MAX_NO_PROGRESS_RESUME_FAILURES, MODEL_OUTPUT_UPDATE_CASES, logger13 };
var __wakaru_init_turn_runner_initialized = false;
export function init_turn_runner() {
if (__wakaru_init_turn_runner_initialized) return;
__wakaru_init_turn_runner_initialized = true;
"use strict";
init_dist();
init_dist3();
init_agent_pb();
init_errors2();
logger13 = createLogger("@anysphere/agent-client:turn-runner");
BASE_DELAY_MS = 1e3;
BASE_DELAY_MS_IN_TEST = 100;
MAX_FINITE_RETRY_DELAY_MS = 6e4;
MAX_ENDLESS_RETRY_DELAY_MS = 5 * 60 * 1e3;
MAX_NO_PROGRESS_RESUME_FAILURES = 2;
MODEL_OUTPUT_UPDATE_CASES = new Set([
    "textDelta",
    "thinkingDelta",
    "thinkingCompleted",
    "partialToolCall",
    "toolCallDelta",
    "toolCallStarted",
    "toolCallCompleted",
    "tokenDelta"
]);

}
