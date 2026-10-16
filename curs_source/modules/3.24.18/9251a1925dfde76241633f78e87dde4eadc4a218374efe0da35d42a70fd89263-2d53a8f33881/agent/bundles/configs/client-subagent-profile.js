import { init_progress_reporting } from "../prompts/subagent/progress-reporting.js";
import { init_subagent_config } from "../tools/core/subagent/subagent-config.js";
import { init_send_final_summary } from "../tools/meta/send-final-summary.js";
import { init_update_current_step } from "../tools/meta/update-current-step.js";
var __wakaru_init_client_subagent_profile_initialized = false;
export function init_client_subagent_profile() {
if (__wakaru_init_client_subagent_profile_initialized) return;
__wakaru_init_client_subagent_profile_initialized = true;
"use strict";
init_progress_reporting();
init_subagent_config();
init_send_final_summary();
init_update_current_step();

}
