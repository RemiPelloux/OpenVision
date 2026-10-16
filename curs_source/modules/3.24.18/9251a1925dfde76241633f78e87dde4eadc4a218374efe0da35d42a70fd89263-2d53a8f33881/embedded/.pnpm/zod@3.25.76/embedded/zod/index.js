import { init_external } from "./v3/external.js";
var __wakaru_init_zod_initialized = false;
export function init_zod() {
if (__wakaru_init_zod_initialized) return;
__wakaru_init_zod_initialized = true;
init_external();
init_external();

}
