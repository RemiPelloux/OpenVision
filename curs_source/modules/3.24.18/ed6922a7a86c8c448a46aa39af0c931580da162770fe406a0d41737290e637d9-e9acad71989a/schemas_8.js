import { eth } from "./api_6.js";
import { X2n } from "./core_5.js";
import { Dgo, Mgo, lth, oth, rth } from "./parse_10.js";
import { FLv, I_e, Sth, _th, bth, fth, gth, kth, vth, wth, yth } from "./schemas_7.js";
import { x } from "./tslib.es6.js";
import { dGt } from "./util_4.js";
import { CLv, Fet, xN } from "./xmo.js";
var PPe, Tth, Eth, xth, Lgo, Ith, Ath, Rth, Dth, Mth;
export { Ath, Dth, Eth, Ith, Lgo, Mth, PPe, Rth, Tth, xth };
var __wakaru_WLv_initialized = false;
export function WLv() {
if (__wakaru_WLv_initialized) return;
__wakaru_WLv_initialized = true;
x(), dGt(), X2n(), eth(), FLv(), lth(), PPe = xN("ZodMiniType", (e, t)=>{
    if (!e._zod) throw new Error("Uninitialized schema in ZodMiniType.");
    I_e.init(e, t), e.def = t, e.parse = (n, i)=>rth(e, n, i, {
            callee: e.parse
        }), e.safeParse = (n, i)=>Dgo(e, n, i), e.parseAsync = async (n, i)=>oth(e, n, i, {
            callee: e.parseAsync
        }), e.safeParseAsync = async (n, i)=>Mgo(e, n, i), e.check = (...n)=>e.clone({
            ...t,
            checks: [
                ...t.checks ?? [],
                ...n.map((i)=>typeof i == "function" ? {
                        _zod: {
                            check: i,
                            def: {
                                check: "custom"
                            },
                            onattach: []
                        }
                    } : i)
            ]
        }), e.clone = (n, i)=>CLv(e, n, i), e.brand = ()=>e, e.register = ((n, i)=>(n.add(e, i), e));
}), Tth = xN("ZodMiniString", (e, t)=>{
    gth.init(e, t), PPe.init(e, t);
}), Eth = xN("ZodMiniNever", (e, t)=>{
    fth.init(e, t), PPe.init(e, t);
}), xth = xN("ZodMiniArray", (e, t)=>{
    vth.init(e, t), PPe.init(e, t);
}), Lgo = xN("ZodMiniObject", (e, t)=>{
    _th.init(e, t), PPe.init(e, t), Fet(e, "shape", ()=>t.shape);
}), Ith = xN("ZodMiniUnion", (e, t)=>{
    bth.init(e, t), PPe.init(e, t);
}), Ath = xN("ZodMiniRecord", (e, t)=>{
    yth.init(e, t), PPe.init(e, t);
}), Rth = xN("ZodMiniEnum", (e, t)=>{
    Sth.init(e, t), PPe.init(e, t);
}), Dth = xN("ZodMiniLiteral", (e, t)=>{
    kth.init(e, t), PPe.init(e, t);
}), Mth = xN("ZodMiniOptional", (e, t)=>{
    wth.init(e, t), PPe.init(e, t);
});

}
