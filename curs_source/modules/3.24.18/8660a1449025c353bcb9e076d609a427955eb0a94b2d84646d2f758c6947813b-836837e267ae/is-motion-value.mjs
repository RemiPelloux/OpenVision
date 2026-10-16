import { E } from "./tslib.es6.js";
var ore;
export { ore };
var __wakaru_wRt_initialized = false;
export function wRt() {
if (__wakaru_wRt_initialized) return;
__wakaru_wRt_initialized = true;
E(), ore = (t)=>!!(t && t.getVelocity);

}
