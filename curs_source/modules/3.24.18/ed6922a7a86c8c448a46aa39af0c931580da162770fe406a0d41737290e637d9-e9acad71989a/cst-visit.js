import { mBt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var nCi, zZc, Kcs;
export { Kcs, nCi, zZc };
var __wakaru_Txg_initialized = false;
export function Txg() {
if (__wakaru_Txg_initialized) return;
__wakaru_Txg_initialized = true;
x(), nCi = Symbol("break visit"), zZc = Symbol("skip children"), Kcs = Symbol("remove item"), mBt.BREAK = nCi, mBt.SKIP = zZc, mBt.REMOVE = Kcs, mBt.itemAtPath = (e, t)=>{
    let n = e;
    for (const [i, r] of t){
        const s = n?.[i];
        if (s && "items" in s) n = s.items[r];
        else return;
    }
    return n;
}, mBt.parentCollection = (e, t)=>{
    const n = mBt.itemAtPath(e, t.slice(0, -1)), i = t[t.length - 1][0], r = n?.[i];
    if (r && "items" in r) return r;
    throw new Error("Parent collection not found");
};

}
