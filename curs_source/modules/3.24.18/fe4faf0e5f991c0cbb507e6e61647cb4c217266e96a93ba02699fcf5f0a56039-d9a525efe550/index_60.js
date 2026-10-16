import { i } from "./plugin-brand-icon.js";
function lRt(r, e) {
    const a = Number.parseInt(r, e);
    return a < 9 || a === 11 || a > 13 && a < 32 || a > 126 && a < 160 || a > 55295 && a < 57344 || a > 64975 && a < 65008 || (a & 65535) === 65535 || (a & 65535) === 65534 || a > 1114111 ? "\uFFFD" : String.fromCodePoint(a);
}
export { lRt };
var __wakaru_Ilr_initialized = false;
export function Ilr() {
if (__wakaru_Ilr_initialized) return;
__wakaru_Ilr_initialized = true;
i(lRt, "decodeNumericCharacterReference");

}
