import { p1n } from "./api_3.js";
import { fMi } from "./checks.js";
import { AXe } from "./core_2.js";
import { ADe, Wpf, kEs } from "./f0s.js";
import { f6t } from "./index_141.js";
import { IEs, Q9l, X9l, d1n, gMi } from "./parse_3.js";
import { EGl } from "./parse_4.js";
import { g6t } from "./regexes.js";
import { _Mi, a6l, c6l, h1n, o6l } from "./schemas.js";
import { x } from "./tslib.es6.js";
import { cv } from "./util.js";
var oLi, xGl, IGl, AGl;
export { AGl, IGl, oLi, xGl };
var __wakaru_aLi_initialized = false;
export function aLi() {
if (__wakaru_aLi_initialized) return;
__wakaru_aLi_initialized = true;
x(), f6t(), cv(), EGl(), AXe(), _Mi(), d1n(), p1n(), g6t(), g6t(), fMi(), oLi = ADe("ZodMiniType", (e, t)=>{
    if (!e._zod) throw new Error("Uninitialized schema in ZodMiniType.");
    h1n.init(e, t), e.def = t, e.type = t.type, e.parse = (n, i)=>X9l(e, n, i, {
            callee: e.parse
        }), e.safeParse = (n, i)=>gMi(e, n, i), e.parseAsync = async (n, i)=>Q9l(e, n, i, {
            callee: e.parseAsync
        }), e.safeParseAsync = async (n, i)=>IEs(e, n, i), e.check = (...n)=>e.clone({
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
        }), e.with = e.check, e.clone = (n, i)=>Wpf(e, n, i), e.brand = ()=>e, e.register = ((n, i)=>(n.add(e, i), e)), e.apply = (n)=>n(e);
}), xGl = ADe("ZodMiniString", (e, t)=>{
    o6l.init(e, t), oLi.init(e, t);
}), IGl = ADe("ZodMiniObject", (e, t)=>{
    a6l.init(e, t), oLi.init(e, t), kEs(e, "shape", ()=>t.shape);
}), AGl = ADe("ZodMiniLiteral", (e, t)=>{
    c6l.init(e, t), oLi.init(e, t);
});

}
