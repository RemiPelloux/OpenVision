import { init_base3 } from "./base.js";
import { init_prompt_executor } from "./prompt-executor.js";
var __wakaru_init_grok_initialized = false;
export function init_grok() {
if (__wakaru_init_grok_initialized) return;
__wakaru_init_grok_initialized = true;
"use strict";
init_base3();
init_prompt_executor();

}
