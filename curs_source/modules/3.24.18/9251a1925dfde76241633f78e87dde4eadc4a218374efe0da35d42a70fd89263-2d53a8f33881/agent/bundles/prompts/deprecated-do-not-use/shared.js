import { init_agent_config } from "../../utils/agent-config.js";
import { init_agent_mode_guidance } from "../../utils/agent-mode-guidance.js";
var __wakaru_init_shared3_initialized = false;
export function init_shared3() {
if (__wakaru_init_shared3_initialized) return;
__wakaru_init_shared3_initialized = true;
"use strict";
init_agent_config();
init_agent_mode_guidance();

}
