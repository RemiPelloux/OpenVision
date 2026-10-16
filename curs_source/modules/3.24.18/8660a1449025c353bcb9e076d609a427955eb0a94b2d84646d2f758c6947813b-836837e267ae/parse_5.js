import { jFe, pjt } from "./core_3.js";
import { Fpi, Hfa, J5r } from "./errors_6.js";
import { gjt, hjt } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { jfa, yb } from "./util_2.js";
var Bpi, D8h, Upi, N8h, jpi, eFr, $pi, Wfa, L8h, O8h, F8h, B8h, U8h, j8h, $8h, H8h;
export { $8h, $pi, B8h, Bpi, D8h, F8h, H8h, L8h, N8h, O8h, U8h, Upi, Wfa, eFr, j8h, jpi };
var __wakaru_MSn_initialized = false;
export function MSn() {
if (__wakaru_MSn_initialized) return;
__wakaru_MSn_initialized = true;
E(), jFe(), J5r(), yb(), Bpi = (t)=>(e, n, i, r)=>{
        const s = i ? Object.assign(i, {
            async: !1
        }) : {
            async: !1
        }, o = e._zod.run({
            value: n,
            issues: []
        }, s);
        if (o instanceof Promise) throw new pjt;
        if (o.issues.length) {
            const a = new (r?.Err ?? t)(o.issues.map((l)=>gjt(l, s, hjt())));
            throw jfa(a, r?.callee), a;
        }
        return o.value;
    }, D8h = Bpi(Fpi), Upi = (t)=>async (e, n, i, r)=>{
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
            const a = new (r?.Err ?? t)(o.issues.map((l)=>gjt(l, s, hjt())));
            throw jfa(a, r?.callee), a;
        }
        return o.value;
    }, N8h = Upi(Fpi), jpi = (t)=>(e, n, i)=>{
        const r = i ? {
            ...i,
            async: !1
        } : {
            async: !1
        }, s = e._zod.run({
            value: n,
            issues: []
        }, r);
        if (s instanceof Promise) throw new pjt;
        return s.issues.length ? {
            success: !1,
            error: new (t ?? Hfa)(s.issues.map((o)=>gjt(o, r, hjt())))
        } : {
            success: !0,
            data: s.value
        };
    }, eFr = jpi(Fpi), $pi = (t)=>async (e, n, i)=>{
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
            error: new t(s.issues.map((o)=>gjt(o, r, hjt())))
        } : {
            success: !0,
            data: s.value
        };
    }, Wfa = $pi(Fpi), L8h = (t)=>(e, n, i)=>{
        const r = i ? Object.assign(i, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return Bpi(t)(e, n, r);
    }, O8h = (t)=>(e, n, i)=>Bpi(t)(e, n, i), F8h = (t)=>async (e, n, i)=>{
        const r = i ? Object.assign(i, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return Upi(t)(e, n, r);
    }, B8h = (t)=>async (e, n, i)=>Upi(t)(e, n, i), U8h = (t)=>(e, n, i)=>{
        const r = i ? Object.assign(i, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return jpi(t)(e, n, r);
    }, j8h = (t)=>(e, n, i)=>jpi(t)(e, n, i), $8h = (t)=>async (e, n, i)=>{
        const r = i ? Object.assign(i, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return $pi(t)(e, n, r);
    }, H8h = (t)=>async (e, n, i)=>$pi(t)(e, n, i);

}
