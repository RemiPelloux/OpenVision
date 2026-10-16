"use strict";
require.d(exports, {
    MU: ()=>a,
    PH: ()=>s,
    TJ: ()=>c,
    cb: ()=>i,
    wj: ()=>l,
    xb: ()=>o
});
var n = require("./module-97357.js");
function o(e, t, r) {
    const { max: o = 4 } = r ?? {}, s = (0, n.from)(e).pipe((0, n.map)((e)=>(0, n.defer)(()=>(0, n.from)(t(e)).pipe((0, n.map)((t)=>({
                    k: e,
                    v: t
                }))))), (0, n.mergeAll)(o), (0, n.reduce)((e, t)=>(e.set(t.k, t.v), e), new Map));
    return (0, n.firstValueFrom)(s);
}
async function s(e, t, r) {
    const { max: o = 4 } = r ?? {}, s = (0, n.from)(e.map((e, t)=>t)).pipe((0, n.map)((r)=>(0, n.defer)(()=>(0, n.from)(t(e[r])).pipe((0, n.map)((e)=>({
                    idx: r,
                    v: e
                }))))), (0, n.mergeAll)(o), (0, n.reduce)((e, t)=>(e[t.idx] = t.v, e), []));
    return (0, n.firstValueFrom)(s);
}
function i(e) {
    return new Promise((t)=>{
        setTimeout(t, e);
    });
}
class a extends Error {
    constructor(e){
        super(e), this.name = "TimeoutError";
    }
}
function l(e, t, r) {
    return (0, n.firstValueFrom)((0, n.from)(e).pipe((0, n.timeout)({
        first: t,
        with: ()=>(0, n.throwError)(()=>new a(r ?? `Promise timed out after ${t}ms`))
    })));
}
class c {
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
                })))), o = (0, n.firstValueFrom)(this.opResultStream.pipe((0, n.filter)((e)=>e.id === t))).then((e)=>e.error ? Promise.reject(e.error) : Promise.resolve(e.result));
        return this.opQueue.next(r), o;
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
