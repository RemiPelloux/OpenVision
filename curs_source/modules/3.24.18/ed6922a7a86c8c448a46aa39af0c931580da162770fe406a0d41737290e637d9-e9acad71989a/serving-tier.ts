import { x } from "./tslib.es6.js";
var W1e, nLe, Ako, UVt, OXi, Avh, Rvh, Rko, Dvh, Mvh;
export { Ako, Avh, Dvh, Mvh, OXi, Rko, Rvh, UVt, W1e, nLe };
var __wakaru_NVv_initialized = false;
export function NVv() {
if (__wakaru_NVv_initialized) return;
__wakaru_NVv_initialized = true;
"use strict";
x(), W1e = "speed", nLe = "fast", Ako = "default", UVt = "fast", OXi = (e)=>e === W1e || e === nLe, Avh = (e)=>e.id === W1e ? e.value === UVt : e.id === nLe && (e.value === "true" || e.value === UVt), Rvh = (e)=>e.id === W1e ? e.value === Ako || e.value === UVt : e.id === nLe && (e.value === "true" || e.value === "false" || e.value === UVt), Rko = (e)=>{
    const t = new Set;
    for (const i of e.variants)for (const r of i.parameterValues)t.add(r.id);
    if (t.has(nLe)) return nLe;
    if (t.has(W1e)) return W1e;
    const n = new Set(e.parameterDefinitions.map((i)=>i.id));
    if (n.has(nLe)) return nLe;
    if (n.has(W1e)) return W1e;
}, Dvh = (e)=>{
    const t = new Set;
    for (const n of e.variants)for (const i of n.parameterValues)OXi(i.id) && t.add(i.id);
    return t;
}, Mvh = (e, t)=>{
    const n = Rko(e), i = t.find((a)=>a.id === nLe), r = t.find((a)=>a.id === W1e), s = i ?? r;
    if (n === void 0 || s === void 0) return t.map((a)=>({
            id: a.id,
            value: a.value
        }));
    const o = Avh(s);
    return [
        ...t.filter((a)=>!OXi(a.id)).map((a)=>({
                id: a.id,
                value: a.value
            })),
        n === W1e ? {
            id: W1e,
            value: o ? UVt : Ako
        } : {
            id: nLe,
            value: o ? "true" : "false"
        }
    ];
};

}
