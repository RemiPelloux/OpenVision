import { Zgs, e3g } from "./deserialize.js";
import { Qgs, t3g } from "./serialize.js";
import { x } from "./tslib.es6.js";
var IYe;
export { IYe };
var __wakaru_nEi_initialized = false;
export function nEi() {
if (__wakaru_nEi_initialized) return;
__wakaru_nEi_initialized = true;
x(), e3g(), t3g(), IYe = typeof structuredClone == "function" ? ((e, t)=>t && ("json" in t || "lossy" in t) ? Zgs(Qgs(e, t)) : structuredClone(e)) : (e, t)=>Zgs(Qgs(e, t));

}
