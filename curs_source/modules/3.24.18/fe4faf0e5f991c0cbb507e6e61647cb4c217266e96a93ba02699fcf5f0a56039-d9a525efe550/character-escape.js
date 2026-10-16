import { Zl, lcr } from "./index_41.js";
import { i } from "./plugin-brand-icon.js";
function gur(r, e, a) {
    return s;
    function s(u) {
        return r.enter("characterEscape"), r.enter("escapeMarker"), r.consume(u), r.exit("escapeMarker"), l;
    }
    function l(u) {
        return lcr(u) ? (r.enter("characterEscapeValue"), r.consume(u), r.exit("characterEscapeValue"), r.exit("characterEscape"), e) : a(u);
    }
}
var SRt;
export { SRt, gur };
var __wakaru_D3i_initialized = false;
export function D3i() {
if (__wakaru_D3i_initialized) return;
__wakaru_D3i_initialized = true;
Zl(), SRt = {
    name: "characterEscape",
    tokenize: gur
}, i(gur, "tokenizeCharacterEscape");

}
