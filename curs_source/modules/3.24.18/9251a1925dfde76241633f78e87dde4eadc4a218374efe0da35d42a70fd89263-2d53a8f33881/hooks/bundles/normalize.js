import { init_claude_code_types } from "./claude-code-types.js";
import { init_hook_step } from "./hook-step.js";
import { init_types3 } from "./types.js";
var __wakaru_init_normalize_initialized = false;
export function init_normalize() {
if (__wakaru_init_normalize_initialized) return;
__wakaru_init_normalize_initialized = true;
"use strict";
init_claude_code_types();
init_hook_step();
init_types3();

}
