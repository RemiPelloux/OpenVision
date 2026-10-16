import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { af } from "./useIsoLayoutEffect.js";
var __wakaru_a3l_initialized = false;
export function a3l() {
if (__wakaru_a3l_initialized) return;
__wakaru_a3l_initialized = true;
x(), af(), TD();

}
