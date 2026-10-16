import { i } from "./plugin-brand-icon.js";
function Mfe(r, e) {
    const a = String(r);
    if (typeof e != "string") throw new TypeError("Expected character");
    let s = 0, l = a.indexOf(e);
    for(; l !== -1;)s++, l = a.indexOf(e, l + e.length);
    return s;
}
export { Mfe };
var __wakaru_ocr_initialized = false;
export function ocr() {
if (__wakaru_ocr_initialized) return;
__wakaru_ocr_initialized = true;
i(Mfe, "ccount");

}
