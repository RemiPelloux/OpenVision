import { i } from "./plugin-brand-icon.js";
function pPt(r, e) {
    return ((e || Vmr).jsx ? Zmr : Hmr).test(r);
}
var Hmr, Zmr, Vmr;
export { Hmr, Vmr, Zmr, pPt };
var __wakaru_mxi_initialized = false;
export function mxi() {
if (__wakaru_mxi_initialized) return;
__wakaru_mxi_initialized = true;
Hmr = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Zmr = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Vmr = {}, i(pPt, "name");

}
