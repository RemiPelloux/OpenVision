import { pkt } from "./api_4.js";
import { Wpi } from "./checks_3.js";
import { jFe } from "./core_3.js";
import { $Fe } from "./index_146.js";
import { ad, nN, nrt } from "./ipa.js";
import { D8h, MSn, N8h, Wfa, eFr } from "./parse_5.js";
import { ZXh } from "./parse_7.js";
import { hkt } from "./regexes_2.js";
import { DSn, Gpi, Qfa, _Uh, yB } from "./schemas_3.js";
import { E } from "./tslib.es6.js";
import { yb } from "./util_2.js";
var p4r, QXh, JXh, eZh;
export { JXh, QXh, eZh, p4r };
var __wakaru_m4r_initialized = false;
export function m4r() {
if (__wakaru_m4r_initialized) return;
__wakaru_m4r_initialized = true;
E(), $Fe(), yb(), ZXh(), jFe(), DSn(), MSn(), pkt(), hkt(), hkt(), Wpi(), p4r = ad("ZodMiniType", (t, e)=>{
    if (!t._zod) throw new Error("Uninitialized schema in ZodMiniType.");
    yB.init(t, e), t.def = e, t.type = e.type, t.parse = (n, i)=>D8h(t, n, i, {
            callee: t.parse
        }), t.safeParse = (n, i)=>eFr(t, n, i), t.parseAsync = async (n, i)=>N8h(t, n, i, {
            callee: t.parseAsync
        }), t.safeParseAsync = async (n, i)=>Wfa(t, n, i), t.check = (...n)=>t.clone({
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
        }, {
            parent: !0
        }), t.with = t.check, t.clone = (n, i)=>nrt(t, n, i), t.brand = ()=>t, t.register = ((n, i)=>(n.add(t, i), t)), t.apply = (n)=>n(t);
}), QXh = ad("ZodMiniString", (t, e)=>{
    Gpi.init(t, e), p4r.init(t, e);
}), JXh = ad("ZodMiniObject", (t, e)=>{
    Qfa.init(t, e), p4r.init(t, e), nN(t, "shape", ()=>e.shape);
}), eZh = ad("ZodMiniLiteral", (t, e)=>{
    _Uh.init(t, e), p4r.init(t, e);
});

}
