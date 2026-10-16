import { $0i, j0i } from "./core_5.js";
import { BV1, H0i, KUm } from "./errors_9.js";
import { cIn, dIn } from "./gYa.js";
import { E } from "./tslib.es6.js";
import { uIn, yXa } from "./util_4.js";
var YUm, XUm, ZUm, QUm, JUm, wXa, ejm, CXa;
export { CXa, JUm, QUm, XUm, YUm, ZUm, ejm, wXa };
var __wakaru_tjm_initialized = false;
export function tjm() {
if (__wakaru_tjm_initialized) return;
__wakaru_tjm_initialized = true;
E(), $0i(), BV1(), uIn(), YUm = (t)=>(e, n, i, r)=>{
        const s = i ? Object.assign(i, {
            async: !1
        }) : {
            async: !1
        }, o = e._zod.run({
            value: n,
            issues: []
        }, s);
        if (o instanceof Promise) throw new j0i;
        if (o.issues.length) {
            const a = new (r?.Err ?? t)(o.issues.map((l)=>cIn(l, s, dIn())));
            throw yXa(a, r?.callee), a;
        }
        return o.value;
    }, XUm = YUm(H0i), ZUm = (t)=>async (e, n, i, r)=>{
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
            const a = new (r?.Err ?? t)(o.issues.map((l)=>cIn(l, s, dIn())));
            throw yXa(a, r?.callee), a;
        }
        return o.value;
    }, QUm = ZUm(H0i), JUm = (t)=>(e, n, i)=>{
        const r = i ? {
            ...i,
            async: !1
        } : {
            async: !1
        }, s = e._zod.run({
            value: n,
            issues: []
        }, r);
        if (s instanceof Promise) throw new j0i;
        return s.issues.length ? {
            success: !1,
            error: new (t ?? KUm)(s.issues.map((o)=>cIn(o, r, dIn())))
        } : {
            success: !0,
            data: s.value
        };
    }, wXa = JUm(H0i), ejm = (t)=>async (e, n, i)=>{
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
            error: new t(s.issues.map((o)=>cIn(o, r, dIn())))
        } : {
            success: !0,
            data: s.value
        };
    }, CXa = ejm(H0i);

}
