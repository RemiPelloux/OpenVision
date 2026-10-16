import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
var logger42;
export { logger42 };
var __wakaru_init_pipeline2_initialized = false;
export function init_pipeline2() {
if (__wakaru_init_pipeline2_initialized) return;
__wakaru_init_pipeline2_initialized = true;
"use strict";
init_dist();
logger42 = createLogger("summarization-pipeline");

}
