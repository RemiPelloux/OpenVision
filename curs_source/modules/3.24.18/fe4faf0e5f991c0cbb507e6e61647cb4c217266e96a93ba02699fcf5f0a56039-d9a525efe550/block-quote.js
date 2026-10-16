import { Zl, gl } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function mur(r, e, a) {
    const s = this;
    return l;
    function l(p) {
        if (p === 62) {
            const m = s.containerState;
            return m.open || (r.enter("blockQuote", {
                _container: !0
            }), m.open = !0), r.enter("blockQuotePrefix"), r.enter("blockQuoteMarker"), r.consume(p), r.exit("blockQuoteMarker"), u;
        }
        return a(p);
    }
    function u(p) {
        return gl(p) ? (r.enter("blockQuotePrefixWhitespace"), r.consume(p), r.exit("blockQuotePrefixWhitespace"), r.exit("blockQuotePrefix"), e) : (r.exit("blockQuotePrefix"), e(p));
    }
}
function fur(r, e, a) {
    const s = this;
    return l;
    function l(p) {
        return gl(p) ? wc(r, u, "linePrefix", s.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p) : u(p);
    }
    function u(p) {
        return r.attempt(CRt, e, a)(p);
    }
}
function hur(r) {
    r.exit("blockQuote");
}
var CRt;
export { CRt, fur, hur, mur };
var __wakaru_L3i_initialized = false;
export function L3i() {
if (__wakaru_L3i_initialized) return;
__wakaru_L3i_initialized = true;
ng(), Zl(), CRt = {
    continuation: {
        tokenize: fur
    },
    exit: hur,
    name: "blockQuote",
    tokenize: mur
}, i(mur, "tokenizeBlockQuoteStart"), i(fur, "tokenizeBlockQuoteContinuation"), i(hur, "exit");

}
