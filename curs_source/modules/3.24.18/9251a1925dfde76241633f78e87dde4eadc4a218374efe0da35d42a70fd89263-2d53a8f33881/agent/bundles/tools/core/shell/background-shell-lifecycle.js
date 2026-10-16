import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_request_id } from "../../../utils/request-id.js";
import { init_dist } from "../../../../../context/dist/index.js";
var logger64, MAX_TRACKED_SHELLS, records;
export { MAX_TRACKED_SHELLS, logger64, records };
var __wakaru_init_background_shell_lifecycle_initialized = false;
export function init_background_shell_lifecycle() {
if (__wakaru_init_background_shell_lifecycle_initialized) return;
__wakaru_init_background_shell_lifecycle_initialized = true;
"use strict";
init_dist();
init_request_id();
logger64 = createLogger("tools/shell/background-shell-lifecycle");
MAX_TRACKED_SHELLS = 4096;
records = new Map();

}
