import { E } from "./tslib.es6.js";
var mOn;
export { mOn };
var __wakaru_cFi_initialized = false;
export function cFi() {
if (__wakaru_cFi_initialized) return;
__wakaru_cFi_initialized = true;
E(), mOn = (t, e, n)=>t + (e - t) * n;

}
