import { omh } from "./defined-info.js";
import { imh } from "./info.js";
import { pia } from "./normalize_2.js";
import { E } from "./tslib.es6.js";
var mmh, _ia, gmh;
export { _ia, gmh, mmh };
var __wakaru_lui_initialized = false;
export function lui() {
if (__wakaru_lui_initialized) return;
__wakaru_lui_initialized = true;
E(), omh(), imh(), pia(), mmh = /[A-Z]/g, _ia = /-[a-z]/g, gmh = /^data[-\w.:]+$/i;

}
