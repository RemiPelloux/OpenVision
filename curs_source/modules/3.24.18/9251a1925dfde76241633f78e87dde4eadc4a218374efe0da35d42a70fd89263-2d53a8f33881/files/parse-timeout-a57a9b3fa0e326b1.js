import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
var __wakaru_init_parse_timeout2_initialized = false;
export function init_parse_timeout2() {
if (__wakaru_init_parse_timeout2_initialized) return;
__wakaru_init_parse_timeout2_initialized = true;
init_code();
init_connect_error();

}
