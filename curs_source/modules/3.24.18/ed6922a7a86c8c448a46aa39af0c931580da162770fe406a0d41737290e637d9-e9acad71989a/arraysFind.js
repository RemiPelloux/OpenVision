import { nNt } from "./HVr.js";
import { x } from "./tslib.es6.js";
var zjr, Kjr;
export { Kjr, zjr };
var __wakaru_FT_initialized = false;
export function FT() {
if (__wakaru_FT_initialized) return;
__wakaru_FT_initialized = true;
"use strict";
x(), zjr = class fSm {
    constructor(t){
        this._array = t, this._findLastMonotonousLastIdx = 0;
    }
    findLastMonotonous(t) {
        if (fSm.assertInvariants) {
            if (this._prevFindLastPredicate) {
                for (const i of this._array)if (this._prevFindLastPredicate(i) && !t(i)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
            }
            this._prevFindLastPredicate = t;
        }
        const n = nNt(this._array, t, this._findLastMonotonousLastIdx);
        return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
    }
}, zjr.assertInvariants = !1, Kjr = zjr;

}
