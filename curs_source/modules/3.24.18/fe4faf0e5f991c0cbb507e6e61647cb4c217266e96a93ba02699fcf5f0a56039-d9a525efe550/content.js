import { Ka, Zl } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { $ur, IRt } from "./index_75.js";
import { i } from "./plugin-brand-icon.js";
function Iur(r) {
    return IRt(r), r;
}
function Nur(r, e) {
    let a;
    return s;
    function s(m) {
        return r.enter("content"), a = r.enter("chunkContent", {
            contentType: "content"
        }), l(m);
    }
    function l(m) {
        return m === null ? u(m) : Ka(m) ? r.check(Pur, p, u)(m) : (r.consume(m), l);
    }
    function u(m) {
        return r.exit("chunkContent"), r.exit("content"), e(m);
    }
    function p(m) {
        return r.consume(m), r.exit("chunkContent"), a.next = r.enter("chunkContent", {
            contentType: "content",
            previous: a
        }), a = a.next, l;
    }
}
function Mur(r, e, a) {
    const s = this;
    return l;
    function l(p) {
        return r.exit("chunkContent"), r.enter("lineEnding"), r.consume(p), r.exit("lineEnding"), wc(r, u, "linePrefix");
    }
    function u(p) {
        if (p === null || Ka(p)) return a(p);
        const m = s.events[s.events.length - 1];
        return !s.parser.constructs.disable.null.includes("codeIndented") && m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? e(p) : r.interrupt(s.parser.constructs.flow, a, e)(p);
    }
}
var Rur, Pur;
export { Iur, Mur, Nur, Pur, Rur };
var __wakaru_U3i_initialized = false;
export function U3i() {
if (__wakaru_U3i_initialized) return;
__wakaru_U3i_initialized = true;
ng(), Zl(), $ur(), Rur = {
    resolve: Iur,
    tokenize: Nur
}, Pur = {
    partial: !0,
    tokenize: Mur
}, i(Iur, "resolveContent"), i(Nur, "tokenizeContent"), i(Mur, "tokenizeContinuation");

}
