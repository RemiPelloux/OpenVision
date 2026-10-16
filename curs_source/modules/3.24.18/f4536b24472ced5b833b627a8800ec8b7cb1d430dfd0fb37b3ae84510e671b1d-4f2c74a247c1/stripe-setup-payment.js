import { Pe, a, fr } from "./business-error.js";
import { H2, Nt, hp } from "./payment-methods.js";
import { bp, dS, gp, vp, xp } from "./stripe-stub.js";
import { TV, fS } from "./use-stripe-js.js";
import { AV, gS } from "./use-stripe-scope-appearance.js";
import { hr } from "./use-translation.js";
import { Be } from "./useTranslation.js";
import { jsx as $o } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as Bb } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Fragment as HD } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useLayoutEffect as UD } from "./react-runtime/react/esm-index-production.js";
import { useMemo as jD } from "./react-runtime/react/esm-index-production.js";
import { useState as zD } from "./react-runtime/react/esm-index-production.js";
function wS({ className: e, currency: t, onLoadFailed: r }) {
    const n = Nt(), { appearance: o, attachContainer: i } = gS(), { publishableKey: s } = n;
    return s === void 0 ? null : $o(ES, {
        publishableKey: s,
        currency: t,
        appearance: o,
        onLoadFailed: r,
        children: $o(SS, {
            className: e,
            containerRef: i,
            onLoadFailed: r
        })
    }, s);
}
function SS({ className: e, containerRef: t, onLoadFailed: r }) {
    const [n, o] = zD(null), i = Nt(), { add: s } = i, { setCollectorReady: c } = i.actions, l = s.status === "collecting" || s.status === "submitting" || s.status === "requires-action" || s.status === "failed";
    return !l && n !== null && o(null), UD(()=>{
        if (l) return a(function() {
            c(!1);
        }, "unmountedWhileCollecting");
    }, [
        c,
        l
    ]), Bb(HD, {
        children: [
            $o(kS, {
                onTokenizeError: o
            }),
            l ? Bb("div", {
                ref: t,
                className: e,
                children: [
                    $o(gp, {
                        onReady: a(()=>c(!0), "onReady"),
                        onLoadError: a(()=>r?.(), "onLoadError")
                    }),
                    n === null ? null : $o("p", {
                        role: "alert",
                        children: n
                    })
                ]
            }) : null
        ]
    });
}
function ES({ children: e, currency: t, appearance: r, publishableKey: n, onLoadFailed: o }) {
    const i = fS(n, o), s = {
        mode: "setup",
        paymentMethodCreation: "manual",
        paymentMethodTypes: [
            "card"
        ],
        loader: "never",
        appearance: r
    };
    return t !== void 0 && (s.currency = t.toLowerCase()), $o(xp, {
        stripe: i,
        options: s,
        children: e
    });
}
function kS({ onTokenizeError: e }) {
    const t = bp(), r = vp(), { t: n } = Be(), o = jD(()=>t === null ? null : {
            async resolvePaymentMethod () {
                if (e(null), r === null) return "invalid";
                const i = await r.submit();
                if (i.error !== void 0) return i.error.type !== "validation_error" && e(i.error.message ?? n("Something went wrong. Try again.")), "invalid";
                const s = await t.createPaymentMethod({
                    elements: r
                });
                return s.error !== void 0 ? (s.error.type !== "validation_error" && e(s.error.message ?? n("Something went wrong. Try again.")), "invalid") : {
                    paymentMethodId: s.paymentMethod.id
                };
            },
            async handleAction (i) {
                if (i.kind !== "stripe-setup-action") throw new Error(`Stripe setup handler cannot handle a '${i.kind}' action`);
                const { error: s } = await t.handleNextAction({
                    clientSecret: i.clientSecret
                });
                if (s !== void 0) throw new Pe("SETUP_ACTION_FAILED", s.message ?? "Stripe setup action failed", {
                    retriable: !0
                });
            }
        }, [
        r,
        e,
        t,
        n
    ]);
    return H2(o), null;
}
export { ES, SS, kS, wS };
var __wakaru_RV_initialized = false;
export function RV() {
if (__wakaru_RV_initialized) return;
__wakaru_RV_initialized = true;
"use client";
TV(), AV(), hp(), hr(), fr(), dS(), a(wS, "StripeSetupPayment"), a(SS, "StripeSetupCollection"), a(ES, "LoadedStripeElements"), a(kS, "RegisterStripeAsSetupHandler");

}
