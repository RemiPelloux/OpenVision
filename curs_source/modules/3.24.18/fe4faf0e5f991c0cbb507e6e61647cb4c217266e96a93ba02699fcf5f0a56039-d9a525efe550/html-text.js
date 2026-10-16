import { I0, Ka, Wy, Zl, gl, op } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function ndr(r, e, a) {
    const s = this;
    let l, u, p;
    return m;
    function m(W) {
        return r.enter("htmlText"), r.enter("htmlTextData"), r.consume(W), b;
    }
    function b(W) {
        return W === 33 ? (r.consume(W), g) : W === 47 ? (r.consume(W), L) : W === 63 ? (r.consume(W), R) : Wy(W) ? (r.consume(W), q) : a(W);
    }
    function g(W) {
        return W === 45 ? (r.consume(W), _) : W === 91 ? (r.consume(W), u = 0, E) : Wy(W) ? (r.consume(W), N) : a(W);
    }
    function _(W) {
        return W === 45 ? (r.consume(W), C) : a(W);
    }
    function v(W) {
        return W === null ? a(W) : W === 45 ? (r.consume(W), x) : Ka(W) ? (p = v, re(W)) : (r.consume(W), v);
    }
    function x(W) {
        return W === 45 ? (r.consume(W), C) : v(W);
    }
    function C(W) {
        return W === 62 ? J(W) : W === 45 ? x(W) : v(W);
    }
    function E(W) {
        const oe = "CDATA[";
        return W === oe.charCodeAt(u++) ? (r.consume(W), u === oe.length ? A : E) : a(W);
    }
    function A(W) {
        return W === null ? a(W) : W === 93 ? (r.consume(W), $) : Ka(W) ? (p = A, re(W)) : (r.consume(W), A);
    }
    function $(W) {
        return W === 93 ? (r.consume(W), I) : A(W);
    }
    function I(W) {
        return W === 62 ? J(W) : W === 93 ? (r.consume(W), I) : A(W);
    }
    function N(W) {
        return W === null || W === 62 ? J(W) : Ka(W) ? (p = N, re(W)) : (r.consume(W), N);
    }
    function R(W) {
        return W === null ? a(W) : W === 63 ? (r.consume(W), P) : Ka(W) ? (p = R, re(W)) : (r.consume(W), R);
    }
    function P(W) {
        return W === 62 ? J(W) : R(W);
    }
    function L(W) {
        return Wy(W) ? (r.consume(W), j) : a(W);
    }
    function j(W) {
        return W === 45 || I0(W) ? (r.consume(W), j) : z(W);
    }
    function z(W) {
        return Ka(W) ? (p = z, re(W)) : gl(W) ? (r.consume(W), z) : J(W);
    }
    function q(W) {
        return W === 45 || I0(W) ? (r.consume(W), q) : W === 47 || W === 62 || op(W) ? O(W) : a(W);
    }
    function O(W) {
        return W === 47 ? (r.consume(W), J) : W === 58 || W === 95 || Wy(W) ? (r.consume(W), B) : Ka(W) ? (p = O, re(W)) : gl(W) ? (r.consume(W), O) : J(W);
    }
    function B(W) {
        return W === 45 || W === 46 || W === 58 || W === 95 || I0(W) ? (r.consume(W), B) : V(W);
    }
    function V(W) {
        return W === 61 ? (r.consume(W), H) : Ka(W) ? (p = V, re(W)) : gl(W) ? (r.consume(W), V) : O(W);
    }
    function H(W) {
        return W === null || W === 60 || W === 61 || W === 62 || W === 96 ? a(W) : W === 34 || W === 39 ? (r.consume(W), l = W, Z) : Ka(W) ? (p = H, re(W)) : gl(W) ? (r.consume(W), H) : (r.consume(W), K);
    }
    function Z(W) {
        return W === l ? (r.consume(W), l = void 0, Y) : W === null ? a(W) : Ka(W) ? (p = Z, re(W)) : (r.consume(W), Z);
    }
    function K(W) {
        return W === null || W === 34 || W === 39 || W === 60 || W === 61 || W === 96 ? a(W) : W === 47 || W === 62 || op(W) ? O(W) : (r.consume(W), K);
    }
    function Y(W) {
        return W === 47 || W === 62 || op(W) ? O(W) : a(W);
    }
    function J(W) {
        return W === 62 ? (r.consume(W), r.exit("htmlTextData"), r.exit("htmlText"), e) : a(W);
    }
    function re(W) {
        return r.exit("htmlTextData"), r.enter("lineEnding"), r.consume(W), r.exit("lineEnding"), ne;
    }
    function ne(W) {
        return gl(W) ? wc(r, ae, "linePrefix", s.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(W) : ae(W);
    }
    function ae(W) {
        return r.enter("htmlTextData"), p(W);
    }
}
var rdr;
export { ndr, rdr };
var __wakaru_V3i_initialized = false;
export function V3i() {
if (__wakaru_V3i_initialized) return;
__wakaru_V3i_initialized = true;
ng(), Zl(), rdr = {
    name: "htmlText",
    tokenize: ndr
}, i(ndr, "tokenizeHtmlText");

}
