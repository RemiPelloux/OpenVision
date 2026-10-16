import { Cqy, Eqy, Tqy, aMr, wqy } from "./LYd.js";
import { E } from "./tslib.es6.js";
var Fbn;
export { Fbn };
var __wakaru_lMr_initialized = false;
export function lMr() {
if (__wakaru_lMr_initialized) return;
__wakaru_lMr_initialized = true;
E(), Fbn = (function(t) {
    if (t == null) return Eqy;
    if (typeof t == "function") return aMr(t);
    if (typeof t == "object") return Array.isArray(t) ? wqy(t) : Cqy(t);
    if (typeof t == "string") return Tqy(t);
    throw new Error("Expected function, string, or object as test");
});

}
