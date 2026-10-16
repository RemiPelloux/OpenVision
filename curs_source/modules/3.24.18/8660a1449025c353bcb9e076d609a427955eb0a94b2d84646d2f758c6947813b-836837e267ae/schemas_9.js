import { zUm } from "./api_6.js";
import { $0i } from "./core_5.js";
import { E6, HCt, xV1 } from "./gYa.js";
import { CXa, QUm, XUm, tjm, wXa } from "./parse_11.js";
import { $V1, EPe, ajm, cjm, djm, gjm, hjm, ljm, mjm, pjm, ujm } from "./schemas_8.js";
import { E } from "./tslib.es6.js";
import { uIn } from "./util_4.js";
var rze, vjm, _jm, bjm, EXa, yjm, Sjm, kjm, wjm, Cjm;
export { Cjm, EXa, Sjm, _jm, bjm, kjm, rze, vjm, wjm, yjm };
var __wakaru_zV1_initialized = false;
export function zV1() {
if (__wakaru_zV1_initialized) return;
__wakaru_zV1_initialized = true;
E(), uIn(), $0i(), zUm(), $V1(), tjm(), rze = E6("ZodMiniType", (t, e)=>{
    if (!t._zod) throw new Error("Uninitialized schema in ZodMiniType.");
    EPe.init(t, e), t.def = e, t.parse = (n, i)=>XUm(t, n, i, {
            callee: t.parse
        }), t.safeParse = (n, i)=>wXa(t, n, i), t.parseAsync = async (n, i)=>QUm(t, n, i, {
            callee: t.parseAsync
        }), t.safeParseAsync = async (n, i)=>CXa(t, n, i), t.check = (...n)=>t.clone({
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
        }), t.clone = (n, i)=>xV1(t, n, i), t.brand = ()=>t, t.register = ((n, i)=>(n.add(t, i), t));
}), vjm = E6("ZodMiniString", (t, e)=>{
    ajm.init(t, e), rze.init(t, e);
}), _jm = E6("ZodMiniNever", (t, e)=>{
    ljm.init(t, e), rze.init(t, e);
}), bjm = E6("ZodMiniArray", (t, e)=>{
    cjm.init(t, e), rze.init(t, e);
}), EXa = E6("ZodMiniObject", (t, e)=>{
    ujm.init(t, e), rze.init(t, e), HCt(t, "shape", ()=>e.shape);
}), yjm = E6("ZodMiniUnion", (t, e)=>{
    djm.init(t, e), rze.init(t, e);
}), Sjm = E6("ZodMiniRecord", (t, e)=>{
    hjm.init(t, e), rze.init(t, e);
}), kjm = E6("ZodMiniEnum", (t, e)=>{
    pjm.init(t, e), rze.init(t, e);
}), wjm = E6("ZodMiniLiteral", (t, e)=>{
    mjm.init(t, e), rze.init(t, e);
}), Cjm = E6("ZodMiniOptional", (t, e)=>{
    gjm.init(t, e), rze.init(t, e);
});

}
