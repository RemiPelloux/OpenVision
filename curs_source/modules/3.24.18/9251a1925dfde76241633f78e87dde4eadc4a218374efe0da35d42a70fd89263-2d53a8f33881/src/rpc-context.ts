import { init_dist } from "../context/dist/index.js";
var __wakaru_init_rpc_context_initialized = false;
export function init_rpc_context() {
if (__wakaru_init_rpc_context_initialized) return;
__wakaru_init_rpc_context_initialized = true;
"use strict";
init_dist();

}
