import { init_dist } from "../../../../context/dist/index.js";
import { createKey } from "../../../../entry_exports.js";
var agentHostTurnRuntimeKey;
export { agentHostTurnRuntimeKey };
var __wakaru_init_turn_runtime_context_initialized = false;
export function init_turn_runtime_context() {
if (__wakaru_init_turn_runtime_context_initialized) return;
__wakaru_init_turn_runtime_context_initialized = true;
"use strict";
init_dist();
agentHostTurnRuntimeKey = createKey(Symbol.for("cursor.agentHostTurnRuntime"), void 0);

}
