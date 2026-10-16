import { E } from "./tslib.es6.js";
var j4e, Dze, Erl, Oxn, srs, tig, nig, Irl, iig, rig;
export { Dze, Erl, Irl, Oxn, iig, j4e, nig, rig, srs, tig };
var __wakaru_epk_initialized = false;
export function epk() {
if (__wakaru_epk_initialized) return;
__wakaru_epk_initialized = true;
"use strict";
E(), j4e = "speed", Dze = "fast", Erl = "default", Oxn = "fast", srs = (t)=>t === j4e || t === Dze, tig = (t)=>t.id === j4e ? t.value === Oxn : t.id === Dze && (t.value === "true" || t.value === Oxn), nig = (t)=>t.id === j4e ? t.value === Erl || t.value === Oxn : t.id === Dze && (t.value === "true" || t.value === "false" || t.value === Oxn), Irl = (t)=>{
    const e = new Set;
    for (const i of t.variants)for (const r of i.parameterValues)e.add(r.id);
    if (e.has(Dze)) return Dze;
    if (e.has(j4e)) return j4e;
    const n = new Set(t.parameterDefinitions.map((i)=>i.id));
    if (n.has(Dze)) return Dze;
    if (n.has(j4e)) return j4e;
}, iig = (t)=>{
    const e = new Set;
    for (const n of t.variants)for (const i of n.parameterValues)srs(i.id) && e.add(i.id);
    return e;
}, rig = (t, e)=>{
    const n = Irl(t), i = e.find((a)=>a.id === Dze), r = e.find((a)=>a.id === j4e), s = i ?? r;
    if (n === void 0 || s === void 0) return e.map((a)=>({
            id: a.id,
            value: a.value
        }));
    const o = tig(s);
    return [
        ...e.filter((a)=>!srs(a.id)).map((a)=>({
                id: a.id,
                value: a.value
            })),
        n === j4e ? {
            id: j4e,
            value: o ? Oxn : Erl
        } : {
            id: Dze,
            value: o ? "true" : "false"
        }
    ];
};

}
