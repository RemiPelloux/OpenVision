import { Ndl, qJ } from "./info.js";
import { Fdl, iEi, sEi } from "./qIc.js";
import { x } from "./tslib.es6.js";
var oEi, aEi;
export { aEi, oEi };
var __wakaru_Bdl_initialized = false;
export function Bdl() {
if (__wakaru_Bdl_initialized) return;
__wakaru_Bdl_initialized = true;
x(), Ndl(), sEi(), oEi = Object.keys(iEi), aEi = class extends qJ {
    constructor(e, t, n, i){
        let r = -1;
        if (super(e, t), Fdl(this, "space", i), typeof n == "number") for(; ++r < oEi.length;){
            const s = oEi[r];
            Fdl(this, oEi[r], (n & iEi[s]) === iEi[s]);
        }
    }
}, aEi.prototype.defined = !0;

}
