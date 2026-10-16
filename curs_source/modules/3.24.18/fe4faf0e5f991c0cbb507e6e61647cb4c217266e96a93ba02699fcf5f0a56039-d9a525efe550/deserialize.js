import { i } from "./plugin-brand-icon.js";
import { KIt, VIt, ZIt, dNe, dir, fNe, gfe, hfe, mNe, pNe, tJ } from "./types.js";
var XIt, pir, YIt;
export { XIt, YIt, pir };
var __wakaru_Vki_initialized = false;
export function Vki() {
if (__wakaru_Vki_initialized) return;
__wakaru_Vki_initialized = true;
dir(), XIt = typeof self == "object" ? self : globalThis, pir = i((r, e)=>{
    const a = i((l, u)=>(r.set(u, l), l), "as"), s = i((l)=>{
        if (r.has(l)) return r.get(l);
        const [u, p] = e[l];
        switch(u){
            case hfe:
            case ZIt:
                return a(p, l);
            case tJ:
                {
                    const m = a([], l);
                    for (const b of p)m.push(s(b));
                    return m;
                }
            case gfe:
                {
                    const m = a({}, l);
                    for (const [b, g] of p)m[s(b)] = s(g);
                    return m;
                }
            case dNe:
                return a(new Date(p), l);
            case pNe:
                {
                    const { source: m, flags: b } = p;
                    return a(new RegExp(m, b), l);
                }
            case mNe:
                {
                    const m = a(new Map, l);
                    for (const [b, g] of p)m.set(s(b), s(g));
                    return m;
                }
            case fNe:
                {
                    const m = a(new Set, l);
                    for (const b of p)m.add(s(b));
                    return m;
                }
            case VIt:
                {
                    const { name: m, message: b } = p;
                    return a(new XIt[m](b), l);
                }
            case KIt:
                return a(BigInt(p), l);
            case "BigInt":
                return a(Object(BigInt(p)), l);
            case "ArrayBuffer":
                return a(new Uint8Array(p).buffer, p);
            case "DataView":
                {
                    const { buffer: m } = new Uint8Array(p);
                    return a(new DataView(m), p);
                }
        }
        return a(new XIt[u](p), l);
    }, "unpair");
    return s;
}, "deserializer"), YIt = i((r)=>pir(new Map, r)(0), "deserialize");

}
