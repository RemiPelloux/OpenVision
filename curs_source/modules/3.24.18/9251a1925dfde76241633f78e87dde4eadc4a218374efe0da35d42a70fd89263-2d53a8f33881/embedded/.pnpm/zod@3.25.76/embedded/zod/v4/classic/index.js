import { init_external2 } from "./external.js";
var __wakaru_init_classic_initialized = false;
export function init_classic() {
if (__wakaru_init_classic_initialized) return;
__wakaru_init_classic_initialized = true;
init_external2();

}
