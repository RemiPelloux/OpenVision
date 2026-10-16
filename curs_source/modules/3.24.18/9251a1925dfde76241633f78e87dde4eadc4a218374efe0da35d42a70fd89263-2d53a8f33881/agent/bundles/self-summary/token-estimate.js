import { init_dist29 } from "../../../agent-summarization/dist/index.js";
import { init_agent_loop_detector } from "../loop-detection/agent-loop-detector.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var __wakaru_init_token_estimate2_initialized = false;
export function init_token_estimate2() {
if (__wakaru_init_token_estimate2_initialized) return;
__wakaru_init_token_estimate2_initialized = true;
"use strict";
init_dist29();
init_dist27();
init_agent_loop_detector();

}
