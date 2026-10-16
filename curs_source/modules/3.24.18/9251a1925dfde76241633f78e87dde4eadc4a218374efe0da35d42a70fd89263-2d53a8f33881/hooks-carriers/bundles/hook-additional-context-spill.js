import { init_hook_additional_context_render } from "./hook-additional-context-render.js";
import { init_limits } from "./limits.js";
var __wakaru_init_hook_additional_context_spill_initialized = false;
export function init_hook_additional_context_spill() {
if (__wakaru_init_hook_additional_context_spill_initialized) return;
__wakaru_init_hook_additional_context_spill_initialized = true;
"use strict";
init_hook_additional_context_render();
init_limits();

}
