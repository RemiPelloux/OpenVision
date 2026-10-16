import { init_classic } from "./classic/index.js";
var __wakaru_init_v4_initialized = false;
export function init_v4() {
if (__wakaru_init_v4_initialized) return;
__wakaru_init_v4_initialized = true;
init_classic();

}
