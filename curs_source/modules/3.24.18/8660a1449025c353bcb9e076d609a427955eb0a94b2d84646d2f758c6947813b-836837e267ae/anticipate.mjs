import { OAs, wYl } from "./back.mjs";
import { E } from "./tslib.es6.js";
var CYl;
export { CYl };
var __wakaru_rbv_initialized = false;
export function rbv() {
if (__wakaru_rbv_initialized) return;
__wakaru_rbv_initialized = true;
E(), wYl(), CYl = (t)=>t >= 1 ? 1 : (t *= 2) < 1 ? .5 * OAs(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)));

}
