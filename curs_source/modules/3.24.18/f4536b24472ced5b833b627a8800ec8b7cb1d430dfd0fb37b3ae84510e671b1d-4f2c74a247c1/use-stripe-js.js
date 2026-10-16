import { a } from "./business-error.js";
import { dS } from "./stripe-stub.js";
import { useRef as MD } from "./react-runtime/react/esm-index-production.js";
import { useState as OD } from "./react-runtime/react/esm-index-production.js";
import { useEffect as Vb } from "./react-runtime/react/esm-index-production.js";
var lS = {};
async function pS(e) {
    try {
        const { loadStripe: t } = await Promise.resolve().then(()=>(dS(), lS));
        return await t(e);
    } catch (t) {
        return console.error("[commerce-ui] Stripe.js failed to load", t), null;
    }
}
function fS(e, t) {
    const [r] = OD(()=>pS(e)), n = MD(t);
    return Vb(()=>{
        n.current = t;
    }), Vb(()=>{
        let o = !0;
        return r.then(a(function(s) {
            s === null && o && n.current?.();
        }, "reportMissingStripe")), a(function() {
            o = !1;
        }, "unmount");
    }, [
        r
    ]), r;
}
export { fS, lS, pS };
var __wakaru_TV_initialized = false;
export function TV() {
if (__wakaru_TV_initialized) return;
__wakaru_TV_initialized = true;
"use client";
a(pS, "loadStripeJs"), a(fS, "useStripeJs");

}
