import { init_converters } from "./converters.js";
var __wakaru_init_server2_initialized = false;
export function init_server2() {
if (__wakaru_init_server2_initialized) return;
__wakaru_init_server2_initialized = true;
"use strict";
init_converters();

}
