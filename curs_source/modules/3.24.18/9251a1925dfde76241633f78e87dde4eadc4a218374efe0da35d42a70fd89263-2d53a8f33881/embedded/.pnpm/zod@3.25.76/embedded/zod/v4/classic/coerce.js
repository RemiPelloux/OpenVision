import { init_schemas2 } from "./schemas.js";
import { init_core4 } from "../core/index.js";
var __wakaru_init_coerce_initialized = false;
export function init_coerce() {
if (__wakaru_init_coerce_initialized) return;
__wakaru_init_coerce_initialized = true;
init_core4();
init_schemas2();

}
