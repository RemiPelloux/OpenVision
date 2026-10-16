import { x } from "./tslib.es6.js";
import { E5t, Gkn, Idl, JTi, Kgs, QTi, Vkn, Ygs, eEi, tEi, zgs } from "./types_5.js";
var Xgs, Adl, Zgs;
export { Adl, Xgs, Zgs };
var __wakaru_e3g_initialized = false;
export function e3g() {
if (__wakaru_e3g_initialized) return;
__wakaru_e3g_initialized = true;
x(), Idl(), Xgs = typeof self == "object" ? self : globalThis, Adl = (e, t)=>{
    const n = (r, s)=>(e.set(s, r), r), i = (r)=>{
        if (e.has(r)) return e.get(r);
        const [s, o] = t[r];
        switch(s){
            case Gkn:
            case zgs:
                return n(o, r);
            case E5t:
                {
                    const a = n([], r);
                    for (const c of o)a.push(i(c));
                    return a;
                }
            case Vkn:
                {
                    const a = n({}, r);
                    for (const [c, l] of o)a[i(c)] = i(l);
                    return a;
                }
            case QTi:
                return n(new Date(o), r);
            case JTi:
                {
                    const { source: a, flags: c } = o;
                    return n(new RegExp(a, c), r);
                }
            case eEi:
                {
                    const a = n(new Map, r);
                    for (const [c, l] of o)a.set(i(c), i(l));
                    return a;
                }
            case tEi:
                {
                    const a = n(new Set, r);
                    for (const c of o)a.add(i(c));
                    return a;
                }
            case Kgs:
                {
                    const { name: a, message: c } = o;
                    return n(new Xgs[a](c), r);
                }
            case Ygs:
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
        return n(new Xgs[s](o), r);
    };
    return i;
}, Zgs = (e)=>Adl(new Map, e)(0);

}
