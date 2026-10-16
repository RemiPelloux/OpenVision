import { X2n, Y2n } from "./core_5.js";
import { LLv, Z2n, nth } from "./errors_8.js";
import { x } from "./tslib.es6.js";
import { Igo, dGt } from "./util_4.js";
import { hGt, uGt } from "./xmo.js";
var ith, rth, sth, oth, ath, Dgo, cth, Mgo;
export { Dgo, Mgo, ath, cth, ith, oth, rth, sth };
var __wakaru_lth_initialized = false;
export function lth() {
if (__wakaru_lth_initialized) return;
__wakaru_lth_initialized = true;
x(), X2n(), LLv(), dGt(), ith = (e)=>(t, n, i, r)=>{
        const s = i ? Object.assign(i, {
            async: !1
        }) : {
            async: !1
        }, o = t._zod.run({
            value: n,
            issues: []
        }, s);
        if (o instanceof Promise) throw new Y2n;
        if (o.issues.length) {
            const a = new (r?.Err ?? e)(o.issues.map((c)=>uGt(c, s, hGt())));
            throw Igo(a, r?.callee), a;
        }
        return o.value;
    }, rth = ith(Z2n), sth = (e)=>async (t, n, i, r)=>{
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
            const a = new (r?.Err ?? e)(o.issues.map((c)=>uGt(c, s, hGt())));
            throw Igo(a, r?.callee), a;
        }
        return o.value;
    }, oth = sth(Z2n), ath = (e)=>(t, n, i)=>{
        const r = i ? {
            ...i,
            async: !1
        } : {
            async: !1
        }, s = t._zod.run({
            value: n,
            issues: []
        }, r);
        if (s instanceof Promise) throw new Y2n;
        return s.issues.length ? {
            success: !1,
            error: new (e ?? nth)(s.issues.map((o)=>uGt(o, r, hGt())))
        } : {
            success: !0,
            data: s.value
        };
    }, Dgo = ath(Z2n), cth = (e)=>async (t, n, i)=>{
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
            error: new e(s.issues.map((o)=>uGt(o, r, hGt())))
        } : {
            success: !0,
            data: s.value
        };
    }, Mgo = cth(Z2n);

}
