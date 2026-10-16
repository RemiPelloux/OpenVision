import { Ka, Zl, gl } from "./index_41.js";
import { i } from "./plugin-brand-icon.js";
function MRt(r, e, a, s, l, u) {
    const p = this;
    let m = 0, b;
    return g;
    function g(C) {
        return r.enter(s), r.enter(l), r.consume(C), r.exit(l), r.enter(u), _;
    }
    function _(C) {
        return m > 999 || C === null || C === 91 || C === 93 && !b || C === 94 && !m && "_hiddenFootnoteSupport" in p.parser.constructs ? a(C) : C === 93 ? (r.exit(u), r.enter(l), r.consume(C), r.exit(l), r.exit(s), e) : Ka(C) ? (r.enter("lineEnding"), r.consume(C), r.exit("lineEnding"), _) : (r.enter("chunkString", {
            contentType: "string"
        }), v(C));
    }
    function v(C) {
        return C === null || C === 91 || C === 93 || Ka(C) || m++ > 999 ? (r.exit("chunkString"), _(C)) : (r.consume(C), b || (b = !gl(C)), C === 92 ? x : v);
    }
    function x(C) {
        return C === 91 || C === 92 || C === 93 ? (r.consume(C), m++, v) : v(C);
    }
}
export { MRt };
var __wakaru_Lur_initialized = false;
export function Lur() {
if (__wakaru_Lur_initialized) return;
__wakaru_Lur_initialized = true;
Zl(), i(MRt, "factoryLabel");

}
