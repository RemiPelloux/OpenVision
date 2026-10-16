import { Fke, Pa, cE } from "./SZu.js";
import { Qq } from "./index_15.js";
import { _fr, fQn, gQn, mQn } from "./parse.js";
import { Xnf } from "./parse_12.js";
import { $fr, Bfr, Gfr, Hfr, Kfr, Ofr, Qfr, Qw, SQn, Ufr, Vfr, Xfr, Yfr, bQn, bhn, jfr, q6t, qfr, yQn, zfr } from "./schemas.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var HX, Jnf, TTl, eif, tif, nif, iif, rif, Zgs, sif, oif, aif, lif, cif, uif, dif, hif, pif, mif, gif;
export { HX, Jnf, TTl, Zgs, aif, cif, dif, eif, gif, hif, iif, lif, mif, nif, oif, pif, rif, sif, tif, uif };
var __wakaru_ETl_initialized = false;
export function ETl() {
if (__wakaru_ETl_initialized) return;
__wakaru_ETl_initialized = true;
E(), Qq(), ky(), Xnf(), HX = Pa("ZodMiniType", (t, e)=>{
    if (!t._zod) throw new Error("Uninitialized schema in ZodMiniType.");
    Qw.init(t, e), t.def = e, t.type = e.type, t.parse = (n, i)=>mQn(t, n, i, {
            callee: t.parse
        }), t.safeParse = (n, i)=>fQn(t, n, i), t.parseAsync = async (n, i)=>gQn(t, n, i, {
            callee: t.parseAsync
        }), t.safeParseAsync = async (n, i)=>_fr(t, n, i), t.check = (...n)=>t.clone({
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
        }), t.with = t.check, t.clone = (n, i)=>Fke(t, n, i), t.brand = ()=>t, t.register = ((n, i)=>(n.add(t, i), t)), t.apply = (n)=>n(t);
}), Jnf = Pa("ZodMiniString", (t, e)=>{
    q6t.init(t, e), HX.init(t, e);
}), TTl = Pa("ZodMiniNumber", (t, e)=>{
    bQn.init(t, e), HX.init(t, e);
}), eif = Pa("ZodMiniNumberFormat", (t, e)=>{
    Ofr.init(t, e), TTl.init(t, e);
}), tif = Pa("ZodMiniBoolean", (t, e)=>{
    yQn.init(t, e), HX.init(t, e);
}), nif = Pa("ZodMiniUnknown", (t, e)=>{
    Bfr.init(t, e), HX.init(t, e);
}), iif = Pa("ZodMiniNever", (t, e)=>{
    Ufr.init(t, e), HX.init(t, e);
}), rif = Pa("ZodMiniArray", (t, e)=>{
    jfr.init(t, e), HX.init(t, e);
}), Zgs = Pa("ZodMiniObject", (t, e)=>{
    $fr.init(t, e), HX.init(t, e), cE(t, "shape", ()=>e.shape);
}), sif = Pa("ZodMiniUnion", (t, e)=>{
    bhn.init(t, e), HX.init(t, e);
}), oif = Pa("ZodMiniDiscriminatedUnion", (t, e)=>{
    Hfr.init(t, e), HX.init(t, e);
}), aif = Pa("ZodMiniRecord", (t, e)=>{
    Gfr.init(t, e), HX.init(t, e);
}), lif = Pa("ZodMiniEnum", (t, e)=>{
    qfr.init(t, e), HX.init(t, e), t.options = Object.values(e.entries);
}), cif = Pa("ZodMiniLiteral", (t, e)=>{
    zfr.init(t, e), HX.init(t, e);
}), uif = Pa("ZodMiniTransform", (t, e)=>{
    Vfr.init(t, e), HX.init(t, e);
}), dif = Pa("ZodMiniOptional", (t, e)=>{
    SQn.init(t, e), HX.init(t, e);
}), hif = Pa("ZodMiniExactOptional", (t, e)=>{
    Kfr.init(t, e), HX.init(t, e);
}), pif = Pa("ZodMiniNullable", (t, e)=>{
    Yfr.init(t, e), HX.init(t, e);
}), mif = Pa("ZodMiniPipe", (t, e)=>{
    Xfr.init(t, e), HX.init(t, e);
}), gif = Pa("ZodMiniCustom", (t, e)=>{
    Qfr.init(t, e), HX.init(t, e);
});

}
