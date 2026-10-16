import { C_n } from "./LYd.js";
import { E } from "./tslib.es6.js";
var eAr, yeh, YYo;
export { YYo, eAr, yeh };
var __wakaru_q4y_initialized = false;
export function q4y() {
if (__wakaru_q4y_initialized) return;
__wakaru_q4y_initialized = true;
E(), eAr = Symbol("break visit"), yeh = Symbol("skip children"), YYo = Symbol("remove item"), C_n.BREAK = eAr, C_n.SKIP = yeh, C_n.REMOVE = YYo, C_n.itemAtPath = (t, e)=>{
    let n = t;
    for (const [i, r] of e){
        const s = n?.[i];
        if (s && "items" in s) n = s.items[r];
        else return;
    }
    return n;
}, C_n.parentCollection = (t, e)=>{
    const n = C_n.itemAtPath(t, e.slice(0, -1)), i = e[e.length - 1][0], r = n?.[i];
    if (r && "items" in r) return r;
    throw new Error("Parent collection not found");
};

}
