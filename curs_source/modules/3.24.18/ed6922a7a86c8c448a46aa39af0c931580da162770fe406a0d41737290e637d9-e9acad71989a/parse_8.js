import { KIn, QZe } from "./core_4.js";
import { bvu, fse, wBi } from "./errors_6.js";
import { Lve, rX } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv, kBi } from "./util_3.js";
var f8t, QIn, v8t, JIn, _8t, eAn, b8t, CBi, TBi, yvu, EBi, Svu, xBi, kvu, IBi, wvu, ABi, Cvu, RBi, Tvu, DBi, Evu, MBi, xvu;
export { ABi, CBi, Cvu, DBi, EBi, Evu, IBi, JIn, MBi, QIn, RBi, Svu, TBi, Tvu, _8t, b8t, eAn, f8t, kvu, v8t, wvu, xBi, xvu, yvu };
var __wakaru_Ivu_initialized = false;
export function Ivu() {
if (__wakaru_Ivu_initialized) return;
__wakaru_Ivu_initialized = true;
x(), KIn(), bvu(), Fv(), f8t = (e)=>(t, n, i, r)=>{
        const s = i ? Object.assign(i, {
            async: !1
        }) : {
            async: !1
        }, o = t._zod.run({
            value: n,
            issues: []
        }, s);
        if (o instanceof Promise) throw new QZe;
        if (o.issues.length) {
            const a = new (r?.Err ?? e)(o.issues.map((c)=>Lve(c, s, rX())));
            throw kBi(a, r?.callee), a;
        }
        return o.value;
    }, QIn = f8t(fse), v8t = (e)=>async (t, n, i, r)=>{
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
            const a = new (r?.Err ?? e)(o.issues.map((c)=>Lve(c, s, rX())));
            throw kBi(a, r?.callee), a;
        }
        return o.value;
    }, JIn = v8t(fse), _8t = (e)=>(t, n, i)=>{
        const r = i ? {
            ...i,
            async: !1
        } : {
            async: !1
        }, s = t._zod.run({
            value: n,
            issues: []
        }, r);
        if (s instanceof Promise) throw new QZe;
        return s.issues.length ? {
            success: !1,
            error: new (e ?? wBi)(s.issues.map((o)=>Lve(o, r, rX())))
        } : {
            success: !0,
            data: s.value
        };
    }, eAn = _8t(fse), b8t = (e)=>async (t, n, i)=>{
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
            error: new e(s.issues.map((o)=>Lve(o, r, rX())))
        } : {
            success: !0,
            data: s.value
        };
    }, CBi = b8t(fse), TBi = (e)=>(t, n, i)=>{
        const r = i ? Object.assign(i, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return f8t(e)(t, n, r);
    }, yvu = TBi(fse), EBi = (e)=>(t, n, i)=>f8t(e)(t, n, i), Svu = EBi(fse), xBi = (e)=>async (t, n, i)=>{
        const r = i ? Object.assign(i, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return v8t(e)(t, n, r);
    }, kvu = xBi(fse), IBi = (e)=>async (t, n, i)=>v8t(e)(t, n, i), wvu = IBi(fse), ABi = (e)=>(t, n, i)=>{
        const r = i ? Object.assign(i, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return _8t(e)(t, n, r);
    }, Cvu = ABi(fse), RBi = (e)=>(t, n, i)=>_8t(e)(t, n, i), Tvu = RBi(fse), DBi = (e)=>async (t, n, i)=>{
        const r = i ? Object.assign(i, {
            direction: "backward"
        }) : {
            direction: "backward"
        };
        return b8t(e)(t, n, r);
    }, Evu = DBi(fse), MBi = (e)=>async (t, n, i)=>b8t(e)(t, n, i), xvu = MBi(fse);

}
