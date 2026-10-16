import { Yce } from "./envelope.js";
import { YH } from "./integration.js";
import { PCc } from "./metadata.js";
import { DCc, MCc, uAe } from "./moduleMetadata.js";
import { Xdi } from "./qIc.js";
import { ydt } from "./stacktrace.js";
import { x } from "./tslib.es6.js";
function nsg(e) {
    const t = Xdi(e);
    if (t) return t.filter((n)=>!!n.filename && (n.lineno ?? n.colno) != null).map((n)=>n.module_metadata ? Object.keys(n.module_metadata).filter((i)=>i.startsWith(CVr)).map((i)=>i.slice(CVr.length)) : []);
}
var Qhi, CVr;
export { CVr, Qhi, nsg };
var __wakaru_isg_initialized = false;
export function isg() {
if (__wakaru_isg_initialized) return;
__wakaru_isg_initialized = true;
"use strict";
x(), YH(), PCc(), Yce(), ydt(), Qhi = (e)=>({
        name: "ThirdPartyErrorsFilter",
        setup (t) {
            t.on("beforeEnvelope", (n)=>{
                uAe(n, (i, r)=>{
                    if (r === "event") {
                        const s = Array.isArray(i) ? i[1] : void 0;
                        s && (MCc(s), i[1] = s);
                    }
                });
            }), t.on("applyFrameMetadata", (n)=>{
                if (n.type) return;
                const i = t.getOptions().stackParser;
                DCc(i, n);
            });
        },
        processEvent (t) {
            const n = nsg(t);
            if (n) {
                const i = e.behaviour === "drop-error-if-contains-third-party-frames" || e.behaviour === "apply-tag-if-contains-third-party-frames" ? "some" : "every";
                if (n[i]((s)=>!s.some((o)=>e.filterKeys.includes(o)))) {
                    if (e.behaviour === "drop-error-if-contains-third-party-frames" || e.behaviour === "drop-error-if-exclusively-contains-third-party-frames") return null;
                    t.tags = {
                        ...t.tags,
                        third_party_code: !0
                    };
                }
            }
            return t;
        }
    }), CVr = "_sentryBundlerPluginAppKey:";

}
