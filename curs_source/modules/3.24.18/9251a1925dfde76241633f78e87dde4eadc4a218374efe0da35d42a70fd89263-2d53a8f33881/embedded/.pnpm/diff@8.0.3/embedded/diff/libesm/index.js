import { init_create } from "./patch/create.js";
var __wakaru_init_libesm_initialized = false;
export function init_libesm() {
if (__wakaru_init_libesm_initialized) return;
__wakaru_init_libesm_initialized = true;
init_create();

}
