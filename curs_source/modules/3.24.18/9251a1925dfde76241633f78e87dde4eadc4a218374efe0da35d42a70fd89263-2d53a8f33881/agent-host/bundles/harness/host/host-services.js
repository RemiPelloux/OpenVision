import { HARNESS_LOG_LEVELS, init_api_constants } from "../api-constants.js";
import { init_routing_adapter } from "./routing-adapter.js";
import { init_json_object } from "../json-object.js";
import { init_dist } from "../../../../context/dist/index.js";
var LOG_LEVELS;
export { LOG_LEVELS };
var __wakaru_init_host_services_initialized = false;
export function init_host_services() {
if (__wakaru_init_host_services_initialized) return;
__wakaru_init_host_services_initialized = true;
"use strict";
init_dist();
init_api_constants();
init_json_object();
init_routing_adapter();
LOG_LEVELS = new Set(HARNESS_LOG_LEVELS);

}
