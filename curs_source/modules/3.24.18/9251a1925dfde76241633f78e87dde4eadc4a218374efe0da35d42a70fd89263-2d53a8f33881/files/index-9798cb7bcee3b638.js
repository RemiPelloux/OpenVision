import { init_globalThis } from "./globalThis.js";
var __wakaru_init_node_initialized = false;
export function init_node() {
if (__wakaru_init_node_initialized) return;
__wakaru_init_node_initialized = true;
init_globalThis();

}
