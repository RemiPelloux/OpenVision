import { a } from "./business-error.js";
import { Lt, xt } from "./commerce-provider.js";
import { useSyncExternalStore as AD } from "./react-runtime/react/esm-index-production.js";
import { useEffect as CD } from "./react-runtime/react/esm-index-production.js";
import { useMemo as ID } from "./react-runtime/react/esm-index-production.js";
function F2() {
    const { client: e } = xt(), t = ID(()=>e.servesStripePublishableKey ? e.observeStripePublishableKey() : null, [
        e
    ]);
    CD(()=>()=>t?.dispose(), [
        t
    ]);
    const r = t ?? B2, n = AD(r.subscribe, r.getSnapshot, r.getSnapshot);
    return {
        status: n.status,
        publishableKey: n.data,
        error: n.error,
        refresh: r.refresh
    };
}
var V2, B2;
export { B2, F2, V2 };
var __wakaru_kV_initialized = false;
export function kV() {
if (__wakaru_kV_initialized) return;
__wakaru_kV_initialized = true;
"use client";
Lt(), V2 = {
    status: "error",
    isRevalidating: !1
}, B2 = {
    subscribe () {
        return a(function() {}, "unsubscribe");
    },
    getSnapshot () {
        return V2;
    },
    refresh () {
        return Promise.resolve();
    }
}, a(F2, "useStripePublishableKey");

}
