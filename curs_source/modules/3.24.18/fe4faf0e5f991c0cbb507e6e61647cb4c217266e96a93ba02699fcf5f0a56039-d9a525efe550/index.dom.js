import { WAt } from "./f6r.js";
import { i } from "./plugin-brand-icon.js";
function KNe(r) {
    const e = "&" + r + ";";
    WAt(sRt, e);
    const a = sRt.textContent;
    return a.charCodeAt(a.length - 1) === 59 && r !== "semi" || a === e ? !1 : a;
}
var sRt;
export { KNe, sRt };
var __wakaru_cRt_initialized = false;
export function cRt() {
if (__wakaru_cRt_initialized) return;
__wakaru_cRt_initialized = true;
sRt = document.createElement("i"), i(KNe, "decodeNamedCharacterReference");

}
