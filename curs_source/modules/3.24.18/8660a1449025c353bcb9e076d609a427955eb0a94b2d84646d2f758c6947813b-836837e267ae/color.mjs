import { GAs, wbv } from "./hex.mjs";
import { pg0 } from "./hsla-to-rgba.mjs";
import { BQt, Ebv } from "./hsla.mjs";
import { Nbv } from "./immediate.mjs";
import { xR } from "./index_10.mjs";
import { cFi, mOn } from "./number.mjs";
import { Lbv, zAs } from "./ofv.js";
import { OYl, yRt } from "./rgba.mjs";
import { E } from "./tslib.es6.js";
var VAs, Obv, Fbv, HYl;
export { Fbv, HYl, Obv, VAs };
var __wakaru_mg0_initialized = false;
export function mg0() {
if (__wakaru_mg0_initialized) return;
__wakaru_mg0_initialized = true;
E(), xR(), wbv(), Ebv(), pg0(), OYl(), Nbv(), cFi(), VAs = (t, e, n)=>{
    const i = t * t, r = n * (e * e - i) + i;
    return r < 0 ? 0 : Math.sqrt(r);
}, Obv = [
    GAs,
    yRt,
    BQt
], Fbv = (t)=>Obv.find((e)=>e.test(t)), HYl = (t, e)=>{
    const n = Lbv(t), i = Lbv(e);
    if (!n || !i) return zAs(t, e);
    const r = {
        ...n
    };
    return (s)=>(r.red = VAs(n.red, i.red, s), r.green = VAs(n.green, i.green, s), r.blue = VAs(n.blue, i.blue, s), r.alpha = mOn(n.alpha, i.alpha, s), yRt.transform(r));
};

}
