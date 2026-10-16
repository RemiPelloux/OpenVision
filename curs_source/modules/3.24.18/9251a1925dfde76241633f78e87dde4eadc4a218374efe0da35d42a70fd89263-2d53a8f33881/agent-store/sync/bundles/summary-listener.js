import { init_closed_index_error } from "./closed-index-error.js";
import { init_metrics_emitter } from "./metrics-emitter.js";
import { init_paths3 } from "./paths.js";
import { init_resilience_events } from "./resilience-events.js";
var import_node_crypto49;
export { import_node_crypto49 };
var __wakaru_init_summary_listener_initialized = false;
export function init_summary_listener() {
if (__wakaru_init_summary_listener_initialized) return;
__wakaru_init_summary_listener_initialized = true;
"use strict";
import_node_crypto49 = require("node:crypto");
init_closed_index_error();
init_metrics_emitter();
init_paths3();
init_resilience_events();

}
