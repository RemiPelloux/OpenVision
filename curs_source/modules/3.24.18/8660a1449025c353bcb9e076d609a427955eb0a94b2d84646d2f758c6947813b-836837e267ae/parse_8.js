import { dvi, hvi } from "./core_4.js";
import { Gt1, Qhp, mvi } from "./errors_8.js";
import { awn, lwn } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { cwn, pEa } from "./util_3.js";
var Jhp, epp, tpp, npp, ipp, gEa, rpp, fEa;
export { Jhp, epp, fEa, gEa, ipp, npp, rpp, tpp };
var __wakaru_spp_initialized = false;
export function spp() {
if (__wakaru_spp_initialized) return;
__wakaru_spp_initialized = true;
E(), hvi(), Gt1(), cwn(), Jhp = (t)=>(e, n, i, r)=>{
        const s = i ? Object.assign(i, {
            async: !1
        }) : {
            async: !1
        }, o = e._zod.run({
            value: n,
            issues: []
        }, s);
        if (o instanceof Promise) throw new dvi;
        if (o.issues.length) {
            const a = new (r?.Err ?? t)(o.issues.map((l)=>lwn(l, s, awn())));
            throw pEa(a, r?.callee), a;
        }
        return o.value;
    }, epp = Jhp(mvi), tpp = (t)=>async (e, n, i, r)=>{
        const s = i ? Object.assign(i, {
            async: !0
        }) : {
            async: !0
        };
        let o = e._zod.run({
            value: n,
            issues: []
        }, s);
        if (o instanceof Promise && (o = await o), o.issues.length) {
            const a = new (r?.Err ?? t)(o.issues.map((l)=>lwn(l, s, awn())));
            throw pEa(a, r?.callee), a;
        }
        return o.value;
    }, npp = tpp(mvi), ipp = (t)=>(e, n, i)=>{
        const r = i ? {
            ...i,
            async: !1
        } : {
            async: !1
        }, s = e._zod.run({
            value: n,
            issues: []
        }, r);
        if (s instanceof Promise) throw new dvi;
        return s.issues.length ? {
            success: !1,
            error: new (t ?? Qhp)(s.issues.map((o)=>lwn(o, r, awn())))
        } : {
            success: !0,
            data: s.value
        };
    }, gEa = ipp(mvi), rpp = (t)=>async (e, n, i)=>{
        const r = i ? Object.assign(i, {
            async: !0
        }) : {
            async: !0
        };
        let s = e._zod.run({
            value: n,
            issues: []
        }, r);
        return s instanceof Promise && (s = await s), s.issues.length ? {
            success: !1,
            error: new t(s.issues.map((o)=>lwn(o, r, awn())))
        } : {
            success: !0,
            data: s.value
        };
    }, fEa = rpp(mvi);

}
