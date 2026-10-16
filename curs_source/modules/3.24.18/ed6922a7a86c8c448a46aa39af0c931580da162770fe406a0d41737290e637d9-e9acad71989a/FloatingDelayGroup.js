import { Ty } from "./createBaseUIEventDetails.js";
import { g_ } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
import { vds } from "./useHoverShared.js";
import { af } from "./useIsoLayoutEffect.js";
import { A3, Rfe } from "./useTimeout.js";
import * as lCe from "./react-runtime/react/esm-index-production.js";
var g0i;
export { g0i };
var __wakaru_vil_initialized = false;
export function vil() {
if (__wakaru_vil_initialized) return;
__wakaru_vil_initialized = true;
x(), A3(), af(), vds(), Ty(), g_(), g0i = lCe.createContext({
    hasProvider: !1,
    timeoutMs: 0,
    delayRef: {
        current: 0
    },
    initialDelayRef: {
        current: 0
    },
    timeout: new Rfe,
    currentIdRef: {
        current: null
    },
    currentContextRef: {
        current: null
    }
}), process.env.NODE_ENV !== "production" && (g0i.displayName = "FloatingDelayGroupContext");

}
