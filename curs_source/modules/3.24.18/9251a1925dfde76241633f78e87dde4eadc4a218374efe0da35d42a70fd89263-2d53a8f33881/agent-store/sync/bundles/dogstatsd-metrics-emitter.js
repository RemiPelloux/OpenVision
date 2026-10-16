import { init_paths3 } from "./paths.js";
import { init_rpc_service } from "./rpc-service.js";
var __wakaru_init_dogstatsd_metrics_emitter_initialized = false;
export function init_dogstatsd_metrics_emitter() {
if (__wakaru_init_dogstatsd_metrics_emitter_initialized) return;
__wakaru_init_dogstatsd_metrics_emitter_initialized = true;
"use strict";
init_paths3();
init_rpc_service();

}
