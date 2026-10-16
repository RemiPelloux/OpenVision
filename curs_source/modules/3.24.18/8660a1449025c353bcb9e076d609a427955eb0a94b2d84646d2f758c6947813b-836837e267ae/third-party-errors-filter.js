import { zdr } from "./SZu.js";
import { _ke } from "./envelope.js";
import { hQ } from "./integration.js";
import { equ } from "./metadata.js";
import { JGu, QGu, Vje } from "./moduleMetadata.js";
import { fFt } from "./stacktrace.js";
import { E } from "./tslib.es6.js";
function Hpy(t) {
    const e = zdr(t);
    if (e) return e.filter((n)=>!!n.filename && (n.lineno ?? n.colno) != null).map((n)=>n.module_metadata ? Object.keys(n.module_metadata).filter((i)=>i.startsWith(uwo)).map((i)=>i.slice(uwo.length)) : []);
}
var Khr, uwo;
export { Hpy, Khr, uwo };
var __wakaru_Wpy_initialized = false;
export function Wpy() {
if (__wakaru_Wpy_initialized) return;
__wakaru_Wpy_initialized = true;
"use strict";
E(), hQ(), equ(), _ke(), fFt(), Khr = (t)=>({
        name: "ThirdPartyErrorsFilter",
        setup (e) {
            e.on("beforeEnvelope", (n)=>{
                Vje(n, (i, r)=>{
                    if (r === "event") {
                        const s = Array.isArray(i) ? i[1] : void 0;
                        s && (JGu(s), i[1] = s);
                    }
                });
            }), e.on("applyFrameMetadata", (n)=>{
                if (n.type) return;
                const i = e.getOptions().stackParser;
                QGu(i, n);
            });
        },
        processEvent (e) {
            const n = Hpy(e);
            if (n) {
                const i = t.behaviour === "drop-error-if-contains-third-party-frames" || t.behaviour === "apply-tag-if-contains-third-party-frames" ? "some" : "every";
                if (n[i]((s)=>!s.some((o)=>t.filterKeys.includes(o)))) {
                    if (t.behaviour === "drop-error-if-contains-third-party-frames" || t.behaviour === "drop-error-if-exclusively-contains-third-party-frames") return null;
                    e.tags = {
                        ...e.tags,
                        third_party_code: !0
                    };
                }
            }
            return e;
        }
    }), uwo = "_sentryBundlerPluginAppKey:";

}
