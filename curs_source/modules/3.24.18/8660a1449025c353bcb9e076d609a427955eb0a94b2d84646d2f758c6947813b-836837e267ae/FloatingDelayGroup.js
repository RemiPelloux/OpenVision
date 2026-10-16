import { VS } from "./createBaseUIEventDetails.js";
import { Zb } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
import { gQo } from "./useHoverShared.js";
import { jv } from "./useIsoLayoutEffect.js";
import { M7, RRe } from "./useTimeout.js";
import * as Q5e from "./react-runtime/react/esm-index-production.js";
var fRr;
export { fRr };
var __wakaru_noh_initialized = false;
export function noh() {
if (__wakaru_noh_initialized) return;
__wakaru_noh_initialized = true;
E(), M7(), jv(), gQo(), VS(), Zb(), fRr = Q5e.createContext({
    hasProvider: !1,
    timeoutMs: 0,
    delayRef: {
        current: 0
    },
    initialDelayRef: {
        current: 0
    },
    timeout: new RRe,
    currentIdRef: {
        current: null
    },
    currentContextRef: {
        current: null
    }
}), process.env.NODE_ENV !== "production" && (fRr.displayName = "FloatingDelayGroupContext");

}
