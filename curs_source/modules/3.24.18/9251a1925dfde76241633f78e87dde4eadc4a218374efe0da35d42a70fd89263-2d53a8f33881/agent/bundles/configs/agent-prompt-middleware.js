import { init_loop_nudge_middleware } from "../loop-detection/loop-nudge-middleware.js";
import { init_progress_update_reminder_middleware } from "../progress-update-reminder-middleware.js";
import { init_dist26 } from "../../../chat-inference/dist/index.js";
var __wakaru_init_agent_prompt_middleware_initialized = false;
export function init_agent_prompt_middleware() {
if (__wakaru_init_agent_prompt_middleware_initialized) return;
__wakaru_init_agent_prompt_middleware_initialized = true;
"use strict";
init_dist26();
init_loop_nudge_middleware();
init_progress_update_reminder_middleware();

}
