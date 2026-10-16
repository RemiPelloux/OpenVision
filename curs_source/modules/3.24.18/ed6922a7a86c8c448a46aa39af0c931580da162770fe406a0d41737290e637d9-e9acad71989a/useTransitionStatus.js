import { x } from "./tslib.es6.js";
import { aYe } from "./useAnimationFrame.js";
import { af } from "./useIsoLayoutEffect.js";
var __wakaru_hCe_initialized = false;
export function hCe() {
if (__wakaru_hCe_initialized) return;
__wakaru_hCe_initialized = true;
x(), af(), aYe();

}
