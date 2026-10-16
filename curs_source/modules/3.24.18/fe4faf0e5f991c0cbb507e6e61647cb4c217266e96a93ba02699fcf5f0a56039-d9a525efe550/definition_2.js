import { Ka, Zl, gl, op } from "./index_41.js";
import { L4, jfe } from "./index_47.js";
import { ng, wc } from "./index_74.js";
import { NRt, jur } from "./index_76.js";
import { Lur, MRt } from "./index_77.js";
import { Dur, RRt } from "./index_78.js";
import { Fur, SJ } from "./index_79.js";
import { i } from "./plugin-brand-icon.js";
function Our(r, e, a) {
    const s = this;
    let l;
    return u;
    function u(C) {
        return r.enter("definition"), p(C);
    }
    function p(C) {
        return MRt.call(s, r, m, a, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(C);
    }
    function m(C) {
        return l = L4(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1)), C === 58 ? (r.enter("definitionMarker"), r.consume(C), r.exit("definitionMarker"), b) : a(C);
    }
    function b(C) {
        return op(C) ? SJ(r, g)(C) : g(C);
    }
    function g(C) {
        return NRt(r, _, a, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(C);
    }
    function _(C) {
        return r.attempt(qur, v, v)(C);
    }
    function v(C) {
        return gl(C) ? wc(r, x, "whitespace")(C) : x(C);
    }
    function x(C) {
        return C === null || Ka(C) ? (r.exit("definition"), s.parser.defined.push(l), e(C)) : a(C);
    }
}
function zur(r, e, a) {
    return s;
    function s(m) {
        return op(m) ? SJ(r, l)(m) : a(m);
    }
    function l(m) {
        return RRt(r, u, a, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(m);
    }
    function u(m) {
        return gl(m) ? wc(r, p, "whitespace")(m) : p(m);
    }
    function p(m) {
        return m === null || Ka(m) ? e(m) : a(m);
    }
}
var Bur, qur;
export { Bur, Our, qur, zur };
var __wakaru_G3i_initialized = false;
export function G3i() {
if (__wakaru_G3i_initialized) return;
__wakaru_G3i_initialized = true;
jur(), Lur(), ng(), Dur(), Fur(), Zl(), jfe(), Bur = {
    name: "definition",
    tokenize: Our
}, qur = {
    partial: !0,
    tokenize: zur
}, i(Our, "tokenizeDefinition"), i(zur, "tokenizeTitleBefore");

}
