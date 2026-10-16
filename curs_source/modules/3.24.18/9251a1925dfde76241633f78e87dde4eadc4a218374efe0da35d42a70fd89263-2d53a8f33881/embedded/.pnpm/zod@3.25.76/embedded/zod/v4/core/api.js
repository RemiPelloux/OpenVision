import { init_checks } from "./checks.js";
import { init_util4 } from "./util.js";
var __wakaru_init_api_initialized = false;
export function init_api() {
if (__wakaru_init_api_initialized) return;
__wakaru_init_api_initialized = true;
init_checks();
init_util4();

}
