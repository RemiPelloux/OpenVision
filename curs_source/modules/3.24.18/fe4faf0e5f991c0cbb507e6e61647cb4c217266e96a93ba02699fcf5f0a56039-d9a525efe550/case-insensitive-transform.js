import { _ir, oNt } from "./case-sensitive-transform.js";
import { i } from "./plugin-brand-icon.js";
function sNt(r, e) {
    return oNt(r, e.toLowerCase());
}
export { sNt };
var __wakaru_kir_initialized = false;
export function kir() {
if (__wakaru_kir_initialized) return;
__wakaru_kir_initialized = true;
_ir(), i(sNt, "caseInsensitiveTransform");

}
