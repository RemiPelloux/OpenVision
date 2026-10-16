import { init_external3 } from "./external.js";
var __wakaru_init_mini_initialized = false;
export function init_mini() {
if (__wakaru_init_mini_initialized) return;
__wakaru_init_mini_initialized = true;
init_external3();

}
