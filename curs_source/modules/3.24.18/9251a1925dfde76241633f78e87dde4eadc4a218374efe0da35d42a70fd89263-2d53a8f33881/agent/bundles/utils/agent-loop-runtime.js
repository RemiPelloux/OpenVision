import { init_dist } from "../../../context/dist/index.js";
import { createKey } from "../../../entry_exports.js";
var agentLoopRuntimeKey;
export { agentLoopRuntimeKey };
var __wakaru_init_agent_loop_runtime_initialized = false;
export function init_agent_loop_runtime() {
if (__wakaru_init_agent_loop_runtime_initialized) return;
__wakaru_init_agent_loop_runtime_initialized = true;
"use strict";
init_dist();
agentLoopRuntimeKey = createKey(Symbol.for("@anysphere/agent/loopRuntime"), "nal");

}
