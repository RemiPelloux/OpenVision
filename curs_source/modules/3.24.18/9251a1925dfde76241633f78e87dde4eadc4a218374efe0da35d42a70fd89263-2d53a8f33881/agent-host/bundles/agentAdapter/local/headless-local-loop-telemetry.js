import { init_dist } from "../../../../context/dist/index.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
var AGENT_HOST_SURFACE_TAG, AGENT_HOST_SURFACE_SPAN_ATTRIBUTE;
export { AGENT_HOST_SURFACE_SPAN_ATTRIBUTE, AGENT_HOST_SURFACE_TAG };
var __wakaru_init_headless_local_loop_telemetry_initialized = false;
export function init_headless_local_loop_telemetry() {
if (__wakaru_init_headless_local_loop_telemetry_initialized) return;
__wakaru_init_headless_local_loop_telemetry_initialized = true;
"use strict";
init_dist();
init_dist4();
AGENT_HOST_SURFACE_TAG = "agent_host_surface";
AGENT_HOST_SURFACE_SPAN_ATTRIBUTE = "agent_host.surface";

}
