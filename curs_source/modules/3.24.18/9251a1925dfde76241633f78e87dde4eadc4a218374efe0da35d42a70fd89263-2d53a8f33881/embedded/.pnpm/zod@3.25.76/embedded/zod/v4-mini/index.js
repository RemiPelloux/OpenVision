import { init_mini } from "../v4/mini/index.js";
var __wakaru_init_v4_mini_initialized = false;
export function init_v4_mini() {
if (__wakaru_init_v4_mini_initialized) return;
__wakaru_init_v4_mini_initialized = true;
init_mini();

}
