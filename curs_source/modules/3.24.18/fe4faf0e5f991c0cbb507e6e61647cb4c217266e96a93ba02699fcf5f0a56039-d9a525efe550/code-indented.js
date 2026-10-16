import { Ka, Zl } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function _ur(r, e, a) {
    const s = this;
    return l;
    function l(g) {
        return r.enter("codeIndented"), wc(r, u, "linePrefix", 5)(g);
    }
    function u(g) {
        const _ = s.events[s.events.length - 1];
        return _ && _[1].type === "linePrefix" && _[2].sliceSerialize(_[1], !0).length >= 4 ? p(g) : a(g);
    }
    function p(g) {
        return g === null ? b(g) : Ka(g) ? r.attempt(vur, p, b)(g) : (r.enter("codeFlowValue"), m(g));
    }
    function m(g) {
        return g === null || Ka(g) ? (r.exit("codeFlowValue"), p(g)) : (r.consume(g), m);
    }
    function b(g) {
        return r.exit("codeIndented"), e(g);
    }
}
function kur(r, e, a) {
    const s = this;
    return l;
    function l(p) {
        return s.parser.lazy[s.now().line] ? a(p) : Ka(p) ? (r.enter("lineEnding"), r.consume(p), r.exit("lineEnding"), l) : wc(r, u, "linePrefix", 5)(p);
    }
    function u(p) {
        const m = s.events[s.events.length - 1];
        return m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? e(p) : Ka(p) ? l(p) : a(p);
    }
}
var tMe, vur;
export { _ur, kur, tMe, vur };
var __wakaru_z3i_initialized = false;
export function z3i() {
if (__wakaru_z3i_initialized) return;
__wakaru_z3i_initialized = true;
ng(), Zl(), tMe = {
    name: "codeIndented",
    tokenize: _ur
}, vur = {
    partial: !0,
    tokenize: kur
}, i(_ur, "tokenizeCodeIndented"), i(kur, "tokenizeFurtherStart");

}
