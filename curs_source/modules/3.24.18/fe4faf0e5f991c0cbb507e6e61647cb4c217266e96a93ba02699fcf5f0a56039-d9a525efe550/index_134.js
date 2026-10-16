import { Dxr, Fxr, aOt, cOt, oOt, sOt } from "./Iwr.js";
import { Pxr } from "./index_133.js";
import { i } from "./plugin-brand-icon.js";
var m3, Oxr, iPe, Bhe, lOt, jP, aPe;
export { Bhe, Oxr, aPe, iPe, jP, lOt, m3 };
var __wakaru_D5i_initialized = false;
export function D5i() {
if (__wakaru_D5i_initialized) return;
__wakaru_D5i_initialized = true;
Pxr(), m3 = String.raw, Oxr = m3`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`, iPe = m3`\(\?R=(?<rDepth>[^\)]+)\)|${Oxr}`, Bhe = m3`\(\?<(?![=!])(?<captureName>[^>]+)>`, lOt = m3`${Bhe}|(?<unnamed>\()(?!\?)`, jP = new RegExp(m3`${Bhe}|${iPe}|\(\?|\\?.`, "gsu"), aPe = "Cannot use multiple overlapping recursions", i(Dxr, "recursion"), i(aOt, "assertMaxInBounds"), i(oOt, "makeRecursive"), i(sOt, "repeatWithDepth"), i(Fxr, "incrementIfAtLeast"), i(cOt, "mapCaptureTransfers");

}
