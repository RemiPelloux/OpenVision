import { init_dogstatsd_metrics_emitter } from "./dogstatsd-metrics-emitter.js";
import { init_metrics_emitter } from "./metrics-emitter.js";
var DISK_FULL_REPEAT_WINDOW_MS;
export { DISK_FULL_REPEAT_WINDOW_MS };
var __wakaru_init_metrics_aggregator_initialized = false;
export function init_metrics_aggregator() {
if (__wakaru_init_metrics_aggregator_initialized) return;
__wakaru_init_metrics_aggregator_initialized = true;
"use strict";
init_dogstatsd_metrics_emitter();
init_metrics_emitter();
DISK_FULL_REPEAT_WINDOW_MS = 5 * 60 * 1e3;

}
