import { Bdl } from "./defined-info.js";
import { Ndl } from "./info.js";
import { Jgs } from "./normalize_2.js";
import { x } from "./tslib.es6.js";
var qdl, rfs, zdl;
export { qdl, rfs, zdl };
var __wakaru_Kkn_initialized = false;
export function Kkn() {
if (__wakaru_Kkn_initialized) return;
__wakaru_Kkn_initialized = true;
x(), Bdl(), Ndl(), Jgs(), qdl = /[A-Z]/g, rfs = /-[a-z]/g, zdl = /^data[-\w.:]+$/i;

}
