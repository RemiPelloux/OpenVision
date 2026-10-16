import { Pe, a, fr } from "./business-error.js";
import { Lt, xt } from "./commerce-provider.js";
import { L2, cp } from "./use-payment-methods.js";
import { F2, kV } from "./use-stripe-publishable-key.js";
import { hr } from "./use-translation.js";
import { Be } from "./useTranslation.js";
import { useLayoutEffect as Fb } from "./react-runtime/react/esm-index-production.js";
import { use as ND } from "./react-runtime/react/esm-index-production.js";
import { useMemo as Nu } from "./react-runtime/react/esm-index-production.js";
import { useCallback as PD } from "./react-runtime/react/esm-index-production.js";
import { createContext as RD } from "./react-runtime/react/esm-index-production.js";
import { useEffect as _D } from "./react-runtime/react/esm-index-production.js";
import { jsx as qt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as ro } from "./react-runtime/react/esm-index-production.js";
function U2(e) {
    return Object.hasOwn(pp, e);
}
function mp(e, t) {
    return U2(e.code) ? pp[e.code](t) : e.retriable ? t("Something went wrong. Try again.") : t("This change couldn\u2019t be completed.");
}
function kc(e, t) {
    if (e.paymentType === "sepa_debit" && e.last4 !== void 0) return `${t("SEPA Direct Debit")} \u2022\u2022\u2022\u2022 ${e.last4}`;
    if (e.displayBrand !== void 0 && e.last4 !== void 0) return `${e.displayBrand.charAt(0).toUpperCase() + e.displayBrand.slice(1)} \u2022\u2022\u2022\u2022 ${e.last4}`;
    const r = iS[e.paymentType];
    return r !== void 0 ? r(t) : e.paymentType;
}
function up(e, t = Date.now()) {
    return e.expMonth === void 0 || e.expYear === void 0 ? !1 : t >= Date.UTC(e.expYear, e.expMonth, 1);
}
function j2(e, t) {
    if (e.expMonth === void 0 || e.expYear === void 0) return;
    const r = `${String(e.expMonth).padStart(2, "0")}/${e.expYear}`;
    return up(e) ? t("Expired {expiry}", {
        expiry: r
    }) : t("Expires {expiry}", {
        expiry: r
    });
}
function z2() {
    let e = null;
    const t = new Set;
    return {
        handle: a(()=>e, "handle"),
        whenRegistered (r) {
            if (e !== null) return Promise.resolve(e);
            const { promise: n, resolve: o } = Promise.withResolvers(), i = setTimeout(()=>{
                t.delete(s), o(null);
            }, r);
            function s(c) {
                clearTimeout(i), o(c);
            }
            return a(s, "settle"), t.add(s), n;
        },
        register (r) {
            if (e !== null && e !== r) throw new Error("a PaymentMethodsProvider supports one registered setup handler at a time");
            e = r;
            for (const n of t)n(r);
            return t.clear(), a(function() {
                e === r && (e = null);
            }, "unregister");
        }
    };
}
function dp() {
    const e = ND(fp);
    if (!e) throw new Error("payment method parts require a <PaymentMethodsProvider> ancestor");
    return e;
}
function Nt() {
    return dp().management;
}
function H2(e) {
    const { setupHandler: t } = dp();
    _D(()=>e === null ? void 0 : t.register(e), [
        t,
        e
    ]);
}
function G2() {
    let e = {
        add: {
            status: "idle"
        },
        attempts: {},
        mounted: !1,
        onFixed: void 0,
        onRosterChange: void 0
    };
    return {
        pending: new Set,
        read: a(()=>e, "read"),
        write (t) {
            e = {
                ...e,
                ...t
            };
        }
    };
}
function $2(e) {
    const { client: t, provider: r, teamId: n, mode: o, canAdd: i, refresh: s, setupHandler: c, track: l, store: m, setPendingCount: u, setAttempt: d, setAdd: p, setAddMakeDefault: h, setCollectorReady: f } = e, { pending: v } = m;
    function x(E) {
        return !m.read().mounted || v.size > 0 ? !1 : (v.add(E), u(v.size), !0);
    }
    a(x, "begin");
    function g(E) {
        v.delete(E), m.read().mounted && u(v.size);
    }
    a(g, "finish");
    async function y(E, S, A) {
        let C = await E(), P = 0;
        for(; C.status === "requires-action";){
            const O = P >= cS ? null : await c.whenRegistered(sS);
            if (O === null) throw new Pe("SETUP_ACTION_UNAVAILABLE", "no collector can complete the verification challenge", {
                retriable: !1
            });
            P += 1, l(S, "requires-action"), A(), await O.handleAction(C.action), C = await E();
        }
        return C.paymentMethod;
    }
    a(y, "settleSetup");
    function w(E) {
        try {
            m.read().onFixed?.(E);
        } catch (S) {
            console.error("[commerce-ui] onFixed threw", S);
        }
    }
    a(w, "notifyFixed");
    async function b() {
        if (t.paymentMethodActions.sync) {
            l("sync", "started");
            try {
                await t.syncPaymentInfo({
                    teamId: n
                }), l("sync", "completed");
            } catch (E) {
                l("sync", "failed", E instanceof Pe ? E.code : ia.code);
            }
        }
        try {
            m.read().onRosterChange?.();
        } catch (E) {
            console.error("[commerce-ui] onRosterChange threw", E);
        }
    }
    a(b, "syncPaymentInfo");
    async function T(E, S, A) {
        const C = `${S}:${E}`;
        if (!x(C)) return !1;
        d(E, {
            kind: S,
            status: "submitting"
        }), l(S, "started");
        try {
            await A();
        } catch (P) {
            const O = P instanceof Pe ? {
                code: P.code,
                retriable: P.retriable
            } : ia;
            return l(S, "failed", O.code), d(E, {
                kind: S,
                status: "failed",
                failure: O
            }), !1;
        } finally{
            g(C);
        }
        return l(S, "completed"), d(E, void 0), !0;
    }
    a(T, "runRowMutation");
    async function R(E, S) {
        if (o === "fix") {
            d(E.paymentMethodId, {
                kind: "fix",
                status: "fixed"
            }), w(E);
            return;
        }
        if (!S || E.isDefault) return;
        const A = a(()=>t.setDefaultPaymentMethod({
                provider: r,
                teamId: n,
                paymentMethodId: E.paymentMethodId,
                idempotencyKey: crypto.randomUUID()
            }), "setDefault");
        if (m.read().mounted) {
            await T(E.paymentMethodId, "set-default", A);
            return;
        }
        l("set-default", "started");
        try {
            await A(), l("set-default", "completed");
        } catch (C) {
            l("set-default", "failed", C instanceof Pe ? C.code : ia.code);
        }
    }
    return a(R, "settleAdded"), {
        refresh: s,
        openRemove (E) {
            v.size > 0 || d(E, {
                kind: "remove",
                status: "confirming"
            });
        },
        cancelRemove (E) {
            const S = m.read().attempts[E];
            S?.kind === "remove" && S.status !== "submitting" && d(E, void 0);
        },
        async confirmRemove (E) {
            const S = m.read().attempts[E];
            S?.kind !== "remove" || S.status === "submitting" || await T(E, "remove", ()=>t.deletePaymentMethod({
                    provider: r,
                    teamId: n,
                    paymentMethodId: E,
                    idempotencyKey: crypto.randomUUID()
                })) && await b();
        },
        async setDefault (E) {
            await T(E, "set-default", ()=>t.setDefaultPaymentMethod({
                    provider: r,
                    teamId: n,
                    paymentMethodId: E,
                    idempotencyKey: crypto.randomUUID()
                })) && await b();
        },
        async chooseForRenewal (E) {
            const S = `fix:${E}`;
            if (!x(S)) return;
            d(E, {
                kind: "fix",
                status: "submitting"
            }), l("fix", "started");
            const A = crypto.randomUUID();
            let C;
            try {
                C = await y(()=>t.fixPaymentMethod({
                        provider: r,
                        teamId: n,
                        paymentMethodId: E,
                        idempotencyKey: A
                    }), "fix", ()=>d(E, {
                        kind: "fix",
                        status: "requires-action"
                    }));
            } catch (P) {
                const O = P instanceof Pe ? {
                    code: P.code,
                    retriable: P.retriable
                } : ia;
                l("fix", "failed", O.code), d(E, {
                    kind: "fix",
                    status: "failed",
                    failure: O
                });
                return;
            } finally{
                g(S);
            }
            l("fix", "completed"), d(E, {
                kind: "fix",
                status: "fixed"
            }), w(C), await b();
        },
        dismissAttempt (E) {
            const S = m.read().attempts[E];
            S !== void 0 && S.status !== "submitting" && d(E, void 0);
        },
        beginAdd () {
            !i || v.size > 0 || (f(!1), p({
                status: "collecting",
                makeDefault: !1
            }));
        },
        cancelAdd () {
            const { add: E } = m.read();
            E.status === "submitting" || E.status === "requires-action" || (f(!1), p({
                status: "idle"
            }));
        },
        setAddMakeDefault: h,
        async submitAdd () {
            const { add: E } = m.read();
            if (E.status !== "collecting" && E.status !== "failed") return;
            const S = c.handle();
            if (S === null || !x("add")) return;
            const { makeDefault: A } = E, C = crypto.randomUUID();
            p({
                status: "submitting",
                idempotencyKey: C,
                makeDefault: A
            });
            const P = o === "fix" ? "fix" : "add";
            let O = !1, M;
            try {
                const F = await S.resolvePaymentMethod();
                if (F === "invalid") {
                    m.read().mounted && p({
                        status: "collecting",
                        makeDefault: A
                    });
                    return;
                }
                l(P, "started"), O = !0;
                const K = {
                    provider: r,
                    teamId: n,
                    paymentMethodId: F.paymentMethodId,
                    idempotencyKey: C
                };
                M = await y(()=>o === "fix" ? t.fixPaymentMethod(K) : t.savePaymentMethod(K), P, ()=>{
                    m.read().mounted && p({
                        status: "requires-action",
                        idempotencyKey: C,
                        makeDefault: A
                    });
                });
            } catch (F) {
                const K = F instanceof Pe ? {
                    code: F.code,
                    retriable: F.retriable
                } : ia;
                O || l(P, "started"), l(P, "failed", K.code), m.read().mounted && p({
                    status: "failed",
                    makeDefault: A,
                    failure: K
                });
                return;
            } finally{
                g("add");
            }
            l(P, "completed"), m.read().mounted && (f(!1), p({
                status: "added",
                paymentMethod: M
            })), await R(M, A), await b();
        },
        setCollectorReady: f
    };
}
function K2({ children: e, provider: t = "STRIPE", teamId: r, mode: n = "manage", onFixed: o, onRosterChange: i, stripePublishableKey: s }) {
    const { client: c, tracker: l, stripePublishableKey: m } = xt(), u = F2(), d = u.publishableKey ?? (u.status === "error" ? s ?? m : void 0), [p, h] = ro(null), f = p?.client === c ? p.publishableKey : void 0;
    f === void 0 && d !== void 0 && h({
        client: c,
        publishableKey: d
    });
    const v = f ?? d, x = cp({
        provider: t,
        teamId: r
    }), [g, y] = ro({}), [w, b] = ro({
        status: "idle"
    }), [T, R] = ro(!1), [E, S] = ro(0), [A] = ro(z2), [C] = ro(G2);
    Fb(()=>{
        C.write({
            add: w,
            attempts: g,
            onFixed: o,
            onRosterChange: i
        });
    }), Fb(()=>(C.write({
            mounted: !0
        }), ()=>{
            C.write({
                mounted: !1
            });
        }), [
        C
    ]);
    const P = new Set(x.paymentMethods.map((j)=>j.paymentMethodId)), O = Object.keys(g).filter((j)=>!P.has(j) && g[j]?.status !== "submitting");
    O.length > 0 && x.status === "success" && y((j)=>Object.fromEntries(Object.entries(j).filter(([oe])=>!O.includes(oe))));
    const M = c.paymentMethodActions, F = n === "fix" ? M.fix : M.save, K = F && v !== void 0;
    let re = "ready";
    v === void 0 && (u.status === "loading" ? re = "loading" : c.servesStripePublishableKey ? re = "unavailable" : re = "unconfigured");
    const te = M.fix && (v !== void 0 || u.status !== "loading"), { refresh: J } = x, { refresh: $ } = u, ee = PD(()=>Promise.all([
            J(),
            $()
        ]).then(a(function() {}, "discardResults")), [
        J,
        $
    ]), W = Nu(()=>$2({
            canAdd: K,
            client: c,
            mode: n,
            provider: t,
            refresh: ee,
            setAdd: b,
            setAddMakeDefault (j) {
                b((oe)=>oe.status === "collecting" || oe.status === "failed" ? {
                        ...oe,
                        makeDefault: j
                    } : oe);
            },
            setAttempt (j, oe) {
                C.read().mounted && y((ce)=>{
                    const ve = {
                        ...ce
                    };
                    return oe === void 0 ? delete ve[j] : ve[j] = oe, ve;
                });
            },
            setCollectorReady: R,
            setPendingCount: S,
            setupHandler: A,
            store: C,
            teamId: r,
            track (j, oe, ce) {
                l.track({
                    name: "payment_method_action",
                    action: j,
                    status: oe,
                    errorCode: ce,
                    billingPlatform: t
                });
            }
        }), [
        K,
        c,
        n,
        t,
        ee,
        b,
        y,
        R,
        S,
        A,
        C,
        r,
        l
    ]), ne = Nu(()=>({
            actions: W,
            add: w,
            attempts: g,
            busy: E > 0,
            canAdd: K,
            canFix: te,
            canRemove: M.delete,
            canSetDefault: M.setDefault,
            canVault: F,
            collectorReady: T,
            error: x.error,
            isRevalidating: x.isRevalidating,
            mode: n,
            paymentMethods: x.paymentMethods,
            provider: t,
            publishableKey: v,
            publishableKeyStatus: re,
            status: x.status,
            teamId: r
        }), [
        M.delete,
        M.setDefault,
        W,
        w,
        g,
        K,
        te,
        T,
        n,
        E,
        t,
        v,
        re,
        x.error,
        F,
        x.isRevalidating,
        x.paymentMethods,
        x.status,
        r
    ]), xe = Nu(()=>({
            management: ne,
            setupHandler: A
        }), [
        ne,
        A
    ]);
    return qt(fp.Provider, {
        value: xe,
        children: e
    });
}
function Kr({ children: e, className: t, disabled: r, onClick: n, render: o }) {
    return o !== void 0 ? o({
        children: e,
        disabled: r,
        onClick: n,
        type: "button"
    }) : qt("button", {
        type: "button",
        className: t,
        disabled: r,
        onClick: n,
        children: e
    });
}
function W2({ paymentMethodId: e, className: t, render: r, children: n }) {
    const { t: o } = Be(), i = Nt(), s = i.paymentMethods.find((l)=>l.paymentMethodId === e), c = i.attempts[e];
    return !i.canSetDefault || i.mode === "fix" || s === void 0 || s.isDefault || c?.kind === "remove" ? null : qt(Kr, {
        className: t,
        disabled: i.busy,
        onClick: a(()=>void i.actions.setDefault(e), "onClick"),
        render: r,
        children: n ?? o("Set as default")
    });
}
function Y2(e, t) {
    return t.canRemove && !e.isDefault && t.paymentMethods.length > 1;
}
function X2({ paymentMethodId: e, className: t, render: r, children: n }) {
    const { t: o } = Be(), i = Nt(), s = i.paymentMethods.find((l)=>l.paymentMethodId === e), c = i.attempts[e];
    return s === void 0 || !Y2(s, i) || c?.kind === "remove" || c?.status === "submitting" || c?.status === "requires-action" ? null : qt(Kr, {
        className: t,
        disabled: i.busy,
        onClick: a(()=>i.actions.openRemove(e), "onClick"),
        render: r,
        children: n ?? o("Remove")
    });
}
function Z2({ paymentMethodId: e, className: t, render: r, children: n }) {
    const { t: o } = Be(), i = Nt(), s = i.attempts[e];
    return s?.kind !== "remove" || s.status === "failed" ? null : qt(Kr, {
        className: t,
        disabled: i.busy,
        onClick: a(()=>void i.actions.confirmRemove(e), "onClick"),
        render: r,
        children: n ?? o("Confirm removal")
    });
}
function q2({ paymentMethodId: e, className: t, render: r, children: n }) {
    const { t: o } = Be(), i = Nt(), s = i.attempts[e];
    return s?.kind !== "remove" || s.status === "submitting" ? null : qt(Kr, {
        className: t,
        onClick: a(()=>i.actions.cancelRemove(e), "onClick"),
        render: r,
        children: n ?? (s.status === "failed" ? o("Done") : o("Keep"))
    });
}
function Q2({ paymentMethodId: e, className: t, render: r, children: n }) {
    const { t: o } = Be(), i = Nt(), s = i.attempts[e];
    return s?.status !== "failed" || s.kind === "remove" ? null : qt(Kr, {
        className: t,
        onClick: a(()=>i.actions.dismissAttempt(e), "onClick"),
        render: r,
        children: n ?? o("Done")
    });
}
function J2({ paymentMethodId: e, className: t, render: r, children: n }) {
    const { t: o } = Be(), i = Nt(), s = i.attempts[e];
    if (i.mode !== "fix" || !i.canFix || s !== void 0 && s.kind !== "fix" || s?.status === "fixed") return null;
    const c = s?.status === "submitting" || s?.status === "requires-action";
    return qt(Kr, {
        className: t,
        disabled: i.busy && !c,
        onClick: a(()=>void i.actions.chooseForRenewal(e), "onClick"),
        render: r,
        children: n ?? (s?.status === "failed" ? o("Try again") : o("Use this card"))
    });
}
function eS({ className: e, render: t, children: r }) {
    const { t: n } = Be(), o = Nt();
    return !o.canAdd || o.add.status !== "idle" && o.add.status !== "added" ? null : qt(Kr, {
        className: e,
        disabled: o.busy,
        onClick: o.actions.beginAdd,
        render: t,
        children: r ?? n("Add payment method")
    });
}
function tS({ className: e, render: t, children: r }) {
    const { t: n } = Be(), o = Nt(), { add: i } = o;
    if (i.status === "idle" || i.status === "added") return null;
    const s = i.status === "submitting" || i.status === "requires-action";
    return qt(Kr, {
        className: e,
        disabled: s || !o.collectorReady || o.busy,
        onClick: a(()=>void o.actions.submitAdd(), "onClick"),
        render: t,
        children: r ?? (i.status === "failed" ? n("Try again") : o.mode === "fix" ? n("Use this card") : n("Save card"))
    });
}
function rS({ className: e, render: t, children: r }) {
    const { t: n } = Be(), o = Nt(), { add: i } = o;
    return i.status === "idle" || i.status === "added" ? null : qt(Kr, {
        className: e,
        disabled: i.status === "submitting" || i.status === "requires-action",
        onClick: o.actions.cancelAdd,
        render: t,
        children: r ?? n("Cancel")
    });
}
function nS({ className: e }) {
    const { t } = Be(), { add: r } = Nt();
    return r.status !== "failed" ? null : qt("p", {
        role: "alert",
        className: e,
        children: mp(r.failure, t)
    });
}
function oS({ paymentMethodId: e, className: t }) {
    const { t: r } = Be(), { attempts: n } = Nt(), o = n[e];
    return o?.status !== "failed" ? null : qt("p", {
        role: "alert",
        className: t,
        children: mp(o.failure, r)
    });
}
function aS({ className: e }) {
    const { t } = Be(), r = Nt();
    if (!r.busy) return null;
    const n = r.add.status === "submitting" || r.add.status === "requires-action";
    return qt("p", {
        role: "status",
        className: e,
        children: t(n ? "Saving your payment method." : "Updating your payment methods.")
    });
}
var pp, iS, sS, fp, cS, ia;
export { $2, G2, H2, J2, K2, Kr, Nt, Q2, U2, W2, X2, Y2, Z2, aS, cS, dp, eS, fp, iS, ia, j2, kc, mp, nS, oS, pp, q2, rS, sS, tS, up, z2 };
var __wakaru_hp_initialized = false;
export function hp() {
if (__wakaru_hp_initialized) return;
__wakaru_hp_initialized = true;
"use client";
Lt(), L2(), kV(), hr(), fr(), pp = {
    PAYMENT_METHOD_ALREADY_ATTACHED: a((e)=>e("This card can't be used here. Try a different card."), "PAYMENT_METHOD_ALREADY_ATTACHED"),
    PAYMENT_METHOD_IN_USE: a((e)=>e("This payment method is in use by a subscription and can\u2019t be removed."), "PAYMENT_METHOD_IN_USE"),
    PAYMENT_METHOD_IS_DEFAULT: a((e)=>e("Set another payment method as default before removing this one."), "PAYMENT_METHOD_IS_DEFAULT"),
    PAYMENT_METHOD_NOT_FOUND: a((e)=>e("This payment method is no longer saved."), "PAYMENT_METHOD_NOT_FOUND"),
    PAYMENT_METHOD_NOT_VERIFIED: a((e)=>e("This card couldn't be verified. Try a different card."), "PAYMENT_METHOD_NOT_VERIFIED"),
    PAYMENT_METHOD_REJECTED: a((e)=>e("Your payment method was declined."), "PAYMENT_METHOD_REJECTED"),
    SETUP_ACTION_FAILED: a((e)=>e("Card verification failed. Try again or use a different card."), "SETUP_ACTION_FAILED"),
    SETUP_ACTION_UNAVAILABLE: a((e)=>e("This card needs verification, which isn\u2019t available right now."), "SETUP_ACTION_UNAVAILABLE"),
    SUBJECT_REQUIRED: a((e)=>e("Sign in to manage your payment methods."), "SUBJECT_REQUIRED")
}, a(U2, "isPaymentMethodErrorCode"), a(mp, "describePaymentMethodFailure"), iS = {
    kakao_pay: a((e)=>e("Kakao Pay"), "kakao_pay"),
    naver_pay: a((e)=>e("Naver Pay"), "naver_pay")
}, a(kc, "describePaymentMethod"), a(up, "isPaymentMethodExpired"), a(j2, "describePaymentMethodExpiry"), sS = 15e3, a(z2, "createSetupHandlerSlot"), fp = RD(null), a(dp, "usePaymentMethodsContext"), a(Nt, "usePaymentMethodsManagement"), a(H2, "usePaymentMethodSetupHandler"), cS = 1, ia = {
    code: "TRANSPORT_FAILURE",
    retriable: !0
}, a(G2, "createPaymentMethodsStore"), a($2, "createPaymentMethodsActions"), a(K2, "PaymentMethodsProvider"), a(Kr, "PaymentMethodControl"), a(W2, "PaymentMethodSetDefault"), a(Y2, "isPaymentMethodRemovable"), a(X2, "PaymentMethodRemove"), a(Z2, "PaymentMethodRemoveConfirm"), a(q2, "PaymentMethodRemoveCancel"), a(Q2, "PaymentMethodAttemptDismiss"), a(J2, "PaymentMethodUseForRenewal"), a(eS, "PaymentMethodAdd"), a(tS, "PaymentMethodAddSubmit"), a(rS, "PaymentMethodAddCancel"), a(nS, "PaymentMethodAddError"), a(oS, "PaymentMethodRowError"), a(aS, "PaymentMethodsBusy");

}
