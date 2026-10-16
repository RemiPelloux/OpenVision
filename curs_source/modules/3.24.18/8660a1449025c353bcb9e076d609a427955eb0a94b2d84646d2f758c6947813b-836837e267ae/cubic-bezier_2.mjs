import { E } from "./tslib.es6.js";
var fOn;
export { fOn };
var __wakaru_kyv_initialized = false;
export function kyv() {
if (__wakaru_kyv_initialized) return;
__wakaru_kyv_initialized = true;
E(), fOn = ([t, e, n, i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`;

}
