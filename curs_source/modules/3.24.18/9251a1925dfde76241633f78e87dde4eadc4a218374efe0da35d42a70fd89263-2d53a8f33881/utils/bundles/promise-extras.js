import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { require_cjs } from "../../node_modules/.pnpm/rxjs@8.0.0-alpha.14/node_modules/rxjs/dist/cjs/index.js";
var import_rxjs, TimeoutError, PromiseQueue;
export { PromiseQueue, TimeoutError, import_rxjs };
var __wakaru_init_promise_extras_initialized = false;
export function init_promise_extras() {
if (__wakaru_init_promise_extras_initialized) return;
__wakaru_init_promise_extras_initialized = true;
"use strict";
import_rxjs = __toESM(require_cjs(), 1);
TimeoutError = class extends Error {
    constructor(message){
        super(message);
        this.name = "TimeoutError";
    }
};
PromiseQueue = class {
    constructor(options2){
        this.opQueue = new import_rxjs.Subject();
        this.nextOperation = 1;
        const { max = 4 } = options2 ?? {};
        this.opResultStream = this.opQueue.pipe((0, import_rxjs.mergeAll)(max), (0, import_rxjs.share)());
        this.dispose = this.opResultStream.subscribe();
    }
    enqueue(block) {
        const id = this.nextOperation++;
        const op = (0, import_rxjs.defer)(()=>(0, import_rxjs.from)(block()).pipe((0, import_rxjs.map)((v2)=>({
                    id,
                    result: v2
                })), (0, import_rxjs.catchError)((e)=>(0, import_rxjs.of)({
                    id,
                    error: e
                }))));
        const ret = (0, import_rxjs.firstValueFrom)(this.opResultStream.pipe((0, import_rxjs.filter)((op2)=>op2.id === id))).then((e)=>{
            if (e.error) {
                return Promise.reject(e.error);
            } else {
                return Promise.resolve(e.result);
            }
        });
        this.opQueue.next(op);
        return ret;
    }
    enqueueList(list2, block) {
        if (list2.length === 0) {
            return Promise.resolve(new Map());
        }
        return (0, import_rxjs.firstValueFrom)((0, import_rxjs.from)(list2).pipe((0, import_rxjs.mergeMap)((x)=>this.enqueue(()=>block(x)).then((v2)=>({
                    key: x,
                    value: v2
                }))), (0, import_rxjs.reduce)((acc, kvp)=>{
            acc.set(kvp.key, kvp.value);
            return acc;
        }, new Map())));
    }
    close() {
        this.opQueue.complete();
        const ret = (0, import_rxjs.lastValueFrom)(this.opResultStream.pipe((0, import_rxjs.materialize)(), (0, import_rxjs.map)(()=>void 0)));
        this.dispose.unsubscribe();
        return ret;
    }
};

}
