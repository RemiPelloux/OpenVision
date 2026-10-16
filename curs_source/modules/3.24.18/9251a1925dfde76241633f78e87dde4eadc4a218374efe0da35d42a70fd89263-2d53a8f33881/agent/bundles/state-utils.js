import { init_dist5 } from "../../agent-kv/dist/index.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_synthetic_user_message } from "./actions/user-message-action/synthetic-user-message.js";
import { init_recent_user_message_ids } from "./recent-user-message-ids.js";
import { init_serde2 } from "./serde.js";
import { init_dist } from "../../context/dist/index.js";
var logger106;
export { logger106 };
var __wakaru_init_state_utils_initialized = false;
export function init_state_utils() {
if (__wakaru_init_state_utils_initialized) return;
__wakaru_init_state_utils_initialized = true;
"use strict";
init_dist5();
init_dist();
init_synthetic_user_message();
init_recent_user_message_ids();
init_serde2();
logger106 = createLogger("@anysphere/agent/state-utils");

}
