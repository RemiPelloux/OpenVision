import { Rnt } from "./LYd.js";
import { E } from "./tslib.es6.js";
var yJd, _St;
export { _St, yJd };
var __wakaru_Dxr_initialized = false;
export function Dxr() {
if (__wakaru_Dxr_initialized) return;
__wakaru_Dxr_initialized = true;
E(), yJd = (t)=>t.replace(/^(?!$)(?: $)?/gm, "#"), _St = (t, e, n)=>t.endsWith(`
`) ? Rnt(n, e) : n.includes(`
`) ? `
` + Rnt(n, e) : (t.endsWith(" ") ? "" : " ") + n;

}
