import { z0o } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
var np;
export { np };
var __wakaru_IT_initialized = false;
export function IT() {
if (__wakaru_IT_initialized) return;
__wakaru_IT_initialized = true;
"use strict";
E(), To(), ((t)=>{
    function e(C) {
        return C && typeof C == "object" && typeof C[Symbol.iterator] == "function";
    }
    t.is = e;
    const n = Object.freeze([]);
    function i() {
        return n;
    }
    t.empty = i;
    function* r(C) {
        yield C;
    }
    t.single = r;
    function s(C) {
        return e(C) ? C : r(C);
    }
    t.wrap = s;
    function o(C) {
        return C || n;
    }
    t.from = o;
    function* a(C) {
        for(let T = C.length - 1; T >= 0; T--)yield C[T];
    }
    t.reverse = a;
    function l(C) {
        return !C || C[Symbol.iterator]().next().done === !0;
    }
    t.isEmpty = l;
    function c(C) {
        return C[Symbol.iterator]().next().value;
    }
    t.first = c;
    function u(C, T) {
        let I = 0;
        for (const A of C)if (T(A, I++)) return !0;
        return !1;
    }
    t.some = u;
    function d(C, T) {
        for (const I of C)if (T(I)) return I;
    }
    t.find = d;
    function* h(C, T) {
        for (const I of C)T(I) && (yield I);
    }
    t.filter = h;
    function* p(C, T) {
        let I = 0;
        for (const A of C)yield T(A, I++);
    }
    t.map = p;
    function* g(C, T) {
        let I = 0;
        for (const A of C)yield* T(A, I++);
    }
    t.flatMap = g;
    function* f(...C) {
        for (const T of C)z0o(T) ? yield* T : yield T;
    }
    t.concat = f;
    function _(C, T, I) {
        let A = I;
        for (const P of C)A = T(A, P);
        return A;
    }
    t.reduce = _;
    function b(C) {
        let T = 0;
        for (const I of C)T++;
        return T;
    }
    t.length = b;
    function* y(C, T, I = C.length) {
        for(T < -C.length && (T = 0), T < 0 && (T += C.length), I < 0 ? I += C.length : I > C.length && (I = C.length); T < I; T++)yield C[T];
    }
    t.slice = y;
    function S(C, T = Number.POSITIVE_INFINITY) {
        const I = [];
        if (T === 0) return [
            I,
            C
        ];
        const A = C[Symbol.iterator]();
        for(let P = 0; P < T; P++){
            const M = A.next();
            if (M.done) return [
                I,
                t.empty()
            ];
            I.push(M.value);
        }
        return [
            I,
            {
                [Symbol.iterator] () {
                    return A;
                }
            }
        ];
    }
    t.consume = S;
    async function k(C) {
        const T = [];
        for await (const I of C)T.push(I);
        return Promise.resolve(T);
    }
    t.asyncToArray = k;
})(np || (np = {}));

}
