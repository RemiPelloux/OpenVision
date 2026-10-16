import { init_agent_config } from "../utils/agent-config.js";
import { init_dist2 } from "../../../constants/dist/index.js";
var __wakaru_init_common11_initialized = false;
export function init_common11() {
if (__wakaru_init_common11_initialized) return;
__wakaru_init_common11_initialized = true;
"use strict";
init_dist2();
init_agent_config();

}
