import { Ka, Zl } from "./index_41.js";
import { i } from "./plugin-brand-icon.js";
function Uur(r, e, a) {
    return s;
    function s(u) {
        return r.enter("hardBreakEscape"), r.consume(u), l;
    }
    function l(u) {
        return Ka(u) ? (r.exit("hardBreakEscape"), e(u)) : a(u);
    }
}
var Gur;
export { Gur, Uur };
var __wakaru_W3i_initialized = false;
export function W3i() {
if (__wakaru_W3i_initialized) return;
__wakaru_W3i_initialized = true;
Zl(), Gur = {
    name: "hardBreakEscape",
    tokenize: Uur
}, i(Uur, "tokenizeHardBreakEscape");

}
