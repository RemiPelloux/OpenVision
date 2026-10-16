import { x } from "./tslib.es6.js";
var e0e, PDe, AIs, B6t, mPi, u$l, d$l, RIs, h$l, p$l;
export { AIs, B6t, PDe, RIs, d$l, e0e, h$l, mPi, p$l, u$l };
var __wakaru_yCf_initialized = false;
export function yCf() {
if (__wakaru_yCf_initialized) return;
__wakaru_yCf_initialized = true;
"use strict";
x(), e0e = "speed", PDe = "fast", AIs = "default", B6t = "fast", mPi = (e)=>e === e0e || e === PDe, u$l = (e)=>e.id === e0e ? e.value === B6t : e.id === PDe && (e.value === "true" || e.value === B6t), d$l = (e)=>e.id === e0e ? e.value === AIs || e.value === B6t : e.id === PDe && (e.value === "true" || e.value === "false" || e.value === B6t), RIs = (e)=>{
    const t = new Set;
    for (const i of e.variants)for (const r of i.parameterValues)t.add(r.id);
    if (t.has(PDe)) return PDe;
    if (t.has(e0e)) return e0e;
    const n = new Set(e.parameterDefinitions.map((i)=>i.id));
    if (n.has(PDe)) return PDe;
    if (n.has(e0e)) return e0e;
}, h$l = (e)=>{
    const t = new Set;
    for (const n of e.variants)for (const i of n.parameterValues)mPi(i.id) && t.add(i.id);
    return t;
}, p$l = (e, t)=>{
    const n = RIs(e), i = t.find((a)=>a.id === PDe), r = t.find((a)=>a.id === e0e), s = i ?? r;
    if (n === void 0 || s === void 0) return t.map((a)=>({
            id: a.id,
            value: a.value
        }));
    const o = u$l(s);
    return [
        ...t.filter((a)=>!mPi(a.id)).map((a)=>({
                id: a.id,
                value: a.value
            })),
        n === e0e ? {
            id: e0e,
            value: o ? B6t : AIs
        } : {
            id: PDe,
            value: o ? "true" : "false"
        }
    ];
};

}
