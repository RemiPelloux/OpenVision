import { E } from "./tslib.es6.js";
var zFe, ZWe, Wba, l1n, f6r, CVh, TVh, Gba, EVh, IVh;
export { CVh, EVh, Gba, IVh, TVh, Wba, ZWe, f6r, l1n, zFe };
var __wakaru__3S_initialized = false;
export function _3S() {
if (__wakaru__3S_initialized) return;
__wakaru__3S_initialized = true;
"use strict";
E(), zFe = "speed", ZWe = "fast", Wba = "default", l1n = "fast", f6r = (t)=>t === zFe || t === ZWe, CVh = (t)=>t.id === zFe ? t.value === l1n : t.id === ZWe && (t.value === "true" || t.value === l1n), TVh = (t)=>t.id === zFe ? t.value === Wba || t.value === l1n : t.id === ZWe && (t.value === "true" || t.value === "false" || t.value === l1n), Gba = (t)=>{
    const e = new Set;
    for (const i of t.variants)for (const r of i.parameterValues)e.add(r.id);
    if (e.has(ZWe)) return ZWe;
    if (e.has(zFe)) return zFe;
    const n = new Set(t.parameterDefinitions.map((i)=>i.id));
    if (n.has(ZWe)) return ZWe;
    if (n.has(zFe)) return zFe;
}, EVh = (t)=>{
    const e = new Set;
    for (const n of t.variants)for (const i of n.parameterValues)f6r(i.id) && e.add(i.id);
    return e;
}, IVh = (t, e)=>{
    const n = Gba(t), i = e.find((a)=>a.id === ZWe), r = e.find((a)=>a.id === zFe), s = i ?? r;
    if (n === void 0 || s === void 0) return e.map((a)=>({
            id: a.id,
            value: a.value
        }));
    const o = CVh(s);
    return [
        ...e.filter((a)=>!f6r(a.id)).map((a)=>({
                id: a.id,
                value: a.value
            })),
        n === zFe ? {
            id: zFe,
            value: o ? l1n : Wba
        } : {
            id: ZWe,
            value: o ? "true" : "false"
        }
    ];
};

}
