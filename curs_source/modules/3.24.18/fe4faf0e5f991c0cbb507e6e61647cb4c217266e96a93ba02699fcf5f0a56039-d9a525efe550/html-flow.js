import { xJ, xRt } from "./blank-line.js";
import { I0, Ka, Wy, Zl, gl, op } from "./index_41.js";
import { PRt, Vur, nMe } from "./index_80.js";
import { i } from "./plugin-brand-icon.js";
function Kur(r) {
    let e = r.length;
    for(; e-- && !(r[e][0] === "enter" && r[e][1].type === "htmlFlow"););
    return e > 1 && r[e - 2][1].type === "linePrefix" && (r[e][1].start = r[e - 2][1].start, r[e + 1][1].start = r[e - 2][1].start, r.splice(e - 2, 2)), r;
}
function Xur(r, e, a) {
    const s = this;
    let l, u, p, m, b;
    return g;
    function g(Q) {
        return _(Q);
    }
    function _(Q) {
        return r.enter("htmlFlow"), r.enter("htmlFlowData"), r.consume(Q), v;
    }
    function v(Q) {
        return Q === 33 ? (r.consume(Q), x) : Q === 47 ? (r.consume(Q), u = !0, A) : Q === 63 ? (r.consume(Q), l = 3, s.interrupt ? e : W) : Wy(Q) ? (r.consume(Q), p = String.fromCharCode(Q), $) : a(Q);
    }
    function x(Q) {
        return Q === 45 ? (r.consume(Q), l = 2, C) : Q === 91 ? (r.consume(Q), l = 5, m = 0, E) : Wy(Q) ? (r.consume(Q), l = 4, s.interrupt ? e : W) : a(Q);
    }
    function C(Q) {
        return Q === 45 ? (r.consume(Q), s.interrupt ? e : W) : a(Q);
    }
    function E(Q) {
        const le = "CDATA[";
        return Q === le.charCodeAt(m++) ? (r.consume(Q), m === le.length ? s.interrupt ? e : H : E) : a(Q);
    }
    function A(Q) {
        return Wy(Q) ? (r.consume(Q), p = String.fromCharCode(Q), $) : a(Q);
    }
    function $(Q) {
        if (Q === null || Q === 47 || Q === 62 || op(Q)) {
            const le = Q === 47, he = p.toLowerCase();
            return !le && !u && PRt.includes(he) ? (l = 1, s.interrupt ? e(Q) : H(Q)) : nMe.includes(p.toLowerCase()) ? (l = 6, le ? (r.consume(Q), I) : s.interrupt ? e(Q) : H(Q)) : (l = 7, s.interrupt && !s.parser.lazy[s.now().line] ? a(Q) : u ? N(Q) : R(Q));
        }
        return Q === 45 || I0(Q) ? (r.consume(Q), p += String.fromCharCode(Q), $) : a(Q);
    }
    function I(Q) {
        return Q === 62 ? (r.consume(Q), s.interrupt ? e : H) : a(Q);
    }
    function N(Q) {
        return gl(Q) ? (r.consume(Q), N) : B(Q);
    }
    function R(Q) {
        return Q === 47 ? (r.consume(Q), B) : Q === 58 || Q === 95 || Wy(Q) ? (r.consume(Q), P) : gl(Q) ? (r.consume(Q), R) : B(Q);
    }
    function P(Q) {
        return Q === 45 || Q === 46 || Q === 58 || Q === 95 || I0(Q) ? (r.consume(Q), P) : L(Q);
    }
    function L(Q) {
        return Q === 61 ? (r.consume(Q), j) : gl(Q) ? (r.consume(Q), L) : R(Q);
    }
    function j(Q) {
        return Q === null || Q === 60 || Q === 61 || Q === 62 || Q === 96 ? a(Q) : Q === 34 || Q === 39 ? (r.consume(Q), b = Q, z) : gl(Q) ? (r.consume(Q), j) : q(Q);
    }
    function z(Q) {
        return Q === b ? (r.consume(Q), b = null, O) : Q === null || Ka(Q) ? a(Q) : (r.consume(Q), z);
    }
    function q(Q) {
        return Q === null || Q === 34 || Q === 39 || Q === 47 || Q === 60 || Q === 61 || Q === 62 || Q === 96 || op(Q) ? L(Q) : (r.consume(Q), q);
    }
    function O(Q) {
        return Q === 47 || Q === 62 || gl(Q) ? R(Q) : a(Q);
    }
    function B(Q) {
        return Q === 62 ? (r.consume(Q), V) : a(Q);
    }
    function V(Q) {
        return Q === null || Ka(Q) ? H(Q) : gl(Q) ? (r.consume(Q), V) : a(Q);
    }
    function H(Q) {
        return Q === 45 && l === 2 ? (r.consume(Q), J) : Q === 60 && l === 1 ? (r.consume(Q), re) : Q === 62 && l === 4 ? (r.consume(Q), oe) : Q === 63 && l === 3 ? (r.consume(Q), W) : Q === 93 && l === 5 ? (r.consume(Q), ae) : Ka(Q) && (l === 6 || l === 7) ? (r.exit("htmlFlowData"), r.check(edr, ce, Z)(Q)) : Q === null || Ka(Q) ? (r.exit("htmlFlowData"), Z(Q)) : (r.consume(Q), H);
    }
    function Z(Q) {
        return r.check(tdr, K, ce)(Q);
    }
    function K(Q) {
        return r.enter("lineEnding"), r.consume(Q), r.exit("lineEnding"), Y;
    }
    function Y(Q) {
        return Q === null || Ka(Q) ? Z(Q) : (r.enter("htmlFlowData"), H(Q));
    }
    function J(Q) {
        return Q === 45 ? (r.consume(Q), W) : H(Q);
    }
    function re(Q) {
        return Q === 47 ? (r.consume(Q), p = "", ne) : H(Q);
    }
    function ne(Q) {
        if (Q === 62) {
            const le = p.toLowerCase();
            return PRt.includes(le) ? (r.consume(Q), oe) : H(Q);
        }
        return Wy(Q) && p.length < 8 ? (r.consume(Q), p += String.fromCharCode(Q), ne) : H(Q);
    }
    function ae(Q) {
        return Q === 93 ? (r.consume(Q), W) : H(Q);
    }
    function W(Q) {
        return Q === 62 ? (r.consume(Q), oe) : Q === 45 && l === 2 ? (r.consume(Q), W) : H(Q);
    }
    function oe(Q) {
        return Q === null || Ka(Q) ? (r.exit("htmlFlowData"), ce(Q)) : (r.consume(Q), oe);
    }
    function ce(Q) {
        return r.exit("htmlFlow"), e(Q);
    }
}
function Yur(r, e, a) {
    const s = this;
    return l;
    function l(p) {
        return Ka(p) ? (r.enter("lineEnding"), r.consume(p), r.exit("lineEnding"), u) : a(p);
    }
    function u(p) {
        return s.parser.lazy[s.now().line] ? a(p) : e(p);
    }
}
function Jur(r, e, a) {
    return s;
    function s(l) {
        return r.enter("lineEnding"), r.consume(l), r.exit("lineEnding"), r.attempt(xJ, e, a);
    }
}
var Qur, edr, tdr;
export { Jur, Kur, Qur, Xur, Yur, edr, tdr };
var __wakaru_Z3i_initialized = false;
export function Z3i() {
if (__wakaru_Z3i_initialized) return;
__wakaru_Z3i_initialized = true;
Zl(), Vur(), xRt(), Qur = {
    concrete: !0,
    name: "htmlFlow",
    resolveTo: Kur,
    tokenize: Xur
}, edr = {
    partial: !0,
    tokenize: Jur
}, tdr = {
    partial: !0,
    tokenize: Yur
}, i(Kur, "resolveToHtmlFlow"), i(Xur, "tokenizeHtmlFlow"), i(Yur, "tokenizeNonLazyContinuationStart"), i(Jur, "tokenizeBlankLineBefore");

}
