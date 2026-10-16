import { E } from "./tslib.es6.js";
var AXl;
export { AXl };
var __wakaru_bSv_initialized = false;
export function bSv() {
if (__wakaru_bSv_initialized) return;
__wakaru_bSv_initialized = true;
E(), AXl = (t, e)=>e && typeof t == "number" ? e.transform(t) : t;

}
