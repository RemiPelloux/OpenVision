"use strict";
require.d(exports, {
    MU: ()=>l,
    O$: ()=>d,
    PH: ()=>o,
    TJ: ()=>p,
    cb: ()=>a,
    st: ()=>c,
    up: ()=>i,
    wj: ()=>u,
    xb: ()=>s
});
var n = require("./module-97357.js");
function s(e, t, r) {
    const { max: s = 4 } = r ?? {}, o = (0, n.from)(e).pipe((0, n.map)((e)=>(0, n.defer)(()=>(0, n.from)(t(e)).pipe((0, n.map)((t)=>({
                    k: e,
                    v: t
                }))))), (0, n.mergeAll)(s), (0, n.reduce)((e, t)=>(e.set(t.k, t.v), e), new Map));
    return (0, n.firstValueFrom)(o);
}
async function o(e, t, r) {
    const { max: s = 4 } = r ?? {}, o = (0, n.from)(e.map((e, t)=>t)).pipe((0, n.map)((r)=>(0, n.defer)(()=>(0, n.from)(t(e[r])).pipe((0, n.map)((e)=>({
                    idx: r,
                    v: e
                }))))), (0, n.mergeAll)(s), (0, n.reduce)((e, t)=>(e[t.idx] = t.v, e), []));
    return (0, n.firstValueFrom)(o);
}
function i(e, t, r) {
    const { max: s = 4 } = r ?? {}, o = (0, n.from)(e.map((e, t)=>t)).pipe((0, n.map)((r)=>(0, n.defer)(()=>(0, n.from)(t(e[r])).pipe((0, n.map)((e)=>({
                    idx: r,
                    result: {
                        status: "fulfilled",
                        value: e
                    }
                })), (0, n.catchError)((e)=>(0, n.of)({
                    idx: r,
                    result: {
                        status: "rejected",
                        reason: e
                    }
                }))))), (0, n.mergeAll)(s), (0, n.reduce)((e, t)=>(e[t.idx] = t.result, e), []));
    return (0, n.firstValueFrom)(o);
}
function a(e) {
    return new Promise((t)=>{
        setTimeout(t, e);
    });
}
function c(e, t) {
    return new Promise((r)=>{
        if (t.aborted) return void r();
        const n = ()=>{
            clearTimeout(s), r();
        }, s = setTimeout(()=>{
            t.removeEventListener("abort", n), r();
        }, e);
        t.addEventListener("abort", n, {
            once: !0
        });
    });
}
class l extends Error {
    constructor(e){
        super(e), this.name = "TimeoutError";
    }
}
function u(e, t, r) {
    return (0, n.firstValueFrom)((0, n.from)(e).pipe((0, n.timeout)({
        first: t,
        with: ()=>(0, n.throwError)(()=>new l(r ?? `Promise timed out after ${t}ms`))
    })));
}
function d(e, t = 3) {
    const r = (0, n.defer)(()=>(0, n.from)(e())).pipe((0, n.retry)(t));
    return (0, n.firstValueFrom)(r);
}
class p {
    constructor(e){
        this.opQueue = new n.Subject, this.nextOperation = 1;
        const { max: t = 4 } = e ?? {};
        this.opResultStream = this.opQueue.pipe((0, n.mergeAll)(t), (0, n.share)()), this.dispose = this.opResultStream.subscribe();
    }
    enqueue(e) {
        const t = this.nextOperation++, r = (0, n.defer)(()=>(0, n.from)(e()).pipe((0, n.map)((e)=>({
                    id: t,
                    result: e
                })), (0, n.catchError)((e)=>(0, n.of)({
                    id: t,
                    error: e
                })))), s = (0, n.firstValueFrom)(this.opResultStream.pipe((0, n.filter)((e)=>e.id === t))).then((e)=>e.error ? Promise.reject(e.error) : Promise.resolve(e.result));
        return this.opQueue.next(r), s;
    }
    enqueueList(e, t) {
        return 0 === e.length ? Promise.resolve(new Map) : (0, n.firstValueFrom)((0, n.from)(e).pipe((0, n.mergeMap)((e)=>this.enqueue(()=>t(e)).then((t)=>({
                    key: e,
                    value: t
                }))), (0, n.reduce)((e, t)=>(e.set(t.key, t.value), e), new Map)));
    }
    close() {
        this.opQueue.complete();
        const e = (0, n.lastValueFrom)(this.opResultStream.pipe((0, n.materialize)(), (0, n.map)(()=>{})));
        return this.dispose.unsubscribe(), e;
    }
}
