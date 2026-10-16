import { sit } from "./clamp.js";
import { yb1 } from "./getPushedThumbValues.js";
import { E } from "./tslib.es6.js";
var __wakaru_kb1_initialized = false;
export function kb1() {
if (__wakaru_kb1_initialized) return;
__wakaru_kb1_initialized = true;
E(), sit(), yb1();

}
