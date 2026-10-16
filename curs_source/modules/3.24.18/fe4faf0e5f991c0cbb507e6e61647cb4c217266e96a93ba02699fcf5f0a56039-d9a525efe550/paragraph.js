import { i } from "./plugin-brand-icon.js";
function vlr(r, e, a, s) {
    const l = a.enter("paragraph"), u = a.enter("phrasing"), p = a.containerPhrasing(r, s);
    return u(), l(), p;
}
export { vlr };
var __wakaru_h3i_initialized = false;
export function h3i() {
if (__wakaru_h3i_initialized) return;
__wakaru_h3i_initialized = true;
i(vlr, "paragraph");

}
