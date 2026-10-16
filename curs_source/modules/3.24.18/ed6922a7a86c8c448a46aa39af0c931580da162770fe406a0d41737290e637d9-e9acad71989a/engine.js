import { cSn, lds } from "./shared.js";
import { x } from "./tslib.es6.js";
var G5e, dds, PDg;
export { G5e, PDg, dds };
var __wakaru_Rgt_initialized = false;
export function Rgt() {
if (__wakaru_Rgt_initialized) return;
__wakaru_Rgt_initialized = true;
x(), lds(), G5e = typeof CSS < "u" && !!CSS.supports?.("-webkit-backdrop-filter:none"), dds = !G5e && cSn.includes("firefox"), PDg = !G5e && cSn.includes("chrom");

}
