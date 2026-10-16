import { init_limits } from "./limits.js";
import { init_dist6 } from "../../hooks/dist/index.js";
var __wakaru_init_hook_additional_context_render_initialized = false;
export function init_hook_additional_context_render() {
if (__wakaru_init_hook_additional_context_render_initialized) return;
__wakaru_init_hook_additional_context_render_initialized = true;
"use strict";
init_dist6();
init_limits();

}
