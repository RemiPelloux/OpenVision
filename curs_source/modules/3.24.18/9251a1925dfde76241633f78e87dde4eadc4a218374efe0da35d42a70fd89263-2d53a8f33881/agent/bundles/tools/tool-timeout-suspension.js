import { init_dist } from "../../../context/dist/index.js";
import { createKey } from "../../../entry_exports.js";
var toolExecutionTimeoutSuspensionKey;
export { toolExecutionTimeoutSuspensionKey };
var __wakaru_init_tool_timeout_suspension_initialized = false;
export function init_tool_timeout_suspension() {
if (__wakaru_init_tool_timeout_suspension_initialized) return;
__wakaru_init_tool_timeout_suspension_initialized = true;
"use strict";
init_dist();
toolExecutionTimeoutSuspensionKey = createKey(Symbol("toolExecutionTimeoutSuspension"), void 0);

}
