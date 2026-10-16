import { KNe, cRt } from "./index.dom.js";
import { I0, Zl, ccr, qNe } from "./index_41.js";
import { i } from "./plugin-brand-icon.js";
function bur(r, e, a) {
    const s = this;
    let l = 0, u, p;
    return m;
    function m(v) {
        return r.enter("characterReference"), r.enter("characterReferenceMarker"), r.consume(v), r.exit("characterReferenceMarker"), b;
    }
    function b(v) {
        return v === 35 ? (r.enter("characterReferenceMarkerNumeric"), r.consume(v), r.exit("characterReferenceMarkerNumeric"), g) : (r.enter("characterReferenceValue"), u = 31, p = I0, _(v));
    }
    function g(v) {
        return v === 88 || v === 120 ? (r.enter("characterReferenceMarkerHexadecimal"), r.consume(v), r.exit("characterReferenceMarkerHexadecimal"), r.enter("characterReferenceValue"), u = 6, p = ccr, _) : (r.enter("characterReferenceValue"), u = 7, p = qNe, _(v));
    }
    function _(v) {
        if (v === 59 && l) {
            const x = r.exit("characterReferenceValue");
            return p === I0 && !KNe(s.sliceSerialize(x)) ? a(v) : (r.enter("characterReferenceMarker"), r.consume(v), r.exit("characterReferenceMarker"), r.exit("characterReference"), e);
        }
        return p(v) && l++ < u ? (r.consume(v), _) : a(v);
    }
}
var ERt;
export { ERt, bur };
var __wakaru_F3i_initialized = false;
export function F3i() {
if (__wakaru_F3i_initialized) return;
__wakaru_F3i_initialized = true;
cRt(), Zl(), ERt = {
    name: "characterReference",
    tokenize: bur
}, i(bur, "tokenizeCharacterReference");

}
