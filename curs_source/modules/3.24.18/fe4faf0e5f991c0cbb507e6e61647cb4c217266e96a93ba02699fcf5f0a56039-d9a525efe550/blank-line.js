import { Ka, Zl, gl } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function pur(r, e, a) {
    return s;
    function s(u) {
        return gl(u) ? wc(r, l, "linePrefix")(u) : l(u);
    }
    function l(u) {
        return u === null || Ka(u) ? e(u) : a(u);
    }
}
var xJ;
export { pur, xJ };
var __wakaru_xRt_initialized = false;
export function xRt() {
if (__wakaru_xRt_initialized) return;
__wakaru_xRt_initialized = true;
ng(), Zl(), xJ = {
    partial: !0,
    tokenize: pur
}, i(pur, "tokenizeBlankLine");

}
