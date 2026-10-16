import { E } from "./tslib.es6.js";
import { Xph, aia, cia, dMr, hMr, iui, jbn, lia, mMr, pMr, rui } from "./types_5.js";
var uia, Zph, dia;
export { Zph, dia, uia };
var __wakaru_Lqy_initialized = false;
export function Lqy() {
if (__wakaru_Lqy_initialized) return;
__wakaru_Lqy_initialized = true;
E(), Xph(), uia = typeof self == "object" ? self : globalThis, Zph = (t, e)=>{
    const n = (r, s)=>(t.set(s, r), r), i = (r)=>{
        if (t.has(r)) return t.get(r);
        const [s, o] = e[r];
        switch(s){
            case iui:
            case aia:
                return n(o, r);
            case jbn:
                {
                    const a = n([], r);
                    for (const l of o)a.push(i(l));
                    return a;
                }
            case rui:
                {
                    const a = n({}, r);
                    for (const [l, c] of o)a[i(l)] = i(c);
                    return a;
                }
            case dMr:
                return n(new Date(o), r);
            case hMr:
                {
                    const { source: a, flags: l } = o;
                    return n(new RegExp(a, l), r);
                }
            case pMr:
                {
                    const a = n(new Map, r);
                    for (const [l, c] of o)a.set(i(l), i(c));
                    return a;
                }
            case mMr:
                {
                    const a = n(new Set, r);
                    for (const l of o)a.add(i(l));
                    return a;
                }
            case lia:
                {
                    const { name: a, message: l } = o;
                    return n(new uia[a](l), r);
                }
            case cia:
                return n(BigInt(o), r);
            case "BigInt":
                return n(Object(BigInt(o)), r);
            case "ArrayBuffer":
                return n(new Uint8Array(o).buffer, o);
            case "DataView":
                {
                    const { buffer: a } = new Uint8Array(o);
                    return n(new DataView(a), o);
                }
        }
        return n(new uia[s](o), r);
    };
    return i;
}, dia = (t)=>Zph(new Map, t)(0);

}
