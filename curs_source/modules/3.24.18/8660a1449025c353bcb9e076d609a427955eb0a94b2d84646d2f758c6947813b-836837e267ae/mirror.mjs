import { E } from "./tslib.es6.js";
var bYl;
export { bYl };
var __wakaru_nbv_initialized = false;
export function nbv() {
if (__wakaru_nbv_initialized) return;
__wakaru_nbv_initialized = true;
E(), bYl = (t)=>(e)=>e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;

}
