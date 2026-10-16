import { x } from "./tslib.es6.js";
import { af } from "./useIsoLayoutEffect.js";
import { xW } from "./useRefWithInit.js";
var __wakaru_oCe_initialized = false;
export function oCe() {
if (__wakaru_oCe_initialized) return;
__wakaru_oCe_initialized = true;
x(), af(), xW();

}
