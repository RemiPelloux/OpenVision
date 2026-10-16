import { init_parseDef } from "../parseDef.js";
var __wakaru_init_promise_initialized = false;
export function init_promise() {
if (__wakaru_init_promise_initialized) return;
__wakaru_init_promise_initialized = true;
init_parseDef();

}
