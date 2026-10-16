import { E } from "./tslib.es6.js";
var uOn;
export { uOn };
var __wakaru_MYl_initialized = false;
export function MYl() {
if (__wakaru_MYl_initialized) return;
__wakaru_MYl_initialized = true;
E(), uOn = (t)=>Math.round(t * 1e5) / 1e5;

}
