import { init_scalars } from "./scalars.js";
var __wakaru_init_reflect_initialized = false;
export function init_reflect() {
if (__wakaru_init_reflect_initialized) return;
__wakaru_init_reflect_initialized = true;
init_scalars();

}
