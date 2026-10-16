import { Lqy, dia } from "./deserialize.js";
import { Oqy, hia } from "./serialize.js";
import { E } from "./tslib.es6.js";
var QSt;
export { QSt };
var __wakaru_gMr_initialized = false;
export function gMr() {
if (__wakaru_gMr_initialized) return;
__wakaru_gMr_initialized = true;
E(), Lqy(), Oqy(), QSt = typeof structuredClone == "function" ? ((t, e)=>e && ("json" in e || "lossy" in e) ? dia(hia(t, e)) : structuredClone(t)) : (t, e)=>dia(hia(t, e));

}
