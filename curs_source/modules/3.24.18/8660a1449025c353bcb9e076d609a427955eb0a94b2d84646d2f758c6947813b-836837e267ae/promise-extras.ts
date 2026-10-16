import { kOa } from "./Subject.js";
import { lFp } from "./index_198.js";
import { E0t, FM1, I0t, IOa, aFp, dD1, gD1, gSi, mqr, oFp, pqr, tie, xOa } from "./ipa.js";
import { E } from "./tslib.es6.js";
var ROa, uFp;
export { ROa, uFp };
var __wakaru_bD1_initialized = false;
export function bD1() {
if (__wakaru_bD1_initialized) return;
__wakaru_bD1_initialized = true;
"use strict";
E(), lFp(), ROa = class extends Error {
    constructor(t){
        super(t), this.name = "TimeoutError";
    }
}, uFp = class {
    constructor(t){
        this.opQueue = new kOa, this.nextOperation = 1;
        const { max: e = 4 } = t ?? {};
        this.opResultStream = this.opQueue.pipe(pqr(e), gD1()), this.dispose = this.opResultStream.subscribe();
    }
    enqueue(t) {
        const e = this.nextOperation++, n = gSi(()=>tie(t()).pipe(I0t((r)=>({
                    id: e,
                    result: r
                })), xOa((r)=>oFp({
                    id: e,
                    error: r
                })))), i = E0t(this.opResultStream.pipe(aFp((r)=>r.id === e))).then((r)=>r.error ? Promise.reject(r.error) : Promise.resolve(r.result));
        return this.opQueue.next(n), i;
    }
    enqueueList(t, e) {
        return t.length === 0 ? Promise.resolve(new Map) : E0t(tie(t).pipe(IOa((n)=>this.enqueue(()=>e(n)).then((i)=>({
                    key: n,
                    value: i
                }))), mqr((n, i)=>(n.set(i.key, i.value), n), new Map)));
    }
    close() {
        this.opQueue.complete();
        const t = FM1(this.opResultStream.pipe(dD1(), I0t(()=>{})));
        return this.dispose.unsubscribe(), t;
    }
};

}
