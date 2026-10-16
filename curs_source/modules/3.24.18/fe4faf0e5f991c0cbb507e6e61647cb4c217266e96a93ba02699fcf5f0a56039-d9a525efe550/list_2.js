import { xJ, xRt } from "./blank-line.js";
import { Zl, gl, qNe } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
import { Ffe, wdr } from "./thematic-break_2.js";
function _dr(r, e, a) {
    const s = this, l = s.events[s.events.length - 1];
    let u = l && l[1].type === "linePrefix" ? l[2].sliceSerialize(l[1], !0).length : 0, p = 0;
    return m;
    function m(C) {
        const E = s.containerState.type || (C === 42 || C === 43 || C === 45 ? "listUnordered" : "listOrdered");
        if (E === "listUnordered" ? !s.containerState.marker || C === s.containerState.marker : qNe(C)) {
            if (s.containerState.type || (s.containerState.type = E, r.enter(E, {
                _container: !0
            })), E === "listUnordered") return r.enter("listItemPrefix"), C === 42 || C === 45 ? r.check(Ffe, a, g)(C) : g(C);
            if (!s.interrupt || C === 49) return r.enter("listItemPrefix"), r.enter("listItemValue"), b(C);
        }
        return a(C);
    }
    function b(C) {
        return qNe(C) && ++p < 10 ? (r.consume(C), b) : (!s.interrupt || p < 2) && (s.containerState.marker ? C === s.containerState.marker : C === 41 || C === 46) ? (r.exit("listItemValue"), g(C)) : a(C);
    }
    function g(C) {
        return r.enter("listItemMarker"), r.consume(C), r.exit("listItemMarker"), s.containerState.marker = s.containerState.marker || C, r.check(xJ, s.interrupt ? a : _, r.attempt(Sdr, x, v));
    }
    function _(C) {
        return s.containerState.initialBlankLine = !0, u++, x(C);
    }
    function v(C) {
        return gl(C) ? (r.enter("listItemPrefixWhitespace"), r.consume(C), r.exit("listItemPrefixWhitespace"), x) : a(C);
    }
    function x(C) {
        return s.containerState.size = u + s.sliceSerialize(r.exit("listItemPrefix"), !0).length, e(C);
    }
}
function kdr(r, e, a) {
    const s = this;
    return s.containerState._closeFlow = void 0, r.check(xJ, l, u);
    function l(m) {
        return s.containerState.furtherBlankLines = s.containerState.furtherBlankLines || s.containerState.initialBlankLine, wc(r, e, "listItemIndent", s.containerState.size + 1)(m);
    }
    i(l, "onBlank");
    function u(m) {
        return s.containerState.furtherBlankLines || !gl(m) ? (s.containerState.furtherBlankLines = void 0, s.containerState.initialBlankLine = void 0, p(m)) : (s.containerState.furtherBlankLines = void 0, s.containerState.initialBlankLine = void 0, r.attempt(Edr, e, p)(m));
    }
    i(u, "notBlank");
    function p(m) {
        return s.containerState._closeFlow = !0, s.interrupt = void 0, wc(r, r.attempt(Ew, e, a), "linePrefix", s.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m);
    }
    i(p, "notInCurrentItem");
}
function vdr(r, e, a) {
    const s = this;
    return wc(r, l, "listItemIndent", s.containerState.size + 1);
    function l(u) {
        const p = s.events[s.events.length - 1];
        return p && p[1].type === "listItemIndent" && p[2].sliceSerialize(p[1], !0).length === s.containerState.size ? e(u) : a(u);
    }
}
function xdr(r) {
    r.exit(this.containerState.type);
}
function Cdr(r, e, a) {
    const s = this;
    return wc(r, l, "listItemPrefixWhitespace", s.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
    function l(u) {
        const p = s.events[s.events.length - 1];
        return !gl(u) && p && p[1].type === "listItemPrefixWhitespace" ? e(u) : a(u);
    }
}
var Ew, Sdr, Edr;
export { Cdr, Edr, Ew, Sdr, _dr, kdr, vdr, xdr };
var __wakaru_J3i_initialized = false;
export function J3i() {
if (__wakaru_J3i_initialized) return;
__wakaru_J3i_initialized = true;
ng(), Zl(), xRt(), wdr(), Ew = {
    continuation: {
        tokenize: kdr
    },
    exit: xdr,
    name: "list",
    tokenize: _dr
}, Sdr = {
    partial: !0,
    tokenize: Cdr
}, Edr = {
    partial: !0,
    tokenize: vdr
}, i(_dr, "tokenizeListStart"), i(kdr, "tokenizeListContinuation"), i(vdr, "tokenizeIndent"), i(xdr, "tokenizeListEnd"), i(Cdr, "tokenizeListItemPrefixWhitespace");

}
