import { Ka, Zl, gl, op } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function Wdr() {
    return {
        text: {
            91: Vdr
        }
    };
}
function Hdr(r, e, a) {
    const s = this;
    return l;
    function l(b) {
        return s.previous !== null || !s._gfmTasklistFirstContentOfListItem ? a(b) : (r.enter("taskListCheck"), r.enter("taskListCheckMarker"), r.consume(b), r.exit("taskListCheckMarker"), u);
    }
    function u(b) {
        return op(b) ? (r.enter("taskListCheckValueUnchecked"), r.consume(b), r.exit("taskListCheckValueUnchecked"), p) : b === 88 || b === 120 ? (r.enter("taskListCheckValueChecked"), r.consume(b), r.exit("taskListCheckValueChecked"), p) : a(b);
    }
    function p(b) {
        return b === 93 ? (r.enter("taskListCheckMarker"), r.consume(b), r.exit("taskListCheckMarker"), r.exit("taskListCheck"), m) : a(b);
    }
    function m(b) {
        return Ka(b) ? e(b) : gl(b) ? r.check({
            tokenize: Zdr
        }, e, a)(b) : a(b);
    }
}
function Zdr(r, e, a) {
    return wc(r, s, "whitespace");
    function s(l) {
        return l === null ? a(l) : e(l);
    }
}
var Vdr;
export { Hdr, Vdr, Wdr, Zdr };
var __wakaru_cxi_initialized = false;
export function cxi() {
if (__wakaru_cxi_initialized) return;
__wakaru_cxi_initialized = true;
ng(), Zl(), Vdr = {
    name: "tasklistCheck",
    tokenize: Hdr
}, i(Wdr, "gfmTaskListItem"), i(Hdr, "tokenizeTasklistCheck"), i(Zdr, "spaceThenNonSpace");

}
