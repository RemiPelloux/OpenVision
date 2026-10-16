import { a } from "./business-error.js";
import { Lt, xt } from "./commerce-provider.js";
import { useEffect as ED } from "./react-runtime/react/esm-index-production.js";
import { useSyncExternalStore as TD } from "./react-runtime/react/esm-index-production.js";
import { useMemo as kD } from "./react-runtime/react/esm-index-production.js";
function M2(e) {
    return ()=>{};
}
function sp() {
    return D2;
}
function O2() {
    return Promise.resolve();
}
function cp(e) {
    const { client: t } = xt(), r = t.capabilities.authed, n = e?.provider, o = e?.teamId, i = kD(()=>!r || n === void 0 ? null : t.observePaymentMethods(o === void 0 ? {
            provider: n
        } : {
            provider: n,
            teamId: o
        }), [
        r,
        t,
        n,
        o
    ]);
    ED(()=>()=>i?.dispose(), [
        i
    ]);
    const s = TD(i === null ? M2 : i.subscribe, i === null ? sp : i.getSnapshot, i === null ? sp : i.getSnapshot);
    return {
        status: s.status,
        paymentMethods: s.data?.paymentMethods ?? lp,
        isRevalidating: s.isRevalidating,
        error: s.error,
        refresh: i?.refresh ?? O2
    };
}
var lp, D2;
export { D2, M2, O2, cp, lp, sp };
var __wakaru_L2_initialized = false;
export function L2() {
if (__wakaru_L2_initialized) return;
__wakaru_L2_initialized = true;
"use client";
Lt(), lp = [], D2 = {
    status: "success",
    data: {
        paymentMethods: lp
    },
    isRevalidating: !1
}, a(M2, "subscribeIdle"), a(sp, "getIdleSnapshot"), a(O2, "refreshIdle"), a(cp, "usePaymentMethods");

}
