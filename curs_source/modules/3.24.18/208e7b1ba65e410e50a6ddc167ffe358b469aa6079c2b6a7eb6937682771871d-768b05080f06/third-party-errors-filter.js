import { hs } from "./envelope.js";
import { ar } from "./integration.js";
import { jW } from "./metadata.js";
import { $W, KC, VW } from "./moduleMetadata.js";
import { Tc } from "./stacktrace.js";
import { h } from "./tslib.es6.js";
function wC(e) {
    const t = e.exception;
    if (t) {
        const n = [];
        try {
            return t.values.forEach((r)=>{
                r.stacktrace.frames && n.push(...r.stacktrace.frames);
            }), n;
        } catch  {
            return;
        }
    }
}
function o8e(e) {
    const t = wC(e);
    if (t) return t.filter((n)=>!!n.filename && (n.lineno ?? n.colno) != null).map((n)=>n.module_metadata ? Object.keys(n.module_metadata).filter((r)=>r.startsWith(kI)).map((r)=>r.slice(kI.length)) : []);
}
var c8e, kI;
export { c8e, kI, o8e, wC };
var __wakaru_l8e_initialized = false;
export function l8e() {
if (__wakaru_l8e_initialized) return;
__wakaru_l8e_initialized = true;
"use strict";
h(), ar(), jW(), hs(), Tc(), c8e = (e)=>({
        name: "ThirdPartyErrorsFilter",
        setup (t) {
            t.on("beforeEnvelope", (n)=>{
                KC(n, (r, s)=>{
                    if (s === "event") {
                        const i = Array.isArray(r) ? r[1] : void 0;
                        i && ($W(i), r[1] = i);
                    }
                });
            }), t.on("applyFrameMetadata", (n)=>{
                if (n.type) return;
                const r = t.getOptions().stackParser;
                VW(r, n);
            });
        },
        processEvent (t) {
            const n = o8e(t);
            if (n) {
                const r = e.behaviour === "drop-error-if-contains-third-party-frames" || e.behaviour === "apply-tag-if-contains-third-party-frames" ? "some" : "every";
                if (n[r]((i)=>!i.some((a)=>e.filterKeys.includes(a)))) {
                    if (e.behaviour === "drop-error-if-contains-third-party-frames" || e.behaviour === "drop-error-if-exclusively-contains-third-party-frames") return null;
                    t.tags = {
                        ...t.tags,
                        third_party_code: !0
                    };
                }
            }
            return t;
        }
    }), kI = "_sentryBundlerPluginAppKey:";

}
