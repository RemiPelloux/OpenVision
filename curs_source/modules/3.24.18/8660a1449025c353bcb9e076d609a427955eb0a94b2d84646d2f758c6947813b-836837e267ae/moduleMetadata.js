import { _ke } from "./envelope.js";
import { hQ } from "./integration.js";
import { equ, iwo, rwo } from "./metadata.js";
import { E } from "./tslib.es6.js";
import { o_ } from "./worldwide.js";
function Vje(t, e) {
    const n = t[1];
    for (const i of n){
        const r = i[0].type;
        if (e(i, r)) return !0;
    }
    return !1;
}
function rpy(t) {
    if (o_._sentryModuleMetadata) for (const e of Object.keys(o_._sentryModuleMetadata)){
        const n = o_._sentryModuleMetadata[e];
        if (rwo.has(e)) continue;
        rwo.add(e);
        const i = t(e);
        for (const r of i.reverse())if (r.filename) {
            iwo.set(r.filename, n);
            break;
        }
    }
}
function spy(t, e) {
    return rpy(t), iwo.get(e);
}
function QGu(t, e) {
    e.exception?.values?.forEach((n)=>{
        n.stacktrace?.frames?.forEach((i)=>{
            if (!i.filename || i.module_metadata) return;
            const r = spy(t, i.filename);
            r && (i.module_metadata = r);
        });
    });
}
function JGu(t) {
    t.exception?.values?.forEach((e)=>{
        e.stacktrace?.frames?.forEach((n)=>{
            delete n.module_metadata;
        });
    });
}
var Uhr;
export { JGu, QGu, Uhr, Vje, rpy, spy };
var __wakaru_opy_initialized = false;
export function opy() {
if (__wakaru_opy_initialized) return;
__wakaru_opy_initialized = true;
"use strict";
E(), hQ(), equ(), _ke(), Uhr = ()=>({
        name: "ModuleMetadata",
        setup (t) {
            t.on("beforeEnvelope", (e)=>{
                Vje(e, (n, i)=>{
                    if (i === "event") {
                        const r = Array.isArray(n) ? n[1] : void 0;
                        r && (JGu(r), n[1] = r);
                    }
                });
            }), t.on("applyFrameMetadata", (e)=>{
                if (e.type) return;
                const n = t.getOptions().stackParser;
                QGu(n, e);
            });
        }
    });

}
