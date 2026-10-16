import { init_errors8 } from "./errors.ts";
import { init_rpc_context } from "./rpc-context.ts";
var __wakaru_init_rpc_initialized = false;
export function init_rpc() {
if (__wakaru_init_rpc_initialized) return;
__wakaru_init_rpc_initialized = true;
"use strict";
init_errors8();
init_rpc_context();

}
