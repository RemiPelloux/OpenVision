import { jRt, rMe } from "./label-end.js";
import { i } from "./plugin-brand-icon.js";
function mdr(r, e, a) {
    const s = this;
    return l;
    function l(m) {
        return r.enter("labelImage"), r.enter("labelImageMarker"), r.consume(m), r.exit("labelImageMarker"), u;
    }
    function u(m) {
        return m === 91 ? (r.enter("labelMarker"), r.consume(m), r.exit("labelMarker"), r.exit("labelImage"), p) : a(m);
    }
    function p(m) {
        return m === 94 && "_hiddenFootnoteSupport" in s.parser.constructs ? a(m) : e(m);
    }
}
var fdr;
export { fdr, mdr };
var __wakaru_K3i_initialized = false;
export function K3i() {
if (__wakaru_K3i_initialized) return;
__wakaru_K3i_initialized = true;
jRt(), fdr = {
    name: "labelStartImage",
    resolveAll: rMe.resolveAll,
    tokenize: mdr
}, i(mdr, "tokenizeLabelStartImage");

}
