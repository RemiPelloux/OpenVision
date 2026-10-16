import { init_components } from "./components.js";
import { init_jsx_runtime } from "./jsx-runtime.js";
import { init_render2 } from "./render.js";
import { init_types12 } from "./types.js";
var __wakaru_init_dist32_initialized = false;
export function init_dist32() {
if (__wakaru_init_dist32_initialized) return;
__wakaru_init_dist32_initialized = true;
"use strict";
init_components();
init_components();
init_jsx_runtime();
init_jsx_runtime();
init_render2();
init_render2();
init_types12();

}
