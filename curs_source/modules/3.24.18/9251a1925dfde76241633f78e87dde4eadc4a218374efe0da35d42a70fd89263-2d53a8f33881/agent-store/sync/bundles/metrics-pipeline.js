import { init_dogstatsd_metrics_emitter } from "./dogstatsd-metrics-emitter.js";
import { init_metrics_aggregator } from "./metrics-aggregator.js";
var __wakaru_init_metrics_pipeline_initialized = false;
export function init_metrics_pipeline() {
if (__wakaru_init_metrics_pipeline_initialized) return;
__wakaru_init_metrics_pipeline_initialized = true;
"use strict";
init_dogstatsd_metrics_emitter();
init_metrics_aggregator();

}
