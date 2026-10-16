import { h } from "./tslib.es6.js";
function ZLe(e, t, n = 0, r = e.length) {
    let s = n, i = r;
    for(; s < i;){
        const a = Math.floor((s + i) / 2);
        t(e[a]) ? s = a + 1 : i = a;
    }
    return s - 1;
}
var _4;
export { ZLe, _4 };
var __wakaru_tUe_initialized = false;
export function tUe() {
if (__wakaru_tUe_initialized) return;
__wakaru_tUe_initialized = true;
"use strict";
h(), _4 = class V9e {
    constructor(t){
        this._array = t, this._findLastMonotonousLastIdx = 0;
    }
    findLastMonotonous(t) {
        if (V9e.assertInvariants) {
            if (this._prevFindLastPredicate) {
                for (const r of this._array)if (this._prevFindLastPredicate(r) && !t(r)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
            }
            this._prevFindLastPredicate = t;
        }
        const n = ZLe(this._array, t, this._findLastMonotonousLastIdx);
        return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
    }
}, _4.assertInvariants = !1;

}
