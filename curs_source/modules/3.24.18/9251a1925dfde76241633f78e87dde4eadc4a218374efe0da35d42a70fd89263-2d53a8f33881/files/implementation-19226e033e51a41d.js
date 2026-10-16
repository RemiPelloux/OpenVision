import { init_code } from "./code.js";
import { init_connect_error } from "./connect-error.js";
import { init_context_values } from "./context-values.js";
import { init_signals } from "./protocol/signals.js";
var __wakaru_init_implementation_initialized = false;
export function init_implementation() {
if (__wakaru_init_implementation_initialized) return;
__wakaru_init_implementation_initialized = true;
init_connect_error();
init_code();
init_signals();
init_context_values();

}
