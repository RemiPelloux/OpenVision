import { init_dev_smart_mode_classifier_block } from "./dev-smart-mode-classifier-block.js";
import { init_agent_config } from "../utils/agent-config.js";
var __wakaru_init_smart_mode_classifier_runtime_state_initialized = false;
export function init_smart_mode_classifier_runtime_state() {
if (__wakaru_init_smart_mode_classifier_runtime_state_initialized) return;
__wakaru_init_smart_mode_classifier_runtime_state_initialized = true;
"use strict";
init_agent_config();
init_dev_smart_mode_classifier_block();

}
