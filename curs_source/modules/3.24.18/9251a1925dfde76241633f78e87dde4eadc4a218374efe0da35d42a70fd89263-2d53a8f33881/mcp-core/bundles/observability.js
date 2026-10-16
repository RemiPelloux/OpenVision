import { init_fsm } from "./fsm/index.js";
var __wakaru_init_observability_initialized = false;
export function init_observability() {
if (__wakaru_init_observability_initialized) return;
__wakaru_init_observability_initialized = true;
"use strict";
init_fsm();

}
