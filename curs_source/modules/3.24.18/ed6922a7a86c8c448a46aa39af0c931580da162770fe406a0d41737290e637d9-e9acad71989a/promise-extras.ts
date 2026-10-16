import { $Pu, Qyt, UPu, Wpv, XUi, YUi, ZQe, gX, gpv, hMn, nKs, qpv, tKs } from "./De_3.js";
import { Xzs } from "./Subject.js";
import { HPu } from "./index_192.js";
import { x } from "./tslib.es6.js";
var WPu;
export { WPu };
var __wakaru_Xpv_initialized = false;
export function Xpv() {
if (__wakaru_Xpv_initialized) return;
__wakaru_Xpv_initialized = true;
"use strict";
x(), HPu(), WPu = class {
    constructor(e){
        this.opQueue = new Xzs, this.nextOperation = 1;
        const { max: t = 4 } = e ?? {};
        this.opResultStream = this.opQueue.pipe(YUi(t), qpv()), this.dispose = this.opResultStream.subscribe();
    }
    enqueue(e) {
        const t = this.nextOperation++, n = hMn(()=>gX(e()).pipe(ZQe((r)=>({
                    id: t,
                    result: r
                })), nKs((r)=>UPu({
                    id: t,
                    error: r
                })))), i = Qyt(this.opResultStream.pipe($Pu((r)=>r.id === t))).then((r)=>r.error ? Promise.reject(r.error) : Promise.resolve(r.result));
        return this.opQueue.next(n), i;
    }
    enqueueList(e, t) {
        return e.length === 0 ? Promise.resolve(new Map) : Qyt(gX(e).pipe(tKs((n)=>this.enqueue(()=>t(n)).then((i)=>({
                    key: n,
                    value: i
                }))), XUi((n, i)=>(n.set(i.key, i.value), n), new Map)));
    }
    close() {
        this.opQueue.complete();
        const e = gpv(this.opResultStream.pipe(Wpv(), ZQe(()=>{})));
        return this.dispose.unsubscribe(), e;
    }
};

}
