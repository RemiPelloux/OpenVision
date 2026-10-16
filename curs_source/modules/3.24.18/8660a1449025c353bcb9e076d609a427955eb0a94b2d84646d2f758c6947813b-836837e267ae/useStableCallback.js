import { BHe, Qvn } from "./safeReact.js";
import { E } from "./tslib.es6.js";
import { jQ } from "./useRefWithInit.js";
var HIr, fZd;
export { HIr, fZd };
var __wakaru_Jy_initialized = false;
export function Jy() {
if (__wakaru_Jy_initialized) return;
__wakaru_Jy_initialized = true;
E(), Qvn(), jQ(), HIr = BHe.useInsertionEffect, fZd = HIr && HIr !== BHe.useLayoutEffect ? HIr : (t)=>t();

}
