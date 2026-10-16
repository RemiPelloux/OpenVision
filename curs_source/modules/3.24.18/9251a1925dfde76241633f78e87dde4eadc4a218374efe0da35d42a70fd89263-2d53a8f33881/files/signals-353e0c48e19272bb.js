import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
var __wakaru_init_signals_initialized = false;
export function init_signals() {
if (__wakaru_init_signals_initialized) return;
__wakaru_init_signals_initialized = true;
init_connect_error();
init_code();

}
