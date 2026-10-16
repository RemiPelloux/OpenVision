import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
var __wakaru_init_parse_timeout_initialized = false;
export function init_parse_timeout() {
if (__wakaru_init_parse_timeout_initialized) return;
__wakaru_init_parse_timeout_initialized = true;
init_code();
init_connect_error();

}
