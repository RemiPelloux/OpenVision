import { nqr } from "./HVr.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var _a;
export { _a };
var __wakaru_Eg_initialized = false;
export function Eg() {
if (__wakaru_Eg_initialized) return;
__wakaru_Eg_initialized = true;
"use strict";
x(), gr(), ((e)=>{
    function t(R) {
        return R && typeof R == "object" && typeof R[Symbol.iterator] == "function";
    }
    e.is = t;
    const n = Object.freeze([]);
    function i() {
        return n;
    }
    e.empty = i;
    function* r(R) {
        yield R;
    }
    e.single = r;
    function s(R) {
        return t(R) ? R : r(R);
    }
    e.wrap = s;
    function o(R) {
        return R || n;
    }
    e.from = o;
    function* a(R) {
        for(let D = R.length - 1; D >= 0; D--)yield R[D];
    }
    e.reverse = a;
    function c(R) {
        return !R || R[Symbol.iterator]().next().done === !0;
    }
    e.isEmpty = c;
    function l(R) {
        return R[Symbol.iterator]().next().value;
    }
    e.first = l;
    function u(R, D) {
        let P = 0;
        for (const N of R)if (D(N, P++)) return !0;
        return !1;
    }
    e.some = u;
    function h(R, D) {
        for (const P of R)if (D(P)) return P;
    }
    e.find = h;
    function* p(R, D) {
        for (const P of R)D(P) && (yield P);
    }
    e.filter = p;
    function* g(R, D) {
        let P = 0;
        for (const N of R)yield D(N, P++);
    }
    e.map = g;
    function* f(R, D) {
        let P = 0;
        for (const N of R)yield* D(N, P++);
    }
    e.flatMap = f;
    function* v(...R) {
        for (const D of R)nqr(D) ? yield* D : yield D;
    }
    e.concat = v;
    function b(R, D, P) {
        let N = P;
        for (const O of R)N = D(N, O);
        return N;
    }
    e.reduce = b;
    function y(R) {
        let D = 0;
        for (const P of R)D++;
        return D;
    }
    e.length = y;
    function* T(R, D, P = R.length) {
        for(D < -R.length && (D = 0), D < 0 && (D += R.length), P < 0 ? P += R.length : P > R.length && (P = R.length); D < P; D++)yield R[D];
    }
    e.slice = T;
    function E(R, D = Number.POSITIVE_INFINITY) {
        const P = [];
        if (D === 0) return [
            P,
            R
        ];
        const N = R[Symbol.iterator]();
        for(let O = 0; O < D; O++){
            const F = N.next();
            if (F.done) return [
                P,
                e.empty()
            ];
            P.push(F.value);
        }
        return [
            P,
            {
                [Symbol.iterator] () {
                    return N;
                }
            }
        ];
    }
    e.consume = E;
    async function A(R) {
        const D = [];
        for await (const P of R)D.push(P);
        return Promise.resolve(D);
    }
    e.asyncToArray = A;
})(_a || (_a = {}));

}
