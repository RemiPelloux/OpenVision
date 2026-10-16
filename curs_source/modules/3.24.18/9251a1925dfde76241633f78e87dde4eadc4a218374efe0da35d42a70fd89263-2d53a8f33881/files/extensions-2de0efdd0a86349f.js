import { init_scalars } from "./scalars.js";
var __wakaru_init_extensions_initialized = false;
export function init_extensions() {
if (__wakaru_init_extensions_initialized) return;
__wakaru_init_extensions_initialized = true;
init_scalars();

}
