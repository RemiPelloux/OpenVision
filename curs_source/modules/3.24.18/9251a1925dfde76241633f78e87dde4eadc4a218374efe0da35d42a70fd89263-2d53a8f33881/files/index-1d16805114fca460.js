import { init_node } from "./node/index.js";
var __wakaru_init_platform_initialized = false;
export function init_platform() {
if (__wakaru_init_platform_initialized) return;
__wakaru_init_platform_initialized = true;
init_node();

}
