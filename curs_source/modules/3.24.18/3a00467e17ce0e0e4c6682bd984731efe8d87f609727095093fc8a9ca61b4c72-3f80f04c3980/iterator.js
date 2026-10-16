import { w } from "./tslib.es6.js";
import { Or } from "./types.js";
function Ko(e) {
    return !!e && typeof e[Symbol.iterator] == "function";
}
var Lr;
export { Ko, Lr };
var __wakaru_Jo_initialized = false;
export function Jo() {
if (__wakaru_Jo_initialized) return;
__wakaru_Jo_initialized = true;
"use strict";
w(), Or(), ((e)=>{
    function t(C) {
        return C && typeof C == "object" && typeof C[Symbol.iterator] == "function";
    }
    e.is = t;
    const r = Object.freeze([]);
    function s() {
        return r;
    }
    e.empty = s;
    function* i(C) {
        yield C;
    }
    e.single = i;
    function n(C) {
        return t(C) ? C : i(C);
    }
    e.wrap = n;
    function a(C) {
        return C || r;
    }
    e.from = a;
    function* o(C) {
        for(let _ = C.length - 1; _ >= 0; _--)yield C[_];
    }
    e.reverse = o;
    function l(C) {
        return !C || C[Symbol.iterator]().next().done === !0;
    }
    e.isEmpty = l;
    function c(C) {
        return C[Symbol.iterator]().next().value;
    }
    e.first = c;
    function h(C, _) {
        let T = 0;
        for (const I of C)if (_(I, T++)) return !0;
        return !1;
    }
    e.some = h;
    function u(C, _) {
        for (const T of C)if (_(T)) return T;
    }
    e.find = u;
    function* f(C, _) {
        for (const T of C)_(T) && (yield T);
    }
    e.filter = f;
    function* d(C, _) {
        let T = 0;
        for (const I of C)yield _(I, T++);
    }
    e.map = d;
    function* m(C, _) {
        let T = 0;
        for (const I of C)yield* _(I, T++);
    }
    e.flatMap = m;
    function* k(...C) {
        for (const _ of C)Ko(_) ? yield* _ : yield _;
    }
    e.concat = k;
    function D(C, _, T) {
        let I = T;
        for (const A of C)I = _(I, A);
        return I;
    }
    e.reduce = D;
    function P(C) {
        let _ = 0;
        for (const T of C)_++;
        return _;
    }
    e.length = P;
    function* x(C, _, T = C.length) {
        for(_ < -C.length && (_ = 0), _ < 0 && (_ += C.length), T < 0 ? T += C.length : T > C.length && (T = C.length); _ < T; _++)yield C[_];
    }
    e.slice = x;
    function O(C, _ = Number.POSITIVE_INFINITY) {
        const T = [];
        if (_ === 0) return [
            T,
            C
        ];
        const I = C[Symbol.iterator]();
        for(let A = 0; A < _; A++){
            const U = I.next();
            if (U.done) return [
                T,
                e.empty()
            ];
            T.push(U.value);
        }
        return [
            T,
            {
                [Symbol.iterator] () {
                    return I;
                }
            }
        ];
    }
    e.consume = O;
    async function Z(C) {
        const _ = [];
        for await (const T of C)_.push(T);
        return Promise.resolve(_);
    }
    e.asyncToArray = Z;
})(Lr || (Lr = {}));

}
