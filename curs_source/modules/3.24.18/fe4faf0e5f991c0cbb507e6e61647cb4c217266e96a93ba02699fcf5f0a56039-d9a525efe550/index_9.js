import { Vki, YIt } from "./deserialize.js";
import { JIt, Kki } from "./serialize.js";
var fP;
export { fP };
var __wakaru_hNe_initialized = false;
export function hNe() {
if (__wakaru_hNe_initialized) return;
__wakaru_hNe_initialized = true;
Vki(), Kki(), fP = typeof structuredClone == "function" ? ((r, e)=>e && ("json" in e || "lossy" in e) ? YIt(JIt(r, e)) : structuredClone(r)) : (r, e)=>YIt(JIt(r, e));

}
