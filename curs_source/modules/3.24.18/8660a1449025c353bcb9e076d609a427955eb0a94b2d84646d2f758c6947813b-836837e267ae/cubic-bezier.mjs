import { pYl } from "./noop.mjs";
import { E } from "./tslib.es6.js";
var vYl, ebv, tbv;
export { ebv, tbv, vYl };
var __wakaru__Yl_initialized = false;
export function _Yl() {
if (__wakaru__Yl_initialized) return;
__wakaru__Yl_initialized = true;
E(), pYl(), vYl = (t, e, n)=>(((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, ebv = 1e-7, tbv = 12;

}
