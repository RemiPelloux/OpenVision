import { w } from "./tslib.es6.js";
function Uo(e, t, r = 0, s = e.length) {
    let i = r, n = s;
    for(; i < n;){
        const a = Math.floor((i + n) / 2);
        t(e[a]) ? i = a + 1 : n = a;
    }
    return i - 1;
}
var hs;
export { Uo, hs };
var __wakaru_qo_initialized = false;
export function qo() {
if (__wakaru_qo_initialized) return;
__wakaru_qo_initialized = true;
"use strict";
w(), hs = class wo {
    constructor(t){
        this._array = t, this._findLastMonotonousLastIdx = 0;
    }
    findLastMonotonous(t) {
        if (wo.assertInvariants) {
            if (this._prevFindLastPredicate) {
                for (const s of this._array)if (this._prevFindLastPredicate(s) && !t(s)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
            }
            this._prevFindLastPredicate = t;
        }
        const r = Uo(this._array, t, this._findLastMonotonousLastIdx);
        return this._findLastMonotonousLastIdx = r + 1, r === -1 ? void 0 : this._array[r];
    }
}, hs.assertInvariants = !1;

}
