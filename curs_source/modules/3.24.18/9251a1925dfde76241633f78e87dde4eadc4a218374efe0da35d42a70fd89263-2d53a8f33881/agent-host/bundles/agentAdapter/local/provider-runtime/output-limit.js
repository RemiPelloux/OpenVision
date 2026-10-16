import { init_dist9 } from "../../../../../agent-client/dist/index.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
var __wakaru_init_output_limit_initialized = false;
export function init_output_limit() {
if (__wakaru_init_output_limit_initialized) return;
__wakaru_init_output_limit_initialized = true;
"use strict";
init_dist9();
init_dist26();

}
