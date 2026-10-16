import { Ka, Zl, gl } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function yur(r, e, a) {
    const s = this, l = {
        partial: !0,
        tokenize: L
    };
    let u = 0, p = 0, m;
    return b;
    function b(j) {
        return g(j);
    }
    function g(j) {
        const z = s.events[s.events.length - 1];
        return u = z && z[1].type === "linePrefix" ? z[2].sliceSerialize(z[1], !0).length : 0, m = j, r.enter("codeFenced"), r.enter("codeFencedFence"), r.enter("codeFencedFenceSequence"), _(j);
    }
    function _(j) {
        return j === m ? (p++, r.consume(j), _) : p < 3 ? a(j) : (r.exit("codeFencedFenceSequence"), gl(j) ? wc(r, v, "whitespace")(j) : v(j));
    }
    function v(j) {
        return j === null || Ka(j) ? (r.exit("codeFencedFence"), s.interrupt ? e(j) : r.check(ARt, A, P)(j)) : (r.enter("codeFencedFenceInfo"), r.enter("chunkString", {
            contentType: "string"
        }), x(j));
    }
    function x(j) {
        return j === null || Ka(j) ? (r.exit("chunkString"), r.exit("codeFencedFenceInfo"), v(j)) : gl(j) ? (r.exit("chunkString"), r.exit("codeFencedFenceInfo"), wc(r, C, "whitespace")(j)) : j === 96 && j === m ? a(j) : (r.consume(j), x);
    }
    function C(j) {
        return j === null || Ka(j) ? v(j) : (r.enter("codeFencedFenceMeta"), r.enter("chunkString", {
            contentType: "string"
        }), E(j));
    }
    function E(j) {
        return j === null || Ka(j) ? (r.exit("chunkString"), r.exit("codeFencedFenceMeta"), v(j)) : j === 96 && j === m ? a(j) : (r.consume(j), E);
    }
    function A(j) {
        return r.attempt(l, P, $)(j);
    }
    function $(j) {
        return r.enter("lineEnding"), r.consume(j), r.exit("lineEnding"), I;
    }
    function I(j) {
        return u > 0 && gl(j) ? wc(r, N, "linePrefix", u + 1)(j) : N(j);
    }
    function N(j) {
        return j === null || Ka(j) ? r.check(ARt, A, P)(j) : (r.enter("codeFlowValue"), R(j));
    }
    function R(j) {
        return j === null || Ka(j) ? (r.exit("codeFlowValue"), N(j)) : (r.consume(j), R);
    }
    function P(j) {
        return r.exit("codeFenced"), e(j);
    }
    function L(j, z, q) {
        let O = 0;
        return B;
        function B(Y) {
            return j.enter("lineEnding"), j.consume(Y), j.exit("lineEnding"), V;
        }
        function V(Y) {
            return j.enter("codeFencedFence"), gl(Y) ? wc(j, H, "linePrefix", s.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(Y) : H(Y);
        }
        function H(Y) {
            return Y === m ? (j.enter("codeFencedFenceSequence"), Z(Y)) : q(Y);
        }
        function Z(Y) {
            return Y === m ? (O++, j.consume(Y), Z) : O >= p ? (j.exit("codeFencedFenceSequence"), gl(Y) ? wc(j, K, "whitespace")(Y) : K(Y)) : q(Y);
        }
        function K(Y) {
            return Y === null || Ka(Y) ? (j.exit("codeFencedFence"), z(Y)) : q(Y);
        }
    }
}
function wur(r, e, a) {
    const s = this;
    return l;
    function l(p) {
        return p === null ? a(p) : (r.enter("lineEnding"), r.consume(p), r.exit("lineEnding"), u);
    }
    function u(p) {
        return s.parser.lazy[s.now().line] ? a(p) : e(p);
    }
}
var ARt, TRt;
export { ARt, TRt, wur, yur };
var __wakaru_O3i_initialized = false;
export function O3i() {
if (__wakaru_O3i_initialized) return;
__wakaru_O3i_initialized = true;
ng(), Zl(), ARt = {
    partial: !0,
    tokenize: wur
}, TRt = {
    concrete: !0,
    name: "codeFenced",
    tokenize: yur
}, i(yur, "tokenizeCodeFenced"), i(wur, "tokenizeNonLazyContinuation");

}
