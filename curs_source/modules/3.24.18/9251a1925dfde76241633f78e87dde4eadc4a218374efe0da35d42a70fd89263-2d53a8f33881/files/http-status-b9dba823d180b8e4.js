import { init_code } from "../code.js";
var __wakaru_init_http_status_initialized = false;
export function init_http_status() {
if (__wakaru_init_http_status_initialized) return;
__wakaru_init_http_status_initialized = true;
init_code();

}
