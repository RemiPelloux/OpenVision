import { E } from "./tslib.es6.js";
var ESv;
export { ESv };
var __wakaru_Kf0_initialized = false;
export function Kf0() {
if (__wakaru_Kf0_initialized) return;
__wakaru_Kf0_initialized = true;
E(), ESv = (t)=>t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;

}
