import { init_base3 } from "./base.js";
import { init_prompt_executor } from "./prompt-executor.js";
var __wakaru_init_generic_initialized = false;
export function init_generic() {
if (__wakaru_init_generic_initialized) return;
__wakaru_init_generic_initialized = true;
"use strict";
init_base3();
init_prompt_executor();

}
