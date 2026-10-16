import { BAs, bRt, oEe, sFi } from "./frame.mjs";
import { Qye, lOn } from "./ofv.js";
import { E } from "./tslib.es6.js";
var Hbv;
export { Hbv };
var __wakaru_Sg0_initialized = false;
export function Sg0() {
if (__wakaru_Sg0_initialized) return;
__wakaru_Sg0_initialized = true;
E(), lOn(), bRt(), Hbv = (t)=>{
    const e = ({ timestamp: n })=>t(n);
    return {
        start: (n = !0)=>oEe.update(e, n),
        stop: ()=>BAs(e),
        now: ()=>sFi.isProcessing ? sFi.timestamp : Qye.now()
    };
};

}
