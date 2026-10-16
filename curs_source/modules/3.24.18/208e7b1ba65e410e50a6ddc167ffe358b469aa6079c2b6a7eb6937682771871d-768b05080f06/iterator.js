import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
function _Ue(e) {
    return !!e && typeof e[Symbol.iterator] == "function";
}
var zo;
export { _Ue, zo };
var __wakaru_xv_initialized = false;
export function xv() {
if (__wakaru_xv_initialized) return;
__wakaru_xv_initialized = true;
"use strict";
h(), Ze(), ((e)=>{
    function t(U) {
        return U && typeof U == "object" && typeof U[Symbol.iterator] == "function";
    }
    e.is = t;
    const n = Object.freeze([]);
    function r() {
        return n;
    }
    e.empty = r;
    function* s(U) {
        yield U;
    }
    e.single = s;
    function i(U) {
        return t(U) ? U : s(U);
    }
    e.wrap = i;
    function a(U) {
        return U || n;
    }
    e.from = a;
    function* o(U) {
        for(let X = U.length - 1; X >= 0; X--)yield U[X];
    }
    e.reverse = o;
    function l(U) {
        return !U || U[Symbol.iterator]().next().done === !0;
    }
    e.isEmpty = l;
    function d(U) {
        return U[Symbol.iterator]().next().value;
    }
    e.first = d;
    function u(U, X) {
        let W = 0;
        for (const K of U)if (X(K, W++)) return !0;
        return !1;
    }
    e.some = u;
    function m(U, X) {
        for (const W of U)if (X(W)) return W;
    }
    e.find = m;
    function* f(U, X) {
        for (const W of U)X(W) && (yield W);
    }
    e.filter = f;
    function* v(U, X) {
        let W = 0;
        for (const K of U)yield X(K, W++);
    }
    e.map = v;
    function* T(U, X) {
        let W = 0;
        for (const K of U)yield* X(K, W++);
    }
    e.flatMap = T;
    function* S(...U) {
        for (const X of U)_Ue(X) ? yield* X : yield X;
    }
    e.concat = S;
    function k(U, X, W) {
        let K = W;
        for (const H of U)K = X(K, H);
        return K;
    }
    e.reduce = k;
    function y(U) {
        let X = 0;
        for (const W of U)X++;
        return X;
    }
    e.length = y;
    function* b(U, X, W = U.length) {
        for(X < -U.length && (X = 0), X < 0 && (X += U.length), W < 0 ? W += U.length : W > U.length && (W = U.length); X < W; X++)yield U[X];
    }
    e.slice = b;
    function I(U, X = Number.POSITIVE_INFINITY) {
        const W = [];
        if (X === 0) return [
            W,
            U
        ];
        const K = U[Symbol.iterator]();
        for(let H = 0; H < X; H++){
            const ue = K.next();
            if (ue.done) return [
                W,
                e.empty()
            ];
            W.push(ue.value);
        }
        return [
            W,
            {
                [Symbol.iterator] () {
                    return K;
                }
            }
        ];
    }
    e.consume = I;
    async function G(U) {
        const X = [];
        for await (const W of U)X.push(W);
        return Promise.resolve(X);
    }
    e.asyncToArray = G;
})(zo || (zo = {}));

}
