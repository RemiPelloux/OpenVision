import { _Mr, fMr, smh } from "./LYd.js";
import { imh, whe } from "./info.js";
import { E } from "./tslib.es6.js";
var bMr, yMr;
export { bMr, yMr };
var __wakaru_omh_initialized = false;
export function omh() {
if (__wakaru_omh_initialized) return;
__wakaru_omh_initialized = true;
E(), imh(), _Mr(), bMr = Object.keys(fMr), yMr = class extends whe {
    constructor(t, e, n, i){
        let r = -1;
        if (super(t, e), smh(this, "space", i), typeof n == "number") for(; ++r < bMr.length;){
            const s = bMr[r];
            smh(this, bMr[r], (n & fMr[s]) === fMr[s]);
        }
    }
}, yMr.prototype.defined = !0;

}
