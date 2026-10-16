import { E } from "./tslib.es6.js";
var elg;
export { elg };
var __wakaru_tlg_initialized = false;
export function tlg() {
if (__wakaru_tlg_initialized) return;
__wakaru_tlg_initialized = true;
E(), elg = /\$\{[^}]*\}/;

}
