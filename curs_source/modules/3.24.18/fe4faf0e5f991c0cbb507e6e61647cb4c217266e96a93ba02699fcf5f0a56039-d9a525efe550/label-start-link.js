import { jRt, rMe } from "./label-end.js";
import { i } from "./plugin-brand-icon.js";
function hdr(r, e, a) {
    const s = this;
    return l;
    function l(p) {
        return r.enter("labelLink"), r.enter("labelMarker"), r.consume(p), r.exit("labelMarker"), r.exit("labelLink"), u;
    }
    function u(p) {
        return p === 94 && "_hiddenFootnoteSupport" in s.parser.constructs ? a(p) : e(p);
    }
}
var gdr;
export { gdr, hdr };
var __wakaru_X3i_initialized = false;
export function X3i() {
if (__wakaru_X3i_initialized) return;
__wakaru_X3i_initialized = true;
jRt(), gdr = {
    name: "labelStartLink",
    resolveAll: rMe.resolveAll,
    tokenize: hdr
}, i(hdr, "tokenizeLabelStartLink");

}
