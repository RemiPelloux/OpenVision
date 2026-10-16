import { init_agent_loop_detector } from "./agent-loop-detector.js";
var __wakaru_init_loop_nudge_middleware_initialized = false;
export function init_loop_nudge_middleware() {
if (__wakaru_init_loop_nudge_middleware_initialized) return;
__wakaru_init_loop_nudge_middleware_initialized = true;
"use strict";
init_agent_loop_detector();

}
