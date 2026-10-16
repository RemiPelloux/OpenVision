import { ContextAPI, init_context2 } from "./api/context.js";
var context;
export { context };
var __wakaru_init_context_api_initialized = false;
export function init_context_api() {
if (__wakaru_init_context_api_initialized) return;
__wakaru_init_context_api_initialized = true;
init_context2();
context = ContextAPI.getInstance();

}
