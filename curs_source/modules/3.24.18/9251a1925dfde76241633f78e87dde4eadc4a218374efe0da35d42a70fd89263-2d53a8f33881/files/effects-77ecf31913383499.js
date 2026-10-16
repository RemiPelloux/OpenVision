import { init_parseDef } from "../parseDef.js";
var __wakaru_init_effects_initialized = false;
export function init_effects() {
if (__wakaru_init_effects_initialized) return;
__wakaru_init_effects_initialized = true;
init_parseDef();

}
