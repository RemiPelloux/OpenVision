import { RRe, q3t } from "./safeReact.js";
import { x } from "./tslib.es6.js";
import { xW } from "./useRefWithInit.js";
var Xki, oYc;
export { Xki, oYc };
var __wakaru_Cy_initialized = false;
export function Cy() {
if (__wakaru_Cy_initialized) return;
__wakaru_Cy_initialized = true;
x(), q3t(), xW(), Xki = RRe.useInsertionEffect, oYc = Xki && Xki !== RRe.useLayoutEffect ? Xki : (e)=>e();

}
