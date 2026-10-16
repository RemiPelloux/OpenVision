import { init_agent_config } from "./agent-config.js";
import { init_dist2 } from "../../../constants/dist/index.js";
var __wakaru_init_environment_filtering_initialized = false;
export function init_environment_filtering() {
if (__wakaru_init_environment_filtering_initialized) return;
__wakaru_init_environment_filtering_initialized = true;
"use strict";
init_dist2();
init_agent_config();

}
