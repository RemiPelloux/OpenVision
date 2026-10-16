import { init_config_loader } from "./config-loader.js";
var __wakaru_init_config_tracker_initialized = false;
export function init_config_tracker() {
if (__wakaru_init_config_tracker_initialized) return;
__wakaru_init_config_tracker_initialized = true;
"use strict";
init_config_loader();

}
