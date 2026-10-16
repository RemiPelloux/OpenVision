import { init_dist } from "../../../context/dist/index.js";
import { createKey } from "../../../entry_exports.js";
var toolCallNameKey;
export { toolCallNameKey };
var __wakaru_init_tool_call_name_initialized = false;
export function init_tool_call_name() {
if (__wakaru_init_tool_call_name_initialized) return;
__wakaru_init_tool_call_name_initialized = true;
"use strict";
init_dist();
toolCallNameKey = createKey(Symbol("agent.toolCallName"), void 0);

}
