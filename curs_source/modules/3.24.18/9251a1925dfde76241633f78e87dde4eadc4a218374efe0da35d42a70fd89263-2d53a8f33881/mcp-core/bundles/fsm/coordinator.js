import { init_auth_fsm } from "./auth-fsm.js";
import { init_connection_fsm } from "./connection-fsm.js";
import { init_projection } from "./projection.js";
var __wakaru_init_coordinator_initialized = false;
export function init_coordinator() {
if (__wakaru_init_coordinator_initialized) return;
__wakaru_init_coordinator_initialized = true;
"use strict";
init_auth_fsm();
init_connection_fsm();
init_projection();

}
