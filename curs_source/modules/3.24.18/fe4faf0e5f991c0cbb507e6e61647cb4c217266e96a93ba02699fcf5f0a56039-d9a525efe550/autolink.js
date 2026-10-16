import { I0, Rfe, Wy, Zl, scr } from "./index_41.js";
import { i } from "./plugin-brand-icon.js";
function uur(r, e, a) {
    let s = 0;
    return l;
    function l(C) {
        return r.enter("autolink"), r.enter("autolinkMarker"), r.consume(C), r.exit("autolinkMarker"), r.enter("autolinkProtocol"), u;
    }
    function u(C) {
        return Wy(C) ? (r.consume(C), p) : C === 64 ? a(C) : g(C);
    }
    function p(C) {
        return C === 43 || C === 45 || C === 46 || I0(C) ? (s = 1, m(C)) : g(C);
    }
    function m(C) {
        return C === 58 ? (r.consume(C), s = 0, b) : (C === 43 || C === 45 || C === 46 || I0(C)) && s++ < 32 ? (r.consume(C), m) : (s = 0, g(C));
    }
    function b(C) {
        return C === 62 ? (r.exit("autolinkProtocol"), r.enter("autolinkMarker"), r.consume(C), r.exit("autolinkMarker"), r.exit("autolink"), e) : C === null || C === 32 || C === 60 || Rfe(C) ? a(C) : (r.consume(C), b);
    }
    function g(C) {
        return C === 64 ? (r.consume(C), _) : scr(C) ? (r.consume(C), g) : a(C);
    }
    function _(C) {
        return I0(C) ? v(C) : a(C);
    }
    function v(C) {
        return C === 46 ? (r.consume(C), s = 0, _) : C === 62 ? (r.exit("autolinkProtocol").type = "autolinkEmail", r.enter("autolinkMarker"), r.consume(C), r.exit("autolinkMarker"), r.exit("autolink"), e) : x(C);
    }
    function x(C) {
        if ((C === 45 || I0(C)) && s++ < 63) {
            const E = C === 45 ? x : v;
            return r.consume(C), E;
        }
        return a(C);
    }
}
var dur;
export { dur, uur };
var __wakaru_j3i_initialized = false;
export function j3i() {
if (__wakaru_j3i_initialized) return;
__wakaru_j3i_initialized = true;
Zl(), dur = {
    name: "autolink",
    tokenize: uur
}, i(uur, "tokenizeAutolink");

}
