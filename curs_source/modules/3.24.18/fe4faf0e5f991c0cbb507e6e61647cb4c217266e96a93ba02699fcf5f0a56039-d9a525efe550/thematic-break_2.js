import { Ka, Zl, gl } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function ydr(r, e, a) {
    let s = 0, l;
    return u;
    function u(g) {
        return r.enter("thematicBreak"), p(g);
    }
    function p(g) {
        return l = g, m(g);
    }
    function m(g) {
        return g === l ? (r.enter("thematicBreakSequence"), b(g)) : s >= 3 && (g === null || Ka(g)) ? (r.exit("thematicBreak"), e(g)) : a(g);
    }
    function b(g) {
        return g === l ? (r.consume(g), s++, b) : (r.exit("thematicBreakSequence"), gl(g) ? wc(r, m, "whitespace")(g) : m(g));
    }
}
var Ffe;
export { Ffe, ydr };
var __wakaru_wdr_initialized = false;
export function wdr() {
if (__wakaru_wdr_initialized) return;
__wakaru_wdr_initialized = true;
ng(), Zl(), Ffe = {
    name: "thematicBreak",
    tokenize: ydr
}, i(ydr, "tokenizeThematicBreak");

}
