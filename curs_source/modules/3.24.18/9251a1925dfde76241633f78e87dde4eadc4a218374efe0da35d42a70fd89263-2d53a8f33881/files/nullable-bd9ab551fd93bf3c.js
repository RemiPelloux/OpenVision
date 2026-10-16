import { init_parseDef } from "../parseDef.js";
import { init_union } from "./union.js";
var __wakaru_init_nullable_initialized = false;
export function init_nullable() {
if (__wakaru_init_nullable_initialized) return;
__wakaru_init_nullable_initialized = true;
init_parseDef();
init_union();

}
