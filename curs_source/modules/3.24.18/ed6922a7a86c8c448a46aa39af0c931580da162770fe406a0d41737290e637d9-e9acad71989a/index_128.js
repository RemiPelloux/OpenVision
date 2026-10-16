import { sxl } from "./index_127.js";
import { x } from "./tslib.es6.js";
var uue, dxl, AIi, oCn, cSs, qYe, RIi;
export { AIi, RIi, cSs, dxl, oCn, qYe, uue };
var __wakaru_bzg_initialized = false;
export function bzg() {
if (__wakaru_bzg_initialized) return;
__wakaru_bzg_initialized = true;
x(), sxl(), uue = String.raw, dxl = uue`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`, AIi = uue`\(\?R=(?<rDepth>[^\)]+)\)|${dxl}`, oCn = uue`\(\?<(?![=!])(?<captureName>[^>]+)>`, cSs = uue`${oCn}|(?<unnamed>\()(?!\?)`, qYe = new RegExp(uue`${oCn}|${AIi}|\(\?|\\?.`, "gsu"), RIi = "Cannot use multiple overlapping recursions";

}
