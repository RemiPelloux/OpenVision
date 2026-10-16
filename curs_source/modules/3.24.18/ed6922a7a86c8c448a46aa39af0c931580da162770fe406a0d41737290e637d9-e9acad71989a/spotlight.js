import { _pn } from "./HVr.js";
import { _Z, kg } from "./debug-build_3.js";
import { zr } from "./debug-logger.js";
import { $u } from "./index_10.js";
import { XH } from "./index_11.js";
import { CLt } from "./qIc.js";
import { x } from "./tslib.es6.js";
function DS_(e, t) {
    const n = _pn("fetch");
    let i = 0;
    e.on("beforeEnvelope", (r)=>{
        if (i > 3) {
            zr.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", i);
            return;
        }
        n(t, {
            method: "POST",
            body: CLt(r),
            headers: {
                "Content-Type": "application/x-sentry-envelope"
            },
            mode: "cors"
        }).then((s)=>{
            s.status >= 200 && s.status < 400 && (i = 0);
        }, (s)=>{
            i++, zr.error("Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/", s);
        });
    });
}
function MS_(e) {
    return !!(e.type === "transaction" && e.spans && e.contexts?.trace && e.contexts.trace.op === "ui.action.click" && e.spans.some(({ description: t })=>t?.includes("#sentry-spotlight")));
}
var fqh, vqh, _qh;
export { DS_, MS_, _qh, fqh, vqh };
var __wakaru_PS__initialized = false;
export function PS_() {
if (__wakaru_PS__initialized) return;
__wakaru_PS__initialized = true;
x(), $u(), XH(), _Z(), fqh = "SpotlightBrowser", vqh = ((e = {})=>{
    const t = e.sidecarUrl || "http://localhost:8969/stream";
    return {
        name: fqh,
        setup: ()=>{
            kg && zr.log("Using Sidecar URL", t);
        },
        processEvent: (n)=>MS_(n) ? null : n,
        afterAllSetup: (n)=>{
            DS_(n, t);
        }
    };
}), _qh = vqh;

}
