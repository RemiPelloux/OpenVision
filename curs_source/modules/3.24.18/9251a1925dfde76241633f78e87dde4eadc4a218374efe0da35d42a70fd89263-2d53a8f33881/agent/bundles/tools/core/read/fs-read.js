import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../../context/dist/index.js";
var logger107;
export { logger107 };
var __wakaru_init_fs_read_initialized = false;
export function init_fs_read() {
if (__wakaru_init_fs_read_initialized) return;
__wakaru_init_fs_read_initialized = true;
"use strict";
init_dist();
logger107 = createLogger("filesync-read-executor");

}
