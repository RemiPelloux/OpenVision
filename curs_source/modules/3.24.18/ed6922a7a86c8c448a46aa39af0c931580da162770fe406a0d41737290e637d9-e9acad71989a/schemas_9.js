import { To, Yue, vC } from "./f0s.js";
import { NU } from "./index_190.js";
import { O4h } from "./parse_11.js";
import { CBi, JIn, QIn, eAn } from "./parse_8.js";
import { JBi, QBi, VBi, Vbt, WBi, XBi, YBi, ZBi, e5i, i5i, iAn, jBi, oAn, qBi, rAn, t5i, wS, zBi } from "./schemas_5.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var Bq, U4h, uPo, $4h, H4h, W4h, G4h, dPo, V4h, j4h, q4h, z4h, K4h, Y4h, X4h, Z4h, Q4h, J4h;
export { $4h, Bq, G4h, H4h, J4h, K4h, Q4h, U4h, V4h, W4h, X4h, Y4h, Z4h, dPo, j4h, q4h, uPo, z4h };
var __wakaru_hPo_initialized = false;
export function hPo() {
if (__wakaru_hPo_initialized) return;
__wakaru_hPo_initialized = true;
x(), NU(), Fv(), O4h(), Bq = To("ZodMiniType", (e, t)=>{
    if (!e._zod) throw new Error("Uninitialized schema in ZodMiniType.");
    wS.init(e, t), e.def = t, e.type = t.type, e.parse = (n, i)=>QIn(e, n, i, {
            callee: e.parse
        }), e.safeParse = (n, i)=>eAn(e, n, i), e.parseAsync = async (n, i)=>JIn(e, n, i, {
            callee: e.parseAsync
        }), e.safeParseAsync = async (n, i)=>CBi(e, n, i), e.check = (...n)=>e.clone({
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
        }, {
            parent: !0
        }), e.with = e.check, e.clone = (n, i)=>Yue(e, n, i), e.brand = ()=>e, e.register = ((n, i)=>(n.add(e, i), e)), e.apply = (n)=>n(e);
}), U4h = To("ZodMiniString", (e, t)=>{
    Vbt.init(e, t), Bq.init(e, t);
}), uPo = To("ZodMiniNumber", (e, t)=>{
    iAn.init(e, t), Bq.init(e, t);
}), $4h = To("ZodMiniNumberFormat", (e, t)=>{
    WBi.init(e, t), uPo.init(e, t);
}), H4h = To("ZodMiniBoolean", (e, t)=>{
    rAn.init(e, t), Bq.init(e, t);
}), W4h = To("ZodMiniUnknown", (e, t)=>{
    VBi.init(e, t), Bq.init(e, t);
}), G4h = To("ZodMiniArray", (e, t)=>{
    jBi.init(e, t), Bq.init(e, t);
}), dPo = To("ZodMiniObject", (e, t)=>{
    qBi.init(e, t), Bq.init(e, t), vC(e, "shape", ()=>t.shape);
}), V4h = To("ZodMiniDiscriminatedUnion", (e, t)=>{
    zBi.init(e, t), Bq.init(e, t);
}), j4h = To("ZodMiniRecord", (e, t)=>{
    YBi.init(e, t), Bq.init(e, t);
}), q4h = To("ZodMiniEnum", (e, t)=>{
    XBi.init(e, t), Bq.init(e, t), e.options = Object.values(t.entries);
}), z4h = To("ZodMiniLiteral", (e, t)=>{
    ZBi.init(e, t), Bq.init(e, t);
}), K4h = To("ZodMiniTransform", (e, t)=>{
    QBi.init(e, t), Bq.init(e, t);
}), Y4h = To("ZodMiniOptional", (e, t)=>{
    oAn.init(e, t), Bq.init(e, t);
}), X4h = To("ZodMiniExactOptional", (e, t)=>{
    JBi.init(e, t), Bq.init(e, t);
}), Z4h = To("ZodMiniNullable", (e, t)=>{
    e5i.init(e, t), Bq.init(e, t);
}), Q4h = To("ZodMiniPipe", (e, t)=>{
    t5i.init(e, t), Bq.init(e, t);
}), J4h = To("ZodMiniCustom", (e, t)=>{
    i5i.init(e, t), Bq.init(e, t);
});

}
