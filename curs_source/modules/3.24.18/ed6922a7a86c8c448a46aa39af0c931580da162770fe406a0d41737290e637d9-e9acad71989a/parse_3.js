import { AXe, m6t } from "./core_2.js";
import { K9l, u1n, xEs } from "./errors_4.js";
import { dMi, mMi } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { TEs, cv } from "./util.js";
var Y9l, X9l, Z9l, Q9l, J9l, gMi, e6l, IEs;
export { IEs, J9l, Q9l, X9l, Y9l, Z9l, e6l, gMi };
var __wakaru_d1n_initialized = false;
export function d1n() {
if (__wakaru_d1n_initialized) return;
__wakaru_d1n_initialized = true;
x(), AXe(), xEs(), cv(), Y9l = (e)=>(t, n, i, r)=>{
        const s = i ? Object.assign(i, {
            async: !1
        }) : {
            async: !1
        }, o = t._zod.run({
            value: n,
            issues: []
        }, s);
        if (o instanceof Promise) throw new m6t;
        if (o.issues.length) {
            const a = new (r?.Err ?? e)(o.issues.map((c)=>mMi(c, s, dMi())));
            throw TEs(a, r?.callee), a;
        }
        return o.value;
    }, X9l = Y9l(u1n), Z9l = (e)=>async (t, n, i, r)=>{
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
            const a = new (r?.Err ?? e)(o.issues.map((c)=>mMi(c, s, dMi())));
            throw TEs(a, r?.callee), a;
        }
        return o.value;
    }, Q9l = Z9l(u1n), J9l = (e)=>(t, n, i)=>{
        const r = i ? {
            ...i,
            async: !1
        } : {
            async: !1
        }, s = t._zod.run({
            value: n,
            issues: []
        }, r);
        if (s instanceof Promise) throw new m6t;
        return s.issues.length ? {
            success: !1,
            error: new (e ?? K9l)(s.issues.map((o)=>mMi(o, r, dMi())))
        } : {
            success: !0,
            data: s.value
        };
    }, gMi = J9l(u1n), e6l = (e)=>async (t, n, i)=>{
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
            error: new e(s.issues.map((o)=>mMi(o, r, dMi())))
        } : {
            success: !0,
            data: s.value
        };
    }, IEs = e6l(u1n);

}
