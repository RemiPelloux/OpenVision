import { Ka, Rfe, Zl, op } from "./index_41.js";
import { i } from "./plugin-brand-icon.js";
function NRt(r, e, a, s, l, u, p, m, b) {
    const g = b || Number.POSITIVE_INFINITY;
    let _ = 0;
    return v;
    function v(I) {
        return I === 60 ? (r.enter(s), r.enter(l), r.enter(u), r.consume(I), r.exit(u), x) : I === null || I === 32 || I === 41 || Rfe(I) ? a(I) : (r.enter(s), r.enter(p), r.enter(m), r.enter("chunkString", {
            contentType: "string"
        }), A(I));
    }
    function x(I) {
        return I === 62 ? (r.enter(u), r.consume(I), r.exit(u), r.exit(l), r.exit(s), e) : (r.enter(m), r.enter("chunkString", {
            contentType: "string"
        }), C(I));
    }
    function C(I) {
        return I === 62 ? (r.exit("chunkString"), r.exit(m), x(I)) : I === null || I === 60 || Ka(I) ? a(I) : (r.consume(I), I === 92 ? E : C);
    }
    function E(I) {
        return I === 60 || I === 62 || I === 92 ? (r.consume(I), C) : C(I);
    }
    function A(I) {
        return !_ && (I === null || I === 41 || op(I)) ? (r.exit("chunkString"), r.exit(m), r.exit(p), r.exit(s), e(I)) : _ < g && I === 40 ? (r.consume(I), _++, A) : I === 41 ? (r.consume(I), _--, A) : I === null || I === 32 || I === 40 || Rfe(I) ? a(I) : (r.consume(I), I === 92 ? $ : A);
    }
    function $(I) {
        return I === 40 || I === 41 || I === 92 ? (r.consume(I), A) : A(I);
    }
}
export { NRt };
var __wakaru_jur_initialized = false;
export function jur() {
if (__wakaru_jur_initialized) return;
__wakaru_jur_initialized = true;
Zl(), i(NRt, "factoryDestination");

}
