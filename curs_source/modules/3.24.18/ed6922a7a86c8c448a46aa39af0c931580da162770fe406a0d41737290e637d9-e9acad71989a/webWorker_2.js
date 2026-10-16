import { Wce } from "./client.js";
import { wsr } from "./client_2.js";
import { _Z, kg } from "./debug-build_3.js";
import { zr } from "./debug-logger.js";
import { M9n } from "./eventbuilder_2.js";
import { A2o, sqh } from "./globalhandlers.js";
import { Q$, z_ } from "./helpers.js";
import { $u } from "./index_10.js";
import { Xce } from "./qIc.js";
import { mK } from "./scope.js";
import { Pu } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
function AYh(e) {
    e.addEventListener("message", (t)=>{
        d1_(t.data) && (t.stopImmediatePropagation(), t.data._sentryDebugIds && (kg && zr.log("Sentry debugId web worker message received", t.data), z_._sentryDebugIds = {
            ...t.data._sentryDebugIds,
            ...z_._sentryDebugIds
        }), t.data._sentryWorkerError && (kg && zr.log("Sentry worker rejection message received", t.data._sentryWorkerError), l1_(t.data._sentryWorkerError)));
    });
}
function l1_(e) {
    const t = Pu();
    if (!t) return;
    const n = t.getOptions().stackParser, i = t.getOptions().attachStacktrace, r = e.reason, s = Wce(r) ? sqh(r) : wsr(n, r, void 0, i, !0);
    s.level = "error", e.filename && (s.contexts = {
        ...s.contexts,
        worker: {
            filename: e.filename
        }
    }), Xce(s, {
        originalException: r,
        mechanism: {
            handled: !1,
            type: "auto.browser.web_worker.onunhandledrejection"
        }
    }), kg && zr.log("Captured worker unhandled rejection", r);
}
function d1_(e) {
    if (!mK(e) || e._sentryMessage !== !0) return !1;
    const t = "_sentryDebugIds" in e, n = "_sentryWorkerError" in e;
    return !(!t && !n || t && !(mK(e._sentryDebugIds) || e._sentryDebugIds === void 0) || n && !mK(e._sentryWorkerError));
}
var RYh, DYh;
export { AYh, DYh, RYh, d1_, l1_ };
var __wakaru_h1__initialized = false;
export function h1_() {
if (__wakaru_h1__initialized) return;
__wakaru_h1__initialized = true;
x(), $u(), _Z(), M9n(), Q$(), A2o(), RYh = "WebWorker", DYh = ({ worker: e })=>({
        name: RYh,
        setupOnce: ()=>{
            (Array.isArray(e) ? e : [
                e
            ]).forEach((t)=>AYh(t));
        },
        addWorker: (t)=>AYh(t)
    });

}
