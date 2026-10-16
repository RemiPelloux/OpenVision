import { rdn } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var M0o, D0o;
export { D0o, M0o };
var __wakaru_p4_initialized = false;
export function p4() {
if (__wakaru_p4_initialized) return;
__wakaru_p4_initialized = true;
"use strict";
E(), M0o = class $xb {
    constructor(e){
        this._array = e, this._findLastMonotonousLastIdx = 0;
    }
    findLastMonotonous(e) {
        if ($xb.assertInvariants) {
            if (this._prevFindLastPredicate) {
                for (const i of this._array)if (this._prevFindLastPredicate(i) && !e(i)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
            }
            this._prevFindLastPredicate = e;
        }
        const n = rdn(this._array, e, this._findLastMonotonousLastIdx);
        return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
    }
}, M0o.assertInvariants = !1, D0o = M0o;

}
