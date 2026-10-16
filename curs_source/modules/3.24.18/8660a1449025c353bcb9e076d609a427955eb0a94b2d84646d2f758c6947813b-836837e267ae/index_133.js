import { EAh } from "./index_132.js";
import { E } from "./tslib.es6.js";
var Kwe, MAh, G3r, _di, Rla, f1t, q3r;
export { G3r, Kwe, MAh, Rla, _di, f1t, q3r };
var __wakaru_VaS_initialized = false;
export function VaS() {
if (__wakaru_VaS_initialized) return;
__wakaru_VaS_initialized = true;
E(), EAh(), Kwe = String.raw, MAh = Kwe`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`, G3r = Kwe`\(\?R=(?<rDepth>[^\)]+)\)|${MAh}`, _di = Kwe`\(\?<(?![=!])(?<captureName>[^>]+)>`, Rla = Kwe`${_di}|(?<unnamed>\()(?!\?)`, f1t = new RegExp(Kwe`${_di}|${G3r}|\(\?|\\?.`, "gsu"), q3r = "Cannot use multiple overlapping recursions";

}
