import { ifw } from "./index.parts.mjs";
import { E } from "./tslib.es6.js";
var __wakaru_rfw_initialized = false;
export function rfw() {
if (__wakaru_rfw_initialized) return;
__wakaru_rfw_initialized = true;
E(), ifw();

}
