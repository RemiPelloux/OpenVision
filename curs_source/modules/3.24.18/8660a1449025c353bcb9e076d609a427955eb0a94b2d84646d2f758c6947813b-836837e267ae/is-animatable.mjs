import { $De, Uut } from "./index_13.mjs";
import { E } from "./tslib.es6.js";
var lXl;
export { lXl };
var __wakaru_tf0_initialized = false;
export function tf0() {
if (__wakaru_tf0_initialized) return;
__wakaru_tf0_initialized = true;
E(), Uut(), lXl = (t, e)=>e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && ($De.test(t) || t === "0") && !t.startsWith("url("));

}
