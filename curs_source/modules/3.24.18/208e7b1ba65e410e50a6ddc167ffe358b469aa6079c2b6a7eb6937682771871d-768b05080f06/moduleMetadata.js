import { hs } from "./envelope.js";
import { ar } from "./integration.js";
import { gI, hI, jW } from "./metadata.js";
import { h } from "./tslib.es6.js";
import { Ot } from "./worldwide.js";
function KC(e, t) {
    const n = e[1];
    for (const r of n){
        const s = r[0].type;
        if (t(r, s)) return !0;
    }
    return !1;
}
function p6e(e) {
    if (Ot._sentryModuleMetadata) for (const t of Object.keys(Ot._sentryModuleMetadata)){
        const n = Ot._sentryModuleMetadata[t];
        if (gI.has(t)) continue;
        gI.add(t);
        const r = e(t);
        for (const s of r.reverse())if (s.filename) {
            hI.set(s.filename, n);
            break;
        }
    }
}
function h6e(e, t) {
    return p6e(e), hI.get(t);
}
function VW(e, t) {
    t.exception?.values?.forEach((n)=>{
        n.stacktrace?.frames?.forEach((r)=>{
            if (!r.filename || r.module_metadata) return;
            const s = h6e(e, r.filename);
            s && (r.module_metadata = s);
        });
    });
}
function $W(e) {
    e.exception?.values?.forEach((t)=>{
        t.stacktrace?.frames?.forEach((n)=>{
            delete n.module_metadata;
        });
    });
}
var g6e;
export { $W, KC, VW, g6e, h6e, p6e };
var __wakaru_f6e_initialized = false;
export function f6e() {
if (__wakaru_f6e_initialized) return;
__wakaru_f6e_initialized = true;
"use strict";
h(), ar(), jW(), hs(), g6e = ()=>({
        name: "ModuleMetadata",
        setup (e) {
            e.on("beforeEnvelope", (t)=>{
                KC(t, (n, r)=>{
                    if (r === "event") {
                        const s = Array.isArray(n) ? n[1] : void 0;
                        s && ($W(s), n[1] = s);
                    }
                });
            }), e.on("applyFrameMetadata", (t)=>{
                if (t.type) return;
                const n = e.getOptions().stackParser;
                VW(n, t);
            });
        }
    });

}
