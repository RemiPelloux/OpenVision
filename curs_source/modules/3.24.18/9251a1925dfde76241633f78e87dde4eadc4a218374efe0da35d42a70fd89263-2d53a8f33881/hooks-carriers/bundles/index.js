import { init_collect } from "./collect.js";
import { init_errors7 } from "./errors.js";
import { init_factories } from "./factories.js";
import { init_hook_additional_context_render } from "./hook-additional-context-render.js";
import { init_hook_additional_context_spill } from "./hook-additional-context-spill.js";
import { init_limits } from "./limits.js";
import { init_render } from "./render.js";
import { init_spec } from "./spec.js";
var __wakaru_init_dist30_initialized = false;
export function init_dist30() {
if (__wakaru_init_dist30_initialized) return;
__wakaru_init_dist30_initialized = true;
"use strict";
init_collect();
init_errors7();
init_factories();
init_hook_additional_context_render();
init_hook_additional_context_spill();
init_limits();
init_render();
init_spec();

}
