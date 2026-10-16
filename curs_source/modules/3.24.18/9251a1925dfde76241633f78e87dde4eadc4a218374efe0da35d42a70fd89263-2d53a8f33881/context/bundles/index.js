import { init_abort_reason } from "./abort-reason.js";
import { init_browser_bridge } from "./browser-bridge.js";
import { init_core } from "./core.js";
import { init_otel } from "./otel.js";
import { init_logger } from "../../entry_exports.js";
var __wakaru_init_dist_initialized = false;
export function init_dist() {
if (__wakaru_init_dist_initialized) return;
__wakaru_init_dist_initialized = true;
"use strict";
init_abort_reason();
init_browser_bridge();
init_core();
init_logger();
init_otel();

}
