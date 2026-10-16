import { Tpp } from "./api_5.js";
import { hvi } from "./core_4.js";
import { $t1, g6, mwt } from "./ipa.js";
import { epp, fEa, gEa, npp, spp } from "./parse_8.js";
import { Cpp, P2e, Spp, Xt1, _pp, bpp, fpp, kpp, vpp, wpp, ypp } from "./schemas_6.js";
import { E } from "./tslib.es6.js";
import { cwn } from "./util_3.js";
var kGe, Ipp, xpp, App, _Ea, Rpp, Ppp, Mpp, Dpp, Npp;
export { App, Dpp, Ipp, Mpp, Npp, Ppp, Rpp, _Ea, kGe, xpp };
var __wakaru_an1_initialized = false;
export function an1() {
if (__wakaru_an1_initialized) return;
__wakaru_an1_initialized = true;
E(), hvi(), Xt1(), spp(), cwn(), Tpp(), kGe = g6("ZodMiniType", (t, e)=>{
    if (!t._zod) throw new Error("Uninitialized schema in ZodMiniType.");
    P2e.init(t, e), t.def = e, t.parse = (n, i)=>epp(t, n, i, {
            callee: t.parse
        }), t.safeParse = (n, i)=>gEa(t, n, i), t.parseAsync = async (n, i)=>npp(t, n, i, {
            callee: t.parseAsync
        }), t.safeParseAsync = async (n, i)=>fEa(t, n, i), t.check = (...n)=>t.clone({
            ...e,
            checks: [
                ...e.checks ?? [],
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
        }), t.clone = (n, i)=>$t1(t, n, i), t.brand = ()=>t, t.register = ((n, i)=>(n.add(t, i), t));
}), Ipp = g6("ZodMiniString", (t, e)=>{
    fpp.init(t, e), kGe.init(t, e);
}), xpp = g6("ZodMiniNever", (t, e)=>{
    vpp.init(t, e), kGe.init(t, e);
}), App = g6("ZodMiniArray", (t, e)=>{
    _pp.init(t, e), kGe.init(t, e);
}), _Ea = g6("ZodMiniObject", (t, e)=>{
    bpp.init(t, e), kGe.init(t, e), mwt(t, "shape", ()=>e.shape);
}), Rpp = g6("ZodMiniUnion", (t, e)=>{
    ypp.init(t, e), kGe.init(t, e);
}), Ppp = g6("ZodMiniRecord", (t, e)=>{
    Spp.init(t, e), kGe.init(t, e);
}), Mpp = g6("ZodMiniEnum", (t, e)=>{
    kpp.init(t, e), kGe.init(t, e);
}), Dpp = g6("ZodMiniLiteral", (t, e)=>{
    wpp.init(t, e), kGe.init(t, e);
}), Npp = g6("ZodMiniOptional", (t, e)=>{
    Cpp.init(t, e), kGe.init(t, e);
});

}
