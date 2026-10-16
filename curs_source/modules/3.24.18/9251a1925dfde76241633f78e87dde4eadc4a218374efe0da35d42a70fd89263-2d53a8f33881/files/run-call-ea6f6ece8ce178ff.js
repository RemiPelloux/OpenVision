import { init_connect_error } from "../connect-error.js";
import { init_interceptor } from "../interceptor.js";
import { init_normalize2 } from "./normalize.js";
import { init_signals } from "./signals.js";
var __wakaru_init_run_call_initialized = false;
export function init_run_call() {
if (__wakaru_init_run_call_initialized) return;
__wakaru_init_run_call_initialized = true;
init_interceptor();
init_connect_error();
init_signals();
init_normalize2();

}
