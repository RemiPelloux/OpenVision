import { i } from "./plugin-brand-icon.js";
function kJ(r) {
    return "&#x" + r.toString(16).toUpperCase() + ";";
}
export { kJ };
var __wakaru_GMt_initialized = false;
export function GMt() {
if (__wakaru_GMt_initialized) return;
__wakaru_GMt_initialized = true;
i(kJ, "encodeCharacterReference");

}
