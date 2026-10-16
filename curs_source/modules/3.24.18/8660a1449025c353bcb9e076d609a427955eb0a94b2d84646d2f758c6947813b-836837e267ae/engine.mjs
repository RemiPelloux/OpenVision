import { i3i, oLl } from "./shared.mjs";
import { E } from "./tslib.es6.js";
var bSs, xxf, Axf;
export { Axf, bSs, xxf };
var __wakaru_Idw_initialized = false;
export function Idw() {
if (__wakaru_Idw_initialized) return;
__wakaru_Idw_initialized = true;
E(), oLl(), bSs = typeof CSS < "u" && !!CSS.supports?.("-webkit-backdrop-filter:none"), xxf = !bSs && i3i.includes("firefox"), Axf = !bSs && i3i.includes("chrom");

}
