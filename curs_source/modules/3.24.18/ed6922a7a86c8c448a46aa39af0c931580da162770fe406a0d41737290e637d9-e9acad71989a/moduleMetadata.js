import { Yce } from "./envelope.js";
import { YH } from "./integration.js";
import { PCc, _Vr, vVr } from "./metadata.js";
import { x } from "./tslib.es6.js";
import { Og } from "./worldwide.js";
function uAe(e, t) {
    const n = e[1];
    for (const i of n){
        const r = i[0].type;
        if (t(i, r)) return !0;
    }
    return !1;
}
function _rg(e) {
    if (Og._sentryModuleMetadata) for (const t of Object.keys(Og._sentryModuleMetadata)){
        const n = Og._sentryModuleMetadata[t];
        if (_Vr.has(t)) continue;
        _Vr.add(t);
        const i = e(t);
        for (const r of i.reverse())if (r.filename) {
            vVr.set(r.filename, n);
            break;
        }
    }
}
function brg(e, t) {
    return _rg(e), vVr.get(t);
}
function DCc(e, t) {
    t.exception?.values?.forEach((n)=>{
        n.stacktrace?.frames?.forEach((i)=>{
            if (!i.filename || i.module_metadata) return;
            const r = brg(e, i.filename);
            r && (i.module_metadata = r);
        });
    });
}
function MCc(e) {
    e.exception?.values?.forEach((t)=>{
        t.stacktrace?.frames?.forEach((n)=>{
            delete n.module_metadata;
        });
    });
}
var Ghi;
export { DCc, Ghi, MCc, _rg, brg, uAe };
var __wakaru_yrg_initialized = false;
export function yrg() {
if (__wakaru_yrg_initialized) return;
__wakaru_yrg_initialized = true;
"use strict";
x(), YH(), PCc(), Yce(), Ghi = ()=>({
        name: "ModuleMetadata",
        setup (e) {
            e.on("beforeEnvelope", (t)=>{
                uAe(t, (n, i)=>{
                    if (i === "event") {
                        const r = Array.isArray(n) ? n[1] : void 0;
                        r && (MCc(r), n[1] = r);
                    }
                });
            }), e.on("applyFrameMetadata", (t)=>{
                if (t.type) return;
                const n = e.getOptions().stackParser;
                DCc(n, t);
            });
        }
    });

}
