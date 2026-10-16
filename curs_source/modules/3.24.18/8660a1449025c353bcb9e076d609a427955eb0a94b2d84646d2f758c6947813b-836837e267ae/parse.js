import { Fse, pAe } from "./SZu.js";
import { __t, uQn } from "./core.js";
import { Eve, hrd, vfr } from "./errors_3.js";
import { E } from "./tslib.es6.js";
import { ffr, ky } from "./util.js";
var mhn, mQn, ghn, gQn, fhn, fQn, vhn, _fr, bfr, prd, yfr, mrd, Sfr, grd, kfr, frd, wfr, vrd, Cfr, _rd, Tfr, brd, Efr, yrd;
export { Cfr, Efr, Sfr, Tfr, _fr, _rd, bfr, brd, fQn, fhn, frd, gQn, ghn, grd, kfr, mQn, mhn, mrd, prd, vhn, vrd, wfr, yfr, yrd };
var __wakaru_Srd_initialized = false;
export function Srd() {
if (__wakaru_Srd_initialized) return;
__wakaru_Srd_initialized = true;
E(), uQn(), hrd(), ky(), mhn = (t)=>(e, n, i, r)=>{
        const s = i ? Object.assign(i, {
            async: !1
        }) : {
            async: !1
        }, o = e._zod.run({
            value: n,
            issues: []
        }, s);
        if (o instanceof Promise) throw new __t;
        if (o.issues.length) {
            const a = new (r?.Err ?? t)(o.issues.map((l)=>pAe(l, s, Fse())));
            throw ffr(a, r?.callee), a;
        }
        return o.value;
    }, mQn = mhn(Eve), ghn = (t)=>async (e, n, i, r)=>{
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
            const a = new (r?.Err ?? t)(o.issues.map((l)=>pAe(l, s, Fse())));
            throw ffr(a, r?.callee), a;
        }
        return o.value;
    }, gQn = ghn(Eve), fhn = (t)=>(e, n, i)=>{
        const r = i ? {
            ...i,
            async: !1
        } : {
            async: !1
        }, s = e._zod.run({
            value: n,
            issues: []
        }, r);
        if (s instanceof Promise) throw new __t;
        return s.issues.length ? {
            success: !1,
            error: new (t ?? vfr)(s.issues.map((o)=>pAe(o, r, Fse())))
        } : {
            success: !0,
            data: s.value
        };
    }, fQn = fhn(Eve), vhn = (t)=>async (e, n, i)=>{
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
            error: new t(s.issues.map((o)=>pAe(o, r, Fse())))
        } : {
            success: !0,
            data: s.value
        };
    }, _fr = vhn(Eve), bfr = (t)=>(e, n, i)=>{
        const r = i ? Object.assign(i, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return mhn(t)(e, n, r);
    }, prd = bfr(Eve), yfr = (t)=>(e, n, i)=>mhn(t)(e, n, i), mrd = yfr(Eve), Sfr = (t)=>async (e, n, i)=>{
        const r = i ? Object.assign(i, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return ghn(t)(e, n, r);
    }, grd = Sfr(Eve), kfr = (t)=>async (e, n, i)=>ghn(t)(e, n, i), frd = kfr(Eve), wfr = (t)=>(e, n, i)=>{
        const r = i ? Object.assign(i, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return fhn(t)(e, n, r);
    }, vrd = wfr(Eve), Cfr = (t)=>(e, n, i)=>fhn(t)(e, n, i), _rd = Cfr(Eve), Tfr = (t)=>async (e, n, i)=>{
        const r = i ? Object.assign(i, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return vhn(t)(e, n, r);
    }, brd = Tfr(Eve), Efr = (t)=>async (e, n, i)=>vhn(t)(e, n, i), yrd = Efr(Eve);

}
