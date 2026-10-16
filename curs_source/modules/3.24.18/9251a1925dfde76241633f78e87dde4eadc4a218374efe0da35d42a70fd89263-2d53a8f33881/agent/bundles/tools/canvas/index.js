import { init_client3 } from "./client.js";
import { init_tools2 } from "./tools.js";
var __wakaru_init_canvas_initialized = false;
export function init_canvas() {
if (__wakaru_init_canvas_initialized) return;
__wakaru_init_canvas_initialized = true;
"use strict";
init_client3();
init_tools2();

}
