import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
import { init_async_iterable } from "./async-iterable.js";
import { init_signals } from "./signals.js";
var __wakaru_init_universal_handler_client_initialized = false;
export function init_universal_handler_client() {
if (__wakaru_init_universal_handler_client_initialized) return;
__wakaru_init_universal_handler_client_initialized = true;
init_code();
init_connect_error();
init_async_iterable();
init_signals();

}
