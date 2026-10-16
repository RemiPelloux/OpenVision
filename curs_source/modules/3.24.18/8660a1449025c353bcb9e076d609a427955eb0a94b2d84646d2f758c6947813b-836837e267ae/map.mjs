import { CYl, rbv } from "./anticipate.mjs";
import { OAs, SYl, kYl, wYl } from "./back.mjs";
import { FAs, TYl, obv, sbv } from "./circ.mjs";
import { _Yl } from "./cubic-bezier.mjs";
import { EYl, abv, cbv, lbv } from "./ease.mjs";
import { Out, X_v } from "./errors.mjs";
import { IYl, dbv } from "./is-bezier-definition.mjs";
import { NQt, pYl } from "./noop.mjs";
import { nFi } from "./ofv.js";
import { E } from "./tslib.es6.js";
var xYl, hbv, AYl;
export { AYl, hbv, xYl };
var __wakaru_Zm0_initialized = false;
export function Zm0() {
if (__wakaru_Zm0_initialized) return;
__wakaru_Zm0_initialized = true;
E(), X_v(), pYl(), rbv(), wYl(), obv(), _Yl(), cbv(), dbv(), xYl = {
    linear: NQt,
    easeIn: abv,
    easeInOut: EYl,
    easeOut: lbv,
    circIn: FAs,
    circInOut: TYl,
    circOut: sbv,
    backIn: OAs,
    backInOut: kYl,
    backOut: SYl,
    anticipate: CYl
}, hbv = (t)=>typeof t == "string", AYl = (t)=>{
    if (IYl(t)) {
        Out(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [e, n, i, r] = t;
        return nFi(e, n, i, r);
    } else if (hbv(t)) return Out(xYl[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), xYl[t];
    return t;
};

}
