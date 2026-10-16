import { init_code } from "../code.js";
var __wakaru_init_code_string_initialized = false;
export function init_code_string() {
if (__wakaru_init_code_string_initialized) return;
__wakaru_init_code_string_initialized = true;
init_code();

}
