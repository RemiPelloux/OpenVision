import { pnu } from "./api_4.js";
import { GEn } from "./core_3.js";
import { CZe, UHf, fN } from "./f0s.js";
import { Vtu, Wtu, nNs, tNs, ztu } from "./parse_5.js";
import { KHf, anu, cnu, dnu, hnu, lnu, onu, rnu, snu, unu, xve } from "./schemas_3.js";
import { x } from "./tslib.es6.js";
import { dUt } from "./util_2.js";
var ZDe, gnu, fnu, vnu, rNs, _nu, bnu, ynu, Snu, knu;
export { Snu, ZDe, _nu, bnu, fnu, gnu, knu, rNs, vnu, ynu };
var __wakaru_sWf_initialized = false;
export function sWf() {
if (__wakaru_sWf_initialized) return;
__wakaru_sWf_initialized = true;
x(), GEn(), KHf(), ztu(), dUt(), pnu(), ZDe = fN("ZodMiniType", (e, t)=>{
    if (!e._zod) throw new Error("Uninitialized schema in ZodMiniType.");
    xve.init(e, t), e.def = t, e.parse = (n, i)=>Wtu(e, n, i, {
            callee: e.parse
        }), e.safeParse = (n, i)=>tNs(e, n, i), e.parseAsync = async (n, i)=>Vtu(e, n, i, {
            callee: e.parseAsync
        }), e.safeParseAsync = async (n, i)=>nNs(e, n, i), e.check = (...n)=>e.clone({
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
        }), e.clone = (n, i)=>UHf(e, n, i), e.brand = ()=>e, e.register = ((n, i)=>(n.add(e, i), e));
}), gnu = fN("ZodMiniString", (e, t)=>{
    rnu.init(e, t), ZDe.init(e, t);
}), fnu = fN("ZodMiniNever", (e, t)=>{
    snu.init(e, t), ZDe.init(e, t);
}), vnu = fN("ZodMiniArray", (e, t)=>{
    onu.init(e, t), ZDe.init(e, t);
}), rNs = fN("ZodMiniObject", (e, t)=>{
    anu.init(e, t), ZDe.init(e, t), CZe(e, "shape", ()=>t.shape);
}), _nu = fN("ZodMiniUnion", (e, t)=>{
    cnu.init(e, t), ZDe.init(e, t);
}), bnu = fN("ZodMiniRecord", (e, t)=>{
    lnu.init(e, t), ZDe.init(e, t);
}), ynu = fN("ZodMiniEnum", (e, t)=>{
    unu.init(e, t), ZDe.init(e, t);
}), Snu = fN("ZodMiniLiteral", (e, t)=>{
    dnu.init(e, t), ZDe.init(e, t);
}), knu = fN("ZodMiniOptional", (e, t)=>{
    hnu.init(e, t), ZDe.init(e, t);
});

}
