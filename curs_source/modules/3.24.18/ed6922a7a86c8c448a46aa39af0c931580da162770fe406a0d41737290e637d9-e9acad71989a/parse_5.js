import { GEn, WEn } from "./core_3.js";
import { $tu, WHf, jEn } from "./errors_5.js";
import { lUt, uUt } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { JLs, dUt } from "./util_2.js";
var Htu, Wtu, Gtu, Vtu, jtu, tNs, qtu, nNs;
export { Gtu, Htu, Vtu, Wtu, jtu, nNs, qtu, tNs };
var __wakaru_ztu_initialized = false;
export function ztu() {
if (__wakaru_ztu_initialized) return;
__wakaru_ztu_initialized = true;
x(), GEn(), WHf(), dUt(), Htu = (e)=>(t, n, i, r)=>{
        const s = i ? Object.assign(i, {
            async: !1
        }) : {
            async: !1
        }, o = t._zod.run({
            value: n,
            issues: []
        }, s);
        if (o instanceof Promise) throw new WEn;
        if (o.issues.length) {
            const a = new (r?.Err ?? e)(o.issues.map((c)=>uUt(c, s, lUt())));
            throw JLs(a, r?.callee), a;
        }
        return o.value;
    }, Wtu = Htu(jEn), Gtu = (e)=>async (t, n, i, r)=>{
        const s = i ? Object.assign(i, {
            async: !0
        }) : {
            async: !0
        };
        let o = t._zod.run({
            value: n,
            issues: []
        }, s);
        if (o instanceof Promise && (o = await o), o.issues.length) {
            const a = new (r?.Err ?? e)(o.issues.map((c)=>uUt(c, s, lUt())));
            throw JLs(a, r?.callee), a;
        }
        return o.value;
    }, Vtu = Gtu(jEn), jtu = (e)=>(t, n, i)=>{
        const r = i ? {
            ...i,
            async: !1
        } : {
            async: !1
        }, s = t._zod.run({
            value: n,
            issues: []
        }, r);
        if (s instanceof Promise) throw new WEn;
        return s.issues.length ? {
            success: !1,
            error: new (e ?? $tu)(s.issues.map((o)=>uUt(o, r, lUt())))
        } : {
            success: !0,
            data: s.value
        };
    }, tNs = jtu(jEn), qtu = (e)=>async (t, n, i)=>{
        const r = i ? Object.assign(i, {
            async: !0
        }) : {
            async: !0
        };
        let s = t._zod.run({
            value: n,
            issues: []
        }, r);
        return s instanceof Promise && (s = await s), s.issues.length ? {
            success: !1,
            error: new e(s.issues.map((o)=>uUt(o, r, lUt())))
        } : {
            success: !0,
            data: s.value
        };
    }, nNs = qtu(jEn);

}
