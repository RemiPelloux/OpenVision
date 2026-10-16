import { init_backoff_scheduler } from "./backoff-scheduler.js";
import { init_connect_errors } from "./connect-errors.js";
import { init_validation } from "./validation.js";
var __wakaru_init_mint_gate_initialized = false;
export function init_mint_gate() {
if (__wakaru_init_mint_gate_initialized) return;
__wakaru_init_mint_gate_initialized = true;
"use strict";
init_backoff_scheduler();
init_connect_errors();
init_validation();

}
