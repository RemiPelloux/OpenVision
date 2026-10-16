import { ffw } from "./index.parts_2.mjs";
import { E } from "./tslib.es6.js";
var __wakaru_vfw_initialized = false;
export function vfw() {
if (__wakaru_vfw_initialized) return;
__wakaru_vfw_initialized = true;
E(), ffw();

}
