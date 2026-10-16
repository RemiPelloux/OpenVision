import { init_dist32 } from "../../../../../prompt-jsx/dist/index.js";
import { init_jsx_runtime } from "../../../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_swarm_prompts_initialized = false;
export function init_swarm_prompts() {
if (__wakaru_init_swarm_prompts_initialized) return;
__wakaru_init_swarm_prompts_initialized = true;
"use strict";
init_jsx_runtime();
init_dist32();

}
