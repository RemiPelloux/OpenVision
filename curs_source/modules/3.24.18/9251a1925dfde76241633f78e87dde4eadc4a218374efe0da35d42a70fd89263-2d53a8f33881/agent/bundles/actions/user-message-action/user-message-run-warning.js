import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_synthetic_user_message } from "./synthetic-user-message.js";
import { init_dist } from "../../../../context/dist/index.js";
var logger73, CONSECUTIVE_USER_MESSAGE_WARNING_THRESHOLD, TAIL_INSPECTION_WINDOW;
export { CONSECUTIVE_USER_MESSAGE_WARNING_THRESHOLD, TAIL_INSPECTION_WINDOW, logger73 };
var __wakaru_init_user_message_run_warning_initialized = false;
export function init_user_message_run_warning() {
if (__wakaru_init_user_message_run_warning_initialized) return;
__wakaru_init_user_message_run_warning_initialized = true;
"use strict";
init_dist();
init_synthetic_user_message();
logger73 = createLogger("@anysphere/agent");
CONSECUTIVE_USER_MESSAGE_WARNING_THRESHOLD = 3;
TAIL_INSPECTION_WINDOW = 12;

}
